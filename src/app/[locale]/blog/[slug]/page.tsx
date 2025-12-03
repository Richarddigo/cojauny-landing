import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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
                className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 hover:text-brand-700"
            >
                {copy.backLabel}
            </Link>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">{post.title}</h1>
            <p className="mt-3 text-base text-slate-600">{post.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                {post.readingTimeMinutes} {copy.readTimeLabel}
            </p>
            <div className="mt-8 flex items-center justify-center overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-100 via-brand-50 to-white py-16 shadow-lg shadow-brand-900/5">
                <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-4 rounded-full bg-brand-200/20 blur-xl"></div>
                    <Image
                        src="/assets/logo/mountain_black.svg"
                        alt="Cojauny"
                        width={90}
                        height={90}
                        className="relative h-22 w-22 opacity-90 drop-shadow-sm"
                        priority={true}
                    />
                    <div className="mt-4 text-sm text-slate-700">
                        <strong>
                            {locale === 'es' ? 'Ahorra en cada viaje al aeropuerto' : locale === 'de' ? 'Spare bei jeder Fahrt zum Flughafen' : locale === 'fr' ? "Économise sur chaque trajet vers l'aéroport" : 'Save on every trip to the airport'}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="prose prose-slate prose-lg mt-10 max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:text-brand-700 hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-li:text-slate-700">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.body.join('\n\n')}
                </ReactMarkdown>
            </div>
            <footer className="mt-12 flex flex-col gap-2 text-sm text-slate-500">
                <span suppressHydrationWarning>
                    {new Date(post.publishedAt).toLocaleDateString(locale)} · {post.author}
                </span>
                <span suppressHydrationWarning>
                    {copy.updatedLabel}:{' '}
                    <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString(locale)}</time>
                </span>
                <span className="text-slate-600">{copy.shareLabel}: {`${siteMetadata.url}/${locale}/blog/${post.slug}`}</span>
            </footer>
        </article>
    );
}
