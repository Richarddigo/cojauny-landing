import {
  BoltIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  LockClosedIcon,
  FlagIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import type { LandingCopy, IconName } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface FeaturesProps {
  copy: LandingCopy['features'];
}

const iconMap: Record<IconName, typeof BoltIcon> = {
  bolt: BoltIcon,
  users: UsersIcon,
  chat: ChatBubbleLeftRightIcon,
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
  globe: GlobeAltIcon,
  lock: LockClosedIcon,
  flag: FlagIcon,
  pin: MapPinIcon,
};

const Features = ({ copy }: FeaturesProps) => {
  return (
    <section id="features" className="guide-section guide-features bg-studio-bg">
      <div className="guide-shell">
        <SectionIntro title={copy.title} description={copy.subtitle} align="left" />
        <div className="guide-feature-list">
          {copy.items.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <article key={feature.title} className="guide-feature">
                <span className="guide-feature-icon">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white md:mt-6 md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-studio-muted md:mt-4 md:text-base">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
