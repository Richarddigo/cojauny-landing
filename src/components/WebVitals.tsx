"use client";
import { useReportWebVitals } from 'next/web-vitals';
import { hasAnalyticsConsent } from '@/lib/consent';
import { readConsent } from '@/lib/consent-store';
import type { Locale } from '@/locales/config';

/** Consent-gated field measurements; no email, referral code or query string. */
export default function WebVitals({ locale }: { locale: Locale }) {
  useReportWebVitals((metric) => {
    if (!hasAnalyticsConsent(readConsent())) return;
    window.gtag?.('event', 'web_vital', {
      metric_name: metric.name,
      value: metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value),
      metric_id: metric.id,
      locale,
      device: window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop',
      non_interaction: true,
    });
  });
  return null;
}
