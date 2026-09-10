# Unit 16: Reviews and Respectful Disagreement

[中文](16-reviews.zh.md) · [Course](../README.md) · [Next](17-meetings.md)

## Goal and words

Give actionable feedback and respond to it. Words: review (examine work), change, duplicate (repeated), readable (easy to read), concern (possible problem), suggest, agree, alternative, required, optional.

## Dialogue and reading

A: Could we move this check before the request?
B: What's the reason?
A: If the input is empty, we can return early and avoid a request.
B: I agree about empty input. I'm concerned about changing the existing error message.
A: Good point. Can we keep the same message?
B: Yes. I'll add a test for that behavior.
A: Thanks. The variable rename is optional, but the empty-input test is required before approval.

Read: **Review: required change: handle empty input without sending a request. Keep the current error message. Add a regression test. Optional suggestion: rename value to searchText for readability. Approval is pending the required changes.** A regression test checks that behavior remains correct after changes.

## Pattern

Feedback is easier to act on when it includes observation, impact, and a request: `This sends a request for empty input. That adds unnecessary work. Could we return early?` Discuss the code, not the author's intelligence or character.

`I suggest adding a test` uses `verb-ing`; `I suggest that we add a test` uses a clause. Do not say `I suggest you to add`. `I agree with you about the test` needs no be: not `I am agree`.

Disagree precisely: `I agree with X, but I'm concerned about Y because ...`. A polite question can still represent a blocking requirement, so label required and optional changes explicitly.

## Practice

1. Repair: I am agree. I suggest to add a test.
2. Rewrite "Your code is bad" as feedback about the behavior in the reading.
3. Ask why a proposed change is needed.
4. Reading: is the rename required? Can approval happen before the required changes?
5. Respond with agreement on the goal and a concern about changing the message.

## Listen, speak, and write

Listen for proposal, reason, concern, agreed action, and optional item. Explain what remains blocking. Have the reader swap required and optional for the rename and test, then describe the changed decision.

Role cards: reviewer wants fewer duplicate checks; author worries about different messages in two cases. Ask for an example, propose a test, and agree on one change or record the unresolved issue. Switch roles. Aim for a two-minute exchange, not a memorized speech.

Write one review comment and one author reply, 60-100 words combined. Include the reason, required/optional status, and next step. Use a fictional snippet or behavior, not confidential code.

<details>
<summary>Answers and model</summary>

1. I agree. I suggest adding a test. 2. This sends a request for empty input. Could we return early and keep the existing message? 3. Could you explain why we need this change? 4. No; not under the stated review conditions. 5. I agree about avoiding the request, but I'm concerned about changing the error message.

Listening: move check earlier; avoid empty-input request; preserve message; add test; rename optional, test required.

Reviewer: This path sends a request even when the input is empty. Could we return early while keeping the current error message? This change and a regression test are required before approval. Renaming the variable is optional.

Author: I agree about the unnecessary request. I'll move the check and add a test for the existing message. I'll leave the rename for a separate change.

</details>

## Check

Can both people name the agreed change and the unresolved concern? Complete [Assessment 4](../05-assessments.md). Reuse reasons and conditions from Unit 12 without making every comment long.