import { cn } from '@/lib/utils';

export function SpecStrip({
  items,
  variant = 'dark',
}: {
  items: { label: string; value: string }[];
  /** Use 'light' when placing this on a dark background (e.g. the primary-green hero). */
  variant?: 'dark' | 'light';
}) {
  const isLight = variant === 'light';
  return (
    <dl
      className={cn(
        'spec-strip',
        isLight ? 'border-white/20' : 'border-line'
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className={isLight ? 'mr-2 inline text-white/50' : 'mr-2 inline text-ink/40'}>
            {item.label}
          </dt>
          <dd className={isLight ? 'inline text-white' : 'inline text-ink'}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
