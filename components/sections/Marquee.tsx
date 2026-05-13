import { werkstatt } from "@/lib/werkstatt.config";

export function Marquee() {
  const list = [...werkstatt.marqueeBegriffe, ...werkstatt.marqueeBegriffe];
  return (
    <section
      aria-label="Service-Begriffe"
      className="border-y border-border bg-card py-6 overflow-hidden"
    >
      <div className="flex w-max gap-12 animate-marquee whitespace-nowrap">
        {list.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="flex items-center gap-12 font-display text-2xl font-bold tracking-tight text-foreground/70 md:text-3xl"
          >
            {b}
            <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
