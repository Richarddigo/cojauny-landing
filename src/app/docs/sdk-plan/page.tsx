export const metadata = {
    title: 'Plan de integración SDK'
};

const steps = [
    {
        title: 'Preparar deep links',
        description: 'Definir esquemas universales para iOS y Android con rutas reservadas.'
    },
    {
        title: 'Configurar Supabase',
        description:
            'Crear tablas de invitaciones, habilitar RLS y desplegar la función send-beta-email.'
    },
    {
        title: 'Implementar listeners',
        description: 'Usar edge functions para notificar a las apps móviles al aprobar usuarios.'
    }
];

export default function SdkPlanPage() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-24">
            <h1 className="text-4xl font-bold text-slate-900">Estrategia de integración con SDKs</h1>
            <p className="mt-4 text-slate-600">
                Este roadmap facilita que tu equipo técnico conecte Cojauny con las apps móviles existentes
                y controle el acceso mediante deep links seguros.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {steps.map((step) => (
                    <article
                        key={step.title}
                        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                    >
                        <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                        <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
