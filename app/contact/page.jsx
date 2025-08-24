'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: '📞',
    title: 'Телефон',
    value: '+375 29 785-58-71',
    link: 'tel:+375297855871',
    description: 'Матвей ответит на все вопросы'
  },
  {
    icon: '✉️',
    title: 'Email',
    value: 'sergeiurbanovich@yandex.by',
    link: 'mailto:sergeiurbanovich@yandex.by',
    description: 'Отправьте техзадание или вопросы'
  },
  {
    icon: '📍',
    title: 'География работ',
    value: 'Вся Беларусь',
    description: 'Выезд из Гродно в любой регион'
  },
  {
    icon: '🕐',
    title: 'Режим работы',
    value: 'Пн–Пт, 09:00–18:00',
    description: 'Звоните в рабочее время'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-text">
              Контакты
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              Готов обсудить ваш проект и ответить на любые вопросы
            </p>
            <div className="text-mono text-sm text-copper">
              Кузница в Гродно, работает по всей Беларуси
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="metal-frame p-6 hover-glow group transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a href={info.link} className="block">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-display text-lg text-copper mb-1">
                            {info.title}
                          </h3>
                          <div className="text-text text-xl group-hover:text-copper transition-colors duration-300">
                            {info.value}
                          </div>
                          <p className="text-serif text-text-muted text-sm mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-display text-lg text-copper mb-1">
                          {info.title}
                        </h3>
                        <div className="text-text text-xl">
                          {info.value}
                        </div>
                        <p className="text-serif text-text-muted text-sm mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ContactForm title="Написать нам" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text mb-8">
              География работ
            </h2>
            
            {/* Simple map representation */}
            <div className="metal-frame p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {['Гродно', 'Минск', 'Витебск', 'Гомель', 'Брест', 'Могилёв'].map((city, index) => (
                  <motion.div
                    key={city}
                    className="p-4 bg-steel/20 hover:bg-copper/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-display text-copper text-lg">{city}</div>
                    <div className="text-mono text-text-muted text-xs">
                      {city === 'Гродно' ? 'Мастерская' : 'Выезд'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-serif text-text-muted">
              <p className="mb-4">
                Основная мастерская находится в Гродно. Выезжаем на замеры и установку 
                по всей территории Беларуси.
              </p>
              <p className="text-sm">
                Стоимость выезда рассчитывается индивидуально и может быть засчитана 
                в стоимость работ при заключении договора.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text text-center mb-12">
              Частые вопросы
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Выезжаете ли вы на замер бесплатно?",
                  a: "Да, в пределах Гродно выезд бесплатный. Для других городов стоимость обсуждается индивидуально."
                },
                {
                  q: "Какие сроки изготовления?",
                  a: "Зависит от сложности: мангалы — 1 неделя, перила — 1-2 недели, ворота — 2-3 недели."
                },
                {
                  q: "Предоставляете ли гарантию?",
                  a: "Да, 5 лет на конструкцию и 2 года на покрытие. Полная ответственность за качество."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="metal-frame p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-display text-lg text-copper mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-serif text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}