'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '2006', label: 'год основания мастерской' },
  { number: '18+', label: 'лет опыта в ковке' },
  { number: '500+', label: 'реализованных проектов' },
  { number: '6', label: 'регионов Беларуси' },
]

const principles = [
  {
    title: 'Качество превыше всего',
    description: 'Каждое изделие создаётся как семейная реликвия, способная служить десятилетиями.',
    icon: '🔨'
  },
  {
    title: 'Индивидуальный подход',
    description: 'Нет типовых решений. Каждый проект разрабатывается с нуля под конкретные потребности.',
    icon: '🎨'
  },
  {
    title: 'Честность и прозрачность',
    description: 'Фиксированные цены после согласования проекта. Никаких скрытых доплат.',
    icon: '🤝'
  },
  {
    title: 'Полный цикл работ',
    description: 'От эскиза до установки — всё делаем сами, отвечаем за каждый этап.',
    icon: '⚙️'
  }
]

const timeline = [
  {
    year: '2006',
    title: 'Основание мастерской',
    description: 'Сергей Урбанович открывает собственную кузницу в Гродно'
  },
  {
    year: '2010',
    title: 'Первые крупные проекты',
    description: 'Реализация комплексных проектов для частных домов'
  },
  {
    year: '2015',
    title: 'Расширение географии',
    description: 'Начало работы по всей территории Беларуси'
  },
  {
    year: '2020',
    title: 'Современные технологии',
    description: '3D-моделирование и цифровой контроль качества'
  },
  {
    year: '2024',
    title: 'Новые стандарты',
    description: 'Внедрение европейских стандартов качества и дизайна'
  }
]

export default function AboutPage() {
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
              О мастерской
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              История создания и философия работы кузнечной мастерской Сергея Урбановича
            </p>
            <div className="text-mono text-sm text-copper">
              18 лет преданности ремеслу
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder */}
              <motion.div
                className="metal-frame aspect-[4/3] bg-steel/20 flex items-center justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-text-dim text-center p-8">
                  Фото мастерской<br />
                  Сергей за работой
                </span>
              </motion.div>

              {/* Story text */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-display text-4xl text-text mb-6">
                  «Каждое изделие — как ритуал»
                </h2>
                
                <div className="text-serif text-text-muted leading-relaxed space-y-4">
                  <p>
                    Это не просто слова. За 18 лет работы я понял: металл живой. 
                    Он помнит каждый удар молота, каждую температуру нагрева, 
                    каждое прикосновение мастера.
                  </p>
                  
                  <p>
                    Мастерская в Гродно — это не производство. Это место, где идеи 
                    обретают форму, где функциональность встречается с красотой, 
                    где каждое изделие создаётся как произведение искусства.
                  </p>
                  
                  <p>
                    Работаем не для галочки, не на поток. Каждый проект — это 
                    история, которую мы рассказываем металлом. История о том, 
                    что настоящее качество не знает компромиссов.
                  </p>
                </div>

                <div className="pt-6 border-t border-steel/30">
                  <div className="text-mono text-copper text-sm">
                    Сергей Урбанович, основатель мастерской
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text text-center mb-16">
              Мастерская в цифрах
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center metal-frame p-8 hover-glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-display text-4xl text-copper mb-4">
                    {stat.number}
                  </div>
                  <div className="text-serif text-text-muted leading-relaxed">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text text-center mb-16">
              Принципы работы
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="metal-frame p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-display text-xl text-copper mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-serif text-text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text text-center mb-16">
              История развития
            </h2>
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex gap-8 items-start"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <div className="text-display text-2xl text-copper">
                      {event.year}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-4 h-4 bg-copper rounded-full mt-2 relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-16 bg-steel/30" />
                    )}
                  </div>
                  
                  <div className="flex-1 metal-frame p-6">
                    <h3 className="text-display text-xl text-text mb-2">
                      {event.title}
                    </h3>
                    <p className="text-serif text-text-muted">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text mb-8">
              Наши гарантии
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="metal-frame p-6">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-display text-lg text-copper mb-3">
                  5 лет гарантии
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  На металлическую конструкцию и качество сварных соединений
                </p>
              </div>
              
              <div className="metal-frame p-6">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-display text-lg text-copper mb-3">
                  Премиум качество
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  Используем только проверенные материалы и технологии
                </p>
              </div>
              
              <div className="metal-frame p-6">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-display text-lg text-copper mb-3">
                  Сервисная поддержка
                </h3>
                <p className="text-serif text-text-muted text-sm">
                  Бесплатный выезд для устранения гарантийных случаев
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}