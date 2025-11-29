'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalBookingProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
  preselectedMaster?: string
}

const services = ['Маникюр', 'Стрижка + Укладка', 'Пилинг']
const masters = ['Анна', 'Айгуль', 'Жанна']

export default function ModalBooking({
  isOpen,
  onClose,
  preselectedService,
  preselectedMaster,
}: ModalBookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || '',
    master: preselectedMaster || '',
    time: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }))
    }
    if (preselectedMaster) {
      setFormData((prev) => ({ ...prev, master: preselectedMaster }))
    }
  }, [preselectedService, preselectedMaster])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.phone || !formData.name) {
      alert('Пожалуйста, заполните обязательные поля')
      return
    }
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        service: '',
        master: '',
        time: '',
      })
      onClose()
    }, 2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white max-w-md w-full p-8 border border-gray-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl font-light"
              >
                ×
              </button>

              <h2 className="font-serif text-3xl font-light text-black mb-8 tracking-tight">
                Записаться
              </h2>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-sm text-gray-600 font-light">
                    Заявка отправлена, мы свяжемся с вами
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-2 font-light uppercase tracking-wide">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors text-sm font-light bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-2 font-light uppercase tracking-wide">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors text-sm font-light bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-2 font-light uppercase tracking-wide">
                      Услуга
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors text-sm font-light bg-transparent"
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-2 font-light uppercase tracking-wide">
                      Мастер (опционально)
                    </label>
                    <select
                      name="master"
                      value={formData.master}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors text-sm font-light bg-transparent"
                    >
                      <option value="">Выберите мастера</option>
                      {masters.map((master) => (
                        <option key={master} value={master}>
                          {master}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-2 font-light uppercase tracking-wide">
                      Желаемое время
                    </label>
                    <input
                      type="datetime-local"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors text-sm font-light bg-transparent"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 text-sm text-white bg-black hover:bg-gray-800 transition-colors font-light tracking-wide mt-8"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Отправить заявку
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
