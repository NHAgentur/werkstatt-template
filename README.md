# R&W Kfz-Service — Akquise-Mockup

Pixel-naher Klon der Startseite von [rw-kfz-service.de](https://rw-kfz-service.de/) als Akquise-Mockup für **NH Agentur**.

Das Mockup zeigt eine vollständige One-Pager-Landing-Page im Automotive-Look (dunkel/anthrazit mit Orange-Akzent), gebaut mit modernem Stack und sauberen Animationen.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first Konfiguration via `@theme` in `app/globals.css`)
- **Framer Motion** (Scroll-Animationen, Marquee, Accordion, Toast, Stagger)
- **Lucide React** (Icon-Set)
- **next/font/google** für Inter & Oswald

> Hinweis: Spec lautete ursprünglich Next 14 + Tailwind v3. `create-next-app@latest` hat die jeweils aktuellen Majors installiert (Next 16, Tailwind v4). Tokens liegen daher in `app/globals.css` unter `@theme`, nicht in `tailwind.config.ts`.

## Setup

```bash
npm install
npm run dev
```

Aufrufen unter <http://localhost:3000>.

### Weitere Skripte

```bash
npm run build   # Produktions-Build (~2 s, statisch prerendert)
npm run start   # gebauten Build servieren
npm run lint    # ESLint
```

## Projektstruktur

```
app/
  layout.tsx          # Root-Layout (Inter + Oswald, dunkles Theme, deutsche Metadata)
  page.tsx            # One-Pager: rendert alle Sections in Reihenfolge
  globals.css         # Tailwind v4 @theme + Reset + Custom-Scrollbar

components/
  TopBar.tsx          # Info-Leiste oben (Mail / Öffnungszeiten / Adresse)
  Header.tsx          # Sticky Nav, Dropdown "Leistungen", Mobile-Drawer
  Footer.tsx          # 4-Spalten-Footer + Bottom-Bar

  sections/
    Hero.tsx          # 2-spaltig, große H1, Akzent-Glow, schwebende Stat-Card
    Mission.tsx       # Portrait-Card + Mission-Text + Mini-Stats
    Services.tsx      # 12 Service-Karten, Icon-Badges, Stagger-Animation
    Stats.tsx         # 3 CountUp-Stats (Framer-Motion useInView + animate)
    WhyTrust.tsx      # 3 Trust-Pillars (Personal / Technik / Service)
    Marquee.tsx       # Endlos-Scrolling-Band, 2 Reihen gegenläufig
    Highlights.tsx    # 6 Highlight-Cards mit Icon links
    FAQ.tsx           # Sticky-Linke-Spalte + 4-fach Accordion rechts
    ContactForm.tsx   # Termin-Formular mit Mock-Submit + Success-Toast
    Partners.tsx      # 3 Partner-Logos (TÜV SÜD / KÜS / DEKRA)
    News.tsx          # 2 Blog-Karten mit Bild-Platzhaltern
    Testimonials.tsx  # 3 Kunden-Bewertungen + Sterne + Google-Maps-Link
    FinalCTA.tsx      # Großer Phone-Button mit zentralem Akzent-Glow

lib/
  services.ts         # 12 Services + Kontaktdaten (zentrale Datenquelle)
```

## Design-Tokens

Definiert in `app/globals.css` über `@theme {}` (Tailwind v4):

| Utility | Farbe | Zweck |
| --- | --- | --- |
| `bg-dark` / `text-dark` | `#1a1a1a` | Body-Hintergrund |
| `bg-card` | `#222222` | Card-Hintergrund |
| `bg-accent` / `text-accent` | `#ff6b1a` | Orange-Akzent (CTA, Icons) |
| `hover:bg-accent-hover` | `#e85d12` | Akzent-Hover |
| `text-main` | `#ffffff` | Body-Text |
| `text-muted` | `#a0a0a0` | Sekundär-Text |
| `border-border` | `#333333` | Borders & Trennlinien |

Schriften: `font-sans` = Inter (400/500/600), `font-display` = Oswald (500/600/700).

## Bilder & Assets — alle Platzhalter

> **Wichtig:** Alle visuellen Assets sind Platzhalter. Vor Pitch / Live-Schaltung müssen sie durch Originalmaterial ersetzt werden.

### Aktuelle Platzhalter

- **Hero-Image** — `placehold.co/1200x900` mit Wrench-Icon-Overlay
- **Portrait Christian Kling** (Mission) — `placehold.co/600x800` mit User-Icon-Overlay
- **News-Thumbnails** (2x) — `placehold.co/800x500` mit Newspaper-Icon-Overlay
- **Service-Karten** (12x) — Gradient-Hintergrund mit Lucide-Icon (kein Foto, bewusst icon-basiert)
- **Partner-Logos** — Text-Platzhalter "TÜV SÜD" / "KÜS" / "DEKRA" auf grauen Cards
- **Logo "R&W"** — als Oswald-Schriftzug, kein Bild-Asset

`placehold.co` ist in `next.config.ts` unter `images.remotePatterns` für Next/Image freigegeben.

### TODO vor echtem Einsatz

- [ ] **Logo "R&W"** als SVG nach `public/images/logo.svg` (ersetzt den `font-display`-Schriftzug in Header & Footer)
- [ ] **Hero-Image** — Foto/Render eines Werkstatt-Wagens nach `public/images/hero.jpg` (Empfehlung: 1600×1200)
- [ ] **Portrait Christian Kling** nach `public/images/team/christian-kling.jpg` (Empfehlung: 800×1067, 3:4)
- [ ] **Service-Bilder** (12x) nach `public/images/services/{slug}.jpg` (4:3, ~800×600) — Slugs siehe `lib/services.ts`
- [ ] **News-Thumbnails** nach `public/images/news/qualitaetsversprechen.jpg` und `public/images/news/jubilaeum.jpg` (16:10, ~1200×750)
- [ ] **Partner-Logos** als SVGs nach `public/images/partner/{tuev-sued,kues,dekra}.svg`
- [ ] **Favicon** — eigenes Icon nach `app/favicon.ico` (aktuell Next.js-Default)
- [ ] **Open-Graph-Bild** nach `public/og-image.jpg` (1200×630) und in `app/layout.tsx` `metadata.openGraph.images` ergänzen

## Inhalte

Alle Inhalte (Adresse, Telefon, Mail, Öffnungszeiten, Service-Beschreibungen, Testimonials, FAQ, News-Titel) sind in `lib/services.ts` bzw. direkt in den jeweiligen Section-Komponenten gepflegt.

### Echte Kontaktdaten

- **Adresse:** Hindelanger Str. 27, 87527 Sonthofen
- **Telefon:** +49 8321 89052
- **E-Mail:** info@rw-kfz-service.de
- **Öffnungszeiten:** Mo–Do 7:00–12:00 / 13:00–17:00, Fr 7:00–12:00

## Mockup-Verhalten

- **Kontaktformular** loggt Anfragen in die Browser-Konsole (`console.log("[Mockup] Termin-Anfrage:", ...)`) und zeigt einen 4-Sekunden-Toast. Vor Live-Schaltung an Mailer-API anbinden (z. B. Resend / Postmark / Mailto-Fallback).
- **Nav-Links** in Header & Footer sind Anker (`#mission`, `#leistungen`, `#kontakt`, …) — keine echten Unterseiten.
- **Smooth Scroll** ist über `scroll-behavior: smooth` auf `<html>` aktiv.
- **Service-Karten** verlinken alle auf `#leistungen`. Für echte Detailseiten siehe Slugs in `lib/services.ts` (URL-safe vorbereitet).

## Responsive Breakpoints

Alle Sections sind vorbereitet für:

- **Mobile** (375 px) — Single-Column, Hamburger-Menü mit Sheet-Drawer, ausgeblendete TopBar
- **Tablet** (768 px) — 2-Spalten-Grids, TopBar sichtbar
- **Desktop** (1440 px+) — volle Multi-Column-Layouts mit Sticky-Elementen

## Build-Status

- `npm run build` läuft erfolgreich, Route `/` wird statisch prerendert (○ Static).
- TypeScript-Check sauber.
- Keine Console-Errors oder Hydration-Warnings.

## Verwendungszweck

Internes Akquise-Mockup für **NH Agentur**. Vor produktiver Verwendung Freigabe des Endkunden einholen.
