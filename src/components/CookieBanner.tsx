"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hogar-select-cookie-consent";

type Consent = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
};

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean) {
  const value: Consent = {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [openPrefs, setOpenPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      const timer = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
    setAnalytics(existing.analytics);
  }, []);

  const close = (acceptAnalytics: boolean) => {
    writeConsent(acceptAnalytics);
    setAnalytics(acceptAnalytics);
    setVisible(false);
    setOpenPrefs(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[80] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6"
    >
      <div className="mx-auto max-w-3xl border border-white/10 bg-ink-soft shadow-[0_-20px_60px_rgba(0,0,0,0.45)]">
        <div className="p-5 sm:p-6">
          <p
            id="cookie-banner-title"
            className="text-[11px] tracking-[0.24em] text-green-bright uppercase"
          >
            Cookies
          </p>
          <h2 className="mt-2 font-display text-2xl text-paper sm:text-3xl">
            Tu privacidad, con claridad
          </h2>
          <p
            id="cookie-banner-desc"
            className="mt-3 text-sm leading-relaxed text-paper-muted"
          >
            Usamos cookies necesarias para el funcionamiento del sitio y, si lo
            aceptas, cookies analíticas para mejorar la experiencia. Puedes
            cambiar tu elección cuando quieras. Más información en la{" "}
            <Link
              href="/cookies"
              className="text-paper underline decoration-green/50 underline-offset-4 transition-colors hover:text-green-bright"
            >
              Política de cookies
            </Link>
            .
          </p>

          {openPrefs && (
            <div className="mt-5 space-y-3 border border-line bg-ink p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 accent-green"
                />
                <span>
                  <span className="block text-sm font-medium text-paper">
                    Necesarias
                  </span>
                  <span className="mt-1 block text-xs text-paper-muted">
                    Imprescindibles para navegar y recordar tus preferencias.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-green"
                />
                <span>
                  <span className="block text-sm font-medium text-paper">
                    Analíticas
                  </span>
                  <span className="mt-1 block text-xs text-paper-muted">
                    Nos ayudan a entender el uso del sitio de forma agregada.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => close(true)}
              className="btn-primary bg-gradient-to-r from-blue to-green px-5 py-3 text-sm font-semibold tracking-[0.12em] text-paper uppercase"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={() => close(false)}
              className="border border-white/15 px-5 py-3 text-sm font-medium tracking-[0.12em] text-paper uppercase transition-colors hover:border-white/30"
            >
              Solo necesarias
            </button>
            {openPrefs ? (
              <button
                type="button"
                onClick={() => close(analytics)}
                className="border border-green/40 bg-green/10 px-5 py-3 text-sm font-medium tracking-[0.12em] text-paper uppercase"
              >
                Guardar preferencias
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setOpenPrefs(true)}
                className="px-5 py-3 text-sm font-medium tracking-[0.12em] text-paper-muted uppercase transition-colors hover:text-paper"
              >
                Configurar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}
