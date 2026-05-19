"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const founders = [
  {
    id: "01",
    name: "Siddharthan",
    accent: "var(--cobalt)",
    role: "Co-Director & Operations",
    image: "/founders/siddharthan.jpeg",
    quote:
      "Architecture is delivered, not promised. Operations is where every system survives contact with reality.",
    bio:
      "Co-Director overseeing business development, client operations, and strategic growth across technology verticals. Anchors the software procurement lifecycle end-to-end.",
    tags: ["Operations", "Partnerships", "Procurement"]
  },
  {
    id: "02",
    name: "Rathnavel",
    accent: "var(--ember)",
    role: "Founder & Systems Architect",
    image: "/founders/rathnavel.webp",
    quote:
      "Where most firms optimize ads, we engineer automation pipelines. Where most agencies produce content, we build AI production systems.",
    bio:
      "Architects intelligence infrastructure for political campaigns, enterprise SaaS, and AI-native marketing systems. His work moves growth from a series of campaigns into a deployed architecture.",
    tags: ["AI Systems", "Intelligence Arch.", "Performance Infra."]
  }
];

export default function Founders() {
  return (
    <section id="founders" className="relative overflow-hidden">
      {/* Top hairline + faint aurora wash */}
      <div className="hr-hair" />
      <div className="aurora" aria-hidden style={{ opacity: 0.18 }}>
        <span />
      </div>
      <div className="noise" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 md:px-12 md:py-28">
        {/* Section header — left/right editorial split */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">The Architects · 02</span>
            <h2 className="mt-6 font-display text-display font-normal tracking-tightest text-white">
              People behind the{" "}
              <span className="font-italic font-light text-white/70">
                system.
              </span>
            </h2>
          </div>
          <p className="caps max-w-xs text-right text-white/50 md:text-right">
            Operational control is defined by the minds that architect the system.
          </p>
        </div>

        {/* Two-up founder grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-10">
          {founders.map((f, idx) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, delay: idx * 0.15, ease }}
              className="card-lift group relative flex flex-col overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.015] backdrop-blur-md"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {/* Number marker */}
              <div className="absolute right-6 top-6 z-20 flex items-baseline gap-2 font-mono-disp text-xs text-white/40">
                <span style={{ color: f.accent }}>●</span>
                <span>{f.id} / 02</span>
              </div>

              {/* Portrait */}
              <div className="portrait-frame relative aspect-[4/5] w-full overflow-hidden border-b border-white/8">
                <Image
                  src={f.image}
                  alt={`${f.name} — ${f.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top contrast-110 grayscale transition-all duration-[1400ms] group-hover:scale-[1.04] group-hover:grayscale-0"
                  style={{ opacity: 0.92 }}
                  priority={idx === 0}
                />
                {/* Name overlay on portrait */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
                  <div className="caps mb-3" style={{ color: f.accent }}>
                    {f.role}
                  </div>
                  <h3 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-normal leading-[0.85] tracking-tightest text-white">
                    {f.name}
                    <span style={{ color: f.accent }}>.</span>
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-8 p-6 md:p-10">
                {/* Pull quote */}
                <blockquote className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-2 -top-6 font-italic text-[5rem] leading-none text-white/15"
                  >
                    “
                  </span>
                  <p className="font-italic text-[clamp(1.15rem,2vw,1.5rem)] leading-snug text-white/85">
                    {f.quote}
                  </p>
                </blockquote>

                <div className="hr-fine" />

                <p className="text-[0.95rem] leading-[1.7] text-white/55">
                  {f.bio}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Editorial footnote */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="font-italic text-[clamp(1.1rem,2vw,1.4rem)] text-white/65">
            Chennai HQ <span className="text-white/30">·</span> Global Systems
          </p>
          <a
            href="mailto:hello@internnationalgarudas.com"
            className="btn-ember inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono-disp text-[11px] font-medium uppercase tracking-wide2"
          >
            Engage the team
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
