# G07 一般现在时与现在进行时：说状态

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 阶段：小学 → 初中 ｜ 会议数据：现在进行时每万词约 59 次，`currently` 约 19 次，`working on` 约 12 次；一般现在时是所有句子的默认时态（`I think`、`it means`、`we need` 等每万词上百次）
>
> [English version](07-present-simple-and-continuous.md) · [上一课：G06 祈使句、Let's 与礼貌请求](06-imperatives-lets-please.zh.md) · [下一课：G08 一般过去时与现在完成时](08-past-simple-and-present-perfect.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

站会里说"今天在做什么"、周会里说"这个模块现在什么状态"，用的就是这一课的两种时态：

```text
I'm working on the login page this week.
这周我在做登录页面。

It works on Android, but it doesn't work on iOS yet.
它在 Android 上没问题，但在 iOS 上还不行。
```

第一句是**现在进行时**（`am/is/are + -ing`），说"这段时间正在做的事"；第二句是**一般现在时**，说"事实和状态"。中文都用"在/是/能"，不区分；英语要靠动词形式区分。很多同事说 `I am work on …` 或 `He work on …`，就是这两种时态的结构没有分清。

**学完这一课，你应该能：**

1. 用一般现在时说事实、流程、习惯和观点，不再漏掉三单 `-s`。
2. 用现在进行时说"此刻正在"和"这段时间在做"，这是站会里最常用的结构。
3. 知道 `know`、`need`、`mean`、`depend` 等状态动词一般不用进行时。
4. 掌握主谓一致：`the team is`、`everyone is`、`each story has`、`most of the stories are`。

## 1. 先建立一个正确的认识

**英语的时态 = 时间 + 状态。** 中文说"我在做""我做了""我会做"，靠的是"在、了、会"这些小词；英语则把信息放进**动词本身**：

| 中文 | 英语 | 动词变化 |
| --- | --- | --- |
| 我（平时）做测试 | `I test it.` | 原形 |
| 他（平时）做测试 | `He tests it.` | 加 `-s` |
| 我正在做测试 | `I'm testing it.` | `am + -ing` |

站会的三段式正好对应不同时态：

| 站会内容 | 主要时态 | 课程 |
| --- | --- | --- |
| 昨天做了什么 | 一般过去时 / 现在完成时 | [G08](08-past-simple-and-present-perfect.zh.md) |
| 今天在做什么 | **现在进行时** | 本课 |
| 有什么问题、现在什么状态 | **一般现在时** | 本课 |
| 接下来打算做什么 | 将来表达 | [G09](09-future-will-going-to.zh.md) |

## 2. 一般现在时：说事实、流程和观点

### 2.1 公式

| 句型 | I / you / we / they | he / she / it / 单数名词 |
| --- | --- | --- |
| 肯定 | `We use Jira.` | `It uses Jira.` |
| 否定 | `We don't use Jira.` | `It doesn't use Jira.` |
| 疑问 | `Do you use Jira?` | `Does it use Jira?` |

关键点：**只有第三人称单数（he / she / it / the build / the team）要在动词后加 `-s`**；一旦用了 `doesn't` 或 `does`，后面的动词就回到原形。

### 2.2 会议里的五种用法

**① 事实和状态（最常用）**

```text
The build fails on macOS.
构建在 macOS 上失败。

This page shows all open requests.
这个页面显示所有未处理的请求。

It takes about ten minutes to run the full test suite.
跑完整套测试大概要十分钟。

The new version doesn't support Node 16.
新版本不支持 Node 16。
```

**② 流程、规则和习惯**

主持人讲团队流程时，几乎全用一般现在时：

```text
We have a stand-up every day at 9:30.
我们每天 9:30 开站会。

After the developer finishes the story, QA tests it.
开发完成 Story 以后，由 QA 测试。

The pipeline runs every night.
流水线每晚运行一次。

If the PR check fails, the bot adds a label.
如果 PR 检查失败，机器人会加一个标签。
```

**③ 观点和状态动词**

`I think`、`I mean`、`it means`、`we need`、`it looks good`、`it depends` 都是一般现在时，而且是会议里最高频的说法：

```text
I think it looks good.
我觉得看起来没问题。

That makes sense.
有道理。

It depends on the design team.
这取决于设计团队。

So it means the story is ready for development.
也就是说这个 Story 可以开发了。
```

**④ 演示时边做边讲**

演示时说"我点这里，它会弹出……"，母语者用一般现在时：

```text
I click this button, and it opens the dialog.
我点这个按钮，它就打开对话框。

Here you select the design system, and the form shows the request type.
在这里选设计系统，表单就会显示请求类型。
```

**⑤ 时间表（表示将来）**

日程、发布时间等固定安排可以用一般现在时表示将来，详见 [G09](09-future-will-going-to.zh.md)：

```text
The sprint starts on Monday.
Sprint 周一开始。
```

### 2.3 三单 -s 的拼写

| 规则 | 例子 |
| --- | --- |
| 一般加 `-s` | `work → works`、`run → runs`、`merge → merges` |
| 以 `s, sh, ch, x, o` 结尾加 `-es` | `pass → passes`、`push → pushes`、`fix → fixes`、`go → goes`、`do → does` |
| 辅音 + `y` 结尾，变 `y` 为 `i` 加 `-es` | `try → tries`、`apply → applies`、`deploy → deploys`（元音 + y 直接加 s） |
| 不规则 | `have → has`、`be → is` |

### 2.4 频率副词的位置

`always`、`usually`、`often`、`sometimes`、`never` 放在**实义动词前、be 动词后**：

```text
We usually release on Thursday.
我们通常周四发版。

The test is sometimes flaky.
这个测试有时候不稳定。
```

## 3. 现在进行时：说"正在做"和"这段时间在做"

### 3.1 公式

**公式：** `am / is / are + 动词-ing`

| 句型 | 例子 |
| --- | --- |
| 肯定 | `I'm working on it.`、`She's reviewing the PR.`、`We're testing it.` |
| 否定 | `I'm not working on it.`、`It isn't loading.` |
| 疑问 | `Are you working on it?`、`Is anyone working on this ticket?` |

注意：`am / is / are` 和 `-ing` **缺一不可**。`I working on it` 少了 `am`，`I am work on it` 少了 `-ing`，都不对。

### 3.2 会议里的四种用法

**① 此刻正在发生**

```text
I'm sharing my screen now.
我现在在共享屏幕。

It's still loading.
它还在加载。

Mia is presenting, so let's wait.
Mia 正在讲，我们等一下。
```

**② 这段时间在做（不一定是此刻）⭐ 站会最常用**

说"今天/这周/这个 Sprint 在做什么"，即使此刻在开会，也用进行时：

```text
I'm working on the date picker this sprint.
这个 Sprint 我在做日期选择器。

We're migrating the pipeline to Harness.
我们正在把流水线迁移到 Harness。

Ken is still investigating the crash.
Ken 还在排查那个崩溃问题。

Currently, we're waiting for access to the AWS account.
目前我们在等 AWS 账号的权限。
```

**③ 临时情况（和长期状态对比）**

```text
I usually work on the web part, but this sprint I'm helping the native team.
我平时做 Web 部分，但这个 Sprint 我在帮 Native 团队。
```

**④ 正在变化的趋势**

```text
The build is getting slower.
构建越来越慢了。

More teams are using the component library now.
现在越来越多的团队在用组件库。
```

> 现在进行时也能表示**已经安排好的将来**：`I'm meeting the design team tomorrow.` 详见 [G09](09-future-will-going-to.zh.md)。

### 3.3 -ing 的拼写

| 规则 | 例子 |
| --- | --- |
| 一般直接加 `-ing` | `test → testing`、`review → reviewing`、`deploy → deploying` |
| 不发音的 `e` 结尾，去 `e` 加 `-ing` | `make → making`、`write → writing`、`merge → merging` |
| 重读闭音节，双写末尾辅音 | `run → running`、`set → setting`、`plan → planning`、`debug → debugging` |
| `ie` 结尾，变 `y` | `die → dying` |

### 3.4 站会高频"进行时"短语

| 短语 | 意思 |
| --- | --- |
| `be working on` | 在做…… |
| `be looking into` | 在调查…… |
| `be waiting for` | 在等…… |
| `be checking with` | 在和……确认 |
| `be trying to` | 在尝试…… |
| `be planning to` | 在打算…… |
| `be focusing on` | 在重点做…… |

> ⚠️ `We are blocked by …`、`It is merged.` 里也有 `be`，但后面是**过去分词**，这是被动语态或形容词，不是进行时，见 [G12](12-passive-voice.zh.md)。

## 4. 一般现在时和现在进行时怎么选

**一句话：** 一般现在时说"**总是这样 / 本来就这样**"；现在进行时说"**现在这段时间正在这样**"。

| 一般现在时 | 现在进行时 |
| --- | --- |
| `The pipeline runs every night.` | `The pipeline is running now.` |
| `I work on the web team.` | `I'm working on the date picker.` |
| `We use Jenkins.` | `We're moving to Harness.` |
| `What do you do?`（你是做什么工作的？） | `What are you doing?`（你在干什么？） |
| `It doesn't work on Safari.`（一直不支持） | `It isn't working right now.`（暂时坏了） |

```text
The test usually passes, but it's failing today.
这个测试平时都能通过，但今天一直失败。

We normally deploy on Thursday, but this week we're deploying on Friday.
我们一般周四部署，但这周改到周五。
```

**标志词：**

| 一般现在时 | 现在进行时 |
| --- | --- |
| `always`、`usually`、`often`、`never` | `now`、`right now`、`at the moment` |
| `every day`、`every sprint`、`by default` | `this week`、`this sprint`、`today` |
| `normally`、`in general` | `still`、`currently` |

`currently` 两种时态都可以用：`Currently we use Jenkins.`（目前的状态） / `Currently we're working on the POC.`（目前在做的事）。

## 5. 状态动词：一般不用进行时 🟡

有些动词表示**状态、想法、感觉**，不是动作，通常不用进行时：

| 类别 | 动词 |
| --- | --- |
| 想法 | `know`、`understand`、`believe`、`remember`、`think`（认为）、`mean` |
| 需要 / 喜好 | `need`、`want`、`prefer`、`like` |
| 关系 / 状态 | `depend`、`belong`、`include`、`contain`、`seem`、`agree` |

```text
I know the root cause.
我知道根本原因。

We need more time.
我们需要更多时间。

It depends on the budget.
这取决于预算。
```

❌ `I'm knowing`　❌ `It's depending on`　❌ `I'm agree`

但有些动词换了意思就可以用进行时：

```text
I think it's a good idea.
我认为这是个好主意。（think = 认为，状态）

I'm thinking about the naming.
我在考虑命名的问题。（think about = 考虑，动作）

We have two runners.
我们有两台执行机。（have = 拥有）

We're having a problem with the build.
我们的构建遇到了问题。（have a problem = 遇到，动作）
```

> 会议里常听到 `I'm thinking maybe …`、`I'm wondering if …`、`We're hoping to …`。这里用进行时是**让语气更委婉**，是自然的口语，可以学。

## 6. 主谓一致：is 还是 are，has 还是 have

一般现在时里，动词形式要跟着**主语的单复数**变：单数主语用 `is / has / 动词-s`，复数主语用 `are / have / 动词原形`。会议里最容易错的是下面几类主语。

### 6.1 团队名词：the team is / the teams are

`team`、`QA`、`the design team` 本身是**一个整体**。美式英语用单数；英式英语有时用复数，两种都能听到：

```text
The team is working on the sprint backlog.
团队正在做 Sprint Backlog。

The platform team has a new runner.
平台团队有了一台新的执行机。

Both teams are using the same pipeline.
两个团队都在用同一条流水线。
```

### 6.2 everyone / each / every：一律单数

`everyone`、`everybody`、`anyone`、`nobody`、`each`、`every` 意思像"大家"，但语法上是**单数**：

```text
Everyone is here, so let's get started.
大家都到了，我们开始吧。

Each story has a story point.
每个 Story 都有一个故事点。

Every ticket needs an owner.
每个工单都需要一个负责人。

Each of the components has its own test.
每个组件都有自己的测试。
```

### 6.3 most of / some of / all of：看 of 后面的名词

| 结构 | 动词 | 例子 |
| --- | --- | --- |
| `most / some / all of + 复数名词` | 复数 | `Most of the stories are done.` |
| `most / some / all of + 不可数名词` | 单数 | `Most of the work is done.` |
| `one of + 复数名词` | **单数**（主语是 one） | `One of the tests is failing.` |
| `a lot of + 复数名词` | 复数 | `A lot of tickets are still open.` |
| `the number of + 复数名词` | 单数 | `The number of bugs is going down.` |

```text
Most of the stories are already done.
大部分 Story 已经完成了。

One of the tests is failing on CI.
其中一个测试在 CI 上失败了。
```

### 6.4 A and B / 长主语

两个人或两件事用 `and` 连接，用复数；主语很长时，要找到**真正的中心词**：

```text
Mia and Ken are working on this story.
Mia 和 Ken 在做这个 Story。

The list of open tickets is on the Confluence page.
未关闭工单的清单在 Confluence 页面上。（中心词是 list）
```

## 7. 真实会议例句（改编）

以下句子来自真实会议字幕，已修正识别错误并匿名化：

```text
Currently, our developers are working on the first three subtasks under this story.
目前我们的开发在做这个 Story 下面的前三个子任务。

And now he's working on updating the Harness pipeline to fix this issue.
现在他在更新 Harness 流水线来解决这个问题。

I'm checking the Confluence page you shared.
我在看你分享的 Confluence 页面。

We're still waiting for the meeting request.
我们还在等会议邀请。

I'm looking into that now, actually.
其实我现在正在查这个问题。

We have some initial solutions, but we're still working on the POC.
我们有了一些初步方案，但还在做 POC。

This is a responsive system, so this setting also controls the typography.
这是一个响应式系统，所以这个设置也控制字体排版。

When you open those inputs in Figma, you only see approved design system values.
在 Figma 里打开这些输入框时，你只会看到设计系统认可的值。

I don't think the Node version directly affects our consumers.
我认为 Node 版本不会直接影响我们的使用方。
```

非母语原句 vs 标准说法：

| 字幕原文 | 标准说法 |
| --- | --- |
| `now he's working on update the pipeline` | `now he's working on updating the pipeline` |
| `I'm working in that right now.` | `I'm working on that right now.` |
| `There is one ticket is blocking by that.` | `There's one ticket that is blocked by that.` |
| `Currently team are working on …` | `Currently, the team is working on …`（英式也可说 `are`） |
| `Mia and Ken has already created some epics.` | `Mia and Ken have already created some epics.` |
| `It's depending on the design.` | `It depends on the design.` |

## 8. 字幕里怎么认

1. **找 `be + -ing`。** 看到 `I'm / we're / he's / it's + 动词-ing`，就是"正在 / 这段时间在"。
2. **字幕常吞掉缩写。** 语音识别常把 `we're working` 识别成 `we working` 或 `were working`。根据上下文（`now`、`currently`、`this week`）判断它是现在进行时。
3. **`-ing` 不一定是进行时。** `The goal is testing the flow.` 里 `testing` 是名词性用法（"目标是测试流程"）；`The ticket is blocked.` 是被动。
4. **`it's` 有两种意思：** `it is`（`it's working`）或 `it has`（`it's been merged`，见 [G08](08-past-simple-and-present-perfect.zh.md)）。
5. **三单 `-s` 常被吞掉或说漏。** 非母语同事说 `he work on it`、`it look good`，意思不受影响，看懂即可，自己说的时候要加 `-s`。

| 字幕里可能看到 | 标准说法 |
| --- | --- |
| `we working on the story` | `we're working on the story` |
| `he still investigate the issue` | `he's still investigating the issue` |
| `it look good to me` | `it looks good to me` |
| `everyone are here` | `everyone is here` |
| `the team are` | `the team is`（美式）/ `the team are`（英式） |

## 9. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `I am work on the login page.` | `I'm working on the login page.` | 进行时要 `be + -ing` |
| `I working on it.` | `I'm working on it.` | 不能漏掉 `am` |
| `He work on the native part.` | `He works on the native part.` | 三单加 `-s` |
| `It don't work on iOS.` | `It doesn't work on iOS.` | 三单否定用 `doesn't` |
| `Does it works?` | `Does it work?` | `does` 后用原形 |
| `I'm agree.` | `I agree.` | `agree` 是动词，不需要 `am` |
| `It's depending on the budget.` | `It depends on the budget.` | 状态动词不用进行时 |
| `Every day we are having a stand-up.` | `We have a stand-up every day.` | 习惯用一般现在时 |
| `Everyone have the link?` | `Does everyone have the link?` | `everyone` 是单数 |
| `Each of the stories have an owner.` | `Each of the stories has an owner.` | 主语是 `each` |

## 10. 你可以直接用的句子

```text
Today I'm working on the API integration.
今天我在做 API 集成。

I'm still looking into the login issue.
我还在查登录的问题。

I'm waiting for the design team's feedback.
我在等设计团队的反馈。

It works on Android, but it doesn't work on iOS yet.
在 Android 上没问题，但在 iOS 上还不行。

The pipeline usually takes about 15 minutes.
流水线一般要 15 分钟左右。

Most of the stories are on track.
大部分 Story 进度正常。

Everyone is here, so let's get started.
大家都到了，我们开始吧。

It depends on the backend changes.
这取决于后端的改动。
```

## 11. 练习

**A. 选择正确的形式**

1. The pipeline (runs / is running) every night.
2. Look, the pipeline (runs / is running) now.
3. I (work / am working) on the native part this sprint.
4. I (need / am needing) access to the repo.
5. We usually (release / are releasing) on Thursday.
6. Ken can't join because he (talks / is talking) to the client.

**B. 填 is / are / has / have**

1. Everyone ___ in the meeting.
2. Most of the tickets ___ done.
3. One of the tests ___ failing.
4. Each story ___ an owner.
5. Mia and Leo ___ working on the migration.
6. Most of the work ___ finished.

**C. 改错**

1. I am work on the date picker.
2. The build don't pass.
3. It's depending on QA.
4. He still investigate the crash.
5. Does the page loads correctly?

**D. 翻译成英语**

1. 我这周在做日期选择器。
2. 我们平时每两周发一次版。
3. 我在等后端的 API。

<details>
<summary>答案</summary>

**A.** 1 runs　2 is running　3 am working　4 need　5 release　6 is talking

**B.** 1 is　2 are　3 is　4 has　5 are　6 is

**C.**
1. I'm working on the date picker.
2. The build doesn't pass.
3. It depends on QA.
4. He's still investigating the crash.
5. Does the page load correctly?

**D.**
1. I'm working on the date picker this week.
2. We usually release every two weeks.
3. I'm waiting for the backend API.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [01-foundations/04 三大基本时态](../../01-foundations/04-three-basic-tenses.zh.md) 的一般现在时部分
- [02-intermediate/08 完成、进行、被动与主谓一致](../../02-intermediate/08-aspect-passive-agreement.zh.md) 的主谓一致部分
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 8 章「一般现在时」、第 9 章「第三人称单数」、第 10 章「现在进行时」、第 41 章「主谓一致」
