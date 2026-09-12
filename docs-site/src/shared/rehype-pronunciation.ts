import type { Element, Root, RootContent } from "hast";
import { SpokenEnglish } from "./spoken-text";

/**
 * Adds pronunciation markers to learning prose without changing source Markdown.
 * @returns A HAST transformer used after raw HTML parsing.
 */
export function rehypePronunciation() {
  const excluded = new Set(["a", "button", "audio", "video", "script", "style", "svg", "code", "pre"]);
  const blocks = new Set(["p", "li", "td", "th", "blockquote"]);
  const copy = (node: RootContent): string => {
    if (node.type === "text") return node.value;
    if (node.type !== "element" || excluded.has(node.tagName)) return " ";
    return node.children.map(copy).join("");
  };
  const visit = (node: Root | Element) => {
    if (node.type === "element" && excluded.has(node.tagName)) return;
    const containsBlock = node.children.some((child) => child.type === "element" && blocks.has(child.tagName));
    for (const child of [...node.children]) {
      if (child.type === "element") visit(child);
    }
    if (node.type !== "element" || !blocks.has(node.tagName) || containsBlock) return;
    const text = node.children.map(copy).join("");
    for (const segment of SpokenEnglish.segments(text)) {
      node.children.push({ type: "element", tagName: "button", properties: { "data-pronunciation": segment }, children: [] });
    }
  };
  return (tree: Root) => visit(tree);
}