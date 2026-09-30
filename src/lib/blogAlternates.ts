import { allBlogPosts, type BlogPost } from '@/content/blog/posts';
import { buildCanonicalUrl } from './jsonld';
import type { Metadata } from 'next';
export function buildBlogAlternates(post: BlogPost): Metadata['alternates'] {
  const peers = allBlogPosts.filter(item => item.postId === post.postId);
  const fallback = peers.find(item => item.locale === 'en') ?? post;
  return {
    canonical: buildCanonicalUrl(post.locale, `/blog/${post.slug}`),
    languages: {
      ...Object.fromEntries(peers.map(item => [item.locale, buildCanonicalUrl(item.locale, `/blog/${item.slug}`)])),
      'x-default': buildCanonicalUrl(fallback.locale, `/blog/${fallback.slug}`),
    },
  };
}
