import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-steel/20 border-t border-steel/30 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-display text-xl tracking-wider mb-4">
              <span className="font-light">Сергей</span>
              <span className="text-primary ml-2">Урбанович</span>
            </div>
            <p className="text-body text-muted-foreground mb-4 max-w-md">
              Премиальная художественная ковка ручной работы. 
              Создаём изделия, которые живут десятилетиями.
            </p>
            <div className="text-mono text-sm text-muted-foreground">
              <p>18+ лет опыта • 500+ проектов</p>
              <p>Гродно, работаем по всей Беларуси</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-display text-lg mb-4 text-primary">Услуги</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300">
                  Ворота и калитки
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300">
                  Перила и лестницы
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300">
                  Мебель и интерьер
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300">
                  Мангалы и барбекю
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-display text-lg mb-4 text-primary">Контакты</h3>
            <div className="space-y-2 text-body text-muted-foreground">
              <p>
                <a 
                  href="tel:+375297855871" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  +375 29 785-58-71
                </a>
              </p>
              <p>
                <a 
                  href="mailto:sergeiurbanovich@yandex.by" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  sergeiurbanovich@yandex.by
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/sergeiurbanovichforge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  @sergeiurbanovichforge
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-mono text-sm text-muted-foreground">
            © {currentYear} Кузнечная мастерская Сергея Урбановича
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}