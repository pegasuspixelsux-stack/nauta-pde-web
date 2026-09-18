export type TabId =
  | "classifieds"
  | "services"
  | "storage"
  | "gastronomy"
  | "supplies"
  | "groceries"
  | "lodging"
  | "car-rental"
  | "crew";

export const TABS: { id: TabId; label: string }[] = [
  { id: "classifieds", label: "Clasificados" },
  { id: "services", label: "Servicios" },
  { id: "storage", label: "Guardería" },
  { id: "gastronomy", label: "Gastronomía" },
  { id: "supplies", label: "Insumos" },
  { id: "groceries", label: "Almacén" },
  { id: "lodging", label: "Alojamiento" },
  { id: "car-rental", label: "Alquiler de Autos" },
  { id: "crew", label: "Empleo" },
];
