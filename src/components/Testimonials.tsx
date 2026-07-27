import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Cambiar el sistema de descanso fue un antes y un después. Dormimos mejor y notamos más energía cada mañana.",
    name: "Laura M.",
    role: "Cliente · Descanso",
  },
  {
    quote:
      "Nos orientaron con un purificador adecuado para nuestro piso. El aire se nota más limpio y la casa más fresca.",
    name: "Carlos R.",
    role: "Cliente · Salud",
  },
  {
    quote:
      "El ritual de belleza en casa que nos propusieron es sencillo y elegante. Se nota el cuidado detrás de cada recomendación.",
    name: "Elena V.",
    role: "Cliente · Belleza",
  },
];

export function Testimonials() {
  return (
    <section id="voces" className="bg-ink py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] tracking-[0.28em] text-green-bright uppercase">
                Voces
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[2rem] font-medium text-paper sm:text-4xl md:text-5xl">
                Hogares que ya sienten la diferencia
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light text-paper-muted sm:text-base md:text-right">
              Historias reales de quienes eligieron cuidarse desde casa.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i + 1) as 1 | 2 | 3}
              className="h-full"
            >
              <figure className="interactive-lift group flex h-full flex-col border border-line bg-ink-soft p-6 transition-colors hover:border-blue/40 hover:bg-ink-lift sm:p-8 md:p-9">
                <span
                  aria-hidden
                  className="font-display text-4xl leading-none text-blue-bright/70 transition-colors group-hover:text-green-bright sm:text-5xl"
                >
                  “
                </span>
                <blockquote className="mt-3 flex-1 font-display text-lg leading-snug text-paper sm:mt-4 sm:text-xl md:text-2xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 sm:mt-8 sm:pt-5">
                  <p className="text-sm font-medium tracking-wide text-paper">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.18em] text-paper-muted uppercase">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
