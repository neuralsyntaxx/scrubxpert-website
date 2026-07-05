import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MeshTexture } from '@/components/MeshTexture';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description:
    'Inside ScrubXpert\u2019s manufacturing process — from raw material sourcing to quality control and dispatch. Made in-house by E K Industry, Delhi.',
};

const STAGES = [
  {
    name: 'Raw Material',
    detail:
      'Nylon fibre, 430-grade steel wire, cellulose and cotton stock are sourced against fixed specifications before production begins.',
  },
  {
    name: 'Production',
    detail:
      'Coating, weaving and forming take place on our own production line, keeping fibre density and coating thickness consistent across runs.',
  },
  {
    name: 'Quality Control',
    detail:
      'Sample checks at each production run verify weight, coating adhesion and pack accuracy before goods move to packaging.',
  },
  {
    name: 'Packaging',
    detail:
      'Products are packed to carton specification — pack count, carton quantity and labelling are verified against the order.',
  },
  {
    name: 'Dispatch',
    detail: 'Cartons are prepared for pan-India dispatch, with documentation available for distributor and institutional buyers.',
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-white section-pad">
        <MeshTexture className="absolute inset-0 h-full w-full text-white/[0.06]" />
        <Container className="relative">
          <p className="eyebrow text-accent-light mb-4">Manufacturing</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold max-w-2xl">
            Made in-house. Verified at every stage.
          </h1>
          <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
            ScrubXpert is manufactured by E K Industry, not sourced and relabelled. That
            distinction is why distributors can rely on the same specification, order
            after order.
          </p>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading eyebrow="Process" title="From raw material to dispatch." />
          <div className="mt-12 space-y-6">
            {STAGES.map((stage, i) => (
              <Reveal key={stage.name} delay={i * 0.05} className="flex gap-6 border-b border-line pb-6">
                <span className="font-mono text-2xl text-accent shrink-0 w-12">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{stage.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-xl">{stage.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Facility"
            title="Certifications and documentation"
            description="We're building out our certifications library. Current documentation, GST registration, and facility details are available directly on request."
          />
          <div className="mt-8">
            <WhatsAppButton context="factory certifications and documentation" label="Request Documentation" />
          </div>
        </Container>
      </section>
    </>
  );
}
