import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface ValuePropsSectionProps {
    copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => (
    <section
        id="benefits"
        className="w-full scroll-mt-[74px] bg-studio-bg py-14 md:py-20 lg:scroll-mt-[100px] lg:py-24"
    >
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
            <SectionIntro
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.subtitle}
                titleClassName="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                descriptionClassName="text-studio-muted text-base sm:text-lg"
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-6">
                {copy.items.map((item, index) => (
                    <article
                        key={item.title}
                        className="relative rounded-2xl border border-white/10 bg-studio-surface/70 p-6 transition hover:border-studio-accent/25 hover:bg-studio-surface/90 md:p-7"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-studio-accent/80">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-3 text-lg font-semibold text-white md:text-xl">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-studio-muted md:text-[0.95rem]">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default ValuePropsSection;
