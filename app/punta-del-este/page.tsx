"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { TabId } from "@/lib/portEcosystem";

const EASE = [0.22, 1, 0.36, 1] as const;

type HistoryPhoto = {
  era: string;
  caption: string;
  image: string;
};

const HISTORY_PHOTOS: HistoryPhoto[] = [
  {
    era: "Años 1920",
    caption: "Los primeros balnearios y el muelle que le dieron forma a la costa.",
    image:
      "https://images.unsplash.com/photo-1781458024613-f41492a45990?auto=format&fit=crop&w=900&q=80",
  },
  {
    era: "Años 1940",
    caption: "Las primeras casas de baños marcan el nacimiento del balneario.",
    image:
      "https://images.unsplash.com/photo-1760827508409-af13a050aa18?auto=format&fit=crop&w=900&q=80",
  },
  {
    era: "Años 1960",
    caption: "La rambla al atardecer, ya convertida en paseo internacional.",
    image:
      "https://images.unsplash.com/photo-1781458024165-d7fb3d1d5695?auto=format&fit=crop&w=900&q=80",
  },
  {
    era: "Años 1970",
    caption: "Las tardes de sombrilla que consagraron a Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1780135918264-c8f0a96d481e?auto=format&fit=crop&w=900&q=80",
  },
];

function HistorySection() {
  return (
    <section className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 max-w-2xl sm:mb-16"
        >
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            HISTORIA
          </p>
          <h2 className="text-3xl font-semibold -tracking-tight text-neutral-900 sm:text-4xl">
            Cien años de historia.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Lo que empezó como una pequeña villa de pescadores a principios
            del siglo XX se convirtió, en apenas unas décadas, en el balneario
            más glamoroso de Sudamérica. Desde las primeras casas de baños
            hasta las torres de hoy, Punta del Este nunca dejó de reinventarse
            sin perder su costa.
          </p>
        </motion.div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          {HISTORY_PHOTOS.map((photo) => (
            <div
              key={photo.era}
              className="relative aspect-[3/4] w-80 shrink-0 snap-start overflow-hidden rounded-xl sm:w-[26rem]"
            >
              <Image
                src={photo.image}
                alt={`Punta del Este, ${photo.era.toLowerCase()}`}
                fill
                sizes="(min-width: 640px) 416px, 320px"
                className="object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[12px] font-medium tracking-[0.2em] text-white/70">
                  {photo.era.toUpperCase()}
                </p>
                <p className="mt-2 text-base leading-snug text-white">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextImageSection({
  eyebrow,
  heading,
  paragraphs,
  image,
  alt,
  reverse = false,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className={`max-w-xl ${reverse ? "lg:order-2" : ""}`}
          >
            <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold -tracking-tight text-neutral-900 sm:text-4xl">
              {heading}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-600">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 ${
              reverse ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function PuntaDelEstePage() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <>
      <Navbar active={active} onChange={setActive} />
      <main className="flex flex-1 flex-col">
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-blue-950 pb-20 pt-32">
          <Image
            src="https://images.unsplash.com/photo-1616959313137-186688889054?auto=format&fit=crop&w=2400&q=80"
            alt="Vista panorámica de la ciudad de Punta del Este"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/35 to-blue-950/10"
          />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-5 text-[13px] font-medium tracking-[0.25em] text-white/70"
            >
              DESTINO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="max-w-3xl text-balance text-4xl font-semibold -tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Todo sobre Punta del Este.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
            >
              Descubrí la ciudad que enamora a exigentes de todo el mundo:
              playas, gastronomía, vida nocturna y naturaleza, todo a pasos
              del puerto.
            </motion.p>
          </div>
        </section>

        <HistorySection />

        <TextImageSection
          eyebrow="GEOGRAFÍA"
          heading="Dos mares, un balneario único."
          paragraphs={[
            "Punta del Este se levanta en la punta de una península donde el Río de la Plata se funde con el Océano Atlántico. De un lado, Playa Mansa, de aguas calmas y atardeceres de postal; del otro, Playa Brava, con olas más generosas y la icónica escultura de Los Dedos asomando en la arena.",
            "Un poco más allá, La Barra y José Ignacio suman playas más silvestres, dunas y un ambiente bohemio que atrae a quienes buscan otro ritmo sin alejarse del glamour.",
          ]}
          image="https://images.unsplash.com/photo-1653898968886-a14171069047?auto=format&fit=crop&w=1400&q=80"
          alt="Playa de Punta del Este con edificios sobre la costa"
        />

        <TextImageSection
          eyebrow="GASTRONOMÍA Y VIDA NOCTURNA"
          heading="Una mesa y una noche para cada gusto."
          paragraphs={[
            "La escena gastronómica de Punta del Este reúne parrillas tradicionales, cocina de autor y propuestas internacionales, muchas con vista al mar o al puerto. Basta cruzar la Avenida Gorlero o llegar hasta La Barra para encontrar la mesa perfecta.",
            "Cuando cae el sol, la ciudad cambia de ritmo: beach clubs, casinos y after office con DJs en vivo mantienen la energía hasta la madrugada, especialmente en temporada alta.",
          ]}
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
          alt="Mesa servida en un restaurante de alta gama"
          reverse
        />

        <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-950">
          <Image
            src="https://images.unsplash.com/photo-1642985867592-0d63c6c84609?auto=format&fit=crop&w=2400&q=80"
            alt="Vista aérea de la costa de Punta del Este al atardecer"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/50 to-neutral-950/20"
          />
          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl"
            >
              <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-white/70">
                UN DESTINO DE CLASE MUNDIAL
              </p>
              <h2 className="text-3xl font-semibold -tracking-tight text-white sm:text-4xl">
                Donde el glamour internacional encontró su costa sudamericana.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Desde hace casi un siglo, Punta del Este recibe a quienes
                buscan lo mejor de dos mundos: naturaleza virgen y
                sofisticación sin límites.
              </p>
            </motion.div>
          </div>
        </section>

        <TextImageSection
          eyebrow="NATURALEZA Y EXCURSIONES"
          heading="Aventuras náuticas, todo el año."
          paragraphs={[
            "El puerto es la puerta de entrada a algunas de las excursiones más buscadas de la región: salidas en catamarán, pesca deportiva y visitas guiadas a la Isla de Lobos, hogar de una de las colonias de lobos marinos más grandes del mundo.",
            "En temporada, se suman los avistamientos de ballenas francas australes que migran frente a la costa. Nuestro equipo de Concierge coordina cada detalle para que la aventura empiece apenas pisás el muelle.",
          ]}
          image="https://images.unsplash.com/photo-1649308121953-b70f218ece5b?auto=format&fit=crop&w=1400&q=80"
          alt="Colonia de lobos marinos en la Isla de Lobos, Punta del Este"
        />
      </main>
      <Footer />
    </>
  );
}
