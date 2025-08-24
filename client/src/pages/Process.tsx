import { useState } from 'react';
import { ChevronRight, Clock, Ruler, Hammer, Home } from 'lucide-react';

interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
  icon: any;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: '01',
    title: 'Замер',
    description: 'Выезд на объект, детальное обсуждение пожеланий, точные измерения всех параметров',
    details: [
      'Бесплатный выезд в пределах Гродно',
      'Обсуждение стиля и функциональности',
      'Фотофиксация места установки',
      'Консультация по материалам',
      'Предварительная смета'
    ],
    duration: '1 день',
    icon: Ruler,
    image: '/api/placeholder/800/600'
  },
  {
    id: 2,
    step: '02',
    title: 'Проект',
    description: 'Создание детального эскиза, расчёт материалов, согласование всех нюансов с заказчиком',
    details: [
      'Технический эскиз с размерами',
      '3D-визуализация сложных проектов',
      'Спецификация материалов',
      'Итоговая смета с гарантией цены',
      'Договор на изготовление'
    ],
    duration: '2-3 дня',
    icon: ChevronRight,
    image: '/api/placeholder/800/600'
  },
  {
    id: 3,
    step: '03',
    title: 'Ковка',
    description: 'Изготовление в мастерской с постоянным контролем качества на каждом этапе',
    details: [
      'Ручная ковка художественных элементов',
      'Сварочные работы на профессиональном оборудовании',
      'Механическая обработка деталей',
      'Антикоррозийная обработка',
      'Покраска в камере с полимеризацией'
    ],
    duration: '1-4 недели',
    icon: Hammer,
    image: '/api/placeholder/800/600'
  },
  {
    id: 4,
    step: '04',
    title: 'Монтаж',
    description: 'Профессиональная доставка и установка с соблюдением всех технологических требований',
    details: [
      'Доставка собственным транспортом',
      'Подготовка места установки',
      'Монтаж с проверкой геометрии',
      'Финишная обработка соединений',
      'Сдача объекта и гарантийный талон'
    ],
    duration: '1 день',
    icon: Home,
    image: '/api/placeholder/800/600'
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen pt-20">
      {/* Заголовок */}
      <section className="py-16 texture-concrete">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-ash">
              Процесс
            </h1>
            <div className="text-body text-ash/70 text-xl mb-8">
              Как создаётся каждое изделие — от первой встречи до финальной установки
            </div>
            
            <div className="text-mono text-copper">
              Проверенная схема, отточенная годами
            </div>
          </div>
        </div>
      </section>

      {/* Временная шкала - горизонтальная */}
      <section className="py-8 bg-steel/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8 overflow-x-auto pb-4">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      activeStep === step.id
                        ? 'border-copper bg-copper text-ash'
                        : 'border-steel text-ash/60 hover:border-copper/50'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </button>
                  
                  {index < processSteps.length - 1 && (
                    <div className="w-16 h-px bg-steel/30 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Активный шаг - детали */}
      {processSteps.map((step) => (
        activeStep === step.id && (
          <section key={step.id} className="py-16 animate-fade-in">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Контент */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-display text-4xl text-copper">
                        {step.step}
                      </div>
                      <div>
                        <h2 className="text-display text-3xl text-ash mb-2">
                          {step.title}
                        </h2>
                        <div className="flex items-center gap-4 text-mono text-dust">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <div className="text-body text-ash/80 text-lg mb-8 leading-relaxed">
                      {step.description}
                    </div>

                    {/* Детали */}
                    <div className="space-y-4">
                      <div className="text-caption text-copper mb-4">
                        Что включает этап:
                      </div>
                      
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-ash/70">
                          <div className="w-1.5 h-1.5 bg-copper mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Изображение */}
                  <div className="relative">
                    <div className="aspect-[4/3] bg-steel/20 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-steel/40 to-iron/60 flex items-center justify-center">
                        <step.icon className="w-24 h-24 text-copper/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      ))}

      {/* Принципы работы */}
      <section className="py-16 bg-steel/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-display text-3xl text-ash mb-6">
              Принципы работы
            </h2>
            <div className="text-body text-ash/70">
              То, что делает каждый проект особенным
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Честность',
                description: 'Прозрачное ценообразование, реальные сроки, никаких скрытых доплат'
              },
              {
                title: 'Качество',
                description: 'Только проверенные материалы, соблюдение всех технологий ковки'
              },
              {
                title: 'Сроки',
                description: 'Чёткое планирование, регулярные отчёты о ходе работ'
              },
              {
                title: 'Сервис',
                description: 'Гарантийное обслуживание, помощь в эксплуатации изделий'
              }
            ].map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-copper/30 transition-colors duration-300">
                  <div className="w-8 h-8 bg-copper rounded-full" />
                </div>
                <h3 className="text-display text-xl text-ash mb-3">
                  {principle.title}
                </h3>
                <div className="text-body text-ash/70 text-sm leading-relaxed">
                  {principle.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Средние сроки */}
      <section className="py-16 texture-steel">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-3xl text-ash mb-12">
              Средние сроки изготовления
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { item: 'Простые ворота', time: '1-2 недели' },
                { item: 'Художественные ворота', time: '2-3 недели' },
                { item: 'Перила стандартные', time: '1 неделя' },
                { item: 'Перила с ковкой', time: '2 недели' },
                { item: 'Мангал', time: '3-5 дней' },
                { item: 'Мебель', time: '2-4 недели' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-steel/10 hover:bg-steel/20 transition-colors duration-300">
                  <span className="text-ash/80">{item.item}</span>
                  <span className="text-copper font-medium">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-mono text-dust/60">
              * Сроки могут варьироваться в зависимости от сложности проекта
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-6 text-center">
          <div className="text-display text-2xl text-ash mb-4">
            Начнём с замера?
          </div>
          <div className="text-body text-ash/80 mb-8">
            Первичная консультация и выезд на объект — бесплатно
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+375297855871"
              className="px-8 py-4 bg-ash text-background font-medium hover:bg-ash/90 transition-all duration-300 hover-glow"
            >
              +375 29 785-58-71
            </a>
            <button className="px-8 py-4 border border-ash text-ash hover:bg-ash/10 transition-all duration-300">
              Оставить заявку
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;