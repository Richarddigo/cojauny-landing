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
        <section className="overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-brand-700 to-slate-900 py-20 px-6 text-white">
            <div className="relative mx-auto max-w-6xl px-6 text-center">
                <div className="absolute inset-0 -z-10 blur-3xl" aria-hidden>
                    <div className="mx-auto h-64 w-64 rounded-full bg-brand-400/30" />
                </div>
                <SectionIntro title={copy.heading} description={copy.body} tone="light" />
                <div className="mt-10 flex justify-center">
                    {isInternal ? (
                        <Link
                            href={href}
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                            {copy.linkLabel}
                        </Link>
                    ) : (
                        <a
                            href={href}
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                            {copy.linkLabel}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IntegrationCTA;
