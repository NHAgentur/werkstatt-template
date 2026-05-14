"use client";

import { motion } from "framer-motion";

const partners = ["TÜV SÜD", "KÜS", "DEKRA"];

export default function Partners() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {partners.map((name) => (
            <div
              key={name}
              className="w-[200px] h-[80px] bg-dark border border-border rounded-md flex items-center justify-center opacity-60 hover:opacity-100 hover:border-accent grayscale hover:grayscale-0 transition-all"
            >
              <span className="font-display text-2xl font-bold tracking-wider text-main">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
