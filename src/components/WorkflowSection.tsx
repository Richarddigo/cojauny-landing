import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';
import AnimateIn from '@/components/ui/AnimateIn';

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
                <AnimateIn>
                    <SectionIntro title={copy.title} description={copy.intro} />
                </AnimateIn>
                <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
                    {copy.steps.map((step, index) => {
                        return (
                            <AnimateIn key={step.title} delay={index * 0.06}>
                                <article className="card-dark p-6 md:p-8">
                                    <h3 className="text-lg font-semibold text-white md:text-xl">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-studio-muted md:mt-3 md:text-base">{step.description}</p>
                                </article>
                            </AnimateIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;

