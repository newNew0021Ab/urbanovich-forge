import { useState } from 'react';
import { X } from 'lucide-react';
import gatesImage from '@/assets/gates-portfolio.jpg';
import railingsImage from '@/assets/railings-portfolio.jpg';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  materials: string;
  duration: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Кованые ворота «Минск-Сити»',
    category: 'ворота',
    location: 'Минск',
    year: '2024',
    image: gatesImage,
    description: 'Элегантные ворота для частного дома в современном стиле. Сочетание классических кузнечных техник с современным дизайном.',
    materials: 'Сталь 3.5 мм, термическая обработка',
    duration: '2 недели'
  },
  {
    id: 2,
    title: 'Лестничные перила «Аристократ»',
    category: 'перила',
    location: 'Гродно',
    year: '2024',
    image: railingsImage,
    description: 'Изысканные перила для винтовой лестницы. Каждый элемент выкован вручную с максимальным вниманием к деталям.',
    materials: 'Сталь 4 мм, патинирование',
    duration: '3 недели'
  },
  {
    id: 3,
    title: 'Садовая мебель «Лофт»',
    category: 'мебель',
    location: 'Брест',
    year: '2023',
    image: gatesImage, // Будет заменено на специальное изображение
    description: 'Комплект садовой мебели в индустриальном стиле. Стол и четыре кресла с элементами художественной ковки.',
    materials: 'Сталь, дуб массив, воск',
    duration: '1 месяц'
  },
];

const categories = ['все', 'ворота', 'перила', 'лестницы', 'мебель', 'мангалы'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('все');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Заголовок */}
      <section className="py-16 texture-concrete">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-ash">
              Работы
            </h1>
            <div className="text-body text-ash/70 text-xl">
              Каждое изделие — это история, рассказанная металлом
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-steel/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'border-copper text-copper bg-copper/10'
                    : 'border-steel/50 text-ash/70 hover:border-copper/50 hover:text-copper'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden bg-steel/10 aspect-[4/3] hover-glow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-6">
                      <h3 className="text-display text-xl text-ash mb-2">
                        {item.title}
                      </h3>
                      <div className="text-mono text-copper text-sm">
                        {item.location}, {item.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-6">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-steel/50 hover:bg-copper/50 transition-colors duration-300 backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-ash" />
              </button>

              {/* Изображение */}
              <div className="aspect-video mb-8">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Информация */}
              <div className="p-8 bg-steel/10 backdrop-blur-sm">
                <h2 className="text-display text-3xl text-ash mb-4">
                  {selectedItem.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="text-caption text-copper mb-2">Проект</div>
                    <div className="text-body text-ash/80">
                      {selectedItem.description}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-caption text-copper mb-1">Материал</div>
                      <div className="text-mono text-ash/70">{selectedItem.materials}</div>
                    </div>
                    
                    <div>
                      <div className="text-caption text-copper mb-1">Срок изготовления</div>
                      <div className="text-mono text-ash/70">{selectedItem.duration}</div>
                    </div>
                    
                    <div>
                      <div className="text-caption text-copper mb-1">Локация</div>
                      <div className="text-mono text-ash/70">{selectedItem.location}, {selectedItem.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-6 text-center">
          <div className="text-display text-2xl text-ash mb-4">
            Есть идея проекта?
          </div>
          <div className="text-body text-ash/80 mb-8">
            Каждое изделие начинается с беседы
          </div>
          <button className="px-8 py-4 bg-ash text-background font-medium hover:bg-ash/90 transition-all duration-300 hover-glow">
            Обсудить проект
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;