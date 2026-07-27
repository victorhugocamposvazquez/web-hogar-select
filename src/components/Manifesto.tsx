import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="vision" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-blue/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-green-bright uppercase">
            Nuestra visión
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-medium text-paper md:text-5xl lg:text-[3.4rem]">
            Un hogar no se decora.
            <br />
            Se cuida.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="space-y-6 text-lg leading-relaxed font-light text-paper-muted md:text-xl">
            <p>
              En Hogar Select seleccionamos soluciones que mejoran cómo
              respiras, cómo descansas y cómo te relacionas con tu cuerpo en el
              día a día.
            </p>
            <p>
              No vendemos tendencias. Curamos productos con criterio: materiales
              nobles, tecnología silenciosa y resultados que se notan desde la
              primera noche.
            </p>
            <div className="section-rule mt-10 max-w-md" />
            <p className="pt-2 font-display text-2xl text-paper italic md:text-3xl">
              “El verdadero lujo es despertar mejor.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
