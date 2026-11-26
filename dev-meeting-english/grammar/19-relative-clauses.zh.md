# G19 定语从句：which、who、that、where

<!-- sentence-audio: fenced-only -->

> **频率：🟡 常用** ｜ 阶段：初中 → 高中 ｜ 会议数据：`which` 每万词约 17 次（其中 `, which` 约 7 次），`who` 约 4 次，`where` 约 5 次（都包含疑问句用法），`whose` 0 次
>
> [English version](19-relative-clauses.md) · [上一课：G18 名词性从句](18-noun-clauses.zh.md) · [下一课：G20 状语从句](20-adverbial-clauses.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

字幕里的长句，很多是因为名词后面跟了一大串说明：

```text
I wonder if we can try the GitHub Actions runner, which can run the macOS image.
我在想能不能试一下 GitHub Actions 的执行机，它可以跑 macOS 镜像。

Is there anyone who wants to bring up a topic?
有没有人想提一个话题？
```

`which can run the macOS image` 说明 runner，`who wants to bring up a topic` 说明 anyone。这种**跟在名词后面、说明这个名词的句子**就是定语从句。

**学完这一课，你应该能：**

1. 理解"中文修饰语在前，英文修饰语在后"，读到名词后的 `which / who / that` 不慌。
2. 会用 `who / which / that / where` 说"……的人 / 东西 / 地方"。
3. 分清有逗号和没逗号的区别，认出口语里用来补充评论的 `, which …`。
4. 看懂缩略定语从句 `the ticket assigned to Ken`、`the team working on it`，并在 which / who 处把长字幕断开。

## 1. 先建立一个正确的认识

中文把修饰语放在名词**前面**，英文把长修饰语放在名词**后面**：

```text
the ticket that Ken is working on
Ken 正在做的那个工单

the person who approved the PR
批准这个 PR 的人
```

**公式：** `名词 + 关系词（who / which / that / where）+ 从句`

关系词有两个作用：一是**连接**，二是在从句里**代替前面的名词**。所以从句里不能再出现 `it / them / him`。

```text
This is the bug that blocked the release.
这就是阻塞了发布的那个 Bug。（that = the bug，是从句的主语）
```

## 2. 关系词怎么选

| 关系词 | 指什么 | 例子 | 频率 |
| --- | --- | --- | --- |
| `who` | 人 | `the person who owns this repo` | 🟡 |
| `which` | 物 | `the tool which we use for CI` | 🟡 |
| `that` | 人或物（没有逗号时） | `the PR that I mentioned` | 🟡 |
| `where` | 地点、页面、环境 | `the page where we keep the checklist` | 🟡 |
| `whose` | ……的 | `the team whose PR is blocked` | 🟢 |
| `when` | 时间 | `the week when we release` | 🟢 |

### 2.1 who：说人

```text
Is there anyone who has any concerns?
有没有人有顾虑？

He is the only one who can approve the PR.
他是唯一能批准这个 PR 的人。

We need someone who knows iOS well.
我们需要一个熟悉 iOS 的人。

How can we follow up with the designer who submitted the request?
我们怎么跟进提交这个申请的设计师？
```

### 2.2 which / that：说物

没有逗号时，`which` 和 `that` 基本可以互换。美式口语更爱用 `that`：

```text
These are the packages which we are going to use.
这些是我们将要使用的包。

This is the bug that blocked the release.
这就是阻塞发布的那个 Bug。

Is there any story that is specific to design?
有没有只和设计相关的 Story？

Let's check the tickets that are still in progress.
我们看一下还在进行中的工单。
```

### 2.3 where：说地方、页面、环境

在软件会议里，`where` 不只指物理地点，还常指**页面、看板、环境、文档**：

```text
Page 9 is where we keep the checklist.
第 9 页是我们放检查清单的地方。

I was looking at the Jira board, where we have columns like Ready for QA.
我刚在看 Jira 看板，上面有"待测试"这样的列。

We need an environment where we can test it safely.
我们需要一个可以安全测试的环境。
```

### 2.4 whose 和 when 🟢

会议里几乎没出现，认得即可：

```text
We need to contact the team whose PR is blocked.
我们需要联系 PR 被卡住的那个团队。

Next week is the week when we start the new sprint.
下周就是我们开始新 Sprint 的那周。
```

### 2.5 关系词可以省略：the PR I mentioned

当关系词在从句里当**宾语**时，口语里几乎都省略：

```text
the PR (that) I mentioned yesterday
我昨天提到的那个 PR

the tool (that) we need
我们需要的工具

Is this the version (that) you tested?
这是你测试过的那个版本吗？
```

**读字幕的窍门：** 看到"**名词 + 名词/代词 + 动词**"连在一起，比如 `the PR I mentioned`、`the issue Ken found`，中间就省略了 `that`。

当关系词是从句的**主语**时，**不能省**：

❌ `Is there anyone has any concerns?`
✅ `Is there anyone who has any concerns?`

## 3. 有逗号和没逗号：限定 vs 非限定

**没有逗号（限定性）：** 从句帮你**确定是哪一个**，去掉以后意思不完整。

**有逗号（非限定性）：** 你已经知道是哪一个，从句只是**补充信息**，去掉以后句子照样成立。

```text
The developer who works on SSR is on leave.
做 SSR 的那个开发休假了。（团队里有多个开发，说的是做 SSR 的那个）

Ken, who works on SSR, is on leave.
Ken 休假了，他是做 SSR 的。（Ken 已经确定，从句只是补充）
```

| | 限定（无逗号） | 非限定（有逗号） |
| --- | --- | --- |
| 作用 | 确定是哪一个 | 补充说明 |
| 能用 `that` 吗 | ✅ | ❌ 只能用 `which / who` |
| 能省略关系词吗 | 作宾语时可以 | ❌ 不能 |
| 前面常是 | `the / any / some + 名词` | 人名、产品名、已经说清的东西 |

> ⚠️ 字幕里的逗号是语音识别自动加的，不一定可靠。判断时看意思：前面是**人名或独一无二的东西**，后面的从句一般是补充。

## 4. 口语里松散的 , which …：补充和评论

会议里 `, which` 每万词约 7 次，比限定性的 `which` 还常见。说话人先说完一句话，再用 `which` **补充一个解释或评论**：

### 4.1 which is …：解释前面的名词

```text
There is one key limitation, which is the concurrency limit.
有一个关键限制，就是并发数限制。

At the semantic layer, we have layout, which is geometry, and typography, which is text.
在语义层，我们有 layout，也就是几何尺寸，还有 typography，也就是文字。

The next one is the daily sync, which we proposed recently.
下一个是每日同步会，这是我们最近提议的。
```

### 4.2 which means …：评论整个前一句

这里的 `which` 不是指前面某个名词，而是指**前面整件事**，意思是"这就意味着、也就是说"：

```text
The build failed again, which means we can't release today.
构建又失败了，这意味着我们今天没法发布。

It's self-hosted, which means we don't need to buy any software.
它是自托管的，也就是说我们不需要买任何软件。
```

> 字幕里经常出现 `which is like …` 后面话没说完。说话人在边想边说，读到这里可以停下，等下一句。

## 5. 缩略定语从句：the ticket assigned to Ken

把 `who is / which is / that are` 去掉，只留下分词，就得到更短的说法。会议里很常见：

**被动意义用 -ed（过去分词）：**

```text
the ticket assigned to Ken
分配给 Ken 的工单（= the ticket that is assigned to Ken）

the issue mentioned yesterday
昨天提到的问题

the stories carried over from last sprint
从上个 Sprint 延续过来的 Story
```

**主动、进行意义用 -ing：**

```text
the team working on it
正在做这件事的团队（= the team that is working on it）

anyone using the old version
任何在用旧版本的人
```

**形容词短语也可以直接跟在名词后：**

```text
anything related to SSR
任何和 SSR 有关的东西

the files available in the repo
仓库里现有的文件
```

**读字幕的陷阱：** 名词后面的 `-ed` 不一定是谓语动词。

```text
The PR merged yesterday broke the build.
昨天合并的那个 PR 把构建搞坏了。
```

主语是 `The PR merged yesterday`，谓语是 `broke`。如果把 `merged` 当成谓语，这句就读不通了。更多分词用法见 [G13](13-to-do-doing-done.zh.md)。

## 6. 长字幕怎么在 which / who 处断开

三步法：

1. **找到名词后面的 `which / who / that / where`**，在它前面画一道线。
2. **先读主句**，弄清楚"谁做了什么"。
3. **再把从句当成对前面名词的补充**，一段一段往后读。

例如这句真实字幕（已改编）：

```text
Ken has shared a detailed comparison of the three solutions, and there is a key limitation of the self-hosted solution, which is the concurrency limit.
Ken 分享了三个方案的详细对比，自托管方案有一个关键限制，就是并发数限制。
```

断开后：

```text
Ken has shared a detailed comparison of the three solutions.
Ken 分享了三个方案的详细对比。

There is a key limitation of the self-hosted solution.
自托管方案有一个关键限制。

Which is the concurrency limit.
这个限制就是并发数。
```

**自己说话时也这样用：** 一个长句拆成"主句 + `, which …`"或干脆分成两句，比硬塞进一个复杂的定语从句更清楚。

## 7. 真实会议例句（改编）

以下句子来自真实会议字幕，已修正识别错误并做了匿名处理：

```text
Is there anyone who wants to bring up a topic for the post-stand-up?
有没有人想在站会后讨论一个话题？

We are identifying new backlog items which we need to plan for the next sprint.
我们正在梳理下个 Sprint 需要规划的新待办事项。

One story can have tasks which can be assigned to different teams.
一个 Story 可以有分配给不同团队的任务。

This one is the self-hosted option, which doesn't require any software purchase.
这个是自托管方案，不需要购买任何软件。

He is the one who has been remapping the tokens to the new structure.
他就是一直在把 Token 映射到新结构的那个人。

If there is any story which is specific to design, it goes to the design team.
如果有只和设计相关的 Story，就归设计团队。

Currently the Node.js version is 16, while we proposed 18 or 20.
目前 Node.js 版本是 16，而我们提议用 18 或 20。
```

最后一句的 `while` 不是定语从句，而是"而"（对比），见 [G20](20-adverbial-clauses.zh.md)。原字幕这里用的是 `where`，是非母语误用。

## 8. 字幕里怎么认

1. **名词后面紧跟 `who / which / that / where`**，多半是定语从句；句首的 `Which / Who` 多半是疑问句。
2. **"名词 + 主语 + 动词"** → 省略了 `that`：`the bug we found`。
3. **"名词 + -ed / -ing + 介词"** → 缩略定语从句：`the ticket assigned to Ken`。
4. **`, which means` / `, which is`** → 补充说明，可以先跳过。
5. **非母语说法能看懂就行，不要模仿：**

| 字幕里可能听到 | 标准说法 |
| --- | --- |
| `Is there anyone has any concerns?` | `Is there anyone who has any concerns?` |
| `Who is the admin can give the access?` | `Who is the admin that can give us access?` |
| `the packages which we will use them` | `the packages which we will use` |
| `the version is 16, where we proposed 18` | `the version is 16, while we proposed 18` |
| `Which ticket we will vote?` | `Which ticket will we vote on?`（疑问句，不是定语从句） |

## 9. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `the PR which I created it` | `the PR which I created` | 关系词已经代替了 it |
| `the person which owns the repo` | `the person who owns the repo` | 人用 `who` |
| `Ken, that works on SSR, is on leave.` | `Ken, who works on SSR, is on leave.` | 逗号后不能用 `that` |
| `Is there anyone wants to share?` | `Is there anyone who wants to share?` | 作主语的关系词不能省 |
| `the ticket assigning to Ken` | `the ticket assigned to Ken` | 工单是"被分配"，用 -ed |
| `the page which we can find the checklist` | `the page where we can find the checklist` | 从句完整时用 `where`（= on which） |

## 10. 你可以直接用的句子

```text
Is there anyone who has questions?
有人有问题吗？

This is the PR I mentioned yesterday.
这就是我昨天提到的那个 PR。

I'm looking for the person who owns this pipeline.
我在找负责这条流水线的人。

The ticket assigned to me is still in progress.
分配给我的工单还在进行中。

The build failed, which means we need to wait.
构建失败了，这意味着我们得等一等。

Let's go to the page where we keep the release notes.
我们去放发布说明的那个页面看看。
```

## 11. 练习

**A. 用 who / which / that / where 填空**（有多个答案时都写上）

1. Is there anyone ___ can help with the iOS build?
2. This is the document ___ we wrote last week.
3. The Jira board is ___ we track all the tasks.
4. The pipeline failed, ___ means we need to rerun it.
5. Mia, ___ is our designer, will join the review.

**B. 读字幕：找出主句的主语和谓语**

1. The stories carried over from last sprint are mostly done.
2. The team working on the native part needs more time.
3. The PR I reviewed yesterday was merged.

**C. 改错**

1. Is there anyone wants to add something?
2. This is the ticket which I created it.
3. Ken, that is the release owner, will confirm the date.

<details>
<summary>答案</summary>

**A.** 1 who（或 that）　2 that / which（也可以省略）　3 where　4 which　5 who

**B.**
1. 主语 `The stories (carried over from last sprint)`，谓语 `are`
2. 主语 `The team (working on the native part)`，谓语 `needs`
3. 主语 `The PR (I reviewed yesterday)`，谓语 `was merged`

**C.**
1. Is there anyone who wants to add something?
2. This is the ticket which I created.（或 the ticket I created）
3. Ken, who is the release owner, will confirm the date.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [02-intermediate/11 定语从句](../../02-intermediate/11-relative-clauses.zh.md)
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 32 章「定语从句」
