'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PoliticaDePrivacidad() {
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
              Política de Privacidad
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Protección de tus datos personales en Medic Scan 360 — Imágenes Avanzadas
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
                En <strong>Medic Scan 360 — Imágenes Avanzadas</strong>, protegemos tu privacidad y tus datos personales
                como un pilar fundamental de nuestro servicio. Esta Política de Privacidad explica cómo recopilamos,
                utilizamos, protegemos y almacenamos tu información.
              </p>
              <p className="mt-4 text-sm text-brand-gray/70">
                <strong>Última actualización:</strong> Marzo 2026
              </p>
            </div>

            {/* 1. Información General */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                1. Información General
              </h2>
              <p>
                <strong>Responsable de los datos personales:</strong>
              </p>
              <ul className="list-inside space-y-2 text-base">
                <li>Nombre: <strong>Medic Scan 360 — Imágenes Avanzadas</strong></li>
                <li>Dirección: <strong>Av. Bolognesi 131, Chimbote, Áncash, Perú</strong></li>
                <li>Correo electrónico: <strong>informes@medic-scan.com</strong></li>
                <li>Teléfono: <strong>+51 991 717 939</strong></li>
              </ul>
              <p className="mt-4">
                Nos regimos bajo la <strong>Ley N° 29733 (Ley de Protección de Datos Personales)</strong> y su
                Reglamento aprobado mediante <strong>D.S. N° 003-2013-JUS</strong>, así como otras normas aplicables
                en el territorio peruano.
              </p>
            </section>

            {/* 2. Recopilación de Datos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                2. Recopilación de Datos Personales
              </h2>
              <p>Recopilamos la siguiente información:</p>
              <ul className="mt-3 space-y-2 text-base">
                <li><strong>Datos de Identificación:</strong> Nombre, apellidos, DNI, documento de extranjería</li>
                <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono, dirección postal</li>
                <li><strong>Datos Médicos:</strong> Antecedentes médicos, resultados de estudios, informes radiológicos</li>
                <li><strong>Datos de Facturación:</strong> Información bancaria y de pago (procesada de forma segura)</li>
                <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas (mediante cookies)</li>
              </ul>
              <p className="mt-4">
                La recopilación ocurre cuando completas formularios, solicitas citas, accedes al sitio web o proporcionas
                información de forma voluntaria.
              </p>
            </section>

            {/* 3. Propósito del Tratamiento */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                3. Propósito del Tratamiento de Datos
              </h2>
              <p>Utilizamos tus datos para:</p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Prestar los servicios de diagnóstico por imágenes</li>
                <li>Gestionar citas y reservaciones</li>
                <li>Generar informes médicos y resultados de estudios</li>
                <li>Procesar pagos y facturas</li>
                <li>Cumplir obligaciones legales y regulatorias (SUSALUD, MINSA, SUNAT)</li>
                <li>Enviar comunicaciones relacionadas con tu atención médica</li>
                <li>Mejorar la calidad de nuestros servicios</li>
              </ul>
            </section>

            {/* 4. Base Legal */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                4. Base Legal del Tratamiento
              </h2>
              <p>El tratamiento de tus datos se fundamenta en:</p>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <strong>Consentimiento expreso:</strong> Mediante la firma de nuestros formularios de consentimiento
                </li>
                <li>
                  <strong>Obligación legal:</strong> Requisitos de SUSALUD, MINSA y normativas de salud peruanas
                </li>
                <li>
                  <strong>Interés legítimo:</strong> Mejora de servicios, seguridad y cumplimiento contractual
                </li>
                <li>
                  <strong>Ejecución de contrato:</strong> Prestación de servicios médicos
                </li>
              </ul>
            </section>

            {/* 5. Tratamiento de Datos Médicos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                5. Tratamiento Especial de Datos Médicos
              </h2>
              <p>
                Los datos médicos son considerados "datos sensibles" bajo la Ley N° 29733. Implementamos medidas
                especiales de protección:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Acceso restringido a personal autorizado únicamente</li>
                <li>Encriptación de extremo a extremo para datos en tránsito y reposo</li>
                <li>Almacenamiento en servidores seguros con auditoría continua</li>
                <li>Cumplimiento de estándares internacionales de seguridad médica (HIPAA-compatible)</li>
                <li>Registro de acceso y trazabilidad de cada consulta de datos médicos</li>
              </ul>
            </section>

            {/* 6. Seguridad de Datos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                6. Seguridad y Protección de Datos
              </h2>
              <p>Implementamos medidas técnicas y organizacionales para proteger tus datos:</p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Encriptación SSL/TLS en todas las transmisiones</li>
                <li>Autenticación de múltiples factores para acceso a información médica</li>
                <li>Firewalls y sistemas de detección de intrusiones</li>
                <li>Auditorías de seguridad periódicas</li>
                <li>Política de contraseñas robustas para personal</li>
                <li>Backups automáticos y planes de continuidad</li>
                <li>Capacitación continua del personal en protección de datos</li>
              </ul>
              <p className="mt-4">
                Sin embargo, no podemos garantizar seguridad absoluta. Recomendamos proteger tu contraseña y no compartir
                información sensible a través de canales inseguros.
              </p>
            </section>

            {/* 7. Derechos ARCO */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                7. Tus Derechos ARCO
              </h2>
              <p>
                Conforme a la Ley N° 29733, tienes derecho a:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <strong>Acceso (A):</strong> Solicitar información sobre qué datos personales tenemos de ti
                </li>
                <li>
                  <strong>Rectificación (R):</strong> Corregir datos inexactos o incompletos
                </li>
                <li>
                  <strong>Cancelación (C):</strong> Solicitar la eliminación de tus datos bajo ciertas circunstancias
                </li>
                <li>
                  <strong>Oposición (O):</strong> Rechazar el tratamiento de tus datos para ciertos propósitos
                </li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctanos en <strong>informes@medic-scan.com</strong> o presenta una solicitud
                escrita en nuestras instalaciones. Responderemos dentro de 15 días hábiles.
              </p>
            </section>

            {/* 8. Cookies y Tecnologías de Rastreo */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                8. Cookies y Tecnologías de Rastreo
              </h2>
              <p>
                Nuestro sitio web utiliza cookies para:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Recordar preferencias de usuario</li>
                <li>Mejorar la experiencia de navegación</li>
                <li>Analizar el uso del sitio mediante Google Analytics</li>
                <li>Personalizar contenido</li>
              </ul>
              <p className="mt-4">
                Puedes desactivar cookies en la configuración de tu navegador. Sin embargo, esto podría afectar la
                funcionalidad de ciertas secciones del sitio.
              </p>
            </section>

            {/* 9. Retención de Datos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                9. Retención y Eliminación de Datos
              </h2>
              <p>
                Retenemos tus datos personales durante el tiempo necesario para:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li>Prestar los servicios solicitados</li>
                <li>Cumplir obligaciones legales (SUSALUD: generalmente 7 años para registros médicos)</li>
                <li>Resolver disputas legales</li>
              </ul>
              <p className="mt-4">
                Una vez cumpla el propósito, procederemos a la eliminación segura de tus datos, excepto donde la ley
                exija su retención prolongada.
              </p>
            </section>

            {/* 10. Compartición de Datos */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                10. Compartición de Datos con Terceros
              </h2>
              <p>
                No compartimos tus datos personales con terceros, excepto en estos casos:
              </p>
              <ul className="mt-3 space-y-2 text-base">
                <li><strong>Médicos especialistas:</strong> Si nos lo autorizas para derivación médica</li>
                <li><strong>Autoridades:</strong> Cuando la ley lo requiera (MINSA, SUSALUD, policía)</li>
                <li><strong>Procesadores de pago:</strong> Para transacciones seguras con protecciones contractuales</li>
                <li><strong>Proveedor de hosting:</strong> Con cláusulas de confidencialidad</li>
              </ul>
            </section>

            {/* 11. Cambios en la Política */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                11. Cambios en esta Política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad en cualquier momento. Te notificaremos de cambios
                significativos mediante correo electrónico o aviso en nuestro sitio web. El continuo uso del sitio
                constituye aceptación de los cambios.
              </p>
            </section>

            {/* 12. Contacto */}
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-brand-blue-dark">
                12. Contacto y Consultas
              </h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos ARCO, contáctanos:
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
                Esta Política de Privacidad cumple con la Ley N° 29733 de Protección de Datos Personales y su
                Reglamento D.S. N° 003-2013-JUS. Para más información sobre tus derechos, puedes consultar la página
                oficial de la Autoridad Nacional de Protección de Datos Personales (APDP) en www.apdp.gob.pe
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