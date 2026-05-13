import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { werkstatt } from "@/lib/werkstatt.config";
import { formatDateDE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News",
  description: `Aktuelle Tipps, Aktionen und News von ${werkstatt.name}.`,
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            News
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            News & Tipps aus der Werkstatt
          </h1>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {werkstatt.news.map((n, i) => (
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {formatDateDE(n.datum)}
                    </span>
                    <h2 className="font-display text-xl font-bold leading-tight tracking-tight">
                      {n.titel}
                    </h2>
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
    </>
  );
}
