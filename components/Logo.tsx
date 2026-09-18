function ShipWheelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M15 12h5" />
      <path d="M14.12 14.12l3.54 3.54" />
      <path d="M12 15v5" />
      <path d="M9.88 14.12l-3.54 3.54" />
      <path d="M9 12H4" />
      <path d="M9.88 9.88 6.34 6.34" />
      <path d="M12 9V4" />
      <path d="M14.12 9.88l3.54-3.54" />
      <circle cx="21.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.9" cy="18.9" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="21.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5.1" cy="18.9" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="2.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5.1" cy="5.1" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="2.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.9" cy="5.1" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <ShipWheelIcon className="h-6 w-6 shrink-0 text-blue-600" />
      <span className="flex items-baseline gap-2.5">
        <span
          className={`text-xl font-bold tracking-[0.08em] transition-colors duration-300 ${
            light ? "text-white" : "text-neutral-900"
          }`}
        >
          NAUTA
        </span>
        <span
          className={`text-[11px] font-medium tracking-[0.2em] transition-colors duration-300 ${
            light ? "text-white/70" : "text-neutral-500"
          }`}
        >
          PUNTA DEL ESTE
        </span>
      </span>
    </span>
  );
}
