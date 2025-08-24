'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 1,
    slug: 'vorota',
    title: 'Ворота и калитки',
    description: 'Входные группы, которые становятся визитной карточкой вашего дома. От классики до современного минимализма.',
    features: ['Индивидуальный дизайн', 'Автоматика по желанию', 'Антикоррозийная обработка', 'Гарантия 5 лет'],
    priceFrom: 2000,
    duration: '2-3 недели',
    icon: '🚪',
  },
  {
    id: 2,
    slug: 'perila',
    title: 'Перила и лестницы',
    description: 'Лестничные конструкции, где безопасность сочетается с эстетикой. Каждая деталь продумана до мелочей.',
    features: ['Соответствие ГОСТ', 'Эргономичные поручни', 'Любая конфигурация', 'Монтаж "под ключ"'],
    priceFrom: 150,
    priceUnit: 'BYN/м.п.',
    duration: '1-2 недели',
    icon: '🪜',
  },
  {
    id: 3,
    slug: 'mebel',
    title: 'Мебель и интерьер',
    description: 'Предметы интерьера, которые живут десятилетиями. Сочетание металла с деревом, стеклом, камнем.',
    features: ['Авторский дизайн', 'Экологичные материалы', 'Реставрация изделий', 'Подбор фурнитуры'],
    priceFrom: 500,
    duration: '1-4 недели',
    icon: '🪑',
  },
  {
    id: 4,
    slug: 'mangaly',
    title: 'Мангалы и барбекю',
    description: 'Очаги для семейных встреч и дружеских посиделок. От простых жаровен до комплексных барбекю-зон.',
    features: ['Оптимальное горение', 'Долговечные материалы', 'Мобильные и стационарные', 'Аксессуары в комплекте'],
    priceFrom: 300,
    duration: '1 неделя',
    icon: '🔥',
  },
  {
    id: 5,
    slug: 'kozyrki',
    title: 'Козырьки и навесы',
    description: 'Защита от непогоды с архитектурным шармом. Интеграция в общий стиль здания.',
    features: ['Расчёт нагрузок', 'Поликарбонат/металл', 'Водосточная система', 'Освещение по желанию'],
    priceFrom: 800,
    duration: '1-2 недели',
    icon: '☂️',
  },
  {
    id: 6,
    slug: 'kovka',
    title: 'Художественная ковка',
    description: 'Декоративные элементы, которые превращают утилитарные вещи в произведения искусства.',
    features: ['Историческая стилизация', 'Современная интерпретация', 'Ручная работа', 'Уникальные решения'],
    priceFrom: null,
    priceText: 'по проекту',
    duration: 'по проекту',
    icon: '🔨',
  },
]

export default function ServicesPage() {
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
              Услуги
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              Индивидуальные проекты. Любой масштаб. Полный цикл — от замера до монтажа.
            </p>
            <div className="text-mono text-sm text-copper">
              Что мы создаём
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="metal-frame p-8 h-full transition-all duration-300 group-hover:bg-steel/10">
                    {/* Icon and Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <motion.svg
                        className="w-5 h-5 text-copper opacity-0 group-hover:opacity-100 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>

                    <h3 className="text-display text-2xl text-text group-hover:text-copper transition-colors duration-300 mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-serif text-text-muted mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-text-muted">
                          <div className="w-1 h-1 bg-copper mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price and Duration */}
                    <div className="pt-4 border-t border-steel/30">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <div className="text-copper font-mono">
                            {service.priceFrom 
                              ? `от ${service.priceFrom} ${service.priceUnit || 'BYN'}`
                              : service.priceText
                            }
                          </div>
                          <div className="text-text-dim">
                            Срок: {service.duration}
                          </div>
                        </div>
                        <div className="text-mono text-xs text-copper">
                          Подробнее →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl md:text-5xl text-text mb-8">
              Как мы работаем
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                { step: '01', title: 'Замер', desc: 'Бесплатный выезд и консультация' },
                { step: '02', title: 'Проект', desc: 'Эскиз и итоговая смета' },
                { step: '03', title: 'Ковка', desc: 'Изготовление в мастерской' },
                { step: '04', title: 'Монтаж', desc: 'Доставка и установка' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel/30 flex items-center justify-center text-copper font-mono text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-display text-lg text-text mb-2">{item.title}</h3>
                  <p className="text-serif text-text-muted text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl md:text-5xl text-text mb-6">
              Готовы обсудить проект?
            </h2>
            <p className="text-serif text-xl text-text-muted mb-8">
              Расскажите о своих пожеланиях, и мы подготовим предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="metal-frame px-8 py-4 text-display tracking-wider bg-gradient-to-r from-steel/30 to-copper/30 hover:from-copper/40 hover:to-steel/40 transition-all duration-500 hover-glow"
              >
                Заказать замер
              </Link>
              <Link
                href="/contact"
                className="glass px-8 py-4 text-display tracking-wider hover:bg-copper/10 transition-all duration-300"
              >
                Связаться с нами
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}