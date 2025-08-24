'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm({ title = "Оставить заявку", simplified = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    workType: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const workTypes = [
    'Ворота и калитки',
    'Перила и лестницы',
    'Мебель и интерьер',
    'Мангалы и барбекю',
    'Козырьки и навесы',
    'Художественная ковка',
    'Другое',
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({
          name: '',
          phone: '',
          city: '',
          workType: '',
          message: '',
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.error })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Произошла ошибка при отправке. Попробуйте позже.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="metal-frame p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-display text-2xl text-text mb-6 text-center">
        {title}
      </h2>

      {submitStatus && (
        <motion.div
          className={`p-4 mb-6 rounded ${
            submitStatus.type === 'success' 
              ? 'bg-green-900/30 border border-green-500/50 text-green-300'
              : 'bg-red-900/30 border border-red-500/50 text-red-300'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-serif text-text-muted mb-2">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-steel/20 border border-steel/50 text-text placeholder-text-dim focus:border-copper focus:outline-none transition-colors duration-300"
            placeholder="Как к вам обращаться?"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-serif text-text-muted mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-steel/20 border border-steel/50 text-text placeholder-text-dim focus:border-copper focus:outline-none transition-colors duration-300"
            placeholder="+375 29 123-45-67"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-serif text-text-muted mb-2">
            Город *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-steel/20 border border-steel/50 text-text placeholder-text-dim focus:border-copper focus:outline-none transition-colors duration-300"
            placeholder="Где выполнять работы?"
          />
        </div>

        {/* Work Type */}
        <div>
          <label htmlFor="workType" className="block text-serif text-text-muted mb-2">
            Тип работы *
          </label>
          <select
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-steel/20 border border-steel/50 text-text focus:border-copper focus:outline-none transition-colors duration-300"
          >
            <option value="">Выберите тип работы</option>
            {workTypes.map((type) => (
              <option key={type} value={type} className="bg-background">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        {!simplified && (
          <div>
            <label htmlFor="message" className="block text-serif text-text-muted mb-2">
              Дополнительная информация
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-steel/20 border border-steel/50 text-text placeholder-text-dim focus:border-copper focus:outline-none transition-colors duration-300 resize-vertical"
              placeholder="Опишите ваши пожелания, размеры, особенности проекта..."
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full metal-frame px-8 py-4 text-display tracking-wider bg-gradient-to-r from-steel/30 to-copper/30 hover:from-copper/40 hover:to-steel/40 transition-all duration-500 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
        </button>

        <div className="text-mono text-xs text-text-dim text-center">
          * Обязательные поля
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-steel/30 text-center">
        <div className="text-serif text-text-muted text-sm">
          Или свяжитесь с нами напрямую:
        </div>
        <div className="mt-3 space-y-2">
          <div>
            <a 
              href="tel:+375297855871" 
              className="text-copper hover:text-copper-light transition-colors duration-300"
            >
              +375 29 785-58-71
            </a>
          </div>
          <div>
            <a 
              href="mailto:sergeiurbanovich@yandex.by" 
              className="text-copper hover:text-copper-light transition-colors duration-300"
            >
              sergeiurbanovich@yandex.by
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}