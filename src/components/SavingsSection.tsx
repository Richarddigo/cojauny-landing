import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface SavingsSectionProps {
  copy: LandingCopy['savings'];
}

const SavingsSection = ({ copy }: SavingsSectionProps) => (
  <section id="impact" className="guide-section guide-savings">
    <div className="guide-shell">
      <SectionIntro
        title={copy.title}
        description={copy.caption}
        isDark
        titleClassName="text-white"
        descriptionClassName="text-[rgb(196,204,255)]"
        align="left"
      />
      <div className="guide-metrics">
        {copy.metrics.map((metric) => (
          <article key={metric.label} className="guide-metric">
            <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {metric.value}
            </p>
            <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-[rgb(196,204,255)] sm:mt-3 sm:text-base">
              {metric.label}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
              {metric.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SavingsSection;
