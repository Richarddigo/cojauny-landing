import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './src/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = `/${routing.defaultLocale}`;
        return NextResponse.rewrite(url);
    }

    return handleI18nRouting(request);
}

export const config = {
    matcher: [
        // Match all paths except _next internals, static files, and API routes
        '/((?!_next|api|.*\\..*).*)',
    ],
};