"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Vessel = {
  name: string;
  vesselClass: string;
  loa: string;
  year: string;
  builder: string;
  mooring: string;
  price: string;
  image: string;
};

const VESSELS: Vessel[] = [
  {
    name: "Sunseeker Predator 74",
    vesselClass: "Motor Yacht",
    loa: "22.6 m",
    year: "2023",
    builder: "Sunseeker",
    mooring: "Muelle A, Punta del Este",
    price: "$3.9M",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Azimut Grande 27M",
    vesselClass: "Flybridge Yacht",
    loa: "27.0 m",
    year: "2022",
    builder: "Azimut",
    mooring: "Marina Punta del Este",
    price: "$6.2M",
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Pershing 8X",
    vesselClass: "Sport Yacht",
    loa: "24.8 m",
    year: "2024",
    builder: "Pershing",
    mooring: "Puerto de Punta del Este",
    price: "$5.4M",
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Hallberg-Rassy 57",
    vesselClass: "Bluewater Sailing Yacht",
    loa: "17.6 m",
    year: "2021",
    builder: "Hallberg-Rassy",
    mooring: "La Barra Anchorage",
    price: "$1.8M",
    image:
      "https://images.unsplash.com/photo-1545148481-9b89ba700876?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Riva 100 Corsaro",
    vesselClass: "Motor Yacht",
    loa: "30.2 m",
    year: "2023",
    builder: "Riva",
    mooring: "Muelle C, Punta del Este",
    price: "$11.5M",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Oyster 745",
    vesselClass: "Bluewater Sailing Yacht",
    loa: "22.7 m",
    year: "2022",
    builder: "Oyster Yachts",
    mooring: "Isla de Lobos Passage",
    price: "$3.2M",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function VesselGrid() {
  return (
    <section id="fleet" className="bg-neutral-50 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 flex max-w-2xl flex-col gap-5 sm:mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            THE FLEET
          </p>
          <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Curated vessels, currently in port.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            A rotating selection of motor and sailing yachts, each inspected,
            documented, and available for private viewing at Punta del Este.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {VESSELS.map((vessel, i) => (
            <motion.article
              key={vessel.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
                <Image
                  src={vessel.image}
                  alt={`${vessel.name}, a ${vessel.vesselClass.toLowerCase()} moored at Punta del Este`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    {vessel.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {vessel.vesselClass}
                  </p>
                </div>
                <p className="whitespace-nowrap text-lg font-semibold tracking-tight text-neutral-900">
                  {vessel.price}
                </p>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-neutral-200 pt-4 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">LOA</dt>
                  <dd className="font-medium text-neutral-800">
                    {vessel.loa}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Year</dt>
                  <dd className="font-medium text-neutral-800">
                    {vessel.year}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Builder</dt>
                  <dd className="font-medium text-neutral-800">
                    {vessel.builder}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Mooring</dt>
                  <dd className="truncate font-medium text-neutral-800">
                    {vessel.mooring}
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
