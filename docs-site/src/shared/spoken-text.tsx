import { useEffect, useRef, useState } from "react";
import { Volume2, Square } from "lucide-react";
import { pronunciation } from "./pronunciation";
import "./spoken-text.css";

/** Extracts readable English stretches from bilingual learning material. */
export class SpokenEnglish {
  /**
   * Finds English words and sentences, excluding URLs and phonetic transcriptions.
   * @param text Bilingual display text.
   * @returns English stretches suitable for individual playback controls.
   */
  public static segments(text: string): string[] {
    const cleaned = text.replace(/https?:\/\/\S+|\S+@\S+|\/[^/\n]*[əɪʊæɑɔʌɛɜθðʃʒŋˈˌ][^/\n]*\//g, " ");
    return [...cleaned.matchAll(/[A-Za-z0-9$][A-Za-z0-9\t '\u2019",.!?:;()（）\[\]{}$%+&#=_-]*/g)]
      .map((match) => match[0].trim())
      .filter((value) => /[A-Za-z]/.test(value));
  }
}

/**
 * Renders an accessible pronunciation control with source and error feedback.
 * @param props English text and optional pre-generated recording.
 * @returns An inline playback control.
 */
export function SpeechButton({ text, recording, beforePlay }: {
  text: string;
  recording?: string;
  beforePlay?: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");
  const requestRef = useRef(0);
  const activeRef = useRef(false);
  useEffect(() => () => {
    requestRef.current += 1;
    if (activeRef.current) pronunciation.stop();
  }, []);
  const play = async () => {
    const request = ++requestRef.current;
    if (playing) {
      pronunciation.stop();
      activeRef.current = false;
      setPlaying(false);
      setMessage("");
      return;
    }
    beforePlay?.();
    activeRef.current = true;
    setPlaying(true);
    try {
      await pronunciation.play(text, {
        recording,
        onSource: (source) => setMessage(source === "recording" ? "已有录音" : source === "youdao" ? "有道语音" : "设备语音"),
      });
      if (request === requestRef.current) setMessage("");
    } catch (error) {
      if (request === requestRef.current) setMessage(error instanceof Error ? error.message : "无法播放，请重试");
    } finally {
      if (request === requestRef.current) {
        activeRef.current = false;
        setPlaying(false);
      }
    }
  };
  return (
    <span className="speech-control">
      <button type="button" className={`speech-button${playing ? " is-playing" : ""}`}
        aria-label={`${playing ? "停止" : "播放"}：${text}`} aria-pressed={playing}
        title={`${recording ? "已有录音优先" : "有道朗读"}：${text}${message ? ` · ${message}` : ""}`}
        onClick={() => void play()}>
        {playing ? <Square size={13} /> : <Volume2 size={15} />}
      </button>
      {message && <span className={playing ? "speech-sr-only" : "speech-error"} role="status">{message}</span>}
    </span>
  );
}

/**
 * Keeps display text intact and adds controls for its English stretches.
 * @param props Bilingual learning text.
 * @returns Original text with pronunciation controls.
 */
export function SpokenText({ text }: { text: string }) {
  return <>{text}{SpokenEnglish.segments(text).map((segment, index) => <SpeechButton key={`${index}:${segment}`} text={segment} />)}</>;
}