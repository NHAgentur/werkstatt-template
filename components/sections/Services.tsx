"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export default function Services() {
  const visible = services;

  return (
    <section id="leistungen" className="bg-dark relative">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-accent font-medium"
          >
            Von TÜV bis Reifenwechsel
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-main"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted text-lg"
          >
            für alle Automarken
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors rounded-md px-6 py-3 text-sm font-semibold"
            >
              Kontaktiere uns
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.slug}
                href={`#leistungen`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-card via-dark to-card" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,26,0.18),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-dark/60 backdrop-blur border border-border flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                      <Icon
                        className="w-10 h-10 text-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-xl font-bold text-main group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-accent text-sm font-semibold pt-2 group-hover:gap-2 transition-all">
                    Zur Leistung
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
