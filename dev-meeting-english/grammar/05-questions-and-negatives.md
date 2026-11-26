# G05 Questions, Negatives, and Short Answers

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: primary → junior high | Meeting data per 10,000 words: question marks ≈ 69; `do/does/did` questions ≈ 19; `what/how/who/when/which` questions ≈ 12; negative words (`not`, `don't`, `isn't`, `can't`…) ≈ 66, `no` ≈ 27; `we don't need to` is a top meeting phrase
>
> [中文版](05-questions-and-negatives.zh.md) · [Previous: G04 The Verb Be and There Be](04-be-and-there-be.md) · [Next: G06 Imperatives, Let's, and Polite Requests](06-imperatives-lets-please.md) · [Grammar index](README.md)

## What This Lesson Solves

Meetings are question-and-answer events. After every section, the host asks:

```text
Does anyone have any questions or comments?
```

Someone may ask you:

```text
Isn't the PR merged yet?
```

If it is not merged, Chinese habit says "Right, not yet", but English says `No, not yet.` Saying `Yes` means "it is merged". This kind of answer error causes real misunderstandings.

**After this lesson, you can:**

1. Form yes/no questions by moving the helper verb: `Is …?`, `Do you …?`, `Did you …?`, `Can you …?`, `Have you …?`
2. Ask with `what / when / who / how`, and tell the word order of `Who is working on it?` from `What did you change?`
3. Form negatives correctly: `don't / doesn't / didn't`, `not yet`, `no + noun`, `I don't think …`
4. Respond naturally with short answers, and answer negative questions according to the facts.

## 1. The Core Idea: One Helper Verb Controls Questions and Negatives

English forms questions and negatives with **the first helper verb in the predicate** (the "operator"):

- **Question:** move it before the subject.
- **Negative:** add `not` after it.

| Statement | Negative | Question | Operator |
| --- | --- | --- | --- |
| `It is ready.` | `It isn't ready.` | `Is it ready?` | `is` |
| `You can see it.` | `You can't see it.` | `Can you see it?` | `can` |
| `He has checked it.` | `He hasn't checked it.` | `Has he checked it?` | `has` |
| `You need help.` | `You don't need help.` | `Do you need help?` | none → add `do` |
| `It works.` | `It doesn't work.` | `Does it work?` | none → add `does` |
| `She fixed it.` | `She didn't fix it.` | `Did she fix it?` | none → add `did` |

**Rule:** if there is no `be`, modal, or perfect `have`, add `do / does / did`, and **the main verb goes back to its base form**: `Does it work?`, not `Does it works?`

## 2. Yes/No Questions 🔴

### 2.1 Starting with be

```text
Is it ready for review?

Are you still there?

Is my screen visible?

Was the build green yesterday?
```

### 2.2 Starting with do / does / did

```text
Do you have any questions?

Do we need to vote for this one?

Does it work on iOS?

Does anyone have other topics?

Did you check the logs?
```

### 2.3 Starting with a Modal

```text
Can you see my screen?

Could you share the link in the chat?

Should we skip this one for now?

Will it be ready by Friday?
```

### 2.4 Starting with have / has (Present Perfect)

```text
Have you checked the latest build?

Has the PR been merged?
```

## 3. Wh- Questions: what, who, when, how… 🔴

**Pattern:** `question word + yes/no question order`

| Word | Asks about | Meeting example |
| --- | --- | --- |
| `what` | thing | `What's the status of this ticket?` |
| `who` | person | `Who is working on this?` |
| `when` | time | `When will it be ready?` |
| `where` | place | `Where can I find the doc?` |
| `which` | choice | `Which option is better?` |
| `why` | reason | `Why did the build fail?` |
| `how` | way, condition | `How does it work?` |
| `how long` | duration | `How long will it take?` |
| `how many / how much` | number / amount | `How many tickets are left?`, `How much time do we need?` |

```text
What do you think?

When is the next release?

Why do we need a new pipeline?

How long will the migration take?
```

### 3.1 Subject Questions Take No do 🔴

When the question word **is the subject** ("who did it", "what happened"), keep statement order and don't add `do`:

| Asking about the subject (no do) | Asking about the object (add do) |
| --- | --- |
| `Who is working on this?` | `What are you working on?` |
| `What happened?` | `What did you change?` |
| `Who can take this ticket?` | `Who did you ask?` |
| `Which test failed?` | `Which test did you run?` |

❌ `Who did fix it?` ✅ `Who fixed it?`

### 3.2 Two Classic Chinese-Speaker Errors

```text
What do you think?

Why don't we use GitHub Actions?

How about Thursday?
```

The Chinese word *zěnme* ("how") tempts speakers to say `How do you think?`, but to ask for an opinion English uses `what`. `How do you feel about it?` is also fine, but `What do you think?` is the meeting standard. After `why`, keep question order: `Why don't we …?`, not `Why we don't …?`. `How about …?` makes a suggestion and needs no helper verb.

## 4. Choice Questions: A or B? 🟡

**Pattern:** `yes/no question + A or B?` Answer by choosing; don't say `yes / no`.

```text
Do you want to demo it today or tomorrow?

Is it a bug or a feature request?

Should we fix it now, or can we postpone it?
```

Answers: `Tomorrow, please.`, `It's a bug.`, `We can postpone it.`

## 5. Tag Questions and the Final right? 🟡

**Standard tag questions** add a short question to a statement to check something. Positive statement → negative tag; negative statement → positive tag; the helper verb must match:

```text
It's ready, isn't it?

You checked it, didn't you?

We don't need it, do we?
```

**In meetings, though, both native and non-native speakers far more often use a simple `right?`** (also `correct?` and `is that right?`). It needs no helper verb and is very easy to use:

```text
So we skip this one for now, right?

The macOS runner is for the iOS pipeline, right?

You mean the web part, correct?
```

An even simpler way: **a statement with rising intonation** (subtitles just show a question mark): `You mean the web part?`, `So it's not blocked now?`

For more spoken tags such as `right?`, `you know?`, and `okay?`, see [G23](23-spoken-grammar.md).

## 6. Negatives 🔴

### 6.1 How to Form Them

| Type | Pattern | Example |
| --- | --- | --- |
| be | be + not | `It isn't ready yet.` |
| Modal | can / will / should + not | `I can't access it.`, `It won't work.` |
| Perfect | have / has + not + past participle | `I haven't checked it yet.` |
| Ordinary verb | do / does / did + not + base verb | `It doesn't work.`, `I didn't see the message.` |

```text
I don't have any updates today.

We don't need to wait for the final design.

It doesn't work on Android.

I didn't see that in the calendar.

I haven't started it yet.
```

### 6.2 Short Answers Starting with not 🔴

Meetings often use only half a sentence:

```text
Not yet.

Not really.

Not sure.

Not right now.

Not at all.
```

### 6.3 no + Noun, nothing, never 🔴

`no` goes directly before a noun. It is shorter than `don't have any` and very common in stand-ups:

```text
No updates from my side.

No blockers.

Nothing to add.

I've never used this tool.
```

`never` is 🟡.

> ⚠️ Avoid double negatives: ❌ `I don't have no questions.` ✅ `I don't have any questions.` or `I have no questions.`

### 6.4 I don't think …: Put the Negative First 🟡

Chinese says "I think (it's) not needed". The more natural English puts the negative on `think`:

```text
I don't think we need it.

I don't think so.
```

`I think we don't need it.` is grammatical but sounds less natural. For more on `I think …`, see [G18](18-noun-clauses.md).

### 6.5 Partial Negation 🟢

```text
Not all the tests passed.
```

`All the tests didn't pass.` is ambiguous (none passed, or not all passed?). In meetings, `Not all …` or `Some tests failed.` is clearer.

## 7. Negative Questions: Answer Without Confusion 🟡

Negative questions show surprise or ask for confirmation:

```text
Isn't it merged yet?

Don't you have access?

Can't you see my screen?
```

**Rule: English answers the fact, not the form of the question.** If the fact is positive, say `Yes`; if negative, say `No`:

| Question | Fact | ✅ English answer |
| --- | --- | --- |
| `Isn't it merged yet?` | not merged | `No, not yet.` |
| `Isn't it merged yet?` | merged | `Yes, it is. It was merged this morning.` |
| `Don't you have access?` | no access | `No, I don't.` |

**Safest approach:** never answer with only `Yes` or `No`; **always add a full sentence**: `No, it's not merged yet.`

## 8. Short Answers and Natural Responses 🔴

**Standard short answers** reuse the operator from the question instead of repeating the whole sentence.

| Question | Yes | No |
| --- | --- | --- |
| `Is it ready?` | `Yes, it is.` | `No, it isn't.` |
| `Do you have access?` | `Yes, I do.` | `No, I don't.` |
| `Did you check it?` | `Yes, I did.` | `No, I didn't.` |
| `Can you see my screen?` | `Yes, I can.` | `No, I can't.` |
| `Have you tested it?` | `Yes, I have.` | `No, I haven't.` |

❌ `Yes, I can see.` (missing object) ✅ `Yes, I can.` or `Yes, I can see it.`

**More natural meeting responses:**

```text
Yeah, sure.

I think so.

I don't think so.

I hope so.

Sounds good.

Me too.

Me neither.
```

`Me neither` (🟡) responds to a negative statement. Inverted replies such as `So do I.` and `Neither do I.` are rare in meetings (🟢).

## 9. Real Meeting Examples (Adapted)

```text
Do you have any updates from the design side?

Do we have the AWS environment already?

So, do you mean there's no additional research for the Android part?

Who is responsible for updating the Jira ticket status?

Where is the source code repo?

We don't need to mention that in the document for now.

I've created a task, but I don't think it's started yet.

No, I don't have any questions.
```

## 10. Reading Subtitles

1. **Questions don't always invert.** Speech often uses "statement + question mark": `You can see my screen?`, `So we skip it?` A final question mark means it's a question.
2. **A final `right?` or `correct?` checks understanding; it is not a new question.** Answer `Yes` / `Right` / `Correct`, or correct the speaker.
3. **Negatives get lost in subtitles.** `can` and `can't` sound alike, and speech recognition often confuses them. When it matters (can we release, is it blocked), just ask: `Sorry, can or can't?`
4. **Recognize, but don't copy, non-native forms:**

| Seen in subtitles | Standard form |
| --- | --- |
| `Does anyone else has questions?` | `Does anyone else have questions?` |
| `How do you think?` | `What do you think?` |
| `Why we don't use the existing pipeline?` | `Why don't we use the existing pipeline?` |
| `When you ready for test, do we need to move the status?` | `When you're ready for testing, do we need to move the status?` |
| `Can let me share my screen?` | `Can I share my screen?` / `Let me share my screen.` |
| `I think the scope is not contain the external team.` | `I don't think the scope includes the external team.` |
| `Did you, did you mean the AWS one?` | `Did you mean the AWS one?` |

## 11. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `Does it works?` | `Does it work?` | base verb after `does` |
| `You have any questions?` | `Do you have any questions?` | a real question needs `do` (statement + rising tone is only for checking) |
| `Who did fix it?` | `Who fixed it?` | no `did` in subject questions |
| `How do you think?` | `What do you think?` | ask for opinions with `what` |
| `Why you didn't tell me?` | `Why didn't you tell me?` | invert after the question word |
| `I not sure.` | `I'm not sure.` | `be` is needed |
| `It not work.` | `It doesn't work.` | ordinary verbs use `doesn't` |
| `I don't have no questions.` | `I don't have any questions.` | no double negatives |
| `— Isn't it done? — Yes.` (it's not done) | `— Isn't it done? — No, not yet.` | answer the fact |
| `Yes, I can see.` | `Yes, I can.` / `Yes, I can see it.` | `see` needs an object, or use the operator only |

## 12. Sentences You Can Use Today

```text
Can you see my screen?

Do you have any questions or comments?

What's the status of this ticket?

Who is working on this one?

When will it be ready?

So we can skip this one, right?

Not yet. I'll finish it today.

No updates from my side.

I don't think we need it for this sprint.
```

## 13. Practice

**A. Make a yes/no question and a negative**

1. The build is green.
2. You have access to the repo.
3. She fixed the bug yesterday.
4. We can release it this week.

**B. Write the question**

1. Ask who is responsible for this ticket.
2. Ask what the other person changed.
3. Ask for someone's opinion.
4. Ask how long the migration will take.
5. Ask whether they want to demo today or tomorrow.

**C. Answer according to the facts**

1. Isn't the PR merged yet? (Fact: not merged)
2. Don't you have access to Jira? (Fact: you do have access)
3. The build failed again, right? (Fact: it did fail)

**D. Correct the sentences**

1. Does anyone has any comments?
2. Why we don't skip this one?
3. I not finish it yet.
4. It doesn't works on iOS.

<details>
<summary>Answers</summary>

**A.**
1. Is the build green? / The build isn't green.
2. Do you have access to the repo? / You don't have access to the repo.
3. Did she fix the bug yesterday? / She didn't fix the bug yesterday.
4. Can we release it this week? / We can't release it this week.

**B.**
1. Who is responsible for this ticket?
2. What did you change?
3. What do you think?
4. How long will the migration take?
5. Do you want to demo it today or tomorrow?

**C.**
1. No, not yet. It's still under review.
2. Yes, I do. I can access it.
3. Yes, it did. / Right, it failed again.

**D.**
1. Does anyone have any comments?
2. Why don't we skip this one?
3. I haven't finished it yet.
4. It doesn't work on iOS.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The questions and negatives sections of [01-foundations/05 Questions, Negatives, and Imperatives](../../01-foundations/05-questions-negatives-imperatives.md) (imperatives are in [G06](06-imperatives-lets-please.md))
- Chapter 17 (sentence types) of [英语语法全解](../../english-grammar/英语语法全解.md)
