import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { buildLocaleAlternates } from '@/lib/jsonld';
import { siteMetadata } from '@/lib/site';
import { locales, type Locale } from '@/locales/config';
import { supportCopy } from '@/locales/support';

interface Props {
  params: Promise<{ locale: string }>;
}

async function resolveLocale(params: Props['params']): Promise<Locale> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return locale as Locale;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = supportCopy[locale];
  return {
    title: copy.title,
    description: copy.intro,
    alternates: buildLocaleAlternates(locale, '/support'),
  };
}

export default async function SupportPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = supportCopy[locale];
  return (
    <section className="legal-shell">
      <header>
        <h1 className="text-4xl font-bold text-white">{copy.title}</h1>
        <p className="mt-4 text-base text-studio-muted">{copy.intro}</p>
      </header>
      <div className="legal-card mt-8">
        <h2 className="text-xl font-semibold text-white">{copy.contact}</h2>
        <a
          href={`mailto:${siteMetadata.contactEmail}`}
          className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {siteMetadata.contactEmail}
        </a>
        <p className="mt-4 text-sm leading-6 text-studio-muted">{copy.emailHint}</p>
      </div>
      <div className="mt-8 space-y-8">
        {copy.sections.map((section) => (
          <article key={section.heading} className="legal-card">
            <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
            <p className="mt-2 text-sm leading-6 text-studio-muted">{section.body}</p>
          </article>
        ))}
      </div>
      <nav className="mt-8 flex flex-wrap gap-4 pb-12" aria-label={copy.title}>
        {(
          [
            ['/legal/privacy', copy.privacy],
            ['/account-deletion', copy.deletion],
            ['/legal/terms', copy.terms],
            ['/legal/faq', copy.faq],
          ] as const
        ).map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="text-studio-accent underline underline-offset-4"
          >
            {label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
