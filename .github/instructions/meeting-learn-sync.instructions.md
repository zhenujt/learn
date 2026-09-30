---
description: "Mandatory bidirectional Markdown synchronization between the Meeting and learn projects. Use when editing shared meeting English documents or publishing the learn website."
applyTo: "**"
---

# Mandatory Meeting / Learn Synchronization

- This rule applies across workspaces to `/Users/czheng1/Desktop/Meeting` and `/Users/czheng1/Desktop/learn`.
- Both roots must contain byte-identical copies of `meeting-english-phrases.md` and `meeting-english-phrases.zh.md`.
- Edits may originate in either project. Read both copies first, reconcile divergent edits without discarding user work, then update both in the same task. Neither project is permanently authoritative.
- Keep the English and Chinese versions semantically aligned. Never mark an update complete while either counterpart is missing or different; report inaccessible counterparts as a blocker.
- Keep this instruction and its `.zh.md` companion identical in both projects under `.github/instructions/` and in the user's VS Code prompts directory. Update all rule copies when changing the synchronization policy.
- Before completing shared-document work or building the website, run `npm run check:meeting-sync` from `learn/docs-site`. Local builds must fail on missing or divergent copies; the check never overwrites files.
- The website route is `/meeting-english-phrases/` beneath the site base path. It defaults to `meeting-english-phrases.zh.md` in all environments and accepts `?doc=meeting-english-phrases.md` for English. Both documents must be available in production builds, including CI. The user explicitly approved publishing this Chinese document on 2026-09-30; only this file is exempt from the Chinese Markdown commit/publication restriction. Other Chinese Markdown files remain local-only. Do not publish raw Meeting transcripts.
- Instructions guide agent edits; they are not a background file watcher. Browser or manual edits must be reconciled to both local projects before building. CI cannot verify a separate local Meeting checkout and must explicitly report that limitation.
- Synchronization never authorizes committing, pushing, creating branches or PRs, or deployment. Obtain explicit authorization for those operations; never push directly to the default branch without specific permission.