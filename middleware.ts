import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const HERO_COOKIE = 'hero_variant';
const HERO_COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 days

function assignHeroVariant(request: NextRequest): 'trust' | 'savings' {
  const envVariant = process.env.NEXT_PUBLIC_HERO_VARIANT;
  if (envVariant === 'savings' || envVariant === 'trust') {
    return envVariant;
  }

  const existing = request.cookies.get(HERO_COOKIE)?.value;
  if (existing === 'savings' || existing === 'trust') {
    return existing;
  }

  return Math.random() < 0.5 ? 'trust' : 'savings';
}

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  if (request.cookies.get('cojauny_analytics_consent')?.value !== 'granted') return response;
  const variant = assignHeroVariant(request);
  response.cookies.set(HERO_COOKIE, variant, {
    maxAge: HERO_COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
