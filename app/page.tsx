import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Factory, PackageCheck, Truck } from 'lucide-react';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SpecStrip } from '@/components/SpecStrip';
import { MeshTexture } from '@/components/MeshTexture';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { industries } from '@/data/industries';

const featured = ['green-scrub-pad', 'metallic-scourer-20g', 'cellulose-wipes', 'silicone-loofah']
  .map((slug) => products.find((p) => p.slug === slug)!)
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* 1. Brand introduction / Hero */}
      <section className="relative overflow-hidden border-b border-line bg-primary text-white">
        <MeshTexture className="absolute inset-0 h-full w-full text-white/[0.06]" />
        <Container className="relative section-pad">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent-light mb-6">E K Industry — Manufacturer</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Precision-made cleaning tools, manufactured for the trade.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
              ScrubXpert supplies distributors, wholesalers, hotels and institutions across
              India with scouring pads, metallic scourers, wipes and floor care built to a
              consistent specification — carton after carton.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton context="wholesale pricing" label="Request Wholesale Pricing" />
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                View Product Range
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
        <Container className="relative pb-10">
          <SpecStrip
            variant="light"
            items={[
              { label: 'Manufacturer', value: 'E K Industry' },
              { label: 'Location', value: 'Delhi, India' },
              { label: 'Range', value: '18 SKUs / 5 categories' },
              { label: 'Supply', value: 'Pan-India, carton dispatch' },
            ]}
          />
        </Container>
      </section>

      {/* 2. Value proposition */}
      <section className="section-pad">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why ScrubXpert"
                title="Built for buyers who can't afford an inconsistent carton."
                description="Every SKU we ship is made to the same specification as the last — the same coating density, the same fibre grade, the same pack count. For a distributor, that consistency is the product."
              />
            </Reveal>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, label: 'Rust-proof 430-grade steel where it matters' },
                { icon: Factory, label: 'In-house manufacturing, not trading' },
                { icon: PackageCheck, label: 'Consistent carton-level quality control' },
                { icon: Truck, label: 'Pan-India dispatch for bulk orders' },
              ].map(({ icon: Icon, label }) => (
                <Reveal key={label} className="rounded-xl border border-line p-5">
                  <Icon size={20} className="text-primary mb-3" strokeWidth={1.75} />
                  <p className="text-sm text-ink/80 leading-snug">{label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Product categories */}
      <section className="section-pad bg-surface border-y border-line">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Range"
              title="Five categories. One manufacturing standard."
              description="Every category is manufactured in-house and supplied in bulk carton formats designed for resale."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Featured products */}
      <section className="section-pad">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <SectionHeading eyebrow="Featured SKUs" title="A closer look at the range." />
            </Reveal>
            <Link href="/products" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              View all 18 products →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Manufacturing capabilities */}
      <section className="section-pad bg-primary text-white relative overflow-hidden">
        <MeshTexture className="absolute inset-0 h-full w-full text-white/[0.05]" />
        <Container className="relative">
          <Reveal>
            <p className="eyebrow text-accent-light mb-3">Manufacturing</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">
              Made in-house, inspected at every stage.
            </h2>
            <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
              ScrubXpert products move through our own production line — not a trading
              desk. That means we control fibre grade, coating consistency and pack
              accuracy from raw material to dispatch.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {['Raw Material', 'Production', 'Quality Control', 'Packaging', 'Dispatch'].map((stage, i) => (
              <Reveal key={stage} delay={i * 0.06} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="font-mono text-[11px] text-accent-light mb-2">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-sm font-medium">{stage}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40 font-mono">
            Facility documentation and certifications available on request via WhatsApp.
          </p>
        </Container>
      </section>

      {/* 7. Industries served */}
      <section className="section-pad">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Supplying the businesses that clean, cook and host at scale."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05} className="rounded-2xl border border-line p-6">
                <h3 className="font-display font-semibold text-ink">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{ind.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Distributor invitation */}
      <section className="section-pad bg-sage-light border-y border-line">
        <Container className="grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow mb-3">Partnership</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-lg">
              Become a ScrubXpert distributor.
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              We&apos;re expanding our distributor network across India. If you supply
              retailers, hotels or institutions, we&apos;d like to talk about territory and terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/distributors"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-light transition-colors"
              >
                Distributor Programme
                <ArrowUpRight size={16} />
              </Link>
              <WhatsAppButton variant="secondary" context="becoming a distributor" label="Enquire on WhatsApp" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SpecStrip
              items={[
                { label: 'Territory', value: 'Open, pan-India' },
                { label: 'Onboarding', value: 'Via WhatsApp enquiry' },
                { label: 'Support', value: 'Catalogue + reorder assistance' },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* 9. Customer confidence */}
      <section className="section-pad">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Working With Us"
              title="What to expect when you enquire."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto text-center">
            {[
              { step: 'Enquire', text: 'Message us on WhatsApp with your requirement and quantity.' },
              { step: 'Confirm', text: 'We confirm specification, pricing and dispatch timeline.' },
              { step: 'Receive', text: 'Your order is packed to carton and dispatched pan-India.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <p className="font-mono text-xs text-accent mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display font-semibold text-ink">{item.step}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Contact CTA */}
      <section className="section-pad bg-primary text-white">
        <Container className="flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">
            Ready to talk wholesale pricing?
          </h2>
          <p className="max-w-md text-white/70">
            Reach us directly on WhatsApp, or view full contact details and our factory location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton context="wholesale pricing" label="Chat on WhatsApp" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact Details
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
