# Werkstatt-Template

Wiederverwendbares Next.js-14-Template für deutsche KFZ-Werkstätten.
Inspiriert von Struktur und Sektionsidee marktüblicher Werkstatt-Websites,
voll datengetrieben über ein zentrales Config-File. Für einen neuen Kunden
werden ausschließlich **`lib/werkstatt.config.ts`** und **`/public/images`**
angepasst – keine Code-Änderungen nötig.

## Tech-Stack

- **Next.js 14** (App Router, TypeScript, RSC + Client Components)
- **Tailwind CSS** mit erweitertem Theme (CSS-Variablen für Farben)
- **shadcn/ui-Stil** (Button, Input, Textarea, Card, Accordion – inhouse)
- **Framer Motion** für sanfte Scroll-Animationen
- **next/image** mit AVIF/WebP und Lazy Loading
- **Lucide Icons**
- **JSON-LD** (`AutoRepair` Schema.org) + OpenGraph + Twitter Cards
- Automatische `sitemap.xml` und `robots.txt`

## Schnellstart

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

App läuft unter http://localhost:3000.

Build:

```bash
pnpm build
pnpm start
```

## Wie passe ich das Template für einen neuen Kunden an?

### 1. Daten ändern (Pflicht)

Öffne **`lib/werkstatt.config.ts`** und ersetze die Dummy-Werte. Das Schema
ist in `lib/types.ts` typisiert, TypeScript meckert sofort, falls ein Feld
fehlt.

Pflicht-Anpassungen:

- `name`, `kurzName`, `slogan`
- `inhaber`, `inhaberRolle`, `inhaberPortrait`
- `gruendungsjahr`, `region`
- `beschreibungKurz`, `beschreibungLang`
- `kontakt` (Telefon, E-Mail, Adresse, Geo-Koordinaten)
- `oeffnungszeiten`
- `leistungen` (Slug, Titel, Kurz-/Langbeschreibung, Bild, Icon, Highlights)
- `kennzahlen`, `kundenstimmen`, `faq`, `news`

### 2. Bilder austauschen

Lege Kunden-Fotos unter **`/public/images`** ab und referenziere sie aus dem
Config-File (z.B. `bild: "/images/leistungen/reifenwechsel.jpg"`). Externe
Unsplash-URLs sind nur Platzhalter.

Logo: `public/images/logo.svg` (kann durch PNG/SVG ersetzt werden).

### 3. Farben anpassen

Im Config-File:

```ts
theme: {
  primary: "220 30% 12%",          // HSL ohne hsl() — Hauptfarbe (Anthrazit/Dunkelblau)
  primaryForeground: "0 0% 98%",   // Text auf Hauptfarbe
  accent: "18 92% 55%",            // Akzent (Orange/Rot) für CTAs
  accentForeground: "0 0% 100%",
}
```

Wird zur Laufzeit in `app/layout.tsx` als CSS-Variable gesetzt – keine
Tailwind-Konfiguration ändern nötig.

### 4. SEO / Domain

In `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://www.deine-kunden-domain.de
```

Wird für JSON-LD, Sitemap, OpenGraph und Canonical-URLs verwendet.

### 5. Mail-Versand

Die API-Routen `app/api/kontakt/route.ts` und `app/api/termin/route.ts`
gehen über `lib/mailer.ts` an **Resend**. Ohne `RESEND_API_KEY` läuft
alles im **Dry-Run-Modus** (Console-Log, keine echten Mails) — bequem
für lokale Entwicklung. In Produktion in `.env.local` setzen:

```
RESEND_API_KEY=re_xxx
MAIL_FROM=noreply@deine-werkstatt.de   # muss bei Resend verifiziert sein
MAIL_TO=info@deine-werkstatt.de        # Posteingang der Werkstatt
```

Anderen Provider statt Resend? Einfach `lib/mailer.ts#sendInquiry` ersetzen
— Aufrufer in den API-Routes bleiben unverändert.

### 6. Impressum & Datenschutz

`app/impressum/page.tsx` und `app/datenschutz/page.tsx` zieht Adresse und
Inhaber automatisch aus dem Config-File, enthält aber zusätzlich
Platzhalter für USt-IdNr., HRB, etc. **Vor Veröffentlichung juristisch
prüfen lassen.**

## Projektstruktur

```
app/
  layout.tsx          ─ Root-Layout, Header/Footer, JSON-LD, Theme-Vars
  page.tsx            ─ Startseite (Long-Scroll mit 13 Sektionen)
  werkstatt/          ─ Über-uns-Detailseite
  leistungen/         ─ Übersicht aller Services
  service/[slug]/     ─ Statisch generierte Detailseiten je Leistung
  news/, news/[slug]/ ─ Blog-Übersicht und Artikel
  kontakt/            ─ Vollformular + Karte
  impressum/, datenschutz/
  api/kontakt/, api/termin/  ─ Formular-Endpoints
  sitemap.ts, robots.ts
components/
  sections/           ─ Alle Startseiten-Sektionen
  ui/                 ─ Wiederverwendbare Primitive (Button, Card, …)
  seo/JsonLd.tsx      ─ LocalBusiness Schema.org JSON-LD
lib/
  werkstatt.config.ts ─ Zentrale Werkstatt-Daten (PFLICHT-ANPASSUNG)
  types.ts            ─ Typen für Config
  utils.ts            ─ cn(), formatDateDE(), telHref()
public/
  images/             ─ Logos, Fotos, Partner-Logos
```

## Sektionsreihenfolge der Startseite

1. Sticky Header (Logo, Nav mit Mega-Dropdown, Telefon-CTA)
2. Hero (Headline, Bild, Scroll-Indikator, gepunktetes Grid-Background)
3. Mission / Über-uns (Porträt links, Fließtext rechts)
4. Leistungen-Grid (3 Spalten Desktop / 1 Mobile)
5. Kennzahlen-Counter (animiert, dunkler Hintergrund)
6. Trust-Pillars (3 Spalten)
7. Marquee / Laufband (endloses Scrollen)
8. Feature-Grid (6 Mini-Kacheln)
9. FAQ (Accordion)
10. Termin-Formular
11. Partner-Logos (Graustufen, Hover → farbig)
12. News-Teaser (3 Artikel)
13. Kundenstimmen (Google-Reviews)
14. Kontakt-Sektion + Mini-Formular

## Lighthouse / Performance

- next/image mit AVIF/WebP, korrekten `sizes`
- Inter + Manrope via `next/font` (selbst-gehostet, Display swap)
- RSC by default, Client Components nur wo nötig (Animation, Forms)
- Ziel: Performance ≥ 90 mobil, ≥ 95 desktop

## Bekannte Punkte / Erweiterungen

- News-Inhalte derzeit aus Config (für CMS-Anbindung später leicht
  ausgetauschbar)
- Karte über OpenStreetMap-iFrame (DSGVO-freundlicher als Google Maps);
  alternativ Leaflet/Mapbox einbauen
- Cookie-Banner ist **nicht** enthalten – bei Tracking-Tools nachrüsten

## Lizenz

Template für die interne Verwendung. Inhalte und Bilder pro Kunde lizenzieren.
