import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
  onNavigate?: (id: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Menu', id: 'menu-section' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'About', id: 'about' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Find Us', id: 'find-us' },
  { label: 'Contact', id: 'contact' },
];

// Scrolls to a section. scrollIntoView respects each section's scroll-mt
// spacing (so the sticky header never covers titles) and works whatever
// element is doing the scrolling, including inside preview frames.
export function scrollToId(id: string) {
  const cleanId = id.startsWith('#') ? id.slice(1) : id;
  const target = document.getElementById(cleanId);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const pos = window.scrollY + 130;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu first, then scroll once it has closed.
  const goTo = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const wasOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    setTimeout(() => scrollToId(id), wasOpen ? 300 : 0);
  };

  const bookTable = () => {
    const wasOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    setTimeout(onBookClick, wasOpen ? 300 : 0);
  };

  const linkClass = (id: string, mobile = false) =>
    `${mobile ? 'block px-4 py-3 rounded-lg text-base' : 'px-3.5 py-2 rounded-full text-xs tracking-wide'} font-semibold transition-colors duration-200 cursor-pointer ${
      activeSection === id ? 'bg-copper text-white shadow-sm' : 'text-cream hover:text-copper hover:bg-white/5'
    }`;

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-walnut/95 shadow-lg py-3 backdrop-blur-md border-b border-white/5'
          : 'bg-gradient-to-b from-black/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={goTo('home')}
            className="flex items-center space-x-2 text-cream group cursor-pointer"
            aria-label="Coffee Heaven - back to top"
            id="logo-link"
          >
            <div className="p-2 bg-copper rounded-full text-cream shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              Coffee <span className="text-copper">Heaven</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={goTo(link.id)} className={linkClass(link.id)}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book a Table + mobile toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={bookTable}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
              id="header-book-btn"
            >
              Book a Table
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-md text-cream hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-copper cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: a simple full-width list */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-walnut overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={goTo(link.id)} className={linkClass(link.id, true)}>
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <button
                  onClick={bookTable}
                  className="w-full px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 transition-colors shadow-md cursor-pointer"
                  id="mobile-book-btn"
                >
                  Book a Table
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
