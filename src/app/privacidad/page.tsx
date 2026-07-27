import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de privacidad | Hogar Select",
  description: "Política de privacidad de Hogar Select.",
};

export default function PrivacidadPage() {
  return (
    <LegalShell title="Política de privacidad" updated="27 de julio de 2026">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales es{" "}
          <strong>Hogar Select</strong>. Para ejercer tus derechos o resolver
          dudas:{" "}
          <a href="mailto:hola@hogarselect.com">hola@hogarselect.com</a>.
        </p>
      </section>

      <section>
        <h2>2. Datos que tratamos</h2>
        <p>Podemos tratar los siguientes datos, según el uso del sitio:</p>
        <ul>
          <li>Datos de identificación y contacto (nombre, email, teléfono)</li>
          <li>Mensajes e intereses indicados en el formulario de contacto</li>
          <li>
            Datos técnicos de navegación (IP, dispositivo, páginas visitadas),
            si aceptas cookies analíticas
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Finalidades</h2>
        <ul>
          <li>Atender solicitudes de información y asesoramiento</li>
          <li>Gestionar la relación comercial cuando proceda</li>
          <li>Mejorar el sitio web mediante analítica agregada (si lo consientes)</li>
          <li>Cumplir obligaciones legales aplicables</li>
        </ul>
      </section>

      <section>
        <h2>4. Base legitimadora</h2>
        <p>
          Tratamos tus datos sobre la base del consentimiento (formularios y
          cookies no necesarias), la ejecución de medidas precontractuales o
          contractuales, y el interés legítimo en la seguridad y mejora del
          servicio, siempre dentro de los límites legales.
        </p>
      </section>

      <section>
        <h2>5. Conservación</h2>
        <p>
          Conservaremos los datos el tiempo necesario para atender tu solicitud
          y, en su caso, durante los plazos legales de responsabilidad. Los
          datos de analítica se conservan según la configuración del proveedor
          y tu consentimiento.
        </p>
      </section>

      <section>
        <h2>6. Destinatarios</h2>
        <p>
          No vendemos tus datos. Pueden acceder a ellos proveedores que nos
          prestan servicios técnicos (hosting, email, analítica), bajo
          obligaciones de confidencialidad y encargados de tratamiento.
        </p>
      </section>

      <section>
        <h2>7. Derechos</h2>
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión,
          oposición, limitación y portabilidad escribiendo a{" "}
          <a href="mailto:hola@hogarselect.com">hola@hogarselect.com</a>.
          También puedes reclamar ante la Agencia Española de Protección de
          Datos (AEPD).
        </p>
      </section>

      <section>
        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger
          los datos frente a accesos no autorizados, pérdida o alteración.
        </p>
      </section>

      <section>
        <h2>9. Actualizaciones</h2>
        <p>
          Podemos actualizar esta política para reflejar cambios legales o de
          servicio. La fecha de actualización figura al inicio de esta página.
        </p>
      </section>
    </LegalShell>
  );
}
