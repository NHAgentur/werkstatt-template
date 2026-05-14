"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { contact } from "@/lib/services";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-card border-y border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-6 py-20 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
            Wir kümmern uns um Ihr Auto
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-main">
            Wir sind für dich da
          </h2>
          <p className="text-lg md:text-xl text-muted">
            Jederzeit erreichbar
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover transition-all rounded-md px-8 md:px-10 py-4 md:py-5 text-xl md:text-2xl font-display font-bold shadow-xl hover:shadow-accent/30 hover:scale-[1.02]"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7" />
              {contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
