import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MeshTexture } from '@/components/MeshTexture';
import { SpecStrip } from '@/components/SpecStrip';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Become a Distributor',
  description:
    'Partner with ScrubXpert (E K Industry) as a distributor. Open territories across India, full product range, and direct manufacturer support.',
};

const BENEFITS = [
  'Direct pricing from the manufacturer — no intermediary trading layer',
  'Full 18-SKU range across 5 categories from a single supplier',
  'Consistent specification, order after order',
  'Product catalogue and reorder support',
  'Open territories across India',
];

const STEPS = [
  { step: 'Message us', detail: 'Send your business details and region on WhatsApp.' },
  { step: 'Discuss terms', detail: 'We confirm territory availability, minimum order quantities and pricing.' },
  { step: 'Start ordering', detail: 'Place your first order and receive ongoing catalogue and dispatch support.' },
];

export default function DistributorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-white section-pad">
        <MeshTexture className="absolute inset-0 h-full w-full text-white/[0.06]" />
        <Container className="relative">
          <p className="eyebrow text-accent-light mb-4">Partnership</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold max-w-2xl">
            Become a ScrubXpert distributor.
          </h1>
          <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
            We manufacture directly and are expanding our distributor network across
            India. If you supply retailers, hotels, or institutions, we want to hear
            from you.
          </p>
          <div className="mt-10">
            <WhatsAppButton context="becoming a ScrubXpert distributor" label="Start the Conversation" />
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Why Partner With Us" title="What you get as a distributor." />
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink/80">
                  <Check size={16} className="shrink-0 mt-0.5 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Process" title="How it works." />
            <div className="mt-8 space-y-6">
              {STEPS.map((s, i) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-mono text-sm text-accent shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-medium text-ink">{s.step}</p>
                    <p className="mt-1 text-sm text-muted">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad bg-surface border-t border-line">
        <Container>
          <SpecStrip
            items={[
              { label: 'Product Range', value: '18 SKUs / 5 categories' },
              { label: 'Territory', value: 'Open, pan-India' },
              { label: 'Contact', value: '+91 96257 87681' },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton context="becoming a distributor" label="Enquire on WhatsApp" />
          </div>
        </Container>
      </section>
    </>
  );
}
