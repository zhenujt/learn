# G07 Present Simple and Present Continuous

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: primary → junior high | Meeting data per 10,000 words: present continuous ≈ 59, `currently` ≈ 19, `working on` ≈ 12; the present simple is the default tense of every sentence (`I think`, `it means`, `we need` appear hundreds of times)
>
> [中文版](07-present-simple-and-continuous.zh.md) · [Previous: G06 Imperatives, Let's, and Polite Requests](06-imperatives-lets-please.md) · [Next: G08 Past Simple and Present Perfect](08-past-simple-and-present-perfect.md) · [Grammar index](README.md)

## What This Lesson Solves

When you say "what I'm doing today" in a stand-up or "what state this module is in" in a weekly sync, you use the two tenses in this lesson:

```text
I'm working on the login page this week.

It works on Android, but it doesn't work on iOS yet.
```

The first sentence is the **present continuous** (`am/is/are + -ing`): what you are doing during this period. The second is the **present simple**: facts and states. Chinese does not mark this difference in the verb; English does. Many colleagues say `I am work on …` or `He work on …` because they mix up the two structures.

**After this lesson, you can:**

1. Use the present simple for facts, processes, habits, and opinions, without forgetting the third-person `-s`.
2. Use the present continuous for "right now" and "these days" — the most common structure in stand-ups.
3. Know that state verbs such as `know`, `need`, `mean`, and `depend` usually do not take the continuous.
4. Get subject–verb agreement right: `the team is`, `everyone is`, `each story has`, `most of the stories are`.

## 1. The Right Way to Think About Tense

**An English tense = time + aspect.** Chinese uses small words such as `在`, `了`, and `会`. English puts this information **into the verb itself**:

| Meaning | English | Verb form |
| --- | --- | --- |
| I test it (in general) | `I test it.` | base form |
| He tests it (in general) | `He tests it.` | `-s` |
| I'm testing it now | `I'm testing it.` | `am + -ing` |

The three parts of a stand-up map to different tenses:

| Stand-up part | Main tense | Lesson |
| --- | --- | --- |
| What I did yesterday | past simple / present perfect | [G08](08-past-simple-and-present-perfect.md) |
| What I'm doing today | **present continuous** | this lesson |
| Problems and current status | **present simple** | this lesson |
| What I plan to do next | future forms | [G09](09-future-will-going-to.md) |

## 2. Present Simple: Facts, Processes, and Opinions

### 2.1 Pattern

| Sentence | I / you / we / they | he / she / it / singular noun |
| --- | --- | --- |
| Positive | `We use Jira.` | `It uses Jira.` |
| Negative | `We don't use Jira.` | `It doesn't use Jira.` |
| Question | `Do you use Jira?` | `Does it use Jira?` |

Key point: **only third-person singular subjects (he / she / it / the build / the team) add `-s`**. After `doesn't` or `does`, the verb goes back to the base form.

### 2.2 Five Uses in Meetings

**① Facts and states (most common)**

```text
The build fails on macOS.

This page shows all open requests.

It takes about ten minutes to run the full test suite.

The new version doesn't support Node 16.
```

**② Processes, rules, and habits**

When a host explains how the team works, almost every sentence is in the present simple:

```text
We have a stand-up every day at 9:30.

After the developer finishes the story, QA tests it.

The pipeline runs every night.

If the PR check fails, the bot adds a label.
```

**③ Opinions and state verbs**

`I think`, `I mean`, `it means`, `we need`, `it looks good`, and `it depends` are all present simple, and they are among the most frequent phrases in meetings:

```text
I think it looks good.

That makes sense.

It depends on the design team.

So it means the story is ready for development.
```

**④ Narrating a demo**

When you demo and describe each step, native speakers use the present simple:

```text
I click this button, and it opens the dialog.

Here you select the design system, and the form shows the request type.
```

**⑤ Timetables (with future meaning)**

Fixed schedules can use the present simple for the future. See [G09](09-future-will-going-to.md):

```text
The sprint starts on Monday.
```

### 2.3 Spelling the Third-Person -s

| Rule | Examples |
| --- | --- |
| add `-s` | `work → works`, `run → runs`, `merge → merges` |
| after `s, sh, ch, x, o` add `-es` | `pass → passes`, `push → pushes`, `fix → fixes`, `go → goes`, `do → does` |
| consonant + `y` → `-ies` | `try → tries`, `apply → applies` (vowel + y just adds s: `deploys`) |
| irregular | `have → has`, `be → is` |

### 2.4 Position of Frequency Adverbs

`always`, `usually`, `often`, `sometimes`, and `never` go **before the main verb and after be**:

```text
We usually release on Thursday.

The test is sometimes flaky.
```

## 3. Present Continuous: Now and These Days

### 3.1 Pattern

**Pattern:** `am / is / are + verb-ing`

| Sentence | Examples |
| --- | --- |
| Positive | `I'm working on it.`, `She's reviewing the PR.`, `We're testing it.` |
| Negative | `I'm not working on it.`, `It isn't loading.` |
| Question | `Are you working on it?`, `Is anyone working on this ticket?` |

You need **both** `am/is/are` and `-ing`. `I working on it` is missing `am`; `I am work on it` is missing `-ing`.

### 3.2 Four Uses in Meetings

**① Happening right now**

```text
I'm sharing my screen now.

It's still loading.

Mia is presenting, so let's wait.
```

**② Happening these days (not necessarily this second) ⭐ the stand-up favorite**

For what you are doing today, this week, or this sprint, use the continuous — even though at this moment you are in a meeting:

```text
I'm working on the date picker this sprint.

We're migrating the pipeline to Harness.

Ken is still investigating the crash.

Currently, we're waiting for access to the AWS account.
```

**③ Temporary situations (contrasted with long-term states)**

```text
I usually work on the web part, but this sprint I'm helping the native team.
```

**④ Changing trends**

```text
The build is getting slower.

More teams are using the component library now.
```

> The present continuous can also describe **arranged future plans**: `I'm meeting the design team tomorrow.` See [G09](09-future-will-going-to.md).

### 3.3 Spelling the -ing Form

| Rule | Examples |
| --- | --- |
| add `-ing` | `test → testing`, `review → reviewing`, `deploy → deploying` |
| silent `e`: drop it | `make → making`, `write → writing`, `merge → merging` |
| short stressed syllable: double the consonant | `run → running`, `set → setting`, `plan → planning`, `debug → debugging` |
| `ie` → `y` | `die → dying` |

### 3.4 Stand-Up Phrases in the Continuous

| Phrase | Meaning |
| --- | --- |
| `be working on` | doing a task |
| `be looking into` | investigating |
| `be waiting for` | waiting for |
| `be checking with` | confirming with someone |
| `be trying to` | attempting |
| `be planning to` | intending |
| `be focusing on` | concentrating on |

> ⚠️ `We are blocked by …` and `It is merged.` also contain `be`, but they are followed by a **past participle**. They are passive or adjectival, not continuous. See [G12](12-passive-voice.md).

## 4. Choosing Between the Two

**In one sentence:** the present simple says "**this is how it always is**"; the present continuous says "**this is what is happening around now**".

| Present simple | Present continuous |
| --- | --- |
| `The pipeline runs every night.` | `The pipeline is running now.` |
| `I work on the web team.` | `I'm working on the date picker.` |
| `We use Jenkins.` | `We're moving to Harness.` |
| `What do you do?` (your job) | `What are you doing?` (right now) |
| `It doesn't work on Safari.` (never supported) | `It isn't working right now.` (temporarily broken) |

```text
The test usually passes, but it's failing today.

We normally deploy on Thursday, but this week we're deploying on Friday.
```

**Signal words:**

| Present simple | Present continuous |
| --- | --- |
| `always`, `usually`, `often`, `never` | `now`, `right now`, `at the moment` |
| `every day`, `every sprint`, `by default` | `this week`, `this sprint`, `today` |
| `normally`, `in general` | `still`, `currently` |

`currently` works with both: `Currently we use Jenkins.` (a state) / `Currently we're working on the POC.` (an activity).

## 5. State Verbs: Usually No Continuous 🟡

Some verbs describe **states, thoughts, or feelings**, not actions. They usually stay in the simple form:

| Type | Verbs |
| --- | --- |
| thinking | `know`, `understand`, `believe`, `remember`, `think` (= have an opinion), `mean` |
| needs and preferences | `need`, `want`, `prefer`, `like` |
| relations and states | `depend`, `belong`, `include`, `contain`, `seem`, `agree` |

```text
I know the root cause.

We need more time.

It depends on the budget.
```

❌ `I'm knowing` ❌ `It's depending on` ❌ `I'm agree`

Some of these verbs can take the continuous when the meaning changes:

```text
I think it's a good idea.

I'm thinking about the naming.

We have two runners.

We're having a problem with the build.
```

`think` = have an opinion (state) vs `think about` = consider (action). `have` = own (state) vs `have a problem` = experience (action).

> You will often hear `I'm thinking maybe …`, `I'm wondering if …`, and `We're hoping to …`. The continuous here **softens** the statement. It is natural spoken English and worth copying.

## 6. Subject–Verb Agreement: is or are, has or have

In the present simple, the verb follows **the number of the subject**: singular subjects take `is / has / verb-s`, plural subjects take `are / have / base verb`. These subjects cause the most mistakes in meetings.

### 6.1 Team Nouns: the team is / the teams are

`team`, `QA`, and `the design team` are **one group**. American English uses the singular; British English sometimes uses the plural. You will hear both:

```text
The team is working on the sprint backlog.

The platform team has a new runner.

Both teams are using the same pipeline.
```

### 6.2 everyone / each / every: Always Singular

`everyone`, `everybody`, `anyone`, `nobody`, `each`, and `every` feel like "all of us", but they are grammatically **singular**:

```text
Everyone is here, so let's get started.

Each story has a story point.

Every ticket needs an owner.

Each of the components has its own test.
```

### 6.3 most of / some of / all of: Look at the Noun After of

| Structure | Verb | Example |
| --- | --- | --- |
| `most / some / all of + plural noun` | plural | `Most of the stories are done.` |
| `most / some / all of + uncountable noun` | singular | `Most of the work is done.` |
| `one of + plural noun` | **singular** (the subject is `one`) | `One of the tests is failing.` |
| `a lot of + plural noun` | plural | `A lot of tickets are still open.` |
| `the number of + plural noun` | singular | `The number of bugs is going down.` |

```text
Most of the stories are already done.

One of the tests is failing on CI.
```

### 6.4 A and B / Long Subjects

Two people or things joined by `and` take a plural verb. With a long subject, find the **head noun**:

```text
Mia and Ken are working on this story.

The list of open tickets is on the Confluence page.
```

In the second sentence, the head noun is `list`, so the verb is `is`.

## 7. Real Meeting Examples (Adapted)

These sentences come from real meeting subtitles. Recognition errors are fixed and names are anonymized.

```text
Currently, our developers are working on the first three subtasks under this story.

And now he's working on updating the Harness pipeline to fix this issue.

I'm checking the Confluence page you shared.

We're still waiting for the meeting request.

I'm looking into that now, actually.

We have some initial solutions, but we're still working on the POC.

This is a responsive system, so this setting also controls the typography.

When you open those inputs in Figma, you only see approved design system values.

I don't think the Node version directly affects our consumers.
```

Non-native original vs standard form:

| Subtitle original | Standard form |
| --- | --- |
| `now he's working on update the pipeline` | `now he's working on updating the pipeline` |
| `I'm working in that right now.` | `I'm working on that right now.` |
| `There is one ticket is blocking by that.` | `There's one ticket that is blocked by that.` |
| `Currently team are working on …` | `Currently, the team is working on …` (British English may use `are`) |
| `Mia and Ken has already created some epics.` | `Mia and Ken have already created some epics.` |
| `It's depending on the design.` | `It depends on the design.` |

## 8. Reading These Tenses in Subtitles

1. **Look for `be + -ing`.** `I'm / we're / he's / it's + verb-ing` means "now / these days".
2. **Subtitles often lose contractions.** Speech recognition may turn `we're working` into `we working` or `were working`. Use context (`now`, `currently`, `this week`) to see it is the present continuous.
3. **Not every `-ing` is continuous.** In `The goal is testing the flow.`, `testing` works like a noun. `The ticket is blocked.` is passive.
4. **`it's` has two meanings:** `it is` (`it's working`) or `it has` (`it's been merged`; see [G08](08-past-simple-and-present-perfect.md)).
5. **The third-person `-s` is often dropped.** Non-native speakers say `he work on it` or `it look good`. The meaning is clear, but add the `-s` when you speak.

| Possibly seen in subtitles | Standard form |
| --- | --- |
| `we working on the story` | `we're working on the story` |
| `he still investigate the issue` | `he's still investigating the issue` |
| `it look good to me` | `it looks good to me` |
| `everyone are here` | `everyone is here` |
| `the team are` | `the team is` (US) / `the team are` (UK) |

## 9. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `I am work on the login page.` | `I'm working on the login page.` | continuous needs `be + -ing` |
| `I working on it.` | `I'm working on it.` | do not drop `am` |
| `He work on the native part.` | `He works on the native part.` | third-person `-s` |
| `It don't work on iOS.` | `It doesn't work on iOS.` | third-person negative |
| `Does it works?` | `Does it work?` | base verb after `does` |
| `I'm agree.` | `I agree.` | `agree` is a verb |
| `It's depending on the budget.` | `It depends on the budget.` | state verb |
| `Every day we are having a stand-up.` | `We have a stand-up every day.` | habit → present simple |
| `Everyone have the link?` | `Does everyone have the link?` | `everyone` is singular |
| `Each of the stories have an owner.` | `Each of the stories has an owner.` | the subject is `each` |

## 10. Sentences You Can Use Today

```text
Today I'm working on the API integration.

I'm still looking into the login issue.

I'm waiting for the design team's feedback.

It works on Android, but it doesn't work on iOS yet.

The pipeline usually takes about 15 minutes.

Most of the stories are on track.

Everyone is here, so let's get started.

It depends on the backend changes.
```

## 11. Practice

**A. Choose the correct form**

1. The pipeline (runs / is running) every night.
2. Look, the pipeline (runs / is running) now.
3. I (work / am working) on the native part this sprint.
4. I (need / am needing) access to the repo.
5. We usually (release / are releasing) on Thursday.
6. Ken can't join because he (talks / is talking) to the client.

**B. Fill in is / are / has / have**

1. Everyone ___ in the meeting.
2. Most of the tickets ___ done.
3. One of the tests ___ failing.
4. Each story ___ an owner.
5. Mia and Leo ___ working on the migration.
6. Most of the work ___ finished.

**C. Correct the sentences**

1. I am work on the date picker.
2. The build don't pass.
3. It's depending on QA.
4. He still investigate the crash.
5. Does the page loads correctly?

**D. Say it in one sentence**

1. Tell the team that the date picker is your task this week.
2. Explain that your team's normal habit is to release every two weeks.
3. Say that you can't continue until the backend API is ready.

<details>
<summary>Answers</summary>

**A.** 1 runs 2 is running 3 am working 4 need 5 release 6 is talking

**B.** 1 is 2 are 3 is 4 has 5 are 6 is

**C.**
1. I'm working on the date picker.
2. The build doesn't pass.
3. It depends on QA.
4. He's still investigating the crash.
5. Does the page load correctly?

**D.**
1. I'm working on the date picker this week.
2. We usually release every two weeks.
3. I'm waiting for the backend API.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The present simple part of [01-foundations/04 Three Basic Tenses](../../01-foundations/04-three-basic-tenses.md)
- The agreement part of [02-intermediate/08 Aspect, Passive, and Agreement](../../02-intermediate/08-aspect-passive-agreement.md)
- Chapters 8, 9, 10, and 41 of [英语语法全解](../../english-grammar/英语语法全解.md)
