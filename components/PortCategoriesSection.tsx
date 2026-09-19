"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TABS, type TabId } from "@/lib/portEcosystem";
import TabIcon from "./TabIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

const CATEGORY_IMAGES: Record<TabId, string> = {
  classifieds:
    "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=800&q=80",
  services:
    "https://images.unsplash.com/photo-1465429108843-b037568eb231?auto=format&fit=crop&w=800&q=80",
  storage:
    "https://images.unsplash.com/photo-1530334269045-744542eef9a2?auto=format&fit=crop&w=800&q=80",
  gastronomy:
    "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=800&q=80",
  supplies:
    "https://images.unsplash.com/photo-1685198905408-3eca50bca6f7?auto=format&fit=crop&w=800&q=80",
  groceries:
    "https://images.unsplash.com/photo-1757627550652-30788bfce978?auto=format&fit=crop&w=800&q=80",
  lodging:
    "https://images.unsplash.com/photo-1719465263924-eff2bd34fa6c?auto=format&fit=crop&w=800&q=80",
  "car-rental":
    "https://images.unsplash.com/photo-1747944682596-a16f1e304d4f?auto=format&fit=crop&w=800&q=80",
  crew: "https://images.unsplash.com/photo-1639940351816-a0ad42b6e9c9?auto=format&fit=crop&w=800&q=80",
};

export default function PortCategoriesSection({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  const items = [...TABS, ...TABS];

  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 max-w-2xl sm:mb-16"
        >
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            CATEGORÍAS
          </p>
          <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Explorá el ecosistema del puerto.
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex w-max gap-4 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        >
          {items.map((tab, i) => (
            <a
              key={`${tab.id}-${i}`}
              href="#fleet"
              onClick={() => onChange(tab.id)}
              className={`group relative aspect-[3/4] w-64 shrink-0 overflow-hidden rounded-2xl border sm:w-80 ${
                active === tab.id ? "border-neutral-900" : "border-neutral-200"
              }`}
            >
              <Image
                src={CATEGORY_IMAGES[tab.id]}
                alt={`${tab.label} — explorar categoría`}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-6">
                <TabIcon id={tab.id} className="h-6 w-6 shrink-0 text-white" />
                <span className="text-base font-semibold leading-tight text-white">
                  {tab.label}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
