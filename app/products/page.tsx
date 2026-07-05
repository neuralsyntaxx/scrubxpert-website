import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: 'Product Catalogue',
  description:
    'Browse ScrubXpert\u2019s full manufacturing catalogue: scrub pads, metallic scourers, wipes, floor care and bath products supplied in bulk for wholesale and distribution.',
};

export default function ProductsPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Product Catalogue"
          title="18 SKUs, manufactured to one standard."
          description="Every product below is available in bulk carton quantities for distributors, wholesalers and institutional buyers. Contact us for current wholesale pricing."
        />

        <div className="mt-16 space-y-20">
          {categories.map((category) => {
            const items = getProductsByCategory(category.slug);
            return (
              <section key={category.slug} id={category.slug}>
                <Reveal>
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-ink">{category.name}</h2>
                      <p className="mt-2 max-w-xl text-sm text-muted">{category.description}</p>
                    </div>
                    <span className="font-mono text-xs text-muted">{String(items.length).padStart(2, '0')} SKUs</span>
                  </div>
                </Reveal>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.04}>
                      <ProductCard product={p} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
