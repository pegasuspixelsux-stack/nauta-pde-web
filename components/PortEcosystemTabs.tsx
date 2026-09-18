"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type TabId =
  | "classifieds"
  | "services"
  | "storage"
  | "gastronomy"
  | "supplies";

const TABS: { id: TabId; label: string }[] = [
  { id: "classifieds", label: "Classifieds" },
  { id: "services", label: "Services" },
  { id: "storage", label: "Storage" },
  { id: "gastronomy", label: "Gastronomy" },
  { id: "supplies", label: "Supplies" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.986.579 3.836 1.578 5.392L2 22l4.735-1.545A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.09a8.08 8.08 0 0 1-4.13-1.132l-.296-.176-3.05.996.995-2.996-.192-.308A8.088 8.088 0 0 1 3.91 12c0-4.463 3.63-8.09 8.091-8.09 4.462 0 8.09 3.627 8.09 8.09 0 4.462-3.628 8.09-8.09 8.09z" />
    </svg>
  );
}

type Vessel = {
  title: string;
  type: "Dealer" | "Private Owner";
  length: string;
  year: string;
  mooring: string;
  price: string;
  image: string;
};

const CLASSIFIEDS: Vessel[] = [
  {
    title: "Azimut 55 Fly",
    type: "Dealer",
    length: "16.8 m",
    year: "2021",
    mooring: "Marina Punta del Este",
    price: "$980,000",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Beneteau Oceanis 46.1",
    type: "Private Owner",
    length: "14.6 m",
    year: "2019",
    mooring: "La Barra Anchorage",
    price: "$420,000",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jeanneau NC 37",
    type: "Dealer",
    length: "11.3 m",
    year: "2022",
    mooring: "Puerto de Punta del Este",
    price: "$310,000",
    image:
      "https://images.unsplash.com/photo-1574737685024-7b53d9828481?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Intermarine 55",
    type: "Private Owner",
    length: "16.7 m",
    year: "2018",
    mooring: "Isla de Lobos Passage",
    price: "$650,000",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1200&q=80",
  },
];

type ServiceProvider = {
  name: string;
  specialty: string;
  location: string;
  whatsapp: string;
};

const SERVICES: ServiceProvider[] = [
  {
    name: "Punta del Este Marine Electronics",
    specialty: "Navigation systems, radar & electronics installation",
    location: "Puerto de Punta del Este",
    whatsapp: "59899123456",
  },
  {
    name: "Taller Gospodinoff",
    specialty: "Diesel engine service & repower specialists",
    location: "Marina Punta del Este",
    whatsapp: "59899234567",
  },
  {
    name: "Vela Sur Rigging & Sails",
    specialty: "Standing rigging, sail repair & canvas work",
    location: "La Barra",
    whatsapp: "59899345678",
  },
  {
    name: "Hull Care PDE",
    specialty: "Fiberglass, gelcoat & bottom paint restoration",
    location: "Puerto de Punta del Este",
    whatsapp: "59899456789",
  },
];

type StorageFacility = {
  name: string;
  capacity: string;
  amenities: string;
};

const STORAGE: StorageFacility[] = [
  {
    name: "Puerto de Punta del Este Hardstand",
    capacity: "Outdoor secure storage · max LOA 24 m",
    amenities: "75-ton travel lift, water & power hookups",
  },
  {
    name: "Port Storage Yards",
    capacity: "Indoor & outdoor · gated 24/7 security · max LOA 18 m",
    amenities: "50-ton travel lift, wash-down bay",
  },
  {
    name: "La Barra Winter Storage",
    capacity: "Seasonal dry storage · max LOA 15 m",
    amenities: "Shrink-wrap service, power hookups",
  },
];

type Restaurant = {
  name: string;
  cuisine: string;
  highlight: string;
  image: string;
};

const GASTRONOMY: Restaurant[] = [
  {
    name: "Lo de Tere",
    cuisine: "Uruguayan seafood, waterfront terrace",
    highlight: "Dockside view · extensive wine cellar",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Marisquería El Pobre Marinero",
    cuisine: "Traditional seafood, casual harborside",
    highlight: "Fresh catch of the day · reservations recommended",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Popei's",
    cuisine: "International fine dining, sunset views",
    highlight: "Rooftop terrace over the marina",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
];

type Supplier = {
  name: string;
  service: string;
  delivery: string;
};

const SUPPLIES: Supplier[] = [
  {
    name: "Portside Chandlery",
    service: "Marine hardware, safety gear & fuel bunkering",
    delivery: "Direct-to-slip delivery within 2 hours",
  },
  {
    name: "Supermarket Delivery PDE",
    service: "Fresh provisions & gourmet groceries",
    delivery: "Same-day delivery, minimum order $50",
  },
  {
    name: "Blue Water Catering",
    service: "Gourmet provisioning & private chef service",
    delivery: "24-hour advance booking required",
  },
];

export default function PortEcosystemTabs() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <section className="border-t border-neutral-100 bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            THE PORT ECOSYSTEM
          </p>
          <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Everything your vessel needs, in one harbor.
          </h2>
        </div>

        <div className="sticky top-16 z-30 -mx-6 mb-14 overflow-x-auto border-b border-neutral-200 bg-white/90 px-6 backdrop-blur-md sm:mb-16 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex min-w-max gap-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className="relative py-4 text-[15px] font-medium transition-colors duration-200"
              >
                <span
                  className={
                    active === tab.id
                      ? "text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-600"
                  }
                >
                  {tab.label}
                </span>
                {active === tab.id && (
                  <motion.span
                    layoutId="port-ecosystem-underline"
                    className="absolute inset-x-0 -bottom-px h-[2px] bg-neutral-900"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {active === "classifieds" && <ClassifiedsPanel />}
            {active === "services" && <ServicesPanel />}
            {active === "storage" && <StoragePanel />}
            {active === "gastronomy" && <GastronomyPanel />}
            {active === "supplies" && <SuppliesPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ClassifiedsPanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {CLASSIFIEDS.map((vessel) => (
        <article key={vessel.title} className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
            <Image
              src={vessel.image}
              alt={`${vessel.title}, listed by ${vessel.type === "Dealer" ? "a dealer" : "a private owner"} at Punta del Este`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
              <dt>LOA</dt>
              <dd className="font-medium text-neutral-800">{vessel.length}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Year</dt>
              <dd className="font-medium text-neutral-800">{vessel.year}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Mooring</dt>
              <dd className="font-medium text-neutral-800">{vessel.mooring}</dd>
            </div>
          </dl>

          <a
            href={`mailto:inquiries@nautapde.com?subject=${encodeURIComponent(
              `Inquiry: ${vessel.title}`
            )}`}
            className="mt-5 inline-flex items-center rounded-full border border-neutral-200 px-5 py-2 text-[13px] font-medium text-neutral-800 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900 active:scale-[0.97]"
          >
            Quick Inquiry
          </a>
        </article>
      ))}
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="divide-y divide-neutral-100 border-t border-neutral-100">
      {SERVICES.map((provider) => (
        <div
          key={provider.name}
          className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[1.4fr_1fr_auto] sm:items-center sm:gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
              {provider.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
              {provider.specialty}
            </p>
          </div>
          <p className="text-sm font-medium text-neutral-600">
            {provider.location}
          </p>
          <a
            href={`https://wa.me/${provider.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-neutral-900 px-5 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 ease-out active:scale-[0.96] sm:self-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      ))}
    </div>
  );
}

function StoragePanel() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {STORAGE.map((facility) => (
        <div
          key={facility.name}
          className="rounded-xl border border-neutral-100 bg-neutral-50 p-8"
        >
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
            {facility.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            {facility.capacity}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {facility.amenities}
          </p>
        </div>
      ))}
    </div>
  );
}

function GastronomyPanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {GASTRONOMY.map((restaurant) => (
        <article key={restaurant.name} className="group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
            <Image
              src={restaurant.image}
              alt={`${restaurant.name}, a restaurant at the Port of Punta del Este`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
            {restaurant.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{restaurant.cuisine}</p>
          <p className="mt-3 text-sm font-medium text-neutral-700">
            {restaurant.highlight}
          </p>
        </article>
      ))}
    </div>
  );
}

function SuppliesPanel() {
  return (
    <div className="divide-y divide-neutral-100 border-t border-neutral-100">
      {SUPPLIES.map((supplier) => (
        <div
          key={supplier.name}
          className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[1.2fr_1.4fr_1fr] sm:items-center sm:gap-8"
        >
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
            {supplier.name}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            {supplier.service}
          </p>
          <p className="text-sm font-medium text-neutral-500">
            {supplier.delivery}
          </p>
        </div>
      ))}
    </div>
  );
}
