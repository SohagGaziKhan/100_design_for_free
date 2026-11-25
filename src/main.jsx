import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const Library = lazy(() => import("./pages/Library.jsx"));
const Detail = lazy(() => import("./pages/Detail.jsx"));
const Playground = lazy(() => import("./pages/Playground.jsx"));
const Page = ({ children }) => <Suspense fallback={<main className="mx-auto max-w-7xl px-5 py-20 text-sm text-mut">Loading page…</main>}>{children}</Suspense>;
const saved = localStorage.getItem("theme") || "dark";
document.documentElement.dataset.theme = saved;
createRoot(document.getElementById("root")).render(
  <StrictMode><BrowserRouter><Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Page><Home /></Page>} />
      <Route path="/designs" element={<Page><Library /></Page>} />
      <Route path="/categories" element={<Page><Library /></Page>} />
      <Route path="/categories/:categorySlug" element={<Page><Library /></Page>} />
      <Route path="/designs/:slug" element={<Page><Detail /></Page>} />
      <Route path="/playground/:slug" element={<Page><Playground /></Page>} />
      <Route path="*" element={<p className="p-10">Page not found.</p>} />
    </Route>
  </Routes></BrowserRouter></StrictMode>
);
