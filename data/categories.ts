import { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'scrub-pads-sponges',
    name: 'Kitchen Scrub Pads & Sponges',
    shortName: 'Scrub Pads & Sponges',
    description: 'Nylon scouring pads and foam sponges built for daily commercial kitchen use.',
    longDescription:
      'Our scouring pads and sponges are manufactured from 100% nylon with reinforced coating for consistent cutting power, wash after wash. Supplied in bulk carton formats designed for hotel housekeeping, restaurant kitchens, and retail resale.',
    icon: 'LayoutGrid',
    image: '/products/green-scrub-pad.jpg',
  },
  {
    slug: 'metallic-scourers',
    name: 'Metallic Scourers & Pads',
    shortName: 'Metallic Scourers',
    description: 'Rust-resistant 430-grade steel scourers for heavy grease and burnt residue.',
    longDescription:
      'Formed from 430-grade stainless steel wire, our metallic scourers are engineered for rust resistance, long coil life, and consistent scouring density across every unit in the carton — critical for institutional kitchens with high turnover.',
    icon: 'CircleDot',
    image: '/products/metallic-pad.jpg',
  },
  {
    slug: 'wipes-cloths',
    name: 'Wipes & Cleaning Cloths',
    shortName: 'Wipes & Cloths',
    description: 'Cellulose wipes, microfiber, and dish cloths for surface and utensil care.',
    longDescription:
      'A complete surface-care range spanning high-absorption cellulose wipes, microfiber cloths for streak-free finishing, and dish cloths for daily kitchen turnover — supplied in dealer-ready multipacks.',
    icon: 'Layers',
    image: '/products/cellulose-wipes.jpg',
  },
  {
    slug: 'floor-care',
    name: 'Floor Care',
    shortName: 'Floor Care',
    description: 'Cotton pochas, tile brushes, and grass brooms for floor and tile maintenance.',
    longDescription:
      'Built for the realities of Indian commercial flooring — 100% cotton pochas with high absorption, heavy-duty nylon tile brushes, and traditional grass brooms finished for durability and grip.',
    icon: 'Brush',
    image: '/products/tile-brush.jpg',
  },
  {
    slug: 'bath-body',
    name: 'Bath & Body Care',
    shortName: 'Bath & Body',
    description: 'Loofahs and body scrubbers for hospitality amenity and retail supply.',
    longDescription:
      'A soft-touch range of loofahs and handle scrubbers manufactured for hotel amenity programs and general retail, offered in multi-colour packs for shelf variety.',
    icon: 'Droplets',
    image: '/products/silicone-loofah.jpg',
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
