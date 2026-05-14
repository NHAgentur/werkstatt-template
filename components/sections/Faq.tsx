"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Bietet R&W TÜV und Abgasuntersuchungen an?",
    a: "Ja, wir kümmern uns um die Vorbereitung und Durchführung deiner TÜV-Abnahme sowie der Abgasuntersuchung in Sonthofen.",
  },
  {
    q: "Bietet R&W auch einen Reifenwechsel an?",
    a: "Natürlich. Wir bieten einen umfassenden Reifenservice inklusive Reifenlagerung und -wechsel.",
  },
  {
    q: "Repariert ihr Fahrzeuge nach Herstellervorgaben?",
    a: "Ja, wir führen alle Wartungs- und Reparaturarbeiten nach den Vorgaben des Herstellers durch.",
  },
  {
    q: "Wie kann ich einen Termin vereinbaren?",
    a: "Einfach per Telefon oder über unser Kontaktformular.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg md:text-xl font-semibold text-main group-hover:text-accent transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-9 text-muted text-sm md:text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:sticky lg:top-28"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Antworten zu Leistungen und Services
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-tight text-main">
              Häufige Fragen zu R&amp;W KFZ-Service in Sonthofen
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed">
              Wir beantworten die häufigsten Fragen zu unseren Leistungen
              rund um Reparatur, Inspektion und Service &ndash; transparent
              und immer mit Blick auf dein Fahrzeug.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors rounded-md px-6 py-3 text-sm font-semibold"
            >
              Jetzt kontaktieren
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-xl px-6 md:px-8"
          >
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
