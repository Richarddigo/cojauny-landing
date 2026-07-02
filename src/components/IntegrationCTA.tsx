import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import SectionIntro from '@/components/SectionIntro';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

interface IntegrationCTAProps {
    copy: LandingCopy['ctaStrip'];
    locale: Locale;
}

const IntegrationCTA = ({ copy, locale }: IntegrationCTAProps) => {
    const href = copy.link.startsWith('/') ? `/${locale}${copy.link}` : copy.link;

    return (
        <AnimateIn className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900 via-studio-accent-dim to-slate-900 py-20 px-6 text-white">
            <div className="relative mx-auto max-w-[1180px] px-6 text-center">
                <div className="absolute inset-0 -z-10 blur-3xl" aria-hidden>
                    <div className="mx-auto h-64 w-64 rounded-full bg-studio-accent/30" />
                </div>
                <SectionIntro title={copy.heading} description={copy.body} tone="light" />
                <div className="mt-10 flex justify-center">
                    <Button href={href} variant="primary" size="lg">
                        {copy.linkLabel}
                    </Button>
                </div>
            </div>
        </AnimateIn>
    );
};

export default IntegrationCTA;

