import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { company } from '@/data/company';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.longDescription,
    alternates: { canonical: `${company.domain}/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const items = getProductsByCategory(category.slug);

  return (
    <div className="section-pad">
      <Container>
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-8">
          <ArrowLeft size={15} /> All categories
        </Link>
        <Reveal>
          <p className="eyebrow mb-3">Product Category</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl">{category.name}</h1>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">{category.longDescription}</p>
          <div className="mt-8">
            <WhatsAppButton context={`the ${category.name} range`} label="Enquire About This Range" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
