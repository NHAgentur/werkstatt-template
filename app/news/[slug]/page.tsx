import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { werkstatt } from "@/lib/werkstatt.config";
import { formatDateDE } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return werkstatt.news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const n = werkstatt.news.find((x) => x.slug === params.slug);
  if (!n) return {};
  return {
    title: n.titel,
    description: n.excerpt,
    openGraph: { title: n.titel, description: n.excerpt, images: [n.bild] },
  };
}

export default function NewsDetail({ params }: { params: Params }) {
  const news = werkstatt.news.find((x) => x.slug === params.slug);
  if (!news) notFound();

  return (
    <article className="bg-background py-16 md:py-20">
      <div className="container max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Zu allen News
        </Link>

        <header className="mt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {formatDateDE(news.datum)}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {news.titel}
          </h1>
        </header>

        <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border">
          <Image
            src={news.bild}
            alt={news.titel}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="prose-base text-lg leading-relaxed text-foreground/90">
          {news.inhalt.split("\n\n").map((p, i) => (
            <p key={i} className="mb-6">
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
