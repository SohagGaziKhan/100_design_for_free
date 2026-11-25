import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { categories, categorySlug, designs } from "../registry.js";
import PreviewTile from "../engine/PreviewTile.jsx";

const modes = ["All designs", "Featured", "Popular", "Latest"];

export default function Library() {
  const { categorySlug: selectedSlug } = useParams();
  const [params, setParams] = useSearchParams();
  const [mode, setMode] = useState("All designs");
  const query = params.get("q") ?? "";
  const selectedCategory = categories.find((c) => categorySlug(c) === selectedSlug);
  const list = useMemo(() => {
    let result = designs.filter((d) => (!selectedCategory || d.category === selectedCategory) &&
      (d.name + " " + d.description + " " + d.category + " " + d.tags.join(" ")).toLowerCase().includes(query.toLowerCase()));
    if (mode === "Featured") result = result.filter((d) => d.featured);
    if (mode === "Popular") result = result.filter((d) => d.popular);
    if (mode === "Latest") result = result.slice().reverse();
    return result;
  }, [selectedCategory, query, mode]);

  return (<main className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div><p className="text-xs font-medium uppercase tracking-[.15em] text-ac">The collection</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{selectedCategory ?? "Design library"}</h1><p className="mt-3 max-w-xl text-sm leading-6 text-mut">Explore working React interfaces. Open any design to preview, inspect the exact source, and customize it.</p></div>
      <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2.5 sm:w-72"><Search size={16} className="text-mut" /><input value={query} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})} placeholder="Search designs..." aria-label="Search designs" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-mut" /></label>
    </div>
    <div className="mt-8 flex flex-wrap gap-2">
      <Link to="/designs" className={"rounded-full border px-3 py-1.5 text-xs " + (!selectedCategory ? "border-ac bg-ac text-white" : "border-line text-mut hover:text-fg")}>All categories</Link>
      {categories.map((c) => <Link key={c} to={`/categories/${categorySlug(c)}`} className={"rounded-full border px-3 py-1.5 text-xs " + (selectedCategory === c ? "border-ac bg-ac text-white" : "border-line text-mut hover:border-ac hover:text-fg")}>{c}<span className="ml-1.5 opacity-60">{designs.filter((d) => d.category === c).length}</span></Link>)}
    </div>
    <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
      <p className="text-sm text-mut"><strong className="text-fg">{list.length}</strong> {list.length === 1 ? "design" : "designs"}{query && <> matching <strong className="text-fg">“{query}”</strong></>}</p>
      <div className="flex flex-wrap items-center gap-1.5"><SlidersHorizontal size={14} className="mr-1 text-mut" />{modes.map((item) => <button key={item} onClick={() => setMode(item)} className={"rounded-md px-2.5 py-1.5 text-xs " + (mode === item ? "bg-panel text-fg" : "text-mut hover:text-fg")}>{item}</button>)}</div>
    </div>
    {list.length ? <div className="grid gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((d) => <Link key={d.id} to={`/designs/${d.slug}`} className="group overflow-hidden rounded-xl border border-line bg-panel transition hover:-translate-y-0.5 hover:border-ac hover:shadow-lg hover:shadow-black/[.04]">
        <div className="relative h-56 overflow-hidden bg-white">
          <PreviewTile design={d} />
          <span className="absolute left-3 top-3 rounded-md border border-line/70 bg-bg/90 px-2 py-1 text-[10px] font-medium text-fg backdrop-blur">{d.category}</span>
          <span className="absolute bottom-3 right-3 grid size-8 translate-y-1 place-items-center rounded-full bg-bg text-fg opacity-0 shadow transition group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={16} /></span>
        </div>
        <div className="p-4"><div className="flex items-start justify-between gap-3"><h2 className="font-medium tracking-tight">{d.name}</h2><ArrowUpRight size={15} className="mt-0.5 shrink-0 text-mut group-hover:text-ac" /></div><p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-mut">{d.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{d.tags.map((tag) => <span key={tag} className="rounded bg-bg px-2 py-1 text-[10px] text-mut">{tag}</span>)}</div></div>
      </Link>)}
    </div> : <div className="mt-8 rounded-xl border border-dashed border-line px-6 py-16 text-center"><h2 className="font-medium">No designs found</h2><p className="mt-2 text-sm text-mut">Try another search or choose a different category.</p><Link to="/designs" className="mt-4 inline-block text-sm font-medium text-ac">Clear filters</Link></div>}
  </main>);
}
