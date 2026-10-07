import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reviewsData } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2] border-t border-b border-beige/40 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Decorative background visual elements */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-beige/40 select-none pointer-events-none hidden md:block">
        <Quote className="w-48 h-48 rotate-180 transform" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">Kind Words</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 leading-tight">
            Guest Testimonials
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-3xl border border-beige/40 shadow-xl p-8 sm:p-12 md:px-16"
              id={`review-slide-${activeIndex}`}
            >
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < reviewsData[activeIndex].rating
                        ? 'text-gold fill-gold'
                        : 'text-beige'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Comment */}
              <blockquote className="font-serif text-lg sm:text-2xl font-medium text-walnut italic leading-relaxed mb-8">
                "{reviewsData[activeIndex].comment}"
              </blockquote>

              {/* Author & Info */}
              <div className="flex flex-col items-center">
                <span className="font-bold text-walnut uppercase tracking-wider text-sm sm:text-base">
                  {reviewsData[activeIndex].name}
                </span>
                <span className="text-xs text-charcoal/50 font-semibold uppercase tracking-wider mt-1">
                  Verified Local Guest • {reviewsData[activeIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4 mt-8" id="reviews-nav">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white border border-beige/60 text-walnut hover:bg-copper hover:text-white hover:border-copper transition-all duration-200 shadow-sm"
            aria-label="Previous testimonial"
            id="review-prev-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Index Dots */}
          <div className="flex space-x-2">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-copper' : 'bg-beige hover:bg-copper/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white border border-beige/60 text-walnut hover:bg-copper hover:text-white hover:border-copper transition-all duration-200 shadow-sm"
            aria-label="Next testimonial"
            id="review-next-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
