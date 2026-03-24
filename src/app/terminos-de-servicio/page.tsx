'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TerminosDeServicio() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-12 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl font-bold text-white lg:text-5xl">
              Términos de Servicio
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Condiciones de uso de Medic Scan 360 — Imágenes Avanzadas
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-4xl text-brand-gray"
          >
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg">
                Bienvenido a <strong>Medic Scan 360 — Imágenes Avanzadas</strong>. Estos Términos de Servicio rigen
                el uso de nuestros servicios de diagnóstico por imágenes, sitio web y todas nuestras plataformas.
                Al acceder o utilizar nuestros servicios, aceptas estos términos en su totalidad.
              </p>
              <p className="mt-4 text-sm text-brand-gray/70">
                <strong>Última actualización:</strong> Marzo 2026
              </p>
            </div>

            {/* 1. Descripción del Servicio */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                1. Descripción del Servicio
              </h2>
              <p>
                Medic Scan 360 — Imágenes Avanzadas proporciona servicios de diagnóstico por imágenes médicas,
                incluyendo pero no limitado a:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Resonancia Magnética (RM)</li>
                <li>Tomografía Computarizada (TC)</li>
                <li>Ecografía</li>
                <li>Radiografía Digital</li>
                <li>Procedimientos imagenológicos complementarios</li>
              </ul>
              <p className="mt-4">
                Nuestros servicios se prestan en nuestras instalaciones ubicadas en Av. Bolognesi 131, Chimbote,
                Áncash, Perú.
              </p>
            </section>

            {/* 2. Obligaciones del Usuario */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                2. Obligaciones del Usuario
              </h2>
              <p>Al utilizar nuestros servicios, te comprometes a:</p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Proporcionar información exacta y veraz en todos los formularios</li>
                <li>Cumplir con las instrucciones pre-examen proporcionadas</li>
                <li>Informar sobre alergias, implantes metálicos y otras condiciones médicas relevantes</li>
                <li>Respetar las normas de conducta en nuestras instalaciones</li>
                <li>No interferir con el funcionamiento de equipos médicos</li>
                <li>Cumplir con las regulaciones de privacidad y confidencialidad</li>
                <li>Abonar los costos de servicios según lo acordado</li>
              </ul>
            </section>

            {/* 3. Propiedad Intelectual */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                3. Derechos de Propiedad Intelectual
              </h2>
              <p>
                Todos los contenidos del sitio web, incluyendo texto, imágenes, logotipos, gráficos y software,
                son propiedad de Medic Scan 360 o de sus proveedores de contenido y están protegidos por leyes
                de derechos de autor peruanas e internacionales.
              </p>
              <p className="mt-4">
                Los estudios e informes radiológicos generados son propiedad de Medic Scan 360, pero el usuario
                tiene derecho a obtener copias de sus propios estudios para uso personal o consulta médica con
                otros profesionales.
              </p>
              <p className="mt-4">
                Está prohibido reproducir, distribuir o modificar cualquier contenido sin autorización expresa
                de Medic Scan 360.
              </p>
            </section>

            {/* 4. Limitaciones de Responsabilidad */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                4. Limitaciones de Responsabilidad
              </h2>
              <p>
                En la máxima extensión permitida por la ley, Medic Scan 360 no será responsable por:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Daños indirectos, incidentales, especiales o consecuentes</li>
                <li>Pérdida de ingresos, datos o ganancias esperadas</li>
                <li>Cualquier daño resultante del uso o la imposibilidad de usar nuestros servicios</li>
                <li>Errores en la transmisión o recepción de información</li>
              </ul>
              <p className="mt-4">
                Nuestra responsabilidad se limitará al monto pagado por los servicios prestados.
              </p>
            </section>

            {/* 5. Descargo Médico */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                5. Descargo de Responsabilidad Médica
              </h2>
              <p>
                <strong>IMPORTANTE:</strong> Los estudios de imagen realizados por Medic Scan 360 son herramientas
                de diagnóstico que deben ser interpretados por médicos radiólogos y especialistas calificados.
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  Los informes radiológicos son opiniones técnicas y deben ser evaluados por un médico tratante
                </li>
                <li>
                  Las imágenes por sí solas no constituyen un diagnóstico médico completo
                </li>
                <li>
                  El usuario asume toda responsabilidad por cualquier acción tomada basada en nuestros informes
                  sin consultar a un médico
                </li>
                <li>
                  Medic Scan 360 no proporciona tratamiento médico ni prescripción de medicamentos
                </li>
                <li>
                  Los resultados deben ser interpretados por profesionales médicos cualificados
                </li>
              </ul>
            </section>

            {/* 6. Política de Cancelación */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                6. Política de Cancelación y Reprogramación
              </h2>
              <p>
                <strong>Reprogramación:</strong> Las citas pueden reprogramarse sin penalidad con al menos 24 horas
                de anticipación.
              </p>
              <p className="mt-4">
                <strong>Cancelación:</strong> Las cancelaciones realizadas con menos de 24 horas de anticipación
                podrán incurrir en un cargo del 50% del costo del estudio.
              </p>
              <p className="mt-4">
                <strong>No presentarse:</strong> Si el usuario no se presenta a la cita sin previo aviso, se cobará
                el 100% del costo del estudio.
              </p>
              <p className="mt-4">
                Excepciones por emergencias médicas pueden ser evaluadas caso por caso.
              </p>
            </section>

            {/* 7. Política de Devoluciones y Reembolsos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                7. Política de Devoluciones y Reembolsos
              </h2>
              <p>
                Los reembolsos se otorgarán en los siguientes casos:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>El estudio no pudo realizarse por razones médicas documentadas</li>
                <li>Error técnico de Medic Scan 360 en la prestación del servicio</li>
                <li>Fallo del equipo que requiera reprogramación</li>
              </ul>
              <p className="mt-4">
                Las solicitudes de reembolso deben presentarse dentro de 30 días de la cita. El reembolso se
                procesará dentro de 10 días hábiles.
              </p>
            </section>

            {/* 8. Ley Aplicable y Jurisdicción */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                8. Ley Aplicable y Jurisdicción
              </h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes de la República del Perú, sin referencia a
                conflictos de principios legales.
              </p>
              <p className="mt-4">
                Cualquier disputa surgida del uso de nuestros servicios será resuelta en los juzgados competentes
                de Chimbote, Áncash, Perú, de acuerdo con la ley procesal peruana.
              </p>
            </section>

            {/* 9. Resolución de Disputas */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                9. Resolución de Disputas
              </h2>
              <p>
                Antes de proceder legalmente, ambas partes se comprometen a:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <strong>Negociación:</strong> Intentar resolver la disputa mediante comunicación directa en 15 días
                </li>
                <li>
                  <strong>Mediación:</strong> Si la negociación falla, someterse a mediación ante un tercero neutral
                </li>
                <li>
                  <strong>Litigio:</strong> Solo después de agotar los pasos anteriores
                </li>
              </ul>
              <p className="mt-4">
                Las quejas sobre atención médica pueden ser presentadas también ante SUSALUD siguiendo los
                procedimientos establecidos.
              </p>
            </section>

            {/* 10. Modificación de Términos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                10. Modificación de Términos
              </h2>
              <p>
                Medic Scan 360 se reserva el derecho de modificar estos Términos de Servicio en cualquier momento.
                Los cambios entrarán en vigor cuando se publiquen en el sitio web o se comuniquen por correo
                electrónico.
              </p>
              <p className="mt-4">
                El continuo uso de nuestros servicios después de cambios constituye aceptación de los nuevos términos.
              </p>
            </section>

            {/* 11. Terminación de Servicios */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                11. Terminación de Servicios
              </h2>
              <p>
                Medic Scan 360 se reserva el derecho de suspender o terminar servicios a un usuario si:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Viola estos Términos de Servicio</li>
                <li>Presenta comportamiento agresivo o abusivo hacia el personal</li>
                <li>No paga por servicios prestados dentro de 30 días de vencimiento</li>
                <li>Representa un riesgo para la seguridad de otras personas o el equipo</li>
              </ul>
            </section>

            {/* 12. Privacidad y Protección de Datos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                12. Privacidad y Protección de Datos
              </h2>
              <p>
                El tratamiento de datos personales se regirá por nuestra Política de Privacidad, que cumple con:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Ley N° 29733 (Ley de Protección de Datos Personales)</li>
                <li>D.S. N° 003-2013-JUS (Reglamento)</li>
                <li>Normas de SUSALUD y MINSA</li>
              </ul>
              <p className="mt-4">
                Consulta nuestra Política de Privacidad para detalles sobre recopilación, uso y protección de datos.
              </p>
            </section>

            {/* 13. Conformidad Regulatoria */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                13. Conformidad Regulatoria
              </h2>
              <p>
                Medic Scan 360 es un establecimiento de salud debidamente autorizado y registrado ante:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>SUSALUD (Superintendencia Nacional de Salud)</li>
                <li>MINSA (Ministerio de Salud del Perú)</li>
                <li>SUNAT (Superintendencia Nacional de Aduanas y de Administración Tributaria)</li>
              </ul>
              <p className="mt-4">
                Nuestros médicos radiólogos cumplen con los estándares de capacitación y certificación exigidos
                por las autoridades sanitarias peruanas.
              </p>
            </section>

            {/* 14. Contacto */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                14. Contacto y Soporte
              </h2>
              <p>
                Para preguntas sobre estos Términos de Servicio o para reportar problemas, contáctanos:
              </p>
              <div className="mt-4 space-y-2 rounded-lg bg-brand-blue/5 p-6 text-base">
                <p><strong>Email:</strong> informes@medic-scan.com</p>
                <p><strong>Teléfono:</strong> +51 991 717 939</p>
                <p><strong>Dirección:</strong> Av. Bolognesi 131, Chimbote, Áncash, Perú</p>
                <p><strong>Horario:</strong> Lunes a Sábado, 8:00 AM - 8:00 PM</p>
              </div>
            </section>

            {/* Final Note */}
            <div className="mt-12 border-t pt-8">
              <p className="text-sm text-brand-gray/70">
                Al utilizar los servicios de Medic Scan 360, reconoces que has leído, entendido y aceptas estar
                obligado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte, por favor no
                utilices nuestros servicios.
              </p>
              <p className="mt-4 text-sm text-brand-gray/70">
                Estos Términos de Servicio constituyen el acuerdo completo entre tú y Medic Scan 360 respecto al
                uso de nuestros servicios y reemplazan cualquier acuerdo previo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}