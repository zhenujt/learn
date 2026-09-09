import { describe, expect, it } from "vitest";
import { DocumentLinkResolver } from "./document-link";

const paths = [
  "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.md",
  "zero-to-work-english/04-工作沟通B1/software-workplace-grammar-guide.zh.md",
  "zero-to-work-english/01-发音入门/05-重音节奏连读语调.md",
  "new-concept-adult-english/README.zh.md",
  "01-foundations/04-three-basic-tenses.zh.md",
];
const resolver = new DocumentLinkResolver(paths);
const currentDocument = "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.zh.md";

describe("DocumentLinkResolver", () => {
  it("resolves a sibling document", () => {
    expect(resolver.resolve("software-workplace-grammar-guide.zh.md", currentDocument))
      .toEqual({ path: "zero-to-work-english/04-工作沟通B1/software-workplace-grammar-guide.zh.md", hash: "" });
  });

  it("resolves parent directory traversal", () => {
    expect(resolver.resolve("../01-发音入门/05-重音节奏连读语调.md", currentDocument))
      .toEqual({ path: "zero-to-work-english/01-发音入门/05-重音节奏连读语调.md", hash: "" });
  });

  it("resolves links that climb above the current section", () => {
    const lesson = "new-concept-adult-english-348/book-1-foundations/001-hello.md";
    expect(resolver.resolve("../../new-concept-adult-english/README.zh.md", lesson))
      .toEqual({ path: "new-concept-adult-english/README.zh.md", hash: "" });
  });

  it("keeps the anchor of a document link", () => {
    expect(resolver.resolve("software-workplace-grammar-guide.zh.md#section-2", currentDocument))
      .toEqual({ path: "zero-to-work-english/04-工作沟通B1/software-workplace-grammar-guide.zh.md", hash: "section-2" });
  });

  it("decodes percent-encoded paths", () => {
    expect(resolver.resolve("..%2F01-%E5%8F%91%E9%9F%B3%E5%85%A5%E9%97%A8%2F05-%E9%87%8D%E9%9F%B3%E8%8A%82%E5%A5%8F%E8%BF%9E%E8%AF%BB%E8%AF%AD%E8%B0%83.md", currentDocument))
      .toEqual({ path: "zero-to-work-english/01-发音入门/05-重音节奏连读语调.md", hash: "" });
  });

  it("ignores external, anchor, and non-Markdown links", () => {
    expect(resolver.resolve("https://example.com/a.md", currentDocument)).toBeUndefined();
    expect(resolver.resolve("mailto:a@b.com", currentDocument)).toBeUndefined();
    expect(resolver.resolve("#practice", currentDocument)).toBeUndefined();
    expect(resolver.resolve("audio/lesson.mp3", currentDocument)).toBeUndefined();
    expect(resolver.resolve(undefined, currentDocument)).toBeUndefined();
  });

  it("ignores links whose target is not a known document", () => {
    expect(resolver.resolve("missing-document.md", currentDocument)).toBeUndefined();
    expect(resolver.resolve("../../../escape.md", currentDocument)).toBeUndefined();
  });
});
