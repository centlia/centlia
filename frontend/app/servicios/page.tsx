import Link from 'next/link'
import {
  FaNetworkWired, FaShieldAlt, FaCode, FaMicrochip, FaTools, FaRobot,
  FaFileSignature, FaFileInvoice, FaHeadset, FaMemory, FaShoppingCart, FaCloud,
  FaArrowRight
} from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ChatBot from '../../components/ChatBot'

const servicios = [
  {
    icon: FaNetworkWired,
    title: 'Infraestructura y Redes',
    description: 'Diseño, instalación y gestión de redes empresariales de alto rendimiento.',
    href: '/servicios/redes'
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad y Videovigilancia',
    description: 'Instalación y configuración de sistemas de seguridad profesional.',
    href: '/servicios/seguridad'
  },
  {
    icon: FaCode,
    title: 'Desarrollo a Medida',
    description: 'Sistemas personalizados que optimizan la productividad.',
    href: '/servicios/desarrollo'
  },
  {
    icon: FaMicrochip,
    title: 'Internet de las Cosas',
    description: 'Automatización y monitoreo inteligente para tu negocio.',
    href: '/servicios/iot'
  },
  {
    icon: FaTools,
    title: 'Mantenimiento Integral',
    description: 'Preventivo y correctivo para máxima disponibilidad.',
    href: '/servicios/mantenimiento'
  },
  {
    icon: FaRobot,
    title: 'Inteligencia Artificial',
    description: 'Automatización y análisis de datos con IA avanzada.',
    href: '/servicios/ia'
  },
  {
    icon: FaFileSignature,
    title: 'Firma Electrónica',
    description: 'Firma digital con validez legal y criptografía avanzada.',
    href: '/servicios/firma'
  },
  {
    icon: FaFileInvoice,
    title: 'Facturación Electrónica',
    description: 'Automatización de CFDI, XML y cumplimiento fiscal SAT.',
    href: '/servicios/facturacion'
  },
  {
    icon: FaHeadset,
    title: 'Soporte Técnico',
    description: 'Respaldo continuo para tus aplicaciones y sistemas.',
    href: '/servicios/soporte'
  },
  {
    icon: FaMemory,
    title: 'Hardware y Energía',
    description: 'Repotenciación de equipos y protección eléctrica.',
    href: '/servicios/hardware'
  },
  {
    icon: FaShoppingCart,
    title: 'E-commerce',
    description: 'Desarrollo e integración de tiendas en línea.',
    href: '/servicios/ecommerce'
  },
  {
    icon: FaCloud,
    title: 'Cloud y Multinube',
    description: 'Migración, optimización y gestión de infraestructura en la nube.',
    href: '/servicios/cloud'
  }
]

export default function ServiciosPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628]">
              Nuestros <span className="text-[#E8751A]">Servicios</span>
            </h1>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              Conoce todas las soluciones tecnológicas que ofrecemos para tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#5B21B6] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-2xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <s.icon />
                </div>
                <h3 className="font-bold text-[#0A1628] text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{s.description}</p>
                <div className="mt-4 text-[#5B21B6] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition">
                  Conoce más <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </main>
  )
}
