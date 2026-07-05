import Link from 'next/link';
import { Container } from '@/components/Container';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function NotFound() {
  return (
    <div className="section-pad">
      <Container className="text-center max-w-lg mx-auto">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          This page isn&apos;t in our catalogue.
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for may have moved. Browse our product range or get in
          touch directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-light transition-colors"
          >
            View Products
          </Link>
          <WhatsAppButton variant="secondary" />
        </div>
      </Container>
    </div>
  );
}
