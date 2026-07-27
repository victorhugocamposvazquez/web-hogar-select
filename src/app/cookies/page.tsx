import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de cookies | Hogar Select",
  description: "Política de cookies de Hogar Select.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Política de cookies" updated="27 de julio de 2026">
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo
          cuando visitas un sitio web. Permiten recordar preferencias, mejorar
          la navegación o elaborar estadísticas de uso.
        </p>
      </section>

      <section>
        <h2>2. Tipos de cookies que usamos</h2>
        <h3>Cookies necesarias</h3>
        <p>
          Imprescindibles para el funcionamiento del sitio (por ejemplo,
          recordar tu decisión sobre cookies). No requieren consentimiento.
        </p>
        <h3>Cookies analíticas</h3>
        <p>
          Nos ayudan a conocer, de forma agregada, cómo se usa el sitio
          (páginas visitadas, dispositivo, etc.). Solo se activan si las
          aceptas en el banner de cookies.
        </p>
      </section>

      <section>
        <h2>3. Cookies concretas</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cookie / clave</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hogar-select-cookie-consent</td>
                <td>Necesaria</td>
                <td>Guardar tu preferencia de cookies</td>
                <td>1 año (localStorage)</td>
              </tr>
              <tr>
                <td>Analítica (si se activa)</td>
                <td>Analítica</td>
                <td>Medición agregada de uso del sitio</td>
                <td>Según proveedor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>4. Cómo gestionar las cookies</h2>
        <p>
          Puedes aceptar, rechazar o configurar las cookies no necesarias desde
          el banner que aparece al entrar, o volver a abrirlo desde el enlace
          “Configurar cookies” del pie de página. También puedes eliminar o
          bloquear cookies desde la configuración de tu navegador.
        </p>
      </section>

      <section>
        <h2>5. Más información</h2>
        <p>
          Para saber cómo tratamos tus datos personales, consulta la{" "}
          <a href="/privacidad">Política de privacidad</a>. Si tienes dudas:
          {" "}
          <a href="mailto:hola@hogarselect.com">hola@hogarselect.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
