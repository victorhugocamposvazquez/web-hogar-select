import { Reveal } from "./Reveal";

const items = [
  {
    category: "Descanso",
    title: "Sistemas de descanso premium",
    detail: "Colchones, bases y textiles con certificación de confort.",
  },
  {
    category: "Salud",
    title: "Aire y agua en su mejor versión",
    detail: "Purificadores, humidificadores y filtración de última generación.",
  },
  {
    category: "Belleza",
    title: "Rituales de cuidado en casa",
    detail: "Dispositivos y essentials para una rutina elegante y efectiva.",
  },
  {
    category: "Ambiente",
    title: "Atmósferas que regeneran",
    detail: "Iluminación cálida, aromas y detalles que cambian el estado de ánimo.",
  },
];

export function Collection() {
  return (
    <section id="coleccion" className="relative bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-green/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] tracking-[0.28em] text-green-bright uppercase">
                Colección
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-medium text-paper md:text-5xl">
                Una selección exigente, sin ruido
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed font-light text-paper-muted md:text-right">
              Cada producto pasa un filtro de calidad, diseño y utilidad real.
              Menos catálogo. Más criterio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="h-full bg-ink-soft"
            >
              <article className="group h-full p-8 transition-all duration-500 hover:bg-ink-lift hover:pl-10 md:p-10 md:hover:pl-12">
                <p className="text-[11px] tracking-[0.24em] text-blue-bright uppercase transition-colors group-hover:text-green-bright">
                  {item.category}
                </p>
                <h3 className="mt-5 font-display text-3xl font-medium text-paper transition-colors duration-500 group-hover:text-green-bright md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed font-light text-paper-muted">
                  {item.detail}
                </p>
                <div className="mt-10 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue to-green transition-transform duration-700 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
