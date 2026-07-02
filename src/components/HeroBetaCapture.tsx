"use client";

import { useRef, useState, type FormEvent } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { apiClient, ApiError } from '@/lib/api-client';
import { betaSignupSchema } from '@/lib/validation';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import Button from '@/components/ui/Button';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

interface HeroBetaCaptureProps {
  locale: Locale;
  copy: LandingCopy['heroQuickSignup'];
  betaCopy: LandingCopy['forms']['beta'];
}

export default function HeroBetaCapture({ locale, copy, betaCopy }: HeroBetaCaptureProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [accepted, setAccepted] = useState(false);
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
      fullName,
      locale,
      termsAccepted: accepted,
      privacyAccepted: accepted,
      honeypot: '',
    };

    const parsed = betaSignupSchema.safeParse(payload);
    if (!parsed.success) {
      setSubmitting(false);
      setMessage({ type: 'error', text: betaCopy.error });
      return;
    }

    try {
      await apiClient.beta.signup({ ...parsed.data, cfTurnstileResponse: turnstileToken });
      setMessage({ type: 'success', text: copy.success });
      setEmail('');
      setFullName('');
      setAccepted(false);
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
    <div className="mx-auto mt-10 max-w-xl sm:mt-12">
      <form
        onSubmit={handleSubmit}
        onFocus={() => { if (!interacted) setInteracted(true); }}
        className="rounded-2xl border border-white/10 bg-studio-surface/80 p-4 shadow-soft-glow backdrop-blur-sm sm:p-5"
        aria-label={copy.ariaLabel}
      >
        {copy.urgencyBadge && (
          <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-studio-accent/10 px-3 py-1 text-xs font-semibold text-studio-accent">
            {copy.urgencyBadge}
          </p>
        )}
        <p className="mb-3 text-sm font-medium text-studio-muted">{copy.label}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={copy.namePlaceholder}
            required
            autoComplete="name"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-studio-surface-2 px-4 py-3 text-sm text-studio-text placeholder:text-studio-faint focus:border-studio-accent focus:outline-none focus:ring-2 focus:ring-studio-accent/20"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            required
            autoComplete="email"
            inputMode="email"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-studio-surface-2 px-4 py-3 text-sm text-studio-text placeholder:text-studio-faint focus:border-studio-accent focus:outline-none focus:ring-2 focus:ring-studio-accent/20"
          />
          <Button type="submit" disabled={!accepted} loading={submitting} className="shrink-0">
            {submitting ? copy.submitting : copy.submit}
          </Button>
        </div>
        <label className="mt-3 flex items-start gap-2 text-left text-xs text-studio-muted">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 rounded border-white/20 bg-studio-surface-2 text-studio-accent focus:ring-studio-accent/30"
            required
          />
          <span>{copy.privacyNote}</span>
        </label>
        {interacted && TURNSTILE_SITE_KEY && (
          <div className="mt-3 flex justify-center">
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
            className={`mt-3 text-sm ${message.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}
