import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('mx-auto w-full max-w-content px-6 md:px-10', className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
      {description && <p className="mt-4 text-base text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
