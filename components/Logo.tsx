import Link from 'next/link';
import Image from 'next/image';

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="ScrubXpert home">
      <span
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ${
          dark ? 'bg-white p-0.5' : ''
        }`}
      >
        <Image
          src="/brand/logo-mark.png"
          alt="ScrubXpert"
          fill
          className="object-contain rounded-full"
          sizes="40px"
        />
      </span>
      <span className={`font-display font-semibold text-lg tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
        ScrubXpert
      </span>
    </Link>
  );
}
