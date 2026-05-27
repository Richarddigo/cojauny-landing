import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface WorkflowSectionProps {
    copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => {
    return (
        <section
            id="how-it-works"
            className="w-full scroll-mt-[74px] bg-studio-bg py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
        >
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <SectionIntro title={copy.title} description={copy.intro} />
                <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
                    {copy.steps.map(step => {
                        return (
                            <article
                                key={step.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-studio-surface p-6 shadow-lg transition-all duration-200 hover:border-studio-accent/30 hover:shadow-xl md:rounded-3xl md:p-8"
                            >
                                <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 opacity-0 transition group-hover:opacity-100 md:rounded-l-3xl" />
                                <h3 className="text-lg font-semibold text-white md:text-xl">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-studio-muted md:mt-3 md:text-base">{step.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;

