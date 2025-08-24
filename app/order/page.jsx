'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const trustFactors = [
  {
    icon: '⏱️',
    title: '18+ лет опыта',
    description: 'Работаем в сфере художественной ковки с 2006 года',
  },
  {
    icon: '✅',
    title: '500+ проектов',
    description: 'Реализованы по всей Беларуси от Гродно до Гомеля',
  },
  {
    icon: '🛡️',
    title: 'Гарантия 5 лет',
    description: 'Полная ответственность за качество и долговечность',
  },
  {
    icon: '🚗',
    title: 'Выезд в день звонка',
    description: 'Бесплатный замер в пределах Гродно, по Беларуси — договорная',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Оставляете заявку',
    description: 'Заполните форму или позвоните напрямую',
  },
  {
    step: '2', 
    title: 'Мы перезваниваем',
    description: 'В течение часа обсуждаем детали проекта',
  },
  {
    step: '3',
    title: 'Выезжаем на замер',
    description: 'Бесплатно в пределах Гродно, создаём эскиз',
  },
  {
    step: '4',
    title: 'Готовим предложение',
    description: 'Детальная смета с гарантией цены',
  },
]

export default function OrderPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-text">
              Заказать замер
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              Начните свой проект с профессиональной консультации
            </p>
            <div className="text-mono text-sm text-copper">
              Первый шаг к воплощению идеи
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-display text-lg text-text mb-2">
                  {factor.title}
                </h3>
                <p className="text-serif text-text-muted text-sm leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <ContactForm 
            title="Оставить заявку на замер"
            simplified={false}
          />
        </div>
      </section>

      {/* Process */}
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
              Как это работает
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-copper text-background flex items-center justify-center font-mono text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-display text-lg text-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-serif text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 text-copper">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text mb-6">
              Наши гарантии
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="metal-frame p-6">
                <h3 className="text-display text-lg text-copper mb-3">
                  Фиксированная цена
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  После утверждения проекта цена не изменится
                </p>
              </div>
              
              <div className="metal-frame p-6">
                <h3 className="text-display text-lg text-copper mb-3">
                  Соблюдение сроков
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  Всегда укладываемся в оговоренные временные рамки
                </p>
              </div>
              
              <div className="metal-frame p-6">
                <h3 className="text-display text-lg text-copper mb-3">
                  Качество работ
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  5 лет гарантии на конструкцию, 2 года на покрытие
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-3xl text-text mb-6">
              Предпочитаете звонить?
            </h2>
            <p className="text-serif text-text-muted mb-8">
              Матвей ответит на все вопросы и запишет на замер
            </p>
            
            <div className="space-y-4">
              <a
                href="tel:+375297855871"
                className="block metal-frame px-8 py-4 text-display text-xl tracking-wider bg-gradient-to-r from-steel/30 to-copper/30 hover:from-copper/40 hover:to-steel/40 transition-all duration-500 hover-glow"
              >
                +375 29 785-58-71
              </a>
              
              <div className="text-mono text-sm text-text-dim">
                Пн–Пт, 09:00–18:00
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}