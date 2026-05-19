"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const philosophy = [
  "Rathnavel does not approach growth as a series of campaigns. He approaches it as infrastructure.",
  "Where most firms optimize ads, he engineers automation pipelines.",
  "Where most agencies produce content, he builds AI production systems.",
  "Where most consultants advise, he deploys intelligence architecture.",
  "This systems-first philosophy defines International Garudas' core methodology.",
];

const specialization = [
  "AI Video Production Systems",
  "Political Intelligence & Campaign Tech",
  "WhatsApp AI Automation Frameworks",
  "Enterprise SaaS Architecture",
  "Performance Marketing Infrastructure",
  "Cloud-Native AI Deployment",
];

const siddharthanFocus = [
  "Business Development & Partnerships",
  "Client Operations & Delivery",
  "Strategic Growth Across Verticals",
  "Software Procurement Lifecycle",
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono-disp text-[10px] uppercase tracking-[0.4em] text-white/45">
    {children}
  </span>
);

export default function FoundersClient() {
  return (
    <main className="relative bg-ink text-white">
      {/* Lightweight nav */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-12 md:py-6">
        <Link href="/" className="font-mono-disp text-[10px] uppercase tracking-[0.35em] text-white/70 hover:text-white">
          ← International Garudas
        </Link>
        <span className="status-pill text-[10px] font-mono-disp uppercase tracking-[0.3em] text-white/70">
          <span className="status-dot" /> Chennai HQ
        </span>
      </header>

      {/* §1 — Founder hero (Rathnavel) */}
      <section className="relative grid min-h-screen grid-cols-1 overflow-hidden border-b border-white/10 md:grid-cols-2">
        <div className="aurora" aria-hidden style={{ opacity: 0.25 }}>
          <span />
        </div>
        <div className="noise" aria-hidden />

        <div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <SectionLabel>Founder &amp; Systems Architect</SectionLabel>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className="mt-8 font-display text-[clamp(3rem,12vw,7rem)] font-normal leading-[0.85] tracking-tight"
          >
            Rathnavel<span className="text-amber-300">.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="mt-10 max-w-xl text-[clamp(1.05rem,2vw,1.35rem)] leading-relaxed text-white/75"
          >
            Founder of International Garudas — a strategic AI systems firm specializing in
            automation infrastructure, political intelligence platforms, and enterprise
            performance marketing architecture.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="mt-6 max-w-lg text-[0.95rem] leading-[1.8] text-white/55"
          >
            His work focuses on designing modular intelligence frameworks that move beyond
            traditional marketing and into systemic control.
          </motion.p>
        </div>

        {/* Portrait */}
        <div className="relative h-[55vh] border-t border-white/10 md:h-auto md:border-l md:border-t-0">
          <Image
            src="/founders/rathnavel.webp"
            alt="Rathnavel — Founder & Systems Architect"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-top contrast-110 grayscale"
            style={{ opacity: 0.85 }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, var(--ink) 100%)",
            }}
          />
        </div>
      </section>

      {/* §2 — Philosophy */}
      <section className="relative overflow-hidden px-5 py-32 md:px-12 md:py-48">
        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="mt-6 font-display text-display font-normal leading-[0.95]">
            From Campaigns to <span className="italic font-light text-white/70">Systems.</span>
          </h2>

          <div className="mt-16 flex flex-col gap-8">
            {philosophy.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={
                  i === 0
                    ? "font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-snug text-white"
                    : "text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-white/65"
                }
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-hair mx-5 md:mx-12" />

      {/* §3 — Specialization */}
      <section className="relative px-5 py-32 md:px-12 md:py-44">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="mt-6 font-display text-display font-normal leading-[0.95]">
            Core Specialization.
          </h2>

          <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {specialization.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.07 }}
                className="group relative flex items-center gap-6 bg-ink px-8 py-10 transition-colors duration-500 hover:bg-white/[0.03]"
              >
                <span className="font-mono-disp text-xs text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl leading-tight text-white/90 md:text-2xl">
                  {item}
                </span>
                <span className="ml-auto text-white/20 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* §4 — Co-Director (Siddharthan) */}
      <section className="relative grid grid-cols-1 overflow-hidden border-y border-white/10 md:grid-cols-2">
        <div className="aurora" aria-hidden style={{ opacity: 0.18 }}>
          <span />
        </div>

        {/* Portrait first on desktop (mirror layout) */}
        <div className="relative order-2 h-[55vh] border-t border-white/10 md:order-1 md:h-auto md:border-r md:border-t-0">
          <Image
            src="/founders/siddharthan.jpeg"
            alt="Siddharthan — Co-Director, International Garudas"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top contrast-110 grayscale"
            style={{ opacity: 0.85 }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, var(--ink) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 order-1 flex flex-col justify-center px-5 py-24 md:order-2 md:px-12 md:py-44">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <SectionLabel>Co-Director &amp; Operations</SectionLabel>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className="mt-8 font-display text-[clamp(3rem,11vw,6rem)] font-normal leading-[0.85] tracking-tight"
          >
            Siddharthan<span className="text-cyan-300">.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="mt-10 max-w-xl text-[clamp(1.05rem,2vw,1.35rem)] leading-relaxed text-white/75"
          >
            Co-Director at International Garudas, overseeing business development,
            client operations, and strategic growth across technology verticals.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8"
          >
            {siddharthanFocus.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 text-sm text-white/65"
              >
                <span className="font-mono-disp text-[10px] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* §5 — HQ Close */}
      <section className="relative px-5 py-32 md:px-12 md:py-48">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center md:rounded-[3rem] md:px-16 md:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(120,180,255,0.06) 0%, transparent 70%)",
            }}
          />
          <SectionLabel>Global Operations</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,7vw,4.5rem)] font-normal leading-[0.95]">
            Chennai HQ. <span className="italic font-light text-white/70">Global Systems.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/65">
            International Garudas operates as a global AI systems and software
            procurement firm. The focus is not geography. The focus is architecture.
          </p>

          <div className="mx-auto mt-12 h-px w-24 bg-white/30" />

          <Link
            href="/#contact"
            className="btn-ink mt-12 inline-flex items-center gap-3 border border-white/40 px-10 py-5 font-mono-disp text-[11px] uppercase tracking-[0.3em] text-white"
          >
            Engage the Team →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
