"use client";

import { useEffect } from "react";

/* Site-wide ambient atmosphere:
   - Cursor spotlight (desktop only via CSS @media hover)
   - StatusPill (Available — Chennai)
   Aurora orbs are per-section, not global, so they don't compete with the hero canvas. */
export default function Atmosphere() {
  useEffect(() => {
    const move = (e: PointerEvent) => {
      const root = document.documentElement;
      root.style.setProperty("--spot-x", `${e.clientX}px`);
      root.style.setProperty("--spot-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div className="cursor-spot" aria-hidden />
      <div
        className="fixed bottom-5 right-5 z-40 hidden md:flex"
        aria-hidden
      >
        <span className="status-pill font-mono-disp text-[10px] uppercase text-white/70">
          <span className="status-dot" />
          Available · Chennai IST
        </span>
      </div>
    </>
  );
}
