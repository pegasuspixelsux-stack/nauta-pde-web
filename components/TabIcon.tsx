import type { TabId } from "@/lib/portEcosystem";

export default function TabIcon({
  id,
  className,
}: {
  id: TabId;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (id) {
    case "classifieds":
      return (
        <svg {...common}>
          <path d="M3 15h18l-2 5H5l-2-5Z" />
          <path d="M6 15V6l6-3 6 3v9" />
          <path d="M9 15V9h6v6" />
        </svg>
      );
    case "services":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z" />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <path d="M3 9.5 12 4l9 5.5" />
          <path d="M5 10v9h14v-9" />
          <path d="M10 19v-6h4v6" />
        </svg>
      );
    case "gastronomy":
      return (
        <svg {...common}>
          <path d="M7 3v7a2 2 0 1 0 4 0V3" />
          <path d="M9 10v11" />
          <path d="M16 3c-1.2 0-2 1.5-2 4s.8 4 2 4v10" />
        </svg>
      );
    case "supplies":
      return (
        <svg {...common}>
          <path d="M20.5 11.5 12.5 3.5a1.5 1.5 0 0 0-2.1 0L3.5 10.4a1.5 1.5 0 0 0 0 2.1l8 8a1.5 1.5 0 0 0 2.1 0l6.9-6.9a1.5 1.5 0 0 0 0-2.1Z" />
          <circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "groceries":
      return (
        <svg {...common}>
          <path d="M6 8h15l-1.5 9h-12z" />
          <path d="M6 8 4.5 4H2" />
          <path d="M9.5 12.5v3" />
          <path d="M14.5 12.5v3" />
        </svg>
      );
    case "lodging":
      return (
        <svg {...common}>
          <path d="M3 19v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
          <path d="M3 15h18" />
          <path d="M7 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3" />
        </svg>
      );
    case "car-rental":
      return (
        <svg {...common}>
          <path d="M4 16V11l2-5h12l2 5v5" />
          <path d="M4 16h16" />
          <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "crew":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
          <path d="M16 8.2a2.7 2.7 0 1 1 0 5.4" />
          <path d="M17 14.6c2.4.4 4 2.2 4 5.4" />
        </svg>
      );
    default:
      return null;
  }
}
