import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Layers } from "lucide-react";
export default function Layout() {
  const { pathname } = useLocation(); const [open, setOpen] = useState(false);
  const flip = () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t; localStorage.setItem("theme", t);
  };
  return (<div className="min-h-screen font-sans">
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg bg-ac text-white"><Layers size={17} /></span>Interface Library</Link>
        <nav className="hidden items-center gap-7 text-sm text-mut md:flex">
          <Link to="/designs" className={pathname.startsWith("/designs") ? "text-fg" : "hover:text-fg"}>Explore</Link>
          <Link to="/categories" className={pathname.startsWith("/categories") ? "text-fg" : "hover:text-fg"}>Categories</Link>
          <button onClick={flip} aria-label="Toggle theme" className="rounded-md border border-line p-2 text-fg"><Sun size={16} className="hidden [[data-theme=dark]_&]:block" /><Moon size={16} className="[[data-theme=dark]_&]:hidden" /></button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={flip} aria-label="Toggle theme" className="rounded-md border border-line p-2 text-fg"><Sun size={16} className="hidden [[data-theme=dark]_&]:block" /><Moon size={16} className="[[data-theme=dark]_&]:hidden" /></button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} className="rounded-md border border-line p-2">{open ? <X size={16} /> : <Menu size={16} />}</button>
        </div>
      </div>
      {open && <nav className="grid gap-1 border-t border-line px-5 py-3 text-sm text-mut md:hidden">
        <Link to="/designs" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-panel hover:text-fg">Explore designs</Link>
        <Link to="/categories" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-panel hover:text-fg">Browse categories</Link>
      </nav>}
    </header>
    <Outlet />
  </div>);
}
