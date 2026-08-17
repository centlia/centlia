'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaShieldAlt, FaWrench, FaDesktop, FaPrint,
  FaCheckCircle, FaWhatsapp, FaClock, FaLaptop, FaServer, FaTools
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaShieldAlt,
    title: 'Mantenimiento Preventivo',
    subtitle: 'Anticipar y Evitar Fallos antes de que Ocurran',
    description: 'No esperes a que un equipo deje de encender para atenderlo. Implementamos planes programados de limpieza física y optimización lógica que extienden la vida útil de tus equipos, reducen hasta en un 85% los bloqueos del sistema y detectan componentes dañados antes de que provoquen un colapso total.',
    ideal: 'Oficinas corporativas, escuelas, notarías y negocios que dependen de la disponibilidad diaria de sus equipos.',
    services: 'Limpieza interna profunda, diagnóstico de salud de discos duros y memorias, depuración de archivos basura, actualización de sistemas operativos y antivirus, calibración, limpieza y lubricación de sistemas de arrastre en impresoras.',
    images: ['mantenimiento/mantenimiento-preventivo-00.jpeg', 'mantenimiento/mantenimiento-preventivo-01.webp']
  },
  {
    icon: FaWrench,
    title: 'Mantenimiento Correctivo',
    subtitle: 'Solución Ágil y Efectiva de Incidencias Inmediatas',
    description: 'Cuando el fallo ya ocurrió, el tiempo es oro. Contamos con un protocolo de atención de emergencias técnicas diseñado para diagnosticar, reparar y devolver tus equipos a la operación en tiempo récord, minimizando el impacto en tu negocio.',
    ideal: 'Empresas sin departamento de sistemas interno que necesitan un aliado confiable y experto que resuelva sus problemas técnicos de forma inmediata.',
    services: 'Reparación de hardware (reemplazo de pantallas, teclados, fuentes de poder), migración exprés a discos de estado sólido (SSD), eliminación de virus/malware, reinstalación de software crítico, reparación mecánica o electrónica de impresoras.',
    images: ['mantenimiento/mantenimiento-preventivo-02.jpg', 'mantenimiento/mantenimiento-preventivo-03.webp']
  }
]

export default function MantenimientoPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🖥️ Mantenimiento Integral de Cómputo e Impresión</h1>
          <p className="text-[#E8751A] text-lg mt-1">Continuidad Total para tu Operación</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            Cuando una computadora se ralentiza o una impresora falla en el momento de entregar una propuesta,
            tu negocio se detiene y pierdes dinero. Te ofrecemos un servicio de soporte técnico integral
            diseñado para eliminar las frustraciones tecnológicas. Combinamos la prevención estratégica con
            la respuesta inmediata para que tus equipos trabajen siempre al 100% y tu personal no pierda
            un solo minuto de productividad.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Desde el soporte técnico diario para tus empleados hasta el mantenimiento profundo de laboratorios
            de cómputo y centros de impresión.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Soporte y Mantenimiento</h2>
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
              <FaDesktop className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+85%</span>
              <p className="text-gray-500 text-sm">Menos fallas</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaClock className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Soporte prioritario</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaLaptop className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Marcas certificadas</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaServer className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+500</span>
              <p className="text-gray-500 text-sm">Equipos reparados</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para el soporte de tus equipos?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Soporte remoto y en sitio:</strong> Resolvemos incidencias menores en minutos vía remota. Si requiere atención física, nuestros ingenieros se trasladan de inmediato.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Técnicos certificados y multimarca:</strong> HP, Dell, Lenovo, Apple, Epson, Canon, Brother, con refacciones garantizadas.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Pólizas de soporte a la medida:</strong> Atención por evento o pólizas mensuales prepagadas con prioridad absoluta y visitas preventivas mensuales.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Inventariado y reportes técnicos:</strong> Registro exacto del historial de cada equipo y reportes claros para decisiones de actualización o reparación.</span>
              </li>
            </ul>
          </div>

          {/* Servicios adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaTools className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Reparación de hardware</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaPrint className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Mantenimiento de impresoras</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaShieldAlt className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Seguridad y antivirus</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaDesktop className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Migración a SSD</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar diagnóstico de equipos gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con soporte técnico
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
