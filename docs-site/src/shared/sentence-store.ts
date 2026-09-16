import { meetingSentenceSeeds } from "./meeting-sentence-seeds";

export interface SavedSentence {
  id: string;
  pattern: string;
  examples: string;
  meaning: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

const legacySentencesKey = "docs-sentences-v1";
const sentencesKeyPrefix = "docs-sentences-v2";
const meetingSeedKeyPrefix = "docs-sentences-meeting-seed-v2";
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Stores sentence patterns locally and merges independently updated cloud records. */
export class SentenceStore {
  private scope = "anonymous";

  /** @returns The local-storage key for the active account scope. */
  public get storageKey(): string {
    return `${sentencesKeyPrefix}:${this.scope}`;
  }

  /**
   * Selects the account scope and migrates anonymous sentences after sign-in.
   * @param userId Authenticated user ID, or undefined for anonymous storage.
   * @returns Sentences stored in the selected scope.
   */
  public setScope(userId?: string): SavedSentence[] {
    if (userId && !uuidPattern.test(userId)) throw new Error("The sentence account ID is invalid.");
    const anonymousSentences = userId ? this.readScope("anonymous") : [];
    this.scope = userId ? `user:${userId}` : "anonymous";
    if (userId && anonymousSentences.length > 0) {
      const sentences = this.merge(anonymousSentences, this.readAll());
      this.write(sentences);
      localStorage.removeItem(`${sentencesKeyPrefix}:anonymous`);
      return sentences;
    }
    return this.readAll();
  }

  /** @returns All valid records, including deletion markers needed for sync. */
  public readAll(): SavedSentence[] {
    this.migrateLegacyStorage();
    return this.readScope(this.scope);
  }

  private readScope(scope: string): SavedSentence[] {
    try {
      const storageKey = `${sentencesKeyPrefix}:${scope}`;
      const value = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as unknown;
      const sentences = Array.isArray(value) ? value.filter(this.isSentence) : [];
      return this.importMeetingSentences(sentences, scope);
    } catch {
      return [];
    }
  }

  /**
   * Adds or updates one sentence record.
   * @param sentence Complete sentence record.
   * @returns Updated local records.
   */
  public save(sentence: SavedSentence): SavedSentence[] {
    const sentences = this.readAll();
    const index = sentences.findIndex((item) => item.id === sentence.id);
    if (index >= 0) sentences[index] = sentence;
    else sentences.push(sentence);
    return this.write(sentences);
  }

  /** Soft-deletes a sentence so deletion can synchronize to other devices. */
  public remove(id: string): SavedSentence[] {
    const sentence = this.readAll().find((item) => item.id === id);
    if (!sentence) return this.readAll();
    const now = new Date().toISOString();
    return this.save({ ...sentence, updatedAt: now, deletedAt: now });
  }

  /** Merges cloud records by update time while retaining explicit deletions. */
  public mergeCloud(cloud: SavedSentence[]): SavedSentence[] {
    const sentences = this.merge(cloud, this.readAll());
    this.write(sentences);
    return sentences;
  }

  private readonly isSentence = (value: unknown): value is SavedSentence => {
    if (!value || typeof value !== "object") return false;
    const sentence = value as Partial<SavedSentence>;
    return Boolean(
      typeof sentence.id === "string" && uuidPattern.test(sentence.id) &&
      typeof sentence.pattern === "string" && sentence.pattern.trim() &&
      typeof sentence.examples === "string" &&
      typeof sentence.meaning === "string" &&
      typeof sentence.createdAt === "string" && Number.isFinite(Date.parse(sentence.createdAt)) &&
      typeof sentence.updatedAt === "string" && Number.isFinite(Date.parse(sentence.updatedAt)) &&
      (sentence.deletedAt === undefined || Number.isFinite(Date.parse(sentence.deletedAt)))
    );
  };

  private importMeetingSentences(sentences: SavedSentence[], scope: string): SavedSentence[] {
    const seedKey = `${meetingSeedKeyPrefix}:${scope}`;
    if (localStorage.getItem(seedKey)) return sentences;

    const existingPatterns = new Set(sentences.map((sentence) => sentence.pattern.trim().toLowerCase()));
    const imported = meetingSentenceSeeds.filter(
      (sentence) => !existingPatterns.has(sentence.pattern.trim().toLowerCase()),
    );
    const merged: SavedSentence[] = [...sentences, ...imported];
    localStorage.setItem(`${sentencesKeyPrefix}:${scope}`, JSON.stringify(merged));
    localStorage.setItem(seedKey, "imported");
    return merged;
  }

  private merge(...sources: SavedSentence[][]): SavedSentence[] {
    const merged = new Map<string, SavedSentence>();
    for (const sentences of sources) {
      for (const sentence of sentences) {
        const current = merged.get(sentence.id);
        if (!current || sentence.updatedAt > current.updatedAt) merged.set(sentence.id, sentence);
      }
    }
    return [...merged.values()];
  }

  private migrateLegacyStorage(): void {
    const anonymousKey = `${sentencesKeyPrefix}:anonymous`;
    if (localStorage.getItem(anonymousKey) !== null) return;
    const legacy = localStorage.getItem(legacySentencesKey);
    if (legacy === null) return;
    localStorage.setItem(anonymousKey, legacy);
    localStorage.removeItem(legacySentencesKey);
  }

  private write(sentences: SavedSentence[]): SavedSentence[] {
    localStorage.setItem(this.storageKey, JSON.stringify(sentences));
    return sentences;
  }
}