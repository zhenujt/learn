import { beforeEach, describe, expect, it } from "vitest";
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
    store.save(sentence());
    store.save(sentence({ meaning: "可以请你……吗？", updatedAt: "2026-09-15T01:00:00.000Z" }));

    expect(store.readAll()).toEqual([
      sentence({ meaning: "可以请你……吗？", updatedAt: "2026-09-15T01:00:00.000Z" }),
    ]);
  });

  it("deletes a sentence record", () => {
    const store = new SentenceStore();
    store.save(sentence());

    expect(store.remove(sentence().id)).toEqual([]);
    expect(store.readAll()).toEqual([]);
  });

  it("ignores malformed stored records", () => {
    localStorage.setItem("docs-sentences-v1", JSON.stringify([
      sentence(),
      { ...sentence(), id: "not-a-uuid" },
      { ...sentence(), pattern: "" },
    ]));

    expect(new SentenceStore().readAll()).toEqual([sentence()]);
  });
});