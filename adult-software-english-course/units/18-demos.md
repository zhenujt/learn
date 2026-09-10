# Unit 18: Explaining a Feature and Giving a Demo

[中文](18-demos.zh.md) · [Course](../README.md) · [Next](19-messages-and-incidents.md)

## Goal and vocabulary

Explain purpose, demonstrate behavior, and handle a question you cannot answer. Words: feature (useful product capability), demo (demonstration), select, upload, preview (view before final use), confirm, cancel, limitation (what it cannot do), supported (works under stated conditions).

## Dialogue and reading

A: What does this feature do?
B: It lets users upload one PDF and check the file name before sending it.
A: Could you show us?
B: First, I select a PDF. The file name appears here. Then I click Upload.
A: Can it accept several files?
B: Not in this version. It supports one file at a time.
A: Does it work offline?
B: I haven't tested that. I'll check with the team and post an answer tomorrow.

Read: **Demo notes: use a fictional test account and a harmless sample file. Show a valid upload, an over-limit file, and cancellation. Only PDF is supported. Upload requires a connection in the specification; offline behavior has not been tested.** A requirement and a verified result are different kinds of evidence.

## Pattern

`It lets users upload ...`: let + person + base verb, not `lets users to upload`. `It allows users to upload ...` requires to. `Use this button to cancel` uses to + verb to explain purpose.

Relative clause: `The button that opens the dialog is on the right.` The part starting with that identifies which button. If the sentence is hard to say, split it: `This button opens the dialog. It's on the right.` Short accurate sentences are suitable for demos.

Give the outcome before clicking. If the demo fails, describe the actual state and choose a truthful fallback: `The upload hasn't completed. I'll use the recorded example and investigate afterward.` Only mention a recorded example if one exists.

## Practice

1. Repair: It allows users upload files. It lets users to cancel.
2. Explain the purpose of Cancel using to.
3. Reading: is offline behavior verified? Is a connection required by the specification?
4. Answer a question about an untested browser without guessing.
5. Split: The button that starts the upload is below the file name.

## Listen, speak, and write

Listen for purpose, sequence, limitation, and follow-up. Have a partner ask the questions out of order during a second run; respond to the actual question.

Give a two-minute demo on paper or in a safe local mock-up: state purpose, show success, show an error, explain a limit. Your partner interrupts with "What if I cancel?" and one untested-case question. No coding is needed for this language task. Never perform real production changes as practice.

Write 80-120 words of speaker notes using prompts, not a script to read word for word. Then record a fresh spoken version and check whether the sequence makes sense without seeing your cursor.

<details>
<summary>Answers and model</summary>

1. It allows users to upload files. It lets users cancel. 2. Use Cancel to close the dialog without uploading. (Confirm this behavior for the actual product.) 3. No; yes. 4. I haven't tested that browser. I'll check and send an update tomorrow. 5. This button starts the upload. It is below the file name.

Listening: one-PDF upload; select, see name, click Upload; no multiple files; offline untested, answer tomorrow.

Model notes: Purpose: upload one PDF and confirm the selected name. First, select a safe sample file and point out its name. Next, upload it and show the confirmation. Then select a file above the size limit and show the error. Explain that this version supports only one PDF at a time. Show cancellation without claiming an upload occurred. Mention that the specification requires a connection. Offline behavior has not been tested, so record that question for follow-up. Finish by asking whether the audience needs another example.

</details>

## Check

Can someone explain the feature and its limit after your demo? Review sequence words from Unit 9 and uncertainty from Unit 12. Speaking clearly is more important than sounding like an advertisement.