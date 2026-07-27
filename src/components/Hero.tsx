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
          className="animate-ken object-cover object-[center_35%] brightness-[0.68] contrast-[1.05] sm:object-[center_40%] sm:brightness-[0.72]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.78)_0%,rgba(5,7,10,0.55)_28%,rgba(5,7,10,0.7)_55%,rgba(5,7,10,0.94)_82%,rgba(5,7,10,1)_100%)] sm:bg-[linear-gradient(180deg,rgba(5,7,10,0.72)_0%,rgba(5,7,10,0.48)_28%,rgba(5,7,10,0.62)_55%,rgba(5,7,10,0.92)_82%,rgba(5,7,10,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_78%,rgba(5,7,10,0.82),transparent_52%),radial-gradient(ellipse_at_20%_20%,rgba(30,77,156,0.22),transparent_48%),radial-gradient(ellipse_at_85%_70%,rgba(63,170,70,0.16),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-ink via-ink/85 to-transparent sm:h-[55%] sm:via-ink/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-[max(5rem,env(safe-area-inset-bottom))] pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28">
        <div className="animate-fade-in mb-6 max-w-xl sm:mb-10">
          <Image
            src="/logo-white.png"
            alt="Hogar Select — Soluciones para tu hogar"
            width={420}
            height={210}
            priority
            className="animate-float h-auto w-[min(72vw,260px)] object-contain drop-shadow-[0_16px_48px_rgba(0,0,0,0.7)] sm:w-[min(88vw,380px)]"
          />
        </div>

        <div className="max-w-3xl">
          <h1 className="animate-fade-up font-display text-[clamp(2.15rem,9vw,5.4rem)] leading-[1.02] font-medium tracking-tight text-paper [text-shadow:0_2px_40px_rgba(0,0,0,0.45)] sm:leading-[0.95]">
            Bienestar que se siente
            <span className="brand-gradient-text"> en cada rincón</span>
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed font-light text-[#d5dae3] sm:mt-7 sm:text-lg md:text-xl"
            style={{ animationDelay: "0.18s" }}
          >
            Curamos productos de salud, descanso y belleza pensados para elevar
            la calidad de vida dentro de tu hogar.
          </p>
          <div
            className="animate-fade-up mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: "0.32s" }}
          >
            <a
              href="#coleccion"
              className="btn-primary inline-flex w-full items-center justify-center bg-paper px-7 py-3.5 text-center text-sm font-semibold tracking-[0.12em] text-ink uppercase sm:w-auto sm:tracking-[0.14em]"
            >
              Descubrir colección
            </a>
            <a
              href="#proceso"
              className="btn-ghost inline-flex w-full items-center justify-center border border-paper/30 px-7 py-3.5 text-center text-sm font-medium tracking-[0.12em] text-paper uppercase sm:w-auto sm:tracking-[0.14em]"
            >
              Cómo trabajamos
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up mt-10 flex items-end justify-between gap-6 sm:mt-16"
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
            className="group mx-auto flex flex-col items-center gap-2 text-[10px] tracking-[0.24em] text-paper-muted uppercase transition-colors hover:text-paper sm:mx-0 sm:ml-auto sm:gap-3"
            aria-label="Bajar a la siguiente sección"
          >
            Explorar
            <span className="animate-pulse-line h-8 w-px bg-gradient-to-b from-green-bright to-transparent sm:h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
