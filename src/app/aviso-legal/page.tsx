import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Aviso legal | Hogar Select",
  description: "Aviso legal de Hogar Select.",
};

export default function AvisoLegalPage() {
  return (
    <LegalShell title="Aviso legal" updated="27 de julio de 2026">
      <section>
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento de la normativa vigente, se informa de que el titular
          de este sitio web es:
        </p>
        <ul>
          <li>
            <strong>Denominación:</strong> Hogar Select
          </li>
          <li>
            <strong>Actividad:</strong> Comercialización de productos de salud,
            descanso y belleza para el hogar
          </li>
          <li>
            <strong>Email de contacto:</strong>{" "}
            <a href="mailto:hola@hogarselect.com">hola@hogarselect.com</a>
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+34900000000">+34 900 000 000</a>
          </li>
        </ul>
        <p>
          Los datos societarios completos (NIF/CIF y domicilio fiscal) se
          facilitarán en el momento de formalizar la relación comercial o bajo
          petición a través de los canales de contacto.
        </p>
      </section>

      <section>
        <h2>2. Objeto</h2>
        <p>
          El presente aviso legal regula el acceso, navegación y uso del sitio
          web de Hogar Select, así como las responsabilidades derivadas de la
          utilización de sus contenidos e información.
        </p>
      </section>

      <section>
        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso al sitio implica la aceptación de este aviso legal. El
          usuario se compromete a hacer un uso adecuado de los contenidos y a no
          emplearlos para actividades ilícitas, contrarias a la buena fe o que
          puedan dañar derechos de terceros.
        </p>
      </section>

      <section>
        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, diseño, logotipo, imágenes, código y demás elementos del
          sitio son titularidad de Hogar Select o de terceros que han autorizado
          su uso. Queda prohibida su reproducción, distribución o transformación
          sin autorización previa.
        </p>
      </section>

      <section>
        <h2>5. Responsabilidad</h2>
        <p>
          Hogar Select procura que la información publicada sea veraz y esté
          actualizada, sin garantizar la ausencia total de errores tipográficos
          o de omisiones. No se responsabiliza de daños derivados del uso del
          sitio, de fallos técnicos o de contenidos de terceros enlazados.
        </p>
      </section>

      <section>
        <h2>6. Enlaces</h2>
        <p>
          Este sitio puede incluir enlaces a páginas de terceros. Hogar Select
          no controla ni asume responsabilidad sobre dichos contenidos externos.
        </p>
      </section>

      <section>
        <h2>7. Legislación aplicable</h2>
        <p>
          Este aviso legal se rige por la legislación española. Para cualquier
          controversia, las partes se someten a los juzgados y tribunales del
          domicilio del titular, salvo norma imperativa en contrario.
        </p>
      </section>
    </LegalShell>
  );
}
