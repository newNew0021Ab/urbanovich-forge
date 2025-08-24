import { ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  priceRange: string;
  duration: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Ворота и калитки',
    description: 'Входные группы, которые становятся визитной карточкой вашего дома. От классики до современного минимализма.',
    features: ['Индивидуальный дизайн', 'Автоматика по желанию', 'Антикоррозийная обработка', 'Гарантия 5 лет'],
    image: '/api/placeholder/600/400',
    priceRange: 'от 2000 BYN',
    duration: '2-3 недели'
  },
  {
    id: 2,
    title: 'Перила и лестницы',
    description: 'Лестничные конструкции, где безопасность сочетается с эстетикой. Каждая деталь продумана до мелочей.',
    features: ['Соответствие ГОСТ', 'Эргономичные поручни', 'Любая конфигурация', 'Монтаж "под ключ"'],
    image: '/api/placeholder/600/400',
    priceRange: 'от 150 BYN/м.п.',
    duration: '1-2 недели'
  },
  {
    id: 3,
    title: 'Мебель и интерьер',
    description: 'Предметы интерьера, которые живут десятилетиями. Сочетание металла с деревом, стеклом, камнем.',
    features: ['Авторский дизайн', 'Экологичные материалы', 'Реставрация изделий', 'Подбор фурнитуры'],
    image: '/api/placeholder/600/400',
    priceRange: 'от 500 BYN',
    duration: '1-4 недели'
  },
  {
    id: 4,
    title: 'Мангалы и барбекю',
    description: 'Очаги для семейных встреч и дружеских посиделок. От простых жаровен до комплексных барбекю-зон.',
    features: ['Оптимальное горение', 'Долговечные материалы', 'Мобильные и стационарные', 'Аксессуары в комплекте'],
    image: '/api/placeholder/600/400',
    priceRange: 'от 300 BYN',
    duration: '1 неделя'
  },
  {
    id: 5,
    title: 'Козырьки и навесы',
    description: 'Защита от непогоды с архитектурным шармом. Интеграция в общий стиль здания.',
    features: ['Расчёт нагрузок', 'Поликарбонат/металл', 'Водосточная система', 'Освещение по желанию'],
    image: '/api/placeholder/600/400',
    priceRange: 'от 800 BYN',
    duration: '1-2 недели'
  },
  {
    id: 6,
    title: 'Художественная ковка',
    description: 'Декоративные элементы, которые превращают утилитарные вещи в произведения искусства.',
    features: ['Историческая стилизация', 'Современная интерпретация', 'Ручная работа', 'Уникальные решения'],
    image: '/api/placeholder/600/400',
    priceRange: 'по проекту',
    duration: 'по проекту'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Заголовок */}
      <section className="py-16 texture-concrete">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-ash">
              Услуги
            </h1>
            <div className="text-body text-ash/70 text-xl mb-8">
              Индивидуальные проекты. Любой масштаб. Полный цикл — от замера до монтажа.
            </div>
            
            <div className="text-mono text-copper">
              Что создаю
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group cursor-pointer animate-fade-in hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-steel/10 backdrop-blur-sm border border-steel/20 p-8 h-full transition-all duration-300 group-hover:border-copper/30">
                  {/* Заголовок */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-display text-2xl text-ash group-hover:text-copper transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-copper opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                  </div>

                  {/* Описание */}
                  <div className="text-body text-ash/80 mb-6 leading-relaxed">
                    {service.description}
                  </div>

                  {/* Особенности */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-ash/70">
                        <div className="w-1 h-1 bg-copper mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Цена и сроки */}
                  <div className="flex justify-between items-end pt-4 border-t border-steel/20">
                    <div>
                      <div className="text-caption text-copper mb-1">Стоимость</div>
                      <div className="text-mono text-ash font-medium">{service.priceRange}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-caption text-copper mb-1">Срок</div>
                      <div className="text-mono text-ash font-medium">{service.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы - краткий обзор */}
      <section className="py-16 bg-steel/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-display text-3xl text-ash mb-6">
              Как проходит работа
            </h2>
            <div className="text-body text-ash/70">
              Проверенная схема, отточенная годами
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Замер', desc: 'Выезд на объект, обсуждение пожеланий, точные измерения' },
              { step: '02', title: 'Проект', desc: 'Эскиз, расчёт материалов, согласование деталей' },
              { step: '03', title: 'Ковка', desc: 'Изготовление в мастерской, контроль качества' },
              { step: '04', title: 'Монтаж', desc: 'Доставка, профессиональная установка, сдача объекта' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-display text-4xl text-copper mb-4 group-hover:animate-forge">
                  {item.step}
                </div>
                <h3 className="text-caption text-ash mb-3">
                  {item.title}
                </h3>
                <div className="text-sm text-ash/70 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-mono text-dust/60 mb-4">
              Средний срок — менее месяца. Все этапы — под контролем.
            </div>
            <button className="px-8 py-3 border border-copper/50 text-copper hover:bg-copper/10 transition-all duration-300 hover-glow">
              Узнать подробнее о процессе
            </button>
          </div>
        </div>
      </section>

      {/* Гарантии */}
      <section className="py-16 texture-steel">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-3xl text-ash text-center mb-12">
              Гарантии качества
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-copper rounded-full" />
                </div>
                <h3 className="text-display text-xl text-ash mb-3">Материалы</h3>
                <div className="text-body text-ash/70 text-sm">
                  Только качественный металл от проверенных поставщиков
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-copper rounded-full" />
                </div>
                <h3 className="text-display text-xl text-ash mb-3">Технологии</h3>
                <div className="text-body text-ash/70 text-sm">
                  Соблюдение всех технологических процессов ковки
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-copper rounded-full" />
                </div>
                <h3 className="text-display text-xl text-ash mb-3">Сервис</h3>
                <div className="text-body text-ash/70 text-sm">
                  Гарантийное обслуживание и консультации
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-6 text-center">
          <div className="text-display text-2xl text-ash mb-4">
            Готовы начать проект?
          </div>
          <div className="text-body text-ash/80 mb-8">
            Первая консультация — бесплатно
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+375297855871"
              className="px-8 py-4 bg-ash text-background font-medium hover:bg-ash/90 transition-all duration-300 hover-glow"
            >
              Позвонить сейчас
            </a>
            <button className="px-8 py-4 border border-ash text-ash hover:bg-ash/10 transition-all duration-300">
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;