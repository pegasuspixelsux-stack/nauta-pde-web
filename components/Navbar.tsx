"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { TABS, type TabId } from "@/lib/portEcosystem";

const LINKS = [
  { label: "Flota", href: "/#fleet" },
  { label: "Tiendas", href: "/tiendas" },
  { label: "Herencia", href: "/#heritage" },
  { label: "Consultas", href: "#contact" },
];

export default function Navbar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-neutral-100 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href="/">
          <Logo light={!scrolled} />
        </Link>

        <ul className="hidden items-center gap-10 tab-lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-neutral-600 hover:text-neutral-950"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden tab-lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-[13px] font-medium text-white transition-transform duration-200 ease-out active:scale-[0.96]"
          >
            Visitas Privadas
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Alternar menú de navegación"
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 tab-lg:hidden ${
            scrolled || menuOpen ? "text-neutral-900" : "text-white"
          }`}
        >
          <div className="flex flex-col gap-[5px]">
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="h-px w-5 bg-current"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="h-px w-5 bg-current"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="h-px w-5 bg-current"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-neutral-100 bg-white/95 backdrop-blur-md tab-lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-neutral-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-[13px] font-medium text-white"
                >
                  Visitas Privadas
                </a>
              </li>
            </ul>

            <div className="border-t border-neutral-100 px-6 py-4">
              <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-neutral-400">
                EL ECOSISTEMA DEL PUERTO
              </p>
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <Link
                    key={tab.id}
                    href="/#fleet"
                    onClick={() => {
                      onChange(tab.id);
                      setMenuOpen(false);
                    }}
                    className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      active === tab.id
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
