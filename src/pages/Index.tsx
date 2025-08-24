import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroForge from '@/assets/hero-forge.jpg';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="relative min-h-screen flex items-center overflow-hidden texture-concrete">
        {/* Фоновое изображение */}
        <div className="absolute inset-0">
          <img 
            src={heroForge} 
            alt="Кузница Сергея Урбановича" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
          {/* Дополнительная текстура */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        </div>

        {/* Контент */}
        <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
          {/* Левая колонка с текстом */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="max-w-lg">
              {/* Основной заголовок */}
              <h1 className="text-display text-5xl md:text-7xl leading-none mb-6">
                <span className="block text-ash">Сергей</span>
                <span className="block text-copper animate-forge">Урбанович</span>
              </h1>

              {/* Подзаголовок */}
              <div className="text-caption text-dust mb-4">
                Кузница, Гродно
              </div>

              {/* Описание */}
              <div className="text-body text-ash/80 mb-6 space-y-2">
                <p>Премиум-ковка с 2006 года</p>
                <p>Работает по всей Беларуси</p>
              </div>

              {/* Дополнительная информация */}
              <div className="text-mono text-dust/60 mb-8">
                «Каждое изделие — как ритуал»
              </div>

              {/* Кнопка */}
              <Link 
                to="/portfolio" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-steel/30 border border-copper/30 hover:bg-copper/10 hover:border-copper/60 transition-all duration-300 hover-glow backdrop-blur-sm"
              >
                <span className="text-display text-lg text-ash">Смотреть портфолио</span>
                <ArrowRight className="w-5 h-5 text-copper group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Правая колонка - декоративная */}
          <div className="hidden md:block w-1/2">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Плавающие элементы */}
              <div className="relative">
                <div className="absolute top-20 right-20 w-2 h-2 bg-copper animate-spark" />
                <div className="absolute top-40 right-32 w-1 h-1 bg-glow-orange animate-spark" style={{animationDelay: '0.5s'}} />
                <div className="absolute top-60 right-16 w-1 h-1 bg-copper animate-spark" style={{animationDelay: '1s'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Индикатор прокрутки */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-copper/60" />
        </div>
      </section>

      {/* Краткое введение */}
      <section className="py-20 texture-steel">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-caption text-copper mb-6">
              О мастерской
            </div>
            
            <h2 className="text-display text-4xl mb-8 text-ash">
              Не галерея, не магазин, не портфолио
            </h2>
            
            <div className="text-body text-ash/80 text-xl leading-relaxed space-y-6">
              <p>
                Этот сайт — цифровое продолжение мастерской. Здесь типографика говорит о тонкости, 
                UX говорит о профессионализме, контент говорит о репутации.
              </p>
              
              <p className="text-lg text-dust">
                Молчание говорит о силе.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group hover-glow cursor-pointer">
                <div className="text-display text-2xl text-copper mb-2">18+</div>
                <div className="text-body text-ash/70">лет опыта</div>
              </div>
              
              <div className="group hover-glow cursor-pointer">
                <div className="text-display text-2xl text-copper mb-2">500+</div>
                <div className="text-body text-ash/70">проектов</div>
              </div>
              
              <div className="group hover-glow cursor-pointer">
                <div className="text-display text-2xl text-copper mb-2">100%</div>
                <div className="text-body text-ash/70">качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-6 text-center">
          <div className="text-body text-ash/90 text-lg mb-8">
            Готовы обсудить ваш проект?
          </div>
          
          <Link 
            to="/contacts" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-ash text-background font-medium hover:bg-ash/90 transition-all duration-300 hover-glow"
          >
            Связаться с мастером
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;