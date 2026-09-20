export interface Product {
  id: number;
  name: string;
  category: 'Kurtis' | 'Tops' | 'Jeans' | 'Dresses' | 'T-Shirts' | 'Co-ord Sets';
  description: string;
  price: string;
  numericPrice: number;
  image: string;
  badge?: string;
  sizes: string[];
  fabric: string;
  fit: string;
  care: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}
