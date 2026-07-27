"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-blue-bright uppercase">
            Contacto
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium text-paper md:text-5xl">
            Cuéntanos qué necesita tu hogar
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed font-light text-paper-muted">
            Estamos aquí para orientarte. Déjanos un mensaje y te responderemos
            con una propuesta personalizada.
          </p>

          <div className="mt-12 space-y-5 text-sm tracking-wide text-paper-muted">
            <p>
              <span className="block text-[11px] tracking-[0.22em] text-paper/40 uppercase">
                Email
              </span>
              <a
                href="mailto:hola@hogarselect.com"
                className="mt-1 inline-block text-lg text-paper transition-colors hover:text-green-bright"
              >
                hola@hogarselect.com
              </a>
            </p>
            <p>
              <span className="block text-[11px] tracking-[0.22em] text-paper/40 uppercase">
                Teléfono
              </span>
              <a
                href="tel:+34900000000"
                className="mt-1 inline-block text-lg text-paper transition-colors hover:text-green-bright"
              >
                +34 900 000 000
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          {sent ? (
            <div className="flex h-full min-h-[320px] flex-col justify-center border border-green/30 bg-ink p-10">
              <p className="font-display text-3xl text-paper">
                Mensaje recibido
              </p>
              <p className="mt-4 text-paper-muted">
                Gracias por escribirnos. Muy pronto nos pondremos en contacto
                contigo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5 border border-line bg-ink p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                    Nombre
                  </span>
                  <input
                    required
                    name="name"
                    className="w-full border border-line bg-ink-soft px-4 py-3 text-paper outline-none transition-colors focus:border-blue-bright"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full border border-line bg-ink-soft px-4 py-3 text-paper outline-none transition-colors focus:border-blue-bright"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                  Interés
                </span>
                <select
                  name="interest"
                  className="w-full border border-line bg-ink-soft px-4 py-3 text-paper outline-none transition-colors focus:border-blue-bright"
                  defaultValue="descanso"
                >
                  <option value="salud">Salud</option>
                  <option value="descanso">Descanso</option>
                  <option value="belleza">Belleza</option>
                  <option value="otro">Asesoramiento general</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                  Mensaje
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-none border border-line bg-ink-soft px-4 py-3 text-paper outline-none transition-colors focus:border-blue-bright"
                />
              </label>
              <button
                type="submit"
                className="btn-primary w-full bg-gradient-to-r from-blue to-green px-6 py-4 text-sm font-semibold tracking-[0.16em] text-paper uppercase"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
