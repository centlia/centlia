import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PrivacidadPage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-purple-50/50 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#5B21B6] hover:text-[#4C1D95] transition mb-8 font-medium">
            <FaArrowLeft /> Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-[#0A1628] mb-6">Política de Privacidad</h1>
          <p className="text-gray-500 text-sm mb-8">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">1. Responsable del tratamiento</h2>
              <p>CENTLIA, con domicilio en México, es el responsable del tratamiento de sus datos personales. Nuestro compromiso es proteger su privacidad y garantizar la seguridad de la información que nos proporciona.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">2. Datos que recopilamos</h2>
              <p>Recopilamos la siguiente información cuando usted interactúa con nuestro sitio web:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Datos de contacto:</strong> nombre, correo electrónico, número de teléfono.</li>
                <li><strong>Información de la empresa:</strong> nombre de la empresa, puesto.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">3. Finalidad del tratamiento</h2>
              <p>Sus datos serán utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Atender sus solicitudes de información y cotizaciones.</li>
                <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios.</li>
                <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">4. Legitimación</h2>
              <p>El tratamiento de sus datos se basa en el consentimiento que usted nos otorga al contactarnos a través de nuestro formulario o por cualquier otro medio. Usted puede revocar su consentimiento en cualquier momento.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">5. Plazo de conservación</h2>
              <p>Sus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados, o mientras usted no solicite su supresión.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">6. Destinatarios</h2>
              <p>No compartimos sus datos personales con terceros, excepto cuando sea necesario para cumplir con una obligación legal o para prestar el servicio solicitado (ej. envío de correos a través de nuestro proveedor de servicios).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">7. Seguridad de los datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la destrucción accidental.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">8. Sus derechos</h2>
              <p>Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos en:</p>
              <p className="mt-2 font-medium">Email: centlia.utcs@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">9. Cambios en esta política</h2>
              <p>Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Le recomendamos que revise esta página periódicamente para estar al tanto de cualquier cambio.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
