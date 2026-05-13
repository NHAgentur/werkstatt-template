import { Reveal } from "@/components/ui/reveal";
import { werkstatt } from "@/lib/werkstatt.config";

export function PartnerLogos() {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <Reveal>
          <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Geprüft & vertraut · Unsere Partner
          </div>
        </Reveal>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {werkstatt.partner.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.05}>
              <div className="grid h-14 min-w-[120px] place-items-center rounded-xl border border-border bg-card px-5 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
                <span className="font-display text-sm font-bold tracking-tight text-foreground">
                  {p.name}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
