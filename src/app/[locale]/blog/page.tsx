import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getPostsByLocale } from '@/content/blog/posts';
import { locales, type Locale } from '@/locales/config';
import { getBlogCopy } from '@/locales/blog';
import { siteMetadata, ogImages } from '@/lib/site';
import { buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import StructuredData from '@/components/StructuredData';

interface BlogIndexProps {
    params: { locale: string };
}

export const revalidate = 3600;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: BlogIndexProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getBlogCopy(locale);
    const alternates = buildLocaleAlternates(locale, '/blog');

    return {
        title: copy.meta.title,
        description: copy.meta.description,
        openGraph: {
            title: copy.meta.ogTitle,
            description: copy.meta.ogDescription,
            url: `${siteMetadata.url}/${locale}/blog`,
            type: 'website',
            siteName: siteMetadata.name,
            images: ogImages,
            locale
        },
        twitter: {
            card: 'summary_large_image',
            title: copy.meta.ogTitle,
            description: copy.meta.ogDescription,
            site: siteMetadata.twitter,
            creator: siteMetadata.twitter
        },
        alternates
    };
}

export default function BlogIndex({ params }: BlogIndexProps) {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getBlogCopy(locale);
    const posts = getPostsByLocale(locale);
    const breadcrumb = buildBreadcrumbJsonLd(locale, [
        { name: 'Cojauny', absoluteUrl: siteMetadata.url },
        { name: copy.heading, path: '/blog' }
    ]);

    return (
        <section className="mx-auto max-w-5xl px-6 py-20">
            <StructuredData id={`ld-blog-breadcrumb-${locale}`} data={breadcrumb} />
            <header className="text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-600">Blog</p>
                <h1 className="mt-4 text-4xl font-bold text-slate-900">{copy.heading}</h1>
                <p className="mt-3 text-lg text-slate-600">{copy.subtitle}</p>
            </header>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/${locale}/blog/${post.slug}`}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-8 shadow-soft-glow backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10"
                    >
                        <div className="mb-8 flex items-center justify-center">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-white shadow-inner transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/assets/logo/mountain_black.svg"
                                    alt="Cojauny"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>
                            <div className="ml-3 text-xs text-slate-700">
                                <strong>
                                    {locale === 'es' ? 'Ahorra en cada viaje al aeropuerto' : locale === 'de' ? 'Spare bei jeder Fahrt zum Flughafen' : locale === 'fr' ? "Économise sur chaque trajet vers l'aéroport" : 'Save on every trip to the airport'}
                                </strong>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10">
                                    {post.categories[0] ? post.categories[0].toUpperCase() : 'BLOG'}
                                </span>
                                <span className="text-xs font-medium text-slate-400">
                                    • {post.readingTimeMinutes} {copy.readTimeLabel}
                                </span>
                            </div>

                            <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-brand-600">
                                {post.title}
                            </h2>

                            <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">
                                {post.summary}
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="text-xs font-medium text-slate-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Read more →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {posts.length === 0 && (
                <p className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm text-slate-600">
                    {copy.empty}
                </p>
            )}
        </section>
    );
}
