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
    <section className="legal-shell">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-white">{copy.title}</h1>
            <p className="mt-4 text-base text-studio-muted">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-8">
            {copy.categories.map((cat) => (
                <div key={cat.name}>
                    <h2 className="text-xl font-semibold text-white">{cat.name}</h2>
                    <dl className="mt-4 space-y-4">
                        {cat.questions.map((q) => (
                            <div key={q.question} className="legal-card">
                                <dt className="text-base font-semibold text-white">{q.question}</dt>
                                <dd className="mt-2 text-sm leading-6 text-studio-muted">{q.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            ))}
        </div>
        <p className="legal-callout">{copy.contact}</p>
    </section>
);

export default LegalFaq;

