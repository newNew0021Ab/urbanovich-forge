'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
  {
    id: 1,
    slug: 'provence-estate',
    title: 'Усадьба в стиле прованс',
    subtitle: 'Комплексное оформление входной группы',
    category: 'Частный дом',
    location: 'Минск',
    year: '2024',
    duration: '3 недели',
    price: '3200 BYN',
    image: '/assets/images/case-provence.jpg',
    description: 'Создание атмосферы французского прованса с учётом белорусского климата',
    tags: ['ворота', 'автоматика', 'патинирование'],
    featured: true
  },
  {
    id: 2,
    slug: 'loft-center',
    title: 'Лофт в историческом центре',
    subtitle: 'Лестничные перила в индустриальном стиле',
    category: 'Квартира',
    location: 'Гродно',
    year: '2024',
    duration: '2 недели',
    price: '1800 BYN',
    image: '/assets/images/case-loft.jpg',
    description: 'Минималистичные перила для двухуровневой квартиры в лофт-стиле',
    tags: ['перила', 'лофт', 'минимализм'],
    featured: true
  },
  {
    id: 3,
    slug: 'country-club',
    title: 'Загородный клуб «Резиденция»',
    subtitle: 'Барбекю-зона с мангальным комплексом',
    category: 'Коммерческий объект',
    location: 'Брест',
    year: '2023',
    duration: '1 месяц',
    price: '8500 BYN',
    image: '/assets/images/case-club.jpg',
    description: 'Многофункциональный мангальный комплекс для большого количества гостей',
    tags: ['мангал', 'барбекю', 'коммерция'],
    featured: true
  },
  {
    id: 4,
    slug: 'modern-villa',
    title: 'Современная вилла',
    subtitle: 'Входная группа в стиле хай-тек',
    category: 'Частный дом',
    location: 'Витебск',
    year: '2024',
    duration: '2 недели',
    price: '4200 BYN',
    image: '/assets/images/case-modern.jpg',
    description: 'Минималистичные ворота с интеграцией смарт-технологий',
    tags: ['ворота', 'хай-тек', 'автоматика'],
    featured: false
  },
  {
    id: 5,
    slug: 'classic-manor',
    title: 'Классическая усадьба',
    subtitle: 'Кованые элементы в традиционном стиле',
    category: 'Частный дом',
    location: 'Гомель',
    year: '2023',
    duration: '4 недели',
    price: '5800 BYN',
    image: '/assets/images/case-classic.jpg',
    description: 'Художественная ковка с элементами белорусских традиций',
    tags: ['ковка', 'традиции', 'классика'],
    featured: false
  },
  {
    id: 6,
    slug: 'office-building',
    title: 'Офисное здание',
    subtitle: 'Входная группа и навес',
    category: 'Коммерческий объект',
    location: 'Могилёв',
    year: '2024',
    duration: '3 недели',
    price: '6200 BYN',
    image: '/assets/images/case-office.jpg',
    description: 'Представительская входная группа для бизнес-центра',
    tags: ['навес', 'ворота', 'офис'],
    featured: false
  }
]

const categories = ['все', 'Частный дом', 'Квартира', 'Коммерческий объект']

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState('все')

  const filteredCases = selectedCategory === 'все' 
    ? caseStudies 
    : caseStudies.filter(caseItem => caseItem.category === selectedCategory)

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
              Кейсы
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              Подробные истории наших проектов — от задачи до результата
            </p>
            <div className="text-mono text-sm text-copper">
              Реальные проекты, реальные результаты
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-display text-3xl text-text mb-4">
              Избранные проекты
            </h2>
            <p className="text-serif text-text-muted">
              Самые интересные и сложные реализации
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.filter(c => c.featured).map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/cases/${caseItem.slug}`}>
                  <div className="metal-frame overflow-hidden hover-glow transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-steel/20 flex items-center justify-center">
                      <span className="text-text-dim text-center p-4">
                        {caseItem.title}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {caseItem.tags.map((tag, idx) => (
                          <span key={idx} className="text-mono text-xs text-copper bg-copper/10 px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-display text-xl text-text group-hover:text-copper transition-colors duration-300 mb-2">
                        {caseItem.title}
                      </h3>
                      
                      <p className="text-serif text-text-muted text-sm mb-4 leading-relaxed">
                        {caseItem.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-mono text-copper">Локация</div>
                          <div className="text-text-muted">{caseItem.location}</div>
                        </div>
                        <div>
                          <div className="text-mono text-copper">Стоимость</div>
                          <div className="text-text-muted">{caseItem.price}</div>
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

      {/* Filters */}
      <section className="py-8 bg-steel/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'border-copper text-copper bg-copper/10'
                    : 'border-steel/50 text-text-muted hover:border-copper/50 hover:text-copper'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* All Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-3xl text-text mb-4">
              Все проекты
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/cases/${caseItem.slug}`}>
                  <div className="metal-frame p-6 hover-glow transition-all duration-300">
                    <div className="flex gap-6">
                      {/* Mini image */}
                      <div className="flex-shrink-0 w-24 h-24 bg-steel/20 flex items-center justify-center">
                        <span className="text-text-dim text-xs text-center">img</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {caseItem.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-mono text-xs text-copper bg-copper/10 px-2 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-display text-lg text-text group-hover:text-copper transition-colors duration-300 mb-2">
                          {caseItem.title}
                        </h3>
                        
                        <p className="text-serif text-text-muted text-sm mb-3 leading-relaxed">
                          {caseItem.subtitle}
                        </p>
                        
                        <div className="flex justify-between text-xs">
                          <div className="text-mono text-copper">
                            {caseItem.location} • {caseItem.year}
                          </div>
                          <div className="text-text-muted">
                            {caseItem.price}
                          </div>
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
            <h2 className="text-display text-4xl text-text mb-6">
              Хотите такой же результат?
            </h2>
            <p className="text-serif text-xl text-text-muted mb-8">
              Обсудим ваш проект и найдём лучшее решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="metal-frame px-8 py-4 text-display tracking-wider bg-gradient-to-r from-steel/30 to-copper/30 hover:from-copper/40 hover:to-steel/40 transition-all duration-500 hover-glow"
              >
                Заказать замер
              </Link>
              <Link
                href="/portfolio"
                className="glass px-8 py-4 text-display tracking-wider hover:bg-copper/10 transition-all duration-300"
              >
                Смотреть портфолио
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}