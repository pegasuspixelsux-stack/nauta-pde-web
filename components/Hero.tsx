"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-neutral-950 pb-24 pt-40 sm:pb-32"
    >
      <Image
        src="https://images.unsplash.com/photo-1745423099450-2e365ceed37a?auto=format&fit=crop&w=2400&q=80"
        alt="Boats moored in the harbor at Punta del Este under a bright blue sky"
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

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
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
          className="max-w-4xl text-balance text-5xl font-semibold -tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          A private harbor for the world&rsquo;s finest yachts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          Curated motor yachts and bluewater sailing yachts, offered to a
          discerning few along the Atlantic&rsquo;s most exclusive coastline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#fleet"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-neutral-900 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]"
          >
            Explore the Fleet
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/60 active:scale-[0.97]"
          >
            Private Viewings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
