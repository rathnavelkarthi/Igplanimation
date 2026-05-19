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

        <Manifesto />

        <Numbers />

        <Capabilities />

        <section id="process">
          <Process />
        </section>

        <Marquee />

        <Services />

        <section id="work">
          <Work />
        </section>

        <Industries />

        <Founders />

        <section id="faq">
          <FAQ />
        </section>

        <Footer />
      </main>
    </>
  );
}
