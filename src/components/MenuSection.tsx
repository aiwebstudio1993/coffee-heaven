import { Leaf, Award, Coffee, Droplet, Sun, Utensils, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import {
  hotDrinksMenu,
  coldDrinksMenu,
  breakfastMenu,
  lunchMenu,
  bakeryMenu,
  DrinkItem
} from '../data';

interface MenuSectionProps {
  onCategoryClick?: (id: string) => void;
}

export default function MenuSection({ onCategoryClick }: MenuSectionProps) {
  const jumpLinks = [
    { id: 'hot-drinks', label: 'Hot Drinks', icon: <Coffee className="w-3.5 h-3.5" /> },
    { id: 'cold-drinks', label: 'Cold Drinks', icon: <Droplet className="w-3.5 h-3.5" /> },
    { id: 'breakfast', label: 'Breakfast & Brunch', icon: <Sun className="w-3.5 h-3.5" /> },
    { id: 'lunch', label: 'Lunch & Toasties', icon: <Utensils className="w-3.5 h-3.5" /> },
    { id: 'bakery', label: 'Fresh Bakery', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  const handleJump = (id: string) => {
    if (onCategoryClick) {
      onCategoryClick(id);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 140; // accounts for top header + quick jump bar
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderDietaryBadges = (item: MenuItem | DrinkItem) => {
    const isVegetarian = 'isVegetarian' in item ? item.isVegetarian : false;
    const isVegan = 'isVegan' in item ? item.isVegan : false;
    const isGlutenFree = 'isGlutenFree' in item ? item.isGlutenFree : false;

    if (!isVegetarian && !isVegan && !isGlutenFree) return null;

    return (
      <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-beige/40">
        {isVegetarian && (
          <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-forest" title="Vegetarian">
            <Leaf className="w-3 h-3 text-forest" />
            <span>Vegetarian</span>
          </span>
        )}
        {isVegan && (
          <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-forest" title="Vegan">
            <Leaf className="w-3 h-3 text-forest" />
            <span>Vegan</span>
          </span>
        )}
        {isGlutenFree && (
          <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-amber-800" title="Gluten Free">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Gluten Free</span>
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="menu-section" className="py-24 bg-[#FAF7F2] relative paper-texture scroll-mt-24 sm:scroll-mt-28">
      {/* Subtle wood and linen divider on top */}
      <div className="w-full h-1 bg-gradient-to-r from-copper/20 via-walnut/30 to-sage/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">
            Artisan Craft & Fresh Food
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 leading-tight">
            Coffee Heaven Menu
          </h2>
          <p className="text-charcoal/80 font-light text-sm sm:text-base mt-3 leading-relaxed">
            Slow-poured single-origin coffee, handcrafted specialty hot & cold drinks, oven-fresh breakfast pastries, and artisan sourdough lunch toasties.
          </p>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        {/* Quick-Jump Menu Navigation Bar */}
        <div className="sticky top-20 z-20 py-3 mb-16 bg-[#FAF7F2]/90 backdrop-blur-md border-y border-beige/60">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3" id="menu-quick-jumps">
            {jumpLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleJump(link.id)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-walnut bg-white border border-beige/60 hover:bg-copper hover:text-white hover:border-copper transition-all duration-200 shadow-sm flex items-center space-x-1.5 cursor-pointer"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {/* SUB-SECTION 1: HOT DRINKS */}
          <section id="hot-drinks" className="scroll-mt-32 sm:scroll-mt-36">
            <div className="flex items-center space-x-3 mb-8 border-b border-beige/60 pb-4">
              <div className="p-2.5 bg-copper/10 text-copper rounded-xl">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                  Specialty Coffee & Hot Drinks
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-light mt-0.5">
                  Roasted weekly with ethical single-origin beans, pulled with precision by our baristas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotDrinksMenu.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-beige/50 hover:border-copper/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group relative"
                >
                  {item.isPopular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-white bg-copper px-2.5 py-0.5 rounded-full shadow-sm">
                      <Award className="w-3 h-3" />
                      <span>Barista Favorite</span>
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg font-bold text-walnut group-hover:text-copper transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-copper tabular-nums whitespace-nowrap ml-2">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffee Customization Bar */}
            <div className="mt-8 p-4 bg-white rounded-2xl border border-beige/60 text-center max-w-3xl mx-auto text-xs text-charcoal/80 font-light shadow-sm">
              <span className="font-serif font-bold text-walnut block sm:inline mr-2">Customise Your Cup:</span>
              <span>Oat, Almond, Coconut, or Soy milk (+50p) · Extra espresso shot (+60p) · Vanilla, Caramel, or Hazelnut syrups (+50p) · Decaf available on all coffees at no extra charge.</span>
            </div>
          </section>

          {/* SUB-SECTION 2: COLD DRINKS */}
          <section id="cold-drinks" className="scroll-mt-32 sm:scroll-mt-36">
            <div className="flex items-center space-x-3 mb-8 border-b border-beige/60 pb-4">
              <div className="p-2.5 bg-copper/10 text-copper rounded-xl">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                  Cold Brews, Iced Lattes & Refreshers
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-light mt-0.5">
                  Slow cold-steeped coffees, fresh squeezed juices, whole fruit smoothies, and botanical iced teas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coldDrinksMenu.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-beige/50 hover:border-copper/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group relative"
                >
                  {item.isPopular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-white bg-copper px-2.5 py-0.5 rounded-full shadow-sm">
                      <Award className="w-3 h-3" />
                      <span>Summer Favorite</span>
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg font-bold text-walnut group-hover:text-copper transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-copper tabular-nums whitespace-nowrap ml-2">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUB-SECTION 3: BREAKFAST & BRUNCH */}
          <section id="breakfast" className="scroll-mt-32 sm:scroll-mt-36">
            <div className="flex items-center space-x-3 mb-8 border-b border-beige/60 pb-4">
              <div className="p-2.5 bg-copper/10 text-copper rounded-xl">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                  Breakfast & Morning Bakes
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-light mt-0.5">
                  Served all morning until 12:00pm. Crafted with local Staffordshire eggs, organic sourdough, and farm butter.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {breakfastMenu.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-beige/50 hover:border-copper/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group relative"
                >
                  {item.isPopular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-white bg-copper px-2.5 py-0.5 rounded-full shadow-sm">
                      <Award className="w-3 h-3" />
                      <span>Popular Choice</span>
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg font-bold text-walnut group-hover:text-copper transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-copper tabular-nums whitespace-nowrap ml-2">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {renderDietaryBadges(item)}
                </div>
              ))}
            </div>

            <div className="mt-6 p-3.5 bg-white/70 rounded-xl border border-beige/50 text-center max-w-2xl mx-auto text-xs text-charcoal/70 font-light">
              All sourdough bread is baked fresh each morning using stoneground organic grains. Gluten-free bread available on request.
            </div>
          </section>

          {/* SUB-SECTION 4: LUNCH & TOASTIES */}
          <section id="lunch" className="scroll-mt-32 sm:scroll-mt-36">
            <div className="flex items-center space-x-3 mb-8 border-b border-beige/60 pb-4">
              <div className="p-2.5 bg-copper/10 text-copper rounded-xl">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                  Artisan Toasties & Light Lunches
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-light mt-0.5">
                  Served daily from 12:00pm. Golden pressed sourdough toasties, warm focaccia, and daily homemade soup.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {lunchMenu.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-beige/50 hover:border-copper/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group relative"
                >
                  {item.isPopular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-white bg-copper px-2.5 py-0.5 rounded-full shadow-sm">
                      <Award className="w-3 h-3" />
                      <span>Lunch Favorite</span>
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg font-bold text-walnut group-hover:text-copper transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-copper tabular-nums whitespace-nowrap ml-2">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {renderDietaryBadges(item)}
                </div>
              ))}
            </div>
          </section>

          {/* SUB-SECTION 5: FRESH BAKERY */}
          <section id="bakery" className="scroll-mt-32 sm:scroll-mt-36">
            <div className="flex items-center space-x-3 mb-8 border-b border-beige/60 pb-4">
              <div className="p-2.5 bg-copper/10 text-copper rounded-xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                  Daily Pastries & Cake Slices
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-light mt-0.5">
                  Handcrafted and baked from scratch every morning to pair perfectly with your favorite coffee roast.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {bakeryMenu.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-beige/50 hover:border-copper/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group relative"
                >
                  {item.isPopular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-white bg-copper px-2.5 py-0.5 rounded-full shadow-sm">
                      <Award className="w-3 h-3" />
                      <span>Freshly Baked</span>
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg font-bold text-walnut group-hover:text-copper transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-copper tabular-nums whitespace-nowrap ml-2">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {renderDietaryBadges(item)}
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </section>
  );
}
