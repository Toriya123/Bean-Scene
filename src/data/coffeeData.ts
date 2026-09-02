import { CoffeeProduct, FeatureItem, Testimonial } from '../types';

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ratio: 'Coffee 50% | Milk 50%',
    price: 8.50,
    description: 'Silky microfoam poured over rich double-shot espresso, finished with a delicate dusting of premium cocoa.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: 120,
    category: 'espresso'
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    ratio: 'Coffee 50% | Milk 50%',
    price: 8.50,
    description: 'Black tea infused with cardamom, cinnamon, and fresh ginger, blended with velvety steamed whole milk.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    calories: 160,
    category: 'latte'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    ratio: 'Coffee 50% | Milk 50%',
    price: 8.50,
    description: 'A bold shot of dark roast espresso marked with a dollop of sweet, dense frothed milk for contrast.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: 90,
    category: 'espresso'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    ratio: 'Coffee 50% | Milk 50%',
    price: 8.50,
    description: 'Concentrated full-bodied shot pulled under 9 bars of pressure with a thick, golden hazelnut crema.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    calories: 10,
    category: 'espresso'
  },
  {
    id: 'mocha',
    name: 'Caramel Macchiato',
    ratio: 'Coffee 40% | Milk 60%',
    price: 9.00,
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: 220,
    category: 'latte'
  },
  {
    id: 'cold-brew',
    name: 'Nitro Cold Brew',
    ratio: 'Coffee 80% | Milk 20%',
    price: 8.75,
    description: 'Slow-steeped for 20 hours in cold spring water and infused with nitrogen for a velvety, creamy cascade.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: 15,
    category: 'brewed'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'beans',
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    iconName: 'beans'
  },
  {
    id: 'quality',
    title: 'High Quality',
    description: 'We provide the highest quality',
    iconName: 'medal'
  },
  {
    id: 'extraordinary',
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    iconName: 'cup'
  },
  {
    id: 'price',
    title: 'Affordable Price',
    description: 'Our coffee prices are easy to afford',
    iconName: 'price'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'jonny',
    name: 'Jonny Thomas',
    role: 'Project Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    rating: 5
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    quote: "Bean Scene is without question the highlight of my mornings. The aroma of their freshly roasted Ethiopian beans fills our studio every day. The balance between bold cocoa undertones and smooth floral acidity is perfection in a porcelain cup.",
    rating: 5
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Software Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    quote: "As a coffee connoisseur who travels frequently across Europe and South America, finding Bean Scene was a revelation. Their pour-over and macchiato extractions match the best specialty cafes in Florence and Vienna.",
    rating: 5
  }
];
