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
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                <SectionIntro title={copy.title} description={copy.intro} />
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {copy.steps.map(step => {
                        return (
                            <article
                                key={step.title}
                                className="relative rounded-2xl border border-white/10 bg-studio-surface/50 p-5 md:p-6"
                            >
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

