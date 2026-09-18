"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BodyContent() {
  return (
    <section id="heritage" className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1741183575544-ae96e3c8c221?auto=format&fit=crop&w=1600&q=80"
              alt="Yates de motor de lujo amarrados uno al lado del otro en una marina"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl lg:order-1"
          >
            <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              HERENCIA
            </p>
            <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
              Donde el Río de la Plata se encuentra con el Atlántico.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                Desde hace casi un siglo, Punta del Este es el punto donde
                convergen dos aguas y dos mundos: la corriente calma y
                marrón del Río de la Plata dando paso al azul abierto del
                Atlántico Sur. Es un puerto hecho para las llegadas, y para
                embarcaciones de peso.
              </p>
              <p>
                Nauta PDE se fundó sobre una premisa simple: un yate no se
                compra, se ubica — en las manos correctas, las aguas
                correctas y el amarre correcto. Cada embarcación a nuestro
                cuidado se selecciona por su pedigrí, se inspecciona con un
                estándar transatlántico y se presenta sin pretensiones.
              </p>
              <p>
                Lo que queda es una flota tan cuidada como la costa que
                habita.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
