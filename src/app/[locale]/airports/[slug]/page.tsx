import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import StructuredData from '@/components/StructuredData';
import { featuredAirports, getAirportBySlug } from '@/content/airports';
import { buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import { siteMetadata } from '@/lib/site';
import { getAirportPageCopy } from '@/locales/airports';
import { locales, type Locale } from '@/locales/config';

interface AirportPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    featuredAirports.map((airport) => ({
      locale,
      slug: airport.slug,
    })),
  );
}

export async function generateMetadata({ params }: AirportPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const airport = getAirportBySlug(slug);
  if (!airport) {
    notFound();
  }

  const copy = getAirportPageCopy(locale);
  const city = airport.city[locale];
  const airportName = airport.airportName[locale];

  return {
    title: copy.metaTitle(city, airport.iata),
    description: copy.metaDescription(airportName, city),
    alternates: buildLocaleAlternates(locale, `/airports/${slug}`),
  };
}

export default async function AirportPage({ params }: AirportPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const airport = getAirportBySlug(slug);
  if (!airport) {
    notFound();
  }

  const copy = getAirportPageCopy(locale);
  const city = airport.city[locale];
  const airportName = airport.airportName[locale];
  const otherAirports = featuredAirports.filter((item) => item.slug !== slug).slice(0, 6);

  const breadcrumb = buildBreadcrumbJsonLd(locale, [
    { name: 'Cojauny', absoluteUrl: siteMetadata.url },
    { name: copy.otherAirportsTitle, path: '/airports' },
    { name: `${city} (${airport.iata})`, path: `/airports/${slug}` },
  ]);

  return (
    <article className="airport-page-shell">
      <StructuredData id={`ld-airport-breadcrumb-${locale}-${slug}`} data={breadcrumb} />

      <Link
        href={`/${locale}`}
        className="text-sm font-medium text-studio-accent transition-colors hover:text-studio-accent-light"
      >
        ← {copy.backLabel}
      </Link>

      <header className="mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-studio-accent">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {copy.title(city, airport.iata)}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-studio-muted">
          {copy.intro(airportName, city)}
        </p>
      </header>

      <section className="mt-12 rounded-3xl border border-white/8 bg-studio-surface p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white sm:text-2xl">{copy.benefitsTitle}</h2>
        <ul className="mt-6 space-y-4">
          {copy.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 text-studio-muted">
              <span className="mt-1 text-studio-accent" aria-hidden>✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-studio-accent/30 bg-studio-accent/10 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">{copy.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-studio-muted">{copy.ctaBody}</p>
        <a
          href={`/${locale}#beta`}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-studio-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-studio-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent focus-visible:ring-offset-2 focus-visible:ring-offset-studio-bg"
        >
          {copy.ctaButton}
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-white">{copy.otherAirportsTitle}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherAirports.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${locale}/airports/${item.slug}`}
                prefetch={false}
                className="block rounded-2xl border border-white/8 bg-studio-surface/60 px-4 py-3 text-sm text-studio-muted transition-colors hover:border-studio-accent/40 hover:text-white"
              >
                {item.city[locale]} ({item.iata})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
