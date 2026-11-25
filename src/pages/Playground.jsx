import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { bySlug } from "../registry.js";
import Sandbox from "../engine/Sandbox.jsx";
import { W, copy, download } from "./Detail.jsx";
const store = {}; // per-session edits; never touches the original source
export default function Playground() {
  const d = bySlug(useParams().slug);
  const [code, setCode] = useState(() => store[d?.slug] ?? d?.source ?? ""); const [dev, setDev] = useState("Desktop"); const [k, setK] = useState(0);
  const [status, setStatus] = useState("ok"); const [notice, setNotice] = useState(""); const [pos, setPos] = useState({ l: 1, c: 1 }); const [tab, setTab] = useState("editor"); const [split, setSplit] = useState(50); const [theme, setTheme] = useState("vs-dark");
  const drag = useRef(false);
  useEffect(() => {
    if (!d) return;
    setCode(store[d.slug] ?? d.source);
    setK((key) => key + 1);
  }, [d?.slug]);
  if (!d) return <p className="p-10">Design not found.</p>;
  const edit = (v) => { setCode(v ?? ""); store[d.slug] = v ?? ""; };
  const copyCode = async () => {
    try { await copy(code); setNotice("Customized source copied"); }
    catch { setNotice("Clipboard access was denied"); }
    setTimeout(() => setNotice(""), 2200);
  };
  const downloadCode = () => { download(d.file, code); setNotice("Customized source downloaded"); setTimeout(() => setNotice(""), 2200); };
  const Btn = (p) => <button {...p} className="rounded border border-line px-2.5 py-1 text-xs hover:border-ac" />;
  return (<div className="flex h-[calc(100vh-53px)] flex-col" onPointerMove={(e) => drag.current && setSplit(Math.min(75, Math.max(25, (e.clientX / innerWidth) * 100)))} onPointerUp={() => (drag.current = false)}>
    <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-2 text-sm">
      <Link to={"/designs/" + d.slug} className="text-mut">← {d.name}</Link><span className="mx-2 text-line">|</span>
      <Btn onClick={copyCode}>Copy customized code</Btn><Btn onClick={() => { edit(d.source); setK(k + 1); setNotice("Original source restored"); setTimeout(() => setNotice(""), 2200); }}>Reset original</Btn><Btn onClick={downloadCode}>Download</Btn>
      <select value={theme} onChange={(e) => setTheme(e.target.value)} className="rounded border border-line bg-panel px-2 py-1 text-xs"><option value="vs-dark">Editor: Dark</option><option value="light">Editor: Light</option></select>
      <span className="ml-auto flex gap-1">{Object.keys(W).map((n) => <Btn key={n} onClick={() => setDev(n)} style={n === dev ? { borderColor: "var(--ac)" } : {}}>{n}</Btn>)}<Btn onClick={() => setK(k + 1)}>Reload</Btn></span>
    </div>
    <div className="flex border-b border-line md:hidden">{["editor", "preview"].map((t) => <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 text-sm " + (tab === t ? "text-ac" : "text-mut")}>{t}</button>)}</div>
    <div className="flex min-h-0 flex-1">
      <div className={(tab === "editor" ? "block" : "hidden") + " md:block"} style={{ width: innerWidth >= 768 ? split + "%" : "100%" }}>
        <Editor language="javascript" theme={theme} value={code} onChange={edit} options={{ minimap: { enabled: false }, fontSize: 13, tabSize: 2, wordWrap: "on", automaticLayout: true }} onMount={(ed) => ed.onDidChangeCursorPosition((e) => setPos({ l: e.position.lineNumber, c: e.position.column }))} />
      </div>
      <div className="hidden w-1 cursor-col-resize bg-line hover:bg-ac md:block" onPointerDown={() => (drag.current = true)} />
      <div className={(tab === "preview" ? "block" : "hidden") + " min-w-0 flex-1 bg-bg md:block"}><Sandbox code={code} width={W[dev]} reloadKey={k} onStatus={setStatus} /></div>
    </div>
    <div className="flex gap-4 border-t border-line px-4 py-1 text-xs text-mut"><span>{status === "compiling" ? "Compiling…" : status === "error" ? "Preview error" : "Ready"}</span><span>Ln {pos.l}, Col {pos.c}</span><span>JSX</span><span className="ml-auto">{notice}</span></div>
  </div>);
}
