'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  onBookClick: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200'
            : 'bg-white/80'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="font-serif text-xl tracking-wide text-black cursor-pointer"
              whileHover={{ opacity: 0.7 }}
              onClick={() => scrollToSection('hero')}
            >
              Beauty Salon
            </motion.div>

            <nav className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-gray-600 hover:text-black transition-colors font-light tracking-wide"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('masters')}
                className="text-sm text-gray-600 hover:text-black transition-colors font-light tracking-wide"
              >
                Мастера
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-600 hover:text-black transition-colors font-light tracking-wide"
              >
                О салоне
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-sm text-gray-600 hover:text-black transition-colors font-light tracking-wide"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm text-gray-600 hover:text-black transition-colors font-light tracking-wide"
              >
                Контакты
              </button>
            </nav>

            <motion.button
              onClick={onBookClick}
              className="hidden md:block px-6 py-2 text-sm text-black border border-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Записаться
            </motion.button>
          </div>
        </div>
      </motion.header>

      <motion.button
        onClick={onBookClick}
        className="fixed bottom-8 right-8 md:hidden z-50 px-6 py-3 text-sm text-white bg-black hover:bg-gray-800 transition-colors font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Записаться
      </motion.button>
    </>
  )
}
