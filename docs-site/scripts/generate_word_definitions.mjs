import { createReadStream, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "csv-parse";

class CourseDictionaryBuilder {
  constructor(projectDirectory) {
    this.projectDirectory = projectDirectory;
    this.workspaceDirectory = resolve(projectDirectory, "..");
    this.sourcePath = resolve(projectDirectory, "node_modules/ecdict/assets/ecdict.csv");
    this.outputPath = resolve(projectDirectory, "public/data/word-definitions.json");
  }

  async build() {
    if (!existsSync(this.sourcePath)) {
      throw new Error("ECDICT data is missing. Run npm install before generating the dictionary.");
    }

    const courseWords = this.collectCourseWords(this.workspaceDirectory);
    const definitions = await this.readDefinitions(courseWords);
    await mkdir(dirname(this.outputPath), { recursive: true });
    writeFileSync(this.outputPath, `${JSON.stringify(definitions)}\n`);
    console.log(`Generated ${Object.keys(definitions).length} Chinese definitions for course vocabulary.`);
  }

  collectCourseWords(directory) {
    const words = new Set();
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === "docs-site" || entry.name === ".git") continue;
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        for (const word of this.collectCourseWords(path)) words.add(word);
      } else if (extname(entry.name) === ".md") {
        const matches = readFileSync(path, "utf8").match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) ?? [];
        for (const word of matches) {
          if (word.length > 1) words.add(word.toLocaleLowerCase());
        }
      }
    }
    return words;
  }

  readDefinitions(courseWords) {
    return new Promise((resolveDefinitions, reject) => {
      const definitions = {};
      createReadStream(this.sourcePath)
        .pipe(parse({ columns: true, relax_quotes: true }))
        .on("data", (row) => {
          const word = row.word?.toLocaleLowerCase();
          if (!word || !courseWords.has(word) || !row.translation) return;
          const definition = this.cleanDefinition(row.translation);
          if (definition) definitions[word] = definition;
        })
        .on("error", reject)
        .on("end", () => resolveDefinitions(definitions));
    });
  }

  cleanDefinition(translation) {
    return translation
      .split("\\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("["))
      .map((line) => line.replace(/^(?:a|adj|adv|art|aux|conj|int|n|num|prep|pron|v|vi|vt)\.\s*/i, ""))
      .join("；")
      .replaceAll(", ", "、");
  }
}

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
await new CourseDictionaryBuilder(projectDirectory).build();