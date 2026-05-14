"use client";

import { motion } from "framer-motion";

const items = [
  "Klimaanlagen-Wartung KFZ",
  "Achsvermessung Sonthofen",
  "Bremsen- und Auspuff-Service",
  "Unfallinstandsetzung Oberallgäu",
  "Reifenservice in Sonthofen",
  "TÜV und Abgasuntersuchung",
];

function Row({
  duration,
  reverse = false,
}: {
  duration: number;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-12 pr-12"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide text-muted/30 hover:text-accent transition-colors whitespace-nowrap select-none"
          >
            {item}
            <span className="text-accent/40 ml-12">&bull;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-dark border-y border-border overflow-hidden py-8 space-y-3">
      <Row duration={30} />
      <Row duration={40} reverse />
    </section>
  );
}
