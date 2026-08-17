'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaFileSignature, FaShieldAlt, FaClock, FaServer,
  FaCheckCircle, FaWhatsapp, FaKey, FaLock, FaFilePdf, FaRocket
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaFileSignature,
    title: 'Certificados Digitales X.509',
    subtitle: 'Arquitectura PKI y Estándar Internacional',
    description: 'Implementamos la identidad digital de tus firmantes utilizando el estándar técnico más seguro del mundo. Mediante el diseño y despliegue de una Infraestructura de Llave Pública (PKI), gestionamos de forma inviolable todo el ciclo de vida (emisión, renovación y revocación) de las llaves criptográficas.',
    ideal: 'Corporativos, instituciones financieras o empresas que manejan contratos legales y requieren su propio ecosistema de seguridad centralizado.',
    services: 'Configuración de Autoridades de Certificación (CA) internas o integración con entidades oficiales, asegurando la compatibilidad universal con lectores de PDF y plataformas corporativas internacionales.',
    images: ['firma/cer-01.jpeg', 'firma/cer-02.jpeg']
  },
  {
    icon: FaClock,
    title: 'Sellos de Tiempo RFC 3161',
    subtitle: 'Certificación Temporal Inalterable',
    description: 'Implementamos el estándar internacional RFC 3161 (Timestamping), el cual asocia una estampa de tiempo inalterable y respaldada por una Autoridad de Sellado de Tiempo (TSA), garantizando que el documento existía en un momento exacto del tiempo y no ha sido modificado desde entonces.',
    ideal: 'Auditorías legales, propiedad intelectual, emisión de facturas, contratos con plazos estrictos y licitaciones donde la hora exacta es un factor crítico.',
    services: 'Integración de servidores de sellado de tiempo basados en el protocolo RFC 3161 directamente en tus flujos de firma, blindando cronológicamente cada archivo digital.',
    images: ['firma/tsa-01.jpeg', 'firma/tsa-02.jpeg']
  },
  {
    icon: FaShieldAlt,
    title: 'Criptografía Postcuántica (PQC)',
    subtitle: 'Blindaje para el Futuro',
    description: 'Preparamos tu infraestructura para la próxima era tecnológica. Implementamos esquemas de Criptografía Postcuántica (PQC) basados en los nuevos estándares internacionales, asegurando que tus firmas y datos sigan siendo completamente secretos e indescifrables en el futuro.',
    ideal: 'Empresas de tecnología, sectores gubernamentales, de salud o financieros que resguardan información de alto valor que debe permanecer segura y válida durante las próximas décadas.',
    services: 'Migración y actualización de sistemas PKI hacia algoritmos resistentes a ataques cuánticos (algoritmos basados en redes o esquemas de firmas basados en hash), garantizando la longevidad de tu seguridad digital.',
    images: ['firma/pqc-01.jpeg', 'firma/pqc-02.jpeg']
  },
  {
    icon: FaServer,
    title: 'Integración en tus Sistemas',
    subtitle: 'CRM, ERP y Plataformas Web',
    description: 'Conectamos la tecnología de firma digital directamente en las herramientas que tu empresa ya utiliza todos los días (CRM, ERP, páginas web para clientes o sistemas internos de recursos humanos).',
    ideal: 'Negocios que quieren automatizar la firma de contratos sin obligar a los usuarios a salir de sus plataformas actuales.',
    services: 'Desarrollo de módulos de firma embebidos, flujos de firma secuencial (múltiples firmantes en orden específico) y verificación automatizada de la validez de los certificados en tiempo real.',
    images: ['firma/crmerp-01.jpeg', 'firma/crmerp-02.jpeg']
  }
]

export default function FirmaPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          {/* Volver */}
          <Link href="/servicios" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-6 font-medium">
            <FaArrowLeft /> Volver a servicios
          </Link>

          {/* Header */}
          <h1 className="text-4xl font-bold text-[#0A1628]">📝 Firma Electrónica Avanzada</h1>
          <p className="text-[#E8751A] text-lg mt-1">Seguridad, Legalidad y Cero Papel para tus Documentos</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            Llevar los procesos de tu empresa al entorno digital requiere la máxima certeza jurídica y técnica.
            Una firma electrónica genérica no es suficiente para contratos críticos o transacciones de alto valor.
            Te ofrecemos la implementación de sistemas de Firma Electrónica Avanzada basados en criptografía robusta,
            garantizando la autenticidad, la integridad y el no repudio de tus documentos con el mismo valor legal
            que una firma autógrafa.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Digitaliza la firma de contratos, actas, facturas y aprobaciones internas con absoluta tranquilidad
            y validez internacional.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Firma Electrónica y Certificación</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {soluciones.map((sol, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#5B21B6] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-[#5B21B6] mt-1">
                    <sol.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A1628]">{sol.title}</h3>
                    <p className="text-[#5B21B6] font-medium text-sm">{sol.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{sol.description}</p>
                    <p className="text-gray-500 text-sm mt-2"><strong>Ideal para:</strong> {sol.ideal}</p>
                    <p className="text-gray-500 text-sm mt-1"><strong>Qué hacemos:</strong> {sol.services}</p>
                    {sol.images && sol.images.length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {sol.images.map((img, j) => (
                          <img key={j} src={`/images/${img}`} alt="" className="rounded-lg h-16 w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beneficios clave */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaKey className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">X.509</span>
              <p className="text-gray-500 text-sm">Estándar internacional</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaClock className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">RFC 3161</span>
              <p className="text-gray-500 text-sm">Sello de tiempo certificado</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaLock className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">PQC</span>
              <p className="text-gray-500 text-sm">Criptografía postcuántica</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaFilePdf className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Compatible con PDF</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para implementar tu sistema de firma electrónica?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Máximo cumplimiento legal y técnico:</strong> Al unificar PKI, X.509 y RFC 3161, tus documentos adquieren un blindaje técnico insuperable frente a alteraciones posteriores.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Seguridad de grado militar:</strong> Protegemos las llaves privadas de tu organización mediante estrictos controles criptográficos, evitando la suplantación de identidad.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Eficiencia operativa y reducción de costos:</strong> Reduce el tiempo de cierre de contratos de días a minutos. Olvídate de la impresión, el escaneo y el mensajero.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Validez jurídica internacional:</strong> Nuestras firmas electrónicas cumplen con los estándares globales, garantizando su aceptación en cualquier jurisdicción.</span>
              </li>
            </ul>
          </div>

          {/* Tecnologías */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaKey className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">PKI</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaShieldAlt className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">X.509</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaClock className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">RFC 3161</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaRocket className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">PQC</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar asesoría en firma digital
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un especialista
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
