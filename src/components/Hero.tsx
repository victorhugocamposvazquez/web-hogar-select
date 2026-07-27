import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=80"
          alt="Interior sereno de hogar con luz natural"
          fill
          priority
          className="animate-ken object-cover object-[center_40%] brightness-[0.72] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.72)_0%,rgba(5,7,10,0.48)_28%,rgba(5,7,10,0.62)_55%,rgba(5,7,10,0.92)_82%,rgba(5,7,10,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_78%,rgba(5,7,10,0.78),transparent_52%),radial-gradient(ellipse_at_20%_20%,rgba(30,77,156,0.22),transparent_48%),radial-gradient(ellipse_at_85%_70%,rgba(63,170,70,0.16),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink via-ink/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-28">
        <div className="animate-fade-in mb-10 max-w-xl">
          <Image
            src="/logo-white.png"
            alt="Hogar Select — Soluciones para tu hogar"
            width={420}
            height={210}
            priority
            className="animate-float h-auto w-[min(88vw,380px)] object-contain drop-shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
          />
        </div>

        <div className="max-w-3xl rounded-sm bg-ink/25 p-1 backdrop-blur-[2px] md:bg-transparent md:p-0 md:backdrop-blur-none">
          <h1 className="animate-fade-up font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] font-medium tracking-tight text-paper [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]">
            Bienestar que se siente
            <span className="brand-gradient-text"> en cada rincón</span>
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed font-light text-[#d5dae3] md:text-xl"
            style={{ animationDelay: "0.18s" }}
          >
            Curamos productos de salud, descanso y belleza pensados para elevar
            la calidad de vida dentro de tu hogar.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.32s" }}
          >
            <a
              href="#coleccion"
              className="btn-primary bg-paper px-7 py-3.5 text-sm font-semibold tracking-[0.14em] text-ink uppercase"
            >
              Descubrir colección
            </a>
            <a
              href="#proceso"
              className="btn-ghost border border-paper/30 px-7 py-3.5 text-sm font-medium tracking-[0.14em] text-paper uppercase"
            >
              Cómo trabajamos
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up mt-16 flex items-end justify-between gap-6"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="hidden items-center gap-4 md:flex">
            <span className="animate-draw h-px w-16 bg-gradient-to-r from-blue to-green" />
            <p className="text-[11px] tracking-[0.28em] text-paper-muted uppercase">
              Soluciones para tu hogar
            </p>
          </div>

          <a
            href="#vision"
            className="group ml-auto flex flex-col items-center gap-3 text-[10px] tracking-[0.24em] text-paper-muted uppercase transition-colors hover:text-paper"
            aria-label="Bajar a la siguiente sección"
          >
            Explorar
            <span className="animate-pulse-line h-10 w-px bg-gradient-to-b from-green-bright to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
