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

const SectionIntro = ({
    eyebrow,
    title,
    description,
    align = 'center',
    tone = 'light',
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
        <div className={`${alignmentClasses} ${widthClasses} ${className}`.trim()}>
            {eyebrow && (
                <p
                    className={`text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowClasses} inline-block max-w-full break-words`}
                >
                    {eyebrow}
                </p>
            )}
            <h2 className={`mt-2 text-2xl font-bold tracking-tight ${titleClasses} sm:mt-4 sm:text-3xl`}>
                {title}
            </h2>
            {description && <p className={`mt-2 text-base sm:mt-4 sm:text-lg ${descriptionClasses}`}>{description}</p>}
        </div>
    );
};

export default SectionIntro;
