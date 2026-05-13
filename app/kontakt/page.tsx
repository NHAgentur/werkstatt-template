import type { Metadata } from "next";
import { KontaktSektion } from "@/components/sections/KontaktSektion";
import { TerminFormular } from "@/components/sections/TerminFormular";
import { werkstatt } from "@/lib/werkstatt.config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktiere ${werkstatt.name} – Adresse, Telefon, E-Mail und Online-Termin.`,
};

export default function KontaktPage() {
  const mapsQuery = encodeURIComponent(
    `${werkstatt.kontakt.strasse}, ${werkstatt.kontakt.plz} ${werkstatt.kontakt.ort}`,
  );

  return (
    <>
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Kontakt
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Wir freuen uns auf Dich.
          </h1>
        </div>
      </section>

      <KontaktSektion />

      <section className="bg-card py-12 md:py-16">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-border shadow-md">
            <iframe
              title={`Karte ${werkstatt.name}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                (werkstatt.kontakt.geo?.lng ?? 10) - 0.01
              }%2C${(werkstatt.kontakt.geo?.lat ?? 47) - 0.005}%2C${
                (werkstatt.kontakt.geo?.lng ?? 10) + 0.01
              }%2C${
                (werkstatt.kontakt.geo?.lat ?? 47) + 0.005
              }&layer=mapnik&marker=${werkstatt.kontakt.geo?.lat ?? 47}%2C${
                werkstatt.kontakt.geo?.lng ?? 10
              }`}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-right text-xs text-muted-foreground">
            <a
              href={`https://www.google.com/maps?q=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-accent hover:underline"
            >
              In Google Maps öffnen →
            </a>
          </div>
        </div>
      </section>

      <TerminFormular />
    </>
  );
}
