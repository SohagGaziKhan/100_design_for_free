import{r as Ae,j as Fe}from"./index-CMPBOW8F.js";const jt=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("");
  const [sent, setSent] = useState(false);
  const c = config.colors;
  const dark = config.variant % 3 === 1;
  const bg = dark ? c.ink : "#faf9f6";
  const fg = dark ? "#f7f6f2" : c.ink;
  return <div className="min-h-screen" style={{ backgroundColor: bg, color: fg }}>
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"><a href="#" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}<span className="ml-1 text-[9px] font-normal uppercase tracking-[.15em] opacity-50">/ Independent studio</span></a><nav className="hidden items-center gap-6 text-xs opacity-70 md:flex"><a href="#services">Capabilities</a><a href="#work">Selected work</a><a href="#approach">Approach</a></nav><a href="#contact" className="rounded-full border border-current/20 px-4 py-2 text-[10px]">Start a project ↗</a></header>
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-12 sm:pb-20 sm:pt-20"><p className="text-[10px] uppercase tracking-[.2em] opacity-50">Small team. Thoughtful work. Lasting impact.</p><h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-7xl">{config.headline}</h1><div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-base leading-7 opacity-70">{config.description}</p><a href="#work" className="inline-flex items-center gap-3 text-xs font-medium">Explore our work <span className="grid size-9 place-items-center rounded-full text-white" style={{ backgroundColor: c.accent }}>↓</span></a></div>
        <div className="mt-12 grid min-h-[230px] gap-3 sm:grid-cols-3">{config.features.map((feature, i) => <div key={feature} className={"relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-6 " + (i === 1 ? "sm:translate-y-5" : "")} style={{ backgroundColor: [c.surface, "#e7e8e2", "#e7e1d8"][i] }}><span className="text-[10px] uppercase tracking-[.15em] text-slate-500">0{i + 1} / Capability</span><div><h2 className="max-w-xs text-xl font-medium leading-snug text-slate-900">{feature}</h2><p className="mt-2 text-xs text-slate-600">Good work, built together.</p></div><span className="absolute -right-4 -top-5 grid size-24 place-items-center rounded-full text-2xl text-white/90" style={{ backgroundColor: c.accent, opacity: .8 }}>{["↗", "◈", "✳"][i]}</span></div>)}</div>
      </section>
      <section id="services" className="border-y border-current/10 px-6 py-12"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.65fr_1.35fr]"><div><p className="text-[10px] uppercase tracking-[.17em] opacity-50">What we do</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Capabilities</h2><p className="mt-3 max-w-xs text-sm leading-6 opacity-65">A close-knit team bringing the right expertise to each challenge.</p></div><div className="divide-y divide-current/10">{config.features.map((feature, i) => <button key={feature} onClick={() => setSelected(selected === feature ? "" : feature)} className="group flex w-full items-center justify-between gap-5 py-5 text-left"><span className="flex items-center gap-4"><span className="text-[10px] opacity-45">0{i + 1}</span><span className="text-base font-medium">{feature}</span></span><span className="grid size-8 place-items-center rounded-full border border-current/15 text-sm transition group-hover:text-white" style={selected === feature ? { backgroundColor: c.accent } : {}}>{selected === feature ? "−" : "+"}</span>{selected === feature && <span className="sr-only">{config.description}</span>}</button>)}</div></div></section>
      <section id="work" className="mx-auto max-w-7xl px-6 py-14"><div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.17em] opacity-50">Good company, good work</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Selected projects</h2></div><span className="text-xs opacity-50">01 — 03</span></div><div className="mt-6 grid gap-4 md:grid-cols-3">{config.features.map((feature, i) => <article key={feature} className="group"><div className="relative grid aspect-[1.15] place-items-center overflow-hidden rounded-2xl p-5" style={{ backgroundColor: [c.surface, "#e4e6e1", "#e8dfd5"][i] }}><div className={"grid place-items-center rounded-[2rem] p-5 text-center text-sm font-medium text-white transition group-hover:-rotate-3 group-hover:scale-105 " + (i === 1 ? "h-28 w-40" : "size-36")} style={{ backgroundColor: i === 2 ? c.ink : c.accent }}>{config.brand}<br/><span className="mt-2 text-[10px] font-normal opacity-70">{feature}</span></div><span className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-white text-slate-900">↗</span></div><h3 className="mt-3 text-sm font-medium">{feature}</h3><p className="mt-1 text-[10px] opacity-55">Strategy · Craft · Partnership</p></article>)}</div></section>
      <section id="approach" className="mx-6 rounded-3xl p-7 sm:p-11" style={{ backgroundColor: c.surface }}><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[.75fr_1.25fr]"><p className="text-[10px] uppercase tracking-[.16em] opacity-55">A good process makes good work</p><div><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight">Clear thinking, close collaboration, and care in the details.</h2><div className="mt-7 grid gap-3 sm:grid-cols-3">{["Listen", "Make", "Move"].map((item, i) => <div key={item} className="border-t border-current/15 pt-3"><span className="text-[10px] opacity-50">0{i + 1}</span><h3 className="mt-3 text-sm font-medium">{item}</h3><p className="mt-2 text-xs leading-5 opacity-65">{config.description}</p></div>)}</div></div></div></section>
      <section id="contact" className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-14 md:flex-row md:items-center"><div><p className="text-[10px] uppercase tracking-[.16em] opacity-50">Have a good one in mind?</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Let’s make it happen.</h2></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="flex w-full max-w-md gap-2 rounded-xl border border-current/15 bg-white p-1.5"><input type="email" required placeholder="Your work email" className="min-w-0 flex-1 bg-transparent px-3 text-xs text-slate-900 outline-none" /><button className="rounded-lg px-4 py-2 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>{sent ? "We'll be in touch" : "Tell us about it"}</button></form></section>
    </main>
    <footer className="flex flex-wrap justify-between gap-3 border-t border-current/10 px-6 py-5 text-[10px] opacity-55"><span>© {new Date().getFullYear()} {config.brand}</span><span>Independent by nature. Better together.</span><a href="#">Back to top ↑</a></footer>
  </div>;
}
`,Ot=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const mode = config.variant;
  const c = config.colors;
  const split = mode === 2 || mode === 3 || mode === 8;
  const glass = mode === 4;
  const centered = !split;
  function complete() {
    if (mode === 9 && step === 1) { setStep(2); return; }
    if (mode === 5 && !/^\\d{6}$/.test(code)) { setNotice("Enter the six-digit verification code."); return; }
    setNotice(mode === 6 ? \`Password reset instructions are on their way to \${email}.\` : mode === 5 ? "Your code has been verified." : \`You're signed in as \${email}.\`);
  }
  function submit(event) { event.preventDefault(); complete(); }
  const panel = <div className={"w-full max-w-md rounded-2xl p-6 sm:p-8 " + (glass ? "border border-white/40 bg-white/70 shadow-2xl backdrop-blur-xl" : split ? "bg-white" : "border border-stone-200 bg-white shadow-sm")}>
    <div className="mb-7"><span className="grid size-10 place-items-center rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span><p className="mt-5 text-xs font-medium uppercase tracking-[.14em] text-stone-400">{config.brand} ACCOUNT</p><h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">{mode === 5 ? "Check your inbox" : mode === 6 ? "Reset your password" : mode === 9 && step === 2 ? "Name your workspace" : config.headline}</h1><p className="mt-2 text-sm leading-6 text-stone-500">{mode === 5 ? "Enter the 6-digit code we sent to your email address." : mode === 6 ? "We'll send you a secure link to choose a new password." : mode === 9 && step === 2 ? "You can invite your team after your workspace is ready." : config.description}</p></div>
    {notice && <p role="status" className="mb-4 rounded-lg px-3 py-2.5 text-xs leading-5" style={{ backgroundColor: c.surface, color: c.ink }}>{notice}</p>}
    {mode === 7 && <div className="mb-5 grid gap-2"><button type="button" onClick={() => setNotice("Google sign-in is ready to connect.")} className="rounded-lg border border-stone-200 px-4 py-3 text-xs font-medium text-stone-700"><span className="mr-2 font-semibold">G</span>Continue with Google</button><button type="button" onClick={() => setNotice("Apple sign-in is ready to connect.")} className="rounded-lg border border-stone-200 px-4 py-3 text-xs font-medium text-stone-700"><span className="mr-2 font-semibold">●</span>Continue with Apple</button><div className="flex items-center gap-3 py-1 text-[10px] text-stone-400"><span className="h-px flex-1 bg-stone-200" />OR USE EMAIL<span className="h-px flex-1 bg-stone-200" /></div></div>}
    {mode === 9 && <div className="mb-5 flex gap-2" aria-label="Registration progress"><span className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: c.accent }} /><span className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: step === 2 ? c.accent : c.surface }} /></div>}
    <form onSubmit={submit} className="space-y-4">
      {mode === 9 && step === 1 && <label className="block text-xs font-medium text-stone-700">Your name<input required autoComplete="name" placeholder="Alex Morgan" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode === 9 && step === 2 && <label className="block text-xs font-medium text-stone-700">Workspace name<input required placeholder="Studio North" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode !== 5 && (mode !== 9 || step === 1) && <label className="block text-xs font-medium text-stone-700">{mode === 8 ? "Organization email" : "Email address"}<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={mode === 8 ? "you@company.com" : "you@example.com"} className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-sm outline-none focus:border-stone-400" /></label>}
      {mode === 5 && <label className="block text-xs font-medium text-stone-700">Verification code<input required name="code" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} value={code} onChange={(event) => setCode(event.target.value)} placeholder="000000" className="mt-2 w-full rounded-lg border border-stone-200 px-3 py-3 text-center font-mono text-lg tracking-[.45em] outline-none focus:border-stone-400" /></label>}
      {(![5, 6].includes(mode) && (mode !== 9 || step === 2)) && <label className="block text-xs font-medium text-stone-700"><span className="flex items-center justify-between"><span>Password</span>{mode === 0 && <a href="#" className="font-normal" style={{ color: c.accent }}>Forgot password?</a>}</span><span className="relative mt-2 block"><input required type={visible ? "text" : "password"} autoComplete={mode === 9 ? "new-password" : "current-password"} minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" className="w-full rounded-lg border border-stone-200 px-3 py-3 pr-14 text-sm outline-none focus:border-stone-400" /><button type="button" onClick={() => setVisible(!visible)} className="absolute right-3 top-3 text-[10px] text-stone-500">{visible ? "Hide" : "Show"}</button></span></label>}
      {(mode === 0 || mode === 2 || mode === 3 || mode === 8) && <label className="flex items-center gap-2 text-xs text-stone-500"><input type="checkbox" className="accent-stone-800" />{mode === 2 ? "Trust this device for 30 days" : mode === 8 ? "Keep this session active" : "Remember me"}</label>}
      <button type="button" onClick={(event) => { if (event.currentTarget.form.reportValidity()) complete(); }} className="w-full rounded-lg py-3 text-sm font-medium text-white transition hover:opacity-90" style={{ backgroundColor: c.accent }}>{mode === 5 ? "Verify code" : mode === 6 ? "Send reset link" : mode === 9 ? step === 1 ? "Continue" : "Create workspace" : mode === 3 ? "Sign in securely" : mode === 8 ? "Continue to workspace" : "Sign in"}</button>
    </form>
    {mode === 5 && <button onClick={() => setNotice("A fresh code has been sent to your email.")} className="mt-4 w-full text-center text-xs" style={{ color: c.accent }}>Resend code</button>}
    {mode === 6 && <button onClick={() => setNotice("Return to the sign-in page when you have your password.")} className="mt-4 w-full text-center text-xs text-stone-500">Back to sign in</button>}
    {![5, 6, 9].includes(mode) && <p className="mt-6 text-center text-xs text-stone-500">New to {config.brand}? <button onClick={() => setNotice("Account creation is ready to connect.")} className="font-medium" style={{ color: c.accent }}>Create an account</button></p>}
    {mode === 8 && <p className="mt-5 text-center text-[10px] leading-5 text-stone-400">By continuing, you agree to your organization's security policies.</p>}
  </div>;
  return <div className="grid min-h-screen" style={{ backgroundColor: mode === 4 ? c.surface : "#f7f6f3", gridTemplateColumns: split ? "minmax(0,1fr) minmax(0,1fr)" : "1fr" }}>
    {split && <aside className="relative hidden flex-col justify-between overflow-hidden p-10 text-white md:flex lg:p-14" style={{ backgroundColor: c.ink }}><a href="#" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a><div className="relative z-[1] max-w-lg"><p className="text-xs uppercase tracking-[.2em] text-white/50">A considered workspace</p><p className="mt-5 text-3xl font-medium leading-tight tracking-tight">“{config.headline}”</p><p className="mt-5 max-w-sm text-sm leading-6 text-white/65">{config.description}</p><div className="mt-8 space-y-3">{config.features.map((feature) => <p key={feature} className="flex items-center gap-3 text-xs text-white/75"><span className="grid size-5 place-items-center rounded-full text-[10px]" style={{ backgroundColor: c.accent }}>✓</span>{feature}</p>)}</div></div><p className="text-xs text-white/45">© {new Date().getFullYear()} {config.brand}. Thoughtfully made.</p><div className="absolute -bottom-28 -right-20 size-80 rounded-full border-[1px] border-white/10" /><div className="absolute -bottom-16 -right-8 size-56 rounded-full border-[1px] border-white/10" /></aside>}
    <main className={"flex min-h-screen items-center justify-center p-5 sm:p-8 " + (centered ? "mx-auto w-full max-w-2xl" : "")}>{panel}</main>
  </div>;
}
`,Dt=`const config = globalThis.__CONFIG__ ?? {};
import { useMemo, useState } from "react";

export default function App() {
  const [topic, setTopic] = useState("All stories");
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const c = config.colors;
  const topics = ["All stories", ...config.features];
  const articles = config.features.map((feature, i) => ({
    title: [\`The details that change how we see things\`, \`A useful guide to \${feature.toLowerCase()}\`, \`What we learned by looking closer\`][i],
    category: feature,
    read: \`\${5 + i * 2} min read\`,
    color: [c.surface, "#e5e9e3", "#eee5dc"][i],
  }));
  const visible = useMemo(() => articles.filter((article) => (topic === "All stories" || article.category === topic) && \`\${article.title} \${article.category}\`.toLowerCase().includes(query.toLowerCase())), [topic, query]);
  const dark = config.variant === 3 || config.variant === 8;
  const bg = dark ? c.ink : "#fbfaf7";
  const fg = dark ? "#f7f6f2" : c.ink;
  return <div className="min-h-screen" style={{ backgroundColor: bg, color: fg }}>
    <div className="border-b border-current/10"><header className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8"><a href="#" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}<span className="hidden text-[9px] font-normal uppercase tracking-[.15em] opacity-45 sm:inline">/ Ideas worth your time</span></a><nav className="hidden gap-5 text-[10px] opacity-65 md:flex">{config.features.map((feature) => <a key={feature} href="#stories">{feature}</a>)}</nav><label className="flex items-center gap-2 rounded-full border border-current/15 px-3 py-2"><span className="text-sm opacity-50">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stories" className="w-24 bg-transparent text-[10px] outline-none sm:w-32" /></label></header></div>
    <main>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-[10px] uppercase tracking-[.2em] opacity-50">A publication by {config.brand}</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-.045em] sm:text-6xl">{config.headline}</h1></div><p className="max-w-sm text-sm leading-6 opacity-65">{config.description}</p></div>
        <article className="mt-9 grid overflow-hidden rounded-2xl md:grid-cols-[1.1fr_.9fr]" style={{ backgroundColor: c.surface, color: c.ink }}><div className="relative min-h-[250px] overflow-hidden p-6 sm:min-h-[330px] sm:p-9"><span className="text-[10px] uppercase tracking-[.17em] opacity-55">THE LATEST / FEATURED STORY</span><div className="absolute -bottom-16 right-5 grid size-56 place-items-center rounded-full border-[24px] border-white/40 sm:right-12 sm:size-72"><span className="grid size-32 place-items-center rounded-full text-4xl text-white" style={{ backgroundColor: c.accent }}>✳</span></div><span className="absolute bottom-8 left-7 max-w-[48%] text-[10px] opacity-55">An ongoing study of the useful, the beautiful and the things in between.</span></div><div className="flex flex-col justify-between p-6 sm:p-9"><div><p className="text-[10px] uppercase tracking-[.15em] opacity-55">{config.features[0]} · {articles[0].read}</p><h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{articles[0].title}</h2><p className="mt-4 text-sm leading-6 opacity-70">{config.description}</p></div><a href="#stories" className="mt-7 inline-flex items-center gap-2 text-xs font-medium">Read the story <span>↗</span></a></div></article>
      </section>
      <section id="stories" className="border-y border-current/10 px-5 py-10 sm:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.18em] opacity-50">From the journal</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Stories and perspectives</h2></div><div className="flex max-w-full gap-1 overflow-x-auto">{topics.map((item) => <button key={item} onClick={() => setTopic(item)} className={"whitespace-nowrap rounded-full px-3 py-2 text-[10px] " + (topic === item ? "text-white" : "opacity-60")} style={topic === item ? { backgroundColor: c.ink } : {}}>{item}</button>)}</div></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((article, i) => <article key={article.category} className="overflow-hidden rounded-xl border border-current/10"><div className="relative grid aspect-[1.5] place-items-center" style={{ backgroundColor: article.color }}><span className="absolute left-4 top-4 text-[10px] opacity-50">0{i + 1} / FIELD NOTES</span><div className="grid size-24 place-items-center rounded-full border-[12px] border-white/50 text-2xl" style={{ backgroundColor: c.accent, color: "#fff" }}>{["◌", "✳", "↗"][i]}</div></div><div className="p-4"><p className="text-[9px] uppercase tracking-[.15em] opacity-50">{article.category} <span className="mx-1">·</span> {article.read}</p><h3 className="mt-2 text-base font-medium leading-snug">{article.title}</h3><p className="mt-2 text-xs leading-5 opacity-65">{config.description}</p><a href="#" className="mt-4 inline-flex items-center gap-2 text-[10px] font-medium" style={{ color: c.accent }}>Read article <span>↗</span></a></div></article>)}</div>
          {!visible.length && <p className="py-12 text-center text-sm opacity-60">No stories match this search.</p>}
        </div></section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-[10px] uppercase tracking-[.16em] opacity-50">A thoughtful note, now and then</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Get the good reads in your inbox.</h2><p className="mt-2 text-sm opacity-65">A short, considered digest from {config.brand}.</p></div><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }} className="flex w-full max-w-md gap-2 rounded-xl border border-current/15 bg-white p-1.5"><input type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-3 text-xs text-slate-900 outline-none" /><button className="rounded-lg px-4 py-2 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>{subscribed ? "Subscribed" : "Subscribe"}</button></form></section>
    </main>
    <footer className="flex justify-between border-t border-current/10 px-5 py-5 text-[10px] opacity-50 sm:px-8"><span>© {new Date().getFullYear()} {config.brand}</span><span>Read with curiosity.</span></footer>
  </div>;
}
`,Mt=`const config = globalThis.__CONFIG__ ?? {};
import { useMemo, useState } from "react";

export default function App() {
  const [cart, setCart] = useState(0);
  const [filter, setFilter] = useState("All pieces");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [favorites, setFavorites] = useState([]);
  const c = config.colors;
  const products = config.products.map((name, i) => ({ name, price: [68, 124, 92, 48][(i + config.variant) % 4], color: [c.surface, "#e8e2d9", "#dce4df", "#ede0d9"][i] }));
  const visible = useMemo(() => products.filter((product, i) => (filter === "All pieces" || (filter === "New arrivals" ? i < 3 : favorites.includes(product.name))) && product.name.toLowerCase().includes(query.toLowerCase())), [filter, query, favorites]);
  function addToBag(name) {
    setCart((count) => count + 1);
    setNotice(\`\${name} added to your bag\`);
    setTimeout(() => setNotice(""), 1800);
  }
  return <div className="min-h-screen bg-white text-stone-900">
    <div className="flex items-center justify-center px-4 py-2 text-center text-[10px] tracking-wide text-white" style={{ backgroundColor: c.ink }}>Complimentary shipping on orders over $100 <span className="ml-2">↗</span></div>
    <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-8">
      <a href="#" className="text-xl font-semibold tracking-[-.04em]">{config.brand}<span style={{ color: c.accent }}>.</span></a>
      <nav className="hidden gap-6 text-xs text-stone-600 sm:flex"><a href="#collection">Shop all</a><a href="#collection">New arrivals</a><a href="#about">Our story</a></nav>
      <div className="flex items-center gap-2"><label className="hidden items-center rounded-full border border-stone-200 px-3 py-1.5 sm:flex"><span className="mr-2 text-xs text-stone-400">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find something" className="w-24 bg-transparent text-xs outline-none" /></label><button aria-label={\`Shopping bag, \${cart} items\`} onClick={() => setNotice(cart ? \`\${cart} item\${cart === 1 ? "" : "s"} in your bag\` : "Your bag is ready for something good.")} className="rounded-full border border-stone-200 px-3 py-2 text-xs">Bag ({cart})</button></div>
    </header>
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-9 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-12">
        <div className="relative min-h-[290px] overflow-hidden rounded-2xl p-7 sm:min-h-[380px] sm:p-11" style={{ backgroundColor: c.surface }}>
          <div className="relative z-[1] max-w-lg"><p className="text-[10px] font-medium uppercase tracking-[.18em] text-stone-500">A considered collection / 0{config.variant + 1}</p><h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-5xl">{config.headline}</h1><p className="mt-4 max-w-md text-sm leading-6 text-stone-600">{config.description}</p><a href="#collection" className="mt-7 inline-flex items-center gap-2 border-b border-stone-800 pb-1 text-xs font-medium">Explore the collection <span>↗</span></a></div>
          <div className="absolute -bottom-12 -right-4 h-48 w-40 rotate-[-9deg] rounded-t-[5rem] border-[12px] border-white/60 sm:h-64 sm:w-56" style={{ backgroundColor: c.accent, opacity: .8 }} /><div className="absolute -bottom-6 right-28 h-32 w-28 rotate-[12deg] rounded-t-full" style={{ backgroundColor: "#d9c4a8" }} />
        </div>
        <div id="about" className="grid min-h-[290px] grid-cols-2 gap-3 sm:min-h-[380px]">
          <div className="flex flex-col justify-between rounded-2xl p-5 sm:p-7" style={{ backgroundColor: "#eeeae3" }}><span className="text-xs text-stone-500">01 / MATERIAL</span><div><div className="mb-5 h-24 rounded-full border-[14px] border-white/70 sm:h-36" style={{ backgroundColor: c.accent }} /><p className="font-medium">Made to keep</p><p className="mt-1 text-xs text-stone-500">Thoughtful by nature.</p></div></div>
          <div className="flex flex-col justify-between rounded-2xl p-5 sm:p-7" style={{ backgroundColor: "#e5e9e3" }}><span className="text-xs text-stone-500">02 / EVERYDAY</span><div><div className="mb-5 grid h-24 place-items-center rounded-xl bg-white/70 sm:h-36"><span className="text-4xl" style={{ color: c.accent }}>✳</span></div><p className="font-medium">Picked with care</p><p className="mt-1 text-xs text-stone-500">A smaller, better edit.</p></div></div>
        </div>
      </section>
      <section id="collection" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-5"><div><p className="text-[10px] uppercase tracking-[.18em] text-stone-500">The collection</p><h2 className="mt-2 text-2xl font-medium tracking-tight">Objects for the everyday.</h2></div><div className="flex gap-1">{["All pieces", "New arrivals", "Favorites"].map((item) => <button key={item} onClick={() => setFilter(item)} className={"rounded-full px-3 py-2 text-[10px] " + (filter === item ? "text-white" : "text-stone-500")} style={filter === item ? { backgroundColor: c.ink } : {}}>{item}</button>)}</div></div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{visible.map((product, i) => <article key={product.name} className="group">
          <div className="relative grid aspect-[.82] place-items-center overflow-hidden rounded-xl p-4" style={{ backgroundColor: product.color }}><span className="absolute left-3 top-3 rounded-full bg-white/75 px-2 py-1 text-[9px] uppercase tracking-wide text-stone-600">{i === 0 ? "Just arrived" : "Considered pick"}</span><button aria-label={\`\${favorites.includes(product.name) ? "Remove" : "Add"} \${product.name} \${favorites.includes(product.name) ? "from" : "to"} favorites\`} onClick={() => setFavorites((items) => items.includes(product.name) ? items.filter((item) => item !== product.name) : [...items, product.name])} className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/80 text-sm text-stone-700">{favorites.includes(product.name) ? "♥" : "♡"}</button><div className="grid size-[55%] place-items-center rounded-[42%] border-[14px] border-white/50 shadow-sm transition group-hover:scale-105" style={{ backgroundColor: c.accent }}><span className="text-2xl text-white/90">✳</span></div><button onClick={() => addToBag(product.name)} className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 py-2.5 text-[10px] font-medium opacity-100 shadow-sm transition sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">Add to bag — \${product.price}</button></div>
          <div className="flex items-start justify-between gap-2 pt-3"><div><h3 className="text-xs font-medium sm:text-sm">{product.name}</h3><p className="mt-1 text-[10px] text-stone-500">{config.brand} / signature edit</p></div><span className="text-xs">\${product.price}</span></div>
        </article>)}</div>
        {!visible.length && <p className="py-12 text-center text-sm text-stone-500">No pieces match that search.</p>}
      </section>
    </main>
    <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-stone-200 px-5 py-6 text-xs text-stone-500 sm:px-8"><span>© {new Date().getFullYear()} {config.brand}</span><span>Made with intention.</span><a href="#collection">Back to collection ↑</a></footer>
    {notice && <div role="status" className="fixed bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-lg px-4 py-3 text-xs text-white shadow-xl" style={{ backgroundColor: c.ink }}>{notice}</div>}
  </div>;
}
`,Rt=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const c = config.colors;
  const mode = config.variant;
  const rows = [
    ["Northstar Studio", "Active", "May 18"],
    ["Field Notes", "Review", "May 16"],
    ["Common Ground", "Active", "May 14"],
    ["Soft Signal", "Draft", "May 12"],
  ].filter((row) => row.join(" ").toLowerCase().includes(search.toLowerCase()));
  const titles = config.features;
  const action = (message) => { setFeedback(message); setTimeout(() => setFeedback(""), 1800); };
  let preview;
  if (mode === 0) preview = <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white"><div className="flex items-center justify-between border-b border-stone-100 px-5 py-3"><span className="text-xs font-medium">HERO / VARIATIONS</span><span className="text-[10px] text-stone-400">01—03</span></div><div className="grid gap-3 p-4 sm:grid-cols-3">{["Centered", "Split", "Editorial"].map((item, i) => <button key={item} onClick={() => setActive(i)} className={"rounded-xl p-4 text-left " + (active === i ? "ring-2 ring-offset-2" : "")} style={{ backgroundColor: [c.surface, "#e7e9e3", "#eee7df"][i], "--tw-ring-color": c.accent }}><span className="text-[9px] uppercase tracking-wide text-stone-500">0{i + 1} / HERO</span><h2 className={"mt-7 font-semibold " + (i === 0 ? "text-center text-xl" : "text-lg")}>{titles[i]}</h2><p className="mt-2 text-[10px] text-stone-600">Support the headline with one useful line.</p><span className="mt-4 inline-block rounded-full px-3 py-2 text-[9px] text-white" style={{ backgroundColor: c.accent }}>Explore ↗</span></button>)}</div></div>;
  else if (mode === 1) preview = <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white"><div className="border-b border-stone-100 px-5 py-3 text-xs font-medium">NAVIGATION / RESPONSIVE STATES</div><div className="space-y-3 p-4"><div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: c.surface }}><span className="font-semibold">{config.brand}<span style={{ color: c.accent }}>.</span></span><div className="hidden gap-5 text-[10px] text-stone-600 sm:flex">{["Overview", "Work", "About"].map((item, i) => <button key={item} onClick={() => setActive(i)} className={active === i ? "font-semibold" : ""}>{item}</button>)}</div><button onClick={() => setOpen(!open)} className="rounded-full px-3 py-1.5 text-[10px] text-white" style={{ backgroundColor: c.accent }}>{open ? "Close" : "Menu"}</button></div>{open && <div className="rounded-xl border border-stone-200 p-3 text-xs sm:hidden">Overview · Work · About · Contact</div>}<div className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3"><span className="text-xs">Compact utility nav</span><div className="flex gap-2"><button className="rounded-full border border-stone-200 px-3 py-1.5 text-[9px]">Sign in</button><button className="rounded-full px-3 py-1.5 text-[9px] text-white" style={{ backgroundColor: c.ink }}>Get started</button></div></div></div></div>;
  else if (mode === 2) preview = <div className="rounded-2xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">CARD SYSTEM / 03 STYLES</p><h2 className="mt-1 text-sm font-medium">Choose a card pattern</h2></div><div className="flex gap-1">{titles.map((_, i) => <button key={i} onClick={() => setActive(i)} aria-label={\`Card style \${i + 1}\`} className="size-2.5 rounded-full" style={{ backgroundColor: active === i ? c.accent : c.surface }} />)}</div></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{titles.map((title, i) => <button key={title} onClick={() => setActive(i)} className={"rounded-xl border p-4 text-left transition " + (active === i ? "shadow-md" : "")} style={{ borderColor: active === i ? c.accent : "#e7e5e4", backgroundColor: i === active ? c.surface : "#fff" }}><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{["✳", "↗", "◈"][i]}</span><h3 className="mt-5 text-xs font-medium">{title}</h3><p className="mt-2 text-[10px] leading-4 text-stone-500">A compact pattern with just enough room for context and action.</p><span className="mt-4 inline-flex text-[9px]" style={{ color: c.accent }}>Read more →</span></button>)}</div></div>;
  else if (mode === 3) preview = <div className="grid gap-6 rounded-2xl border border-stone-200 bg-white p-5 sm:grid-cols-[.8fr_1.2fr]"><div><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">FORM PATTERNS</p><h2 className="mt-2 text-lg font-semibold">Useful input states.</h2><p className="mt-2 text-xs leading-5 text-stone-500">Clear labels, inline guidance and a helpful success state.</p><div className="mt-5 space-y-3">{titles.map((title, i) => <button key={title} onClick={() => setActive(i)} className={"block text-left text-[10px] " + (i === active ? "font-semibold" : "text-stone-500")}>0{i + 1} / {title}</button>)}</div></div><form onSubmit={(event) => { event.preventDefault(); setFeedback(\`Thanks — we’ll reach you at \${email}.\`); }} className="space-y-4 rounded-xl p-4" style={{ backgroundColor: c.surface }}><label className="block text-[10px] font-medium">Name<input required placeholder="Alex Morgan" className="mt-2 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs outline-none focus:border-stone-500" /></label><label className="block text-[10px] font-medium">Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="alex@example.com" className="mt-2 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs outline-none focus:border-stone-500" /></label><label className="block text-[10px] font-medium">How can we help?<select className="mt-2 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs"><option>Choose a topic</option>{titles.map((title) => <option key={title}>{title}</option>)}</select></label><button className="w-full rounded-lg py-2.5 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>Send message</button>{feedback && <p role="status" className="text-xs">{feedback}</p>}</form></div>;
  else if (mode === 4) preview = <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">DIALOG PATTERNS</p><h2 className="mt-1 text-sm font-medium">Choose a dialog use case</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{titles.map((title, i) => <button key={title} onClick={() => { setActive(i); setOpen(true); }} className="rounded-xl border border-stone-200 p-4 text-left hover:border-stone-400"><span className="text-lg" style={{ color: c.accent }}>{["✓", "i", "!"][i]}</span><p className="mt-3 text-xs font-medium">{title}</p><p className="mt-2 text-[10px] text-stone-500">Preview dialog →</p></button>)}</div>{open && <div role="dialog" aria-modal="true" className="fixed inset-0 z-10 grid place-items-center bg-slate-950/45 p-5" onClick={() => setOpen(false)}><div className="w-full max-w-sm rounded-2xl bg-white p-6 text-slate-900 shadow-2xl" onClick={(event) => event.stopPropagation()}><span className="grid size-9 place-items-center rounded-full text-sm text-white" style={{ backgroundColor: c.accent }}>{["✓", "i", "!"][active]}</span><h2 className="mt-4 text-lg font-semibold">{titles[active]}</h2><p className="mt-2 text-xs leading-5 text-slate-500">Make the important information clear, then give people a safe way to continue.</p><div className="mt-6 flex justify-end gap-2"><button onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs">Cancel</button><button onClick={() => { setOpen(false); action("Action confirmed"); }} className="rounded-lg px-3 py-2 text-xs text-white" style={{ backgroundColor: c.accent }}>Confirm</button></div></div></div>}</div>;
  else if (mode === 5) preview = <div className="rounded-2xl border border-stone-200 bg-white p-5"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">DATA TABLE PATTERNS</p><h2 className="mt-1 text-sm font-medium">Projects and status</h2></div><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search rows" className="rounded-lg border border-stone-200 px-3 py-2 text-[10px] outline-none" /></div><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[440px] border-collapse text-left text-[10px]"><thead><tr className="border-y border-stone-100 text-stone-400">{["Project", "Status", "Updated", "Action"].map((item) => <th key={item} className="px-3 py-3 font-medium">{item}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-b border-stone-100"><td className="px-3 py-3 font-medium">{row[0]}</td><td className="px-3 py-3"><span className="rounded-full px-2 py-1" style={{ backgroundColor: row[1] === "Active" ? c.surface : "#f2eee6" }}>{row[1]}</span></td><td className="px-3 py-3 text-stone-500">{row[2]}</td><td className="px-3 py-3"><button onClick={() => action(\`\${row[0]} opened\`)} style={{ color: c.accent }}>View →</button></td></tr>)}</tbody></table></div>{feedback && <p role="status" className="mt-3 text-xs">{feedback}</p>}</div>;
  else if (mode === 6) preview = <div className="rounded-2xl p-6 sm:p-9" style={{ backgroundColor: c.surface }}><div className="flex items-center justify-between"><p className="text-[9px] uppercase tracking-[.16em] opacity-55">CUSTOMER NOTES / 0{active + 1}</p><div className="flex gap-2"><button aria-label="Previous testimonial" onClick={() => setActive((active + 2) % 3)} className="grid size-8 place-items-center rounded-full border border-current/20">←</button><button aria-label="Next testimonial" onClick={() => setActive((active + 1) % 3)} className="grid size-8 place-items-center rounded-full text-white" style={{ backgroundColor: c.accent }}>→</button></div></div><div className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start"><span className="text-6xl leading-none" style={{ color: c.accent }}>“</span><div><blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-tight">“The details made the difference. It feels like the work finally has room to breathe.”</blockquote><div className="mt-7 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>{["AM", "JL", "RK"][active]}</span><div><p className="text-xs font-medium">{["Alex Morgan", "Jamie Lee", "Riley Kim"][active]}</p><p className="mt-1 text-[10px] opacity-55">{titles[active]} · {config.brand}</p></div></div></div></div><div className="mt-7 flex gap-1.5">{titles.map((_, i) => <button key={i} onClick={() => setActive(i)} aria-label={\`Testimonial \${i + 1}\`} className="h-1.5 w-8 rounded-full" style={{ backgroundColor: i === active ? c.accent : "#fff" }} />)}</div></div>;
  else if (mode === 7) preview = <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white"><div className="flex items-center justify-between border-b border-stone-100 px-5 py-3"><span className="text-xs font-medium">FOOTER / LAYOUT OPTIONS</span><span className="text-[10px] text-stone-400">0{active + 1} / 03</span></div><div className="p-5"><div className="mb-4 flex gap-2">{titles.map((_, i) => <button key={i} onClick={() => setActive(i)} className={"rounded-full px-3 py-2 text-[10px] " + (active === i ? "text-white" : "text-stone-500")} style={active === i ? { backgroundColor: c.accent } : {}}>{["Brand-led", "Link groups", "Newsletter"][i]}</button>)}</div><footer className="rounded-xl p-5 text-white sm:p-7" style={{ backgroundColor: c.ink }}><div className={"grid gap-6 " + (active === 0 ? "sm:grid-cols-[1.4fr_1fr]" : "sm:grid-cols-3")}><div><p className="text-base font-semibold">{config.brand}<span style={{ color: c.accent }}>.</span></p><p className="mt-3 max-w-xs text-[10px] leading-5 text-white/60">{config.description}</p></div>{["Explore", "Company"].map((group) => <div key={group}><p className="text-[10px] font-medium">{group}</p><div className="mt-3 space-y-2 text-[10px] text-white/60"><a className="block" href="#">About us</a><a className="block" href="#">Resources</a><a className="block" href="#">Get in touch</a></div></div>)}{active === 2 && <form onSubmit={(event) => { event.preventDefault(); action("You’re subscribed."); }} className="flex gap-1"><input type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-md bg-white/10 px-2 text-[10px] outline-none" /><button className="rounded-md px-2 text-[10px] text-white" style={{ backgroundColor: c.accent }}>Join</button></form>}</div><div className="mt-7 border-t border-white/15 pt-4 text-[9px] text-white/50">© {new Date().getFullYear()} {config.brand} <span className="float-right">Privacy · Terms</span></div></footer></div></div>;
  else if (mode === 8) preview = <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">BUTTON STATES</p><h2 className="mt-1 text-sm font-medium">Actions with useful feedback</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><div className="space-y-3 rounded-xl p-4" style={{ backgroundColor: c.surface }}><p className="text-[10px] font-medium">Primary actions</p><button onClick={() => { setActive(1); action("Changes saved."); }} className="w-full rounded-lg px-4 py-2.5 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>{active === 1 ? "Saved ✓" : "Save changes"}</button><button onClick={() => { setActive(2); action("Loading complete."); }} className="w-full rounded-lg border border-current/15 bg-white px-4 py-2.5 text-xs">{active === 2 ? "Complete ✓" : "Run action"}</button><button disabled className="w-full cursor-not-allowed rounded-lg bg-stone-200 px-4 py-2.5 text-xs text-stone-500">Disabled</button></div><div className="space-y-3 rounded-xl border border-stone-200 p-4"><p className="text-[10px] font-medium">Icon and quiet actions</p><div className="flex gap-2"><button aria-label="Add item" onClick={() => action("Item added.")} className="grid size-10 place-items-center rounded-lg text-white" style={{ backgroundColor: c.accent }}>+</button><button onClick={() => action("More options opened.")} className="rounded-lg border border-stone-200 px-4 text-xs">More options ···</button></div><p className="pt-3 text-[10px] text-stone-500">Clear focus rings and helpful labels make actions easier to use.</p></div></div>{feedback && <p role="status" className="mt-4 text-xs" style={{ color: c.accent }}>{feedback}</p>}</div>;
  else preview = <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-[9px] uppercase tracking-[.15em] text-stone-400">LAYOUT SECTIONS</p><h2 className="mt-1 text-sm font-medium">Compose a useful page rhythm</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{titles.map((title, i) => <button key={title} onClick={() => setActive(i)} className={"rounded-xl border p-4 text-left " + (active === i ? "shadow-sm" : "")} style={{ borderColor: active === i ? c.accent : "#e7e5e4" }}><span className="text-[9px] opacity-45">SECTION 0{i + 1}</span><div className="mt-5 grid h-16 grid-cols-3 gap-1">{[0, 1, 2].map((x) => <span key={x} className="rounded-md" style={{ backgroundColor: (i + x) % 2 ? "#ece9e2" : c.surface }} />)}</div><p className="mt-4 text-xs font-medium">{title}</p><p className="mt-1 text-[10px] text-stone-500">Responsive content block</p></button>)}</div><div className="mt-4 rounded-xl p-5 text-white" style={{ backgroundColor: c.ink }}><p className="text-[9px] uppercase tracking-[.15em] text-white/50">PREVIEW / {titles[active].toUpperCase()}</p><h3 className="mt-3 text-xl font-semibold">{config.headline}</h3><p className="mt-2 max-w-xl text-xs leading-5 text-white/65">{config.description}</p><button onClick={() => action("Section action selected.")} className="mt-4 rounded-lg px-4 py-2 text-[10px] text-white" style={{ backgroundColor: c.accent }}>Explore section →</button></div></div>;
  return <div className="min-h-screen" style={{ backgroundColor: c.background, color: c.ink }}>
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8"><a href="#" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a><span className="hidden text-[10px] text-stone-500 sm:block">A usable collection for thoughtful interfaces.</span><button onClick={() => action("Collection link copied.")} className="rounded-full border border-current/15 px-3 py-2 text-[10px]">Share collection ↗</button></header>
    <main className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8"><div className="grid gap-8 pb-8 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><p className="text-[10px] uppercase tracking-[.18em] opacity-50">COMPONENT STUDY / 0{mode + 1}</p><h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">{config.headline}</h1></div><p className="max-w-xl text-sm leading-6 opacity-65">{config.description}</p></div><div className="grid gap-5 lg:grid-cols-[220px_1fr]"><aside className="rounded-2xl border border-black/10 bg-white p-4"><p className="px-2 text-[9px] uppercase tracking-[.15em] text-stone-400">IN THIS COLLECTION</p><nav className="mt-3 flex gap-1 overflow-x-auto lg:flex-col">{titles.map((title, i) => <button key={title} onClick={() => setActive(i)} className={"whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-[10px] " + (active === i ? "font-medium" : "text-stone-500")} style={active === i ? { backgroundColor: c.surface, color: c.ink } : {}}>{String(i + 1).padStart(2, "0")} &nbsp; {title}</button>)}</nav></aside><section className="min-w-0 rounded-2xl border border-black/10 bg-white p-3 sm:p-5"><div className="mb-4 flex items-center justify-between border-b border-stone-100 px-2 pb-3"><div><p className="text-[9px] uppercase tracking-[.14em] text-stone-400">LIVE COMPONENT PREVIEW</p><p className="mt-1 text-xs font-medium">{titles[active]}</p></div><span className="rounded-full px-2.5 py-1 text-[9px]" style={{ backgroundColor: c.surface }}>Interactive</span></div>{preview}</section></div></main>
    <footer className="border-t border-black/10 px-5 py-5 text-center text-[10px] text-stone-500">© {new Date().getFullYear()} {config.brand} · Reusable UI patterns, built to adapt.</footer>
    {feedback && <div role="status" className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-3 text-xs text-white shadow-xl">{feedback}</div>}
  </div>;
}
`,It=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [period, setPeriod] = useState("7 days");
  const [section, setSection] = useState("Overview");
  const [notice, setNotice] = useState("");
  const c = config.colors;
  const values = config.metrics;
  const links = ["Overview", "Reports", "Activity", "Team", "Settings"];
  const actions = ["Workspace updated", "Weekly report is ready", "A new member joined", "Scheduled review completed"];
  function choose(label) { setSection(label); setNotice(\`\${label} view selected\`); setTimeout(() => setNotice(""), 1600); }
  return <div className="min-h-screen bg-[#f7f8fa] text-slate-800">
    <div className="mx-auto flex min-h-screen max-w-[1440px]">
      <aside className="hidden w-56 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-5 md:flex">
        <a href="#" className="mb-9 flex items-center gap-2.5 px-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg text-sm text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a>
        <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[.17em] text-slate-400">WORKSPACE</p>
        <nav className="space-y-1">{links.map((label, i) => <button key={label} onClick={() => choose(label)} className={"flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs " + (section === label ? "font-medium text-slate-900" : "text-slate-500")} style={section === label ? { backgroundColor: c.surface } : {}}><span className="w-4 text-center" style={section === label ? { color: c.accent } : {}}>{["◫", "▥", "◷", "♧", "⚙"][i]}</span>{label}</button>)}</nav>
        <div className="mt-auto rounded-xl p-4" style={{ backgroundColor: c.surface }}><p className="text-xs font-medium">Need a hand?</p><p className="mt-1 text-[10px] leading-4 text-slate-500">Visit your workspace guide for helpful tips.</p><button onClick={() => setNotice("Help center opened")} className="mt-3 text-[10px] font-medium" style={{ color: c.accent }}>Open help center →</button></div>
      </aside>
      <main className="min-w-0 flex-1 p-4 sm:p-7 lg:p-9">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5"><div><p className="text-[10px] text-slate-400">WORKSPACE / {section.toUpperCase()}</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">{config.headline}</h1></div><div className="flex items-center gap-2"><button onClick={() => setNotice("Your report is being prepared")} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">Export report</button><button onClick={() => setNotice("New item created")} className="rounded-lg px-3 py-2 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>+ New item</button></div></header>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-medium">{section} at a glance</p><p className="mt-1 text-xs text-slate-500">{config.description}</p></div><div className="flex rounded-lg border border-slate-200 bg-white p-1">{["7 days", "30 days", "Quarter"].map((item) => <button key={item} onClick={() => setPeriod(item)} className={"rounded-md px-2.5 py-1.5 text-[10px] " + (period === item ? "text-white" : "text-slate-500")} style={period === item ? { backgroundColor: c.ink } : {}}>{item}</button>)}</div></div>
        <section className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[["Total activity", values[0].toLocaleString(), "+12.8%"], ["Active this period", values[1].toLocaleString(), "+8.4%"], ["Needs attention", values[2].toLocaleString(), "-2.1%"], ["Completion rate", \`\${78 + config.variant}%\`, "+5.3%"]].map(([label, amount, delta], i) => <article key={label} className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs text-slate-500">{label}</p><span className="grid size-7 place-items-center rounded-md text-xs" style={{ color: c.accent, backgroundColor: c.surface }}>{["↗", "◷", "!", "✓"][i]}</span></div><p className="mt-4 text-2xl font-semibold tracking-tight">{amount}</p><p className="mt-1 text-[10px]"><span style={{ color: c.accent }}>{delta}</span><span className="ml-1 text-slate-400">compared to last period</span></p></article>)}
        </section>
        <section className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_.8fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"><div className="flex items-start justify-between"><div><h2 className="text-sm font-medium">Activity over time</h2><p className="mt-1 text-[10px] text-slate-400">A steady view of your most important signals</p></div><button onClick={() => setNotice(\`Showing \${period.toLowerCase()}\`)} className="text-[10px] text-slate-500">{period}⌄</button></div><div className="relative mt-7 flex h-48 items-end gap-1 border-b border-l border-slate-100 px-2 sm:gap-2">{[25, 50, 75, 100].map((n) => <div key={n} className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-slate-100" style={{ bottom: \`\${n - 5}%\` }} />)}{config.chart.map((amount, i) => <div key={i} className="relative z-[1] flex h-full flex-1 items-end"><span className="w-full rounded-t-sm transition-opacity hover:opacity-70" title={\`\${amount} activity points\`} style={{ height: \`\${amount}%\`, backgroundColor: i === 9 ? c.accent : c.surface }} /></div>)}</div><div className="ml-3 mt-2 flex justify-between text-[9px] text-slate-400"><span>May 01</span><span>May 07</span><span>May 14</span><span>May 21</span><span>May 28</span></div></article>
          <article className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"><div className="flex items-center justify-between"><h2 className="text-sm font-medium">Recent activity</h2><button onClick={() => choose("Activity")} className="text-[10px]" style={{ color: c.accent }}>View all</button></div><div className="mt-4 divide-y divide-slate-100">{actions.map((action, i) => <div key={action} className="flex items-center gap-3 py-3"><span className="grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-medium" style={{ backgroundColor: c.surface, color: c.accent }}>{["AM", "JL", "RK", "TS"][i]}</span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-medium">{action}</p><p className="mt-1 text-[9px] text-slate-400">{["Alex Morgan", "Jamie Lee", "Riley Kim", "Taylor Smith"][i]}</p></div><span className="text-[9px] text-slate-400">{i + 2}h</span></div>)}</div></article>
        </section>
        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="text-sm font-medium">Priority overview</h2><p className="mt-1 text-[10px] text-slate-400">Items that may need your attention</p></div><button onClick={() => choose("Reports")} className="text-[10px]" style={{ color: c.accent }}>See all</button></div><div className="grid gap-2 sm:grid-cols-3">{config.features.map((feature, i) => <div key={feature} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"><span className="size-2 rounded-full" style={{ backgroundColor: [c.accent, "#d4a65d", "#8aa28b"][i] }} /><span className="flex-1 truncate text-[11px]">{feature}</span><span className="text-[9px] text-slate-400">{["On track", "Review", "In progress"][i]}</span></div>)}</div></section>
      </main>
    </div>
    {notice && <div role="status" className="fixed bottom-5 right-5 rounded-lg bg-slate-900 px-4 py-3 text-xs text-white shadow-xl">{notice}</div>}
  </div>;
}
`,Ft=`const config = globalThis.__CONFIG__ ?? {};
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
`,$t=`import { useState } from "react";
export default function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (!/^\\S+@\\S+\\.\\S+$/.test(email)) return setErr("Enter a valid email address.");
    if (pw.length < 8) return setErr("Password must be at least 8 characters.");
    setErr(""); setDone(true);
  }
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-teal-800 p-10 text-teal-50 md:flex"><span className="font-bold">Northwind</span><p className="text-2xl">"Everything our team needs, in one quiet place."</p></aside>
      <main className="flex items-center justify-center bg-stone-50 p-6">
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <h1 className="text-3xl font-bold text-stone-900">Welcome back</h1>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg border border-stone-300 px-3 py-2.5" />
          <div className="relative">
            <input value={pw} onChange={(e) => setPw(e.target.value)} type={show ? "text" : "password"} placeholder="Password" className="w-full rounded-lg border border-stone-300 px-3 py-2.5" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-2.5 text-sm text-teal-700">{show ? "Hide" : "Show"}</button>
          </div>
          {err && <p className="text-sm text-red-600">{err}</p>}
          {done && <p className="text-sm text-teal-700">Signed in as {email}.</p>}
          <button className="w-full rounded-lg bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800">Sign in</button>
        </form>
      </main>
    </div>
  );
}
`,Lt=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("All work");
  const [sent, setSent] = useState(false);
  const c = config.colors;
  const dark = config.variant === 3 || config.variant === 6;
  const bg = dark ? c.ink : c.background;
  const fg = dark ? "#f7f6f2" : c.ink;
  const projects = [
    { title: config.features[0], type: "Selected work", color: c.surface, mark: "01" },
    { title: config.features[1], type: "Case study", color: "#e9e5dc", mark: "02" },
    { title: config.features[2], type: "Experiment", color: "#e3e9e5", mark: "03" },
  ].filter((p) => filter === "All work" || p.type === filter);
  return <div id="top" className="min-h-screen" style={{ backgroundColor: bg, color: fg }}>
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"><a href="#" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a><nav className="flex items-center gap-5 text-xs opacity-70"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav><span className="hidden items-center gap-2 text-[10px] sm:flex"><i className="size-2 rounded-full bg-emerald-500" />Available for select projects</span></header>
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.2fr_.8fr] lg:pb-24 lg:pt-20">
        <div><p className="text-xs uppercase tracking-[.18em] opacity-55">Independent creative / {config.brand}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-7xl">{config.headline}</h1><p className="mt-6 max-w-2xl text-base leading-7 opacity-70">{config.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#work" className="rounded-full px-5 py-3 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>Explore selected work ↗</a><a href="#contact" className="rounded-full border border-current/20 px-5 py-3 text-xs">Get in touch</a></div></div>
        <div className="relative min-h-[250px] overflow-hidden rounded-3xl p-6 sm:min-h-[330px] sm:p-8" style={{ backgroundColor: c.surface }}><div className="absolute right-8 top-8 grid size-32 place-items-center rounded-full border border-current/10 sm:size-44"><div className="grid size-20 place-items-center rounded-full text-2xl text-white sm:size-28" style={{ backgroundColor: c.accent }}>{config.brand[0]}</div></div><div className="absolute bottom-7 left-7 max-w-[55%]"><p className="text-[10px] uppercase tracking-[.16em] opacity-50">A little about my practice</p><p className="mt-3 text-lg font-medium leading-snug">{config.features[0]}</p><p className="mt-2 text-xs opacity-60">Thoughtful decisions, from the first sketch to the final detail.</p></div><span className="absolute right-6 top-6 text-[10px] opacity-50">PORTFOLIO / 2025—26</span></div>
      </section>
      <section id="work" className="mx-auto max-w-7xl px-6 py-10"><div className="flex flex-wrap items-end justify-between gap-5 border-b border-current/10 pb-5"><div><p className="text-[10px] uppercase tracking-[.16em] opacity-50">A few things I’ve made</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Selected work</h2></div><div className="flex gap-1">{["All work", "Selected work", "Case study", "Experiment"].map((item) => <button key={item} onClick={() => setFilter(item)} className={"rounded-full px-3 py-2 text-[10px] " + (filter === item ? "text-white" : "opacity-60")} style={filter === item ? { backgroundColor: c.ink } : {}}>{item}</button>)}</div></div><div className="mt-5 grid gap-4 md:grid-cols-3">{projects.map((project, i) => <article key={project.title} className="group"><div className="relative grid aspect-[1.1] place-items-center overflow-hidden rounded-2xl" style={{ backgroundColor: project.color }}><span className="absolute left-4 top-4 text-[10px] opacity-50">{project.mark} / {project.type}</span><div className={"grid place-items-center text-center transition group-hover:scale-105 " + (i === 1 ? "size-36 rotate-[-8deg] rounded-3xl" : "size-40 rounded-full")} style={{ backgroundColor: i === 2 ? c.ink : c.accent, color: "#fff" }}><span className="max-w-28 px-3 text-sm font-medium">{config.brand}</span></div><span className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-white text-slate-900">↗</span></div><div className="flex items-center justify-between pt-3"><div><h3 className="text-sm font-medium">{project.title}</h3><p className="mt-1 text-[10px] opacity-55">{config.brand} / {project.type}</p></div><span className="text-xs opacity-50">0{i + 1}</span></div></article>)}</div></section>
      <section id="about" className="mx-auto grid max-w-7xl gap-8 border-t border-current/10 px-6 py-14 md:grid-cols-[.7fr_1.3fr]"><p className="text-xs uppercase tracking-[.16em] opacity-50">A little about me</p><div><h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight">{config.description}</h2><div className="mt-7 grid gap-3 sm:grid-cols-3">{config.features.map((item, i) => <div key={item} className="rounded-xl border border-current/10 p-4"><span className="text-xs opacity-45">0{i + 1}</span><p className="mt-5 text-sm font-medium">{item}</p></div>)}</div></div></section>
      <section id="contact" className="mx-6 mb-8 rounded-3xl p-7 sm:p-12" style={{ backgroundColor: c.surface }}><div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.16em] opacity-50">Have something in mind?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Let’s make it meaningful.</h2><p className="mt-2 text-sm opacity-65">Tell me a little about the project and I’ll get back to you.</p></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="flex w-full max-w-sm gap-2 rounded-xl border border-current/15 bg-white p-1.5"><input type="email" required placeholder="Your email" className="min-w-0 flex-1 bg-transparent px-3 text-xs text-slate-900 outline-none" /><button className="rounded-lg px-4 py-2 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>{sent ? "Message noted" : "Say hello"}</button></form></div></section>
    </main>
    <footer className="flex justify-between px-6 py-5 text-[10px] opacity-50"><span>© {new Date().getFullYear()} {config.brand}</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}
`,Ut=`const config = globalThis.__CONFIG__ ?? {};
import { useState } from "react";

export default function App() {
  const [annual, setAnnual] = useState(false);
  const [selected, setSelected] = useState("");
  const [usage, setUsage] = useState(240);
  const [notice, setNotice] = useState("");
  const c = config.colors;
  const plans = config.variant === 9 ? [{ name: "One clear plan", price: 18, detail: "Everything you need to get started." }] : [
    { name: "Starter", price: 0, detail: "For trying a better way." },
    { name: config.variant === 5 ? "Business" : "Growth", price: config.variant === 5 ? 149 : 24, detail: "For teams ready to move." },
    { name: config.variant === 5 ? "Enterprise" : "Scale", price: config.variant === 5 ? 0 : 59, detail: "For work at every level." },
  ];
  const price = (amount) => amount === 0 ? "$0" : amount ? \`$\${annual ? Math.round(amount * .8) : amount}\` : "Let’s talk";
  function choose(plan) { setSelected(plan); setNotice(\`\${plan} selected. Your next step is ready.\`); setTimeout(() => setNotice(""), 2200); }
  const usageRate = config.variant === 8 ? .12 : .08;
  const estimated = Math.max(0, Math.round(usage * usageRate));
  return <div className="min-h-screen" style={{ backgroundColor: config.colors.background, color: c.ink }}>
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"><a href="#" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg text-xs text-white" style={{ backgroundColor: c.accent }}>{config.brand[0]}</span>{config.brand}</a><nav className="hidden gap-6 text-xs opacity-65 sm:flex"><a href="#plans">Plans</a><a href="#compare">Compare</a><a href="#faq">FAQ</a></nav><button onClick={() => choose("Sign in")} className="rounded-lg border border-current/15 px-3 py-2 text-[10px]">Sign in</button></header>
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-9 text-center sm:px-8 sm:pt-14"><p className="inline-flex items-center gap-2 rounded-full border border-current/15 px-3 py-1.5 text-[10px] uppercase tracking-[.13em]"><span className="size-1.5 rounded-full" style={{ backgroundColor: c.accent }} />Simple, considered pricing</p><h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-6xl">{config.headline}</h1><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 opacity-65">{config.description}</p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-current/10 bg-white/70 p-1.5"><span className={"px-2 text-[10px] " + (!annual ? "font-medium" : "opacity-55")}>Monthly</span><button aria-label="Toggle annual billing" aria-pressed={annual} onClick={() => setAnnual(!annual)} className="relative h-6 w-11 rounded-full" style={{ backgroundColor: annual ? c.accent : "#c9c9c4" }}><span className={"absolute top-1 size-4 rounded-full bg-white transition-all " + (annual ? "left-6" : "left-1")} /></button><span className={"px-2 text-[10px] " + (annual ? "font-medium" : "opacity-55")}>Yearly <span className="ml-1" style={{ color: c.accent }}>Save 20%</span></span></div>
      </section>
      {config.variant === 3 || config.variant === 8 ? <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-8"><div className="grid gap-6 rounded-2xl border border-current/10 bg-white p-6 sm:grid-cols-[1fr_.7fr] sm:p-8"><div><p className="text-[10px] uppercase tracking-[.15em] opacity-50">Estimate your monthly use</p><h2 className="mt-2 text-xl font-semibold">Only pay for what you use.</h2><p className="mt-2 text-xs leading-5 opacity-60">Move the slider to explore an estimated volume. Adjust any time as your needs change.</p><input aria-label="Monthly usage" type="range" min="0" max="1000" step="10" value={usage} onChange={(event) => setUsage(Number(event.target.value))} className="mt-8 w-full accent-current" style={{ accentColor: c.accent }} /><div className="flex justify-between text-[10px] opacity-55"><span>0 units</span><span>{usage.toLocaleString()} units</span><span>1,000 units</span></div></div><div className="flex flex-col justify-center rounded-xl p-6" style={{ backgroundColor: c.surface }}><p className="text-xs opacity-60">Estimated monthly total</p><p className="mt-2 text-4xl font-semibold tracking-tight">\${estimated}</p><p className="mt-2 text-[10px] opacity-60">Based on {usage.toLocaleString()} units at \${usageRate.toFixed(2)} per unit</p><button onClick={() => choose("Usage estimate")} className="mt-5 rounded-lg px-4 py-2.5 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>Choose usage plan</button></div></div></section> : null}
      <section id="plans" className="mx-auto max-w-7xl px-5 pb-14 sm:px-8"><div className={"grid gap-4 " + (plans.length === 1 ? "mx-auto max-w-xl" : "md:grid-cols-3")}>{plans.map((plan, i) => <article key={plan.name} className={"relative flex flex-col rounded-2xl border p-5 sm:p-6 " + (i === 1 ? "shadow-lg shadow-black/[.05]" : "")} style={{ backgroundColor: i === 1 ? c.ink : "#fff", color: i === 1 ? "#fff" : c.ink, borderColor: i === 1 ? c.ink : "rgba(0,0,0,.1)" }}>{i === 1 && plans.length > 1 && <span className="absolute -top-3 left-5 rounded-full px-3 py-1 text-[9px] font-medium text-white" style={{ backgroundColor: c.accent }}>MOST POPULAR</span>}<p className="text-sm font-medium">{plan.name}</p><p className="mt-2 text-xs opacity-60">{plan.detail}</p><div className="mt-6 flex items-end gap-1"><span className="text-4xl font-semibold tracking-tight">{price(plan.price)}</span>{plan.price > 0 && <span className="mb-1 text-[10px] opacity-55">/ month</span>}</div><p className="mt-2 min-h-4 text-[10px] opacity-55">{annual && plan.price > 0 ? "Billed annually · 20% savings" : plan.price === 0 ? "No card required" : "Billed monthly"}</p><button onClick={() => choose(plan.name)} className="mt-5 rounded-lg px-4 py-3 text-xs font-medium" style={i === 1 ? { backgroundColor: c.accent, color: "#fff" } : { backgroundColor: c.surface, color: c.ink }}>{selected === plan.name ? "Selected ✓" : plan.price === 0 && i === 0 ? "Get started" : plan.price === 0 ? "Contact sales" : "Choose " + plan.name}</button><div className="my-5 border-t border-current/10" /><p className="text-[9px] uppercase tracking-[.14em] opacity-50">Everything included</p><ul className="mt-3 space-y-3">{config.features.map((feature) => <li key={feature} className="flex gap-2 text-xs opacity-80"><span style={{ color: c.accent }}>✓</span>{feature}</li>)}</ul>{config.variant === 8 && <div className="mt-4 rounded-lg p-3 text-[10px]" style={{ backgroundColor: i === 1 ? "#ffffff15" : c.surface }}>Choose a pack of {["250", "1,000", "5,000"][i] ?? "250"} credits</div>}</article>)}</div></section>
      <section id="compare" className="mx-auto max-w-5xl px-5 py-10 sm:px-8"><div className="rounded-2xl border border-current/10 bg-white p-5 sm:p-7"><div className="mb-5"><p className="text-[10px] uppercase tracking-[.16em] opacity-50">No surprises</p><h2 className="mt-2 text-xl font-semibold">Included with every plan</h2></div><div className="divide-y divide-stone-100">{config.features.map((feature, i) => <div key={feature} className="flex items-center justify-between gap-4 py-3 text-xs"><span>{feature}</span><div className="flex gap-10 sm:gap-20"><span className="text-emerald-700">Included</span><span className="hidden text-emerald-700 sm:block">Included</span><span className="hidden text-emerald-700 sm:block">Included</span></div></div>)}</div></div></section>
      <section id="faq" className="mx-auto max-w-5xl px-5 py-10 sm:px-8"><h2 className="text-xl font-semibold">A few useful details</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{["Can I change my plan later?", "What happens when I need more?", "Which payment methods are supported?", "Can I cancel at any time?"].map((item) => <details key={item} className="rounded-xl border border-current/10 bg-white p-4"><summary className="cursor-pointer text-xs font-medium">{item}</summary><p className="mt-3 text-xs leading-5 opacity-65">Your plan is flexible. Review your selection and billing details before confirming any changes.</p></details>)}</div></section>
      <section className="mx-5 mb-10 rounded-2xl p-6 text-center sm:mx-8 sm:p-9" style={{ backgroundColor: c.surface }}><p className="text-xs opacity-65">Still deciding?</p><h2 className="mt-2 text-xl font-semibold">We’re happy to help you choose.</h2><button onClick={() => choose("Talk to our team")} className="mt-4 rounded-lg px-4 py-2.5 text-xs font-medium text-white" style={{ backgroundColor: c.accent }}>Talk to our team ↗</button></section>
    </main>
    <footer className="flex justify-between border-t border-current/10 px-5 py-5 text-[10px] opacity-50 sm:px-8"><span>© {new Date().getFullYear()} {config.brand}</span><span>Clear plans. No surprises.</span></footer>
    {notice && <div role="status" className="fixed bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-3 text-xs text-white shadow-xl">{notice}</div>}
  </div>;
}
`,Bt=`import { useState } from "react";
const brand = "Flowly";
const features = [
  { title: "Fast setup", text: "Go live in minutes with ready-made workflows." },
  { title: "Team ready", text: "Invite teammates and share work in one place." },
  { title: "Clear insight", text: "Track what matters with simple reports." },
];
export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <span className="text-lg font-bold">{brand}</span>
        <div className="hidden gap-6 text-sm text-slate-600 sm:flex"><a href="#f">Features</a><a href="#c">Pricing</a></div>
        <button onClick={() => setOpen(!open)} className="text-2xl sm:hidden" aria-label="Menu">{open ? "×" : "☰"}</button>
      </nav>
      {open && <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-4 text-sm sm:hidden"><a href="#f">Features</a><a href="#c">Pricing</a></div>}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Work that moves at your pace</h1>
        <p className="mt-5 text-lg text-slate-600">{brand} brings planning, tasks and reporting into one calm workspace.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">Start free</button>
          <button className="rounded-lg border border-slate-300 px-5 py-3 font-medium">Watch demo</button>
        </div>
      </section>
      <section id="f" className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 sm:grid-cols-3">
        {features.map((f) => (<div key={f.title} className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold">{f.title}</h3><p className="mt-2 text-sm text-slate-600">{f.text}</p></div>))}
      </section>
      <section id="c" className="bg-slate-900 px-6 py-14 text-center text-white"><h2 className="text-2xl font-semibold">Ready to try {brand}?</h2><button className="mt-5 rounded-lg bg-white px-5 py-3 font-medium text-slate-900">Create account</button></section>
    </div>
  );
}
`,zt=`const config = globalThis.__CONFIG__ ?? {};
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
              <div className="mt-3 rounded-lg border border-black/10 p-3"><div className="mb-4 flex justify-between text-[10px]"><span className="font-medium">Your team’s focus</span><span className="opacity-50">This week⌄</span></div><div className="flex h-24 items-end gap-2 border-b border-black/10">{config.chart.map((n, i) => <div key={i} className="flex-1 rounded-t-sm" style={{ height: \`\${n}%\`, backgroundColor: i === 8 ? c.accent : c.surface }} />)}</div><div className="mt-2 flex justify-between text-[8px] opacity-45"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
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
`,Wt=Object.assign({"./designs/AgencyTemplate.jsx":jt,"./designs/AuthTemplate.jsx":Ot,"./designs/BlogTemplate.jsx":Dt,"./designs/CommerceTemplate.jsx":Mt,"./designs/ComponentTemplate.jsx":Rt,"./designs/DashboardTemplate.jsx":It,"./designs/LandingTemplate.jsx":Ft,"./designs/LoginPage.jsx":$t,"./designs/PortfolioTemplate.jsx":Lt,"./designs/PricingTemplate.jsx":Ut,"./designs/SaasLanding.jsx":Bt,"./designs/SaasTemplate.jsx":zt}),Xt=["Landing Pages","SaaS Websites","E-commerce Interfaces","Dashboard Interfaces","Authentication Pages","Portfolio Websites","Agency Websites","Blog & Content Websites","Pricing & Subscription Pages","UI Components & Sections"],$e=[["#f5f2eb","#17251f","#547966","#e7e1d5"],["#f3f5f8","#17243a","#526fa9","#e7ebf1"],["#f7f2ef","#30211c","#ad6549","#eee5df"],["#f3f3ef","#1e2524","#657b6d","#e6e8df"],["#f5f1e9","#27251f","#9d8053","#e9e1d4"],["#f4f2f7","#252031","#766292","#e9e4f0"],["#f4f5f2","#1e2926","#588276","#e5e9e3"],["#f7f3ed","#302923","#ba744d","#eee4d8"],["#f0f3f2","#192a2d","#3c7880","#e1e9e8"],["#f7f2f2","#2c2025","#a85768","#eee3e5"]],Vt=[["Landing Pages","LandingTemplate",[["Nova — Modern Startup Landing","nova-modern-startup-landing","A clearer way to build what matters.","An optimistic launch page for ambitious teams, with crisp storytelling and a strong first action.",["A sharp product promise","Proof from early adopters","A focused conversion path"]],["Elevate — SaaS Product Landing","elevate-saas-product-landing","Your next chapter starts here.","A polished, confident home for a product ready to move teams forward.",["Product-led hero","Outcome-focused features","Customer proof"]],["Horizon — Creative Business Landing","horizon-creative-business-landing","Make room for a brighter idea.","A spacious, image-free creative business page that puts its message and craft first.",["Editorial hero","Services overview","Thoughtful inquiry CTA"]],["Lumina — Minimal Landing Page","lumina-minimal-landing-page","Less noise. More momentum.","A deliberately minimal landing page with generous whitespace and a single clear next step.",["Quiet typography","Focused call to action","Concise feature list"]],["Orbit — Tech Product Landing","orbit-tech-product-landing","Ideas in motion, all in one orbit.","A technical product launch page with a compact product preview and clear capability story.",["Product console preview","Technical feature cards","Early access form"]],["Vertex — Corporate Landing Page","vertex-corporate-landing-page","Built for the work ahead.","A composed corporate landing page for teams that value reliability, expertise and measurable results.",["Trust-led introduction","Service highlights","Business inquiry action"]],["Bloom — Lifestyle Landing Page","bloom-lifestyle-landing-page","A little more space to feel good.","A warm lifestyle brand page with human copy, soft surfaces and a simple newsletter signup.",["Warm brand story","Curated benefits","Newsletter signup"]],["Flux — Gradient-Free Creative Landing","flux-gradient-free-creative-landing","Good ideas deserve a clear stage.","A graphic, gradient-free creative landing page using confident blocks, type and useful details.",["Bold typographic composition","Project highlights","Direct contact CTA"]],["Summit — Professional Service Landing","summit-professional-service-landing","Expert guidance. Practical progress.","A reassuring service-business page designed to turn expertise into clear next steps.",["Expertise-led hero","Service breakdown","Consultation request"]],["Pulse — App Launch Landing Page","pulse-app-launch-landing-page","A better rhythm for every day.","A mobile-app launch page with a device-style feature preview, benefits and a working signup action.",["App preview panel","Benefit-led storytelling","Launch list signup"]]]],["SaaS Websites","SaasTemplate",[["FlowDesk — Project Management SaaS","flowdesk-project-management-saas","Projects, finally in sync.","A calm project workspace for planning, ownership and steady team progress.",["Flexible project boards","Clear ownership","Weekly progress view"]],["CloudSync — Cloud Storage Platform","cloudsync-cloud-storage-platform","Your files, wherever work happens.","A cloud storage platform homepage focused on safe sharing and effortless access.",["Shared team spaces","Permission controls","Fast file discovery"]],["TaskPilot — Productivity SaaS","taskpilot-productivity-saas","Make your best work the easy work.","A productivity product site that turns scattered tasks into a practical daily plan.",["Personal work queue","Smart reminders","Focus insights"]],["Metricly — Analytics SaaS Website","metricly-analytics-saas-website","Know what is moving the needle.","An analytics SaaS homepage for teams who need clear answers without reporting overhead.",["Live performance overview","Flexible reports","Team-ready sharing"]],["Invoxa — Billing & Invoice Platform","invoxa-billing-invoice-platform","Billing that keeps business moving.","A modern invoicing product page for creating, tracking and collecting payments.",["Branded invoices","Payment tracking","Recurring billing"]],["MeetSpace — Collaboration SaaS","meetspace-collaboration-saas","A shared place for better work.","A collaboration suite homepage centered on thoughtful communication and team context.",["Shared team rooms","Meeting notes","Async updates"]],["AutomateX — Workflow Automation Platform","automatex-workflow-automation-platform","Let good workflows run themselves.","A workflow automation platform that helps operations teams connect everyday tools.",["Visual workflow builder","Connected apps","Run history"]],["DataNest — Data Management SaaS","datanest-data-management-saas","Make trusted data easier to find.","A practical data management platform for organizing, documenting and sharing knowledge.",["Centralized data catalog","Ownership and lineage","Governed sharing"]],["PromptLab — AI Tools Platform","promptlab-ai-tools-platform","A better workbench for ideas.","An AI tools workspace for organizing prompts, testing outputs and sharing useful patterns.",["Prompt collections","Version comparison","Team workspaces"]],["SecureStack — Cybersecurity SaaS","securestack-cybersecurity-saas","Security posture, made understandable.","A security SaaS product site that makes risk, coverage and remediation easier to act on.",["Asset visibility","Risk prioritization","Remediation workflows"]]]],["E-commerce Interfaces","CommerceTemplate",[["LuxeCart — Premium Fashion Store","luxecart-premium-fashion-store","Considered pieces. Lasting presence.","A refined fashion storefront with an edited collection, tactile neutrals and a compact cart.",["Seasonal collection","Size selection","Saved favorites"],["The Form Coat","Studio Trouser","Everyday Knit","Soft Leather Tote"]],["TechMart — Electronics Store","techmart-electronics-store","The right tech, without the noise.","A useful electronics shop that makes specifications, comparisons and trusted picks easy.",["Curated electronics","Quick specifications","Compare products"],["Studio Headphones","Compact Speaker","Travel Keyboard","Focus Webcam"]],["UrbanWear — Streetwear Store","urbanwear-streetwear-store","Uniform for the unexpected.","A bold streetwear collection with drop labels, contrast blocks and a direct shopping flow.",["New drop collection","Fit and color options","Limited-run edits"],["Oversized Utility Tee","Transit Cargo Pant","Canvas Runner","Core Zip Hoodie"]],["PureSkin — Beauty & Skincare Store","pureskin-beauty-skincare-store","A softer routine, backed by care.","A clean skincare storefront that foregrounds ingredients, routines and everyday essentials.",["Routine finder","Ingredient details","Skin-friendly essentials"],["Daily Cloud Cleanser","Calm Barrier Serum","Sun Veil SPF 40","Night Renewal Cream"]],["HomeCraft — Furniture E-commerce","homecraft-furniture-ecommerce","Make home feel more like you.","A considered furniture shop with room-led categories and enduring material choices.",["Room collections","Material details","Delivery information"],["Arc Lounge Chair","Oakline Side Table","Sunday Floor Lamp","Modular Shelf"]],["Zarqa — Jewelry Store","zarqa-jewelry-store","Small details. Kept for years.","A jewelry storefront built around thoughtful materials, considered gifting and lasting pieces.",["Fine-jewelry edits","Material and care notes","Gift-ready packaging"],["Dawn Signet Ring","Stillwater Chain","Orbit Stud Pair","Morrow Cuff"]],["FreshBasket — Grocery Store","freshbasket-grocery-store","Good food, closer to home.","A friendly market interface for fresh produce, weekly staples and easy basket building.",["Fresh picks","Weekly essentials","Quick add to basket"],["Market Greens Box","Stoneground Sourdough","Orchard Citrus Bag","Pantry Starter Set"]],["SoleStreet — Footwear Store","solestreet-footwear-store","Find your everyday stride.","A footwear shop organized around versatile silhouettes, comfort and straightforward fit details.",["Fit guidance","Everyday collection","Comfort details"],["Daybreak Runner","Field Canvas Low","Studio Leather Court","Weekend Trail Shoe"]],["GadgetHub — Gadgets & Accessories","gadgethub-gadgets-accessories","Small upgrades. Smoother days.","A curated gadget store for practical desk, travel and everyday carry accessories.",["Desk and travel edits","Compatibility details","Accessory bundles"],["Magnetic Desk Stand","Pocket Power Bank","Cable Kit No. 2","Quiet Keys Mini"]],["Artisan — Handmade Products Store","artisan-handmade-products-store","Made slowly, meant to stay.","A maker-led storefront celebrating handmade objects, small batches and the people behind them.",["Maker profiles","Small-batch releases","Care instructions"],["Speckle Stoneware Cup","Woven Market Basket","Hand-poured Cedar Candle","Linen Table Runner"]]]],["Dashboard Interfaces","DashboardTemplate",[["AdminCore — Admin Dashboard","admincore-admin-dashboard","Workspace overview","A practical admin home for user activity, system health and common workspace actions.",["User activity","Workspace health","Recent administration"]],["FinTrack — Financial Analytics Dashboard","fintrack-financial-analytics-dashboard","Financial overview","A financial analytics workspace for tracking cash flow, budgets and monthly movement.",["Cash flow trends","Budget performance","Account activity"]],["SalesFlow — Sales Management Dashboard","salesflow-sales-management-dashboard","Sales overview","A pipeline dashboard for seeing deal movement, team performance and upcoming follow-ups.",["Pipeline health","Team attainment","Next actions"]],["HealthPulse — Healthcare Dashboard","healthpulse-healthcare-dashboard","Care operations","A healthcare operations dashboard for appointment demand, care access and daily capacity.",["Appointment volume","Care access","Capacity watch"]],["EduManage — Education Management Dashboard","edumanage-education-management-dashboard","Learning overview","A clear education dashboard for attendance, course progress and learner engagement.",["Attendance trends","Course progress","Learner engagement"]],["StockPilot — Inventory Dashboard","stockpilot-inventory-dashboard","Inventory overview","An inventory control center for stock levels, incoming orders and items needing attention.",["Stock coverage","Incoming shipments","Reorder watchlist"]],["ProjectBoard — Project Management Dashboard","projectboard-project-management-dashboard","Portfolio overview","A project portfolio dashboard for delivery pace, ownership and cross-team dependencies.",["Delivery status","Team capacity","Dependency watch"]],["CloudMonitor — Infrastructure Monitoring Dashboard","cloudmonitor-infrastructure-monitoring-dashboard","Infrastructure health","An infrastructure overview for service uptime, resource usage and recent incidents.",["Service availability","Resource utilization","Incident timeline"]],["CyberWatch — Security Monitoring Dashboard","cyberwatch-security-monitoring-dashboard","Security posture","A security monitoring view for prioritized alerts, control coverage and response status.",["Priority alerts","Control coverage","Response progress"]],["InsightPro — Business Intelligence Dashboard","insightpro-business-intelligence-dashboard","Business performance","A business intelligence workspace for key metrics, trend lines and team-ready insights.",["Executive metrics","Period comparisons","Saved insights"]]]],["Authentication Pages","AuthTemplate",[["AuthFlow — Modern Login & Signup","authflow-modern-login-signup","Welcome back to better work.","A flexible sign-in experience with a clean account flow and clear inline feedback.",["Email and password sign-in","Remember this device","Account creation link"]],["MinimalAuth — Minimal Authentication","minimal-auth-minimal-authentication","Sign in, simply.","A quiet, single-purpose authentication screen that keeps focus on getting into the app.",["Minimal sign-in form","Accessible input labels","Password recovery"]],["SecureGate — Security-Focused Login","securegate-security-focused-login","Your account, protected.","A security-forward login experience with clear device assurance and recovery guidance.",["Trusted-device option","Security guidance","Account recovery"]],["SplitLogin — Split Screen Authentication","splitlogin-split-screen-authentication","Good to have you back.","A split-screen sign-in design pairing a focused form with an editorial welcome panel.",["Split-screen layout","Remember me","Password visibility toggle"]],["GlassAuth — Glass-Style Authentication","glassauth-glass-style-authentication","A clear path back in.","A translucent layered sign-in card with readable controls and a straightforward account flow.",["Layered sign-in card","Show and hide password","Inline confirmation"]],["OTPVerify — OTP Verification Interface","otpverify-otp-verification-interface","One more step to verify.","A focused verification screen for one-time codes, resend timing and recovery options.",["Six-digit code entry","Resend code action","Verification feedback"]],["Recoverly — Password Recovery Interface","recoverly-password-recovery-interface","Let's get you back in.","A reassuring recovery flow that validates an email address and confirms next steps.",["Email validation","Clear recovery instructions","Success state"]],["SocialPass — Social Login Interface","socialpass-social-login-interface","Choose how to continue.","A social sign-in layout with familiar provider actions and an accessible email fallback.",["Provider sign-in actions","Email fallback","Terms and privacy links"]],["EnterpriseAuth — Enterprise Authentication","enterpriseauth-enterprise-authentication","Sign in to your workspace.","An enterprise login interface with workspace identification and organization-ready messaging.",["Workspace identifier","Organization email","Secure sign-in guidance"]],["MultiStepAuth — Multi-Step Registration","multistepauth-multi-step-registration","A better workspace starts here.","A guided registration flow that collects account details before confirming a new workspace.",["Step-by-step progress","Field validation","Completion state"]]]],["Portfolio Websites","PortfolioTemplate",[["DevFolio — Developer Portfolio","devfolio-developer-portfolio","I build useful things for the web.","A confident developer portfolio with selected work, a concise story and a direct way to get in touch.",["Selected engineering work","A clear skills snapshot","Contact and availability"]],["PixelCraft — UI/UX Designer Portfolio","pixelcraft-ui-ux-designer-portfolio","Digital products, made more human.","A visual product-design portfolio centered on thoughtful case studies and practical outcomes.",["Case-study storytelling","Research and process","Outcome highlights"]],["MonoFrame — Minimal Portfolio","monoframe-minimal-portfolio","Work, without the noise.","A restrained portfolio layout using typography, whitespace and a carefully edited project list.",["Minimal project index","Compact biography","Quiet contact details"]],["CreativeEdge — Creative Professional Portfolio","creativeedge-creative-professional-portfolio","Ideas with a point of view.","A distinctive portfolio for an independent creative, balancing expressive work and clear services.",["Expressive project tiles","Creative disciplines","Inquiry call to action"]],["CodeCanvas — Full-Stack Developer Portfolio","codecanvas-full-stack-developer-portfolio","From first sketch to shipped product.","A full-stack engineering portfolio showing product thinking, technical range and shipped work.",["Full-stack case studies","Technology stack","Build notes"]],["CyberFolio — Cybersecurity Portfolio","cyberfolio-cybersecurity-portfolio","Security that starts with understanding.","A professional security portfolio highlighting responsible practice, research and defensive expertise.",["Security research notes","Responsible disclosure","Defensive capabilities"]],["MotionFrame — Motion Designer Portfolio","motionframe-motion-designer-portfolio","Give good stories a little movement.","A motion design portfolio with a cinematic feature panel and a tidy reel and project index.",["Featured motion reel","Project breakdowns","Production capabilities"]],["Architecta — Architecture Portfolio","architecta-architecture-portfolio","Spaces shaped around the way we live.","An architectural portfolio presenting selected spaces, materials and design intent with editorial care.",["Selected built work","Material studies","Practice profile"]],["PhotoVerse — Photographer Portfolio","photoverse-photographer-portfolio","A closer look at the in-between.","A photography portfolio with a gallery-led layout, collection filters and thoughtful image notes.",["Curated photo collections","Gallery navigation","Booking inquiry"]],["PersonalBrand — Professional Personal Website","personalbrand-professional-personal-website","Good work begins with good people.","A personal professional website connecting expertise, writing and speaking into one clear profile.",["Professional introduction","Expertise and writing","Speaking inquiries"]]]],["Agency Websites","AgencyTemplate",[["PixelAgency — Creative Digital Agency","pixelagency-creative-digital-agency","Digital work with a human point of view.","A creative agency homepage that pairs strong art direction with practical project information.",["Creative capabilities","Selected client work","Project inquiry"]],["CodeSphere — Software Development Agency","codesphere-software-development-agency","Complex software, made dependable.","A software agency site focused on reliable delivery, product partnership and engineering depth.",["Product engineering","Delivery approach","Technical case studies"]],["BrandForge — Branding Agency","brandforge-branding-agency","Build a brand people can feel.","A branding studio website for strategy, identity and the systems that bring a brand to life.",["Brand strategy","Identity systems","Launch support"]],["MarketRise — Digital Marketing Agency","market-rise-digital-marketing-agency","Marketing built around meaningful growth.","A digital marketing agency landing page focused on clear strategy and measurable performance.",["Growth strategy","Channel programs","Transparent reporting"]],["DesignHaus — Design Studio Website","designhaus-design-studio-website","Useful, beautiful, built together.","A collaborative design studio homepage for digital experiences, systems and product craft.",["Product design","Design systems","Collaborative process"]],["CyberShield — Cybersecurity Agency","cybershield-cybersecurity-agency","Confidence for the work you do online.","A cybersecurity consultancy page outlining practical assessment, protection and response services.",["Security assessments","Incident readiness","Practical remediation"]],["GrowthLab — Growth & Consulting Agency","growthlab-growth-consulting-agency","Find the next sensible step forward.","A strategy and growth consultancy website built around clear diagnosis and measurable action.",["Growth diagnostics","Operating strategy","Hands-on advisory"]],["MotionWorks — Video Production Agency","motionworks-video-production-agency","Stories in motion, from first frame to final cut.","A video production studio homepage showcasing its approach, craft and production services.",["Creative development","Production and direction","Post-production"]],["WebNexus — Web Development Agency","webnexus-web-development-agency","Websites that work as hard as you do.","A web development agency page for accessible, performant and maintainable digital products.",["Modern web builds","Accessibility and speed","Ongoing partnership"]],["StudioNorth — Premium Creative Studio","studionorth-premium-creative-studio","A little more intention in every detail.","A premium creative studio website with an editorial portfolio, considered services and personal contact.",["Art direction","Brand and digital work","Studio notes"]]]],["Blog & Content Websites","BlogTemplate",[["DailyScope — News & Magazine","dailyscope-news-magazine","A sharper view of what matters today.","A news and magazine front page with a lead story, topic navigation and a readable story list.",["Lead story layout","Topic-led browsing","Latest headlines"]],["TechJournal — Technology Blog","techjournal-technology-blog","Technology, explained with care.","A technology publication for useful analysis, product thinking and informed industry stories.",["Technology categories","Long-form articles","Newsletter signup"]],["StoryNest — Personal Blog","storynest-personal-blog","Notes from a life in progress.","A warm personal blog with an author introduction, recent essays and a comfortable reading rhythm.",["Author profile","Personal essays","Archive navigation"]],["InsightDaily — Editorial Website","insightdaily-editorial-website","Context for a world that won't stand still.","An editorial homepage designed to surface considered reporting, analysis and perspectives.",["Featured editorial","Opinion and analysis","Editor-selected reads"]],["DevNotes — Developer Blog","devnotes-developer-blog","Practical notes from building software.","A developer writing site with technical article cards, topic filters and code-friendly typography.",["Engineering articles","Topic filters","Reading-time labels"]],["TravelTales — Travel Blog","traveltales-travel-blog","Take the scenic route, thoughtfully.","A travel journal for destination notes, itineraries and the small details worth remembering.",["Destination collections","Travel stories","Trip planning notes"]],["FoodCanvas — Food & Recipe Blog","foodcanvas-food-recipe-blog","A good meal starts with a good idea.","A recipe publication with seasonal collections, approachable cooking notes and saved favorites.",["Recipe categories","Cooking time details","Saveable recipes"]],["DesignDigest — Design Magazine","designdigest-design-magazine","A closer look at how things come together.","A design magazine homepage for visual culture, digital craft and thoughtful creative practice.",["Design features","Studio interviews","Visual inspiration"]],["FinanceBrief — Finance Blog","financebrief-finance-blog","Money news with the useful parts up front.","A personal-finance publication that makes market context and everyday decisions easier to follow.",["Finance explainers","Market briefings","Practical guides"]],["KnowledgeHub — Educational Content Platform","knowledgehub-educational-content-platform","Learn something useful, one step at a time.","An educational content hub organized around learning paths, concise lessons and clear progress.",["Guided learning paths","Short lessons","Progress overview"]]]],["Pricing & Subscription Pages","PricingTemplate",[["PricePilot — SaaS Pricing Table","pricepilot-saas-pricing-table","A plan that fits the way you work.","A clear SaaS pricing table with a billing toggle, feature breakdown and a confident recommended tier.",["Monthly and annual billing","Three clear plan tiers","Feature comparison"]],["Planify — Subscription Plans","planify-subscription-plans","Simple plans for steady progress.","A subscription comparison page designed to make plan differences and billing cadence easy to understand.",["Flexible billing cadence","Included benefits","Plan selection feedback"]],["TierStack — Tiered Pricing Interface","tierstack-tiered-pricing-interface","Room to grow, at every stage.","A tiered pricing page for teams moving from an initial setup to a more capable workspace.",["Starter to scale tiers","Usage and feature limits","Recommended plan"]],["ScaleUp — Usage-Based Pricing","scaleup-usage-based-pricing","Pay for the value you actually use.","A usage-based pricing experience with an adjustable volume estimate and a transparent cost preview.",["Adjustable usage estimate","Live price calculation","Clear included allowance"]],["FlexiPlan — Flexible Pricing Page","flexiplan-flexible-pricing-page","Choose what works for you.","A flexible pricing page with an interactive billing selector and straightforward plan details.",["Flexible billing options","Selectable plan cards","Included feature lists"]],["EnterprisePlus — Enterprise Pricing","enterpriseplus-enterprise-pricing","A plan shaped around your organization.","An enterprise pricing experience focused on tailored capabilities, support and a practical sales conversation.",["Organization-ready features","Dedicated support options","Talk to an expert action"]],["CompareX — Plan Comparison Interface","comparex-plan-comparison-interface","The differences, made easy to compare.","A plan comparison interface that puts included features and meaningful limits side by side.",["Side-by-side comparison","Feature availability","Billing interval toggle"]],["MemberPro — Membership Pricing","memberpro-membership-pricing","Membership that gives more back.","A membership pricing page outlining recurring benefits, member-only access and annual savings.",["Member benefits","Monthly or annual option","Membership confirmation"]],["CreditFlow — Credit-Based Pricing","creditflow-credit-based-pricing","Credits that keep every action clear.","A credit-based pricing interface with selectable packs, estimated usage and transparent balances.",["Selectable credit packs","Usage estimate","Balance preview"]],["SimpleBill — Simple Subscription Pricing","simplebill-simple-subscription-pricing","One straightforward plan. No surprises.","A deliberately simple subscription page that explains one plan, its billing and the next step.",["Single-plan summary","Annual billing option","Cancel-anytime clarity"]]]],["UI Components & Sections","ComponentTemplate",[["HeroCraft — Hero Section Collection","herocraft-hero-section-collection","A thoughtful opening for every story.","A collection of adaptable hero sections with message hierarchy, supporting details and clear actions.",["Centered and split layouts","Eyebrow and headline patterns","Primary and secondary actions"]],["NavMaster — Navigation Bar Collection","navmaster-navigation-bar-collection","Navigation patterns, made practical.","A component gallery for responsive navigation, brand placement, active states and compact menus.",["Responsive menu patterns","Active navigation states","Desktop and mobile variants"]],["CardVerse — Card Component Collection","cardverse-card-component-collection","A better home for useful information.","A collection of reusable cards for feature summaries, metrics, profiles and editorial content.",["Feature and metric cards","Profile and content cards","Interactive hover states"]],["FormFlow — Form & Input Collection","formflow-form-input-collection","Forms that feel clear from the first field.","A practical form collection with accessible labels, validation feedback and multiple input patterns.",["Text and select fields","Inline validation","Submission feedback"]],["ModalX — Modal & Dialog Collection","modalx-modal-dialog-collection","Dialogs that make the next step clear.","An interactive set of confirmation, information and destructive-action dialogs.",["Confirmation dialog","Information panel","Dismiss and confirm actions"]],["TableGrid — Data Table Collection","tablegrid-data-table-collection","Structured data, easier to scan.","A compact data table collection with search, status filters and clear row-level actions.",["Searchable data rows","Status filtering","Row action menu"]],["TestimonialPro — Testimonial Sections","testimonialpro-testimonial-sections","Let customer stories do the talking.","A testimonial section collection with quote cards, attribution and interactive story navigation.",["Quote and attribution styles","Customer profile details","Previous and next controls"]],["FooterLab — Footer Design Collection","footerlab-footer-design-collection","A useful finish to every page.","A footer gallery covering brand summaries, grouped links, newsletter signup and legal navigation.",["Multi-column link groups","Newsletter form","Legal and social links"]],["ButtonForge — Button & Action Collection","buttonforge-button-action-collection","The small details behind confident actions.","A button collection for primary actions, quiet controls, icon buttons and loading feedback.",["Primary and secondary styles","Loading and disabled states","Icon action controls"]],["LayoutKit — Layout & Section Collection","layoutkit-layout-section-collection","Useful sections that fit together.","A layout collection for content grids, side-by-side stories, metric bands and call-to-action sections.",["Content grid patterns","Split story sections","Call-to-action layouts"]]]]],Gt=Z=>$e.map((oe,re)=>{const H=(re+Z*2)%$e.length;return $e[H]}),qt=Vt.flatMap(([Z,oe,re],H)=>re.map(([me,ye,ve,ue,fe,X],z)=>{const te=Gt(H)[z],ge=me.split(" —")[0],pe={id:H*10+z+1,category:Z,template:oe,file:ge,name:me,slug:ye,brand:ge,headline:ve,description:ue,features:fe,products:X??[],tags:["react","tailwind",Z.toLowerCase().split(" ")[0]],use:[Z,ue.split(" ").slice(0,7).join(" ")],customize:["Brand and copy: edit this design's registry entry","Palette: update its color configuration","Interactions: customize the component source"],colors:{background:te[0],ink:te[1],accent:te[2],surface:te[3]},variant:z,chart:Array.from({length:12},(_e,Te)=>24+(Te*19+z*13+H*7)%70),metrics:[z*7+68,z*9+124,z*5+42],featured:z===0,popular:z===0||z===4||z===8},ee=Wt[`./designs/${oe}.jsx`];let ce;return{...pe,get source(){return ce??(ce=ee.replace("const config = globalThis.__CONFIG__ ?? {};",`const config = ${JSON.stringify(pe)};`)),ce}}})),Zt=Z=>qt.find(oe=>oe.slug===Z),ea=Z=>Z.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");var Le={exports:{}},Xe;function Yt(){return Xe||(Xe=1,(function(Z){(oe=>{var re=Object.defineProperty,H=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyNames,ye=Object.prototype.hasOwnProperty,ve=(e,a)=>{for(var n in a)re(e,n,{get:a[n],enumerable:!0})},ue=(e,a,n,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let g of me(a))!ye.call(e,g)&&g!==n&&re(e,g,{get:()=>a[g],enumerable:!(c=H(a,g))||c.enumerable});return e},fe=e=>ue(re({},"__esModule",{value:!0}),e),X=(e,a,n)=>new Promise((c,g)=>{var x=d=>{try{k(n.next(d))}catch(M){g(M)}},u=d=>{try{k(n.throw(d))}catch(M){g(M)}},k=d=>d.done?c(d.value):Promise.resolve(d.value).then(x,u);k((n=n.apply(e,a)).next())}),z={};ve(z,{analyzeMetafile:()=>yt,analyzeMetafileSync:()=>kt,build:()=>gt,buildSync:()=>vt,context:()=>ht,default:()=>_t,formatMessages:()=>bt,formatMessagesSync:()=>Nt,initialize:()=>St,stop:()=>Ct,transform:()=>xt,transformSync:()=>wt,version:()=>ft}),oe.exports=fe(z);function te(e){let a=c=>{if(c===null)n.write8(0);else if(typeof c=="boolean")n.write8(1),n.write8(+c);else if(typeof c=="number")n.write8(2),n.write32(c|0);else if(typeof c=="string")n.write8(3),n.write(ee(c));else if(c instanceof Uint8Array)n.write8(4),n.write(c);else if(c instanceof Array){n.write8(5),n.write32(c.length);for(let g of c)a(g)}else{let g=Object.keys(c);n.write8(6),n.write32(g.length);for(let x of g)n.write(ee(x)),a(c[x])}},n=new pe;return n.write32(0),n.write32(e.id<<1|+!e.isRequest),a(e.value),Ie(n.buf,n.len-4,0),n.buf.subarray(0,n.len)}function ge(e){let a=()=>{switch(n.read8()){case 0:return null;case 1:return!!n.read8();case 2:return n.read32();case 3:return ce(n.read());case 4:return n.read();case 5:{let u=n.read32(),k=[];for(let d=0;d<u;d++)k.push(a());return k}case 6:{let u=n.read32(),k={};for(let d=0;d<u;d++)k[ce(n.read())]=a();return k}default:throw new Error("Invalid packet")}},n=new pe(e),c=n.read32(),g=(c&1)===0;c>>>=1;let x=a();if(n.ptr!==e.length)throw new Error("Invalid packet");return{id:c,isRequest:g,value:x}}var pe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let a=new Uint8Array((this.len+e)*2);a.set(this.buf),this.buf=a}return this.len+=e,this.len-e}write8(e){let a=this._write(1);this.buf[a]=e}write32(e){let a=this._write(4);Ie(this.buf,e,a)}write(e){let a=this._write(4+e.length);Ie(this.buf,e.length,a),this.buf.set(e,a+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Te(this.buf,this._read(4))}read(){let e=this.read32(),a=new Uint8Array(e),n=this._read(a.length);return a.set(this.buf.subarray(n,n+e)),a}},ee,ce,_e;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,a=new TextDecoder;ee=n=>e.encode(n),ce=n=>a.decode(n),_e='new TextEncoder().encode("")'}else if(typeof Buffer<"u")ee=e=>Buffer.from(e),ce=e=>{let{buffer:a,byteOffset:n,byteLength:c}=e;return Buffer.from(a,n,c).toString()},_e='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(ee("")instanceof Uint8Array))throw new Error(`Invariant violation: "${_e} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function Te(e,a){return e[a++]|e[a++]<<8|e[a++]<<16|e[a++]<<24}function Ie(e,a,n){e[n++]=a,e[n++]=a>>8,e[n++]=a>>16,e[n++]=a>>24}var J=JSON.stringify,Ue="warning",Be="silent";function ze(e){if(Q(e,"target"),e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var Ee=()=>null,W=e=>typeof e=="boolean"?null:"a boolean",T=e=>typeof e=="string"?null:"a string",Pe=e=>e instanceof RegExp?null:"a RegExp object",he=e=>typeof e=="number"&&e===(e|0)?null:"an integer",We=e=>typeof e=="function"?null:"a function",q=e=>Array.isArray(e)?null:"an array",ne=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",tt=e=>typeof e=="object"&&e!==null?null:"an array or an object",at=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ve=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",Ge=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",nt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",st=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",qe=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",it=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,a,n,c){let g=e[n];if(a[n+""]=!0,g===void 0)return;let x=c(g);if(x!==null)throw new Error(`${J(n)} must be ${x}`);return g}function K(e,a,n){for(let c in e)if(!(c in a))throw new Error(`Invalid option ${n}: ${J(c)}`)}function rt(e){let a=Object.create(null),n=i(e,a,"wasmURL",it),c=i(e,a,"wasmModule",at),g=i(e,a,"worker",W);return K(e,a,"in initialize() call"),{wasmURL:n,wasmModule:c,worker:g}}function Ye(e){let a;if(e!==void 0){a=Object.create(null);for(let n in e){let c=e[n];if(typeof c=="string"||c===!1)a[n]=c;else throw new Error(`Expected ${J(n)} in mangle cache to map to either a string or false`)}}return a}function je(e,a,n,c,g){let x=i(a,n,"color",W),u=i(a,n,"logLevel",T),k=i(a,n,"logLimit",he);x!==void 0?e.push(`--color=${x}`):c&&e.push("--color=true"),e.push(`--log-level=${u||g}`),e.push(`--log-limit=${k||0}`)}function Q(e,a,n){if(typeof e!="string")throw new Error(`Expected value for ${a}${n!==void 0?" "+J(n):""} to be a string, got ${typeof e} instead`);return e}function He(e,a,n){let c=i(a,n,"legalComments",T),g=i(a,n,"sourceRoot",T),x=i(a,n,"sourcesContent",W),u=i(a,n,"target",st),k=i(a,n,"format",T),d=i(a,n,"globalName",T),M=i(a,n,"mangleProps",Pe),R=i(a,n,"reserveProps",Pe),E=i(a,n,"mangleQuoted",W),U=i(a,n,"minify",W),O=i(a,n,"minifySyntax",W),F=i(a,n,"minifyWhitespace",W),$=i(a,n,"minifyIdentifiers",W),_=i(a,n,"lineLimit",he),G=i(a,n,"drop",q),S=i(a,n,"dropLabels",q),C=i(a,n,"charset",T),h=i(a,n,"treeShaking",W),m=i(a,n,"ignoreAnnotations",W),s=i(a,n,"jsx",T),o=i(a,n,"jsxFactory",T),p=i(a,n,"jsxFragment",T),v=i(a,n,"jsxImportSource",T),w=i(a,n,"jsxDev",W),l=i(a,n,"jsxSideEffects",W),f=i(a,n,"define",ne),t=i(a,n,"logOverride",ne),r=i(a,n,"supported",ne),b=i(a,n,"pure",q),y=i(a,n,"keepNames",W),A=i(a,n,"platform",T),D=i(a,n,"tsconfigRaw",nt);if(c&&e.push(`--legal-comments=${c}`),g!==void 0&&e.push(`--source-root=${g}`),x!==void 0&&e.push(`--sources-content=${x}`),u&&(Array.isArray(u)?e.push(`--target=${Array.from(u).map(ze).join(",")}`):e.push(`--target=${ze(u)}`)),k&&e.push(`--format=${k}`),d&&e.push(`--global-name=${d}`),A&&e.push(`--platform=${A}`),D&&e.push(`--tsconfig-raw=${typeof D=="string"?D:JSON.stringify(D)}`),U&&e.push("--minify"),O&&e.push("--minify-syntax"),F&&e.push("--minify-whitespace"),$&&e.push("--minify-identifiers"),_&&e.push(`--line-limit=${_}`),C&&e.push(`--charset=${C}`),h!==void 0&&e.push(`--tree-shaking=${h}`),m&&e.push("--ignore-annotations"),G)for(let j of G)e.push(`--drop:${Q(j,"drop")}`);if(S&&e.push(`--drop-labels=${Array.from(S).map(j=>Q(j,"dropLabels")).join(",")}`),M&&e.push(`--mangle-props=${M.source}`),R&&e.push(`--reserve-props=${R.source}`),E!==void 0&&e.push(`--mangle-quoted=${E}`),s&&e.push(`--jsx=${s}`),o&&e.push(`--jsx-factory=${o}`),p&&e.push(`--jsx-fragment=${p}`),v&&e.push(`--jsx-import-source=${v}`),w&&e.push("--jsx-dev"),l&&e.push("--jsx-side-effects"),f)for(let j in f){if(j.indexOf("=")>=0)throw new Error(`Invalid define: ${j}`);e.push(`--define:${j}=${Q(f[j],"define",j)}`)}if(t)for(let j in t){if(j.indexOf("=")>=0)throw new Error(`Invalid log override: ${j}`);e.push(`--log-override:${j}=${Q(t[j],"log override",j)}`)}if(r)for(let j in r){if(j.indexOf("=")>=0)throw new Error(`Invalid supported: ${j}`);const P=r[j];if(typeof P!="boolean")throw new Error(`Expected value for supported ${J(j)} to be a boolean, got ${typeof P} instead`);e.push(`--supported:${j}=${P}`)}if(b)for(let j of b)e.push(`--pure:${Q(j,"pure")}`);y&&e.push("--keep-names")}function ot(e,a,n,c,g){var x;let u=[],k=[],d=Object.create(null),M=null,R=null;je(u,a,d,n,c),He(u,a,d);let E=i(a,d,"sourcemap",Ge),U=i(a,d,"bundle",W),O=i(a,d,"splitting",W),F=i(a,d,"preserveSymlinks",W),$=i(a,d,"metafile",W),_=i(a,d,"outfile",T),G=i(a,d,"outdir",T),S=i(a,d,"outbase",T),C=i(a,d,"tsconfig",T),h=i(a,d,"resolveExtensions",q),m=i(a,d,"nodePaths",q),s=i(a,d,"mainFields",q),o=i(a,d,"conditions",q),p=i(a,d,"external",q),v=i(a,d,"packages",T),w=i(a,d,"alias",ne),l=i(a,d,"loader",ne),f=i(a,d,"outExtension",ne),t=i(a,d,"publicPath",T),r=i(a,d,"entryNames",T),b=i(a,d,"chunkNames",T),y=i(a,d,"assetNames",T),A=i(a,d,"inject",q),D=i(a,d,"banner",ne),j=i(a,d,"footer",ne),P=i(a,d,"entryPoints",tt),B=i(a,d,"absWorkingDir",T),I=i(a,d,"stdin",ne),L=(x=i(a,d,"write",W))!=null?x:g,se=i(a,d,"allowOverwrite",W),Y=i(a,d,"mangleCache",ne);if(d.plugins=!0,K(a,d,`in ${e}() call`),E&&u.push(`--sourcemap${E===!0?"":`=${E}`}`),U&&u.push("--bundle"),se&&u.push("--allow-overwrite"),O&&u.push("--splitting"),F&&u.push("--preserve-symlinks"),$&&u.push("--metafile"),_&&u.push(`--outfile=${_}`),G&&u.push(`--outdir=${G}`),S&&u.push(`--outbase=${S}`),C&&u.push(`--tsconfig=${C}`),v&&u.push(`--packages=${v}`),h){let N=[];for(let V of h){if(Q(V,"resolve extension"),V.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${V}`);N.push(V)}u.push(`--resolve-extensions=${N.join(",")}`)}if(t&&u.push(`--public-path=${t}`),r&&u.push(`--entry-names=${r}`),b&&u.push(`--chunk-names=${b}`),y&&u.push(`--asset-names=${y}`),s){let N=[];for(let V of s){if(Q(V,"main field"),V.indexOf(",")>=0)throw new Error(`Invalid main field: ${V}`);N.push(V)}u.push(`--main-fields=${N.join(",")}`)}if(o){let N=[];for(let V of o){if(Q(V,"condition"),V.indexOf(",")>=0)throw new Error(`Invalid condition: ${V}`);N.push(V)}u.push(`--conditions=${N.join(",")}`)}if(p)for(let N of p)u.push(`--external:${Q(N,"external")}`);if(w)for(let N in w){if(N.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${N}`);u.push(`--alias:${N}=${Q(w[N],"alias",N)}`)}if(D)for(let N in D){if(N.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${N}`);u.push(`--banner:${N}=${Q(D[N],"banner",N)}`)}if(j)for(let N in j){if(N.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${N}`);u.push(`--footer:${N}=${Q(j[N],"footer",N)}`)}if(A)for(let N of A)u.push(`--inject:${Q(N,"inject")}`);if(l)for(let N in l){if(N.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${N}`);u.push(`--loader:${N}=${Q(l[N],"loader",N)}`)}if(f)for(let N in f){if(N.indexOf("=")>=0)throw new Error(`Invalid out extension: ${N}`);u.push(`--out-extension:${N}=${Q(f[N],"out extension",N)}`)}if(P)if(Array.isArray(P))for(let N=0,V=P.length;N<V;N++){let ie=P[N];if(typeof ie=="object"&&ie!==null){let le=Object.create(null),ae=i(ie,le,"in",T),Se=i(ie,le,"out",T);if(K(ie,le,"in entry point at index "+N),ae===void 0)throw new Error('Missing property "in" for entry point at index '+N);if(Se===void 0)throw new Error('Missing property "out" for entry point at index '+N);k.push([Se,ae])}else k.push(["",Q(ie,"entry point at index "+N)])}else for(let N in P)k.push([N,Q(P[N],"entry point",N)]);if(I){let N=Object.create(null),V=i(I,N,"contents",qe),ie=i(I,N,"resolveDir",T),le=i(I,N,"sourcefile",T),ae=i(I,N,"loader",T);K(I,N,'in "stdin" object'),le&&u.push(`--sourcefile=${le}`),ae&&u.push(`--loader=${ae}`),ie&&(R=ie),typeof V=="string"?M=ee(V):V instanceof Uint8Array&&(M=V)}let Ne=[];if(m)for(let N of m)N+="",Ne.push(N);return{entries:k,flags:u,write:L,stdinContents:M,stdinResolveDir:R,absWorkingDir:B,nodePaths:Ne,mangleCache:Ye(Y)}}function lt(e,a,n,c){let g=[],x=Object.create(null);je(g,a,x,n,c),He(g,a,x);let u=i(a,x,"sourcemap",Ge),k=i(a,x,"sourcefile",T),d=i(a,x,"loader",T),M=i(a,x,"banner",T),R=i(a,x,"footer",T),E=i(a,x,"mangleCache",ne);return K(a,x,`in ${e}() call`),u&&g.push(`--sourcemap=${u===!0?"external":u}`),k&&g.push(`--sourcefile=${k}`),d&&g.push(`--loader=${d}`),M&&g.push(`--banner=${M}`),R&&g.push(`--footer=${R}`),{flags:g,mangleCache:Ye(E)}}function ct(e){const a={},n={didClose:!1,reason:""};let c={},g=0,x=0,u=new Uint8Array(16*1024),k=0,d=C=>{let h=k+C.length;if(h>u.length){let s=new Uint8Array(h*2);s.set(u),u=s}u.set(C,k),k+=C.length;let m=0;for(;m+4<=k;){let s=Te(u,m);if(m+4+s>k)break;m+=4,F(u.subarray(m,m+s)),m+=s}m>0&&(u.copyWithin(0,m,k),k-=m)},M=C=>{n.didClose=!0,C&&(n.reason=": "+(C.message||C));const h="The service was stopped"+n.reason;for(let m in c)c[m](h,null);c={}},R=(C,h,m)=>{if(n.didClose)return m("The service is no longer running"+n.reason,null);let s=g++;c[s]=(o,p)=>{try{m(o,p)}finally{C&&C.unref()}},C&&C.ref(),e.writeToStdin(te({id:s,isRequest:!0,value:h}))},E=(C,h)=>{if(n.didClose)throw new Error("The service is no longer running"+n.reason);e.writeToStdin(te({id:C,isRequest:!1,value:h}))},U=(C,h)=>X(this,null,function*(){try{if(h.command==="ping"){E(C,{});return}if(typeof h.key=="number"){const m=a[h.key];if(!m)return;const s=m[h.command];if(s){yield s(C,h);return}}throw new Error("Invalid command: "+h.command)}catch(m){const s=[xe(m,e,null,void 0,"")];try{E(C,{errors:s})}catch{}}}),O=!0,F=C=>{if(O){O=!1;let m=String.fromCharCode(...C);if(m!=="0.24.2")throw new Error(`Cannot start service: Host version "0.24.2" does not match binary version ${J(m)}`);return}let h=ge(C);if(h.isRequest)U(h.id,h.value);else{let m=c[h.id];delete c[h.id],h.value.error?m(h.value.error,{}):m(null,h.value)}};return{readFromStdout:d,afterClose:M,service:{buildOrContext:({callName:C,refs:h,options:m,isTTY:s,defaultWD:o,callback:p})=>{let v=0;const w=x++,l={},f={ref(){++v===1&&h&&h.ref()},unref(){--v===0&&(delete a[w],h&&h.unref())}};a[w]=l,f.ref(),dt(C,w,R,E,f,e,l,m,s,o,(t,r)=>{try{p(t,r)}finally{f.unref()}})},transform:({callName:C,refs:h,input:m,options:s,isTTY:o,fs:p,callback:v})=>{const w=Je();let l=f=>{try{if(typeof m!="string"&&!(m instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:r}=lt(C,s,o,Be),b={command:"transform",flags:t,inputFS:f!==null,input:f!==null?ee(f):typeof m=="string"?ee(m):m};r&&(b.mangleCache=r),R(h,b,(y,A)=>{if(y)return v(new Error(y),null);let D=we(A.errors,w),j=we(A.warnings,w),P=1,B=()=>{if(--P===0){let I={warnings:j,code:A.code,map:A.map,mangleCache:void 0,legalComments:void 0};"legalComments"in A&&(I.legalComments=A==null?void 0:A.legalComments),A.mangleCache&&(I.mangleCache=A==null?void 0:A.mangleCache),v(null,I)}};if(D.length>0)return v(ke("Transform failed",D,j),null);A.codeFS&&(P++,p.readFile(A.code,(I,L)=>{I!==null?v(I,null):(A.code=L,B())})),A.mapFS&&(P++,p.readFile(A.map,(I,L)=>{I!==null?v(I,null):(A.map=L,B())})),B()})}catch(t){let r=[];try{je(r,s,{},o,Be)}catch{}const b=xe(t,e,w,void 0,"");R(h,{command:"error",flags:r,error:b},()=>{b.detail=w.load(b.detail),v(ke("Transform failed",[b],[]),null)})}};if((typeof m=="string"||m instanceof Uint8Array)&&m.length>1024*1024){let f=l;l=()=>p.writeFile(m,f)}l(null)},formatMessages:({callName:C,refs:h,messages:m,options:s,callback:o})=>{if(!s)throw new Error(`Missing second argument in ${C}() call`);let p={},v=i(s,p,"kind",T),w=i(s,p,"color",W),l=i(s,p,"terminalWidth",he);if(K(s,p,`in ${C}() call`),v===void 0)throw new Error(`Missing "kind" in ${C}() call`);if(v!=="error"&&v!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${C}() call`);let f={command:"format-msgs",messages:de(m,"messages",null,"",l),isWarning:v==="warning"};w!==void 0&&(f.color=w),l!==void 0&&(f.terminalWidth=l),R(h,f,(t,r)=>{if(t)return o(new Error(t),null);o(null,r.messages)})},analyzeMetafile:({callName:C,refs:h,metafile:m,options:s,callback:o})=>{s===void 0&&(s={});let p={},v=i(s,p,"color",W),w=i(s,p,"verbose",W);K(s,p,`in ${C}() call`);let l={command:"analyze-metafile",metafile:m};v!==void 0&&(l.color=v),w!==void 0&&(l.verbose=w),R(h,l,(f,t)=>{if(f)return o(new Error(f),null);o(null,t.result)})}}}}function dt(e,a,n,c,g,x,u,k,d,M,R){const E=Je(),U=e==="context",O=(_,G)=>{const S=[];try{je(S,k,{},d,Ue)}catch{}const C=xe(_,x,E,void 0,G);n(g,{command:"error",flags:S,error:C},()=>{C.detail=E.load(C.detail),R(ke(U?"Context failed":"Build failed",[C],[]),null)})};let F;if(typeof k=="object"){const _=k.plugins;if(_!==void 0){if(!Array.isArray(_))return O(new Error('"plugins" must be an array'),"");F=_}}if(F&&F.length>0){if(x.isSync)return O(new Error("Cannot use plugins in synchronous API calls"),"");mt(a,n,c,g,x,u,k,F,E).then(_=>{if(!_.ok)return O(_.error,_.pluginName);try{$(_.requestPlugins,_.runOnEndCallbacks,_.scheduleOnDisposeCallbacks)}catch(G){O(G,"")}},_=>O(_,""));return}try{$(null,(_,G)=>G([],[]),()=>{})}catch(_){O(_,"")}function $(_,G,S){const C=x.hasFS,{entries:h,flags:m,write:s,stdinContents:o,stdinResolveDir:p,absWorkingDir:v,nodePaths:w,mangleCache:l}=ot(e,k,d,Ue,C);if(s&&!x.hasFS)throw new Error('The "write" option is unavailable in this environment');const f={command:"build",key:a,entries:h,flags:m,write:s,stdinContents:o,stdinResolveDir:p,absWorkingDir:v||M,nodePaths:w,context:U};_&&(f.plugins=_),l&&(f.mangleCache=l);const t=(y,A)=>{const D={errors:we(y.errors,E),warnings:we(y.warnings,E),outputFiles:void 0,metafile:void 0,mangleCache:void 0},j=D.errors.slice(),P=D.warnings.slice();y.outputFiles&&(D.outputFiles=y.outputFiles.map(ut)),y.metafile&&(D.metafile=JSON.parse(y.metafile)),y.mangleCache&&(D.mangleCache=y.mangleCache),y.writeToStdout!==void 0&&console.log(ce(y.writeToStdout).replace(/\n$/,"")),G(D,(B,I)=>{if(j.length>0||B.length>0){const L=ke("Build failed",j.concat(B),P.concat(I));return A(L,null,B,I)}A(null,D,B,I)})};let r,b;U&&(u["on-end"]=(y,A)=>new Promise(D=>{t(A,(j,P,B,I)=>{const L={errors:B,warnings:I};b&&b(j,P),r=void 0,b=void 0,c(y,L),D()})})),n(g,f,(y,A)=>{if(y)return R(new Error(y),null);if(!U)return t(A,(P,B)=>(S(),R(P,B)));if(A.errors.length>0)return R(ke("Context failed",A.errors,A.warnings),null);let D=!1;const j={rebuild:()=>(r||(r=new Promise((P,B)=>{let I;b=(se,Y)=>{I||(I=()=>se?B(se):P(Y))};const L=()=>{n(g,{command:"rebuild",key:a},(Y,Ne)=>{Y?B(new Error(Y)):I?I():L()})};L()})),r),watch:(P={})=>new Promise((B,I)=>{if(!x.hasFS)throw new Error('Cannot use the "watch" API in this environment');K(P,{},"in watch() call"),n(g,{command:"watch",key:a},Y=>{Y?I(new Error(Y)):B(void 0)})}),serve:(P={})=>new Promise((B,I)=>{if(!x.hasFS)throw new Error('Cannot use the "serve" API in this environment');const L={},se=i(P,L,"port",he),Y=i(P,L,"host",T),Ne=i(P,L,"servedir",T),N=i(P,L,"keyfile",T),V=i(P,L,"certfile",T),ie=i(P,L,"fallback",T),le=i(P,L,"onRequest",We);K(P,L,"in serve() call");const ae={command:"serve",key:a,onRequest:!!le};se!==void 0&&(ae.port=se),Y!==void 0&&(ae.host=Y),Ne!==void 0&&(ae.servedir=Ne),N!==void 0&&(ae.keyfile=N),V!==void 0&&(ae.certfile=V),ie!==void 0&&(ae.fallback=ie),n(g,ae,(Se,Tt)=>{if(Se)return I(new Error(Se));le&&(u["serve-request"]=(Et,Pt)=>{le(Pt.args),c(Et,{})}),B(Tt)})}),cancel:()=>new Promise(P=>{if(D)return P();n(g,{command:"cancel",key:a},()=>{P()})}),dispose:()=>new Promise(P=>{if(D)return P();D=!0,n(g,{command:"dispose",key:a},()=>{P(),S(),g.unref()})})};g.ref(),R(null,j)})}}var mt=(e,a,n,c,g,x,u,k,d)=>X(void 0,null,function*(){let M=[],R=[],E={},U={},O=[],F=0,$=0,_=[],G=!1;k=[...k];for(let h of k){let m={};if(typeof h!="object")throw new Error(`Plugin at index ${$} must be an object`);const s=i(h,m,"name",T);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${$} is missing a name`);try{let o=i(h,m,"setup",We);if(typeof o!="function")throw new Error("Plugin is missing a setup function");K(h,m,`on plugin ${J(s)}`);let p={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};$++;let w=o({initialOptions:u,resolve:(l,f={})=>{if(!G)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof l!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),r=i(f,t,"pluginName",T),b=i(f,t,"importer",T),y=i(f,t,"namespace",T),A=i(f,t,"resolveDir",T),D=i(f,t,"kind",T),j=i(f,t,"pluginData",Ee),P=i(f,t,"with",ne);return K(f,t,"in resolve() call"),new Promise((B,I)=>{const L={command:"resolve",path:l,key:e,pluginName:s};if(r!=null&&(L.pluginName=r),b!=null&&(L.importer=b),y!=null&&(L.namespace=y),A!=null&&(L.resolveDir=A),D!=null)L.kind=D;else throw new Error('Must specify "kind" when calling "resolve"');j!=null&&(L.pluginData=d.store(j)),P!=null&&(L.with=pt(P,"with")),a(c,L,(se,Y)=>{se!==null?I(new Error(se)):B({errors:we(Y.errors,d),warnings:we(Y.warnings,d),path:Y.path,external:Y.external,sideEffects:Y.sideEffects,namespace:Y.namespace,suffix:Y.suffix,pluginData:d.load(Y.pluginData)})})})},onStart(l){let f='This error came from the "onStart" callback registered here:',t=Oe(new Error(f),g,"onStart");M.push({name:s,callback:l,note:t}),p.onStart=!0},onEnd(l){let f='This error came from the "onEnd" callback registered here:',t=Oe(new Error(f),g,"onEnd");R.push({name:s,callback:l,note:t}),p.onEnd=!0},onResolve(l,f){let t='This error came from the "onResolve" callback registered here:',r=Oe(new Error(t),g,"onResolve"),b={},y=i(l,b,"filter",Pe),A=i(l,b,"namespace",T);if(K(l,b,`in onResolve() call for plugin ${J(s)}`),y==null)throw new Error("onResolve() call is missing a filter");let D=F++;E[D]={name:s,callback:f,note:r},p.onResolve.push({id:D,filter:y.source,namespace:A||""})},onLoad(l,f){let t='This error came from the "onLoad" callback registered here:',r=Oe(new Error(t),g,"onLoad"),b={},y=i(l,b,"filter",Pe),A=i(l,b,"namespace",T);if(K(l,b,`in onLoad() call for plugin ${J(s)}`),y==null)throw new Error("onLoad() call is missing a filter");let D=F++;U[D]={name:s,callback:f,note:r},p.onLoad.push({id:D,filter:y.source,namespace:A||""})},onDispose(l){O.push(l)},esbuild:g.esbuild});w&&(yield w),_.push(p)}catch(o){return{ok:!1,error:o,pluginName:s}}}x["on-start"]=(h,m)=>X(void 0,null,function*(){d.clear();let s={errors:[],warnings:[]};yield Promise.all(M.map(o=>X(void 0,[o],function*({name:p,callback:v,note:w}){try{let l=yield v();if(l!=null){if(typeof l!="object")throw new Error(`Expected onStart() callback in plugin ${J(p)} to return an object`);let f={},t=i(l,f,"errors",q),r=i(l,f,"warnings",q);K(l,f,`from onStart() callback in plugin ${J(p)}`),t!=null&&s.errors.push(...de(t,"errors",d,p,void 0)),r!=null&&s.warnings.push(...de(r,"warnings",d,p,void 0))}}catch(l){s.errors.push(xe(l,g,d,w&&w(),p))}}))),n(h,s)}),x["on-resolve"]=(h,m)=>X(void 0,null,function*(){let s={},o="",p,v;for(let w of m.ids)try{({name:o,callback:p,note:v}=E[w]);let l=yield p({path:m.path,importer:m.importer,namespace:m.namespace,resolveDir:m.resolveDir,kind:m.kind,pluginData:d.load(m.pluginData),with:m.with});if(l!=null){if(typeof l!="object")throw new Error(`Expected onResolve() callback in plugin ${J(o)} to return an object`);let f={},t=i(l,f,"pluginName",T),r=i(l,f,"path",T),b=i(l,f,"namespace",T),y=i(l,f,"suffix",T),A=i(l,f,"external",W),D=i(l,f,"sideEffects",W),j=i(l,f,"pluginData",Ee),P=i(l,f,"errors",q),B=i(l,f,"warnings",q),I=i(l,f,"watchFiles",q),L=i(l,f,"watchDirs",q);K(l,f,`from onResolve() callback in plugin ${J(o)}`),s.id=w,t!=null&&(s.pluginName=t),r!=null&&(s.path=r),b!=null&&(s.namespace=b),y!=null&&(s.suffix=y),A!=null&&(s.external=A),D!=null&&(s.sideEffects=D),j!=null&&(s.pluginData=d.store(j)),P!=null&&(s.errors=de(P,"errors",d,o,void 0)),B!=null&&(s.warnings=de(B,"warnings",d,o,void 0)),I!=null&&(s.watchFiles=De(I,"watchFiles")),L!=null&&(s.watchDirs=De(L,"watchDirs"));break}}catch(l){s={id:w,errors:[xe(l,g,d,v&&v(),o)]};break}n(h,s)}),x["on-load"]=(h,m)=>X(void 0,null,function*(){let s={},o="",p,v;for(let w of m.ids)try{({name:o,callback:p,note:v}=U[w]);let l=yield p({path:m.path,namespace:m.namespace,suffix:m.suffix,pluginData:d.load(m.pluginData),with:m.with});if(l!=null){if(typeof l!="object")throw new Error(`Expected onLoad() callback in plugin ${J(o)} to return an object`);let f={},t=i(l,f,"pluginName",T),r=i(l,f,"contents",qe),b=i(l,f,"resolveDir",T),y=i(l,f,"pluginData",Ee),A=i(l,f,"loader",T),D=i(l,f,"errors",q),j=i(l,f,"warnings",q),P=i(l,f,"watchFiles",q),B=i(l,f,"watchDirs",q);K(l,f,`from onLoad() callback in plugin ${J(o)}`),s.id=w,t!=null&&(s.pluginName=t),r instanceof Uint8Array?s.contents=r:r!=null&&(s.contents=ee(r)),b!=null&&(s.resolveDir=b),y!=null&&(s.pluginData=d.store(y)),A!=null&&(s.loader=A),D!=null&&(s.errors=de(D,"errors",d,o,void 0)),j!=null&&(s.warnings=de(j,"warnings",d,o,void 0)),P!=null&&(s.watchFiles=De(P,"watchFiles")),B!=null&&(s.watchDirs=De(B,"watchDirs"));break}}catch(l){s={id:w,errors:[xe(l,g,d,v&&v(),o)]};break}n(h,s)});let S=(h,m)=>m([],[]);R.length>0&&(S=(h,m)=>{X(void 0,null,function*(){const s=[],o=[];for(const{name:p,callback:v,note:w}of R){let l,f;try{const t=yield v(h);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${J(p)} to return an object`);let r={},b=i(t,r,"errors",q),y=i(t,r,"warnings",q);K(t,r,`from onEnd() callback in plugin ${J(p)}`),b!=null&&(l=de(b,"errors",d,p,void 0)),y!=null&&(f=de(y,"warnings",d,p,void 0))}}catch(t){l=[xe(t,g,d,w&&w(),p)]}if(l){s.push(...l);try{h.errors.push(...l)}catch{}}if(f){o.push(...f);try{h.warnings.push(...f)}catch{}}}m(s,o)})});let C=()=>{for(const h of O)setTimeout(()=>h(),0)};return G=!0,{ok:!0,requestPlugins:_,runOnEndCallbacks:S,scheduleOnDisposeCallbacks:C}});function Je(){const e=new Map;let a=0;return{clear(){e.clear()},load(n){return e.get(n)},store(n){if(n===void 0)return-1;const c=a++;return e.set(c,n),c}}}function Oe(e,a,n){let c,g=!1;return()=>{if(g)return c;g=!0;try{let x=(e.stack+"").split(`
`);x.splice(1,1);let u=Ke(a,x,n);if(u)return c={text:e.message,location:u},c}catch{}}}function xe(e,a,n,c,g){let x="Internal error",u=null;try{x=(e&&e.message||e)+""}catch{}try{u=Ke(a,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:g,text:x,location:u,notes:c?[c]:[],detail:n?n.store(e):-1}}function Ke(e,a,n){let c="    at ";if(e.readFileSync&&!a[0].startsWith(c)&&a[1].startsWith(c))for(let g=1;g<a.length;g++){let x=a[g];if(x.startsWith(c))for(x=x.slice(c.length);;){let u=/^(?:new |async )?\S+ \((.*)\)$/.exec(x);if(u){x=u[1];continue}if(u=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(x),u){x=u[1];continue}if(u=/^(\S+):(\d+):(\d+)$/.exec(x),u){let k;try{k=e.readFileSync(u[1],"utf8")}catch{break}let d=k.split(/\r\n|\r|\n|\u2028|\u2029/)[+u[2]-1]||"",M=+u[3]-1,R=d.slice(M,M+n.length)===n?n.length:0;return{file:u[1],namespace:"file",line:+u[2],column:ee(d.slice(0,M)).length,length:ee(d.slice(M,M+R)).length,lineText:d+`
`+a.slice(1).join(`
`),suggestion:""}}break}}return null}function ke(e,a,n){let c=5;e+=a.length<1?"":` with ${a.length} error${a.length<2?"":"s"}:`+a.slice(0,c+1).map((x,u)=>{if(u===c)return`
...`;if(!x.location)return`
error: ${x.text}`;let{file:k,line:d,column:M}=x.location,R=x.pluginName?`[plugin: ${x.pluginName}] `:"";return`
${k}:${d}:${M}: ERROR: ${R}${x.text}`}).join("");let g=new Error(e);for(const[x,u]of[["errors",a],["warnings",n]])Object.defineProperty(g,x,{configurable:!0,enumerable:!0,get:()=>u,set:k=>Object.defineProperty(g,x,{configurable:!0,enumerable:!0,value:k})});return g}function we(e,a){for(const n of e)n.detail=a.load(n.detail);return e}function Qe(e,a,n){if(e==null)return null;let c={},g=i(e,c,"file",T),x=i(e,c,"namespace",T),u=i(e,c,"line",he),k=i(e,c,"column",he),d=i(e,c,"length",he),M=i(e,c,"lineText",T),R=i(e,c,"suggestion",T);if(K(e,c,a),M){const E=M.slice(0,(k&&k>0?k:0)+(d&&d>0?d:0)+(n&&n>0?n:80));!/[\x7F-\uFFFF]/.test(E)&&!/\n/.test(M)&&(M=E)}return{file:g||"",namespace:x||"",line:u||0,column:k||0,length:d||0,lineText:M||"",suggestion:R||""}}function de(e,a,n,c,g){let x=[],u=0;for(const k of e){let d={},M=i(k,d,"id",T),R=i(k,d,"pluginName",T),E=i(k,d,"text",T),U=i(k,d,"location",Ve),O=i(k,d,"notes",q),F=i(k,d,"detail",Ee),$=`in element ${u} of "${a}"`;K(k,d,$);let _=[];if(O)for(const G of O){let S={},C=i(G,S,"text",T),h=i(G,S,"location",Ve);K(G,S,$),_.push({text:C||"",location:Qe(h,$,g)})}x.push({id:M||"",pluginName:R||c,text:E||"",location:Qe(U,$,g),notes:_,detail:n?n.store(F):-1}),u++}return x}function De(e,a){const n=[];for(const c of e){if(typeof c!="string")throw new Error(`${J(a)} must be an array of strings`);n.push(c)}return n}function pt(e,a){const n=Object.create(null);for(const c in e){const g=e[c];if(typeof g!="string")throw new Error(`key ${J(c)} in object ${J(a)} must be a string`);n[c]=g}return n}function ut({path:e,contents:a,hash:n}){let c=null;return{path:e,contents:a,hash:n,get text(){const g=this.contents;return(c===null||g!==a)&&(a=g,c=ce(g)),c}}}var ft="0.24.2",gt=e=>Ce().build(e),ht=e=>Ce().context(e),xt=(e,a)=>Ce().transform(e,a),bt=(e,a)=>Ce().formatMessages(e,a),yt=(e,a)=>Ce().analyzeMetafile(e,a),vt=()=>{throw new Error('The "buildSync" API only works in node')},wt=()=>{throw new Error('The "transformSync" API only works in node')},Nt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},kt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ct=()=>(Me&&Me(),Promise.resolve()),be,Me,Re,Ce=()=>{if(Re)return Re;throw be?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},St=e=>{e=rt(e||{});let a=e.wasmURL,n=e.wasmModule,c=e.worker!==!1;if(!a&&!n)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(be)throw new Error('Cannot call "initialize" more than once');return be=At(a||"",n,c),be.catch(()=>{be=void 0}),be},At=(e,a,n)=>X(void 0,null,function*(){let c,g;const x=new Promise(E=>g=E);if(n){let E=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.24.2"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});c=new Worker(URL.createObjectURL(E))}else{let E=(O=>{var F=(S,C,h)=>new Promise((m,s)=>{var o=w=>{try{v(h.next(w))}catch(l){s(l)}},p=w=>{try{v(h.throw(w))}catch(l){s(l)}},v=w=>w.done?m(w.value):Promise.resolve(w.value).then(o,p);v((h=h.apply(S,C)).next())});let $,_={};for(let S=self;S;S=Object.getPrototypeOf(S))for(let C of Object.getOwnPropertyNames(S))C in _||Object.defineProperty(_,C,{get:()=>self[C]});(()=>{const S=()=>{const m=new Error("not implemented");return m.code="ENOSYS",m};if(!_.fs){let m="";_.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,o){m+=h.decode(o);const p=m.lastIndexOf(`
`);return p!=-1&&(console.log(m.substring(0,p)),m=m.substring(p+1)),o.length},write(s,o,p,v,w,l){if(p!==0||v!==o.length||w!==null){l(S());return}const f=this.writeSync(s,o);l(null,f)},chmod(s,o,p){p(S())},chown(s,o,p,v){v(S())},close(s,o){o(S())},fchmod(s,o,p){p(S())},fchown(s,o,p,v){v(S())},fstat(s,o){o(S())},fsync(s,o){o(null)},ftruncate(s,o,p){p(S())},lchown(s,o,p,v){v(S())},link(s,o,p){p(S())},lstat(s,o){o(S())},mkdir(s,o,p){p(S())},open(s,o,p,v){v(S())},read(s,o,p,v,w,l){l(S())},readdir(s,o){o(S())},readlink(s,o){o(S())},rename(s,o,p){p(S())},rmdir(s,o){o(S())},stat(s,o){o(S())},symlink(s,o,p){p(S())},truncate(s,o,p){p(S())},unlink(s,o){o(S())},utimes(s,o,p,v){v(S())}}}if(_.process||(_.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw S()},pid:-1,ppid:-1,umask(){throw S()},cwd(){throw S()},chdir(){throw S()}}),!_.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!_.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!_.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!_.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const C=new TextEncoder("utf-8"),h=new TextDecoder("utf-8");_.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const m=(t,r)=>{this.mem.setUint32(t+0,r,!0),this.mem.setUint32(t+4,Math.floor(r/4294967296),!0)},s=t=>{const r=this.mem.getUint32(t+0,!0),b=this.mem.getInt32(t+4,!0);return r+b*4294967296},o=t=>{const r=this.mem.getFloat64(t,!0);if(r===0)return;if(!isNaN(r))return r;const b=this.mem.getUint32(t,!0);return this._values[b]},p=(t,r)=>{if(typeof r=="number"&&r!==0){if(isNaN(r)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,r,!0);return}if(r===void 0){this.mem.setFloat64(t,0,!0);return}let y=this._ids.get(r);y===void 0&&(y=this._idPool.pop(),y===void 0&&(y=this._values.length),this._values[y]=r,this._goRefCounts[y]=0,this._ids.set(r,y)),this._goRefCounts[y]++;let A=0;switch(typeof r){case"object":r!==null&&(A=1);break;case"string":A=2;break;case"symbol":A=3;break;case"function":A=4;break}this.mem.setUint32(t+4,2146959360|A,!0),this.mem.setUint32(t,y,!0)},v=t=>{const r=s(t+0),b=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,r,b)},w=t=>{const r=s(t+0),b=s(t+8),y=new Array(b);for(let A=0;A<b;A++)y[A]=o(r+A*8);return y},l=t=>{const r=s(t+0),b=s(t+8);return h.decode(new DataView(this._inst.exports.mem.buffer,r,b))},f=Date.now()-performance.now();this.importObject={_gotest:{add:(t,r)=>t+r},gojs:{"runtime.wasmExit":t=>{t>>>=0;const r=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(r)},"runtime.wasmWrite":t=>{t>>>=0;const r=s(t+8),b=s(t+16),y=this.mem.getInt32(t+24,!0);_.fs.writeSync(r,new Uint8Array(this._inst.exports.mem.buffer,b,y))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,m(t+8,(f+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const r=new Date().getTime();m(t+8,r/1e3),this.mem.setInt32(t+16,r%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const r=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(r,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(r);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8))),this.mem.setInt32(t+16,r,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const r=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(r)),this._scheduledTimeouts.delete(r)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(v(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const r=this.mem.getUint32(t+8,!0);if(this._goRefCounts[r]--,this._goRefCounts[r]===0){const b=this._values[r];this._values[r]=null,this._ids.delete(b),this._idPool.push(r)}},"syscall/js.stringVal":t=>{t>>>=0,p(t+24,l(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const r=Reflect.get(o(t+8),l(t+16));t=this._inst.exports.getsp()>>>0,p(t+32,r)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(o(t+8),l(t+16),o(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(o(t+8),l(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,p(t+24,Reflect.get(o(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(o(t+8),s(t+16),o(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const r=o(t+8),b=Reflect.get(r,l(t+16)),y=w(t+32),A=Reflect.apply(b,r,y);t=this._inst.exports.getsp()>>>0,p(t+56,A),this.mem.setUint8(t+64,1)}catch(r){t=this._inst.exports.getsp()>>>0,p(t+56,r),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const r=o(t+8),b=w(t+16),y=Reflect.apply(r,void 0,b);t=this._inst.exports.getsp()>>>0,p(t+40,y),this.mem.setUint8(t+48,1)}catch(r){t=this._inst.exports.getsp()>>>0,p(t+40,r),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const r=o(t+8),b=w(t+16),y=Reflect.construct(r,b);t=this._inst.exports.getsp()>>>0,p(t+40,y),this.mem.setUint8(t+48,1)}catch(r){t=this._inst.exports.getsp()>>>0,p(t+40,r),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,m(t+16,parseInt(o(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const r=C.encode(String(o(t+8)));p(t+16,r),m(t+24,r.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const r=o(t+8);v(t+16).set(r)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,o(t+8)instanceof o(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const r=v(t+8),b=o(t+32);if(!(b instanceof Uint8Array||b instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const y=b.subarray(0,r.length);r.set(y),m(t+40,y.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const r=o(t+8),b=v(t+16);if(!(r instanceof Uint8Array||r instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const y=b.subarray(0,r.length);r.set(y),m(t+40,y.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(m){return F(this,null,function*(){if(!(m instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=m,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,_,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[_,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const o=t=>{const r=s,b=C.encode(t+"\0");return new Uint8Array(this.mem.buffer,s,b.length).set(b),s+=b.length,s%8!==0&&(s+=8-s%8),r},p=this.argv.length,v=[];this.argv.forEach(t=>{v.push(o(t))}),v.push(0),Object.keys(this.env).sort().forEach(t=>{v.push(o(`${t}=${this.env[t]}`))}),v.push(0);const l=s;if(v.forEach(t=>{this.mem.setUint32(s,t,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(p,l),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(m){const s=this;return function(){const o={id:m,this:this,args:arguments};return s._pendingEvent=o,s._resume(),o.result}}}})(),$=({data:S})=>{let C=new TextDecoder,h=_.fs,m="";h.writeSync=(w,l)=>{if(w===1)O(l);else if(w===2){m+=C.decode(l);let f=m.split(`
`);f.length>1&&console.log(f.slice(0,-1).join(`
`)),m=f[f.length-1]}else throw new Error("Bad write");return l.length};let s=[],o,p=0;$=({data:w})=>(w.length>0&&(s.push(w),o&&o()),v),h.read=(w,l,f,t,r,b)=>{if(w!==0||f!==0||t!==l.length||r!==null)throw new Error("Bad read");if(s.length===0){o=()=>h.read(w,l,f,t,r,b);return}let y=s[0],A=Math.max(0,Math.min(t,y.length-p));l.set(y.subarray(p,p+A),f),p+=A,p===y.length&&(s.shift(),p=0),b(null,A)};let v=new _.Go;return v.argv=["","--service=0.24.2"],G(S,v).then(w=>{O(null),v.run(w)},w=>{O(w)}),v};function G(S,C){return F(this,null,function*(){if(S instanceof WebAssembly.Module)return WebAssembly.instantiate(S,C.importObject);const h=yield fetch(S);if(!h.ok)throw new Error(`Failed to download ${JSON.stringify(S)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(h.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(h,C.importObject)).instance;const m=yield h.arrayBuffer();return(yield WebAssembly.instantiate(m,C.importObject)).instance})}return S=>$(S)})(O=>c.onmessage({data:O})),U;c={onmessage:null,postMessage:O=>setTimeout(()=>{try{U=E({data:O})}catch(F){g(F)}}),terminate(){if(U)for(let O of U._scheduledTimeouts.values())clearTimeout(O)}}}let u,k;const d=new Promise((E,U)=>{u=E,k=U});c.onmessage=({data:E})=>{c.onmessage=({data:U})=>M(U),E?k(E):u()},c.postMessage(a||new URL(e,location.href).toString());let{readFromStdout:M,service:R}=ct({writeToStdin(E){c.postMessage(E)},isSync:!1,hasFS:!1,esbuild:z});yield d,Me=()=>{c.terminate(),be=void 0,Me=void 0,Re=void 0},Re={build:E=>new Promise((U,O)=>{x.then(O),R.buildOrContext({callName:"build",refs:null,options:E,isTTY:!1,defaultWD:"/",callback:(F,$)=>F?O(F):U($)})}),context:E=>new Promise((U,O)=>{x.then(O),R.buildOrContext({callName:"context",refs:null,options:E,isTTY:!1,defaultWD:"/",callback:(F,$)=>F?O(F):U($)})}),transform:(E,U)=>new Promise((O,F)=>{x.then(F),R.transform({callName:"transform",refs:null,input:E,options:U||{},isTTY:!1,fs:{readFile($,_){_(new Error("Internal error"),null)},writeFile($,_){_(null)}},callback:($,_)=>$?F($):O(_)})}),formatMessages:(E,U)=>new Promise((O,F)=>{x.then(F),R.formatMessages({callName:"formatMessages",refs:null,messages:E,options:U,callback:($,_)=>$?F($):O(_)})}),analyzeMetafile:(E,U)=>new Promise((O,F)=>{x.then(F),R.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof E=="string"?E:JSON.stringify(E),options:U,callback:($,_)=>$?F($):O(_)})})}}),_t=z})(Z)})(Le)),Le.exports}var Ze=Yt();const Ht="/assets/esbuild-DcsFl_sZ.wasm";let et;async function Jt(Z){return et??(et=Ze.initialize({wasmURL:Ht})),await et,(await Ze.transform(Z,{loader:"jsx",format:"esm",jsx:"automatic",target:"es2020"})).code}const Kt=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script src="https://cdn.tailwindcss.com/3.4.17"><\/script>
<script type="importmap">{"imports":{"react":"https://esm.sh/react@19.0.0","react/jsx-runtime":"https://esm.sh/react@19.0.0/jsx-runtime","react-dom/client":"https://esm.sh/react-dom@19.0.0/client?deps=react@19.0.0"}}<\/script>
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
<\/script></body></html>`;function ta({code:Z,width:oe="100%",reloadKey:re=0,onStatus:H}){const me=Ae.useRef(),[ye,ve]=Ae.useState(!1),[ue,fe]=Ae.useState("");return Ae.useEffect(()=>{ve(!1);const X=z=>{var te,ge,pe,ee;z.source===((te=me.current)==null?void 0:te.contentWindow)&&(((ge=z.data)==null?void 0:ge.type)==="ready"&&ve(!0),((pe=z.data)==null?void 0:pe.type)==="error"&&(fe(z.data.message),H==null||H("error")),((ee=z.data)==null?void 0:ee.type)==="ok"&&(fe(""),H==null||H("ok")))};return addEventListener("message",X),()=>removeEventListener("message",X)},[re]),Ae.useEffect(()=>{if(!ye)return;let X=!1;H==null||H("compiling");const z=setTimeout(async()=>{try{const te=await Jt(Z);X||me.current.contentWindow.postMessage({type:"render",code:te},"*")}catch(te){X||(fe(te.message),H==null||H("error"))}},350);return()=>{X=!0,clearTimeout(z)}},[Z,ye,re]),Fe.jsxs("div",{className:"relative h-full w-full",children:[Fe.jsx("iframe",{ref:me,title:"Preview",sandbox:"allow-scripts allow-forms",srcDoc:Kt,style:{width:oe,maxWidth:"100%"},className:"mx-auto block h-full border-0 bg-white"},re),ue&&Fe.jsx("pre",{className:"absolute inset-x-0 bottom-0 max-h-40 overflow-auto bg-red-950/95 p-3 text-xs text-red-200",children:ue})]})}export{ta as S,ea as a,Zt as b,Xt as c,qt as d};
