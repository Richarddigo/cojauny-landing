import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import HeroBetaCapture from '@/components/HeroBetaCapture';
import Button from '@/components/ui/Button';

interface HeroProps {
    copy: LandingCopy['hero'];
    quickSignupCopy: LandingCopy['heroQuickSignup'];
    betaCopy: LandingCopy['forms']['beta'];
    locale: Locale;
}

const Hero = ({ copy, quickSignupCopy, betaCopy, locale }: HeroProps) => (
    <section
        id="home"
        className="relative overflow-hidden scroll-mt-[74px] bg-studio-bg pb-10 text-center sm:pb-12 md:pb-14 lg:pb-20 lg:scroll-mt-[100px]"
    >
        <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#0C1120,#1C2336,#0C1120)]"
            aria-hidden
        />
        <div className="absolute inset-x-0 top-0 -z-10 flex justify-center opacity-50" aria-hidden>
            <div className="h-60 w-60 rounded-full bg-[rgba(91,123,255,0.2)] blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-4 pl-[calc(var(--social-bar-offset)+1rem)] sm:px-6">
            <span className="inline-flex items-center justify-center rounded-full border border-[rgba(91,123,255,0.4)] bg-[rgba(91,123,255,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-studio-accent sm:px-4">
                {copy.eyebrow}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
                {copy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-studio-muted sm:mt-6 sm:text-lg">
                {copy.subtitle}
            </p>
            <HeroBetaCapture locale={locale} copy={quickSignupCopy} betaCopy={betaCopy} />
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Button href="#beta" variant="primary" size="lg">
                    {copy.primaryCta}
                </Button>
                <Button href="#demo" variant="outline" size="lg" className="w-full sm:w-auto">
                    {copy.secondaryCta}
                </Button>
            </div>
        </div>
    </section>
);

export default Hero;
