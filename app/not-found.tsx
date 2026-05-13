import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Fehler 404
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Diese Seite gibt&rsquo;s bei uns nicht.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Vielleicht hat sie der Hebebühnen-Mechanismus verschluckt. Kein Problem –
          zurück zum Start:
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Zur Startseite</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/leistungen">Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
