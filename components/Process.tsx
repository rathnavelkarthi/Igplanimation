"use client";

import { motion } from "framer-motion";

/* Editorial process — 4 numbered phases, large serif step number,
   asymmetric grid. Borrowed from Apple's "How it works" pages and
   Linear's product walkthrough rhythm. */

const STEPS = [
  {
    n: "01",
    t: "Discovery",
    b: "We map the business outcome first — revenue, retention, cost — then back into the system that delivers it. Two-week sprint, fixed price."
  },
  {
    n: "02",
    t: "Architecture",
    b: "Domain model, data flows, cloud topology, security posture. Documented in plain English so your CFO can sign off without your CTO translating."
  },
  {
    n: "03",
    t: "Build",
    b: "Senior engineers, weekly demos, end-of-sprint deployments to a real staging URL. No mock screens, no theatre — only working software."
  },
  {
    n: "04",
    t: "Operate",
    b: "We don't disappear at launch. SLAs, on-call, observability, and a roadmap of the next six quarters. Your software keeps earning its keep."
  }
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.2 }}><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §B.3 — Cadence
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal text-white">
              Four phases.{" "}
              <span className="italic font-light text-white/70">One</span>{" "}
              <span className="font-medium">accountable team.</span>
            </h2>
          </div>
        </div>

        <ol className="border-t border-white/10">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
              className="group grid grid-cols-12 items-start gap-4 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] md:gap-8 md:py-16"
            >
              <span className="col-span-12 font-display text-5xl font-light tabular-nums text-white/35 transition-colors duration-500 group-hover:text-white md:col-span-2 md:text-7xl">
                {s.n}
              </span>
              <h3 className="col-span-12 font-display text-2xl font-normal text-white md:col-span-4 md:text-4xl">
                {s.t}
              </h3>
              <p className="col-span-12 max-w-xl text-sm leading-relaxed text-white/60 md:col-span-6 md:text-base">
                {s.b}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
