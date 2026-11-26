# G08 一般过去时与现在完成时：说完成

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 阶段：初中 ｜ 会议数据：现在完成时每万词约 32 次，`already` 约 26 次，`was/were` 约 11 次，`shared` 约 9 次，`completed` 约 7 次，`finished` 约 6 次，`yet` 约 4 次
>
> [English version](08-past-simple-and-present-perfect.md) · [上一课：G07 一般现在时与现在进行时](07-present-simple-and-continuous.zh.md) · [下一课：G09 将来表达](09-future-will-going-to.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

站会第一句通常是"昨天做了什么、完成了什么"。中文一个"了"就够了，英语却有两种说法：

```text
Yesterday I fixed the login bug.
我昨天修了登录的 Bug。

I've already raised a PR, but it hasn't been merged yet.
我已经提了 PR，但还没合并。
```

第一句是**一般过去时**（`fixed`），因为有明确的过去时间 `yesterday`；第二句是**现在完成时**（`have raised`），因为说的是"到现在为止的结果"。这两种时态是汇报进度的核心，也是中国工程师最容易混的地方。

**学完这一课，你应该能：**

1. 用一般过去时说"昨天、上周、刚才做了什么"。
2. 用现在完成时说"已经完成、到目前为止、还没做"。
3. 用对 `already`、`yet`、`just`、`still`、`so far`、`since`、`for`。
4. 记住软件团队最常用的不规则动词，不再说 `builded`、`have saw`。

## 1. 核心区别：看时间，还是看结果

**一句话：**

- **一般过去时**：把镜头对准**过去那个时间点**。"什么时候做的"很重要。
- **现在完成时**：站在**现在**看过去的动作留下的**结果**。"现在是什么状态"很重要。

| | 一般过去时 | 现在完成时 |
| --- | --- | --- |
| 公式 | `did` | `have / has + 过去分词` |
| 关注点 | 过去的时间、经过 | 现在的结果、状态 |
| 能不能加具体过去时间 | ✅ `yesterday`、`last week` | ❌ 不能 |
| 例子 | `I merged it yesterday.` | `I've merged it.`（现在已经合并了） |

中文的"了"两边都能对应，所以不能靠"了"来判断。要问自己：**我是在说"那时候"，还是在说"现在的状态"？**

## 2. 一般过去时：说过去发生的事

### 2.1 公式

| 句型 | 例子 |
| --- | --- |
| 肯定 | `I fixed the bug.`、`We had a meeting.` |
| 否定 | `I didn't fix the bug.`（`didn't + 原形`） |
| 疑问 | `Did you fix the bug?`（`Did + 原形`） |
| be 动词 | `It was a config issue.`、`The builds were green.` |

和一般现在时一样，用了 `did / didn't` 以后，动词回到**原形**：`Did you test it?`，不能说 `Did you tested it?`。

### 2.2 会议里的三种用法

**① 有明确过去时间的事 ⭐**

```text
I finished the API changes yesterday.
我昨天完成了 API 改动。

We passed the security review last week.
我们上周通过了安全评审。

The pipeline failed twice this morning.
今天上午流水线失败了两次。

I sent you the link just now.
我刚才把链接发给你了。
```

**② 讲一件事的经过（故障复盘、讨论回顾）**

```text
We deployed the new version, and then the login page broke.
我们部署了新版本，然后登录页就坏了。

We discussed this yesterday and agreed to use AWS.
我们昨天讨论过这个，决定用 AWS。
```

**③ 过去的状态：was / were**

```text
It was a network issue, not a code issue.
那是网络问题，不是代码问题。

The tests were green yesterday.
昨天测试都是通过的。

I thought it was merged.
我以为已经合并了。
```

> `I wanted to ask …`、`I was wondering if …` 虽然是过去形式，却是**礼貌**用法，说的是现在。见 [G10](10-other-tenses.zh.md)。

### 2.3 规则动词：加 -ed

| 规则 | 例子 |
| --- | --- |
| 一般加 `-ed` | `fix → fixed`、`deploy → deployed`、`test → tested` |
| `e` 结尾加 `-d` | `merge → merged`、`update → updated`、`share → shared` |
| 辅音 + `y` 结尾，变 `y` 为 `i` 加 `-ed` | `try → tried`、`apply → applied`、`copy → copied` |
| 重读闭音节，双写末尾辅音 | `plan → planned`、`drop → dropped`、`commit → committed`、`debug → debugged` |

软件里从名词借来的动词基本都是规则的：`pushed`、`logged`、`refactored`、`shipped`、`approved`、`rebased`。

## 3. 现在完成时：说"已经"和"到目前为止"

### 3.1 公式

| 句型 | 例子 |
| --- | --- |
| 肯定 | `I've fixed it.`、`She's raised a PR.`、`We've finished the planning.` |
| 否定 | `I haven't tested it yet.`、`It hasn't been merged.` |
| 疑问 | `Have you tested it?`、`Has anyone seen this error?` |

**缩写要认得：** `I've = I have`，`we've = we have`，`he's / she's / it's = he/she/it has`（后面是过去分词时）。

```text
It's been merged.
已经合并了。（it's = it has）

It's merged.
已经合并了。（it's = it is，merged 作形容词，意思相同）
```

### 3.2 用法一：完成 + 现在的结果 ⭐ 汇报进度最常用

动作什么时候做的不重要，重要的是**现在完成了**：

```text
I've fixed the crash, so you can test it now.
我已经修好了崩溃问题，你现在可以测了。

We've finished the planning for the native part.
Native 部分的规划我们已经做完了。

Ken has raised a PR for the token update.
Ken 已经为 Token 更新提了 PR。

I've shared the link in the Teams chat.
我已经把链接发到 Teams 群里了。

The design team hasn't confirmed the colors yet.
设计团队还没确认颜色。
```

### 3.3 用法二：到目前为止的数量和经历

```text
We've completed about 80% of the sprint backlog so far.
到目前为止，我们完成了 Sprint Backlog 的大约 80%。

I've never used Harness before.
我以前从没用过 Harness。

Have you ever seen this error?
你见过这个报错吗？
```

### 3.4 用法三：从过去一直持续到现在（for / since）

表示状态从过去某时开始、**现在还在继续**：

```text
It has been broken since Monday.
从周一起就一直坏着。

I've been on this team for two years.
我在这个团队已经两年了。

We've known about this issue for a while.
这个问题我们知道有一阵子了。
```

`for + 一段时间`（`for two days`），`since + 起点`（`since Monday`、`since the last release`）。如果是动作持续（`I've been waiting …`），见 [G10](10-other-tenses.zh.md) 的现在完成进行时。

### 3.5 现在完成时的被动：has been + 过去分词

状态汇报里经常说"某事已经被做了"，这是现在完成时和被动的组合，详见 [G12](12-passive-voice.zh.md)：

```text
The PR has been approved.
PR 已经批准了。

Has it been deployed to staging?
它已经部署到预发布环境了吗？

Most of the features have been migrated.
大部分功能已经迁移过去了。
```

## 4. already、yet、just、still、so far

| 词 | 意思 | 用在 | 位置 | 例子 |
| --- | --- | --- | --- | --- |
| `already` | 已经 | 肯定句（问句表示惊讶） | `have` 后或句末 | `I've already merged it.` |
| `yet` | 还（没）、了吗 | 否定句、疑问句 | 句末 | `It hasn't been merged yet.` |
| `just` | 刚刚 | 肯定句 | `have` 后 | `I've just pushed the fix.` |
| `still` | 仍然（还没） | 否定句 | `haven't` 前 | `It still hasn't been approved.` |
| `so far` | 到目前为止 | 肯定、否定 | 句首或句末 | `So far, no issues.` |
| `recently` | 最近 | 各种句子 | 句末或 `have` 后 | `We've recently moved to Harness.` |

```text
I've already updated the ticket.
我已经更新了工单。

Have you tested it on iOS yet?
你在 iOS 上测过了吗？

I've just pushed the fix.
我刚把修复推上去。

The PR still hasn't been reviewed.
PR 还是没人评审。

Not yet. I'll do it this afternoon.
还没有，我今天下午做。
```

> **美式口语提醒：** 美国同事常说 `I already merged it.`、`Did you test it yet?`、`I just pushed it.`，用一般过去时搭配 `already / yet / just`。这在美式口语里完全正确。你自己用现在完成时更稳妥；听到过去时也要能看懂。

## 5. 怎么选：三步判断法 ⭐

1. **有没有具体的过去时间？** 有 `yesterday`、`last week`、`two days ago`、`on Monday`、`when …`、`just now` → **一般过去时**。
2. **说的是现在的结果或状态吗？** 有 `already`、`yet`、`so far`、`ever`、`never`、`since` → **现在完成时**。
3. **先宣布结果，再讲细节。** 母语者常常先用完成时说结论，再用过去时补充经过：

```text
I've fixed the crash. It was a null pointer in the date parser. I pushed the fix last night.
崩溃问题我已经修好了。是日期解析器里的空指针，我昨晚推了修复。
```

**对比：**

| 一般过去时 | 现在完成时 |
| --- | --- |
| `I finished it yesterday.` | `I've finished it.` |
| `Did you test it on iOS?`（问那次测试） | `Have you tested it on iOS?`（问现在测没测） |
| `It was broken on Monday.`（现在可能好了） | `It has been broken since Monday.`（现在还坏着） |
| `I had three meetings last week.` | `I've had three meetings this week.`（这周还没过完） |
| `When did you merge it?` ✅ | ~~`When have you merged it?`~~ ❌ |

`when` 问的是具体时间，所以只能用一般过去时。

**标志词总结：**

| 一般过去时 | 现在完成时 |
| --- | --- |
| `yesterday`、`last week/sprint/Friday` | `already`、`yet`、`just`（英式） |
| `… ago`、`in 2024`、`on Monday` | `ever`、`never`、`so far`、`recently` |
| `just now`、`this morning`（上午已过） | `since …`、`for …`（持续到现在） |
| `when …?`、`what time …?` | `this week / this sprint`（还没结束） |

## 6. 不规则动词：软件团队常用表

过去式和过去分词不加 `-ed` 的动词要单独记。下表只选会议和开发中真正常用的词。

**A. 三个形式都一样（AAA）**

| 原形 | 过去式 | 过去分词 | 会议例子 |
| --- | --- | --- | --- |
| `set (up)` | `set` | `set` | `I've set up the runner.` |
| `put` | `put` | `put` | `I put the link in the chat.` |
| `let` | `let` | `let` | `He let us know yesterday.` |
| `cost` | `cost` | `cost` | `It cost a lot last month.` |
| `read` | `read`（读 /red/） | `read` | `I've read the doc.` |
| `quit` | `quit` | `quit` | `The app quit unexpectedly.` |
| `hit` | `hit` | `hit` | `We hit the rate limit.` |
| `shut (down)` | `shut` | `shut` | `They shut down the old server.` |

**B. 过去式和过去分词一样（ABB）**

| 原形 | 过去式 / 过去分词 | 原形 | 过去式 / 过去分词 |
| --- | --- | --- | --- |
| `build` | `built` | `send` | `sent` |
| `make` | `made` | `have` | `had` |
| `find` | `found` | `get` | `got`（美式分词也作 `gotten`） |
| `hold` | `held` | `keep` | `kept` |
| `leave` | `left` | `lose` | `lost` |
| `meet` | `met` | `pay` | `paid` |
| `say` | `said` | `tell` | `told` |
| `think` | `thought` | `bring` | `brought` |
| `buy` | `bought` | `catch` | `caught` |
| `feel` | `felt` | `hear` | `heard` |
| `mean` | `meant` | `spend` | `spent` |
| `understand` | `understood` | `stand` | `stood` |
| `lead` | `led` | `stick` | `stuck` |
| `rebuild` | `rebuilt` | `sit` | `sat` |

**C. 三个形式都不同（ABC / ABA）**

| 原形 | 过去式 | 过去分词 | 原形 | 过去式 | 过去分词 |
| --- | --- | --- | --- | --- | --- |
| `do` | `did` | `done` | `go` | `went` | `gone` |
| `see` | `saw` | `seen` | `take` | `took` | `taken` |
| `give` | `gave` | `given` | `write` | `wrote` | `written` |
| `break` | `broke` | `broken` | `choose` | `chose` | `chosen` |
| `forget` | `forgot` | `forgotten` | `know` | `knew` | `known` |
| `show` | `showed` | `shown` | `begin` | `began` | `begun` |
| `speak` | `spoke` | `spoken` | `fall` | `fell` | `fallen` |
| `draw` | `drew` | `drawn` | `grow` | `grew` | `grown` |
| `throw` | `threw` | `thrown` | `hide` | `hid` | `hidden` |
| `freeze` | `froze` | `frozen` | `overwrite` | `overwrote` | `overwritten` |
| `override` | `overrode` | `overridden` | `run` | `ran` | `run` |
| `come` | `came` | `come` | `become` | `became` | `become` |

```text
I've set up the macOS runner.
我已经配好了 macOS 执行机。

The last deployment broke the login page.
上次部署把登录页搞坏了。

The new library has broken two tests.
新的库把两个测试弄挂了。

I forgot to mention one thing yesterday.
昨天我忘了说一件事。

We're in a code freeze, so the branch is frozen.
我们在代码冻结期，分支已冻结。

I'm stuck on the SSR issue.
我卡在 SSR 的问题上了。
```

> `set up` 是动词短语（三个形式都是 `set up`）；`setup` 是名词（"配置"）：`I set up the runner.` / `The setup is done.`

## 7. 真实会议例句（改编）

以下句子来自真实会议字幕，已修正识别错误并匿名化：

```text
So we've finished the planning for the native part today.
今天我们已经完成了 Native 部分的规划。

Yeah, I've sent the link to our Teams chat.
嗯，我已经把链接发到 Teams 群里了。

Ken has confirmed that the Harness Linux steps can pull the Docker image.
Ken 已经确认 Harness 的 Linux 步骤可以拉取 Docker 镜像。

The good news is we've already completed 80 to 90% of the sprint backlog.
好消息是我们已经完成了 Sprint Backlog 的八到九成。

I saw the stories Leo has done, but I noticed the PR hasn't been approved and merged yet.
我看到了 Leo 完成的 Story，但我注意到 PR 还没批准和合并。

We finished sprint grooming yesterday and sprint planning today.
我们昨天做完了 Sprint 梳理，今天做完了 Sprint 计划。

We passed the security review yesterday.
我们昨天通过了安全评审。

I thought it was merged, but I'll double-check.
我以为已经合并了，不过我再确认一下。

Feel free to jump in if I've missed anything.
如果我漏了什么，随时补充。

I think we haven't started updating the components yet.
我想我们还没开始更新组件。
```

非母语原句 vs 标准说法：

| 字幕原文 | 标准说法 |
| --- | --- |
| `Mia have shared some token structure yesterday.` | `Mia shared the token structure yesterday.`（有 yesterday 用过去时） |
| `Leo have finished the POC and gave three options.` | `Leo has finished the POC and given three options.` |
| `The story has just been created, but not has been reviewed.` | `… but it hasn't been reviewed.` |
| `Ken is not joined yet.` | `Ken hasn't joined yet.` |
| `We didn't discuss this yet.` | `We haven't discussed this yet.`（美式口语也说 `didn't … yet`） |
| `Mia and Ken has already created some epics.` | `Mia and Ken have already created some epics.` |
| `I have picked, I have picking up this ticket.` | `I've picked up this ticket.` |

## 8. 字幕里怎么认

1. **找 `have / has / 've / 's + 过去分词`。** 这就是现在完成时，意思是"已经 / 到现在为止"。
2. **`'s` 要看后面：** `he's working`（is）、`he's finished`（has 或 is，意思都是"完成了"）、`it's been`（has）。
3. **`'ve` 常被识别丢。** 字幕里 `we finished the planning` 可能其实说的是 `we've finished`。意思差不多，不必纠结。
4. **看到 `yesterday / last week` 就按过去理解。** 即使字幕写的是 `have shared … yesterday`（非母语错误），也理解为"昨天分享了"。
5. **`already` 是强信号。** 会议里 `already` 每万词约 26 次，几乎都表示"已经完成"。

| 字幕里可能看到 | 标准说法 |
| --- | --- |
| `we done the setup` | `we've done the setup` / `we did the setup` |
| `I been working on it` | `I've been working on it` |
| `it has broke` | `it has broken` |
| `I have saw that` | `I saw that` / `I've seen that` |
| `he already finish it` | `he's already finished it` |

## 9. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `I have finished it yesterday.` | `I finished it yesterday.` | 有具体过去时间不能用完成时 |
| `When have you merged it?` | `When did you merge it?` | `when` 问时间用过去时 |
| `Did you tested it?` | `Did you test it?` | `did` 后用原形 |
| `I didn't finished it.` | `I didn't finish it.` | `didn't` 后用原形 |
| `I have saw the error.` | `I have seen the error.` | 完成时用过去分词 |
| `We builded a new image.` | `We built a new image.` | 不规则动词 |
| `I sended the link.` | `I sent the link.` | 不规则动词 |
| `I already finish it.` | `I've already finished it.` | 不要漏掉 `have` 和 `-ed` |
| `I worked here since 2023.` | `I've worked here since 2023.` | `since` 持续到现在用完成时 |
| `It hasn't merged yet.` | `It hasn't been merged yet.` | PR 是"被合并"，要用被动 |

## 10. 你可以直接用的句子

```text
Yesterday I fixed the login bug and raised a PR.
昨天我修了登录的 Bug，并提了 PR。

I've finished the API integration. It's ready for review.
API 集成我已经做完了，可以评审了。

I've just pushed the fix. Can you test it again?
我刚推了修复，你能再测一下吗？

The PR hasn't been merged yet. It's waiting for approval.
PR 还没合并，在等批准。

I haven't started the documentation yet.
文档我还没开始写。

So far, we've completed most of the sprint backlog.
到目前为止，我们完成了大部分 Sprint Backlog。

Sorry, I forgot to update the ticket yesterday.
抱歉，我昨天忘了更新工单。

Has anyone seen this error before?
有人之前见过这个报错吗？
```

## 11. 练习

**A. 选择一般过去时或现在完成时**

1. I (fixed / have fixed) the bug yesterday.
2. I (fixed / have fixed) the bug, so you can test it now.
3. When (did you deploy / have you deployed) it?
4. We (didn't start / haven't started) the migration yet.
5. It (was / has been) broken since Monday.
6. Mia (left / has left) the meeting early, so let's continue without her.

**B. 填 already / yet / just / still / since / for**

1. Have you reviewed my PR ___?
2. I've ___ pushed the fix — like one minute ago.
3. The design ___ hasn't been confirmed.
4. I've ___ updated the ticket, so no need to do it again.
5. The job has been running ___ 15 minutes.
6. We've used this pipeline ___ last year.

**C. 写出过去式和过去分词**

build · send · break · write · set · choose · forget · run · find · take

**D. 改错**

1. I have sent the email yesterday.
2. We builded the image this morning.
3. Did you finished the test?
4. The PR hasn't approved yet.
5. I already finish the first task.

<details>
<summary>答案</summary>

**A.** 1 fixed　2 have fixed　3 did you deploy　4 haven't started　5 has been　6 has left（强调"现在不在"；`left` 在美式口语里也可以）

**B.** 1 yet　2 just　3 still　4 already　5 for　6 since

**C.** built–built · sent–sent · broke–broken · wrote–written · set–set · chose–chosen · forgot–forgotten · ran–run · found–found · took–taken

**D.**
1. I sent the email yesterday.
2. We built the image this morning.
3. Did you finish the test?
4. The PR hasn't been approved yet.
5. I've already finished the first task.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [01-foundations/04 三大基本时态](../../01-foundations/04-three-basic-tenses.zh.md) 的一般过去时部分
- [02-intermediate/08 完成、进行、被动与主谓一致](../../02-intermediate/08-aspect-passive-agreement.zh.md) 的完成时部分
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 18 章「一般过去时」、第 26 章「现在完成时」、附录 B「常用不规则动词表」
