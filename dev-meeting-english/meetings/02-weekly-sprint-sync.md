# M02 Weekly Sprint Sync

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Scene: weekly sprint sync / scrum sync | Meeting data per 10,000 words: `story / stories` ≈ 32, `sprint` and `ticket` ≈ 15 each, `backlog` ≈ 10, `for the … part / side` ≈ 9, `subtask` ≈ 8
>
> [中文版](02-weekly-sprint-sync.zh.md) · [Previous: M01 Stand-Up Updates](01-stand-up-updates.md) · [Next: M03 Hosting, Screen Sharing, and Moving On](03-hosting-and-screen-sharing.md) · [Meetings index](README.md)

## What This Lesson Solves

In the weekly sync, the host shares the Jira board and walks through it module by module. The sentence you see most often looks like this:

```text
For the web part, most of the stories are completed, and the remaining items are on track.
```

You know every word, but if you don't know what `story`, `remaining items`, and `on track` mean in a sprint, you only get the general idea. Add status words such as `in dev`, `ready for QA`, and `carried over`, and the subtitles quickly run ahead of you.

**After this lesson, you can:**

1. Name the three parts of the sprint sync and know where the meeting is.
2. Recognize board items and statuses: epic, story, subtask, backlog, in dev, ready for QA, done…
3. Read the host's story-by-story sentences: who, what, and which status.
4. Give your own module's update with a fixed formula when you are called.

## 1. The Meeting Moment

Your team's sprint sync almost always has three parts:

| Part | What the host says | What happens |
| --- | --- | --- |
| ① High-level updates | `Do you have any heads-up for the whole team?` / `Any high-level updates?` | Leads share the big picture; if nothing, `Nothing from my side.` |
| ② Story updates | `I will go through the stories one by one.` / `For the web part, …` | The Scrum Master shares the board and goes through each module |
| ③ Post-scrum discussion | `Let's move to the post-scrum discussion. Any topics?` | People raise topics, give demos, discuss solutions |

Part ② is the focus of this lesson. Its rhythm is very fixed:

1. Name the module: `For the web part, …`
2. Give the overall status: `most of the stories are in dev.`
3. Go story by story: `For the SSR story, Ken is working on it…`
4. Report on follow-ups from the last meeting: `For the follow-up items we discussed yesterday, …`
5. Close, ask for questions, and switch: `That's all for the web part. Any questions?` → `Let's move to the native part.`

A sprint also has other fixed meetings. You will often hear their names:

| Meeting | Meaning | Common words |
| --- | --- | --- |
| sprint planning | Decide which stories go into the sprint | `scope`, `capacity`, `commit` |
| grooming / refinement | Clarify stories and estimate them | `story point`, `estimation`, `planning poker` |
| sprint review / demo | Show finished work to stakeholders | `demo`, `accepted`, `feedback` |
| retro (retrospective) | Look back at what went well and what to improve | `what went well`, `action items` |

## 2. Know the Board: Sprint Vocabulary

### 2.1 Levels of Work Items

| Word | Meaning | Note |
| --- | --- | --- |
| `epic` | a large body of work | spans several sprints |
| `feature` | a releasable function | contains several stories |
| `story` / `user story` | a unit of work that fits in one sprint | updates are mostly given per story |
| `task` / `subtask` | a concrete piece of a story | for example, a dev subtask and a QA subtask |
| `ticket` / `item` / `work item` | any card on the board | general word |
| `backlog` | work not yet planned into a sprint | the "waiting list" |
| `sprint` | an iteration | usually two weeks: `Sprint 1`, `Sprint 2`… |

```text
This story belongs to the component library epic.

There are three subtasks under this story.

We added two new items to the backlog today.
```

### 2.2 Statuses: The Path of a Story

In one real meeting, the host walked through every board status. In order:

| Board status | How to say it | Meaning |
| --- | --- | --- |
| `New` / `Backlog` | `It's still in the backlog.` | just created |
| `Ready for refinement` | `It's ready for refinement.` | waiting to be clarified |
| `Refined` / `Ready for dev` | `It's ready for dev.` | developers can pick it up |
| `Dev in progress` | `It's in dev.` / `Ken is working on it.` | being developed |
| `Peer review` | `The PR is in review.` | code review |
| `Ready for QA` / `Ready for test` | `It's ready for QA.` | can be tested |
| `QA in progress` / `Testing` | `QA is testing it.` | being tested |
| `Test passed` / `Ready for acceptance` | `The test has passed.` | waiting for acceptance |
| `Ready for release` | `It's ready for release.` | can be released |
| `Done` | `It's done.` / `It's completed.` | finished |

And the exception statuses:

| Status | How to say it | Meaning |
| --- | --- | --- |
| `On hold` | `We put it on hold.` | paused by decision |
| `Blocked` | `It's blocked by the approval.` | wanted but cannot continue |
| `Removed` | `We removed it from the sprint.` | taken out of the sprint |
| `Rejected` | `This story was rejected.` | will not be done |

**Grammar note:** statuses almost always use `be + preposition phrase / adjective`: `is in dev`, `is in review`, `is ready for QA`, `is on hold`, `is done`. No complex verbs needed. See [G04](../grammar/04-be-and-there-be.md) and [G16](../grammar/16-prepositions.md).

### 2.3 Planning and Estimation Words 🟡

| Word | Meaning | Example |
| --- | --- | --- |
| `story point` | a unit for estimating effort | `I'd give it three story points.` |
| `estimation` / `estimate` | estimating | `Let's do the estimation for the remaining backlog.` |
| `scope` | what is included | `The scope of this sprint is finalized.` |
| `capacity` | how much work the team can take | `We don't have enough capacity this sprint.` |
| `carry over` | move unfinished work to the next sprint | `Two stories were carried over from Sprint 1.` |
| `pick up` | start working on | `Who can pick up this story?` |
| `plan into` | put into a sprint | `We will plan it into the next sprint.` |

## 3. The Speaking Formula

**The host's walk-through (you need to read it):**

> `For + module, + overall status.` → `For + story, + who + is working on it / it is + status.` → `That's all for + module. Any questions?`

**When you are called (you need to say it):**

> `Sure. For + my module, + overall status.` → `For + story A, + status + next step.` → `For + story B, + status.` → `That's all for + module.`

The difference from a stand-up: a stand-up is organized by person (I did, I'm doing); a sprint sync is organized by story (where is this story now). That is why the sprint sync uses more third person and passive voice: `It has been merged.`, `It was moved to QA.`

## 4. Sentences by Function

### 4.1 Host: Opening the Story Updates

```text
Okay, so I will go through the sprint story updates.

Let me share my screen. This is our sprint board.

I will update the web part first.

I will go through the status of each story one by one.
```

### 4.2 Overall Status of a Module

```text
For the web part, most of the stories are completed, and the remaining items are on track.

For the other stories in the current sprint, almost every story is in dev.

For the platform part, we have finished sprint planning, and most of the scope is finalized.

We are a bit behind on the native part, mainly because of the runner issue.
```

### 4.3 Story-by-Story Status ⭐ Most Frequent

```text
For the SSR story, Ken is already working on it.

This story is in dev, and the PR will be ready for review tomorrow.

Almost all the subtasks are completed, and the PR is now in peer review.

Priya has completed two subtasks, and she will continue with the coverage report.

The whole story is done, and the document has been shared in the engineering channel.

This one is ready for QA. Anna will start testing it today.

We have only two checkpoints remaining to validate.

This story is blocked by the access request, so we put it on hold for now.
```

### 4.4 Plans, Carry-Over, and the Backlog

```text
These two stories were carried over from the last sprint.

This one is not planned for the current sprint. It's still in the backlog.

We will plan it into the next sprint.

We created a follow-up story for the code changes.

We will continue the estimation for the remaining backlog tomorrow.
```

### 4.5 When You Are Called: Your Module's Update

```text
Sure. For the native part, we are still working on the CI setup.

The Android pipeline is running now, and the iOS pipeline is in progress.

For the token story, I've finished the first version, and it's in review.

Next, we will start the publishing workflow.

So that's the update for the native part. Any questions or comments?
```

### 4.6 Switching Modules and Inviting Others

```text
That's all for the web part. Let's move to the native part.

Ken, do you want to add anything here?

If no further comments, Mia, you can go ahead.

Okay, that's all for the scrum updates. Let's move to the post-scrum discussion.
```

## 5. Full Dialogue: The Sprint Sync (Adapted from Real Meetings)

Scene: the weekly sprint sync. Grace is the Scrum Master, Ken is the tech lead, and Alex (you) owns the native part.

```text
Grace: Okay, Ken, do you have any heads-up for the whole team?

Ken: No, nothing from my end.

Grace: Okay. So I will go through the sprint story updates. Can you see my screen?

Ken: Yes, we can see it.

Grace: For the web part, most of the stories are completed, and the remaining items are on track.

Grace: For the SSR story, Leo has finished the examples for different frameworks. Now he is working on the smoke test.

Grace: For the visual test story, almost all the subtasks are done, and the PR is in peer review.

Grace: And the browser support story is not planned for this sprint. It's still in the backlog.

Grace: That's all for the web part. Any questions?

Ken: Looks good to me.

Grace: Okay, let's move to the native part. Alex, can you give an update?

Alex: Sure. For the native part, we are still working on the CI setup.

Alex: The Android pipeline is running now. The iOS pipeline is in progress, because we need a macOS runner.

Alex: As a temporary solution, I set up a local runner, so this story is not blocked.

Alex: For the token story, the first version is done and ready for QA.

Alex: That's all for the native part. Any questions or comments?

Ken: Thanks, Alex. For the local runner, I think it's fine for now, but let's find a better long-term solution.

Alex: Sure. I will create a subtask to track it.

Grace: Great. That's all for the scrum updates. Let's move to the post-scrum discussion.
```

## 6. When You Hear This…

| You hear | It means | What to do |
| --- | --- | --- |
| `Any heads-up for the whole team?` | Part ①, high-level updates | Usually for leads; you can stay quiet |
| `I will go through the story updates.` | Part ② begins | Get your module update ready |
| `For the web part, …` | A module starts | Check whether it's yours |
| `Let's move to the native part.` / `Alex, can you give an update?` | Your module's turn | Use the formula |
| `Is this one ready for QA?` | A status follow-up | Answer with a status word |
| `Can we close this one?` | Can the ticket be closed? | `Yes, it's done.` or `Not yet, …` |
| `This one will be carried over.` | It won't finish this sprint | Check whether it's yours |
| `Let's move to the post-scrum discussion.` | Part ③ begins | Raise your topic now |

## 7. Reading the Subtitles

| You may see | It means / Standard form |
| --- | --- |
| `spring board` / `spring planning` | `sprint board` / `sprint planning` |
| `the dev store ready for dev` | `the story is ready for dev` |
| `test path` | `test passed` |
| `ready for relief` | `ready for release` |
| `unhold` | `on hold` |
| `Pam form part` / `web port` | `platform part` / `web part` ("port" is often `pod` or `part`) |
| `post-scram session` | `post-scrum session` |
| `regarding to the backlog` | `regarding the backlog` (non-native) |
| `another two backlog we created` | `another two backlog items we created` |

**How to read:** when you see `For the …,` treat it as a heading; the important part comes after the comma. The host often reads a whole long story title aloud, for example `For the set up verification in pipeline to ensure the code format meet the standard`. You don't need to understand the full title. **Jump past the comma and look for the person and the status word.**

## 8. Common Mistakes

| ❌ Wrong | ✅ Right | Why |
| --- | --- | --- |
| `The story is in develop.` | `The story is in dev.` / `in development` | `develop` is a verb; a preposition needs a noun |
| `It's ready to QA.` | `It's ready for QA.` | `ready for + noun` |
| `Most of stories are done.` | `Most of the stories are done.` | `most of` needs `the` |
| `Two backlog was added.` | `Two backlog items were added.` | `backlog` usually means the whole list; one entry is a `backlog item` |
| `The story was carry over.` | `The story was carried over.` | The passive needs the past participle |
| `This story is block.` | `This story is blocked.` | Use the participle `blocked` for the state |
| `Everything is on the track.` | `Everything is on track.` | Fixed phrase, no `the` |

## 9. Your Module Update Template

| Step | Template | Hint |
| --- | --- | --- |
| Start | `Sure. For the ________ part, …` | Name your module |
| Overall | `most of the stories are ________ (in dev / done / on track).` | Overall status |
| Story A | `For the ________ story, I've ________, and it's ________ (in review / ready for QA).` | First story |
| Story B | `For the ________ story, we are still working on ________.` | Second story |
| Plan | `Next, we will ________.` / `This one will be carried over.` | Next step or carry-over |
| Close | `That's all for the ________ part. Any questions or comments?` | Close and invite questions |

A filled-in example:

```text
Sure. For the web part, most of the stories are on track. For the date picker story, I've finished the fix, and it's ready for QA. For the theme story, we are still working on the dark mode tokens. Next, we will update the documentation. That's all for the web part. Any questions or comments?
```

## 10. Grammar Used Here

| Grammar | Role in the sprint sync | Lesson |
| --- | --- | --- |
| be + preposition phrase / adjective | `is in dev`, `is ready for QA`, `is on hold` | [G04](../grammar/04-be-and-there-be.md) |
| Present continuous | `Ken is working on it.` | [G07](../grammar/07-present-simple-and-continuous.md) |
| Present perfect | `She has completed two subtasks.` | [G08](../grammar/08-past-simple-and-present-perfect.md) |
| Passive voice | `It was carried over.` `The PR has been merged.` | [G12](../grammar/12-passive-voice.md) |
| Phrasal verbs | `pick up`, `carry over`, `go through` | [G14](../grammar/14-phrasal-verbs-and-collocations.md) |
| `For X, …` as a topic marker | `For the web part, …` | [G16](../grammar/16-prepositions.md) |
| Quantity expressions | `most of the stories`, `two of the three subtasks` | [G02](../grammar/02-nouns-articles-quantifiers.md) |

For more board and ticket vocabulary, see [Meeting Frequent Words](../../meeting-frequent-words.md); for common sentence patterns, see [Meeting English Phrases](../../meeting-english-phrases.md).

## 11. Practice

**A. Match the status with its meaning**

1. in dev 2. ready for QA 3. in peer review 4. on hold 5. carried over 6. in the backlog

a. paused b. in code review c. moved to the next sprint d. being developed e. not planned into a sprint yet f. can be tested

**B. Read the subtitle and answer**

> For the visual test story, the most tests under this story is already done, and currently the Linux visual CI and baselines are in the review phase, and the browser story is not planned to current sprint.

1. What is the status of the visual test story?
2. What about the browser story?
3. The subtitle has two grammar errors. What are the standard forms?

**C. Give the update in English (when called)**

1. Sure. For the platform part, most stories are being developed.
2. The documentation story is finished, and the pipeline story is in code review.
3. This story will move to the next sprint. That's all for the platform part.

<details>
<summary>Answers</summary>

**A.** 1-d 2-f 3-b 4-a 5-c 6-e

**B.**
1. Most of the tests are done; the Linux visual CI and baselines are in review.
2. It is not planned for this sprint (still in the backlog).
3. `the most tests … is already done` → `most of the tests … are already done`; `not planned to current sprint` → `not planned for the current sprint`.

**C.**
1. Sure. For the platform part, most of the stories are in dev.
2. The documentation story is done, and the pipeline story is in review.
3. This story will be carried over to the next sprint. That's all for the platform part.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Section 10 of [Workplace Spoken English](../../workplace-spoken-english.md)
- Sections 8 and 9 of [Software Workplace Phrases](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.md)
- Sections 3 and 4 of [Core Software Business English](../../zero-to-work-english/04-工作沟通B1/software-business-english-must-know.md)
- The ticket planning section of [Meeting Frequent Words](../../meeting-frequent-words.md) (a live reference, still updated)
