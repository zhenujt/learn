type WordDefinitions = Record<string, string>;

const defaultDictionaryUrl = `${import.meta.env.BASE_URL}data/word-definitions.json`;

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
    const key = selection
      .trim()
      .toLocaleLowerCase()
      .replace(/^[^a-z]+|[^a-z]+$/g, "");
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

  private loadDefinitions(): Promise<WordDefinitions> {
    this.definitions ??= this.fetcher(this.dictionaryUrl).then(async (response) => {
      if (!response.ok) throw new Error(`Dictionary request failed: ${response.status}`);
      return response.json() as Promise<WordDefinitions>;
    });
    return this.definitions;
  }
}