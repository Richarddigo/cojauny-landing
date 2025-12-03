"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { ChatBubbleBottomCenterTextIcon, LightBulbIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import AlertMessage from '@/components/AlertMessage';
import { apiClient } from '@/lib/api-client';

import { feedbackSchema, type FeedbackInput } from '@/lib/validation';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface FeedbackFormProps {
    copy: LandingCopy['forms']['feedback'];
    locale: Locale;
}

const buildInitialState = (locale: Locale): FeedbackInput => ({
    email: '',
    message: '',
    name: '',
    usecase: 'feedback',
    honeypot: '',
    locale
});

const FeedbackForm = ({ copy, locale }: FeedbackFormProps) => {
    const [form, setForm] = useState<FeedbackInput>(() => buildInitialState(locale));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);
    const MAX_CHARS = 1000;

    useEffect(() => {
        setForm(buildInitialState(locale));
        setSuccess(null);
        setError(null);
    }, [locale]);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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
        if (form.message && form.message.length > MAX_CHARS) {
            setMessageError(copy.error);
            return;
        }
        setSubmitting(true);
        setSuccess(null);
        setError(null);
        setMessageError(null);

        // Validate email doesn't contain '+'
        if (form.email.includes('+')) {
            setSubmitting(false);
            setError(copy.error);
            return;
        }

        const parseResult = feedbackSchema.safeParse(form);
        if (!parseResult.success) {
            setSubmitting(false);
            const msgIssue = parseResult.error.issues?.find((i) => i.path?.[0] === 'message');
            if (msgIssue) {
                setMessageError(copy.error);
            } else {
                setError(copy.error);
            }
            return;
        }

        // import removed



        try {
            await apiClient.feedback.submit(parseResult.data);
            setForm(buildInitialState(locale));
            setSuccess(copy.success);
        } catch (err: any) {
            setError(err.message || copy.error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-white/20 bg-white/80 p-8 shadow-soft-glow backdrop-blur-xl transition-all hover:shadow-2xl"
            aria-describedby="feedback-help"
        >
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">{copy.title}</h2>
                <p id="feedback-help" className="mt-2 text-sm text-slate-600">
                    {copy.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">{copy.fields.fullName}</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-label={copy.fields.fullName}
                        className="rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-base text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10"
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
                        aria-label={copy.fields.email}
                        className="rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-base text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10"
                    />
                </label>
            </div>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">{copy.fields.case}</span>
                <div className="flex gap-4">
                    {copy.caseOptions?.map((option) => (
                        <label
                            key={option.value}
                            className={`flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-1 rounded-xl border p-2 sm:p-4 transition-all hover:bg-slate-50 ${form.usecase === option.value
                                ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20'
                                : 'border-slate-200 bg-white/50'
                                }`}
                        >
                            <input
                                type="radio"
                                name="usecase"
                                value={option.value}
                                checked={form.usecase === option.value}
                                onChange={handleChange}
                                className="sr-only"
                            />
                            <span className="text-brand-600">
                                {option.value === 'feedback' && <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />}
                                {option.value === 'idea' && <LightBulbIcon className="h-8 w-8" />}
                                {option.value === 'business_proposal' && <BriefcaseIcon className="h-8 w-8" />}
                            </span>
                            <span className="text-xs sm:text-xs font-medium capitalize text-slate-600 text-center break-words whitespace-normal max-w-full px-1">
                                <span className="sm:hidden text-[12px]">{option.label}</span>
                                <span className="hidden sm:inline">{option.label}</span>
                            </span>
                        </label>
                    ))}
                </div>
            </label>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">{copy.fields.message}</span>
                <textarea
                    id="feedback-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                        handleChange(e as any);
                        setMessageError(null);
                    }}
                    onInput={(e) => autoResize(e.currentTarget)}
                    rows={4}
                    required
                    minLength={10}
                    maxLength={MAX_CHARS}
                    aria-label={copy.fields.message}
                    aria-invalid={!!messageError}
                    aria-describedby={messageError ? 'feedback-message-error' : undefined}
                    className={`resize-none rounded-xl px-4 py-3 text-base shadow-sm transition-all placeholder:text-slate-400 focus:outline-none ${messageError ? 'border-red-500 bg-red-50 text-slate-900 ring-2 ring-red-200' : 'border border-slate-200 bg-white/50 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10'}`}
                />
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-slate-600">{form.message.length}/{MAX_CHARS}</p>
                    {messageError && (
                        <p id="feedback-message-error" className="text-sm text-red-600" role="alert">
                            {messageError}
                        </p>
                    )}
                </div>

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

            <div className="relative space-y-4">
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-600/35 focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                    {submitting ? (
                        <>
                            <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {copy.submit}…
                        </>
                    ) : (
                        copy.submit
                    )}
                </button>

                {success && <AlertMessage type="success" message={success} onClose={() => setSuccess(null)} positioning="relative" />}
                {error && <AlertMessage type="error" message={error} onClose={() => setError(null)} positioning="relative" />}
            </div>
        </form>
    );
};

export default FeedbackForm;
