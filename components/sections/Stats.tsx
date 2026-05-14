"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 5000, suffix: "+", label: "Reifenwechsel / -service" },
  { value: 1000, suffix: "+", label: "Unfallinstandsetzungen" },
  { value: 10000, suffix: "+", label: "TÜV-Abnahmen begleitet" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [inView, motionValue, to]);

  return (
    <span ref={ref}>
      {display.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-3"
            >
              <p className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-none">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
