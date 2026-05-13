import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";

export function Mission() {
  const jahre = new Date().getFullYear() - werkstatt.gruendungsjahr;

  return (
    <section id="mission" className="bg-background py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-md">
            <Image
              src={werkstatt.inhaberPortrait}
              alt={`${werkstatt.inhaber}, ${werkstatt.inhaberRolle}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <SectionHeading
            eyebrow="Über uns"
            title={
              <>
                Seit über {jahre} Jahren stehen wir für{" "}
                <span className="text-accent">Vertrauen, Qualität & Leidenschaft.</span>
              </>
            }
            description={werkstatt.beschreibungLang}
          />

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent font-display text-xl font-bold">
              {werkstatt.inhaber
                .split(" ")
                .map((s) => s[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">{werkstatt.inhaber}</div>
              <div className="text-sm text-muted-foreground">
                {werkstatt.inhaberRolle}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
