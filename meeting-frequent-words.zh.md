# 软件项目与 Ticket 讲解词汇

## 范围说明

这份词表面向软件工作中的 ticket 讲解、技术方案讨论和跨团队协作。Ticket 例句是根据你描述的 Figma 变量转 Web/native 代码场景整理的示范句，并非会议转录原句。次数统计覆盖 Meeting 文件夹中的 96 份 `.txt` 文件；其中 16 份包含非空的 `Content:` 发言，共 3,524 条。次数不区分大小写；词条中注明的单复数、词性或词形变化合并计数，多词短语则按完整短语精确计数。次数为 0 表示这些转录中没有出现该词。

[会议完整词汇表](meeting-complete-vocabulary.zh.md#全部转录词汇)覆盖全部 2,144 个原词元和 2,781 种实际词形：每种词形独立成行并保留各自次数，相关词相邻，关联组按合计词频降序排列。本精选词表保留原有的合并词条结构，并更新次数；需要查看逐词形次数时，请使用完整词表。

统计已纳入 oct-19.txt 和 oct-20.txt。architecture(s)、align / alignment forms、plan / plans / planned / planning 的标签明确了原已计入的词形。标为 forms 的词条包括所列动词的原形、第三人称单数、过去式、过去分词、-ing 形式，以及所列名词的单复数；不自动包含其他派生词。其余词条仅统计标签中明确列出的形式。

## Ticket 规划与职责

| 单词或短语 | 次数 | 软件工作中的含义 | Ticket 场景例句 |
| --- | ---: | --- | --- |
| scope | 17 | ticket 或项目所包含工作的边界、范围 | We should clarify the scope before splitting this feature into tickets.（把这个功能拆成多个 ticket 前，我们应该先明确范围。） |
| requirement(s) | 24 | 方案必须满足的条件或能力要求 | The ticket should capture the design and engineering requirements.（这个 ticket 应该记录设计和工程方面的要求。） |
| clarify / clarifies / clarified / clarifying / clarification | 10 | 澄清、讲明白；消除歧义的说明 | We need to clarify whether the designer or developer owns each part.（我们需要明确每一部分由设计师还是开发人员负责。） |
| break down | 3 | 将较大的工作拆分成更小、可管理的任务 | Let's break the feature down into design, Web, and native subtasks.（我们把这个功能拆成设计、Web 和 native 子任务吧。） |
| task allocation | 0 | 任务分配；如何在个人或团队之间分配工作 | We should agree on task allocation before implementation starts.（开始实现前，我们应该先对任务分配达成一致。） |
| role allocation | 0 | 角色分工；如何在不同岗位或专业之间划分职责 | Let's clarify role allocation between design and engineering before we split the work.（拆分工作前，我们先明确设计和工程之间的职责分工。） |
| responsibility / responsibilities | 2 | 某人需要负责的工作或结果 | The ticket should make each person's responsibilities explicit.（这个 ticket 应该明确每个人的职责。） |
| ownership | 4 | 对组件、决策或交付物承担明确责任 | Let's determine ownership of the Figma-variable conversion.（我们来确定谁负责 Figma 变量转换。） |
| determine / determines / determined / determining | 14 | 根据讨论或证据确定、作出决定 | We need to determine which parts belong to design and which belong to engineering.（我们需要确定哪些部分属于设计工作，哪些属于工程工作。） |
| acceptance criteria | 0 | 判断 ticket 是否完成所必须满足的条件 | Add acceptance criteria for Web and native output to the ticket.（在 ticket 中加入 Web 和 native 输出的验收标准。） |

## 可行性与技术决策

| 单词或短语 | 次数 | 软件工作中的含义 | Ticket 场景例句 |
| --- | ---: | --- | --- |
| proof of concept (PoC) | 12 | 概念验证；用于测试想法是否可行的小规模实验 | Let's build a PoC to test converting Figma variables into Web and native code.（我们先做一个 PoC，测试能否把 Figma 变量转换成 Web 和 native 代码。） |
| feasibility / feasible | 24 | 可行性；考虑现有技术、时间和资源后能否实现 | The PoC will help us evaluate the feasibility of the conversion.（这个 PoC 能帮助我们评估这种转换的可行性。） |
| viability / viable | 0 | 实际可行性、长期可持续性；是否值得继续采用 | We should assess the long-term viability of maintaining one shared source.（我们应该评估长期维护一个共享源的可持续性。） |
| evaluate / evaluation | 21 | 评估；根据证据或选项作判断 | We can evaluate the options after the PoC is complete.（PoC 完成后，我们可以评估这些选项。） |
| validate / validation | 18 | 验证；检查假设、设计或实现是否正确 | We need to validate the generated code on both platforms.（我们需要在两个平台上验证生成的代码。） |
| constraint(s) | 0 | 约束、限制；影响方案的条件，例如平台或资源限制 | The ticket should document platform constraints and known limitations.（这个 ticket 应该记录平台约束和已知限制。） |
| trade-off | 0 | 权衡；改善某一方面时会影响另一方面的取舍 | We should document the trade-off between shared code and platform-specific behavior.（我们应该记录共享代码与平台特定行为之间的权衡。） |
| proposal / proposals / propose / proposes / proposed / proposing | 36 | 提案、方案建议；提交讨论或评审的解决方案 | The proposal should include the PoC results and a recommended approach.（提案应该包含 PoC 结果和推荐方案。） |
| specific | 19 | 具体的、明确的，而不是笼统或含糊的 | Let's list the specific variables and output formats in scope.（我们列出范围内具体的变量和输出格式吧。） |

## 架构与交付

| 单词或短语 | 次数 | 软件工作中的含义 | Ticket 场景例句 |
| --- | ---: | --- | --- |
| architecture(s) | 34 | 架构；系统的高层结构和边界 | We need to agree on the architecture before implementation begins.（开始实现前，我们需要先就架构达成一致。） |
| architectural | 0 | 架构层面的；与系统结构或设计有关 | This is an architectural decision because it affects both platforms.（这是一个架构层面的决策，因为它会影响两个平台。） |
| infrastructure | 7 | 基础设施；支持开发或交付的共享系统和基础 | The implementation may depend on updates to the repository infrastructure.（这项实现可能依赖代码仓库基础设施的更新。） |
| implement / implementation forms | 36 | 实现；将设计或计划落实为代码的工作 | The ticket covers the implementation of the conversion pipeline.（这个 ticket 涉及转换流水线的实现。） |
| cover / covers / covered / covering | 11 | 涵盖；表示某项 ticket 包含的功能、任务或关注点 | This ticket covers the PoC, implementation, and rollout.（这个 ticket 涵盖 PoC、实现和推广。） |
| during implementation | 0 | 在实现过程中 | We may uncover edge cases during implementation.（我们可能会在实现过程中发现边界情况。） |
| integrate / integration forms | 32 | 集成；将组件或系统与其他部分连接起来 | We should include integration with the existing design-token workflow.（我们应该把与现有设计 token 工作流的集成纳入范围。） |
| dependency / dependencies | 33 | 依赖项；某项工作开展前所依赖的条件或任务 | Let's identify dependencies before we commit to a delivery date.（承诺交付日期前，我们先梳理依赖项。） |
| migrate / migration forms | 41 | 迁移；将现有系统、数据或工作流转移到新方案 | We may need a migration plan for repositories using the old format.（对于使用旧格式的代码仓库，我们可能需要制定迁移计划。） |
| compatibility / compatible | 20 | 兼容性；能否与其他系统或版本正常协同 | We need to check compatibility with the current Web and native toolchains.（我们需要检查它与当前 Web 和 native 工具链的兼容性。） |
| standardize / standardization forms | 0 | 标准化；使不同团队或代码仓库的流程、产出保持一致 | We should standardize the generated variable format across platforms.（我们应该统一各平台生成的变量格式。） |
| convention(s) | 5 | 约定；团队认可并重复使用的命名或组织方式 | The ticket should follow the repository's existing naming conventions.（这个 ticket 应该遵循代码仓库现有的命名约定。） |

## 跨团队协作

| 单词或短语 | 次数 | 软件工作中的含义 | Ticket 场景例句 |
| --- | ---: | --- | --- |
| coordinate / coordinates / coordinated / coordinating | 2 | 协调；安排不同人员或团队之间的工作和决策 | I'll coordinate with the various pods before finalizing the plan.（敲定计划前，我会和相关 pod 协调。） |
| align / alignment forms | 15 | 对齐；就计划、预期或决策达成一致 | Let's align on the PR template before rolling it out.（推广前，我们先对 PR 模板达成一致。） |
| various | 1 | 各种不同的；此处指多个不同的人员、团队或项目 | The change needs input from various pods that own the repositories.（这项改动需要负责各代码仓库的多个 pod 提供意见。） |
| standardize across | 0 | 在多个系统或团队之间统一标准 | We want to standardize the PR template across repositories.（我们希望在多个代码仓库之间统一 PR 模板。） |
| coverage | 5 | 覆盖范围；纳入考虑的场景、组件或团队范围 | The PoC should cover the most common variable types on both platforms.（这个 PoC 应覆盖两个平台上最常见的变量类型。） |
| rollout(s) | 1 | 推广、分阶段发布；逐步向更多用户或团队推出改动 | We can roll out the template after the pilot repositories adopt it.（试点代码仓库采用该模板后，我们就可以逐步推广。） |

## 扩展软件项目词汇

| 单词或短语 | 次数 | 软件工作中的含义 | 实用搭配 |
| --- | ---: | --- | --- |
| ticket(s) | 111 | 被跟踪的工作项或需求 | create / update a ticket（创建 / 更新 ticket） |
| task(s) | 115 | 需要完成的一项工作 | break a task into subtasks（把任务拆成子任务） |
| story / stories | 221 | 描述用户需求或功能的敏捷工作项 | create a story; estimate story points（创建 story；估算故事点） |
| backlog(s) | 69 | 按优先级排列的待办工作队列 | refine the backlog（梳理 backlog） |
| subtask(s) | 46 | 从属于父级 ticket 的较小工作项 | split work into subtasks（把工作拆成子任务） |
| estimate / estimation forms | 20 | 预测工作的工作量或规模 | estimate effort / story points（估算工作量 / 故事点） |
| sprint(s) | 93 | 固定时长的开发迭代周期 | plan the next sprint（规划下一个 sprint） |
| priority / priorities | 7 | 工作的紧急程度或重要性 | set / reprioritize a ticket（设置 / 重新调整 ticket 优先级） |
| blocker(s) / blocking | 14 | 阻碍工作继续推进的问题 | identify a blocker（识别阻塞项） |
| resource allocation | 1 | 对有限的人力、时间或计算资源进行分配 | limited resource allocation（有限的资源分配） |
| plan / plans / planned / planning | 85 | 预期的工作步骤或决策安排 | implementation plan; sprint planning（实施计划；sprint 规划） |
| roadmap(s) | 8 | 产品未来工作的高层规划 | product roadmap（产品路线图） |
| role(s) | 11 | 某人在工作中的职能或职责范围 | design role; engineering role（设计角色；工程角色） |
| test / tests / tested / testing | 157 | 检查行为是否符合预期 | regression testing; test a workflow（回归测试；测试工作流） |
| research / researches / researched / researching | 88 | 收集证据或比较选项的调查研究 | research a technical option（研究一个技术选项） |
| compare / comparison forms | 42 | 并列考察不同选项 | technical comparison（技术比较） |
| alternative(s) | 2 | 另一种可能的解决方案 | consider an alternative（考虑另一种方案） |
| approach(es) | 23 | 解决问题或组织工作的方式 | choose an implementation approach（选择实施方式） |
| recommend / recommendation forms | 9 | 对应选择哪个方案提出建议 | make a recommendation（提出建议） |
| decision(s) | 13 | 经过讨论或评估后得出的结论 | document the decision（记录决策） |
| limitation(s) | 22 | 系统或方案的能力限制 | known limitations（已知限制） |
| option(s) | 21 | 多个可能选择中的一个 | compare the available options（比较可选方案） |
| refine / refinement forms | 15 | 改进或澄清现有计划或产物 | refine the proposal（完善提案） |
| technical / technically | 42 | 与工程细节或技术有关 | technical requirements（技术要求） |
| component(s) | 189 | 可复用或可独立管理的系统组成部分 | shared component（共享组件） |
| design / designs / designed / designing | 191 | 产品或系统的结构、设计或规格 | design system; design review（设计系统；设计评审） |
| designer(s) | 72 | 负责产品或视觉设计的人员 | coordinate with the designer（与设计师协调） |
| developer(s) | 46 | 实现或维护软件的人员 | hand off work to developers（向开发人员交接工作） |
| system(s) | 83 | 相互连接的软件或服务集合 | existing system（现有系统） |
| structure / structures / structured / structuring | 37 | 代码、包或数据的组织方式 | monorepo structure（monorepo 结构） |
| platform(s) | 94 | 软件运行或交付的目标环境、技术平台 | Web and native platforms（Web 和 native 平台） |
| framework(s) | 38 | 可复用的软件基础框架 | framework support（框架支持） |
| library / libraries | 34 | 供软件复用的代码集合 | publish a library（发布一个库） |
| package(s) | 54 | 可分发的代码或功能单元 | publish a package（发布一个软件包） |
| repository / repositories / repo(s) | 76 | 使用版本控制管理的代码库 | across repositories（跨多个代码库） |
| code | 52 | 程序指令或具体实现 | generate code（生成代码） |
| token(s) | 73 | 设计值、凭证或技术单元；具体含义取决于上下文 | design tokens（设计 token） |
| variable(s) | 8 | 可变化或可引用的命名值 | Figma variables（Figma 变量） |
| Figma | 55 | Ticket 场景中提到的设计工具 | export from Figma（从 Figma 导出） |
| convert / conversion forms | 5 | 将数据或代码从一种格式转换为另一种格式 | variable conversion（变量转换） |
| generate / generation forms | 8 | 自动生成代码或产物 | code generation（代码生成） |
| output(s) | 17 | 工具或流程产生的结果 | expected output（预期输出） |
| pipeline(s) | 146 | 自动执行构建、测试或交付的一系列步骤 | conversion pipeline（转换流水线） |
| workflow(s) | 123 | 可重复执行的人工或自动化流程 | existing workflow（现有工作流） |
| configure / configuration forms | 32 | 决定系统行为的设置 | configure the pipeline（配置流水线） |
| release / releases / released / releasing | 46 | 使版本或功能可供使用 | release a change（发布一项改动） |
| deploy / deployment forms | 8 | 将软件安装或发布到某个环境 | deployment process（部署流程） |
| build / builds / built / building | 28 | 编译或打包得到的软件版本 | build the package（构建软件包） |
| regression | 9 | 改动导致已有行为失效的问题 | regression testing（回归测试） |
| security | 26 | 对系统、数据和访问权限的保护 | security requirements（安全要求） |
| consistency / consistent | 2 | 不同实现之间保持相似的行为或格式 | maintain consistency across platforms（保持跨平台一致性） |
| naming | 4 | 为代码、文件或资源命名的规则 | naming convention（命名约定） |
| design system(s) | 63 | 共享的设计规则和可复用 UI 元素集合 | unified design system（统一设计系统） |
| design token(s) | 4 | 颜色、间距、字号等具名设计值 | map design tokens to code（将设计 token 映射到代码） |
| monorepo(s) | 8 | 在一个代码库中管理多个包或项目的仓库 | monorepo structure（monorepo 结构） |
| monolithic | 6 | 作为一个大型整体构建或组织的 | monolithic structure（单体结构） |
| API(s) | 5 | 软件系统之间进行通信的接口 | API integration（API 集成） |
| cloud | 51 | 云端托管的计算服务和基础设施 | cloud resources（云资源） |
| resource(s) | 46 | 系统使用的计算资源、访问权限或其他资产 | provision cloud resources（配置云资源） |
| environment(s) | 16 | 软件运行所需的配置环境 | development environment（开发环境） |
| foundation(s) | 32 | 共享的底层能力或技术基础 | token foundations（token 基础能力） |
| server(s) | 29 | 向客户端提供服务或数据的系统 | server-side support（服务端支持） |
| Web | 131 | 基于浏览器的应用平台 | Web implementation（Web 实现） |
| native | 130 | 为特定移动或桌面平台构建的应用 | native implementation（native 实现） |
| during | 25 | 在某项活动进行期间 | during implementation（在实施过程中） |
| specifically | 3 | 以精确或明确指定的方式 | specifically for this workflow（专门针对这个工作流） |
| collaborate / collaboration forms | 17 | 与其他人员或团队共同工作 | collaborate with the design team（与设计团队协作） |
| review / reviews / reviewed / reviewing | 123 | 检查工作并提供批准意见或反馈 | PR review（PR 评审） |
| feedback | 25 | 用于改进或评估工作的意见 | collect feedback（收集反馈） |
| discuss / discussion forms | 100 | 针对问题或决策进行讨论 | continue the discussion（继续讨论） |
| progress | 49 | 已完成工作的进展程度 | share a progress update（同步进展） |
| status / statuses | 41 | 任务或系统当前所处的状态 | check the status（查看状态） |
| impact / impacts / impacted / impacting | 5 | 某项改动可能产生的影响 | assess the impact（评估影响） |
| risk(s) | 11 | 可能发生的问题或不利结果 | identify project risks（识别项目风险） |
| stakeholder(s) | 22 | 受决策影响或参与决策的人员 | align with stakeholders（与相关方达成一致） |
| consumer(s) | 27 | 使用某个库、服务或平台的产品或团队 | downstream consumers（下游使用方） |
| pod(s) | 41 | 小型跨职能团队 | coordinate with other pods（与其他 pod 协调） |

## 10 月 15 日新增的软件术语

以下次数统计完整转录范围。搭配栏是可复用的表达，不是逐字引用；下一张表中的短语则按转录中的连续原文精确计数。

| 单词或短语 | 次数 | 软件工作中的含义 | 实用搭配 |
| --- | ---: | --- | --- |
| challenge(s) | 4 | 需要处理的困难或障碍 | investigate integration challenges（调查集成方面的挑战） |
| visibility | 7 | 功能或组件是否容易被看到或访问 | investigate component visibility（调查组件的可见性） |
| investigate / investigation forms | 13 | 系统地检查问题或主题 | investigate platform behavior（调查平台行为） |
| effort(s) | 11 | 完成某项工作的时间、资源或工作量 | estimate the effort required（估算所需工作量） |
| analysis / analyses | 7 | 对问题或选项进行细致分析 | perform a technical analysis（进行技术分析） |
| contract(s) | 3 | 模块之间约定的接口或行为要求 | define an interface contract（定义接口约定） |
| governance | 2 | 管理共享接口或流程的规则与责任归属 | establish contract governance（建立契约治理机制） |
| drift | 2 | 实现或定义之间出现的非预期偏差 | detect schema drift（检测 schema 漂移） |
| tooling | 5 | 支持开发、验证或运维的工具 | add drift-detection tooling（添加漂移检测工具） |
| performance | 14 | 系统运行的速度或效率 | compare runner performance（比较 runner 性能） |
| runner(s) | 63 | 执行自动化任务的机器或服务 | configure a GitHub Actions runner（配置 GitHub Actions runner） |
| module(s) | 12 | 软件系统中单独组织的一部分 | define module ownership（明确模块负责人） |
| schema(s) | 3 | 对数据或接口结构的正式描述 | validate the module schema（验证模块 schema） |
| automate / automation forms | 45 | 使用软件自动执行流程 | automate PR merging（自动合并 PR） |
| verify / verification forms | 29 | 检查配置或结果是否正确 | verify the pipeline configuration（验证流水线配置） |
| visual | 12 | 与用户界面的视觉呈现有关 | run a visual regression test（运行视觉回归测试） |
| E2E | 6 | 端到端；跨组件测试完整流程 | configure E2E tests（配置端到端测试） |
| patch(es) | 7 | 针对现有框架或代码的局部改动 | implement a framework patch（实现框架补丁） |
| projection | 2 | 通过组件插槽投影或传递内容 | investigate slot projection（调查插槽投影） |
| delegator(s) | 4 | 在其他系统上分派或执行工作的服务或代理 | configure a runner delegator（配置 runner 委派器） |
| action(s) | 65 | 自动化工作流中的一个操作单元；具体含义取决于语境 | run a GitHub Action（运行 GitHub Action） |

### 精确多词短语

| 短语 | 10 月 15 日 | 全部转录 |
| --- | ---: | ---: |
| visibility investigation | 1 | 2 |
| effort needed | 1 | 1 |
| contract governance | 1 | 1 |
| contract validation | 1 | 2 |
| drift tooling | 1 | 2 |
| backward compatibility | 1 | 11 |
| performance difference | 1 | 1 |
| work together | 1 | 5 |
| next step | 2 | 17 |
| reach out to | 1 | 10 |
| PR merge automation | 1 | 1 |
| harness PR job | 1 | 1 |
| test gate | 1 | 2 |
| visual test | 2 | 7 |
| code format | 1 | 2 |
| Linux Visual CI | 1 | 3 |

10 月 15 日的一些上下文受到语音识别错误影响，因此这些搭配适合作为词汇参考，不应直接照搬周围的转录句子。

## 10 月 19、20 日的软件术语

次数覆盖全部当前转录，不是只统计 10 月 19、20 日。只有标签中明确列出的词形合并计数；多词短语精确匹配。搭配为规范化学习示例，不代表云资源、许可证或工作进度已经核实。

| 单词或短语 | 次数 | 软件工作中的含义 | 实用搭配 |
| --- | ---: | --- | --- |
| breaking change(s) | 11 | 可能破坏现有使用方的变更。 | flag a breaking change |
| pull request template(s) | 12 | 拉取请求描述的标准结构。 | assign ownership of the PR template |
| baseline(s) | 19 | 用于支持范围或比较的约定基线。 | finalize the support baseline |
| support version baseline | 3 | 约定支持的版本范围。 | review the support version baseline |
| internal dependency | 2 | 项目或工具链内部使用的依赖。 | separate internal dependencies from consumer requirements |
| browser version(s) | 8 | 浏览器的特定版本或支持范围。 | confirm supported browser versions |
| smoke test(s) | 7 | 验证基本功能可用的小规模测试。 | run an SSR smoke test |
| hydration | 6 | 为服务端渲染内容接入客户端状态和交互。 | validate hydration behavior |
| assertion(s) | 1 | 测试中必须满足的断言条件。 | add a server-render assertion |
| registration | 2 | 向系统注册组件或名称。 | check component registration |
| refactor | 1 | 在不改变外部行为的前提下重构代码。 | refactor a module |
| prefix | 1 | 名称或标题开头的标记。 | use a feature prefix in the PR title |
| enforce / enforced | 1 | 强制执行规则。 | enforce the commit convention in CI |
| formalize | 1 | 正式确定并规范化。 | formalize the variable structure |
| EKS | 5 | Amazon 托管 Kubernetes 服务。 | configure an EKS cluster |
| HTTP connector | 1 | 通过 HTTP 请求连接服务的集成连接器。 | check HTTP connector licensing |
| simulator | 1 | 模拟其他设备或环境的软件。 | embed a simulator in a web page |
| free trial | 1 | 用于评估产品的临时试用权限。 | verify the free trial conditions |
| premium license | 18 | 提供高级功能的许可证。 | confirm premium license availability |
| message ID | 3 | 讨论中一条消息的标识符。 | pass the message ID to the workflow |
| call back | 2 | 处理后调用返回流程或回复。 | call back the response workflow |
| PAT | 1 | 个人访问令牌；只学习术语，不记录或复制真实令牌。 | limit PAT permissions |

试用相关的 trial 与疑似误听 trail 分开计数；premium 与 premier 也不合并。内部 CI 工具链版本与使用方兼容性是不同范围，讨论时应先明确边界。许可证期限及功能可用性需要另行确认。

## 会议转录原句

以下是会议转录中的原句片段，并非示范句；保留了发言原貌。

| 对应表达 | 转录原句片段 | 来源 |
| --- | --- | --- |
| 澄清依赖项 | “I just want to clarify the dependencies, so I want to check if any input needed from design side to start those backlogs.” | oct-13-grooming-1.txt |
| ticket 需要澄清 | “we need to get some clarification on their ticket.” | oct-14.txt |
| 可行性与实现 | “a further discussions on the feasibility and the implementation.” | sep-23.txt |
| 架构与协调 | “coordinate with the designer to see, I think once we have the architecture finalized and the repo set up” | sep-24.txt |
| 资源分配 | “Arjun has limited resource allocation.” | sep-22.txt |
| 职责归属 | “someone is taking the responsibility to track what when and where we can create the the cloud resources” | sep-21.txt |
| 确定方案 | “to determine how that will work.” | sep-22.txt |

另请参阅：[会议高频英文表达](meeting-english-phrases.zh.md)及[英文版](meeting-english-phrases.md)。
