import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface ValuePropsSectionProps {
    copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => {
    return (
        <section
            id="benefits"
            className="w-full scroll-mt-[74px] bg-studio-bg py-12 md:py-16 lg:py-24 lg:scroll-mt-[100px]"
        >
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <SectionIntro title={copy.title} description={copy.subtitle} />
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                    {copy.items.map((item, index) => {
                        return (
                            <article
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-studio-surface/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-studio-accent/30 hover:shadow-xl md:rounded-3xl md:p-8"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 opacity-0 transition group-hover:opacity-100" />
                                <div className="flex items-center gap-3 text-sm font-semibold text-studio-muted">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-studio-accent/10 text-studio-accent">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-white md:mt-6 md:text-xl">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-studio-muted md:mt-4 md:text-base">{item.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValuePropsSection;

