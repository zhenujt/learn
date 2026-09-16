import { beforeEach, describe, expect, it } from "vitest";
import { meetingSentenceSeeds } from "./meeting-sentence-seeds";
import { SentenceStore, type SavedSentence } from "./sentence-store";

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();

  public get length(): number { return this.values.size; }
  public clear(): void { this.values.clear(); }
  public getItem(key: string): string | null { return this.values.get(key) ?? null; }
  public key(index: number): string | null { return [...this.values.keys()][index] ?? null; }
  public removeItem(key: string): void { this.values.delete(key); }
  public setItem(key: string, value: string): void { this.values.set(key, value); }
}

const sentence = (overrides: Partial<SavedSentence> = {}): SavedSentence => ({
  id: "8194d00b-bc71-4d94-88de-da0125eb3477",
  pattern: "Could you ...?",
  examples: "Could you repeat that?",
  meaning: "你能……吗？",
  createdAt: "2026-09-15T00:00:00.000Z",
  updatedAt: "2026-09-15T00:00:00.000Z",
  ...overrides,
});

describe("SentenceStore", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: new MemoryStorage(),
    });
  });

  it("creates and updates a sentence record", () => {
    const store = new SentenceStore();
    store.readAll();
    store.save(sentence());
    store.save(sentence({ meaning: "可以请你……吗？", updatedAt: "2026-09-15T01:00:00.000Z" }));

    expect(store.readAll()).toContainEqual(
      sentence({ meaning: "可以请你……吗？", updatedAt: "2026-09-15T01:00:00.000Z" }),
    );
  });

  it("deletes a sentence record", () => {
    const store = new SentenceStore();
    store.readAll();
    store.save(sentence());

    const deleted = store.remove(sentence().id).find((item) => item.id === sentence().id);

    expect(deleted?.deletedAt).toBeDefined();
    expect(deleted?.updatedAt).toBe(deleted?.deletedAt);
  });

  it("ignores malformed stored records", () => {
    localStorage.setItem("docs-sentences-v1", JSON.stringify([
      sentence(),
      { ...sentence(), id: "not-a-uuid" },
      { ...sentence(), pattern: "" },
    ]));

    const stored = new SentenceStore().readAll();

    expect(stored).toContainEqual(sentence());
    expect(stored).toHaveLength(meetingSentenceSeeds.length);
    expect(localStorage.getItem("docs-sentences-v1")).toBeNull();
    expect(localStorage.getItem("docs-sentences-v2:anonymous")).not.toBeNull();
  });

  it("imports the meeting sentences once without duplicating an existing pattern", () => {
    localStorage.setItem("docs-sentences-v1", JSON.stringify([
      sentence({ pattern: meetingSentenceSeeds[0].pattern }),
    ]));
    const store = new SentenceStore();

    expect(store.readAll()).toHaveLength(meetingSentenceSeeds.length);
    expect(store.readAll()).toHaveLength(meetingSentenceSeeds.length);
  });

  it("does not restore a seeded sentence after it is deleted", () => {
    const store = new SentenceStore();
    const imported = store.readAll();

    store.remove(imported[0].id);

    expect(store.readAll().find((item) => item.id === imported[0].id)?.deletedAt).toBeDefined();
  });

  it("moves anonymous sentences into the authenticated account scope", () => {
    const store = new SentenceStore();
    store.readAll();
    store.save(sentence());

    const scoped = store.setScope("b1000000-0000-4000-8000-000000000001");

    expect(scoped).toContainEqual(sentence());
    expect(store.storageKey).toBe("docs-sentences-v2:user:b1000000-0000-4000-8000-000000000001");
    expect(localStorage.getItem("docs-sentences-v2:anonymous")).toBeNull();
  });

  it("keeps the newest record when cloud and local data conflict", () => {
    const store = new SentenceStore();
    store.readAll();
    store.save(sentence({ meaning: "本地旧版本" }));

    const merged = store.mergeCloud([
      sentence({ meaning: "云端新版本", updatedAt: "2026-09-16T00:00:00.000Z" }),
    ]);

    expect(merged.find((item) => item.id === sentence().id)?.meaning).toBe("云端新版本");
  });
});