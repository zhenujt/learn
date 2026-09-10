# Unit 20: An Integrated Software Communication Project

[中文](20-integrated-project.zh.md) · [Course](../README.md) · [Final Assessment](../05-assessments.md)

## Goal and vocabulary

Use listening, speaking, reading, and writing across one small project. Prerequisite: Units 1-19. No programming implementation is required. Words: deliverable (work to hand over), priority (relative importance), evidence, scope, revised (changed), handover. Review rather than memorize a new technical list.

## Project brief: a fictional team-notes app

The team needs to export one note as a PDF. A note has a title and text. The first release supports one note at a time; batch export is excluded. A note with an empty title must show an error. The reviewer is Eva. Pat owns test-account access. Friday is the desired release target, not a commitment. No file-size limit or performance target has been agreed.

Reading artifact: **Ticket NE-20: export a single note; preserve the visible title; require a non-empty title; show a confirmation after download starts. Browser scope, empty-body behavior, and performance target are open.** Ask about open requirements before treating your guesses as facts.

## Model exchange

A: Can we release on Friday?
B: I can't confirm yet. I need the browser scope and test-account access.
A: Pat can provide access tomorrow.
B: Thanks. Could Eva confirm the browser scope today?
A: I'll ask her. What can you do meanwhile?
B: I can prepare the test cases. I'll update the estimate after we confirm the scope.

The speaker offers useful work without inventing a release guarantee. `after we confirm` uses present simple for the future time clause.

## Guided practice

1. Identify two agreed requirements and two unknowns.
2. Repair: We will released on Friday because the target says Friday.
3. Ask about empty-body behavior with a direct or indirect question.
4. Write a specific request to Pat.
5. State the difference between "tests passed" and "release approved."

## Project sequence

Complete over four to six study sessions. Keep the first attempt and the revised version so you can compare them.

1. **Requirements interview:** requester and developer discuss the brief for three minutes. Ask at least three useful questions. Record confirmed answers separately from open items, with owners. A partner may invent answers but must announce them as new decisions.
2. **Planning:** write 80-120 words covering scope, sequence, dependencies, and next update. Give a 45-second spoken plan. Answer "Can you finish earlier?" without inventing certainty.
3. **Listening change:** hide the reader card below. A partner reads it or prepares speech with it. Note what changed, what remains excluded, and who must act. Read it only after listening if possible. Compare it with your original brief and revise the plan.
4. **Bug and review:** use this evidence: in the test environment, an empty-title export shows no error in two attempts; the PDF download starts. Write a bug report, explain it aloud, and request a test. Your partner asks whether other browsers were checked; the correct supplied fact is that they were not.
5. **Demo and handover:** show the intended happy path on paper, explain the known bug honestly, and identify the remaining release decision. Speak for two minutes, answer three unfamiliar questions, then write a 100-150 word handover.

<details>
<summary>Reader card: hide from the learner before listening</summary>

Eva has confirmed Browser Q version 12 for the first release. Empty note text is allowed, but the title is still required. Pat cannot provide the test account tomorrow; access will be ready on Thursday instead. Batch export remains out of scope. Please prepare the test cases today. Eva will review the release evidence on Thursday at 15:00 UTC+0. Friday is still a target, not an approved date.

</details>

## Evidence and self-check

Produce six artifacts: requirements notes, plan, listening-change notes, bug report, recording of demo/questions, handover. A partner checks facts against the brief and change card. Use the rubric in [Assessments](../05-assessments.md): meaning, interaction, language, listening/reading accuracy, writing usefulness. Do not average away an incorrect release promise or missing requirement.

<details>
<summary>Answers and handover model</summary>

1. Agreed: one note; non-empty title. Unknown: browser scope; empty-body behavior, among others. 2. Friday is a target, but the release date is not confirmed. 3. Should we allow a note with no body text? 4. Could you provide a test account and confirm when it will be ready? 5. Tests provide evidence; approval is a separate decision.

Change answers: Q 12 agreed; empty body allowed, title required; access delayed to Thursday; no batch export; prepare cases today; Eva reviews Thursday 15:00 UTC+0; Friday unapproved.

Handover model: The first release exports one note as a PDF and supports Browser Q version 12. Empty body text is allowed, but a title is required. Batch export remains out of scope. Pat will provide test-account access on Thursday, so the original access plan has changed. We can prepare the test cases today. In two test attempts, exporting a note with an empty title started a download without showing an error. This does not meet the agreed requirement. Other browsers have not been checked. Eva will review the evidence on Thursday at 15:00 UTC+0. Friday remains a release target, not an approved date. Please verify the empty-title behavior before requesting approval.

</details>

## Transfer beyond this course

Complete Assessment 5 with a new scenario, not this memorized project. Then repeat the workflow with a different small feature and more varied voices. Keep practicing everyday conversations too. This course provides a foundation and observable tasks, not a guarantee of fluency, independent incident leadership, or a certified CEFR level.