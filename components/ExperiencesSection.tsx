"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type ExperienceCategory = {
  label: string;
  image: string;
};

const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    label: "Arte y Cultura",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Deporte y Salud",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Excursiones",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Gastronomía",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Para los Chicos",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="bg-neutral-50 py-32 sm:py-40">
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
              EXPERIENCIAS
            </p>
            <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
              Viví cada momento con las experiencias más top.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p className="font-medium text-neutral-800">
                ¿Qué hacer y ver en el Puerto de Punta del Este?
              </p>
              <p>
                Para quienes buscan experiencias premium, el puerto ofrece a
                sus visitantes una selección de actividades exclusivas en la
                ciudad y sus alrededores. Para los amantes de la velocidad,
                disponemos de autos deportivos de alta gama para recorrer la
                costa y La Barra.
              </p>
              <p>
                Te proponemos también salidas guiadas a la Isla de Lobos,
                hogar de una de las colonias de lobos marinos más grandes
                del mundo, y excursiones de avistamiento de ballenas
                francas australes en temporada. Nuestro equipo de
                Concierge está para asesorarte y ayudarte a elegir tu
                próxima aventura, en pareja, con amigos o en familia.
              </p>
              <p className="font-medium text-neutral-800">
                Disfrutá, nosotros nos encargamos del resto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1649308121953-b70f218ece5b?auto=format&fit=crop&w=1400&q=80"
              alt="Colonia de lobos marinos en la Isla de Lobos, Punta del Este"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-20 sm:mt-24">
          <p className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            MÁS EXPERIENCIAS
          </p>
          <div className="relative -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:-mx-8 lg:-mx-12">
            <motion.div
              className="flex w-max gap-4 px-6 sm:px-8 lg:px-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
            >
              {[...EXPERIENCE_CATEGORIES, ...EXPERIENCE_CATEGORIES].map((category, i) => (
                <div
                  key={`${category.label}-${i}`}
                  className="relative aspect-[3/4] w-64 shrink-0 overflow-hidden rounded-xl sm:w-72"
                >
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    sizes="288px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 text-base font-semibold tracking-tight text-white">
                    {category.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
