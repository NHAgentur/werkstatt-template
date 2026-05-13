"use client";

import * as React from "react";
import { Mail, MapPin, Phone, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";
import { telHref } from "@/lib/utils";

type Status = "idle" | "sending" | "ok" | "error";

export function KontaktSektion() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Kontakt" title="Hier findest Du uns." />

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="leading-relaxed">
                <div className="font-display font-bold">Adresse</div>
                <div className="text-sm text-muted-foreground">
                  {werkstatt.kontakt.strasse}
                  <br />
                  {werkstatt.kontakt.plz} {werkstatt.kontakt.ort}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div className="leading-relaxed">
                <div className="font-display font-bold">Telefon</div>
                <a
                  href={telHref(werkstatt.kontakt.telefon)}
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  {werkstatt.kontakt.telefonFormatiert}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div className="leading-relaxed">
                <div className="font-display font-bold">E-Mail</div>
                <a
                  href={`mailto:${werkstatt.kontakt.email}`}
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  {werkstatt.kontakt.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                <Clock className="h-5 w-5" />
              </div>
              <div className="leading-relaxed">
                <div className="font-display font-bold">Öffnungszeiten</div>
                <div className="text-sm text-muted-foreground">
                  Mo–Do 08:00–17:30 · Fr 08:00–16:00
                  <br />
                  Sa nach Vereinbarung · So geschlossen
                </div>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="grid gap-4 rounded-3xl border border-border bg-card p-6 md:p-8 sm:grid-cols-2"
          >
            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">Name *</span>
              <Input name="name" required />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">E-Mail *</span>
              <Input name="email" type="email" required />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-sm font-medium">Nachricht *</span>
              <Textarea name="nachricht" required />
            </label>
            <div className="flex items-center gap-4 sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  "Nachricht senden"
                )}
              </Button>
              {status === "ok" && (
                <span className="text-sm font-medium text-emerald-700">
                  Danke! Wir melden uns zurück.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm font-medium text-red-700">
                  Fehler beim Senden – bitte ruf uns an.
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
