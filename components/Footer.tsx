import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { company } from '@/data/company';
import { categories } from '@/data/categories';

export function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <Container className="section-pad grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            Manufactured by E K Industry — precision cleaning tools supplied to distributors,
            wholesalers and institutions across India.
          </p>
        </div>

        <div>
          <p className="eyebrow text-white/50 mb-4">Products</p>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-white transition-colors">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/50 mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Industries We Serve</Link></li>
            <li><Link href="/distributors" className="hover:text-white transition-colors">Become a Distributor</Link></li>
            <li><Link href="/downloads" className="hover:text-white transition-colors">Download Centre</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/50 mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5 text-white/50" />
              <span>{company.address.line1}, {company.address.line2}, {company.address.city} {company.address.pin}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="shrink-0 text-white/50" />
              <a href={`tel:${company.phone}`} className="hover:text-white">{company.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="shrink-0 text-white/50" />
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} E K Industry. All rights reserved.</p>
          <p className="font-mono">Manufactured in Delhi, India</p>
        </Container>
      </div>
    </footer>
  );
}
