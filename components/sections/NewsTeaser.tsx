import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";
import { formatDateDE } from "@/lib/utils";

export function NewsTeaser() {
  const items = werkstatt.news.slice(0, 3);

  return (
    <section id="news" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Aktuelles"
              title="News & Tipps aus der Werkstatt."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              Alle Beiträge
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={i * 0.05}>
              <Link
                href={`/news/${n.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={n.bild}
                    alt={n.titel}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {formatDateDE(n.datum)}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight">
                    {n.titel}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {n.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
