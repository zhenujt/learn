# 第 19 课：消息、交接与事故更新

[English](19-messages-and-incidents.md) · [目录](../README.zh.md) · [下一课](20-integrated-project.zh.md)

## 目标与词汇

写明确请求，基于证据更新事故。incident 需响应的服务问题；affected 受影响的；investigate 调查；restore 恢复；monitor 持续观察；workaround 临时绕过方案；impact 影响；confirmed 已确认的；handover 交接。

## 对话与阅读

A: What's the current impact? 目前影响是什么？
B: Some test users can't download reports. We haven't confirmed production impact. 部分测试用户不能下载报告，生产影响未确认。
A: Do we know the cause? 知道原因吗？
B: Not yet. We're checking the download service logs. 还不知道，正在查下载服务日志。
A: Who is handling the next update? 谁负责下一次更新？
B: I am. I'll post it at 14:30 UTC+0, even if we have no new findings. 我负责，UTC+0 14:30 发，即使没有新发现。
A: Has the issue been resolved? 解决了吗？
B: No. One retry succeeded, but we need more checks. 没有，一次重试成功，还需更多验证。

阅读：**13:55 UTC+0: three of five test downloads failed. 14:05: one retry succeeded. Production impact unknown. Investigation owner: Kai. Next update 14:30 UTC+0. No confirmed cause or approved workaround.** 五次测试下载三次失败，一次重试成功；生产影响未知；Kai 调查；14:30 更新；原因未确认、无已批准临时方案。全部虚构，一次成功不证明全面恢复。

## 句型说明

消息：背景 + 具体请求 + 有用时间。`Could you review B-7 by 16:00 UTC+0? We need your approval before testing the next version.` 请四点前评审，测试下版前需要批准。只加合适且可访问的链接。

被动：`The issue was reported at 13:55` 强调问题何时上报；`Kai reported the issue` 强调谁上报。形式是 be + 过去分词：was reported、has been resolved。需要行动时别用被动隐藏负责人。

We are investigating 是正在调查；We have restored service 声称已恢复，需证据。`No production impact has been confirmed` 本例是尚未知，不证明生产无影响。

## 练习

1. 改错：The issue was report at two.
2. 未确认生产影响等于生产没受影响吗？
3. 失败次数是多少？谁调查？
4. 写一句下次更新时间，不承诺届时修好。
5. 把 Please check this ASAP 改成有任务和虚构期限的请求。

## 听说读写任务

听已知影响、未知范围、动作、负责人和时间、恢复状态。把生产影响未知改成确认受影响，再修正概括，其他事实不要跟着改。

两分钟交接：前任知道时间线，接手者问证据、负责人、更新。增加一次重试成功，不急着宣布恢复。这是语言练习，不是事故处理规程，真实工作遵循团队流程。

写 30–50 词评审请求和 70–100 词事故更新，不带个人信息、密码、私人原始日志或无依据安抚。

<details>
<summary>答案与示例</summary>

1. The issue was reported at two. 两点上报了问题。2. 不等于，未知不等于确认无影响。3. 五次中三次；Kai。4. I'll post the next update at 14:30 UTC+0, even if the investigation is still ongoing. 即使仍在调查也在该时更新。5. Could you review bug B-7 by 16:00 UTC+0 today? 请今天四点前评审 B-7。

请求：Could you review bug B-7 by 16:00 UTC+0 today? The report includes reproduction steps and test results. We need your feedback before testing the next version. Please let me know if that time is not possible.

更新：At 13:55 UTC+0, three of five test downloads failed. One retry succeeded at 14:05, but we have not confirmed recovery. Production impact is still unknown. Kai is investigating the download service logs. We have not confirmed the cause, and there is no approved workaround yet. Kai will post the next update at 14:30 UTC+0, even if there are no new findings. Please treat the issue as ongoing until further verification is complete.

意思：请求具体评审与期限；更新写失败与重试证据、未知生产影响和根因、Kai 调查及更新时间，仍视为未解决。

</details>

## 检查

读者能否分清已知未知、知道谁接着做？复习第 11、14 课完成状态与证据。语气平实具体，不指责。