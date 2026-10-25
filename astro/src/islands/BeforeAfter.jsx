import { useState, useRef, useEffect } from "react";

export default function BeforeAfter({ before, after, beforeAlt, afterAlt, caption, ratio = "4/3" }) {
  const [pos, setPos] = useState(50);
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const move = (clientX) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <figure style={{ margin: 0 }}>
      <div ref={ref}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
        onPointerMove={(e) => { if (e.buttons === 1) move(e.clientX); }}
        style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", cursor: "ew-resize", userSelect: "none", touchAction: "none", background: "var(--stone-200)", borderRadius: "var(--radius-image)" }}>
        <img src={after} alt={afterAlt} draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, width: `${pos}%`, overflow: "hidden" }}>
          <img src={before} alt={beforeAlt} draggable={false} style={{ position: "absolute", inset: 0, width: w ? w + "px" : "100%", maxWidth: "none", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "var(--gold-500)", transform: "translateX(-1px)", pointerEvents: "none" }}>
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, background: "var(--gold-500)", display: "grid", placeItems: "center", font: "var(--type-eyebrow)", letterSpacing: 0, color: "var(--green-950)" }}>◂ ▸</span>
        </div>
        {["Before", "After"].map((l, i) => (
          <span key={l} style={{ position: "absolute", bottom: "var(--space-4)", [i ? "right" : "left"]: "var(--space-4)", font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "#fff", background: "rgba(10,36,22,.72)", padding: "6px 10px" }}>{l}</span>
        ))}
      </div>
      {caption && <figcaption style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-4)", maxWidth: "var(--measure-caption)" }}>{caption}</figcaption>}
    </figure>
  );
}
