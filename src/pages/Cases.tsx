import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import gatesImage from '@/assets/gates-portfolio.jpg';
import railingsImage from '@/assets/railings-portfolio.jpg';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  category: string;
  duration: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
  images: {
    main: string;
    before?: string;
    after?: string;
    process?: string[];
  };
  specs: {
    material: string;
    dimensions: string;
    features: string[];
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Усадьба в стиле прованс',
    subtitle: 'Комплексное оформление входной группы',
    location: 'Минск',
    year: '2024',
    category: 'Частный дом',
    duration: '3 недели',
    challenge: 'Заказчики хотели создать атмосферу французского прованса, но климат Беларуси требовал особого подхода к материалам и обработке.',
    solution: 'Разработан уникальный дизайн с элементами растительного орнамента, использована специальная патинированная обработка для эффекта состаривания.',
    result: 'Входная группа полностью преобразила фасад дома, став его главным акцентом. Изделие прекрасно выдержало зимний сезон.',
    testimonial: {
      text: 'Работа Сергея — это продолжение архитектуры. Ворота не просто функциональный элемент, а настоящее произведение искусства.',
      author: 'Кристина М.',
      position: 'Владелица дома'
    },
    images: {
      main: gatesImage,
    },
    specs: {
      material: 'Сталь 4мм, патинирование',
      dimensions: '4.2м × 2.1м',
      features: ['Автоматическое открывание', 'LED-подсветка', 'Антикоррозийная обработка']
    }
  },
  {
    id: 2,
    title: 'Лофт в историческом центре',
    subtitle: 'Лестничные перила в индустриальном стиле',
    location: 'Гродно',
    year: '2024',
    category: 'Квартира',
    duration: '2 недели',
    challenge: 'Двухуровневая квартира в историческом здании требовала перил, которые бы сочетали безопасность с эстетикой лофта.',
    solution: 'Созданы минималистичные перила с элементами необработанного металла, подчёркивающие индустриальный характер интерьера.',
    result: 'Лестница стала центральным элементом интерьера, получила множество положительных отзывов в социальных сетях.',
    testimonial: {
      text: 'Каждое изделие — как ритуал. Сергей не просто кузнец — он художник, который понимает пространство.',
      author: 'Антон К.',
      position: 'Архитектор'
    },
    images: {
      main: railingsImage,
    },
    specs: {
      material: 'Сталь 3мм, чёрная обработка',
      dimensions: '12м погонных',
      features: ['Эргономичный поручень', 'Скрытый крепёж', 'Матовое покрытие']
    }
  },
  {
    id: 3,
    title: 'Загородный клуб «Резиденция»',
    subtitle: 'Комплекс барбекю-зоны с мангальным комплексом',
    location: 'Брест',
    year: '2023',
    category: 'Коммерческий объект',
    duration: '1 месяц',
    challenge: 'Необходимо было создать функциональную зону для барбекю, рассчитанную на большое количество гостей, при этом сохранив эстетичный внешний вид.',
    solution: 'Спроектирован многоуровневый мангальный комплекс с рабочими поверхностями, системой хранения и декоративными элементами.',
    result: 'Барбекю-зона стала одним из самых популярных мест в клубе. Пропускная способность увеличилась на 40%.',
    testimonial: {
      text: 'Инвестиции в работу Сергея окупились за первый сезон. Гости специально приезжают посмотреть на наш мангал.',
      author: 'Владимир С.',
      position: 'Управляющий клуба'
    },
    images: {
      main: gatesImage, // Будет заменено
    },
    specs: {
      material: 'Жаропрочная сталь, чугунные решётки',
      dimensions: '3м × 1.5м × 1.2м',
      features: ['Регулируемая высота', 'Дымоотвод', 'Столешница из гранита']
    }
  }
];

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Заголовок */}
      <section className="py-16 texture-concrete">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-ash">
              Кейсы
            </h1>
            <div className="text-body text-ash/70 text-xl mb-8">
              Истории проектов — от замысла до результата
            </div>
            
            <div className="text-mono text-copper">
              Из архива мастерской
            </div>
          </div>
        </div>
      </section>

      {/* Список кейсов */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Изображение */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-steel/10 hover-glow cursor-pointer"
                       onClick={() => setSelectedCase(caseStudy)}>
                    <img
                      src={caseStudy.images.main}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    
                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-background/0 hover:bg-background/80 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="text-center">
                        <div className="text-display text-xl text-ash mb-2">
                          Смотреть подробнее
                        </div>
                        <ArrowRight className="w-6 h-6 text-copper mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Контент */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 text-mono text-dust">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {caseStudy.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {caseStudy.year}
                    </div>
                  </div>

                  <h2 className="text-display text-3xl text-ash mb-2">
                    {caseStudy.title}
                  </h2>

                  <div className="text-body text-copper mb-6">
                    {caseStudy.subtitle}
                  </div>

                  <div className="text-body text-ash/80 mb-6 leading-relaxed">
                    {caseStudy.challenge}
                  </div>

                  {/* Технические характеристики */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-caption text-copper">Материал:</span>
                      <span className="text-mono text-ash/70">{caseStudy.specs.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-caption text-copper">Размеры:</span>
                      <span className="text-mono text-ash/70">{caseStudy.specs.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-caption text-copper">Срок:</span>
                      <span className="text-mono text-ash/70">{caseStudy.duration}</span>
                    </div>
                  </div>

                  {/* Отзыв */}
                  <div className="bg-steel/10 p-6 border-l-2 border-copper/30">
                    <div className="text-body text-ash/90 italic mb-4">
                      «{caseStudy.testimonial.text}»
                    </div>
                    <div className="text-mono text-dust">
                      — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="mt-6 inline-flex items-center gap-2 text-copper hover:text-ash transition-colors duration-300 hover-underline"
                  >
                    Подробнее о проекте
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Детальный просмотр кейса */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Закрытие */}
              <button
                onClick={() => setSelectedCase(null)}
                className="mb-8 inline-flex items-center gap-2 text-ash/70 hover:text-copper transition-colors duration-300"
              >
                ← Вернуться к кейсам
              </button>

              {/* Заголовок */}
              <div className="mb-8">
                <h1 className="text-display text-4xl text-ash mb-4">
                  {selectedCase.title}
                </h1>
                <div className="text-body text-copper text-xl mb-6">
                  {selectedCase.subtitle}
                </div>
                
                <div className="flex flex-wrap gap-6 text-mono text-dust mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedCase.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedCase.year}
                  </div>
                  <div>{selectedCase.category}</div>
                </div>
              </div>

              {/* Изображение */}
              <div className="aspect-video mb-8 overflow-hidden">
                <img
                  src={selectedCase.images.main}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Детали проекта */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-display text-xl text-ash mb-4">Вызов</h3>
                  <div className="text-body text-ash/80 mb-6">
                    {selectedCase.challenge}
                  </div>

                  <h3 className="text-display text-xl text-ash mb-4">Решение</h3>
                  <div className="text-body text-ash/80">
                    {selectedCase.solution}
                  </div>
                </div>

                <div>
                  <h3 className="text-display text-xl text-ash mb-4">Результат</h3>
                  <div className="text-body text-ash/80 mb-6">
                    {selectedCase.result}
                  </div>

                  <h3 className="text-display text-xl text-ash mb-4">Особенности</h3>
                  <div className="space-y-2">
                    {selectedCase.specs.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-ash/70">
                        <Star className="w-3 h-3 text-copper mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Отзыв - крупно */}
              <div className="bg-gradient-copper p-8 text-center">
                <div className="text-body text-ash text-lg italic mb-4">
                  «{selectedCase.testimonial.text}»
                </div>
                <div className="text-mono text-ash/80">
                  — {selectedCase.testimonial.author}, {selectedCase.testimonial.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Призыв к действию */}
      <section className="py-16 bg-steel/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-display text-2xl text-ash mb-4">
            Хотите попасть в следующий кейс?
          </div>
          <div className="text-body text-ash/70 mb-8">
            Каждый проект — это новая история успеха
          </div>
          <button className="px-8 py-4 bg-copper text-ash hover:bg-copper/90 transition-all duration-300 hover-glow">
            Обсудить ваш проект
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;