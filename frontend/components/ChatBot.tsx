'use client'

import { useState, useRef, useEffect } from 'react'
import { FaHeadset, FaTimes, FaPaperPlane, FaMicrophone, FaStop } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// ===== CONOCIMIENTO DE CENTLIA =====
const CENTLIA_KNOWLEDGE = {
  empresa: {
    nombre: 'CENTLIA',
    eslogan: 'Uniendo tecnologías, conectando soluciones',
    descripcion: 'Somos una empresa de soluciones tecnológicas integrales para empresas que buscan crecer con confianza.',
    años: 'Más de 1 año de experiencia',
    historia: 'Nacimos hace poco más de un año con la convicción de que la tecnología debe ser una herramienta que impulse el crecimiento de las empresas, no una fuente constante de problemas.'
  },
  servicios: {
    redes: 'Infraestructura de redes: diseño, instalación y gestión de redes empresariales LAN, WAN, WiFi y fibra óptica. Incluye cableado estructurado y peinado de racks.',
    seguridad: 'Videovigilancia y seguridad: instalación de cámaras IP, NVR, DVR, monitoreo 24/7 y sistemas de seguridad profesional.',
    desarrollo: 'Desarrollo de software a medida: sistemas ERP, CRM, aplicaciones web y automatización de procesos empresariales.',
    iot: 'Internet de las Cosas (IoT): automatización inteligente, monitoreo de maquinaria industrial y sensores para inventarios.',
    mantenimiento: 'Mantenimiento integral: preventivo y correctivo de equipos de cómputo e impresión.',
    ia: 'Inteligencia Artificial: automatización de procesos, chatbots inteligentes y análisis de datos con IA.',
    firma: 'Firma electrónica: certificados digitales X.509, sellos de tiempo RFC 3161 y criptografía postcuántica.',
    facturacion: 'Facturación electrónica: generación de CFDI, validación de XML, complementos de pago y Cartas Porte.',
    soporte: 'Soporte técnico especializado: mesa de ayuda, monitoreo de sistemas y mantenimiento correctivo de software.',
    hardware: 'Hardware y energía: repotenciación de equipos, UPS, no-breaks y diagnóstico de líneas eléctricas.',
    ecommerce: 'E-commerce: desarrollo de tiendas en línea, integración con pasarelas de pago y sincronización de inventarios.',
    cloud: 'Cloud y Multinube: migración a AWS, Azure o Google Cloud, optimización de costos (FinOps) y respaldos automatizados.'
  },
  contacto: {
    whatsapp: '(55) 7422 3578',
    telefono: '(55) 7422 3578',
    telefono_fijo: '(55) 2476 2822',
    email: 'centlia.utcs@gmail.com',
    horario: 'Lunes a viernes de 9:00 a 18:00 hrs. Soporte 24/7 para emergencias.'
  },
  precios: 'Los precios varían según el proyecto. Te invitamos a contactarnos para una cotización personalizada sin costo. Ofrecemos diagnósticos gratuitos para la mayoría de los servicios.',
  cotizacion: 'Puedes solicitar una cotización gratuita llenando el formulario de contacto o escribiéndonos por WhatsApp. Te respondemos en menos de 24 horas.'
}

// ===== FUNCIÓN DE BÚSQUEDA INTELIGENTE =====
function findBestResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim()
  
  // Saludos
  if (msg.match(/^(hola|buen[ad]|saludos|hey|qué tal|qué onda|holi)/i)) {
    return '¡Hola! 👋 Soy el asistente virtual de CENTLIA. ¿En qué puedo ayudarte hoy? Puedo informarte sobre nuestros servicios, horarios, precios o contactarte con un asesor.'
  }

  // Agradecimientos
  if (msg.match(/gracias|graci|thx|thank|muy amable|agradezco/i)) {
    return '¡De nada! 😊 Estamos para ayudarte. Si tienes más preguntas, aquí estoy. ¿Hay algo más en lo que pueda asistirte?'
  }

  // Despedidas
  if (msg.match(/adiós|adios|chao|bye|hasta luego|nos vemos|saludos/i)) {
    return '¡Hasta luego! 👋 Fue un placer ayudarte. Si necesitas algo más, ya sabes dónde encontrarnos. ¡Que tengas un excelente día!'
  }

  // Empresa / Quiénes somos
  if (msg.match(/quiénes son|quienes son|qué es centlia|que es centlia|empresa|compañía|sobre ustedes|sobre la empresa|historia/i)) {
    return `📌 **CENTLIA** es una empresa de soluciones tecnológicas integrales. ${CENTLIA_KNOWLEDGE.empresa.descripcion}\n\n📖 **Nuestra historia:** ${CENTLIA_KNOWLEDGE.empresa.historia}\n\n${CENTLIA_KNOWLEDGE.empresa.eslogan}`
  }

  // Servicios (búsqueda general)
  if (msg.match(/servicios|que ofrecen|qué ofrecen|soluciones|qué hacen|que hacen|qué venden|que venden|qué ofrecen|que ofrecen/i)) {
    return `🔧 **Servicios de CENTLIA:**\n\n${Object.values(CENTLIA_KNOWLEDGE.servicios).join('\n\n')}\n\n📞 ¿Quieres más información sobre algún servicio en particular? Pregúntame por el que te interese.`
  }

  // Servicio específico: Redes
  if (msg.match(/red(es)?|conectividad|wifi|lan|wan|fibra|cableado|rack|switch|router|redes empresariales|infraestructura de redes/i)) {
    return `🔌 **Infraestructura de Redes:**\n\n${CENTLIA_KNOWLEDGE.servicios.redes}\n\n✅ Incluye:\n• Cableado estructurado\n• WiFi empresarial\n• Fibra óptica\n• Peinado de racks\n\n📞 ¿Te gustaría cotizar una instalación de red?`
  }

  // Servicio específico: Videovigilancia
  if (msg.match(/cámaras|camaras|video vigilancia|videovigilancia|vigilancia|seguridad|cctv|nvr|dvr|cámara ip|camara ip|monitoreo 24\/7/i)) {
    return `📹 **Videovigilancia:**\n\n${CENTLIA_KNOWLEDGE.servicios.seguridad}\n\n✅ Incluye:\n• Cámaras IP y POE\n• NVR y DVR\n• Monitoreo 24/7\n• Instalación profesional\n\n📞 ¿Quieres proteger tu negocio con videovigilancia?`
  }

  // Servicio específico: Desarrollo
  if (msg.match(/desarrollo|software|sistemas|erp|crm|ap(ps|i)|programación|programar|aplicación|aplicacion|web|app|página web|pagina web|sitio web|sistema a la medida|personalizado/i)) {
    return `💻 **Desarrollo de Software a Medida:**\n\n${CENTLIA_KNOWLEDGE.servicios.desarrollo}\n\n✅ Incluye:\n• ERP y CRM personalizados\n• Aplicaciones web\n• Automatización de procesos\n• Integración de APIs\n\n📞 ¿Tienes una idea para un sistema personalizado? ¡Cuéntame!`
  }

  // Servicio específico: IoT
  if (msg.match(/iot|internet de las cosas|smart|inteligente|automatización|automatizacion|sensores|domótica|industria 4\.0|maquinaria|industrial/i)) {
    return `🌐 **Internet de las Cosas (IoT):**\n\n${CENTLIA_KNOWLEDGE.servicios.iot}\n\n✅ Incluye:\n• Automatización de espacios\n• Monitoreo industrial\n• Sensores inteligentes\n• Inventarios automatizados\n\n📞 ¿Quieres automatizar tu negocio?`
  }

  // Servicio específico: IA
  if (msg.match(/ia|inteligencia artificial|chatbot|asistente virtual|automatizacion con ia|modelos de ia|predictivo|analisis de datos|reconocimiento facial|entrenar modelo/i)) {
    return `🤖 **Inteligencia Artificial:**\n\n${CENTLIA_KNOWLEDGE.servicios.ia}\n\n✅ Incluye:\n• Chatbots inteligentes\n• Automatización de procesos\n• Análisis predictivo\n• Visión artificial\n\n📞 ¿Quieres implementar IA en tu negocio?`
  }

  // Servicio específico: Firma electrónica
  if (msg.match(/firma|firma electronica|firma electrónica|firma digital|x\.509|pki|certificado digital|sello de tiempo|rfc 3161|criptografía|postcuantica|post-cuántica/i)) {
    return `📝 **Firma Electrónica:**\n\n${CENTLIA_KNOWLEDGE.servicios.firma}\n\n✅ Incluye:\n• Certificados digitales X.509\n• Sellos de tiempo RFC 3161\n• Criptografía postcuántica\n• Validez legal internacional\n\n📞 ¿Necesitas firma electrónica para tus documentos?`
  }

  // Servicio específico: Facturación electrónica
  if (msg.match(/facturación|facturacion|cfdi|xml|sat|complemento de pago|carta porte|timbrado|factura electronica|facturación electronica/i)) {
    return `📊 **Facturación Electrónica:**\n\n${CENTLIA_KNOWLEDGE.servicios.facturacion}\n\n✅ Incluye:\n• Generación de CFDI\n• Validación de XML\n• Complemento de Pago\n• Carta Porte\n\n📞 ¿Necesitas automatizar tu facturación?`
  }

  // Servicio específico: E-commerce
  if (msg.match(/e-commerce|ecommerce|tienda en línea|tienda online|shopify|woocommerce|magento|prestashop|vender en línea|vender online|pasarela de pago|pagos en línea|paypal|stripe|mercado pago/i)) {
    return `🛒 **E-commerce:**\n\n${CENTLIA_KNOWLEDGE.servicios.ecommerce}\n\n✅ Incluye:\n• Tiendas en línea profesionales\n• Integración de pasarelas de pago\n• Sincronización de inventarios\n• Automatización de envíos\n\n📞 ¿Quieres vender en línea? ¡Cuéntame tu proyecto!`
  }

  // Servicio específico: Cloud
  if (msg.match(/cloud|nube|aws|azure|gcp|google cloud|migración a la nube|migracion a la nube|multinube|infraestructura en la nube|finops|respaldo en la nube/i)) {
    return `☁️ **Cloud y Multinube:**\n\n${CENTLIA_KNOWLEDGE.servicios.cloud}\n\n✅ Incluye:\n• Migración a AWS, Azure o GCP\n• Optimización de costos (FinOps)\n• Respaldo automatizado\n• Arquitecturas híbridas\n\n📞 ¿Quieres migrar tu infraestructura a la nube?`
  }

  // Contacto
  if (msg.match(/contacto|teléfono|telefono|whatsapp|email|correo|ubicación|ubicacion|dónde están|donde estan|horario|atencion|atención/i)) {
    return `📞 **Contacto CENTLIA:**\n\n• WhatsApp: ${CENTLIA_KNOWLEDGE.contacto.whatsapp}\n• Teléfono móvil: ${CENTLIA_KNOWLEDGE.contacto.telefono}\n• Teléfono fijo: ${CENTLIA_KNOWLEDGE.contacto.telefono_fijo}\n• Email: ${CENTLIA_KNOWLEDGE.contacto.email}\n\n🕐 **Horario:** ${CENTLIA_KNOWLEDGE.contacto.horario}\n\n¿Te ayudo con algo más?`
  }

  // Precios / Cotización
  if (msg.match(/precio|precios|costo|costos|cotizar|cotización|presupuesto|tarifa|cuánto cuesta|costo de|precio de|valor|inversión|presupuesto|tarifa|pago|forma de pago/i)) {
    return `💰 **Cotizaciones:**\n\n${CENTLIA_KNOWLEDGE.cotizacion}\n\nLos precios varían según el proyecto, pero ofrecemos diagnósticos gratuitos para la mayoría de los servicios.\n\n📞 ¿Quieres una cotización personalizada? Puedes llenar el formulario de contacto o escribirnos a ${CENTLIA_KNOWLEDGE.contacto.whatsapp} por WhatsApp.`
  }

  // Soporte / Ayuda técnica
  if (msg.match(/soporte|ayuda|problema|falla|error|no funciona|no enciende|no prende|no carga|se cayó|se apagó|no sirve|asistencia|técnico|ingeniero|reparación|reparar|arreglar|arreglo/i)) {
    return `🛠️ **Soporte Técnico:**\n\nContamos con soporte 24/7 para emergencias técnicas. Para problemas con equipos, redes o sistemas, puedes contactarnos de inmediato:\n\n📞 Teléfono de soporte: ${CENTLIA_KNOWLEDGE.contacto.telefono}\n💬 WhatsApp: ${CENTLIA_KNOWLEDGE.contacto.whatsapp}\n\n🕐 **Horario de atención:** ${CENTLIA_KNOWLEDGE.contacto.horario}\n\n¿Cómo podemos ayudarte técnicamente?`
  }

  // Preguntas generales
  if (msg.match(/hola|buen|qué tal|que tal|haz|has|eres|puedes|como|qué|cuál|que|donde|cuando|porque|por qué|por qu|para qué|para que/i)) {
    // Intenta detectar el tema de la pregunta
    if (msg.includes('red') || msg.includes('wifi')) {
      return `🔌 Sobre redes: ${CENTLIA_KNOWLEDGE.servicios.redes}\n\n¿Te gustaría más detalles sobre algún servicio en particular?`
    }
    if (msg.includes('camara') || msg.includes('video')) {
      return `📹 Sobre videovigilancia: ${CENTLIA_KNOWLEDGE.servicios.seguridad}\n\n¿Quieres proteger tu negocio?`
    }
    if (msg.includes('software') || msg.includes('sistema')) {
      return `💻 Sobre desarrollo: ${CENTLIA_KNOWLEDGE.servicios.desarrollo}\n\n¿Tienes un proyecto en mente?`
    }
    if (msg.includes('precio') || msg.includes('costo')) {
      return `💰 Sobre precios: ${CENTLIA_KNOWLEDGE.cotizacion}\n\n¿Te ayudo con algo más?`
    }
    return `🤔 Entiendo tu consulta. Para darte la respuesta más precisa, te recomiendo:\n\n1. Preguntarme sobre un servicio específico (redes, videovigilancia, desarrollo, IA, etc.)\n2. Contactarnos directamente por WhatsApp: ${CENTLIA_KNOWLEDGE.contacto.whatsapp}\n3. Llenar el formulario de contacto en nuestra página.\n\n¡Estamos para ayudarte!`
  }

  // Respuesta por defecto
  return `🤔 No estoy seguro de haber entendido tu pregunta. Puedo ayudarte con información sobre:\n\n• 📌 Quiénes somos\n• 🔧 Servicios que ofrecemos\n• 💰 Precios y cotizaciones\n• 📞 Contacto y horarios\n• 🛠️ Soporte técnico\n\n¿Sobre qué te gustaría saber más?`
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: '👋 ¡Hola! Soy el asistente virtual de CENTLIA. ¿En qué puedo ayudarte hoy?', isBot: true }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const msg = input.trim()
    setMessages(prev => [...prev, { text: msg, isBot: false }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = findBestResponse(msg)
      setMessages(prev => [...prev, { text: response, isBot: true }])
      setIsTyping(false)
    }, 800)
  }

  const handleRecording = () => {
    // Por ahora solo un placeholder visual
    setIsRecording(!isRecording)
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setInput('¿Tienen servicio de instalación de redes?')
      }, 2000)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#5B21B6] hover:bg-[#4C1D95] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaHeadset className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#60A5FA] to-[#6D28D9] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaHeadset className="text-sm" />
                </div>
                <div>
                  <span className="font-bold text-sm">Asistente CENTLIA</span>
                  <p className="text-[10px] text-white/70">Soporte 24/7</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
                <FaTimes />
              </button>
            </div>

            {/* Mensajes */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-line ${
                    msg.isBot 
                      ? 'bg-white border border-gray-200 text-gray-800 shadow-sm' 
                      : 'bg-[#5B21B6] text-white shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce mx-0.5" />
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce mx-0.5 delay-75" />
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce mx-0.5 delay-150" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 flex gap-2 bg-white">
              <button
                onClick={handleRecording}
                className={`p-2 rounded-full transition ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <FaStop className="text-sm" /> : <FaMicrophone className="text-sm" />}
              </button>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm text-gray-800 bg-white placeholder-gray-400 focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] outline-none transition"
              />
              <button 
                onClick={handleSend} 
                className="bg-[#5B21B6] hover:bg-[#4C1D95] text-white px-3 py-2 rounded-full transition"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
