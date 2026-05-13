import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";
import type { Leistung } from "@/lib/types";

type Props = {
  limit?: number;
  zeigeAlleLink?: boolean;
  items?: Leistung[];
};

export function Leistungen({ limit, zeigeAlleLink = true, items }: Props) {
  const list = (items ?? werkstatt.leistungen).slice(0, limit);

  return (
    <section id="leistungen" className="bg-background py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Unsere Leistungen für alle Automarken"
            description="Von der schnellen Inspektion bis zur kompletten Unfallinstandsetzung – wir kümmern uns um alles, was Dein Fahrzeug braucht."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((l, i) => (
            <Reveal key={l.slug} as="li" delay={i * 0.04}>
              <Link
                href={`/service/${l.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={l.bild}
                    alt={l.titel}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight">
                    {l.titel}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {l.kurz}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Zur Leistung
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        {zeigeAlleLink && !limit && (
          <div className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              Alle Leistungen ansehen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
