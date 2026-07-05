import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppButton';
import { company } from '@/data/company';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: 'ScrubXpert by E K Industry | Manufacturer of Kitchen & Household Cleaning Tools',
    template: '%s | ScrubXpert',
  },
  description:
    'ScrubXpert manufactures premium scouring pads, metallic scourers, wipes, floor care and cleaning tools for distributors, wholesalers, hotels and institutions across India. Enquire for wholesale pricing.',
  keywords: [
    'scrub pad manufacturer India',
    'kitchen cleaning products wholesale',
    'scourer manufacturer Delhi',
    'cleaning products distributor India',
    'ScrubXpert',
    'E K Industry',
  ],
  openGraph: {
    title: 'ScrubXpert by E K Industry',
    description:
      'Premium manufacturer of kitchen and household cleaning tools for distributors, wholesalers and institutions across India.',
    url: company.domain,
    siteName: 'ScrubXpert',
    locale: 'en_IN',
    type: 'website',
    images: ['/brand/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScrubXpert by E K Industry',
    description: 'Premium manufacturer of kitchen and household cleaning tools, built for the trade.',
    images: ['/brand/og-image.svg'],
  },
  alternates: {
    canonical: company.domain,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E K Industry',
  alternateName: 'ScrubXpert',
  url: company.domain,
  logo: `${company.domain}/brand/logo-mark.png`,
  telephone: company.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: 'Delhi',
    addressRegion: company.address.city,
    postalCode: company.address.pin,
    addressCountry: 'IN',
  },
  sameAs: [],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'E K Industry (ScrubXpert)',
  image: `${company.domain}/brand/og-image.svg`,
  telephone: company.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: 'Delhi',
    addressRegion: company.address.city,
    postalCode: company.address.pin,
    addressCountry: 'IN',
  },
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
