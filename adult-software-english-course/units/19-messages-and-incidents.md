# Unit 19: Messages, Handover, and Incident Updates

[中文](19-messages-and-incidents.zh.md) · [Course](../README.md) · [Next](20-integrated-project.md)

## Goal and vocabulary

Write a concise request and provide evidence-based incident updates. Words: incident (service problem requiring a response), affected (experiencing impact), investigate (examine), restore (bring back), monitor (watch over time), workaround (temporary way around a problem), impact, confirmed, handover (transfer of responsibility).

## Dialogue and reading

A: What's the current impact?
B: Some test users can't download reports. We haven't confirmed production impact.
A: Do we know the cause?
B: Not yet. We're checking the download service logs.
A: Who is handling the next update?
B: I am. I'll post it at 14:30 UTC+0, even if we have no new findings.
A: Has the issue been resolved?
B: No. One retry succeeded, but we need more checks.

Read: **13:55 UTC+0: three of five test downloads failed. 14:05: one retry succeeded. Production impact unknown. Investigation owner: Kai. Next update 14:30 UTC+0. No confirmed cause or approved workaround.** All events are fictional. A successful retry does not prove broad recovery.

## Pattern

Message structure: context + specific request + useful time. `Could you review B-7 by 16:00 UTC+0? We need your approval before testing the next version.` Include links only to appropriate, accessible systems.

Passive: `The issue was reported at 13:55` emphasizes the event; `Kai reported the issue` emphasizes the person. Build passive with be + past participle: `was reported`, `has been resolved`. Do not let passive wording hide an owner when a teammate needs to act.

`We are investigating` is current work; `We have restored service` claims recovery. Use the latter only with supporting evidence. `No production impact has been confirmed` means unknown here, not proof that production is unaffected.

## Practice

1. Repair: The issue was report at two.
2. Is "We haven't confirmed production impact" equivalent to "Production is unaffected"? Explain.
3. Reading: what is the failed-download count? Who owns the investigation?
4. Write a next-update sentence that does not promise resolution.
5. Improve "Please check this ASAP" by naming a task and fictional deadline.

## Listen, speak, and write

Listen for known impact, unknown scope, current action, owner/time, and recovery status. Have the reader replace unknown production impact with confirmed production impact, then revise your summary without changing other facts.

Role-play a two-minute handover. Outgoing person knows the timeline; incoming person asks about evidence, ownership, and next update. Introduce a successful retry and resist declaring recovery. This is language practice, not an operational incident-response procedure; real work must follow team policy.

Write two messages: a 30-50 word review request and a 70-100 word incident update. Include no personal data, credentials, raw private logs, or unsupported reassurances.

<details>
<summary>Answers and models</summary>

1. The issue was reported at two. 2. No: unknown versus confirmed absence of impact. 3. Three of five; Kai. 4. I'll post the next update at 14:30 UTC+0, even if the investigation is still ongoing. 5. Could you review bug B-7 by 16:00 UTC+0 today?

Request: Could you review bug B-7 by 16:00 UTC+0 today? The report includes reproduction steps and test results. We need your feedback before testing the next version. Please let me know if that time is not possible.

Update: At 13:55 UTC+0, three of five test downloads failed. One retry succeeded at 14:05, but we have not confirmed recovery. Production impact is still unknown. Kai is investigating the download service logs. We have not confirmed the cause, and there is no approved workaround yet. Kai will post the next update at 14:30 UTC+0, even if there are no new findings. Please treat the issue as ongoing until further verification is complete.

</details>

## Check

Can the reader distinguish known facts from unknowns and identify who acts next? Review completion from Unit 11 and evidence from Unit 14. Tone should be calm, specific, and free of blame.