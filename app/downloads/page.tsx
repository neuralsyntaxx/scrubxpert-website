import type { Metadata } from 'next';
import { FileText, Download, Lock } from 'lucide-react';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Download Centre',
  description: 'Download the ScrubXpert product catalogue, and request company profile and certification documents.',
};

const DOWNLOADS = [
  {
    title: 'Product Catalogue',
    description: 'Full SKU list with item codes, packaging and specifications.',
    href: '/downloads/scrubxpert-product-catalogue.pdf',
    available: true,
  },
  {
    title: 'Company Profile',
    description: 'Overview of E K Industry, manufacturing capability and contact details.',
    href: '#',
    available: false,
  },
  {
    title: 'Certifications',
    description: 'Quality and compliance documentation.',
    href: '#',
    available: false,
  },
];

export default function DownloadsPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Download Centre"
          title="Catalogue, profile and certifications."
          description="Download our current product catalogue directly, or request additional documentation via WhatsApp."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {DOWNLOADS.map((d) => (
            <Reveal key={d.title} className="flex flex-col justify-between rounded-2xl border border-line p-8">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-primary mb-6">
                  {d.available ? <FileText size={20} /> : <Lock size={18} />}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{d.description}</p>
              </div>
              {d.available ? (
                <a
                  href={d.href}
                  download
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  <Download size={15} /> Download PDF
                </a>
              ) : (
                <p className="mt-8 text-xs font-mono uppercase tracking-widest2 text-muted">
                  Available on request
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-sage-light p-8 text-center">
          <p className="text-muted mb-4">Need a document that isn&apos;t listed here?</p>
          <WhatsAppButton context="a document from the download centre" label="Request on WhatsApp" />
        </div>
      </Container>
    </div>
  );
}
