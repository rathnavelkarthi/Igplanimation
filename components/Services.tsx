"use client";

import { motion } from "framer-motion";

const services = [
  { n: "01", title: "Custom Software Development", body: "Bespoke web, mobile, and AI platforms — engineered to your spec by vetted teams." },
  { n: "02", title: "Enterprise Solutions", body: "ERP, CRM, and business process automation tailored to your operations." },
  { n: "03", title: "IT Consulting & Procurement", body: "Strategy, vendor selection, and full software lifecycle management." },
  { n: "04", title: "Cloud Migration", body: "Re-platform legacy systems to AWS, Azure, or GCP without downtime." },
  { n: "05", title: "Staff Augmentation", body: "Senior developers and architects on demand, integrated with your team." },
  { n: "06", title: "QA & Testing", body: "Automated, manual, and performance testing across the full stack." }
];

/* Editorial list, not cards. Hover reveals the description on a single
   line that animates open — a microinteraction borrowed from Locomotive
   and Active Theory's studio sites. */
export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.3 }}><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §C — Services
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal text-white">
              Six lines of work.{" "}
              <span className="italic font-light text-white/70">One</span>{" "}
              service contract.
            </h2>
          </div>
        </div>

        <ul className="border-t border-white/10">
          {services.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              className="group border-b border-white/10"
            >
              <div className="grid grid-cols-12 items-baseline gap-4 py-7 transition-colors duration-500 group-hover:bg-white/[0.015] md:py-10">
                <span className="col-span-2 font-mono-disp text-[10px] uppercase text-white/35 md:col-span-1">
                  {s.n}
                </span>
                <h3 className="col-span-10 font-display text-2xl font-normal text-white md:col-span-5 md:text-4xl">
                  {s.title}
                </h3>
                <p className="col-span-12 max-w-md text-sm leading-relaxed text-white/60 md:col-span-5 md:col-start-7 md:text-base">
                  {s.body}
                </p>
                <span className="col-span-12 mt-2 font-mono-disp text-[10px] uppercase text-white/30 transition-colors group-hover:text-white/70 md:col-span-1 md:col-start-12 md:mt-0 md:text-right">
                  →
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
