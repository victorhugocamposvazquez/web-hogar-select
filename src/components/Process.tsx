import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Asesoramiento",
    text: "Escuchamos tu rutina, tu espacio y lo que quieres mejorar: salud, descanso o belleza.",
  },
  {
    number: "02",
    title: "Selección",
    text: "Filtramos opciones y te proponemos solo lo que encaja de verdad, sin sobrecargar.",
  },
  {
    number: "03",
    title: "Entrega",
    text: "Coordinamos la llegada y te acompañamos para que el cambio se note desde el primer día.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-blue-bright uppercase">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium text-paper md:text-5xl">
            Un proceso claro, de principio a fin
          </h2>
          <p className="mt-5 max-w-xl text-lg font-light text-paper-muted">
            Tres pasos para transformar tu hogar sin complicaciones ni decisiones
            a ciegas.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[2.75rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-blue via-paper/20 to-green md:block"
          />

          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={(i + 1) as 1 | 2 | 3}
              className="h-full"
            >
              <article className="interactive-lift group relative h-full border border-line bg-ink/60 p-8 backdrop-blur-sm transition-colors hover:border-green/35 hover:bg-ink-lift md:p-9">
                <span className="font-display text-5xl text-transparent [-webkit-text-stroke:1px_rgba(242,244,247,0.22)] transition-colors group-hover:[-webkit-text-stroke-color:rgba(85,196,92,0.55)]">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-3xl font-medium text-paper">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed font-light text-paper-muted">
                  {step.text}
                </p>
                <div className="mt-8 h-px w-10 origin-left bg-gradient-to-r from-blue to-green transition-all duration-500 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
