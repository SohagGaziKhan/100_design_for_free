import { useState } from "react";
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
