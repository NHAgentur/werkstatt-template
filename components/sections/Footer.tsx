import Link from "next/link";
import { werkstatt } from "@/lib/werkstatt.config";
import { telHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-display font-bold">
              {werkstatt.kurzName.slice(0, 1)}
            </span>
            <div>
              <div className="font-display text-base font-bold">
                {werkstatt.name}
              </div>
              <div className="text-xs text-primary-foreground/70">
                {werkstatt.region}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            {werkstatt.beschreibungKurz}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
            Kontakt
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
            <li>{werkstatt.kontakt.strasse}</li>
            <li>
              {werkstatt.kontakt.plz} {werkstatt.kontakt.ort}
            </li>
            <li>
              <a
                href={telHref(werkstatt.kontakt.telefon)}
                className="hover:text-accent"
              >
                {werkstatt.kontakt.telefonFormatiert}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${werkstatt.kontakt.email}`}
                className="hover:text-accent"
              >
                {werkstatt.kontakt.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
            Öffnungszeiten
          </div>
          <ul className="mt-4 flex flex-col gap-1 text-sm text-primary-foreground/80">
            {werkstatt.oeffnungszeiten.map((o) => (
              <li key={o.tag} className="flex justify-between gap-3">
                <span className="font-medium">{o.tag.slice(0, 2)}</span>
                <span className="text-right text-primary-foreground/60">
                  {o.geschlossen
                    ? "geschl."
                    : [o.vormittag, o.nachmittag].filter(Boolean).join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
            Leistungen
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
            {werkstatt.leistungen.slice(0, 6).map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/service/${l.slug}`}
                  className="hover:text-accent"
                >
                  {l.titel}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/leistungen" className="font-semibold hover:text-accent">
                Alle Leistungen →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col items-start justify-between gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {werkstatt.name} · Alle Rechte vorbehalten.
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/impressum" className="hover:text-accent">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-accent">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-accent">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
