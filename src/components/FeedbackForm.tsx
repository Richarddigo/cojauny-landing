"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { ChatBubbleBottomCenterTextIcon, LightBulbIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import AlertMessage from '@/components/AlertMessage';
import Button from '@/components/ui/Button';
import { apiClient } from '@/lib/api-client';

import { feedbackSchema, type FeedbackInput } from '@/lib/validation';
import { useAppMessages } from '@/i18n/useAppMessages';
import { getCommonCopy } from '@/locales/common';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

interface FeedbackFormProps {
    copy?: LandingCopy['forms']['feedback'];
    locale: Locale;
}

type TextareaLikeEvent = { target: EventTarget | null };

const buildInitialState = (locale: Locale): FeedbackInput => ({
    email: '',
    message: '',
    name: '',
    usecase: 'feedback',
    honeypot: '',
    locale
});

const FeedbackForm = ({ copy, locale }: FeedbackFormProps) => {
    const messages = useAppMessages();
    const resolvedCopy = copy ?? messages.landing.forms.feedback;
    const common = getCommonCopy(locale);
    const [form, setForm] = useState<FeedbackInput>(() => buildInitialState(locale));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);
    const [turnstileToken, setTurnstileToken] = useState('');
    const turnstileRef = useRef<TurnstileInstance>(null);
    // Defer Turnstile mount until the user actually starts interacting with
    // the form. Loading Turnstile eagerly pulls ~900KB of Cloudflare scripts
    // into the critical path (huge LCP/TBT hit) for visitors who never submit.
    const [interacted, setInteracted] = useState(false);
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

        const parseResult = feedbackSchema.safeParse(form);
        if (!parseResult.success) {
            setSubmitting(false);
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
            await apiClient.feedback.submit({ ...parseResult.data, cfTurnstileResponse: turnstileToken });
            setForm(buildInitialState(locale));
            setSuccess(resolvedCopy.success);
            turnstileRef.current?.reset();
            setTurnstileToken('');
        } catch (err: unknown) {
            setError(err instanceof Error && err.message ? err.message : resolvedCopy.error);
            turnstileRef.current?.reset();
            setTurnstileToken('');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            onFocus={() => { if (!interacted) setInteracted(true); }}
            className="space-y-6 rounded-3xl border border-white/8 bg-studio-surface p-8 shadow-xl"
            aria-describedby="feedback-help"
        >
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">{resolvedCopy.title}</h2>
                <p id="feedback-help" className="mt-2 text-sm text-studio-muted">
                    {resolvedCopy.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.fullName}</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-label={resolvedCopy.fields.fullName}
                        className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors placeholder:text-studio-faint focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
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
                        className="rounded-2xl border-2 border-white/10 bg-studio-surface-2 px-4 py-3 text-base text-studio-text transition-colors placeholder:text-studio-faint focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                </label>
            </div>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.case}</span>
                <div className="flex gap-4">
                    {resolvedCopy.caseOptions?.map((option) => (
                        <label
                            key={option.value}
                            className={`flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 p-2 transition-colors sm:p-4 ${form.usecase === option.value
                                ? 'border-brand-500 bg-brand-500/10'
                                : 'border-white/10 bg-studio-surface-2 hover:border-brand-500/40'
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
                            <span className="text-brand-400">
                                {option.value === 'feedback' && <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />}
                                {option.value === 'idea' && <LightBulbIcon className="h-8 w-8" />}
                                {option.value === 'business_proposal' && <BriefcaseIcon className="h-8 w-8" />}
                            </span>
                            <span className="text-xs sm:text-xs font-medium capitalize text-studio-muted text-center break-words whitespace-normal max-w-full px-1">
                                <span className="sm:hidden text-[12px]">{option.label}</span>
                                <span className="hidden sm:inline">{option.label}</span>
                            </span>
                        </label>
                    ))}
                </div>
            </label>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-studio-muted">{resolvedCopy.fields.message}</span>
                <textarea
                    id="feedback-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                        handleChange(e);
                        setMessageError(null);
                    }}
                    onInput={(e) => autoResize(e.currentTarget)}
                    rows={4}
                    required
                    minLength={10}
                    maxLength={MAX_CHARS}
                    aria-label={resolvedCopy.fields.message}
                    aria-invalid={!!messageError}
                    aria-describedby={messageError ? 'feedback-message-error' : undefined}
                    className={`resize-none rounded-2xl px-4 py-3 text-base transition-colors placeholder:text-studio-faint focus:outline-none ${messageError ? 'border-2 border-red-500 bg-red-900/20 text-studio-text ring-2 ring-red-500/30' : 'border-2 border-white/10 bg-studio-surface-2 text-studio-text focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'}`}
                />
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-studio-muted">{form.message.length}/{MAX_CHARS}</p>
                    {messageError && (
                        <p id="feedback-message-error" className="text-sm text-red-600" role="alert">
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
                <Button type="submit" loading={submitting} size="lg" className="w-full">
                    {resolvedCopy.submit}
                </Button>

                {success && <AlertMessage type="success" message={success} onClose={() => setSuccess(null)} positioning="relative" />}
                {error && <AlertMessage type="error" message={error} onClose={() => setError(null)} positioning="relative" />}
            </div>
        </form>
    );
};

export default FeedbackForm;
