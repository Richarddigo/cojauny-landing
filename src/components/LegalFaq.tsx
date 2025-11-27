interface FAQQuestion {
    question: string;
    answer: string;
}

interface FAQCategory {
    name: string;
    questions: FAQQuestion[];
}

interface LegalFaqCopy {
    title: string;
    intro: string;
    updatedAt: string;
    categories: FAQCategory[];
    contact: string;
}

const LegalFaq = ({ copy }: { copy: LegalFaqCopy }) => (
    <section className="mx-auto max-w-4xl px-6 py-24">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">{copy.title}</h1>
            <p className="mt-4 text-base text-slate-600">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-8">
            {copy.categories.map((cat) => (
                <div key={cat.name}>
                    <h2 className="text-xl font-semibold text-slate-900">{cat.name}</h2>
                    <dl className="mt-4 space-y-4">
                        {cat.questions.map((q) => (
                            <div key={q.question} className="rounded-3xl border border-slate-100 bg-white/60 p-6">
                                <dt className="text-base font-semibold text-slate-900">{q.question}</dt>
                                <dd className="mt-2 text-sm leading-6 text-slate-600">{q.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            ))}
        </div>
        <p className="mt-12 rounded-3xl bg-brand-50 p-6 text-sm text-brand-900">{copy.contact}</p>
    </section>
);

export default LegalFaq;
