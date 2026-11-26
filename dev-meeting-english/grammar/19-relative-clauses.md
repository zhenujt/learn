# G19 Relative Clauses

<!-- sentence-audio: fenced-only -->

> **Frequency: 🟡 Common** | Level: junior high → senior high | Meeting data per 10,000 words: `which` ≈ 17 (`, which` ≈ 7), `who` ≈ 4, `where` ≈ 5 (all counts include question use), `whose` 0
>
> [中文版](19-relative-clauses.zh.md) · [Previous: G18 Noun Clauses](18-noun-clauses.md) · [Next: G20 Adverbial Clauses](20-adverbial-clauses.md) · [Grammar index](README.md)

## What This Lesson Solves

Many long subtitle lines are long because a noun is followed by a string of extra information:

```text
I wonder if we can try the GitHub Actions runner, which can run the macOS image.

Is there anyone who wants to bring up a topic?
```

`which can run the macOS image` describes the runner; `who wants to bring up a topic` describes anyone. A clause **after a noun that describes that noun** is a relative clause.

**After this lesson, you can:**

1. Understand that Chinese puts modifiers before the noun and English puts long ones after it.
2. Use `who / which / that / where` to say "the person / thing / place that …".
3. Tell clauses with and without commas apart, and recognize the loose spoken `, which …` comment.
4. Read reduced relative clauses such as `the ticket assigned to Ken` and `the team working on it`, and split long subtitles at which / who.

## 1. The Right Way to Think About Relative Clauses

Chinese puts modifiers **before** the noun; English puts long modifiers **after** it:

```text
the ticket that Ken is working on

the person who approved the PR
```

**Pattern:** `noun + relative word (who / which / that / where) + clause`

The relative word **links** and also **replaces the noun** inside the clause. So do not add `it / them / him` again.

```text
This is the bug that blocked the release.
```

## 2. Choosing the Relative Word

| Word | Refers to | Example | Frequency |
| --- | --- | --- | --- |
| `who` | people | `the person who owns this repo` | 🟡 |
| `which` | things | `the tool which we use for CI` | 🟡 |
| `that` | people or things (no comma) | `the PR that I mentioned` | 🟡 |
| `where` | places, pages, environments | `the page where we keep the checklist` | 🟡 |
| `whose` | possession | `the team whose PR is blocked` | 🟢 |
| `when` | time | `the week when we release` | 🟢 |

### 2.1 who: People

```text
Is there anyone who has any concerns?

He is the only one who can approve the PR.

We need someone who knows iOS well.

How can we follow up with the designer who submitted the request?
```

### 2.2 which / that: Things

Without a comma, `which` and `that` are mostly interchangeable. American speech prefers `that`:

```text
These are the packages which we are going to use.

This is the bug that blocked the release.

Is there any story that is specific to design?

Let's check the tickets that are still in progress.
```

### 2.3 where: Places, Pages, Environments

In software meetings `where` often refers to a **page, board, environment, or document**:

```text
Page 9 is where we keep the checklist.

I was looking at the Jira board, where we have columns like Ready for QA.

We need an environment where we can test it safely.
```

### 2.4 whose and when 🟢

Almost never used in meetings; recognize them:

```text
We need to contact the team whose PR is blocked.

Next week is the week when we start the new sprint.
```

### 2.5 Dropping the Relative Word: the PR I mentioned

When the relative word is the **object** of the clause, speakers usually drop it:

```text
the PR (that) I mentioned yesterday

the tool (that) we need

Is this the version (that) you tested?
```

**Reading tip:** "**noun + noun/pronoun + verb**" in a row, such as `the PR I mentioned` or `the issue Ken found`, means `that` has been dropped.

When the relative word is the **subject** of the clause, it **cannot** be dropped:

❌ `Is there anyone has any concerns?`
✅ `Is there anyone who has any concerns?`

## 3. With or Without a Comma: Defining vs Non-Defining

**No comma (defining):** the clause tells you **which one**. Without it, the meaning is incomplete.

**Comma (non-defining):** you already know which one; the clause only **adds information**. The sentence still works without it.

```text
The developer who works on SSR is on leave.

Ken, who works on SSR, is on leave.
```

| | Defining (no comma) | Non-defining (comma) |
| --- | --- | --- |
| Job | identifies which one | adds extra information |
| `that` allowed? | ✅ | ❌ only `which / who` |
| Drop the relative word? | yes, if it is the object | ❌ never |
| Typical noun before it | `the / any / some + noun` | names, products, things already clear |

> ⚠️ Commas in subtitles are added by speech recognition and are not reliable. Judge by meaning: after a **name or a unique thing**, the clause is usually extra information.

## 4. The Loose Spoken , which …: Adding and Commenting

`, which` appears about 7 times per 10k words, more often than defining `which`. Speakers finish a sentence, then use `which` to **add an explanation or a comment**.

### 4.1 which is …: Explaining a Noun

```text
There is one key limitation, which is the concurrency limit.

At the semantic layer, we have layout, which is geometry, and typography, which is text.

The next one is the daily sync, which we proposed recently.
```

### 4.2 which means …: Commenting on the Whole Sentence

Here `which` refers to the **whole previous idea**, not one noun: "and this means".

```text
The build failed again, which means we can't release today.

It's self-hosted, which means we don't need to buy any software.
```

> Subtitles often show `which is like …` followed by nothing. The speaker is thinking aloud; wait for the next line.

## 5. Reduced Relative Clauses: the ticket assigned to Ken

Remove `who is / which is / that are` and keep only the participle. This is very common in meetings.

**Passive meaning: -ed (past participle)**

```text
the ticket assigned to Ken

the issue mentioned yesterday

the stories carried over from last sprint
```

**Active or ongoing meaning: -ing**

```text
the team working on it

anyone using the old version
```

**Adjective phrases can also follow the noun:**

```text
anything related to SSR

the files available in the repo
```

**A reading trap:** an `-ed` word after a noun is not always the main verb.

```text
The PR merged yesterday broke the build.
```

The subject is `The PR merged yesterday`; the main verb is `broke`. See [G13](13-to-do-doing-done.md) for more on participles.

## 6. Splitting Long Subtitles at which / who

Three steps:

1. **Find `which / who / that / where` after a noun** and draw a line before it.
2. **Read the main clause first:** who did what.
3. **Read the clause as extra information** about the noun before it, chunk by chunk.

A real subtitle (adapted):

```text
Ken has shared a detailed comparison of the three solutions, and there is a key limitation of the self-hosted solution, which is the concurrency limit.
```

Split:

```text
Ken has shared a detailed comparison of the three solutions.

There is a key limitation of the self-hosted solution.

Which is the concurrency limit.
```

**When you speak,** split a long idea into "main clause + `, which …`" or into two sentences. It is clearer than one complex relative clause.

## 7. Real Meeting Examples (Adapted)

From real subtitles, with recognition errors fixed and names replaced:

```text
Is there anyone who wants to bring up a topic for the post-stand-up?

We are identifying new backlog items which we need to plan for the next sprint.

One story can have tasks which can be assigned to different teams.

This one is the self-hosted option, which doesn't require any software purchase.

He is the one who has been remapping the tokens to the new structure.

If there is any story which is specific to design, it goes to the design team.

Currently the Node.js version is 16, while we proposed 18 or 20.
```

In the last sentence `while` is not a relative word; it means "whereas" (contrast), see [G20](20-adverbial-clauses.md). The original subtitle used `where`, a non-native slip.

## 8. Recognizing Relative Clauses in Subtitles

1. **`who / which / that / where` right after a noun** is usually a relative clause. `Which / Who` at the start of a sentence is usually a question.
2. **"noun + subject + verb"** → `that` was dropped: `the bug we found`.
3. **"noun + -ed / -ing + preposition"** → reduced relative clause: `the ticket assigned to Ken`.
4. **`, which means` / `, which is`** → extra information; skip it on the first read.
5. **Recognize, but do not copy, non-native forms:**

| Heard in subtitles | Standard form |
| --- | --- |
| `Is there anyone has any concerns?` | `Is there anyone who has any concerns?` |
| `Who is the admin can give the access?` | `Who is the admin that can give us access?` |
| `the packages which we will use them` | `the packages which we will use` |
| `the version is 16, where we proposed 18` | `the version is 16, while we proposed 18` |
| `Which ticket we will vote?` | `Which ticket will we vote on?` (a question, not a relative clause) |

## 9. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `the PR which I created it` | `the PR which I created` | `which` already replaces `it` |
| `the person which owns the repo` | `the person who owns the repo` | `who` for people |
| `Ken, that works on SSR, is on leave.` | `Ken, who works on SSR, is on leave.` | no `that` after a comma |
| `Is there anyone wants to share?` | `Is there anyone who wants to share?` | a subject relative word cannot be dropped |
| `the ticket assigning to Ken` | `the ticket assigned to Ken` | the ticket is assigned: -ed |
| `the page which we can find the checklist` | `the page where we can find the checklist` | the clause is complete, so use `where` (= on which) |

## 10. Sentences You Can Use Today

```text
Is there anyone who has questions?

This is the PR I mentioned yesterday.

I'm looking for the person who owns this pipeline.

The ticket assigned to me is still in progress.

The build failed, which means we need to wait.

Let's go to the page where we keep the release notes.
```

## 11. Practice

**A. Fill in with who / which / that / where** (give all possible answers)

1. Is there anyone ___ can help with the iOS build?
2. This is the document ___ we wrote last week.
3. The Jira board is ___ we track all the tasks.
4. The pipeline failed, ___ means we need to rerun it.
5. Mia, ___ is our designer, will join the review.

**B. Read the subtitle: find the subject and main verb**

1. The stories carried over from last sprint are mostly done.
2. The team working on the native part needs more time.
3. The PR I reviewed yesterday was merged.

**C. Correct the sentences**

1. Is there anyone wants to add something?
2. This is the ticket which I created it.
3. Ken, that is the release owner, will confirm the date.

<details>
<summary>Answers</summary>

**A.** 1 who (or that) 2 that / which (or nothing) 3 where 4 which 5 who

**B.**
1. Subject `The stories (carried over from last sprint)`, verb `are`
2. Subject `The team (working on the native part)`, verb `needs`
3. Subject `The PR (I reviewed yesterday)`, verb `was merged`

**C.**
1. Is there anyone who wants to add something?
2. This is the ticket which I created. (or: the ticket I created)
3. Ken, who is the release owner, will confirm the date.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- [02-intermediate/11 Relative Clauses](../../02-intermediate/11-relative-clauses.md)
- Chapter 32 of [英语语法全解](../../english-grammar/英语语法全解.md)
