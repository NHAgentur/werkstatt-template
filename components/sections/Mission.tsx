"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { User } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Mission() {
  return (
    <section id="mission" className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden bg-card border border-border">
              <Image
                src="https://placehold.co/600x800/222222/ff6b1a/png?text=Christian+Kling"
                alt="Christian Kling – Geschäftsführung Platzhalter"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,107,26,0.12),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted pointer-events-none">
                <div className="w-32 h-32 rounded-full bg-dark/80 backdrop-blur border border-border flex items-center justify-center">
                  <User
                    className="w-16 h-16 text-accent/80"
                    strokeWidth={1.2}
                  />
                </div>
                <p className="font-display text-lg uppercase tracking-widest">
                  Christian Kling
                </p>
                <p className="text-xs text-muted/80">
                  Portrait &ndash; Platzhalter
                </p>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-20 bg-gradient-to-t from-dark to-transparent" />
            </div>
            <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <p className="text-xs uppercase tracking-widest text-muted">
                Geschäftsführung
              </p>
              <p className="font-display text-2xl font-bold text-main mt-1">
                Christian Kling
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.25em] text-accent font-medium"
            >
              Qualität und Service für jedes Auto
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl lg:text-5xl leading-tight text-main"
            >
              Unsere Mission bei R&amp;W
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted text-base lg:text-lg leading-relaxed"
            >
              Seit über 30 Jahren steht R&amp;W KFZ-Service für Vertrauen, Qualität und
              Leidenschaft. Als erfahrene Autowerkstatt in Sonthofen und dem
              Oberallgäu reparieren wir Autos aller Marken mit Hingabe und
              modernster Technik. Unser Ziel ist es, jedem Kunden den besten
              Service zu bieten &ndash; von der Unfallinstandsetzung über TÜV
              und Inspektionen nach Herstellervorgabe bis hin zum
              Reifenservice.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-border max-w-md"
            >
              <div>
                <p className="font-display text-2xl font-bold text-accent">30+</p>
                <p className="text-xs uppercase tracking-wider text-muted mt-1">
                  Jahre
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent">
                  Alle
                </p>
                <p className="text-xs uppercase tracking-wider text-muted mt-1">
                  Marken
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent">100%</p>
                <p className="text-xs uppercase tracking-wider text-muted mt-1">
                  Hingabe
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
