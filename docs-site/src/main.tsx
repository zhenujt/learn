import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "@toast-ui/editor/dist/toastui-editor.css";
import { App } from "./App";
import { HomePage } from "./HomePage";
import { NumberPage } from "./NumberPage";
import { PlanPage } from "./PlanPage";
import { WordsPage } from "./WordsPage";
import "./styles.css";

const siteBasePath = import.meta.env.VITE_SITE_BASE_PATH ?? "/";
const prepositionDocumentPath = "zero-to-work-english/04-工作沟通B1/software-workplace-prepositions.zh.md";

function resolvePage(pathname: string): ReactElement {
  if (pathname === siteBasePath || /\/list\/?$/.test(pathname)) return <HomePage />;
  if (/\/plan\/?$/.test(pathname)) return <PlanPage />;
  if (/\/words\/?$/.test(pathname)) return <WordsPage />;
  if (/\/number\/?$/.test(pathname)) return <NumberPage />;
  const isPrepositionRoute = /\/preposition\/?$/.test(pathname);
  return <App initialDocumentPath={isPrepositionRoute ? prepositionDocumentPath : undefined} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{resolvePage(window.location.pathname)}</StrictMode>,
);
