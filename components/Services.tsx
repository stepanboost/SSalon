'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServicesProps {
  onBookClick: (service: string) => void
}

const services = [
  {
    name: 'Маникюр',
    description: 'Классический и аппаратный маникюр с покрытием гель-лаком. Укрепление и восстановление ногтевой пластины.',
    image: '/images/manikur.png',
  },
  {
    name: 'Стрижка + Укладка',
    description: 'Профессиональная стрижка с учетом структуры волос и формы лица. Укладка с использованием профессиональных средств.',
    image: '/images/zavivka.png',
  },
  {
    name: 'Пилинг',
    description: 'Глубокое очищение и обновление кожи лица. Удаление омертвевших клеток, выравнивание тона и текстуры кожи.',
    image: '/images/piling.png',
  },
]

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-32 px-6 lg:px-12 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Широкий спектр услуг красоты от профессиональных мастеров
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="h-[400px] mb-6 bg-gray-100 overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-3xl font-light text-black mb-4 tracking-tight">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">
                {service.description}
              </p>
              <motion.button
                onClick={() => onBookClick(service.name)}
                className="text-sm text-black border-b border-black hover:opacity-60 transition-opacity font-light tracking-wide"
                whileHover={{ x: 4 }}
              >
                Записаться →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
