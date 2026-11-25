const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const centered = config.variant % 3 === 0;
  const dark = config.variant % 4 === 2;
  const style = { backgroundColor: dark ? config.colors.ink : config.colors.background, color: dark ? "#f7f6f2" : config.colors.ink };
  const previewStyle = { backgroundColor: dark ? "#252d2a" : "#fff", color: config.colors.ink };
  return <div className="min-h-screen" style={style}>
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg text-white" style={{ backgroundColor: config.colors.accent }}>{config.brand.slice(0, 1)}</span>{config.brand}</a>
      <div className="hidden items-center gap-7 text-sm opacity-70 md:flex"><a href="#features">What you get</a><a href="#story">Our approach</a><a href="#join">Get started</a></div>
      <a href="#join" className="hidden rounded-full px-4 py-2 text-sm font-medium text-white md:inline-flex" style={{ backgroundColor: config.colors.accent }}>Get started <span className="ml-2">↗</span></a>
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="text-xl md:hidden">{menuOpen ? "×" : "☰"}</button>
    </nav>
    {menuOpen && <div className="flex flex-col gap-3 border-y border-black/10 px-6 py-4 text-sm md:hidden"><a href="#features">What you get</a><a href="#story">Our approach</a><a href="#join">Get started</a></div>}
    <main>
      <section className={"mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-12 md:pb-24 md:pt-20 " + (centered ? "text-center" : "lg:grid-cols-[1fr_.9fr]")}>
        <div className={centered ? "mx-auto max-w-3xl" : ""}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-current/15 px-3 py-1.5 text-xs opacity-75"><span className="size-1.5 rounded-full" style={{ backgroundColor: config.colors.accent }} /> A more thoughtful way forward</p>
          <h1 className="text-4xl font-semibold leading-[1.07] tracking-[-.045em] sm:text-6xl">{config.headline}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 opacity-70">{config.description}</p>
          <div className={"mt-8 flex flex-wrap gap-3 " + (centered ? "justify-center" : "")}>
            <a href="#join" className="rounded-full px-5 py-3 text-sm font-medium text-white" style={{ backgroundColor: config.colors.accent }}>Start a conversation <span className="ml-2">→</span></a>
            <a href="#features" className="rounded-full border border-current/20 px-5 py-3 text-sm">Explore the details</a>
          </div>
          <p className={"mt-6 text-xs opacity-55 " + (centered ? "" : "text-left")}>Made for people who care about the details.</p>
        </div>
        <div className={centered ? "mx-auto w-full max-w-3xl" : ""}>
          <div className="relative rounded-3xl p-4 sm:p-7" style={{ backgroundColor: config.colors.surface }}>
            <div className="rounded-2xl p-5 shadow-sm sm:p-7" style={previewStyle}>
              <div className="flex items-center justify-between border-b border-black/10 pb-4"><div><p className="text-xs opacity-55">{config.brand} / FIELD NOTES</p><p className="mt-1 font-medium">A good place to begin</p></div><span className="rounded-full px-3 py-1 text-xs" style={{ backgroundColor: config.colors.surface }}>01 — 04</span></div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {config.features.slice(0, 2).map((feature, i) => <div key={feature} className="rounded-xl p-4" style={{ backgroundColor: config.colors.background }}><span className="text-xs opacity-50">0{i + 1}</span><p className="mt-7 text-sm font-medium">{feature}</p></div>)}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl p-4" style={{ backgroundColor: config.colors.ink, color: "#fff" }}><span className="text-sm">{config.features[2]}</span><span className="grid size-8 place-items-center rounded-full text-sm" style={{ backgroundColor: config.colors.accent }}>↗</span></div>
            </div>
            <span className="absolute -right-2 -top-3 rounded-full px-3 py-2 text-xs font-medium text-white shadow" style={{ backgroundColor: config.colors.accent }}>A fresh start</span>
          </div>
        </div>
      </section>
      <section id="features" className="border-y border-current/10 px-6 py-8"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{config.features.map((feature, i) => <div key={feature} className="flex gap-4"><span className="text-xs opacity-50">0{i + 1}</span><p className="text-sm font-medium">{feature}</p></div>)}</div></section>
      <section id="story" className="mx-auto grid max-w-6xl gap-4 px-6 py-16 sm:grid-cols-3">{["Start with what matters", "Make progress visible", "Keep the experience human"].map((item, i) => <article key={item} className="rounded-2xl border border-current/10 p-5"><div className="mb-8 grid size-9 place-items-center rounded-full text-sm" style={{ backgroundColor: config.colors.surface, color: config.colors.accent }}>0{i + 1}</div><h2 className="font-medium">{item}</h2><p className="mt-2 text-sm leading-6 opacity-65">{config.description}</p></article>)}</section>
      <section id="join" className="mx-6 mb-10 rounded-3xl p-8 sm:p-12" style={{ backgroundColor: config.colors.surface }}><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.15em] opacity-55">The next step</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Ready when you are.</h2><p className="mt-2 max-w-xl text-sm leading-6 opacity-65">{config.description}</p></div><form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="flex w-full max-w-md gap-2 rounded-xl border border-current/15 bg-white p-1.5"><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-900 outline-none" /><button className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: config.colors.accent }}>{joined ? "You're on the list" : "Get updates"}</button></form></div></section>
    </main>
    <footer className="flex flex-wrap justify-between gap-3 px-6 py-6 text-xs opacity-55"><span>© {new Date().getFullYear()} {config.brand}</span><span>Thoughtful work, by design.</span></footer>
  </div>;
}
