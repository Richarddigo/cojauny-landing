import Link from 'next/link';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface IntegrationCTAProps {
    copy: LandingCopy['ctaStrip'];
    locale: Locale;
}

const IntegrationCTA = ({ copy, locale }: IntegrationCTAProps) => {
    const href = copy.link.startsWith('/') ? `/${locale}${copy.link}` : copy.link;

    const isInternal = href.startsWith('/');

    return (
        <section className="mt-24 bg-gradient-to-br from-brand-600 to-slate-900 py-24 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
                <h2 className="text-3xl font-bold">{copy.heading}</h2>
                <p className="max-w-2xl text-lg text-white/80">{copy.body}</p>
                {isInternal ? (
                    <Link
                        href={href}
                        className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                        {copy.linkLabel}
                    </Link>
                ) : (
                    <a
                        href={href}
                        className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                        {copy.linkLabel}
                    </a>
                )}
            </div>
        </section>
    );
};

export default IntegrationCTA;
