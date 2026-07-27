import { Collection } from "@/components/Collection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { Promise } from "@/components/Promise";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Process />
        <Collection />
        <Testimonials />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
