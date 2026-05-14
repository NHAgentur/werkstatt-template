import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "R&W Kfz-Service Sonthofen — Deine Autowerkstatt im Allgäu",
  description:
    "R&W KFZ-Service in Sonthofen: Reparatur, TÜV, Inspektion, Reifenservice und Unfallinstandsetzung für alle Marken im Oberallgäu. Über 30 Jahre Erfahrung.",
  metadataBase: new URL("https://rw-kfz-service.de"),
  openGraph: {
    title: "R&W Kfz-Service Sonthofen",
    description:
      "Deine Autowerkstatt im Allgäu — Reparatur, Service, TÜV.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${oswald.variable}`}
    >
      <body className="bg-dark text-main font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
