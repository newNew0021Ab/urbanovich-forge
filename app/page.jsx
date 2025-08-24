'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/Hero'

const stats = [
  { number: '18+', label: 'лет опыта' },
  { number: '500+', label: 'проектов' },
  { number: '100%', label: 'качество' },
]

const featuredCases = [
  {
    id: 1,
    title: 'Усадьба в стиле прованс',
    category: 'Частный дом',
    location: 'Минск',
    year: '2024',
    image: '/assets/images/case-provence.jpg',
    description: 'Комплексное оформление входной группы с элементами французского прованса',
  },
  {
    id: 2,
    title: 'Лофт в историческом центре',
    category: 'Квартира',
    location: 'Гродно',
    year: '2024',
    image: '/assets/images/case-loft.jpg',
    description: 'Лестничные перила в индустриальном стиле для двухуровневой квартиры',
  },
  {
    id: 3,
    title: 'Загородный клуб «Резиденция»',
    category: 'Коммерческий объект',
    location: 'Брест',
    year: '2023',
    image: '/assets/images/case-club.jpg',
    description: 'Многоуровневый мангальный комплекс для барбекю-зоны',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Замер',
    description: 'Выезд на объект, обсуждение пожеланий, точные измерения',
    icon: '📐',
  },
  {
    number: '02',
    title: 'Проект',
    description: 'Детальный эскиз, 3D-визуализация, итоговая смета',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Ковка',
    description: 'Изготовление в мастерской с контролем качества',
    icon: '🔨',
  },
  {
    number: '04',
    title: 'Монтаж',
    description: 'Доставка и профессиональная установка',
    icon: '🏠',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-mono text-sm text-copper mb-6 tracking-wider">
                О мастерской
              </div>
              
              <h2 className="text-display text-4xl md:text-5xl mb-8 text-text">
                Не галерея, не магазин, не портфолио
              </h2>
              
              <div className="text-serif text-xl text-text-muted leading-relaxed space-y-6">
                <p>
                  Этот сайт — цифровое продолжение мастерской. Здесь типографика говорит о тонкости, 
                  UX говорит о профессионализме, контент говорит о репутации.
                </p>
                
                <p className="text-lg text-text-dim">
                  Молчание говорит о силе.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="group hover-glow cursor-pointer">
                  <div className="text-display text-3xl text-copper mb-2">{stat.number}</div>
                  <div className="text-serif text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-mono text-sm text-copper mb-4 tracking-wider">
              Избранные проекты
            </div>
            <h2 className="text-display text-4xl md:text-5xl text-text">
              Каждое изделие — история
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/cases/case-${caseItem.id}`}>
                  <div className="metal-frame overflow-hidden aspect-[4/3] mb-4 hover-glow">
                    <div className="w-full h-full bg-steel/20 flex items-center justify-center text-text-dim">
                      {/* Placeholder for image */}
                      <span className="text-sm">Изображение кейса</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-display text-xl text-text group-hover:text-copper transition-colors duration-300">
                      {caseItem.title}
                    </h3>
                    <div className="text-mono text-sm text-copper">
                      {caseItem.category} • {caseItem.location} • {caseItem.year}
                    </div>
                    <p className="text-serif text-text-muted text-sm leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/cases"
              className="glass px-8 py-3 text-display tracking-wider hover:bg-copper/10 transition-all duration-300"
            >
              Все кейсы
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-mono text-sm text-copper mb-4 tracking-wider">
              Как мы работаем
            </div>
            <h2 className="text-display text-4xl md:text-5xl text-text mb-6">
              Проверенная схема
            </h2>
            <p className="text-serif text-xl text-text-muted max-w-2xl mx-auto">
              От первой встречи до финальной установки — отточенная годами процедура
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel/30 flex items-center justify-center text-2xl group-hover:bg-copper/20 transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="text-mono text-copper text-sm mb-2">{step.number}</div>
                <h3 className="text-display text-xl text-text mb-3">{step.title}</h3>
                <p className="text-serif text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-serif text-2xl md:text-3xl text-text leading-relaxed mb-8">
              «Работа Сергея — это продолжение архитектуры. Ворота не просто функциональный элемент, 
              а настоящее произведение искусства.»
            </blockquote>
            <div className="text-mono text-sm text-copper">
              Кристина М., владелица дома в Минске
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-steel/10">
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
              Бесплатный выезд в пределах Гродно. Консультация и предварительная смета.
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
    </>
  )
}