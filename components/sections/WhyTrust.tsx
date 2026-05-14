"use client";

import { motion, type Variants } from "framer-motion";
import { Wrench, Users, Cog, Zap, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Erfahrenes Personal",
    text: "Geschulte Mechaniker mit jahrzehntelanger Praxis an Fahrzeugen aller Marken.",
  },
  {
    icon: Cog,
    title: "Moderne Technik",
    text: "Diagnosegeräte und Werkzeuge auf aktuellem Stand für jede Reparatur.",
  },
  {
    icon: Zap,
    title: "Schneller Service",
    text: "Termine kurzfristig, transparente Abläufe, klare Kommunikation.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyTrust() {
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
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent font-medium"
          >
            <Wrench className="w-4 h-4" />
            Werkstatt mit Tradition
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight text-main"
          >
            Warum Kunden R&amp;W KFZ-Service vertrauen
          </motion.h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg bg-dark border border-border flex items-center justify-center mb-5 group-hover:border-accent transition-colors">
                  <Icon
                    className="w-7 h-7 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-main mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-muted text-base lg:text-lg leading-relaxed">
            Über drei Jahrzehnte begleiten wir Kundinnen und Kunden im
            Oberallgäu &ndash; mit ehrlicher Beratung, sauberer Arbeit und
            einem Team, dem das eigene Auto genauso wichtig ist wie deins.
          </p>
          <a
            href="#testimonials"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Unsere Kundenstimmen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
