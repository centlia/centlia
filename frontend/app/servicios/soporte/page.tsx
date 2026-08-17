'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaHeadset, FaShieldAlt, FaRocket, FaCloud,
  FaCheckCircle, FaWhatsapp, FaServer, FaDatabase, FaCode, FaClock,
  FaBug, FaSync, FaCog
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaBug,
    title: 'Soporte a Sistemas Propios y de Terceros',
    subtitle: 'Mantenimiento Correctivo de Software',
    description: 'Cuando un sistema falla, una base de datos se satura o una API deja de responder, cada minuto cuenta. Atendemos incidencias críticas de forma ágil y efectiva para restaurar la operación en tiempo récord.',
    ideal: 'Empresas que dependen de su software diario y no cuentan con un equipo de desarrolladores interno para resolver errores, bugs o caídas del sistema.',
    services: 'Diagnóstico y corrección de errores en código (Bugs), reparación de bases de datos corruptas, restablecimiento de servidores, solución de problemas de conexión entre sistemas y atención de emergencias técnicas con tiempos de respuesta garantizados.',
    images: ['soporte/saspydt-01.jpeg', 'soporte/saspydt-02.jpeg']
  },
  {
    icon: FaShieldAlt,
    title: 'Monitoreo Preventivo y Actualizaciones',
    subtitle: 'Parches de Seguridad y Optimización',
    description: 'El software requiere atención constante para no volverse obsoleto o vulnerable. Nos anticipamos a los problemas asegurando que tu infraestructura digital cuente siempre con las últimas mejoras de rendimiento y blindaje de seguridad.',
    ideal: 'Negocios que manejan información confidencial de clientes o transacciones financieras y necesitan proteger sus sistemas contra hackeos, fugas de datos o caídas por falta de mantenimiento.',
    services: 'Aplicación de actualizaciones del sistema operativo del servidor, parches de seguridad críticos, optimización de velocidad en consultas de bases de datos, renovación de certificados SSL y monitoreo en tiempo real de la disponibilidad de tus plataformas.',
    images: ['soporte/mpya-01.jpeg', 'soporte/mpya-02.jpeg']
  },
  {
    icon: FaCog,
    title: 'Evolución de Software',
    subtitle: 'Nuevas Funcionalidades y Reportes',
    description: 'Tu negocio cambia y tus sistemas deben cambiar con él. Modificamos y expandimos tus herramientas digitales agregando nuevas características, reportes o conexiones según lo requiera tu operación.',
    ideal: 'Empresas que necesitan que su software actual se adapte a nuevas normativas, procesos internos o que requiera integrarse con nuevas herramientas del mercado.',
    services: 'Desarrollo de nuevos módulos, diseño de reportes y tableros de control avanzados, integración con pasarelas de pago o servicios de mensajería, y optimización de flujos de trabajo dentro del sistema.',
    images: ['soporte/eds-01.jpeg', 'soporte/eds-02.jpeg']
  },
  {
    icon: FaCloud,
    title: 'Respaldo en la Nube y Recuperación',
    subtitle: 'Planes de Recuperación ante Desastres (DRP)',
    description: 'Protegemos el activo más valioso de tu empresa: tu información. Diseñamos estrategias de respaldo automatizadas para que, ante cualquier eventualidad física o digital, tu negocio pueda recuperarse en cuestión de minutos.',
    ideal: 'Organizaciones que no pueden permitirse perder su historial de ventas, clientes, inventarios o facturación bajo ninguna circunstancia.',
    services: 'Configuración de respaldos automáticos y encriptados en la nube (AWS, Azure, Google Cloud), pruebas periódicas de restauración de datos y diseño de planes de contingencia para continuidad del negocio.',
    images: ['soporte/relnyr-01.jpeg', 'soporte/relnyr-02.jpg']
  }
]

export default function SoportePage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🛠️ Soporte Técnico Especializado</h1>
          <p className="text-[#E8751A] text-lg mt-1">Respaldo Continuo para Tus Aplicaciones y Sistemas</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            El verdadero valor de la tecnología no solo está en su implementación, sino en el respaldo
            que recibes después. Ya sea un software que hayamos desarrollado para ti o un sistema crítico
            que tu empresa ya tenga en marcha (CRMs, ERPs, plataformas web o bases de datos), te ofrecemos
            un servicio de soporte técnico especializado. Nos convertimos en tu departamento de sistemas
            externo para garantizar que tus plataformas operen sin interrupciones y evolucionen junto con
            las necesidades de tu negocio.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Minimiza el tiempo de inactividad, resuelve fallas de inmediato y mantén tus aplicaciones
            actualizadas y seguras bajo la supervisión de ingenieros expertos.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Soporte y Mantenimiento de Software</h2>
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
              <FaHeadset className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Soporte continuo</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaClock className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">SLA</span>
              <p className="text-gray-500 text-sm">Tiempos garantizados</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaServer className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">Multiplataforma</span>
              <p className="text-gray-500 text-sm">Todo tipo de sistemas</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaCloud className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+100</span>
              <p className="text-gray-500 text-sm">Sistemas monitoreados</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para el soporte de tus sistemas?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Mesa de ayuda (Help Desk) eficiente:</strong> Centralizamos tus solicitudes mediante un sistema ordenado para dar seguimiento exacto a cada requerimiento según su nivel de prioridad (Crítico, Alto, Medio, Bajo).</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Ingenieros multitecnología:</strong> Contamos con experiencia en una amplia gama de lenguajes de programación, manejadores de bases de datos y arquitecturas de nube.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Pólizas de soporte a la medida:</strong> Nos adaptamos a tu presupuesto mediante pólizas mensuales de horas de desarrollo y soporte, garantizándote disponibilidad de ingenieros.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Reportes y métricas de desempeño:</strong> Te entregamos informes periódicos sobre el estado de tus sistemas, tiempos de respuesta y mejoras implementadas.</span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaBug className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Corrección de Bugs</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaSync className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Actualizaciones</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaDatabase className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Respaldo de datos</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaCode className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Desarrollo continuo</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar evaluación de sistemas gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un ingeniero de soporte
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
