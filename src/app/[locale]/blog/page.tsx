import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getPostsByLocale } from '@/content/blog/posts';
import { locales, type Locale } from '@/locales/config';
import { getBlogCopy } from '@/locales/blog';
import { siteMetadata, ogImages } from '@/lib/site';
import { buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import StructuredData from '@/components/StructuredData';

interface BlogIndexProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: BlogIndexProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
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

export default async function BlogIndex({ params }: BlogIndexProps) {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getBlogCopy(locale);
    const common = await getTranslations({ locale, namespace: 'common' });
    const posts = getPostsByLocale(locale);
    const breadcrumb = buildBreadcrumbJsonLd(locale, [
        { name: 'Cojauny', absoluteUrl: siteMetadata.url },
        { name: copy.heading, path: '/blog' }
    ]);

    return (
        <section className="mx-auto max-w-5xl px-4 py-20 pl-[calc(var(--social-bar-offset)+1rem)] sm:px-6">
            <StructuredData id={`ld-blog-breadcrumb-${locale}`} data={breadcrumb} />
            <header className="text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-studio-accent">{common('blogEyebrow')}</p>
                <h1 className="mt-4 text-4xl font-bold text-white">{copy.heading}</h1>
                <p className="mt-3 text-lg text-studio-muted">{copy.subtitle}</p>
            </header>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/${locale}/blog/${post.slug}`}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-studio-surface/80 p-8 shadow-soft-glow backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-studio-accent/40 hover:shadow-2xl hover:shadow-studio-accent/10"
                    >
                        <div className="mb-8 flex items-center justify-center">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-studio-accent/10 to-studio-surface shadow-inner transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/assets/logo/mountain_black.svg"
                                    alt="Cojauny"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>
                            <div className="ml-3 text-xs text-studio-muted">
                                <strong>
                                    {common('airportSavingsBadge')}
                                </strong>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-studio-accent/10 px-2.5 py-0.5 text-xs font-medium text-studio-accent ring-1 ring-inset ring-studio-accent/20">
                                    {post.categories[0] ? post.categories[0].toUpperCase() : copy.categoryFallback.toUpperCase()}
                                </span>
                                <span className="text-xs font-medium text-studio-faint">
                                    - {post.readingTimeMinutes} {copy.readTimeLabel}
                                </span>
                            </div>

                            <h2 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-studio-accent">
                                {post.title}
                            </h2>

                            <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-studio-muted">
                                {post.summary}
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="text-xs font-medium text-studio-faint">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-studio-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {copy.readMoreLabel} {'->'}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {posts.length === 0 && (
                <p className="mt-10 rounded-3xl border border-dashed border-white/20 bg-studio-surface px-6 py-4 text-center text-sm text-studio-muted">
                    {copy.empty}
                </p>
            )}
        </section>
    );
}

