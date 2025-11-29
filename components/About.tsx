'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="h-[600px] md:h-[700px] bg-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/med1.png"
              alt="Интерьер салона"
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
            <h2 className="font-serif text-5xl md:text-6xl font-light text-black mb-12 tracking-tight">
              О салоне
            </h2>
            <div className="space-y-6 text-base text-gray-600 leading-relaxed font-light">
              <p>
                Beauty Salon открылся в 2018 году с целью создать место, где красота встречается с комфортом. За годы работы мы завоевали доверие тысяч клиентов в Бишкеке.
              </p>
              <p>
                Наш салон расположен в центре города в современном здании с продуманным интерьером. Мы используем только профессиональную косметику премиум-класса и инструменты от ведущих мировых брендов.
              </p>
              <p>
                Каждый мастер в нашей команде имеет многолетний опыт и регулярно повышает квалификацию на международных курсах. Мы создаем индивидуальный подход к каждому клиенту, учитывая особенности и пожелания.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
