export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  itemCode: string;
  name: string;
  category: string; // category slug
  material: string;
  overview: string;
  features: string[];
  applications: string[];
  specs: ProductSpec[];
  packaging: {
    cartonQty: string;
    packOf: string;
    size?: string;
  };
  variants?: string[];
  image: string;
  gallery?: string[];
  relatedSlugs?: string[];
}

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  image: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  points: string[];
  icon: string;
}
