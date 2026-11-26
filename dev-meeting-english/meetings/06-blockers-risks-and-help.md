# M06 Blockers, Risks, Delays, and Asking for Help

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Scene: the blockers step of the stand-up, story status in the sprint sync, asking for help after the meeting | Meeting data per 10,000 words: `depend(s / ing / ency)` ≈ 9.5, `help` ≈ 5, `pending` ≈ 3, `blocked / blocker` ≈ 2.5, `risk` ≈ 2
>
> [中文版](06-blockers-risks-and-help.zh.md) · [Previous: M05 Opinions, Agreement, and Suggestions](05-opinions-and-suggestions.md) · [Next: M07 Wrap-Up, Action Items, and Follow-Up](07-wrap-up-and-action-items.md) · [Meetings index](README.md)

## What This Lesson Solves

When work gets stuck, many people only say `I have some problems.` in the stand-up, and nothing more. Nobody knows where you are stuck, how serious it is, or who should help, so the problem drags on.

A good blocker update tells listeners **who should do what next**:

```text
I'm blocked by the access request. It's still pending, so I can't test on the staging environment. Could someone from the platform team help me check it?
```

**After this lesson, you can:**

1. Tell the difference between a blocker, a dependency, a risk, and a delay, and use each correctly.
2. Explain a blocker in the order "problem → reason → impact → what you need".
3. Flag risks and delays early, together with a temporary solution.
4. Ask for help politely and specifically, and offer help to others.

## 1. The Meeting Moment: When Problems Come Up

| Moment | Signal | What to say |
| --- | --- | --- |
| The blockers step of the stand-up | `Any blockers?` | Explain clearly, or `No blockers.` |
| Your story in the sprint sync | `What's the status of this one?` | Give the status and the blocker |
| The tech lead follows up | `Is anything blocking you?` / `Is this a hard blocker?` | Explain the impact and the help you need |
| Post-scrum discussion | `Any topics?` | Raise a problem that needs the group |

First, separate four words. They mean different things in meetings, and **mixing them up makes people misjudge how serious the problem is**:

| Word | Meaning | Example |
| --- | --- | --- |
| `blocker` / `blocked` | completely stuck | `I'm blocked by the access request.` |
| `dependency` / `depend on` | you must wait for someone else first | `This story depends on the design team.` |
| `risk` | something may go wrong; it hasn't happened yet | `There's a risk that we can't finish it this sprint.` |
| `delay` / `behind` | it will definitely be late | `This story will be delayed by two days.` |

Your tech lead often asks `Is it a hard blocker?`. A `hard blocker` means you truly cannot continue; `not a hard blocker` means it is annoying but you can work around it.

## 2. The Speaking Formula

**Four steps to explain a blocker:**

| Step | Formula | Example |
| --- | --- | --- |
| ① Problem | `I'm blocked by / on + thing.` | `I'm blocked on the iOS pipeline.` |
| ② Reason | `because + reason` / `It's still pending.` | `because we don't have a macOS runner.` |
| ③ Impact | `so + what can't happen / what will be late` | `so the iOS tests can't run.` |
| ④ Need / next step | `Could someone + action?` / `In the meantime, I will + action.` | `Could someone from the platform team help?` |

**Risks and delays:** `There's a risk that + clause.` / `This will probably slip to the next sprint, because + reason.` + `To reduce the risk, we will + action.`

## 3. Sentences by Function

### 3.1 Reporting a Blocker

```text
I'm blocked by the access request. It's still pending.

I'm blocked on the iOS pipeline, because we don't have a macOS runner yet.

I can't merge the PR, because the title check keeps failing.

The PR is ready, but it's still waiting for review and approval.

I'm waiting for the final design from the design team.
```

`blocked by` is followed by **the thing stopping you**; `blocked on` is followed by **the work that is stuck**. People mix them in everyday meetings; just understand both.

### 3.2 Dependencies 🟡

```text
This story depends on the token work from the design team.

Once the repository is created, we can start the publishing workflow.

We can't start this task until the approval is done.

These two tasks don't depend on each other, so we can work on them in parallel.
```

After `once` and `until`, use the present simple for the future: `Once the repository is created`, not `will be created`. See [G20](../grammar/20-adverbial-clauses.md).

### 3.3 Flagging Risks 🟡

```text
There's a risk that we can't finish it in this sprint.

The license will expire soon, so we may need to move to another tool.

If the approval is rejected, we will need another option.

I just want to flag this early.
```

### 3.4 Reporting Delays

```text
This story will probably be carried over to the next sprint.

It took longer than expected, because there were more dependencies.

We are a bit behind schedule on the native part.

I need two more days to finish the tests.
```

### 3.5 Workarounds

```text
As a temporary solution, I set up a local runner.

There is a workaround, so it's not a hard blocker.

In the meantime, I will work on the Android part.

We can use the old repository to validate the workflow for now.
```

**If you only report the problem without a plan, it sounds like you are waiting for others to fix it.** Adding `In the meantime, I will …` makes you sound proactive.

### 3.6 Asking for Help ⭐ Most Useful

```text
Could someone from the platform team help me check the runner?

Do you know who I should contact about the license?

Ken, could you approve my access request when you have time?

Could you take a look at my PR? It's blocking the QA testing.

Can we raise this with the platform team?
```

When you ask for help, **name the specific action** (check the runner, approve the request, take a look at the PR). It works much better than `Can you help me?`

### 3.7 Offering Help and Moving Things Forward

```text
I can help with the Android setup if you need.

Let me ping the platform team after the meeting.

Let's kick off the approval process as early as possible.

Thanks for your help. The PR has been merged, so others are unblocked now.
```

## 4. Full Dialogue: Stuck on the iOS Pipeline (Adapted from Real Meetings)

Scene: the sprint sync reaches the native part. Alex (you) owns the iOS pipeline. Ken is the tech lead, Grace is the Scrum Master, and Priya is from the platform team.

```text
Grace: Okay, for the native part, Alex, what's the status of the iOS pipeline story?

Alex: I'm still blocked on the iOS pipeline. The shared cluster can't run macOS builds, so the iOS tests can't run.

Ken: Is it a hard blocker? Can you work on anything else in the meantime?

Alex: Not really a hard blocker. In the meantime, I'm working on the Android part. But there's a risk that the iOS part will be carried over to the next sprint.

Grace: Okay. What do you need to unblock it?

Alex: We need a macOS runner. I submitted a request last week, but it's still pending. Priya, do you know who I should contact about it?

Priya: I think it's the cloud team. Let me ping them after the meeting and check the status for you.

Alex: Thank you. That would be really helpful.

Ken: Also, as a temporary solution, maybe you can set up a local runner, so the pipeline is not completely blocked.

Alex: Sure. I will try that today and update the ticket.

Grace: Great. I'll mark this story as at risk for now. Let's check it again in tomorrow's sync.
```

Alex's answer has all four steps: **problem** (`blocked on the iOS pipeline`) → **reason** (`can't run macOS builds`) → **impact** (`the iOS tests can't run` / `risk … carried over`) → **need** (`We need a macOS runner … who I should contact`).

## 5. When You Hear This…

| You hear | It means | What to do |
| --- | --- | --- |
| `Is anything blocking you?` | Are you stuck? | Use the four steps, or `No blockers.` |
| `Is it a hard blocker?` | Are you completely stuck? | Say whether you can work around it or do other work |
| `What do you need to unblock it?` | What help do you need? | Name the person and the action |
| `It depends on …` | It waits for someone else's work | Note whom it depends on |
| `It's pending …` / `waiting for approval` | Still waiting, not rejected | Not a failure; ask for an expected date |
| `Let's escalate this.` / `Let's raise this with …` | Take it to a higher level or another team | Prepare the details |
| `I'll mark it as at risk.` | The story is flagged as at risk | Bring an update next time |
| `It's unblocked now.` | The problem is solved | Update the status |

## 6. Reading the Subtitles

| You may see | It means / Standard form |
| --- | --- |
| `it's not a truly blocker` | `it's not really a blocker` |
| `pending by the repository creation` | `pending the repository creation` / `blocked by the repository creation` |
| `we can kick that start` | `we can kick it off` (start it) |
| `premier license` | `premium license` |
| `a 19 days trail` | `a 19-day trial` (`trail` is an ASR error for `trial`; the number may also be wrong, so confirm it) |
| `this task is blocked by the` + next line | The reason is on the next subtitle line; read them together |
| `we merged this to our main brands` | `we merged this to our main branch` |

**How to read:** when you see `blocked`, `pending`, `depends on`, `risk`, or `waiting for`, look for three things: **which task**, **what is stopping it**, and **who will fix it**. Numbers, dates, and tool names are the most likely to be misrecognized; ask for important ones in the chat.

## 7. Common Mistakes

| ❌ Wrong | ✅ Right | Why |
| --- | --- | --- |
| `I am blocking by the approval.` | `I'm blocked by the approval.` | Being stuck is passive: `be blocked by` |
| `It depends the design.` | `It depends on the design.` | `depend on` is fixed |
| `The task is delay.` | `The task is delayed.` | Use the past participle for the state |
| `I'm waiting the approval.` | `I'm waiting for the approval.` | `wait for` |
| `It will postpone to next sprint.` | `It will be postponed to the next sprint.` | The task "is postponed": passive |
| `We have a risk to delay.` | `There's a risk of delay.` / `There's a risk that it will be delayed.` | `risk of + noun` or `risk that + clause` |
| `Once it will be approved, …` | `Once it is approved, …` | Present simple after `once` |

## 8. Your Blocker Template

| Step | Template | Hint |
| --- | --- | --- |
| Problem | `I'm blocked by / on ________.` | What you are stuck on |
| Reason | `because ________.` / `It's still pending.` | Why |
| Impact | `so ________ can't ________.` / `There's a risk that ________.` | What it affects |
| Workaround | `In the meantime, I will ________.` | What you do now |
| Ask | `Could someone ________?` / `Do you know who I should contact about ________?` | Who should do what |

A filled-in example:

```text
I'm blocked by the test account. I requested it on Monday, but it's still pending, so I can't test the payment flow. In the meantime, I will write the unit tests. Do you know who I should contact about the test account?
```

## 9. Grammar Used Here

| Grammar | Role in reporting blockers | Lesson |
| --- | --- | --- |
| Passive voice | `be blocked by`, `be delayed`, `be carried over` | [G12](../grammar/12-passive-voice.md) |
| Modals may / might / could | Possibility of risks; polite requests | [G11](../grammar/11-modal-verbs.md) |
| Time clauses with once / until | `Once the repo is created, …` | [G20](../grammar/20-adverbial-clauses.md) |
| Conditionals | `If the approval is rejected, …` | [G21](../grammar/21-conditionals.md) |
| Polite requests | `Could someone …?` | [G06](../grammar/06-imperatives-lets-please.md) |
| Object clauses | `Do you know who I should contact?` | [G18](../grammar/18-noun-clauses.md) |
| Conjunctions because / so | Link reasons and impact | [G17](../grammar/17-conjunctions-and-linking.md) |

For more real help and follow-up phrases, see [Meeting English Phrases](../../meeting-english-phrases.md); for cross-team vocabulary, see [Meeting Frequent Words](../../meeting-frequent-words.md).

## 10. Practice

**A. Is it a blocker, a dependency, a risk, or a delay?**

1. We can't start until the design team finishes the tokens.
2. There's a chance the license won't be renewed in time.
3. I can't run the tests at all because I don't have access.
4. This story will be two days late.

**B. Fill in the blanks**

1. I'm ___ by the approval. (block)
2. This story depends ___ the platform team.
3. ___ the repository is created, we can start.
4. I'm waiting ___ the final design.
5. There's a risk ___ we can't finish it this sprint.

**C. Use the four steps to say this in English**

You can't merge your PR. Auto-merge requires a premium license, so QA cannot start testing. While you wait, you will update the documentation. You want Ken to merge it manually for you.

<details>
<summary>Answers</summary>

**A.** 1 dependency 2 risk 3 blocker 4 delay

**B.** 1 blocked 2 on 3 Once 4 for 5 that

**C.** I'm blocked on merging the PR. Auto-merge needs a premium license, so QA can't start testing. In the meantime, I will update the documentation. Ken, could you help me merge it manually?

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Sections 5 and 11 of [Workplace Spoken English](../../workplace-spoken-english.md)
- The risk part of section 9 and section 12 of [Software Workplace Phrases](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.md)
- [Adult Software English, Unit 14: Reporting and Reproducing Bugs](../../adult-software-english-course/units/14-bugs.md)
- [Adult Software English, Unit 19: Messages, Handover, and Incident Updates](../../adult-software-english-course/units/19-messages-and-incidents.md)
