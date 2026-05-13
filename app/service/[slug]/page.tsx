import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Leistungen } from "@/components/sections/Leistungen";
import { TerminFormular } from "@/components/sections/TerminFormular";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { werkstatt } from "@/lib/werkstatt.config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return werkstatt.leistungen.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const l = werkstatt.leistungen.find((x) => x.slug === params.slug);
  if (!l) return {};
  return {
    title: l.titel,
    description: l.kurz,
    openGraph: { title: l.titel, description: l.kurz, images: [l.bild] },
  };
}

export default function ServiceDetail({ params }: { params: Params }) {
  const leistung = werkstatt.leistungen.find((x) => x.slug === params.slug);
  if (!leistung) notFound();

  const verwandte = werkstatt.leistungen
    .filter((x) => x.slug !== leistung.slug)
    .slice(0, 3);

  return (
    <>
      <ServiceJsonLd name={leistung.titel} description={leistung.beschreibung} />

      <section className="bg-background py-16 md:py-20">
        <div className="container grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Zu allen Leistungen
            </Link>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {leistung.titel}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {leistung.beschreibung}
            </p>

            {leistung.highlights && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {leistung.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-none text-accent" />
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#termin">Termin anfragen</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-md">
              <Image
                src={leistung.bild}
                alt={leistung.titel}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Leistungen items={verwandte} zeigeAlleLink={false} />
      <TerminFormular />
    </>
  );
}
