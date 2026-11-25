import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDownRight, ArrowRight, Search, Sparkles } from "lucide-react";
import { categories, categorySlug, designs } from "../registry.js";
import Sandbox from "../engine/Sandbox.jsx";

export default function Home() {
  const [query, setQuery] = useState(""); const navigate = useNavigate();
  const featured = designs.find((d) => d.featured) ?? designs[0];
  return (<main>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:pb-24 lg:pt-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-mut"><Sparkles size={14} className="text-ac" /> A thoughtful library for makers</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-.045em] sm:text-6xl">Interfaces to inspire your <span className="text-ac">next build.</span></h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-mut">Explore functional React patterns, inspect their source, and make every design your own in a live playground.</p>
        <form className="mt-8 flex max-w-lg gap-2 rounded-xl border border-line bg-panel p-2 shadow-sm" onSubmit={(e) => { e.preventDefault(); navigate(`/designs?q=${encodeURIComponent(query)}`); }}>
          <Search size={18} className="ml-2 mt-2.5 shrink-0 text-mut" /><input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search designs" placeholder="Search designs, categories, or tags" className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-mut" />
          <button className="rounded-lg bg-ac px-4 py-2 text-sm font-medium text-white hover:opacity-90">Search</button>
        </form>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mut"><span><strong className="text-fg">{designs.length}</strong> published designs</span><span><strong className="text-fg">{categories.length}</strong> curated categories</span><Link to="/designs" className="inline-flex items-center gap-1 font-medium text-ac">Browse library <ArrowRight size={15} /></Link></div>
      </div>
      {featured && <Link to={`/designs/${featured.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-panel shadow-xl shadow-black/[.04]">
        <div className="flex items-center justify-between border-b border-line px-4 py-3"><div><p className="text-xs text-mut">FEATURED DESIGN</p><p className="mt-1 text-sm font-medium">{featured.name}</p></div><ArrowDownRight size={18} className="text-mut transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ac" /></div>
        <div className="h-[340px] bg-white sm:h-[390px]"><Sandbox code={featured.source} /></div>
        <div className="flex items-center justify-between border-t border-line px-4 py-3 text-xs text-mut"><span>{featured.category}</span><span>{featured.tags.join(" · ")}</span></div>
      </Link>}
    </section>

    <section className="border-y border-line bg-panel/60">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-medium uppercase tracking-[.15em] text-ac">Explore by type</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Find your starting point</h2></div><Link to="/categories" className="hidden items-center gap-1 text-sm text-mut hover:text-fg sm:flex">All categories <ArrowRight size={15} /></Link></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, i) => {
            const count = designs.filter((d) => d.category === category).length;
            return <Link key={category} to={`/categories/${categorySlug(category)}`} className="group rounded-xl border border-line bg-bg p-4 transition hover:-translate-y-0.5 hover:border-ac">
              <span className="text-xs text-mut">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-5 text-sm font-medium group-hover:text-ac">{category}</h3><p className="mt-1 text-xs text-mut">{count} {count === 1 ? "design" : "designs"}</p>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-medium uppercase tracking-[.15em] text-ac">Fresh inspiration</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Recently added</h2></div><Link to="/designs" className="inline-flex items-center gap-1 text-sm text-mut hover:text-fg">View all <ArrowRight size={15} /></Link></div>
      <div className="grid gap-5 md:grid-cols-2">
        {designs.slice().reverse().slice(0, 4).map((d) => <Link key={d.id} to={`/designs/${d.slug}`} className="group flex items-center justify-between rounded-xl border border-line bg-panel p-5 transition hover:border-ac">
          <div><p className="text-xs text-mut">{d.category}</p><h3 className="mt-1 font-medium">{d.name}</h3><p className="mt-2 max-w-md text-sm text-mut">{d.description}</p><div className="mt-3 flex gap-2">{d.tags.map((tag) => <span key={tag} className="rounded-md bg-bg px-2 py-1 text-[11px] text-mut">{tag}</span>)}</div></div>
          <ArrowRight size={17} className="ml-3 shrink-0 text-mut transition group-hover:translate-x-1 group-hover:text-ac" />
        </Link>)}
      </div>
    </section>
  </main>);
}
