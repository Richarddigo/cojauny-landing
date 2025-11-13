import type { LegalPageCopy } from '@/locales/legal';

interface LegalArticleProps {
    copy: LegalPageCopy;
}

const LegalArticle = ({ copy }: LegalArticleProps) => (
    <section className="mx-auto max-w-4xl px-6 py-24">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">{copy.title}</h1>
            <p className="mt-4 text-base text-slate-600">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-8">
            {copy.sections.map((section) => (
                <article key={section.heading} className="rounded-3xl border border-slate-100 bg-white/60 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{section.body}</p>
                </article>
            ))}
        </div>
        <p className="mt-12 rounded-3xl bg-brand-50 p-6 text-sm text-brand-900">{copy.contact}</p>
    </section>
);

export default LegalArticle;
