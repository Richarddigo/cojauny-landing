"use client";

import { Fragment, useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import AlertMessage from '@/components/AlertMessage';
import { apiClient, ApiError } from '@/lib/api-client';


import { betaSignupSchema, type BetaSignupInput } from '@/lib/validation';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import ReferralPanel from './ReferralPanel';

interface BetaSignupFormProps {
    copy: LandingCopy['forms']['beta'];
    referralPanelCopy?: LandingCopy['referralPanel'];
    locale: Locale;
}

type BetaSignupFormState = Omit<BetaSignupInput, 'flightFrequency'> & {
    flightFrequency: BetaSignupInput['flightFrequency'] | '';
};

const buildInitialState = (locale: Locale, referralCode?: string): BetaSignupFormState => ({
    email: '',
    fullName: '',
    useCase: '',
    country: '' as BetaSignupInput['country'],
    flightFrequency: '',
    homeAirport: '',
    updatesOptIn: false,
    termsAccepted: false,
    privacyAccepted: false,
    honeypot: '',
    locale,
    referralCode
});

const BetaSignupForm = ({ copy, referralPanelCopy, locale }: BetaSignupFormProps) => {
    const [referralCode, setReferralCode] = useState<string | undefined>();
    const [form, setForm] = useState<BetaSignupFormState>(() => buildInitialState(locale, referralCode));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [showReferralPanel, setShowReferralPanel] = useState(false);
    const [referralLink, setReferralLink] = useState<string>('');
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
    const autoResize = (el?: HTMLTextAreaElement | EventTarget | null) => {
        try {
            const ta = el instanceof HTMLTextAreaElement ? el : (el as any)?.target ?? null;
            if (!ta) return;
            ta.style.height = 'auto';
            ta.style.height = `${ta.scrollHeight}px`;
        } catch (e) { }
    };


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setSuccess(null);
        setError(null);

        const parseResult = betaSignupSchema.safeParse(form);
        if (!parseResult.success) {
            setSubmitting(false);
            setError(copy.error);
            return;
        }

        try {
            const result = await apiClient.beta.signup(parseResult.data);
            setReferralLink(result.referralLink || '');
            setUserEmail(form.email);
            setForm(buildInitialState(locale, referralCode));
            setSuccess(copy.success);
            setShowReferralPanel(true);
        } catch (err: any) {
            if (err instanceof ApiError && err.code === 'beta_duplicate_email') {
                setError(copy.duplicateError ?? copy.error);
                try {
                    const statsJson = await apiClient.referral.stats(form.email);
                    const referralLinkFromApi = (statsJson as any)?.data?.[0]?.referral_link || '';
                    setReferralLink(referralLinkFromApi);
                    setUserEmail(form.email);
                    setShowReferralPanel(true);
                } catch (e) {
                    // ignore
                }
            } else {
                setError(copy.error);
            }
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="scroll-mt-16 lg:scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{copy.heading}</h2>
                <p className="mt-4 text-lg text-slate-600 mx-auto max-w-2xl">{copy.subheading}</p>
            </div>
            <form
                id="beta"
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl"
                aria-describedby="beta-form-help"
            >
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{copy.title}</h3>
                    <p id="beta-form-help" className="mt-2 text-sm text-slate-600">
                        {copy.description}
                    </p>
                    {copy.referralNotice && (
                        <div className="mt-4 rounded-2xl bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-800">
                            {copy.referralNotice}
                        </div>
                    )}
                    {copy.optionalHint && (
                        <p className="mt-1 text-xs text-slate-500">{copy.optionalHint}</p>
                    )}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700">{copy.fields.fullName}</span>
                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            aria-label={copy.fields.fullName}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700">{copy.fields.email}</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            inputMode="email"
                            aria-label={copy.fields.email}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700">
                            {copy.fields.country}
                            {copy.optionalLabel && (
                                <span className="ml-2 text-xs font-normal text-slate-500">{copy.optionalLabel}</span>
                            )}
                        </span>
                        <select
                            name="country"
                            value={form.country ?? ''}
                            onChange={handleChange}
                            aria-label={copy.fields.country}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
                        >
                            {(copy.countryOptions ?? []).map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700">
                            {copy.fields.homeAirport}
                            {copy.optionalLabel && (
                                <span className="ml-2 text-xs font-normal text-slate-500">{copy.optionalLabel}</span>
                            )}
                        </span>
                        <input
                            type="text"
                            name="homeAirport"
                            value={form.homeAirport ?? ''}
                            onChange={handleChange}
                            placeholder={copy.placeholders?.homeAirport}
                            aria-label={copy.fields.homeAirport}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 placeholder:text-slate-400"
                        />
                    </label>
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-700 mb-3">{copy.fields.flightFrequency}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                        {(copy.flightFrequencyOptions ?? []).map((option) => (
                            <label
                                key={option.value}
                                className={`flex flex-col gap-1 rounded-2xl border-2 px-4 py-3 transition-colors ${form.flightFrequency === option.value ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-300'}`}
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
                                    <span className="text-sm font-medium text-slate-900">{option.label}</span>
                                </div>
                                <span className="text-xs text-slate-500">{option.description}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">
                        {copy.fields.useCase}
                        {copy.optionalLabel && (
                            <span className="ml-2 text-xs font-normal text-slate-500">{copy.optionalLabel}</span>
                        )}
                    </span>
                    <textarea
                        name="useCase"
                        value={form.useCase ?? ''}
                        onChange={handleChange}
                        onInput={(e) => autoResize(e.currentTarget)}
                        rows={3}
                        maxLength={MAX_CHARS}
                        aria-label={copy.fields.useCase}
                        placeholder={copy.placeholders?.useCase}
                        className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 resize-none placeholder:text-slate-400"
                    />
                    <div className="mt-2 text-xs text-slate-500">{(form.useCase ?? '').length}/{MAX_CHARS}</div>
                </label>
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="updatesOptIn"
                        checked={Boolean(form.updatesOptIn)}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-600">
                        {copy.fields.updatesOptIn}
                        {copy.optionalLabel && (
                            <span className="ml-2 text-xs font-normal text-slate-500">{copy.optionalLabel}</span>
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
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-600">
                        {copy.checkboxLabel && copy.privacyLinkLabel ? (
                            copy.checkboxLabel.split('{privacyLink}').map((segment, index, array) => (
                                <Fragment key={`${segment}-${index}`}>
                                    {segment}
                                    {index < array.length - 1 && (
                                        <a href={`/${locale}/legal/privacy`} className="text-brand-600 underline">
                                            {copy.privacyLinkLabel}
                                        </a>
                                    )}
                                </Fragment>
                            ))
                        ) : (
                            copy.checkboxLabel
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
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-600">{copy.fields.privacyAcceptance}</span>
                </label>
                <div className="sr-only" aria-hidden>
                    <label>
                        No rellenes este campo si eres humano
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
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-brand-600/40 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                    {submitting ? `${copy.submit}…` : copy.submit}
                </button>
                {success && <AlertMessage type="success" message={success} onClose={() => setSuccess(null)} />}
                {error && <AlertMessage type="error" message={error} onClose={() => setError(null)} />}
            </form>

            {/* Show Referral Panel after successful signup / Mostrar panel de referral tras registro exitoso */}
            {/* Empfehlungs-Panel nach erfolgreicher Anmeldung anzeigen / Afficher le panneau de parrainage après inscription */}
            {showReferralPanel && userEmail && (
                <div className="mt-8">
                    <ReferralPanel copy={referralPanelCopy ?? (copy as any).referralPanel} email={userEmail} referralLink={referralLink} />
                </div>
            )}
        </div>
    );
};

export default BetaSignupForm;
