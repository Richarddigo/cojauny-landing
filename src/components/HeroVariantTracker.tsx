'use client';

import { useEffect } from 'react';
import { trackHeroVariant } from '@/lib/analytics';
import type { HeroVariant } from '@/lib/heroVariant';

interface HeroVariantTrackerProps {
  variant: HeroVariant;
}

/** Fires once per page load so GA can segment conversion by hero arm. */
export default function HeroVariantTracker({ variant }: HeroVariantTrackerProps) {
  useEffect(() => {
    trackHeroVariant(variant);
  }, [variant]);

  return null;
}
