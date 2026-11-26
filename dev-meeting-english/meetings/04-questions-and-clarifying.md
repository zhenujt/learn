# M04 Asking, Clarifying, and Confirming

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Scene: questions after each update, during demos, post-scrum discussion | Meeting data per 10,000 words: `…, right?` ≈ 4.5, `double check` ≈ 4.5, `I'm not sure if` ≈ 4, `I wonder if` ≈ 3.5, `you mean…` ≈ 3; `could you repeat` 0
>
> [中文版](04-questions-and-clarifying.zh.md) · [Previous: M03 Hosting, Screen Sharing, and Moving On](03-hosting-and-screen-sharing.md) · [Next: M05 Opinions, Agreement, and Suggestions](05-opinions-and-suggestions.md) · [Meetings index](README.md)

## What This Lesson Solves

The host asks `Any questions?`. You do have a question, but you don't know how to start, or you worry it will sound rude, so you stay silent. After the meeting you find out you misunderstood.

This lesson teaches three things: **how to ask, how to clarify, and how to confirm**. The most useful sentence is:

```text
Just to clarify, do you mean we only need to change the status?
```

I counted how people ask questions in the real meetings and found something interesting: **almost nobody says `Could you repeat that?` (0 times)**. Instead, people say their own understanding and let the other person confirm it: `You mean …, right?`. With subtitles, the problem is usually not hearing; it is being unsure whether you understood correctly.

**After this lesson, you can:**

1. Ask a clear, polite question with the formula "lead-in + context + question".
2. Clarify meaning with `You mean …, right?` and `Do you mean A or B?`
3. Restate and confirm a conclusion with `So, just to confirm, …`
4. Respond well when you can't answer: `Let me double check and get back to you.`

## 1. The Meeting Moment: When Questions Happen

| Moment | Signal | What you can do |
| --- | --- | --- |
| After each module update | `Any questions or comments?` | Ask about status or details |
| During a demo | `Feel free to interrupt.` | `Sorry to interrupt, …` |
| Post-scrum discussion | `Does anyone have any topic?` | Raise a bigger question |
| Someone asks you directly | `Alex, do you know if …?` | Answer, or promise to check |

How people actually ask in the real meetings, from most to least frequent:

| Way | Example | Frequency |
| --- | --- | --- |
| Add `right?` to get confirmation | `It's planned for Sprint 2, right?` | 🔴 most common |
| State your understanding | `You mean the native components?` | 🟡 common |
| Ask softly | `I wonder if we can …` / `I'm not sure if …` | 🟡 common |
| Ask directly | `Who will pick this up?` | 🟡 common |
| Ask for a repeat | `Could you say that again?` | 🟢 rare, but know it |

## 2. The Speaking Formula

**Three-part question: lead-in + context + question**

> `Just a quick question.` + `For the token story,` + `do we need to update the document?`

The lead-in tells people a question is coming; the context tells them which area you mean; keep the question itself short.

**Two clarifying patterns:**

> `You mean + your understanding, right?`
> `Do you mean A or B?`

**Confirming a conclusion:**

> `So, just to confirm: + conclusion. + Is that correct?`

## 3. Sentences by Function

### 3.1 Lead-Ins

```text
Just a quick question.

I have a question about the release plan.

Sorry to interrupt, but can I ask a question?

Can I go back to the previous point for a second?
```

### 3.2 Asking About Status and Facts

```text
Is this story ready for QA?

Who will pick up this ticket?

What's this comparison for?

When do we need to finish the migration?

Are you taking care of that, or is it a follow-up story?
```

### 3.3 Asking Softly (I wonder if / I'm not sure if) 🟡

```text
I wonder if this task is blocking any other tasks.

I'm not sure if the designers are included in this process.

Do you know if the repository has been created?

I'm not sure I understand the difference between these two options.
```

`I wonder if …` and `I'm not sure if …` are statements, but in meetings **they work as questions**. They are softer than direct questions, so people often use them to ask about someone else's progress. The clause after `if` uses statement word order: `if the repository has been created`, not `if has the repository been created`. See [G18](../grammar/18-noun-clauses.md).

### 3.4 Clarifying What Someone Means ⭐ Most Useful

```text
You mean the native components, right?

Do you mean the current sprint or the next sprint?

When you say "done", do you mean merged or released?

Sorry, what do you mean by "a temporary solution"?

Is it to identify the gap between the two tools?
```

**Why this works best:** you say your understanding, and the other person only needs to answer `Yes` or correct one word. It saves time and is more polite than asking them to explain everything again.

### 3.5 When You Missed Something 🟢

```text
Sorry, I didn't catch that. Could you say it again?

Sorry, the subtitles were a bit unclear. Could you repeat the last part?

Could you put the link in the chat?

Could you spell the name of the tool?
```

Names, links, and version numbers are what subtitles get wrong most often. Asking for them in the chat is the most reliable fix.

### 3.6 Restating and Confirming

```text
So, just to confirm, we will put this story on hold. Is that correct?

Let me double check: Ken will review the PR, and I will update the ticket. Right?

So the next step is to create a subtask, right?

Just to make sure I understand correctly, we don't need to wait for the approval.
```

### 3.7 When You Are Asked: Answering or Not Knowing Yet

```text
Yes, it's ready for QA.

As far as I know, it's not started yet.

Good question. I'm not sure. Let me double check with Ken.

Let me check and get back to you after the meeting.
```

## 4. Full Dialogue: Clarifying the QA Subtask (Adapted from Real Meetings)

Scene: Grace has just explained the new board workflow. Alex has a question. Mia leads QA; Ken is the tech lead.

```text
Grace: Okay, do you have any questions regarding this part?

Alex: Yes, just a quick question. For the token story, when the status is ready for QA, do we need to change the assignee?

Grace: You mean we should assign the story to the QA engineer, right?

Alex: Yes, exactly.

Mia: No, you don't need to. Each story has a separate QA subtask, so QA will track their work there.

Alex: Oh, I see. So, just to confirm, I keep the assignee and only move the story to Ready for QA. Is that correct?

Mia: Yes, that's correct.

Alex: Got it. Thanks.

Ken: Alex, one question for you. Does the new token format work on iOS 16?

Alex: Good question. I'm not sure if we have tested it on iOS 16. Let me double check with Leo and get back to you after the meeting.

Ken: Sure, no worries.
```

Notice Alex's three moves: **ask** (lead-in + context + question) → **confirm** (`So, just to confirm, …`) → **give a next step when he can't answer** (`Let me double check … and get back to you`).

## 5. When You Hear This…

| You hear | It means | What to do |
| --- | --- | --- |
| `…, right?` / `Is that correct?` | They want you to confirm | `Yes, that's right.` or correct them |
| `You mean …?` | They are checking they understood you | `Yes, exactly.` or rephrase |
| `Alex, do you know if …?` | A question for you | Answer, or `Let me check.` |
| `Does that make sense?` | Did you understand? | `Yes, that makes sense.` or ask |
| `Correct me if I'm wrong, …` | They are about to state their understanding | Confirm or correct afterwards |
| `Good question.` | They are buying time to think | Wait for the answer |
| `I'll get back to you.` | They will answer later | Follow up after the meeting |

## 6. Reading the Subtitles

Non-native questions often have unusual word order, or are just statements with a question mark:

| You may see | Standard form |
| --- | --- |
| `What's a comparison for?` | `What's this comparison for?` |
| `Is that like to identify the gap?` | `Is it to identify the gap?` |
| `You mean, do we need to QA to prepare test case?` | `You mean, do we need QA to prepare test cases?` |
| `Can you tell me what is the status?` | `Can you tell me what the status is?` |
| `So it is you can plan in Sprint 1, is that correct?` | `So you can plan it in Sprint 1, is that correct?` |
| `I wonder if Ken task is blocking any other task?` | `I wonder if Ken's task is blocking any other tasks.` |

**How to read:**

1. Ends with `right?`, `correct?`, `is that right?` → a **confirmation request**; the part before it is their understanding.
2. Starts with `You mean` / `Do you mean` → a **clarification**; what follows is their guess.
3. Starts with `I wonder if` / `I'm not sure if` → a **soft question or concern**; what follows is the real question.
4. A statement with a question mark (`So we can plan it in Sprint 1?`) → still a question, carried by intonation.

## 7. Common Mistakes

| ❌ Wrong | ✅ Right | Why |
| --- | --- | --- |
| `Can you tell me where is the doc?` | `Can you tell me where the doc is?` | Embedded clauses use statement order |
| `What means "carry over"?` | `What does "carry over" mean?` | Wh-questions need `does` |
| `I wonder can we skip it.` | `I wonder if we can skip it.` | `wonder` + `if` + statement order |
| `I'm not sure is it ready.` | `I'm not sure if it's ready.` | Same rule |
| `I have a question want to ask.` | `I have a question.` | One clause cannot have two main verbs |
| `I want to confirm with you a question.` | `I want to confirm one thing with you.` | You confirm a fact, not a question |
| `You mean is the native part?` | `You mean the native part?` | `You mean` takes a noun or a clause directly |

## 8. Your Question and Confirmation Template

| Situation | Template | Hint |
| --- | --- | --- |
| Ask | `Just a quick question. For ________, do we need to ________?` | Lead-in + context + question |
| Ask softly | `I wonder if ________.` / `I'm not sure if ________.` | Ask about progress or show concern |
| Clarify | `You mean ________, right?` | State your understanding |
| Two options | `Do you mean ________ or ________?` | Two possible meanings |
| Confirm | `So, just to confirm, ________. Is that correct?` | Restate the conclusion |
| Can't answer | `I'm not sure. Let me double check with ________ and get back to you.` | Give a next step |

A filled-in example:

```text
Just a quick question. For the date picker story, do we need to support the old browsers? You mean only Chrome and Safari, right? So, just to confirm, we don't need to test it on the old browsers. Is that correct?
```

## 9. Grammar Used Here

| Grammar | Role in asking | Lesson |
| --- | --- | --- |
| Yes/no and wh-questions | `Is it ready?` `Who will pick it up?` | [G05](../grammar/05-questions-and-negatives.md) |
| Noun clauses (object clauses) | `I wonder if …` `Do you know what …` | [G18](../grammar/18-noun-clauses.md) |
| Modal could | `Could you put the link in the chat?` | [G11](../grammar/11-modal-verbs.md) |
| Pronoun reference | What `this comparison` or `that one` refers to | [G03](../grammar/03-pronouns-and-reference.md) |
| Spoken grammar: tags, statement questions | `…, right?` `So we can skip it?` | [G23](../grammar/23-spoken-grammar.md) |

For more real question and response phrases, see [Meeting English Phrases](../../meeting-english-phrases.md); for common terms, see [Meeting Frequent Words](../../meeting-frequent-words.md).

## 10. Practice

**A. What is the speaker doing?** (asking / clarifying / confirming / can't answer yet)

1. You mean the platform part, right?
2. So, just to confirm, the demo is moved to Thursday. Is that correct?
3. Who will pick up this ticket?
4. Let me check and get back to you.
5. Do you mean the old token format or the new one?

**B. Fix the word order**

1. Can you tell me when is the release?
2. I'm not sure is the PR merged.
3. What means "on hold"?
4. I wonder can we reuse the runner.

**C. Say it in English**

1. One small question: can this story be tested now?
2. By "done", do you mean merged or released?
3. Let me confirm: Ken is reviewing the PR, isn't he?
4. I don't know for sure. I'll check and reply after the meeting.

<details>
<summary>Answers</summary>

**A.** 1 clarifying 2 confirming 3 asking 4 can't answer yet 5 clarifying

**B.**
1. Can you tell me when the release is?
2. I'm not sure if the PR is merged. (or: has been merged)
3. What does "on hold" mean?
4. I wonder if we can reuse the runner.

**C.**
1. Just a quick question. Is this story ready for QA?
2. When you say "done", do you mean merged or released?
3. Just to confirm, Ken will review the PR, right?
4. I'm not sure. Let me check and get back to you after the meeting.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Sections 3 and 4 of [Workplace Spoken English](../../workplace-spoken-english.md)
- Sections 5 and 6 of [Software Workplace Phrases](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.md)
- Section 2 of [Core Software Business English](../../zero-to-work-english/04-工作沟通B1/software-business-english-must-know.md)
- [Adult Software English, Unit 15: Clarifying Requirements](../../adult-software-english-course/units/15-requirements.md)
- The question and clarification part of [Adult Software English, Unit 17: Participating in Meetings](../../adult-software-english-course/units/17-meetings.md)
