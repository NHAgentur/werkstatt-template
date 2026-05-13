import type { WerkstattConfig } from "./types";

/**
 * Zentrale Werkstatt-Konfiguration.
 *
 * Alle inhaltlichen Anpassungen für einen neuen Kunden werden ausschließlich hier
 * (und in /public/images) vorgenommen. Code-Änderungen sind nicht nötig.
 */
export const werkstatt: WerkstattConfig = {
  name: "Auto-Service Muster GmbH",
  kurzName: "Muster",
  slogan: "Reparatur, Service, TÜV – Alles für Dein Auto.",
  inhaber: "Max Mustermann",
  inhaberRolle: "Geschäftsführer & Kfz-Meister",
  inhaberPortrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop",
  gruendungsjahr: 1992,
  region: "Musterstadt im Allgäu",
  beschreibungKurz:
    "Deine freie Kfz-Werkstatt für alle Automarken – ehrlich, schnell und mit Leidenschaft.",
  beschreibungLang:
    "Seit über drei Jahrzehnten kümmern wir uns mit Herzblut um Dein Fahrzeug. Vom Reifenwechsel über die Hauptuntersuchung bis zur kompletten Unfallinstandsetzung – bei uns bist Du in besten Händen. Unser eingespieltes Team aus Kfz-Meistern und Mechatronikern arbeitet mit modernster Diagnosetechnik und der Erfahrung von mehr als 30 Jahren.",
  logo: "/images/logo.svg",
  heroBild:
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1400&auto=format&fit=crop",
  kontakt: {
    telefon: "+498321999999",
    telefonFormatiert: "+49 8321 999 999",
    email: "info@auto-service-muster.de",
    strasse: "Werkstattweg 1",
    plz: "87509",
    ort: "Musterstadt",
    land: "DE",
    geo: { lat: 47.5167, lng: 10.2833 },
    googleProfil: "https://www.google.com/maps",
  },
  oeffnungszeiten: [
    { tag: "Montag", vormittag: "08:00–12:00", nachmittag: "13:00–17:30" },
    { tag: "Dienstag", vormittag: "08:00–12:00", nachmittag: "13:00–17:30" },
    { tag: "Mittwoch", vormittag: "08:00–12:00", nachmittag: "13:00–17:30" },
    { tag: "Donnerstag", vormittag: "08:00–12:00", nachmittag: "13:00–17:30" },
    { tag: "Freitag", vormittag: "08:00–12:00", nachmittag: "13:00–16:00" },
    { tag: "Samstag", vormittag: "Nach Vereinbarung", geschlossen: false },
    { tag: "Sonntag", geschlossen: true },
  ],
  leistungen: [
    {
      slug: "reifenwechsel",
      titel: "Reifenwechsel & Einlagerung",
      kurz: "Saisonaler Wechsel inklusive Wuchten und sicherer Einlagerung.",
      beschreibung:
        "Wir wechseln, wuchten und lagern Deine Reifen fachgerecht ein. Inklusive Profilkontrolle, Luftdruck-Check und Drehmoment nach Herstellervorgabe.",
      bild: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?q=80&w=1200&auto=format&fit=crop",
      icon: "Disc3",
      highlights: ["Wuchten inklusive", "Sichere Einlagerung", "Profil-Check"],
    },
    {
      slug: "hauptuntersuchung",
      titel: "Hauptuntersuchung (TÜV)",
      kurz: "TÜV & AU direkt bei uns – ohne Umwege und ohne Wartezeit.",
      beschreibung:
        "Wir machen Dein Fahrzeug fit für die HU/AU und führen die Prüfung direkt im Haus durch. Mängel werden sofort dokumentiert und auf Wunsch behoben.",
      bild: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop",
      icon: "BadgeCheck",
      highlights: ["HU & AU im Haus", "Direkt-Termine", "Mängelbehebung sofort"],
    },
    {
      slug: "unfallinstandsetzung",
      titel: "Unfallinstandsetzung",
      kurz: "Karosserie, Lack und Abwicklung mit der Versicherung.",
      beschreibung:
        "Von der Schadenaufnahme über die Reparatur bis zur Abwicklung mit Deiner Versicherung – wir kümmern uns um alles und bringen Dein Auto wieder in Bestform.",
      bild: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?q=80&w=1200&auto=format&fit=crop",
      icon: "ShieldCheck",
      highlights: ["Versicherungs-Abwicklung", "Karosserie & Lack", "Ersatzwagen"],
    },
    {
      slug: "klimaanlage",
      titel: "Klimaanlagen-Service",
      kurz: "Wartung, Desinfektion und Befüllung für kühle Köpfe.",
      beschreibung:
        "Klimaservice mit Dichtigkeitsprüfung, Trocknerwechsel und neuem Kältemittel. Für R134a und R1234yf.",
      bild: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
      icon: "Snowflake",
      highlights: ["R134a & R1234yf", "Desinfektion", "Dichtigkeitsprüfung"],
    },
    {
      slug: "achsvermessung",
      titel: "Achsvermessung",
      kurz: "3D-Vermessung für gleichmäßigen Reifenverschleiß.",
      beschreibung:
        "Mit modernster 3D-Technik vermessen wir Deine Achsen und korrigieren Spur, Sturz und Nachlauf nach Herstellervorgabe.",
      bild: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=1200&auto=format&fit=crop",
      icon: "Crosshair",
      highlights: ["3D-Vermessung", "Spur, Sturz, Nachlauf", "Protokoll inkl."],
    },
    {
      slug: "bremsen",
      titel: "Bremsen- & Auspuff-Service",
      kurz: "Sicherheit zuerst – Bremsen, Beläge, Auspuff.",
      beschreibung:
        "Wir prüfen Beläge, Scheiben, Bremsflüssigkeit und Auspuffanlage. Inklusive Original- oder Markenersatzteilen mit Garantie.",
      bild: "https://images.unsplash.com/photo-1635527054193-9ba85b6a9b16?q=80&w=1200&auto=format&fit=crop",
      icon: "DiscAlbum",
      highlights: ["Original-Ersatzteile", "Garantie", "Bremsflüssigkeit"],
    },
    {
      slug: "inspektion",
      titel: "Inspektion nach Herstellervorgabe",
      kurz: "Mit Stempel im Serviceheft, Garantie bleibt erhalten.",
      beschreibung:
        "Wir führen alle Inspektionen nach Vorgaben des Herstellers durch – mit Original-Ersatzteilen und korrekter Dokumentation im Serviceheft.",
      bild: "https://images.unsplash.com/photo-1632823471565-1ecdf5c1e524?q=80&w=1200&auto=format&fit=crop",
      icon: "ClipboardCheck",
      highlights: ["Garantie-Erhalt", "Original-Teile", "Service-Stempel"],
    },
    {
      slug: "diagnose",
      titel: "Fehlerdiagnose",
      kurz: "Marken-Diagnosegeräte für alle Hersteller.",
      beschreibung:
        "Bei Warnleuchten oder unklaren Symptomen finden wir mit moderner Diagnosetechnik die Ursache – ohne Rätselraten.",
      bild: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200&auto=format&fit=crop",
      icon: "ScanSearch",
      highlights: ["Marken-Tester", "Live-Daten", "Fehlerspeicher"],
    },
    {
      slug: "elektronik",
      titel: "Fahrzeug-Elektronik",
      kurz: "Steuergeräte, Sensoren, Assistenzsysteme.",
      beschreibung:
        "Von der Batterie über das Steuergerät bis zur Assistenz-Kalibrierung – wir beherrschen die moderne Fahrzeug-Elektronik.",
      bild: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
      icon: "Cpu",
      highlights: ["Steuergeräte", "Sensoren", "Assistenz-Kalibrierung"],
    },
    {
      slug: "oelwechsel",
      titel: "Ölwechsel & Filter",
      kurz: "Schnell, sauber, nach Herstellerfreigabe.",
      beschreibung:
        "Schneller Ölservice mit Markenölen und passendem Filter. Auf Wunsch mit kompletter Filterrunde (Luft, Innenraum, Kraftstoff).",
      bild: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=1200&auto=format&fit=crop",
      icon: "Droplets",
      highlights: ["Markenöle", "Hersteller-Freigabe", "Komplett-Filter"],
    },
    {
      slug: "glas",
      titel: "Steinschlag & Scheibentausch",
      kurz: "Reparatur oder Austausch – Abwicklung inklusive.",
      beschreibung:
        "Wir reparieren Steinschläge oder tauschen die Frontscheibe und wickeln den Schaden direkt mit Deiner Versicherung ab.",
      bild: "https://images.unsplash.com/photo-1622653901434-3f9aa42cda22?q=80&w=1200&auto=format&fit=crop",
      icon: "Square",
      highlights: ["Versicherungs-Abwicklung", "Direktreparatur", "Glasgarantie"],
    },
    {
      slug: "hol-und-bring",
      titel: "Hol- & Bring-Service",
      kurz: "Wir holen Dein Auto ab – Du sparst Zeit.",
      beschreibung:
        "Auf Wunsch holen wir Dein Auto bei Dir zu Hause oder am Arbeitsplatz ab und bringen es nach der Reparatur wieder zurück.",
      bild: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
      icon: "Truck",
      highlights: ["Im Umkreis kostenlos", "Auf Wunsch Ersatzwagen", "Komfort"],
    },
  ],
  kennzahlen: [
    { label: "Reifenwechsel", wert: 5000, suffix: "+" },
    { label: "Unfall-Instandsetzungen", wert: 1200, suffix: "+" },
    { label: "Hauptuntersuchungen", wert: 3500, suffix: "+" },
  ],
  trust: [
    {
      titel: "Erfahrenes Personal",
      text: "Unsere Kfz-Meister und Mechatroniker bringen jahrzehntelange Erfahrung mit – an jedem Hebebühnen-Platz.",
      icon: "Users",
    },
    {
      titel: "Moderne Technik",
      text: "Marken-Diagnosegeräte, 3D-Achsvermessung und Hebebühnen auf dem neuesten Stand.",
      icon: "Wrench",
    },
    {
      titel: "Schneller Service",
      text: "Termine kurzfristig, Reparaturen in der Regel am selben Tag erledigt. Auf Wunsch mit Ersatzwagen.",
      icon: "Zap",
    },
  ],
  features: [
    {
      titel: "Alle Marken",
      text: "Von Audi bis VW – wir warten und reparieren herstellerübergreifend.",
      icon: "Car",
    },
    {
      titel: "Original-Ersatzteile",
      text: "Auf Wunsch Original- oder hochwertige Markenersatzteile.",
      icon: "Package",
    },
    {
      titel: "Garantie-Erhalt",
      text: "Inspektionen nach Herstellervorgabe – Deine Garantie bleibt bestehen.",
      icon: "ShieldCheck",
    },
    {
      titel: "Ersatzwagen",
      text: "Mobil bleiben während der Reparatur. Reservierung im Voraus möglich.",
      icon: "KeyRound",
    },
    {
      titel: "Faire Preise",
      text: "Transparenter Kostenvoranschlag – kein böses Erwachen an der Kasse.",
      icon: "Receipt",
    },
    {
      titel: "Kundennähe",
      text: "Wir reden Klartext, ohne Fachchinesisch. Versprochen.",
      icon: "Handshake",
    },
  ],
  marqueeBegriffe: [
    "Klimaanlagen-Wartung",
    "Achsvermessung",
    "Bremsen-Service",
    "Auspuff-Service",
    "Hauptuntersuchung",
    "Reifenwechsel",
    "Unfallinstandsetzung",
    "Diagnose",
    "Inspektion",
    "Ölwechsel",
    "Steinschlag-Reparatur",
    "Hol- & Bring-Service",
  ],
  partner: [
    { name: "TÜV Süd", logo: "/images/partner/tuev-sued.svg" },
    { name: "KÜS", logo: "/images/partner/kues.svg" },
    { name: "DEKRA", logo: "/images/partner/dekra.svg" },
    { name: "Bosch Service", logo: "/images/partner/bosch.svg" },
    { name: "ATU Partner", logo: "/images/partner/atu.svg" },
  ],
  kundenstimmen: [
    {
      name: "Sabine K.",
      text: "Sehr freundliches Team, faire Preise und alles schnell erledigt. Mein Auto fühlt sich wie neu an. Klare Empfehlung!",
      quelle: "Google",
      bewertung: 5,
    },
    {
      name: "Markus H.",
      text: "Ehrliche Beratung ohne überflüssige Arbeiten. Die HU wurde direkt im Haus gemacht, kein Hin und Her.",
      quelle: "Google",
      bewertung: 5,
    },
    {
      name: "Andrea B.",
      text: "Nach einem Unfall habe ich mein Auto hingebracht – alles mit der Versicherung abgewickelt, ich musste mich um nichts kümmern.",
      quelle: "Google",
      bewertung: 5,
    },
  ],
  faq: [
    {
      frage: "Reparieren Sie auch Fahrzeuge anderer Marken?",
      antwort:
        "Ja. Wir sind eine markenunabhängige Werkstatt und betreuen Fahrzeuge nahezu aller Hersteller. Wir arbeiten mit Original- oder hochwertigen Marken-Ersatzteilen – auf Deinen Wunsch.",
    },
    {
      frage: "Bleibt meine Herstellergarantie erhalten?",
      antwort:
        "Ja. Wir führen Inspektionen nach Herstellervorgabe durch und dokumentieren alles im Serviceheft. Deine Neuwagengarantie bleibt vollständig erhalten.",
    },
    {
      frage: "Kann ich während der Reparatur einen Ersatzwagen bekommen?",
      antwort:
        "Selbstverständlich. Wir stellen Dir bei Reparaturen, die länger dauern, gerne einen Ersatzwagen zur Verfügung. Bitte reserviere ihn bei der Terminvereinbarung.",
    },
    {
      frage: "Wie schnell bekomme ich einen Termin?",
      antwort:
        "In der Regel innerhalb weniger Tage. Für schnelle Services wie Reifenwechsel oder Ölwechsel oft schon am Folgetag. Ruf einfach an oder nutze das Online-Formular.",
    },
    {
      frage: "Bekomme ich vorab einen Kostenvoranschlag?",
      antwort:
        "Ja, immer. Bevor wir loslegen, erhältst Du einen transparenten Kostenvoranschlag. Wenn unterwegs zusätzliche Arbeiten nötig sind, sprechen wir das ab.",
    },
    {
      frage: "Bieten Sie einen Hol- und Bringservice?",
      antwort:
        "Ja, im Umkreis von 15 km kostenlos. Wir holen Dein Fahrzeug ab und bringen es nach Abschluss wieder zurück.",
    },
  ],
  news: [
    {
      slug: "winterreifen-pflicht-2025",
      titel: "Winterreifen-Pflicht: Was Du in dieser Saison wissen musst",
      datum: "2026-04-12",
      excerpt:
        "Mit dem Wechsel auf Winterreifen schützt Du Dich und andere. Wir erklären, worauf es bei Profil, M+S- und Alpine-Symbol ankommt.",
      bild: "https://images.unsplash.com/photo-1488376739360-12fcb78ed47e?q=80&w=1200&auto=format&fit=crop",
      inhalt:
        "Sobald die Temperaturen unter 7 Grad fallen, sind Winterreifen die sicherere Wahl. In Deutschland gilt situative Winterreifenpflicht: Bei Glatteis, Schneeglätte, Schneematsch, Reif- oder Eisglätte sind Reifen mit Alpine-Symbol Pflicht. Wir checken Profiltiefe und Alter, lagern Deine Sommerreifen sicher ein und sind innerhalb weniger Tage terminbereit.",
    },
    {
      slug: "klimaservice-im-fruehjahr",
      titel: "Klimaservice im Frühjahr: Warum jetzt der richtige Zeitpunkt ist",
      datum: "2026-03-22",
      excerpt:
        "Bevor die heißen Tage kommen, lohnt sich ein Klimaservice. Wir zeigen, was dazugehört und worauf Du achten solltest.",
      bild: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
      inhalt:
        "Eine Klimaanlage verliert pro Jahr rund 10% Kältemittel. Spätestens alle zwei Jahre solltest Du einen Klimaservice machen – das umfasst Dichtigkeitsprüfung, Trocknerwechsel und das Auffüllen von Kältemittel. Auf Wunsch desinfizieren wir Verdampfer und Innenraum, damit Bakterien und Gerüche keine Chance haben.",
    },
    {
      slug: "tuev-vorbereitung-tipps",
      titel: "5 Tipps für die TÜV-Vorbereitung",
      datum: "2026-02-18",
      excerpt:
        "Mit ein paar einfachen Checks erhöhst Du die Chance, ohne Mängel durch die HU zu kommen. Wir zeigen die wichtigsten Punkte.",
      bild: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop",
      inhalt:
        "Vor der HU lohnt sich ein kurzer Selbst-Check: Funktionieren alle Leuchten? Ist das Profil der Reifen ausreichend? Sind die Wischerblätter in Ordnung? Hat das Auto Öl oder andere Flüssigkeiten verloren? Wenn Du Dir unsicher bist, machen wir vor dem TÜV-Termin gerne einen Vor-Check und beheben kleinere Mängel direkt.",
    },
  ],
  socialLinks: [
    { plattform: "Google", url: "https://www.google.com/maps" },
    { plattform: "Facebook", url: "https://www.facebook.com" },
    { plattform: "Instagram", url: "https://www.instagram.com" },
  ],
  theme: {
    primary: "220 30% 12%",
    primaryForeground: "0 0% 98%",
    accent: "18 92% 55%",
    accentForeground: "0 0% 100%",
  },
};
