"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#pilares", label: "Pilares" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#coleccion", label: "Colección" },
  { href: "/#voces", label: "Voces" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["pilares", "proceso", "coleccion", "voces", "contacto"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`/#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
          <Link
            href="/#inicio"
            className="relative z-[71] flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-white.png"
              alt="Hogar Select"
              width={160}
              height={80}
              className="h-9 w-auto object-contain sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[12px] font-medium tracking-[0.18em] uppercase ${
                  active === link.href
                    ? "is-active text-paper"
                    : "text-paper-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="btn-ghost border border-blue/50 bg-blue/15 px-5 py-2.5 text-[12px] font-medium tracking-[0.16em] text-paper uppercase hover:border-green/60 hover:bg-green/15"
            >
              Hablar con nosotros
            </Link>
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative z-[71] flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="relative block h-4 w-6">
              <span
                className={`absolute top-0 left-0 block h-0.5 w-6 rounded-full bg-paper transition-all duration-300 ${
                  open ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-[7px] left-0 block h-0.5 w-6 rounded-full bg-paper transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-paper transition-all duration-300 ${
                  open ? "bottom-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 z-[65] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute inset-y-0 right-0 flex w-[min(100vw,22rem)] flex-col border-l border-white/10 bg-ink shadow-[-24px_0_60px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[calc(4rem+env(safe-area-inset-top))] shrink-0" />

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
            <p className="mb-4 text-[11px] tracking-[0.24em] text-paper-muted uppercase">
              Menú
            </p>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 font-display text-3xl text-paper transition-colors active:text-green-bright ${
                  active === link.href ? "text-green-bright" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="shrink-0 border-t border-white/10 px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center bg-gradient-to-r from-blue to-green px-6 py-3.5 text-[12px] font-semibold tracking-[0.14em] text-paper uppercase"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
