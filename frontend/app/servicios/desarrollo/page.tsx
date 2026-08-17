'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaBoxes, FaUsers, FaFileInvoice, FaRobot,
  FaCheckCircle, FaWhatsapp, FaCode, FaChartLine, FaShieldAlt
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaBoxes,
    title: 'Sistemas de Control Interno',
    subtitle: 'Inventarios y Entradas/Salidas',
    description: 'Digitalizamos el corazón de tu operación para evitar pérdidas de stock, errores humanos y cuellos de botella en tus almacenes o accesos.',
    ideal: 'Empresas de logística, comercios, fábricas y negocios que necesitan saber con precisión qué entra, qué sale y qué hay en existencia en tiempo real.',
    services: 'Desarrollo de software de inventarios, sistemas de control de entradas y salidas, integración con lectores de códigos de barras, QR o sistemas biométricos.',
    images: ['desarrollo/desarrollo-00.jpg', 'desarrollo/desarrollo-01.webp']
  },
  {
    icon: FaUsers,
    title: 'CRM y Plataformas de Gestión de Clientes',
    subtitle: 'Páginas Web y Portales',
    description: 'Mejoramos la experiencia de tus clientes y aumentamos tus ventas organizando todo el proceso comercial de tu equipo en un solo lugar.',
    ideal: 'Negocios que buscan profesionalizar su atención al cliente, automatizar el seguimiento de prospectos y ofrecer portales web de autoservicio.',
    services: 'Diseño y desarrollo de CRMs personalizados, páginas web corporativas de alto rendimiento, portales de autoservicio para clientes y paneles de administración.',
    images: ['desarrollo/desarrollo-02.jpg', 'desarrollo/desarrollo-03.webp']
  },
  {
    icon: FaFileInvoice,
    title: 'Sistemas Contables y Administrativos',
    subtitle: 'Personalizados a tu Medida',
    description: 'Olvídate de las hojas de cálculo infinitas y propensas a errores. Creamos plataformas centralizadas que unifican tu facturación, gastos y reportes financieros.',
    ideal: 'Administradores y directores que necesitan reportes financieros claros, automatización de nóminas o flujos de caja sin complicaciones.',
    services: 'Desarrollo de módulos contables a la medida, automatización de reportes de rendimiento, cálculo automatizado de comisiones y herramientas de facturación electrónica.',
    images: ['desarrollo/sca-01.jpeg', 'desarrollo/sca-02.jpeg']
  },
  {
    icon: FaRobot,
    title: 'Integración de Inteligencia Artificial (IA)',
    subtitle: 'Automatización Inteligente de Procesos',
    description: 'Llevamos tu negocio al siguiente nivel tecnológico implementando soluciones de IA que analizan datos, automatizan la atención y predicen comportamientos.',
    ideal: 'Empresas que reciben un alto volumen de consultas, que desean automatizar análisis complejos o que buscan optimizar sus tiempos de respuesta 24/7.',
    services: 'Integración de agentes y chatbots inteligentes de atención al cliente, automatización de análisis de datos a gran escala y algoritmos de predicción de demanda o ventas.',
    images: ['ia/iia-01.jpeg', 'ia/iia-02.jpeg']
  }
]

export default function DesarrolloPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🚀 Desarrollo de Software a la Medida</h1>
          <p className="text-[#E8751A] text-lg mt-1">Automatiza, Controla y Escala tu Negocio</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            El software comercial genérico a menudo te obliga a adaptar tu negocio a sus limitaciones.
            Nosotros hacemos lo contrario: creamos soluciones digitales únicas que se adaptan exactamente
            a tus procesos, eliminando tareas repetitivas, centralizando tu información y dándote el
            control total de tu operación para que puedas tomar decisiones inteligentes.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Desde una plataforma web para tus clientes hasta la automatización completa de tu empresa
            con Inteligencia Artificial: transformamos tus ideas en herramientas de alta productividad.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Desarrollo y Automatización</h2>
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

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para el desarrollo de tu software?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Código limpio y escalable:</strong> Diseñamos sistemas robustos listos para crecer. Si tu negocio se duplica mañana, tu software aguantará el ritmo sin problemas.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Enfoque en la experiencia de usuario (UX):</strong> Diseñamos pantallas intuitivas para que tu personal aprenda a usar el software en cuestión de horas.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Seguridad de la información:</strong> Protegemos los datos más valiosos de tu negocio con altos estándares de encriptación y respaldos automáticos en la nube.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Acompañamiento y soporte continuo:</strong> Te guiamos desde el análisis inicial hasta la puesta en marcha, con capacitación y mantenimiento constante.</span>
              </li>
            </ul>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaCode className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Código personalizado</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaChartLine className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">+50%</span>
              <p className="text-gray-500 text-sm">Aumento en productividad</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Seguridad y respaldos</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaUsers className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">+100</span>
              <p className="text-gray-500 text-sm">Proyectos exitosos</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar asesoría / Diagnóstico gratis
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
