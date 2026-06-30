import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import StructuredData from '@/components/StructuredData';
import { featuredAirports } from '@/content/airports';
import { buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import { siteMetadata } from '@/lib/site';
import { getAirportPageCopy } from '@/locales/airports';
import { locales, type Locale } from '@/locales/config';

interface AirportsIndexProps {
  params: Promise<{ locale: string }>;
}

export const revalidate = 86400;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: AirportsIndexProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const copy = getAirportPageCopy(locale);

  return {
    title: copy.otherAirportsTitle,
    description: copy.intro(featuredAirports[0].airportName[locale], featuredAirports[0].city[locale]),
    alternates: buildLocaleAlternates(locale, '/airports'),
  };
}

export default async function AirportsIndexPage({ params }: AirportsIndexProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const copy = getAirportPageCopy(locale);
  const breadcrumb = buildBreadcrumbJsonLd(locale, [
    { name: 'Cojauny', absoluteUrl: siteMetadata.url },
    { name: copy.otherAirportsTitle, path: '/airports' },
  ]);

  return (
    <section className="airport-page-shell">
      <StructuredData id={`ld-airports-index-${locale}`} data={breadcrumb} />

      <Link
        href={`/${locale}`}
        className="text-sm font-medium text-studio-accent transition-colors hover:text-studio-accent-light"
      >
        ← {copy.backLabel}
      </Link>

      <header className="mt-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {copy.otherAirportsTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-studio-muted">
          {copy.intro(featuredAirports[0].airportName[locale], featuredAirports[0].city[locale])}
        </p>
      </header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredAirports.map((airport) => (
          <li key={airport.slug}>
            <Link
              href={`/${locale}/airports/${airport.slug}`}
              className="block rounded-2xl border border-white/8 bg-studio-surface/80 p-5 transition-colors hover:border-studio-accent/40"
            >
              <p className="font-semibold text-white">
                {airport.city[locale]} ({airport.iata})
              </p>
              <p className="mt-1 text-sm text-studio-muted">{airport.airportName[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <a
          href={`/${locale}#beta`}
          className="inline-flex items-center justify-center rounded-xl bg-studio-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-studio-accent-light"
        >
          {copy.ctaButton}
        </a>
      </div>
    </section>
  );
}
