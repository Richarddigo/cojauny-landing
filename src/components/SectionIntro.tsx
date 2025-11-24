"use client";

import { motion } from 'framer-motion';

interface SectionIntroProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    tone?: 'light' | 'dark';
    isDark?: boolean;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    eyebrowClassName?: string;
}

const baseVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
};

const SectionIntro = ({
    eyebrow,
    title,
    description,
    align = 'center',
    tone = 'dark',
    isDark,
    className = '',
    titleClassName,
    descriptionClassName,
    eyebrowClassName
}: SectionIntroProps) => {
    // isDark overrides tone if provided for backwards compatibility
    const effectiveTone = isDark !== undefined ? (isDark ? 'dark' : 'light') : tone;
    const alignmentClasses = align === 'center' ? 'mx-auto text-center' : 'text-left';
    const widthClasses = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';
    const titleClasses = titleClassName ?? (effectiveTone === 'dark' ? 'text-slate-900' : 'text-white');
    const descriptionClasses = descriptionClassName ?? (effectiveTone === 'dark' ? 'text-slate-600' : 'text-white/80');
    const eyebrowClasses = eyebrowClassName ?? (effectiveTone === 'dark' ? 'text-brand-400' : 'text-white/70');

    return (
        <motion.div
            initial={baseVariants.hidden}
            whileInView={baseVariants.visible}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className={`${alignmentClasses} ${widthClasses} ${className}`.trim()}
        >
            {eyebrow && (
                <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowClasses}`}>
                    {eyebrow}
                </p>
            )}
            <h2 className={`mt-4 text-3xl font-bold tracking-tight ${titleClasses} sm:text-4xl`}>
                {title}
            </h2>
            {description && <p className={`mt-4 text-lg ${descriptionClasses}`}>{description}</p>}
        </motion.div>
    );
};

export default SectionIntro;
