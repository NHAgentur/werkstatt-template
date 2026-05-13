"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, telHref } from "@/lib/utils";
import { werkstatt } from "@/lib/werkstatt.config";

const nav = [
  { label: "Über uns", href: "/werkstatt" },
  { label: "Leistungen", href: "/leistungen", hasMega: true },
  { label: "News", href: "/news" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-all",
        scrolled && "border-border bg-background/95 shadow-sm",
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="flex items-center gap-3" aria-label={werkstatt.name}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-display font-bold">
            {werkstatt.kurzName.slice(0, 1)}
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight">
              {werkstatt.name}
            </span>
            <span className="text-xs text-muted-foreground">{werkstatt.region}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.hasMega && setMegaOpen(true)}
              onMouseLeave={() => item.hasMega && setMegaOpen(false)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
              {item.hasMega && megaOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="grid w-[640px] grid-cols-2 gap-1 rounded-2xl border border-border bg-background p-4 shadow-2xl">
                    {werkstatt.leistungen.slice(0, 8).map((l) => (
                      <Link
                        key={l.slug}
                        href={`/service/${l.slug}`}
                        className="rounded-xl p-3 transition-colors hover:bg-foreground/5"
                      >
                        <div className="font-display text-sm font-semibold">
                          {l.titel}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground line-clamp-1">
                          {l.kurz}
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/leistungen"
                      className="col-span-2 mt-1 rounded-xl bg-accent/10 p-3 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent/15"
                    >
                      Alle Leistungen ansehen →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <a href={telHref(werkstatt.kontakt.telefon)}>
              <Phone className="h-4 w-4" />
              {werkstatt.kontakt.telefonFormatiert}
            </a>
          </Button>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-foreground/5"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href={telHref(werkstatt.kontakt.telefon)}>
                <Phone className="h-4 w-4" />
                {werkstatt.kontakt.telefonFormatiert}
              </a>
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
