import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'paellas',
    name: 'Paellas',
    slug: 'paellas',
    description: 'Nuestras paellas tradicionales valencianas',
    order: 1,
  },
  {
    id: 'arroces',
    name: 'Arroces',
    slug: 'arroces',
    description: 'Arroces cremosos y caldosos',
    order: 2,
  },
  {
    id: 'especiales',
    name: 'Especiales',
    slug: 'especiales',
    description: 'Creaciones únicas del chef',
    order: 3,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Paella Valenciana',
    slug: 'paella-valenciana',
    shortDescription: 'La auténtica receta tradicional con pollo, conejo y verduras de temporada',
    description: 'Nuestra paella valenciana sigue la receta más tradicional, elaborada con pollo de corral, conejo, judías verdes, garrofón y azafrán de la mejor calidad. El toque final de socarrat le da ese sabor inconfundible.',
    ingredients: ['Arroz bomba', 'Pollo de corral', 'Conejo', 'Judías verdes', 'Garrofón', 'Tomate', 'Azafrán', 'Aceite de oliva virgen'],
    allergens: [],
    categoryId: 'paellas',
    images: [
      '/images/paella-valenciana-1.png',
    ],
    basePrice: 12.50,
    portions: [
      { persons: 2, price: 25.00, preparationTime: 30 },
      { persons: 4, price: 45.00, preparationTime: 40 },
      { persons: 6, price: 65.00, preparationTime: 50 },
      { persons: 8, price: 80.00, preparationTime: 60 },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['tradicional', 'sin gluten'],
  },
  {
    id: '2',
    name: 'Paella de Marisco',
    slug: 'paella-marisco',
    shortDescription: 'Sabor del Mediterráneo con gambas, mejillones, calamares y sepia',
    description: 'Una explosión de sabor marino con los mejores mariscos frescos. Gambas, mejillones, calamares, sepia y un toque de alioli hacen de esta paella una experiencia única.',
    ingredients: ['Arroz bomba', 'Gambas', 'Mejillones', 'Calamares', 'Sepia', 'Fumet de pescado', 'Azafrán', 'Ajo', 'Pimentón'],
    allergens: ['Moluscos', 'Crustáceos'],
    categoryId: 'paellas',
    images: [
      '/images/paella-marisco-1.png',
    ],
    basePrice: 15.00,
    portions: [
      { persons: 2, price: 30.00, preparationTime: 35 },
      { persons: 4, price: 55.00, preparationTime: 45 },
      { persons: 6, price: 80.00, preparationTime: 55 },
      { persons: 8, price: 100.00, preparationTime: 65 },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['marisco', 'premium'],
  },
  {
    id: '3',
    name: 'Paella Mixta',
    slug: 'paella-mixta',
    shortDescription: 'Lo mejor de mar y montaña en un solo plato',
    description: 'La combinación perfecta entre tierra y mar. Pollo, conejo, gambas, mejillones y verduras frescas en una paella que satisface todos los gustos.',
    ingredients: ['Arroz bomba', 'Pollo', 'Conejo', 'Gambas', 'Mejillones', 'Judías verdes', 'Pimiento', 'Azafrán'],
    allergens: ['Moluscos', 'Crustáceos'],
    categoryId: 'paellas',
    images: [
      '/images/paella-mixta-1.png',
    ],
    basePrice: 13.50,
    portions: [
      { persons: 2, price: 27.00, preparationTime: 35 },
      { persons: 4, price: 50.00, preparationTime: 45 },
      { persons: 6, price: 72.00, preparationTime: 55 },
      { persons: 8, price: 90.00, preparationTime: 65 },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['popular', 'mixta'],
  },
  {
    id: '4',
    name: 'Arroz Negro',
    slug: 'arroz-negro',
    shortDescription: 'Intenso sabor a mar con tinta de calamar',
    description: 'Un arroz meloso con el intenso sabor de la tinta de calamar, calamares, sepia y alioli. Una experiencia gastronómica única del Mediterráneo.',
    ingredients: ['Arroz bomba', 'Calamares', 'Sepia', 'Tinta de calamar', 'Fumet', 'Ajo', 'Cebolla', 'Alioli'],
    allergens: ['Moluscos', 'Huevo (alioli)'],
    categoryId: 'arroces',
    images: [
      '/images/arroz-negro-1.png',
    ],
    basePrice: 14.00,
    portions: [
      { persons: 2, price: 28.00, preparationTime: 30 },
      { persons: 4, price: 52.00, preparationTime: 40 },
      { persons: 6, price: 75.00, preparationTime: 50 },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['especial', 'marisco'],
  },
  {
    id: '5',
    name: 'Arroz con Bogavante',
    slug: 'arroz-bogavante',
    shortDescription: 'Lujo gastronómico con bogavante fresco',
    description: 'Nuestra joya de la corona. Un arroz caldoso elaborado con bogavante fresco, fumet concentrado y un toque de coñac. Pura elegancia en cada cucharada.',
    ingredients: ['Arroz bomba', 'Bogavante fresco', 'Fumet de marisco', 'Tomate', 'Cebolla', 'Coñac', 'Azafrán'],
    allergens: ['Crustáceos'],
    categoryId: 'especiales',
    images: [
      '/images/arroz-bogavante-1.png',
    ],
    basePrice: 25.00,
    portions: [
      { persons: 2, price: 50.00, preparationTime: 40 },
      { persons: 4, price: 95.00, preparationTime: 50 },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['premium', 'especial', 'lujo'],
    spicyLevel: 0,
  },
  {
    id: '6',
    name: 'Arroz Vegetariano',
    slug: 'arroz-vegetariano',
    shortDescription: 'Verduras de temporada con todo el sabor',
    description: 'Un arroz lleno de sabor con alcachofas, judías verdes, pimiento, tomate, garrofón y champiñones. Perfecto para vegetarianos sin renunciar al auténtico sabor mediterráneo.',
    ingredients: ['Arroz bomba', 'Alcachofas', 'Judías verdes', 'Pimiento', 'Tomate', 'Garrofón', 'Champiñones', 'Azafrán'],
    allergens: [],
    categoryId: 'paellas',
    images: [
      '/images/arroz-vegetariano-1.png',
    ],
    basePrice: 11.00,
    portions: [
      { persons: 2, price: 22.00, preparationTime: 30 },
      { persons: 4, price: 40.00, preparationTime: 40 },
      { persons: 6, price: 58.00, preparationTime: 50 },
      { persons: 8, price: 72.00, preparationTime: 60 },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['vegetariano', 'vegano', 'sin gluten'],
  },
];

// Función helper para obtener productos destacados
export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured && p.isAvailable);
}

// Función helper para obtener productos por categoría
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId && p.isAvailable);
}

// Función helper para obtener un producto por slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
