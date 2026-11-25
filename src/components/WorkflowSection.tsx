import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface WorkflowSectionProps {
  copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => (
  <section id="how-it-works" className="guide-section guide-workflow bg-studio-bg">
    <div className="guide-shell">
      <SectionIntro title={copy.title} description={copy.intro} align="left" />
      <ol className="guide-itinerary">
        {copy.steps.map((step, index) => (
          <li key={step.title}>
            <span className="guide-itinerary-stop" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{step.title.replace(/^\d+[.)]\s*/, '')}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkflowSection;
