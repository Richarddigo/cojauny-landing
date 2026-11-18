import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface ValuePropsSectionProps {
  copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => (
  <section id="benefits" className="guide-section guide-benefits bg-studio-bg">
    <div className="guide-shell guide-split">
      <SectionIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.subtitle}
        align="left"
      />
      <div className="guide-benefits-list">
        {copy.items.map((item, index) => (
          <article key={item.title}>
            <span className="guide-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsSection;
