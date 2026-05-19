"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* Editorial FAQ accordion — hairline rows, serif question, animated
   reveal. Follows the Linear / shadcn pattern of a single open at a
   time, with a clean rotating plus glyph. */

const QA = [
  {
    q: "How is IGPL different from a typical IT services firm?",
    a: "We don't sell bench-time. Every engagement is outcome-scoped, with a single accountable lead — usually a senior architect — who stays with you from kickoff through operate. You get a partner, not a vendor."
  },
  {
    q: "Where is the team based, and how do you handle time zones?",
    a: "Chennai HQ. We run a six-hour overlap with EMEA and a four-hour overlap with US East across the working day. For US West clients we rotate a weekly anchor engineer to morning IST."
  },
  {
    q: "Do you take on fixed-price work, or only T&M?",
    a: "Discovery is always fixed-price (two weeks, milestone-locked). Build is usually milestone-based with a published rate card. Operate is a retainer with an SLA. You always know what next month costs."
  },
  {
    q: "Can you augment our existing in-house engineering team?",
    a: "Yes — staff augmentation is one of our core service lines. We integrate with your tooling, attend your standups, and abide by your code-review rules. We do not run a parallel process."
  },
  {
    q: "What does the procurement side of the business cover?",
    a: "Software vendor selection, contract negotiation, licensing optimisation, and migration planning — for ERP, CRM, observability, security, and AI platforms. We are vendor-agnostic and never take referral commission."
  },
  {
    q: "Who owns the IP at the end of an engagement?",
    a: "You do — fully and exclusively. Source code, infrastructure, model weights, documentation, and operational runbooks all transfer to your repos and accounts. We keep nothing behind a paywall."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.18 }}><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §F — Questions
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-sm font-normal text-white">
              The{" "}
              <span className="italic font-light text-white/70">honest</span>{" "}
              answers <span className="font-medium">first.</span>
            </h2>
          </div>
        </div>

        <ul className="border-t border-white/10">
          {QA.map((it, i) => {
            const isOpen = open === i;
            return (
              <li
                key={it.q}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-12 items-baseline gap-4 py-7 text-left transition-colors duration-300 hover:bg-white/[0.015] md:py-9"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 font-mono-disp text-[10px] uppercase text-white/35 md:col-span-1">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 font-display text-xl font-normal text-white md:col-span-10 md:text-2xl">
                    {it.q}
                  </span>
                  <span
                    className={`col-span-1 justify-self-end font-display text-2xl font-light text-white/60 transition-transform duration-500 md:text-3xl ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 pb-9">
                        <p className="col-span-12 col-start-1 max-w-2xl text-sm leading-relaxed text-white/65 md:col-span-10 md:col-start-2 md:text-base">
                          {it.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
