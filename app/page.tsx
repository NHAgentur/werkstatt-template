import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyTrust from "@/components/sections/WhyTrust";
import Marquee from "@/components/sections/Marquee";
import Highlights from "@/components/sections/Highlights";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Partners from "@/components/sections/Partners";
import News from "@/components/sections/News";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Mission />
      <Services />
      <Stats />
      <WhyTrust />
      <Marquee />
      <Highlights />
      <FAQ />
      <ContactForm />
      <Partners />
      <News />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
