"use client";

import { useRef, useState, type FormEvent } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { apiClient, ApiError } from '@/lib/api-client';
import { trackBetaSignup } from '@/lib/analytics';
import { heroBetaSignupSchema } from '@/lib/validation';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

interface HeroBetaCaptureProps {
  locale: Locale;
  copy: LandingCopy['heroQuickSignup'];
  betaCopy: LandingCopy['forms']['beta'];
}

export default function HeroBetaCapture({ locale, copy, betaCopy }: HeroBetaCaptureProps) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [interacted, setInteracted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const payload = {
      email,
      locale,
      termsAccepted: true as const,
      privacyAccepted: true as const,
      honeypot: '',
    };

    const parsed = heroBetaSignupSchema.safeParse(payload);
    if (!parsed.success) {
      setSubmitting(false);
      setMessage({ type: 'error', text: betaCopy.error });
      return;
    }

    try {
      await apiClient.beta.signup({ ...parsed.data, cfTurnstileResponse: turnstileToken });
      trackBetaSignup('hero');
      setMessage({ type: 'success', text: copy.success });
      setEmail('');
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } catch (err) {
      if (err instanceof ApiError && err.code === 'beta_duplicate_email') {
        setMessage({ type: 'success', text: betaCopy.duplicateError ?? copy.success });
      } else {
        setMessage({ type: 'error', text: betaCopy.error });
      }
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-lg sm:mt-10">
      <form
        onSubmit={handleSubmit}
        onFocus={() => {
          if (!interacted) setInteracted(true);
        }}
        className="rounded-2xl border border-white/12 bg-studio-surface/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6"
        aria-label={copy.ariaLabel}
      >
        <p className="text-left text-sm font-semibold tracking-tight text-white">{copy.label}</p>
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-stretch">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            required
            autoComplete="email"
            inputMode="email"
            className="min-h-[48px] min-w-0 flex-1 rounded-xl border border-white/12 bg-[#141b2b] px-4 py-3 text-sm text-white placeholder:text-studio-faint focus:border-studio-accent focus:outline-none focus:ring-2 focus:ring-studio-accent/25"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-xl bg-studio-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-studio-accent-dim disabled:cursor-not-allowed disabled:opacity-60 sm:px-8"
          >
            {submitting ? copy.submitting : copy.submit}
          </button>
        </div>
        <p className="mt-3 text-left text-[11px] leading-relaxed text-studio-muted sm:text-xs">
          {copy.privacyNote}
        </p>
        {interacted && TURNSTILE_SITE_KEY && (
          <div className="mt-3 flex justify-start">
            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken('')}
              options={{ theme: 'dark', size: 'compact' }}
            />
          </div>
        )}
        {message && (
          <p
            role="status"
            className={`mt-3 text-left text-sm ${message.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}
