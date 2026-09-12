import { afterEach, describe, expect, it, vi } from "vitest";
import { PronunciationPlayer } from "./pronunciation";

describe("pronunciation", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("removes brackets but preserves meaningful punctuation", () => {
    expect(PronunciationPlayer.normalize("  I (don't) pay （$8.50） [today]  "))
      .toBe("I don't pay $8.50 today");
    const url = new URL(PronunciationPlayer.url("apple（fruit） & pear?"));
    expect(url.origin).toBe("https://dict.youdao.com");
    expect(url.pathname).toBe("/dictvoice");
    expect(url.searchParams.get("audio")).toBe("apple fruit & pear?");
    expect(url.searchParams.get("type")).toBe("2");
    expect(url.searchParams.has("sign")).toBe(false);
  });

  it("tries a recording before Youdao and falls back only on failure", async () => {
    const urls: string[] = [];
    class FakeAudio {
      onended?: () => void;
      onplaying?: () => void;
      onerror?: () => void;
      constructor(private url: string) { urls.push(url); }
      async play() {
        if (this.url === "missing.mp3") throw new Error("missing");
        queueMicrotask(() => this.onended?.());
      }
      pause() {}
      removeAttribute() {}
      load() {}
    }
    vi.stubGlobal("Audio", FakeAudio);
    vi.stubGlobal("document", { querySelectorAll: () => [] });
    vi.stubGlobal("window", {});
    const player = new PronunciationPlayer();
    await player.play("apple", { recording: "recorded.mp3" });
    expect(urls).toEqual(["recorded.mp3"]);
    urls.length = 0;
    await player.play("apple (fruit)", { recording: "missing.mp3" });
    expect(urls).toEqual(["missing.mp3", PronunciationPlayer.url("apple fruit")]);
  });
});