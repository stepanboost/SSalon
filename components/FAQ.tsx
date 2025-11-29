'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: 'Как записаться на услугу?',
    answer: 'Вы можете записаться онлайн через форму на сайте, позвонить нам по телефону +996 (312) 62-45-67 или прийти лично в салон. Мы работаем ежедневно с 9:00 до 21:00.',
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем наличные, банковские карты и переводы через мобильные приложения. Оплата производится после оказания услуги.',
  },
  {
    question: 'Можно ли отменить или перенести запись?',
    answer: 'Да, вы можете отменить или перенести запись, позвонив нам не менее чем за 4 часа до назначенного времени. Это поможет нам предложить освободившееся время другим клиентам.',
  },
  {
    question: 'Используете ли вы гипоаллергенные средства?',
    answer: 'Да, мы работаем только с профессиональной косметикой премиум-класса, которая проходит дерматологическое тестирование. Если у вас есть аллергия на определенные компоненты, обязательно сообщите об этом мастеру перед процедурой.',
  },
  {
    question: 'Есть ли у вас программа лояльности?',
    answer: 'Да, у нас действует система скидок для постоянных клиентов. При записи на несколько услуг одновременно предоставляется скидка. Подробности уточняйте у администратора.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <div className="space-y-1">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-0 py-6 text-left flex justify-between items-center hover:opacity-60 transition-opacity"
              >
                <span className="text-sm text-black font-light tracking-wide">
                  {item.question}
                </span>
                <span className="text-black text-lg">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-gray-600 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
