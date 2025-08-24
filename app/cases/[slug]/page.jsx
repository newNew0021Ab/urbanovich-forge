'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const caseStudies = {
  'provence-estate': {
    title: 'Усадьба в стиле прованс',
    subtitle: 'Комплексное оформление входной группы',
    category: 'Частный дом',
    location: 'Минск',
    year: '2024',
    duration: '3 недели',
    price: '3200 BYN',
    
    challenge: 'Заказчики хотели создать атмосферу французского прованса, но климат Беларуси требовал особого подхода к материалам и обработке.',
    
    solution: 'Разработан уникальный дизайн с элементами растительного орнамента, использована специальная патинированная обработка для эффекта состаривания.',
    
    result: 'Входная группа полностью преобразила фасад дома, став его главным акцентом. Изделие прекрасно выдержало зимний сезон.',
    
    testimonial: {
      text: 'Работа Сергея — это продолжение архитектуры. Ворота не просто функциональный элемент, а настоящее произведение искусства.',
      author: 'Кристина М.',
      position: 'Владелица дома'
    },
    
    specs: {
      material: 'Сталь 4мм, патинирование',
      dimensions: '4.2м × 2.1м',
      features: ['Автоматическое открывание', 'LED-подсветка', 'Антикоррозийная обработка']
    },
    
    images: [
      'Общий вид ворот',
      'Кованые элементы',
      'Автоматика',
      'Патинированная отделка',
      'Интеграция в ландшафт'
    ],
    
    process: [
      {
        stage: 'Эскизирование',
        duration: '3 дня',
        description: 'Создали несколько вариантов с учётом архитектуры дома и пожеланий заказчиков'
      },
      {
        stage: '3D-моделирование',
        duration: '2 дня',
        description: 'Детальная модель для понимания пропорций и деталей'
      },
      {
        stage: 'Изготовление',
        duration: '2.5 недели',
        description: 'Художественная ковка, сварка, патинирование и защитная обработка'
      },
      {
        stage: 'Установка',
        duration: '1 день',
        description: 'Монтаж с инструктажем по эксплуатации'
      }
    ]
  },
  
  'loft-center': {
    title: 'Лофт в историческом центре',
    subtitle: 'Лестничные перила в индустриальном стиле',
    category: 'Квартира',
    location: 'Гродно',
    year: '2024',
    duration: '2 недели',
    price: '1800 BYN',
    
    challenge: 'Двухуровневая квартира в историческом здании требовала перил, которые бы сочетали безопасность с эстетикой лофта.',
    
    solution: 'Созданы минималистичные перила с элементами необработанного металла, подчёркивающие индустриальный характер интерьера.',
    
    result: 'Лестница стала центральным элементом интерьера, получила множество положительных отзывов в социальных сетях.',
    
    testimonial: {
      text: 'Каждое изделие — как ритуал. Сергей не просто кузнец — он художник, который понимает пространство.',
      author: 'Антон К.',
      position: 'Архитектор'
    },
    
    specs: {
      material: 'Сталь 3мм, чёрная обработка',
      dimensions: '12м погонных',
      features: ['Эргономичный поручень', 'Скрытый крепёж', 'Матовое покрытие']
    }
  },
  
  'country-club': {
    title: 'Загородный клуб «Резиденция»',
    subtitle: 'Комплекс барбекю-зоны с мангальным комплексом',
    category: 'Коммерческий объект',
    location: 'Брест',
    year: '2023',
    duration: '1 месяц',
    price: '8500 BYN',
    
    challenge: 'Необходимо было создать функциональную зону для барбекю, рассчитанную на большое количество гостей, при этом сохранив эстетичный внешний вид.',
    
    solution: 'Спроектирован многоуровневый мангальный комплекс с рабочими поверхностями, системой хранения и декоративными элементами.',
    
    result: 'Барбекю-зона стала одним из самых популярных мест в клубе. Пропускная способность увеличилась на 40%.',
    
    testimonial: {
      text: 'Инвестиции в работу Сергея окупились за первый сезон. Гости специально приезжают посмотреть на наш мангал.',
      author: 'Владимир С.',
      position: 'Управляющий клуба'
    },
    
    specs: {
      material: 'Жаропрочная сталь, чугунные решётки',
      dimensions: '3м × 1.5м × 1.2м',
      features: ['Регулируемая высота', 'Дымоотвод', 'Столешница из гранита']
    }
  }
}

export default function CasePage({ params }) {
  const caseStudy = caseStudies[params.slug]
  
  if (!caseStudy) {
    notFound()
  }

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
            <div className="text-mono text-sm text-copper mb-4">
              {caseStudy.category} • {caseStudy.location} • {caseStudy.year}
            </div>
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-text">
              {caseStudy.title}
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              {caseStudy.subtitle}
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <span className="text-mono text-copper">Срок:</span> {caseStudy.duration}
              </div>
              <div>
                <span className="text-mono text-copper">Стоимость:</span> {caseStudy.price}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto metal-frame aspect-[16/9] bg-steel/20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-text-dim text-center p-8">
              Главное фото проекта<br />
              {caseStudy.title}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Challenge, Solution, Result */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="metal-frame p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-2xl text-copper mb-4">Задача</h2>
              <p className="text-serif text-text-muted leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              className="metal-frame p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-2xl text-copper mb-4">Решение</h2>
              <p className="text-serif text-text-muted leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>

            <motion.div
              className="metal-frame p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-2xl text-copper mb-4">Результат</h2>
              <p className="text-serif text-text-muted leading-relaxed">
                {caseStudy.result}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      {caseStudy.process && (
        <section className="py-16 bg-steel/10">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-4xl text-text text-center mb-12">
                Процесс создания
              </h2>
              
              <div className="space-y-6">
                {caseStudy.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-copper text-background rounded-full flex items-center justify-center font-mono font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 metal-frame p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-display text-xl text-text">
                          {step.stage}
                        </h3>
                        <div className="text-mono text-copper text-sm">
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-serif text-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {caseStudy.images && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-4xl text-text text-center mb-12">
                Фотографии проекта
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="metal-frame aspect-[4/3] bg-steel/20 flex items-center justify-center hover-glow cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-text-dim text-center p-4">
                      {image}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Specifications */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Specs */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display text-3xl text-text mb-8">
                  Технические характеристики
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-mono text-copper text-sm mb-2">Материалы</div>
                    <div className="text-text">{caseStudy.specs.material}</div>
                  </div>
                  
                  <div>
                    <div className="text-mono text-copper text-sm mb-2">Размеры</div>
                    <div className="text-text">{caseStudy.specs.dimensions}</div>
                  </div>
                  
                  <div>
                    <div className="text-mono text-copper text-sm mb-2">Особенности</div>
                    <div className="space-y-2">
                      {caseStudy.specs.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-copper rounded-full" />
                          <span className="text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="metal-frame p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display text-2xl text-copper mb-6">
                  Отзыв клиента
                </h2>
                
                <blockquote className="text-serif text-text-muted leading-relaxed mb-6">
                  «{caseStudy.testimonial.text}»
                </blockquote>
                
                <div className="border-t border-steel/30 pt-4">
                  <div className="text-display text-text">{caseStudy.testimonial.author}</div>
                  <div className="text-mono text-copper text-sm">{caseStudy.testimonial.position}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cases"
                className="glass px-8 py-4 text-display tracking-wider hover:bg-copper/10 transition-all duration-300 text-center"
              >
                ← Все кейсы
              </Link>
              <Link
                href="/order"
                className="metal-frame px-8 py-4 text-display tracking-wider bg-gradient-to-r from-steel/30 to-copper/30 hover:from-copper/40 hover:to-steel/40 transition-all duration-500 hover-glow text-center"
              >
                Заказать похожий проект
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}