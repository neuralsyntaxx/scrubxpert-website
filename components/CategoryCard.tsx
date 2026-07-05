import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Category } from '@/types';
import { getProductsByCategory } from '@/data/products';

export function CategoryCard({ category }: { category: Category }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Package;
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-primary/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-primary">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <span className="font-mono text-xs text-muted">{String(count).padStart(2, '0')} SKUs</span>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">{category.name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{category.description}</p>
      </div>
      <span className="text-sm font-medium text-primary group-hover:underline underline-offset-4">
        Browse range →
      </span>
    </Link>
  );
}
