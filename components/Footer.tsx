const COLUMNS = [
  {
    title: "Navigate",
    links: [
      { label: "Fleet", href: "#fleet" },
      { label: "Port Sanctuary", href: "#heritage" },
      { label: "Heritage", href: "#heritage" },
    ],
  },
  {
    title: "Inquiries",
    links: [
      { label: "Private Viewings", href: "#contact" },
      { label: "Consign a Vessel", href: "#contact" },
      { label: "Concierge", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Puerto de Punta del Este, Uruguay", href: "#contact" },
      { label: "+598 4244 0000", href: "tel:+59842440000" },
      { label: "inquiries@nautapde.com", href: "mailto:inquiries@nautapde.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <p className="text-[13px] font-semibold tracking-[0.2em] text-neutral-900">
              NAUTA&nbsp;PDE
            </p>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-500">
              A private yacht and sailing yacht dealership at the Port of
              Punta del Este.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[13px] font-medium text-neutral-900">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Nauta PDE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
