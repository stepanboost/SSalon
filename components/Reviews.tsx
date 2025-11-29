'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    text: 'Хожу в Beauty Salon уже два года. Мастера настоящие профессионалы, всегда делают все идеально. Атмосфера очень уютная, чувствуешь себя как дома. Особенно рекомендую Анну для маникюра.',
    author: 'Айгерим К.',
    image: 'review-1',
  },
  {
    text: 'Лучший салон в городе! Делала стрижку у Айгуль, осталась в восторге. Мастер внимательно выслушала все пожелания и предложила свой вариант. Результат превзошел ожидания. Обязательно вернусь.',
    author: 'Мария С.',
    image: 'review-2',
  },
  {
    text: 'Пилинг у Жанны — это что-то невероятное. Кожа стала гладкой и сияющей. Процедура прошла комфортно, мастер все объяснила и дала рекомендации по уходу. Цены адекватные для такого качества.',
    author: 'Елена Т.',
    image: 'review-3',
  },
]

export default function Reviews() {
  return (
    <section
      id="reviews"
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
            Отзывы
          </h2>
          <p className="text-lg text-gray-600 font-light">Что говорят клиенты</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, item) => (
            <motion.div
              key={item}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className="h-[300px] mb-6 bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <p className="text-xs text-gray-400 tracking-widest uppercase">
                    [Фото: {review.image}]
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-4 font-light leading-relaxed">
                  {review.text}
                </p>
                <p className="text-xs text-gray-500 font-light">— {review.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
