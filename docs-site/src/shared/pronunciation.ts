export type SpeechSource = "recording" | "youdao" | "device";

/** Coordinates recorded audio, Youdao pronunciation, and device speech. */
export class PronunciationPlayer {
  private request = 0;
  private cancelPlayback?: () => void;

  /**
   * Removes bracket symbols without changing contractions or numeric punctuation.
   * @param text Display text to pronounce.
   * @returns Text suitable for a pronunciation request.
   */
  public static normalize(text: string): string {
    return text.replace(/[()（）\[\]【】{}<>]/g, " ").replace(/\s+/g, " ").trim();
  }

  /**
   * Builds a pronunciation URL without embedding a captured signature.
   * @param text English word or sentence.
   * @returns Encoded Youdao pronunciation URL.
   */
  public static url(text: string): string {
    const params = new URLSearchParams({ audio: this.normalize(text), type: "2" });
    return `https://dict.youdao.com/dictvoice?${params}`;
  }

  /** Stops the current request, including pending fallback playback. */
  public stop(): void {
    this.request += 1;
    this.cancelPlayback?.();
    this.cancelPlayback = undefined;
  }

  /**
   * Plays an existing recording first, then Youdao, then device speech.
   * @param text Word or sentence to pronounce.
   * @param options Optional recording, language, and source feedback.
   * @returns Resolves when playback ends or is cancelled; rejects if all sources fail.
   */
  public async play(text: string, options: {
    recording?: string;
    language?: string;
    onSource?: (source: SpeechSource) => void;
  } = {}): Promise<void> {
    this.stop();
    const request = this.request;
    const normalized = PronunciationPlayer.normalize(text);
    if (!normalized) throw new Error("没有可朗读的文本");
    document.querySelectorAll("audio, video").forEach((element) => (element as HTMLMediaElement).pause());
    window.speechSynthesis?.cancel();
    const sources: { url: string; source: SpeechSource }[] = [];
    if (options.recording) sources.push({ url: options.recording, source: "recording" });
    if (!options.language || options.language.startsWith("en")) {
      sources.push({ url: PronunciationPlayer.url(normalized), source: "youdao" });
    }
    for (const source of sources) {
      if (request !== this.request) return;
      options.onSource?.(source.source);
      try {
        await this.audio(source.url);
        return;
      } catch {
        if (request !== this.request) return;
      }
    }
    if (request !== this.request) return;
    options.onSource?.("device");
    await this.device(normalized, options.language ?? "en-US");
  }

  private audio(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      let settled = false;
      const finish = (error?: Error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        audio.onplaying = null;
        audio.onended = null;
        audio.onerror = null;
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        this.cancelPlayback = undefined;
        if (error) reject(error);
        else resolve();
      };
      const timeout = setTimeout(() => finish(new Error("音频加载超时")), 8000);
      this.cancelPlayback = () => finish();
      audio.onplaying = () => clearTimeout(timeout);
      audio.onended = () => finish();
      audio.onerror = () => finish(new Error("音频不可用"));
      void audio.play().catch(() => finish(new Error("无法播放音频")));
    });
  }

  private device(text: string, language: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        reject(new Error("有道不可用，设备也不支持语音播放"));
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices.find((voice) => voice.lang === language)
        ?? voices.find((voice) => voice.lang.startsWith(language.slice(0, 2))) ?? null;
      let settled = false;
      const finish = (error?: Error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        utterance.onstart = null;
        utterance.onend = null;
        utterance.onerror = null;
        window.speechSynthesis.cancel();
        this.cancelPlayback = undefined;
        if (error) reject(error);
        else resolve();
      };
      const timeout = setTimeout(() => finish(new Error("设备语音未启动，请检查英文语音设置")), 5000);
      this.cancelPlayback = () => finish();
      utterance.onstart = () => clearTimeout(timeout);
      utterance.onend = () => finish();
      utterance.onerror = () => finish(new Error("有道及设备语音均不可用，请稍后重试"));
      window.speechSynthesis.speak(utterance);
    });
  }
}

export const pronunciation = new PronunciationPlayer();