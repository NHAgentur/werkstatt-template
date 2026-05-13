import type { Metadata } from "next";
import { werkstatt } from "@/lib/werkstatt.config";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="prose mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p className="text-muted-foreground">
            Diese Datenschutzerklärung ist ein Platzhaltertext und muss vor
            Veröffentlichung der Seite durch eine juristisch geprüfte Fassung ersetzt
            werden.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold">
              1. Verantwortlicher
            </h2>
            <p>
              {werkstatt.name}
              <br />
              {werkstatt.kontakt.strasse}, {werkstatt.kontakt.plz}{" "}
              {werkstatt.kontakt.ort}
              <br />
              E-Mail: {werkstatt.kontakt.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">2. Erhebung von Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Du uns diese über das
              Kontakt- oder Terminformular zur Verfügung stellst. Die Verarbeitung
              erfolgt zur Beantwortung Deiner Anfrage gemäß Art. 6 Abs. 1 lit. b und f
              DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">3. Server-Logs</h2>
            <p>
              Beim Aufruf der Website werden technisch notwendige Daten (IP-Adresse,
              Zeitstempel, Browser-Typ) in Server-Logs gespeichert und nach kurzer
              Zeit gelöscht.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">4. Rechte der Nutzer</h2>
            <p>
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Deiner Daten sowie das Recht auf
              Datenübertragbarkeit und Widerspruch.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">5. Karten-Einbettung</h2>
            <p>
              Auf der Kontaktseite betten wir OpenStreetMap zur Anzeige unseres
              Standortes ein. Beim Aufruf der Seite kann Deine IP-Adresse an den
              Anbieter übertragen werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
