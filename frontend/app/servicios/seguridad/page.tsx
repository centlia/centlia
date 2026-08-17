'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaCamera, FaServer, FaEye,
  FaCheckCircle, FaWhatsapp
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaCamera,
    title: 'Cámaras IP y Tecnología PoE',
    description: 'Máxima Alta Definición sin Caos de Cables',
    details: 'Implementamos sistemas de cámaras IP que transmiten video digital en alta definición (4K, 2K, 1080p) a través de tu red de datos. Con la tecnología PoE, la cámara recibe energía y transmite video usando un solo cable de red.',
    ideal: 'Empresas, comercios y residencias que buscan la máxima claridad de imagen.',
    services: 'Instalación de cámaras domo, bala, PTZ, configuración de switches PoE y optimización de ancho de banda.',
    images: ['camaras/camaras-00.jpeg', 'camaras/camaras-01.jpeg', 'camaras/camaras-02.jpeg']
  },
  {
    icon: FaServer,
    title: 'Grabadores NVR y DVR',
    description: 'Almacenamiento Seguro y Videovigilancia Inteligente (IA)',
    details: 'Centralizamos el control de tus cámaras con equipos de grabación de última generación, desde soluciones tradicionales hasta sistemas con Inteligencia Artificial.',
    ideal: 'Negocios que necesitan auditorías de video precisas y automatización de la seguridad.',
    services: 'Montaje y configuración de DVR/NVR, reconocimiento facial, protección perimetral, detección de vehículos y placas (LPR), clasificación de objetos.',
    images: ['camaras/VVSI-01.webp', 'camaras/VVSI-02.webp', 'camaras/VVSI-03.jpg']
  },
  {
    icon: FaEye,
    title: 'Monitoreo 24/7 y Acceso Remoto',
    description: 'Tu Negocio en la Palma de tu Mano',
    details: 'Configuramos tus sistemas para que puedas ver las cámaras en vivo y revisar grabaciones pasadas desde tu celular, tablet o computadora, desde cualquier parte del mundo.',
    ideal: 'Dueños de negocios en constante movimiento y administradores de sucursales.',
    services: 'Configuración de aplicaciones móviles seguras, alertas de movimiento inteligentes en tiempo real, segmentación de permisos.',
    images: ['camaras/mon-01.jpeg', 'camaras/mon-02.jpeg', 'camaras/mon-03.jpeg']
  }
]

export default function SeguridadPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-6 font-medium">
            <FaArrowLeft /> Volver a servicios
          </Link>

          <h1 className="text-4xl font-bold text-[#0A1628]">Videovigilancia y Seguridad Inteligente</h1>
          <p className="text-[#E8751A] text-lg mt-1">Protege lo que Más Importa, Desde Cualquier Lugar</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            En un mundo impredecible, la seguridad no es un gasto, es la inversión que te da tranquilidad.
            Un sistema de cámaras profesional no solo registra incidentes, sino que previene robos,
            mejora la productividad y te permite auditar operaciones en tiempo real.
          </p>

          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">Soluciones de Seguridad</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {soluciones.map((sol, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#5B21B6] transition-all duration-300">
                <sol.icon className="text-3xl text-[#5B21B6] mb-3" />
                <h3 className="text-xl font-bold text-[#0A1628]">{sol.title}</h3>
                <p className="text-[#5B21B6] font-medium">{sol.description}</p>
                <p className="text-gray-600 text-sm mt-2">{sol.details}</p>
                <p className="text-gray-500 text-sm mt-2"><strong>Ideal para:</strong> {sol.ideal}</p>
                <p className="text-gray-500 text-sm mt-1"><strong>Qué hacemos:</strong> {sol.services}</p>
                {sol.images && sol.images.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {sol.images.map((img, j) => (
                      <img key={j} src={`/images/${img}`} alt="" className="rounded-lg h-16 w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span>Análisis de puntos ciegos: Evaluamos iluminación, accesos y ángulos críticos.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span>Integración con tu red: Expertos en cableado estructurado.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span>Discreción y profesionalismo: Trabajamos bajo estrictas normas de confidencialidad.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span>Soporte post-venta: Te capacitamos a ti y a tu equipo.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar levantamiento / Cotización gratis
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </main>
  )
}
