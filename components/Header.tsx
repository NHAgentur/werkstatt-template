"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { services, contact } from "@/lib/services";

const navItems = [
  { label: "Über uns", href: "#mission" },
  { label: "Leistungen", href: "#leistungen", hasDropdown: true },
  { label: "News", href: "#news" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-3xl font-bold text-accent leading-none"
          aria-label="R&W Kfz-Service Startseite"
        >
          R&amp;W
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors py-2"
                  aria-expanded={dropdownOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-card border border-border rounded-lg shadow-2xl p-2 grid grid-cols-2 gap-1 w-[520px]">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <a
                              key={s.slug}
                              href={`#leistungen`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-dark transition-colors group"
                            >
                              <Icon className="w-4 h-4 text-accent shrink-0" />
                              <span className="text-sm group-hover:text-accent transition-colors">
                                {s.title}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors py-2"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors rounded-md px-5 py-2 text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            {contact.phone}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menü öffnen"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-card border-l border-border z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-display text-2xl font-bold text-accent">
                  R&amp;W
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Menü schließen"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium hover:text-accent border-b border-border"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <p className="text-xs uppercase tracking-widest text-muted mb-3">
                    Leistungen
                  </p>
                  <ul className="space-y-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <a
                          href="#leistungen"
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-muted hover:text-accent block py-1"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="p-6 border-t border-border">
                <a
                  href={contact.phoneHref}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover transition-colors rounded-md px-5 py-3 text-sm font-semibold w-full"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
