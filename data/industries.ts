import { Industry } from '@/types';

export const industries: Industry[] = [
  {
    slug: 'retail-wholesale',
    name: 'Retail & Wholesale',
    description: 'Shelf-ready packaging and consistent unit quality for stores that can\u2019t afford returns.',
    points: ['Multipack and carton formats built for shelf turnover', 'Consistent unit quality across every carton', 'Reliable reorder cycles'],
    icon: 'Store',
  },
  {
    slug: 'hospitality',
    name: 'Hotels & Hospitality',
    description: 'Housekeeping and amenity-grade supply for properties that run on consistency.',
    points: ['Amenity-grade loofahs and body care', 'Housekeeping cloths and floor care at scale', 'Bulk carton formats for procurement cycles'],
    icon: 'BedDouble',
  },
  {
    slug: 'commercial-kitchens',
    name: 'Restaurants & Commercial Kitchens',
    description: 'Scourers and pads engineered for grease, volume, and daily turnaround.',
    points: ['Heavy-duty scourers for burnt-on residue', 'High-frequency replacement formats', 'Food-safe material sourcing'],
    icon: 'ChefHat',
  },
  {
    slug: 'institutions',
    name: 'Institutions & Facilities',
    description: 'Standardised cleaning supply for hospitals, campuses, and large facilities.',
    points: ['Colour-coded cleaning cloths for zoning protocols', 'Predictable bulk supply', 'Consistent specification across reorders'],
    icon: 'Building2',
  },
  {
    slug: 'cleaning-companies',
    name: 'Cleaning Contractors',
    description: 'Dependable stock for teams servicing multiple sites and contracts.',
    points: ['Full-range supply from one manufacturer', 'Volume pricing for contract-scale use', 'Consistent quality across repeat orders'],
    icon: 'Sparkles',
  },
];
