export interface CoffeeProduct {
  id: string;
  name: string;
  ratio: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  calories: number;
  category: 'all' | 'espresso' | 'latte' | 'brewed';
}

export type CupSize = 'Small' | 'Regular' | 'Large';
export type MilkType = 'Whole Milk' | 'Oat Milk' | 'Almond Milk' | 'Soy Milk';
export type SweetnessLevel = 'No Sugar' | 'Normal (50%)' | 'Extra Sweet (100%)';

export interface CartItem {
  id: string;
  product: CoffeeProduct;
  size: CupSize;
  milk: MilkType;
  sweetness: SweetnessLevel;
  extraShot: boolean;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'beans' | 'medal' | 'cup' | 'price';
}
