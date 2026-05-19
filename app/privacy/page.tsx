import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — International Garudas",
  description:
    "How International Garudas Pvt Ltd collects, uses, and safeguards information about clients, partners, and visitors."
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
        <div className="mx-auto w-full max-w-3xl">
          <span className="font-mono-disp text-[10px] uppercase tracking-wider text-white/45">
            § Legal — Privacy
          </span>
          <h1 className="mt-5 font-display text-display font-normal text-white">
            Privacy <span className="italic font-light text-white/85">Policy</span>
          </h1>
          <p className="mt-4 font-mono-disp text-[11px] uppercase tracking-wide2 text-white/40">
            Last updated · 19 May 2026
          </p>

          <div className="prose-editorial mt-12 space-y-8 text-white/70">
            <section>
              <h2 className="font-display text-2xl text-white">1. Who we are</h2>
              <p className="mt-3 leading-relaxed">
                International Garudas Pvt Ltd ("IGPL", "we", "us") is a software
                development and procurement firm headquartered in Chennai, India.
                Reach us at{" "}
                <a href="mailto:igpl@internnationalgradus.com" className="underline">
                  igpl@internnationalgradus.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">2. What we collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>Contact details you share (name, email, phone, company).</li>
                <li>Project briefs and files you send for evaluation.</li>
                <li>Anonymous analytics — pages visited, device, country.</li>
                <li>Cookies strictly required to operate the site.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">3. How we use it</h2>
              <p className="mt-3 leading-relaxed">
                To respond to enquiries, scope work, deliver engagements, send
                contractual updates, and improve our site. We do not sell data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">4. Sharing</h2>
              <p className="mt-3 leading-relaxed">
                Limited sharing with sub-processors strictly necessary for
                delivery (cloud hosting, email, analytics). All under
                confidentiality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">5. Your rights</h2>
              <p className="mt-3 leading-relaxed">
                You may request access, correction, or deletion of your data at
                any time by writing to{" "}
                <a href="mailto:igpl@internnationalgradus.com" className="underline">
                  igpl@internnationalgradus.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">6. Retention</h2>
              <p className="mt-3 leading-relaxed">
                We retain data only as long as needed for the purpose collected
                or as required by Indian law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-white">7. Changes</h2>
              <p className="mt-3 leading-relaxed">
                We may update this policy; the "Last updated" date will reflect
                the change.
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
