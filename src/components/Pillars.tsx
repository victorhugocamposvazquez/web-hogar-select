import Image from "next/image";
import { Reveal } from "./Reveal";

const pillars = [
  {
    id: "salud",
    title: "Salud",
    accent: "from-blue to-blue-bright",
    number: "01",
    copy: "Purificación del aire, hidratación inteligente y hábitos que protegen tu bienestar diario sin esfuerzo.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    alt: "Momento de bienestar y salud en casa",
  },
  {
    id: "descanso",
    title: "Descanso",
    accent: "from-blue-bright to-green",
    number: "02",
    copy: "Camas, textiles y entornos pensados para un sueño profundo. Porque recuperarse también es producir.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80",
    alt: "Dormitorio sereno para un descanso profundo",
  },
  {
    id: "belleza",
    title: "Belleza",
    accent: "from-green to-green-bright",
    number: "03",
    copy: "Rituales de cuidado personal que convierten el baño y el tocador en espacios de regeneración.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
    alt: "Ritual de belleza y cuidado personal",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-blue-bright uppercase">
            Tres pilares
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium text-paper md:text-5xl">
            Todo lo que tu hogar necesita para cuidarte
          </h2>
        </Reveal>
      </div>

      <div className="space-y-0">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.id}
            className={`grid min-h-[70vh] lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[48vh] overflow-hidden lg:min-h-full">
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                className="object-cover transition-transform duration-[1.8s] ease-out will-change-transform hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/25" />
            </div>

            <div className="flex items-center bg-ink px-8 py-16 md:px-14 lg:px-20">
              <Reveal className="w-full max-w-lg">
                <span className="font-display text-6xl text-paper/10 md:text-7xl">
                  {pillar.number}
                </span>
                <div
                  className={`mt-4 h-1 w-16 bg-gradient-to-r ${pillar.accent}`}
                />
                <h3 className="mt-8 font-display text-5xl font-medium text-paper md:text-6xl">
                  {pillar.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed font-light text-paper-muted">
                  {pillar.copy}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
