import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Code2, Copy, Download, Expand, Heart, Link2, RotateCw, Sparkles } from "lucide-react";
import Editor from "@monaco-editor/react";
import { bySlug, designs } from "../registry.js";
import Sandbox from "../engine/Sandbox.jsx";

export const W = { Desktop: "100%", Tablet: "768px", Mobile: "390px" };
export const copy = (text) => navigator.clipboard.writeText(text);
export const download = (name, text) => {
  const url = URL.createObjectURL(new Blob([text], { type: "text/javascript;charset=utf-8" }));
  const a = document.createElement("a"); a.href = url; a.download = `${name}.jsx`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
const readFavorites = () => {
  try { return JSON.parse(localStorage.getItem("favorites") || "[]"); }
  catch { return []; }
};
const List = ({ title, items }) => <section className="mt-9"><h2 className="mb-3 text-lg font-semibold tracking-tight">{title}</h2><ul className="grid gap-2 sm:grid-cols-2">{items.map((item) => <li key={item} className="rounded-lg border border-line bg-panel px-4 py-3 text-sm text-mut">{item}</li>)}</ul></section>;

export default function Detail() {
  const { slug } = useParams(); const d = bySlug(slug);
  const [device, setDevice] = useState("Desktop"); const [reloadKey, setReloadKey] = useState(0);
  const [favorites, setFavorites] = useState(readFavorites); const [notice, setNotice] = useState("");
  const [codeOpen, setCodeOpen] = useState(true);
  if (!d) return <main className="mx-auto max-w-7xl px-5 py-16"><h1 className="text-2xl font-semibold">Design not found</h1><Link to="/designs" className="mt-4 inline-block text-sm text-ac">Back to designs</Link></main>;
  const favorite = favorites.includes(d.slug);
  const notify = (text) => { setNotice(text); setTimeout(() => setNotice(""), 2200); };
  const toggleFavorite = () => {
    const updated = favorite ? favorites.filter((item) => item !== d.slug) : [...favorites, d.slug];
    localStorage.setItem("favorites", JSON.stringify(updated)); setFavorites(updated);
    notify(favorite ? "Removed from favorites" : "Saved to favorites");
  };
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: d.name, text: d.description, url: location.href });
      else { await copy(location.href); notify("Design link copied"); }
    } catch (error) {
      if (error?.name !== "AbortError") notify("Could not share this design");
    }
  };
  const related = designs.filter((item) => item.slug !== d.slug && item.category === d.category);
  const recommendations = related.length ? related : designs.filter((item) => item.slug !== d.slug);

  return (<main className="mx-auto max-w-7xl px-5 py-8 sm:py-12">
    <Link to="/designs" className="inline-flex items-center gap-2 text-sm text-mut hover:text-fg"><ArrowLeft size={15} /> Back to designs</Link>
    <header className="mt-7 flex flex-wrap items-end justify-between gap-5">
      <div><p className="text-xs font-medium uppercase tracking-[.15em] text-ac">{d.category}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{d.name}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-mut">{d.description}</p></div>
      <div className="flex gap-2">
        <button onClick={toggleFavorite} aria-pressed={favorite} className={"inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm " + (favorite ? "border-ac text-ac" : "border-line text-mut hover:text-fg")}><Heart size={15} fill={favorite ? "currentColor" : "none"} />{favorite ? "Saved" : "Favorite"}</button>
        <button onClick={share} className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-mut hover:text-fg"><Link2 size={15} />Share</button>
      </div>
    </header>

    <section className="mt-8 overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1" role="group" aria-label="Preview device size">{Object.keys(W).map((name) => <button key={name} onClick={() => setDevice(name)} aria-pressed={device === name} className={"rounded-md px-3 py-1.5 text-xs " + (device === name ? "bg-ac text-white" : "text-mut hover:text-fg")}>{name}</button>)}</div>
        <div className="flex gap-1">
          <button onClick={() => setReloadKey((key) => key + 1)} className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-mut hover:bg-bg hover:text-fg"><RotateCw size={13} />Reload</button>
          <button onClick={() => document.getElementById("design-preview")?.requestFullscreen?.()} className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-mut hover:bg-bg hover:text-fg"><Expand size={13} />Fullscreen</button>
        </div>
      </div>
      <div id="design-preview" className="h-[520px] bg-white sm:h-[640px]"><Sandbox code={d.source} width={W[device]} reloadKey={reloadKey} /></div>
    </section>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
      <div>
        <section><div className="flex items-center gap-2"><Sparkles size={16} className="text-ac" /><h2 className="text-lg font-semibold tracking-tight">Design overview</h2></div><p className="mt-3 max-w-3xl text-sm leading-7 text-mut">{d.description} Use this starting point as a real, editable React interface—not a static mockup.</p><div className="mt-4 flex flex-wrap gap-2">{d.tags.map((tag) => <span key={tag} className="rounded-md border border-line bg-panel px-2.5 py-1 text-xs text-mut">{tag}</span>)}</div></section>
        <List title="Designed for" items={d.use} /><List title="Features" items={d.features} />

        <section className="mt-10 overflow-hidden rounded-xl border border-line bg-[#111318]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <button onClick={() => setCodeOpen(!codeOpen)} aria-expanded={codeOpen} className="flex items-center gap-2 text-left"><Code2 size={16} className="text-ac" /><span className="text-sm font-medium text-white">Complete source</span><span className="text-xs text-slate-400">{d.file}.jsx · JSX</span></button>
            <div className="flex gap-2"><button onClick={async () => { try { await copy(d.source); notify("Source code copied"); } catch { notify("Clipboard access was denied"); } }} className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/10"><Copy size={13} />Copy</button><button onClick={() => { download(d.file, d.source); notify("Source file downloaded"); }} className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/10"><Download size={13} />Download</button></div>
          </div>
          {codeOpen && <Editor height="420px" language="javascript" theme="vs-dark" value={d.source} options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13, lineNumbers: "on", scrollBeyondLastLine: false, wordWrap: "on", automaticLayout: true, padding: { top: 16 } }} />}
        </section>

        <section className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-line bg-panel p-6 sm:p-8">
          <div><h2 className="text-xl font-semibold tracking-tight">Make it yours</h2><p className="mt-2 max-w-lg text-sm leading-6 text-mut">Edit a private copy and see your changes in the live preview. The original source stays untouched.</p></div>
          <Link to={`/playground/${d.slug}`} className="rounded-lg bg-ac px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">Open playground</Link>
        </section>
      </div>
      <aside className="h-fit rounded-xl border border-line bg-panel p-5"><h2 className="font-semibold">About this design</h2><dl className="mt-4 space-y-4 text-sm"><div><dt className="text-xs text-mut">Category</dt><dd className="mt-1">{d.category}</dd></div><div><dt className="text-xs text-mut">Technologies</dt><dd className="mt-1">React · JSX · Tailwind CSS</dd></div><div><dt className="text-xs text-mut">Source</dt><dd className="mt-1 break-all font-mono text-xs text-mut">Registry-generated standalone: {d.file}.jsx</dd></div></dl></aside>
    </div>

    {!!recommendations.length && <section className="mt-14 border-t border-line pt-8"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-medium uppercase tracking-[.15em] text-ac">{related.length ? "Same category" : "You may also like"}</p><h2 className="mt-2 text-xl font-semibold tracking-tight">Related designs</h2></div><Link to="/designs" className="text-sm text-mut hover:text-fg">View all</Link></div><div className="grid gap-3 sm:grid-cols-2">{recommendations.slice(0, 3).map((item) => <Link key={item.id} to={`/designs/${item.slug}`} className="rounded-xl border border-line bg-panel p-4 transition hover:border-ac"><p className="text-xs text-mut">{item.category}</p><h3 className="mt-1 font-medium">{item.name}</h3><p className="mt-2 text-sm text-mut">{item.description}</p></Link>)}</div></section>}
    {notice && <div role="status" className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-sm text-bg shadow-lg"><Check size={15} />{notice}</div>}
  </main>);
}
