import Nav from "@/components/Nav";
import ScrollSequence from "@/components/ScrollSequence";
import Manifesto from "@/components/Manifesto";
import Numbers from "@/components/Numbers";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Industries from "@/components/Industries";
import Founders from "@/components/Founders";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="relative">
        <ScrollSequence />

        <section id="manifesto">
          <Manifesto />
        </section>

        <Numbers />

        <section id="capabilities">
          <Capabilities />
        </section>

        <section id="process">
          <Process />
        </section>

        <Marquee />

        <Services />

        <section id="work">
          <Work />
        </section>

        <section id="industries">
          <Industries />
        </section>

        <Founders />

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}
