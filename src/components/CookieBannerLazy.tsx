'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type CookieBannerComponent from './CookieBanner';

// Deferred client-only mount: removes CookieBanner hydration cost from the
// critical path. The banner only appears after hydration when consent is unknown.
const CookieBanner = dynamic(() => import('./CookieBanner'), {
    ssr: false,
    loading: () => null,
});

type Props = ComponentProps<typeof CookieBannerComponent>;

export default function CookieBannerLazy(props: Props) {
    return <CookieBanner {...props} />;
}
