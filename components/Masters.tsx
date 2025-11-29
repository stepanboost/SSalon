'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MastersProps {
  onBookClick: (service: string, master: string) => void
}

interface Master {
  name: string
  role: string
  services: { name: string; price: string }[]
  image: string
}

const masters: Master[] = [
  {
    name: 'Анна',
    role: 'Мастер',
    services: [
      { name: 'Маникюр', price: '1500 сом' },
      { name: 'Стрижка + Укладка', price: '1300 сом' },
    ],
    image: '/images/sotrudnik1.png',
  },
  {
    name: 'Айгуль',
    role: 'Мастер',
    services: [
      { name: 'Стрижка + Укладка', price: '2500 сом' },
      { name: 'Пилинг', price: '4000 сом' },
    ],
    image: '/images/sotrudnik2.png',
  },
  {
    name: 'Жанна',
    role: 'Мастер',
    services: [{ name: 'Пилинг', price: '5000 сом' }],
    image: '/images/sotrrudnik3.png',
  },
]

export default function Masters({ onBookClick }: MastersProps) {
  return (
    <section
      id="masters"
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
            Наши мастера
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Ознакомьтесь с прайс-листом наших мастеров
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {masters.map((master, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="h-[500px] mb-6 bg-gray-100 overflow-hidden relative">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-serif text-3xl font-light text-black mb-2 tracking-tight">
                  {master.name}
                </h3>
                <p className="text-xs text-gray-500 mb-6 font-light tracking-wide uppercase">
                  {master.role}
                </p>

                <div className="space-y-3 mb-6">
                  {master.services.map((service, sIndex) => (
                    <div
                      key={sIndex}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-600 font-light">
                        {service.name}
                      </span>
                      <span className="text-black font-light">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() =>
                    onBookClick(
                      master.services[0]?.name || '',
                      master.name
                    )
                  }
                  className="text-sm text-black border-b border-black hover:opacity-60 transition-opacity font-light tracking-wide"
                  whileHover={{ x: 4 }}
                >
                  Записаться к мастеру →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
