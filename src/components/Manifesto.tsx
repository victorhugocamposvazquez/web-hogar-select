import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="vision" className="relative overflow-hidden bg-ink py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[280px] w-[280px] rounded-full bg-blue/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-green-bright uppercase">
            Nuestra visión
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight font-medium text-paper sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Un hogar no se decora.
            <br />
            Se cuida.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="space-y-5 text-base leading-relaxed font-light text-paper-muted sm:space-y-6 sm:text-lg md:text-xl">
            <p>
              En Hogar Select seleccionamos soluciones que mejoran cómo
              respiras, cómo descansas y cómo te relacionas con tu cuerpo en el
              día a día.
            </p>
            <p>
              No vendemos tendencias. Escogemos cada producto con rigor:
              materiales de calidad, tecnología silenciosa y resultados que se
              notan desde la primera noche.
            </p>
            <div className="section-rule mt-8 max-w-md sm:mt-10" />
            <p className="pt-2 font-display text-xl text-paper italic sm:text-2xl md:text-3xl">
              “El verdadero lujo es despertar mejor.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
