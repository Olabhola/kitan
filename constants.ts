
import { Product, Category, ProductStatus } from './types';
import { ASSETS } from './assets';

export const COLORS = {
  primary: '#F8F6F3',
  secondary: '#2C2C2C',
  accent: '#B8860B',
  text: '#1A1A1A',
  white: '#FFFFFF'
};

export const CONTACT_INFO = {
  phone: '+234 703 248 0389',
  phoneDisplay: '+234 703 248 0389',
  email: 'olaitanomotanwa7@gmail.com',
  address: '14 Olufunmilayo St, Oke Odo, Lagos 102213, Lagos, Nigeria',
  addressShort: '14 Olufunmilayo St, Oke Odo',
  instagram: '@kitancouture',
  whatsapp: '2347032480389'
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Aso Ebi Ensemble',
    category: Category.ASO_EBI,
    price: 'Contact for Group Pricing',
    description: 'Coordinated luxury for the distinguished wedding guest. Hand-woven lace motifs and custom head-ties.',
    images: ASSETS.products.asoEbi,
    fabricSpecs: 'Premium Guipure Lace, Silk Organza',
    sizes: ['Custom Tailored'],
    careInstructions: 'Dry clean only.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-01'
  },
  {
    id: '2',
    name: 'Celestial Bridal Gown',
    category: Category.BRIDAL,
    price: 'Price Upon Request',
    description: 'A masterpiece of bridal couture featuring a cathedral train and hand-applied Swarovski crystals.',
    images: ASSETS.products.bridal,
    fabricSpecs: 'Italian Silk Tulle, French Chantilly Lace',
    sizes: ['Bespoke'],
    careInstructions: 'Specialist bridal cleaning.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-05'
  },
  {
    id: '3',
    name: 'Midnight Gala Velvet Gown',
    category: Category.EVENING_GALA,
    price: '₦450,000',
    description: 'Architectural velvet gown with a structured bodice and side-split elegance.',
    images: ASSETS.products.evening,
    fabricSpecs: 'Luxury Stretch Velvet, Satin Lining',
    sizes: ['S', 'M', 'L'],
    careInstructions: 'Steam only.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-10'
  },
  {
    id: '4',
    name: 'Adire Artiste Wrapper Set',
    category: Category.TRADITIONAL,
    price: '₦85,000',
    description: 'Modern interpretation of the classic iro and buba using hand-dyed adire patterns.',
    images: ASSETS.products.traditional,
    fabricSpecs: 'Hand-dyed Adire Cotton',
    sizes: ['One Size', 'Custom'],
    careInstructions: 'Cold hand wash separately.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-12'
  },
  {
    id: '5',
    name: 'Imperial Agbada Suite',
    category: Category.MENS_COUTURE,
    price: '₦280,000',
    description: 'Three-piece agbada set with intricate gold thread embroidery on structured wool.',
    images: ASSETS.products.mens,
    fabricSpecs: 'English Wool, Metallic Thread',
    sizes: ['M', 'L', 'XL', 'Custom'],
    careInstructions: 'Professional dry clean.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-15'
  },
  {
    id: '6',
    name: 'Heritage Mini-Couture Set',
    category: Category.CHILDRENS_COUTURE,
    price: '₦45,000',
    description: 'Miniature bespoke pieces designed for children to match the elegance of the family.',
    images: ASSETS.products.children,
    fabricSpecs: 'Soft Cotton Lining, Lace Overlay',
    sizes: ['2T', '4T', '6', '8'],
    careInstructions: 'Gentle hand wash.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-18'
  },
  {
    id: '7',
    name: 'Structured Atelier Dress',
    category: Category.WOMENS_COUTURE,
    price: '₦120,000',
    description: 'Power dressing for the modern woman. Sharp tailoring with feminine draping.',
    images: ASSETS.products.womens,
    fabricSpecs: 'Crepe, Silk Blend',
    sizes: ['XS', 'S', 'M', 'L'],
    careInstructions: 'Dry clean only.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-20'
  }
];
