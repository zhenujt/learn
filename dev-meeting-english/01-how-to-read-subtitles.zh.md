# 怎么读会议字幕：四步读法与过滤噪音

<!-- sentence-audio: fenced-only -->

> [English version](01-how-to-read-subtitles.md) · [上一篇：学习计划](00-study-plan.zh.md) · [返回课程首页](README.zh.md) · [语法目录](grammar/README.zh.md)

## 1. 为什么字幕比课文难

课本里的句子是写出来的；会议字幕是**说出来再被机器转成文字**的。它有五种"噪音"：

| 噪音 | 例子 | 怎么处理 |
| --- | --- | --- |
| 填充词 | `okay, yeah, so, just, I mean, you know, like` | 先删掉再读（见第 3 节） |
| 重复和改口 | `we can, we can have a …`、`for the, for the native part` | 只看最后一次说完整的 |
| 一逗到底的长句 | `For web part, currently we are in the third week, and for the …, most of the stories are just completed and …` | 按 `and`、`so`、`but` 和逗号切开 |
| 非母语语法 | `regarding to the`、`discuss about`、缺冠词、缺复数 | 能看懂即可，自己说标准说法 |
| 语音识别错误 | `Face` 实际是 `phase`，`main brands` 实际是 `main branch` | 按读音和上下文猜（见第 4 节） |

所以读字幕的关键**不是认识每个词**，而是**快速找到句子的骨架**。这正是语法的用处。

## 2. 四步读法

每读一段字幕，按这四步走：

### 第一步：找话题标签

先看句子开头有没有"话题标签"。它告诉你**现在在说哪一块**：

| 话题标签 | 意思 | 详见 |
| --- | --- | --- |
| `For the web part, …` | 至于 Web 部分 | [G16 介词](grammar/16-prepositions.zh.md) |
| `Regarding the release, …` / `As for …` | 关于发布 / 至于 | [G16](grammar/16-prepositions.zh.md) |
| `So, …` / `Okay, so …` | 那么（开始一个新话题） | [G17 连词](grammar/17-conjunctions-and-linking.zh.md) |
| `And the next one is …` | 下一个是…… | [M02 周会](meetings/02-weekly-sprint-sync.zh.md) |

### 第二步：找主干（主语 + 谓语）

去掉话题标签和填充词后，找**谁 + 做了什么 / 是什么**：

```text
For the native part, most tasks are already done.
至于 Native 部分，大部分任务已经完成了。（主干：most tasks are done）

Currently Ken and Priya are working on this story.
目前 Ken 和 Priya 在做这个 Story。（主干：Ken and Priya are working on）
```

找主语和谓语的方法见 [G01 句子骨架](grammar/01-sentence-skeleton.zh.md)。

### 第三步：判断状态（时态和语态）

站会和周会的核心信息就是**状态**。看谓语的形式就能判断：

| 谓语形式 | 状态 | 例子 |
| --- | --- | --- |
| `is / are + -ing` | 正在做 | `Alex is working on it.` |
| `have / has + 过去分词` | 已经做完（结果还在） | `We have finished the integration.` |
| `过去式` | 过去某时做完 | `I merged it yesterday.` |
| `is / are + 过去分词` | 被动状态 | `The PR is merged.` / `It's blocked by the API.` |
| `will / be going to / gonna` | 打算做 | `We will continue in Sprint 2.` |
| `need to / have to` | 必须做 | `We need to get approval first.` |

详见 [G07](grammar/07-present-simple-and-continuous.zh.md)、[G08](grammar/08-past-simple-and-present-perfect.zh.md)、[G09](grammar/09-future-will-going-to.zh.md)、[G12](grammar/12-passive-voice.zh.md)。

### 第四步：抓行动项

最后找**和你有关、需要有人去做的事**：

```text
Can you take a look at the PR?
你能看一下这个 PR 吗？

We need to align with the design team.
我们需要和设计团队对齐。

I will follow up with Mia after the meeting.
会后我会跟 Mia 跟进。
```

信号词：`can you`、`could you`、`please`、`we need to`、`I will`、`let's`、`action item`、`follow up`。

## 3. 过滤填充词：哪些可以直接跳过

下面这些词在字幕里非常多（`okay / yeah` 每万词 330 次），大多数时候**不影响意思**，读的时候可以先删掉：

| 填充词 | 通常的作用 | 什么时候**不能**跳过 |
| --- | --- | --- |
| `okay`、`ok`、`yeah`、`yep` | 回应、过渡 | 单独回答问题时：`Yeah.` = 是的 |
| `so` | 开启话题 | 表示"所以"时：`It failed, so we rolled it back.` |
| `just` | 弱化语气 | 表示"刚刚"时：`I just merged it.` |
| `I mean` | 换个说法 | 后面是对前面的修正 |
| `you know`、`like`、`kind of` | 思考、缓冲 | `kind of` 表示"有点"时 |
| `actually`、`basically` | 强调、总结 | `actually` 表示"其实（和你想的不一样）"时 |
| `right?` | 寻求确认 | 对方在等你回答时 |

**练习：** 删掉填充词，看看还剩什么。

```text
Okay, yeah, so I think, I mean, we can just leave it for now.
好的，我觉得我们可以先放一放。（剩下：we can leave it for now）
```

更多口语现象见 [G23 口语语法](grammar/23-spoken-grammar.zh.md)。

## 4. 语音识别错误：怎么猜出原词

字幕是机器听写的，专业词和人名最容易出错。**方法：读出来，按发音想一个最接近的工作词汇，再用上下文验证。**

下面是你们会议字幕里真实出现过的识别错误：

| 字幕里写的 | 实际说的 | 线索 |
| --- | --- | --- |
| `almost every story is in dev. Face.` | `phase` | `dev phase` 是固定说法 |
| `this conference document` | `Confluence document` | 会议里常提到 Confluence 文档 |
| `merged this to our main brands` | `main branch` | `merge … to main branch` |
| `the ready for relief phase` | `ready for release` | 和 `ready for QA` 是一组状态 |
| `Browder version support` | `browser version` | 上下文在说浏览器兼容 |
| `why port` / `web post` | `web part` | 和 `native part` 对应 |
| `native port` | `native part` | 同上 |
| `post-describe discussion` | `post-scrum discussion` | Scrum 会后的讨论环节 |
| `mod repo` | `monorepo` | 仓库结构 |
| `GFrog artifactor` | `JFrog Artifactory` | 包管理工具 |

**规律：**

- 发音相近的词互相替换：`part ↔ port / post`，`phase ↔ face`，`branch ↔ brands`。
- 专有名词（产品、工具、人名）几乎一定会错，**不要纠结**，按上下文理解。
- 完全读不通的一小段，直接跳过，看下一句是否补充了信息。

## 5. 非母语说法：看懂，但不要学

会议里有中国、印度、英国、美国等地的同事，字幕里会有不标准的说法。下面这些很常见：

| 字幕里可能看到 | 标准说法 | 意思 |
| --- | --- | --- |
| `regarding to the timeline` | `regarding the timeline` | 关于时间表 |
| `discuss about the issue` | `discuss the issue` | 讨论这个问题 |
| `thanks for your share` | `thanks for sharing` | 谢谢分享 |
| `most of story are completed` | `most of the stories are completed` | 大多数 Story 都完成了 |
| `he return next week` | `he returns next week` / `he'll be back next week` | 他下周回来 |
| `we already merged it yesterday` | `we merged it yesterday` | 我们昨天合并了 |

## 6. 三个完整示例

### 示例一：站会的一句话

字幕原文：

> Yeah, so for my side, I'm, I'm still working on the, the CI pipeline, and I think it should be done by tomorrow.

四步处理：

1. **话题：** `for my side`（我这边）
2. **主干：** `I'm still working on the CI pipeline` + `it should be done by tomorrow`
3. **状态：** 正在做（`am working on`）；预计明天完成（`should be done`）
4. **行动项：** 无

```text
I'm still working on the CI pipeline, and it should be done by tomorrow.
我还在做 CI 流水线，应该明天能完成。
```

### 示例二：周会的长句

字幕原文：

> For web part, currently we are in this one, the third week, and for the technical foundation feature, most of the story are just completed and the remaining items are just on track.

1. **切开：** 按 `and` 和逗号切成三段：`currently we are in the third week` / `for the technical foundation feature, most of the stories are completed` / `the remaining items are on track`
2. **话题：** `For web part`、`for the technical foundation feature`
3. **状态：** 第三周；大部分完成；剩下的按计划进行
4. **非母语：** `most of the story are` → `most of the stories are`

```text
For the web part, we are in the third week. Most of the stories are completed, and the remaining items are on track.
Web 部分，我们现在在第三周。大部分 Story 已经完成，剩下的事项都在按计划推进。
```

### 示例三：有行动项的句子

字幕原文：

> Okay, so, um, Ken, can you, can you take a look at the comments? And once he is back, we can align with him and proceed.

1. **主干：** `Ken, can you take a look at the comments?` + `once he is back, we can align with him and proceed`
2. **语法：** `once` 引导时间状语从句，从句用一般现在时表示将来（[G20](grammar/20-adverbial-clauses.zh.md)）
3. **行动项：** Ken 要看评论；等他回来后对齐

```text
Ken, can you take a look at the comments?
Ken，你能看一下这些评论吗？

Once he is back, we can align with him and move forward.
等他回来，我们和他对齐后再继续。
```

## 7. 会后复盘模板

每次开完会，用下面的格式整理 5–8 行字幕（可以复制到笔记里）：

```markdown
### 2026-XX-XX 站会

| 字幕原文 | 主干 | 用到的语法 | 我的中文理解 | 想学来自己用的句子 |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
```

## 8. 下一步

- 按 [学习计划](00-study-plan.zh.md) 从 [G01 句子骨架](grammar/01-sentence-skeleton.zh.md) 开始。
- 想先试试手，做 [P01 字幕精读](practice/01-subtitle-reading-drills.zh.md) 的第 1–2 练。
