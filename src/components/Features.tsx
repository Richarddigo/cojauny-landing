import {
    BoltIcon,
    UsersIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    SparklesIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import type { LandingCopy, IconName } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';
import AnimateIn from '@/components/ui/AnimateIn';

interface FeaturesProps {
    copy: LandingCopy['features'];
}

const iconMap: Record<IconName, typeof BoltIcon> = {
    bolt: BoltIcon,
    users: UsersIcon,
    chat: ChatBubbleLeftRightIcon,
    shield: ShieldCheckIcon,
    sparkles: SparklesIcon,
    globe: GlobeAltIcon
};

const Features = ({ copy }: FeaturesProps) => {
    return (
        <section
            id="features"
            className="relative w-full scroll-mt-[74px] border-y border-transparent bg-studio-bg py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                <AnimateIn>
                    <SectionIntro title={copy.title} description={copy.subtitle} />
                </AnimateIn>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                    {copy.items.map((feature, index) => {
                        const Icon = iconMap[feature.iconName];
                        return (
                            <AnimateIn key={feature.title} delay={index * 0.06}>
                                <article className="card-dark h-full p-6 md:p-8">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-studio-accent/10 text-studio-accent">
                                        <Icon className="h-6 w-6" aria-hidden />
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold text-white md:mt-6 md:text-xl">{feature.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-studio-muted md:mt-4 md:text-base">{feature.description}</p>
                                </article>
                            </AnimateIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;

