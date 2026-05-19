import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — International Garudas",
  description:
    "Terms governing your use of the International Garudas website and engagements with IGPL Pvt Ltd."
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
        <div className="mx-auto w-full max-w-3xl">
          <span className="font-mono-disp text-[10px] uppercase tracking-wider text-white/45">
            § Legal — Terms
          </span>
          <h1 className="mt-5 font-display text-display font-normal text-white">
            Terms of <span className="italic font-light text-white/85">Service</span>
          </h1>
          <p className="mt-4 font-mono-disp text-[11px] uppercase tracking-wide2 text-white/40">
            Last updated · 19 May 2026
          </p>

          <div className="prose-editorial mt-12 space-y-8 text-white/70">
            <section>
              <h2 className="font-display text-2xl text-white">1. Acceptance</h2>
              <p className="mt-3 leading-relaxed">
                By accessing internnationalgarudas.com (the "Site") or engaging
                International Garudas Pvt Ltd ("IGPL"), you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">2. Services</h2>
              <p className="mt-3 leading-relaxed">
                IGPL provides software development, procurement, and advisory
                services under separate written Statements of Work (SOWs). The
                SOW prevails over any inconsistent term on the Site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">3. Intellectual property</h2>
              <p className="mt-3 leading-relaxed">
                Site content, marks, and design are property of IGPL. Deliverables
                under engagements are governed by the relevant SOW.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">4. Acceptable use</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>No reverse engineering or scraping of Site content.</li>
                <li>No unlawful, infringing, or harmful use.</li>
                <li>No attempts to disrupt or probe our infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">5. Warranties</h2>
              <p className="mt-3 leading-relaxed">
                The Site is provided "as is" without warranty. Engagement
                warranties are defined in the applicable SOW.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">6. Liability</h2>
              <p className="mt-3 leading-relaxed">
                To the maximum extent permitted by law, IGPL is not liable for
                indirect, incidental, or consequential damages arising from use
                of the Site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">7. Governing law</h2>
              <p className="mt-3 leading-relaxed">
                These Terms are governed by the laws of India. Courts at Chennai,
                Tamil Nadu have exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">8. Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions:{" "}
                <a href="mailto:igpl@internnationalgradus.com" className="underline">
                  igpl@internnationalgradus.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/"
              className="font-mono-disp text-[11px] uppercase tracking-wide2 text-white/65 transition-colors hover:text-white"
            >
              ← Back to IGPL
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
