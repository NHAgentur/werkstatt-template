import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { werkstatt } from "@/lib/werkstatt.config";

export function Trust() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Warum wir?"
            title={
              <>
                Vertrauen, das auf <span className="text-accent">Erfahrung</span> baut.
              </>
            }
            description="Wir kombinieren Meisterhandwerk mit moderner Diagnosetechnik – und einem Team, das Dein Auto so behandelt wie sein eigenes."
          />
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="#kundenstimmen">
                Unsere Kundenstimmen
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-1">
          {werkstatt.trust.map((p, i) => (
            <Reveal key={p.titel} as="li" delay={i * 0.08}>
              <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name={p.icon} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {p.titel}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
