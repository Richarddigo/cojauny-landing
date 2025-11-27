interface Subprocessor {
    name: string;
    purpose: string;
    location: string;
    security: string;
}

const LegalSubprocessors = ({ copy }: { copy: { title: string; intro: string; updatedAt: string; providers: Subprocessor[]; contact: string } }) => (
    <section className="mx-auto max-w-4xl px-6 py-24">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">{copy.updatedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">{copy.title}</h1>
            <p className="mt-4 text-base text-slate-600">{copy.intro}</p>
        </header>
        <div className="mt-12 space-y-6">
            {copy.providers.map((p) => (
                <article key={p.name} className="rounded-3xl border border-slate-100 bg-white/60 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">{p.name}</h2>
                    <p className="mt-2 text-sm text-slate-700"><strong>Purpose:</strong> {p.purpose}</p>
                    <p className="mt-1 text-sm text-slate-700"><strong>Location:</strong> {p.location}</p>
                    <p className="mt-1 text-sm text-slate-700"><strong>Security:</strong> {p.security}</p>
                </article>
            ))}
        </div>
        <p className="mt-12 rounded-3xl bg-brand-50 p-6 text-sm text-brand-900">{copy.contact}</p>
    </section>
);

export default LegalSubprocessors;
