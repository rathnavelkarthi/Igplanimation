import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PAGES } from "@/lib/seo-pages";

const SITE = "https://internationalgarudas.com";

export const metadata: Metadata = {
  title: "Services — Software, Web, App & Marketing in Chennai | IGPL",
  description:
    "All IGPL services: software development, website development, app development, AI engineering, SEO, Google Ads, and WhatsApp automation — engineered from Chennai.",
  alternates: { canonical: `${SITE}/services` },
  robots: { index: true, follow: true }
};

export default function ServicesIndex() {
  return (
    <>
      <Nav />
      <main id="top" className="relative">
        <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
          <div className="aurora" aria-hidden style={{ opacity: 0.22 }}><span /></div>
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <span className="eyebrow">§ Services · Chennai</span>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-tightest text-white">
              Everything we build, <span className="font-italic font-light text-white/65">in one place.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/60">
              Twenty service lines, engineered from our Chennai studio. Pick where your roadmap hurts most — we'll meet you there.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-24 md:px-12 md:pb-32">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-2">
              {PAGES.map((p, i) => (
                <li key={p.slug} className="bg-obsidian/40 transition-colors hover:bg-white/[0.03]">
                  <Link href={`/services/${p.slug}`} className="block p-6 md:p-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/40">
                        /{String(i + 1).padStart(2, "0")} · {p.intent}
                      </span>
                      <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/40">→</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-normal leading-tight tracking-tight text-white md:text-3xl">
                      {p.h1}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{p.hero.lede}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
