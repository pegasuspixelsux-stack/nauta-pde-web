"use client";

import { useState } from "react";
import Image from "next/image";

type Vessel = {
  title: string;
  type: "Concesionario" | "Particular";
  vesselClass: string;
  length: string;
  year: string;
  mooring: string;
  price: string;
  image: string;
};

const CLASSIFIEDS: Vessel[] = [
  {
    title: "Azimut 55 Fly",
    type: "Concesionario",
    vesselClass: "Yate Flybridge",
    length: "16,8 m",
    year: "2021",
    mooring: "Marina Punta del Este",
    price: "USD 980.000",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Beneteau Oceanis 46.1",
    type: "Particular",
    vesselClass: "Velero de Altura",
    length: "14,6 m",
    year: "2019",
    mooring: "Fondeadero de La Barra",
    price: "USD 420.000",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jeanneau NC 37",
    type: "Concesionario",
    vesselClass: "Yate a Motor",
    length: "11,3 m",
    year: "2022",
    mooring: "Puerto de Punta del Este",
    price: "USD 310.000",
    image:
      "https://images.unsplash.com/photo-1574737685024-7b53d9828481?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Intermarine 55",
    type: "Particular",
    vesselClass: "Yate a Motor",
    length: "16,7 m",
    year: "2018",
    mooring: "Paso de Isla de Lobos",
    price: "USD 650.000",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sunseeker Predator 74",
    type: "Concesionario",
    vesselClass: "Yate a Motor",
    length: "22,6 m",
    year: "2023",
    mooring: "Muelle A, Punta del Este",
    price: "USD 3.900.000",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Azimut Grande 27M",
    type: "Concesionario",
    vesselClass: "Yate Flybridge",
    length: "27,0 m",
    year: "2022",
    mooring: "Marina Punta del Este",
    price: "USD 6.200.000",
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pershing 8X",
    type: "Particular",
    vesselClass: "Yate Deportivo",
    length: "24,8 m",
    year: "2024",
    mooring: "Puerto de Punta del Este",
    price: "USD 5.400.000",
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hallberg-Rassy 57",
    type: "Particular",
    vesselClass: "Velero de Altura",
    length: "17,6 m",
    year: "2021",
    mooring: "Fondeadero de La Barra",
    price: "USD 1.800.000",
    image:
      "https://images.unsplash.com/photo-1545148481-9b89ba700876?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Riva 100 Corsaro",
    type: "Concesionario",
    vesselClass: "Yate a Motor",
    length: "30,2 m",
    year: "2023",
    mooring: "Muelle C, Punta del Este",
    price: "USD 11.500.000",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Oyster 745",
    type: "Particular",
    vesselClass: "Velero de Altura",
    length: "22,7 m",
    year: "2022",
    mooring: "Paso de Isla de Lobos",
    price: "USD 3.200.000",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=1200&q=80",
  },
];

const PRICE_CEILINGS = [
  { label: "Cualquier precio", value: Infinity },
  { label: "Hasta USD 500 mil", value: 500_000 },
  { label: "Hasta USD 1 millón", value: 1_000_000 },
  { label: "Hasta USD 5 millones", value: 5_000_000 },
];

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

export default function ClassifiedsSection() {
  const [listingType, setListingType] = useState<"Todos" | "Concesionario" | "Particular">("Todos");
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [selectedClasses, setSelectedClasses] = useState<Set<string>>(new Set());
  const [selectedMoorings, setSelectedMoorings] = useState<Set<string>>(new Set());

  const uniqueClasses = [...new Set(CLASSIFIEDS.map((v) => v.vesselClass))];
  const uniqueMoorings = [...new Set(CLASSIFIEDS.map((v) => v.mooring))];

  const toggle = (set: Set<string>, value: string) => {
    const next = new Set(set);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    return next;
  };

  const filtered = CLASSIFIEDS.filter((vessel) => {
    if (listingType !== "Todos" && vessel.type !== listingType) return false;
    if (parsePrice(vessel.price) > maxPrice) return false;
    if (selectedClasses.size > 0 && !selectedClasses.has(vessel.vesselClass))
      return false;
    if (selectedMoorings.size > 0 && !selectedMoorings.has(vessel.mooring))
      return false;
    return true;
  });

  const resetFilters = () => {
    setListingType("Todos");
    setMaxPrice(Infinity);
    setSelectedClasses(new Set());
    setSelectedMoorings(new Set());
  };

  return (
    <section className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            CLASIFICADOS
          </p>
          <h1 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Embarcaciones curadas, publicadas en todo el mundo.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium tracking-[0.2em] text-neutral-500">
                FILTROS
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[13px] font-medium text-neutral-400 transition-colors hover:text-neutral-900"
              >
                Reiniciar
              </button>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-900">
                Tipo de Publicación
              </p>
              <div className="flex flex-col gap-2">
                {(["Todos", "Concesionario", "Particular"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setListingType(option)}
                    className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      listingType === option
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-900">
                Clase de Embarcación
              </p>
              <div className="flex flex-col gap-2">
                {uniqueClasses.map((cls) => (
                  <label
                    key={cls}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-neutral-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClasses.has(cls)}
                      onChange={() =>
                        setSelectedClasses((prev) => toggle(prev, cls))
                      }
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    />
                    {cls}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-900">
                Precio Máximo
              </p>
              <div className="flex flex-col gap-2">
                {PRICE_CEILINGS.map((ceiling) => (
                  <label
                    key={ceiling.label}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-neutral-600"
                  >
                    <input
                      type="radio"
                      name="max-price"
                      checked={maxPrice === ceiling.value}
                      onChange={() => setMaxPrice(ceiling.value)}
                      className="h-4 w-4 border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    />
                    {ceiling.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-neutral-900">
                Amarre
              </p>
              <div className="flex flex-col gap-2">
                {uniqueMoorings.map((mooring) => (
                  <label
                    key={mooring}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-neutral-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMoorings.has(mooring)}
                      onChange={() =>
                        setSelectedMoorings((prev) => toggle(prev, mooring))
                      }
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    />
                    {mooring}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-sm text-neutral-500">
                Ningún barco coincide con estos filtros.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((vessel) => (
                  <article key={vessel.title} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
                      <Image
                        src={vessel.image}
                        alt={`${vessel.title}, publicado por ${vessel.type === "Concesionario" ? "un concesionario" : "un particular"} en Punta del Este`}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium tracking-wide text-neutral-800 backdrop-blur-sm">
                        {vessel.type}
                      </span>
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {vessel.title}
                      </h3>
                      <p className="whitespace-nowrap text-lg font-semibold tracking-tight text-neutral-900">
                        {vessel.price}
                      </p>
                    </div>

                    <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-500">
                      <div className="flex gap-1.5">
                        <dt>Eslora</dt>
                        <dd className="font-medium text-neutral-800">
                          {vessel.length}
                        </dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt>Año</dt>
                        <dd className="font-medium text-neutral-800">
                          {vessel.year}
                        </dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt>Amarre</dt>
                        <dd className="font-medium text-neutral-800">
                          {vessel.mooring}
                        </dd>
                      </div>
                    </dl>

                    <a
                      href={`mailto:inquiries@nautapde.com?subject=${encodeURIComponent(
                        `Consulta: ${vessel.title}`
                      )}`}
                      className="mt-5 inline-flex items-center rounded-full border border-neutral-200 px-5 py-2 text-[13px] font-medium text-neutral-800 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900 active:scale-[0.97]"
                    >
                      Consulta Rápida
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
