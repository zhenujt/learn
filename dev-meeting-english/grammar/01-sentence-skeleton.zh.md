# G01 句子骨架：词性、句子成分与五大句型

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 阶段：小学 → 初中 ｜ 会议数据：真实会议中约 **20%** 的发言超过 35 个词；一条长字幕通常包含 2–4 个小句，每个小句都有自己的主语和谓语
>
> [English version](01-sentence-skeleton.md) · [上一课：语法目录](README.zh.md) · [下一课：G02 名词、冠词与数量表达](02-nouns-articles-quantifiers.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

会议字幕最难的不是生词，而是**一整行字幕又长又乱**：有口头禅、有重复、有自我修正，还有好几件事连在一起说。比如这一条（真实字幕改编）：

> So, for the documentation site, so we have completed all the comparison and the conclusion part, and Leo has shared the Confluence page link to the team, so you can review it.

如果从第一个词开始逐词翻译，读到一半就乱了。正确的做法是**先找骨架**——谁 + 做了什么：

```text
We have completed the comparison.
我们已经完成了对比。

Leo has shared the link.
Leo 已经分享了链接。

You can review it.
你们可以看一下。
```

骨架找到了，其他部分（`for the documentation site`、`to the team`）都只是补充信息。**这是整个课程最核心的技能**，后面每一课都会用到。

**学完这一课，你应该能：**

1. 认出 10 大词性，知道哪些词能当主语、哪些词能当谓语。
2. 说出 7 种句子成分（主、谓、宾、表、宾补、定、状），知道每种回答什么问题。
3. 用五大基本句型造出正确的短句，做站会汇报，并让主语和谓语的单复数一致。
4. 用「拆句四步法」，在几秒内找出一条长字幕的主语和谓语动词。

## 1. 先建立一个正确的认识：英语句子必须有"主语 + 谓语动词"

中文可以没有主语，也可以没有动词：

- 「做完了。」——谁做完了？中文不用说。
- 「我今天很忙。」——没有动词"是"。

英语不行。**一个完整的英语句子，必须有一个主语，和一个能变时态的动词（谓语动词）。**

```text
It's done.
做完了。（必须补出主语 it）

I'm busy today.
我今天很忙。（必须补出动词 am）

The build failed again.
构建又失败了。
```

记住这条规则有两个好处：

- **听/读的时候：** 只要找到"主语 + 谓语动词"，就抓住了这句话的意思。
- **说的时候：** 中国同学最常见的错误就是漏主语或漏动词，比如 `Is done.`、`I busy.`。

## 2. 词性：每个词在句子里能干什么

词性决定了一个词**能放在句子的哪个位置**。下面是传统语法的 10 大词性：

| 词性 | 作用 | 会议例子 | 频率 |
| --- | --- | --- | --- |
| 名词 n. | 人、事物、概念的名字 | `ticket`、`build`、`team`、`feedback` | 🔴 |
| 代词 pron. | 代替名词 | `I`、`it`、`this`、`they`、`one` | 🔴 |
| 动词 v. | 动作或状态 | `fix`、`check`、`is`、`have`、`need` | 🔴 |
| 形容词 adj. | 描述名词 | `ready`、`blocked`、`new`、`critical` | 🔴 |
| 副词 adv. | 描述动词、形容词或整句 | `already`、`still`、`just`、`actually` | 🔴 |
| 介词 prep. | 表示关系，后接名词 | `for`、`to`、`on`、`with`（见 [G16](16-prepositions.zh.md)） | 🔴 |
| 连词 conj. | 连接词、短语、句子 | `and`、`but`、`so`、`because`、`if` | 🔴 |
| 冠词 art. | 放在名词前 | `a`、`an`、`the`（见 [G02](02-nouns-articles-quantifiers.zh.md)） | 🔴 |
| 数词 num. | 数量和顺序 | `two`、`first`、`half` | 🟡 |
| 感叹词 interj. | 表达情绪或反应 | `oh`、`wow`、`oops` | 🟡 |

### 2.1 和"找骨架"关系最大的三条规则

1. **只有动词能当谓语。** 找谓语，就是在句子里找动词。
2. **主语和宾语一般是名词或代词**（也可以是 `-ing`、从句，后面会学）。
3. **形容词不能单独当谓语。** `ready`、`busy`、`blocked` 前面必须有 `be`：`I'm ready.`

### 2.2 一个词可以有好几个词性 🔴

软件团队的很多词既是名词又是动词。**看位置判断：** 跟在 `a / the / any / my` 后面是名词；跟在主语或 `will / can / to` 后面是动词。

```text
I will update the ticket today.
我今天会更新工单。（update：动词）

Do you have any updates?
你有什么进展吗？（updates：名词）

Can you review my PR?
你能评审一下我的 PR 吗？（review：动词）

The review is still in progress.
评审还在进行中。（review：名词）

We need to test it on Android.
我们需要在 Android 上测一下。（test：动词）

All the tests passed.
所有测试都通过了。（tests：名词）
```

同类的词还有：`build`、`release`、`fix`、`plan`、`change`、`check`、`demo`、`deploy`（只作动词，名词是 `deployment`）。

## 3. 句子成分：每个位置回答一个问题

词性说的是"这个词是什么"，句子成分说的是"这个词在这句话里干什么"。

| 成分 | 回答什么问题 | 例句（加粗是该成分） | 频率 |
| --- | --- | --- | --- |
| 主语 S | 谁？什么东西？ | **The build** failed. | 🔴 |
| 谓语 V | 做了什么？是什么状态？ | The build **failed**. | 🔴 |
| 宾语 O | 动作落在谁身上？ | I fixed **the bug**. | 🔴 |
| 表语 C | 主语是什么样？ | The PR is **ready**. | 🔴 |
| 宾语补足语 OC | 宾语变成/处于什么样？ | Let's keep it **simple**. | 🟡 |
| 定语 | 哪一个？什么样的？（修饰名词） | the **login** page / the bug **in production** | 🔴 |
| 状语 | 什么时候、在哪、为什么、怎么样？（修饰动词或整句） | I fixed it **yesterday**. | 🔴 |

**主、谓、宾、表、宾补 = 骨架；定语、状语 = 装修。** 骨架决定意思，装修只是补充细节。

### 3.1 谓语可以是一组词 🔴

谓语动词常常不止一个词，而是"助动词 / 情态动词 + 主要动词"：

```text
We have completed the comparison.
我们已经完成了对比。（谓语：have completed）

The fix will be deployed tomorrow.
修复明天会上线。（谓语：will be deployed）

I'm still working on the login page.
我还在做登录页面。（谓语：am working on）

You can review it later.
你可以晚点再看。（谓语：can review）
```

读字幕时，可以把 `need to / want to / have to / going to + 动词` 当成一个整体来理解：`We need to update the doc.` → "我们需要更新文档"。

### 3.2 表语和系动词 🔴

`be` 后面的部分叫**表语**，说明主语"是什么、怎么样"。除了 `be`，还有一些动词也能这样用，叫**系动词**：

```text
That sounds good.
听起来不错。

It looks fine to me.
我看没问题。

The pipeline seems stable now.
流水线现在看起来稳定了。

The page gets slow with large data.
数据量大的时候页面会变慢。
```

常见系动词：`be`、`look`、`sound`、`seem`、`feel`、`get`、`become`、`stay`、`keep`。

### 3.3 定语：让名词变长 🔴

定语修饰名词。**放在名词前面**的通常是形容词或名词；**放在名词后面**的通常是介词短语、分词或从句。

```text
the new login page
新的登录页面（前置定语：new、login）

the bug in production
生产环境里的那个 Bug（后置定语：介词短语）

the PR created yesterday
昨天创建的 PR（后置定语：过去分词）

the story that we discussed last week
我们上周讨论的那个 Story（后置定语：从句，见 G19）
```

**规律：** 不管名词前后挂了多少东西，**核心名词只有一个**。`the list of open tickets for the web part` 的核心是 `list`。

### 3.4 状语：给句子加时间、地点、原因 🔴

状语可以是副词、介词短语或从句，位置比较灵活：

```text
Yesterday, I fixed the bug in the web part.
昨天我修了 Web 部分的 Bug。（时间状语 + 地点状语）

I couldn't join because I was sick.
我没能参加，因为我病了。（原因状语从句）

We use this script to clean up old builds.
我们用这个脚本来清理旧的构建。（目的状语）
```

## 4. 五大基本句型

所有英语句子，去掉装修以后，都能归到下面五种骨架之一。

| 句型 | 公式 | 例子 | 频率 |
| --- | --- | --- | --- |
| ① 主谓 | S + V | `It works.` | 🔴 |
| ② 主系表 | S + V + C | `The PR is ready.` | 🔴 |
| ③ 主谓宾 | S + V + O | `I fixed the bug.` | 🔴 |
| ④ 主谓双宾 | S + V + 人 + 物 | `I'll send you the link.` | 🟡 |
| ⑤ 主谓宾补 | S + V + O + OC | `Let's keep it simple.` | 🟡（但 `let me know` 是 🔴） |

### 4.1 ① S + V：动作不需要对象 🔴

这类动词叫**不及物动词**，后面不接宾语，但可以接状语。

```text
It works.
可以用了。

The build failed.
构建失败了。

I agree.
我同意。

Something happened during the deployment.
部署的时候出了点问题。
```

### 4.2 ② S + V + C：说状态，站会最常用 🔴

汇报进度时，大量句子都是 "主语 + be + 状态"。

```text
The story is done.
这个 Story 做完了。

I'm blocked by the access issue.
我被权限问题卡住了。

Most tasks are on track.
大部分任务都按计划进行。

He is out of office today.
他今天休假。
```

### 4.3 ③ S + V + O：做了什么事 🔴

最常见的句型。动词后面直接接宾语，这类动词叫**及物动词**。

```text
I fixed the bug.
我修好了这个 Bug。

We need more time.
我们需要更多时间。

Can you check the logs?
你能看一下日志吗？

I think we should skip this one.
我觉得这个可以先跳过。（宾语是一个从句，见 G18）
```

> ⚠️ 及物动词后面**直接**接宾语，不加介词：`discuss the plan`、`mention it`、`contact the team`。不及物动词要先加介词：`reply to the email`、`wait for the review`、`listen to me`。

### 4.4 ④ S + V + 人 + 物：给某人某物 🟡

常见动词：`send`、`give`、`show`、`tell`、`ask`、`share`（`share` 一般用 `share it with you`）。

```text
I'll send you the link.
我会把链接发给你。

Can you give me a minute?
能给我一分钟吗？

Let me show you the demo.
我给你们演示一下。
```

也可以把"人"移到后面，加 `to` 或 `for`：`I'll send the link to you.`

> ⚠️ `explain` 不能接双宾语：❌ `explain you the issue`，✅ `explain the issue to you`。

### 4.5 ⑤ S + V + O + 补足语：让宾语怎么样 🟡

宾语后面再加一个成分，说明宾语"变成什么样"或"去做什么"。

```text
Let's keep it simple.
我们就简单点。（keep + 宾语 + 形容词）

Please keep me posted.
有进展请随时告诉我。

Let me know if you have any questions.
有问题请告诉我。（let + 宾语 + 动词原形）

Can you help me check the config?
你能帮我看一下配置吗？

We need someone to review this PR.
我们需要有人来评审这个 PR。（need + 宾语 + to do）
```

另外还有一个特殊句型 `There is / There are …`（"有……"），会议里每万词出现约 13 次，在 [G04](04-be-and-there-be.zh.md) 专门讲。

## 5. 主谓一致：主语和谓语要"对得上" 🔴

主语是单数，谓语就用单数形式（`is`、`was`、`has`、`does`、动词加 `-s`）；主语是复数，就用复数形式（`are`、`were`、`have`、`do`、动词原形）。中文动词没有这种变化，所以中国同学很容易忘。

**关键：** 先找到主语的**核心名词**（第 3.3 节），再决定单复数。不要被离谓语最近的那个名词骗了。

| 主语 | 单数还是复数 | 例子 |
| --- | --- | --- |
| `one of the + 复数名词` | 单数（核心是 one） | `One of the tests is failing.` |
| `the list / the status / the number of + 复数` | 单数（核心是 list / status / number） | `The status of the tickets is outdated.` |
| `most of / some of / all of / a lot of + 复数` | 复数（跟着 of 后面的名词走） | `Most of the stories are done.` |
| `most of / some of / all of + 不可数` | 单数 | `Most of the work is done.` |
| `each / every + 单数名词`、`each of them` | 单数 | `Each story has two subtasks.` |
| `everyone / anyone / someone / nobody` | 单数 | `Everyone has access now.` |
| `the team / the company`（集体名词） | 美式一般用单数（英式也可复数） | `The team is busy this sprint.` |
| `A and B` | 复数 | `Mia and Ken are on it.` |
| 动名词 / `to do` / 从句 | 单数 | `Testing on iOS takes time.` |

```text
Most of the stories are completed.
大部分 Story 都完成了。

One of the tests is still failing.
其中一个测试还在失败。

The team is working on the release.
团队正在准备发布。

Everyone has the link now.
现在大家都有链接了。

Does anyone have any questions?
有人有问题吗？（does 已经是单数，后面用原形 have）

Each of the components has its own package.
每个组件都有自己的包。
```

> ⚠️ 字幕里经常出现 `Does anyone has questions?`、`the components was imported`、`he don't know` 这类不一致的说法。能看懂就行，自己说时注意。`There is / There are` 的单复数看后面的名词，见 [G04](04-be-and-there-be.zh.md)。

## 6. 核心技能：拆句四步法 ⭐

真实字幕的问题是：**好几个句子挤在一行**，中间夹着口头禅和重复。用下面四步，按顺序做：

| 步骤 | 做什么 | 看什么信号 |
| --- | --- | --- |
| ① 切 | 把一行切成几个小句 | 逗号、句号，以及 `so`、`and`、`but`、`because`、`if`、`when`、`which` |
| ② 删 | 先划掉不影响意思的部分 | `yeah`、`okay`、`so`、`I mean`、`you know`、`like`、`actually`、`basically`，重复的词，`For X,` 话题标签 |
| ③ 找谓语 | 在每个小句里找"真正的谓语动词" | 见下表 |
| ④ 找主语、补全 | 谓语左边的名词或代词就是主语；再看右边有没有宾语或表语 | 核心名词、`I/we/you/it/they` |

### 6.1 第 ③ 步：真谓语和"假动词"

一个小句里可能出现好几个动词形式，但**只有一个是这个小句的谓语**。

| 形式 | 是不是谓语 | 例子 |
| --- | --- | --- |
| 主语后面的 `am/is/are/was/were/has/have/had/will/can/should/did…` + 动词 | ✅ 是 | `we have completed` |
| 紧跟主语、带 `-s` 或 `-ed` 的动词 | ✅ 是 | `the build failed`、`it works` |
| `to` + 动词原形 | ❌ 不是（不定式，见 G13） | `need to update`：谓语是 `need` |
| 前面没有 `be` 的 `-ing` | ❌ 不是（动名词或分词） | `by using a smaller VM` |
| 名词后面、前面没有 `be/have` 的 `-ed` | ❌ 不是（多半是定语） | `the PR created yesterday` |
| `which / that / who / if / when / because` 后面的动词 | ⚠️ 是从句自己的谓语 | `the story which we discussed` |

**技巧：** 数一数一行里有几个真谓语，就知道它有几个小句。

### 6.2 第 ④ 步：主语可能很长，找核心名词

主语常常是一个很长的名词短语。找到谓语以后，往左看，**找到第一个"不是修饰语"的名词**：

```text
The list of open tickets for the web part is quite long.
Web 部分未关闭工单的清单很长。（主语核心：list；谓语：is）

Most of the content will be kept in markdown files.
大部分内容会保留在 Markdown 文件里。（主语核心：content）

The integration into the new pipeline is something we need to prioritize.
接入新流水线这件事，是我们需要优先处理的。（主语核心：integration；表语：something）
```

### 6.3 完整演练一：三个小句连在一起

> 字幕：So, for the documentation site, so we have completed all the comparison and the conclusion part, and Leo has shared the Confluence page link to the team, so you can review it.

1. **切：** `for the documentation site` ｜ `we have completed …` ｜ `Leo has shared …` ｜ `you can review it`
2. **删：** 两个 `so`；`for the documentation site,` 是话题标签，先放一边。
3. **找谓语：** `have completed`、`has shared`、`can review`——三个真谓语，所以有三个小句。
4. **找主语：** `we`、`Leo`、`you`。宾语：`the comparison and the conclusion part`、`the link`、`it`。

意思：「文档站点这块，我们已经完成了对比和结论部分，Leo 也把 Confluence 页面链接发给了团队，大家可以去看。」

### 6.4 完整演练二：有"框架"和条件

> 字幕：Yeah, I think if we are following the previous website workflow, I think most of the content will be kept in markdown files, so designers and other non-technical people can go ahead and update the markdown files in the repo.

1. **切：** `I think` ｜ `if we are following …` ｜ `most of the content will be kept …` ｜ `designers … can go ahead and update …`
2. **删：** `Yeah`；`I think` 出现了两次，它只是"我觉得"这个**框架**，保留一次即可。
3. **找谓语：** `are following`（在 `if` 后面，属于条件从句）、`will be kept`、`can go ahead and update`。
4. **主句骨架：**

```text
Most of the content will be kept in markdown files.
大部分内容会保留在 Markdown 文件里。

Designers can update the files in the repo.
设计师可以直接在仓库里更新这些文件。
```

`if we are following the previous website workflow` 是条件（"如果我们沿用之前网站的流程"），属于状语。

### 6.5 完整演练三：字幕漏了词

非母语同事说话时常常漏掉 `be` 或主语，语音识别也会吞字。**找不到谓语时，先试着补一个 `is/are` 或 `I/we`。**

> 字幕：Yeah, I saw Ben was out of office today and when he back tomorrow, I will follow up with him.

1. **切：** `I saw` ｜ `Ben was out of office today` ｜ `when he back tomorrow` ｜ `I will follow up with him`
2. **找谓语：** `saw`、`was`、`will follow up`。`when he back` 里没有动词 → 补成 `when he is back`。
3. **主句骨架：** `I will follow up with him.`

```text
I saw that Ben was out of office today. When he is back tomorrow, I will follow up with him.
我看到 Ben 今天休假了。他明天回来后，我会跟进。
```

## 7. 真实会议例句（改编）

下面的句子都来自真实会议字幕，已修正识别错误并做了匿名处理。先读句子，再看表格里的骨架。

```text
Ken is working on the service account creation.
Ken 正在创建服务账号。

The research I'm referring to is about the approval process.
我说的那个调研，是关于审批流程的。

Mia has shared the detailed information in the Teams channel.
Mia 已经在 Teams 频道里分享了详细信息。

The pipeline needs to be set up properly before we start the actual work.
在正式开工之前，流水线需要先配置好。

So once it's done, I'll share it with you.
等做完了，我会分享给你们。

All of them are blocked by the approval.
它们全都被审批卡住了。
```

| 句子 | 主语（核心） | 谓语 | 宾语 / 表语 | 句型 |
| --- | --- | --- | --- | --- |
| 1 | Ken | is working on | the service account creation | ③ |
| 2 | the research | is | about the approval process | ② |
| 3 | Mia | has shared | the detailed information | ③ |
| 4 | the pipeline | needs to be set up | — | ① |
| 5 | I | will share | it | ③ |
| 6 | all (of them) | are | blocked | ② |

第 2 句的 `I'm referring to` 是修饰 `research` 的定语从句；第 4 句的 `before we start …` 和第 5 句的 `once it's done` 都是时间状语从句。

## 8. 字幕里怎么认

1. **先找动词，再找主语。** 动词是骨架的"中心"，主语就在它左边。
2. **`I think / I guess / I mean / you know` 是框架，不是重点。** 真正的信息在后面。
3. **`For X,` / `Regarding X,` 是话题标签。** 先当成小标题，见 [G16](16-prepositions.zh.md)。
4. **重复和自我修正只看最后一次。** `we, we, we need to` → `we need to`；`it should, it could be` → 以后说的为准。
5. **找不到谓语，就补一个。** 非母语口语和语音识别常常吞掉 `is/are/am` 和主语：

| 字幕里可能看到 | 标准说法 | 缺了什么 |
| --- | --- | --- |
| `When you ready for test, …` | `When you are ready for testing, …` | `be` |
| `when he back tomorrow` | `when he is back tomorrow` | `be` |
| `Also help me with some Figma files.` | `He also helped me with some Figma files.` | 主语 |
| `Mia and Ken, they will both work on it.` | `Mia and Ken will both work on it.` | 多了一个主语 `they`（口语常见，能懂就行） |
| `there is an issue has raised` | `an issue has been raised` | 两个谓语打架 |
| `I think the scope is not contain the external team.` | `I think the scope doesn't include the external team.` | `is` 和 `contain` 重复当谓语 |

## 9. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `Is done.` | `It's done.` | 英语必须有主语 |
| `I busy today.` | `I'm busy today.` | 形容词前要有 `be` |
| `I am agree.` | `I agree.` | `agree` 是动词，不需要 `am` |
| `I'm work on the login page.` | `I'm working on the login page.` | `be` 后面要用 `-ing`，或者去掉 `be`：`I work on …` |
| `The PR already merge.` | `The PR has already been merged.` | 句子缺少完整谓语 |
| `Recently is very busy.` | `I've been very busy recently.` | 补出主语，时态也要对 |
| `We need discuss about the plan.` | `We need to discuss the plan.` | `need to + 动词`；`discuss` 后直接接宾语 |
| `Can you explain me the issue?` | `Can you explain the issue to me?` | `explain` 不能接双宾语 |
| `One of the tests are failing.` | `One of the tests is failing.` | 核心是 `one`，用单数 |
| `Does anyone has questions?` | `Does anyone have questions?` | `does` 后面用动词原形 |
| `I finished the API, I will start the UI.` | `I finished the API, and I will start the UI.` | 两个完整句子之间要用连词或句号 |

## 10. 你可以直接用的句子

这些都是最简单的骨架句，站会时直接用：

```text
I finished the login page yesterday.
我昨天完成了登录页面。

I'm still working on the API changes.
我还在做 API 的改动。

The PR is ready for review.
PR 可以评审了。

I'm blocked by the access issue.
我被权限问题卡住了。

I'll send you the link after the meeting.
会后我把链接发给你。

It works on my machine.
在我电脑上是好的。

Let me know if you have any questions.
有问题请告诉我。

That's all for my part.
我这部分就这些。
```

## 11. 练习

**A. 找骨架：写出每个小句的主语和谓语动词**

1. Yeah, so for the native part, Kevin has finished the interface integration.
2. I think the list of open bugs for this sprint is still quite long.
3. Okay, so the pipeline we set up last week failed again this morning.
4. And for the testing, Emma is checking it, and she will update the ticket today.
5. So the main reason is the new version of the library, and we need to upgrade it.

**B. 判断句型（①–⑤）**

1. It works now.
2. Can you send me the document?
3. The build is green.
4. We need more test cases.
5. Please keep me posted.

**C. 改错**

1. Is blocked by the design team.
2. I very busy this week.
3. The deployment already finish.
4. Can you explain me the error?
5. Most of the tickets is closed.
6. Everyone have the access now.

<details>
<summary>答案</summary>

**A.**
1. 主语 `Kevin`，谓语 `has finished`（`for the native part` 是话题标签）
2. 框架 `I think`；主语核心 `the list`，谓语 `is`
3. 主语核心 `the pipeline`，谓语 `failed`（`we set up last week` 是修饰 pipeline 的定语从句）
4. 小句一：主语 `Emma`，谓语 `is checking`；小句二：主语 `she`，谓语 `will update`
5. 小句一：主语 `the main reason`，谓语 `is`；小句二：主语 `we`，谓语 `need to upgrade`

**B.** 1 ①　2 ④　3 ②　4 ③　5 ⑤

**C.**
1. It's blocked by the design team.（或 I'm blocked by …）
2. I'm very busy this week.
3. The deployment has already finished.（或 is already finished）
4. Can you explain the error to me?
5. Most of the tickets are closed.
6. Everyone has access now.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [01-foundations/01 词性与句子成分](../../01-foundations/01-word-classes-and-sentence-parts.zh.md)
- [01-foundations/03 五大基本句型](../../01-foundations/03-five-basic-sentence-patterns.zh.md)
- [英语句子成分详解](../../zero-to-work-english/04-工作沟通B1/english-grammar-sentence-elements.zh.md)
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 1–3 章「词性」「句子成分」「五大基本句型」
