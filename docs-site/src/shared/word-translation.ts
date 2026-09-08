type WordDefinitions = Record<string, string>;

/** Chinese meanings resolved for a selected word. */
export interface WordMeaningResult {
  contextualMeaning: string;
  dictionaryMeaning: string;
}

const defaultDictionaryUrl = `${import.meta.env.BASE_URL}data/word-definitions.json`;
const englishStopWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "been", "but", "by", "for", "from", "had", "has",
  "have", "he", "her", "him", "his", "i", "in", "is", "it", "its", "of", "on", "or", "our",
  "she", "that", "the", "their", "them", "they", "this", "to", "was", "we", "were", "will",
  "with", "you", "your",
]);
const numberWords = new Set(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]);

/** Looks up Chinese definitions from the course's generated offline dictionary. */
export class WordTranslationClient {
  private definitions?: Promise<WordDefinitions>;

  public constructor(
    private readonly dictionaryUrl = defaultDictionaryUrl,
    private readonly fetcher: typeof fetch = fetch,
  ) {}

  /**
   * Finds the Chinese definition for a selected English word or phrase.
   * @param selection Selected text from the lesson.
   * @returns The Chinese definition, or an empty string when no entry is available.
   */
  public async translate(selection: string): Promise<string> {
    const key = this.normalizeEnglish(selection);
    if (!key || !/^[a-z]+(?:['’-][a-z]+)*(?:\s+[a-z]+(?:['’-][a-z]+)*)*$/.test(key)) {
      return "";
    }

    try {
      const definitions = await this.loadDefinitions();
      return definitions[key] ?? "";
    } catch {
      return "";
    }
  }

  /**
   * Resolves the selected word's meaning in a bilingual example when the alignment is unambiguous.
   * @param selection Selected English word.
   * @param englishExample Full English example sentence.
   * @param chineseExample Full Chinese translation of the example.
   * @returns A context-specific Chinese meaning, falling back to the dictionary definition.
   */
  public async translateInContext(
    selection: string,
    englishExample: string,
    chineseExample: string,
  ): Promise<string> {
    const meanings = await this.translateMeanings(selection, englishExample, chineseExample);
    return meanings.contextualMeaning || meanings.dictionaryMeaning;
  }

  /**
   * Resolves both the selected word's sentence-specific and general dictionary meanings.
   * @param selection Selected English word.
   * @param englishExample Full English example sentence.
   * @param chineseExample Full Chinese translation of the example.
   * @returns Separate contextual and dictionary meanings.
   */
  public async translateMeanings(
    selection: string,
    englishExample: string,
    chineseExample: string,
  ): Promise<WordMeaningResult> {
    const dictionaryMeaning = await this.translate(selection);
    const selectedWord = this.normalizeEnglish(selection);
    if (!selectedWord || selectedWord.includes(" ") || !englishExample || !chineseExample) {
      return { contextualMeaning: "", dictionaryMeaning };
    }

    try {
      const definitions = await this.loadDefinitions();
      const otherWords = this.extractContentWords(englishExample, selectedWord);
      if (otherWords.length < 2) return { contextualMeaning: "", dictionaryMeaning };

      let remainder = chineseExample.replace(/[\s，。！？、；：,.!?;:]/g, "");
      let matchedWords = 0;
      for (const word of otherWords) {
        const match = this.findChineseMatch(word, remainder, definitions);
        if (!match) return { contextualMeaning: "", dictionaryMeaning };
        remainder = remainder.replace(match, "");
        matchedWords += 1;
      }

      remainder = remainder.replace(/^(?:目前|现在)/, "").replace(/[了的吗呢啊吧]+$/g, "");
      const contextualMeaning = matchedWords >= 2 && /^[\p{Script=Han}]{1,8}$/u.test(remainder)
        ? remainder
        : "";
      return { contextualMeaning, dictionaryMeaning };
    } catch {
      return { contextualMeaning: "", dictionaryMeaning };
    }
  }

  private normalizeEnglish(value: string): string {
    return value.trim().toLocaleLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, "");
  }

  private extractContentWords(sentence: string, selectedWord: string): string[] {
    const words = sentence.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) ?? [];
    let removedSelection = false;
    return words.flatMap((word) => {
      const normalized = this.normalizeEnglish(word);
      if (!removedSelection && normalized === selectedWord) {
        removedSelection = true;
        return [];
      }
      return normalized && !englishStopWords.has(normalized) ? [normalized] : [];
    });
  }

  private findChineseMatch(word: string, chineseText: string, definitions: WordDefinitions): string {
    for (const variant of this.wordVariants(word)) {
      const candidates = (definitions[variant] ?? "")
        .split(/[、；，,。/]/)
        .map((candidate) => candidate.replace(/[^\p{Script=Han}]/gu, ""))
        .filter((candidate) => candidate.length >= 2 || numberWords.has(word))
        .sort((left, right) => right.length - left.length);
      const match = candidates.find((candidate) => chineseText.includes(candidate));
      if (match) return match;
    }
    return "";
  }

  private wordVariants(word: string): string[] {
    const variants = [word];
    if (word.endsWith("ies") && word.length > 4) variants.push(`${word.slice(0, -3)}y`);
    if (word.endsWith("es") && word.length > 3) variants.push(word.slice(0, -2));
    if (word.endsWith("s") && word.length > 3) variants.push(word.slice(0, -1));
    if (word.endsWith("ed") && word.length > 4) variants.push(word.slice(0, -2), `${word.slice(0, -1)}`);
    if (word.endsWith("ing") && word.length > 5) variants.push(word.slice(0, -3), `${word.slice(0, -3)}e`);
    return [...new Set(variants)];
  }

  private loadDefinitions(): Promise<WordDefinitions> {
    const fetcher = this.fetcher;
    this.definitions ??= fetcher(this.dictionaryUrl).then(async (response) => {
      if (!response.ok) throw new Error(`Dictionary request failed: ${response.status}`);
      return response.json() as Promise<WordDefinitions>;
    });
    return this.definitions;
  }
}