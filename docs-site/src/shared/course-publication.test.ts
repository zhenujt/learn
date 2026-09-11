import { describe, expect, it } from "vitest";
import { CoursePublication } from "./course-publication";

const prefix = "adult-software-english-course/";
const bilingualPaths = [
  `${prefix}README.md`,
  `${prefix}README.zh.md`,
  `${prefix}units/01-hello.md`,
  `${prefix}units/01-hello.zh.md`,
];

describe("CoursePublication", () => {
  it("accepts a bilingual course without requiring other courses to be bilingual", () => {
    expect(() => CoursePublication.validate([...bilingualPaths, "other/lesson.md"])).not.toThrow();
  });

  it("rejects an English-only deployment", () => {
    expect(() => CoursePublication.validate(
      bilingualPaths.filter((documentPath) => !documentPath.endsWith(".zh.md")),
    )).toThrow("README.zh.md");
  });

  it("rejects a missing Chinese lesson even when the Chinese index exists", () => {
    expect(() => CoursePublication.validate(bilingualPaths.slice(0, -1)))
      .toThrow("units/01-hello.zh.md");
  });

  it("rejects a missing course", () => {
    expect(() => CoursePublication.validate([])).toThrow("README.md");
  });
});