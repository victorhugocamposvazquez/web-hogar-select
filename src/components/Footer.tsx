import Image from "next/image";

const links = [
  { href: "#pilares", label: "Pilares" },
  { href: "#proceso", label: "Proceso" },
  { href: "#coleccion", label: "Colección" },
  { href: "#voces", label: "Voces" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <Image
            src="/logo-white.png"
            alt="Hogar Select"
            width={200}
            height={100}
            className="h-12 w-auto object-contain sm:h-16"
          />
          <p className="mt-4 max-w-sm text-sm font-light text-paper-muted">
            Soluciones premium de salud, descanso y belleza para hogares que
            valoran el bienestar.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-[12px] tracking-[0.2em] text-paper-muted uppercase transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="section-rule" />

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs tracking-wide text-paper-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p>
          © {new Date().getFullYear()} Hogar Select. Todos los derechos
          reservados.
        </p>
        <p className="tracking-[0.18em] uppercase">Soluciones para tu hogar</p>
      </div>
    </footer>
  );
}
