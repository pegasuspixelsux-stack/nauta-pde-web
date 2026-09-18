"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TABS, type TabId } from "@/lib/portEcosystem";

const EASE = [0.22, 1, 0.36, 1] as const;

function TabIcon({ id, className }: { id: TabId; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (id) {
    case "classifieds":
      return (
        <svg {...common}>
          <path d="M3 15h18l-2 5H5l-2-5Z" />
          <path d="M6 15V6l6-3 6 3v9" />
          <path d="M9 15V9h6v6" />
        </svg>
      );
    case "services":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z" />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <path d="M3 9.5 12 4l9 5.5" />
          <path d="M5 10v9h14v-9" />
          <path d="M10 19v-6h4v6" />
        </svg>
      );
    case "gastronomy":
      return (
        <svg {...common}>
          <path d="M7 3v7a2 2 0 1 0 4 0V3" />
          <path d="M9 10v11" />
          <path d="M16 3c-1.2 0-2 1.5-2 4s.8 4 2 4v10" />
        </svg>
      );
    case "supplies":
      return (
        <svg {...common}>
          <path d="M20.5 11.5 12.5 3.5a1.5 1.5 0 0 0-2.1 0L3.5 10.4a1.5 1.5 0 0 0 0 2.1l8 8a1.5 1.5 0 0 0 2.1 0l6.9-6.9a1.5 1.5 0 0 0 0-2.1Z" />
          <circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "groceries":
      return (
        <svg {...common}>
          <path d="M6 8h15l-1.5 9h-12z" />
          <path d="M6 8 4.5 4H2" />
          <path d="M9.5 12.5v3" />
          <path d="M14.5 12.5v3" />
        </svg>
      );
    case "lodging":
      return (
        <svg {...common}>
          <path d="M3 19v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
          <path d="M3 15h18" />
          <path d="M7 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3" />
        </svg>
      );
    case "car-rental":
      return (
        <svg {...common}>
          <path d="M4 16V11l2-5h12l2 5v5" />
          <path d="M4 16h16" />
          <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "crew":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
          <path d="M16 8.2a2.7 2.7 0 1 1 0 5.4" />
          <path d="M17 14.6c2.4.4 4 2.2 4 5.4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-neutral-950 pb-24 pt-40 sm:pb-32"
    >
      <Image
        src="https://images.unsplash.com/photo-1642985867592-0d63c6c84609?auto=format&fit=crop&w=2400&q=80"
        alt="Vista amplia del agua y el perfil de la ciudad de Punta del Este"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-neutral-950/28 to-neutral-950/5"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/20 via-transparent to-neutral-950/20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950/40 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 text-[13px] font-medium tracking-[0.25em] text-white/70"
        >
          PUERTO DE PUNTA DEL ESTE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="max-w-5xl text-balance text-4xl font-semibold -tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          El gran epicentro náutico en el sur de América Latina.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          Yates a motor y veleros de altura, curados, ofrecidos a unos
          pocos exigentes a lo largo de la costa más exclusiva del
          Atlántico.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex w-full max-w-xl items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1.5 pl-5 backdrop-blur-md transition-colors duration-200 focus-within:border-white/40"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 shrink-0 text-white/60"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Buscá yates, servicios, restaurantes..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-neutral-900 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]"
          >
            Buscar
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
          className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-5"
        >
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href="#fleet"
              onClick={() => onChange(tab.id)}
              className={`flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 active:scale-[0.97] ${
                active === tab.id
                  ? "bg-white text-neutral-900"
                  : "border border-white/25 text-white/80 backdrop-blur-sm hover:border-white/50 hover:text-white"
              }`}
            >
              <TabIcon id={tab.id} className="h-3.5 w-3.5 shrink-0" />
              {tab.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
