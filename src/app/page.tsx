import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import SeoContent from "@/components/SeoContent";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
      <SeoContent />
    </>
  );
}
