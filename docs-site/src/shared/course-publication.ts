export class CoursePublication {
  public static validate(documentPaths: readonly string[]): void {
    const prefix = "adult-software-english-course/";
    const paths = new Set(documentPaths);
    const englishPaths = documentPaths.filter(
      (documentPath) => documentPath.startsWith(prefix) &&
        documentPath.endsWith(".md") && !documentPath.endsWith(".zh.md"),
    );
    const required = new Set([
      `${prefix}README.md`,
      `${prefix}README.zh.md`,
      ...englishPaths.map((documentPath) => documentPath.replace(/\.md$/, ".zh.md")),
    ]);
    const missing = [...required].filter((documentPath) => !paths.has(documentPath));
    if (missing.length) {
      throw new Error(
        `Chinese course documents are missing from the publication: ${missing.join(", ")}. Include the course .zh.md files in the deployment source.`,
      );
    }
  }
}