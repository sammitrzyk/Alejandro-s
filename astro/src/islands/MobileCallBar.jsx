import { useState, useEffect } from "react";

function useMedia(query) {
  const [hit, setHit] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = (e) => setHit(e.matches);
    setHit(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return hit;
}

export default function MobileCallBar({ phone = "(717) 736-6538", estimateHref = "/#estimate", hideAbove = 900, revealAfter = 400 }) {
  const show = useMedia(`(max-width:${hideAbove - 1}px)`);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const on = () => setPast(window.scrollY > revealAfter);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [revealAfter]);

  if (!show) return null;
  const cell = { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 56, font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", textDecoration: "none" };

  return (
    <>
      <div aria-hidden="true" style={{ height: 56 }} />
      <div aria-hidden={past ? undefined : "true"} style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, display: "grid", gridTemplateColumns: "1fr 1fr",
        background: "var(--surface-raised)", boxShadow: "var(--shadow-sticky)",
        transform: past ? "translateY(0)" : "translateY(100%)", opacity: past ? 1 : 0, pointerEvents: past ? "auto" : "none",
        transition: "transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
      }}>
        <a href={`tel:${phone.replace(/\D/g, "")}`} style={{ ...cell, color: "var(--green-800)", borderRight: "1px solid var(--border-hairline)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Call
        </a>
        <a href={estimateHref} style={{ ...cell, background: "var(--cta-bg)", color: "var(--cta-text)" }}>
          Free estimate
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </>
  );
}
