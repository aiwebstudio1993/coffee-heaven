import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryData } from '../data';
import { Camera, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { label: 'Show All', id: 'all' },
    { label: 'Artisan Coffee', id: 'coffee' },
    { label: 'Our Plates', id: 'food' },
    { label: 'Cakes & Treats', id: 'dessert' },
    { label: 'Warm Interior', id: 'interior' },
    { label: 'Barista Magic', id: 'barista' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">Capturing Moments</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 leading-tight">
            Our Countryside Oasis
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-copper text-white shadow-md'
                  : 'bg-[#FAF7F2] text-walnut hover:bg-beige/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest-style Masonry Gallery */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          id="gallery-masonry"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid bg-cream rounded-2xl overflow-hidden relative group shadow-sm cursor-pointer border border-beige/30"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white mb-3 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-copper font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Small Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-charcoal/70 text-sm font-light">
            Sharing your experience with us? Tag us on Instagram to be featured!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-copper hover:text-copper/80 font-semibold text-sm mt-2 transition-colors"
          >
            <Camera className="w-4 h-4" />
            <span>@TheRusticOakStafford</span>
          </a>
        </div>

      </div>
    </section>
  );
}
