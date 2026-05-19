"use client";

import { motion } from "framer-motion";

/* Whisper-strip — quiet horizontal ticker of the things we work on.
   Two opposing tracks at different speeds = parallax. Used as a
   typographic palate-cleanser between dense sections. */

const TOP = [
  "Custom Software", "Enterprise ERP", "AI & ML Systems", "Mobile Native",
  "Cloud Migration", "Staff Augmentation", "Procurement", "Observability"
];
const BOT = [
  "Healthcare", "Education", "Real Estate", "Political Campaigns",
  "B2B Services", "Retail & D2C", "Manufacturing", "Logistics"
];

function Track({ items, dir = "left", speed = 60 }: { items: string[]; dir?: "left" | "right"; speed?: number }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex shrink-0 whitespace-nowrap"
        animate={{ x: dir === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-10 px-5 font-display text-4xl font-light text-white/85 md:text-7xl"
          >
            {t}
            <span className="text-white/15" aria-hidden>✱</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 md:py-16" aria-hidden>
      <div className="aurora" aria-hidden style={{ opacity: 0.15 }}><span /></div>
      <div className="relative z-10 flex flex-col gap-4 md:gap-6">
        <Track items={TOP} dir="left"  speed={70} />
        <div className="italic">
          <Track items={BOT} dir="right" speed={90} />
        </div>
      </div>
    </section>
  );
}
