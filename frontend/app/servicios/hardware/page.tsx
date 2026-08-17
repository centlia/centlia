'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaMicrochip, FaBolt, FaPlug,
  FaCheckCircle, FaWhatsapp, FaServer, FaDatabase, FaShieldAlt,
  FaMemory, FaHdd, FaBatteryFull
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaMicrochip,
    title: 'Actualizaciones de Hardware',
    subtitle: 'Potenciación de Equipos y Servidores',
    description: 'Revivimos y aceleramos tus equipos, ya sea una computadora de escritorio, una laptop o un servidor empresarial, con compatibilidad garantizada para plataformas IBM PC, Mac y sistemas basados en Linux. Realizamos actualizaciones estratégicas de componentes: ampliación de memoria RAM, migración a discos SSD, mejora de procesadores, y optimización de almacenamiento para garantizar el máximo rendimiento en cualquier arquitectura.',
    ideal: 'Empresas con equipos de más de 2 años de antigüedad que presentan lentitud, fallas al abrir programas pesados, almacenamiento lleno o servidores que requieren mayor capacidad de procesamiento.',
    services: 'Diagnóstico de compatibilidad para cualquier plataforma (Windows, macOS, Linux), clonación segura de información sin pérdida de datos, instalación física de componentes (RAM, SSD, procesadores, tarjetas de expansión), y optimización del sistema operativo para el nuevo hardware.',
    images: ['hardwareyenergia/adh-01.jpeg', 'hardwareyenergia/adh-02.jpeg']
  },
  {
    icon: FaBatteryFull,
    title: 'Sistemas de Respaldo Energético',
    subtitle: 'UPS y No-Breaks para tu Negocio',
    description: 'Garantizamos la continuidad de tu negocio ante fallas en el suministro de luz. Calculamos, instalamos y configuramos sistemas de energía ininterrumpida (UPS) para que tus servidores, routers y computadoras críticas sigan encendidos e internet no se caiga cuando ocurra un apagón.',
    ideal: 'Oficinas, centros de datos (Data Centers), clínicas y comercios ubicados en zonas con cortes de luz frecuentes o que manejan información que no puede perderse bajo ninguna circunstancia.',
    services: 'Dimensionamiento de carga eléctrica (cálculo de Watts/VA necesarios), suministro e instalación de UPS y No-Breaks para estaciones de trabajo o racks de telecomunicaciones, y configuración de apagados automáticos seguros para servidores.',
    images: ['hardwareyenergia/sdre-01.jpeg', 'hardwareyenergia/sdre-02.webp']
  },
  {
    icon: FaPlug,
    title: 'Diagnóstico de Líneas y Voltajes',
    subtitle: 'Revisión Correcta de Instalaciones Eléctricas',
    description: 'Protegemos tu inversión tecnológica desde la toma de corriente. Las variaciones de voltaje silenciosas son la causa número uno de que las fuentes de poder, tarjetas madre y discos duros se quemen o duren la mitad de su tiempo de vida estimado.',
    ideal: 'Negocios que sufren de fallas inexplicables en sus equipos, parpadeos de luces, o que van a instalar servidores y racks de datos nuevos.',
    services: 'Medición y análisis técnico de voltajes, corrientes y tierras físicas en los contactos destinados a tus equipos de cómputo; detección de anomalías eléctricas e instalación de reguladores de voltaje de grado industrial y supresores de picos.',
    images: ['hardwareyenergia/ddlyv-01.jpeg', 'hardwareyenergia/ddlyv-02.jpg']
  }
]

export default function HardwarePage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">⚡ Repotenciación de Hardware y Protección Eléctrica</h1>
          <p className="text-[#E8751A] text-lg mt-1">Máximo Rendimiento y Cero Riesgos para tus Equipos</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            No siempre es necesario gastar grandes sumas de dinero en comprar computadoras nuevas cuando
            las actuales se vuelven lentas. En la mayoría de los casos, una actualización estratégica de
            componentes puede duplicar o triplicar la velocidad de tus equipos por una fracción de su costo.
            Además, de nada sirve tener tecnología rápida si un apagón o una variación de voltaje daña
            tus servidores o destruye tu información.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Te ofrecemos servicios especializados de diagnóstico, repotenciación de hardware y diseño de
            respaldo eléctrico para prolongar la vida útil de tus equipos y blindarlos contra fallas de energía.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Hardware y Energía</h2>
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
              <FaMicrochip className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+300%</span>
              <p className="text-gray-500 text-sm">Rendimiento con SSD</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaBolt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Protección energética</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Seguridad de datos</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaServer className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+500</span>
              <p className="text-gray-500 text-sm">Equipos repotenciados</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para potenciar y proteger tus equipos?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Garantía de rendimiento:</strong> Antes de realizar cualquier actualización, evaluamos si el equipo realmente es apto para mejorar, asegurando que cada centavo que inviertas se traduzca en una velocidad notable.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Compatibilidad total:</strong> Trabajamos con equipos IBM PC, Mac y sistemas basados en Linux, asegurando que la actualización sea exitosa sin importar la plataforma.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Marcas líderes y refacciones nuevas:</strong> Trabajamos únicamente con componentes y sistemas de energía de marcas certificadas a nivel mundial (Kingston, Crucial, Samsung, APC, CyberPower, Tripp Lite), ofreciendo garantía directa por escrito.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Diagnóstico preventivo sin riesgo:</strong> Hacemos respaldos completos de tus discos duros antes de abrirlos o modificarlos. Tu información está 100% segura en nuestras manos durante todo el proceso técnico.</span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaMemory className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Ampliación de RAM</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaHdd className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Migración a SSD</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaBatteryFull className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">UPS y No-Breaks</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaPlug className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Diagnóstico eléctrico</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar diagnóstico de hardware y energía gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Agendar visita técnica
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
