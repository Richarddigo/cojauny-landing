import type { LegalPageCopy } from '@/locales/legal';

interface LegalArticleProps {
    copy: LegalPageCopy;
}

const LegalArticle = ({ copy }: LegalArticleProps) => (
    <section className="legal-shell">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-white">{copy.title}</h1>
            <p className="mt-4 text-base text-studio-muted">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-8">
            {copy.sections.map((section) => (
                <article key={section.heading} className="legal-card">
                    <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                    <p className="mt-2 text-sm leading-6 text-studio-muted">{section.body}</p>
                </article>
            ))}
        </div>
        <p className="legal-callout">{copy.contact}</p>
    </section>
);

export default LegalArticle;

