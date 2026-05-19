"use client";

import { motion } from "framer-motion";

/* Editorial manifesto section — replaces the marquee.
   Big serif statement + asymmetric meta data, the kind of layout
   you see on Linear, Vercel, and Awwwards-honoree studios. */
export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §A — Who we are
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="font-display text-display-sm font-normal text-white"
            >
              International Garudas is{" "}
              <span className="italic font-light text-white/70">not</span> a
              traditional IT company. We are a software{" "}
              <span className="font-medium">development & procurement</span> firm
              — bridging the gap between businesses and the technology that{" "}
              <span className="italic font-light text-white/70">actually</span>{" "}
              moves them forward.
            </motion.h2>
          </div>
        </div>

        <div className="hr-hair my-20 md:my-28" />

        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §B — How we work
            </span>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              We connect enterprises with the right software development teams,
              build custom solutions, and manage the entire software lifecycle
              — from vendor selection to deployment to ongoing operations.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <dl className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2">
              {[
                { k: "Founded", v: "Chennai" },
                { k: "Reach", v: "India · Global" },
                { k: "Focus", v: "B2B Software" },
                { k: "Model", v: "End-to-end" }
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-mono-disp text-[10px] uppercase text-white/35">
                    {m.k}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-normal text-white md:text-3xl">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
