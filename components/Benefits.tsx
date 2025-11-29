'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  {
    title: 'Премиум услуги',
    description:
      'Маникюр, педикюр, стрижки, окрашивание от ведущих мастеров',
    image: '/images/manikur.png',
  },
  {
    title: 'Удобная запись',
    description:
      'Онлайн бронирование в удобное время с подтверждением',
    image: '/images/zavivka.png',
  },
  {
    title: 'Роскошная атмосфера',
    description:
      'Современный интерьер и комфортные условия для отдыха',
    image: '/images/piling.png',
  },
]

export default function Benefits() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? 'md:order-2' : ''
                } h-[500px] md:h-[600px] bg-gray-100 relative overflow-hidden`}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-serif text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-light max-w-lg">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
