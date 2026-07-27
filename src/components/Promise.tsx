import Image from "next/image";
import { Reveal } from "./Reveal";

const promises = [
  {
    title: "Curaduría real",
    text: "No trabajamos con volumen. Trabajamos con estándares.",
  },
  {
    title: "Asesoramiento cercano",
    text: "Te ayudamos a elegir lo que tu hogar y tu rutina realmente necesitan.",
  },
  {
    title: "Calidad tangible",
    text: "Materiales, acabados y rendimiento que se perciben desde el primer uso.",
  },
];

export function Promise() {
  return (
    <section id="compromiso" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
          alt="Espacio doméstico elegante y luminoso"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.95)_0%,rgba(5,7,10,0.7)_55%,rgba(5,7,10,0.55)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-green-bright uppercase">
            Compromiso
          </p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight font-medium text-paper md:text-5xl lg:text-[3.5rem]">
            Elegimos por ti lo que merece estar en tu casa
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed font-light text-paper-muted">
            Detrás de cada recomendación hay una pregunta sencilla: ¿esto mejora
            de verdad tu salud, tu descanso o tu belleza cotidiana?
          </p>
        </Reveal>

        <div className="space-y-8">
          {promises.map((item, i) => (
            <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group border-l border-blue/40 pl-6 transition-all duration-500 hover:border-green/60 hover:pl-8">
                <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-green-bright md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-light text-paper-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
