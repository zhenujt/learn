# G01 Sentence Skeleton: Parts of Speech, Sentence Parts, and Five Patterns

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Level: primary → junior high | Meeting data: about **20%** of turns in real meetings are longer than 35 words; one long subtitle line usually holds 2–4 clauses, each with its own subject and verb
>
> [中文版](01-sentence-skeleton.zh.md) · [Previous: Grammar index](README.md) · [Next: G02 Nouns, Articles, and Quantifiers](02-nouns-articles-quantifiers.md) · [Grammar index](README.md)

## What This Lesson Solves

The hardest part of meeting subtitles is not new words. It is **one long, messy line**: fillers, repeats, self-corrections, and several ideas joined together. For example (adapted from a real subtitle):

> So, for the documentation site, so we have completed all the comparison and the conclusion part, and Leo has shared the Confluence page link to the team, so you can review it.

If you translate word by word from the start, you get lost halfway. The right method is to **find the skeleton first** — who + did what:

```text
We have completed the comparison.

Leo has shared the link.

You can review it.
```

Once you have the skeleton, everything else (`for the documentation site`, `to the team`) is extra detail. **This is the key skill of the whole course.** Every later lesson builds on it.

**After this lesson, you can:**

1. Recognize the ten parts of speech and know which words can be a subject and which can be a verb.
2. Name the seven sentence parts (subject, verb, object, complement, object complement, attribute, adverbial) and the question each one answers.
3. Build correct short sentences with the five basic patterns for stand-up updates, with matching subject and verb.
4. Use the four-step method to find the subject and main verb of a long subtitle line in a few seconds.

## 1. The Core Rule: Every English Sentence Needs a Subject and a Finite Verb

Chinese can drop the subject ("done already") and can describe a state with no verb at all ("I very busy today"). English cannot. **A complete English sentence needs a subject and a verb that shows tense (the finite verb).**

```text
It's done.

I'm busy today.

The build failed again.
```

This rule helps in two ways:

- **When reading:** find "subject + finite verb" and you have the main meaning.
- **When speaking:** the most common Chinese-speaker errors are a missing subject or a missing verb, such as `Is done.` or `I busy.`

## 2. Parts of Speech: What Each Word Can Do

The part of speech decides **where a word can go** in a sentence.

| Part of speech | Job | Meeting examples | Frequency |
| --- | --- | --- | --- |
| Noun | names a person, thing, or idea | `ticket`, `build`, `team`, `feedback` | 🔴 |
| Pronoun | replaces a noun | `I`, `it`, `this`, `they`, `one` | 🔴 |
| Verb | action or state | `fix`, `check`, `is`, `have`, `need` | 🔴 |
| Adjective | describes a noun | `ready`, `blocked`, `new`, `critical` | 🔴 |
| Adverb | describes a verb, adjective, or sentence | `already`, `still`, `just`, `actually` | 🔴 |
| Preposition | shows a relationship, takes a noun | `for`, `to`, `on`, `with` (see [G16](16-prepositions.md)) | 🔴 |
| Conjunction | joins words, phrases, clauses | `and`, `but`, `so`, `because`, `if` | 🔴 |
| Article | goes before a noun | `a`, `an`, `the` (see [G02](02-nouns-articles-quantifiers.md)) | 🔴 |
| Numeral | number and order | `two`, `first`, `half` | 🟡 |
| Interjection | emotion or reaction | `oh`, `wow`, `oops` | 🟡 |

### 2.1 Three Rules That Matter Most for Finding the Skeleton

1. **Only verbs can be the predicate.** Finding the predicate means finding the verb.
2. **Subjects and objects are usually nouns or pronouns** (they can also be `-ing` forms or clauses).
3. **An adjective cannot be the predicate alone.** `ready`, `busy`, `blocked` need `be`: `I'm ready.`

### 2.2 One Word, Several Parts of Speech 🔴

Many software words are both nouns and verbs. **Use position:** after `a / the / any / my` it is a noun; after a subject or `will / can / to` it is a verb.

```text
I will update the ticket today.

Do you have any updates?

Can you review my PR?

The review is still in progress.

We need to test it on Android.

All the tests passed.
```

Other examples: `build`, `release`, `fix`, `plan`, `change`, `check`, `demo`. (`deploy` is only a verb; the noun is `deployment`.)

## 3. Sentence Parts: Each Position Answers a Question

Parts of speech say what a word *is*. Sentence parts say what a word *does in this sentence*.

| Part | Question it answers | Example (bold = the part) | Frequency |
| --- | --- | --- | --- |
| Subject S | Who? What? | **The build** failed. | 🔴 |
| Verb (predicate) V | Did what? In what state? | The build **failed**. | 🔴 |
| Object O | Who or what receives the action? | I fixed **the bug**. | 🔴 |
| Complement C | What is the subject like? | The PR is **ready**. | 🔴 |
| Object complement OC | What does the object become or do? | Let's keep it **simple**. | 🟡 |
| Attribute | Which one? What kind? (describes a noun) | the **login** page / the bug **in production** | 🔴 |
| Adverbial | When, where, why, how? (describes a verb or the sentence) | I fixed it **yesterday**. | 🔴 |

**S, V, O, C, and OC are the skeleton. Attributes and adverbials are decoration.** The skeleton carries the meaning; decoration adds detail.

### 3.1 The Verb Can Be a Group of Words 🔴

The predicate is often "auxiliary or modal + main verb":

```text
We have completed the comparison.

The fix will be deployed tomorrow.

I'm still working on the login page.

You can review it later.
```

When reading, treat `need to / want to / have to / going to + verb` as one chunk: `We need to update the doc.`

### 3.2 Complements and Linking Verbs 🔴

The part after `be` is the **complement**. It says what the subject is or is like. Some other verbs work the same way; they are called **linking verbs**:

```text
That sounds good.

It looks fine to me.

The pipeline seems stable now.

The page gets slow with large data.
```

Common linking verbs: `be`, `look`, `sound`, `seem`, `feel`, `get`, `become`, `stay`, `keep`.

### 3.3 Attributes Make Nouns Longer 🔴

**Before the noun:** usually adjectives or nouns. **After the noun:** usually prepositional phrases, participles, or clauses.

```text
the new login page

the bug in production

the PR created yesterday

the story that we discussed last week
```

**Rule:** no matter how much is attached, **there is only one head noun**. In `the list of open tickets for the web part`, the head is `list`.

### 3.4 Adverbials Add Time, Place, and Reason 🔴

```text
Yesterday, I fixed the bug in the web part.

I couldn't join because I was sick.

We use this script to clean up old builds.
```

## 4. The Five Basic Patterns

Remove the decoration, and every English sentence fits one of five skeletons.

| Pattern | Formula | Example | Frequency |
| --- | --- | --- | --- |
| ① | S + V | `It works.` | 🔴 |
| ② | S + V + C | `The PR is ready.` | 🔴 |
| ③ | S + V + O | `I fixed the bug.` | 🔴 |
| ④ | S + V + person + thing | `I'll send you the link.` | 🟡 |
| ⑤ | S + V + O + OC | `Let's keep it simple.` | 🟡 (but `let me know` is 🔴) |

### 4.1 ① S + V: No Object Needed 🔴

These are **intransitive verbs**. They take no object but can take adverbials.

```text
It works.

The build failed.

I agree.

Something happened during the deployment.
```

### 4.2 ② S + V + C: Describing Status — the Stand-Up Favorite 🔴

```text
The story is done.

I'm blocked by the access issue.

Most tasks are on track.

He is out of office today.
```

### 4.3 ③ S + V + O: What You Did 🔴

The most common pattern. The verb takes an object directly; it is a **transitive verb**.

```text
I fixed the bug.

We need more time.

Can you check the logs?

I think we should skip this one.
```

> ⚠️ Transitive verbs take the object **directly**: `discuss the plan`, `mention it`, `contact the team`. Intransitive verbs need a preposition first: `reply to the email`, `wait for the review`, `listen to me`.

### 4.4 ④ S + V + Person + Thing 🟡

Common verbs: `send`, `give`, `show`, `tell`, `ask`. (`share` usually goes `share it with you`.)

```text
I'll send you the link.

Can you give me a minute?

Let me show you the demo.
```

You can also move the person to the end with `to` or `for`: `I'll send the link to you.`

> ⚠️ `explain` cannot take two objects: ❌ `explain you the issue`, ✅ `explain the issue to you`.

### 4.5 ⑤ S + V + O + Complement 🟡

A second element after the object says what the object becomes or does.

```text
Let's keep it simple.

Please keep me posted.

Let me know if you have any questions.

Can you help me check the config?

We need someone to review this PR.
```

There is also a special pattern, `There is / There are …`, which appears about 13 times per 10,000 words. See [G04](04-be-and-there-be.md).

## 5. Subject–Verb Agreement: Subject and Verb Must Match 🔴

A singular subject takes a singular verb (`is`, `was`, `has`, `does`, verb + `-s`). A plural subject takes a plural verb (`are`, `were`, `have`, `do`, base verb). Chinese verbs never change, so this is easy to forget.

**Key:** find the **head noun** of the subject first (section 3.3), then decide. Do not be fooled by the noun closest to the verb.

| Subject | Singular or plural | Example |
| --- | --- | --- |
| `one of the + plural noun` | singular (head is one) | `One of the tests is failing.` |
| `the list / the status / the number of + plural` | singular (head is list / status / number) | `The status of the tickets is outdated.` |
| `most of / some of / all of / a lot of + plural` | plural (follows the noun after of) | `Most of the stories are done.` |
| `most of / some of / all of + uncountable` | singular | `Most of the work is done.` |
| `each / every + singular noun`, `each of them` | singular | `Each story has two subtasks.` |
| `everyone / anyone / someone / nobody` | singular | `Everyone has access now.` |
| `the team / the company` (group nouns) | usually singular in US English (UK may use plural) | `The team is busy this sprint.` |
| `A and B` | plural | `Mia and Ken are on it.` |
| gerund / `to do` / clause | singular | `Testing on iOS takes time.` |

```text
Most of the stories are completed.

One of the tests is still failing.

The team is working on the release.

Everyone has the link now.

Does anyone have any questions?

Each of the components has its own package.
```

> ⚠️ Subtitles often show forms like `Does anyone has questions?`, `the components was imported`, or `he don't know`. Understand them, but don't copy them. For `There is / There are`, the noun after it decides; see [G04](04-be-and-there-be.md).

## 6. The Key Skill: The Four-Step Method ⭐

Real subtitles pack **several sentences into one line**, with fillers and repeats in between. Do these four steps in order:

| Step | What to do | Signals |
| --- | --- | --- |
| ① Cut | Split the line into clauses | commas, periods, and `so`, `and`, `but`, `because`, `if`, `when`, `which` |
| ② Delete | Cross out parts that do not change the meaning | `yeah`, `okay`, `so`, `I mean`, `you know`, `like`, `actually`, `basically`, repeated words, `For X,` topic labels |
| ③ Find the verb | Find the real finite verb in each clause | see the table below |
| ④ Find the subject, complete | The noun or pronoun to the left of the verb is the subject; then check for an object or complement on the right | head noun, `I/we/you/it/they` |

### 6.1 Step ③: Real Verbs vs "Fake Verbs"

A clause can contain several verb forms, but **only one is the predicate of that clause**.

| Form | Predicate? | Example |
| --- | --- | --- |
| `am/is/are/was/were/has/have/had/will/can/should/did…` + verb after a subject | ✅ yes | `we have completed` |
| A verb with `-s` or `-ed` right after the subject | ✅ yes | `the build failed`, `it works` |
| `to` + base verb | ❌ no (infinitive, see G13) | `need to update`: the predicate is `need` |
| `-ing` without `be` before it | ❌ no (gerund or participle) | `by using a smaller VM` |
| `-ed` after a noun, without `be/have` | ❌ no (usually an attribute) | `the PR created yesterday` |
| The verb after `which / that / who / if / when / because` | ⚠️ belongs to that clause | `the story which we discussed` |

**Tip:** count the real predicates in a line and you know how many clauses it has.

### 6.2 Step ④: Long Subjects — Find the Head Noun

```text
The list of open tickets for the web part is quite long.

Most of the content will be kept in markdown files.

The integration into the new pipeline is something we need to prioritize.
```

Heads: `list`, `content`, `integration`.

### 6.3 Walkthrough 1: Three Clauses in One Line

> Subtitle: So, for the documentation site, so we have completed all the comparison and the conclusion part, and Leo has shared the Confluence page link to the team, so you can review it.

1. **Cut:** `for the documentation site` | `we have completed …` | `Leo has shared …` | `you can review it`
2. **Delete:** both `so`s; `for the documentation site,` is a topic label — set it aside.
3. **Find the verbs:** `have completed`, `has shared`, `can review` — three real verbs, three clauses.
4. **Find the subjects:** `we`, `Leo`, `you`. Objects: `the comparison and the conclusion part`, `the link`, `it`.

Meaning: for the documentation site, we finished the comparison and conclusion, Leo sent the Confluence link to the team, and everyone can review it.

### 6.4 Walkthrough 2: A Frame and a Condition

> Subtitle: Yeah, I think if we are following the previous website workflow, I think most of the content will be kept in markdown files, so designers and other non-technical people can go ahead and update the markdown files in the repo.

1. **Cut:** `I think` | `if we are following …` | `most of the content will be kept …` | `designers … can go ahead and update …`
2. **Delete:** `Yeah`; `I think` appears twice — it is only a **frame**, keep it once.
3. **Find the verbs:** `are following` (inside the `if` clause), `will be kept`, `can go ahead and update`.
4. **Main skeleton:**

```text
Most of the content will be kept in markdown files.

Designers can update the files in the repo.
```

`if we are following the previous website workflow` is a condition — an adverbial.

### 6.5 Walkthrough 3: Missing Words

Non-native speakers often drop `be` or the subject, and speech recognition swallows words too. **If you can't find a verb, try adding `is/are` or `I/we`.**

> Subtitle: Yeah, I saw Ben was out of office today and when he back tomorrow, I will follow up with him.

1. **Cut:** `I saw` | `Ben was out of office today` | `when he back tomorrow` | `I will follow up with him`
2. **Find the verbs:** `saw`, `was`, `will follow up`. `when he back` has no verb → `when he is back`.
3. **Main skeleton:** `I will follow up with him.`

```text
I saw that Ben was out of office today. When he is back tomorrow, I will follow up with him.
```

## 7. Real Meeting Examples (Adapted)

These come from real meeting subtitles, with recognition errors fixed and names replaced.

```text
Ken is working on the service account creation.

The research I'm referring to is about the approval process.

Mia has shared the detailed information in the Teams channel.

The pipeline needs to be set up properly before we start the actual work.

So once it's done, I'll share it with you.

All of them are blocked by the approval.
```

| Sentence | Subject (head) | Verb | Object / complement | Pattern |
| --- | --- | --- | --- | --- |
| 1 | Ken | is working on | the service account creation | ③ |
| 2 | the research | is | about the approval process | ② |
| 3 | Mia | has shared | the detailed information | ③ |
| 4 | the pipeline | needs to be set up | — | ① |
| 5 | I | will share | it | ③ |
| 6 | all (of them) | are | blocked | ② |

In sentence 2, `I'm referring to` is a relative clause describing `research`. In sentences 4 and 5, `before we start …` and `once it's done` are time clauses.

## 8. Reading Subtitles

1. **Find the verb first, then the subject.** The verb is the center; the subject is on its left.
2. **`I think / I guess / I mean / you know` are frames, not the point.** The information comes after them.
3. **`For X,` / `Regarding X,` are topic labels.** Read them as headings; see [G16](16-prepositions.md).
4. **For repeats and self-corrections, keep only the last version.** `we, we, we need to` → `we need to`.
5. **If there is no verb, add one.** Non-native speech and speech recognition often drop `is/are/am` and subjects:

| Seen in subtitles | Standard form | What is missing |
| --- | --- | --- |
| `When you ready for test, …` | `When you are ready for testing, …` | `be` |
| `when he back tomorrow` | `when he is back tomorrow` | `be` |
| `Also help me with some Figma files.` | `He also helped me with some Figma files.` | subject |
| `Mia and Ken, they will both work on it.` | `Mia and Ken will both work on it.` | extra subject `they` (common in speech) |
| `there is an issue has raised` | `an issue has been raised` | two competing verbs |
| `I think the scope is not contain the external team.` | `I think the scope doesn't include the external team.` | `is` and `contain` both used as the verb |

## 9. Common Mistakes

| ❌ Wrong | ✅ Right | Reason |
| --- | --- | --- |
| `Is done.` | `It's done.` | a subject is required |
| `I busy today.` | `I'm busy today.` | adjectives need `be` |
| `I am agree.` | `I agree.` | `agree` is already a verb |
| `I'm work on the login page.` | `I'm working on the login page.` | `be` + `-ing`, or drop `be` |
| `The PR already merge.` | `The PR has already been merged.` | incomplete verb |
| `Recently is very busy.` | `I've been very busy recently.` | missing subject, wrong tense |
| `We need discuss about the plan.` | `We need to discuss the plan.` | `need to` + verb; `discuss` takes a direct object |
| `Can you explain me the issue?` | `Can you explain the issue to me?` | `explain` takes no person object |
| `One of the tests are failing.` | `One of the tests is failing.` | the head is `one` |
| `Does anyone has questions?` | `Does anyone have questions?` | base verb after `does` |
| `I finished the API, I will start the UI.` | `I finished the API, and I will start the UI.` | join two full sentences with a conjunction or a period |

## 10. Sentences You Can Use Today

```text
I finished the login page yesterday.

I'm still working on the API changes.

The PR is ready for review.

I'm blocked by the access issue.

I'll send you the link after the meeting.

It works on my machine.

Let me know if you have any questions.

That's all for my part.
```

## 11. Practice

**A. Find the skeleton: write the subject and verb of each clause**

1. Yeah, so for the native part, Kevin has finished the interface integration.
2. I think the list of open bugs for this sprint is still quite long.
3. Okay, so the pipeline we set up last week failed again this morning.
4. And for the testing, Emma is checking it, and she will update the ticket today.
5. So the main reason is the new version of the library, and we need to upgrade it.

**B. Name the pattern (①–⑤)**

1. It works now.
2. Can you send me the document?
3. The build is green.
4. We need more test cases.
5. Please keep me posted.

**C. Correct the sentences**

1. Is blocked by the design team.
2. I very busy this week.
3. The deployment already finish.
4. Can you explain me the error?
5. Most of the tickets is closed.
6. Everyone have the access now.

<details>
<summary>Answers</summary>

**A.**
1. Subject `Kevin`, verb `has finished` (`for the native part` is a topic label)
2. Frame `I think`; subject head `the list`, verb `is`
3. Subject head `the pipeline`, verb `failed` (`we set up last week` describes the pipeline)
4. Clause 1: `Emma` + `is checking`; clause 2: `she` + `will update`
5. Clause 1: `the main reason` + `is`; clause 2: `we` + `need to upgrade`

**B.** 1 ① 2 ④ 3 ② 4 ③ 5 ⑤

**C.**
1. It's blocked by the design team. (or I'm blocked by …)
2. I'm very busy this week.
3. The deployment has already finished. (or is already finished)
4. Can you explain the error to me?
5. Most of the tickets are closed.
6. Everyone has access now.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- [01-foundations/01 Word Classes and Sentence Parts](../../01-foundations/01-word-classes-and-sentence-parts.md)
- [01-foundations/03 Five Basic Sentence Patterns](../../01-foundations/03-five-basic-sentence-patterns.md)
- [Sentence elements explained (Chinese only)](../../zero-to-work-english/04-工作沟通B1/english-grammar-sentence-elements.zh.md)
- Chapters 1–3 of [英语语法全解](../../english-grammar/英语语法全解.md)
