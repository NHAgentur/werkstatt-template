import Link from "next/link";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";

export function Kundenstimmen() {
  return (
    <section id="kundenstimmen" className="bg-card py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Kundenstimmen"
            title="Was unsere Kunden sagen."
            description="Direkt aus Google-Bewertungen – unverändert übernommen."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {werkstatt.kundenstimmen.map((k, i) => (
            <Reveal as="li" key={k.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: k.bewertung ?? 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  &bdquo;{k.text}&ldquo;
                </blockquote>
                <figcaption className="flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="font-display font-bold">{k.name}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {k.quelle}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {werkstatt.kontakt.googleProfil && (
          <div className="mt-10 text-center">
            <Link
              href={werkstatt.kontakt.googleProfil}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              Weitere Bewertungen auf Google ansehen
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
