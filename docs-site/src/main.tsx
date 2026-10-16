import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "@toast-ui/editor/dist/toastui-editor.css";
import { App } from "./App";
import { HomePage } from "./HomePage";
import { NumberPage } from "./NumberPage";
import { PlanPage } from "./PlanPage";
import { SentencesPage } from "./SentencesPage";
import { WordsPage } from "./WordsPage";
import documents from "virtual:analysis-documents";
import "./styles.css";

const siteBasePath = import.meta.env.VITE_SITE_BASE_PATH ?? "/";
const prepositionDocumentPath = "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.zh.md";

function resolvePage(pathname: string): ReactElement {
  if (pathname === siteBasePath || /\/list\/?$/.test(pathname)) return <HomePage />;
  if (/\/adult-english\/?$/.test(pathname)) {
    const requestedPath = new URL(window.location.href).searchParams.get("doc");
    const courseIndex = "adult-software-english-course/README.zh.md";
    const documentPath = documents.some((document) => document.path === requestedPath)
      ? requestedPath!
      : courseIndex;
    return <App initialDocumentPath={documentPath} />;
  }
  if (/\/plan\/?$/.test(pathname)) return <PlanPage />;
  if (/\/sentences\/?$/.test(pathname)) return <SentencesPage />;
  if (/\/words\/?$/.test(pathname)) return <WordsPage />;
  if (/\/number\/?$/.test(pathname)) return <NumberPage />;
  if (/\/workplace-speaking\/?$/.test(pathname)) {
    return <App initialDocumentPath="workplace-spoken-english.zh.md" />;
  }
  if (/\/demo-platform\/?$/.test(pathname)) {
    return <App initialDocumentPath="demo-platform.md" />;
  }
  const meetingRoute = pathname.match(
    /\/(meeting-complete-vocabulary|meeting-english-phrases|meeting-frequent-words)\/?$/,
  );
  if (meetingRoute) {
    const requestedPath = new URL(window.location.href).searchParams.get("doc");
    const documentPath = meetingRoute[1] === "meeting-english-phrases" && requestedPath === "meeting-english-phrases.md"
      ? requestedPath
      : `${meetingRoute[1]}.zh.md`;
    if (!documents.some((document) => document.path === documentPath)) {
      return (
        <div className="home-shell">
          <main className="home-main">
            <h1>文档暂不可用</h1>
            <p role="status">当前站点未包含文档：{documentPath}</p>
            <a href={siteBasePath}>返回学习目录</a>
          </main>
        </div>
      );
    }
    return <App key={documentPath} initialDocumentPath={documentPath} />;
  }
  const isPrepositionRoute = /\/preposition\/?$/.test(pathname);
  return <App initialDocumentPath={isPrepositionRoute ? prepositionDocumentPath : undefined} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{resolvePage(window.location.pathname)}</StrictMode>,
);
