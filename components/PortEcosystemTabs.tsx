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
  | "supplies"
  | "groceries"
  | "lodging"
  | "car-rental"
  | "crew";

const TABS: { id: TabId; label: string }[] = [
  { id: "classifieds", label: "Classifieds" },
  { id: "services", label: "Services" },
  { id: "storage", label: "Storage" },
  { id: "gastronomy", label: "Gastronomy" },
  { id: "supplies", label: "Supplies" },
  { id: "groceries", label: "Groceries" },
  { id: "lodging", label: "Lodging" },
  { id: "car-rental", label: "Car Rental" },
  { id: "crew", label: "Captains & Crews" },
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
    type: "Dealer",
    vesselClass: "Flybridge Yacht",
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
    vesselClass: "Bluewater Sailing Yacht",
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
    vesselClass: "Motor Yacht",
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
    vesselClass: "Motor Yacht",
    length: "16.7 m",
    year: "2018",
    mooring: "Isla de Lobos Passage",
    price: "$650,000",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sunseeker Predator 74",
    type: "Dealer",
    vesselClass: "Motor Yacht",
    length: "22.6 m",
    year: "2023",
    mooring: "Muelle A, Punta del Este",
    price: "$3,900,000",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Azimut Grande 27M",
    type: "Dealer",
    vesselClass: "Flybridge Yacht",
    length: "27.0 m",
    year: "2022",
    mooring: "Marina Punta del Este",
    price: "$6,200,000",
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pershing 8X",
    type: "Private Owner",
    vesselClass: "Sport Yacht",
    length: "24.8 m",
    year: "2024",
    mooring: "Puerto de Punta del Este",
    price: "$5,400,000",
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hallberg-Rassy 57",
    type: "Private Owner",
    vesselClass: "Bluewater Sailing Yacht",
    length: "17.6 m",
    year: "2021",
    mooring: "La Barra Anchorage",
    price: "$1,800,000",
    image:
      "https://images.unsplash.com/photo-1545148481-9b89ba700876?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Riva 100 Corsaro",
    type: "Dealer",
    vesselClass: "Motor Yacht",
    length: "30.2 m",
    year: "2023",
    mooring: "Muelle C, Punta del Este",
    price: "$11,500,000",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Oyster 745",
    type: "Private Owner",
    vesselClass: "Bluewater Sailing Yacht",
    length: "22.7 m",
    year: "2022",
    mooring: "Isla de Lobos Passage",
    price: "$3,200,000",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=1200&q=80",
  },
];

type ServiceProvider = {
  name: string;
  specialty: string;
  location: string;
  whatsapp: string;
  image: string;
};

const SERVICES: ServiceProvider[] = [
  {
    name: "Punta del Este Marine Electronics",
    specialty: "Navigation systems, radar & electronics installation",
    location: "Puerto de Punta del Este",
    whatsapp: "59899123456",
    image:
      "https://images.unsplash.com/photo-1465429108843-b037568eb231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Taller Gospodinoff",
    specialty: "Diesel engine service & repower specialists",
    location: "Marina Punta del Este",
    whatsapp: "59899234567",
    image:
      "https://images.unsplash.com/photo-1725830674531-794510b656e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vela Sur Rigging & Sails",
    specialty: "Standing rigging, sail repair & canvas work",
    location: "La Barra",
    whatsapp: "59899345678",
    image:
      "https://images.unsplash.com/photo-1685198905408-3eca50bca6f7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hull Care PDE",
    specialty: "Fiberglass, gelcoat & bottom paint restoration",
    location: "Puerto de Punta del Este",
    whatsapp: "59899456789",
    image:
      "https://images.unsplash.com/photo-1745423099450-2e365ceed37a?auto=format&fit=crop&w=1200&q=80",
  },
];

type StorageFacility = {
  name: string;
  capacity: string;
  amenities: string;
  image: string;
};

const STORAGE: StorageFacility[] = [
  {
    name: "Puerto de Punta del Este Hardstand",
    capacity: "Outdoor secure storage · max LOA 24 m",
    amenities: "75-ton travel lift, water & power hookups",
    image:
      "https://images.unsplash.com/photo-1530334269045-744542eef9a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Port Storage Yards",
    capacity: "Indoor & outdoor · gated 24/7 security · max LOA 18 m",
    amenities: "50-ton travel lift, wash-down bay",
    image:
      "https://images.unsplash.com/photo-1505802641929-aeef461d81eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "La Barra Winter Storage",
    capacity: "Seasonal dry storage · max LOA 15 m",
    amenities: "Shrink-wrap service, power hookups",
    image:
      "https://images.unsplash.com/photo-1694663198902-d4f4e3b98ec6?auto=format&fit=crop&w=1200&q=80",
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
    name: "Fibra Sur Composites",
    service: "Fiberglass, resin, gelcoat & antifouling paint",
    delivery: "Pickup or delivery to Puerto de Punta del Este",
  },
  {
    name: "Cabo Rope & Rigging Supply",
    service: "Line, rope, shackles & rigging hardware",
    delivery: "Same-day pickup, dockside delivery on request",
  },
];

type GroceryProvider = {
  name: string;
  service: string;
  delivery: string;
};

const GROCERIES: GroceryProvider[] = [
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
  {
    name: "Puerto Fresh Market",
    service: "Fresh produce, seafood & local specialties",
    delivery: "Direct-to-slip delivery, order by 10am",
  },
];

type Lodging = {
  name: string;
  type: string;
  highlight: string;
  image: string;
};

const LODGING: Lodging[] = [
  {
    name: "Ocean Club Suites",
    type: "Boutique hotel, 5 minutes from the port",
    highlight: "Rooftop pool & panoramic ocean views",
    image:
      "https://images.unsplash.com/photo-1671798747357-aa4364af0b72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "La Barra Boutique Hotel",
    type: "Serviced apartments, waterfront",
    highlight: "Private terraces overlooking La Barra",
    image:
      "https://images.unsplash.com/photo-1719465263924-eff2bd34fa6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Port House Residences",
    type: "Short-stay residences, dockside",
    highlight: "Walking distance to Puerto de Punta del Este",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?auto=format&fit=crop&w=1200&q=80",
  },
];

type CarRental = {
  name: string;
  fleet: string;
  delivery: string;
  whatsapp: string;
  image: string;
};

const CAR_RENTAL: CarRental[] = [
  {
    name: "PDE Prestige Rentals",
    fleet: "Luxury SUVs & sedans",
    delivery: "Dockside delivery on arrival",
    whatsapp: "59899567890",
    image:
      "https://images.unsplash.com/photo-1747944682596-a16f1e304d4f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Puerto Motors Rent-a-Car",
    fleet: "Convertibles & sport coupes",
    delivery: "Pickup at the marina, same-day booking",
    whatsapp: "59899678901",
    image:
      "https://images.unsplash.com/photo-1748514338092-943ecca0cdc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fleet Drive Punta del Este",
    fleet: "Chauffeured & self-drive options",
    delivery: "Delivered anywhere between the port and La Barra",
    whatsapp: "59899789012",
    image:
      "https://images.unsplash.com/photo-1562596127-3885a12dcdb6?auto=format&fit=crop&w=1200&q=80",
  },
];

type CrewListing = {
  role: string;
  kind: "Wanted" | "Offered";
  details: string;
  whatsapp: string;
};

const CREW: CrewListing[] = [
  {
    role: "Live-Aboard Captain",
    kind: "Wanted",
    details: "50m+ motor yacht seeks licensed captain for the summer season. MCA/RYA preferred.",
    whatsapp: "59899111222",
  },
  {
    role: "Deckhand / First Mate",
    kind: "Wanted",
    details: "Sailing yacht seeking an experienced deckhand for weekend charters.",
    whatsapp: "59899222333",
  },
  {
    role: "Engineer",
    kind: "Wanted",
    details: "Motor yacht seeks part-time engineer for maintenance during winter storage.",
    whatsapp: "59899333444",
  },
  {
    role: "Stewardess",
    kind: "Offered",
    details: "5 years of superyacht experience. Available immediately, references on request.",
    whatsapp: "59899444555",
  },
  {
    role: "Delivery Skipper",
    kind: "Offered",
    details: "RYA Yachtmaster Ocean. Available for Atlantic crossings and coastal deliveries.",
    whatsapp: "59899555666",
  },
  {
    role: "Day Charter Crew (Captain + Deckhand)",
    kind: "Offered",
    details: "Two-person team available for day charters at Punta del Este.",
    whatsapp: "59899666777",
  },
];

export default function PortEcosystemTabs() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <section id="fleet" className="border-t border-neutral-100 bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
            THE PORT ECOSYSTEM
          </p>
          <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
            Everything your vessel needs, in one harbor.
          </h2>
        </div>

        <div className="sticky top-16 z-30 -mx-6 mb-14 border-b border-neutral-200 bg-white/90 px-6 py-4 backdrop-blur-md sm:mb-16 sm:overflow-x-auto sm:py-0 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex flex-wrap gap-2 sm:min-w-max sm:flex-nowrap sm:gap-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:rounded-none sm:px-0 sm:py-4 sm:text-[15px] ${
                  active === tab.id
                    ? "bg-neutral-900 text-white sm:bg-transparent sm:text-neutral-900"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 sm:bg-transparent sm:text-neutral-400 sm:hover:bg-transparent sm:hover:text-neutral-600"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="port-ecosystem-underline"
                    className="absolute inset-x-0 -bottom-px hidden h-[2px] bg-neutral-900 sm:block"
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
            {active === "groceries" && <GroceriesPanel />}
            {active === "lodging" && <LodgingPanel />}
            {active === "car-rental" && <CarRentalPanel />}
            {active === "crew" && <CrewPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

type FeaturedDealer = {
  brand: string;
  tagline: string;
  image: string;
};

const FEATURED_DEALERS: FeaturedDealer[] = [
  {
    brand: "Azimut",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Sunseeker",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Pershing",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Riva",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Beneteau",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Jeanneau",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1574737685024-7b53d9828481?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Hallberg-Rassy",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1545148481-9b89ba700876?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Oyster Yachts",
    tagline: "Authorized Dealer",
    image:
      "https://images.unsplash.com/photo-1741183575544-ae96e3c8c221?auto=format&fit=crop&w=800&q=80",
  },
];

function DealerScroller() {
  return (
    <div className="mb-12">
      <p className="mb-4 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
        FEATURED DEALERS &amp; BRANDS
      </p>
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        {FEATURED_DEALERS.map((dealer) => (
          <div
            key={dealer.brand}
            className="group relative w-40 shrink-0 snap-start overflow-hidden rounded-xl border border-neutral-100 sm:w-48"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={dealer.image}
                alt={`${dealer.brand}, an authorized yacht dealer at Punta del Este`}
                fill
                sizes="192px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-sm font-semibold tracking-tight text-white">
                {dealer.brand}
              </p>
              <p className="text-[11px] font-medium tracking-wide text-white/70">
                {dealer.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PRICE_CEILINGS = [
  { label: "Any price", value: Infinity },
  { label: "Under $500K", value: 500_000 },
  { label: "Under $1M", value: 1_000_000 },
  { label: "Under $5M", value: 5_000_000 },
];

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

function ClassifiedsPanel() {
  const [listingType, setListingType] = useState<"All" | "Dealer" | "Private Owner">("All");
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
    if (listingType !== "All" && vessel.type !== listingType) return false;
    if (parsePrice(vessel.price) > maxPrice) return false;
    if (selectedClasses.size > 0 && !selectedClasses.has(vessel.vesselClass))
      return false;
    if (selectedMoorings.size > 0 && !selectedMoorings.has(vessel.mooring))
      return false;
    return true;
  });

  const resetFilters = () => {
    setListingType("All");
    setMaxPrice(Infinity);
    setSelectedClasses(new Set());
    setSelectedMoorings(new Set());
  };

  return (
    <div>
      <DealerScroller />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
        <aside className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              FILTERS
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="text-[13px] font-medium text-neutral-400 transition-colors hover:text-neutral-900"
            >
              Reset
            </button>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">
              Listing Type
            </p>
            <div className="flex flex-col gap-2">
              {(["All", "Dealer", "Private Owner"] as const).map((option) => (
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
              Vessel Class
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
              Max Price
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
              Mooring
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
              No vessels match these filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((vessel) => (
                <article key={vessel.title} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
                    <Image
                      src={vessel.image}
                      alt={`${vessel.title}, listed by ${vessel.type === "Dealer" ? "a dealer" : "a private owner"} at Punta del Este`}
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
                      <dt>LOA</dt>
                      <dd className="font-medium text-neutral-800">
                        {vessel.length}
                      </dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt>Year</dt>
                      <dd className="font-medium text-neutral-800">
                        {vessel.year}
                      </dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt>Mooring</dt>
                      <dd className="font-medium text-neutral-800">
                        {vessel.mooring}
                      </dd>
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
          )}
        </div>
      </div>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
      {SERVICES.map((provider) => (
        <article key={provider.name} className="group flex gap-5 sm:gap-6">
          <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100 sm:w-36">
            <Image
              src={provider.image}
              alt={`${provider.name}, a marine service provider at Punta del Este`}
              fill
              sizes="144px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
              {provider.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
              {provider.specialty}
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-700">
              {provider.location}
            </p>
            <a
              href={`https://wa.me/${provider.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-neutral-900 px-5 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 ease-out active:scale-[0.96]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function StoragePanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {STORAGE.map((facility) => (
        <article key={facility.name} className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
            <Image
              src={facility.image}
              alt={`${facility.name}, a boat storage facility at Punta del Este`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
            {facility.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {facility.capacity}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {facility.amenities}
          </p>
        </article>
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

function GroceriesPanel() {
  return (
    <div className="divide-y divide-neutral-100 border-t border-neutral-100">
      {GROCERIES.map((provider) => (
        <div
          key={provider.name}
          className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[1.2fr_1.4fr_1fr] sm:items-center sm:gap-8"
        >
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
            {provider.name}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            {provider.service}
          </p>
          <p className="text-sm font-medium text-neutral-500">
            {provider.delivery}
          </p>
        </div>
      ))}
    </div>
  );
}

function LodgingPanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {LODGING.map((stay) => (
        <article key={stay.name} className="group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
            <Image
              src={stay.image}
              alt={`${stay.name}, lodging near the Port of Punta del Este`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
            {stay.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{stay.type}</p>
          <p className="mt-3 text-sm font-medium text-neutral-700">
            {stay.highlight}
          </p>
        </article>
      ))}
    </div>
  );
}

function CarRentalPanel() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {CAR_RENTAL.map((provider) => (
        <article key={provider.name} className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
            <Image
              src={provider.image}
              alt={`${provider.name}, a car rental provider serving Punta del Este`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
            {provider.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{provider.fleet}</p>
          <p className="mt-3 text-sm font-medium text-neutral-700">
            {provider.delivery}
          </p>
          <a
            href={`https://wa.me/${provider.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 ease-out active:scale-[0.96]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </article>
      ))}
    </div>
  );
}

function CrewPanel() {
  const wanted = CREW.filter((c) => c.kind === "Wanted");
  const offered = CREW.filter((c) => c.kind === "Offered");

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
      <div>
        <h3 className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
          HELP WANTED
        </h3>
        <div className="flex flex-col gap-5">
          {wanted.map((listing) => (
            <CrewCard key={listing.role} listing={listing} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
          HELP OFFERED
        </h3>
        <div className="flex flex-col gap-5">
          {offered.map((listing) => (
            <CrewCard key={listing.role} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CrewCard({ listing }: { listing: CrewListing }) {
  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-6">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-base font-semibold tracking-tight text-neutral-900">
          {listing.role}
        </h4>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide ${
            listing.kind === "Wanted"
              ? "bg-neutral-900 text-white"
              : "border border-neutral-300 text-neutral-700"
          }`}
        >
          {listing.kind}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {listing.details}
      </p>
      <a
        href={`https://wa.me/${listing.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-[13px] font-medium text-white transition-transform duration-200 ease-out active:scale-[0.96]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
