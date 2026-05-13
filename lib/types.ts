export type Leistung = {
  slug: string;
  titel: string;
  kurz: string;
  beschreibung: string;
  bild: string;
  icon?: string;
  highlights?: string[];
};

export type Oeffnungszeit = {
  tag: string;
  vormittag?: string;
  nachmittag?: string;
  geschlossen?: boolean;
};

export type Kontakt = {
  telefon: string;
  telefonFormatiert: string;
  email: string;
  strasse: string;
  plz: string;
  ort: string;
  land: string;
  geo?: { lat: number; lng: number };
  googleProfil?: string;
};

export type Kundenstimme = {
  name: string;
  text: string;
  quelle: "Google" | "Facebook" | "Yelp" | string;
  bewertung?: number;
};

export type NewsItem = {
  slug: string;
  titel: string;
  datum: string;
  excerpt: string;
  bild: string;
  inhalt: string;
};

export type Partner = {
  name: string;
  logo: string;
  url?: string;
};

export type FaqEintrag = {
  frage: string;
  antwort: string;
};

export type Kennzahl = {
  label: string;
  wert: number;
  suffix?: string;
};

export type TrustPillar = {
  titel: string;
  text: string;
  icon: string;
};

export type FeatureKachel = {
  titel: string;
  text: string;
  icon: string;
};

export type Theme = {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
};

export type WerkstattConfig = {
  name: string;
  kurzName: string;
  slogan: string;
  inhaber: string;
  inhaberRolle: string;
  inhaberPortrait: string;
  gruendungsjahr: number;
  region: string;
  beschreibungKurz: string;
  beschreibungLang: string;
  logo: string;
  heroBild: string;
  kontakt: Kontakt;
  oeffnungszeiten: Oeffnungszeit[];
  leistungen: Leistung[];
  kennzahlen: Kennzahl[];
  trust: TrustPillar[];
  features: FeatureKachel[];
  marqueeBegriffe: string[];
  partner: Partner[];
  kundenstimmen: Kundenstimme[];
  faq: FaqEintrag[];
  news: NewsItem[];
  socialLinks?: { plattform: string; url: string }[];
  theme: Theme;
};
