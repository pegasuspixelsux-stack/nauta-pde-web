"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { TabId } from "@/lib/portEcosystem";

const EASE = [0.22, 1, 0.36, 1] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.986.579 3.836 1.578 5.392L2 22l4.735-1.545A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.09a8.08 8.08 0 0 1-4.13-1.132l-.296-.176-3.05.996.995-2.996-.192-.308A8.088 8.088 0 0 1 3.91 12c0-4.463 3.63-8.09 8.091-8.09 4.462 0 8.09 3.627 8.09 8.09 0 4.462-3.628 8.09-8.09 8.09z" />
    </svg>
  );
}

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
    specialty: "Sistemas de navegación, radar e instalación de electrónica",
    location: "Puerto de Punta del Este",
    whatsapp: "59899123456",
    image:
      "https://images.unsplash.com/photo-1465429108843-b037568eb231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Taller Gospodinoff",
    specialty: "Especialistas en motores diésel y repotenciación",
    location: "Marina Punta del Este",
    whatsapp: "59899234567",
    image:
      "https://images.unsplash.com/photo-1725830674531-794510b656e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vela Sur Rigging & Sails",
    specialty: "Jarcia fija, reparación de velas y trabajos en lona",
    location: "La Barra",
    whatsapp: "59899345678",
    image:
      "https://images.unsplash.com/photo-1685198905408-3eca50bca6f7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hull Care PDE",
    specialty: "Restauración de fibra de vidrio, gelcoat y pintura de casco",
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
    capacity: "Guardería exterior segura · eslora máx. 24 m",
    amenities: "Travel lift de 75 toneladas, conexión de agua y electricidad",
    image:
      "https://images.unsplash.com/photo-1530334269045-744542eef9a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Port Storage Yards",
    capacity: "Interior y exterior · seguridad 24/7 con acceso controlado · eslora máx. 18 m",
    amenities: "Travel lift de 50 toneladas, bahía de lavado",
    image:
      "https://images.unsplash.com/photo-1505802641929-aeef461d81eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "La Barra Winter Storage",
    capacity: "Guardería en seco de temporada · eslora máx. 15 m",
    amenities: "Servicio de enzunchado, conexión eléctrica",
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
    cuisine: "Mariscos uruguayos, terraza frente al mar",
    highlight: "Vista al muelle · extensa carta de vinos",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Marisquería El Pobre Marinero",
    cuisine: "Mariscos tradicionales, ambiente informal junto al puerto",
    highlight: "Pesca fresca del día · se recomienda reservar",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Popei's",
    cuisine: "Alta cocina internacional, vistas al atardecer",
    highlight: "Terraza en la azotea sobre la marina",
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
    service: "Herrajes náuticos, equipo de seguridad y venta de combustible",
    delivery: "Entrega directa al amarre en 2 horas",
  },
  {
    name: "Fibra Sur Composites",
    service: "Fibra de vidrio, resina, gelcoat y pintura antiincrustante",
    delivery: "Retiro en local o entrega en Puerto de Punta del Este",
  },
  {
    name: "Cabo Rope & Rigging Supply",
    service: "Cabos, sogas, grilletes y herrajes de jarcia",
    delivery: "Retiro el mismo día, entrega a muelle a pedido",
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
    service: "Provisiones frescas y almacén gourmet",
    delivery: "Entrega el mismo día, pedido mínimo USD 50",
  },
  {
    name: "Blue Water Catering",
    service: "Aprovisionamiento gourmet y servicio de chef privado",
    delivery: "Requiere reserva con 24 horas de anticipación",
  },
  {
    name: "Puerto Fresh Market",
    service: "Productos frescos, pescado y mariscos, y especialidades locales",
    delivery: "Entrega directa al amarre, pedidos antes de las 10:00",
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
    type: "Hotel boutique, a 5 minutos del puerto",
    highlight: "Pileta en la azotea y vistas panorámicas al mar",
    image:
      "https://images.unsplash.com/photo-1671798747357-aa4364af0b72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "La Barra Boutique Hotel",
    type: "Apartamentos con servicio, frente al mar",
    highlight: "Terrazas privadas con vista a La Barra",
    image:
      "https://images.unsplash.com/photo-1719465263924-eff2bd34fa6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Port House Residences",
    type: "Residencias de estadía corta, junto al muelle",
    highlight: "A pasos del Puerto de Punta del Este",
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
    fleet: "SUVs y sedanes de lujo",
    delivery: "Entrega al muelle al llegar",
    whatsapp: "59899567890",
    image:
      "https://images.unsplash.com/photo-1747944682596-a16f1e304d4f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Puerto Motors Rent-a-Car",
    fleet: "Convertibles y cupés deportivos",
    delivery: "Retiro en la marina, reserva el mismo día",
    whatsapp: "59899678901",
    image:
      "https://images.unsplash.com/photo-1748514338092-943ecca0cdc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fleet Drive Punta del Este",
    fleet: "Con chofer o autoconducido",
    delivery: "Entrega en cualquier punto entre el puerto y La Barra",
    whatsapp: "59899789012",
    image:
      "https://images.unsplash.com/photo-1562596127-3885a12dcdb6?auto=format&fit=crop&w=1200&q=80",
  },
];

type CrewListing = {
  role: string;
  kind: "Busca" | "Ofrece";
  details: string;
  whatsapp: string;
};

const CREW: CrewListing[] = [
  {
    role: "Capitán Residente",
    kind: "Busca",
    details: "Yate a motor de 50m+ busca capitán con licencia para la temporada de verano. Se prefiere MCA/RYA.",
    whatsapp: "59899111222",
  },
  {
    role: "Marinero / Primer Oficial",
    kind: "Busca",
    details: "Velero busca marinero con experiencia para charters de fin de semana.",
    whatsapp: "59899222333",
  },
  {
    role: "Maquinista",
    kind: "Busca",
    details: "Yate a motor busca maquinista part-time para mantenimiento durante la guardería de invierno.",
    whatsapp: "59899333444",
  },
  {
    role: "Camarera de a Bordo",
    kind: "Ofrece",
    details: "5 años de experiencia en superyates. Disponibilidad inmediata, referencias a pedido.",
    whatsapp: "59899444555",
  },
  {
    role: "Patrón de Entrega",
    kind: "Ofrece",
    details: "RYA Yachtmaster Ocean. Disponible para travesías del Atlántico y entregas costeras.",
    whatsapp: "59899555666",
  },
  {
    role: "Tripulación para Charter Diario (Capitán + Marinero)",
    kind: "Ofrece",
    details: "Equipo de dos personas disponible para charters diarios en Punta del Este.",
    whatsapp: "59899666777",
  },
];

const TAB_HEADINGS: Record<TabId, { eyebrow: string; heading: string }> = {
  classifieds: {
    eyebrow: "CLASIFICADOS",
    heading: "Embarcaciones curadas, publicadas en todo el mundo.",
  },
  services: {
    eyebrow: "SERVICIOS",
    heading: "Manos de confianza para cada sistema a bordo.",
  },
  storage: {
    eyebrow: "GUARDERÍA",
    heading: "Amarres seguros y guardería en seco, todo el año.",
  },
  gastronomy: {
    eyebrow: "GASTRONOMÍA",
    heading: "Gastronomía frente al mar, a pasos del muelle.",
  },
  supplies: {
    eyebrow: "INSUMOS",
    heading: "Herrajes, jarcia y todo lo necesario a bordo.",
  },
  groceries: {
    eyebrow: "ALMACÉN",
    heading: "Provisiones, entregadas directo a tu amarre.",
  },
  lodging: {
    eyebrow: "ALOJAMIENTO",
    heading: "Un lugar donde quedarte, a minutos de la marina.",
  },
  "car-rental": {
    eyebrow: "ALQUILER DE AUTOS",
    heading: "Llegá con estilo, a donde sea que vayas.",
  },
  crew: {
    eyebrow: "CAPITANES Y TRIPULACIÓN",
    heading: "Manos expertas, listas para subir a bordo.",
  },
};

export default function PortEcosystemTabs({ active }: { active: TabId }) {
  return (
    <section id="fleet" className="border-t border-neutral-100 bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-heading`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-14 max-w-2xl sm:mb-16"
          >
            <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              {TAB_HEADINGS[active].eyebrow}
            </p>
            <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
              {TAB_HEADINGS[active].heading}
            </h2>
          </motion.div>
        </AnimatePresence>

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

type LocalBusiness = {
  name: string;
  rating?: number;
  category: string;
  status?: string;
  description: string;
  brands?: string[];
  image: string;
};

const LOCAL_BUSINESSES: LocalBusiness[] = [
  {
    name: "Azimut",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunseeker",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pershing",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Riva",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beneteau",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jeanneau",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1574737685024-7b53d9828481?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hallberg-Rassy",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1545148481-9b89ba700876?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oyster Yachts",
    category: "Concesionario Autorizado",
    description: "Concesionario autorizado de la marca en Punta del Este.",
    image:
      "https://images.unsplash.com/photo-1741183575544-ae96e3c8c221?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "El Muelle",
    rating: 4.7,
    category: "Oficina Corporativa",
    status: "Cerrado · Abre 9:00 lun",
    description:
      "Sobre la Ruta Interbalnearia Km 119, en Punta Ballena. Funciona como boutique náutica, guardería y concesionario de embarcaciones.",
    brands: [
      "Regal Boats",
      "Dufour Yachts",
      "Bavaria Yachts",
      "Fountaine Pajot",
      "Sealegs",
    ],
    image:
      "https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nordica Sur",
    category: "Concesionario",
    description: "Opera regionalmente en Punta del Este.",
    brands: ["Saxdor Yachts"],
    image:
      "https://images.unsplash.com/photo-1518528057367-d8618b763ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Náutica de Punta",
    category: "Concesionario",
    description: "Ubicado en la zona de Maldonado y Punta del Este.",
    brands: ["Yamaha Marine", "Saxdor"],
    image:
      "https://images.unsplash.com/photo-1601183054392-d956c9315c27?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mar Adentro Barcos",
    rating: 5.0,
    category: "Proveedores",
    status: "Cerrado · Abre 10:00 sáb",
    description:
      "Sobre la Rambla General Artigas. Se especializa en venta de embarcaciones y equipamiento náutico. Horario estándar de lunes a viernes, reducido los sábados.",
    image:
      "https://images.unsplash.com/photo-1551991619-d46f46154f94?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Aeromarine S.A.",
    rating: 4.1,
    category: "Tienda",
    status: "Cerrado · Abre 10:00 sáb",
    description:
      "En la Calle 17, atiende las necesidades náuticas locales. Cuenta con tienda online de accesorios y equipamiento marino. Abierto en tardes seleccionadas y fines de semana.",
    image:
      "https://images.unsplash.com/photo-1574737685024-7b53d9828481?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "CENTRO NAUTICO",
    rating: 1.0,
    category: "Proveedores",
    status: "Cerrado · Abre 10:00 sáb",
    description:
      "Insumos náuticos y servicios de concesionaria cerca de la Avenida Río Branco. Abierto de lunes a sábado en horario matutino.",
    image:
      "https://images.unsplash.com/photo-1465429108843-b037568eb231?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nautik&Road",
    rating: 4.7,
    category: "Tienda",
    status: "Cerrado · Abre 10:00 sáb",
    description:
      "Sobre la Ruta Interbalnearia. Combina oferta náutica con servicios para vehículos y trailers. Horario partido por la tarde en días de semana.",
    image:
      "https://images.unsplash.com/photo-1745423099450-2e365ceed37a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Altamar punta",
    category: "Proveedores",
    status: "Abierto",
    description:
      "Atiende a los amantes de la náutica en la región de Maldonado y Punta del Este, con disponibilidad continua las 24 horas.",
    image:
      "https://images.unsplash.com/photo-1725830674531-794510b656e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alquiler de Barcos y Yates",
    rating: 4.2,
    category: "Servicios",
    status: "Abierto",
    description:
      "Sobre la Calle Virazón, cerca del puerto. Alquiler marítimo y servicios de embarcaciones, abierto las 24 horas.",
    image:
      "https://images.unsplash.com/photo-1534196143787-f563337ca933?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alquiler de yates en Punta del Este",
    rating: 3.9,
    category: "Servicios",
    status: "Abierto · Cierra 20:00",
    description:
      "Opera desde el Muelle Principal del puerto. Servicios de yates y operación de embarcaciones, con horario extendido hasta la noche.",
    image:
      "https://images.unsplash.com/photo-1505802641929-aeef461d81eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alquiler de barcos Popey",
    rating: 5.0,
    category: "Servicios",
    status: "Cerrado · Abre 9:00 sáb",
    description:
      "Presencia consolidada dentro del puerto de Punta del Este. Muy bien calificado por sus servicios de alquiler y charter de embarcaciones.",
    image:
      "https://images.unsplash.com/photo-1530334269045-744542eef9a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Servicios Náuticos",
    rating: 3.0,
    category: "Servicios",
    status: "Cerrado · Abre 10:00 lun",
    description:
      "Sobre la Rambla General Artigas. Soporte técnico y náutico especializado para propietarios locales, de lunes a viernes.",
    image:
      "https://images.unsplash.com/photo-1685198905408-3eca50bca6f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Yacht Club",
    rating: 4.6,
    category: "Marina",
    status: "Abierto · Cierra 0:50 sáb",
    description:
      "Yacht Club Uruguayo / sede de la marina de Punta del Este. Pilar institucional de la comunidad náutica, en el corazón de la infraestructura portuaria.",
    image:
      "https://images.unsplash.com/photo-1741183575544-ae96e3c8c221?auto=format&fit=crop&w=800&q=80",
  },
];

function DealersSection() {
  return (
    <div className="mb-16">
      <p className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
        MARCAS Y CONCESIONARIOS DESTACADOS
      </p>
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        {LOCAL_BUSINESSES.map((biz) => (
          <div
            key={biz.name}
            className="relative aspect-[3/4] w-72 shrink-0 snap-start overflow-hidden rounded-xl"
          >
            <Image
              src={biz.image}
              alt={`${biz.name}, ${biz.category.toLowerCase()} en Punta del Este`}
              fill
              sizes="288px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {biz.name}
                </h3>
                {biz.rating && (
                  <span className="shrink-0 whitespace-nowrap text-sm font-medium text-white">
                    ★ {biz.rating.toFixed(1)}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium tracking-wide text-white/70">
                {biz.category}
                {biz.status ? ` · ${biz.status}` : ""}
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                {biz.description}
              </p>
              {biz.brands && (
                <p className="text-xs font-medium text-white/70">
                  Marcas: {biz.brands.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClassifiedsPanel() {
  return (
    <div>
      <DealersSection />

      <div className="flex justify-center">
        <Link
          href="/clasificados"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-[14px] font-semibold text-white transition-transform duration-200 ease-out active:scale-[0.97]"
        >
          Ver Todos los Clasificados
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
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
              alt={`${provider.name}, proveedor de servicios náuticos en Punta del Este`}
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
              alt={`${facility.name}, guardería de embarcaciones en Punta del Este`}
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
              alt={`${restaurant.name}, restaurante en el Puerto de Punta del Este`}
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
              alt={`${stay.name}, alojamiento cerca del Puerto de Punta del Este`}
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
              alt={`${provider.name}, empresa de alquiler de autos en Punta del Este`}
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
  const wanted = CREW.filter((c) => c.kind === "Busca");
  const offered = CREW.filter((c) => c.kind === "Ofrece");

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
      <div>
        <h3 className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
          SE BUSCA
        </h3>
        <div className="flex flex-col gap-5">
          {wanted.map((listing) => (
            <CrewCard key={listing.role} listing={listing} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
          SE OFRECE
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
            listing.kind === "Busca"
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
