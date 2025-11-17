import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { blogPosts, getPost } from '@/content/blog/posts';
import { locales, type Locale } from '@/locales/config';
import { getBlogCopy } from '@/locales/blog';
import { siteMetadata } from '@/lib/site';
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import StructuredData from '@/components/StructuredData';

interface BlogPageProps {
    params: { locale: string; slug: string };
}

export const revalidate = 3600;

export function generateStaticParams() {
    return blogPosts.map((post) => ({ locale: post.locale, slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
    const locale = params.locale as Locale;
    const { slug } = params;
    if (!locales.includes(locale)) {
        notFound();
    }

    const post = getPost(locale, slug);
    if (!post) {
        notFound();
    }

    const alternates = buildLocaleAlternates(locale, `/blog/${slug}`);

    return {
        title: post.title,
        description: post.summary,
        alternates,
        openGraph: {
            title: post.title,
            description: post.summary,
            url: `${siteMetadata.url}/${locale}/blog/${post.slug}`,
            type: 'article',
            images: [
                {
                    url: `${siteMetadata.url}${post.heroImage}`,
                    width: post.heroWidth,
                    height: post.heroHeight,
                    alt: post.heroAlt
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            site: siteMetadata.twitter,
            creator: siteMetadata.twitter
        }
    };
}

export default function BlogPostPage({ params }: BlogPageProps) {
    const locale = params.locale as Locale;
    const { slug } = params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const post = getPost(locale, slug);
    const copy = getBlogCopy(locale);

    if (!post) {
        notFound();
    }

    const articleJson = buildArticleJsonLd(locale, {
        title: post.title,
        description: post.summary,
        slug: post.slug,
        categories: post.categories,
        heroImage: { src: post.heroImage, width: post.heroWidth, height: post.heroHeight },
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        author: post.author
    });

    const breadcrumb = buildBreadcrumbJsonLd(locale, [
        { name: 'Cojauny', absoluteUrl: siteMetadata.url },
        { name: copy.heading, path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` }
    ]);

    return (
        <article className="mx-auto max-w-3xl px-6 py-20">
            <StructuredData id={`ld-article-${locale}-${slug}`} data={articleJson} />
            <StructuredData id={`ld-article-breadcrumb-${locale}-${slug}`} data={breadcrumb} />
            <Link
                href={`/${locale}/blog`}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 hover:text-brand-700"
            >
                {copy.backLabel}
            </Link>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">{post.title}</h1>
            <p className="mt-3 text-base text-slate-600">{post.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                {post.readingTimeMinutes} {copy.readTimeLabel}
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100">
                <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    width={post.heroWidth}
                    height={post.heroHeight}
                    className="h-auto w-full"
                    priority={false}
                />
            </div>
            <div className="mt-10 space-y-6 text-lg text-slate-700">
                {post.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
            <footer className="mt-12 flex flex-col gap-2 text-sm text-slate-500">
                <span>
                    {new Date(post.publishedAt).toLocaleDateString(locale)} · {post.author}
                </span>
                <span>
                    {copy.updatedLabel}:{' '}
                    <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString(locale)}</time>
                </span>
                <span className="text-slate-600">{copy.shareLabel}: {`${siteMetadata.url}/${locale}/blog/${post.slug}`}</span>
            </footer>
        </article>
    );
}
