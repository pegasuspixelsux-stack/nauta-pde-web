"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[50vh] items-end overflow-hidden bg-blue-950 pb-10 pt-28 sm:min-h-screen sm:pb-32 sm:pt-40"
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
        className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-950/30 to-blue-950/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-blue-950/25 via-transparent to-blue-950/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-950/45 to-transparent"
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

      </div>

      <motion.a
        href="#welcome"
        aria-label="Desplazarse hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white sm:bottom-10 sm:right-10"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
