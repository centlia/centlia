'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import {
  FaNetworkWired, FaCloud, FaShieldVirus, FaCode, FaServer,
  FaArrowRight, FaCheckCircle, FaWhatsapp, FaShieldAlt,
  FaFileSignature, FaFileInvoice, FaHeadset, FaMemory, FaShoppingCart,
  FaMicrochip, FaTools, FaRobot, FaChevronLeft, FaChevronRight,
  FaBrain, FaUsers, FaLightbulb
} from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'

const servicios = [
  {
    icon: FaNetworkWired,
    title: 'Infraestructura y Redes',
    description: 'Diseño, instalación y gestión de redes empresariales.',
    href: '/servicios/redes',
    image: '/images/redes/redes-carrusel.png'
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad y Videovigilancia',
    description: 'Sistemas de seguridad profesional con monitoreo 24/7.',
    href: '/servicios/seguridad',
    image: '/images/seguridad/seguridad-carrusel.jpg'
  },
  {
    icon: FaCode,
    title: 'Desarrollo a Medida',
    description: 'Sistemas personalizados que optimizan la productividad.',
    href: '/servicios/desarrollo',
    image: '/images/desarrollo/desarrollo-carrusel.webp'
  },
  {
    icon: FaMicrochip,
    title: 'Internet de las Cosas (IoT)',
    description: 'Automatización y monitoreo inteligente.',
    href: '/servicios/iot',
    image: '/images/iot/IoT-carrusel.jpeg'
  },
  {
    icon: FaTools,
    title: 'Mantenimiento Integral',
    description: 'Preventivo y correctivo para máxima disponibilidad.',
    href: '/servicios/mantenimiento',
    image: '/images/mantenimiento/mantenimiento-preventivo-carrusel.webp'
  },
  {
    icon: FaRobot,
    title: 'Inteligencia Artificial',
    description: 'Automatización y análisis de datos con IA.',
    href: '/servicios/ia',
    image: '/images/ia/ia-carrusel.jpg'
  }
]

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearAllTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const startAutoSlide = () => {
    clearAllTimers()
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % servicios.length)
    }, 5000)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setSlideIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const nextSlide = () => {
    goToSlide((slideIndex + 1) % servicios.length)
  }

  const prevSlide = () => {
    goToSlide((slideIndex - 1 + servicios.length) % servicios.length)
  }

  const handleManualNavigation = (callback: () => void) => {
    clearAllTimers()
    callback()
    timeoutRef.current = setTimeout(() => {
      startAutoSlide()
    }, 4000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => clearAllTimers()
  }, [])

  const currentService = servicios[slideIndex]

  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight">
                Soluciones tecnológicas <br />
                <span className="text-[#E8751A]">para tu negocio</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-md">
                Te ayudamos a tener redes estables, sistemas eficientes y la tranquilidad de saber que tu tecnología está en buenas manos.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contacto"
                  className="group relative bg-white border-2 border-[#5B21B6] text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Cotizar ahora
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-[#5B21B6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                <Link
                  href="/servicios"
                  className="group relative bg-white border-2 border-slate-300 text-slate-700 hover:border-[#5B21B6] hover:bg-[#5B21B6] hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver todos los servicios
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-[#5B21B6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl bg-gray-900 border border-gray-200">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6 text-center">
                  <currentService.icon className="text-4xl sm:text-5xl mb-3 text-white drop-shadow-lg" />
                  <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">{currentService.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xs drop-shadow-lg">
                    {currentService.description}
                  </p>
                </div>
                <button
                  onClick={() => handleManualNavigation(prevSlide)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition z-20 hover:scale-110"
                >
                  <FaChevronLeft className="text-base sm:text-lg" />
                </button>
                <button
                  onClick={() => handleManualNavigation(nextSlide)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition z-20 hover:scale-110"
                >
                  <FaChevronRight className="text-base sm:text-lg" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {servicios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleManualNavigation(() => goToSlide(index))}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === slideIndex ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mt-2 text-xs text-gray-400">
                {slideIndex + 1} / {servicios.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">Nuestros Servicios</h2>
            <p className="text-gray-500 mt-2">Soluciones tecnológicas para tu negocio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#5B21B6] transition group"
              >
                <div className="w-14 h-14 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center text-[#5B21B6] text-2xl mb-4 group-hover:bg-[#5B21B6] group-hover:text-white transition">
                  <s.icon />
                </div>
                <h3 className="font-bold text-[#0A1628] text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{s.description}</p>
                <div className="mt-4 text-[#5B21B6] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition">
                  Conoce más <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN ¿POR QUÉ CENTLIA? CON MINDWARE ===== */}
      <section className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#5B21B6] text-xs font-bold tracking-[0.2em] uppercase bg-[#5B21B6]/5 px-3 py-1.5 rounded-md border border-[#5B21B6]/10 mb-4">
                Nuestro Mindware
              </span>
              <h2 className="text-3xl font-bold text-[#0A1628]">
                El factor humano que <span className="text-[#5B21B6]">potencia</span> tu tecnología
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                En CENTLIA entendemos que la tecnología (hardware y software) es solo el punto de partida.
                El verdadero valor está en el <strong>mindware</strong>: el talento, el conocimiento y la
                inteligencia que aplicamos para transformar tu negocio.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBrain className="text-[#5B21B6] text-xl" />
                    <h4 className="font-bold text-sm text-[#0A1628]">Talento Humano</h4>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Personas apasionadas que diseñan, implementan y acompañan tu crecimiento con cercanía y compromiso.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <FaLightbulb className="text-[#E8751A] text-xl" />
                    <h4 className="font-bold text-sm text-[#0A1628]">Inteligencia Aplicada</h4>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Conocimiento y herramientas que potencian tu capacidad de análisis y toma de decisiones estratégicas.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-[#5B21B6]/5 border border-[#5B21B6]/10 px-3 py-1.5 rounded-full">
                  <FaCheckCircle className="text-[#5B21B6] text-xs" />
                  <span className="text-xs font-medium text-[#0A1628]">Hardware</span>
                </div>
                <div className="flex items-center gap-2 bg-[#5B21B6]/5 border border-[#5B21B6]/10 px-3 py-1.5 rounded-full">
                  <FaCheckCircle className="text-[#5B21B6] text-xs" />
                  <span className="text-xs font-medium text-[#0A1628]">Software</span>
                </div>
                <div className="flex items-center gap-2 bg-[#E8751A]/10 border border-[#E8751A]/20 px-3 py-1.5 rounded-full">
                  <FaBrain className="text-[#E8751A] text-xs" />
                  <span className="text-xs font-medium text-[#0A1628]">Mindware</span>
                </div>
              </div>

              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-[#5B21B6] font-medium mt-4 hover:text-[#4C1D95] transition"
              >
                Conoce más sobre nosotros <FaArrowRight className="text-sm" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/MisionVision/mision-00.jpg"
                alt="Mindware CENTLIA"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#5B21B6] text-lg" />
                  <span className="text-sm font-medium text-[#0A1628]">Talento que transforma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#5B21B6] via-[#4C1D95] to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-4 text-center">
          <h2 className="text-3xl font-bold">¿Listo para crecer con tecnología?</h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/contacto"
              className="group relative bg-white text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Cotizar ahora
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-[#5B21B6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <a
              href="https://wa.me/525574223578"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg overflow-hidden flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaWhatsapp /> WhatsApp
              </span>
              <span className="absolute inset-0 bg-[#5B21B6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
