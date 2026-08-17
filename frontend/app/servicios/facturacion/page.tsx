'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaFileInvoice, FaReceipt, FaTruck, FaCheckCircle,
  FaWhatsapp, FaShieldAlt, FaDatabase, FaCode, FaClock
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaFileInvoice,
    title: 'Generación e Integración de XML',
    subtitle: 'CFDI Vigente ante el SAT',
    description: 'Desarrollamos e implementamos módulos que traducen las ventas de tu negocio al formato XML estructurado que exige la autoridad fiscal, gestionando de forma transparente los nodos de impuestos, retenciones, conceptos y catálogos obligatorios.',
    ideal: 'Empresas con sistemas de ventas propios, plataformas de comercio electrónico (E-commerce) o ERPs que necesitan emitir facturas masivas o automatizadas desde su propio software.',
    services: 'Programación y estructura de archivos XML bajo el estándar oficial del SAT, mapeo automatizado de claves de productos/servicios y unidades de medida, y conectividad mediante APIs con los principales PACs para un timbrado fiscal en milisegundos.',
    images: ['factura/factura-electronica-00.jpeg', 'factura/factura-electronica-01.webp']
  },
  {
    icon: FaReceipt,
    title: 'Complementos de Pago y Cartas Porte',
    subtitle: 'Cumplimiento Logístico y Financiero',
    description: 'Garantizamos que los flujos logísticos y de cobranza de tu empresa cuenten con el respaldo digital obligatorio. Automatizamos los complementos requeridos por la ley para evitar multas o contratiempos operativos.',
    ideal: 'Negocios que venden a crédito, empresas de transporte, fleteras, distribuidores y corporativos con cadenas de suministro complejas.',
    services: 'Integración automática del Recibo Electrónico de Pago (REP) vinculado al XML de la factura origen, y desarrollo de módulos para la emisión del CFDI con Complemento Carta Porte (para acreditar la legal estancia y traslado de mercancías).',
    images: ['factura/factura-electronica-02.jpg', 'factura/factura-electronica-03.webp']
  },
  {
    icon: FaDatabase,
    title: 'Validación Automatizada',
    subtitle: 'Descarga Masiva del SAT',
    description: 'No te arriesgues a deducir facturas falsas o incorrectas. Implementamos herramientas que auditan automáticamente todos los XML que emites y recibes, contrastándolos directamente con las bases de datos de la autoridad fiscal.',
    ideal: 'Departamentos de contabilidad y administración que pierden horas descargando facturas manualmente y necesitan blindar a la empresa contra las listas negras del SAT (EFOS/EDOS).',
    services: 'Desarrollo de herramientas de descarga masiva de XML desde el portal del SAT mediante Web Scraping o API oficial, validación en tiempo real del estatus del comprobante (Vigente/Cancelado) y conciliación automatizada contra tus sistemas internos.',
    images: ['factura/val-01.jpeg', 'factura/val-02.jpeg']
  }
]

export default function FacturacionPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">📊 Facturación Electrónica y XML</h1>
          <p className="text-[#E8751A] text-lg mt-1">Cumplimiento Fiscal Automatizado ante el SAT</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            En el entorno fiscal de México, la emisión y recepción de comprobantes digitales (CFDI)
            no es solo una obligación legal, sino un proceso crítico que puede detener la operación
            de tu negocio si presenta errores. Te ofrecemos la integración y desarrollo de sistemas
            que automatizan la generación, validación y timbrado de archivos XML y representaciones
            impresas (PDF), garantizando que cada transacción cumpla al 100% con las normativas vigentes
            y las actualizaciones más recientes del SAT.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Olvídate de los errores manuales, las facturas rechazadas y los retrasos en tus cobranzas.
            Conecta tu negocio directamente con los Proveedores Autorizados de Certificación (PAC).
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Facturación y XML</h2>
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
              <FaFileInvoice className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">CFDI 4.0</span>
              <p className="text-gray-500 text-sm">Estándar vigente</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaClock className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Timbrado continuo</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">CSD</span>
              <p className="text-gray-500 text-sm">Sellos digitales seguros</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaCode className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">API</span>
              <p className="text-gray-500 text-sm">Integración con PACs</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para tu facturación electrónica?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Cumplimiento fiscal sin fricciones:</strong> Nos encargamos de que la complejidad técnica de las matrices de validación del SAT sea invisible para ti. Tus usuarios solo llenan campos sencillos y el sistema se encarga del resto.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Seguridad en tus sellos digitales:</strong> Protegemos e implementamos el uso de tu Certificado de Sello Digital (CSD) bajo estrictos protocolos de encriptación.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Sistemas listos para cambios fiscales:</strong> Diseñamos nuestras soluciones de software de manera modular para que cualquier cambio en las normativas se actualice rápidamente sin detener tu negocio.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Reducción de errores manuales:</strong> Automatizamos el proceso completo de facturación, eliminando la posibilidad de errores humanos que puedan resultar en facturas rechazadas o multas.</span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaFileInvoice className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">CFDI 4.0</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaReceipt className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Complemento de Pago</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaTruck className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Carta Porte</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaDatabase className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Descarga Masiva SAT</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaShieldAlt className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Validación EFOS/EDOS</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaCode className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">API con PACs</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar demo / Asesoría de facturación
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un desarrollador
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
