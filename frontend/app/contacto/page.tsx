'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaEnvelope, FaPhone, FaArrowLeft, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ChatBot from '../../components/ChatBot'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    const nameClean = form.name.trim()
    if (!nameClean || nameClean.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres'
    } else if (nameClean.length > 80) {
      newErrors.name = 'El nombre es demasiado largo (máximo 80 caracteres)'
    } else if (!/^[a-zA-ZáéíóúüñÑ\s.]+$/.test(nameClean)) {
      newErrors.name = 'El nombre solo debe contener letras, espacios y puntos'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Ingresa un email válido (ej: nombre@empresa.com)'
    }

    const phoneClean = form.phone.replace(/[\(\)\-\s]/g, '')
    if (!phoneClean || !/^\d{10}$/.test(phoneClean)) {
      newErrors.phone = 'El teléfono debe tener exactamente 10 dígitos (ej: 5512345678)'
    } else if (parseInt(phoneClean) === parseInt(phoneClean[0]) * 10) {
      newErrors.phone = 'El teléfono no puede tener todos los dígitos iguales'
    }

    if (!form.service_type) {
      newErrors.service_type = 'Selecciona un servicio'
    }

    const msgClean = form.message.trim()
    if (!msgClean || msgClean.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    } else if (msgClean.length > 1000) {
      newErrors.message = 'El mensaje es demasiado largo (máximo 1000 caracteres)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setStatus('Enviando...')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('✅ Mensaje enviado correctamente')
        setForm({ name: '', email: '', phone: '', company: '', service_type: '', message: '' })
        setErrors({})
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus(`❌ ${data.detail || 'Error al enviar. Intenta de nuevo.'}`)
      }
    } catch {
      setStatus('❌ Error de conexión. Verifica tu internet.')
    }
    setLoading(false)
  }

  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">

          <Link href="/" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-8 font-medium">
            <FaArrowLeft /> Volver al inicio
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628]">
              Hablemos de tu <span className="text-[#E8751A]">proyecto</span>
            </h1>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              Cuéntanos qué necesitas y te contactaremos en menos de 24 horas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#5B21B6]/10 rounded-lg flex items-center justify-center text-[#5B21B6] text-lg">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <a href="https://wa.me/525574223578" target="_blank" className="font-medium text-[#0A1628] hover:text-[#5B21B6] transition">
                        (55) 7422 3578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#5B21B6]/10 rounded-lg flex items-center justify-center text-[#5B21B6] text-lg">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono Móvil</p>
                      <a href="tel:5574223578" className="font-medium text-[#0A1628] hover:text-[#5B21B6] transition">
                        (55) 7422 3578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#5B21B6]/10 rounded-lg flex items-center justify-center text-[#5B21B6] text-lg">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono Fijo</p>
                      <a href="tel:5524762822" className="font-medium text-[#0A1628] hover:text-[#5B21B6] transition">
                        (55) 2476 2822
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#5B21B6]/10 rounded-lg flex items-center justify-center text-[#5B21B6] text-lg">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:centlia.utcs@gmail.com" className="font-medium text-[#0A1628] hover:text-[#5B21B6] transition break-all">
                        centlia.utcs@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] text-white rounded-2xl p-6 shadow-lg shadow-purple-900/20">
                <h4 className="font-bold text-lg mb-2">¿Prefieres una llamada?</h4>
                <p className="text-white/80 text-sm">Déjanos tu número y te llamamos en menos de 15 minutos.</p>
                <a
                  href="https://wa.me/525574223578"
                  target="_blank"
                  className="inline-block mt-4 bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition"
                >
                  Solicitar llamada
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl font-medium text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition ${
                      errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    value={form.name}
                    onChange={(e) => {
                      setForm({...form, name: e.target.value})
                      if (errors.name) setErrors({...errors, name: ''})
                    }}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Email *</label>
                  <input
                    type="email"
                    placeholder="Ej: juan@empresa.com"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl font-medium text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition ${
                      errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    value={form.email}
                    onChange={(e) => {
                      setForm({...form, email: e.target.value})
                      if (errors.email) setErrors({...errors, email: ''})
                    }}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Teléfono * (10 dígitos)</label>
                  <input
                    type="tel"
                    placeholder="Ej: 5512345678"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl font-medium text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition ${
                      errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    value={form.phone}
                    onChange={(e) => {
                      setForm({...form, phone: e.target.value})
                      if (errors.phone) setErrors({...errors, phone: ''})
                    }}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition"
                    value={form.company}
                    onChange={(e) => setForm({...form, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Servicio de interés *</label>
                  <select
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl font-medium font-sans text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition ${
                      errors.service_type ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    value={form.service_type}
                    onChange={(e) => {
                      setForm({...form, service_type: e.target.value})
                      if (errors.service_type) setErrors({...errors, service_type: ''})
                    }}
                  >
                    <option className="font-medium font-sans" value="">Selecciona un servicio</option>
                    <option className="font-medium font-sans" value="redes">Infraestructura y Redes</option>
                    <option className="font-medium font-sans" value="seguridad">Seguridad y Videovigilancia</option>
                    <option className="font-medium font-sans" value="desarrollo">Desarrollo a Medida</option>
                    <option className="font-medium font-sans" value="iot">Internet de las Cosas</option>
                    <option className="font-medium font-sans" value="mantenimiento">Mantenimiento Integral</option>
                    <option className="font-medium font-sans" value="ia">Inteligencia Artificial</option>
                    <option className="font-medium font-sans" value="firma">Firma Electrónica</option>
                    <option className="font-medium font-sans" value="facturacion">Facturación Electrónica</option>
                    <option className="font-medium font-sans" value="soporte">Soporte Técnico</option>
                    <option className="font-medium font-sans" value="hardware">Hardware y Energía</option>
                    <option className="font-medium font-sans" value="ecommerce">E-commerce</option>
                    <option className="font-medium font-sans" value="cloud">Cloud y Multinube</option>
                    <option className="font-medium font-sans" value="otro">Otro</option>
                  </select>
                  {errors.service_type && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" /> {errors.service_type}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1">Mensaje *</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl font-medium text-[#0A1628] focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/20 outline-none transition resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    value={form.message}
                    onChange={(e) => {
                      setForm({...form, message: e.target.value})
                      if (errors.message) setErrors({...errors, message: ''})
                    }}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" /> {errors.message}
                    </p>
                  )}
                </div>

                {status && (
                  <div className={`text-center text-sm font-medium p-3 rounded-xl ${
                    status.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3.5 rounded-xl font-bold transition disabled:opacity-50 shadow-lg shadow-purple-900/20 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <><FaCheckCircle className="text-sm" /> Enviar mensaje</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center mt-2">
                  Tus datos están seguros. No compartimos tu información con terceros.
                </p>
              </div>
            </form>

          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
