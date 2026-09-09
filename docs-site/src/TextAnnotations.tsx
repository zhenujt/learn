import { useEffect, useRef, useState, type RefObject } from "react";
import { BookPlus, MessageSquarePlus, Trash2, X } from "lucide-react";
import { BasicRichTextEditor } from "./BasicRichTextEditor";
import type { TextAnnotation } from "./shared/annotation-store";
import { richTextToPlainText } from "./shared/rich-text";
import type { SavedWord } from "./shared/word-store";
import { WordTranslationClient } from "./shared/word-translation";

interface SelectionAnchor {
  quote: string;
  prefix: string;
  suffix: string;
  startOffset: number;
  left: number;
  top: number;
  placement: "floating" | "bottom";
  englishExample: string;
  chineseExample: string;
}

interface TextAnnotationsProps {
  containerRef: RefObject<HTMLElement | null>;
  documentPath: string;
  annotations: TextAnnotation[];
  onSave: (annotation: TextAnnotation) => void;
  onDelete: (id: string) => void;
  onAddWord?: (word: Pick<SavedWord, "word" | "meaning" | "example">) => Promise<void>;
}

const contextLength = 40;
const wordTranslation = new WordTranslationClient();

function findAnnotationOffset(text: string, annotation: TextAnnotation): number {
  const offsets: number[] = [];
  let offset = text.indexOf(annotation.quote);
  while (offset >= 0) {
    offsets.push(offset);
    offset = text.indexOf(annotation.quote, offset + 1);
  }
  if (offsets.length === 1) return offsets[0];
  if (offsets.length === 0) return -1;

  let bestOffset = -1;
  let bestScore = -1;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const offset of offsets) {
    const prefix = text.slice(Math.max(0, offset - contextLength), offset);
    const suffix = text.slice(offset + annotation.quote.length, offset + annotation.quote.length + contextLength);
    const score = commonSuffix(prefix, annotation.prefix) + commonPrefix(suffix, annotation.suffix);
    const distance = Math.abs(offset - annotation.startOffset);
    if (score > bestScore || (score === bestScore && distance < bestDistance)) {
      bestOffset = offset;
      bestScore = score;
      bestDistance = distance;
    }
  }
  const availableContext = annotation.prefix.length + annotation.suffix.length;
  return bestScore >= Math.min(8, availableContext) ? bestOffset : -1;
}

function commonPrefix(left: string, right: string): number {
  const length = Math.min(left.length, right.length);
  let index = 0;
  while (index < length && left[index] === right[index]) index += 1;
  return index;
}

function commonSuffix(left: string, right: string): number {
  const length = Math.min(left.length, right.length);
  let index = 0;
  while (index < length && left[left.length - 1 - index] === right[right.length - 1 - index]) index += 1;
  return index;
}

function textNodes(container: HTMLElement): Text[] {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  return nodes;
}

function applyHighlight(container: HTMLElement, annotation: TextAnnotation): void {
  if (container.querySelector(`mark[data-annotation-id="${CSS.escape(annotation.id)}"]`)) return;
  const fullText = container.textContent ?? "";
  const start = findAnnotationOffset(fullText, annotation);
  if (start < 0) return;
  const end = start + annotation.quote.length;
  let offset = 0;
  const nodes = textNodes(container);
  const targetNodes: Text[] = [];
  for (const node of nodes) {
    const nodeStart = offset;
    const nodeEnd = offset + (node.nodeValue?.length ?? 0);
    offset = nodeEnd;
    if (nodeEnd <= start || nodeStart >= end) continue;
    if (node.parentElement?.closest("mark[data-annotation-id]")) return;
    targetNodes.push(node);
  }
  offset = 0;
  for (const node of nodes) {
    const nodeStart = offset;
    const nodeEnd = offset + (node.nodeValue?.length ?? 0);
    offset = nodeEnd;
    if (!targetNodes.includes(node)) continue;
    const range = document.createRange();
    range.setStart(node, Math.max(0, start - nodeStart));
    range.setEnd(node, Math.min(nodeEnd, end) - nodeStart);
    const mark = document.createElement("mark");
    mark.className = "text-annotation-highlight";
    mark.dataset.annotationId = annotation.id;
    mark.title = richTextToPlainText(annotation.note);
    range.surroundContents(mark);
  }
}

/** Adds local and syncable notes to text selected within rendered Markdown. */
export function TextAnnotations(props: TextAnnotationsProps) {
  const [selectionAnchor, setSelectionAnchor] = useState<SelectionAnchor>();
  const [editing, setEditing] = useState<TextAnnotation | "new">();
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [wordFeedback, setWordFeedback] = useState("");
  const [isAddingWord, setIsAddingWord] = useState(false);
  const selectionTimerRef = useRef<number | undefined>(undefined);
  const editingAnchorRef = useRef<SelectionAnchor | undefined>(undefined);

  useEffect(() => {
    const container = props.containerRef.current;
    if (!container) return;
    props.annotations.forEach((annotation) => applyHighlight(container, annotation));

    const openExisting = (event: MouseEvent) => {
      const mark = (event.target as Element).closest<HTMLElement>("mark[data-annotation-id]");
      if (!mark) return;
      const annotation = props.annotations.find((item) => item.id === mark.dataset.annotationId);
      if (!annotation) return;
      event.preventDefault();
      event.stopPropagation();
      setSelectionAnchor(undefined);
      setError("");
      setNote(annotation.note);
      setEditing(annotation);
    };
    container.addEventListener("click", openExisting);
    return () => container.removeEventListener("click", openExisting);
  }, [props.annotations, props.containerRef]);

  useEffect(() => {
    const captureSelection = () => {
      window.clearTimeout(selectionTimerRef.current);
      selectionTimerRef.current = window.setTimeout(() => {
        const container = props.containerRef.current;
        const selection = window.getSelection();
        if (!container || !selection || selection.isCollapsed || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        if (!container.contains(range.commonAncestorContainer)) return;
        const overlapsAnnotation = [...container.querySelectorAll("mark[data-annotation-id]")]
          .some((mark) => range.intersectsNode(mark));
        if (overlapsAnnotation) return;
        const quote = selection.toString().trim();
        if (!quote || quote.length > 500) return;
        const before = document.createRange();
        before.selectNodeContents(container);
        before.setEnd(range.startContainer, range.startOffset);
        const fullText = container.textContent ?? "";
        const startOffset = before.toString().length + selection.toString().indexOf(quote);
        const rect = range.getBoundingClientRect();
        const startElement = range.startContainer instanceof Element
          ? range.startContainer
          : range.startContainer.parentElement;
        const bilingualExample = startElement?.closest(".bilingual-example");
        const englishExample = bilingualExample
          ?.querySelector(".bilingual-example-copy strong")?.textContent?.trim() ?? "";
        const chineseExample = bilingualExample
          ?.querySelector(".bilingual-example-copy > span")?.textContent?.trim() ?? "";
        const placeAtBottom = navigator.maxTouchPoints > 0;
        setSelectionAnchor({
          quote,
          startOffset,
          prefix: fullText.slice(Math.max(0, startOffset - contextLength), startOffset),
          suffix: fullText.slice(startOffset + quote.length, startOffset + quote.length + contextLength),
          left: Math.min(window.innerWidth - 16, Math.max(16, rect.right)),
          top: Math.max(16, rect.top - 8),
          placement: placeAtBottom ? "bottom" : "floating",
          englishExample,
          chineseExample,
        });
      }, 120);
    };
    const dismissSelection = (event: PointerEvent) => {
      const target = event.target as Element;
      if (!target.closest(".selection-action-bar, mark[data-annotation-id]")) {
        setSelectionAnchor(undefined);
      }
    };
    const scrollContainer = props.containerRef.current?.closest(".document-main");
    document.addEventListener("selectionchange", captureSelection);
    document.addEventListener("pointerdown", dismissSelection);
    scrollContainer?.addEventListener("scroll", dismissSelection as EventListener);
    return () => {
      document.removeEventListener("selectionchange", captureSelection);
      document.removeEventListener("pointerdown", dismissSelection);
      scrollContainer?.removeEventListener("scroll", dismissSelection as EventListener);
      window.clearTimeout(selectionTimerRef.current);
    };
  }, [props.containerRef, props.documentPath]);

  const beginCreate = () => {
    editingAnchorRef.current = selectionAnchor;
    setNote("");
    setError("");
    setEditing("new");
    window.getSelection()?.removeAllRanges();
  };

  const addWord = async () => {
    if (!selectionAnchor || !props.onAddWord) return;
    const anchor = selectionAnchor;
    setError("");
    setIsAddingWord(true);
    try {
      const meanings = await wordTranslation.translateMeanings(
        anchor.quote,
        anchor.englishExample,
        anchor.chineseExample,
      );
      await props.onAddWord({
        word: anchor.quote,
        meaning: [
          meanings.contextualMeaning ? `句中意思：${meanings.contextualMeaning}` : "",
          meanings.dictionaryMeaning ? `本身意思：${meanings.dictionaryMeaning}` : "",
          anchor.chineseExample ? `本句语境：${anchor.chineseExample}` : "",
        ].filter(Boolean).join("\n\n"),
        example: [anchor.englishExample, anchor.chineseExample].filter(Boolean).join("\n\n"),
      });
      setSelectionAnchor(undefined);
      window.getSelection()?.removeAllRanges();
      setWordFeedback(`“${anchor.quote}” 已添加到单词本`);
      window.setTimeout(() => setWordFeedback(""), 2600);
    } catch (saveError) {
      setWordFeedback(saveError instanceof Error ? saveError.message : "无法添加到单词本");
      window.setTimeout(() => setWordFeedback(""), 3200);
    } finally {
      setIsAddingWord(false);
    }
  };

  const closeDialog = () => {
    setEditing(undefined);
    setSelectionAnchor(undefined);
    setError("");
    editingAnchorRef.current = undefined;
    window.clearTimeout(selectionTimerRef.current);
    window.getSelection()?.removeAllRanges();
  };

  const save = () => {
    const now = new Date().toISOString();
    const anchor = editingAnchorRef.current;
    try {
      if (editing === "new" && anchor) {
        props.onSave({
          id: crypto.randomUUID(),
          documentPath: props.documentPath,
          quote: anchor.quote,
          prefix: anchor.prefix,
          suffix: anchor.suffix,
          startOffset: anchor.startOffset,
          note: note.trim(),
          createdAt: now,
          updatedAt: now,
        });
      } else if (editing && editing !== "new") {
        props.onSave({ ...editing, note: note.trim(), updatedAt: now });
      }
      closeDialog();
    } catch {
      setError("Could not save this note in browser storage.");
    }
  };

  return (
    <>
      {selectionAnchor && !editing && (
        <div
          className="selection-action-bar"
          data-placement={selectionAnchor.placement}
          style={{ left: selectionAnchor.left, top: selectionAnchor.top }}
          onPointerDown={(event) => event.preventDefault()}
        >
          <button type="button" onClick={beginCreate}>
            <MessageSquarePlus size={16} /> Add note
          </button>
          {props.onAddWord && (
            <button type="button" disabled={isAddingWord} onClick={() => void addWord()}>
              <BookPlus size={16} /> {isAddingWord ? "Adding..." : "Add word"}
            </button>
          )}
        </div>
      )}
      {wordFeedback && <div className="word-save-feedback" role="status">{wordFeedback}</div>}
      {editing && (
        <div className="annotation-backdrop">
          <form className="annotation-dialog" role="dialog" aria-modal="true" aria-label="Text note" onSubmit={(event) => { event.preventDefault(); save(); }}>
            <header>
              <div>
                <span className="pane-label">Text note</span>
                <strong>“{editing === "new" ? editingAnchorRef.current?.quote : editing.quote}”</strong>
              </div>
              <button type="button" className="icon-button" aria-label="Close annotation" onClick={closeDialog}><X size={18} /></button>
            </header>
            <div className="annotation-rich-editor">
              <BasicRichTextEditor
                value={note}
                onChange={setNote}
                ariaLabel="Translation or note"
                placeholder="Translation or note"
                minHeight={260}
                autoFocus
              />
            </div>
            {error && <p className="annotation-error" role="alert">{error}</p>}
            <footer>
              {editing !== "new" && (
                <button type="button" className="delete-annotation" onClick={() => { try { props.onDelete(editing.id); closeDialog(); } catch { setError("Could not delete this note from browser storage."); } }}><Trash2 size={15} /> Delete</button>
              )}
              <button type="button" className="cancel-button" onClick={closeDialog}>Cancel</button>
              <button type="submit" className="save-button">Save note</button>
            </footer>
          </form>
        </div>
      )}
    </>
  );
}