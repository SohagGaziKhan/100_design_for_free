import { useEffect, useRef, useState } from "react";
import { compile } from "./compile.js";
// The iframe has NO allow-same-origin: it cannot touch the parent's DOM, storage or cookies.
const DOC = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script src="https://cdn.tailwindcss.com/3.4.17"></script>
<script type="importmap">{"imports":{"react":"https://esm.sh/react@19.0.0","react/jsx-runtime":"https://esm.sh/react@19.0.0/jsx-runtime","react-dom/client":"https://esm.sh/react-dom@19.0.0/client?deps=react@19.0.0"}}</script>
<style>body{margin:0}#e{color:#b91c1c;font:13px monospace;white-space:pre-wrap;padding:12px}</style></head><body><div id="root"></div><pre id="e"></pre>
<script type="module">
import { createRoot } from "react-dom/client";
import { createElement } from "react";
let root; const e = document.getElementById("e");
addEventListener("message", async (ev) => {
  if (ev.source !== parent || ev.data?.type !== "render") return;
  const url = URL.createObjectURL(new Blob([ev.data.code], { type: "text/javascript" }));
  try {
    e.textContent = ""; const m = await import(url);
    root ??= createRoot(document.getElementById("root")); root.render(createElement(m.default));
    parent.postMessage({ type: "ok" }, "*");
  } catch (err) { e.textContent = String(err); parent.postMessage({ type: "error", message: String(err) }, "*"); }
  finally { URL.revokeObjectURL(url); }
});
parent.postMessage({ type: "ready" }, "*");
</script></body></html>`;
export default function Sandbox({ code, width = "100%", reloadKey = 0, onStatus }) {
  const ref = useRef(); const [ready, setReady] = useState(false); const [err, setErr] = useState("");
  useEffect(() => {
    setReady(false);
    const h = (ev) => {
      if (ev.source !== ref.current?.contentWindow) return;
      if (ev.data?.type === "ready") setReady(true);
      if (ev.data?.type === "error") { setErr(ev.data.message); onStatus?.("error"); }
      if (ev.data?.type === "ok") { setErr(""); onStatus?.("ok"); }
    };
    addEventListener("message", h); return () => removeEventListener("message", h);
  }, [reloadKey]);
  useEffect(() => {
    if (!ready) return; let dead = false; onStatus?.("compiling");
    const t = setTimeout(async () => {
      try { const js = await compile(code); if (!dead) ref.current.contentWindow.postMessage({ type: "render", code: js }, "*"); }
      catch (e) { if (!dead) { setErr(e.message); onStatus?.("error"); } }
    }, 350);
    return () => { dead = true; clearTimeout(t); };
  }, [code, ready, reloadKey]);
  return (<div className="relative h-full w-full">
    <iframe key={reloadKey} ref={ref} title="Preview" sandbox="allow-scripts allow-forms" srcDoc={DOC} style={{ width, maxWidth: "100%" }} className="mx-auto block h-full border-0 bg-white" />
    {err && <pre className="absolute inset-x-0 bottom-0 max-h-40 overflow-auto bg-red-950/95 p-3 text-xs text-red-200">{err}</pre>}
  </div>);
}
