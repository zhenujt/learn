# 第 20 课：综合软件沟通项目

[English](20-integrated-project.md) · [目录](../README.zh.md) · [最终测评](../05-assessments.zh.md)

## 目标与词汇

前置：1–19 课，把听说读写用于同一个小项目，不需要实际编程。deliverable 交付物；priority 优先级；evidence 证据；scope 范围；revised 修订的；handover 交接。本课以复用为主。

## 项目背景：虚构团队笔记应用

团队需要把一条笔记导出 PDF。笔记有标题与正文。第一版每次一条，不做批量导出。空标题必须报错。Eva 评审，Pat 管测试账号。周五是期望发布目标，不是承诺。没有约定大小上限或性能目标。

阅读工单：**Ticket NE-20: export a single note; preserve the visible title; require a non-empty title; show a confirmation after download starts. Browser scope, empty-body behavior, and performance target are open.** 单条导出，保留显示标题，标题必填，下载开始后显示确认。浏览器范围、空正文、性能目标待确认，不要把猜测当事实。

## 对话示例

A: Can we release on Friday? 周五能发布吗？
B: I can't confirm yet. I need the browser scope and test-account access. 还不能确认，需要浏览器范围和测试账号。
A: Pat can provide access tomorrow. Pat 明天给权限。
B: Thanks. Could Eva confirm the browser scope today? 谢谢，Eva 今天能确认范围吗？
A: I'll ask her. What can you do meanwhile? 我问她，期间你能做什么？
B: I can prepare the test cases. I'll update the estimate after we confirm the scope. 可准备测试用例，范围确认后更新估时。

这里提供可做的事，没有编造发布保证。after we confirm 用现在时表达未来先后。

## 有提示练习

1. 找两个已约定需求和两个未知项。
2. 改错并纠正事实：We will released on Friday because the target says Friday.
3. 直接或间接询问空正文行为。
4. 给 Pat 一个明确请求。
5. “测试通过”和“批准发布”有什么区别？

## 项目步骤

用四至六次学习完成，保留初稿与修订稿进行比较。

1. **需求访谈：**需求方与开发者讨论三分钟，至少问三个有用问题。确认项与开放项分开记，带负责人。搭档可以设定新答案，但要明确它是刚作出的决定。
2. **计划：**写 80–120 词，包含范围、顺序、依赖、下次更新。口头说 45 秒，回答“能更早完成吗”，不捏造确定性。
3. **听变更：**隐藏下面朗读卡，由搭档朗读或准备语音。记变化、仍不做的项、谁要行动，听后再看原文。对照旧计划修改。
4. **缺陷与评审：**已知证据：测试环境中，空标题导出两次都没报错，PDF 下载开始。写报告、口头解释、请求加测试。搭档问其他浏览器是否检查，已知事实是没有。
5. **演示与交接：**在纸上演示预期成功流程，如实说明已知缺陷与未完成发布决定。讲两分钟，答三个未知追问，再写 100–150 词交接。

<details>
<summary>朗读者卡片：学习者听之前不要打开</summary>

Eva has confirmed Browser Q version 12 for the first release. Empty note text is allowed, but the title is still required. Pat cannot provide the test account tomorrow; access will be ready on Thursday instead. Batch export remains out of scope. Please prepare the test cases today. Eva will review the release evidence on Thursday at 15:00 UTC+0. Friday is still a target, not an approved date.

听后再看含义：Eva 确认 Q 12；正文可空、标题必填；Pat 明天不能给账号，改周四；批量仍不做；今天准备用例；Eva 周四 UTC+0 15:00 查发布证据；周五仍未批准。

</details>

## 成果与自查

交六份材料：需求记录、计划、听力变更记录、缺陷报告、演示及问答录音、交接。搭档按背景与变更卡核事实。用[测评页](../05-assessments.zh.md)量规检查信息、互动、语言、听读准确、写作用途。不能用其他高分抵消错误发布承诺或漏需求。

<details>
<summary>答案与交接示例</summary>

1. 已定：单条、标题非空；未知：浏览器、空正文等。2. Friday is a target, but the release date is not confirmed. 周五是目标，日期未确认。3. Should we allow a note with no body text? 正文为空允许吗？4. Could you provide a test account and confirm when it will be ready? 请提供测试账号并确认时间。5. 测试是证据，批准是另一个决定。

变更答案：Q 12、正文可空标题必填、账号延到周四、无批量、今天准备用例、Eva 周四 UTC+0 15:00 评审、周五未批准。

交接示例：The first release exports one note as a PDF and supports Browser Q version 12. Empty body text is allowed, but a title is required. Batch export remains out of scope. Pat will provide test-account access on Thursday, so the original access plan has changed. We can prepare the test cases today. In two test attempts, exporting a note with an empty title started a download without showing an error. This does not meet the agreed requirement. Other browsers have not been checked. Eva will review the evidence on Thursday at 15:00 UTC+0. Friday remains a release target, not an approved date. Please verify the empty-title behavior before requesting approval.

意思：交代范围和新账号时间、空标题两次违规行为、未测范围、Eva 评审时间和未批准日期，请验证后再申请批准。

</details>

## 课程之后

用新场景完成测评 5，不用背熟的本项目。随后换功能、换说话者重复流程，日常交流也继续练。本课程提供基础和可观察任务，不保证流利、独立主持事故或取得正式 CEFR 等级。