# G12 The Passive Voice

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: junior high → senior high | Meeting data per 10,000 words: `be + past participle` ≈ 44 (including adjective-like uses such as `is done`); the most common status forms are `is done / completed / blocked`, `has been …`, and `will be …`
>
> [中文版](12-passive-voice.zh.md) · [Previous: G11 Modal Verbs](11-modal-verbs.md) · [Next: G13 Non-Finite Verbs: to do, doing, done](13-to-do-doing-done.md) · [Grammar index](README.md)

## What This Lesson Solves

In status updates, people care about **what state the ticket, PR, or build is in**, not who clicked the button. That is why updates are full of passive sentences:

```text
The PR has been approved, but the merge is blocked by the title check.
```

There are two passives here: `has been approved` and `is blocked`. Chinese often has no word for "be done by", so Chinese speakers easily miss the passive when listening and drop `be` when speaking.

**After this lesson, you can:**

1. Build the passive with `be + past participle` and explain why status updates use it so much.
2. Use the passive in different tenses: `is done`, `was merged`, `has been deployed`, `will be released`, `is being tested`, `can be skipped`.
3. Tell a passive action from a `be` + adjective state (`is done` and `is blocked` usually describe a state).
4. Recognize the spoken `get` passive and know when the active voice is better.

## 1. Why Use the Passive

- **Active voice:** the subject is the doer.
- **Passive voice:** the subject is the thing being acted on.

```text
Ken merged the PR yesterday.

The PR was merged yesterday.
```

Meetings use the passive for three reasons:

1. **The focus is the state of the thing**, not the person: `The story is completed.`
2. **The doer is unknown or unimportant**: `The account was created last week.`
3. **You don't want to name anyone**, so the tone stays neutral: `The build was broken this morning.`

**Pattern:** `thing acted on + be + past participle (+ by doer)`

> 💡 Chinese often says "the ticket created" without any passive marker. In English, always add `be`: `The ticket was created.`, not `The ticket created.`

## 2. Know Your Past Participles

The core of the passive is the **past participle** (the "done" form). Regular verbs add `-ed`; irregular ones must be learned. Common irregular participles in meetings:

| Base | Past participle | Base | Past participle |
| --- | --- | --- | --- |
| do | done | build | built |
| write | written | set up | set up |
| take | taken | give | given |
| break | broken | send | sent |
| make | made | run | run |
| show | shown | find | found |
| choose | chosen | hold | held |

```text
The fix is done.

The new runner is set up.

The test environment was broken this morning.
```

## 3. The Passive in Different Tenses

The tense of a passive sentence is carried entirely by `be`. The past participle never changes.

| Tense | Pattern | Example |
| --- | --- | --- |
| Present simple | `am / is / are + done` | `The ticket is assigned to me.` |
| Past simple | `was / were + done` | `The PR was merged yesterday.` |
| Present perfect | `has / have been + done` | `The fix has been deployed.` |
| Future | `will be + done` | `It will be released next sprint.` |
| Present continuous | `am / is / are being + done` | `The story is being tested.` |
| With a modal | `can / should / need to + be + done` | `This step can be skipped.` |

### 3.1 Present Simple Passive: Processes, Rules, Current States

```text
The pipeline is triggered by every new PR.

The tokens are generated from the Figma variables.

This ticket is assigned to Leo.
```

### 3.2 Past Simple Passive: Something That Happened at a Past Time

```text
The issue was reported by QA last week.

The service account was created yesterday.
```

### 3.3 Present Perfect Passive: "It's Done Now" ⭐ Most Useful

`has been + done` means "**done up to now**". It is the workhorse of status updates. For the tense difference, see [G08](08-past-simple-and-present-perfect.md).

```text
The PR has been approved and merged.

Most of the functionality has been migrated to the new workflow.

The access hasn't been granted yet.

Has the build been deployed to QA?
```

### 3.4 Future Passive: Planned Work

```text
The package will be published to the npm registry.

The result will be synced back to Harness.

It's going to be released in the next sprint.
```

### 3.5 Continuous Passive: In the Middle of Being Handled 🟡

```text
The story is being tested by QA.

The PR is being reviewed.
```

In speech, people often say `The PR is in review.` or `QA is testing it.` instead.

### 3.6 Modal + be done: Can / Should / Needs to Be Done

Very common when discussing options (modals: [G11](11-modal-verbs.md)):

```text
This step can be skipped for now.

It should be handled by the platform team.

The document needs to be updated.

Each change must be approved by a code owner.
```

## 4. by + Doer: Only When It Matters

**Most passive sentences in meetings have no `by` phrase.** Add `by` only when the doer is new or important information:

```text
This will be done by QA.

The task is blocked by the access request.

The PR was reviewed by Ken and Anna.
```

After `blocked by`, you often hear **a cause** rather than a person: `blocked by the access request`, `blocked by a dependency`.

Some passive phrases use other prepositions. Learn them as chunks:

| Phrase | Example |
| --- | --- |
| `be assigned to` | `It's assigned to Mia.` |
| `be used for` | `This script is used for migration.` |
| `be based on` | `The estimate is based on last sprint.` |
| `be related to` | `It's related to the token change.` |
| `be stored in` | `The secret is stored in Key Vault.` |
| `be involved in` | `QA should be involved in the review.` |

## 5. Passive or State? is done / is blocked / is completed

Many `be + past participle` forms describe **a current state**. The participle works like an adjective.

| Sentence | Reading |
| --- | --- |
| `The story is done.` | the story is finished (state) |
| `The task is blocked.` | the task is stuck (state) |
| `I'm done.` | I've finished talking / working |
| `We are all set.` | we are ready |
| `I'm confused about the workflow.` | adjective |
| `The PR was merged by Ken at 6 PM.` | action |

**When reading subtitles:** don't worry whether it's a passive or a state. Read it as "**is in this state**".

**When speaking:** both forms below are correct. The first is more common in stand-ups.

```text
The story is completed.

The story has been completed.

Once that is done, we can start the integration.
```

## 6. The get Passive: Spoken "Ended Up Being …" 🟡

`get + past participle` is spoken English. It stresses **a change or result**, often with a feeling of "finally" or "unexpectedly".

```text
The PR finally got merged last night.

My account got locked after the password change.

Did the ticket get assigned to anyone?

I got stuck on the SSL issue.
```

Another common pattern is `get + thing + past participle`: "**have something done**" (more in [G13](13-to-do-doing-done.md)):

```text
We need to get the access approved first.

I'll get it done by Friday.
```

## 7. Agreement: is or are?

In a passive sentence, `be` agrees with the subject. Watch out for `most of` and `one of`:

```text
These two stories are completed.

One of the tests is failing.

Most of the tasks have been done.

Most of the work has been done.
```

With `one of`, the subject is `one` (singular). With `most of`, look at the noun after `of`: `tasks` is plural; `work` is uncountable.

## 8. When the Active Voice Is Better

More passive is not better. Use the active voice in these cases:

1. **Action items and ownership.** `Ken will update the ticket.` is clearer than `The ticket will be updated by Ken.`
2. **Reporting your own work.** `I fixed the login bug.` makes it clear you did it.
3. **Long, heavy passives.** `It was decided that the release would be postponed.` → `We decided to postpone the release.`

**Rule of thumb:** use the passive for *the state of things*; use the active for *who does what*.

```text
The fix has been deployed to QA.

Anna will verify it tomorrow.
```

**Note:** intransitive verbs have no passive: `happen`, `occur`, `fail`, `work`, `appear`.

```text
The error happened again.

The build failed on the main branch.
```

## 9. Real Meeting Examples (Adapted)

These come from real meeting subtitles, with recognition errors fixed and names and product names replaced:

```text
For the web pull request template, these two stories are completed already.

So this task is blocked by the access request.

The PR has been approved, but it hasn't been merged yet.

I think most of the functionality has been migrated to the new workflow.

The design token package will be published to the npm registry.

I'll double-check once it's done.

I don't think the security markdown file is needed.

Sorry, I think all those technical details in the design document can be skipped.

We need to confirm whether the existing account was created for us or for another team.

Rejected means this story will not be implemented.

We'd like to see if we can get it approved first.
```

## 10. Reading the Passive in Subtitles

1. **Look for a form of `be` + a past participle.** `is/are/was/were/been/being` followed by `-ed` or `done/built/set up` is almost always a passive or a state.
2. **`been` is the strongest signal.** `has been`, `have been`, `will be`, `can be` + participle = passive.
3. **The subject is the thing being handled.** Ask "what happened to this thing?", then look for `by`.
4. **Captions often drop `-ed` and `is`.** `the ticket assign to me` really means `the ticket is assigned to me`.
5. **Recognize, but do not copy, non-native forms:**

| Heard in subtitles | Standard form |
| --- | --- |
| `if the pipeline is failed` | `if the pipeline fails` |
| `the error was happened` | `the error happened` |
| `more tickets need to create` | `more tickets need to be created` |
| `the design token package be published?` | `Will the design token package be published?` |
| `it could be further breakdown to stories` | `it can be further broken down into stories` |
| `the ticket assign to me` | `the ticket is assigned to me` |
| `It can be done by myself.` | `I can do it myself.` |

## 11. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `The ticket created yesterday.` | `The ticket was created yesterday.` | the passive needs `be` |
| `The bug has been fix.` | `The bug has been fixed.` | use the past participle |
| `The issue was happened again.` | `The issue happened again.` | `happen` has no passive |
| `The build is failed.` | `The build failed.` / `The build is failing.` | `fail` is normally not passive |
| `More tests need to add.` | `More tests need to be added.` | the subject is acted on |
| `The PR was reviewed from Ken.` | `The PR was reviewed by Ken.` | the doer takes `by` |
| `Most of the tasks has been done.` | `Most of the tasks have been done.` | `tasks` is plural |
| `It was decided by us to postpone it.` | `We decided to postpone it.` | too heavy; use the active |

## 12. Sentences You Can Use Today

```text
The PR has been approved and merged.

The fix has been deployed to the QA environment.

This story is blocked by the access request.

The ticket is assigned to me, and it's in progress.

It will be released in the next sprint.

This step can be skipped for now.

The design isn't finalized yet.

I'll let you know once it's done.

We need to get this approved first.
```

## 13. Practice

**A. Find the passive and name the tense**

1. The fix has been deployed to staging.
2. The account was created last Friday.
3. The package will be published next week.
4. The story is being tested by QA.
5. This step can be skipped.

**B. Fill in the correct form of the verb in brackets**

1. The PR ___ already ___ (approve).
2. The new version ___ (release) next Monday.
3. This ticket ___ (assign) to Priya last week.
4. The document needs to ___ (update).
5. The task ___ (block) by a dependency right now.

**C. Correct the sentences**

1. The bug fixed yesterday.
2. The error was happened in production.
3. More test cases need to add.
4. The design has been finalize.
5. Most of the stories has been completed.

<details>
<summary>Answers</summary>

**A.** 1 has been deployed, present perfect 2 was created, past simple 3 will be published, future 4 is being tested, present continuous 5 can be skipped, modal

**B.** 1 has, been approved 2 will be released 3 was assigned 4 be updated 5 is blocked

**C.** 1 The bug was fixed yesterday. 2 The error happened in production. 3 More test cases need to be added. 4 The design has been finalized. 5 Most of the stories have been completed.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The passive section of [02-intermediate/08 Aspect, Passive Voice, and Agreement](../../02-intermediate/08-aspect-passive-agreement.md)
- Chapters 31 and 41 of [英语语法全解](../../english-grammar/英语语法全解.md)
