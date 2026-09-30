import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import HeroBetaCapture from '@/components/HeroBetaCapture';
import AirportHubLinks from '@/components/AirportHubLinks';
import Image from 'next/image';

interface HeroProps {
  copy: LandingCopy['hero'];
  quickSignupCopy: LandingCopy['heroQuickSignup'];
  betaCopy: LandingCopy['forms']['beta'];
  locale: Locale;
  airportsHubTitle: string;
  airportsHubAll: string;
}

const Hero = ({
  copy,
  quickSignupCopy,
  betaCopy,
  locale,
  airportsHubTitle,
  airportsHubAll,
}: HeroProps) => (
  <section
    id="home"
    className="landing-hero relative overflow-hidden scroll-mt-[74px] bg-studio-bg pb-12 text-center sm:pb-14 md:pb-16 lg:scroll-mt-[100px] lg:pb-20"
  >
    <div
      className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0a0f1c_0%,#121a2b_45%,#0a0f1c_100%)]"
      aria-hidden
    />
    <div
      className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(91,123,255,0.18),transparent_65%)]"
      aria-hidden
    />

    <div className="landing-hero-grid mx-auto max-w-[1180px] px-4 sm:px-6">
      <div className="min-w-0">
        <span className="inline-flex items-center justify-center rounded-full border border-studio-accent/35 bg-studio-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-studio-accent sm:text-xs">
          {copy.eyebrow}
        </span>

        <h1 className="mt-6 text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
          {copy.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-studio-muted sm:text-lg">
          {copy.subtitle}
        </p>

        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {copy.trustSignals.map((signal) => (
            <li
              key={signal}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85 sm:text-sm"
            >
              {signal}
            </li>
          ))}
        </ul>

        <HeroBetaCapture locale={locale} copy={quickSignupCopy} betaCopy={betaCopy} />

        <div className="mt-8 flex justify-center">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {copy.secondaryCta}
          </a>
        </div>
      </div>
      <div className="landing-hero-preview">
        <div className="landing-preview-phone">
          <Image
            src={`/images/mockups/${locale}/mockup-flight-search.svg`}
            alt={copy.imageAlt}
            width={390}
            height={844}
            sizes="(max-width: 1023px) 240px, 300px"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <AirportHubLinks
        locale={locale}
        title={airportsHubTitle}
        allLabel={airportsHubAll}
        className="mt-10 border-t border-white/8 pt-8 text-left"
      />
    </div>
  </section>
);

export default Hero;
