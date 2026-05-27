import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { blogPosts, getPost } from '@/content/blog/posts';
import { locales, type Locale } from '@/locales/config';
import { getBlogCopy } from '@/locales/blog';
import { siteMetadata } from '@/lib/site';
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildLocaleAlternates } from '@/lib/jsonld';
import StructuredData from '@/components/StructuredData';

interface BlogPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 3600;

export function generateStaticParams() {
    return blogPosts.map((post) => ({ locale: post.locale, slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { locale: localeParam, slug } = await params;
    const locale = localeParam as Locale;
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

export default async function BlogPostPage({ params }: BlogPageProps) {
    const { locale: localeParam, slug } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const post = getPost(locale, slug);
    const copy = getBlogCopy(locale);
    const common = await getTranslations({ locale, namespace: 'common' });

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
        <article className="relative mx-auto max-w-3xl px-6 py-20">
            <StructuredData id={`ld-article-${locale}-${slug}`} data={articleJson} />
            <StructuredData id={`ld-article-breadcrumb-${locale}-${slug}`} data={breadcrumb} />
            <Link
                href={`/${locale}/blog`}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent hover:text-white"
            >
                {copy.backLabel}
            </Link>
            <h1 className="mt-3 text-4xl font-bold text-white">{post.title}</h1>
            <p className="mt-3 text-base text-studio-muted">{post.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent">
                {post.readingTimeMinutes} {copy.readTimeLabel}
            </p>
            <div className="mt-8 flex items-center justify-center overflow-hidden rounded-3xl border border-studio-accent/20 bg-gradient-to-br from-studio-accent/10 via-studio-accent/5 to-studio-surface py-16 shadow-lg shadow-studio-accent/10">
                <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-4 rounded-full bg-studio-accent/10 blur-xl"></div>
                    <Image
                        src="/assets/logo/mountain_black.svg"
                        alt="Cojauny"
                        width={90}
                        height={90}
                        className="relative h-22 w-22 opacity-90 drop-shadow-sm"
                        priority={true}
                    />
                    <div className="mt-4 text-sm text-studio-muted">
                        <strong>
                            {common('airportSavingsBadge')}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="prose prose-invert prose-lg mt-10 max-w-none prose-headings:font-bold prose-headings:text-white prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:text-studio-muted prose-p:leading-relaxed prose-a:text-studio-accent prose-a:no-underline hover:prose-a:text-white hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-li:text-studio-muted">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.body.join('\n\n')}
                </ReactMarkdown>
            </div>
            <footer className="mt-12 flex flex-col gap-2 text-sm text-studio-muted">
                <span suppressHydrationWarning>
                    {new Date(post.publishedAt).toLocaleDateString(locale)} - {post.author}
                </span>
                <span suppressHydrationWarning>
                    {copy.updatedLabel}:{' '}
                    <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString(locale)}</time>
                </span>
                <span className="text-studio-muted">{copy.shareLabel}: {`${siteMetadata.url}/${locale}/blog/${post.slug}`}</span>
            </footer>
        </article>
    );
}

