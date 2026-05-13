import type { MetadataRoute } from "next";
import { werkstatt } from "@/lib/werkstatt.config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.deine-werkstatt.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statisch: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, priority: 1 },
    { url: `${siteUrl}/werkstatt`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/leistungen`, lastModified: now, priority: 0.9 },
    { url: `${siteUrl}/news`, lastModified: now, priority: 0.6 },
    { url: `${siteUrl}/kontakt`, lastModified: now, priority: 0.8 },
  ];

  const services = werkstatt.leistungen.map((l) => ({
    url: `${siteUrl}/service/${l.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const news = werkstatt.news.map((n) => ({
    url: `${siteUrl}/news/${n.slug}`,
    lastModified: new Date(n.datum),
    priority: 0.5,
  }));

  return [...statisch, ...services, ...news];
}
