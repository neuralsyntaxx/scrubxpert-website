'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Container } from './Container';
import { WhatsAppButton } from './WhatsAppButton';
import { company } from '@/data/company';

const NAV_LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/manufacturing', label: 'Manufacturing' },
  { href: '/industries', label: 'Industries' },
  { href: '/distributors', label: 'Become a Distributor' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-primary"
          >
            <Phone size={15} />
            {company.phoneDisplay}
          </a>
          <WhatsAppButton />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm font-medium">
                <Phone size={15} /> {company.phoneDisplay}
              </a>
              <WhatsAppButton className="w-full" />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
