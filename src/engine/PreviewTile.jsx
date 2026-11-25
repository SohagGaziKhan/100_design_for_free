import { useEffect, useRef, useState } from "react";
import Sandbox from "./Sandbox.jsx";

export default function PreviewTile({ design }) {
  const ref = useRef(null); const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "160px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="relative h-full overflow-hidden bg-white">
    {visible ? <div className="pointer-events-none absolute inset-0"><div style={{ width: "400%", height: "400%", transform: "scale(.25)", transformOrigin: "0 0" }}><Sandbox code={design.source} /></div></div> : <div aria-hidden="true" className="absolute inset-3 animate-pulse rounded-lg bg-stone-100" />}
  </div>;
}
