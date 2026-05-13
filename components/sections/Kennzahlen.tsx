"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { werkstatt } from "@/lib/werkstatt.config";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [val, setVal] = React.useState(reduce ? to : 0);

  React.useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export function Kennzahlen() {
  return (
    <section className="relative bg-primary py-20 text-primary-foreground md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid bg-[length:22px_22px] opacity-10"
      />
      <div className="container relative grid gap-10 sm:grid-cols-3">
        {werkstatt.kennzahlen.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center sm:text-left"
          >
            <div className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
              <Counter to={k.wert} suffix={k.suffix} />
            </div>
            <div className="mt-3 text-sm uppercase tracking-[0.18em] text-primary-foreground/70">
              {k.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
