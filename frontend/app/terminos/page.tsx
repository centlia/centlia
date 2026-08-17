import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TerminosPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-8 font-medium">
            <FaArrowLeft /> Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-[#0A1628] mb-6">Términos y Condiciones</h1>
          <p className="text-gray-500 text-sm mb-8">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">1. Aceptación de los términos</h2>
              <p>Al acceder y utilizar este sitio web, usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, por favor no utilice nuestro sitio.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">2. Descripción del servicio</h2>
              <p>CENTLIA ofrece servicios de consultoría, desarrollo de software, infraestructura de redes, seguridad informática, y soluciones tecnológicas integrales. La información proporcionada en este sitio es solo para fines informativos.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">3. Propiedad intelectual</h2>
              <p>Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, código y diseño, es propiedad de CENTLIA y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">4. Uso del sitio</h2>
              <p>Usted se compromete a utilizar este sitio de manera responsable y legal. No está permitido:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Realizar actividades que dañen o interrumpan el funcionamiento del sitio.</li>
                <li>Intentar acceder a áreas restringidas o a información de otros usuarios.</li>
                <li>Utilizar el sitio para enviar spam o contenido malicioso.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">5. Limitación de responsabilidad</h2>
              <p>CENTLIA no se hace responsable por los daños que puedan derivarse del uso de este sitio web, incluyendo errores técnicos, interrupciones o pérdida de datos. El sitio se proporciona "tal cual" y "según disponibilidad".</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">6. Enlaces a sitios externos</h2>
              <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido ni de las prácticas de privacidad de dichos sitios. Le recomendamos revisar sus propias políticas.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">7. Ley aplicable</h2>
              <p>Estos Términos y Condiciones se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad de México.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">8. Cambios en los términos</h2>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. La versión actualizada será publicada en esta página con la fecha de la última actualización.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">9. Contacto</h2>
              <p>Si tiene preguntas sobre estos términos, puede contactarnos en:</p>
              <p className="mt-2 font-medium">Email: centlia.utcs@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
