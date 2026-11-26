# G02 Nouns, Articles, and Quantifiers

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: primary → junior high | Meeting data per 10,000 words: `the` ≈ 670 (the most common word in meetings), `a/an` ≈ 160, `some` ≈ 52, `any` ≈ 46, `all` ≈ 42, `each` ≈ 10
>
> [中文版](02-nouns-articles-quantifiers.zh.md) · [Previous: G01 Sentence Skeleton](01-sentence-skeleton.md) · [Next: G03 Pronouns and Reference](03-pronouns-and-reference.md) · [Grammar index](README.md)

## What This Lesson Solves

Chinese nouns have no plural forms and no articles. English marks almost every noun: `a / the / some / any` before it, and `-s` or no `-s` after it. A typical stand-up sentence:

```text
Most of the stories are done, but we still need some feedback from the design team.
```

Four points in one sentence: `stories` takes `-s` (countable plural); `the` means "the ones in our sprint"; `feedback` takes no `-s` (uncountable); `design team` is a noun describing a noun.

These small markers are often lost or misrecognized in subtitles, so **don't depend on them when reading**. But using them correctly when you speak makes you sound much more professional.

**After this lesson, you can:**

1. Decide whether a noun is countable, especially uncountable work nouns such as `feedback`, `information`, and `progress`.
2. Use `a / an / the / no article` correctly in common meeting phrases.
3. Use quantifiers such as `some / any / many / much / a few / each / all`.
4. Read noun stacks such as `the CI pipeline environment setup`, and read and say dates, versions, percentages, and sprint numbers.

## 1. The Core Rule: A Singular Countable Noun Cannot Stand Alone

English nouns are **countable** (one, two, three) or **uncountable** (cannot be counted directly).

> **A singular countable noun needs a determiner**: `a / an / the / this / my / our / each / one`, and so on.

```text
I fixed a bug.

I fixed the bug.

I fixed my bug.
```

❌ `I fixed bug.` Plural and uncountable nouns can stand alone: `I fixed bugs.`, `We need feedback.`

## 2. Countable and Uncountable Nouns 🔴

| Countable (takes -s and a) | Uncountable (no -s, no a) |
| --- | --- |
| `bug`, `ticket`, `story`, `task`, `issue` | `feedback`, `information`, `progress` |
| `PR`, `comment`, `question`, `update` | `work`, `research`, `documentation` |
| `component`, `page`, `test`, `change` | `code`, `data`, `software`, `hardware` |
| `meeting`, `release`, `build`, `option` | `help`, `advice`, `access`, `support` |

**The traps:** in Chinese you can say "some feedbacks" or "several researches", but in English these nouns are uncountable.

```text
Thanks for your feedback.

We made good progress this week.

I need more information about the error.

We are still doing some research on it.
```

**To count an uncountable idea, use a countable word:**

```text
I have two comments on the design.

I'll create a research ticket.

It's just a small code change.
```

### 2.1 Nouns That Can Be Both 🟡

```text
We don't have much time.

I restarted it three times.

Do you have experience with React?

It was a good experience.
```

`time` (uncountable) = time in general; `times` = occasions. `experience` (uncountable) = skill; `an experience` = one event.

## 3. Plural Forms 🔴

| Rule | Examples |
| --- | --- |
| Usually add `-s` | `ticket → tickets`, `PR → PRs`, `API → APIs` |
| After s, x, ch, sh add `-es` | `fix → fixes`, `branch → branches`, `patch → patches` |
| Consonant + y → `-ies` | `story → stories`, `dependency → dependencies` |
| Vowel + y → add `-s` | `key → keys`, `day → days` |
| Irregular 🟡 | `person → people`, `analysis → analyses`, `criterion → criteria`, `index → indexes / indices` |

Two notes:

- **No apostrophe in acronym plurals:** `PRs`, `VMs`, `APIs`, not `PR's`.
- **Some work nouns are usually plural:** `logs`, `settings`, `details`, `requirements`, `credentials`, `release notes`.

```text
Can you check the logs?

I've updated the settings.

People are still testing it.
```

## 4. Nouns Describing Nouns: Reading Noun Stacks 🔴

English often stacks nouns. The earlier nouns describe; **the last noun is the head**.

```text
the login page

the release pipeline

a 15-minute meeting

a two-day task
```

A noun used as a describer stays singular: `a 15-minute meeting`, not `15-minutes`.

**To read a stack, start from the last word:**

```text
the CI pipeline environment setup

the service account creation request
```

Heads: `setup`, `request`.

## 5. Possessives: 's and of 🟡

| Form | Used with | Examples |
| --- | --- | --- |
| `noun's` | people, teams, time | `Mia's PR`, `the team's feedback`, `today's meeting` |
| `plural s'` | plurals ending in s | `the designers' comments` |
| `the X of Y` | things, long nouns | `the status of the ticket`, `the end of the sprint` |
| noun as describer | things, the shortest form | `the ticket status`, `the sprint goal` |

```text
Let's start with today's agenda.

I'll share the link for everyone's awareness.

We will finish it by the end of the sprint.
```

## 6. Articles: a / an / the / No Article 🔴

### 6.1 a or an: Sound, Not Spelling

Use `an` before a **vowel sound**. Acronyms are the usual trap:

```text
an API

an SSR issue

an hour

a UI change

a user
```

`API` starts with /eɪ/, `SSR` with /es/, `hour` with a silent h; `UI` and `user` start with /j/.

### 6.2 the: Both Sides Know Which One

| Use | Examples |
| --- | --- |
| Mentioned before or under discussion | `I checked the PR.` |
| A specific team, part, or system | `the design team`, `the web part`, `the backend` |
| Ordinals, superlatives, `same / next / last / only / latest / current` | `the first story`, `the next one`, `the latest version` |
| The only one in the situation | `the screen`, `the chat`, `the agenda` |

```text
Let's move to the next one.

We have the same issue on iOS.

Is this the latest version?
```

### 6.3 No Article

| Case | Examples |
| --- | --- |
| Plural or uncountable, general meaning | `Bugs happen.`, `We need feedback.` |
| Product, tool, and platform names | `Jira`, `GitHub`, `Figma`, `Android` |
| `next / last / this` + time | `next week`, `last sprint`, `this Friday` |
| Days and months | `on Monday`, `in May` |
| Fixed phrases | `in production`, `in progress`, `on track`, `by email` |

> ⚠️ Both `next sprint` and `in the next sprint` are correct. `in next sprint`, common in subtitles, is non-native.

### 6.4 High-Frequency Article Phrases

| With a | With the |
| --- | --- |
| `a quick question` | `the next one` |
| `a quick update` | `the same issue` |
| `a minute` | `the first one` |
| `a lot of` | `at the moment` |
| `a few days` | `by the end of the day` |

## 7. Determiners and Quantifiers 🔴

| Word | + plural countable | + uncountable | Frequency | Examples |
| --- | --- | --- | --- | --- |
| `some` | ✅ | ✅ | 🔴 | `some issues`, `some feedback` |
| `any` | ✅ | ✅ | 🔴 | `any questions`, `any help` |
| `all` | ✅ | ✅ | 🔴 | `all the tests`, `all the code` |
| `no` | ✅ | ✅ | 🔴 | `no updates`, `no progress` |
| `each / every` | singular | — | 🟡 | `each story`, `every PR` |
| `both` | ✅ (two) | — | 🟡 | `both platforms` |
| `many` | ✅ | — | 🟡 | `many components` |
| `much` | — | ✅ | 🟡 | `much time` |
| `a lot of` | ✅ | ✅ | 🟡 | `a lot of bugs`, `a lot of work` |
| `a few` / `a couple of` / `several` | ✅ | — | 🟡 | `a few days`, `a couple of pages` |
| `a little` / `a bit of` | — | ✅ | 🟡 | `a bit of research` |
| `either / neither` | singular | — | 🟢 | `either option` |

### 7.1 some and any 🔴

- `some`: positive sentences, and offers or requests where you expect "yes".
- `any`: questions and negatives; also "whichever one".

```text
Do you have any questions?

I don't have any updates today.

We found some issues on Android.

Do you need some help?

Any comments are welcome.
```

### 7.2 many / much / a lot of 🟡

`much` is mainly used in negatives and questions; positive sentences usually use `a lot of`.

```text
There isn't much time left.

How much work is left?

We have a lot of open tickets.
```

### 7.3 a few vs few, a little vs little 🟡

| Phrase | Meaning | Tone |
| --- | --- | --- |
| `a few days` | some days | neutral / positive |
| `few people` | almost nobody | negative, formal 🟢 |
| `a little time` | some time | neutral / positive |
| `little time` | almost no time | negative, formal 🟢 |

### 7.4 all / most / each / both / none 🔴

`most of the + noun` and `most + noun` are both correct, but `of` needs `the / my / these` after it:

```text
Most of the stories are completed.

Each story has a few subtasks.

Both of them work on the native part.

None of the tests failed.
```

❌ `most of stories` ✅ `most of the stories` / `most stories`

## 8. Numbers: Dates, Versions, Percentages, Sprints 🟡

Stand-ups are full of numbers, and subtitles often get them wrong. For more, see [Numbers, Years, Months, and Weekdays](../../numbers-years-months-weekdays.md).

| Type | Written | Said |
| --- | --- | --- |
| Cardinal | 3, 15, 250 | three, fifteen, two hundred and fifty |
| Ordinal | 1st, 2nd, 3rd, 21st | first, second, third, twenty-first |
| Date | May 5 / 5 May | May fifth / the fifth of May |
| Year | 2025 | twenty twenty-five |
| Time | 9:30, 10:05, 3 PM | nine thirty, ten oh five, three p.m. |
| Version | 7.0.0, v2.3, Node 20 | seven point oh point oh, version two point three, Node twenty |
| Decimal | 1.5 | one point five |
| Percentage | 80% | eighty percent |
| Sprint number | Sprint 12 | Sprint twelve (no the) |
| Story points | 3 points | three points / a three-point story |
| Range | 2–3 days | two to three days |

```text
We are in Sprint 12 now.

We need to upgrade to version 7.0.0.

The test coverage is about 80 percent.

I'd give it three points.

It will take two to three days.

The release is planned for May 15th.

I'll be off for one and a half days.
```

Note: `one and a half days`, `1.5 days`, and `zero bugs` are plural; in `a two-week sprint`, `week` is a describer and stays singular.

## 9. Real Meeting Examples (Adapted)

```text
There are three subtasks under this story.

Under this folder, there are a couple of pages with detailed explanations.

Each story can have different subtasks.

We still need some help from the design team.

We'll share the details in the engineering channel for everyone's awareness.

At this point, none of the components are ready.

Let's use the web app as an example.
```

## 10. Reading Subtitles

1. **Articles are often dropped or shown as `uh`.** Missing `a / the` rarely changes the meaning; skip them.
2. **Plural `-s` is often inaudible.** Use numbers and words such as `these / many / a few` to decide.
3. **Numbers are the most misrecognized words.** If a number looks strange (for example `three 5.23 point`), trust the shared Jira board or document.
4. **Recognize, but don't copy, non-native forms:**

| Seen in subtitles | Standard form |
| --- | --- |
| `four subtask` | `four subtasks` |
| `in next sprint` | `in the next sprint` / `next sprint` |
| `it's like a application` | `it's like an application` |
| `a lot of feedbacks` | `a lot of feedback` |
| `there's no much updates` | `there aren't many updates` / `there's not much to update` |
| `for team members awareness` | `for the team members' awareness` |
| `the next one is a backward compatibility` | `the next one is backward compatibility` |

## 11. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `I fixed bug.` | `I fixed the bug.` / `a bug` | singular countable nouns need a determiner |
| `Thanks for your feedbacks.` | `Thanks for your feedback.` | `feedback` is uncountable |
| `We made a big progress.` | `We made big progress.` / `a lot of progress` | `progress` is uncountable |
| `Most of stories are done.` | `Most of the stories are done.` | `most of` needs `the` |
| `Each stories has subtasks.` | `Each story has subtasks.` | `each` + singular |
| `a API` / `a SSR issue` | `an API` / `an SSR issue` | sound, not spelling |
| `I have much questions.` | `I have a lot of questions.` / `many questions` | `much` is for uncountable nouns |
| `a two-days task` | `a two-day task` | describer nouns stay singular |
| `the Jira` / `the GitHub` | `Jira` / `GitHub` | no article with tool names |

## 12. Sentences You Can Use Today

```text
I have a quick question about the ticket.

Do you have any questions or comments?

We made some progress on the login page.

Most of the tasks are on track.

I need a few more days to finish it.

Thanks for the feedback. I'll update the PR.

No updates from my side today.

It's a two-day task, so I'll finish it by Friday.
```

## 13. Practice

**A. Fix the noun errors (plural, countable, uncountable)**

1. We received a lot of feedbacks from the users.
2. There are three PR waiting for review.
3. I need some informations about the API.
4. We had a good progress this sprint.

**B. Fill in a / an / the, or — for no article**

1. I have ___ quick update.
2. It's ___ API issue, not ___ UI issue.
3. Let's move to ___ next topic.
4. I'll check it on ___ Jira.
5. We'll finish it in ___ next sprint.

**C. Choose the right word**

1. Do you have (some / any) questions?
2. There isn't (many / much) time left.
3. (Each / All) story needs a reviewer.
4. (Most of / Most of the) tickets are closed.
5. I need (a few / a little) more days.

**D. Write how to say these**

1. Sprint 15 2. version 2.1 3. 75% 4. May 3rd

<details>
<summary>Answers</summary>

**A.**
1. We received a lot of feedback from the users.
2. There are three PRs waiting for review.
3. I need some information about the API.
4. We made good progress this sprint. (`progress` is uncountable; `make progress` is the usual collocation)

**B.** 1 a 2 an, a 3 the 4 — 5 the

**C.** 1 any 2 much 3 Each 4 Most of the 5 a few

**D.** 1 Sprint fifteen 2 version two point one 3 seventy-five percent 4 May third

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- [01-foundations/02 Nouns, Articles, and Determiners](../../01-foundations/02-nouns-articles-determiners.md)
- Chapters 4 (nouns), 5 (articles), and 15 (numerals) of [英语语法全解](../../english-grammar/英语语法全解.md)
- [Numbers, Years, Months, and Weekdays](../../numbers-years-months-weekdays.md) (kept as the reference for reading numbers)
