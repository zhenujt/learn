/** Rewrites relative Markdown links so they open inside the document viewer. */
export class DocumentLinkResolver {
  private readonly knownPaths: Set<string>;

  /** @param documentPaths Repository-relative paths of every viewable document. */
  public constructor(documentPaths: readonly string[]) {
    this.knownPaths = new Set(documentPaths);
  }

  /**
   * Resolves a Markdown link against the document that contains it.
   * @param href Raw href written in the Markdown source.
   * @param currentDocumentPath Repository-relative path of the containing document.
   * @returns The target document path and optional anchor, or undefined when the link needs no rewrite.
   */
  public resolve(
    href: string | undefined,
    currentDocumentPath: string,
  ): { path: string; hash: string } | undefined {
    if (!href) return undefined;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return undefined;
    if (href.startsWith("#")) return undefined;

    const [rawTarget, ...hashParts] = href.split("#");
    if (!rawTarget.endsWith(".md")) return undefined;

    const target = decodeURIComponent(rawTarget);
    const base = target.startsWith("/")
      ? []
      : currentDocumentPath.split("/").slice(0, -1);
    const segments = target.replace(/^\//, "").split("/");

    const resolved: string[] = [...base];
    for (const segment of segments) {
      if (segment === "." || segment === "") continue;
      if (segment === "..") {
        if (resolved.length === 0) return undefined;
        resolved.pop();
        continue;
      }
      resolved.push(segment);
    }

    const path = resolved.join("/");
    if (!this.knownPaths.has(path)) return undefined;
    return { path, hash: hashParts.join("#") };
  }
}
