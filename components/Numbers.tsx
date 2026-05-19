"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Tesla-style "By the numbers" — oversized tabular figures with a
   slow count-up. Hairline grid, monospaced labels, no card chrome. */

const STATS = [
  { v: 120, suffix: "+", k: "Engineers", note: "Vetted Chennai bench" },
  { v: 64,  suffix: "",  k: "Projects",  note: "Shipped to production" },
  { v: 18,  suffix: "",  k: "Countries", note: "Clients served globally" },
  { v: 99,  suffix: "%", k: "Uptime",    note: "Across managed systems" }
];

function Counter({ to, suffix = "", inView }: { to: number; suffix?: string; inView: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span className="tabular-nums">{n}{suffix}</span>;
}

export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.18 }}><span /></div>
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §B.1 — By the numbers
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal text-white">
              <span className="italic font-light text-white/70">Built</span> at
              scale.{" "}
              <span className="font-medium">Measured</span> in outcomes.
            </h2>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-y-14 border-t border-white/10 pt-12 md:grid-cols-4 md:gap-y-0 md:pt-16">
          {STATS.map((s, i) => (
            <motion.li
              key={s.k}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
              className="relative md:border-l md:border-white/10 md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <div className="font-display text-[56px] font-light leading-none text-white md:text-[88px]">
                <Counter to={s.v} suffix={s.suffix} inView={inView} />
              </div>
              <div className="mt-5 font-mono-disp text-[10px] uppercase text-white/40">
                {s.k}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/55">
                {s.note}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
