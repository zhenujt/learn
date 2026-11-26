# G12 被动语态

<!-- sentence-audio: fenced-only -->

> **频率：🔴 必学** ｜ 阶段：初中 → 高中 ｜ 会议数据：`be + 过去分词` 每万词约 44 次（含 `is done` 这类形容词用法）；进度汇报里最常见的是 `is done / completed / blocked`、`has been …`、`will be …`
>
> [English version](12-passive-voice.md) · [上一课：G11 情态动词](11-modal-verbs.zh.md) · [下一课：G13 非谓语动词](13-to-do-doing-done.zh.md) · [语法目录](README.zh.md)

## 这一课解决什么问题

进度汇报时，大家关心的是**工单、PR、构建现在怎么样了**，而不是谁按的按钮。所以汇报句子里到处是被动语态：

```text
The PR has been approved, but the merge is blocked by the title check.
PR 已经批准了，但合并被标题检查卡住了。
```

这句话有两个被动：`has been approved`（已经被批准）和 `is blocked`（被卡住）。中文里常常不说"被"，所以中国同事容易听漏、也容易说错。

**学完这一课，你应该能：**

1. 知道被动的结构 `be + 过去分词`，以及会议汇报为什么大量使用它。
2. 会用不同时态的被动：`is done`、`was merged`、`has been deployed`、`will be released`、`is being tested`、`can be skipped`。
3. 分清"被动动作"和"`be` + 形容词状态"（`is done`、`is blocked` 多数时候说的是状态）。
4. 认得口语里的 `get` 被动，并知道什么时候用主动更好。

## 1. 为什么要用被动

- **主动语态：** 主语是"做事的人"。
- **被动语态：** 主语是"被处理的东西"。

```text
Ken merged the PR yesterday.
Ken 昨天合并了 PR。（主动：重点是 Ken）

The PR was merged yesterday.
PR 昨天合并了。（被动：重点是 PR）
```

会议里用被动，通常有三个原因：

1. **重点是东西的状态**，不是谁做的：`The story is completed.`
2. **不知道或不重要是谁做的**：`The account was created last week.`
3. **不想点名**，语气更中性：`The build was broken this morning.`

**公式：** `被处理的东西 + be + 过去分词 (+ by 执行者)`

> 💡 中文常说"PR 合并了""工单建好了"，句子里没有"被"字。翻成英文时一定要补上 `be`：`The ticket was created.`，不能说 `The ticket created.`

## 2. 先认过去分词

被动语态的核心是**过去分词**（也叫 done 形式）。规则动词加 `-ed`；不规则动词要单独记。下面是会议里常见的不规则过去分词：

| 原形 | 过去分词 | 原形 | 过去分词 |
| --- | --- | --- | --- |
| do | done | build | built |
| write | written | set up | set up |
| take | taken | give | given |
| break | broken | send | sent |
| make | made | run | run |
| show | shown | find | found |
| choose | chosen | hold | held |

```text
The fix is done.
修复已经完成了。

The new runner is set up.
新的执行机已经搭好了。

The test environment was broken this morning.
今天上午测试环境坏了。
```

## 3. 不同时态的被动

被动的时态，全部体现在 `be` 上。过去分词本身不变。

| 时态 | 公式 | 例句 |
| --- | --- | --- |
| 一般现在 | `am / is / are + done` | `The ticket is assigned to me.` |
| 一般过去 | `was / were + done` | `The PR was merged yesterday.` |
| 现在完成 | `has / have been + done` | `The fix has been deployed.` |
| 一般将来 | `will be + done` | `It will be released next sprint.` |
| 现在进行 | `am / is / are being + done` | `The story is being tested.` |
| 情态动词 | `can / should / need to + be + done` | `This step can be skipped.` |

### 3.1 一般现在被动：流程、规则、当前状态

```text
The pipeline is triggered by every new PR.
每个新 PR 都会触发这条流水线。

The tokens are generated from the Figma variables.
这些 Token 是从 Figma 变量生成的。

This ticket is assigned to Leo.
这个工单分配给了 Leo。
```

### 3.2 一般过去被动：过去某个时间发生的事

```text
The issue was reported by QA last week.
这个问题是 QA 上周报的。

The service account was created yesterday.
服务账号昨天建好了。
```

### 3.3 现在完成被动：汇报"已经完成"⭐ 最有用

`has been + done` 强调"**到现在为止已经……**"，是汇报进度的主力句型。时态的区别见 [G08](08-past-simple-and-present-perfect.zh.md)。

```text
The PR has been approved and merged.
PR 已经批准并合并了。

Most of the functionality has been migrated to the new workflow.
大部分功能已经迁移到新的工作流里了。

The access hasn't been granted yet.
权限还没有批下来。

Has the build been deployed to QA?
构建部署到 QA 环境了吗？
```

### 3.4 将来被动：计划中的事

```text
The package will be published to the npm registry.
这个包会发布到 npm 仓库。

The result will be synced back to Harness.
结果会同步回 Harness。

It's going to be released in the next sprint.
它会在下个 Sprint 发布。
```

### 3.5 进行时被动：正在被处理 🟡

```text
The story is being tested by QA.
这个 Story 正在由 QA 测试。

The PR is being reviewed.
PR 正在评审中。
```

口语里更常说 `The PR is in review.` 或 `QA is testing it.`，意思一样。

### 3.6 情态动词 + be done：可以 / 应该 / 需要被……

这一类在讨论方案时很常见（情态动词见 [G11](11-modal-verbs.zh.md)）：

```text
This step can be skipped for now.
这一步目前可以跳过。

It should be handled by the platform team.
这应该由平台组处理。

The document needs to be updated.
文档需要更新。

Each change must be approved by a code owner.
每个改动都必须经过代码负责人批准。
```

## 4. by + 执行者：只在重要时才加

会议里的被动句**大多数不带 `by`**。只有当"谁做的"是新信息或重要信息时，才加上 `by`：

```text
This will be done by QA.
这个由 QA 来做。

The task is blocked by the access request.
这个任务卡在权限申请上。

The PR was reviewed by Ken and Anna.
PR 由 Ken 和 Anna 评审过了。
```

`blocked by` 后面经常不是人，而是**原因**：`blocked by the access request`、`blocked by a dependency`。

有些被动搭配用别的介词，要整体记：

| 搭配 | 意思 | 例句 |
| --- | --- | --- |
| `be assigned to` | 分配给 | `It's assigned to Mia.` |
| `be used for` | 用于 | `This script is used for migration.` |
| `be based on` | 基于 | `The estimate is based on last sprint.` |
| `be related to` | 和……有关 | `It's related to the token change.` |
| `be stored in` | 存在…… | `The secret is stored in Key Vault.` |
| `be involved in` | 参与 | `QA should be involved in the review.` |

## 5. 被动还是状态？is done / is blocked / is completed

很多 `be + 过去分词` 其实说的是**现在的状态**，过去分词的作用就像形容词。

| 句子 | 理解 |
| --- | --- |
| `The story is done.` | Story 已完成（状态） |
| `The task is blocked.` | 任务卡住了（状态） |
| `I'm done.` | 我说完了 / 我做完了 |
| `We are all set.` | 我们都准备好了 |
| `I'm confused about the workflow.` | 我对这个流程有点糊涂（形容词） |
| `The PR was merged by Ken at 6 PM.` | PR 6 点被 Ken 合并（动作） |

**看字幕时：** 不必纠结是"被动"还是"状态"，都理解成"**处于……状态**"就行。

**自己说时：** 下面两种说法都对。站会里前者更常见：

```text
The story is completed.
这个 Story 已经完成了。（说状态）

The story has been completed.
这个 Story 已经完成了。（强调"已经"）

Once that is done, we can start the integration.
那个一完成，我们就可以开始集成。
```

## 6. get 被动：口语里的"变成了……" 🟡

`get + 过去分词` 是口语，强调**状态的变化或结果**，常带一点"终于"或"意外"的味道。

```text
The PR finally got merged last night.
PR 昨晚终于合进去了。

My account got locked after the password change.
改密码之后我的账号被锁了。

Did the ticket get assigned to anyone?
这个工单分配给谁了吗？

I got stuck on the SSL issue.
我卡在 SSL 问题上了。
```

另一种常见结构是 `get + 东西 + 过去分词`，意思是"**让某事被做好**"（详见 [G13](13-to-do-doing-done.zh.md)）：

```text
We need to get the access approved first.
我们得先把权限批下来。

I'll get it done by Friday.
我周五前把它搞定。
```

## 7. 主谓一致：is 还是 are

被动句的 `be` 要跟主语的单复数一致。会议里常见的坑在 `most of`、`one of` 这些结构上：

```text
These two stories are completed.
这两个 Story 已经完成了。（主语复数 → are）

One of the tests is failing.
其中一个测试失败了。（主语是 one → is）

Most of the tasks have been done.
大部分任务已经完成了。（看 of 后面：tasks 复数）

Most of the work has been done.
大部分工作已经完成了。（work 不可数 → has）
```

## 8. 什么时候用主动更好

被动不是越多越好。下面三种情况，用主动更清楚：

1. **说分工和待办事项。** 要明确谁负责：`Ken will update the ticket.` 比 `The ticket will be updated by Ken.` 更直接。
2. **汇报自己的工作。** `I fixed the login bug.` 让大家知道是你做的。
3. **被动句太长太绕。** `It was decided that the release would be postponed.` → `We decided to postpone the release.`

**一句话原则：** 说"东西的状态"用被动，说"谁负责做什么"用主动。

```text
The fix has been deployed to QA.
修复已经部署到 QA 环境了。（状态 → 被动）

Anna will verify it tomorrow.
Anna 明天验证。（分工 → 主动）
```

**注意：** 不及物动词没有被动，比如 `happen`、`occur`、`fail`、`work`、`appear`。

```text
The error happened again.
这个错误又出现了。

The build failed on the main branch.
主分支上的构建失败了。
```

## 9. 真实会议例句（改编）

以下句子来自真实会议字幕，修正了识别错误，人名和项目名已替换：

```text
For the web pull request template, these two stories are completed already.
Web 的 PR 模板这块，这两个 Story 已经完成了。

So this task is blocked by the access request.
所以这个任务卡在权限申请上。

The PR has been approved, but it hasn't been merged yet.
PR 已经批准了，但还没合并。

I think most of the functionality has been migrated to the new workflow.
我觉得大部分功能已经迁移到新的工作流里了。

The design token package will be published to the npm registry.
设计 Token 包会发布到 npm 仓库。

I'll double-check once it's done.
等它完成了我再确认一下。

I don't think the security markdown file is needed.
我觉得不需要那个安全说明的 Markdown 文件。

Sorry, I think all those technical details in the design document can be skipped.
抱歉，我觉得设计文档里那些技术细节可以跳过。

We need to confirm whether the existing account was created for us or for another team.
我们需要确认现有的账号是给我们建的还是给别的团队建的。

Rejected means this story will not be implemented.
"Rejected" 表示这个 Story 不会被实现。

We'd like to see if we can get it approved first.
我们想先看看能不能把它批下来。
```

## 10. 字幕里怎么认

1. **找 `be` 的各种形式 + 过去分词。** `is/are/was/were/been/being` 后面紧跟 `-ed` 或 `done/built/set up`，基本就是被动或状态。
2. **`been` 是最强信号。** 看到 `has been`、`have been`、`will be`、`can be` 后接过去分词，就是被动。
3. **主语就是"被处理的东西"。** 先问"这个东西怎么了"，再看有没有 `by`。
4. **字幕常吞掉 `-ed` 和 `is`。** `the ticket assign to me` 实际说的是 `the ticket is assigned to me`。
5. **非母语说法能看懂就行，不要模仿：**

| 字幕里可能听到 | 标准说法 |
| --- | --- |
| `if the pipeline is failed` | `if the pipeline fails` |
| `the error was happened` | `the error happened` |
| `more tickets need to create` | `more tickets need to be created` |
| `the design token package be published?` | `Will the design token package be published?` |
| `it could be further breakdown to stories` | `it can be further broken down into stories` |
| `the ticket assign to me` | `the ticket is assigned to me` |
| `It can be done by myself.` | `I can do it myself.` |

## 11. 常见错误

| ❌ 错误 | ✅ 正确 | 原因 |
| --- | --- | --- |
| `The ticket created yesterday.` | `The ticket was created yesterday.` | 被动必须有 `be` |
| `The bug has been fix.` | `The bug has been fixed.` | 要用过去分词 |
| `The issue was happened again.` | `The issue happened again.` | `happen` 不及物，没有被动 |
| `The build is failed.` | `The build failed.` / `The build is failing.` | `fail` 一般不用被动 |
| `More tests need to add.` | `More tests need to be added.` | 主语是被处理的东西，要用被动 |
| `The PR was reviewed from Ken.` | `The PR was reviewed by Ken.` | 执行者用 `by` |
| `Most of the tasks has been done.` | `Most of the tasks have been done.` | `tasks` 复数 |
| `It was decided by us to postpone it.` | `We decided to postpone it.` | 被动太绕，用主动 |

## 12. 你可以直接用的句子

```text
The PR has been approved and merged.
PR 已经批准并合并了。

The fix has been deployed to the QA environment.
修复已经部署到 QA 环境了。

This story is blocked by the access request.
这个 Story 卡在权限申请上。

The ticket is assigned to me, and it's in progress.
这个工单分配给我了，正在做。

It will be released in the next sprint.
它会在下个 Sprint 发布。

This step can be skipped for now.
这一步目前可以跳过。

The design isn't finalized yet.
设计还没定稿。

I'll let you know once it's done.
完成后我告诉你。

We need to get this approved first.
我们得先把这个批下来。
```

## 13. 练习

**A. 找出被动结构，并说出时态**

1. The fix has been deployed to staging.
2. The account was created last Friday.
3. The package will be published next week.
4. The story is being tested by QA.
5. This step can be skipped.

**B. 用括号里动词的正确形式填空**

1. The PR ___ already ___ (approve).
2. The new version ___ (release) next Monday.
3. This ticket ___ (assign) to Priya last week.
4. The document needs to ___ (update).
5. The task ___ (block) by a dependency right now.

**C. 改错**

1. The bug fixed yesterday.
2. The error was happened in production.
3. More test cases need to add.
4. The design has been finalize.
5. Most of the stories has been completed.

<details>
<summary>答案</summary>

**A.** 1 has been deployed，现在完成　2 was created，一般过去　3 will be published，一般将来　4 is being tested，现在进行　5 can be skipped，情态动词

**B.** 1 has, been approved　2 will be released　3 was assigned　4 be updated　5 is blocked

**C.**
1. The bug was fixed yesterday.
2. The error happened in production.
3. More test cases need to be added.
4. The design has been finalized.
5. Most of the stories have been completed.

</details>

## 旧资料对照

本课合并并取代了以下旧内容，旧文件保留作存档：

- [02-intermediate/08 完成、进行、被动与主谓一致](../../02-intermediate/08-aspect-passive-agreement.zh.md) 的被动语态部分
- [英语语法全解](../../english-grammar/英语语法全解.md) 第 31 章「被动语态」、第 41 章「主谓一致」
