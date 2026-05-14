"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

const posts = [
  {
    title: "Unser Qualitätsversprechen",
    date: "Dez. 9, 2024",
    excerpt:
      "Was hinter unserem Anspruch steckt &ndash; und warum Kundinnen und Kunden seit über 30 Jahren auf unsere Arbeit vertrauen.",
    href: "#news",
    image:
      "https://placehold.co/800x500/222222/ff6b1a/png?text=Qualit%C3%A4tsversprechen",
  },
  {
    title: "Jubiläumsfeier bei R&W",
    date: "Sep. 1, 2024",
    excerpt:
      "Drei Jahrzehnte R&W KFZ-Service: Eindrücke vom Jubiläum mit Team, Familien und Wegbegleitern aus dem Allgäu.",
    href: "#news",
    image:
      "https://placehold.co/800x500/222222/ff6b1a/png?text=Jubil%C3%A4umsfeier",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
            Unsere Autowerkstatt in Sonthofen
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-main">
            Neues aus der Werkstatt
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,26,0.18),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Newspaper
                    className="w-16 h-16 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {post.date}
                </div>
                <h3 className="font-display text-2xl font-bold text-main group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p
                  className="text-muted text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <div className="flex items-center gap-1 text-accent text-sm font-semibold pt-2 group-hover:gap-2 transition-all">
                  Weiterlesen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
