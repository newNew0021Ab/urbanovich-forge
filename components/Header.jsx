'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Услуги', href: '/services' },
  { name: 'Кейсы', href: '/cases' },
  { name: 'О мастерской', href: '/about' },
  { name: 'Контакты', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-steel/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-display text-xl tracking-wider group-hover:text-copper transition-colors duration-300">
              <span className="font-light">Сергей</span>
              <span className="text-copper ml-2">Урбанович</span>
            </div>
            <div className="text-mono text-xs text-text-muted mt-1 tracking-wide">
              Кузница, Гродно
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-serif text-sm tracking-wide text-text-muted hover:text-copper transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/order"
              className="metal-frame px-6 py-2 text-sm text-display tracking-wider bg-gradient-to-r from-steel/20 to-copper/20 hover:from-copper/30 hover:to-steel/30 transition-all duration-300 hover-glow"
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
            <motion.span
              className="absolute left-0 block h-0.5 w-6 bg-text transform transition duration-300"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -6,
              }}
            />
            <motion.span
              className="absolute left-0 block h-0.5 w-6 bg-text transform transition duration-300"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="absolute left-0 block h-0.5 w-6 bg-text transform transition duration-300"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? 0 : 6,
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 glass border-t border-steel/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="px-6 py-8 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-serif text-lg text-text-muted hover:text-copper transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/order"
                  className="block metal-frame px-6 py-3 text-center text-display tracking-wider bg-gradient-to-r from-steel/20 to-copper/20 hover:from-copper/30 hover:to-steel/30 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Заказать замер
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}