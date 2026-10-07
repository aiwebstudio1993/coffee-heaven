import { MenuItem, Review, GalleryItem } from './types';

export interface DrinkItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'specialty' | 'tea' | 'cold-coffee' | 'refresher' | 'smoothie';
  isPopular?: boolean;
  dietary?: string;
}

export const hotDrinksMenu: DrinkItem[] = [
  {
    id: 'hd1',
    name: 'Espresso',
    price: 2.60,
    description: 'Double shot of our ethically sourced medium-dark house roast with golden crema and notes of cacao.',
    category: 'coffee'
  },
  {
    id: 'hd2',
    name: 'Americano / Long Black',
    price: 3.10,
    description: 'Double espresso pulled over hot filtered mineral water for a clean, full-bodied aromatic cup.',
    category: 'coffee'
  },
  {
    id: 'hd3',
    name: 'Flat White',
    price: 3.50,
    description: 'Silky micro-foamed organic milk over a rich double ristretto extraction. Balanced and velvety.',
    category: 'coffee',
    isPopular: true
  },
  {
    id: 'hd4',
    name: 'Cappuccino',
    price: 3.50,
    description: 'Equal thirds espresso, steamed milk, and dense airy froth, dusted with raw Belgian cacao.',
    category: 'coffee'
  },
  {
    id: 'hd5',
    name: 'Caffè Latte',
    price: 3.60,
    description: 'Smooth double espresso layered with velvety steamed milk and a delicate top foam blanket.',
    category: 'coffee'
  },
  {
    id: 'hd6',
    name: 'Spanish Latte (Cortado con Leche)',
    price: 3.90,
    description: 'Double espresso blended with steamed milk and a touch of condensed sweet milk and cinnamon.',
    category: 'coffee',
    isPopular: true
  },
  {
    id: 'hd7',
    name: 'Caffè Mocha',
    price: 3.95,
    description: 'Single-origin espresso harmonized with melted 70% Belgian dark chocolate and silky milk.',
    category: 'coffee'
  },
  {
    id: 'hd8',
    name: 'Cortado',
    price: 3.20,
    description: 'Spanish classic with equal parts espresso and lightly textured warm milk in a rock glass.',
    category: 'coffee'
  },
  {
    id: 'hd9',
    name: 'V60 Single-Origin Pour Over',
    price: 4.20,
    description: 'Hand-dripped slow pour-over showcasing weekly rotated Ethiopian or Colombian micro-lot beans.',
    category: 'coffee',
    isPopular: true
  },
  {
    id: 'hd10',
    name: 'Spiced Sticky Chai Latte',
    price: 3.80,
    description: 'Stone-ground whole spices and black Assam tea slow-steeped with organic oat milk and raw honey.',
    category: 'specialty',
    isPopular: true
  },
  {
    id: 'hd11',
    name: 'Ceremonial Matcha Latte',
    price: 4.10,
    description: 'First-harvest Uji Japanese ceremonial green tea matcha whisked to order with velvety oat milk.',
    category: 'specialty'
  },
  {
    id: 'hd12',
    name: 'Velvet Hot Chocolate',
    price: 3.90,
    description: 'Melted Belgian chocolate flakes, steamed whole milk, topped with toasted marshmallow foam.',
    category: 'specialty'
  },
  {
    id: 'hd13',
    name: 'London Fog Latte',
    price: 3.70,
    description: 'Fragrant bergamot Earl Grey tea infused with pure Madagascar vanilla syrup and steamed milk.',
    category: 'tea'
  },
  {
    id: 'hd14',
    name: 'Organic Loose Leaf Teas',
    price: 2.90,
    description: 'Served in a heated ceramic pot: English Breakfast, Sencha Green, Peppermint, or Chamomile Blossom.',
    category: 'tea'
  }
];

export const coldDrinksMenu: DrinkItem[] = [
  {
    id: 'cd1',
    name: '24-Hour Cold Brew on Tap',
    price: 3.80,
    description: 'Slow cold-steeped Colombian roast over 24 hours. Naturally sweet, low acidity, ultra smooth.',
    category: 'cold-coffee',
    isPopular: true
  },
  {
    id: 'cd2',
    name: 'Iced Americano',
    price: 3.20,
    description: 'Double shot of house espresso poured over ice crystals and chilled spring water.',
    category: 'cold-coffee'
  },
  {
    id: 'cd3',
    name: 'Iced Vanilla Oat Latte',
    price: 4.10,
    description: 'Double espresso, chilled creamy oat milk, and house-made Bourbon vanilla bean syrup over ice.',
    category: 'cold-coffee',
    isPopular: true
  },
  {
    id: 'cd4',
    name: 'Iced Caramel Cloud Macchiato',
    price: 4.20,
    description: 'Chilled milk, vanilla bean, poured over ice, topped with espresso shots and salted butter caramel.',
    category: 'cold-coffee'
  },
  {
    id: 'cd5',
    name: 'Iced Ceremonial Matcha Latte',
    price: 4.20,
    description: 'Vibrant whisked Japanese Uji matcha layered gracefully over cold coconut milk and ice.',
    category: 'refresher',
    isPopular: true
  },
  {
    id: 'cd6',
    name: 'Sparkling Peach & Hibiscus Tea',
    price: 3.50,
    description: 'Cold-brewed organic ruby hibiscus tea, white peach purée, and crisp sparkling spring water.',
    category: 'refresher'
  },
  {
    id: 'cd7',
    name: 'House Mint Lemonade',
    price: 3.40,
    description: 'Fresh-squeezed Sicilian lemons, organic agave nectar, crushed garden mint, and sparkling water.',
    category: 'refresher'
  },
  {
    id: 'cd8',
    name: 'Freshly Squeezed Orange Juice',
    price: 3.60,
    description: '100% pure cold-pressed Valencia oranges, freshly pressed to order.',
    category: 'refresher'
  },
  {
    id: 'cd9',
    name: 'Wild Berry & Banana Smoothie',
    price: 4.40,
    description: 'Blackberries, raspberries, wild strawberries, ripe banana, and Greek style yogurt blended smooth.',
    category: 'smoothie'
  },
  {
    id: 'cd10',
    name: 'Green Glow Detox Smoothie',
    price: 4.40,
    description: 'Crisp green apples, fresh baby spinach, English cucumber, ginger root, and pressed apple juice.',
    category: 'smoothie'
  }
];

export const breakfastMenu: MenuItem[] = [
  {
    id: 'b1',
    name: 'Smashed Avocado & Poached Eggs',
    description: 'Crushed ripe Hass avocado on toasted country sourdough, two poached free-range eggs, feta, chili flakes & EVOO.',
    price: 8.50,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Artisan Brioche Breakfast Roll',
    description: 'Your choice of thick-cut smoked back bacon or Cumberland pork sausage in a warm toasted brioche roll with tomato relish.',
    price: 5.90,
    isPopular: true
  },
  {
    id: 'b3',
    name: 'House Granola & Greek Yogurt Bowl',
    description: 'Honey, almond & toasted pumpkin seed granola, thick Greek yogurt, seasonal berry compote & wildflower honey drizzle.',
    price: 6.50,
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: 'b4',
    name: 'Sourdough Toast & Preserves',
    description: 'Two thick slices of warm toasted country sourdough bloomer served with cultured salted butter and local artisan jam.',
    price: 3.80,
    isVegetarian: true
  },
  {
    id: 'b5',
    name: 'Warm Croissant / Pain au Chocolat',
    description: 'Authentic French all-butter laminated pastry baked fresh before dawn, warmed to order with butter and preserve.',
    price: 3.20,
    isVegetarian: true
  }
];

export const lunchMenu: MenuItem[] = [
  {
    id: 'l1',
    name: 'Mature Cheddar & Ham Sourdough Toastie',
    description: 'Melted mature Somerset Cheddar cheese, Wiltshire cured ham, and mild grain mustard pressed in artisan sourdough bloomer.',
    price: 7.90,
    isPopular: true
  },
  {
    id: 'l2',
    name: 'Mozzarella, Pesto & Sun-Dried Tomato Toastie',
    description: 'Buffalo mozzarella, fragrant basil pesto, sun-dried tomatoes, and peppery rocket grilled in sourdough bloomer.',
    price: 7.50,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'l3',
    name: 'Roast Chicken & Avocado Focaccia',
    description: 'Succulent herb-roasted chicken breast, sliced avocado, baby spinach, and herb garlic aioli in warm rosemary focaccia.',
    price: 8.20
  },
  {
    id: 'l4',
    name: 'Soup of the Day & Crusty Sourdough',
    description: 'Daily chef’s seasonal vegetable soup prepared with local farm ingredients, served with warm sourdough bread & salted butter.',
    price: 5.80,
    isVegan: true,
    isGlutenFree: true
  },
  {
    id: 'l5',
    name: 'Homemade Quiche & Garden Greens',
    description: 'Daily fresh-baked slice of caramelized onion and mature Cheddar quiche, served warm with a dressed seasonal salad.',
    price: 7.50,
    isVegetarian: true
  }
];

export const bakeryMenu: MenuItem[] = [
  {
    id: 'bk1',
    name: 'Warm Cinnamon Swirl',
    description: 'Enriched dough layered with dark brown sugar and Ceylon cinnamon, finished with sweet vanilla glaze.',
    price: 3.60,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'bk2',
    name: 'Salted Caramel Belgian Brownie',
    description: 'Fudgy 70% dark Belgian chocolate brownie swirled with sea salt caramel and dark chocolate callets.',
    price: 3.80,
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: 'bk3',
    name: 'Lemon & Blueberry Drizzle Slice',
    description: 'Zesty lemon sponge folded with plump wild blueberries, soaked in freshly squeezed lemon syrup.',
    price: 3.70,
    isVegetarian: true
  },
  {
    id: 'bk4',
    name: 'Toasted Banana & Walnut Loaf',
    description: 'Moist caramelized banana bread with crunchy toasted walnuts, toasted and served with whipped butter.',
    price: 3.80,
    isVegetarian: true
  }
];

export const reviewsData: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Jenkins',
    rating: 5,
    comment: 'The best flat white I have had in years! The atmosphere is incredibly warm and cozy. You can really tell the cakes are baked fresh on-site. Truly a gem of a cafe!',
    date: 'June 18, 2026'
  },
  {
    id: 'r2',
    name: 'Mark Thompson',
    rating: 5,
    comment: 'Exceptional full English breakfast! High quality sausages, local free-range eggs, and the sourdough bread is spectacular. Plus, they were so incredibly welcoming to my Golden Retriever.',
    date: 'July 2, 2026'
  },
  {
    id: 'r3',
    name: 'Emily Watson',
    rating: 5,
    comment: 'Beautiful rustic decor, friendly and caring staff, and the cinnamon rolls are absolutely out of this world. It’s our favorite weekend spot to unwind.',
    date: 'July 8, 2026'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g_beans',
    imageUrl: '/src/assets/images/roasted_coffee_beans_1791378562938.jpg',
    alt: 'Freshly roasted single-origin Arabica coffee beans spilling from a burlap sack',
    category: 'coffee',
    title: 'Fresh Roasted Beans'
  },
  {
    id: 'g_machine',
    imageUrl: '/src/assets/images/coffee_machine_espresso_1791378552261.jpg',
    alt: 'Polished commercial espresso machine pulling rich golden crema espresso into a ceramic cup',
    category: 'coffee',
    title: 'Artisan Espresso Machine'
  },
  {
    id: 'g_plate_brunch',
    imageUrl: '/src/assets/images/cafe_breakfast_plate_1791378574786.jpg',
    alt: 'Artisanal breakfast plate with poached eggs, smashed avocado on sourdough, and vine tomatoes',
    category: 'food',
    title: 'Smashed Avocado & Poached Eggs'
  },
  {
    id: 'g_bakery_display',
    imageUrl: '/src/assets/images/fresh_bakery_cakes_1791378585999.jpg',
    alt: 'Decadent bakery display with cinnamon swirl rolls, chocolate brownies, and cakes on a wooden board',
    category: 'dessert',
    title: 'Daily Handcrafted Bakes'
  },
  {
    id: 'g_pour',
    imageUrl: '/src/assets/images/artisan_coffee_detail_1791376072013.jpg',
    alt: 'Barista hand-pouring steaming hot drip coffee into an earthenware mug',
    category: 'coffee',
    title: 'Hand-Poured Drip Coffee'
  },
  {
    id: 'g_toastie',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&h=700&q=80',
    alt: 'Golden grilled sourdough toastie with melted mature cheddar cheese and cured ham',
    category: 'food',
    title: 'Farmhouse Sourdough Toastie'
  },
  {
    id: 'g_brownie',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Rich Belgian dark chocolate sea salt brownie stack on rustic board',
    category: 'dessert',
    title: 'Belgian Chocolate Brownie'
  },
  {
    id: 'g1',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Barista pouring a perfect rosetta latte art on hot coffee',
    category: 'barista',
    title: 'Artisan Rosetta Latte Art'
  },
  {
    id: 'g2',
    imageUrl: '/src/assets/images/rustic_modern_cafe_1791376119415.jpg',
    alt: 'Cozy rustic wooden interior of Coffee Heaven with warm light',
    category: 'interior',
    title: 'Our Warm Interior'
  },
  {
    id: 'g4',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Artisan brunch toast with poached eggs and fresh herbs',
    category: 'food',
    title: 'Fresh Farmhouse Brunch'
  },
  {
    id: 'g5',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Freshly baked cinnamon rolls and pastries on a wooden display',
    category: 'dessert',
    title: 'Fresh Daily Pastries'
  },
  {
    id: 'g_croissant',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&h=700&q=80',
    alt: 'Warm flaky French butter croissants fresh from the oven',
    category: 'dessert',
    title: 'Flaky Butter Croissants'
  },
  {
    id: 'g_soup',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Warm homemade soup of the day served with buttered sourdough bread',
    category: 'food',
    title: 'Daily Seasonal Soup'
  },
  {
    id: 'g6',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Smiling friends enjoying a brunch together in a sunny corner of the cafe',
    category: 'interior',
    title: 'A Place to Connect'
  },
  {
    id: 'g7',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=700&q=80',
    alt: 'Professional barista grinding fresh single-origin coffee beans',
    category: 'barista',
    title: 'Precision Bean Grinding'
  },
  {
    id: 'g8',
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&h=600&q=80',
    alt: 'Warm coffee cup resting on a wooden log in soft morning sunlight',
    category: 'coffee',
    title: 'Artisanal Coffee Blend'
  }
];
