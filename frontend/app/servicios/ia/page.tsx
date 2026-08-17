'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaRobot, FaChartLine, FaEye, FaBrain,
  FaCheckCircle, FaWhatsapp, FaMicrochip, FaDatabase, FaShieldAlt
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaRobot,
    title: 'IA Generativa y Automatización',
    subtitle: 'En Páginas Web y Sistemas',
    description: 'Creamos asistentes virtuales inteligentes capaces de interactuar de forma humana, resolver dudas complejas y operar dentro de tus plataformas las 24 horas del día, los 7 días de la semana.',
    ideal: 'Negocios que buscan automatizar la atención a clientes, agilizar el soporte técnico o crear interfaces web interactivas que asistan al usuario durante su compra.',
    services: 'Desarrollo e integración de Chatbots y Agentes de IA avanzados en tu sitio web, WhatsApp o CRM. Entrenados exclusivamente con la información, catálogo y políticas de tu empresa.',
    images: ['ia/iagya-01.jpeg', 'ia/iagya-02.jpeg']
  },
  {
    icon: FaChartLine,
    title: 'Modelos de IA Predictiva',
    subtitle: 'Proyecciones de Negocio',
    description: 'Dejá atrás la incertidumbre financiera o comercial. Desarrollamos algoritmos que analizan tus datos históricos para anticipar lo que pasará en el futuro de tu mercado.',
    ideal: 'Directores, administradores y equipos de ventas que necesitan optimizar presupuestos, planificar inventarios o predecir el comportamiento del consumidor.',
    services: 'Implementación de sistemas de proyección de ventas, estimación de demanda de productos, detección inteligente de anomalías financieras y algoritmos para predecir riesgo de abandono de clientes.',
    images: ['ia/iamp-01.webp', 'ia/iamp-02.webp']
  },
  {
    icon: FaEye,
    title: 'Visión Artificial',
    subtitle: 'Reconocimiento de Rostros y Procesamiento de Imágenes',
    description: 'Llevamos las capacidades analíticas de la IA al plano físico a través del procesamiento de imágenes y video en tiempo real.',
    ideal: 'Empresas enfocadas en alta seguridad, control estricto de personal, automatización de accesos o auditorías operativas en plantas y comercios.',
    services: 'Integración de sistemas de reconocimiento facial para control de asistencia o accesos restringidos, detección automatizada de equipo de protección personal (EPP) y analíticas de conteo o flujo de personas.',
    images: ['ia/iava-01.jpeg', 'ia/iava-02.jpeg']
  },
  {
    icon: FaBrain,
    title: 'Entrenamiento de Modelos Propios',
    subtitle: 'Optimización de Procesos',
    description: 'Si tu empresa maneja flujos de trabajo únicos o bases de datos masivas, entrenamos y adaptamos modelos de lenguaje o de análisis para que trabajen por ti.',
    ideal: 'Empresas que manejan grandes volúmenes de documentos, contratos, reportes técnicos o datos crudos que consumen demasiado tiempo operativo en ser procesados manualmente.',
    services: 'Clasificación automática de documentos, extracción inteligente de datos de facturas o contratos, automatización de flujos de trabajo (workflows) complejos y entrenamiento de modelos privados que garantizan la confidencialidad absoluta de tu información.',
    images: ['ia/iaedmp-01.jpeg', 'ia/iaedmp-02.jpeg']
  }
]

export default function IaPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🤖 Inteligencia Artificial Aplicada</h1>
          <p className="text-[#E8751A] text-lg mt-1">Transforma tus Procesos y Adelántate al Futuro</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            La Inteligencia Artificial ya no es una tecnología exclusiva de las grandes corporaciones.
            Hoy en día, es la herramienta más poderosa para que las pequeñas y medianas empresas automaticen
            operaciones complejas, reduzcan costos, multipliquen sus ventas y tomen decisiones basadas en
            datos exactos, no en corazonadas.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            No te vendemos soluciones genéricas. Estudiamos tu operación e integramos IA directamente en
            tus páginas web, sistemas internos o flujos de trabajo actuales, adaptándola específicamente a
            las necesidades de tu negocio.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Inteligencia Artificial</h2>
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
              <FaRobot className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Automatización continua</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaChartLine className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+40%</span>
              <p className="text-gray-500 text-sm">Eficiencia operativa</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaDatabase className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Seguridad de datos</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaMicrochip className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+50</span>
              <p className="text-gray-500 text-sm">Modelos entrenados</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para implementar IA en tu empresa?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Integración transparente:</strong> No tienes que cambiar tus sistemas actuales. Conectamos la IA a tus páginas web, bases de datos o software existentes mediante APIs seguras y eficientes.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Privacidad y seguridad de datos:</strong> Tu información es tu activo más valioso. Configuramos entornos seguros para que tus datos nunca sean utilizados para entrenar modelos públicos externos.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Enfoque 100% práctico:</strong> Evitamos la complejidad teórica. Nos enfocamos en desarrollar soluciones de IA que resuelvan problemas específicos y generen un retorno de inversión claro.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Capacitación y acompañamiento:</strong> Te guiamos en el proceso de adopción de la IA, capacitando a tu equipo para que aproveche al máximo estas herramientas.</span>
              </li>
            </ul>
          </div>

          {/* Tecnologías */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaBrain className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Modelos de Lenguaje</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaEye className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Visión por Computadora</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaShieldAlt className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Seguridad con IA</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaChartLine className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Análisis Predictivo</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar auditoría de procesos / IA gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Agendar sesión con un experto en IA
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
