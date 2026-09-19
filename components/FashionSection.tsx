"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FashionSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-neutral-950">
      <Image
        src="https://images.unsplash.com/photo-1763732481836-81ed0215c648?auto=format&fit=crop&w=2400&q=80"
        alt="Vidrieras iluminadas de boutiques de lujo por la noche"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/50 to-neutral-950/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 text-center sm:px-8 sm:py-40 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 text-[13px] font-medium tracking-[0.25em] text-white/70"
        >
          MODA Y BOUTIQUES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mx-auto max-w-4xl text-balance text-4xl font-semibold -tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Visitá las Casas de Moda Más Exclusivas del Mundo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          Más de 100 boutiques de lujo te esperan en Punta del Este.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-10"
        >
          <a
            href="/tiendas"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-neutral-900 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]"
          >
            Explorar Boutiques
          </a>
        </motion.div>
      </div>
    </section>
  );
}
