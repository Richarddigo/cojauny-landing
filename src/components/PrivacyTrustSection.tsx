import Link from 'next/link';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

export default function PrivacyTrustSection({ copy, footer, locale }: {
  copy: LandingCopy['trustDetails'];
  footer: LandingCopy['footer'];
  locale: Locale;
}) {
  return (
    <section id="privacy-trust" className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6" aria-labelledby="privacy-trust-heading">
      <div className="rounded-2xl border border-studio-accent/30 bg-studio-surface/70 p-6 md:p-8">
        <h2 id="privacy-trust-heading" className="text-xl font-semibold text-white sm:text-2xl">{copy.title}</h2>
        <p className="mt-3 max-w-4xl text-base leading-relaxed text-studio-muted">{copy.description}</p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link href={`/${locale}/legal/privacy`} className="rounded text-sm font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent">{footer.privacy}</Link>
          <Link href={`/${locale}/account-deletion`} className="rounded text-sm font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent">{footer.accountDeletion}</Link>
        </div>
      </div>
    </section>
  );
}
