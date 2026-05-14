"use client";

import { motion, type Variants } from "framer-motion";
import {
  Wrench,
  Disc3,
  Snowflake,
  Compass,
  ShieldCheck,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const highlights: Highlight[] = [
  {
    icon: Wrench,
    title: "Unfallinstandsetzung",
    text: "Karosserie- und Lackarbeiten nach Unfall – sauber und passgenau.",
  },
  {
    icon: Disc3,
    title: "Bremsen- & Reifenservice",
    text: "Bremsenprüfung, Beläge, Scheiben und kompletter Reifenservice.",
  },
  {
    icon: Snowflake,
    title: "Klimaanlagen-Wartung",
    text: "Desinfektion, Kältemittel-Service, Lecksuche und Reparatur.",
  },
  {
    icon: Compass,
    title: "Achsvermessung",
    text: "3D-Achsvermessung für sicheres Fahrverhalten und gleichmäßigen Reifenverschleiß.",
  },
  {
    icon: ShieldCheck,
    title: "TÜV & AU",
    text: "Vorbereitung und Begleitung der Hauptuntersuchung samt Abgasprüfung.",
  },
  {
    icon: Cpu,
    title: "Computerdiagnose",
    text: "Auslesen von Fehlerspeichern aller gängigen Marken und Modelle.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Highlights() {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-accent font-medium"
          >
            Unsere Dienstleistungen im Überblick
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight text-main"
          >
            Warum R&amp;W KFZ-Service?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                variants={fadeUp}
                className="group flex gap-5 p-6 rounded-xl border border-border hover:border-accent/50 hover:bg-card transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <Icon
                    className="w-6 h-6 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-main group-hover:text-accent transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
