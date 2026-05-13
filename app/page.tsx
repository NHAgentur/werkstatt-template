import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Leistungen } from "@/components/sections/Leistungen";
import { Kennzahlen } from "@/components/sections/Kennzahlen";
import { Trust } from "@/components/sections/Trust";
import { Marquee } from "@/components/sections/Marquee";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Faq } from "@/components/sections/Faq";
import { TerminFormular } from "@/components/sections/TerminFormular";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { Kundenstimmen } from "@/components/sections/Kundenstimmen";
import { KontaktSektion } from "@/components/sections/KontaktSektion";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Leistungen />
      <Kennzahlen />
      <Trust />
      <Marquee />
      <FeatureGrid />
      <Faq />
      <TerminFormular />
      <PartnerLogos />
      <NewsTeaser />
      <Kundenstimmen />
      <KontaktSektion />
    </>
  );
}
