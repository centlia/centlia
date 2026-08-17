'use client'

import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50/50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-[#5B21B6]">404</h1>
        <h2 className="text-2xl font-bold text-[#0A1628] mt-4">Página no encontrada</h2>
        <p className="text-gray-500 mt-2">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#5B21B6] hover:bg-[#4C1D95] text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <FaHome /> Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#5B21B6] text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <FaArrowLeft /> Volver atrás
          </button>
        </div>
      </div>
    </div>
  )
}
