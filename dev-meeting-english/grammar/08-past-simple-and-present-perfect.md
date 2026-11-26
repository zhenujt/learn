# G08 Past Simple and Present Perfect

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: junior high | Meeting data per 10,000 words: present perfect ≈ 32, `already` ≈ 26, `was/were` ≈ 11, `shared` ≈ 9, `completed` ≈ 7, `finished` ≈ 6, `yet` ≈ 4
>
> [中文版](08-past-simple-and-present-perfect.zh.md) · [Previous: G07 Present Simple and Present Continuous](07-present-simple-and-continuous.md) · [Next: G09 Talking About the Future](09-future-will-going-to.md) · [Grammar index](README.md)

## What This Lesson Solves

A stand-up usually starts with "what I did and what I finished". Chinese can say it all with one particle, `了`. English has two options:

```text
Yesterday I fixed the login bug.

I've already raised a PR, but it hasn't been merged yet.
```

The first sentence uses the **past simple** (`fixed`) because it has a clear past time, `yesterday`. The second uses the **present perfect** (`have raised`) because it describes "the result up to now". These two tenses are the core of progress reports, and they are what Chinese engineers mix up most.

**After this lesson, you can:**

1. Use the past simple for what you did yesterday, last week, or just now.
2. Use the present perfect for "already done", "so far", and "not yet".
3. Use `already`, `yet`, `just`, `still`, `so far`, `since`, and `for` correctly.
4. Remember the irregular verbs software teams actually use — no more `builded` or `have saw`.

## 1. The Core Difference: Time or Result

**In one sentence:**

- **Past simple**: the camera points at **a time in the past**. "When" matters.
- **Present perfect**: you stand **now** and look at the **result** of a past action. "What is the state now" matters.

| | Past simple | Present perfect |
| --- | --- | --- |
| Form | `did` | `have / has + past participle` |
| Focus | past time, the story | present result, current state |
| Specific past time? | ✅ `yesterday`, `last week` | ❌ not allowed |
| Example | `I merged it yesterday.` | `I've merged it.` (it is merged now) |

Ask yourself: **am I talking about "back then", or about "the state now"?**

## 2. Past Simple: What Happened in the Past

### 2.1 Pattern

| Sentence | Example |
| --- | --- |
| Positive | `I fixed the bug.`, `We had a meeting.` |
| Negative | `I didn't fix the bug.` (`didn't + base verb`) |
| Question | `Did you fix the bug?` (`Did + base verb`) |
| be | `It was a config issue.`, `The builds were green.` |

After `did / didn't`, the verb goes back to the **base form**: `Did you test it?`, not `Did you tested it?`

### 2.2 Three Uses in Meetings

**① Events with a clear past time ⭐**

```text
I finished the API changes yesterday.

We passed the security review last week.

The pipeline failed twice this morning.

I sent you the link just now.
```

**② Telling what happened (incident reviews, recaps)**

```text
We deployed the new version, and then the login page broke.

We discussed this yesterday and agreed to use AWS.
```

**③ Past states: was / were**

```text
It was a network issue, not a code issue.

The tests were green yesterday.

I thought it was merged.
```

> `I wanted to ask …` and `I was wondering if …` use past forms, but they are **polite** and talk about now. See [G10](10-other-tenses.md).

### 2.3 Regular Verbs: Add -ed

| Rule | Examples |
| --- | --- |
| add `-ed` | `fix → fixed`, `deploy → deployed`, `test → tested` |
| ends in `e`: add `-d` | `merge → merged`, `update → updated`, `share → shared` |
| consonant + `y` → `-ied` | `try → tried`, `apply → applied`, `copy → copied` |
| short stressed syllable: double the consonant | `plan → planned`, `drop → dropped`, `commit → committed`, `debug → debugged` |

Verbs borrowed from tech nouns are almost all regular: `pushed`, `logged`, `refactored`, `shipped`, `approved`, `rebased`.

## 3. Present Perfect: "Already" and "So Far"

### 3.1 Pattern

| Sentence | Example |
| --- | --- |
| Positive | `I've fixed it.`, `She's raised a PR.`, `We've finished the planning.` |
| Negative | `I haven't tested it yet.`, `It hasn't been merged.` |
| Question | `Have you tested it?`, `Has anyone seen this error?` |

**Recognize the contractions:** `I've = I have`, `we've = we have`, `he's / she's / it's = he/she/it has` (when a past participle follows).

```text
It's been merged.

It's merged.
```

In the first sentence `it's = it has`; in the second `it's = it is` and `merged` works as an adjective. Both mean "it is merged now".

### 3.2 Use 1: Completed, With a Result Now ⭐ The Progress-Report Favorite

When it happened does not matter. What matters is that **it is done now**:

```text
I've fixed the crash, so you can test it now.

We've finished the planning for the native part.

Ken has raised a PR for the token update.

I've shared the link in the Teams chat.

The design team hasn't confirmed the colors yet.
```

### 3.3 Use 2: Amounts and Experience So Far

```text
We've completed about 80% of the sprint backlog so far.

I've never used Harness before.

Have you ever seen this error?
```

### 3.4 Use 3: From the Past Until Now (for / since)

A state that started in the past and **is still true now**:

```text
It has been broken since Monday.

I've been on this team for two years.

We've known about this issue for a while.
```

`for + a period` (`for two days`), `since + a starting point` (`since Monday`, `since the last release`). For ongoing actions (`I've been waiting …`), see the present perfect continuous in [G10](10-other-tenses.md).

### 3.5 Present Perfect Passive: has been + past participle

Status reports often say "something has been done". This combines the present perfect and the passive. See [G12](12-passive-voice.md):

```text
The PR has been approved.

Has it been deployed to staging?

Most of the features have been migrated.
```

## 4. already, yet, just, still, so far

| Word | Meaning | Used in | Position | Example |
| --- | --- | --- | --- | --- |
| `already` | done earlier than expected | positive (questions show surprise) | after `have` or at the end | `I've already merged it.` |
| `yet` | up to now | negatives and questions | at the end | `It hasn't been merged yet.` |
| `just` | a moment ago | positive | after `have` | `I've just pushed the fix.` |
| `still` | continuing (not done) | negatives | before `haven't` | `It still hasn't been approved.` |
| `so far` | up to now | positive and negative | start or end | `So far, no issues.` |
| `recently` | lately | all | end or after `have` | `We've recently moved to Harness.` |

```text
I've already updated the ticket.

Have you tested it on iOS yet?

I've just pushed the fix.

The PR still hasn't been reviewed.

Not yet. I'll do it this afternoon.
```

> **American English note:** American colleagues often say `I already merged it.`, `Did you test it yet?`, and `I just pushed it.`, using the past simple with `already / yet / just`. This is correct in American speech. The present perfect is the safer choice for you, but understand both.

## 5. How to Choose: Three Steps ⭐

1. **Is there a specific past time?** `yesterday`, `last week`, `two days ago`, `on Monday`, `when …`, `just now` → **past simple**.
2. **Are you talking about a result or state now?** `already`, `yet`, `so far`, `ever`, `never`, `since` → **present perfect**.
3. **Announce the result, then give details.** Native speakers often state the result in the present perfect and then switch to the past simple for the story:

```text
I've fixed the crash. It was a null pointer in the date parser. I pushed the fix last night.
```

**Comparison:**

| Past simple | Present perfect |
| --- | --- |
| `I finished it yesterday.` | `I've finished it.` |
| `Did you test it on iOS?` (that test session) | `Have you tested it on iOS?` (is it tested now?) |
| `It was broken on Monday.` (maybe fixed now) | `It has been broken since Monday.` (still broken) |
| `I had three meetings last week.` | `I've had three meetings this week.` (the week isn't over) |
| `When did you merge it?` ✅ | ~~`When have you merged it?`~~ ❌ |

`when` asks for a specific time, so only the past simple works.

**Signal words:**

| Past simple | Present perfect |
| --- | --- |
| `yesterday`, `last week/sprint/Friday` | `already`, `yet`, `just` (British) |
| `… ago`, `in 2024`, `on Monday` | `ever`, `never`, `so far`, `recently` |
| `just now`, `this morning` (morning is over) | `since …`, `for …` (continuing until now) |
| `when …?`, `what time …?` | `this week / this sprint` (not over yet) |

## 6. Irregular Verbs Software Teams Use

Verbs whose past forms do not end in `-ed` must be memorized. This list keeps only the verbs common in meetings and development.

**A. All three forms the same (AAA)**

| Base | Past | Past participle | Meeting example |
| --- | --- | --- | --- |
| `set (up)` | `set` | `set` | `I've set up the runner.` |
| `put` | `put` | `put` | `I put the link in the chat.` |
| `let` | `let` | `let` | `He let us know yesterday.` |
| `cost` | `cost` | `cost` | `It cost a lot last month.` |
| `read` | `read` (sounds like "red") | `read` | `I've read the doc.` |
| `quit` | `quit` | `quit` | `The app quit unexpectedly.` |
| `hit` | `hit` | `hit` | `We hit the rate limit.` |
| `shut (down)` | `shut` | `shut` | `They shut down the old server.` |

**B. Past and past participle the same (ABB)**

| Base | Past / participle | Base | Past / participle |
| --- | --- | --- | --- |
| `build` | `built` | `send` | `sent` |
| `make` | `made` | `have` | `had` |
| `find` | `found` | `get` | `got` (US participle also `gotten`) |
| `hold` | `held` | `keep` | `kept` |
| `leave` | `left` | `lose` | `lost` |
| `meet` | `met` | `pay` | `paid` |
| `say` | `said` | `tell` | `told` |
| `think` | `thought` | `bring` | `brought` |
| `buy` | `bought` | `catch` | `caught` |
| `feel` | `felt` | `hear` | `heard` |
| `mean` | `meant` | `spend` | `spent` |
| `understand` | `understood` | `stand` | `stood` |
| `lead` | `led` | `stick` | `stuck` |
| `rebuild` | `rebuilt` | `sit` | `sat` |

**C. Three different forms (ABC / ABA)**

| Base | Past | Participle | Base | Past | Participle |
| --- | --- | --- | --- | --- | --- |
| `do` | `did` | `done` | `go` | `went` | `gone` |
| `see` | `saw` | `seen` | `take` | `took` | `taken` |
| `give` | `gave` | `given` | `write` | `wrote` | `written` |
| `break` | `broke` | `broken` | `choose` | `chose` | `chosen` |
| `forget` | `forgot` | `forgotten` | `know` | `knew` | `known` |
| `show` | `showed` | `shown` | `begin` | `began` | `begun` |
| `speak` | `spoke` | `spoken` | `fall` | `fell` | `fallen` |
| `draw` | `drew` | `drawn` | `grow` | `grew` | `grown` |
| `throw` | `threw` | `thrown` | `hide` | `hid` | `hidden` |
| `freeze` | `froze` | `frozen` | `overwrite` | `overwrote` | `overwritten` |
| `override` | `overrode` | `overridden` | `run` | `ran` | `run` |
| `come` | `came` | `come` | `become` | `became` | `become` |

```text
I've set up the macOS runner.

The last deployment broke the login page.

The new library has broken two tests.

I forgot to mention one thing yesterday.

We're in a code freeze, so the branch is frozen.

I'm stuck on the SSR issue.
```

> `set up` is a verb phrase (all three forms are `set up`); `setup` is a noun: `I set up the runner.` / `The setup is done.`

## 7. Real Meeting Examples (Adapted)

These sentences come from real meeting subtitles. Recognition errors are fixed and names are anonymized.

```text
So we've finished the planning for the native part today.

Yeah, I've sent the link to our Teams chat.

Ken has confirmed that the Harness Linux steps can pull the Docker image.

The good news is we've already completed 80 to 90% of the sprint backlog.

I saw the stories Leo has done, but I noticed the PR hasn't been approved and merged yet.

We finished sprint grooming yesterday and sprint planning today.

We passed the security review yesterday.

I thought it was merged, but I'll double-check.

Feel free to jump in if I've missed anything.

I think we haven't started updating the components yet.
```

Non-native original vs standard form:

| Subtitle original | Standard form |
| --- | --- |
| `Mia have shared some token structure yesterday.` | `Mia shared the token structure yesterday.` (past time → past simple) |
| `Leo have finished the POC and gave three options.` | `Leo has finished the POC and given three options.` |
| `The story has just been created, but not has been reviewed.` | `… but it hasn't been reviewed.` |
| `Ken is not joined yet.` | `Ken hasn't joined yet.` |
| `We didn't discuss this yet.` | `We haven't discussed this yet.` (American speech also allows `didn't … yet`) |
| `Mia and Ken has already created some epics.` | `Mia and Ken have already created some epics.` |
| `I have picked, I have picking up this ticket.` | `I've picked up this ticket.` |

## 8. Reading These Tenses in Subtitles

1. **Look for `have / has / 've / 's + past participle`.** That is the present perfect: "already / up to now".
2. **Check what follows `'s`:** `he's working` (is), `he's finished` (has or is — both mean done), `it's been` (has).
3. **`'ve` is often lost.** A subtitle showing `we finished the planning` may actually be `we've finished`. The meaning is nearly the same.
4. **If you see `yesterday / last week`, read it as past.** Even if the subtitle says `have shared … yesterday` (a non-native error), understand "shared yesterday".
5. **`already` is a strong signal.** It appears about 26 times per 10,000 words and almost always means "done".

| Possibly seen in subtitles | Standard form |
| --- | --- |
| `we done the setup` | `we've done the setup` / `we did the setup` |
| `I been working on it` | `I've been working on it` |
| `it has broke` | `it has broken` |
| `I have saw that` | `I saw that` / `I've seen that` |
| `he already finish it` | `he's already finished it` |

## 9. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `I have finished it yesterday.` | `I finished it yesterday.` | no present perfect with a specific past time |
| `When have you merged it?` | `When did you merge it?` | `when` → past simple |
| `Did you tested it?` | `Did you test it?` | base verb after `did` |
| `I didn't finished it.` | `I didn't finish it.` | base verb after `didn't` |
| `I have saw the error.` | `I have seen the error.` | past participle |
| `We builded a new image.` | `We built a new image.` | irregular verb |
| `I sended the link.` | `I sent the link.` | irregular verb |
| `I already finish it.` | `I've already finished it.` | do not drop `have` and `-ed` |
| `I worked here since 2023.` | `I've worked here since 2023.` | `since` → present perfect |
| `It hasn't merged yet.` | `It hasn't been merged yet.` | a PR is merged by someone → passive |

## 10. Sentences You Can Use Today

```text
Yesterday I fixed the login bug and raised a PR.

I've finished the API integration. It's ready for review.

I've just pushed the fix. Can you test it again?

The PR hasn't been merged yet. It's waiting for approval.

I haven't started the documentation yet.

So far, we've completed most of the sprint backlog.

Sorry, I forgot to update the ticket yesterday.

Has anyone seen this error before?
```

## 11. Practice

**A. Past simple or present perfect?**

1. I (fixed / have fixed) the bug yesterday.
2. I (fixed / have fixed) the bug, so you can test it now.
3. When (did you deploy / have you deployed) it?
4. We (didn't start / haven't started) the migration yet.
5. It (was / has been) broken since Monday.
6. Mia (left / has left) the meeting early, so let's continue without her.

**B. Fill in already / yet / just / still / since / for**

1. Have you reviewed my PR ___?
2. I've ___ pushed the fix — like one minute ago.
3. The design ___ hasn't been confirmed.
4. I've ___ updated the ticket, so no need to do it again.
5. The job has been running ___ 15 minutes.
6. We've used this pipeline ___ last year.

**C. Write the past and past participle**

build · send · break · write · set · choose · forget · run · find · take

**D. Correct the sentences**

1. I have sent the email yesterday.
2. We builded the image this morning.
3. Did you finished the test?
4. The PR hasn't approved yet.
5. I already finish the first task.

<details>
<summary>Answers</summary>

**A.** 1 fixed 2 have fixed 3 did you deploy 4 haven't started 5 has been 6 has left (stresses "she is gone now"; `left` is also fine in American speech)

**B.** 1 yet 2 just 3 still 4 already 5 for 6 since

**C.** built–built · sent–sent · broke–broken · wrote–written · set–set · chose–chosen · forgot–forgotten · ran–run · found–found · took–taken

**D.**
1. I sent the email yesterday.
2. We built the image this morning.
3. Did you finish the test?
4. The PR hasn't been approved yet.
5. I've already finished the first task.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- The past simple part of [01-foundations/04 Three Basic Tenses](../../01-foundations/04-three-basic-tenses.md)
- The perfect aspect part of [02-intermediate/08 Aspect, Passive, and Agreement](../../02-intermediate/08-aspect-passive-agreement.md)
- Chapters 18 and 26 and Appendix B (irregular verbs) of [英语语法全解](../../english-grammar/英语语法全解.md)
