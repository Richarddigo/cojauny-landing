'use client';
import { useConsent } from '@/hooks/useConsent';

import { useEffect, useRef } from 'react';
import { trackHeroVariant } from '@/lib/analytics';
import type { HeroVariant } from '@/lib/heroVariant';

interface HeroVariantTrackerProps {
  variant: HeroVariant;
}

/** Fires once per page load so GA can segment conversion by hero arm. */
export default function HeroVariantTracker({ variant }: HeroVariantTrackerProps) {
  const { analyticsAllowed } = useConsent();
  const recorded = useRef<string | null>(null);
  useEffect(() => {
    if (!analyticsAllowed || recorded.current === variant) return;
    recorded.current = variant;
    trackHeroVariant(variant);
  }, [variant, analyticsAllowed]);

  return null;
}
