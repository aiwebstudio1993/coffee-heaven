import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  // Simple state counters that animate when section is in view
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    rating: 0,
    ingredients: 0
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime = Date.now();
    const duration = 2000; // 2 seconds

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const easeProgress = progress * (2 - progress);

      setCounters({
        years: Math.round(easeProgress * 12),
        customers: Math.round(easeProgress * 25000),
        rating: Number((easeProgress * 4.9).toFixed(1)),
        ingredients: Math.round(easeProgress * 100)
      });

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Visual Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sage/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Images Grid with Gentle Zoom & Motion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true, margin: '-100px' }}
            onViewportEnter={() => setIsInView(true)}
            className="lg:col-span-6 relative"
          >
            {/* Elegant Background Border Shape */}
            <div className="absolute -inset-4 border-2 border-dashed border-beige/60 rounded-3xl -z-10 transform rotate-1" />

            {/* Main Cafe Interior Image with Zoom on Hover */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-4/3 group">
              <img
                src="/images/rustic_modern_cafe_1791376119415.jpg"
                alt="Cozy sunlit rustic-modern interior of Coffee Heaven with reclaimed oak tables and warm pendant lights"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-xs font-semibold uppercase tracking-widest bg-copper/90 px-3 py-1.5 rounded-full">
                  Step Inside The Comfort
                </span>
              </div>
            </div>

            {/* Overlapping Floating Small Image (Authentic Detail) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-60 aspect-square overflow-hidden rounded-2xl shadow-2xl border-4 border-white hidden sm:block group"
            >
              <img
                src="/images/artisan_coffee_detail_1791376072013.jpg"
                alt="Barista pouring steaming freshly brewed artisan coffee at Coffee Heaven"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Our Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs uppercase font-semibold tracking-widest text-copper">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 mb-6 leading-tight">
              A Haven of Taste, Real Coffee & Comfort
            </h2>
            <div className="w-16 h-1 bg-copper mb-8 rounded-full" />

            <div className="space-y-6 text-charcoal/80 font-light text-base leading-relaxed">
              <p>
                Coffee Heaven began with one goal—bringing people together over the authentic taste of real coffee and heartwarming homemade food. Nestled in the heart of Stafford, we’ve created a rustic yet modern sanctuary for coffee connoisseurs, food lovers, families, and furry companions alike.
              </p>
              <p>
                Every single cup is poured with precision and care, celebrating ethical single-origin beans roasted to perfection. From our daily fresh sourdough breakfasts to nourishing homemade lunches and oven-warm pastries, we bring countryside authenticity together with modern barista excellence.
              </p>
              <p className="italic font-serif text-walnut/90 border-l-4 border-copper/50 pl-4 py-1 text-lg">
                "Our doors are always open, the atmosphere is cozy, and the coffee is brewing. Welcome to your Coffee Heaven."
              </p>
            </div>

            {/* Statistics Dashboard Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-12 pt-8 border-t border-beige/60">
              
              {/* Stat 1 */}
              <div className="flex items-start space-x-3" id="stat-years">
                <div className="p-2.5 bg-copper/10 rounded-xl text-copper mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-walnut flex items-baseline">
                    <span>{counters.years}</span>
                    <span className="text-copper text-lg ml-0.5">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-charcoal/60 uppercase tracking-wider font-semibold mt-1">
                    Years Serving
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start space-x-3" id="stat-customers">
                <div className="p-2.5 bg-sage/10 rounded-xl text-sage mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-walnut flex items-baseline">
                    <span>{counters.customers.toLocaleString()}</span>
                    <span className="text-sage text-lg ml-0.5">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-charcoal/60 uppercase tracking-wider font-semibold mt-1">
                    Happy Guests
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start space-x-3" id="stat-rating">
                <div className="p-2.5 bg-gold/10 rounded-xl text-gold mt-1">
                  <Star className="w-5 h-5 fill-gold/25" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-walnut flex items-baseline">
                    <span>{counters.rating}</span>
                    <span className="text-gold text-sm ml-1">★</span>
                  </div>
                  <div className="text-xs sm:text-sm text-charcoal/60 uppercase tracking-wider font-semibold mt-1">
                    Average Rating
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-start space-x-3" id="stat-ingredients">
                <div className="p-2.5 bg-forest/10 rounded-xl text-forest mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-walnut flex items-baseline">
                    <span>{counters.ingredients}</span>
                    <span className="text-forest text-sm ml-0.5">%</span>
                  </div>
                  <div className="text-xs sm:text-sm text-charcoal/60 uppercase tracking-wider font-semibold mt-1">
                    Fresh Ingredients
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
