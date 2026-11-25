const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [dialog, setDialog] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const c = config.colors;
  const dark = config.variant === 6 || config.variant === 9;
  const foreground = dark ? "#f8fafc" : c.ink;
  const background = dark ? c.ink : c.background;
  return <div className="min-h-screen" style={{ backgroundColor: background, color: foreground }}>
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg text-sm text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a>
      <div className="hidden items-center gap-7 text-sm opacity-70 md:flex"><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#plans">Plans</a></div>
      <div className="hidden items-center gap-3 md:flex"><button onClick={() => setDialog("Sign in is ready to connect to your workspace.")} className="px-3 py-2 text-sm">Sign in</button><button onClick={() => setDialog("Your workspace trial is ready to set up.")} className="rounded-lg px-4 py-2.5 text-sm font-medium text-white" style={{ backgroundColor: c.accent }}>Start free</button></div>
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="text-xl md:hidden">{menuOpen ? "×" : "☰"}</button>
    </nav>
    {menuOpen && <div className="flex flex-col gap-3 border-y border-black/10 px-6 py-4 text-sm md:hidden"><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#plans">Plans</a></div>}
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-1.5 text-xs opacity-70"><span className="size-1.5 rounded-full" style={{ backgroundColor: c.accent }} /> THE WORKSPACE THAT WORKS WITH YOU</p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl">{config.headline}</h1>
          <p className="mt-5 max-w-lg text-base leading-7 opacity-70">{config.description}</p>
          <div className="mt-7 flex flex-wrap gap-3"><button onClick={() => setDialog("Your free workspace is ready to set up.")} className="rounded-lg px-5 py-3 text-sm font-medium text-white" style={{ backgroundColor: c.accent }}>Get started free <span className="ml-1">→</span></button><button onClick={() => setDialog("Product tour opened. Explore the workspace preview below.")} className="rounded-lg border border-current/15 px-5 py-3 text-sm">Take a product tour</button></div>
          <div className="mt-7 flex items-center gap-3 text-xs opacity-60"><span className="flex -space-x-2">{["A", "J", "M", "S"].map((x, i) => <span key={x} className="grid size-7 place-items-center rounded-full border-2 text-[10px] font-medium" style={{ borderColor: background, backgroundColor: [c.surface, "#ebe8df", "#e7ecea", "#e9e5ee"][i] }}>{x}</span>)}</span><span>Teams building better work together</span></div>
        </div>
        <div id="product" className="rounded-2xl border border-black/10 p-3 shadow-xl shadow-black/[.06]" style={{ backgroundColor: dark ? "#26312e" : "#fff" }}>
          <div className="flex items-center justify-between border-b border-black/10 px-3 pb-3"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-[#dc887d]" /><i className="size-2 rounded-full bg-[#dfbd75]" /><i className="size-2 rounded-full bg-[#83ae8c]" /></div><span className="text-[10px] opacity-50">{config.brand.toLowerCase()}.app / overview</span><span className="size-2 rounded-full" style={{ backgroundColor: c.accent }} /></div>
          <div className="grid min-h-[300px] sm:grid-cols-[130px_1fr]">
            <aside className="hidden border-r border-black/10 p-3 text-[10px] sm:block"><p className="mb-5 font-semibold">{config.brand}</p>{["Overview", "My work", "Projects", "Reports", "Settings"].map((label, i) => <p key={label} className={"mb-1 rounded-md px-2 py-2 " + (!i ? "font-medium" : "opacity-55")} style={!i ? { backgroundColor: c.surface } : {}}>{label}</p>)}</aside>
            <div className="p-4 sm:p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] opacity-50">MONDAY, MAY 19</p><h2 className="mt-1 text-lg font-semibold">Good morning, Alex</h2></div><button onClick={() => setDialog("Your new item has been added to the workspace.")} className="rounded-md px-2.5 py-1.5 text-[10px] text-white" style={{ backgroundColor: c.accent }}>+ New item</button></div>
              <div className="mt-5 grid grid-cols-3 gap-2">{config.features.slice(0, 3).map((feature, i) => <div key={feature} className="rounded-lg p-2.5" style={{ backgroundColor: c.surface }}><p className="truncate text-[9px] opacity-60">{feature}</p><p className="mt-2 text-lg font-semibold">{["24", "86%", "12"][i]}</p><p className="text-[9px]" style={{ color: c.accent }}>↗ {["8", "12", "3"][i]} this week</p></div>)}</div>
              <div className="mt-3 rounded-lg border border-black/10 p-3"><div className="mb-4 flex justify-between text-[10px]"><span className="font-medium">Your team’s focus</span><span className="opacity-50">This week⌄</span></div><div className="flex h-24 items-end gap-2 border-b border-black/10">{config.chart.map((n, i) => <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${n}%`, backgroundColor: i === 8 ? c.accent : c.surface }} />)}</div><div className="mt-2 flex justify-between text-[8px] opacity-45"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="border-y border-current/10 px-5 py-12 sm:px-8"><div className="mx-auto max-w-7xl"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[.15em] opacity-55">A better way to work</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Everything, in its right place.</h2></div><p className="max-w-md text-sm leading-6 opacity-65">{config.description}</p></div><div className="grid gap-3 sm:grid-cols-3">{config.features.map((feature, i) => <article key={feature} className="rounded-xl border border-current/10 p-5"><span className="grid size-8 place-items-center rounded-lg text-sm" style={{ backgroundColor: c.surface, color: c.accent }}>{["↗", "◷", "◇"][i]}</span><h3 className="mt-5 text-sm font-medium">{feature}</h3><p className="mt-2 text-xs leading-5 opacity-60">Bring the right context together and keep every next step clear.</p></article>)}</div></div></section>
      <section id="plans" className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-12 sm:flex-row sm:items-center sm:px-8"><div><p className="text-xs uppercase tracking-[.15em] opacity-55">A good place to start</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Make space for your best work.</h2></div><button onClick={() => setDialog("Your free workspace is ready to set up.")} className="rounded-lg px-5 py-3 text-sm font-medium text-white" style={{ backgroundColor: c.accent }}>Start your free workspace →</button></section>
    </main>
    {dialog && <div role="dialog" aria-modal="true" className="fixed inset-0 z-10 grid place-items-center bg-black/40 p-5" onClick={() => setDialog("")}><div className="max-w-sm rounded-2xl bg-white p-6 text-slate-900 shadow-xl" onClick={(event) => event.stopPropagation()}><h2 className="text-lg font-semibold">{config.brand}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{dialog}</p><button onClick={() => setDialog("")} className="mt-5 rounded-lg px-4 py-2 text-sm text-white" style={{ backgroundColor: c.accent }}>Got it</button></div></div>}
  </div>;
}
