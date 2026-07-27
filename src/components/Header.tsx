"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#pilares", label: "Pilares" },
  { href: "#proceso", label: "Proceso" },
  { href: "#coleccion", label: "Colección" },
  { href: "#voces", label: "Voces" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
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
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
        <a
          href="#inicio"
          className="relative flex items-center gap-3 transition-opacity hover:opacity-80"
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
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-[12px] font-medium tracking-[0.18em] uppercase ${
                active === link.href ? "is-active text-paper" : "text-paper-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-ghost border border-blue/50 bg-blue/15 px-5 py-2.5 text-[12px] font-medium tracking-[0.16em] text-paper uppercase hover:border-green/60 hover:bg-green/15"
          >
            Hablar con nosotros
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="relative flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`block h-px w-full bg-paper transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-paper transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-paper transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ paddingTop: "calc(4rem + env(safe-area-inset-top))" }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-7 px-6 pb-16">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-paper transition-colors active:text-green-bright sm:text-4xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 border border-green/50 bg-green/10 px-6 py-3.5 text-[12px] font-medium tracking-[0.16em] text-paper uppercase"
          >
            Hablar con nosotros
          </a>
        </nav>
      </div>
    </header>
  );
}
