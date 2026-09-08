import { describe, expect, it, vi } from "vitest";
import { WordTranslationClient } from "./word-translation";

describe("WordTranslationClient", () => {
  it("normalizes a selected word and returns its Chinese definition", async () => {
    const fetcher = vi.fn(function (this: unknown) {
      expect(this).toBeUndefined();
      return Promise.resolve(new Response(JSON.stringify({ unavailable: "得不到的；不可用的" })));
    });
    const client = new WordTranslationClient("/dictionary.json", fetcher);

    await expect(client.translate(" Unavailable. ")).resolves.toBe("得不到的；不可用的");
    expect(fetcher).toHaveBeenCalledOnce();
  });

  it("returns an empty definition when the dictionary is unavailable", async () => {
    const client = new WordTranslationClient("/dictionary.json", async () => new Response(null, { status: 503 }));

    await expect(client.translate("meeting")).resolves.toBe("");
  });

  it("extracts the selected word's meaning from its bilingual sentence", async () => {
    const definitions = {
      unavailable: "得不到的、不能利用的、无用的",
      service: "服务、贡献",
      ten: "十、十个",
      minutes: "会议记录",
      minute: "分、分钟、片刻",
    };
    const client = new WordTranslationClient(
      "/dictionary.json",
      async () => new Response(JSON.stringify(definitions)),
    );

    await expect(client.translateInContext(
      "unavailable",
      "The service was unavailable for ten minutes.",
      "服务中断了十分钟。",
    )).resolves.toBe("中断");

    await expect(client.translateMeanings(
      "unavailable",
      "The service was unavailable for ten minutes.",
      "服务中断了十分钟。",
    )).resolves.toEqual({
      contextualMeaning: "中断",
      dictionaryMeaning: "得不到的、不能利用的、无用的",
    });
  });

  it("falls back to the dictionary definition when sentence alignment is ambiguous", async () => {
    const client = new WordTranslationClient(
      "/dictionary.json",
      async () => new Response(JSON.stringify({ available: "可用的、可获得的" })),
    );

    await expect(client.translateInContext(
      "available",
      "Are you available tomorrow?",
      "你明天方便吗？",
    )).resolves.toBe("可用的、可获得的");

    await expect(client.translateMeanings(
      "available",
      "Are you available tomorrow?",
      "你明天方便吗？",
    )).resolves.toEqual({
      contextualMeaning: "",
      dictionaryMeaning: "可用的、可获得的",
    });
  });

  it("does not request a definition for non-English text", async () => {
    const fetcher = vi.fn();
    const client = new WordTranslationClient("/dictionary.json", fetcher);

    await expect(client.translate("服务中断")).resolves.toBe("");
    expect(fetcher).not.toHaveBeenCalled();
  });
});