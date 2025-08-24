'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Кованые ворота «Классика»',
    category: 'ворота',
    location: 'Минск',
    year: '2024',
    image: '/assets/images/gates-1.jpg',
    description: 'Элегантные ворота для частного дома в классическом стиле',
  },
  {
    id: 2,
    title: 'Лестничные перила «Модерн»',
    category: 'перила',
    location: 'Гродно',
    year: '2024',
    image: '/assets/images/railings-1.jpg',
    description: 'Современные перила с геометрическими элементами',
  },
  {
    id: 3,
    title: 'Садовая мебель «Лофт»',
    category: 'мебель',
    location: 'Брест',
    year: '2023',
    image: '/assets/images/furniture-1.jpg',
    description: 'Комплект садовой мебели в индустриальном стиле',
  },
  {
    id: 4,
    title: 'Мангал «Премиум»',
    category: 'мангалы',
    location: 'Витебск',
    year: '2024',
    image: '/assets/images/bbq-1.jpg',
    description: 'Стационарный мангал с рабочими поверхностями',
  },
  {
    id: 5,
    title: 'Ворота «Прованс»',
    category: 'ворота',
    location: 'Минск',
    year: '2024',
    image: '/assets/images/gates-2.jpg',
    description: 'Ворота в стиле французского прованса',
  },
  {
    id: 6,
    title: 'Винтовые перила',
    category: 'перила',
    location: 'Гродно',
    year: '2023',
    image: '/assets/images/railings-2.jpg',
    description: 'Художественные перила для винтовой лестницы',
  },
  {
    id: 7,
    title: 'Обеденный стол «Индастриал»',
    category: 'мебель',
    location: 'Гомель',
    year: '2024',
    image: '/assets/images/furniture-2.jpg',
    description: 'Обеденный стол в индустриальном стиле',
  },
  {
    id: 8,
    title: 'Барбекю-комплекс',
    category: 'мангалы',
    location: 'Могилёв',
    year: '2023',
    image: '/assets/images/bbq-2.jpg',
    description: 'Многофункциональный барбекю-комплекс',
  },
]

const categories = ['все', 'ворота', 'перила', 'мебель', 'мангалы']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('все')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = selectedCategory === 'все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

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
              Портфолио
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              Каждое изделие — это история, рассказанная металлом
            </p>
            <div className="text-mono text-sm text-copper">
              Более 500 проектов за 18 лет работы
            </div>
          </motion.div>
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
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="metal-frame overflow-hidden aspect-[4/3] mb-4 hover-glow">
                    <div className="w-full h-full bg-steel/20 flex items-center justify-center text-text-dim">
                      {/* Placeholder for image */}
                      <span className="text-sm text-center p-4">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-display text-xl text-text group-hover:text-copper transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="text-mono text-sm text-copper">
                      {item.category} • {item.location} • {item.year}
                    </div>
                    <p className="text-serif text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="max-w-4xl w-full bg-steel/20 metal-frame p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-[4/3] bg-steel/30 flex items-center justify-center">
                  <span className="text-text-dim">Изображение проекта</span>
                </div>
                
                {/* Details */}
                <div className="space-y-4">
                  <h2 className="text-display text-3xl text-text">
                    {selectedItem.title}
                  </h2>
                  <div className="text-mono text-copper text-sm">
                    {selectedItem.category} • {selectedItem.location} • {selectedItem.year}
                  </div>
                  <p className="text-serif text-text-muted leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="pt-4 border-t border-steel/30">
                    <button
                      className="glass px-6 py-3 text-display tracking-wider hover:bg-copper/10 transition-all duration-300"
                      onClick={() => setSelectedItem(null)}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}