"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WelcomeSection() {
  return (
    <section id="welcome" className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              BIENVENIDA
            </p>
            <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
              Bienvenidos a Punta del Este.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                Entre el Río de la Plata y el Atlántico, Punta del Este
                combina playas de arena blanca, una vida nocturna
                sofisticada y el puerto deportivo más importante de
                Sudamérica. Un destino donde el lujo y la naturaleza
                conviven sin esfuerzo.
              </p>
              <p>
                Ya sea tu primera visita o un regreso de cada temporada,
                aquí encontrás el punto de partida para explorar todo lo
                que el puerto y la ciudad tienen para ofrecer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1616959313137-186688889054?auto=format&fit=crop&w=1400&q=80"
                alt="Edificios frente al mar en Punta del Este bajo un cielo despejado"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1653898968886-a14171069047?auto=format&fit=crop&w=1400&q=80"
                alt="Playa de Punta del Este con edificios de fondo"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
