import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/Container';
import { SpecStrip } from '@/components/SpecStrip';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { company } from '@/data/company';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} (${product.itemCode}) — ${product.material}. ${product.overview.slice(0, 140)}`,
    openGraph: {
      title: `${product.name} | ScrubXpert`,
      description: product.overview,
      images: [product.image],
    },
    alternates: { canonical: `${company.domain}/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.itemCode,
    image: `${company.domain}${product.image}`,
    description: product.overview,
    material: product.material,
    category: category?.name,
    manufacturer: { '@type': 'Organization', name: 'E K Industry' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'E K Industry' },
      url: `${company.domain}/products/${product.slug}`,
    },
  };

  return (
    <div className="section-pad">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Container>
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-8">
          <ArrowLeft size={15} /> All products
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-sage-light">
              <Image src={product.image} alt={product.name} fill className="object-contain p-12" priority />
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest2 text-accent mb-3">
              {category?.shortName ?? 'ScrubXpert'}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">{product.name}</h1>
            <p className="mt-4 text-base text-muted leading-relaxed">{product.overview}</p>

            <div className="mt-8">
              <SpecStrip items={[{ label: 'Item Code', value: product.itemCode }, ...product.specs]} />
            </div>

            {product.variants && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <span key={v} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/70">
                    {v}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppButton context={`${product.name} (${product.itemCode})`} label="Enquire for Wholesale Pricing" />
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-primary/40 transition-colors"
              >
                Download Full Catalogue
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Features & Applications */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink mb-6">Features</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink/80">
                  <Check size={16} className="shrink-0 mt-0.5 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-semibold text-ink mb-6">Applications</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full bg-sage-light px-4 py-2 text-sm text-primary">
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Packaging */}
        <Reveal className="mt-20 rounded-2xl border border-line bg-surface p-8">
          <h2 className="font-display text-xl font-semibold text-ink mb-6">Packaging</h2>
          <div className="grid gap-6 sm:grid-cols-3 font-mono text-sm">
            <div>
              <p className="text-muted text-xs uppercase tracking-widest2 mb-1">Pack Of</p>
              <p className="text-ink">{product.packaging.packOf}</p>
            </div>
            <div>
              <p className="text-muted text-xs uppercase tracking-widest2 mb-1">Carton Quantity</p>
              <p className="text-ink">{product.packaging.cartonQty}</p>
            </div>
            {product.packaging.size && (
              <div>
                <p className="text-muted text-xs uppercase tracking-widest2 mb-1">Size</p>
                <p className="text-ink">{product.packaging.size}</p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-xl font-semibold text-ink mb-8">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
