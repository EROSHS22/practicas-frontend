import type { Product } from '~/types/product'

export const products: Product[] = [
  {
    id: 1,
    title: 'Monitor Ultrawide 34"',
    description: 'Monitor curvo perfecto para diseño y programación con múltiples ventanas.',
    price: 6500,
    image: 'https://picsum.photos/id/0/400/250' 
  },
  {
    id: 2,
    title: 'Teclado Mecánico Custom',
    description: 'Switches lineales silenciosos, formato 65% con iluminación RGB.',
    price: 2100,
    image: 'https://picsum.photos/id/36/400/250'
  },
  {
    id: 3,
    title: 'Ratón Ergonómico Inalámbrico',
    description: 'Diseño vertical para evitar fatiga en la muñeca durante largas jornadas.',
    price: 1200,
    image: 'https://picsum.photos/id/119/400/250'
  }
];