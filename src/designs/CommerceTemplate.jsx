const config = globalThis.__CONFIG__ ?? {};
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
    setNotice(`${name} added to your bag`);
    setTimeout(() => setNotice(""), 1800);
  }
  return <div className="min-h-screen bg-white text-stone-900">
    <div className="flex items-center justify-center px-4 py-2 text-center text-[10px] tracking-wide text-white" style={{ backgroundColor: c.ink }}>Complimentary shipping on orders over $100 <span className="ml-2">↗</span></div>
    <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-8">
      <a href="#" className="text-xl font-semibold tracking-[-.04em]">{config.brand}<span style={{ color: c.accent }}>.</span></a>
      <nav className="hidden gap-6 text-xs text-stone-600 sm:flex"><a href="#collection">Shop all</a><a href="#collection">New arrivals</a><a href="#about">Our story</a></nav>
      <div className="flex items-center gap-2"><label className="hidden items-center rounded-full border border-stone-200 px-3 py-1.5 sm:flex"><span className="mr-2 text-xs text-stone-400">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find something" className="w-24 bg-transparent text-xs outline-none" /></label><button aria-label={`Shopping bag, ${cart} items`} onClick={() => setNotice(cart ? `${cart} item${cart === 1 ? "" : "s"} in your bag` : "Your bag is ready for something good.")} className="rounded-full border border-stone-200 px-3 py-2 text-xs">Bag ({cart})</button></div>
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
          <div className="relative grid aspect-[.82] place-items-center overflow-hidden rounded-xl p-4" style={{ backgroundColor: product.color }}><span className="absolute left-3 top-3 rounded-full bg-white/75 px-2 py-1 text-[9px] uppercase tracking-wide text-stone-600">{i === 0 ? "Just arrived" : "Considered pick"}</span><button aria-label={`${favorites.includes(product.name) ? "Remove" : "Add"} ${product.name} ${favorites.includes(product.name) ? "from" : "to"} favorites`} onClick={() => setFavorites((items) => items.includes(product.name) ? items.filter((item) => item !== product.name) : [...items, product.name])} className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/80 text-sm text-stone-700">{favorites.includes(product.name) ? "♥" : "♡"}</button><div className="grid size-[55%] place-items-center rounded-[42%] border-[14px] border-white/50 shadow-sm transition group-hover:scale-105" style={{ backgroundColor: c.accent }}><span className="text-2xl text-white/90">✳</span></div><button onClick={() => addToBag(product.name)} className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 py-2.5 text-[10px] font-medium opacity-100 shadow-sm transition sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">Add to bag — ${product.price}</button></div>
          <div className="flex items-start justify-between gap-2 pt-3"><div><h3 className="text-xs font-medium sm:text-sm">{product.name}</h3><p className="mt-1 text-[10px] text-stone-500">{config.brand} / signature edit</p></div><span className="text-xs">${product.price}</span></div>
        </article>)}</div>
        {!visible.length && <p className="py-12 text-center text-sm text-stone-500">No pieces match that search.</p>}
      </section>
    </main>
    <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-stone-200 px-5 py-6 text-xs text-stone-500 sm:px-8"><span>© {new Date().getFullYear()} {config.brand}</span><span>Made with intention.</span><a href="#collection">Back to collection ↑</a></footer>
    {notice && <div role="status" className="fixed bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-lg px-4 py-3 text-xs text-white shadow-xl" style={{ backgroundColor: c.ink }}>{notice}</div>}
  </div>;
}
