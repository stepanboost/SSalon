'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface CTAProps {
  onBookClick: () => void
}

export default function CTA({ onBookClick }: CTAProps) {
  return (
    <section
      id="contacts"
      className="py-32 px-6 lg:px-12 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="h-[600px] bg-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/med1.png"
              alt="Beauty Salon"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-black mb-8 tracking-tight">
              Beauty Salon
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-light">
              Ваша красота - наша страсть
            </p>

            <div className="space-y-4 mb-12 text-base text-gray-600 font-light">
              <p>г. Бишкек, пр. Чуй, 168</p>
              <p>+996 (312) 62-45-67</p>
              <p>Пн-Вс: 9:00-21:00</p>
            </div>

            <motion.button
              onClick={onBookClick}
              className="px-10 py-4 text-sm text-white bg-black hover:bg-gray-800 transition-colors font-light tracking-wide uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Записаться
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
