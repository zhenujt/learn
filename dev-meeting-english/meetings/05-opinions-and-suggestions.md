# M05 Opinions, Agreement, and Suggestions

<!-- sentence-audio: fenced-only -->

> **Frequency: 🔴 Must learn** | Scene: post-scrum discussion, choosing solutions, tech lead comments, estimation | Meeting data per 10,000 words: `I think` ≈ 59, `probably` ≈ 15, `should` ≈ 15, `definitely` ≈ 10, `maybe we can` ≈ 4, `sounds good` ≈ 3; `in my opinion` only 0.2
>
> [中文版](05-opinions-and-suggestions.zh.md) · [Previous: M04 Asking, Clarifying, and Confirming](04-questions-and-clarifying.md) · [Next: M06 Blockers, Risks, Delays, and Asking for Help](06-blockers-risks-and-help.md) · [Meetings index](README.md)

## What This Lesson Solves

In the post-scrum discussion, people are comparing two solutions. You have an idea, but you worry about sounding too direct, or you don't know how to disagree politely.

In the real meetings, the most common way to give an opinion is not the textbook `In my opinion` (0.2 per 10,000 words) but `I think` (about 59). And suggestions rarely start with `I suggest`; people use softer forms:

```text
I think it works for now. But maybe we can find a better long-term solution.
```

This sentence has an **opinion** (`I think it works`), a **limit** (`for now`), and a **suggestion** (`maybe we can …`). It is polite and clear. This lesson teaches you to speak like this.

**After this lesson, you can:**

1. Give an opinion with `I think` + a reason, and control how strong it sounds with `probably` or `definitely`.
2. Agree with short replies such as `Sounds good.` and `Makes sense.`
3. Disagree politely with `I see your point, but …` and `I don't think …`
4. Suggest and push toward a decision with `Maybe we can …`, `How about …?`, and `Let's go with …`

## 1. The Meeting Moment: When You Need to Give a View

| Situation | What happens | What you might say |
| --- | --- | --- |
| Post-scrum discussion | Comparing two technical options | `I think option B is better, because …` |
| After someone's update | The tech lead comments; you add a point | `Looks good to me.` / `I have one concern.` |
| Estimation (grooming) | People give different points | `I'd give it five, because there are dependencies.` |
| After a demo | Giving feedback | `This is really helpful. Maybe we can also …` |

In your meetings, tech leads and senior colleagues use these patterns most:

| Function | Most common form | Per 10,000 words |
| --- | --- | --- |
| Opinion | `I think …` | ≈ 59 |
| Uncertain judgment | `probably` | ≈ 15 |
| Advice, obligation | `we should …` | ≈ 15 |
| Certain judgment | `definitely` | ≈ 10 |
| Soft negative | `I don't think …` | ≈ 2.5 |
| Temporary decision | `for now` | ≈ 2.4 |
| Choosing an option | `go with …` | ≈ 1.8 |

## 2. The Speaking Formula

| Function | Formula | Example |
| --- | --- | --- |
| Opinion | `I think + opinion + because + reason.` | `I think we should use Harness, because it's our standard.` |
| Agree | `Sounds good.` / `Makes sense.` / `I agree.` | `Makes sense to me.` |
| Disagree politely | `I see your point, but + concern.` | `I see your point, but I'm worried about the cost.` |
| Suggest | `Maybe we can + action.` / `How about + -ing?` | `How about trying it on one component first?` |
| Decide | `Let's go with + option.` / `Let's leave it for now.` | `Let's go with option B.` |

### 2.1 The Certainty Scale 🔴

The same judgment changes strength with one word. You will see these words in subtitles again and again:

| Certainty | Words | Example |
| --- | --- | --- |
| Very sure | `definitely`, `for sure` | `We definitely need a review step.` |
| Fairly sure | `I think`, `should` | `It should be ready by Friday.` |
| About 50/50 | `probably` | `We will probably need another approval.` |
| Not sure | `maybe`, `might`, `may` | `It might affect the old version.` |

`should be ready` means **"it is expected to be ready"**; it is not a promise. A real commitment is `will be ready`.

## 3. Sentences by Function

### 3.1 Giving Your View

```text
I think the local runner is fine for now.

To me, the second option is easier to maintain.

I don't think we need another item for the same thing.

It's still too early to say which option is better.

From my understanding, the main value is to save setup time.
```

Note the third sentence: English prefers `I don't think we need …` to `I think we don't need …`. Putting the negative before `think` sounds softer.

### 3.2 Agreeing

```text
Sounds good.

That makes sense.

Looks good to me.

Yes, I agree with that.

That works for me.
```

The differences: `Sounds good` accepts a **plan or suggestion**; `Looks good` approves **something you have seen** (a document, a PR, a demo); `Makes sense` means **"the explanation is logical"**, not necessarily that you accept the plan; `I agree` is clear agreement.

### 3.3 Partly Agreeing and Disagreeing Politely

```text
I see your point, but I'm a bit worried about the maintenance cost.

That makes sense, but I'm not sure if there's any risk if we upgrade the version.

I don't think it's a real blocker for us.

I agree with the goal, but maybe the timeline is too tight.

I have a slightly different view on this.
```

Many Chinese engineers feel that saying `No` directly is rude, so they say nothing. In English meetings, **disagreement with a reason is welcome**. Start with `I see your point, but …` and then give your reason.

### 3.4 Making Suggestions ⭐ Most Useful

```text
Maybe we can start with the self-hosted approach and see if there are any limitations.

I wonder if we can reuse the existing pipeline.

How about trying it on one component first?

We can consider using a shared runner instead.

I'd suggest doing some quick research first.

Why don't we create a subtask to track it?
```

**Grammar note:** `How about`, `consider`, and `suggest` take `-ing`: `how about trying`, `consider using`, `suggest doing`. Do not say `consider to use`. See [G13](../grammar/13-to-do-doing-done.md).

### 3.5 Giving Reasons and Comparing Options

```text
The benefit is that we don't need another approval.

The downside is that it only works on my laptop.

Option A is faster, but option B is easier to maintain.

As a short-term solution, it's fine. In the long term, we need a cloud runner.
```

### 3.6 Deciding or Parking an Idea

```text
Let's go with option B.

Most people gave five, so let's go with five.

Let's leave it for now and put it into the backlog.

Let's try it in this sprint and see how it goes.
```

### 3.7 Responding to Someone's Suggestion

```text
Good idea. I'll try it.

Thanks for the suggestion. Let me think about it.

Okay, got your point.
```

## 4. Full Dialogue: Local Runner or Cloud Runner? (Adapted from Real Meetings)

Scene: post-scrum discussion. The iOS pipeline needs a macOS machine. Alex has set up a local runner on his laptop as a stopgap. Ken is the tech lead, Priya is from the platform team, and Grace is hosting.

```text
Grace: Okay, the next topic is the iOS pipeline. Alex, can you give some background?

Alex: Sure. The iOS build needs a real macOS machine, so I set up a local runner on my laptop. I think it's fine for now.

Ken: I see your point, but I don't think it's a good long-term solution. If your laptop is not available, the pipeline will be blocked.

Alex: That makes sense.

Priya: Maybe we can pull a macOS image in the cloud and run the pipeline there.

Alex: Good idea. But I'm not sure if our current cloud subscription supports macOS machines.

Ken: I think it's worth checking. How about doing some quick research this week?

Priya: Sounds good. I can help with the platform side.

Grace: Okay, so let's go with the local runner as a short-term solution, and Alex and Priya will research the cloud option. Does that work for everyone?

Ken: Yes, that works for me.

Alex: Yes, I agree.
```

Notice the rhythm: **opinion** (`I think it's fine for now`) → **polite disagreement + reason** (`I see your point, but … If …`) → **suggestions** (`Maybe we can …` / `How about …?`) → **decision** (`Let's go with …`).

## 5. When You Hear This…

| You hear | It means |
| --- | --- |
| `That's a good point, but …` / `I see your point, but …` | **Disagreement** follows; focus on what comes after `but` |
| `I'm not sure about that.` | Polite disagreement |
| `It depends.` | No single answer; it depends on the case |
| `probably` / `might` | The speaker is **not sure**; don't record it as a decision |
| `definitely` / `for sure` | The speaker is certain |
| `Let's go with …` | **A decision has been made**; note it |
| `Let's leave it for now.` / `Let's put it into the backlog.` | **Not doing it now** |
| `Sounds good.` / `Makes sense.` | Agreement or acceptance |
| `Hmm, okay…` (hesitant) | There may be doubts; you can ask `Any concerns?` |

## 6. Reading the Subtitles

| You may see | Standard form |
| --- | --- |
| `we can consider to use` | `we can consider using` |
| `I'm agree` / `I agreeing for` | `I agree` / `I agree with` |
| `better we need to think about` | `we'd better think about` / `it's better to think about` |
| `it's not a truly blocker` | `it's not really a blocker` |
| `the go forward one` | `the option we go forward with` |
| `I think so it's not needed` | `I don't think it's needed` |
| `we can do a research on this` | `we can do some research on this` (`research` is uncountable) |

**How to read:** a sentence may have several softeners: `I think`, `I mean`, `like`, `probably`. Remove them first, then find the core. For example, `I think, like, we probably can, I mean, start with the self-hosted one` → core: `we can start with the self-hosted one`. See [G23](../grammar/23-spoken-grammar.md).

## 7. Common Mistakes

| ❌ Wrong | ✅ Right | Why |
| --- | --- | --- |
| `I am agree.` | `I agree.` | `agree` is a verb; no `am` |
| `I agree you.` | `I agree with you.` | `agree with + person / idea` |
| `In my opinion, I think …` | `I think …` | Repetitive; choose one |
| `We can consider to use it.` | `We can consider using it.` | `consider + -ing` |
| `How about use the old one?` | `How about using the old one?` | `how about + -ing` |
| `I suggest you to try it.` | `I suggest trying it.` / `I'd suggest that you try it.` | `suggest` does not take `person + to do` |
| `I think it's not necessary.` | `I don't think it's necessary.` | Not a grammar error, but English prefers negating `think` |

## 8. Your Opinion and Suggestion Template

| Function | Template | Hint |
| --- | --- | --- |
| Opinion | `I think ________, because ________.` | View + reason |
| Agree | `Sounds good.` / `That makes sense to me.` | Agree |
| Partly agree | `I see your point, but I'm a bit worried about ________.` | Acknowledge, then concern |
| Suggest | `Maybe we can ________.` / `How about ________ing?` | Offer an option |
| Compare | `________ is faster, but ________ is easier to maintain.` | Show the trade-off |
| Decide | `So, let's go with ________ for now. Does that work for everyone?` | Propose a decision |

A filled-in example:

```text
I see your point, but I'm a bit worried about the test time. Maybe we can run the full tests only at night. The daily build is faster, and the nightly build is more complete. So, let's go with that for now. Does that work for everyone?
```

## 9. Grammar Used Here

| Grammar | Role in giving opinions | Lesson |
| --- | --- | --- |
| Modal verbs | `should`, `could`, `might`, `would` set the tone | [G11](../grammar/11-modal-verbs.md) |
| Gerunds | `consider using`, `how about trying`, `suggest doing` | [G13](../grammar/13-to-do-doing-done.md) |
| Comparatives | `easier to maintain`, `a better solution` | [G15](../grammar/15-adjectives-adverbs-comparison.md) |
| Conjunctions | `but`, `because`, `so` link views and reasons | [G17](../grammar/17-conjunctions-and-linking.md) |
| Object clauses | `I think (that) …` `I don't think …` | [G18](../grammar/18-noun-clauses.md) |
| Conditionals | `If your laptop is not available, …` | [G21](../grammar/21-conditionals.md) |
| Spoken softeners | `I mean`, `like`, `kind of` | [G23](../grammar/23-spoken-grammar.md) |

For more real agreement and suggestion phrases, see the responses section of [Meeting English Phrases](../../meeting-english-phrases.md); for technical decision vocabulary, see [Meeting Frequent Words](../../meeting-frequent-words.md).

## 10. Practice

**A. Is this agreement, disagreement, a suggestion, or a decision?**

1. I see your point, but I'm worried about the timeline.
2. Let's go with the second option.
3. How about splitting the story into two?
4. Makes sense to me.
5. I don't think we need another review.
6. Let's leave it for now.

**B. Correct the sentences**

1. I am agree with Ken.
2. We can consider to reuse the template.
3. How about ask the design team?
4. I think it's not a blocker.

**C. Say it in English**

1. In my view this is okay at the moment, but long term we need something better.
2. I understand what you mean, though the cost worries me a little.
3. Perhaps we could test it on a single component first.
4. Most people chose three points, so three it is.

<details>
<summary>Answers</summary>

**A.** 1 disagreement (polite) 2 decision 3 suggestion 4 agreement 5 disagreement (polite) 6 decision (parked)

**B.**
1. I agree with Ken.
2. We can consider reusing the template.
3. How about asking the design team?
4. I don't think it's a blocker.

**C.**
1. I think it's fine for now, but in the long term we need a better solution.
2. I see your point, but I'm a bit worried about the cost.
3. Maybe we can try it on one component first.
4. Most people gave three, so let's go with three.

</details>

## Replaced Materials

This lesson merges and replaces the following archived documents:

- Sections 13 and 14 of [Workplace Spoken English](../../workplace-spoken-english.md)
- Section 7 of [Software Workplace Phrases](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.md)
- Section 9 of [Software Demo and Discussion Playbook](../../zero-to-work-english/04-工作沟通B1/software-demo-and-discussion-playbook.md)
- Sections 6 and 10 of [Core Software Business English](../../zero-to-work-english/04-工作沟通B1/software-business-english-must-know.md)
- [Adult Software English, Unit 16: Reviews and Respectful Disagreement](../../adult-software-english-course/units/16-reviews.md)
