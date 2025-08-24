import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Услуги', href: '/services' },
  { name: 'Кейсы', href: '/cases' },
  { name: 'Процесс', href: '/process' },
  { name: 'Контакты', href: '/contacts' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-steel/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="text-display text-xl tracking-wider group-hover:text-primary transition-colors duration-300">
              <span className="font-light">Сергей</span>
              <span className="text-primary ml-2">Урбанович</span>
            </div>
            <div className="text-mono text-xs text-muted-foreground mt-1 tracking-wide">
              Кузница, Гродно
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-body text-sm tracking-wide transition-colors duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/order"
              className="px-6 py-2 text-sm text-display tracking-wider bg-gradient-to-r from-steel/20 to-primary/20 hover:from-primary/30 hover:to-steel/30 transition-all duration-300 border border-steel/30 hover:border-primary/50"
            >
              Заказать замер
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-6 h-6 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-foreground transform transition duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-foreground transform transition duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-foreground transform transition duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-steel/30">
            <nav className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-body text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/order"
                className="block px-6 py-3 text-center text-display tracking-wider bg-gradient-to-r from-steel/20 to-primary/20 hover:from-primary/30 hover:to-steel/30 transition-all duration-300 border border-steel/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Заказать замер
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}