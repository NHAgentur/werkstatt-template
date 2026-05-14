"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";

const gridBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M40 0H0V40' fill='none' stroke='%23333333' stroke-width='1' opacity='0.4'/></svg>\")";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-dark"
      style={{ backgroundImage: gridBg }}
    >
      <div className="absolute inset-x-0 -bottom-32 h-[420px] pointer-events-none">
        <div className="mx-auto h-full w-[900px] max-w-full rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark pointer-events-none" />

      <div className="container mx-auto px-6 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Reparatur, Service, TÜV
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.05] text-main">
              Alles für Dein Auto im Allgäu
            </h1>
            <p className="text-lg text-muted max-w-md leading-relaxed">
              R&amp;W KFZ-Service &ndash; Ihre Autowerkstatt in Sonthofen
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors rounded-md px-6 py-3 text-sm font-semibold"
              >
                Termin vereinbaren
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-main transition-colors rounded-md px-6 py-3 text-sm font-semibold"
              >
                Leistungen ansehen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-card via-dark to-card shadow-2xl">
              <Image
                src="https://placehold.co/1200x900/222222/ff6b1a/png?text=Auto-Hero-Image"
                alt="R&W Kfz-Service Hero-Bild Platzhalter"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,107,26,0.18),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted gap-3 pointer-events-none">
                <Wrench
                  className="w-16 h-16 text-accent/80"
                  strokeWidth={1.2}
                />
                <p className="font-display text-2xl uppercase tracking-widest">
                  Auto-Hero-Image
                </p>
                <p className="text-xs text-muted/80">
                  Platzhalter &ndash; Originalbild folgt
                </p>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
            </div>

            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-card border border-border rounded-xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-display font-bold text-accent leading-none">
                30+
              </p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">
                Jahre Erfahrung
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
