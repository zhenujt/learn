# 第 16 课：评审与有理有据的不同意见

[English](16-reviews.md) · [目录](../README.zh.md) · [下一课](17-meetings.zh.md)

## 目标与词汇

给可执行反馈，并回应反馈。review 评审；change 修改；duplicate 重复的；readable 易读的；concern 担忧；suggest 建议；agree 同意；alternative 替代方案；required 必须的；optional 可选的。

## 对话与阅读

A: Could we move this check before the request? 能把检查移到请求之前吗？
B: What's the reason? 原因是什么？
A: If the input is empty, we can return early and avoid a request. 输入为空时提前返回，避免请求。
B: I agree about empty input. I'm concerned about changing the existing error message. 同意处理空输入，但担心改变现有错误提示。
A: Good point. Can we keep the same message? 有道理，能保留原提示吗？
B: Yes. I'll add a test for that behavior. 能，我会为此加测试。
A: Thanks. The variable rename is optional, but the empty-input test is required before approval. 谢谢，变量改名可选，但批准前必须加空输入测试。

阅读：**Required change: handle empty input without sending a request. Keep the current error message. Add a regression test. Optional suggestion: rename value to searchText for readability. Approval is pending the required changes.** 必须处理空输入、不发请求、保留错误提示、加回归测试；value 改成 searchText 可选；必须项完成前待批准。regression test 检查改动后行为仍正确。

## 句型说明

用观察、影响、请求组合：`This sends a request for empty input. That adds unnecessary work. Could we return early?` 空输入也发请求、增加工作、能提前返回吗？评价行为，不评价作者人品或能力。

`I suggest adding a test` 用 ing；`I suggest that we add a test` 用从句。不要写 I suggest you to add。`I agree with you about the test` 不加 be，不说 I am agree。

精确表达不同意见：`I agree with X, but I'm concerned about Y because ...`。礼貌问句也可能是必须项，所以明确标注 required/optional，不让对方猜。

## 练习

1. 改错：I am agree. I suggest to add a test.
2. 把 Your code is bad 改成针对阅读行为的反馈。
3. 问提议修改的原因。
4. 改名必须吗？必须项没完成可批准吗？
5. 同意目标，同时表达对改变错误提示的担忧。

## 听说读写任务

听提议、原因、担忧、约定动作、可选项，说明什么仍阻止批准。搭档交换改名和测试的 required/optional，再听新决定。

角色卡：评审者想减少重复检查；作者担心两种情况有不同提示。问实例、提议测试、达成一个修改或记录未决问题。互换角色，交流约两分钟，不是背一段独白。

写一条评审和一条回复，共 60–100 词，包含原因、必须/可选与下一步。用虚构行为，不上传机密代码。

<details>
<summary>答案与示例</summary>

1. I agree. I suggest adding a test. 我同意，建议加测试。2. This sends a request for empty input. Could we return early and keep the existing message? 空输入也发请求，能提前返回并保留提示吗？3. Could you explain why we need this change? 能解释为什么需要改吗？4. 不必须；按当前条件不能。5. I agree about avoiding the request, but I'm concerned about changing the error message. 同意避免请求，但担心改变提示。

听力：前移检查、避免空请求、保留提示、加测试；改名可选、测试必须。

Reviewer: This path sends a request even when the input is empty. Could we return early while keeping the current error message? This change and a regression test are required before approval. Renaming the variable is optional.

Author: I agree about the unnecessary request. I'll move the check and add a test for the existing message. I'll leave the rename for a separate change.

意思：评审要求处理空请求并保留提示，加回归测试；改名可选。作者同意，承诺检查和测试，改名另做。

</details>

## 检查

双方能否说清约定修改与未决担忧？完成[测评 4](../05-assessments.zh.md)，复用原因条件，但不把每条评论写很长。