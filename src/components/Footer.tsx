"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#pilares", label: "Pilares" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#coleccion", label: "Colección" },
  { href: "/#voces", label: "Voces" },
  { href: "/#contacto", label: "Contacto" },
];

const legal = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  const resetCookies = () => {
    localStorage.removeItem("hogar-select-cookie-consent");
    window.location.reload();
  };

  return (
    <footer className="border-t border-line bg-ink pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
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

        <div>
          <p className="text-[11px] tracking-[0.22em] text-paper/40 uppercase">
            Navegación
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-paper-muted transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.22em] text-paper/40 uppercase">
            Legal
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-paper-muted transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={resetCookies}
              className="py-1 text-left text-sm text-paper-muted transition-colors hover:text-paper"
            >
              Configurar cookies
            </button>
          </nav>
        </div>
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
