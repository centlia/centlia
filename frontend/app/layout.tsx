import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CENTLIA - Soluciones Tecnológicas Integrales',
  description: 'Soluciones tecnológicas para empresas: Redes, Videovigilancia, Desarrollo a Medida, IoT y Mantenimiento.',
  keywords: 'CENTLIA, soluciones tecnológicas, redes empresariales, videovigilancia, desarrollo software, IoT, inteligencia artificial, México',
  authors: [{ name: 'CENTLIA' }],
  creator: 'CENTLIA',
  publisher: 'CENTLIA',
  robots: 'index, follow',
  metadataBase: new URL('https://centlia.com'),
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/logo/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'CENTLIA - Soluciones Tecnológicas Integrales',
    description: 'Soluciones tecnológicas para empresas: Redes, Videovigilancia, Desarrollo a Medida, IoT y Mantenimiento.',
    url: 'https://centlia.com',
    siteName: 'CENTLIA',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 200,
        height: 60,
        alt: 'CENTLIA Logo',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CENTLIA - Soluciones Tecnológicas Integrales',
    description: 'Soluciones tecnológicas para empresas: Redes, Videovigilancia, Desarrollo a Medida, IoT y Mantenimiento.',
    images: ['/images/logo/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
