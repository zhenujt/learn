# Unit 15: Clarifying Requirements

[中文](15-requirements.zh.md) · [Course](../README.md) · [Next](16-reviews.md)

## Goal and vocabulary

Turn a vague request into agreed, testable behavior. Words: requirement (needed behavior or constraint), scope (included work), limit, allow, reject (refuse), required, optional, acceptance criteria (conditions used to check the work), edge case (unusual boundary situation).

## Dialogue and reading

A: Users need to upload a document.
B: Which file types should we allow?
A: PDF only for this release.
B: What is the size limit?
A: Ten megabytes, including files exactly at the limit.
B: What should happen if the file is too large?
A: Show an error and keep the selected file name visible.
B: Let me confirm: one PDF at a time, up to ten megabytes. Is that right?
A: Yes. Multiple files are out of scope for now.

Read: **Draft: allow one PDF; reject files above 10 MB; show the file name after rejection; multiple files excluded. Still open: whether an empty PDF is valid and how MB is defined in bytes.** Do not invent answers to the two open questions. A requirement can sound precise while leaving technical definitions unresolved.

## Pattern

`must` expresses a requirement: `The page must show an error.` `must not` prohibits: `Users must not upload scripts.` `don't have to` removes an obligation: `Users don't have to add a comment.` It does not mean a comment is forbidden.

`should` can be ambiguous between advice and expected behavior. In a specification, explicitly agree whether something is mandatory. `up to ten` includes ten here; `above ten` excludes ten. State the unit.

Polite embedded question: `Could you clarify which files we allow?` The inside order is `we allow`, not `do we allow`. A simpler direct question, `Which files do we allow?`, is equally useful.

## Practice

1. Explain: must not upload / don't have to upload.
2. Repair: Could you clarify what should we show?
3. Write a condition for a file above the limit.
4. Reading: is a file exactly at 10 MB allowed by the agreed boundary? Is the byte definition settled?
5. Ask one question that resolves an open issue without inventing the answer.

## Listen, speak, and write

Listen without the dialogue; record type, number of files, limit, error behavior, and exclusion. Repeat the boundary back to the reader and ask for confirmation.

Role cards: requester wants "a quick search"; developer needs to know searchable fields, empty-input behavior, and a measurable response-time target. Requester may answer "I need to check" to one question. Record it as open with an owner, not as an agreement.

Write 70-100 words of requirements and open questions for the upload example. Include an at-limit test and an above-limit test, leaving unresolved byte definitions explicit.

<details>
<summary>Answers and model</summary>

1. Forbidden versus optional. 2. Could you clarify what we should show? 3. If the file is above the limit, the page must show an error. 4. Yes; no. 5. Does MB mean 1,000,000 bytes here? / Should we accept an empty PDF?

Listening: one PDF, up to ten megabytes inclusive, error plus visible name above the limit, no multiple files.

Model: Users can select one PDF per upload. The maximum size is 10 MB, including files exactly at the agreed limit. Files above that limit must be rejected with an error, while the selected file name remains visible. We will test one PDF at the limit and another just above it. Multiple-file upload is out of scope. Before implementation, the requester must confirm the byte definition of MB and whether empty PDFs are allowed.

</details>

## Check

Can a tester distinguish accepted and rejected cases? Can the team see which decisions are still open? Review conditions from Unit 12 and clarification from Unit 5.