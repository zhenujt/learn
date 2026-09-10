import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "@toast-ui/editor/dist/toastui-editor.css";
import { App } from "./App";
import { HomePage } from "./HomePage";
import { NumberPage } from "./NumberPage";
import { PlanPage } from "./PlanPage";
import { WordsPage } from "./WordsPage";
import documents from "virtual:analysis-documents";
import "./styles.css";

const siteBasePath = import.meta.env.VITE_SITE_BASE_PATH ?? "/";
const prepositionDocumentPath = "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.zh.md";

function resolvePage(pathname: string): ReactElement {
  if (pathname === siteBasePath || /\/list\/?$/.test(pathname)) return <HomePage />;
  if (/\/adult-english\/?$/.test(pathname)) {
    const requestedPath = new URL(window.location.href).searchParams.get("doc");
    const chineseIndex = "adult-software-english-course/README.zh.md";
    const courseIndex = documents.some((document) => document.path === chineseIndex)
      ? chineseIndex
      : "adult-software-english-course/README.md";
    const documentPath = documents.some((document) => document.path === requestedPath)
      ? requestedPath!
      : courseIndex;
    return <App initialDocumentPath={documentPath} />;
  }
  if (/\/plan\/?$/.test(pathname)) return <PlanPage />;
  if (/\/words\/?$/.test(pathname)) return <WordsPage />;
  if (/\/number\/?$/.test(pathname)) return <NumberPage />;
  const isPrepositionRoute = /\/preposition\/?$/.test(pathname);
  return <App initialDocumentPath={isPrepositionRoute ? prepositionDocumentPath : undefined} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{resolvePage(window.location.pathname)}</StrictMode>,
);
