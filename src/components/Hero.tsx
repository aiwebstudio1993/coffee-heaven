import { motion } from 'motion/react';
import { ChevronDown, Coffee } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onViewMenuClick: () => void;
}

export default function Hero({ onBookClick, onViewMenuClick }: HeroProps) {
  // SVG steam animations variables
  const steamVariants = {
    animate1: {
      y: [0, -30, -50],
      x: [0, 5, -5, 0],
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.1,
      },
    },
    animate2: {
      y: [0, -40, -65],
      x: [0, -7, 7, -3],
      opacity: [0, 0.5, 0],
      scale: [0.7, 1.1, 0.8],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1.2,
      },
    },
    animate3: {
      y: [0, -35, -55],
      x: [0, 3, -3, 2],
      opacity: [0, 0.5, 0],
      scale: [0.9, 1.3, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.7,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-walnut"
    >
      {/* Immersive Hero Image */}
      <div className="absolute inset-0 z-0 bg-walnut">
        <img
          src="/images/hero_coffee_pour_1791376059674.jpg"
          alt="Classic artisan coffee getting smoothly poured into a handcrafted ceramic cup on a weathered oak wood table at Coffee Heaven"
          className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-[1.05]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Visual Warmth Overlay with subtle rustic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-walnut/95 via-black/40 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(43,28,20,0.6)_100%)]" />
      </div>

      {/* Decorative Steam / Coffee Cup Floating Container */}
      <div className="absolute bottom-1/4 right-8 lg:right-16 hidden xl:flex flex-col items-center z-10 select-none">
        <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center">
          {/* Animated Steam */}
          <div className="absolute -top-12 flex space-x-2">
            <motion.svg
              width="10"
              height="40"
              viewBox="0 0 10 40"
              className="text-white/40 fill-none stroke-current stroke-2"
              variants={steamVariants}
              animate="animate1"
            >
              <path d="M5,40 C8,30 2,20 5,10 C8,5 2,0 5,0" />
            </motion.svg>
            <motion.svg
              width="12"
              height="40"
              viewBox="0 0 12 40"
              className="text-white/30 fill-none stroke-current stroke-2"
              variants={steamVariants}
              animate="animate2"
            >
              <path d="M6,40 C2,30 10,20 6,10 C2,5 10,0 6,0" />
            </motion.svg>
            <motion.svg
              width="10"
              height="40"
              viewBox="0 0 10 40"
              className="text-white/35 fill-none stroke-current stroke-2"
              variants={steamVariants}
              animate="animate3"
            >
              <path d="M5,40 C2,30 8,20 5,10 C2,5 8,0 5,0" />
            </motion.svg>
          </div>
          {/* Coffee cup */}
          <div className="text-copper filter drop-shadow-[0_0_12px_rgba(200,125,85,0.5)]">
            <Coffee className="w-12 h-12" />
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-cream/80 mt-2 font-medium">
            Classic Pour
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start w-full">
        {/* Animated Main Heading: Discover the taste of real coffee */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] mb-10 max-w-4xl text-left"
          style={{ textWrap: 'balance', textAlign: 'left' }}
          id="hero-heading"
        >
          Discover the taste of{' '}
          <span className="text-beige italic font-normal">real coffee</span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-start justify-start w-auto"
          id="hero-ctas"
        >
          <button
            onClick={onViewMenuClick}
            className="inline-flex items-center justify-start px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md shadow-copper/25 text-left gap-1.5"
            style={{ textAlign: 'left' }}
            id="hero-menu-btn"
          >
            <Coffee className="w-3.5 h-3.5 shrink-0" />
            <span>View Menu</span>
          </button>
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-cream/60 hover:text-white cursor-pointer transition-colors">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={onViewMenuClick}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
