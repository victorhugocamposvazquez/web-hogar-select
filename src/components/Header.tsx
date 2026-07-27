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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          className="relative z-10 flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo-white.png"
            alt="Hogar Select"
            width={160}
            height={80}
            className="h-12 w-auto object-contain"
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
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-paper transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-ink/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-paper transition-colors hover:text-green-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
