"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { TabId } from "@/lib/portEcosystem";

const EASE = [0.22, 1, 0.36, 1] as const;

type Store = {
  name: string;
  category: string;
  location: string;
  image: string;
};

const STORES: Store[] = [
  {
    name: "Louis Vuitton",
    category: "Moda de lujo y marroquinería",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1763732481836-81ed0215c648?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Gucci",
    category: "Moda de lujo",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1754573433744-bf2b79d0eaf4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cartier",
    category: "Alta joyería y relojería",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1764512680324-048f158cab2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rolex",
    category: "Alta relojería",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1626136978522-b67ac41126e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hermès",
    category: "Marroquinería y accesorios",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1754573433744-bf2b79d0eaf4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Prada",
    category: "Moda de lujo",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1763732481836-81ed0215c648?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bvlgari",
    category: "Joyería y perfumería",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1764512680324-048f158cab2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ermenegildo Zegna",
    category: "Moda masculina de lujo",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1626136978522-b67ac41126e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tiffany & Co.",
    category: "Joyería fina",
    location: "Avenida Gorlero, Punta del Este",
    image:
      "https://images.unsplash.com/photo-1754573433744-bf2b79d0eaf4?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TiendasPage() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <>
      <Navbar active={active} onChange={setActive} />
      <main className="flex flex-1 flex-col pt-16">
        <section className="bg-white py-32 sm:py-40">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-16 max-w-2xl sm:mb-20"
            >
              <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
                DIRECTORIO
              </p>
              <h1 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
                Boutiques de Punta del Este.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Las casas de moda más exclusivas del mundo, a pasos del
                puerto. Un recorrido por las firmas que definen la Avenida
                Gorlero.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {STORES.map((store, i) => (
                <motion.article
                  key={store.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
                    <Image
                      src={store.image}
                      alt={`${store.name}, boutique en Punta del Este`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
                    {store.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {store.category}
                  </p>
                  <p className="mt-3 text-sm font-medium text-neutral-700">
                    {store.location}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
