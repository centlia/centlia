'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaCloud, FaAws, FaMicrosoft, FaGoogle,
  FaCheckCircle, FaWhatsapp, FaServer, FaDatabase, FaShieldAlt,
  FaRocket, FaChartLine, FaSync
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaRocket,
    title: 'Migración Segura a la Nube',
    subtitle: 'Lift & Shift y Re-arquitectura',
    description: 'Trasladamos de forma transparente tus servidores físicos, bases de datos y aplicaciones locales hacia la nube de tu elección (AWS, Azure o Google Cloud), garantizando un tiempo de inactividad de prácticamente cero para que tu operación no se detenga.',
    ideal: 'Empresas que quieren eliminar el costo de comprar servidores físicos, pagar licencias costosas o preocuparse por el mantenimiento de hardware local.',
    services: 'Evaluación de infraestructura actual, planificación de la estrategia de migración, transferencia de datos de forma encriptada y configuración del entorno en la nube.',
    images: ['cloud/msaln-01.webp', 'cloud/msaln-02.jpeg']
  },
  {
    icon: FaCloud,
    title: 'Estrategia Multinube e Híbrida',
    subtitle: 'Flexibilidad Total sin Dependencia de un Solo Proveedor',
    description: 'No te estanques con un solo proveedor. Diseñamos arquitecturas multinube para que aproveches las fortalezas específicas de cada plataforma (procesamiento de datos de Google, herramientas corporativas de Azure y potencia de servidores de AWS).',
    ideal: 'Corporativos, Fintechs o empresas con plataformas críticas que buscan la máxima redundancia (si una nube falla, tu negocio sigue operando en otra).',
    services: 'Interconexión de servicios entre diferentes nubes, balanceo de carga avanzado y desarrollo de sistemas capaces de operar de manera unificada en entornos distribuidos.',
    images: ['cloud/emeh-01.jpeg', 'cloud/emeh-02.jpeg']
  },
  {
    icon: FaChartLine,
    title: 'Optimización de Costos en la Nube',
    subtitle: 'FinOps y Reducción de Gastos Cloud',
    description: '¿Tu factura de AWS, Azure o Google Cloud no para de subir? Analizamos minuciosamente el consumo de tus recursos en la nube para eliminar el software que no usas, redimensionar servidores sobredimensionados y aplicar estrategias de ahorro que reducen tu pago mensual.',
    ideal: 'Negocios que ya están en la nube pero sienten que están pagando de más debido a una mala configuración interna o falta de monitoreo.',
    services: 'Auditoría completa de gastos cloud, implementación de alertas de consumo, programación de encendido/apagado automático de servidores y optimización de almacenamiento para reducir tus costos hasta en un 40%.',
    images: ['cloud/odceln-01.jpeg', 'cloud/odceln-02.jpeg']
  },
  {
    icon: FaSync,
    title: 'Continuidad del Negocio y Respaldos',
    subtitle: 'Backup Automatizado y Recuperación ante Desastres (DRP)',
    description: 'Protegemos el núcleo de tu empresa contra desastres. Configuramos políticas de respaldo automatizadas y encriptadas en zonas geográficas distintas, permitiendo que tu negocio recupere la operación en cuestión de minutos ante ataques de ransomware o fallas críticas.',
    ideal: 'Empresas que manejan datos transaccionales, inventarios, datos de clientes o sistemas ERP que no pueden permitirse perder ni una sola hora de información.',
    services: 'Configuración de réplicas en tiempo real, automatización de copias de seguridad con retención personalizada y diseño de planes de Recuperación ante Desastres (DRP) probados al 100%.',
    images: ['cloud/cdnyr-01.jpeg', 'cloud/cdnyr-02.webp']
  }
]

export default function CloudPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">☁️ Soluciones en la Nube y Multinube</h1>
          <p className="text-[#E8751A] text-lg mt-1">Escalabilidad, Alta Disponibilidad y Optimización de Costos</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            Llevar la infraestructura de tu empresa a la nube no es solo una tendencia, es la estrategia
            definitiva para que tus sistemas nunca se caigan, tu información esté blindada contra hackeos
            y tu negocio pueda crecer sin límites físicos. Si tu empresa ya utiliza infraestructura digital
            o estás pensando en migrar, te ayudamos a diseñar, implementar y gestionar entornos en las
            plataformas líderes del mundo: Amazon Web Services (AWS), Microsoft Azure y Google Cloud (GCP).
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Tanto si necesitas una solución híbrida como una estrategia Multinube (combinar lo mejor de
            cada proveedor), nos aseguramos de que tu infraestructura sea rápida, segura y, sobre todo, rentable.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Infraestructura Cloud</h2>
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
              <FaAws className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">AWS</span>
              <p className="text-gray-500 text-sm">Computación en la nube</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaMicrosoft className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">Azure</span>
              <p className="text-gray-500 text-sm">Infraestructura empresarial</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaGoogle className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">GCP</span>
              <p className="text-gray-500 text-sm">Datos y analítica</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Seguridad garantizada</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para gestionar tu nube?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Arquitectura agnóstica:</strong> No estamos casados con una sola marca. Te recomendaremos AWS, Google o Azure basándonos exclusivamente en lo que sea mejor y más económico para tu caso específico.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Seguridad desde el diseño:</strong> Implementamos las mejores prácticas globales de seguridad (Cifrado de datos en tránsito y reposo, políticas de accesos mínimos e IAM).</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Soporte y monitoreo 24/7:</strong> Nos encargamos de la administración diaria de tu infraestructura en la nube para que tú solo te enfoques en hacer crecer tu negocio.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Optimización continua:</strong> Monitoreamos constantemente el rendimiento y los costos de tu infraestructura, recomendando ajustes para maximizar la eficiencia y el ahorro.</span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaServer className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Migración Cloud</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaCloud className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Multinube</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaDatabase className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Backup & DR</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaChartLine className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Optimización de costos</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar auditoría / Diagnóstico Cloud gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un arquitecto cloud
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
