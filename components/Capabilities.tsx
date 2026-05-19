"use client";

import { motion } from "framer-motion";

/* Apple-style capability matrix — pill cloud + a single sticky-anchor
   serif statement on the left. The pills shimmer in on scroll. */

const CAPS = [
  "Next.js", "React Native", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "tRPC", "REST",
  "AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes",
  "Terraform", "GitHub Actions", "Prisma", "Drizzle", "Stripe", "Twilio",
  "OpenAI", "Anthropic", "LangChain", "Pinecone", "Supabase",
  "Tailwind", "Framer Motion", "WebGL", "Three.js", "PostHog", "Sentry"
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-24">
      <div className="aurora" aria-hidden style={{ opacity: 0.22 }}><span /></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-24 md:self-start">
            <span className="font-mono-disp text-[10px] uppercase text-white/45">
              §B.2 — Capabilities
            </span>
            <h2 className="mt-5 font-display text-display-sm font-normal text-white">
              <span className="italic font-light text-white/70">Tools</span> we
              <br />
              <span className="font-medium">reach for.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              A full-stack toolkit — chosen per project, never imposed. We
              optimise for the team that has to maintain it after we ship.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ul className="flex flex-wrap gap-2 md:gap-3">
              {CAPS.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 12) * 0.03, ease: [0.65, 0, 0.35, 1] }}
                  className="cursor-default rounded-full border border-white/12 bg-white/[0.02] px-4 py-2 font-mono-disp text-[11px] uppercase tracking-wide text-white/70 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white md:px-5 md:py-2.5"
                >
                  {cap}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
