"use client";

import { Fragment, useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

import { betaSignupSchema, type BetaSignupInput } from '@/lib/validation';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface BetaSignupFormProps {
    copy: LandingCopy['forms']['beta'];
    locale: Locale;
}

const buildInitialState = (locale: Locale): BetaSignupInput => ({
    email: '',
    fullName: '',
    company: '',
    useCase: '',
    termsAccepted: false,
    honeypot: '',
    locale
});

const BetaSignupForm = ({ copy, locale }: BetaSignupFormProps) => {
    const [form, setForm] = useState<BetaSignupInput>(() => buildInitialState(locale));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setForm(buildInitialState(locale));
        setSuccess(null);
        setError(null);
    }, [locale]);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = event.target;
        const { name, value } = target;
        const nextValue = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : value;
        setForm((prev) => ({ ...prev, [name]: nextValue }));
        setError(null);
        setSuccess(null);
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
            const response = await fetch('/api/beta-signups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parseResult.data)
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => null);
                console.error('Beta signup error response', payload);
                throw new Error(copy.error);
            }

            setForm(buildInitialState(locale));
            setSuccess(copy.success);
        } catch (err) {
            setError(copy.error);
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
                        <span className="text-sm font-medium text-slate-700">{copy.fields.company}</span>
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder={copy.fields.company}
                            aria-label={copy.fields.company}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 placeholder:text-slate-400"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700">{copy.fields.useCase}</span>
                        <textarea
                            name="useCase"
                            value={form.useCase}
                            onChange={handleChange}
                            minLength={3}
                            required
                            rows={3}
                            aria-label={copy.fields.useCase}
                            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 resize-none"
                        />
                    </label>
                </div>
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
                {success && (
                    <p className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        <CheckCircleIcon className="h-5 w-5" aria-hidden />
                        {success}
                    </p>
                )}
                {error && (
                    <p className="flex items-center gap-2 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                        <ExclamationTriangleIcon className="h-5 w-5" aria-hidden />
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default BetaSignupForm;
