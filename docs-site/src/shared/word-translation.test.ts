import { describe, expect, it, vi } from "vitest";
import { WordTranslationClient } from "./word-translation";

describe("WordTranslationClient", () => {
  it("normalizes a selected word and returns its Chinese definition", async () => {
    const fetcher = vi.fn(async () => new Response(JSON.stringify({ unavailable: "得不到的；不可用的" })));
    const client = new WordTranslationClient("/dictionary.json", fetcher);

    await expect(client.translate(" Unavailable. ")).resolves.toBe("得不到的；不可用的");
    expect(fetcher).toHaveBeenCalledOnce();
  });

  it("returns an empty definition when the dictionary is unavailable", async () => {
    const client = new WordTranslationClient("/dictionary.json", async () => new Response(null, { status: 503 }));

    await expect(client.translate("meeting")).resolves.toBe("");
  });

  it("does not request a definition for non-English text", async () => {
    const fetcher = vi.fn();
    const client = new WordTranslationClient("/dictionary.json", fetcher);

    await expect(client.translate("服务中断")).resolves.toBe("");
    expect(fetcher).not.toHaveBeenCalled();
  });
});