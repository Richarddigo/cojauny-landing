import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from '@/locales/config';

const supported = ['es', 'en', 'de', 'fr'];

function pickLocale(acceptLang?: string | null) {
  if (!acceptLang) return defaultLocale;
  const parts = acceptLang.split(',').map(p => p.split(';')[0].trim().toLowerCase());
  for (const p of parts) {
    // language-region -> language
    const lang = p.split('-')[0];
    if (supported.includes(lang)) return lang;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { nextUrl, headers } = req;
  const pathname = nextUrl.pathname;

  // Skip API routes, _next, static files and internal assets
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // If path already contains a supported locale as first segment, do nothing
  const first = pathname.split('/')[1];
  if (supported.includes(first)) {
    return NextResponse.next();
  }

  const accept = headers.get('accept-language');
  const locale = pickLocale(accept);
  const destination = `/${locale}${pathname === '/' ? '' : pathname}`;
  // Debug: log detection (visible in Next dev server log) and add header on redirect
  try {
    // eslint-disable-next-line no-console
    console.log('[middleware] Accept-Language:', accept, '->', locale, 'redirecting to', destination);
  } catch (_e) {}

  const res = NextResponse.redirect(new URL(destination, req.url));
  res.headers.set('x-detected-locale', locale);
  return res;
}

export const config = {
  matcher: [
    // Skip _next internals, static files, and API routes
    '/((?!_next|api|.*\\..*).*)',
  ],
};
