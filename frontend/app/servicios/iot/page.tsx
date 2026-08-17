'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaHome, FaIndustry, FaTruck,
  FaCheckCircle, FaWhatsapp, FaWifi, FaShieldAlt, FaChartLine
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaHome,
    title: 'Automatización y Domótica',
    subtitle: 'Espacios y Oficinas Inteligentes',
    description: 'Tomar el control de las instalaciones físicas nunca fue tan fácil. Integramos dispositivos inteligentes que optimizan el consumo de energía, mejoran el confort y refuerzan la seguridad de tus espacios de forma remota.',
    ideal: 'Oficinas corporativas, hoteles, comercios y hogares que buscan reducir costos operativos y modernizar sus espacios.',
    services: 'Instalación y centralización de termostatos inteligentes, sistemas de iluminación automatizada, cerraduras electrónicas controladas a distancia y sensores de gestión ambiental integrados en una sola aplicación.',
    images: ['iot/iotayd-01.jpeg', 'iot/iotayd-02.jpeg']
  },
  {
    icon: FaIndustry,
    title: 'IoT Industrial (IIoT)',
    subtitle: 'Monitoreo y Control de Maquinaria en Fábricas',
    description: 'Llevamos la transformación digital al piso de producción. Implementamos sensores avanzados en tu maquinaria para supervisar su rendimiento, prevenir fallas catastróficas y asegurar la continuidad operativa de tu planta.',
    ideal: 'Industrias, naves industriales, plantas de manufactura y talleres que necesitan maximizar el tiempo de actividad de sus equipos.',
    services: 'Despliegue de redes de sensores industriales (temperatura, vibración, presión, humedad), sistemas de telemetría, tableros de control avanzados para mantenimiento predictivo y automatización de alertas críticas.',
    images: ['iot/ioti-01.jpeg', 'iot/ioti-02.jpeg']
  },
  {
    icon: FaTruck,
    title: 'IoT en Movimiento',
    subtitle: 'Gestión de Tráfico, Logística y Rastreo de Inventarios',
    description: 'Rompe los límites físicos de tu negocio. Implementamos tecnología de sensores en movimiento y etiquetas inteligentes para optimizar cadenas de suministro, flujos logísticos urbanos y el estado de tus activos valiosos en trayecto.',
    ideal: 'Empresas de transporte, operadores logísticos, administradores de flotillas y almacenes de gran escala que requieren visibilidad total de su mercancía.',
    services: 'Integración de sensores telemáticos en vehículos, sistemas de seguimiento y localización de activos en tiempo real (GPS/IoT), despliegue de tecnologías de inventariado inteligente en tránsito mediante sensores de proximidad y RFID.',
    images: ['iot/iotem-01.jpeg', 'iot/iotem-02.jpeg']
  }
]

export default function IotPage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🌐 Internet de las Cosas (IoT)</h1>
          <p className="text-[#E8751A] text-lg mt-1">Conecta, Monitorea y Automatiza tu Entorno</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            El Internet de las Cosas ya no es el futuro, es la herramienta actual para tomar el control
            absoluto de tus espacios, procesos y activos. Conectamos dispositivos físicos a internet para
            que recopilen datos en tiempo real, se comuniquen entre sí y te permitan operarlos a distancia,
            transformando entornos comunes en espacios inteligentes, eficientes y altamente supervisados.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Desde la comodidad de automatizar una oficina hasta el control crítico de una línea de
            producción industrial o una flotilla de vehículos: hacemos que tus objetos hablen contigo.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de IoT y Automatización</h2>
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
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para tus proyectos de IoT?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Arquitectura de red robusta:</strong> Al ser expertos en redes (LAN/WAN) y cableado estructurado, garantizamos que los datos de tus sensores viajen rápido, seguro y sin saturar tu internet.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Centralización e interoperabilidad:</strong> Desarrollamos plataformas unificadas donde puedes ver todo tu ecosistema IoT en una sola pantalla.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Enfoque en el retorno de inversión (ROI):</strong> Diseñamos proyectos IoT orientados a ahorrar energía, reducir fallas y optimizar rutas logísticas.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Seguridad perimetral digital:</strong> Implementamos firewalls, redes virtuales segmentadas y encriptación para blindar tus dispositivos contra accesos no autorizados.</span>
              </li>
            </ul>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaWifi className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Monitoreo continuo</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaChartLine className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">-40%</span>
              <p className="text-gray-500 text-sm">Ahorro energético</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Seguridad de datos</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaIndustry className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-2xl font-bold text-[#0A1628]">+200</span>
              <p className="text-gray-500 text-sm">Dispositivos conectados</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar estudio de factibilidad gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un ingeniero
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
