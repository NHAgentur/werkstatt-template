import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";

export function FeatureGrid() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Versprechen"
            title="Worauf Du Dich verlassen kannst."
            description="Sechs Punkte, die uns von der Stange unterscheiden – im Alltag, jeden Tag."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {werkstatt.features.map((f, i) => (
            <Reveal as="li" key={f.titel} delay={i * 0.04}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-md">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {f.titel}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
