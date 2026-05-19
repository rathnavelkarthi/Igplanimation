"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const CASES = [
  {
    sector: "Healthcare",
    code: "/01",
    title: "OPD platform for a 4-city hospital chain.",
    meta: "Next.js · FHIR · Stripe",
    weeks: "14 weeks",
    grad:
      "linear-gradient(135deg, #ff8a4c 0%, #d63d6f 45%, #2a0f3a 100%)",
    image: "/cases/case1.png"
  },
  {
    sector: "Real Estate",
    code: "/02",
    title: "Broker CRM with WhatsApp-native flows.",
    meta: "React Native · Node · WhatsApp Cloud",
    weeks: "10 weeks",
    grad:
      "linear-gradient(135deg, #6aa6ff 0%, #2c4ecf 45%, #0a1330 100%)",
    image: "/cases/case2.png"
  },
  {
    sector: "Education",
    code: "/03",
    title: "School ERP rolled out across Anna Nagar & Kilpauk.",
    meta: "Next.js · Postgres · Razorpay",
    weeks: "18 weeks",
    grad:
      "linear-gradient(135deg, #c8f0b4 0%, #3fa07a 45%, #0c2818 100%)",
    image: "/cases/case3.png"
  },
  {
    sector: "Political Campaigns",
    code: "/04",
    title: "Voter outreach & booth-level analytics.",
    meta: "Next.js · ClickHouse · Mapbox",
    weeks: "8 weeks",
    grad:
      "linear-gradient(135deg, #ffc977 0%, #d6541e 45%, #2a0c06 100%)",
    image: "/cases/case4.png"
  },
  {
    sector: "SaaS Ops",
    code: "/05",
    title: "Internal-tools platform for logistics.",
    meta: "Next.js · Retool · Temporal",
    weeks: "12 weeks",
    grad:
      "linear-gradient(135deg, #b4a8ff 0%, #5d3ec9 45%, #110a30 100%)",
    image: "/cases/case5.png"
  },
  {
    sector: "AI Production",
    code: "/06",
    title: "Generative content pipeline for an agency network.",
    meta: "Next.js · Replicate · Mux",
    weeks: "9 weeks",
    grad:
      "linear-gradient(135deg, #ffe09c 0%, #c89c4f 45%, #2e1f0a 100%)",
    image: "/cases/case6.png"
  }
];

export default function Work() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.18 }}>
        <span />
      </div>
      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">§E · Selected work</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal tracking-tightest text-white">
              <span className="font-italic font-light text-white/70">Things</span>{" "}
              we&rsquo;ve <span className="font-medium">shipped.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/55">
              Hover or tap a panel. Each tile is a deployed system —
              spanning healthcare OPDs, broker CRMs, school ERPs, and political
              outreach analytics.
            </p>
          </div>
        </div>

        <HoverExpand cases={CASES} />

        {/* Caption strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <span className="caps text-white/45">
            06 shipped · 18 in delivery
          </span>
          <a
            href="mailto:hello@internnationalgarudas.com?subject=Case studies"
            className="link-fill font-mono-disp text-[11px] uppercase tracking-wide2 text-white/80"
          >
            Request full case-study deck →
          </a>
        </div>
      </div>
    </section>
  );
}

function HoverExpand({
  cases,
  className
}: {
  cases: typeof CASES;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease }}
      className={cn("relative w-full", className)}
    >
      {/* Desktop / tablet: horizontal hover-expand */}
      <div className="hidden w-full items-stretch justify-center gap-2 md:flex">
        {cases.map((c, index) => {
          const isActive = active === index;
          return (
            <motion.div
              key={c.code}
              role="button"
              tabIndex={0}
              aria-label={`${c.sector}: ${c.title}`}
              className="relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10"
              initial={{ width: "5rem", height: "30rem" }}
              animate={{
                width: isActive ? "32rem" : "5.25rem",
                height: "30rem"
              }}
              transition={{ duration: 0.55, ease }}
              onClick={() => setActive(index)}
              onHoverStart={() => setActive(index)}
              onFocus={() => setActive(index)}
              style={{ background: c.grad }}
            >
              {/* Visual Mockup Background */}
              <motion.img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none mix-blend-luminosity"
                initial={{ opacity: 0.12 }}
                animate={{
                  opacity: isActive ? 0.32 : 0.12,
                  scale: isActive ? 1.05 : 1
                }}
                transition={{ duration: 0.65, ease }}
              />

              {/* Inner noise + gloss */}
              <div className="noise" aria-hidden />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 25% 15%, rgba(255,255,255,0.18), transparent 60%)"
                }}
              />

              {/* Vertical code label (visible on collapsed) */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="absolute inset-0 flex items-end justify-center pb-6"
                  >
                    <span
                      className="font-mono-disp text-[10px] uppercase tracking-wide3 text-white/85"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {c.sector} {c.code}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dark scrim under content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)"
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Active content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.45, delay: 0.1, ease }}
                    className="absolute inset-0 flex flex-col justify-between p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/90">
                        {c.code} · {c.sector}
                      </span>
                      <span className="rounded-full border border-white/30 px-3 py-1 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/85">
                        {c.weeks}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal leading-[1.05] tracking-tightest text-white">
                        {c.title}
                      </h3>
                      <div className="hr-fine bg-white/30" />
                      <div className="flex items-center justify-between">
                        <span className="font-mono-disp text-[11px] uppercase tracking-wide2 text-white/85">
                          {c.meta}
                        </span>
                        <span className="font-mono-disp text-[11px] uppercase tracking-wide2 text-white/80">
                          Case study →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: stacked accordion-style cards (no horizontal hover) */}
      <div className="flex flex-col gap-4 md:hidden">
        {cases.map((c) => (
          <article
            key={c.code}
            className="relative overflow-hidden rounded-2xl border border-white/10"
            style={{ background: c.grad }}
          >
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none mix-blend-luminosity opacity-15"
            />
            <div className="noise" aria-hidden />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)"
              }}
            />
            <div className="relative flex aspect-[4/3] flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/90">
                  {c.code} · {c.sector}
                </span>
                <span className="rounded-full border border-white/30 px-2.5 py-1 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/85">
                  {c.weeks}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-[1.5rem] font-normal leading-tight tracking-tightest text-white">
                  {c.title}
                </h3>
                <span className="block font-mono-disp text-[10px] uppercase tracking-wide2 text-white/80">
                  {c.meta}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
