export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isPopular?: boolean;
  imageUrl?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: 'coffee' | 'interior' | 'outdoor' | 'food' | 'dessert' | 'barista';
  title: string;
}

export interface SpecialItem {
  id: string;
  name: string;
  description: string;
  price: number;
  badge: string;
  imageUrl: string;
}

export interface CakeItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}
