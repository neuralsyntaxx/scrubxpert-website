import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sage-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{product.itemCode}</p>
        <h3 className="font-display text-lg font-semibold text-ink leading-snug">{product.name}</h3>
        <p className="text-sm text-muted line-clamp-2">{product.material}</p>
        <div className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary">
          View specifications
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
