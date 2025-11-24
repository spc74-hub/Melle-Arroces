// Tipos de productos
export interface PortionVariant {
  persons: number; // 2, 4, 6, 8, etc.
  price: number;
  preparationTime: number; // en minutos
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  ingredients: string[];
  allergens: string[];
  categoryId: string;
  images: string[];
  basePrice: number;
  portions: PortionVariant[];
  isFeatured: boolean;
  isAvailable: boolean;
  tags?: string[]; // "sin gluten", "vegetariano", etc.
  spicyLevel?: number; // 0-3
  createdAt?: Date;
  updatedAt?: Date;
}

// Tipos de categorías
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  order: number;
}

// Tipos de carrito
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedPortion: PortionVariant;
  customizations?: {
    noSeafood?: boolean;
    extraSocarrat?: boolean;
    notes?: string;
  };
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

// Tipos de dirección
export interface Address {
  id?: string;
  street: string;
  number: string;
  floor?: string;
  door?: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
  additionalInfo?: string;
  isDefault?: boolean;
}

// Tipos de pedidos
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivering'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  portion: PortionVariant;
  price: number;
  customizations?: CartItem['customizations'];
}

export interface DeliverySlot {
  date: string; // ISO date
  timeSlot: string; // "12:00-14:00"
  available: boolean;
}

export interface Order {
  id: string;
  userId?: string;
  userEmail: string;
  userName: string;
  userPhone: string;
  items: OrderItem[];
  deliveryAddress: Address;
  deliveryDate: string;
  deliverySlot: string;
  status: OrderStatus;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  stripePaymentId?: string;
  couponCode?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de usuario
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: Address[];
  favoriteProducts: string[];
  createdAt: Date;
}

// Tipos de reviews
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  images?: string[];
  createdAt: Date;
  helpful: number;
}

// Tipos de cupones
export interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder?: number;
  expiresAt?: Date;
  isActive: boolean;
  usageLimit?: number;
  usageCount: number;
}
