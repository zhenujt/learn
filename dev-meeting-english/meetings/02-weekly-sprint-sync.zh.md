# M02 周会与 Sprint 同步：逐项汇报进度

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 场景：每周 Sprint 同步会、Scrum 同步会 ｜ 会议数据：`story / stories` 每万词约 32 次，`sprint` 和 `ticket` 各约 15 次，`backlog` 约 10 次，`for the … part / side` 约 9 次，`subtask` 约 8 次
>
> [English version](02-weekly-sprint-sync.md) · [上一课：M01 站会](01-stand-up-updates.zh.md) · [下一课：M03 主持会议与共享屏幕](03-hosting-and-screen-sharing.zh.md) · [会议目录](README.zh.md)

## 这一课解决什么问题

周会上，主持人共享 Jira 看板，一个模块一个模块地往下讲。你最常看到的是这样的句子：

```text
For the web part, most of the stories are completed, and the remaining items are on track.
Web 部分，大部分 Story 已经完成，剩下的事项也在按计划推进。
```

这句话里每个词你都认识，但如果不知道 `story`、`remaining items`、`on track` 在 Sprint 里指什么，就只能看个大概。再加上 `in dev`、`ready for QA`、`carried over` 这些状态词，字幕很快就跟不上了。

**学完这一课，你应该能：**

1. 说清 Sprint 同步会的三个环节，知道现在讲到哪了。
2. 认识看板上的工作项和状态词：epic、story、subtask、backlog、in dev、ready for QA、done……
3. 读懂主持人逐个 Story 的汇报句子：谁、在做什么、到了哪个状态。
4. 被点到时，用一个固定公式汇报自己模块的进度。

## 1. 会议现场：周会在发生什么

你们团队的 Sprint 同步会，基本都是三段式：

| 环节 | 主持人怎么说 | 在做什么 |
| --- | --- | --- |
| ① 整体消息 | `Do you have any heads-up for the whole team?` / `Any high-level updates?` | 负责人说大方向；没有就说 `Nothing from my side.` |
| ② Story 更新 | `I will go through the stories one by one.` / `For the web part, …` | Scrum Master 共享看板，按模块逐个讲 Story |
| ③ 会后讨论（post-scrum） | `Let's move to the post-scrum discussion. Any topics?` | 有人提话题、做 Demo、讨论方案 |

第 ② 段是本课重点。它的节奏非常固定：

1. 先说模块：`For the web part, …`
2. 再说整体：`most of the stories are in dev.`
3. 然后一个一个 Story：`For the SSR story, Ken is working on it…`
4. 再说上次会议的跟进事项：`For the follow-up items we discussed yesterday, …`
5. 最后收尾、问问题，切到下一个模块：`That's all for the web part. Any questions?` → `Let's move to the native part.`

Sprint 里还有几个固定会议，你在字幕里会经常听到它们的名字：

| 会议 | 意思 | 会里常见的词 |
| --- | --- | --- |
| sprint planning | Sprint 计划会：决定这个 Sprint 做哪些 Story | `scope`、`capacity`、`commit` |
| grooming / refinement | 需求梳理会：把 Story 讲清楚、估点数 | `story point`、`estimation`、`planning poker` |
| sprint review / demo | 评审会：给干系人演示做完的功能 | `demo`、`accepted`、`feedback` |
| retro（retrospective） | 回顾会：总结做得好和要改进的地方 | `what went well`、`action items` |

## 2. 先认识看板：Sprint 词汇

### 2.1 工作项的层级

| 词 | 中文理解 | 说明 |
| --- | --- | --- |
| `epic` | 史诗、大需求 | 很大的一块工作，跨好几个 Sprint |
| `feature` | 功能 | 一个可以发布的功能，下面挂多个 Story |
| `story` / `user story` | 用户故事 | 一个 Sprint 内能完成的工作单位，汇报主要按它讲 |
| `task` / `subtask` | 任务 / 子任务 | Story 拆出来的具体活儿，比如开发子任务、QA 子任务 |
| `ticket` / `item` / `work item` | 工单 | 泛指看板上的任何一张卡片 |
| `backlog` | 待办池 | 还没排进 Sprint 的工作 |
| `sprint` | 迭代 | 通常两周一个，`Sprint 1`、`Sprint 2`…… |

```text
This story belongs to the component library epic.
这个 Story 属于组件库那个 Epic。

There are three subtasks under this story.
这个 Story 下面有三个子任务。

We added two new items to the backlog today.
我们今天往待办池里加了两个新事项。
```

### 2.2 状态词：一个 Story 走过的路

真实会议里，主持人专门讲过一遍看板的状态。按顺序排列：

| 看板状态 | 怎么说 | 中文意思 |
| --- | --- | --- |
| `New` / `Backlog` | `It's still in the backlog.` | 刚建，还在待办池 |
| `Ready for refinement` | `It's ready for refinement.` | 等待梳理 |
| `Refined` / `Ready for dev` | `It's ready for dev.` | 已梳理，开发可以接了 |
| `Dev in progress` | `It's in dev.` / `Ken is working on it.` | 开发中 |
| `Peer review` | `The PR is in review.` | 代码评审中 |
| `Ready for QA` / `Ready for test` | `It's ready for QA.` | 可以提测 |
| `QA in progress` / `Testing` | `QA is testing it.` | 测试中 |
| `Test passed` / `Ready for acceptance` | `The test has passed.` | 测试通过，等验收 |
| `Ready for release` | `It's ready for release.` | 可以发布 |
| `Done` | `It's done.` / `It's completed.` | 完成 |

还有几个"例外状态"：

| 状态 | 怎么说 | 中文意思 |
| --- | --- | --- |
| `On hold` | `We put it on hold.` | 暂停（决定先不做） |
| `Blocked` | `It's blocked by the approval.` | 被卡住了（想做但做不了） |
| `Removed` | `We removed it from the sprint.` | 从 Sprint 移除 |
| `Rejected` | `This story was rejected.` | 不做了 |

**语法提醒：** 状态几乎都用 `be + 介词短语 / 形容词` 来说：`is in dev`、`is in review`、`is ready for QA`、`is on hold`、`is done`。不需要复杂的动词。详见 [G04](../grammar/04-be-and-there-be.zh.md) 和 [G16](../grammar/16-prepositions.zh.md)。

### 2.3 计划和估算的词 🟡

| 词 | 意思 | 例句 |
| --- | --- | --- |
| `story point` | 故事点（估算工作量的单位） | `I'd give it three story points.` |
| `estimation` / `estimate` | 估算 | `Let's do the estimation for the remaining backlog.` |
| `scope` | 范围 | `The scope of this sprint is finalized.` |
| `capacity` | 团队可用工作量 | `We don't have enough capacity this sprint.` |
| `carry over` | 顺延到下个 Sprint | `Two stories were carried over from Sprint 1.` |
| `pick up` | 接手（开始做） | `Who can pick up this story?` |
| `plan into` | 排进（某个 Sprint） | `We will plan it into the next sprint.` |

## 3. 固定公式

**主持人逐项汇报（你要读懂的）：**

> `For + 模块, + 整体状态.` → `For + Story, + 谁 + is working on it / it is + 状态.` → `That's all for + 模块. Any questions?`

**你被点到时（你要会说的）：**

> `Sure. For + 我的模块, + 整体状态.` → `For + Story A, + 状态 + 下一步.` → `For + Story B, + 状态.` → `That's all for + 模块.`

和站会的区别：站会按"人"说（我昨天、我今天），周会按"Story"说（这个 Story 到哪了）。所以周会里第三人称和被动语态更多：`It has been merged.`、`It was moved to QA.`

## 4. 按功能分组的句子

### 4.1 主持人开场、进入 Story 更新

```text
Okay, so I will go through the sprint story updates.
好，那我来过一下这个 Sprint 的 Story 进度。

Let me share my screen. This is our sprint board.
我共享一下屏幕。这是我们的 Sprint 看板。

I will update the web part first.
我先更新 Web 部分。

I will go through the status of each story one by one.
我逐个过一下每个 Story 的状态。
```

### 4.2 说一个模块的整体状态

```text
For the web part, most of the stories are completed, and the remaining items are on track.
Web 部分，大部分 Story 已经完成，剩下的也在按计划推进。

For the other stories in the current sprint, almost every story is in dev.
本 Sprint 其他的 Story，几乎都在开发中。

For the platform part, we have finished sprint planning, and most of the scope is finalized.
平台部分，我们已经开完了 Sprint 计划会，大部分范围已经定了。

We are a bit behind on the native part, mainly because of the runner issue.
Native 部分进度有点落后，主要是因为 Runner 的问题。
```

### 4.3 逐个 Story 说状态 ⭐ 最高频

```text
For the SSR story, Ken is already working on it.
SSR 那个 Story，Ken 已经在做了。

This story is in dev, and the PR will be ready for review tomorrow.
这个 Story 在开发中，PR 明天可以评审。

Almost all the subtasks are completed, and the PR is now in peer review.
子任务几乎都完成了，PR 现在在评审中。

Priya has completed two subtasks, and she will continue with the coverage report.
Priya 完成了两个子任务，接下来继续做覆盖率报告。

The whole story is done, and the document has been shared in the engineering channel.
整个 Story 都完成了，文档也已经发到工程频道了。

This one is ready for QA. Anna will start testing it today.
这个可以提测了，Anna 今天开始测。

We have only two checkpoints remaining to validate.
只剩两个检查点要验证了。

This story is blocked by the access request, so we put it on hold for now.
这个 Story 卡在权限申请上，所以我们先暂停了。
```

### 4.4 计划、顺延与待办池

```text
These two stories were carried over from the last sprint.
这两个 Story 是从上个 Sprint 顺延过来的。

This one is not planned for the current sprint. It's still in the backlog.
这个没有排进本 Sprint，还在待办池里。

We will plan it into the next sprint.
我们会把它排进下个 Sprint。

We created a follow-up story for the code changes.
我们为这些代码改动建了一个后续 Story。

We will continue the estimation for the remaining backlog tomorrow.
剩下的待办我们明天继续估点。
```

### 4.5 被点名时，汇报你自己的模块

```text
Sure. For the native part, we are still working on the CI setup.
好的。Native 部分，我们还在做 CI 配置。

The Android pipeline is running now, and the iOS pipeline is in progress.
Android 流水线已经跑起来了，iOS 流水线还在做。

For the token story, I've finished the first version, and it's in review.
Token 那个 Story，我完成了第一版，正在评审。

Next, we will start the publishing workflow.
下一步我们开始做发布流程。

So that's the update for the native part. Any questions or comments?
以上就是 Native 部分的进度。大家有什么问题或意见吗？
```

### 4.6 切换模块、请别人补充

```text
That's all for the web part. Let's move to the native part.
Web 部分就这些，我们接着看 Native 部分。

Ken, do you want to add anything here?
Ken，这里你要补充什么吗？

If no further comments, Mia, you can go ahead.
如果没有其他意见，Mia，你来吧。

Okay, that's all for the scrum updates. Let's move to the post-scrum discussion.
好，Scrum 更新就到这里，我们进入会后讨论环节。
```

## 5. 完整对话：Sprint 同步会（改编自真实会议）

场景：每周一次的 Sprint 同步会。Grace 是 Scrum Master，Ken 是 Tech Lead，Alex（你）负责 Native 部分。

```text
Grace: Okay, Ken, do you have any heads-up for the whole team?
Grace：好，Ken，有什么要提醒全组的吗？

Ken: No, nothing from my end.
Ken：没有，我这边没有。

Grace: Okay. So I will go through the sprint story updates. Can you see my screen?
Grace：好，那我来过一下 Story 进度。能看到我的屏幕吗？

Ken: Yes, we can see it.
Ken：能看到。

Grace: For the web part, most of the stories are completed, and the remaining items are on track.
Grace：Web 部分，大部分 Story 已经完成，剩下的也在按计划推进。

Grace: For the SSR story, Leo has finished the examples for different frameworks. Now he is working on the smoke test.
Grace：SSR 那个 Story，Leo 已经完成了各个框架的示例，现在在做冒烟测试。

Grace: For the visual test story, almost all the subtasks are done, and the PR is in peer review.
Grace：视觉测试那个 Story，子任务基本都做完了，PR 在评审中。

Grace: And the browser support story is not planned for this sprint. It's still in the backlog.
Grace：浏览器兼容那个 Story 没排进这个 Sprint，还在待办池里。

Grace: That's all for the web part. Any questions?
Grace：Web 部分就这些。有问题吗？

Ken: Looks good to me.
Ken：我看没问题。

Grace: Okay, let's move to the native part. Alex, can you give an update?
Grace：好，我们看 Native 部分。Alex，你来更新一下？

Alex: Sure. For the native part, we are still working on the CI setup.
Alex：好的。Native 部分，我们还在做 CI 配置。

Alex: The Android pipeline is running now. The iOS pipeline is in progress, because we need a macOS runner.
Alex：Android 流水线已经跑起来了。iOS 流水线还在做，因为需要一台 macOS Runner。

Alex: As a temporary solution, I set up a local runner, so this story is not blocked.
Alex：作为临时方案，我搭了一个本地 Runner，所以这个 Story 没有被卡住。

Alex: For the token story, the first version is done and ready for QA.
Alex：Token 那个 Story，第一版做完了，可以提测。

Alex: That's all for the native part. Any questions or comments?
Alex：Native 部分就这些。大家有什么问题或意见吗？

Ken: Thanks, Alex. For the local runner, I think it's fine for now, but let's find a better long-term solution.
Ken：谢谢 Alex。本地 Runner 目前可以先这样，但我们要找一个更好的长期方案。

Alex: Sure. I will create a subtask to track it.
Alex：好的。我建一个子任务来跟踪。

Grace: Great. That's all for the scrum updates. Let's move to the post-scrum discussion.
Grace：好，Scrum 更新就到这里，我们进入会后讨论环节。
```

## 6. 听到这些说明……

| 听到 | 说明 | 你该怎么做 |
| --- | --- | --- |
| `Any heads-up for the whole team?` | 第 ① 段，整体消息 | 一般是负责人回答；你没有就不用说 |
| `I will go through the story updates.` | 第 ② 段开始 | 准备好你模块的更新 |
| `For the web part, …` | 进入某个模块 | 看是不是你的模块 |
| `Let's move to the native part.` / `Alex, can you give an update?` | 轮到你的模块了 | 按公式汇报 |
| `Is this one ready for QA?` | 追问某个 Story 的状态 | 用状态词回答 |
| `Can we close this one?` | 问能不能把工单关掉 | `Yes, it's done.` 或 `Not yet, …` |
| `This one will be carried over.` | 这个 Story 本 Sprint 做不完 | 留意是不是你的 |
| `Let's move to the post-scrum discussion.` | 第 ③ 段开始，可以提话题了 | 有问题这时候提 |

## 7. 字幕里怎么认

| 字幕里可能看到 | 实际意思 / 标准说法 |
| --- | --- |
| `spring board` / `spring planning` | `sprint board` / `sprint planning` |
| `the dev store ready for dev` | `the story is ready for dev` |
| `test path` | `test passed`（测试通过） |
| `ready for relief` | `ready for release`（可以发布） |
| `unhold` | `on hold`（暂停） |
| `Pam form part` / `web port` | `platform part` / `web part`（"port" 常是 `pod` 或 `part`） |
| `post-scram session` | `post-scrum session`（会后讨论） |
| `regarding to the backlog` | `regarding the backlog`（非母语说法） |
| `another two backlog we created` | `another two backlog items we created` |

**读法：** 一看到 `For the …,` 就把它当成小标题，后面才是重点。主持人说一个 Story 时，常常把很长的 Story 标题整句念出来，比如 `For the set up verification in pipeline to ensure the code format meet the standard`。这时候不用读懂整个标题，**跳到逗号后面，找人名和状态词**就行。

## 8. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `The story is in develop.` | `The story is in dev.` / `in development` | `develop` 是动词，介词后用名词 |
| `It's ready to QA.` | `It's ready for QA.` | `ready for + 名词` |
| `Most of stories are done.` | `Most of the stories are done.` | `most of` 后要有 `the` |
| `Two backlog was added.` | `Two backlog items were added.` | `backlog` 通常指整个待办池，单个事项说 `backlog item` |
| `The story was carry over.` | `The story was carried over.` | 被动语态用过去分词 |
| `This story is block.` | `This story is blocked.` | 状态用过去分词 `blocked` |
| `Everything is on the track.` | `Everything is on track.` | 固定短语，不加 `the` |

## 9. 你的模块汇报模板

| 步骤 | 英文模板 | 中文提示 |
| --- | --- | --- |
| 开头 | `Sure. For the ________ part, …` | 好的，……部分 |
| 整体 | `most of the stories are ________ (in dev / done / on track).` | 整体状态 |
| Story A | `For the ________ story, I've ________, and it's ________ (in review / ready for QA).` | 第一个 Story |
| Story B | `For the ________ story, we are still working on ________.` | 第二个 Story |
| 计划 | `Next, we will ________.` / `This one will be carried over.` | 下一步或顺延 |
| 收尾 | `That's all for the ________ part. Any questions or comments?` | 收尾、邀请提问 |

填好以后是这样的：

```text
Sure. For the web part, most of the stories are on track. For the date picker story, I've finished the fix, and it's ready for QA. For the theme story, we are still working on the dark mode tokens. Next, we will update the documentation. That's all for the web part. Any questions or comments?
好的。Web 部分，大部分 Story 都在按计划推进。日期选择器那个 Story，我修好了，可以提测。主题那个 Story，我们还在做暗色模式的 Token。下一步我们会更新文档。Web 部分就这些。大家有什么问题或意见吗？
```

## 10. 用到的语法

| 语法 | 在周会里的作用 | 课程 |
| --- | --- | --- |
| be + 介词短语 / 形容词 | `is in dev`、`is ready for QA`、`is on hold` | [G04](../grammar/04-be-and-there-be.zh.md) |
| 现在进行时 | `Ken is working on it.` | [G07](../grammar/07-present-simple-and-continuous.zh.md) |
| 现在完成时 | `She has completed two subtasks.` | [G08](../grammar/08-past-simple-and-present-perfect.zh.md) |
| 被动语态 | `It was carried over.` `The PR has been merged.` | [G12](../grammar/12-passive-voice.zh.md) |
| 短语动词 | `pick up`、`carry over`、`go through` | [G14](../grammar/14-phrasal-verbs-and-collocations.zh.md) |
| `For X, …` 引出话题 | `For the web part, …` | [G16](../grammar/16-prepositions.zh.md) |
| 数量表达 | `most of the stories`、`two of the three subtasks` | [G02](../grammar/02-nouns-articles-quantifiers.zh.md) |

看板和 Ticket 的更多词汇，见 [会议高频英文单词](../../meeting-frequent-words.zh.md) 的「Ticket 规划与职责」部分；常用句式见 [会议高频英文表达](../../meeting-english-phrases.zh.md)。

## 11. 练习

**A. 把状态和中文意思连起来**

1. in dev　2. ready for QA　3. in peer review　4. on hold　5. carried over　6. in the backlog

a. 暂停　b. 代码评审中　c. 顺延到下个 Sprint　d. 开发中　e. 还没排进 Sprint　f. 可以提测

**B. 读字幕，回答问题**

> For the visual test story, the most tests under this story is already done, and currently the Linux visual CI and baselines are in the review phase, and the browser story is not planned to current sprint.

1. 视觉测试那个 Story 现在是什么状态？
2. 浏览器那个 Story 呢？
3. 字幕里有两处语法错误，标准说法是什么？

**C. 用英文汇报（被点名时）**

1. 好的。平台部分，大部分 Story 都在开发中。
2. 文档那个 Story 已经完成了，Pipeline 那个 Story 在评审中。
3. 这个 Story 会顺延到下个 Sprint。平台部分就这些。

<details>
<summary>答案</summary>

**A.** 1-d　2-f　3-b　4-a　5-c　6-e

**B.**
1. 大部分测试已完成，Linux 视觉 CI 和基线在评审中。
2. 没有排进本 Sprint（还在待办池里）。
3. `the most tests … is already done` → `most of the tests … are already done`；`not planned to current sprint` → `not planned for the current sprint`。

**C.**
1. Sure. For the platform part, most of the stories are in dev.
2. The documentation story is done, and the pipeline story is in review.
3. This story will be carried over to the next sprint. That's all for the platform part.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [工作日常英语口语全指南](../../workplace-spoken-english.zh.md) 第 10 节「汇报进展与下一步」
- [软件行业常用英语](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.zh.md) 第 8 节「估时、计划与优先级」、第 9 节「每日站会与进度汇报」
- [软件商务英语核心问答 100 句](../../zero-to-work-english/04-工作沟通B1/software-business-english-must-know.zh.md) 第 3 节「工作与进度」、第 4 节「任务、截止日期与优先级」
- [会议高频英文单词](../../meeting-frequent-words.zh.md) 的「Ticket 规划与职责」部分（参考资料，仍在更新）
