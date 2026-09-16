import type { SupabaseClient, User } from "@supabase/supabase-js";
import { supabase } from "../../../shared/auth/auth-client";
import type { SavedSentence } from "./sentence-store";

/** Synchronizes sentence records through the shared authenticated session. */
export class SentenceSyncClient {
  private readonly client: SupabaseClient | undefined = supabase ?? undefined;

  /** @returns Whether Supabase browser credentials are configured. */
  public get configured(): boolean {
    return Boolean(this.client);
  }

  /** @returns The authenticated user, or null in local mode. */
  public async user(): Promise<User | null> {
    if (!this.client) return null;
    return (await this.client.auth.getUser()).data.user;
  }

  /** @returns All cloud sentence records for the authenticated user. */
  public async pull(): Promise<SavedSentence[]> {
    const user = await this.user();
    if (!this.client || !user) return [];
    const { data, error } = await this.client
      .from("docs_sentences")
      .select("id, pattern, examples, meaning, created_at, updated_at, deleted_at")
      .eq("user_id", user.id);
    if (error) throw error;
    return (data ?? []).map((item) => ({
      id: item.id,
      pattern: item.pattern,
      examples: item.examples,
      meaning: item.meaning,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      deletedAt: item.deleted_at ?? undefined,
    }));
  }

  /**
   * Uploads local records using newest-write-wins conflict handling.
   * @param sentences Local records, including deletion markers.
   */
  public async push(sentences: SavedSentence[]): Promise<void> {
    const user = await this.user();
    if (!this.client || !user || sentences.length === 0) return;
    const { error } = await this.client.from("docs_sentences").upsert(
      sentences.map((sentence) => ({
        user_id: user.id,
        id: sentence.id,
        pattern: sentence.pattern,
        examples: sentence.examples,
        meaning: sentence.meaning,
        created_at: sentence.createdAt,
        updated_at: sentence.updatedAt,
        deleted_at: sentence.deletedAt ?? null,
      })),
      { onConflict: "user_id,id" },
    );
    if (error) throw error;
  }
}