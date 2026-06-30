function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-3xl border border-white/5 bg-studio-surface/40 ${className ?? 'min-h-[320px]'}`}
      aria-hidden
    />
  );
}

export function DemoSectionSkeleton() {
  return <SectionSkeleton className="min-h-[480px] w-full" />;
}

export function FaqSectionSkeleton() {
  return <SectionSkeleton className="min-h-[400px] w-full" />;
}

export function BetaSignupFormSkeleton() {
  return <SectionSkeleton className="min-h-[520px] w-full max-w-2xl mx-auto" />;
}

export function FeedbackFormSkeleton() {
  return <SectionSkeleton className="min-h-[360px] w-full max-w-2xl mx-auto" />;
}
