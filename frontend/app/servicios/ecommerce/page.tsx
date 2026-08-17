'use client'

import Link from 'next/link'
import {
  FaArrowLeft, FaShoppingCart, FaCreditCard, FaBoxes, FaTruck,
  FaCheckCircle, FaWhatsapp, FaStore, FaPallet, FaChartLine,
  FaMobileAlt, FaShieldAlt, FaSync
} from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ChatBot from '../../../components/ChatBot'

const soluciones = [
  {
    icon: FaStore,
    title: 'Diseño y Desarrollo de Tiendas en Línea',
    subtitle: 'Shopify, WooCommerce, Magento y más',
    description: 'Creamos tu tienda digital utilizando las plataformas líderes y más estables del mercado. Desarrollamos interfaces intuitivas, rápidas y totalmente optimizadas para que tus clientes puedan comprar fácilmente desde su computadora o su teléfono celular.',
    ideal: 'Comercios, marcas de ropa, distribuidores o emprendedores que quieren empezar a vender en internet o migrar una tienda actual que no funciona correctamente.',
    services: 'Configuración completa de la plataforma, diseño de la experiencia de usuario (UX/UI), carga y categorización de productos, optimización de velocidad de carga y adaptación móvil.',
    images: ['ecommerce/e-commerce-00.jpeg', 'ecommerce/e-commerce-01.jpeg']
  },
  {
    icon: FaCreditCard,
    title: 'Integración de Pasarelas de Pago Seguras',
    subtitle: 'Stripe, PayPal, Mercado Pago y más',
    description: 'Dales confianza a tus clientes para pagar en tu sitio. Conectamos tu tienda virtual con los procesadores de pago más seguros del mundo para que puedas aceptar tarjetas de crédito, débito, transferencias bancarias (SPEI) e incluso pagos en efectivo en tiendas de conveniencia.',
    ideal: 'Negocios que necesitan automatizar el cobro de sus productos o servicios sin intermediarios manuales y con esquemas avanzados de prevención de fraudes.',
    services: 'Configuración de APIs de pago, implementación de certificados de seguridad SSL para proteger los datos bancarios y automatización de notificaciones de pago exitoso para tus clientes.',
    images: ['ecommerce/idpdps-01.jpeg', 'ecommerce/idpdps-02.jpeg']
  },
  {
    icon: FaSync,
    title: 'Sincronización de Inventarios',
    subtitle: 'Integración con ERP y Sistemas Locales',
    description: 'Evita el peor error del E-commerce: vender un producto que ya no tienes en existencia. Conectamos tu tienda en línea con tus sistemas internos o bases de datos de inventario para que el stock se actualice en tiempo real en todos tus canales de venta.',
    ideal: 'Empresas que ya tienen una tienda física o almacén centralizado y quieren que su stock de internet sea idéntico al stock real de sus sucursales.',
    services: 'Desarrollo de integraciones y puentes de comunicación (APIs) para automatizar la actualización de precios, existencias y descripción de productos de forma centralizada.',
    images: ['ecommerce/sdi-01.jpeg', 'ecommerce/sdi-02.jpg']
  },
  {
    icon: FaTruck,
    title: 'Automatización de Envíos',
    subtitle: 'Conectividad Logística y Cotizadores',
    description: 'Hacemos que el proceso de empaque y envío sea rápido y sin errores. Integramos tu plataforma con agregadores de envíos (como Skydropx, Envia.com) o paqueterías directas para calcular costos de envío exactos y generar guías automáticamente.',
    ideal: 'Negocios que manejan un volumen constante de ventas y pierden demasiado tiempo cotizando envíos a mano o copiando direcciones para las paqueterías.',
    services: 'Configuración de reglas de envío (costos fijos, envío gratis por monto mínimo), integración de cotizadores en tiempo real en el carrito de compras y generación automatizada de números de rastreo para el comprador.',
    images: ['ecommerce/ade-01.jpeg', 'ecommerce/ade-02.jpeg']
  }
]

export default function EcommercePage() {
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
          <h1 className="text-4xl font-bold text-[#0A1628]">🛒 Desarrollo e Integración de E-commerce</h1>
          <p className="text-[#E8751A] text-lg mt-1">Lleva tu Tienda al Mercado Digital</p>
          <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
            Vender en línea va mucho más allá de tener una página web bonita. Requiere una infraestructura
            digital sólida que garantice transacciones seguras, una gestión de inventarios eficiente y una
            experiencia de compra fluida para tus clientes. Te ofrecemos el diseño, desarrollo e integración
            de tiendas en línea (E-commerce) a la medida de tu negocio, conectando tus ventas digitales
            directamente con tus sistemas de administración, inventario y facturación.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Transforma tu negocio local en una sucursal abierta las 24 horas del día, los 7 días de la semana,
            con alcance local, nacional o internacional.
          </p>

          {/* Soluciones */}
          <h2 className="text-2xl font-bold text-[#0A1628] mt-10 mb-6">🛠️ Nuestras Soluciones de Comercio Electrónico</h2>
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
              <FaShoppingCart className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">24/7</span>
              <p className="text-gray-500 text-sm">Tienda abierta siempre</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaShieldAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">SSL</span>
              <p className="text-gray-500 text-sm">Pagos seguros</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaMobileAlt className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">100%</span>
              <p className="text-gray-500 text-sm">Responsive</p>
            </div>
            <div className="bg-[#5B21B6]/5 rounded-xl p-4 text-center">
              <FaChartLine className="text-3xl text-[#5B21B6] mx-auto mb-2" />
              <span className="text-lg font-bold text-[#0A1628]">+40%</span>
              <p className="text-gray-500 text-sm">Incremento en ventas</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-[#0A1628] mb-3">🚀 ¿Por qué elegirnos para crear o potenciar tu E-commerce?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Enfoque en la conversión:</strong> No solo programamos código; estructuramos tu tienda para que el proceso de compra tenga los menores pasos posibles, reduciendo el abandono de carritos y aumentando tus ventas.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Facturación automática integrada:</strong> Conectamos tu tienda en línea con nuestra solución de XML/SAT para que el cliente genere su CFDI de forma autónoma al terminar su compra.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Capacitación y control total:</strong> Al finalizar el proyecto, te entregamos una plataforma que tú y tu equipo administrativo podrán gestionar fácilmente (agregar productos, cambiar precios, ver reportes de ventas) sin depender de un programador.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaCheckCircle className="text-[#5B21B6] mt-1 flex-shrink-0" />
                <span><strong>Optimización SEO y velocidad:</strong> Diseñamos tu tienda para que aparezca en los primeros resultados de búsqueda y cargue rápido, mejorando la experiencia del usuario y tus ventas.</span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaStore className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Tienda en Línea</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaCreditCard className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Pasarelas de Pago</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaBoxes className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Inventario</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition">
              <FaTruck className="text-2xl text-[#5B21B6] mx-auto mb-1" />
              <span className="text-xs font-medium text-[#0A1628]">Envíos</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-gray-200">
            <Link href="/contacto" className="bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#4C1D95] transition shadow-lg shadow-purple-900/20">
              Solicitar cotización de tienda en línea
            </Link>
            <a href="https://wa.me/525574223578" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <FaWhatsapp /> Agendar asesoría de E-commerce
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
