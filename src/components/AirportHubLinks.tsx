import Link from 'next/link';
import { featuredAirports } from '@/content/airports';
import type { Locale } from '@/locales/config';

const HUB_SLUGS = [
  'madrid-barajas',
  'barcelona-el-prat',
  'london-heathrow',
  'paris-charles-de-gaulle',
  'new-york-jfk',
  'frankfurt',
] as const;

interface AirportHubLinksProps {
  locale: Locale;
  title: string;
  allLabel: string;
  className?: string;
}

export default function AirportHubLinks({
  locale,
  title,
  allLabel,
  className,
}: AirportHubLinksProps) {
  const hubs = HUB_SLUGS.map((slug) => featuredAirports.find((a) => a.slug === slug)).filter(
    (airport): airport is (typeof featuredAirports)[number] => Boolean(airport),
  );

  return (
    <div className={className}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {hubs.map((airport) => (
          <li key={airport.slug}>
            <Link
              href={`/${locale}/airports/${airport.slug}`}
              prefetch={false}
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-studio-muted transition-colors hover:border-studio-accent/40 hover:text-white"
            >
              {airport.city[locale]} ({airport.iata})
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`/${locale}/airports`}
            className="inline-flex rounded-full border border-studio-accent/30 bg-studio-accent/10 px-3 py-1 text-xs font-semibold text-studio-accent transition-colors hover:bg-studio-accent/20"
          >
            {allLabel}
          </Link>
        </li>
      </ul>
    </div>
  );
}
