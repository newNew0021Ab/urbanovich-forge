'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'

const services = {
  'vorota': {
    title: 'Ворота и калитки',
    hero: 'Входные группы, которые становятся визитной карточкой вашего дома',
    description: 'От классических кованых ворот до современных минималистичных решений — создаём входные группы, которые гармонично дополняют архитектуру и служат десятилетиями.',
    priceFrom: 2000,
    duration: '2-3 недели',
    features: [
      'Индивидуальный дизайн под архитектуру дома',
      'Автоматика ведущих европейских производителей',
      'Антикоррозийная обработка для белорусского климата',
      'Гарантия 5 лет на конструкцию'
    ],
    types: [
      {
        name: 'Классические кованые',
        price: 'от 2500 BYN',
        description: 'Художественная ковка, патинирование, традиционные орнаменты'
      },
      {
        name: 'Современные минималистичные',
        price: 'от 2000 BYN',
        description: 'Чистые линии, скрытые крепления, интеграция с ландшафтом'
      },
      {
        name: 'Эксклюзивные дизайнерские',
        price: 'от 4000 BYN',
        description: 'Индивидуальная разработка, сложные технические решения'
      }
    ],
    process: [
      'Выезд на замер и консультация',
      'Создание эскиза и 3D-визуализации',
      'Изготовление в мастерской',
      'Установка автоматики и тестирование'
    ]
  },
  'perila': {
    title: 'Перила и лестницы',
    hero: 'Лестничные конструкции, где безопасность сочетается с эстетикой',
    description: 'Перила — это не просто элемент безопасности, это важная деталь интерьера. Создаём конструкции любой сложности с соблюдением всех требований ГОСТ.',
    priceFrom: 150,
    priceUnit: 'BYN/м.п.',
    duration: '1-2 недели',
    features: [
      'Соответствие всем требованиям ГОСТ по безопасности',
      'Эргономичные поручни для комфортного использования',
      'Любая конфигурация — прямые, винтовые, с поворотами',
      'Монтаж "под ключ" с финишной отделкой'
    ],
    types: [
      {
        name: 'Классические кованые',
        price: 'от 200 BYN/м.п.',
        description: 'Традиционная художественная ковка, патинирование'
      },
      {
        name: 'Современные минималистичные',
        price: 'от 150 BYN/м.п.',
        description: 'Геометрические формы, скрытые крепления'
      },
      {
        name: 'Комбинированные с деревом',
        price: 'от 250 BYN/м.п.',
        description: 'Сочетание металла с натуральным деревом'
      }
    ]
  },
  'mebel': {
    title: 'Мебель и интерьер',
    hero: 'Предметы интерьера, которые живут десятилетиями',
    description: 'Каждая вещь создаётся как семейная реликвия. Сочетаем металл с деревом, стеклом, камнем, создавая уникальные предметы интерьера.',
    priceFrom: 500,
    duration: '1-4 недели',
    features: [
      'Авторский дизайн под ваш интерьер',
      'Экологичные материалы и покрытия',
      'Возможность реставрации через годы',
      'Подбор качественной фурнитуры'
    ],
    types: [
      {
        name: 'Столы',
        price: 'от 1200 BYN',
        description: 'Обеденные, журнальные, рабочие столы'
      },
      {
        name: 'Стеллажи и полки',
        price: 'от 700 BYN',
        description: 'Книжные, винные стеллажи, настенные полки'
      },
      {
        name: 'Садовая мебель',
        price: 'от 800 BYN',
        description: 'Столы, скамейки, качели для участка'
      }
    ]
  },
  'mangaly': {
    title: 'Мангалы и барбекю',
    hero: 'Очаги для семейных встреч и дружеских посиделок',
    description: 'От простых переносных мангалов до сложных барбекю-комплексов. Создаём изделия с оптимальным горением и продуманной эргономикой.',
    priceFrom: 300,
    duration: '1 неделя',
    features: [
      'Оптимальная высота топки для равномерного горения',
      'Долговечные жаропрочные материалы',
      'Мобильные и стационарные варианты',
      'Полный комплект аксессуаров'
    ],
    types: [
      {
        name: 'Переносные мангалы',
        price: 'от 300 BYN',
        description: 'Разборные, компактные, удобные для транспортировки'
      },
      {
        name: 'Стационарные мангалы',
        price: 'от 800 BYN',
        description: 'С рабочими поверхностями и местом для дров'
      },
      {
        name: 'Барбекю-комплексы',
        price: 'от 2500 BYN',
        description: 'Многофункциональные кухни для улицы'
      }
    ]
  }
}

export default function ServicePage({ params }) {
  const service = services[params.slug]
  
  if (!service) {
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
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-text">
              {service.title}
            </h1>
            <p className="text-serif text-xl text-text-muted mb-8">
              {service.hero}
            </p>
            <div className="text-mono text-sm text-copper">
              {service.priceFrom && `от ${service.priceFrom} ${service.priceUnit || 'BYN'}`} • {service.duration}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
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
                  Фото примеров<br />
                  {service.title}
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-display text-3xl text-text mb-6">
                  Что входит в услугу
                </h2>
                
                <p className="text-serif text-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-copper rounded-full mt-2 flex-shrink-0" />
                      <span className="text-serif text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Types and Pricing */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-4xl text-text text-center mb-12">
              Варианты исполнения
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.types?.map((type, index) => (
                <motion.div
                  key={index}
                  className="metal-frame p-6 hover-glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-display text-xl text-copper mb-3">
                    {type.name}
                  </h3>
                  <div className="text-mono text-text text-lg mb-4">
                    {type.price}
                  </div>
                  <p className="text-serif text-text-muted text-sm leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      {service.process && (
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
                Процесс работы
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-copper text-background flex items-center justify-center font-mono font-bold">
                      {index + 1}
                    </div>
                    <p className="text-serif text-text-muted text-sm leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section className="py-20 bg-steel/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-display text-4xl text-text mb-4">
                Получить предложение
              </h2>
              <p className="text-serif text-text-muted">
                Расскажите о своём проекте, и мы подготовим персональное предложение
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <ContactForm title={`Заказать ${service.title.toLowerCase()}`} simplified={true} />
              
              {/* Additional Info */}
              <div className="space-y-6">
                <div className="metal-frame p-6">
                  <h3 className="text-display text-lg text-copper mb-3">
                    Что будет дальше?
                  </h3>
                  <div className="space-y-3 text-serif text-text-muted text-sm">
                    <p>1. Перезвоним в течение часа</p>
                    <p>2. Договоримся о времени выезда</p>
                    <p>3. Сделаем замеры и эскиз</p>
                    <p>4. Подготовим коммерческое предложение</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-mono text-sm text-copper mb-2">
                    Или звоните напрямую
                  </div>
                  <a 
                    href="tel:+375297855871"
                    className="text-display text-xl text-text hover:text-copper transition-colors duration-300"
                  >
                    +375 29 785-58-71
                  </a>
                  <div className="text-mono text-xs text-text-dim mt-1">
                    Пн–Пт, 09:00–18:00
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-3xl text-text text-center mb-12">
              Другие услуги
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(services)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, svc]) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="glass px-6 py-3 text-display tracking-wider hover:bg-copper/10 transition-all duration-300"
                  >
                    {svc.title}
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}