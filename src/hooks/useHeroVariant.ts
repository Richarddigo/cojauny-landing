'use client';

import { useSyncExternalStore } from 'react';

import { getHeroVariantFromEnv, HERO_VARIANT_COOKIE, type HeroVariant } from '@/lib/heroVariant';

function readCookieVariant(): HeroVariant {
  if (typeof document === 'undefined') {
    return 'trust';
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${HERO_VARIANT_COOKIE}=([^;]*)`));
  const value = match?.[1];
  return value === 'savings' ? 'savings' : 'trust';
}

function subscribe() {
  return () => {};
}

function getSnapshot(): HeroVariant {
  const envVariant = getHeroVariantFromEnv();
  if (envVariant) {
    return envVariant;
  }
  return readCookieVariant();
}

function getServerSnapshot(): HeroVariant {
  return getHeroVariantFromEnv() ?? 'trust';
}

/** Client-side hero A/B variant from middleware cookie (keeps the page static). */
export function useHeroVariant(): HeroVariant {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
