import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PAGES_BY_SLUG, ALL_SLUGS } from "@/lib/seo-pages";

const SITE = "https://internationalgarudas.com";
const EMAIL = "igpl@internnationalgradus.com";
const PHONE_1 = "+917871241179";
const PHONE_2 = "+919940203992";

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = PAGES_BY_SLUG[params.slug];
  if (!page) return {};
  const url = `${SITE}/services/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, "Chennai", "Tamil Nadu", "IGPL", "International Garudas"],
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "International Garudas",
      locale: "en_IN",
      type: "website"
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
    robots: { index: true, follow: true }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = PAGES_BY_SLUG[params.slug];
  if (!page) notFound();

  const url = `${SITE}/services/${page.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE}#org`,
      name: "International Garudas Pvt Ltd",
      alternateName: "IGPL",
      url: SITE,
      email: EMAIL,
      telephone: [PHONE_1, PHONE_2],
      image: `${SITE}/og.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN"
      },
      areaServed: ["Chennai", "Tamil Nadu", "India", "Worldwide"],
      priceRange: "₹₹₹"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.keyword,
      provider: { "@id": `${SITE}#org` },
      areaServed: { "@type": "Place", name: "Chennai, Tamil Nadu, India" },
      description: page.description,
      url
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: page.h1, item: url }
      ]
    }
  ];

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="top" className="relative">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
          <div className="aurora" aria-hidden style={{ opacity: 0.22 }}><span /></div>
          <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <span className="eyebrow">{page.eyebrow}</span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.95] tracking-tightest text-white">
                {page.hero.lede}
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-white/65 md:text-[1.15rem]">
                {page.hero.sub}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(page.h1)}`}
                  className="btn-ember inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono-disp text-[11px] font-medium uppercase tracking-wide2"
                >
                  Start a project <span aria-hidden>→</span>
                </a>
                <a
                  href={`tel:${PHONE_1}`}
                  className="link-fill font-mono-disp text-[11px] uppercase tracking-wide2 text-white/70"
                >
                  Or call +91 78712 41179
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
              <div className="col-span-12 md:col-span-3">
                <span className="eyebrow">§ How we deliver</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-display-sm font-normal tracking-tightest text-white">
                  Three principles. <span className="font-italic font-light text-white/65">No theatre.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-3">
              {page.bullets.map((bl, i) => (
                <div key={i} className="bg-obsidian/40 p-8 md:p-10">
                  <span className="font-mono-disp text-[10px] uppercase tracking-wide2 text-white/40">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-normal tracking-tight text-white">{bl.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{bl.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES + TECH + INDUSTRIES */}
        <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
          <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow">§ Outcomes</span>
              <ul className="mt-6 space-y-3">
                {page.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-[0.95rem] text-white/70">
                    <span className="mt-2 inline-block h-px w-4 bg-[var(--ember)]" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow">§ Tech we ship</span>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow">§ Industries</span>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.industries.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono-disp text-[10px] uppercase tracking-wide2 text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-10 grid grid-cols-12 gap-8 md:mb-14">
              <div className="col-span-12 md:col-span-3">
                <span className="eyebrow">§ FAQ</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-display-sm font-normal tracking-tightest text-white">
                  Questions, <span className="font-italic font-light text-white/65">answered.</span>
                </h2>
              </div>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {page.faqs.map((f, i) => (
                <details key={i} className="group py-6 md:py-8">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 font-display text-lg leading-snug text-white md:text-2xl">
                    {f.q}
                    <span className="font-mono-disp text-2xl text-white/40 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-white/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED + CTA */}
        <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-5">
                <span className="eyebrow">§ Related services</span>
                <ul className="mt-6 space-y-3">
                  {page.related.map((s) => {
                    const r = PAGES_BY_SLUG[s];
                    if (!r) return null;
                    return (
                      <li key={s}>
                        <Link
                          href={`/services/${s}`}
                          className="link-fill font-display text-xl text-white md:text-2xl"
                        >
                          {r.h1} →
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1] tracking-tightest text-white">
                  Ready to engineer{" "}
                  <span className="font-italic font-light text-white/65">your</span>{" "}
                  system?
                </h2>
                <p className="mt-6 max-w-md text-white/55">
                  We take on a small number of partnerships each quarter. Tell us what you're building.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(page.h1)}`}
                    className="btn-ember inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono-disp text-[11px] font-medium uppercase tracking-wide2"
                  >
                    {EMAIL} <span aria-hidden>→</span>
                  </a>
                  <a
                    href={`https://wa.me/${PHONE_1.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-fill font-mono-disp text-[11px] uppercase tracking-wide2 text-white/70"
                  >
                    WhatsApp +91 78712 41179
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
