# M06 阻塞、风险、延期与求助

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 场景：站会的"阻塞"环节、Sprint 同步里的状态说明、会后求助 ｜ 会议数据：`depend(s / ing / ency)` 每万词约 9.5 次，`help` 约 5 次，`pending` 约 3 次，`blocked / blocker` 约 2.5 次，`risk` 约 2 次
>
> [English version](06-blockers-risks-and-help.md) · [上一课：M05 看法与建议](05-opinions-and-suggestions.zh.md) · [下一课：M07 收尾与行动项](07-wrap-up-and-action-items.zh.md) · [会议目录](README.zh.md)

## 这一课解决什么问题

工作卡住了，很多人在站会上只说一句 `I have some problems.`，然后就没下文了。别人不知道你卡在哪、影响多大、需要谁帮忙，问题就一直拖着。

一个好的阻塞汇报，要让听的人马上知道**下一步谁该做什么**：

```text
I'm blocked by the access request. It's still pending, so I can't test on the staging environment. Could someone from the platform team help me check it?
我卡在权限申请上，申请还在等审批，所以没法在预发布环境测试。平台组能有人帮我看一下吗？
```

**学完这一课，你应该能：**

1. 分清 blocker、dependency、risk、delay 这几个词，用对场合。
2. 按「问题 → 原因 → 影响 → 需要什么」说清一个阻塞。
3. 提前提醒风险和延期，并说出临时方案。
4. 礼貌、具体地请别人帮忙，也能主动提供帮助。

## 1. 会议现场：问题什么时候被说出来

| 时机 | 信号 | 你要说什么 |
| --- | --- | --- |
| 站会的阻塞环节 | `Any blockers?` | 有就说清楚，没有就 `No blockers.` |
| Sprint 同步里讲到你的 Story | `What's the status of this one?` | 说状态，顺便说卡点 |
| Tech Lead 追问 | `Is anything blocking you?` / `Is this a hard blocker?` | 说影响和需要的帮助 |
| 会后讨论 | `Any topics?` | 提出需要大家一起解决的问题 |

先分清四个词。它们在会议里意思不同，**说错会让别人误判严重程度**：

| 词 | 意思 | 例句 |
| --- | --- | --- |
| `blocker` / `blocked` | 完全卡住，没法继续 | `I'm blocked by the access request.` |
| `dependency` / `depend on` | 要等别人先完成 | `This story depends on the design team.` |
| `risk` | 可能出问题，还没发生 | `There's a risk that we can't finish it this sprint.` |
| `delay` / `behind` | 已经确定会晚 | `This story will be delayed by two days.` |

你们的 Tech Lead 很常问 `Is it a hard blocker?`。`hard blocker` 是"真的完全卡死"；`not a hard blocker` 是"有点麻烦，但能绕过去，不影响继续做"。

## 2. 固定公式

**说一个阻塞的四步：**

| 步骤 | 公式 | 例句 |
| --- | --- | --- |
| ① 问题 | `I'm blocked by / on + 事情.` | `I'm blocked on the iOS pipeline.` |
| ② 原因 | `because + 原因` / `It's still pending.` | `because we don't have a macOS runner.` |
| ③ 影响 | `so + 什么做不了 / 什么会晚` | `so the iOS tests can't run.` |
| ④ 需要 / 下一步 | `Could someone + 动作?` / `In the meantime, I will + 动作.` | `Could someone from the platform team help?` |

**说风险和延期：** `There's a risk that + 句子.` / `This will probably slip to the next sprint, because + 原因.` + `To reduce the risk, we will + 动作.`

## 3. 按功能分组的句子

### 3.1 说阻塞

```text
I'm blocked by the access request. It's still pending.
我卡在权限申请上，还在等审批。

I'm blocked on the iOS pipeline, because we don't have a macOS runner yet.
我卡在 iOS 流水线上，因为还没有 macOS Runner。

I can't merge the PR, because the title check keeps failing.
我没法合并 PR，因为标题检查一直不通过。

The PR is ready, but it's still waiting for review and approval.
PR 已经好了，但还在等评审和批准。

I'm waiting for the final design from the design team.
我在等设计团队的最终设计稿。
```

`blocked by` 后面接**卡住你的东西**；`blocked on` 后面接**被卡住的那件工作**。日常会议里两个经常混用，听懂就行。

### 3.2 说依赖 🟡

```text
This story depends on the token work from the design team.
这个 Story 依赖设计团队的 Token 工作。

Once the repository is created, we can start the publishing workflow.
仓库一建好，我们就可以开始做发布流程。

We can't start this task until the approval is done.
审批完成之前，这个任务没法开始。

These two tasks don't depend on each other, so we can work on them in parallel.
这两个任务互不依赖，可以并行做。
```

`once` 和 `until` 后面用一般现在时表示将来：`Once the repository is created`，不说 `will be created`。详见 [G20](../grammar/20-adverbial-clauses.zh.md)。

### 3.3 提醒风险 🟡

```text
There's a risk that we can't finish it in this sprint.
这个 Sprint 有可能做不完。

The license will expire soon, so we may need to move to another tool.
许可证快到期了，我们可能需要换一个工具。

If the approval is rejected, we will need another option.
如果审批被拒，我们就需要另一个方案。

I just want to flag this early.
我只是想提前提醒一下大家。
```

### 3.4 说延期

```text
This story will probably be carried over to the next sprint.
这个 Story 可能会顺延到下个 Sprint。

It took longer than expected, because there were more dependencies.
比预期花的时间长，因为依赖比较多。

We are a bit behind schedule on the native part.
Native 部分进度有点落后。

I need two more days to finish the tests.
我还需要两天才能把测试做完。
```

### 3.5 说临时方案（workaround）

```text
As a temporary solution, I set up a local runner.
作为临时方案，我搭了一个本地 Runner。

There is a workaround, so it's not a hard blocker.
有绕过的办法，所以不算完全卡死。

In the meantime, I will work on the Android part.
在这期间，我先做 Android 部分。

We can use the old repository to validate the workflow for now.
我们可以先用旧仓库来验证这个流程。
```

**只说问题不说办法，会让人觉得你在等别人解决。** 加一句 `In the meantime, I will …`，听起来就主动多了。

### 3.6 请别人帮忙 ⭐ 最实用

```text
Could someone from the platform team help me check the runner?
平台组能有人帮我看一下 Runner 吗？

Do you know who I should contact about the license?
你知道许可证的事我该找谁吗？

Ken, could you approve my access request when you have time?
Ken，你有空的时候能帮我批一下权限申请吗？

Could you take a look at my PR? It's blocking the QA testing.
你能看一下我的 PR 吗？它卡住了 QA 测试。

Can we raise this with the platform team?
我们能把这个问题提给平台团队吗？
```

求助时**说清楚具体动作**（check the runner、approve the request、take a look at the PR），比 `Can you help me?` 有效得多。

### 3.7 提供帮助、推动解决

```text
I can help with the Android setup if you need.
如果需要，Android 配置我可以帮忙。

Let me ping the platform team after the meeting.
会后我去问一下平台团队。

Let's kick off the approval process as early as possible.
我们尽早启动审批流程。

Thanks for your help. The PR has been merged, so others are unblocked now.
谢谢帮忙。PR 已经合并了，其他人现在不受影响了。
```

## 4. 完整对话：卡在 iOS 流水线（改编自真实会议）

场景：Sprint 同步会讲到 Native 部分。Alex（你）负责 iOS 流水线。Ken 是 Tech Lead，Grace 是 Scrum Master，Priya 来自平台组。

```text
Grace: Okay, for the native part, Alex, what's the status of the iOS pipeline story?
Grace：好，Native 部分。Alex，iOS 流水线那个 Story 现在什么状态？

Alex: I'm still blocked on the iOS pipeline. The shared cluster can't run macOS builds, so the iOS tests can't run.
Alex：我还卡在 iOS 流水线上。共享集群跑不了 macOS 构建，所以 iOS 测试没法跑。

Ken: Is it a hard blocker? Can you work on anything else in the meantime?
Ken：这是完全卡死吗？在这期间你能先做别的吗？

Alex: Not really a hard blocker. In the meantime, I'm working on the Android part. But there's a risk that the iOS part will be carried over to the next sprint.
Alex：不算完全卡死。在这期间我在做 Android 部分。不过 iOS 部分有可能会顺延到下个 Sprint。

Grace: Okay. What do you need to unblock it?
Grace：好。要解决这个，你需要什么？

Alex: We need a macOS runner. I submitted a request last week, but it's still pending. Priya, do you know who I should contact about it?
Alex：我们需要一台 macOS Runner。我上周提交了申请，但还在等审批。Priya，你知道这事我该找谁吗？

Priya: I think it's the cloud team. Let me ping them after the meeting and check the status for you.
Priya：我觉得是云团队。会后我去问一下，帮你看看进度。

Alex: Thank you. That would be really helpful.
Alex：谢谢，那真的帮大忙了。

Ken: Also, as a temporary solution, maybe you can set up a local runner, so the pipeline is not completely blocked.
Ken：另外，作为临时方案，你也许可以先搭一个本地 Runner，这样流水线不至于完全卡住。

Alex: Sure. I will try that today and update the ticket.
Alex：好的。我今天试一下，然后更新工单。

Grace: Great. I'll mark this story as at risk for now. Let's check it again in tomorrow's sync.
Grace：好。这个 Story 我先标记为"有风险"。明天同步会我们再看一下。
```

Alex 的说法里有完整的四步：**问题**（`blocked on the iOS pipeline`）→ **原因**（`can't run macOS builds`）→ **影响**（`the iOS tests can't run` / `risk … carried over`）→ **需要什么**（`We need a macOS runner … who I should contact`）。

## 5. 听到这些说明……

| 听到 | 说明 | 你该怎么做 |
| --- | --- | --- |
| `Is anything blocking you?` | 问你有没有卡住 | 有就按四步说；没有就 `No blockers.` |
| `Is it a hard blocker?` | 问是不是完全卡死 | 说清能不能绕过、能不能先做别的 |
| `What do you need to unblock it?` | 问你需要什么帮助 | 说出具体的人和动作 |
| `It depends on …` | 依赖别人的工作 | 记下依赖谁 |
| `It's pending …` / `waiting for approval` | 还在等，没被拒绝 | 不是失败，可以追问预计时间 |
| `Let's escalate this.` / `Let's raise this with …` | 要把问题提给更高层或其他团队 | 准备好说明材料 |
| `I'll mark it as at risk.` | Story 被标记为有风险 | 下次会议要给出新进展 |
| `It's unblocked now.` | 问题解决了，可以继续 | 更新状态 |

## 6. 字幕里怎么认

| 字幕里可能看到 | 实际意思 / 标准说法 |
| --- | --- |
| `it's not a truly blocker` | `it's not really a blocker` |
| `pending by the repository creation` | `pending the repository creation` / `blocked by the repository creation` |
| `we can kick that start` | `we can kick it off`（启动） |
| `premier license` | `premium license` |
| `a 19 days trail` | `a 19-day trial`（`trail` 是识别错误，应为 `trial` 试用期；天数也可能被识别错，要确认） |
| `this task is blocked by the` + 下一行 | 原因在下一行字幕里，连起来读 |
| `we merged this to our main brands` | `we merged this to our main branch` |

**读法：** 听到 `blocked`、`pending`、`depends on`、`risk`、`waiting for`，马上找三样东西：**哪个任务**、**被什么卡住**、**谁来解决**。数字、日期、工具名最容易被识别错，重要的请对方发到聊天框。

## 7. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `I am blocking by the approval.` | `I'm blocked by the approval.` | 被卡住用被动 `be blocked by` |
| `It depends the design.` | `It depends on the design.` | `depend on` 是固定搭配 |
| `The task is delay.` | `The task is delayed.` | 状态用过去分词 |
| `I'm waiting the approval.` | `I'm waiting for the approval.` | `wait for` |
| `It will postpone to next sprint.` | `It will be postponed to the next sprint.` | 任务是"被推迟"，用被动 |
| `We have a risk to delay.` | `There's a risk of delay.` / `There's a risk that it will be delayed.` | `risk of + 名词` 或 `risk that + 句子` |
| `Once it will be approved, …` | `Once it is approved, …` | `once` 后用一般现在时 |

## 8. 你的阻塞汇报模板

| 步骤 | 英文模板 | 中文提示 |
| --- | --- | --- |
| 问题 | `I'm blocked by / on ________.` | 卡在什么上 |
| 原因 | `because ________.` / `It's still pending.` | 为什么 |
| 影响 | `so ________ can't ________.` / `There's a risk that ________.` | 影响什么 |
| 临时方案 | `In the meantime, I will ________.` | 先做什么 |
| 求助 | `Could someone ________?` / `Do you know who I should contact about ________?` | 需要谁做什么 |

填好以后是这样的：

```text
I'm blocked by the test account. I requested it on Monday, but it's still pending, so I can't test the payment flow. In the meantime, I will write the unit tests. Do you know who I should contact about the test account?
我卡在测试账号上。周一申请的，现在还在等审批，所以没法测支付流程。在这期间，我先写单元测试。你知道测试账号的事我该找谁吗？
```

## 9. 用到的语法

| 语法 | 在说阻塞时的作用 | 课程 |
| --- | --- | --- |
| 被动语态 | `be blocked by`、`be delayed`、`be carried over` | [G12](../grammar/12-passive-voice.zh.md) |
| 情态动词 may / might / could | 说风险的可能性；礼貌求助 | [G11](../grammar/11-modal-verbs.zh.md) |
| 时间状语从句 once / until | `Once the repo is created, …` | [G20](../grammar/20-adverbial-clauses.zh.md) |
| 条件句 | `If the approval is rejected, …` | [G21](../grammar/21-conditionals.zh.md) |
| 礼貌请求 | `Could someone …?` | [G06](../grammar/06-imperatives-lets-please.zh.md) |
| 宾语从句 | `Do you know who I should contact?` | [G18](../grammar/18-noun-clauses.zh.md) |
| 连词 because / so | 把原因和影响连起来 | [G17](../grammar/17-conjunctions-and-linking.zh.md) |

更多真实会议里的求助和跟进说法，见 [会议高频英文表达](../../meeting-english-phrases.zh.md)；跨团队协作词汇见 [会议高频英文单词](../../meeting-frequent-words.zh.md) 的「跨团队协作」部分。

## 10. 练习

**A. 用 blocker / dependency / risk / delay 判断每句话**

1. We can't start until the design team finishes the tokens.
2. There's a chance the license won't be renewed in time.
3. I can't run the tests at all because I don't have access.
4. This story will be two days late.

**B. 填空**

1. I'm ___ by the approval.（block）
2. This story depends ___ the platform team.
3. ___ the repository is created, we can start.
4. I'm waiting ___ the final design.
5. There's a risk ___ we can't finish it this sprint.

**C. 用四步法说成英文**

我卡在 PR 合并上。因为自动合并需要高级许可证，所以 QA 没法开始测试。在这期间我先改文档。Ken，你能帮我手动合并一下吗？

<details>
<summary>答案</summary>

**A.** 1 dependency　2 risk　3 blocker　4 delay

**B.** 1 blocked　2 on　3 Once　4 for　5 that

**C.** I'm blocked on merging the PR. Auto-merge needs a premium license, so QA can't start testing. In the meantime, I will update the documentation. Ken, could you help me merge it manually?

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [工作日常英语口语全指南](../../workplace-spoken-english.zh.md) 第 5 节「求助、请求与获取权限」、第 11 节「延期、风险与升级处理」
- [软件行业常用英语](../../zero-to-work-english/04-工作沟通B1/software-workplace-phrases.zh.md) 第 9 节中的「如实报告风险」、第 12 节「Bug 报告与问题调查」
- [成人软件英语第 14 课：报告与复现缺陷](../../adult-software-english-course/units/14-bugs.zh.md)
- [成人软件英语第 19 课：消息、交接与事故更新](../../adult-software-english-course/units/19-messages-and-incidents.zh.md)
