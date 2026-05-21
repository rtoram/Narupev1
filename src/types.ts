export interface Product {
  id: string;
  name: string;
  slogan: string;
  category: 'mar' | 'terra' | 'travel';
  price: number;
  rating: number;
  image: string;
  colors: { name: string; hex: string }[];
  description: string;
  details: string[];
  specs: { [key: string]: string };
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
  avatar: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  category: 'mar' | 'terra';
  description: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}
