"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { werkstatt } from "@/lib/werkstatt.config";
import { telHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-[length:22px_22px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Seit {werkstatt.gruendungsjahr} · {werkstatt.region}
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {werkstatt.slogan}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {werkstatt.beschreibungKurz}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <Link href="/kontakt">Termin vereinbaren</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={telHref(werkstatt.kontakt.telefon)}>
                  <Phone className="h-4 w-4" />
                  {werkstatt.kontakt.telefonFormatiert}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >
            <Image
              src={werkstatt.heroBild}
              alt={`Werkstatt-Foto ${werkstatt.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-background/95 p-4 backdrop-blur">
              <div className="leading-tight">
                <div className="font-display text-sm font-bold">
                  {new Date().getFullYear() - werkstatt.gruendungsjahr}+ Jahre Erfahrung
                </div>
                <div className="text-xs text-muted-foreground">
                  Familienbetrieb · Meisterwerkstatt
                </div>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
                ★
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#mission"
        aria-label="Weiter scrollen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground md:inline-flex"
      >
        <span>Mehr entdecken</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
