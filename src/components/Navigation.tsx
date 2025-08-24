import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/services', label: 'Услуги' },
    { path: '/process', label: 'Процесс' },
    { path: '/cases', label: 'Кейсы' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-steel/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="group">
          <div className="text-display text-2xl hover-glow">
            <span className="text-ash">С.</span>
            <span className="text-copper ml-1">Урбанович</span>
          </div>
          <div className="text-mono text-xs text-dust mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Кузница, Гродно
          </div>
        </Link>

        {/* Меню */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm tracking-wider transition-all duration-300 hover-underline ${
                  isActive 
                    ? 'text-copper' 
                    : 'text-ash hover:text-copper'
                }`}
              >
                {item.label}
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Мобильное меню - простое, в стиле минимализма */}
        <div className="md:hidden">
          <div className="text-caption text-dust">
            Меню
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;