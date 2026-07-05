import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { industries } from '@/data/industries';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'ScrubXpert supplies retail, wholesale, hospitality, commercial kitchens, institutions and cleaning contractors across India with manufactured cleaning tools.',
};

export default function IndustriesPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Different businesses. One manufacturing standard."
          description="Whichever sector you supply into, ScrubXpert products are made to a specification that holds up to daily commercial use."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.05} className="rounded-2xl border border-line p-8">
              <h2 className="font-display text-xl font-semibold text-ink">{ind.name}</h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">{ind.description}</p>
              <ul className="mt-6 space-y-2">
                {ind.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-ink/80">
                    <Check size={15} className="shrink-0 mt-0.5 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-sage-light p-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">Don&apos;t see your industry listed?</h2>
          <p className="mt-3 text-muted max-w-md mx-auto">
            We supply a wide range of B2B buyers. Tell us what you need on WhatsApp and we&apos;ll
            confirm fit and pricing.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton context="my industry and requirement" label="Tell Us Your Requirement" />
          </div>
        </div>
      </Container>
    </div>
  );
}
