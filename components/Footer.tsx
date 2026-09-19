import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Navegación",
    links: [
      { label: "Flota", href: "/#fleet" },
      { label: "Tiendas", href: "/tiendas" },
      { label: "Herencia", href: "/#heritage" },
    ],
  },
  {
    title: "Consultas",
    links: [
      { label: "Visitas Privadas", href: "#contact" },
      { label: "Consigná tu Embarcación", href: "#contact" },
      { label: "Conserjería", href: "#contact" },
    ],
  },
  {
    title: "Contacto",
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
            <Logo />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-500">
              Una concesionaria privada de yates y veleros en el Puerto de
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
            &copy; {new Date().getFullYear()} Nauta PDE. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
