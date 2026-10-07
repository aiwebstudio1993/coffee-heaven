import { motion } from 'motion/react';
import { Sprout, Bean, CakeSlice, PawPrint } from 'lucide-react';

export default function Highlights() {
  const cards = [
    {
      icon: <Sprout className="w-8 h-8 text-forest" />,
      title: 'Locally Sourced Ingredients',
      description: 'We believe in supporting local. Our eggs, meats, and vegetables are delivered daily from organic nearby family-run farms and award-winning producers.',
      borderColor: 'border-forest/20',
      bgColor: 'bg-forest/5'
    },
    {
      icon: <Bean className="w-8 h-8 text-copper" />,
      title: 'Fresh Artisan Coffee',
      description: 'Our house blend consists of ethically sourced 100% Arabica beans, medium-roasted locally every single week to unlock rich notes of walnut, caramel, and chocolate.',
      borderColor: 'border-copper/20',
      bgColor: 'bg-copper/5'
    },
    {
      icon: <CakeSlice className="w-8 h-8 text-gold" />,
      title: 'Homemade Cakes',
      description: 'All cakes, pastries, and sweet treats on display are hand-mixed, layered, and baked from scratch in our own kitchen every single morning.',
      borderColor: 'border-gold/20',
      bgColor: 'bg-gold/5'
    },
    {
      icon: <PawPrint className="w-8 h-8 text-sage" />,
      title: 'Dog Friendly',
      description: 'Well-behaved dogs are warmly welcome in our cozy indoor seating areas and courtyard garden. Ask our baristas for free gourmet dog biscuits!',
      borderColor: 'border-sage/20',
      bgColor: 'bg-sage/5'
    }
  ];

  return (
    <section className="py-24 bg-cream/30 border-b border-beige/40 relative overflow-hidden" id="highlights">
      {/* Wood pattern or linen element look using CSS */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-copper/20 via-walnut/30 to-sage/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">The Coffee Heaven Standard</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 leading-tight">
            Crafted with Love & Integrity
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="highlights-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 bg-white rounded-2xl border ${card.borderColor} shadow-sm hover:shadow-xl hover:border-copper/40 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className={`p-4 rounded-xl ${card.bgColor} inline-block mb-6`}>
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-walnut mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
              <div className="w-10 h-0.5 bg-beige group-hover:bg-copper mt-6 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
