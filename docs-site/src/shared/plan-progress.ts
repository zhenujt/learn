const storageKey = "docs-plan-progress-v1";

/** Tracks which weeks of the speaking plan the learner has finished. */
export class PlanProgressStore {
  /** @returns Identifiers of every completed week. */
  public read(): string[] {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as unknown;
      return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
    } catch {
      return [];
    }
  }

  /**
   * Adds or removes one week from the completed set.
   * @param id Week identifier.
   * @returns Updated completed identifiers.
   */
  public toggle(id: string): string[] {
    const completed = this.read();
    const next = completed.includes(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id];
    this.write(next);
    return next;
  }

  /** @returns An empty completed set after clearing stored progress. */
  public reset(): string[] {
    this.write([]);
    return [];
  }

  private write(ids: string[]): void {
    try {
      localStorage.setItem(storageKey, JSON.stringify(ids));
    } catch {
      // The plan stays readable when storage is unavailable.
    }
  }
}
