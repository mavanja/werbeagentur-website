'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Container } from '../ui';

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-header
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3' 
            : 'bg-transparent py-5'
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-10 flex items-center gap-2 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-heading font-bold text-xl">W</span>
              </div>
              <span className={`
                font-heading font-bold text-xl
                transition-colors duration-300
                ${isScrolled ? 'text-primary' : 'text-primary'}
              `}>
                Werbeagentur
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    font-body font-medium text-body-sm
                    relative
                    transition-colors duration-300
                    hover:text-secondary
                    ${isScrolled ? 'text-neutral-700' : 'text-neutral-700'}
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                    after:bg-secondary after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="primary" size="md">
                Beratung anfragen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`
                    w-full h-0.5 bg-primary rounded-full
                    transition-all duration-300 origin-center
                    ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
                  `}
                />
                <span
                  className={`
                    w-full h-0.5 bg-primary rounded-full
                    transition-all duration-300
                    ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}
                  `}
                />
                <span
                  className={`
                    w-full h-0.5 bg-primary rounded-full
                    transition-all duration-300 origin-center
                    ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                  `}
                />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-mobile-menu lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8 p-8"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      font-heading font-bold text-2xl text-white
                      hover:text-secondary transition-colors duration-300
                    "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navigation.length * 0.05 }}
                className="mt-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Beratung anfragen
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
