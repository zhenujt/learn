# G22 Reported Speech and Tense Backshift

<!-- sentence-audio: fenced-only -->

> **Frequency: 🟡 Common** | Level: junior high → senior high | Meeting data per 10,000 words: reported `said / mentioned` ≈ 12; set phrases such as `as I mentioned` and `like I said` ≈ 3; `confirmed that…` ≈ 1.6; the past perfect needed for backshift only ≈ 0.4
>
> [中文版](22-reported-speech.zh.md) · [Previous: G21 Conditionals](21-conditionals.md) · [Next: G23 Spoken Grammar](23-spoken-grammar.md) · [Grammar index](README.md)

## What This Lesson Solves

In meetings people often report what someone else said. The host reminds everyone of an earlier point, or a developer reports what was confirmed with another team:

```text
As Mia just mentioned, each story must have a feature as its parent.

Ken confirmed that the Linux step can pull the Docker image.
```

The real information is in the second half. `As Mia just mentioned` and `Ken confirmed that` only tell you **who said it and how**.

Textbooks focus on tense backshift. Meeting data shows that **speakers rarely backshift**: the past perfect appears only 0.4 times per 10,000 words. What you really need is to recognize reporting structures, separate `say` from `tell`, and use a few reporting verbs correctly.

**After this lesson, you can:**

1. Recognize `as I mentioned`, `like I said`, and `he said that…` and jump to the real information.
2. Know what follows `say`, `tell`, and `ask`.
3. Apply the backshift rules, and know when spoken English ignores them.
4. Report with `mention`, `confirm`, `suggest`, `point out`, and `explain`.

## 1. Direct and Reported Speech

**Direct speech** repeats the exact words in quotation marks. **Reported speech** gives the content in your own words, usually with `that` or `if`.

```text
Ken said, "The build is green."

Ken said that the build was green.

Ken said the build is green now.
```

Meetings use reported speech almost all the time. Direct speech appears mainly when someone reads an email or a comment aloud.

**Pattern:** `who + reporting verb + (that) + full clause`

The full clause is an object clause, covered in [G18 Noun Clauses](18-noun-clauses.md). `that` is often dropped in speech.

## 2. Set Phrases: as I mentioned / like I said (Most Frequent)

The most common kind of reporting is not a full `he said that…` sentence but a short phrase meaning "this was said earlier; I'm repeating it".

**Pattern:** `As + person + (just / already) + mentioned / said, + main clause`

```text
As I mentioned, we need to verify the solution first.

As we already mentioned, the initiative is at the company level.

Like I said, it only supports tables right now.

As you said, if we only have one runner per host, only six sessions can run.

As Lily pointed out last week, the cost is still too high.
```

**How to recognize it:** the sentence starts with `As + person + mentioned/said,` or `Like I said,` followed by a comma. In subtitles you can skip it and read what follows the comma.

> `like I said` is informal; `as I said` is slightly more standard. Both are fine. `as I mentioned before` is also common and correct.

## 3. Reporting Statements: say and tell

| Verb | What follows | Example |
| --- | --- | --- |
| `say` | the content; **never a person directly** | `He said (that) it's fine.` |
| `say to + person` | rare; mostly with direct speech | `She said to me, "Thanks."` |
| `tell + person` | **must have a listener**, then the content | `He told me (that) it's fine.` |
| `tell + person + to do` | an instruction | `She told us to wait.` |

```text
He said the release is on Thursday.

He told me the release is on Thursday.

They told me that the sandbox environment should be fine.
```

❌ `He said me that…` ✅ `He told me that…` / `He said that…`

**Memory tip:** `tell` always has a listener; `say` only cares about the words.

## 4. Reporting Questions: ask if / ask what

Two changes:

1. Yes/no questions use `if` or `whether`.
2. **Word order goes back to statement order**: subject before verb, no inversion, no `do / does / did`.

**Pattern:** `ask (+ person) + if / whether + subject + verb`; `ask (+ person) + what / when / how + subject + verb`

| Original question | Reported |
| --- | --- |
| `"Is the PR ready?"` | `She asked if the PR was ready.` |
| `"Do we need a new ticket?"` | `He asked whether we need a new ticket.` |
| `"When will it be released?"` | `They asked when it will be released.` |
| `"What's the plan?"` | `Grace asked what the plan is.` |

```text
Anna asked if the testing covers the website.

The PM asked me when we can release it.

Someone asked in the chat whether we have the AWS environment already.
```

❌ `She asked what is the plan.` ✅ `She asked what the plan is.`

Meetings also use polite "self-reported" questions: `I wonder if…`, `I'm not sure if…`, `I was wondering if…`. See [G18](18-noun-clauses.md).

## 5. Reporting Requests and Suggestions

**Requests and instructions:** `ask / tell + person + to do`

```text
Ken asked me to update the ticket.

The lead told us not to merge it before Friday.
```

**Suggestions:** `suggest` has two correct patterns, and **never takes "person + to do"**.

**Pattern:** `suggest + doing`; `suggest (that) + subject + base verb`

```text
Priya suggested using the GitHub Actions runner.

Priya suggested that we post the details in the wider group.
```

❌ `Priya suggested us to post the details.`
✅ `Priya suggested that we post the details.`

> The base form `post` in `suggest that we post` is a trace of the subjunctive. In meetings people usually say `suggested we post` or `suggested we should post`; both are fine. See [G24](24-advanced-grammar-overview.md).

## 6. Backshift: The Rule and the Spoken Exceptions

### 6.1 The Textbook Rule

When the reporting verb is in the **past** (`said`, `told`, `asked`), the tense in the reported clause usually moves one step back:

| Original | Reported |
| --- | --- |
| `am / is / are` | `was / were` |
| `do / does` | `did` |
| `am doing` | `was doing` |
| `did` / `have done` | `had done` |
| `will` | `would` |
| `can` | `could` |
| `may` | `might` |

Time words may change too: `today → that day`, `tomorrow → the next day`, `yesterday → the day before`.

```text
He said he was working on the hydration test.

She said she would send the doc by Friday.

Leo said he had already fixed the pipeline.
```

### 6.2 When Meetings Do Not Backshift 🔴 Important

In real meetings most reported speech is **not** backshifted. Not backshifting is correct when:

1. **The content is still true.** `He said the release is on Thursday.` — it is still on Thursday.
2. **It was said moments ago.** `As you just said, we need more data.`
3. **The reporting verb is present or present perfect.** `He says…`, `She has confirmed that…` — the clause does not change.
4. **A future plan has not changed.** `She said she will send it tomorrow.` ("Tomorrow" is still tomorrow.)

```text
He said that for this analysis, there is no further action at this point.

Ken has confirmed that the runner supports Docker.

Mia said she will update the page tomorrow.
```

**When must you backshift?** When the content is no longer true, or you want to stress "that was what they said then":

```text
I thought it was a small change, but it wasn't.

He said it would be ready yesterday, but it's still in review.
```

**Rule of thumb:** follow the facts. If it is still true, use the present; if it is no longer true, use the past.

## 7. Reporting Verbs Used in Meetings

| Verb | Meaning | Pattern | Example |
| --- | --- | --- | --- |
| `mention` | bring up briefly | `mention + noun / that…` | `You mentioned two vulnerability issues.` |
| `say` | say | `say (that)…` | `He said it's not finalized yet.` |
| `tell` | inform someone | `tell + person + (that)… / to do` | `They told me it should be fine.` |
| `ask` | ask; request | `ask if / what…`; `ask + person + to do` | `She asked if we need a review.` |
| `confirm` | confirm | `confirm (that)…`; `confirm + noun` | `Ken confirmed that it works.` |
| `suggest` | propose | `suggest doing`; `suggest (that) we…` | `Lily suggested using AWS.` |
| `point out` | draw attention to a problem | `point out that…`; `point out + noun` | `Tom pointed out a gap in the test plan.` |
| `explain` | explain | `explain + noun / how / why…` | `Anna explained how the workflow works.` |
| `share` | pass on information | `share that…`; `share + noun` | `Leo shared that he finished the review.` |

> ⚠️ `mention`, `discuss`, and `explain` take a direct object, **without** `about`: ❌ `mention about it` ✅ `mention it`.
>
> ⚠️ `explain` does not take a person directly: ❌ `explain me` ✅ `explain it to me`.

## 8. Real Meeting Examples (Adapted)

```text
As Mia just mentioned, each story must have a feature as its parent.

I remember Grace said it's not finalized yet, but we can double-check with her.

Ken has confirmed that the Linux step can pull the Docker image, so it's not blocked now.

I talked with the platform team, and they told me the sandbox environment should be fine.

Okay, so Leo, you just mentioned two critical vulnerability issues.

Like Priya suggested, we'll post the details in the wider group.

As I confirmed with you, we will send a notification once someone is assigned to review the PR.

I saw someone mentioned it in the email thread.
```

## 9. Reading Reported Speech in Subtitles

1. **Find the reporting verb first:** `said`, `mentioned`, `told`, `asked`, `confirmed`, `suggested`. The information follows it.
2. **Treat `As … mentioned,` like brackets.** Skip it and read the main clause after the comma.
3. **`if` does not always mean "on condition that".** In `asked if`, `check if`, `confirm if` it means "whether".
4. **No backshift is normal.** `He said it is…` is not a mistake.

Common non-native forms:

| Heard in subtitles | Standard form |
| --- | --- |
| `He said me that…` | `He told me that…` |
| `as mentioned about before` | `as mentioned before` |
| `She suggested us to use it.` | `She suggested that we use it.` / `She suggested using it.` |
| `He asked what is the status.` | `He asked what the status is.` |
| `I saw Lily mentioned us some questions.` | `I saw Lily mentioned some questions to us.` / `Lily raised some questions.` |
| `I'm wondering if any information could share.` | `I'm wondering if you could share any information.` |

## 10. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `He said me the build failed.` | `He told me the build failed.` | `say` takes no person |
| `She told that it's ready.` | `She said that it's ready.` / `She told us that…` | `tell` needs a listener |
| `He asked me did I finish it.` | `He asked me if I finished it.` | `if` + statement order |
| `They asked where is the doc.` | `They asked where the doc is.` | statement order |
| `Ken suggested me to wait.` | `Ken suggested that I wait.` / `Ken told me to wait.` | no "person + to do" after `suggest` |
| `As I mentioned about, …` | `As I mentioned, …` | no `about` after `mention` |
| `Can you explain me the flow?` | `Can you explain the flow to me?` | no person directly after `explain` |

## 11. Sentences You Can Use Today

```text
As I mentioned last week, the API changes are done.

Like I said, we can leave it for now.

I checked with Ken, and he said it's not a blocker.

Mia confirmed that the fix is in the main branch.

Tom pointed out that we haven't tested it on iOS yet.

Sorry, you mentioned a new ticket. Which one was it?

The PM asked if we can finish it in this sprint.

Grace suggested that we split the story into two.
```

## 12. Practice

**A. Choose the correct form of `say` or `tell`**

1. He ___ me the PR is approved.
2. She ___ that the meeting is moved to Friday.
3. Can you ___ Anna to join the call?
4. They ___ it's not finalized yet.

**B. Change to reported speech (the content is still true, so backshift is optional)**

1. Lily asked, "Is the environment ready?"
2. Ben asked, "When will the release be?"
3. Kevin said, "I'm working on the CI issue."
4. Nina told me, "Please review my PR."

**C. Correct the sentences**

1. Priya suggested us to use the self-hosted runner.
2. He asked me what is the root cause.
3. As I mentioned about before, the doc is in Confluence.
4. Can you explain me how it works?

<details>
<summary>Answers</summary>

**A.** 1 told 2 said 3 tell (`ask` also works) 4 said

**B.**
1. Lily asked if the environment is ready. (or `was ready`)
2. Ben asked when the release will be. (or `would be`)
3. Kevin said he's working on the CI issue. (or `he was working`)
4. Nina asked me to review her PR. (requests use `ask / tell + person + to do`)

**C.**
1. Priya suggested that we use the self-hosted runner. (or `suggested using…`)
2. He asked me what the root cause is.
3. As I mentioned before, the doc is in Confluence.
4. Can you explain to me how it works? (or `Can you explain how it works?`)

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- [02-intermediate/13 Reported Speech and Long Sentences](../../02-intermediate/13-reported-speech-and-long-sentences.md)
- Chapters 42 (sequence of tenses) and 43 (direct and reported speech) of [英语语法全解](../../english-grammar/英语语法全解.md)
