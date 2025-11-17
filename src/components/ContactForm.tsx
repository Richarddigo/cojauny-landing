"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

import { contactSchema, type ContactInput } from '@/lib/validation';
import type { Locale } from '@/locales/config';
import type { ContactPageCopy } from '@/locales/contact';

interface ContactFormProps {
    locale: Locale;
    copy: ContactPageCopy['form'];
}

const buildInitialState = (locale: Locale): ContactInput => ({
    email: '',
    message: '',
    name: '',
    locale,
    honeypot: ''
});

const ContactForm = ({ locale, copy }: ContactFormProps) => {
    const [form, setForm] = useState<ContactInput>(() => buildInitialState(locale));
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
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setError(null);
        setSuccess(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setSuccess(null);
        setError(null);

        const parseResult = contactSchema.safeParse(form);
        if (!parseResult.success) {
            setSubmitting(false);
            setError(copy.error);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parseResult.data)
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => null);
                console.error('Contact submission error response', payload);
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
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl"
            aria-describedby="contact-help"
        >
            <div>
                <h2 className="text-2xl font-semibold text-slate-900">{copy.title}</h2>
                <p id="contact-help" className="mt-2 text-sm text-slate-600">
                    {copy.description}
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">{copy.fields.name}</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 focus:border-brand-400"
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
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 focus:border-brand-400"
                    />
                </label>
            </div>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">{copy.fields.message}</span>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    minLength={10}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 focus:border-brand-400"
                />
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
            <p className="text-xs text-slate-500">{copy.legalNotice}</p>
            <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-500 focus-visible:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
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
    );
};

export default ContactForm;
