import type { PricingCopy } from '@/locales/copy';

interface PricingSectionProps {
    copy: PricingCopy;
}

const PricingSection = ({ copy }: PricingSectionProps) => {
    return (
        <section id="precios" className="mx-auto mt-24 max-w-7xl px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {copy.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">{copy.subtitle}</p>
            </div>

            {/* Plans */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
                {/* Free Plan */}
                <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900">{copy.plans.free.name}</h3>
                    <p className="mt-4 flex items-baseline">
                        <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                            {copy.plans.free.price}
                        </span>
                    </p>
                    <p className="mt-6 text-gray-600">{copy.plans.free.description}</p>
                    <button className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-gray-800">
                        {copy.plans.free.cta}
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="relative rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
                    {copy.plans.premium.badge && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1 text-sm font-semibold text-white">
                            {copy.plans.premium.badge}
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">{copy.plans.premium.name}</h3>
                    <p className="mt-4 flex items-baseline">
                        <span className="text-5xl font-extrabold tracking-tight text-blue-600">
                            {copy.plans.premium.price}
                        </span>
                    </p>
                    <p className="mt-6 text-gray-600">{copy.plans.premium.description}</p>
                    <button className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700">
                        {copy.plans.premium.cta}
                    </button>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-16">
                <h3 className="text-center text-2xl font-bold text-gray-900">{copy.comparison.title}</h3>
                <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                >
                                    {/* Feature column */}
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                    Free
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-center text-sm font-semibold text-blue-600"
                                >
                                    Premium
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {copy.comparison.features.map((feature, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900">
                                        {feature.feature}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-600">
                                        {typeof feature.free === 'boolean' ? (
                                            feature.free ? (
                                                <span className="text-green-600">✓</span>
                                            ) : (
                                                <span className="text-gray-300">—</span>
                                            )
                                        ) : (
                                            feature.free
                                        )}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-blue-600">
                                        {typeof feature.premium === 'boolean' ? (
                                            feature.premium ? (
                                                <span className="text-green-600">✓</span>
                                            ) : (
                                                <span className="text-gray-300">—</span>
                                            )
                                        ) : (
                                            feature.premium
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
