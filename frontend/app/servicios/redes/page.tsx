'use client'

import Link from 'next/link'
import { FaArrowLeft, FaEthernet, FaSatellite, FaGlobe, FaBluetooth, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaEthernet,
    title: 'Redes LAN',
    description: 'Conectamos tus equipos en un mismo espacio con máxima velocidad y estabilidad.',
    ideal: 'Oficinas, edificios y locales comerciales.',
    services: 'Cableado estructurado, racks, switches, routers y WiFi corporativo.',
    images: ['redes/redes-lan-01.jpeg', 'redes/redes-lan-02.jpeg']
  },
  {
    icon: FaSatellite,
    title: 'Redes MAN',
    description: 'Unificamos varias sedes en una sola red privada de alta velocidad.',
    ideal: 'Empresas con múltiples ubicaciones urbanas.',
    services: 'Enlaces inalámbricos de largo alcance y fibra óptica.',
    images: ['redes/redes-man-01.jpeg', 'redes/redes-man-02.webp']
  },
  {
    icon: FaGlobe,
    title: 'Redes WAN',
    description: 'Conectamos sucursales en diferentes ciudades o países de forma segura.',
    ideal: 'Empresas con home office o sedes nacionales/internacionales.',
    services: 'VPN, firewalls y optimización en la nube.',
    images: ['redes/redes-wan-01.jpeg', 'redes/redes-wan-02.jpg']
  },
  {
    icon: FaBluetooth,
    title: 'Redes PAN',
    description: 'Optimizamos espacios de trabajo para que tus dispositivos interactúen sin complicaciones.',
    ideal: 'Oficinas ejecutivas y salas de reuniones inteligentes.',
    services: 'Integración de periféricos y automatización Bluetooth/Wi-Fi.',
    images: ['redes/redes-pan-01.jpeg', 'redes/redes-pan-02.webp']
  }
]

const ventajas = [
  'Proyectos llave en mano: diseñamos, cableamos y configuramos todo.',
  'Estética y orden: trabajamos con estándares de peinado de racks.',
  'Materiales de calidad: componentes garantizados.',
  'Escalabilidad: infraestructura lista para crecer con tu negocio.'
]

export default function RedesPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-6 font-medium">
            <FaArrowLeft /> Volver a servicios
          </Link>

          <h1 className="text-4xl font-bold text-[#0A1628]">Infraestructura y Redes</h1>
          <p className="text-[#E8751A] text-lg mt-1">Diseñamos e instalamos la red perfecta para tu negocio</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            Una mala conexión significa pérdida de tiempo y dinero. Te ofrecemos soluciones profesionales
            de conectividad, adaptadas al tamaño y necesidades de tu proyecto.
          </p>

          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">Soluciones de Conectividad</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {soluciones.map((sol, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#5B21B6] transition-all duration-300">
                <sol.icon className="text-3xl text-[#5B21B6] mb-3" />
                <h3 className="text-xl font-bold text-[#0A1628]">{sol.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{sol.description}</p>
                <p className="text-gray-500 text-sm mt-2"><strong>Ideal:</strong> {sol.ideal}</p>
                <p className="text-gray-500 text-sm"><strong>Servicios:</strong> {sol.services}</p>
                {sol.images && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {sol.images.map((img, j) => (
                      <img key={j} src={`/images/${img}`} alt="" className="rounded-lg h-16 w-full object-cover" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">¿Por qué elegirnos?</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {ventajas.map((v, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <FaCheckCircle className="text-[#5B21B6] mt-0.5 flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Cotizar este servicio
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Hablar con un experto
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </main>
  )
}
