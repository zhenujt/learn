# M01 站会：昨天、今天、阻塞

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 场景：每日站会（daily stand-up / daily sync-up） ｜ 会议数据：`working on` 每万词约 20 次，`currently` 约 17 次，`that's all` 约 11 次，`completed` 和 `done` 各约 8 次
>
> [English version](01-stand-up-updates.md) · [上一课：G24 高级语法速览](../grammar/24-advanced-grammar-overview.zh.md) · [下一课：M02 周会与 Sprint 同步](02-weekly-sprint-sync.zh.md) · [会议目录](README.zh.md)

## 这一课解决什么问题

站会上，主持人点到你：

```text
Alex, do you want to go next?
Alex，下一个你来说？
```

你只有 30–60 秒。很多人这时脑子里有一大段中文，嘴里却只挤出一句 `I'm doing the task.`。

其实站会更新的顺序非常固定，用到的语法也主要是三种时态。把顺序和句子练熟，你每天都能说出这样一段清楚的更新：

```text
Yesterday I finished the login API. Today I'm working on the unit tests. No blockers. That's all from my side.
昨天我完成了登录接口。今天在写单元测试。没有阻塞。我这边就这些。
```

**学完这一课，你应该能：**

1. 听懂主持人在站会上的开场、点名和追问。
2. 按「完成 → 正在做 → 下一步 → 阻塞 → 收尾」说一段 30 秒的更新。
3. 用对三种时态：过去时说完成，进行时说正在做，`will` 说下一步。
4. 在没有更新、休假回来、只做了一半的时候，也有现成的句子可以用。

## 1. 会议现场：站会上在发生什么

站会（stand-up，也叫 daily sync-up、daily scrum）通常只有 15 分钟。名字里有 stand（站），但线上会议没有人真的站着。

在你们团队的真实会议里，站会一般是这样进行的：

| 环节 | 谁说话 | 典型句子 |
| --- | --- | --- |
| 开场 | 主持人（通常是 Scrum Master） | `I think most people are here. Let's get started.` |
| 负责人先说 | Tech Lead、设计负责人 | `Any high-level updates?` → `Nothing from my side.` |
| 逐个更新 | 每个人，或 Scrum Master 代读 | `Yesterday I… Today I'm…` |
| 追问 | 主持人、Tech Lead | `Any blockers?` `Is it ready for QA?` |
| 收尾 | 主持人 | `Okay, that's all for today. Thank you.` |

有两点要知道：

- **很多更新是 Scrum Master 替大家读的。** 所以字幕里会出现很多第三人称：`Ken is working on…`、`Priya has completed two subtasks.` 读懂这些句子，你就知道组里每个人在做什么。
- **站会不是讨论会。** 话题一展开，主持人就会说 `Let's take it offline.`（会后单独聊）。所以你的更新要短，细节留到会后。

## 2. 固定公式

**站会五步：完成 → 正在做 → 下一步 → 阻塞 → 收尾**

| 步骤 | 公式 | 用到的语法 |
| --- | --- | --- |
| ① 完成了什么 | `Yesterday I finished / fixed / merged + 事情.` 或 `I've completed + 事情.` | 一般过去时 / 现在完成时 |
| ② 正在做什么 | `Today I'm working on + 事情.` / `I'm still + -ing…` | 现在进行时 |
| ③ 下一步 | `Next, I will + 动词…` / `After that, I'm going to…` | `will` / `be going to` |
| ④ 阻塞 | `No blockers.` 或 `I'm blocked by + 原因.` | `be blocked by`（被动） |
| ⑤ 收尾 | `That's all from my side.` / `That's it for me.` | 固定说法 |

没有内容的步骤直接跳过。真实会议里，没有人会机械地把五步全部说一遍。

## 3. 按功能分组的句子

### 3.1 被点名、开始说

主持人会这样点你：

```text
Alex, do you want to go first?
Alex，你先来？

Ken, any updates from your side?
Ken，你这边有什么更新吗？

Okay, Priya, you can go ahead.
好，Priya，你开始吧。
```

你可以这样开头：

```text
Sure. So, yesterday I finished the first part.
好的。嗯，昨天我完成了第一部分。

Okay, a quick update from my side.
好，我这边简单更新一下。

Yeah, for my part, the API is almost done.
嗯，我这部分，接口差不多做完了。
```

### 3.2 说完成了什么（一般过去时 / 现在完成时）

```text
Yesterday I finished the login page.
我昨天完成了登录页面。

I fixed the layout bug on the settings page.
我修好了设置页面的布局 Bug。

I've completed two of the three subtasks.
三个子任务我已经完成了两个。

The PR has been merged, and the story is ready for QA.
PR 已经合并了，这个 Story 可以提测了。

I've shared the document in the engineering channel.
我已经把文档发到工程频道了。
```

**怎么选时态：** 句子里有 `yesterday`、`last week` 这样的过去时间，就用一般过去时（`finished`）。没有具体时间、只想说"现在已经好了"，就用现在完成时（`I've completed`）。详见 [G08](../grammar/08-past-simple-and-present-perfect.zh.md)。

### 3.3 说正在做什么（现在进行时）⭐ 最高频

```text
Today I'm working on the unit tests.
今天我在写单元测试。

I'm still working on the API integration.
我还在做接口集成。

Currently I'm checking the build error on Android.
目前我在排查 Android 的构建错误。

I'm fixing the review comments on my PR.
我在改 PR 上的评审意见。

Ken and I are working together on the pipeline setup.
我和 Ken 在一起配置流水线。
```

`working on` 是会议里出现最多的短语之一（每万词约 20 次）。后面直接接名词或 `-ing`：`working on the tests`、`working on fixing the tests`。不要说 `working on to fix`。

### 3.4 说下一步（will / going to / plan to）

```text
Next, I will add the error handling.
接下来我会加上错误处理。

After that, I'm going to update the document.
之后我打算更新文档。

I plan to finish it by tomorrow.
我计划明天之前完成。

Once the PR is approved, I'll move the ticket to QA.
PR 一通过，我就把工单移到 QA。

I will continue working on the same story today.
今天我会继续做同一个 Story。
```

注意第四句：`once` 后面用一般现在时（`is approved`），不用 `will be approved`。详见 [G20](../grammar/20-adverbial-clauses.zh.md)。

### 3.5 说阻塞（详细说法见 M06）

```text
No blockers for now.
目前没有阻塞。

I'm blocked by the access request. It's still pending.
我卡在权限申请上，还在等审批。

I'm waiting for the design team's feedback.
我在等设计团队的反馈。

I need some help from the platform team on the runner setup.
Runner 配置这块，我需要平台团队帮忙。
```

### 3.6 没有更新、更新很少

```text
Nothing from my side.
我这边没有更新。

Nothing new. I'm still working on the same ticket as yesterday.
没什么新的，我还在做昨天那个工单。

I was out of office yesterday, so no update from me.
我昨天休假了，所以没有更新。

Not much progress yesterday. I spent most of the day in meetings.
昨天进展不大，大部分时间都在开会。
```

### 3.7 收尾、交给下一个人

```text
That's all from my side.
我这边就这些。

That's it for me. Thanks.
我就说这么多，谢谢。

That's all for my part. Ken, you can go ahead.
我这部分就这些。Ken，你来吧。
```

## 4. 完整对话：Web 小组的站会（改编自真实会议）

场景：Web 小组每天 15 分钟的同步会。Mia 是 Scrum Master，Ken 是 Tech Lead，Alex 是你。

```text
Mia: Hi, good morning, good evening, everyone. I think most people are here, so let's get started.
Mia：大家早上好、晚上好。人差不多到齐了，我们开始吧。

Mia: Ken, any high-level updates?
Mia：Ken，有什么整体方面的消息吗？

Ken: No, nothing from my side.
Ken：没有，我这边没有。

Mia: Okay. Alex, do you want to go first?
Mia：好。Alex，你先来？

Alex: Sure. Yesterday I finished the SSR example for the button component, and the PR is in review now.
Alex：好的。昨天我完成了按钮组件的 SSR 示例，PR 现在在评审中。

Alex: Today I'm working on the smoke test. After that, I will add it to the CI pipeline.
Alex：今天在做冒烟测试。做完以后，我会把它加到 CI 流水线里。

Alex: No blockers. That's all from my side.
Alex：没有阻塞。我这边就这些。

Mia: Thanks, Alex. Who is reviewing your PR?
Mia：谢谢 Alex。谁在评审你的 PR？

Alex: Priya is reviewing it. I think it can be merged today.
Alex：Priya 在看。我觉得今天能合并。

Mia: Great. Priya, you can go next.
Mia：好的。Priya，下一个你。

Priya: Okay. I'm still working on the unit test setup. Two subtasks are done, and I'm working on the coverage report now.
Priya：好。我还在做单元测试的配置。两个子任务完成了，现在在做覆盖率报告。

Priya: But I'm blocked on the macOS runner. I need someone from the platform team to check it.
Priya：不过我卡在 macOS Runner 上，需要平台团队的人看一下。

Ken: I can take a look after the meeting. Let's take it offline.
Ken：会后我来看看。这个我们会后单独聊。

Priya: Sure, thanks. That's it for me.
Priya：好的，谢谢。我就这些。

Mia: Okay, thank you, everyone. That's all for today.
Mia：好，谢谢大家，今天就到这里。
```

**对话里的三种时态：** `finished`（昨天做完）→ `I'm working on`（今天在做）→ `I will add`（之后要做）。这就是站会的骨架。

## 5. 听到这些说明……

| 听到 | 说明 | 你该怎么做 |
| --- | --- | --- |
| `Do you want to go first / next?` | 轮到你了 | 说 `Sure.`，然后开始更新 |
| `Any updates from your side?` | 请你更新 | 同上；没有就说 `Nothing from my side.` |
| `Any blockers?` / `Is anything blocking you?` | 问你有没有卡住 | `No blockers.` 或说出具体阻塞 |
| `Is it ready for QA?` / `Is the PR merged?` | 追问状态 | 用 `Yes, it's…` / `Not yet, …` 简短回答 |
| `Let's take it offline.` | 这个话题会后单独聊 | 不要继续展开 |
| `Same as yesterday?` | 问你是不是没有变化 | `Yes, I'm still working on…` |
| `X is working on…` / `X has completed…` | Scrum Master 在替别人读进度 | 抓住"谁 + 做什么 + 状态" |
| `That's all for today.` | 会议结束 | `Thank you. Bye.` |

## 6. 字幕里怎么认

站会字幕里常见的识别错误和非母语说法：

| 字幕里可能看到 | 实际意思 / 标准说法 |
| --- | --- |
| `nothing from my Ann` | `nothing from my end`（我这边没有） |
| `daily gram` / `daily scram` | `daily scrum`（每日站会） |
| `spring one` / `spam two` | `Sprint 1` / `Sprint 2` |
| `conference page` | `Confluence page`（Confluence 文档页） |
| `I will continue work on…` | `I will continue working on…` |
| `the dev store ready for dev` | `the story is ready for dev` |

**读法：** 先找人名（谁），再找动词的时态（做完了 / 在做 / 要做），最后看任务名。任务名很长时，先把它当成一个整体。比如 `the unit test and E2E test configuration` 就是"那个测试配置任务"，不用逐词翻译。

## 7. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `Yesterday I finish the page.` | `Yesterday I finished the page.` | 有 `yesterday`，动词用过去式 |
| `I have finished it yesterday.` | `I finished it yesterday.` | 现在完成时不能和具体的过去时间连用 |
| `Today I am do the test.` | `Today I'm doing the test.` | 进行时是 `be + -ing` |
| `I'm working the bug.` | `I'm working on the bug.` | `work on` 是固定搭配 |
| `No block.` | `No blockers.` | 名词是 `blocker` |
| `I will continue do it.` | `I will continue working on it.` | `continue` 后接 `-ing` 或 `to do` |
| `Nothing for my side.` | `Nothing from my side.` | 固定说法是 `from my side` |

## 8. 你的站会模板

先用中文想好内容，再填进下面的英文框架。每天换内容，不换结构。

| 步骤 | 英文模板 | 中文提示 |
| --- | --- | --- |
| 开头 | `Sure. A quick update from my side.` | 好的，我简单更新一下 |
| 完成 | `Yesterday I finished ________.` | 昨天完成了…… |
| 正在做 | `Today I'm working on ________.` | 今天在做…… |
| 下一步 | `After that, I will ________.` | 之后会…… |
| 阻塞 | `No blockers.` / `I'm waiting for ________.` | 没有阻塞 / 在等…… |
| 收尾 | `That's all from my side.` | 我这边就这些 |

填好以后是这样的：

```text
Sure. A quick update from my side. Yesterday I finished the date picker fix. Today I'm working on the unit tests for it. After that, I will update the ticket and move it to QA. No blockers. That's all from my side.
好的，我简单更新一下。昨天我修好了日期选择器的问题。今天在给它写单元测试。之后我会更新工单，把它移到 QA。没有阻塞。我这边就这些。
```

**练法：** 每天站会前花 2 分钟，把模板填一遍，小声读两遍。坚持两周，这段话就会变成你的"肌肉记忆"。

## 9. 用到的语法

| 语法 | 在站会里的作用 | 课程 |
| --- | --- | --- |
| 现在进行时 | 说正在做什么 | [G07](../grammar/07-present-simple-and-continuous.zh.md) |
| 一般过去时、现在完成时 | 说做完了什么 | [G08](../grammar/08-past-simple-and-present-perfect.zh.md) |
| `will` / `be going to` | 说下一步 | [G09](../grammar/09-future-will-going-to.zh.md) |
| 被动语态 | `The PR has been merged.` `I'm blocked by…` | [G12](../grammar/12-passive-voice.zh.md) |
| 介词短语 | `from my side`、`in review`、`ready for QA` | [G16](../grammar/16-prepositions.zh.md) |
| `once` 引导的时间状语从句 | `Once the PR is approved, …` | [G20](../grammar/20-adverbial-clauses.zh.md) |
| 口语省略 | `No blockers.` `Nothing new.` | [G23](../grammar/23-spoken-grammar.zh.md) |

更多真实会议短语，见 [会议高频英文表达](../../meeting-english-phrases.zh.md) 和 [会议高频英文单词](../../meeting-frequent-words.zh.md)。

## 10. 练习

**A. 用括号里动词的正确形式填空**

1. Yesterday I ___ (fix) the login bug.
2. Today I ___ (work) on the payment page.
3. I ___ already ___ (complete) two subtasks.
4. After the meeting, I ___ (update) the ticket.
5. Ken ___ (review) my PR right now.

**B. 读字幕，回答问题**

> Priya is still working on the unit test setup, two subtasks are done, and next she will continue with the coverage report, but she is blocked on the macOS runner.

1. Priya 完成了什么？
2. 她正在做什么？下一步做什么？
3. 有什么阻塞？

**C. 把中文更新说成英文**

1. 我这边没有更新。
2. 昨天我把文档发到了频道里。今天在改评审意见。
3. 我在等设计团队的反馈。我这部分就这些。

<details>
<summary>答案</summary>

**A.** 1 fixed　2 am working（I'm working）　3 have, completed　4 will update　5 is reviewing

**B.**
1. 完成了两个子任务（two subtasks are done）。
2. 正在做单元测试的配置；下一步做覆盖率报告（coverage report）。
3. 卡在 macOS Runner 上（she is blocked on the macOS runner）。

**C.**
1. Nothing from my side.
2. Yesterday I shared the document in the channel. Today I'm fixing the review comments.
3. I'm waiting for the design team's feedback. That's all for my part.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [工作日常英语口语全指南](../../workplace-spoken-english.zh.md) 第 10 节「汇报进展与下一步」
- [软件行业常用英语](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.zh.md) 第 9 节「每日站会与进度汇报」
- [成人软件英语第 13 课：任务与站会更新](../../adult-software-english-course/units/13-tasks-and-standups.zh.md)
- [会议高频英文表达](../../meeting-english-phrases.zh.md) 的「汇报练习」部分（参考资料，仍在更新）
