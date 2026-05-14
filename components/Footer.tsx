import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { services, contact } from "@/lib/services";

const topServices = services.slice(0, 5);

const hours = [
  "Mo. bis Do. 07:00–12:00 Uhr",
  "Mo. bis Do. 13:00–17:00 Uhr",
  "Freitag 07:00–12:00 Uhr",
  "Werkstatt bis 16:45 Uhr geöffnet",
  "Sa., So. & Brückentage geschlossen",
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display text-3xl font-bold text-accent inline-block"
            >
              R&amp;W
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              R&amp;W KFZ-Service in Sonthofen &ndash; deine Werkstatt im
              Allgäu für sichere und sorgfältige Reparaturen aller Marken.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-main">
              Standort
            </h3>
            <div className="flex items-start gap-3 text-sm text-muted leading-relaxed">
              <MapPin
                className="w-4 h-4 text-accent mt-0.5 shrink-0"
                strokeWidth={1.8}
              />
              <span>{contact.address}</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hindelanger+Str.+27+87527+Sonthofen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline inline-block"
            >
              Auf Google Maps öffnen →
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-main">
              Unsere Leistungen
            </h3>
            <ul className="space-y-2">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href="#leistungen"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-main flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Öffnungszeiten
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              {hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <p>
            2025 © R&amp;W Kfz-Service &middot; Webdesign by{" "}
            <span className="text-accent font-semibold">NH Agentur</span>
          </p>
          <nav className="flex gap-5">
            <a
              href="#impressum"
              className="hover:text-accent transition-colors"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="hover:text-accent transition-colors"
            >
              Datenschutz
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
