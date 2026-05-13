"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendarCheck, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "ok" | "error";

export function TerminFormular() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/termin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Senden fehlgeschlagen");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
      setStatus("error");
    }
  }

  return (
    <section id="termin" className="bg-card py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Termin"
            title={
              <>
                Termin online <span className="text-accent">anfragen.</span>
              </>
            }
            description="Schick uns Dein Anliegen – wir melden uns innerhalb eines Werktags mit einem Vorschlag zurück."
          />
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <div className="text-sm text-muted-foreground">
              Wir reservieren auf Wunsch einen Ersatzwagen oder einen Hol- &
              Bring-Termin.
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="grid gap-4 rounded-3xl border border-border bg-background p-6 md:p-8 sm:grid-cols-2"
          >
            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">Name *</span>
              <Input name="name" required autoComplete="name" />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">Telefon *</span>
              <Input name="telefon" type="tel" required autoComplete="tel" />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">E-Mail *</span>
              <Input name="email" type="email" required autoComplete="email" />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-medium">Kennzeichen</span>
              <Input name="kennzeichen" placeholder="z. B. SO-AB 123" />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-sm font-medium">Anliegen / Wunschtermin *</span>
              <Textarea
                name="nachricht"
                required
                placeholder="Bitte kurz schildern, worum es geht."
              />
            </label>

            <label className="flex items-start gap-3 text-xs text-muted-foreground sm:col-span-2">
              <input
                type="checkbox"
                name="datenschutz"
                required
                className="mt-1 h-4 w-4 rounded border-border"
              />
              <span>
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
                meiner Daten zur Bearbeitung der Anfrage zu.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  "Termin anfragen"
                )}
              </Button>
              {status === "ok" && (
                <span className="text-sm font-medium text-emerald-700">
                  Danke! Wir melden uns zeitnah zurück.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm font-medium text-red-700">
                  {error ?? "Senden fehlgeschlagen. Bitte ruf uns an."}
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
