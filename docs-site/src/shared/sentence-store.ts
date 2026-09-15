export interface SavedSentence {
  id: string;
  pattern: string;
  examples: string;
  meaning: string;
  createdAt: string;
  updatedAt: string;
}

const sentencesKey = "docs-sentences-v1";
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Stores personal sentence patterns locally in the current browser. */
export class SentenceStore {
  /** @returns The storage key used for sentence records. */
  public get storageKey(): string {
    return sentencesKey;
  }

  /** @returns All valid sentence records. */
  public readAll(): SavedSentence[] {
    try {
      const value = JSON.parse(localStorage.getItem(sentencesKey) ?? "[]") as unknown;
      return Array.isArray(value) ? value.filter(this.isSentence) : [];
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

  /**
   * Deletes one sentence record.
   * @param id Sentence record ID.
   * @returns Updated local records.
   */
  public remove(id: string): SavedSentence[] {
    return this.write(this.readAll().filter((sentence) => sentence.id !== id));
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
      typeof sentence.updatedAt === "string" && Number.isFinite(Date.parse(sentence.updatedAt))
    );
  };

  private write(sentences: SavedSentence[]): SavedSentence[] {
    localStorage.setItem(sentencesKey, JSON.stringify(sentences));
    return sentences;
  }
}