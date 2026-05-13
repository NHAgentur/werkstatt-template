import type { Metadata } from "next";
import { werkstatt } from "@/lib/werkstatt.config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Impressum
        </h1>

        <div className="prose mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="font-display text-xl font-bold">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {werkstatt.name}
              <br />
              {werkstatt.kontakt.strasse}
              <br />
              {werkstatt.kontakt.plz} {werkstatt.kontakt.ort}
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">Vertreten durch</h2>
            <p>
              {werkstatt.inhaber}
              <br />
              {werkstatt.inhaberRolle}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">Kontakt</h2>
            <p>
              Telefon: {werkstatt.kontakt.telefonFormatiert}
              <br />
              E-Mail: {werkstatt.kontakt.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">
              Umsatzsteuer-ID / Handelsregister
            </h2>
            <p className="text-muted-foreground">
              [Bitte hier USt-IdNr., HRB-Nummer und Registergericht eintragen.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              {werkstatt.inhaber}
              <br />
              {werkstatt.kontakt.strasse}
              <br />
              {werkstatt.kontakt.plz} {werkstatt.kontakt.ort}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">Haftungsausschluss</h2>
            <p className="text-muted-foreground">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
              sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
