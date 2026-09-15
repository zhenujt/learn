import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, BookOpen, Check, Edit3, Languages, Plus, Search, Trash2, Volume2, X } from "lucide-react";
import { BasicRichTextEditor, RichTextContent } from "./BasicRichTextEditor";
import { pronunciation } from "./shared/pronunciation";
import { LoginButton } from "./shared/LoginButton";
import { richTextToPlainText } from "./shared/rich-text";
import { SentenceStore, type SavedSentence } from "./shared/sentence-store";

const sentenceStore = new SentenceStore();

interface SentenceDraft {
  pattern: string;
  examples: string;
  meaning: string;
}

interface SpeechFeedback {
  key: string;
  message: string;
  error: boolean;
}

const emptyDraft: SentenceDraft = {
  pattern: "",
  examples: "",
  meaning: "",
};

/** Displays a local-first notebook for reusable sentence patterns and examples. */
export function SentencesPage() {
  const [sentences, setSentences] = useState(() => sentenceStore.readAll());
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState<string>();
  const [formOpen, setFormOpen] = useState(false);
  const [draft, setDraft] = useState<SentenceDraft>(emptyDraft);
  const [speechFeedback, setSpeechFeedback] = useState<SpeechFeedback>();
  const speechRequestRef = useRef(0);

  const activeSentences = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return sentences
      .filter((sentence) => !normalized ||
        `${sentence.pattern} ${richTextToPlainText(sentence.examples)} ${richTextToPlainText(sentence.meaning)}`
          .toLowerCase()
          .includes(normalized))
      .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
  }, [query, sentences]);

  useEffect(() => {
    const refresh = (event: StorageEvent) => {
      if (event.key === sentenceStore.storageKey) setSentences(sentenceStore.readAll());
    };
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);

  useEffect(() => () => {
    speechRequestRef.current += 1;
    pronunciation.stop();
  }, []);

  const openCreate = () => {
    setEditingId(undefined);
    setDraft(emptyDraft);
    setFormOpen(true);
  };

  const openEdit = (sentence: SavedSentence) => {
    setEditingId(sentence.id);
    setDraft({
      pattern: sentence.pattern,
      examples: sentence.examples,
      meaning: sentence.meaning,
    });
    setFormOpen(true);
  };

  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pattern = draft.pattern.trim();
    if (!pattern) return;
    const now = new Date().toISOString();
    const current = editingId ? sentences.find((sentence) => sentence.id === editingId) : undefined;
    const saved: SavedSentence = {
      id: current?.id ?? crypto.randomUUID(),
      pattern,
      examples: draft.examples.trim(),
      meaning: draft.meaning.trim(),
      createdAt: current?.createdAt ?? now,
      updatedAt: now,
    };
    setSentences(sentenceStore.save(saved));
    setFormOpen(false);
  };

  const remove = (sentence: SavedSentence) => {
    if (!window.confirm(`删除句型“${sentence.pattern}”？`)) return;
    setSentences(sentenceStore.remove(sentence.id));
  };

  const speak = async (text: string, language: "en-US" | "zh-CN", key: string) => {
    const spokenText = richTextToPlainText(text);
    if (!spokenText) return;
    pronunciation.stop();
    const request = ++speechRequestRef.current;
    try {
      await pronunciation.play(spokenText, {
        language,
        onSource: (source) => setSpeechFeedback({
          key,
          message: source === "youdao" ? "有道语音" : "设备语音",
          error: false,
        }),
      });
      if (request === speechRequestRef.current) setSpeechFeedback(undefined);
    } catch (error) {
      if (request === speechRequestRef.current) {
        setSpeechFeedback({
          key,
          message: error instanceof Error ? error.message : "无法播放",
          error: true,
        });
      }
    }
  };

  return (
    <div className="words-shell">
      <header className="topbar words-topbar">
        <a className="icon-button" href={import.meta.env.VITE_SITE_BASE_PATH ?? "/"} aria-label="返回目录" title="返回目录">
          <ArrowLeft size={20} />
        </a>
        <a className="brand" href={import.meta.env.VITE_SITE_BASE_PATH ?? "/"}>
          <span className="brand-mark"><BookOpen size={19} /></span>
          <span>Learn <strong>English</strong></span>
        </a>
        <div className="topbar-actions">
          <span className="words-sync-status" role="status">仅保存在此设备</span>
          <LoginButton />
          <button className="save-button" onClick={openCreate}>
            <Plus size={17} /> 添加句型
          </button>
        </div>
      </header>

      <main className="words-main">
        <div className="words-heading">
          <div>
            <span className="words-kicker">PERSONAL SENTENCE BOOK</span>
            <h1>我的句子本</h1>
            <div className="words-heading-meta"><p>{activeSentences.length} 个常用句型</p></div>
          </div>
          <label className="words-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索句型、例句或中文意思" />
            {query && <button onClick={() => setQuery("")} aria-label="清除搜索"><X size={16} /></button>}
          </label>
        </div>

        {activeSentences.length === 0 ? (
          <section className="words-empty">
            <Languages size={32} />
            <h2>{query ? "没有匹配的句型" : "保存第一个常用句型"}</h2>
            <p>{query ? "换一个关键词试试。" : "记录句型、真实例句和中文意思，建立自己的表达库。"}</p>
            {!query && <button className="save-button" onClick={openCreate}><Plus size={17} /> 添加第一个句型</button>}
          </section>
        ) : (
          <div className="word-list">
            {activeSentences.map((sentence) => (
              <article className="word-row" key={sentence.id}>
                <div className="word-primary">
                  <span className="word-field-label">句型</span>
                  <div className="word-title-line">
                    <h2>{sentence.pattern}</h2>
                    <button className={`word-audio${speechFeedback?.key === `${sentence.id}:pattern` && !speechFeedback.error ? " is-speaking" : ""}`} onClick={() => void speak(sentence.pattern, "en-US", `${sentence.id}:pattern`)} aria-label={`朗读 ${sentence.pattern}`} title="有道朗读句型（失败时使用设备语音）">
                      <Volume2 size={17} />
                    </button>
                  </div>
                  {speechFeedback?.key.startsWith(`${sentence.id}:`) && (
                    <p className={`word-speech-status${speechFeedback.error ? " is-error" : ""}`} role="status">{speechFeedback.message}</p>
                  )}
                </div>
                <div className="word-detail">
                  <span className="word-field-label">例句</span>
                  {sentence.examples ? (
                    <div className="word-spoken-line">
                      <RichTextContent value={sentence.examples} />
                      <button className={`word-audio${speechFeedback?.key === `${sentence.id}:examples` && !speechFeedback.error ? " is-speaking" : ""}`} onClick={() => void speak(sentence.examples, "en-US", `${sentence.id}:examples`)} aria-label="朗读例句" title="有道朗读例句（失败时使用设备语音）"><Volume2 size={16} /></button>
                    </div>
                  ) : <p className="word-missing">尚未添加例句</p>}
                </div>
                <div className="word-detail">
                  <span className="word-field-label">中文意思</span>
                  {sentence.meaning ? (
                    <div className="word-spoken-line">
                      <RichTextContent value={sentence.meaning} />
                      <button className={`word-audio${speechFeedback?.key === `${sentence.id}:meaning` && !speechFeedback.error ? " is-speaking" : ""}`} onClick={() => void speak(sentence.meaning, "zh-CN", `${sentence.id}:meaning`)} aria-label="朗读中文意思" title="使用设备语音朗读中文意思"><Volume2 size={16} /></button>
                    </div>
                  ) : <p className="word-missing">尚未添加中文意思</p>}
                </div>
                <div className="word-actions">
                  <button onClick={() => openEdit(sentence)} aria-label={`编辑 ${sentence.pattern}`} title="编辑"><Edit3 size={17} /></button>
                  <button className="danger" onClick={() => remove(sentence)} aria-label={`删除 ${sentence.pattern}`} title="删除"><Trash2 size={17} /></button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {formOpen && (
        <div className="word-dialog-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setFormOpen(false);
        }}>
          <section className="word-dialog" role="dialog" aria-modal="true" aria-labelledby="sentence-dialog-title">
            <div className="word-dialog-header">
              <div><span className="words-kicker">SENTENCE RECORD</span><h2 id="sentence-dialog-title">{editingId ? "编辑句型" : "添加句型"}</h2></div>
              <button className="icon-button" onClick={() => setFormOpen(false)} aria-label="关闭"><X size={20} /></button>
            </div>
            <form onSubmit={save}>
              <label><span className="word-field-heading">常用句型 <small>必填</small></span><input autoFocus required value={draft.pattern} onChange={(event) => setDraft({ ...draft, pattern: event.target.value })} placeholder="例如：Could you ...?" /></label>
              <div className="word-rich-field" role="group" aria-labelledby="sentence-examples-label">
                <span className="word-field-heading" id="sentence-examples-label">英文例句 <small>可添加多句</small></span>
                <BasicRichTextEditor value={draft.examples} onChange={(examples) => setDraft((current) => ({ ...current, examples }))} ariaLabel="英文例句" placeholder="Could you repeat that?" />
              </div>
              <div className="word-rich-field" role="group" aria-labelledby="sentence-meaning-label">
                <span className="word-field-heading" id="sentence-meaning-label">中文意思 <small>可选</small></span>
                <BasicRichTextEditor value={draft.meaning} onChange={(meaning) => setDraft((current) => ({ ...current, meaning }))} ariaLabel="中文意思" placeholder="你能……吗？用于礼貌地提出请求。" />
              </div>
              <div className="word-dialog-actions">
                <button type="button" className="cancel-button" onClick={() => setFormOpen(false)}>取消</button>
                <button type="submit" className="save-button"><Check size={16} /> 保存</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}