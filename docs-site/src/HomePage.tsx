import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Languages,
  Layers3,
  LibraryBig,
} from "lucide-react";

interface SiteRoute {
  path: string;
  name: string;
  englishName: string;
  description: string;
  icon: typeof BookOpen;
}

const routes: SiteRoute[] = [
  {
    path: "docs-simple-grammar/",
    name: "英语学习文档",
    englishName: "DOCUMENT LIBRARY",
    description: "浏览语法、发音、日常沟通和软件职场英语课程。",
    icon: LibraryBig,
  },
  {
    path: "preposition/",
    name: "软件职场英语介词",
    englishName: "WORKPLACE PREPOSITIONS",
    description: "通过会议、Demo、Bug 和代码评审场景掌握常用介词。",
    icon: Languages,
  },
  {
    path: "number/",
    name: "数字、日期与时间",
    englishName: "NUMBERS & CALENDAR",
    description: "练习数字、年份、月份、日期和工作中的时间表达。",
    icon: CalendarDays,
  },
  {
    path: "words/",
    name: "我的单词本",
    englishName: "PERSONAL VOCABULARY",
    description: "记录单词、读音、释义和例句，并进行发音练习。",
    icon: BookOpen,
  },
  {
    path: "anki/",
    name: "Anki 句子训练",
    englishName: "SENTENCE TRAINER",
    description: "使用卡片、听力和跟读训练软件工作场景中的完整表达。",
    icon: Layers3,
  },
];

/**
 * Displays every public learning route from the site root.
 *
 * @returns A navigable list of learning tools and courses.
 */
export function HomePage() {
  const siteBasePath = import.meta.env.VITE_SITE_BASE_PATH ?? "/";

  return (
    <div className="home-shell">
      <header className="home-header">
        <div className="home-brand"><BookOpen size={19} /> Learn <strong>English</strong></div>
        <span>学习入口</span>
      </header>
      <main className="home-main">
        <div className="home-intro">
          <span className="home-kicker">LEARNING DIRECTORY</span>
          <h1>选择学习内容</h1>
          <p>课程、练习和个人学习工具都在这里。</p>
        </div>
        <nav className="home-route-list" aria-label="学习页面">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <a href={`${siteBasePath}${route.path}`} key={route.path}>
                <span className="home-route-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="home-route-icon"><Icon size={21} /></span>
                <span className="home-route-copy">
                  <span className="home-route-name">{route.name}</span>
                  <span className="home-route-description">{route.description}</span>
                </span>
                <span className="home-route-meta">{route.englishName}</span>
                <ChevronRight className="home-route-arrow" size={20} />
              </a>
            );
          })}
        </nav>
      </main>
    </div>
  );
}