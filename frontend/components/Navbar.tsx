'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm border-b border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/images/logo/logo-navbar.png" 
              alt="CENTLIA" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest text-red-600">
                CENTLIA
              </span>
              <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-[#E8751A] leading-tight">
                Uniendo tecnologías,<br />conectando soluciones
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={link.href}
                    className="relative group px-4 py-2 rounded-lg transition-all duration-300 block"
                  >
                    <span className="absolute inset-0 rounded-lg bg-[#5B21B6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#5B21B6]' 
                        : 'text-slate-800 group-hover:text-[#5B21B6]'
                    }`}>
                      {link.label}
                    </span>

                    {isActive && (
                      <motion.span 
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-[#5B21B6]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-[#5B21B6]/40 group-hover:w-full transition-all duration-300 ease-out" />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Desktop Contact + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/525574223578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 text-emerald-500 hover:text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.85 }}
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </motion.a>
            
            {/* Teléfono con número visible */}
            <motion.a
              href="tel:5574223578"
              className="flex items-center gap-2 bg-slate-100 hover:bg-[#5B21B6] text-slate-700 hover:text-white px-3 py-2 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Llamar ahora"
              title="Llamar ahora"
            >
              <FaPhone className="text-sm" />
              <span className="text-sm font-medium whitespace-nowrap">(55) 7422 3578</span>
            </motion.a>
            
            {/* Cotizar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="/contacto"
                className="bg-[#5B21B6] hover:bg-[#4C1D95] text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40"
              >
                Cotizar
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Menú"
            whileTap={{ scale: 0.85 }}
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-b border-slate-200 shadow-2xl"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-purple-50 text-[#5B21B6] font-bold' 
                          : 'text-slate-800 hover:bg-[#5B21B6]/5 hover:text-[#5B21B6]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-base font-semibold">{link.label}</span>
                      {isActive && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-[#5B21B6]"
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              
              <motion.div 
                className="pt-4 mt-2 border-t border-slate-200 space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* WhatsApp mobile */}
                <motion.a
                  href="https://wa.me/525574223578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-xl"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-lg" /> WhatsApp
                </motion.a>
                
                {/* Teléfono mobile */}
                <motion.a
                  href="tel:5574223578"
                  className="w-full bg-slate-800 hover:bg-[#5B21B6] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone className="text-lg" /> (55) 7422 3578
                </motion.a>
                
                {/* Cotizar mobile */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contacto"
                    className="block w-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white text-center py-3.5 rounded-xl font-bold tracking-wide uppercase transition-all duration-300 shadow-lg shadow-purple-900/30"
                    onClick={() => setIsOpen(false)}
                  >
                    Cotizar
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
