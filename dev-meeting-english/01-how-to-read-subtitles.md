# How to Read Meeting Subtitles: Four Steps and Noise Filtering

<!-- sentence-audio: fenced-only -->

> [中文版](01-how-to-read-subtitles.zh.md) · [Previous: Study Plan](00-study-plan.md) · [Course home](README.md) · [Grammar index](grammar/README.md)

## 1. Why Subtitles Are Harder Than Textbooks

Textbook sentences are written. Meeting subtitles are **spoken, then transcribed by a machine**. They contain five kinds of noise:

| Noise | Example | What to do |
| --- | --- | --- |
| Fillers | `okay, yeah, so, just, I mean, you know, like` | Remove them first (section 3) |
| Repetitions and restarts | `we can, we can have a …`, `for the, for the native part` | Read only the last complete version |
| Run-on sentences | `For web part, currently we are in the third week, and for the …, most of the stories are just completed and …` | Cut at `and`, `so`, `but`, and commas |
| Non-native grammar | `regarding to the`, `discuss about`, missing articles or plurals | Understand it; say the standard form yourself |
| Speech-recognition errors | `Face` for `phase`, `main brands` for `main branch` | Guess from sound and context (section 4) |

The key is **not knowing every word** but **finding the sentence skeleton quickly**. That is what grammar is for.

## 2. The Four-Step Method

### Step 1: Find the Topic Label

| Topic label | See |
| --- | --- |
| `For the web part, …` | [G16 Prepositions](grammar/16-prepositions.md) |
| `Regarding the release, …` / `As for …` | [G16](grammar/16-prepositions.md) |
| `So, …` / `Okay, so …` | [G17 Conjunctions](grammar/17-conjunctions-and-linking.md) |
| `And the next one is …` | [M02 Weekly Sprint Sync](meetings/02-weekly-sprint-sync.md) |

### Step 2: Find the Main Clause (Subject + Verb)

```text
For the native part, most tasks are already done.

Currently Ken and Priya are working on this story.
```

See [G01 Sentence Skeleton](grammar/01-sentence-skeleton.md).

### Step 3: Read the Status (Tense and Voice)

| Verb form | Status | Example |
| --- | --- | --- |
| `is / are + -ing` | in progress | `Alex is working on it.` |
| `have / has + past participle` | done, result still relevant | `We have finished the integration.` |
| past simple | done at a past time | `I merged it yesterday.` |
| `is / are + past participle` | passive state | `The PR is merged.` / `It's blocked by the API.` |
| `will / be going to / gonna` | planned | `We will continue in Sprint 2.` |
| `need to / have to` | required | `We need to get approval first.` |

See [G07](grammar/07-present-simple-and-continuous.md), [G08](grammar/08-past-simple-and-present-perfect.md), [G09](grammar/09-future-will-going-to.md), [G12](grammar/12-passive-voice.md).

### Step 4: Catch the Action Items

```text
Can you take a look at the PR?

We need to align with the design team.

I will follow up with Mia after the meeting.
```

Signal words: `can you`, `could you`, `please`, `we need to`, `I will`, `let's`, `action item`, `follow up`.

## 3. Filtering Fillers

`okay / yeah` alone appear about 330 times per 10,000 words. Most fillers do not change the meaning:

| Filler | Usual function | When it **does** matter |
| --- | --- | --- |
| `okay`, `ok`, `yeah`, `yep` | acknowledgment, transition | as a direct answer: `Yeah.` = yes |
| `so` | opening a topic | meaning "therefore": `It failed, so we rolled it back.` |
| `just` | softening | meaning "a moment ago": `I just merged it.` |
| `I mean` | rephrasing | when it corrects what came before |
| `you know`, `like`, `kind of` | thinking time | `kind of` meaning "somewhat" |
| `actually`, `basically` | emphasis, summary | `actually` meaning "contrary to what you expect" |
| `right?` | asking for confirmation | when someone waits for your answer |

```text
Okay, yeah, so I think, I mean, we can just leave it for now.
```

Core message: `we can leave it for now`. See [G23 Spoken Grammar](grammar/23-spoken-grammar.md).

## 4. Speech-Recognition Errors

Technical words and names are often transcribed wrongly. **Read the word aloud, find the closest work term, and check it against the context.** Real examples from your meetings:

| Subtitle shows | Speaker said | Clue |
| --- | --- | --- |
| `almost every story is in dev. Face.` | `phase` | `dev phase` is a fixed phrase |
| `this conference document` | `Confluence document` | Confluence pages are discussed often |
| `merged this to our main brands` | `main branch` | `merge … to main branch` |
| `the ready for relief phase` | `ready for release` | pairs with `ready for QA` |
| `Browder version support` | `browser version` | browser compatibility context |
| `why port` / `web post` | `web part` | pairs with `native part` |
| `native port` | `native part` | same |
| `post-describe discussion` | `post-scrum discussion` | the discussion after scrum |
| `mod repo` | `monorepo` | repository structure |
| `GFrog artifactor` | `JFrog Artifactory` | package tool |

Patterns: similar sounds swap (`part ↔ port / post`, `phase ↔ face`, `branch ↔ brands`); proper names are almost always wrong, so do not get stuck on them; skip a short unreadable piece and check whether the next sentence fills the gap.

## 5. Non-Native Forms: Understand, Do Not Copy

| You may see | Standard form |
| --- | --- |
| `regarding to the timeline` | `regarding the timeline` |
| `discuss about the issue` | `discuss the issue` |
| `thanks for your share` | `thanks for sharing` |
| `most of story are completed` | `most of the stories are completed` |
| `he return next week` | `he returns next week` / `he'll be back next week` |
| `we already merged it yesterday` | `we merged it yesterday` |

## 6. Three Worked Examples

### Example 1: A Stand-Up Line

> Yeah, so for my side, I'm, I'm still working on the, the CI pipeline, and I think it should be done by tomorrow.

1. **Topic:** `for my side`
2. **Main clauses:** `I'm still working on the CI pipeline` + `it should be done by tomorrow`
3. **Status:** in progress; expected tomorrow
4. **Action:** none

```text
I'm still working on the CI pipeline, and it should be done by tomorrow.
```

### Example 2: A Long Sprint-Sync Sentence

> For web part, currently we are in this one, the third week, and for the technical foundation feature, most of the story are just completed and the remaining items are just on track.

1. **Cut:** `we are in the third week` / `most of the stories are completed` / `the remaining items are on track`
2. **Topics:** `For web part`, `for the technical foundation feature`
3. **Status:** week three; mostly done; the rest on track
4. **Non-native form:** `most of the story are` → `most of the stories are`

```text
For the web part, we are in the third week. Most of the stories are completed, and the remaining items are on track.
```

### Example 3: A Sentence With an Action Item

> Okay, so, um, Ken, can you, can you take a look at the comments? And once he is back, we can align with him and proceed.

1. **Main clauses:** `Ken, can you take a look at the comments?` + `once he is back, we can align with him and proceed`
2. **Grammar:** `once` + present simple for a future event ([G20](grammar/20-adverbial-clauses.md))
3. **Action items:** Ken reviews the comments; align when he returns

```text
Ken, can you take a look at the comments?

Once he is back, we can align with him and move forward.
```

## 7. After-Meeting Review Template

```markdown
### 2026-XX-XX Stand-Up

| Subtitle line | Main clause | Grammar | My understanding | Sentence to reuse |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
```

## 8. Next Steps

- Follow the [Study Plan](00-study-plan.md), starting with [G01 Sentence Skeleton](grammar/01-sentence-skeleton.md).
- To try it now, do drills 1–2 in [P01 Subtitle Reading Drills](practice/01-subtitle-reading-drills.md).
