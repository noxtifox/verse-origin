export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Accessories';
  price: number;
  colors: string[];
  image1: string;
  image2: string;
  description: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Essential Oversized Tee',
    category: 'Men',
    price: 1499,
    colors: ['Black', 'White', 'Charcoal'],
    image1: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    description: 'A relaxed, drop-shoulder silhouette crafted from heavyweight organic cotton. Designed for everyday wear with a structured yet comfortable drape.',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Premium Relaxed Shirt',
    category: 'Men',
    price: 2499,
    colors: ['White', 'Navy'],
    image1: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    description: 'The ultimate smart-casual shirt, featuring a soft collar and a slightly looser fit. Made with breathable cotton-linen blend.',
    isNew: true
  },
  {
    id: 'p3',
    name: 'Urban Cargo Pants',
    category: 'Men',
    price: 2999,
    colors: ['Olive', 'Black'],
    image1: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1552872673-9b7b99711ebb?q=80&w=800&auto=format&fit=crop',
    description: 'Functional and stylish cargo pants with a modern tapered leg and subtle pockets. Durable cotton twill construction.',
  },
  {
    id: 'p4',
    name: 'Signature Hoodie',
    category: 'Women',
    price: 2799,
    colors: ['Off-White', 'Black', 'Grey'],
    image1: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop',
    description: 'Our bestselling hoodie reimagined with ultra-soft French terry. Features a subtle tonal embroidered logo on the chest.',
    isNew: true
  },
  {
    id: 'p5',
    name: 'Classic Straight Jeans',
    category: 'Women',
    price: 2499,
    colors: ['Light Blue', 'Vintage Wash'],
    image1: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop',
    description: 'Timeless high-rise straight leg jeans crafted from premium rigid denim that molds perfectly to your body over time.',
  },
  {
    id: 'p6',
    name: 'Minimal Overshirt',
    category: 'Men',
    price: 2699,
    colors: ['Charcoal', 'Navy'],
    image1: 'https://images.unsplash.com/photo-1599408169542-620bf452aae9?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1601614275150-13a699c2d61d?q=80&w=800&auto=format&fit=crop',
    description: 'A versatile layering piece with hidden hardware and clean lines. Perfect for transitioning between seasons.',
  },
  {
    id: 'p7',
    name: 'Essential Polo',
    category: 'Men',
    price: 1899,
    colors: ['Black', 'White'],
    image1: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    description: 'An elevated take on the classic polo. Knit from fine cotton with a minimalist collar and seamless placket.',
  },
  {
    id: 'p8',
    name: 'Everyday Jacket',
    category: 'Women',
    price: 3499,
    colors: ['Black', 'Beige'],
    image1: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop',
    description: 'A refined outerwear essential featuring a boxy cropped fit and water-resistant finish.',
    isNew: true
  },
  {
    id: 'p9',
    name: 'Structured Tote',
    category: 'Accessories',
    price: 1999,
    colors: ['Black'],
    image1: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop',
    description: 'A spacious and minimal tote crafted from durable canvas with reinforced handles and an interior zip pocket.',
  }
];
