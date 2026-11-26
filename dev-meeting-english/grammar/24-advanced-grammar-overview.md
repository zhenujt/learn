# G24 Advanced Grammar Overview

<!-- sentence-audio: fenced-only -->

> **Frequency: ⚪ Not needed** (cleft sentences 🟢) | Level: senior high | Meeting data per 10,000 words: `suggest that X be` 0, third conditional 0, `if I were` 0.1, inversion 0.5, cleft `it is…that` 1.4, `What we need is…` ≈ 0.6, formal linkers such as `however / therefore` ≈ 0.4
>
> [中文版](24-advanced-grammar-overview.zh.md) · [Previous: G23 Spoken Grammar](23-spoken-grammar.md) · [Next: M01 Stand-Up Updates](../meetings/01-stand-up-updates.md) · [Grammar index](README.md)

## What This Lesson Solves

The subjunctive, inversion, and absolute constructions are big topics in school exams, but they almost never appear in 25 real meetings. This lesson does one thing: **it tells you what you can skip and what you should recognize.**

| Grammar point | Meeting frequency | Tag | Advice |
| --- | --- | --- | --- |
| Cleft `It is…that…`, `What we need is…` | 1.4 + 0.6 | 🟢 | recognize; you can use `What we need is…` |
| Emphatic `do`: `I do have a question` | ≈ 2 | 🟢 | recognize |
| Subjunctive `suggest that he be…` | 0 | ⚪ | skip; use `should` |
| `wish`, `It's time that…` | ≈ 0 | ⚪ | skip |
| Inversion `Not only…`, `Only when…`, `Should you…` | 0.5 | ⚪ | recognize `Should you…` in emails |
| Absolute constructions | ≈ 0 | ⚪ | skip |
| Written ellipsis, parallelism | rare | ⚪ | useful in documents |
| Formal linkers `however`, `therefore` | 0.4 | ⚪ | use in emails and documents |

**After this lesson, you can:**

1. Recognize cleft sentences and use `What we need is…` to highlight a point.
2. Know what the subjunctive, inversion, and absolute constructions look like, so documents don't surprise you.
3. Know what to skip safely and spend your time on G01–G23 instead.

## 1. Cleft Sentences 🟢: It is…that… / What we need is…

This is the **only structure in this lesson that really appears in meetings**. It singles out one piece of information.

**Pattern:** `It is / was + focus + that + the rest`; `What + subject + verb + is + focus`

```text
It's the CI pipeline that is slowing us down, not the tests.

What we need is a final decision on the timeline.

What I remember clearly is that we all agreed on this earlier.

The thing is, we don't have the approval yet.
```

**Emphatic `do`:** put `do / does / did` before the verb to mean "really, indeed".

```text
I do have one question regarding the website.
```

> Not every `It's … that …` is a cleft. In `It's an existing issue that we've had for a while.`, `that` starts a relative clause. Test: remove `It is` and `that`; if a complete sentence remains, it is a cleft.

## 2. The Subjunctive ⚪: suggest that…, wish, It's time that…

It almost never appears in meetings. Recognizing it is enough; you can skip it.

**① Base verb after suggest / require:** `suggest / recommend / require / It's important + that + subject + base verb`

```text
We recommend that the token be rotated every 90 days.

We recommend that the token should be rotated every 90 days.
```

In meetings people say `I suggest we rotate the token.` or `We should rotate the token.` See [G11](11-modal-verbs.md) and [G22](22-reported-speech.md).

**② wish:** an unreal wish; the clause moves one tense back.

```text
I wish we had more time for testing.
```

**③ It's time that…:** "we should have done it already"; the clause uses the past tense.

```text
It's time we cleaned up the old branches.
```

**④ if I were / if we had done:** see [G21 Conditionals](21-conditionals.md). The third conditional appeared 0 times.

## 3. Inversion ⚪: Not only…, Only when…, Should you…

Inversion puts the auxiliary before the subject, like a question, in a statement. It almost never appears in meetings. Recognizing it is enough; you can skip it.

```text
Not only does it save time, but it also reduces errors.

Only when the PR is approved can we merge it.

Should you have any questions, please let me know.
```

`Should you…` is a common email closing and means `If you…`. In meetings, `not only` is used without inversion: `This is not only for the agentic workflow; it's for the whole team.` That is normal and natural.

## 4. Absolute Constructions ⚪: Noun + Participle

An absolute construction is a participle phrase with its own subject, mostly in writing. It almost never appears in meetings. Recognizing it is enough; you can skip it.

```text
All tests having passed, we merged the PR.

With all tests passing, we can merge the PR.
```

In speech, just say: `All the tests passed, so we merged the PR.` Don't write `All tests passed, we merged the PR.` (two sentences joined only by a comma).

## 5. Written Ellipsis, Substitution, and Parallelism ⚪

Spoken ellipsis (`Sounds good.`, `Any questions?`) is covered in [G23](23-spoken-grammar.md) and is 🔴. This section is about **written** ellipsis and parallelism, which you need for documents and emails.

```text
Ken will review the backend, and Mia the frontend.

We need to fix the bug, update the docs, and notify the users.
```

**Parallelism rule:** items in a list take **the same form**.

❌ `We need to fix the bug, updating the docs, and notification to users.`
✅ `We need to fix the bug, update the docs, and notify the users.`

## 6. Formal Linkers ⚪: however, therefore, moreover

These make documents more formal. Meetings use `but`, `so`, and `also` instead; see [G17](17-conjunctions-and-linking.md).

| Formal | Spoken equivalent |
| --- | --- |
| `however` | `but` |
| `therefore` / `thus` | `so` |
| `moreover` / `furthermore` / `in addition` | `also`, `and` |
| `nevertheless` | `but still` |
| `as a result` / `consequently` | `so` |

```text
The fix works on Android. However, we still need to test it on iOS.
```

> ⚠️ Use a full stop or semicolon before `however`, not just a comma: ❌ `It works, however we need more tests.`

## 7. Real Meeting Examples (Adapted)

```text
This is not only for the agentic workflow; it's for the whole team.

What we can do is post the details in the wider group.

I do have a quick question about the vulnerability check.

It's an existing issue that we've had for a while.
```

## 8. Spotting These Structures in Subtitles

- A sentence starting with `What we need / What I mean / The thing is` followed by `is` → emphasis; the point comes after `is`.
- `It is / It's … that …`: if removing `It is` and `that` leaves a full sentence → cleft.
- An email starting with `Should you…` → it means `If you…`.
- Other advanced structures basically never appear in meeting subtitles. A complicated-looking sentence is more likely a restart or a recognition error, as in [G23](23-spoken-grammar.md).

## 9. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `What we need is we need a decision.` | `What we need is a decision.` | the subject is repeated |
| `Only when it's approved we can merge.` | `Only when it's approved can we merge.` / `We can merge only when it's approved.` | sentence-initial `Only when` needs inversion; otherwise move it to the end |
| `I suggest him to rotate the token.` | `I suggest that he rotate the token.` / `I suggest he should rotate…` | no "person + to do" after `suggest` |
| `It works, however we need more tests.` | `It works. However, we need more tests.` | `however` cannot join two sentences |

## 10. Sentences You Can Use Today

```text
What we need is a clear owner for this ticket.

The thing is, we're still waiting for approval.

I do have one more question.

Should you have any questions, feel free to reach out.
```

## 11. Practice

**A. Which sentences are clefts?**

1. It's the login API that is failing.
2. It's a known issue that we fixed last sprint.
3. What we need is more test coverage.

**B. Rewrite in everyday spoken English**

1. Should you need access, please contact Ken.
2. We recommend that the cache be cleared.
3. The build failed. Therefore, we postponed the release.

<details>
<summary>Answers</summary>

**A.** 1 Yes (remove `It's` and `that`: `The login API is failing.`) 2 No (`that` starts a relative clause about `issue`) 3 Yes

**B.**
1. If you need access, please contact Ken.
2. We should clear the cache. (or `I suggest we clear the cache.`)
3. The build failed, so we postponed the release.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The subjunctive part of [03-advanced/14 Conditionals and the Subjunctive](../../03-advanced/14-conditionals-and-subjunctive.md)
- [03-advanced/15 Inversion and Emphasis](../../03-advanced/15-inversion-and-emphasis.md)
- [03-advanced/16 Ellipsis, Substitution, and Parallelism](../../03-advanced/16-ellipsis-substitution-parallelism.md)
- [03-advanced/17 Absolute Constructions and Participles](../../03-advanced/17-absolute-constructions-and-participles.md)
- [03-advanced/18 Formal Writing and Review](../../03-advanced/18-formal-writing-and-review.md)
- Chapters 36–40 of [英语语法全解](../../english-grammar/英语语法全解.md)
