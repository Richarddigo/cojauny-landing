import Link from 'next/link';
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
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                            {post.readingTimeMinutes} {copy.readTimeLabel}
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h2>
                        <p className="mt-3 text-sm text-slate-600">{post.summary}</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-700">
                            {post.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-brand-50 px-3 py-1">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={`/${locale}/blog/${post.slug}`}
                            className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700"
                        >
                            {locale === 'de'
                                ? 'Weiterlesen'
                                : locale === 'fr'
                                    ? 'Lire'
                                    : locale === 'en'
                                        ? 'Read more'
                                        : 'Leer más'}
                        </Link>
                    </article>
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
