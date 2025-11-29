'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-white"
    >
      {/* Large Image - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/med1.png"
          alt="Интерьер салона красоты"
          fill
          className="object-cover lg:hidden"
          priority
        />
        <Image
          src="/images/med2.png"
          alt="Современный зал салона красоты"
          fill
          className="hidden object-cover lg:block"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12 py-32">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-sm text-white mb-6 font-light tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              О вас позаботится команда бьюти-экспертов
            </motion.p>
            <motion.h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Салон красоты
              <br />
              премиум класса
            </motion.h1>
            <motion.p
              className="text-lg text-white/90 mb-12 leading-relaxed font-light max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Откройте для себя мир красоты и роскоши в нашем салоне.
              Профессиональные мастера, качественные услуги и атмосфера
              релакса.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={onBookClick}
                className="px-10 py-4 text-sm text-white bg-black hover:bg-gray-800 transition-colors font-light tracking-wide uppercase"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Записаться онлайн
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
