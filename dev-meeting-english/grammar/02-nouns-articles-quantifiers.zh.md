# G02 名词、冠词与数量表达

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 阶段：小学 → 初中 ｜ 会议数据：`the` 每万词约 670 次（会议里最常见的词），`a/an` 约 160 次，`some` 约 52 次，`any` 约 46 次，`all` 约 42 次，`each` 约 10 次
>
> [English version](02-nouns-articles-quantifiers.md) · [上一课：G01 句子骨架](01-sentence-skeleton.zh.md) · [下一课：G03 代词与指代](03-pronouns-and-reference.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

中文的名词没有单复数，也没有冠词。英语却在几乎每个名词前后都要"标记"：前面放 `a / the / some / any`，后面加或不加 `-s`。看这句站会里很常见的话：

```text
Most of the stories are done, but we still need some feedback from the design team.
大部分 Story 都完成了，但我们还需要设计团队的一些反馈。
```

一句话里就有四个要点：`stories` 加了 `-s`（可数复数）；`the` 表示"我们这个 Sprint 的那些"；`feedback` 不加 `-s`（不可数）；`design team` 是名词修饰名词。

这些小标记在字幕里经常被吞掉或识别错，所以**读的时候不要依赖它们**；但自己说的时候，用对了会让你听起来专业得多。

**学完这一课，你应该能：**

1. 判断名词可数还是不可数，尤其是 `feedback`、`information`、`progress` 这些软件团队常用的不可数名词。
2. 在会议高频说法里用对 `a / an / the / 不加冠词`。
3. 用对 `some / any / many / much / a few / each / all` 等数量词。
4. 读懂名词串（如 `the CI pipeline environment setup`），并能听懂、说出日期、版本号、百分比和 Sprint 编号。

## 1. 先建立一个正确的认识：单数可数名词不能"光着"

英语名词分两类：**可数**（能说 one, two, three）和**不可数**（不能直接数）。

一条最实用的规则：

> **单数可数名词前面必须有一个"限定词"**：`a / an / the / this / my / our / each / one` 等。

```text
I fixed a bug.
我修了一个 Bug。

I fixed the bug.
我把那个 Bug 修好了。

I fixed my bug.
我把我那个 Bug 修了。
```

❌ `I fixed bug.`——中文"我修了 Bug"很自然，英语却不行。复数和不可数名词则可以不加：`I fixed bugs.`、`We need feedback.`

## 2. 可数名词和不可数名词 🔴

| 可数（可以加 -s，可以用 a） | 不可数（不加 -s，不用 a） |
| --- | --- |
| `bug`、`ticket`、`story`、`task`、`issue` | `feedback`、`information`、`progress` |
| `PR`、`comment`、`question`、`update` | `work`、`research`、`documentation` |
| `component`、`page`、`test`、`change` | `code`、`data`、`software`、`hardware` |
| `meeting`、`release`、`build`、`option` | `help`、`advice`、`access`、`support` |

**最容易错的几个：** 中文里"反馈""信息""进展""调研"都可以说"一些、几个"，但英语里它们不可数。

```text
Thanks for your feedback.
谢谢你的反馈。（不是 feedbacks）

We made good progress this week.
我们这周进展不错。（不是 a good progress）

I need more information about the error.
关于这个错误，我需要更多信息。（不是 informations）

We are still doing some research on it.
我们还在做一些调研。（不是 researches）
```

**想"数"不可数名词时，换个可数的说法：**

```text
I have two comments on the design.
关于设计我有两条意见。（comment 可数）

I'll create a research ticket.
我会建一个调研工单。

It's just a small code change.
只是一个小的代码改动。
```

### 2.1 既可数又不可数的词 🟡

有些词两种用法都有，意思略有不同：

```text
We don't have much time.
我们时间不多了。（time：时间，不可数）

I restarted it three times.
我重启了三次。（times：次数，可数）

Do you have experience with React?
你有 React 的经验吗？（不可数：经验）

It was a good experience.
那是一次不错的经历。（可数：一次经历）
```

## 3. 复数怎么变 🔴

| 规则 | 例子 |
| --- | --- |
| 一般加 `-s` | `ticket → tickets`、`PR → PRs`、`API → APIs` |
| 以 s, x, ch, sh 结尾加 `-es` | `fix → fixes`、`branch → branches`、`patch → patches` |
| 辅音 + y：变 y 为 `-ies` | `story → stories`、`dependency → dependencies` |
| 元音 + y：直接加 `-s` | `key → keys`、`day → days` |
| 不规则 🟡 | `person → people`、`analysis → analyses`、`criterion → criteria`、`index → indexes / indices` |

两个提醒：

- **缩写的复数不加撇号：** `PRs`、`VMs`、`APIs`，不写 `PR's`。
- **有些词在工作中常用复数：** `logs`、`settings`、`details`、`requirements`、`credentials`、`release notes`。

```text
Can you check the logs?
你能看一下日志吗？

I've updated the settings.
我已经改了设置。

People are still testing it.
大家还在测。（people 本身就是复数）
```

## 4. 名词修饰名词：读懂"名词串" 🔴

英语喜欢把名词直接叠在一起，前面的名词当定语，**最后一个才是核心**。

```text
the login page
登录页面

the release pipeline
发布流水线

a 15-minute meeting
一个 15 分钟的会（作定语的名词用单数：minute，不是 minutes）

a two-day task
一个两天的任务
```

**读名词串的方法：从最后一个词往前读**，中文顺序正好是这样：

```text
the CI pipeline environment setup
CI 流水线环境的搭建（核心：setup）

the service account creation request
服务账号创建申请（核心：request）
```

## 5. 所有格：'s 和 of 🟡

| 形式 | 用在哪 | 例子 |
| --- | --- | --- |
| `名词's` | 人、团队、时间 | `Mia's PR`、`the team's feedback`、`today's meeting` |
| `复数s'` | 以 s 结尾的复数 | `the designers' comments` |
| `the X of Y` | 事物、较长的名词 | `the status of the ticket`、`the end of the sprint` |
| 名词作定语 | 事物，最简洁 | `the ticket status`、`the sprint goal` |

```text
Let's start with today's agenda.
我们从今天的议程开始。

I'll share the link for everyone's awareness.
我把链接发出来，让大家都知道一下。

We will finish it by the end of the sprint.
我们会在 Sprint 结束前完成。
```

## 6. 冠词：a / an / the / 不加冠词 🔴

### 6.1 a 还是 an：看发音，不看字母

**第一个音是元音**用 `an`，否则用 `a`。缩写特别容易错：

```text
an API
一个 API（A 读 /eɪ/，元音）

an SSR issue
一个 SSR 问题（S 读 /es/，元音开头）

an hour
一个小时（h 不发音）

a UI change
一个界面改动（U 读 /juː/，辅音 /j/ 开头）

a user
一个用户
```

### 6.2 the：双方都知道是"哪一个"

| 用法 | 例子 |
| --- | --- |
| 前面提过，或正在讨论的 | `I checked the PR.`（我们都知道的那个 PR） |
| 某个团队、模块、系统 | `the design team`、`the web part`、`the backend` |
| 序数词、最高级、`same / next / last / only / latest / current` | `the first story`、`the next one`、`the latest version` |
| 场景里唯一的东西 | `the screen`、`the chat`、`the agenda` |

```text
Let's move to the next one.
我们看下一个。

We have the same issue on iOS.
iOS 上也有同样的问题。

Is this the latest version?
这是最新版本吗？
```

### 6.3 不加冠词的情况

| 情况 | 例子 |
| --- | --- |
| 复数或不可数名词，泛指 | `Bugs happen.`、`We need feedback.` |
| 产品、工具、平台名 | `Jira`、`GitHub`、`Figma`、`Android` |
| `next / last / this` + 时间 | `next week`、`last sprint`、`this Friday` |
| 星期、月份 | `on Monday`、`in May` |
| 固定短语 | `in production`、`in progress`、`on track`、`by email` |

> ⚠️ `next sprint`（不加 the）和 `in the next sprint`（加 the）都对；字幕里常见的 `in next sprint` 是非母语说法。

### 6.4 会议高频冠词短语（整体记）

| 带 a | 带 the |
| --- | --- |
| `a quick question` | `the next one` |
| `a quick update` | `the same issue` |
| `a minute` | `the first one` |
| `a lot of` | `at the moment` |
| `a few days` | `by the end of the day` |

## 7. 限定词与数量表达 🔴

| 词 | 接可数复数 | 接不可数 | 频率 | 例子 |
| --- | --- | --- | --- | --- |
| `some` | ✅ | ✅ | 🔴 | `some issues`、`some feedback` |
| `any` | ✅ | ✅ | 🔴 | `any questions`、`any help` |
| `all` | ✅ | ✅ | 🔴 | `all the tests`、`all the code` |
| `no` | ✅ | ✅ | 🔴 | `no updates`、`no progress` |
| `each / every` | 接单数 | — | 🟡 | `each story`、`every PR` |
| `both` | ✅（两个） | — | 🟡 | `both platforms` |
| `many` | ✅ | — | 🟡 | `many components` |
| `much` | — | ✅ | 🟡 | `much time` |
| `a lot of` | ✅ | ✅ | 🟡 | `a lot of bugs`、`a lot of work` |
| `a few` / `a couple of` / `several` | ✅ | — | 🟡 | `a few days`、`a couple of pages` |
| `a little` / `a bit of` | — | ✅ | 🟡 | `a bit of research` |
| `either / neither` | 接单数 | — | 🟢 | `either option` |

### 7.1 some 和 any 🔴

- `some`：肯定句；以及希望对方说"是"的请求和提议。
- `any`：疑问句和否定句；也表示"任何一个都行"。

```text
Do you have any questions?
大家有什么问题吗？（会议里最常听到的问句之一）

I don't have any updates today.
我今天没有更新。

We found some issues on Android.
我们在 Android 上发现了一些问题。

Do you need some help?
需要帮忙吗？（提议，用 some）

Any comments are welcome.
欢迎任何意见。
```

### 7.2 many / much / a lot of 🟡

`much` 主要用于否定句和疑问句；肯定句里更常说 `a lot of`。

```text
There isn't much time left.
剩下的时间不多了。

How much work is left?
还剩多少工作量？

We have a lot of open tickets.
我们有很多未关闭的工单。
```

### 7.3 a few 和 few，a little 和 little 🟡

| 说法 | 意思 | 语气 |
| --- | --- | --- |
| `a few days` | 几天 | 中性 / 肯定 |
| `few people` | 几乎没人 | 否定，偏书面 🟢 |
| `a little time` | 一点时间 | 中性 / 肯定 |
| `little time` | 几乎没时间 | 否定，偏书面 🟢 |

### 7.4 all / most / each / both / none 🔴

**`most of the + 名词`** 和 **`most + 名词`** 都对，但 `of` 后面必须有 `the / my / these` 等：

```text
Most of the stories are completed.
大部分 Story 都完成了。

Each story has a few subtasks.
每个 Story 都有几个子任务。

Both of them work on the native part.
他们两个都在做 Native 部分。

None of the tests failed.
没有一个测试失败。
```

❌ `most of stories`　✅ `most of the stories` / `most stories`

## 8. 数字：日期、版本号、百分比、Sprint 🟡

站会里数字很多，字幕也最容易把数字识别错。下面是最常见的读法，更多内容见 [数字、年份、月份和星期](../../numbers-years-months-weekdays.zh.md)。

| 类型 | 写法 | 读法 |
| --- | --- | --- |
| 基数词 | 3、15、250 | three, fifteen, two hundred and fifty |
| 序数词 | 1st、2nd、3rd、21st | first, second, third, twenty-first |
| 日期 | May 5 / 5 May | May fifth / the fifth of May |
| 年份 | 2025 | twenty twenty-five |
| 时间 | 9:30、10:05、3 PM | nine thirty, ten oh five, three p.m. |
| 版本号 | 7.0.0、v2.3、Node 20 | seven point oh point oh, version two point three, Node twenty |
| 小数 | 1.5 | one point five |
| 百分比 | 80% | eighty percent |
| Sprint 编号 | Sprint 12 | Sprint twelve（不加 the） |
| 故事点 | 3 points | three points / a three-point story |
| 范围 | 2–3 days | two to three days |

```text
We are in Sprint 12 now.
我们现在在第 12 个 Sprint。

We need to upgrade to version 7.0.0.
我们需要升级到 7.0.0 版本。

The test coverage is about 80 percent.
测试覆盖率大约 80%。

I'd give it three points.
我给它估 3 个点。

It will take two to three days.
大概需要两到三天。

The release is planned for May 15th.
发布计划在 5 月 15 日。

I'll be off for one and a half days.
我会请一天半的假。
```

注意：`one and a half days`、`1.5 days`、`zero bugs` 用复数；`a two-week sprint` 里的 `week` 作定语，用单数。

## 9. 真实会议例句（改编）

```text
There are three subtasks under this story.
这个 Story 下面有三个子任务。

Under this folder, there are a couple of pages with detailed explanations.
这个文件夹下有几个页面，里面有详细说明。

Each story can have different subtasks.
每个 Story 可以有不同的子任务。

We still need some help from the design team.
我们还需要设计团队的一些帮助。

We'll share the details in the engineering channel for everyone's awareness.
我们会在工程频道里发详细信息，让大家都知道。

At this point, none of the components are ready.
目前还没有一个组件准备好。

Let's use the web app as an example.
我们以 Web 应用为例。
```

## 10. 字幕里怎么认

1. **冠词常被吞掉或识别成 `uh`。** 读字幕时，`a / the` 缺了不影响理解，直接跳过。
2. **复数 `-s` 也常常听不出来。** 看前面的数字或 `these / many / a few` 判断单复数。
3. **数字最容易识别错。** 发现数字很奇怪（比如 `three 5.23 point`），以共享屏幕上的 Jira 或文档为准。
4. **非母语说法能看懂就行，不要模仿：**

| 字幕里可能看到 | 标准说法 |
| --- | --- |
| `four subtask` | `four subtasks` |
| `in next sprint` | `in the next sprint` / `next sprint` |
| `it's like a application` | `it's like an application` |
| `a lot of feedbacks` | `a lot of feedback` |
| `there's no much updates` | `there aren't many updates` / `there's not much to update` |
| `for team members awareness` | `for the team members' awareness` |
| `the next one is a backward compatibility` | `the next one is backward compatibility` |

## 11. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `I fixed bug.` | `I fixed the bug.` / `a bug` | 单数可数名词要有限定词 |
| `Thanks for your feedbacks.` | `Thanks for your feedback.` | `feedback` 不可数 |
| `We made a big progress.` | `We made big progress.` / `a lot of progress` | `progress` 不可数 |
| `Most of stories are done.` | `Most of the stories are done.` | `most of` 后要有 `the` |
| `Each stories has subtasks.` | `Each story has subtasks.` | `each` 接单数 |
| `a API` / `a SSR issue` | `an API` / `an SSR issue` | 看发音，不看字母 |
| `I have much questions.` | `I have a lot of questions.` / `many questions` | `much` 接不可数 |
| `a two-days task` | `a two-day task` | 作定语的名词用单数 |
| `the Jira` / `the GitHub` | `Jira` / `GitHub` | 工具名不加 the |

## 12. 你可以直接用的句子

```text
I have a quick question about the ticket.
关于这个工单我有个小问题。

Do you have any questions or comments?
大家有什么问题或意见吗？

We made some progress on the login page.
登录页面有一些进展。

Most of the tasks are on track.
大部分任务都在按计划进行。

I need a few more days to finish it.
我还需要几天才能做完。

Thanks for the feedback. I'll update the PR.
谢谢反馈，我会更新 PR。

No updates from my side today.
我今天这边没有更新。

It's a two-day task, so I'll finish it by Friday.
这是个两天的任务，所以我周五前能做完。
```

## 13. 练习

**A. 改正名词错误（单复数、可数不可数）**

1. We received a lot of feedbacks from the users.
2. There are three PR waiting for review.
3. I need some informations about the API.
4. We had a good progress this sprint.

**B. 填入 a / an / the，不需要的填 —**

1. I have ___ quick update.
2. It's ___ API issue, not ___ UI issue.
3. Let's move to ___ next topic.
4. I'll check it on ___ Jira.
5. We'll finish it in ___ next sprint.

**C. 选择正确的词**

1. Do you have (some / any) questions?
2. There isn't (many / much) time left.
3. (Each / All) story needs a reviewer.
4. (Most of / Most of the) tickets are closed.
5. I need (a few / a little) more days.

**D. 用英文写出读法**

1. Sprint 15　2. version 2.1　3. 75%　4. May 3rd

<details>
<summary>答案</summary>

**A.**
1. We received a lot of feedback from the users.
2. There are three PRs waiting for review.
3. I need some information about the API.
4. We made good progress this sprint.（`progress` 不可数，不加 a；搭配常用 `make`）

**B.** 1 a　2 an, a　3 the　4 —　5 the

**C.** 1 any　2 much　3 Each　4 Most of the　5 a few

**D.** 1 Sprint fifteen　2 version two point one　3 seventy-five percent　4 May third

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [01-foundations/02 名词、冠词和限定词](../../01-foundations/02-nouns-articles-determiners.zh.md)
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 4 章「名词」、第 5 章「冠词」、第 15 章「数词」
- [数字、年份、月份和星期](../../numbers-years-months-weekdays.zh.md)（继续保留，作为数字读法的参考）
