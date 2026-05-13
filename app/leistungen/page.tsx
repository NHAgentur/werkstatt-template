import type { Metadata } from "next";
import { Leistungen } from "@/components/sections/Leistungen";
import { Faq } from "@/components/sections/Faq";
import { Marquee } from "@/components/sections/Marquee";
import { werkstatt } from "@/lib/werkstatt.config";

export const metadata: Metadata = {
  title: "Leistungen",
  description: `Unsere Leistungen im Überblick – von Reifenwechsel bis Unfallinstandsetzung bei ${werkstatt.name}.`,
};

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Leistungen
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Alle Leistungen im Überblick
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Egal ob Wartung, Reparatur oder Unfallinstandsetzung – wir sind für Dich
            und Dein Fahrzeug da.
          </p>
        </div>
      </section>
      <Leistungen zeigeAlleLink={false} />
      <Marquee />
      <Faq />
    </>
  );
}
