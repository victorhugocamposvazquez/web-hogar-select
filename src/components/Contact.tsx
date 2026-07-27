"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const fieldClass =
    "w-full border border-line bg-ink-soft px-4 py-3.5 text-base text-paper outline-none transition-colors focus:border-blue-bright";

  return (
    <section id="contacto" className="bg-ink-soft py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-blue-bright uppercase">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-[2rem] font-medium text-paper sm:mt-5 sm:text-4xl md:text-5xl">
            Cuéntanos qué necesita tu hogar
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed font-light text-paper-muted sm:mt-6 sm:text-lg">
            Estamos aquí para orientarte. Déjanos un mensaje y te responderemos
            con una propuesta personalizada.
          </p>

          <div className="mt-8 space-y-5 text-sm tracking-wide text-paper-muted sm:mt-12">
            <p>
              <span className="block text-[11px] tracking-[0.22em] text-paper/40 uppercase">
                Email
              </span>
              <a
                href="mailto:hola@hogarselect.com"
                className="mt-1 inline-block break-all text-base text-paper transition-colors hover:text-green-bright sm:text-lg"
              >
                hola@hogarselect.com
              </a>
            </p>
            <p>
              <span className="block text-[11px] tracking-[0.22em] text-paper/40 uppercase">
                Teléfono
              </span>
              <a
                href="tel:+34671471228"
                className="mt-1 inline-block text-base text-paper transition-colors hover:text-green-bright sm:text-lg"
              >
                671 47 12 28
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          {sent ? (
            <div className="flex h-full min-h-[240px] flex-col justify-center border border-green/30 bg-ink p-6 sm:min-h-[320px] sm:p-10">
              <p className="font-display text-2xl text-paper sm:text-3xl">
                Mensaje recibido
              </p>
              <p className="mt-4 text-sm text-paper-muted sm:text-base">
                Gracias por escribirnos. Muy pronto nos pondremos en contacto
                contigo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5 border border-line bg-ink p-5 sm:p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                    Nombre
                  </span>
                  <input required name="name" autoComplete="name" className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.2em] text-paper-muted uppercase">
                  Interés
                </span>
                <select
                  name="interest"
                  className={fieldClass}
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
                  className={`${fieldClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="btn-primary w-full bg-gradient-to-r from-blue to-green px-6 py-4 text-sm font-semibold tracking-[0.14em] text-paper uppercase sm:tracking-[0.16em]"
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
