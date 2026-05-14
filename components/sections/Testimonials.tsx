"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sonja Beck",
    text: "Eine TOP Werkstatt mit sehr freundlichen, hilfsbereiten Leuten.",
  },
  {
    name: "Klaudia Weber",
    text: "Komme seit Jahren mit meinen BMWs hierher &ndash; immer kompetent und ehrlich.",
  },
  {
    name: "S. Mustafa",
    text: "Wir sind durch eine Empfehlung hier gelandet und absolut zufrieden.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-accent font-medium"
          >
            Kundenstimmen
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-main"
          >
            Was unsere Kunden über R&amp;W berichten
          </motion.h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col gap-5 hover:border-accent/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote
                className="text-muted text-base leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: `&bdquo;${t.text}&ldquo;` }}
              />
              <figcaption className="font-display text-lg font-bold text-main pt-3 border-t border-border">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/search/R%26W+KFZ-Service+Sonthofen+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Weitere Bewertungen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
