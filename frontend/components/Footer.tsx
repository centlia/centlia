import Link from 'next/link'
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-gray-400">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1 - Marca */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#1A56DB] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span className="text-lg font-bold text-white">CENTLIA</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Soluciones tecnológicas integrales para empresas que buscan crecer.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/people/Centlia/61593554543565/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition">
                <FaFacebook className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/centlia-utcs-60360042a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://www.youtube.com/@CENTLIA" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF0000] transition">
                <FaYoutube className="text-lg" />
              </a>
              <a href="https://x.com/centlia_utcs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/servicios/redes" className="text-gray-500 hover:text-[#1A56DB] transition">Infraestructura y Redes</Link></li>
              <li><Link href="/servicios/seguridad" className="text-gray-500 hover:text-[#1A56DB] transition">Seguridad y Videovigilancia</Link></li>
              <li><Link href="/servicios/desarrollo" className="text-gray-500 hover:text-[#1A56DB] transition">Desarrollo a Medida</Link></li>
              <li><Link href="/servicios/iot" className="text-gray-500 hover:text-[#1A56DB] transition">Internet de las Cosas</Link></li>
              <li><Link href="/servicios/cloud" className="text-gray-500 hover:text-[#1A56DB] transition">Cloud y Multinube</Link></li>
            </ul>
          </div>

          {/* Columna 3 - Más servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Más servicios</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/servicios/mantenimiento" className="text-gray-500 hover:text-[#1A56DB] transition">Mantenimiento Integral</Link></li>
              <li><Link href="/servicios/ia" className="text-gray-500 hover:text-[#1A56DB] transition">Inteligencia Artificial</Link></li>
              <li><Link href="/servicios/firma" className="text-gray-500 hover:text-[#1A56DB] transition">Firma Electrónica</Link></li>
              <li><Link href="/servicios/facturacion" className="text-gray-500 hover:text-[#1A56DB] transition">Facturación Electrónica</Link></li>
              <li><Link href="/servicios/ecommerce" className="text-gray-500 hover:text-[#1A56DB] transition">E-commerce</Link></li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-500">
                <FaWhatsapp className="text-green-500 text-lg" />
                <span>(55) 7422 3578</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <FaPhone className="text-[#1A56DB] text-lg" />
                <span>(55) 2476 2822</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <FaEnvelope className="text-[#1A56DB] text-lg" />
                <span className="text-xs break-all">centlia.utcs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>© 2026 CENTLIA. Todos los derechos reservados. — Uniendo tecnologías, conectando soluciones</p>

          <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
    <Link href="/privacidad" className="hover:text-white transition">Política de Privacidad</Link>
    <Link href="/terminos" className="hover:text-white transition">Términos y Condiciones</Link>
  </div>          

        </div>
      </div>
    </footer>
  )
}

export default Footer
