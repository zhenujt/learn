# Unit 14: Reporting and Reproducing Bugs

[中文](14-bugs.zh.md) · [Course](../README.md) · [Next](15-requirements.md)

## Goal and words

Describe an observable problem so another person can reproduce it. Words: bug (software defect), reproduce (make the same behavior happen again), step, expected, actual, browser, version, blank (empty), save, evidence (information supporting a claim).

## Dialogue and reading

A: What happens when you save the form?
B: The page turns blank after I click Save.
A: What did you expect?
B: I expected a confirmation message.
A: Which browser and version are you using?
B: Browser Q, version 12, in the test environment.
A: Does it happen every time?
B: It happened in all three attempts. I haven't checked other browsers.

Read: **Bug B-7. Environment: test, Browser Q 12. Steps: sign in with a test account; open Profile; change the display name; click Save. Expected: a confirmation message. Actual: blank page. Occurrence: 3 of 3 attempts. Other browsers: not tested.** These product and version names are fictional. A blank page alone does not prove whether the name was saved.

## Pattern

Use `when/after + present` for a repeatable observation: `The page turns blank when I click Save.` Use past simple for attempts already made: `It happened three times.`

`I expected the page to show a message` explains expected behavior. `It may be a browser issue` is a hypothesis; `It is a browser issue` asserts a cause. Keep observation and hypothesis separate until evidence supports the cause.

Short reproduction steps start with a base verb: `Open ...`, `Click ...`. Name the control rather than saying `click here` in a written report.

## Practice

1. Fill: It happens when she ___ (click) Save.
2. Change to a cautious hypothesis: The database is broken. (No cause is confirmed.)
3. Write one expected-versus-actual pair from the reading.
4. Reading: has data loss been confirmed? Were other browsers tested?
5. Ask a question about how often the issue happens.

## Listen, speak, and write

Hide the script and listen for trigger, expected result, environment, and frequency. Ask the reader to change three attempts to one of three; explain why this is different.

Role-play: reporter sees a missing confirmation after saving; investigator does not know the environment or steps. Ask until the investigator can repeat the steps on paper. Then introduce a new fact: refreshing shows the updated name. Correct the report without claiming the root cause is known.

Write a bug report of 70-100 words with a factual title, environment, steps, expected/actual results, and unknowns. Bullet points are appropriate. Never paste credentials, personal data, or unsanitized logs into public practice tools.

<details>
<summary>Answers and model</summary>

1. clicks. 2. It might be a database issue, but the cause is not confirmed. 3. Expected: confirmation message. Actual: blank page. 4. No; no. 5. Does it happen every time? / How often does it happen?

Listening: Save; confirmation message; Browser Q 12, test; all three attempts. One of three means intermittent rather than observed every attempt.

Model: **Blank page after saving a profile.** In the test environment on Browser Q 12, sign in with a test account, open Profile, change the display name, and click Save. I expected a confirmation message, but the page became blank. This happened in all three attempts. After refreshing, I could see the updated name. I haven't tested other browsers, and the cause is not confirmed. Could someone check the page error logs?

</details>

## Check

Can someone reproduce the observation without guessing missing steps? Review past versus repeatable present; say what you have not tested as clearly as what you have.