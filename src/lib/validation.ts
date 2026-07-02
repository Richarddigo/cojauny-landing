import { z } from 'zod';

import { localeValues } from '@/locales/config';

export const betaCountryValues = [
  'es',
  'de',
  'fr',
  'uk',
  'us',
  'mx',
  'ar',
  'co',
  'cl',
  'other'
] as const;

export const betaFrequencyValues = ['once', 'two_to_five', 'six_to_ten', 'more_than_ten'] as const;

// Note: these Zod messages are internal fallbacks only. The UI always shows a
// localized message from copy.ts (see BetaSignupForm/HeroBetaCapture/FeedbackForm),
// so these are kept in English for codebase consistency rather than translated.
export const feedbackSchema = z
  .object({
    email: z.string().email('Enter a valid email'),
    message: z.string().min(10, 'Tell us a bit more'),
    name: z.string().min(2, 'Enter your name'),
    usecase: z.enum(['feedback', 'idea', 'business_proposal']),
    locale: z.enum(localeValues),
    honeypot: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Possible bot detected',
    path: ['honeypot']
  });

export const betaSignupSchema = z
  .object({
    email: z.string().email('Enter a valid email'),
    fullName: z.string().min(3, 'Enter your full name').optional(),
    useCase: z.string().optional(),
    country: z
      .enum(betaCountryValues, {
        errorMap: () => ({ message: 'Select your country' })
      })
      .optional(),
    flightFrequency: z.enum(betaFrequencyValues, {
      errorMap: () => ({ message: 'Select how often you fly' })
    }).optional(),
    homeAirport: z.string().max(120).optional(),
    updatesOptIn: z.boolean().optional(),
    termsAccepted: z
      .boolean()
      .refine((value) => value === true, {
        message: 'You must accept the terms to continue'
      }),
    privacyAccepted: z
      .boolean()
      .refine((value) => value === true, {
        message: 'You must accept the privacy policy'
      }),
    locale: z.enum(localeValues),
    honeypot: z.string().optional(),
    referralCode: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Possible bot detected',
    path: ['honeypot']
  });

export const heroBetaSignupSchema = z
  .object({
    email: z.string().email('Enter a valid email'),
    locale: z.enum(localeValues),
    termsAccepted: z.literal(true),
    privacyAccepted: z.literal(true),
    honeypot: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Possible bot detected',
    path: ['honeypot'],
  });

export type HeroBetaSignupInput = z.infer<typeof heroBetaSignupSchema>;
export type BetaSignupInput = z.infer<typeof betaSignupSchema>;
export type FeedbackInput = z.infer<typeof feedbackSchema>;
