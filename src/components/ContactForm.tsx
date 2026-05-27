"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import AlertMessage from '@/components/AlertMessage';
import { apiClient } from '@/lib/api-client';

import { contactSchema, type ContactInput } from '@/lib/validation';
import { useAppMessages } from '@/i18n/useAppMessages';
import { getCommonCopy } from '@/locales/common';
import type { Locale } from '@/locales/config';
import type { ContactPageCopy } from '@/locales/contact';

interface ContactFormProps {
    locale: Locale;
    copy?: ContactPageCopy['form'];
}

type TextareaLikeEvent = { target: EventTarget | null };

const buildInitialState = (locale: Locale): ContactInput => ({
    email: '',
    message: '',
    name: '',
    topic: '',
    locale,
    honeypot: ''
});

const ContactForm = ({ locale, copy }: ContactFormProps) => {
    const messages = useAppMessages();
    const resolvedCopy = copy ?? messages.contact.form;
    const common = getCommonCopy(locale);
    const [form, setForm] = useState<ContactInput>(() => buildInitialState(locale));
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
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setError(null);
        setSuccess(null);
    };

    // Auto-resize textarea to grow with content
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
        if (form.message && form.message.length > MAX_CHARS) {
            setMessageError(resolvedCopy.error);
            return;
        }
        setSubmitting(true);
        setSuccess(null);
        setError(null);
        setMessageError(null);

        // Validate email doesn't contain '+'
        if (form.email.includes('+')) {
            setSubmitting(false);
            setError(resolvedCopy.error);
            return;
        }

        const parseResult = contactSchema.safeParse(form);
        if (!parseResult.success) {
            setSubmitting(false);
            // If the failure is the message min length, show inline message
            const msgIssue = parseResult.error.issues?.find((i) => i.path?.[0] === 'message');
            if (msgIssue) {
                setMessageError(resolvedCopy.error);
            } else {
                setError(resolvedCopy.error);
            }
            return;
        }

        // import removed



        try {
            await apiClient.contact.submit(parseResult.data);
            setForm(buildInitialState(locale));
            setSuccess(resolvedCopy.success);
        } catch (err: unknown) {
            setError(err instanceof Error && err.message ? err.message : resolvedCopy.error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-white/12 bg-studio-surface/80 p-8 shadow-soft-glow backdrop-blur-xl transition-all hover:shadow-2xl"
            aria-describedby="contact-help"
        >
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">{resolvedCopy.title}</h2>
                <p id="contact-help" className="mt-2 text-sm text-studio-muted">
                    {resolvedCopy.description}
                </p>
                {resolvedCopy.optionalHint && (
                    <p className="mt-1 text-xs text-studio-faint">{resolvedCopy.optionalHint}</p>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.name}</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-label={resolvedCopy.fields.name}
                        className="rounded-xl border border-white/12 bg-studio-surface-2/50 px-4 py-3 text-base text-studio-text shadow-sm transition-all placeholder:text-studio-faint focus:border-studio-accent focus:bg-studio-surface-2 focus:outline-none focus:ring-4 focus:ring-studio-accent/10"
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
                        aria-label={resolvedCopy.fields.email}
                        className="rounded-xl border border-white/12 bg-studio-surface-2/50 px-4 py-3 text-base text-studio-text shadow-sm transition-all placeholder:text-studio-faint focus:border-studio-accent focus:bg-studio-surface-2 focus:outline-none focus:ring-4 focus:ring-studio-accent/10"
                    />
                </label>
            </div>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.topic}</span>
                <input
                    type="text"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    required
                    aria-label={resolvedCopy.fields.topic}
                    className="rounded-xl border border-white/12 bg-studio-surface-2/50 px-4 py-3 text-base text-studio-text shadow-sm transition-all placeholder:text-studio-faint focus:border-studio-accent focus:bg-studio-surface-2 focus:outline-none focus:ring-4 focus:ring-studio-accent/10"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.message}</span>
                <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                        handleChange(e);
                        setMessageError(null);
                    }}
                    onInput={(e) => autoResize(e.currentTarget)}
                    rows={5}
                    required
                    minLength={10}
                    maxLength={MAX_CHARS}
                    aria-label={resolvedCopy.fields.message}
                    aria-invalid={!!messageError}
                    aria-describedby={messageError ? 'contact-message-error' : undefined}
                    className={`resize-none rounded-xl px-4 py-3 text-base shadow-sm transition-all placeholder:text-studio-faint focus:outline-none ${messageError ? 'border-red-500 bg-red-900/20 text-studio-text ring-2 ring-red-500/30' : 'border border-white/12 bg-studio-surface-2/50 text-studio-text focus:border-studio-accent focus:bg-studio-surface-2 focus:ring-4 focus:ring-studio-accent/10'}`}
                />
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-studio-muted">{form.message.length}/{MAX_CHARS}</p>
                    {messageError && (
                        <p id="contact-message-error" className="text-sm text-red-600" role="alert">
                            {messageError}
                        </p>
                    )}
                </div>
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
            <p className="text-xs text-studio-faint">{resolvedCopy.legalNotice}</p>

            <div className="relative space-y-4">
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-600/35 focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                    {submitting ? (
                        <>
                            <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {resolvedCopy.submit}...
                        </>
                    ) : (
                        resolvedCopy.submit
                    )}
                </button>

                {success && <AlertMessage type="success" message={success} onClose={() => setSuccess(null)} positioning="relative" />}
                {error && <AlertMessage type="error" message={error} onClose={() => setError(null)} positioning="relative" />}
            </div>
        </form>
    );
};

export default ContactForm;

