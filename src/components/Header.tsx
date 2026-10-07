import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee, ChevronDown, Droplet, Sun, Utensils, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
  onNavigate?: (id: string) => void;
}

export default function Header({ onBookClick, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuDropdownOpen, setIsDesktopMenuDropdownOpen] = useState(false);
  const [isMobileMenuSubOpen, setIsMobileMenuSubOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection based on current scroll position
      const sections = [
        'home', 'menu-section', 'hot-drinks', 'cold-drinks', 'breakfast', 'lunch', 'bakery',
        'gallery', 'about', 'reviews', 'find-us', 'contact', 'booking'
      ];
      
      const scrollPosition = window.scrollY + 130;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu-section', id: 'menu-section', hasDropdown: true },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Find Us', href: '#find-us', id: 'find-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const menuSubLinks = [
    { label: 'All Menu Options', href: '#menu-section' },
    { label: 'Hot Drinks', href: '#hot-drinks', icon: <Coffee className="w-3.5 h-3.5" /> },
    { label: 'Cold Drinks', href: '#cold-drinks', icon: <Droplet className="w-3.5 h-3.5" /> },
    { label: 'Breakfast & Brunch', href: '#breakfast', icon: <Sun className="w-3.5 h-3.5" /> },
    { label: 'Lunch & Toasties', href: '#lunch', icon: <Utensils className="w-3.5 h-3.5" /> },
    { label: 'Fresh Bakery', href: '#bakery', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  const handleScrollTo = (href: string) => {
    // Always close mobile menu and desktop dropdown first
    setIsMobileMenuOpen(false);
    setIsDesktopMenuDropdownOpen(false);

    if (onNavigate) {
      onNavigate(href);
      return;
    }

    const cleanId = href.startsWith('#') ? href.substring(1) : href;

    if (cleanId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target = document.getElementById(cleanId);
    if (target) {
      // Ample breathing room to guarantee sticky navbar doesn't cover section headers
      const isMenuSubSection = ['hot-drinks', 'cold-drinks', 'breakfast', 'lunch', 'bakery'].includes(cleanId);
      const headerOffset = isMenuSubSection ? 140 : 95;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookTableAction = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuDropdownOpen(false);
    onBookClick();
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-walnut/95 shadow-lg py-3 backdrop-blur-md border-b border-white/5'
            : 'bg-gradient-to-b from-black/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#home');
              }}
              className="flex items-center space-x-2 text-cream group cursor-pointer"
              aria-label="Coffee Heaven Logo"
              id="logo-link"
            >
              <div className="p-2 bg-copper rounded-full text-cream shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                Coffee <span className="text-copper">Heaven</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
              {navLinks.map((link) => {
                const isCurrentActive =
                  activeSection === link.id ||
                  (link.id === 'menu-section' &&
                    ['hot-drinks', 'cold-drinks', 'breakfast', 'lunch', 'bakery'].includes(activeSection));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setIsDesktopMenuDropdownOpen(true)}
                      onMouseLeave={() => setIsDesktopMenuDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleScrollTo(link.href)}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                          isCurrentActive
                            ? 'bg-copper text-white shadow-sm'
                            : 'text-cream hover:text-copper hover:bg-white/5'
                        }`}
                        id="desktop-nav-menu"
                        aria-expanded={isDesktopMenuDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3 h-3 text-copper transition-transform duration-200" />
                      </button>

                      {/* Dropdown Menu accessing matching parts of the menu */}
                      <AnimatePresence>
                        {isDesktopMenuDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 mt-1.5 w-56 bg-walnut/98 border border-white/10 rounded-2xl shadow-2xl py-2 backdrop-blur-xl z-50 overflow-hidden"
                            id="desktop-menu-dropdown"
                          >
                            {menuSubLinks.map((sub, idx) => (
                              <button
                                key={sub.href}
                                onClick={() => handleScrollTo(sub.href)}
                                className={`w-full text-left px-4 py-2.5 text-xs text-cream/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2.5 cursor-pointer group ${
                                  idx === 0 ? 'border-b border-white/10 font-bold text-copper' : ''
                                }`}
                              >
                                {sub.icon && (
                                  <span className="text-copper group-hover:scale-110 transition-transform">
                                    {sub.icon}
                                  </span>
                                )}
                                <span>{sub.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isCurrentActive
                        ? 'bg-copper text-white shadow-sm'
                        : 'text-cream hover:text-copper hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Book a Table button (Desktop) & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBookTableAction}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 active:scale-95 transition-all duration-200 shadow-sm shadow-copper/20 hover:shadow-md cursor-pointer"
                aria-label="Book a table"
                id="header-book-btn"
              >
                Book a Table
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-cream hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-copper cursor-pointer"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-walnut border-b border-white/10 backdrop-blur-md overflow-hidden max-h-[85vh] overflow-y-auto"
              id="mobile-menu"
            >
              <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
                {/* Home to the top */}
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#home');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'home'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  Home
                </a>

                {/* Menu with Sub-Links */}
                <div className="rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5">
                    <button
                      onClick={() => handleScrollTo('#menu-section')}
                      className={`text-left text-sm font-medium transition-colors cursor-pointer ${
                        activeSection === 'menu-section' ||
                        ['hot-drinks', 'cold-drinks', 'breakfast', 'lunch', 'bakery'].includes(activeSection)
                          ? 'text-copper font-semibold'
                          : 'text-cream hover:text-copper'
                      }`}
                    >
                      Menu
                    </button>
                    <button
                      onClick={() => setIsMobileMenuSubOpen(!isMobileMenuSubOpen)}
                      className="p-1.5 text-copper hover:text-white cursor-pointer"
                      aria-label="Toggle menu categories"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileMenuSubOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile sub-links to specific parts of the menu */}
                  {isMobileMenuSubOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pl-5 pr-2 py-1 space-y-1 bg-black/20 rounded-xl my-1 border border-white/5"
                    >
                      {menuSubLinks.map((sub) => (
                        <button
                          key={sub.href}
                          onClick={() => handleScrollTo(sub.href)}
                          className="w-full text-left px-3 py-2 text-xs text-cream/80 hover:text-copper flex items-center space-x-2 cursor-pointer"
                        >
                          {sub.icon && <span className="text-copper">{sub.icon}</span>}
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Gallery */}
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#gallery');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'gallery'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  Gallery
                </a>

                {/* About */}
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#about');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'about'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  About
                </a>

                {/* Reviews */}
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#reviews');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'reviews'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  Reviews
                </a>

                {/* Find Us */}
                <a
                  href="#find-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#find-us');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'find-us'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  Find Us
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('#contact');
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'contact'
                      ? 'bg-copper text-white font-semibold'
                      : 'text-cream hover:text-copper hover:bg-white/5'
                  }`}
                >
                  Contact
                </a>

                {/* Book a Table (Mobile) */}
                <div className="pt-4 border-t border-white/10 px-4">
                  <button
                    onClick={handleBookTableAction}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 transition-colors shadow-md cursor-pointer"
                    id="mobile-book-btn"
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
