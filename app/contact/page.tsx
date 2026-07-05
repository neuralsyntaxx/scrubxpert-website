import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container, SectionHeading } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact ScrubXpert (E K Industry) for wholesale pricing, dealership enquiries and product information. WhatsApp, phone, email and factory address.',
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your requirement."
          description="WhatsApp is the fastest way to reach us. For formal correspondence, use phone, email or our factory address below."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-line p-8">
              <p className="eyebrow mb-4">Primary — WhatsApp</p>
              <p className="text-sm text-muted mb-6">
                The quickest way to reach us for wholesale pricing, dealership enquiries or
                product questions.
              </p>
              <WhatsAppButton className="w-full" label="Chat on WhatsApp" />
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Phone size={18} className="shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-muted font-mono">Phone</p>
                  <a href={`tel:${company.phone}`} className="text-ink font-medium hover:text-primary">
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-muted font-mono">Email</p>
                  <a href={`mailto:${company.email}`} className="text-ink font-medium hover:text-primary">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-muted font-mono">Factory Address</p>
                  <p className="text-ink font-medium">
                    {company.address.line1}, {company.address.line2}
                    <br />
                    {company.address.city} {company.address.pin}, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={18} className="shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-muted font-mono">Response Time</p>
                  <p className="text-ink font-medium">WhatsApp enquiries answered same business day</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-line h-full min-h-[420px]">
              <iframe
                title="E K Industry location map"
                src={`https://www.google.com/maps?q=${company.mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
