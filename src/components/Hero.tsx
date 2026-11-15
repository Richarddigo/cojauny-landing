import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import HeroBetaCapture from '@/components/HeroBetaCapture';
import AirportHubLinks from '@/components/AirportHubLinks';

interface HeroProps {
  copy: LandingCopy['hero'];
  quickSignupCopy: LandingCopy['heroQuickSignup'];
  betaCopy: LandingCopy['forms']['beta'];
  locale: Locale;
  airportsHubTitle: string;
  airportsHubAll: string;
  journeyCopy?: LandingCopy['workflow'];
}

const Hero = ({
  copy,
  quickSignupCopy,
  betaCopy,
  locale,
  airportsHubTitle,
  airportsHubAll,
  journeyCopy,
}: HeroProps) => (
  <section id="home" className="landing-hero guide-section">
    <div className="guide-shell">
      <div className="guide-masthead" aria-hidden="true">
        <span>COJAUNY</span>
        <span>BETA</span>
      </div>
      <div className="landing-hero-grid">
        <div className="guide-hero-copy">
          <p className="guide-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="guide-hero-description">{copy.subtitle}</p>
          <div className="guide-hero-actions">
            <a href="#beta" className="guide-primary-link">
              {copy.primaryCta}
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#how-it-works" className="guide-text-link">
              {copy.secondaryCta}
            </a>
          </div>
        </div>
        {journeyCopy && (
          <aside className="journey-note" aria-label={journeyCopy.title}>
            <p className="journey-note-title">{journeyCopy.title}</p>
            <ol>
              {journeyCopy.steps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step.title.replace(/^\d+[.)]\s*/, '')}</span>
                </li>
              ))}
            </ol>
            <p className="journey-note-footer">{journeyCopy.intro}</p>
          </aside>
        )}
      </div>
      <ol className="guide-trust-line">
        {copy.trustSignals.map((signal, index) => (
          <li key={signal}>
            <span aria-hidden="true">0{index + 1}</span>
            {signal}
          </li>
        ))}
      </ol>
      <div id="quick-beta" className="guide-capture-row">
        <HeroBetaCapture locale={locale} copy={quickSignupCopy} betaCopy={betaCopy} />
      </div>
      <AirportHubLinks
        locale={locale}
        title={airportsHubTitle}
        allLabel={airportsHubAll}
        className="guide-airports"
      />
    </div>
  </section>
);

export default Hero;
