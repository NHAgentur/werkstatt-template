import type { Metadata } from "next";
import { Mission } from "@/components/sections/Mission";
import { Kennzahlen } from "@/components/sections/Kennzahlen";
import { Trust } from "@/components/sections/Trust";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { werkstatt } from "@/lib/werkstatt.config";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Lerne ${werkstatt.name} kennen – seit ${werkstatt.gruendungsjahr} Deine Werkstatt in ${werkstatt.region}.`,
};

export default function WerkstattPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Werkstatt
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {werkstatt.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {werkstatt.beschreibungKurz}
          </p>
        </div>
      </section>
      <Mission />
      <Kennzahlen />
      <Trust />
      <FeatureGrid />
      <PartnerLogos />
    </>
  );
}
