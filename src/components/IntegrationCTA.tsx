import Link from 'next/link';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import SectionIntro from '@/components/SectionIntro';

interface IntegrationCTAProps {
  copy: LandingCopy['ctaStrip'];
  locale: Locale;
}

const IntegrationCTA = ({ copy, locale }: IntegrationCTAProps) => {
  const href = copy.link.startsWith('/') ? `/${locale}${copy.link}` : copy.link;

  const isInternal = href.startsWith('/');

  return (
    <div className="guide-integration">
      <div>
        <SectionIntro title={copy.heading} description={copy.body} align="left" />
        <div className="mt-10 flex justify-center">
          {isInternal ? (
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-xl bg-action px-8 py-3 text-base font-semibold text-white transition hover:bg-action-dim"
            >
              {copy.linkLabel}
            </Link>
          ) : (
            <a
              href={href}
              className="inline-flex items-center justify-center rounded-xl bg-action px-8 py-3 text-base font-semibold text-white transition hover:bg-action-dim"
            >
              {copy.linkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationCTA;
