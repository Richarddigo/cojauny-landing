import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';
import AnimateIn from '@/components/ui/AnimateIn';

interface SavingsSectionProps {
    copy: LandingCopy['savings'];
}

const SavingsSection = ({ copy }: SavingsSectionProps) => (
    <section
        id="impact"
        className="relative w-full scroll-mt-[74px] overflow-hidden bg-gradient-to-br from-studio-bg via-studio-surface to-studio-bg py-12 md:py-16 lg:py-24 lg:scroll-mt-[100px]"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(91,123,255,0.15),_transparent_50%)]" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
            <AnimateIn>
                <SectionIntro
                    title={copy.title}
                    description={copy.caption}
                    isDark
                    titleClassName="text-white"
                    descriptionClassName="text-[rgb(196,204,255)]"
                />
            </AnimateIn>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-4 lg:gap-10">
                {copy.metrics.map((metric, index) => (
                    <AnimateIn key={metric.label} delay={index * 0.06}>
                        <article className="hover-lift hover-lift-service h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:rounded-3xl md:p-8">
                            <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{metric.value}</p>
                            <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-[rgb(196,204,255)] sm:mt-3 sm:text-base">
                                {metric.label}
                            </span>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">{metric.description}</p>
                        </article>
                    </AnimateIn>
                ))}
            </div>
        </div>
    </section>
);

export default SavingsSection;
