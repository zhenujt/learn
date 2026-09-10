import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  Headphones,
  Mic,
  Repeat2,
  RotateCcw,
  Target,
  TriangleAlert,
} from "lucide-react";
import { PlanProgressStore } from "./shared/plan-progress";

const planProgress = new PlanProgressStore();

interface DailyBlock {
  minutes: string;
  name: string;
  detail: string;
  icon: typeof Headphones;
}

interface ListeningStep {
  order: string;
  name: string;
  detail: string;
}

interface PlanWeek {
  id: string;
  week: string;
  focus: string;
  study: string;
  output: string;
}

interface PlanPhase {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  weeks: PlanWeek[];
}

interface GrammarItem {
  title: string;
  why: string;
  documentPath: string;
}

interface Milestone {
  when: string;
  criteria: string;
}

interface Pitfall {
  title: string;
  detail: string;
}

const dailyBlocks: DailyBlock[] = [
  {
    minutes: "12 分钟",
    name: "字幕理解",
    detail: "用 3–5 条英文会议字幕练习：先找谁、做什么、状态和时间，再用中文说出整句意思。优先使用真实工作中允许练习的内容。",
    icon: Headphones,
  },
  {
    minutes: "10 分钟",
    name: "短句回复",
    detail: "针对每条字幕给一个真实可用的短回复：能做、暂时不能、需要确认三选一。不追求复杂，先保证意思准确。",
    icon: Repeat2,
  },
  {
    minutes: "10 分钟",
    name: "看字幕听 + 跟读",
    detail: "先看英文字幕听同一句，再关掉字幕听一次，最后跟读 2–3 遍。听不清时回看字幕，不把猜测当成能力。",
    icon: Mic,
  },
  {
    minutes: "8 分钟",
    name: "确认与复盘",
    detail: "录下自己的回复，检查时态、否定和数字是否准确，再练一句确认或请求重复的话，存下真正卡住的表达。",
    icon: RotateCcw,
  },
];

const weeklyRoutines: string[] = [
  "每周选一次允许用于学习的会议片段，脱敏后练习：读字幕、概括意思、给一句回复，再核对原意。不要上传公司机密。",
  "每周至少练 5 句会议保命句：请求重复、确认理解、说明暂时不能做、承诺后续跟进。",
  "从第 1 周开始把真实工作状态写成英文短句；能用短句说清楚，再逐渐连接成 30–60 秒更新。",
  "每周末回听本周录音，比较的是“是否更准确、更快回应”，不是口音是否像母语者。",
];

const listeningSteps: ListeningStep[] = [
  {
    order: "01",
    name: "先看英文字幕",
    detail: "先确认谁在说、对方要什么、时间和状态是什么；字幕是支架，不是作弊。",
  },
  {
    order: "02",
    name: "拆出句子骨架",
    detail: "标出主语、动作、否定、时间和条件；只查会影响这条消息的词和语法。",
  },
  {
    order: "03",
    name: "给一个短回复",
    detail: "用自己的事实回答：Yes, I can. / Not yet. / I need to check. / Could you repeat that?",
  },
  {
    order: "04",
    name: "看字幕听并跟读",
    detail: "回放同一句，注意词尾、重音和连读；能跟上即可，不要求一次听懂整场会议。",
  },
  {
    order: "05",
    name: "短暂脱离字幕",
    detail: "再听一次并尝试抓关键词；漏掉就重新打开字幕核对。逐步减少依赖，不强行关闭支架。",
  },
];

const phases: PlanPhase[] = [
  {
    id: "phase-0",
    eyebrow: "WEEK 1-2",
    title: "阶段零 · 字幕辅助下进入会议",
    description:
      "第一目标不是脱离字幕听完整场会议，而是看懂短句、抓住行动信息并给出简单回复。你的常见词读音记忆是资产；发音只查会影响理解和被理解的项目，不把音标当成开会前置条件。",
    weeks: [
      {
        id: "w1",
        week: "第 1 周",
        focus: "看懂字幕与三类短回复",
        study: "每天处理 3–5 条短字幕：找出谁、动作、状态和时间，再区分能做、暂时不能、需要确认。",
        output: "对 5 条字幕各说一句真实回复，并练会 Could you repeat that? 和 Do you mean ...?",
      },
      {
        id: "w2",
        week: "第 2 周",
        focus: "确认、请求重复与关键信息",
        study: "练数字、日期、负责人、否定和截止时间；遇到字幕不确定时先确认，不凭猜测行动。",
        output: "完成一次 5 分钟模拟会议：读懂字幕、回复 3 次，并至少主动确认 1 次。",
      },
    ],
  },
  {
    id: "phase-1",
    eyebrow: "WEEK 3-8",
    title: "阶段一 · 语法地基与会议短句",
    description:
      "语法继续学，但不再等学完才进入工作场景。每个语法点当天都用字幕例句和自己的工作内容练习，优先保证能看懂任务状态、问题、请求和时间要求。",
    weeks: [
      {
        id: "w3",
        week: "第 3 周",
        focus: "五种基本句型与找主干",
        study: "先找主语和谓语，把介词短语和从句全部括起来忽略，剩下的就是主干。",
        output: "每天拆 3 个工作句，写出主干，再用一句简单英语回复其中 1 句。",
      },
      {
        id: "w4",
        week: "第 4 周",
        focus: "三个基础时态",
        study: "一般现在、一般过去、一般将来。",
        output: "用同一件工作内容分别回答：已完成、正在做、准备做。",
      },
      {
        id: "w5",
        week: "第 5 周",
        focus: "疑问句与否定句",
        study: "Do/Did/Can 引导的疑问语序，以及否定的构成。",
        output: "把 5 个工作陈述改成问题，并练一句请求重复或确认理解。",
      },
      {
        id: "w6",
        week: "第 6 周",
        focus: "情态动词",
        study: "can、could、would、should：外企的礼貌表达和不确定性表达全靠它。",
        output: "用 can / could / would 完成 5 个会议请求或确认句。",
      },
      {
        id: "w7",
        week: "第 7 周",
        focus: "现在完成时与被动语态",
        study: "I have fixed it、It was deployed，技术讨论超高频。",
        output: "看懂 6 条完成时或被动语态字幕，并用简单句说明当前状态。",
      },
      {
        id: "w8",
        week: "第 8 周",
        focus: "介词搭配与综合造句",
        study: "responsible for、depend on、by Friday 这类整块记忆。",
        output: "完成一次 3 分钟字幕辅助模拟会议，能说清 10 个工作短句。",
      },
    ],
  },
  {
    id: "phase-2",
    eyebrow: "WEEK 9-16",
    title: "阶段二 · 词块自动化",
    description:
      "把 100 句核心问答练到「中文一出现就脱口而出」。每周约 13 句，用精听五步处理。这八周是整个计划的主体，决定你能不能开口。",
    weeks: [
      {
        id: "w9",
        week: "第 9 周",
        focus: "会议基础表达（第 1-13 句）",
        study: "开场、确认音视频、议程。",
        output: "看中文说出对应那一句，不要求自由发挥。",
      },
      {
        id: "w10",
        week: "第 10 周",
        focus: "推进与补充（第 14-26 句）",
        study: "推进议题、征求补充、表达同意。",
        output: "把句中的方括号替换成自己的项目名。",
      },
      {
        id: "w11",
        week: "第 11 周",
        focus: "进度汇报（第 27-39 句）",
        study: "汇报进展、是否按计划、预计完成时间。",
        output: "用 3 句话说清今天做了什么。",
      },
      {
        id: "w12",
        week: "第 12 周",
        focus: "风险与阻塞（第 40-52 句）",
        study: "风险提示、被什么卡住、请求协助。",
        output: "说出自己当前真实的一个阻塞。",
      },
      {
        id: "w13",
        week: "第 13 周",
        focus: "问题描述（第 53-65 句）",
        study: "描述 Bug、复现步骤、影响范围。",
        output: "用 4 句话描述一个真实 Bug。",
      },
      {
        id: "w14",
        week: "第 14 周",
        focus: "提问与澄清（第 66-78 句）",
        study: "提问、确认理解、请求重复、表达不确定。",
        output: "针对一个真实需求提出 3 个澄清问题。",
      },
      {
        id: "w15",
        week: "第 15 周",
        focus: "评审与协作（第 79-90 句）",
        study: "评论 PR、提出建议、请求修改。",
        output: "口头讲自己的一个 PR 改了什么。",
      },
      {
        id: "w16",
        week: "第 16 周",
        focus: "时间与计划（第 91-100 句）",
        study: "截止时间、优先级、排期、跨团队依赖。",
        output: "完成 100 句总测：中 → 英 一次说出率达到 80%。",
      },
    ],
  },
  {
    id: "phase-3",
    eyebrow: "WEEK 17-24",
    title: "阶段三 · 场景实战",
    description:
      "从「能说句子」升级到「能参与讨论」。每两周一个场景，流程固定：会前写脚本 → 会上照念 → 周末脱稿重录并对比。AI 语音对话从这一阶段开始。",
    weeks: [
      {
        id: "w17",
        week: "第 17-18 周",
        focus: "站会与一对一",
        study: "把词块组合成完整段落，练习自然过渡。",
        output: "真实站会全程用英文发言，第 18 周末不看稿。",
      },
      {
        id: "w19",
        week: "第 19-20 周",
        focus: "Bug 讨论与排障",
        study: "因果、假设、推测、排除法的说法。",
        output: "和同事用英文过一次线上问题，能问能答。",
      },
      {
        id: "w21",
        week: "第 21-22 周",
        focus: "代码评审与方案讨论",
        study: "礼貌反对、提替代方案、权衡取舍、达成一致。",
        output: "在评审中用英文提出一次不同意见并说明理由。",
      },
      {
        id: "w23",
        week: "第 23-24 周",
        focus: "Demo 与跨团队沟通",
        study: "演示串场、引导注意力、处理提问、收尾总结。",
        output: "脱稿做一次 3 分钟英文 Demo，并回答 3 个提问。",
      },
    ],
  },
];

const grammarItems: GrammarItem[] = [
  {
    title: "五种基本句型与找主干",
    why: "治「长难句看不懂」和「中文语序直译」。这是阶段一的核心。",
    documentPath: "01-foundations/03-five-basic-sentence-patterns.zh.md",
  },
  {
    title: "三个基础时态",
    why: "站会天天用，说错会让人分不清做完没做完。",
    documentPath: "01-foundations/04-three-basic-tenses.zh.md",
  },
  {
    title: "疑问句与否定句语序",
    why: "不会提问就无法参与会议讨论。",
    documentPath: "01-foundations/05-questions-negatives-imperatives.zh.md",
  },
  {
    title: "情态动词 can / could / would / should",
    why: "外企的礼貌表达和不确定性表达全靠它。",
    documentPath: "01-foundations/07-modals-prepositions-conjunctions.zh.md",
  },
  {
    title: "现在完成时与被动语态",
    why: "I have fixed it、It was deployed，技术讨论超高频。",
    documentPath: "02-intermediate/08-aspect-passive-agreement.zh.md",
  },
  {
    title: "职场介词搭配",
    why: "responsible for、depend on、by Friday 这类错误会真的造成误解。",
    documentPath: "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.zh.md",
  },
];

const skipList: string[] = [
  "各类从句的精细区分（非谓语、名词性、定语、状语、转述）——听懂读懂即可，口语里本来就少",
  "虚拟语气与倒装——会议中几乎不出现，需要时用简单句绕开",
  "省略、独立主格、正式书面语——现阶段收益为零，写文档时再查",
  "冠词和单复数的细节——错了不影响理解，不要专门花时间",
];

const pronunciationChecks: string[] = [
  "长短音不分：sheep /iː/ 和 ship /ɪ/ 读成一样。",
  "th 读成 s 或 f：think 读成 sink、three 读成 free。",
  "v 读成 w：very 读成 weri。develop 这个词你天天说，先查它。",
  "词尾 /l/ 被吞：people 读成 pipo、useful 结尾消失。",
  "辅音后多加一个「呃」：bus 读成 bus-呃。",
  "词尾辅音吞掉：fixed、asked、logs 的结尾没有读出来。",
];

const milestones: Milestone[] = [
  { when: "第 2 周末", criteria: "6 项发音体检全部通过，并能听出句子里弱读的位置。" },
  { when: "第 8 周末", criteria: "能在 10 秒内找出长句主干，并不看稿说出 10 个关于自己工作的完整短句。" },
  { when: "第 16 周末", criteria: "100 句核心问答中 → 英一次说出率达到 80%。" },
  { when: "第 24 周末", criteria: "站会脱稿发言，会议中能主动提问和请求澄清，并能脱稿做 3 分钟 Demo。" },
];

const pitfalls: Pitfall[] = [
  {
    title: "又去找新材料",
    detail: "你的材料已经足够。先用下面列出的四份资源和允许使用的会议字幕练习；新材料只有在当前内容太难或与工作无关时才替换。",
  },
  {
    title: "只输入不输出",
    detail: "听懂和会说是两套神经通路。没有录音的一天，等于没练。",
  },
  {
    title: "等语法学完再开口",
    detail: "这是学了十几年还不能说的根本原因。语法必须和输出并行，且只补必修 6 项。",
  },
  {
    title: "追求零错误",
    detail: "标准是「对方一次听懂」，不是「语法全对」。你的外籍同事自己也天天说破碎句子。",
  },
  {
    title: "把做工具当成学英语",
    detail: "建站、生成音频、打包 Anki 都有成就感，但不产生口语能力。工具够用就停手，把时间还给开口。",
  },
];

/** Displays the twelve-week workplace speaking plan with per-week progress. */
export function PlanPage() {
  const siteBasePath = import.meta.env.VITE_SITE_BASE_PATH ?? "/";
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => setCompleted(planProgress.read()), []);

  const totalWeeks = phases.reduce((count, phase) => count + phase.weeks.length, 0);
  const documentHref = (documentPath: string) =>
    `${siteBasePath}docs-simple-grammar/?doc=${encodeURIComponent(documentPath)}`;

  return (
    <div className="plan-shell">
      <header className="topbar plan-topbar">
        <a className="icon-button" href={siteBasePath} aria-label="返回目录" title="返回目录">
          <ArrowLeft size={20} />
        </a>
        <a className="brand" href={siteBasePath}>
          <span className="brand-mark"><BookOpen size={19} /></span>
          <span>Learn <strong>English</strong></span>
        </a>
        <div className="plan-progress-summary" role="status">
          已完成 {completed.length} / {totalWeeks} 项
        </div>
      </header>

      <main className="plan-main">
        <section className="plan-hero">
          <div>
            <span className="plan-kicker">24-WEEK SPEAKING PLAN</span>
            <h1>24 周外企职场口语计划</h1>
            <p>
              为「成年人、基础薄弱、无语言环境、软件开发、以开口为目标」设计。核心原则只有一条：
              <strong>材料砍到最少，重复提到最高，每天必须开口并录音。</strong>
            </p>
          </div>
          <div className="plan-hero-card">
            <div><Target size={18} /><strong>终点</strong></div>
            <p>能在英文会议中发言、提问、澄清，并独立完成 Demo。</p>
            <div><CalendarCheck size={18} /><strong>投入</strong></div>
            <p>每天 40 分钟，每周 6 天，共 24 周（约 6 个月）。</p>
          </div>
        </section>

        <section className="plan-section">
          <header>
            <span className="plan-kicker">DAILY LOOP</span>
            <h2>每天 40 分钟固定闭环</h2>
            <p>先按这个结构试行，根据字幕理解和实际回复表现调整难度与用时；24 周是参考安排，不是达标期限。</p>
          </header>
          <div className="plan-daily-grid">
            {dailyBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <article className="plan-daily-card" key={block.name}>
                  <div className="plan-daily-head">
                    <span className="plan-daily-icon"><Icon size={18} /></span>
                    <span className="plan-daily-minutes">{block.minutes}</span>
                  </div>
                  <h3>{block.name}</h3>
                  <p>{block.detail}</p>
                </article>
              );
            })}
          </div>
          <ul className="plan-routine-list">
            {weeklyRoutines.map((routine) => <li key={routine}>{routine}</li>)}
          </ul>
        </section>

        <section className="plan-section">
          <header>
            <span className="plan-kicker">INTENSIVE LISTENING</span>
            <h2>听力材料怎么选 + 精听五步</h2>
            <p>
              先用英文字幕建立句子和声音的对应关系，再逐步减少字幕依赖。材料应当短、和工作相关、能让你练习理解与回复；完全听不懂时先降低难度，不靠重复猜测硬撑。
            </p>
          </header>
          <div className="plan-listening-grid">
            {listeningSteps.map((step) => (
              <article className="plan-listening-step" key={step.order}>
                <span className="plan-listening-order">{step.order}</span>
                <div>
                  <strong>{step.name}</strong>
                  <span>{step.detail}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="plan-skip">
            <h3>为什么第 2 步最关键</h3>
            <ul>
              <li>「不认识的词」是词汇问题，查一下就解决。</li>
              <li>「认识但听不出」是语音问题，只能靠跟读解决，背单词完全无效。</li>
              <li>如果你背了很多单词却听不懂，说明你的问题几乎全在第二类。</li>
            </ul>
          </div>
        </section>

        <section className="plan-section">
          <header>
            <span className="plan-kicker">PRONUNCIATION CHECK</span>
            <h2>发音体检：只查这 6 项</h2>
            <p>
              能读对常见单词是你的资产，所以
              <strong>不要从头学 48 个音标</strong>
              。但中国人的发音错误是成系统的，因为一直错得一致，自己反而听不出来。逐条录音比对，错的专项练，对的直接跳过。
            </p>
          </header>
          <div className="plan-skip">
            <h3>逐条录音自查</h3>
            <ul>
              {pronunciationChecks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        {phases.map((phase) => (
          <section className="plan-section" key={phase.id}>
            <header>
              <span className="plan-kicker">{phase.eyebrow}</span>
              <h2>{phase.title}</h2>
              <p>{phase.description}</p>
            </header>
            <div className="plan-week-list">
              {phase.weeks.map((week) => {
                const done = completed.includes(week.id);
                return (
                  <article className={`plan-week${done ? " is-done" : ""}`} key={week.id}>
                    <button
                      className="plan-week-check"
                      onClick={() => setCompleted(planProgress.toggle(week.id))}
                      aria-pressed={done}
                      aria-label={`标记${week.week}${done ? "未完成" : "已完成"}`}
                    >
                      {done ? <CheckCircle2 size={20} /> : <CircleDashed size={20} />}
                    </button>
                    <div className="plan-week-body">
                      <div className="plan-week-title">
                        <strong>{week.week}</strong>
                        <span>{week.focus}</span>
                      </div>
                      <p><span className="plan-week-label">学什么</span>{week.study}</p>
                      <p><span className="plan-week-label">输出任务</span>{week.output}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        <section className="plan-section">
          <header>
            <span className="plan-kicker">REQUIRED GRAMMAR</span>
            <h2>必修语法：只有这 6 项</h2>
            <p>两周内完成，之后当字典查，不要从头通读。遇到卡壳再回查那一个点，并立刻用自己的工作内容造 5 句。</p>
          </header>
          <div className="plan-grammar-list">
            {grammarItems.map((item, index) => (
              <a className="plan-grammar-item" href={documentHref(item.documentPath)} key={item.title}>
                <span className="plan-grammar-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="plan-grammar-copy">
                  <strong>{item.title}</strong>
                  <span>{item.why}</span>
                </span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
          <div className="plan-skip">
            <h3>现在明确跳过</h3>
            <ul>
              {skipList.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="plan-section">
          <header>
            <span className="plan-kicker">CHECKPOINTS</span>
            <h2>达标标准</h2>
            <p>用能力衡量进度，不要用「学了多久」衡量。</p>
          </header>
          <div className="plan-milestone-list">
            {milestones.map((milestone) => (
              <article className="plan-milestone" key={milestone.when}>
                <strong>{milestone.when}</strong>
                <span>{milestone.criteria}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="plan-section">
          <header>
            <span className="plan-kicker">FAILURE MODES</span>
            <h2>五个必须避开的失败模式</h2>
            <p>这个计划失败,几乎都是因为下面五件事之一。</p>
          </header>
          <div className="plan-pitfall-list">
            {pitfalls.map((pitfall) => (
              <article className="plan-pitfall" key={pitfall.title}>
                <TriangleAlert size={17} />
                <div>
                  <strong>{pitfall.title}</strong>
                  <span>{pitfall.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="plan-section plan-resource-section">
          <header>
            <span className="plan-kicker">ONLY THESE</span>
            <h2>整个计划只用这四份资源</h2>
            <p>其他所有材料暂时关闭。需要时再回来，不要现在打开。</p>
          </header>
          <div className="plan-resource-list">
            <a href={documentHref("zero-to-work-english/01-发音入门/03-辅音.md")}>
              <strong>辅音与语流（发音入门 03、05）</strong>
              <span>按需查 03 里的常见错误表和 05 的连读弱读；发音练习服务于字幕听辨和会议回复，不是开会前置课程。</span>
            </a>
            <a href={documentHref("zero-to-work-english/04-工作沟通B1/software-business-english-must-know.zh.md")}>
              <strong>软件商务英语核心问答 100 句</strong>
              <span>阶段二的全部内容来源，自带连读与不连读双版本音频，正好用于影子跟读。</span>
            </a>
            <a href={documentHref("zero-to-work-english/01-发音入门/05-重音节奏连读语调.md")}>
              <strong>重音、节奏、连读与语调</strong>
              <span>在字幕辅助练习中按需使用，帮助你把书面句子和实际声音对应起来，也让短回复更自然。</span>
            </a>
            <a href={`${siteBasePath}words/`}>
              <strong>我的单词本</strong>
              <span>每天回听录音后，把卡壳的表达存进来，第二天进入中 → 英 提取环节。</span>
            </a>
          </div>
        </section>

        <section className="plan-footer-note">
          <p>
            如果某一周没做到，不要重新规划，直接从当天继续。
            <strong>频率比时长重要，连续比完美重要。</strong>
          </p>
          {completed.length > 0 && (
            <button className="plan-reset" onClick={() => setCompleted(planProgress.reset())}>
              <RotateCcw size={15} /> 清空进度
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
