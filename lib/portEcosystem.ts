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
