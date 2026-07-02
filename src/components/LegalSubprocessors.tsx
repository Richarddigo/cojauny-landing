interface Subprocessor {
    name: string;
    purpose: string;
    location: string;
    security: string;
}

interface LegalSubprocessorsCopy {
    title: string;
    intro: string;
    updatedAt: string;
    fieldLabels: { purpose: string; location: string; security: string };
    providers: Subprocessor[];
    contact: string;
}

const LegalSubprocessors = ({ copy }: { copy: LegalSubprocessorsCopy }) => (
    <section className="legal-shell">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-white">{copy.title}</h1>
            <p className="mt-4 text-base text-studio-muted">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-6">
            {copy.providers.map((p) => (
                <article key={p.name} className="legal-card">
                    <h2 className="text-xl font-semibold text-white">{p.name}</h2>
                    <p className="mt-2 text-sm text-studio-muted"><strong>{copy.fieldLabels.purpose}:</strong> {p.purpose}</p>
                    <p className="mt-1 text-sm text-studio-muted"><strong>{copy.fieldLabels.location}:</strong> {p.location}</p>
                    <p className="mt-1 text-sm text-studio-muted"><strong>{copy.fieldLabels.security}:</strong> {p.security}</p>
                </article>
            ))}
        </div>
        <p className="legal-callout">{copy.contact}</p>
    </section>
);

export default LegalSubprocessors;

