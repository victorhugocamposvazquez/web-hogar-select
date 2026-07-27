import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type LegalShellProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalShell({ title, updated, children }: LegalShellProps) {
  return (
    <>
      <Header />
      <main className="bg-ink pt-[calc(5rem+env(safe-area-inset-top))] pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="mb-10 flex items-center gap-4 border-b border-line pb-8">
            <Image
              src="/logo-white.png"
              alt=""
              width={120}
              height={60}
              className="h-10 w-auto object-contain opacity-80"
            />
            <div>
              <p className="text-[11px] tracking-[0.22em] text-green-bright uppercase">
                Información legal
              </p>
              <p className="mt-1 text-xs text-paper-muted">
                Actualizado: {updated}
              </p>
            </div>
          </div>

          <h1 className="font-display text-4xl font-medium text-paper sm:text-5xl">
            {title}
          </h1>

          <div className="legal-prose mt-10 space-y-6 text-base leading-relaxed font-light text-paper-muted">
            {children}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-8 text-sm">
            <Link href="/aviso-legal" className="text-paper hover:text-green-bright">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="text-paper hover:text-green-bright">
              Privacidad
            </Link>
            <Link href="/cookies" className="text-paper hover:text-green-bright">
              Cookies
            </Link>
            <Link href="/" className="text-paper-muted hover:text-paper">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
