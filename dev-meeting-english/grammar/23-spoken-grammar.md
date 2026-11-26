# G23 Spoken Grammar: Ellipsis, Fragments, Fillers, Self-Correction

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: spoken English (rarely taught in textbooks) | Meeting data per 10,000 words: `okay / yeah` ≈ 330, `so` ≈ 174, `just` ≈ 47, `I mean / you know` ≈ 29, repeated words (`we, we`) ≈ 66, `regarding to` ≈ 4
>
> [中文版](23-spoken-grammar.zh.md) · [Previous: G22 Reported Speech and Tense Backshift](22-reported-speech.md) · [Next: G24 Advanced Grammar Overview](24-advanced-grammar-overview.md) · [Grammar index](README.md)

## What This Lesson Solves

This is **the key lesson for reading subtitles**. Meeting subtitles look very different from textbook sentences. Here is a real (anonymized) subtitle line:

> Yeah, I mean, so I, I think we can, we can basically just, you know, keep it for now, right?

It looks messy. Remove the fillers and merge the repeats, and it becomes a simple sentence:

```text
I think we can keep it for now.
```

About **one third of the words** in subtitles are signal words such as `okay`, `yeah`, `so`, `just`, `I mean`, or repeated and restarted words. Textbooks don't teach them, so you feel "I know every word but I can't follow it".

**After this lesson, you can:**

1. Know what signal each of the 10 most common fillers sends, and skip or use them while reading.
2. Understand fragments and ellipsis such as `Nothing from my side.`, `Any questions?`, `Sounds good.`
3. Handle repeats, restarts, and tag questions, and find the speaker's final version.
4. Recognize non-native forms and speech-recognition (ASR) errors, and guess the intended word.

## 1. The Right Way to Think About Spoken Grammar

**Spoken English is not "broken written English".** When people think while speaking, they naturally:

- use fillers to buy time (`so`, `um`, `you know`);
- drop what everyone already knows (`Sounds good.` drops `That`);
- change direction mid-sentence (`we can, we can…`, `is there, I mean, do we have…`).

Native speakers do this too. Your job is to **read through it**, not to translate every word.

To read a messy subtitle line:

1. **Delete** the fillers.
2. **Merge** repeated words and keep the last one.
3. **Restore** the missing subject or verb.
4. **Fix** obvious recognition errors.
5. **Find** the skeleton (who + does what); see [G01](01-sentence-skeleton.md).

## 2. Fillers: What Signal Each One Sends

Fillers are not useless. They tell you **what the speaker is about to do**.

| Word | Frequency | Main signal | When reading |
| --- | --- | --- | --- |
| `okay` / `yeah` | 🔴 330 | received; starting; changing topic | at the start, often "new section" |
| `so` | 🔴 174 | starting; summarizing; changing topic (not always "therefore") | skip it at the start of a sentence |
| `just` | 🔴 47 | a moment ago / only / softening | decide by position |
| `I mean` | 🔴 17 | let me rephrase or explain | what follows is the real meaning |
| `you know` | 🟡 10 | shared understanding; searching for a word | skip it |
| `like` | 🔴 | for example; about; thinking pause | skip the pause use |
| `actually` | 🟡 7 | in fact (correction, new information) | a contrast often follows |
| `kind of` / `sort of` | 🟡 7 | somewhat, roughly | vaguer tone, not "type" |
| `basically` | 🟢 4 | in short | the main point follows |
| `right?` | 🟡 4.5 | is that correct? | the speaker wants confirmation |

### 2.1 okay / yeah / so: Opening, Acknowledging, Moving On

```text
Okay, so let's move to the platform part.

Yeah, thanks for sharing.

So for this sprint, we will focus on the CI pipeline.

So yeah, that's all from my side.
```

> `yeah` does not always mean agreement. Often it only means "I'm listening". Real agreement sounds like `I agree` or `That makes sense`.

### 2.2 just: Three Meanings

```text
I just merged the PR.

Just a quick question.

You can just raise your hand.
```

The first means "a moment ago", the second "only", and the third softens a request.

### 2.3 I mean / you know: Correcting and Pausing

```text
We need a test plan, I mean, a simple checklist.

I mean, we have done the comparison, but have we concluded anything?

It's just a spike, you know, a research task.
```

### 2.4 actually / basically / kind of / like

```text
Actually, the story is already done.

Basically, we want to reduce manual testing.

It's kind of a blocker for us.

It takes like fifteen minutes.

We need, like, a shared config for all repos.
```

> ⚠️ Here `kind of` does not mean "type". In `some kind of training` it does. Followed by a noun it often means "some type of"; used before an adjective or as an aside it means "somewhat".

## 3. Fragments and Ellipsis: Missing Subjects and Verbs

Many meeting sentences have no subject, or even no verb. They drop **what everyone already knows**: `I`, `it`, `that`, `do you`, `is`.

**Pattern:** fragment = full sentence − known subject / auxiliary / `be`

| Fragment in subtitles | Full form | Meaning |
| --- | --- | --- |
| `Nothing from my side.` | `I have nothing to update from my side.` | no update from me |
| `Any questions?` | `Do you have any questions?` | any questions? |
| `Sounds good.` | `That sounds good.` | agreed |
| `Got it.` | `I've got it.` | understood |
| `Not yet.` | `It's not done yet.` | not yet |
| `Will do.` | `I will do that.` | I'll do it |
| `Good to know.` | `It's good to know that.` | useful information |
| `Next one.` | `Let's look at the next one.` | next item |
| `Ready for review.` | `It's ready for review.` | ready for review |
| `Same here.` | `It's the same for me.` | same for me |
| `Done.` | `It's done.` | finished |

```text
Nothing from my side.

Any comments or questions?

Sounds good. Thanks, everyone.

Not yet. Maybe by tomorrow.

Will do.
```

**Substitution** is another kind of ellipsis: `so` / `not` replace a whole clause.

```text
Is it ready for release? I think so.

Will it affect the native part? I hope not.

Do we need a new ticket? I don't think so.
```

> Fragments are natural when you speak. But when you **confirm an action item**, say the full sentence: not just `Okay.`, but `Okay, I'll update the ticket by Friday.`

### 3.1 Spoken Ellipsis vs Written Ellipsis

| | Spoken ellipsis 🔴 | Written ellipsis 🟢 |
| --- | --- | --- |
| What is dropped | the **start**: subject, auxiliary, `be` | the **middle**: words repeated from earlier |
| How to restore it | from the situation | from the previous text |
| Example | `Sounds good.`, `Any questions?` | `Ken will review the backend, and Mia the frontend.` |

```text
Ken will review the backend, and Mia the frontend.

When finished, please update the ticket.

If necessary, we can roll back.

I can join the call, but Leo can't.
```

**Memory tip:** speech "cuts the head"; writing "removes repeats". Meetings mostly use the first. The second appears in documents and emails; recognizing it is enough. See [G24](24-advanced-grammar-overview.md).

## 4. Repeats, Restarts, and Self-Correction: Take the Last Version

Subtitles contain about 66 repeated words per 10,000, such as `we can, we can` or `the, the`. There are three types:

| Type | What it looks like | How to read it |
| --- | --- | --- |
| Repeat (thinking) | `we can, we can basically…` | keep one |
| Restart (new structure) | `are we going to, like, is there any plan to…` | drop the first half, read the complete structure |
| Correction (mistake) | `on Monday, sorry, on Tuesday` | take the corrected version |

Correction signals: `I mean`, `sorry`, `or rather`, `let me rephrase`, `no, wait`.

**Rule: the last complete structure is what the speaker means.**

```text
Is there any plan to add more columns?

We should create a separate repo for those actions.

The meeting is on Tuesday.
```

(Original subtitles: `So, are we going to, like, is there any plan to add more columns?` / `We should, we should like have a separate, create a separate repo…` / `The meeting is on Monday, sorry, on Tuesday.`)

When you make a mistake yourself, correct it openly:

```text
Sorry, let me rephrase that.

I mean the web part, not the native part.
```

## 5. Tag Questions: right? / isn't it? / is it?

### 5.1 right?: The Most Common in Meetings 🟡

`right?` can follow any statement and means "is that correct?"

```text
You mean the native components, right?

It's on Thursday, right?

So we should go with the GitHub Actions solution, right?
```

### 5.2 Standard Tags: isn't it? / don't we? 🟢

**Pattern:** positive statement → negative tag; negative statement → positive tag; the auxiliary and subject match the statement.

| Statement | Tag |
| --- | --- |
| `It's ready,` | `isn't it?` |
| `We need a review,` | `don't we?` |
| `You've tested it,` | `haven't you?` |
| `It won't block us,` | `will it?` |
| `They can't join,` | `can they?` |

```text
It's ready for review, isn't it?

We don't need a new ticket, do we?
```

Full standard tags are rare in meetings. Recognize them; use `right?` yourself.

### 5.3 The Non-Native is it? 🟢

Some Indian English speakers add `is it?` or `no?` after any statement, whatever the verb. It means the same as `right?`:

| Heard in subtitles | Standard form |
| --- | --- |
| `You are joining tomorrow, is it?` | `You're joining tomorrow, aren't you?` / `…, right?` |
| `It is merged already, no?` | `It's already merged, isn't it?` / `…, right?` |

## 6. Contractions and Reductions: gonna, wanna, kinda

Speech links and shortens words. Subtitle software usually **restores the full form** (`gonna` appears only 0.4 times per 10,000 words, `going to` about 8 times), but sometimes shows the reduced form.

| Spoken form | Full form | Example |
| --- | --- | --- |
| `gonna` | `going to` | `I'm gonna share my screen.` |
| `wanna` | `want to` | `Do you wanna take this one?` |
| `gotta` | `have got to` (= have to) | `We gotta fix it today.` |
| `'cause` / `cuz` | `because` | `'cause the build failed` |
| `kinda` / `sorta` | `kind of` / `sort of` | `It's kinda slow.` |
| `lemme` | `let me` | `Lemme check.` |
| `y'all` | `you all` (Southern US) | `Can y'all see my screen?` |
| `there's` + plural | `there are` | `There's two options.` (common in speech, not standard in writing) |

```text
I'm going to share my screen.

We have to fix it today because the release is tomorrow.
```

> `gonna` is fine in a meeting, but **don't write it** in emails or tickets.

Also recognize everyday contractions instantly: `I'm`, `we're`, `it's`, `that's`, `let's`, `didn't`, `won't` (= will not), `can't`, `I'd` (= I would / I had), `we've`.

## 7. Non-Native Forms: Subtitle vs Standard

Your colleagues come from different countries, so subtitles contain many "non-standard but understandable" forms. **Understand them; don't copy them.**

| In subtitles | Standard form | Problem |
| --- | --- | --- |
| `regarding to the timeline` | `regarding the timeline` | no `to` after `regarding` |
| `discuss about the issue` | `discuss the issue` | `discuss` takes a direct object |
| `thanks for your share` | `thanks for sharing` | `share` is a verb here |
| `there have two demos` | `there are two demos` | there-be pattern; see [G04](04-be-and-there-be.md) |
| `we have two subtask` | `we have two subtasks` | missing plural |
| `we need to update document` | `we need to update the document` | missing article; see [G02](02-nouns-articles-quantifiers.md) |
| `when he back office tomorrow` | `when he's back in the office tomorrow` | missing `be` |
| `When you ready for test, …` | `When you're ready for testing, …` | missing `be`; `testing` |
| `the results shows` | `the results show` | subject–verb agreement |
| `how we gonna approach for it` | `how we're going to approach it` | missing `be`; no `for` after `approach` |
| `I already finish it yesterday.` | `I finished it yesterday.` | Chinese-style "already"; past time needs past simple |
| `It is done already, is it?` | `It's already done, right?` | invariant `is it?` |

**About overusing `already`:** Chinese uses its word for "already" a lot, so Chinese colleagues often add `already` to every sentence (about 25 times per 10,000 words). `already` itself is fine — `It's already merged.` is natural — but:

- With past time words such as `yesterday` or `last week`, use the past simple; `already` is usually unnecessary.
- Don't use it to mean "since some time": ❌ `I'm already working on it since Monday.` ✅ `I've been working on it since Monday.`

## 8. Speech-Recognition (ASR) Errors: Guessing the Real Word

Subtitles are machine-transcribed. With accents, product names, and technical words, the machine picks a **common word that sounds similar**.

| You see | Real word | Why |
| --- | --- | --- |
| `conference` | `Confluence` | unknown product name |
| `face` | `phase` | almost the same sound |
| `brands` | `branch` | similar ending |
| `relief` | `release` | accent |
| `Browder` | `browser` | accent |
| `Facebook` | `feasible` | similar rhythm and stress |
| `Spring One` / `this brand` | `Sprint 1` / `this sprint` | the final t is swallowed |
| `Sigma` | `Figma` | similar first sound |
| `surprise test` | `Cypress test` | product name |
| `error DevOps` | `Azure DevOps` | product name |
| `reset a ticket` | `raise a ticket` | similar sound |
| `revealed` | `reviewed` | similar sound |
| `back from POC` | `back from PTO` | similar abbreviations |

**Four steps to guess the word:**

1. **Notice the nonsense:** you know the word, but it doesn't fit (`merged this to our main brands`).
2. **Say it aloud:** which **technical word** sounds similar? (`brands → branch`)
3. **Check the collocation:** after `merge to main ___`, the usual word is `branch`; after `ready for ___`, it is `release`, `review`, or `testing`.
4. **Check the context:** the word often appears again, sometimes correctly. If you still can't tell, skip it and check the doc or ask after the meeting.

```text
We already merged this to our main branch to unblock others.

The doc is in the Confluence folder.

Let's move to the next phase.
```

## 9. Real Meeting Examples (Adapted)

Cleaned-up versions of real subtitle lines:

```text
We're going to remap the touch libraries as a first step.

Okay, I'm going to share my screen. Can you see my screen?

I'm not sure if we have decided how we're going to approach the website.

Okay, if there are no questions about the Sprint 1 scope, I'll give a status update.

It's just a spike, so we don't need to test every situation.

The two solutions are feasible for us.
```

What changed: `Uh` and the repeated `as a, as a` were removed; `gonna` was expanded; `I mean` and `like` were removed and `we're` restored; `regarding to` became `about`; two `you know`s were removed; ASR `Facebook` became `feasible`.

## 10. Reading Spoken Grammar in Subtitles

Apply the five steps from Section 1 to a real subtitle line:

> Yeah, I mean, so I, I prefer to keep the, keep the third party, I mean the external delegate, in a single environment.

1. **Delete:** `Yeah, I mean, so`.
2. **Merge:** `I, I` → `I`; `keep the, keep the` → `keep the`.
3. **Correct:** `third party, I mean the external delegate` → take `external delegate`.
4. **Skeleton:** `I prefer to keep the external delegate in a single environment.`

```text
I prefer to keep the external delegate in a single environment.
```

**Quick tips:**

- Skip sentence-initial `okay / so / yeah` first.
- After `I mean` or `sorry`, trust what follows.
- After `right?`, the speaker expects confirmation: answer `Yes, that's right.` or `Not exactly.`
- A strange everyday word (`face`, `conference`, `relief`) is probably a misheard technical word.

## 11. Common Mistakes

Mistakes to avoid **when you speak**:

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `Sound good.` | `Sounds good.` | the dropped subject is `That` |
| `Any question?` | `Any questions?` | the plural is the usual form |
| `Nothing from me side.` | `Nothing from my side.` | `my side` |
| `Regarding to the release, …` | `Regarding the release, …` | no `to` |
| `It's ready, is it?` | `It's ready, right?` / `isn't it?` | tags reverse polarity, or use `right?` |
| `basically` in every sentence | only before a summary | overuse sounds evasive |
| `gonna`, `wanna` in emails | `going to`, `want to` | speech only |
| `I already fixed it yesterday.` | `I fixed it yesterday.` | `already` is redundant with a past time |

## 12. Sentences You Can Use Today

```text
Nothing from my side. Thanks.

Sounds good to me.

Got it. I'll take a look.

Sorry, let me rephrase that.

I mean the web part, not the native part.

So basically, we need one more day.

You mean the release branch, right?

Not yet. I'll update the ticket once it's done.
```

## 13. Practice

**A. What do `just` / `so` / `actually` / `like` mean here?**

1. I **just** pushed the fix.
2. **Just** a quick update from me.
3. **So** for the native part, we are still waiting for approval.
4. **Actually**, it's not a bug. It's expected behavior.
5. The build takes **like** twenty minutes.

**B. Complete the fragments**

1. Any updates?
2. Sounds good.
3. Not yet.
4. Will do.
5. Nothing from my side.

**C. Clean the subtitle and write the skeleton**

1. Okay, so, um, we, we have finished the, the login page already.
2. So are we going to, like, is there any plan to support iOS?
3. Yeah, I mean, regarding to the timeline, we can, we can discuss about it offline.

**D. Guess the misrecognized word**

1. Let's move to the next **face**.
2. I put the doc in our **conference** page.
3. It's ready for **relief**.
4. This solution is **Facebook** for us.
5. We merged it to the main **brands**.

<details>
<summary>Answers</summary>

**A.** 1 a moment ago 2 only 3 starting / introducing a topic (not "therefore") 4 in fact (correction) 5 about

**B.**
1. Do you have any updates?
2. That sounds good.
3. It's not done yet. (or `I haven't done it yet.`)
4. I will do that.
5. I have nothing to update from my side.

**C.**
1. We have finished the login page.
2. Is there any plan to support iOS?
3. We can discuss the timeline offline. (`regarding to` and `discuss about` are non-native forms.)

**D.** 1 phase 2 Confluence 3 release 4 feasible 5 branch

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Sections 3 and 9 of [Workplace Spoken English](../../workplace-spoken-english.md)
- The spoken ellipsis part of [03-advanced/16 Ellipsis, Substitution, and Parallelism](../../03-advanced/16-ellipsis-substitution-parallelism.md)
