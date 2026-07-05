import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/products',
    '/manufacturing',
    '/industries',
    '/distributors',
    '/downloads',
    '/contact',
  ].map((route) => ({
    url: `${company.domain}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${company.domain}/categories/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${company.domain}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
