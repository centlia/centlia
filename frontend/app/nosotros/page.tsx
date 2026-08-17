'use client'

import Link from 'next/link'
import {
  FaRocket, FaAward, FaHandshake, FaClock, FaCheckCircle,
  FaArrowLeft, FaUsers, FaShieldAlt, FaLightbulb, FaStar, FaEye,
  FaBrain, FaLink, FaRoute, FaNetworkWired
} from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ChatBot from '../../components/ChatBot'

export default function NosotrosPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">

          <Link href="/" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-8 font-medium">
            <FaArrowLeft /> Volver al inicio
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block bg-[#5B21B6]/10 text-[#5B21B6] text-sm font-bold px-4 py-1.5 rounded-full border border-[#5B21B6]/20 mb-4">
              Sobre nosotros
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628]">
              Conoce a <span className="text-red-600">CENTLIA</span>
            </h1>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              Somos una empresa joven con energía, pasión por la tecnología y un compromiso real con tu negocio.
              No te vendemos soluciones mágicas; te ofrecemos trabajo honesto, de calidad y acompañamiento real.
            </p>
          </div>

          {/* ===== NUEVA SECCIÓN: MENSAJE CENTLIA ===== */}
          <div className="bg-gradient-to-br from-[#5B21B6]/5 via-[#4C1D95]/5 to-[#60A5FA]/5 border border-[#5B21B6]/10 rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FaLink className="text-3xl text-[#5B21B6]" />
              <FaRoute className="text-3xl text-[#E8751A]" />
              <FaNetworkWired className="text-3xl text-[#60A5FA]" />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
              <p className="text-lg font-medium text-[#0A1628]">
                Construir no es solo unir dos puntos; es abrir el camino donde antes no existía nada.
              </p>
              <p>
                En <strong className="text-[#5B21B6]">CENTLIA</strong> nacemos con una convicción clara: ser el <strong>núcleo</strong> donde convergen la estrategia, la innovación y la visión de futuro. Trabajamos día a día <strong>uniendo tecnologías, conectando soluciones</strong> para transformar grandes ideas en realidades sostenibles y con impacto real.
              </p>
              <p>
                Hoy compartimos este espacio no solo para mostrar lo que hacemos, sino para conectar con quienes impulsan el cambio constante.
              </p>
              <div className="bg-white/80 backdrop-blur-sm border border-[#5B21B6]/20 rounded-xl p-4 mt-4 text-center">
                <p className="text-lg font-bold text-[#5B21B6]">
                  "Uniendo tecnologías, conectando soluciones" 🚀✨
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-16 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/MisionVision/mision-00.jpg"
              alt="Equipo CENTLIA"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => { e.currentTarget.src = '/images/logo/logo.png' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent flex items-end">
              <div className="p-6 md:p-8 w-full">
                <div className="inline-block bg-[#5B21B6] text-white text-sm font-bold px-5 py-2.5 rounded-lg">
                  Experiencia transformando negocios
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-10 mb-16 shadow-sm border-l-4 border-l-[#5B21B6]">
            <div className="flex items-center gap-3 mb-4">
              <FaBrain className="text-3xl text-[#5B21B6]" />
              <h2 className="text-2xl font-bold text-[#0A1628]">Nuestro Mindware</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              En CENTLIA creemos que la tecnología (hardware y software) es solo el punto de partida.
              El verdadero valor está en el <strong>mindware</strong>: el talento, el conocimiento y la
              inteligencia que aplicamos para transformar tu negocio.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaUsers className="text-[#5B21B6] text-xl" />
                  <h4 className="font-bold text-sm text-[#0A1628]">Talento Humano</h4>
                </div>
                <p className="text-gray-500 text-sm">
                  Personas apasionadas que diseñan, implementan y acompañan tu crecimiento con cercanía y compromiso.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaLightbulb className="text-[#E8751A] text-xl" />
                  <h4 className="font-bold text-sm text-[#0A1628]">Inteligencia Aplicada</h4>
                </div>
                <p className="text-gray-500 text-sm">
                  Conocimiento y herramientas que potencian tu capacidad de análisis y toma de decisiones estratégicas.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-[#5B21B6]/5 border border-[#5B21B6]/10 px-3 py-1 rounded-full text-xs font-medium text-[#0A1628]">Hardware</span>
              <span className="bg-[#5B21B6]/5 border border-[#5B21B6]/10 px-3 py-1 rounded-full text-xs font-medium text-[#0A1628]">Software</span>
              <span className="bg-[#E8751A]/10 border border-[#E8751A]/20 px-3 py-1 rounded-full text-xs font-medium text-[#0A1628]">Mindware</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0A1628] flex items-center gap-3 mb-4">
              <FaUsers className="text-[#5B21B6] text-2xl" /> Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                CENTLIA nació con una convicción clara: la tecnología debe ser
                una herramienta que impulse el crecimiento de las empresas, no una fuente constante de
                problemas. Empezamos con la idea de que un servicio técnico no es solo reparar equipos,
                sino construir relaciones de confianza basadas en soluciones que realmente funcionan.
              </p>
              <p>
                En este tiempo, hemos ayudado a decenas de negocios a tener redes más estables,
                sistemas más eficientes y la tranquilidad de saber que cuentan con un aliado tecnológico
                que responde cuando más lo necesitan. Seguimos aprendiendo, mejorando y creciendo, porque
                sabemos que la tecnología nunca se detiene y nosotros tampoco.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] text-white rounded-2xl p-8 shadow-lg shadow-purple-900/20">
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="text-3xl text-[#E8751A]" />
                <h3 className="text-2xl font-bold">Misión</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-base">
                Hacer que la tecnología deje de ser un dolor de cabeza para las empresas. Nos dedicamos a
                ofrecer soluciones tecnológicas que realmente funcionan: redes estables, sistemas a la medida,
                seguridad real y soporte que responde cuando lo necesitas. Creemos que la tecnología debe
                adaptarse a tu negocio, no al revés.
              </p>
            </div>

            <div className="bg-[#0A1628] text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-3xl text-[#E8751A]" />
                <h3 className="text-2xl font-bold">Visión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                Ser la empresa de tecnología en la que las empresas confían para crecer sin preocuparse
                por caídas, errores o problemas técnicos. Queremos ser reconocidos no por lo grandes que
                somos, sino por lo bien que resolvemos los problemas de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1628] flex items-center gap-3 mb-8">
              <FaStar className="text-[#E8751A] text-2xl" /> Nuestros Valores
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5B21B6] transition group">
                <div className="w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <FaHandshake />
                </div>
                <h4 className="font-bold text-[#0A1628] text-lg">Confianza</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Cumplimos lo que prometemos y somos transparentes en cada paso.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5B21B6] transition group">
                <div className="w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <FaAward />
                </div>
                <h4 className="font-bold text-[#0A1628] text-lg">Calidad</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Trabajamos con componentes certificados y marcas reconocidas.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5B21B6] transition group">
                <div className="w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <FaUsers />
                </div>
                <h4 className="font-bold text-[#0A1628] text-lg">Cercanía</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  No somos una empresa lejana; estamos contigo para resolver dudas y emergencias.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5B21B6] transition group">
                <div className="w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <FaLightbulb />
                </div>
                <h4 className="font-bold text-[#0A1628] text-lg">Mejora Continua</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Siempre estamos aprendiendo y mejorando porque la tecnología nunca se detiene.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-8 border-t border-gray-200">
            <p className="text-sm text-gray-400">
              "Uniendo tecnologías, conectando soluciones"
            </p>
            <p className="text-xs text-gray-400 mt-1">— CENTLIA</p>
          </div>

        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
