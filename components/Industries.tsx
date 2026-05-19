"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Healthcare", note: "Hospital & clinic platforms" },
  { name: "Education", note: "Schools across Anna Nagar & Kilpauk" },
  { name: "Real Estate", note: "Property tech & broker CRM" },
  { name: "B2B Services", note: "Workflow automation at scale" },
  { name: "Political Campaigns", note: "Outreach & data platforms" },
  { name: "Retail & D2C", note: "Commerce stacks & analytics" }
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.25 }}><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §D — Industries
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal text-white">
              <span className="italic font-light text-white/70">Where</span> we{" "}
              <span className="font-medium">show up.</span>
            </h2>
          </div>
        </div>

        <ul className="border-t border-white/10">
          {industries.map((it, i) => (
            <motion.li
              key={it.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-white/10 py-7 transition-colors duration-500 hover:bg-white/[0.015] md:py-9"
            >
              <span className="col-span-2 font-mono-disp text-[10px] uppercase text-white/35 md:col-span-1">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 font-display text-2xl font-normal text-white md:col-span-6 md:text-4xl">
                {it.name}
              </span>
              <span className="col-span-12 text-sm text-white/55 md:col-span-5 md:text-right md:text-base">
                {it.note}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
