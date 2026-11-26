# M01 Stand-Up Updates

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Scene: daily stand-up / daily sync-up | Meeting data per 10,000 words: `working on` ≈ 20, `currently` ≈ 17, `that's all` ≈ 11, `completed` and `done` ≈ 8 each
>
> [中文版](01-stand-up-updates.zh.md) · [Previous: G24 Advanced Grammar Overview](../grammar/24-advanced-grammar-overview.md) · [Next: M02 Weekly Sprint Sync](02-weekly-sprint-sync.md) · [Meetings index](README.md)

## What This Lesson Solves

In the stand-up, the host calls your name:

```text
Alex, do you want to go next?
```

You have 30–60 seconds. Many learners have a full update in their head but can only say `I'm doing the task.`

A stand-up update actually follows a fixed order, and it mainly uses three tenses. Once you know the order and the sentences, you can give a clear update every day:

```text
Yesterday I finished the login API. Today I'm working on the unit tests. No blockers. That's all from my side.
```

**After this lesson, you can:**

1. Understand how the host opens the stand-up, calls on people, and asks follow-up questions.
2. Give a 30-second update in the order "done → doing → next → blockers → close".
3. Choose the right tense: past for done, continuous for doing, `will` for next.
4. Handle the awkward cases: no update, back from leave, or only half done.

## 1. The Meeting Moment

A stand-up (also called a daily sync-up or daily scrum) usually lasts 15 minutes. Nobody actually stands in an online call.

In your team's real meetings, a stand-up usually looks like this:

| Step | Who speaks | Typical sentence |
| --- | --- | --- |
| Opening | Host (usually the Scrum Master) | `I think most people are here. Let's get started.` |
| Leads first | Tech lead, design lead | `Any high-level updates?` → `Nothing from my side.` |
| Updates | Each person, or the Scrum Master on their behalf | `Yesterday I… Today I'm…` |
| Follow-up | Host, tech lead | `Any blockers?` `Is it ready for QA?` |
| Closing | Host | `Okay, that's all for today. Thank you.` |

Two things to know:

- **The Scrum Master often reads updates for everyone.** So subtitles are full of third-person sentences: `Ken is working on…`, `Priya has completed two subtasks.` Reading them tells you what each teammate is doing.
- **A stand-up is not a discussion.** When a topic grows, the host says `Let's take it offline.` (let's discuss it after the meeting). Keep your update short.

## 2. The Speaking Formula

**Five steps: done → doing → next → blockers → close**

| Step | Formula | Grammar |
| --- | --- | --- |
| ① Done | `Yesterday I finished / fixed / merged + task.` or `I've completed + task.` | past simple / present perfect |
| ② Doing | `Today I'm working on + task.` / `I'm still + -ing…` | present continuous |
| ③ Next | `Next, I will + verb…` / `After that, I'm going to…` | `will` / `be going to` |
| ④ Blockers | `No blockers.` or `I'm blocked by + reason.` | `be blocked by` (passive) |
| ⑤ Close | `That's all from my side.` / `That's it for me.` | fixed phrase |

Skip any step that has nothing in it. In real meetings, nobody recites all five steps mechanically.

## 3. Sentences by Function

### 3.1 Being Called On and Starting

The host calls on you like this:

```text
Alex, do you want to go first?

Ken, any updates from your side?

Okay, Priya, you can go ahead.
```

You can start like this:

```text
Sure. So, yesterday I finished the first part.

Okay, a quick update from my side.

Yeah, for my part, the API is almost done.
```

### 3.2 What You Finished (Past Simple / Present Perfect)

```text
Yesterday I finished the login page.

I fixed the layout bug on the settings page.

I've completed two of the three subtasks.

The PR has been merged, and the story is ready for QA.

I've shared the document in the engineering channel.
```

**Choosing the tense:** if the sentence has a past time such as `yesterday` or `last week`, use the past simple (`finished`). If there is no specific time and you mean "it's done now", use the present perfect (`I've completed`). See [G08](../grammar/08-past-simple-and-present-perfect.md).

### 3.3 What You Are Doing (Present Continuous) ⭐ Most Frequent

```text
Today I'm working on the unit tests.

I'm still working on the API integration.

Currently I'm checking the build error on Android.

I'm fixing the review comments on my PR.

Ken and I are working together on the pipeline setup.
```

`working on` is one of the most frequent phrases in the meetings (about 20 per 10,000 words). Follow it with a noun or an `-ing` form: `working on the tests`, `working on fixing the tests`. Do not say `working on to fix`.

### 3.4 What Comes Next (will / going to / plan to)

```text
Next, I will add the error handling.

After that, I'm going to update the document.

I plan to finish it by tomorrow.

Once the PR is approved, I'll move the ticket to QA.

I will continue working on the same story today.
```

Note the fourth sentence: after `once`, use the present simple (`is approved`), not `will be approved`. See [G20](../grammar/20-adverbial-clauses.md).

### 3.5 Blockers (More in M06)

```text
No blockers for now.

I'm blocked by the access request. It's still pending.

I'm waiting for the design team's feedback.

I need some help from the platform team on the runner setup.
```

### 3.6 No Update or Little Progress

```text
Nothing from my side.

Nothing new. I'm still working on the same ticket as yesterday.

I was out of office yesterday, so no update from me.

Not much progress yesterday. I spent most of the day in meetings.
```

### 3.7 Closing and Handing Over

```text
That's all from my side.

That's it for me. Thanks.

That's all for my part. Ken, you can go ahead.
```

## 4. Full Dialogue: The Web Team's Stand-Up (Adapted from Real Meetings)

Scene: the web team's 15-minute daily sync. Mia is the Scrum Master, Ken is the tech lead, and Alex is you.

```text
Mia: Hi, good morning, good evening, everyone. I think most people are here, so let's get started.

Mia: Ken, any high-level updates?

Ken: No, nothing from my side.

Mia: Okay. Alex, do you want to go first?

Alex: Sure. Yesterday I finished the SSR example for the button component, and the PR is in review now.

Alex: Today I'm working on the smoke test. After that, I will add it to the CI pipeline.

Alex: No blockers. That's all from my side.

Mia: Thanks, Alex. Who is reviewing your PR?

Alex: Priya is reviewing it. I think it can be merged today.

Mia: Great. Priya, you can go next.

Priya: Okay. I'm still working on the unit test setup. Two subtasks are done, and I'm working on the coverage report now.

Priya: But I'm blocked on the macOS runner. I need someone from the platform team to check it.

Ken: I can take a look after the meeting. Let's take it offline.

Priya: Sure, thanks. That's it for me.

Mia: Okay, thank you, everyone. That's all for today.
```

**The three tenses in the dialogue:** `finished` (done yesterday) → `I'm working on` (doing today) → `I will add` (next). That is the skeleton of every stand-up update.

## 5. When You Hear This…

| You hear | It means | What to do |
| --- | --- | --- |
| `Do you want to go first / next?` | It's your turn | Say `Sure.` and start |
| `Any updates from your side?` | Please give your update | Same; if nothing, say `Nothing from my side.` |
| `Any blockers?` / `Is anything blocking you?` | Are you stuck? | `No blockers.` or name the blocker |
| `Is it ready for QA?` / `Is the PR merged?` | A status follow-up | Answer briefly: `Yes, it's…` / `Not yet, …` |
| `Let's take it offline.` | Discuss it after the meeting | Stop expanding the topic |
| `Same as yesterday?` | Has anything changed? | `Yes, I'm still working on…` |
| `X is working on…` / `X has completed…` | The Scrum Master is reading someone's update | Catch "who + what + status" |
| `That's all for today.` | The meeting is over | `Thank you. Bye.` |

## 6. Reading the Subtitles

Common speech-recognition errors and non-native forms in stand-up subtitles:

| You may see | It means / Standard form |
| --- | --- |
| `nothing from my Ann` | `nothing from my end` |
| `daily gram` / `daily scram` | `daily scrum` |
| `spring one` / `spam two` | `Sprint 1` / `Sprint 2` |
| `conference page` | `Confluence page` |
| `I will continue work on…` | `I will continue working on…` |
| `the dev store ready for dev` | `the story is ready for dev` |

**How to read:** find the person first (who), then the verb tense (done / doing / will do), then the task name. When the task name is long, treat it as one block. For example, `the unit test and E2E test configuration` simply means "that test configuration task".

## 7. Common Mistakes

| ❌ Wrong | ✅ Right | Why |
| --- | --- | --- |
| `Yesterday I finish the page.` | `Yesterday I finished the page.` | `yesterday` needs the past tense |
| `I have finished it yesterday.` | `I finished it yesterday.` | The present perfect cannot take a specific past time |
| `Today I am do the test.` | `Today I'm doing the test.` | The continuous is `be + -ing` |
| `I'm working the bug.` | `I'm working on the bug.` | `work on` is a fixed collocation |
| `No block.` | `No blockers.` | The noun is `blocker` |
| `I will continue do it.` | `I will continue working on it.` | `continue` takes `-ing` or `to do` |
| `Nothing for my side.` | `Nothing from my side.` | The fixed phrase is `from my side` |

## 8. Your Stand-Up Template

Decide what to say first, then fill in this frame. Change the content every day, not the structure.

| Step | Template | Hint |
| --- | --- | --- |
| Start | `Sure. A quick update from my side.` | Opening |
| Done | `Yesterday I finished ________.` | What you completed |
| Doing | `Today I'm working on ________.` | Current task |
| Next | `After that, I will ________.` | Next step |
| Blockers | `No blockers.` / `I'm waiting for ________.` | Anything stopping you |
| Close | `That's all from my side.` | Hand over |

A filled-in example:

```text
Sure. A quick update from my side. Yesterday I finished the date picker fix. Today I'm working on the unit tests for it. After that, I will update the ticket and move it to QA. No blockers. That's all from my side.
```

**How to practice:** spend two minutes before each stand-up filling in the template and reading it aloud twice. After two weeks, it becomes automatic.

## 9. Grammar Used Here

| Grammar | Role in the stand-up | Lesson |
| --- | --- | --- |
| Present continuous | What you are doing | [G07](../grammar/07-present-simple-and-continuous.md) |
| Past simple, present perfect | What you finished | [G08](../grammar/08-past-simple-and-present-perfect.md) |
| `will` / `be going to` | Next steps | [G09](../grammar/09-future-will-going-to.md) |
| Passive voice | `The PR has been merged.` `I'm blocked by…` | [G12](../grammar/12-passive-voice.md) |
| Prepositional phrases | `from my side`, `in review`, `ready for QA` | [G16](../grammar/16-prepositions.md) |
| Time clauses with `once` | `Once the PR is approved, …` | [G20](../grammar/20-adverbial-clauses.md) |
| Spoken ellipsis | `No blockers.` `Nothing new.` | [G23](../grammar/23-spoken-grammar.md) |

For more real meeting phrases, see [Meeting English Phrases](../../meeting-english-phrases.md) and [Meeting Frequent Words](../../meeting-frequent-words.md).

## 10. Practice

**A. Fill in the correct form of the verb**

1. Yesterday I ___ (fix) the login bug.
2. Today I ___ (work) on the payment page.
3. I ___ already ___ (complete) two subtasks.
4. After the meeting, I ___ (update) the ticket.
5. Ken ___ (review) my PR right now.

**B. Read the subtitle and answer**

> Priya is still working on the unit test setup, two subtasks are done, and next she will continue with the coverage report, but she is blocked on the macOS runner.

1. What has Priya finished?
2. What is she doing now, and what is next?
3. What is blocking her?

**C. Say these updates in English**

1. I have no update.
2. Yesterday I shared the document in the channel. Today I'm fixing the review comments.
3. I'm waiting for the design team's feedback. That's all for my part.

<details>
<summary>Answers</summary>

**A.** 1 fixed 2 am working (I'm working) 3 have, completed 4 will update 5 is reviewing

**B.**
1. Two subtasks are done.
2. She is working on the unit test setup; next is the coverage report.
3. The macOS runner.

**C.**
1. Nothing from my side.
2. Yesterday I shared the document in the channel. Today I'm fixing the review comments.
3. I'm waiting for the design team's feedback. That's all for my part.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Section 10 of [Workplace Spoken English](../../workplace-spoken-english.md)
- Section 9 of [Software Workplace Phrases](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.md)
- [Adult Software English, Unit 13: Tasks and Stand-Ups](../../adult-software-english-course/units/13-tasks-and-standups.md)
- The practice section of [Meeting English Phrases](../../meeting-english-phrases.md) (a live reference, still updated)
