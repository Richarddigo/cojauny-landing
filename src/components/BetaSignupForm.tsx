"use client";

import { Fragment, useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import AlertMessage from '@/components/AlertMessage';
import { apiClient, ApiError } from '@/lib/api-client';


import { betaSignupSchema, type BetaSignupInput } from '@/lib/validation';
import { useAppMessages } from '@/i18n/useAppMessages';
import { getCommonCopy } from '@/locales/common';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import ReferralPanel from './ReferralPanel';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

interface BetaSignupFormProps {
    copy?: LandingCopy['forms']['beta'];
    referralPanelCopy?: LandingCopy['referralPanel'];
    locale: Locale;
}

interface BetaReferralStatsResponse {
    data?: Array<{ referral_link?: string }> | { referral_link?: string };
}

type TextareaLikeEvent = { target: EventTarget | null };

type BetaSignupFormState = BetaSignupInput & {
    flightFrequency: BetaSignupInput['flightFrequency'] | '';
};

const buildInitialState = (locale: Locale, referralCode?: string): BetaSignupFormState => ({
    email: '',
    fullName: '',
    useCase: '',
    country: '' as BetaSignupInput['country'],
    flightFrequency: undefined,
    homeAirport: '',
    updatesOptIn: false,
    termsAccepted: false,
    privacyAccepted: false,
    honeypot: '',
    locale,
    referralCode
});

const BetaSignupForm = ({ copy, referralPanelCopy, locale }: BetaSignupFormProps) => {
    const messages = useAppMessages();
    const resolvedCopy = copy ?? messages.landing.forms.beta;
    const resolvedReferralPanelCopy = referralPanelCopy ?? messages.landing.referralPanel;
    const common = getCommonCopy(locale);
    const [referralCode, setReferralCode] = useState<string | undefined>();
    const [form, setForm] = useState<BetaSignupFormState>(() => buildInitialState(locale, referralCode));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [showReferralPanel, setShowReferralPanel] = useState(false);
    const [referralLink, setReferralLink] = useState<string>('');
    const [turnstileToken, setTurnstileToken] = useState('');
    const turnstileRef = useRef<TurnstileInstance>(null);
    // Defer Turnstile mount until first interaction. Loading it eagerly adds
    // ~900KB of Cloudflare scripts to the critical path for visitors who never
    // submit the form.
    const [interacted, setInteracted] = useState(false);
    const MAX_CHARS = 1000;


    // Capture referral code from URL
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const urlParams = new URLSearchParams(window.location.search);
        const refParam = urlParams.get('ref');

        if (refParam) {
            setReferralCode(refParam);
            // Track visit
            apiClient.referral.visit(refParam).catch(() => { });
        }
    }, []);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            const checked = (event.target as HTMLInputElement).checked;
            setForm((prev) => ({ ...prev, [name]: checked }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
        setError(null);
        setSuccess(null);
    };

    // Auto-resize textarea to fit content and avoid scrollbars
    const autoResize = (el?: HTMLTextAreaElement | TextareaLikeEvent | null) => {
        try {
            const textarea = el instanceof HTMLTextAreaElement
                ? el
                : el && typeof el === 'object' && 'target' in el && el.target instanceof HTMLTextAreaElement
                    ? el.target
                    : null;

            if (!textarea) return;

            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        } catch { }
    };


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setSuccess(null);
        setError(null);

        // Convert empty strings to undefined for optional fields
        const formData = {
            ...form,
            country: form.country || undefined,
            homeAirport: form.homeAirport || undefined,
            useCase: form.useCase || undefined,
        };

        const parseResult = betaSignupSchema.safeParse(formData);
        if (!parseResult.success) {
            setSubmitting(false);
            setError(resolvedCopy.error);
            return;
        }

        try {
            const result = await apiClient.beta.signup({ ...parseResult.data, cfTurnstileResponse: turnstileToken });
            setReferralLink(result.referralLink || '');
            setUserEmail(form.email);
            setForm(buildInitialState(locale, referralCode));
            setSuccess(resolvedCopy.success);
            setShowReferralPanel(true);
            turnstileRef.current?.reset();
            setTurnstileToken('');
        } catch (err: unknown) {
            if (err instanceof ApiError && err.code === 'beta_duplicate_email') {
                setError(resolvedCopy.duplicateError ?? resolvedCopy.error);
                try {
                    const statsJson = await apiClient.referral.stats(form.email);
                    const parsedStats = statsJson as BetaReferralStatsResponse;
                    const payload = parsedStats.data;
                    const referralLinkFromApi = Array.isArray(payload)
                        ? payload[0]?.referral_link ?? ''
                        : payload?.referral_link ?? '';

                    setReferralLink(referralLinkFromApi);
                    setUserEmail(form.email);
                    setShowReferralPanel(true);
                } catch {
                    // ignore
                }
            } else {
                setError(resolvedCopy.error);
            }
        } finally {
            setSubmitting(false);
            turnstileRef.current?.reset();
            setTurnstileToken('');
        }
    };


    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{resolvedCopy.heading}</h2>
                <p className="mt-4 text-lg text-studio-muted mx-auto max-w-2xl">{resolvedCopy.subheading}</p>
            </div>
            <form
                onSubmit={handleSubmit}
                onFocus={() => { if (!interacted) setInteracted(true); }}
                className="space-y-6 rounded-3xl border border-white/8 bg-studio-surface p-8 shadow-xl"
                aria-describedby="beta-form-help"
            >
                <div>
                    <h3 className="text-2xl font-semibold text-white">{resolvedCopy.title}</h3>
                    <p id="beta-form-help" className="mt-2 text-sm text-studio-muted">
                        {resolvedCopy.description}
                    </p>
                    {resolvedCopy.referralNotice && (
                        <div className="mt-4 rounded-2xl bg-brand-500/10 border border-brand-500/30 px-4 py-3 text-sm text-brand-400">
                            {resolvedCopy.referralNotice}
                        </div>
                    )}
                    {resolvedCopy.optionalHint && (
                        <p className="mt-1 text-xs text-studio-muted">{resolvedCopy.optionalHint}</p>
                    )}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.fullName}</span>
                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            aria-label={resolvedCopy.fields.fullName}
                            className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.email}</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            inputMode="email"
                            aria-label={resolvedCopy.fields.email}
                            className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-studio-muted">
                            {resolvedCopy.fields.country}
                            {resolvedCopy.optionalLabel && (
                                <span className="ml-2 text-xs font-normal text-studio-faint">{resolvedCopy.optionalLabel}</span>
                            )}
                        </span>
                        <select
                            name="country"
                            value={form.country ?? ''}
                            onChange={handleChange}
                            aria-label={resolvedCopy.fields.country}
                            className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        >
                            {(resolvedCopy.countryOptions ?? []).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-studio-muted">
                            {resolvedCopy.fields.homeAirport}
                            {resolvedCopy.optionalLabel && (
                                <span className="ml-2 text-xs font-normal text-studio-faint">{resolvedCopy.optionalLabel}</span>
                            )}
                        </span>
                        <input
                            type="text"
                            name="homeAirport"
                            value={form.homeAirport ?? ''}
                            onChange={handleChange}
                            placeholder={resolvedCopy.placeholders?.homeAirport}
                            aria-label={resolvedCopy.fields.homeAirport}
                            className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 placeholder:text-studio-faint"
                        />
                    </label>
                </div>
                <div>
                    <p className="text-sm font-medium text-studio-muted mb-3">
                        {resolvedCopy.fields.flightFrequency}
                        {resolvedCopy.optionalLabel && (
                            <span className="ml-2 text-xs font-normal text-studio-faint">{resolvedCopy.optionalLabel}</span>
                        )}
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                        {(resolvedCopy.flightFrequencyOptions ?? []).map((option) => (
                            <label
                                key={option.value}
                                className={`flex flex-col gap-1 rounded-2xl border-2 px-4 py-3 transition-colors ${form.flightFrequency === option.value ? 'border-brand-500 bg-brand-500/10' : 'border-white/10 bg-studio-surface-2 hover:border-brand-500/40'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="flightFrequency"
                                        value={option.value}
                                        checked={form.flightFrequency === option.value}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                                    />
                                    <span className="text-sm font-medium text-white">{option.label}</span>
                                </div>
                                <span className="text-xs text-studio-muted">{option.description}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-studio-muted">
                        {resolvedCopy.fields.useCase}
                        {resolvedCopy.optionalLabel && (
                            <span className="ml-2 text-xs font-normal text-studio-faint">{resolvedCopy.optionalLabel}</span>
                        )}
                    </span>
                    <textarea
                        name="useCase"
                        value={form.useCase ?? ''}
                        onChange={handleChange}
                        onInput={(e) => autoResize(e.currentTarget)}
                        rows={3}
                        maxLength={MAX_CHARS}
                        aria-label={resolvedCopy.fields.useCase}
                        placeholder={resolvedCopy.placeholders?.useCase}
                        className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none placeholder:text-studio-faint"
                    />
                    <div className="mt-2 text-xs text-studio-muted">{(form.useCase ?? '').length}/{MAX_CHARS}</div>
                </label>
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="updatesOptIn"
                        checked={Boolean(form.updatesOptIn)}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-studio-surface-2 text-brand-500 focus:ring-brand-500"
                    />
                    <span className="text-sm text-studio-muted">
                        {resolvedCopy.fields.updatesOptIn}
                        {resolvedCopy.optionalLabel && (
                            <span className="ml-2 text-xs font-normal text-studio-faint">{resolvedCopy.optionalLabel}</span>
                        )}
                    </span>
                </label>
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={form.termsAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-studio-surface-2 text-brand-500 focus:ring-brand-500"
                    />
                    <span className="text-sm text-studio-muted">
                        {resolvedCopy.checkboxLabel && resolvedCopy.privacyLinkLabel ? (
                            resolvedCopy.checkboxLabel.split('{privacyLink}').map((segment, index, array) => (
                                <Fragment key={`${segment}-${index}`}>
                                    {segment}
                                    {index < array.length - 1 && (
                                        <a href={`/${locale}/legal/privacy`} className="text-brand-600 underline">
                                            {resolvedCopy.privacyLinkLabel}
                                        </a>
                                    )}
                                </Fragment>
                            ))
                        ) : (
                            resolvedCopy.checkboxLabel
                        )}
                    </span>
                </label>
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={form.privacyAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-studio-surface-2 text-brand-500 focus:ring-brand-500"
                    />
                    <span className="text-sm text-studio-muted">{resolvedCopy.fields.privacyAcceptance}</span>
                </label>
                <div className="sr-only" aria-hidden>
                    <label>
                        {common.honeypotHumanLabel}
                        <input
                            type="text"
                            name="honeypot"
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.honeypot}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <input type="hidden" name="locale" value={form.locale} />
                <div className="relative space-y-4">
                    {TURNSTILE_SITE_KEY && interacted && (
                        <Turnstile
                            ref={turnstileRef}
                            siteKey={TURNSTILE_SITE_KEY}
                            onSuccess={setTurnstileToken}
                            onExpire={() => setTurnstileToken('')}
                            options={{ theme: 'dark' }}
                        />
                    )}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-200 hover:bg-brand-600 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {submitting ? `${resolvedCopy.submit}...` : resolvedCopy.submit}
                    </button>
                    {success && <AlertMessage type="success" message={success} onClose={() => setSuccess(null)} positioning="relative" />}
                    {error && <AlertMessage type="error" message={error} onClose={() => setError(null)} positioning="relative" />}
                </div>
            </form>

            {/* Show Referral Panel after successful signup / Mostrar panel de referral tras registro exitoso */}
            {/* Empfehlungs-Panel nach erfolgreicher Anmeldung anzeigen / Afficher le panneau de parrainage apres inscription */}
            {showReferralPanel && userEmail && resolvedReferralPanelCopy && (
                <div className="mt-8">
                    <ReferralPanel copy={resolvedReferralPanelCopy} email={userEmail} referralLink={referralLink} />
                </div>
            )}
        </>
    );
};

export default BetaSignupForm;

