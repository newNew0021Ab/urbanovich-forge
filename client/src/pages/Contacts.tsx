import { Phone, Mail, Clock, MapPin, Instagram, MessageCircle } from 'lucide-react';
import craftsmanHands from '@/assets/craftsman-hands.jpg';

const Contacts = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Заголовок */}
      <section className="py-16 texture-concrete">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-5xl md:text-6xl mb-6 text-ash">
              Связь
            </h1>
            <div className="text-body text-ash/70 text-xl mb-8">
              Готов обсудить ваш проект и ответить на любые вопросы
            </div>
            
            <div className="text-mono text-copper">
              Кузница в Гродно, работает по всей Беларуси
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Изображение мастера */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden bg-steel/10">
                    <img
                      src={craftsmanHands}
                      alt="Руки мастера за работой"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-copper/20 -z-10" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-steel/30 -z-10" />
                </div>
              </div>

              {/* Контактная информация */}
              <div className="order-1 lg:order-2">
                <div className="space-y-8">
                  {/* Основные контакты */}
                  <div className="space-y-6">
                    <a 
                      href="tel:+375297855871"
                      className="group flex items-center gap-4 p-6 bg-steel/10 hover:bg-steel/20 transition-all duration-300 hover-glow"
                    >
                      <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center group-hover:bg-copper/30 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <div className="text-caption text-copper mb-1">Телефон</div>
                        <div className="text-display text-xl text-ash group-hover:text-copper transition-colors duration-300">
                          +375 29 785-58-71
                        </div>
                      </div>
                    </a>

                    <a 
                      href="mailto:sergeiurbanovich@yandex.by"
                      className="group flex items-center gap-4 p-6 bg-steel/10 hover:bg-steel/20 transition-all duration-300 hover-glow"
                    >
                      <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center group-hover:bg-copper/30 transition-colors duration-300">
                        <Mail className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <div className="text-caption text-copper mb-1">Email</div>
                        <div className="text-body text-ash group-hover:text-copper transition-colors duration-300">
                          sergeiurbanovich@yandex.by
                        </div>
                      </div>
                    </a>

                    <a 
                      href="https://instagram.com/sergeiurbanovichforge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-6 bg-steel/10 hover:bg-steel/20 transition-all duration-300 hover-glow"
                    >
                      <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center group-hover:bg-copper/30 transition-colors duration-300">
                        <Instagram className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <div className="text-caption text-copper mb-1">Instagram</div>
                        <div className="text-body text-ash group-hover:text-copper transition-colors duration-300">
                          @sergeiurbanovichforge
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Дополнительная информация */}
                  <div className="space-y-4 pt-6 border-t border-steel/20">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-copper" />
                      <div>
                        <div className="text-caption text-copper mb-1">Режим работы</div>
                        <div className="text-body text-ash/80">Пн–Пт, 09:00–18:00</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-copper" />
                      <div>
                        <div className="text-caption text-copper mb-1">Зона работы</div>
                        <div className="text-body text-ash/80">Гродно и вся Беларусь</div>
                      </div>
                    </div>
                  </div>

                  {/* Примечание о мастерской */}
                  <div className="bg-steel/5 p-6 border-l-2 border-copper/30">
                    <div className="text-mono text-dust/60 text-sm leading-relaxed">
                      «Адрес мастерской не публикуется.<br />
                      Выезд на объект — по договорённости.»
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Мессенджеры */}
      <section className="py-16 bg-steel/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-3xl text-ash mb-8">
              Удобный способ связи
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/375297855871"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 p-8 bg-steel/10 hover:bg-green-600/10 border border-steel/20 hover:border-green-600/30 transition-all duration-300 hover-glow"
              >
                <MessageCircle className="w-8 h-8 text-green-500" />
                <div>
                  <div className="text-display text-xl text-ash group-hover:text-green-500 transition-colors duration-300 mb-1">
                    WhatsApp
                  </div>
                  <div className="text-mono text-dust">
                    Быстрые ответы и фото проектов
                  </div>
                </div>
              </a>

              <a
                href="https://t.me/sergeiurbanovich"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 p-8 bg-steel/10 hover:bg-blue-600/10 border border-steel/20 hover:border-blue-600/30 transition-all duration-300 hover-glow"
              >
                <MessageCircle className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="text-display text-xl text-ash group-hover:text-blue-500 transition-colors duration-300 mb-1">
                    Telegram
                  </div>
                  <div className="text-mono text-dust">
                    Обсуждение технических деталей
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс обращения */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-3xl text-ash text-center mb-12">
              Как проходит первое обращение
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Звонок или сообщение',
                  description: 'Расскажите о своих пожеланиях, отправьте фото объекта'
                },
                {
                  step: '02',
                  title: 'Предварительная оценка',
                  description: 'Обсудим возможности, примерные сроки и стоимость'
                },
                {
                  step: '03',
                  title: 'Выезд на замер',
                  description: 'Бесплатный выезд для точных измерений и консультации'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-display text-4xl text-copper mb-4 animate-forge">
                    {item.step}
                  </div>
                  <h3 className="text-display text-lg text-ash mb-3">
                    {item.title}
                  </h3>
                  <div className="text-body text-ash/70 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="text-mono text-dust/60 mb-8">
                Среднее время ответа — менее часа в рабочее время
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+375297855871"
                  className="px-8 py-4 bg-copper text-ash hover:bg-copper/90 transition-all duration-300 hover-glow"
                >
                  Позвонить сейчас
                </a>
                <a 
                  href="https://wa.me/375297855871"
                  className="px-8 py-4 border border-copper text-copper hover:bg-copper/10 transition-all duration-300"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Зона обслуживания */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-3xl text-ash mb-8">
              География работы
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                'Гродно',
                'Минск',
                'Брест',
                'Лида',
                'Слоним',
                'Волковыск',
                'Новогрудок',
                'Вся Беларусь'
              ].map((city, index) => (
                <div key={index} className="text-ash/90 font-medium">
                  {city}
                </div>
              ))}
            </div>
            
            <div className="text-ash/70 mt-8">
              Выезд в другие регионы по договорённости
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;