"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "Ihr Name", type: "text", required: true },
  {
    name: "email",
    label: "E-Mail-Adresse",
    type: "email",
    required: true,
  },
  { name: "phone", label: "Telefonnummer", type: "tel", required: false },
  { name: "kennzeichen", label: "Kennzeichen", type: "text", required: false },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // Mockup-Verhalten
    // eslint-disable-next-line no-console
    console.log("[Mockup] Termin-Anfrage:", data);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  return (
    <section id="kontakt" className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
            Kontaktformular
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-main">
            Termin vereinbaren
          </h2>
          <p className="text-muted">
            Schreib uns &ndash; wir melden uns zeitnah mit einem
            Terminvorschlag.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8 space-y-5 relative"
        >
          {fields.map((f) => (
            <div key={f.name} className="space-y-1.5">
              <label
                htmlFor={f.name}
                className="block text-xs uppercase tracking-wider text-muted"
              >
                {f.label}
                {f.required && <span className="text-accent ml-1">*</span>}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                className="w-full bg-dark border border-border rounded-md px-4 py-3 text-sm text-main placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>
          ))}

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-muted"
            >
              Ihre Nachricht
              <span className="text-accent ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-dark border border-border rounded-md px-4 py-3 text-sm text-main placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || sent}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-md py-3 text-sm font-semibold"
          >
            {submitting ? (
              "Wird gesendet…"
            ) : (
              <>
                <Send className="w-4 h-4" />
                Nachricht senden
              </>
            )}
          </button>

          <p className="text-xs text-muted/70 text-center">
            Mockup &ndash; Anfragen werden derzeit nur in der Konsole
            ausgegeben.
          </p>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-accent text-main rounded-full px-5 py-2 text-sm font-semibold shadow-xl"
              >
                <CheckCircle2 className="w-4 h-4" />
                Vielen Dank! Wir melden uns.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
