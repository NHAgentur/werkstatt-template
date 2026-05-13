import { werkstatt } from "@/lib/werkstatt.config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.deine-werkstatt.de";

const dayMap: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

function parseSpec(tag: string, vor?: string, nach?: string, closed?: boolean) {
  if (closed) return null;
  const ranges: string[] = [];
  const push = (r?: string) => {
    if (!r) return;
    const cleaned = r.replace("–", "-").replace(/\s/g, "");
    if (/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(cleaned)) ranges.push(cleaned);
  };
  push(vor);
  push(nach);
  if (ranges.length === 0) return null;
  return ranges.map((range) => {
    const [open, close] = range.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayMap[tag] ?? tag}`,
      opens: open,
      closes: close,
    };
  });
}

export function LocalBusinessJsonLd() {
  const openingHours = werkstatt.oeffnungszeiten
    .flatMap((o) => parseSpec(o.tag, o.vormittag, o.nachmittag, o.geschlossen))
    .filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteUrl}/#business`,
    name: werkstatt.name,
    image: werkstatt.heroBild,
    url: siteUrl,
    telephone: werkstatt.kontakt.telefon,
    email: werkstatt.kontakt.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: werkstatt.kontakt.strasse,
      postalCode: werkstatt.kontakt.plz,
      addressLocality: werkstatt.kontakt.ort,
      addressCountry: werkstatt.kontakt.land,
    },
    geo: werkstatt.kontakt.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: werkstatt.kontakt.geo.lat,
          longitude: werkstatt.kontakt.geo.lng,
        }
      : undefined,
    openingHoursSpecification: openingHours,
    foundingDate: `${werkstatt.gruendungsjahr}-01-01`,
    founder: { "@type": "Person", name: werkstatt.inhaber },
    sameAs: werkstatt.socialLinks?.map((s) => s.url),
    areaServed: werkstatt.region,
    makesOffer: werkstatt.leistungen.map((l) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: l.titel, description: l.kurz },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: werkstatt.region,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
