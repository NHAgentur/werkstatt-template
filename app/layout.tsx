import "./globals.css";
import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { werkstatt } from "@/lib/werkstatt.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.deine-werkstatt.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${werkstatt.name} ${werkstatt.kontakt.ort} – Deine Autowerkstatt in ${werkstatt.region}`,
    template: `%s | ${werkstatt.name}`,
  },
  description: werkstatt.beschreibungKurz,
  keywords: [
    "Autowerkstatt",
    "Kfz-Werkstatt",
    "TÜV",
    "Reifenwechsel",
    "Unfallinstandsetzung",
    "Inspektion",
    werkstatt.kontakt.ort,
    werkstatt.region,
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: werkstatt.name,
    title: `${werkstatt.name} – ${werkstatt.slogan}`,
    description: werkstatt.beschreibungKurz,
    url: siteUrl,
    images: [{ url: werkstatt.heroBild }],
  },
  twitter: {
    card: "summary_large_image",
    title: werkstatt.name,
    description: werkstatt.beschreibungKurz,
    images: [werkstatt.heroBild],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeStyle = {
    "--primary": werkstatt.theme.primary,
    "--primary-foreground": werkstatt.theme.primaryForeground,
    "--accent": werkstatt.theme.accent,
    "--accent-foreground": werkstatt.theme.accentForeground,
  } as React.CSSProperties;

  return (
    <html lang="de-DE" className={`${inter.variable} ${manrope.variable}`}>
      <body style={themeStyle}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
