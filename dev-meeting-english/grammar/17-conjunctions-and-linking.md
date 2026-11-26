# G17 Conjunctions and Linking

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: primary → junior high | Meeting data per 10,000 words: `and` ≈ 284, `so` ≈ 174 (about half at the start of a sentence), `or` ≈ 67, `also` ≈ 44, `but` ≈ 37, `then` ≈ 22, `because` ≈ 19
>
> [中文版](17-conjunctions-and-linking.zh.md) · [Previous: G16 Prepositions](16-prepositions.md) · [Next: G18 Noun Clauses](18-noun-clauses.md) · [Grammar index](README.md)

## What This Lesson Solves

`so` appears in almost every sentence of a meeting subtitle. Sometimes it means "therefore"; sometimes it only means "okay, now…". If you always read it as "therefore", the update stops making sense.

```text
So for the web part, the login page is done, but the API is not ready, so we will test it tomorrow.
```

The first `So` only opens the topic. The second `so` means "therefore". `but` marks the contrast. Three small words hold the whole update together.

**After this lesson, you can:**

1. Tell apart five roles of `so`: opener, result, summary, `so that` purpose, and replacing a clause.
2. Link your own update with `and`, `but`, `or`, `also`, and `then`.
3. Use either `because` or `so`, never `Because …, so …`.
4. Recognize `as well`, `too`, `either`, `both … and`, and `not only … but also`.

## 1. The Right Way to Think About Linking Words

**Linking words join two ideas and show their relationship:** addition (and), contrast (but), choice (or), result (so), reason (because), sequence (then).

```text
I fixed the bug, and I updated the test.

I fixed the bug, but the test is still failing.

I fixed the bug, so we can close the ticket.
```

**Pattern:** `clause A + , + and / but / or / so + clause B`

Two differences from Chinese:

- **Chinese uses pairs** ("because … so …", "although … but …"). **English uses one word only:** with `because`, drop `so`; with `although`, drop `but`.
- **Chinese often links clauses with no word at all.** In English, two full clauses need a linking word or a full stop, not just a comma.

> Terms: `and / but / or / so` are **coordinating conjunctions** (they join equal parts). `because / when / if` are **subordinating conjunctions** that start a clause; see [G20 Adverbial Clauses](20-adverbial-clauses.md). `also / then` are adverbs, but they do linking work in meetings, so they are covered here.

## 2. so: The Most Frequent Linking Word in Meetings

Roles of `so` in 25 real meetings:

| Role | Meaning | Typical phrase | Frequency |
| --- | --- | --- | --- |
| Opener / topic change | okay, now | `So, let's get started.` | 🔴 about half |
| Result | therefore | `…, so we will test it tomorrow.` | 🔴 |
| Summary | that is | `So that's all for today.` | 🔴 |
| Purpose `so that` | in order that | `…so that QA can test it.` | 🟢 about 3 per 10k |
| Replacing a clause | that, yes | `I think so.`, `If so, …` | 🟡 |

`so many`, `so much`, and `so far` are not linking words; see 2.6.

### 2.1 So, …: Opening and Changing Topics ⭐ Most Frequent

**Pattern:** `(Okay / Yeah,) so + new topic or question`

```text
So, let's get started.

Okay, so the next one is the CI pipeline.

So, any questions or comments from the design side?

Yeah, so Ken, you can go ahead.

So basically, we have three options here.
```

**How to recognize it:** `so` starts the sentence (or follows `okay` / `yeah`), there is **no reason before it**, and a new topic, question, or invitation follows.

**How to read it:** it means "okay, now I'm going to talk". Skip it when reading. Do **not** read it as "therefore".

### 2.2 …, so …: Result

**Pattern:** `reason, so + result.`

```text
The API is not ready yet, so we will test it tomorrow.

Ken is out of office today, so Mia will give the update.

It's a small change, so I don't think we need a full regression.

The build failed again, so we still need help from the platform team.
```

**Quick check:**

| Look at | Opener so | Result so |
| --- | --- | --- |
| Position | start of a sentence or a turn | between two clauses |
| Before it | no reason, or the end of a topic | a reason |
| Meaning | okay, now | therefore |

### 2.3 So that's …: Summary and Closing

```text
So that's all for my part.

So that's the plan for this sprint.

So that means we need one more sprint.
```

> ⚠️ `So that's …` is `So` + `that's`. It is **not** `so that` (purpose). If `that` is followed by `'s / is / means`, it is a summary. If a full clause (`we can …`) follows, it is purpose.

### 2.4 so that: Purpose 🟢

**Pattern:** `main clause + so that + subject + can / will / could + verb`

```text
Please add the label so that QA can find the ticket.

Let's merge it today so that we can test it tomorrow.

You can change this column to Assignee so that you can see who is working on it.
```

In speech `that` is often dropped:

```text
Send me the link so I can check it.
```

**Purpose vs result:** purpose `so (that)` usually has `can / will / could` and describes a goal. Result `so` describes something that happened or must follow.

### 2.5 so Replacing a Clause: I think so, If so

```text
Is it ready for QA? I think so.

Will it be done this week? I hope so.

Is that a blocker? I don't think so.

Do we need a new repo? If so, I will create one today.
```

The negative is `I don't think so`, not `I think not so`. The opposite of `If so` is `If not`; see [G21 Conditionals](21-conditionals.md).

### 2.6 so That Is Not a Linking Word

```text
Thank you so much.

We have so many tickets this sprint.

So far, everything looks good.
```

## 3. and: Adding, Listing, Sequence

**Pattern:** `A and B`; `A, B, and C`; `…, and then …`

```text
I finished the API changes, and I opened a PR.

We need to update the docs, the tests, and the release notes.

I will review it first, and then I will merge it.
```

`And` at the start of a sentence continues the topic or adds a point:

```text
And for the native part?

And also for the PR template, we added a checklist.
```

`and also for the …` is a frequent meeting chunk meaning "also, regarding …". `and also` is slightly redundant in writing but completely normal in speech.

> ⚠️ In a list of three or more, put `and` before the last item: `I fixed the bug, updated the docs, and wrote the tests.`

## 4. but: Contrast

```text
We tried a fix, but it didn't work.

I think it makes sense, but I'm not sure about the risk.

Maybe not today, but sometime this week would be great.
```

`but yeah` and `but anyway` in subtitles are weak ("anyway"):

```text
But anyway, we can take a look tomorrow.
```

`however` means the same as `but` but is formal; it appears about 0.1 times per 10k words in meetings. You will see it in emails and documents.

## 5. or: Choice

```text
We can do it today or tomorrow.

Is it a bug, or is it expected behavior?

Do you want to go first, or should I?
```

**Use `or`, not `and`, in negative sentences:**

```text
We don't have the access or the license.
```

`or something` and `or whatever` mean "something like that":

```text
Maybe we need a new service account or something.
```

## 6. also, as well, too, either

| Word | Position | Per 10k | Example |
| --- | --- | --- | --- |
| `also` | before a main verb; after `be` / a modal | ≈ 44 | `I also checked the logs.` |
| `as well` | end of the clause | ≈ 10.5 | `I checked the logs as well.` |
| `too` | end of the clause | ≈ 2 | `I checked the logs, too.` |
| `either` | end of a negative clause | ≈ 1 | `I didn't see it either.` |

```text
I also checked the logs.

We will also update the ticket.

It's also blocked by the license issue.

Can you take a look at the PR as well?

I didn't see the email either.
```

Two reminders:

- **In negative sentences use `either`** at the end: `I didn't see it either` sounds more natural than `I also didn't see it`. Short replies: `Me too.` / `Me neither.`
- **Use only one "also" word per clause.** `I will also take a look at the PR as well` repeats itself; keep one.

## 7. then: Sequence and Conclusion

```text
First we fix the CI, then we merge the PR.

Okay, then let's move to the next topic.

If everything is ready, then we can release it on Friday.
```

`then` means **next in time** or **in that case**. `Okay, then …` at the start almost always means "in that case".

> In writing, `then` alone cannot join two full clauses: use `…, and then …` or a full stop. In speech this does not matter.

## 8. because vs so: Say Reason or Result, Not Both

```text
We can't test it because the API is down.

The API is down, so we can't test it.
```

**`because` introduces the reason; `so` introduces the result.** Choose one.

❌ `Because the API is down, so we can't test it.`
✅ `Because the API is down, we can't test it.`
✅ `The API is down, so we can't test it.`

**because vs because of:**

```text
It's delayed because the design changed.

It's delayed because of the design change.
```

`because` + clause; `because of` + noun.

**Other ways to give a reason:**

```text
That's why we need one more sprint.

The reason is that the license is not approved yet.
```

In speech, a reply that starts with `Because …` is a complete answer:

```text
Why is it delayed? Because the API changed last week.
```

## 9. Paired Linking Words 🟢

Rare in meetings; recognize them in documents and email:

| Pair | Example |
| --- | --- |
| `both A and B` | `It supports both iOS and Android.` |
| `either A or B` | `We can use either Harness or GitHub Actions.` |
| `neither A nor B` ⚪ | `Neither option is ready.` |
| `not only A but also B` | `It's not only for the design system but also for other teams.` |

```text
We need to pass both the function test and the accessibility test.

Either way, we need to decide by the end of the sprint.
```

`either way` ("whichever option") is more common in meetings than `either … or`.

## 10. Linking a Status Update

A stand-up update is mostly linking words:

```text
Yesterday I finished the login page, and I opened a PR.

Today I'm going to fix the review comments, and then I will start the next story.

But the API is still not ready, so I can't test it end to end.

I also need some help from the platform team.

So that's all for my part.
```

The chain: **and (add) → and then (next) → but (problem) → so (impact) → also (extra) → So that's all (close)**.

## 11. Real Meeting Examples (Adapted)

From real subtitles, with recognition errors fixed and names replaced:

```text
We had an issue today, but Ken just said it should be fixed, so we will double-check tomorrow.

I think Nina hasn't joined yet, so let's start with the web updates.

I also have a review with Grace today, so I will confirm with her if we need it.

We will add more details, but right now the workflow looks good.

So instead of waiting for QA, the designer can fix the color contrast.

So if you have any comments, please let us know.

Leo tried to help, but it didn't work, so we still need support from Tom.

Both web and native teams will join the review.
```

## 12. Reading Linking Words in Subtitles

1. **Skip `So` / `Okay, so` / `Yeah, so` at the start.** The content comes after it.
2. **Split at a mid-sentence `so`:** reason before, result after.
3. **The important part usually follows `but`.** What comes before is often polite or already done.
4. **Ignore repeated linking words.** `so, so the first part` and `and, and also` are restarts.
5. **Recognize, but do not copy, non-native forms:**

| Heard in subtitles | Standard form |
| --- | --- |
| `Because it is blocked, so we can't use it.` | `Because it is blocked, we can't use it.` |
| `Even though it's a small change, but it's still a code change.` | `Even though it's a small change, it's still a code change.` |
| `I will also take a look at the PR as well.` | `I will also take a look at the PR.` |
| `I also didn't see it.` | `I didn't see it either.` |
| `If no, let's move on.` | `If not, let's move on.` |

## 13. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `Because the API is down, so we can't test.` | `The API is down, so we can't test.` | one of `because` / `so` |
| `Although it works, but it's slow.` | `Although it works, it's slow.` | one of `although` / `but` |
| `I fixed the bug, I updated the docs.` | `I fixed the bug and updated the docs.` | no comma splice |
| `We don't have time and budget.` | `We don't have time or budget.` | `or` in negatives |
| `I also don't know.` | `I don't know either.` | negative "also" = `either` |
| `I think not so.` | `I don't think so.` | fixed phrase |
| `It's delayed because the design change.` | `It's delayed because of the design change.` | `because of` + noun |

## 14. Sentences You Can Use Today

```text
So, let's get started.

I finished the API changes, and I opened a PR for review.

It's almost done, but I still need to fix one test.

The API is not ready yet, so I will test it tomorrow.

I will also update the ticket after the meeting.

Can you share the link so that I can take a look?

I don't think so. It's not a blocker for us.

So that's all for my part. Thank you.
```

## 15. Practice

**A. Identify the role of `so`** (opener / result / summary / purpose / replacing a clause)

1. So, any updates from the platform side?
2. The license is not approved, so we can't use the tool.
3. Is it a blocker? I don't think so.
4. Please assign it to me so that I can track it.
5. So that's all for today.
6. Okay, so next one is the release plan.

**B. Fill in with and / but / or / so / because / either / also**

1. I checked the logs, ___ I didn't find anything.
2. We can't merge it ___ the CI is failing.
3. Do you want to present today ___ next week?
4. Ken didn't see the email, and I didn't see it ___.
5. The design is ready, ___ we can start development.
6. I will ___ update the release notes.

**C. Correct the sentences**

1. Because Mia is on leave, so Tom will give the update.
2. Although the build passed, but some tests are skipped.
3. We don't have the access and the license.
4. I will also review it as well.

<details>
<summary>Answers</summary>

**A.** 1 opener 2 result 3 replacing a clause 4 purpose 5 summary 6 opener

**B.** 1 but 2 because 3 or 4 either 5 so 6 also

**C.**
1. Because Mia is on leave, Tom will give the update. (or: Mia is on leave, so Tom will give the update.)
2. Although the build passed, some tests are skipped. (or: The build passed, but some tests are skipped.)
3. We don't have the access or the license.
4. I will also review it. (or: I will review it as well.)

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The conjunction section of [01-foundations/07](../../01-foundations/07-modals-prepositions-conjunctions.md)
- Chapters 14 and 44 of [英语语法全解](../../english-grammar/英语语法全解.md)
