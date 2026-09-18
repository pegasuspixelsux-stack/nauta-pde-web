"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SECTIONS = [
  {
    title: "Prefectura Nacional Naval",
    items: [
      "Control y seguridad de la navegación en el puerto y sus accesos.",
      "Canal VHF 16: llamadas de auxilio y emergencia.",
      "Canal VHF 14: operaciones portuarias.",
    ],
  },
  {
    title: "Asistencia Médica y Emergencias",
    items: [
      "Protocolo de urgencias médicas a bordo y en tierra.",
      "Emergencias generales: 911.",
      "Prefectura Naval: 106.",
    ],
  },
  {
    title: "Servicio al Público y Autoridades",
    items: [
      "Dirección Nacional de Hidrografía: gestión de amarras y tasas portuarias.",
      "Aduana: trámites de ingreso y egreso para embarcaciones internacionales.",
      "Migraciones: control migratorio de tripulación y pasajeros.",
    ],
  },
  {
    title: "Instalaciones y Servicios Sanitarios",
    items: [
      "Baños públicos y duchas.",
      "Agua potable y energía eléctrica en muelle.",
      "Gestión de residuos.",
      "Estación de combustible.",
    ],
  },
];

export default function PortInfoSection() {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 max-w-2xl sm:mb-20"
        >
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            INFORMACIÓN PORTUARIA
          </p>
          <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Autoridades, seguridad y servicios del puerto.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
            >
              <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-neutral-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
