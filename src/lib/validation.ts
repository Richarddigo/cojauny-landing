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

export const feedbackSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    message: z.string().min(10, 'Cuéntanos un poco más sobre tu experiencia'),
    name: z.string().min(2, 'Incluye tu nombre'),
    usecase: z.enum(['feedback', 'idea', 'business_proposal']),
    locale: z.enum(localeValues),
    honeypot: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot']
  });

export const betaSignupSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    fullName: z.string().min(3, 'Introduce tu nombre completo').optional(),
    useCase: z.string().optional(),
    country: z
      .enum(betaCountryValues, {
        errorMap: () => ({ message: 'Selecciona tu país' })
      })
      .optional(),
    flightFrequency: z.enum(betaFrequencyValues, {
      errorMap: () => ({ message: 'Selecciona tu frecuencia de vuelo' })
    }).optional(),
    homeAirport: z.string().max(120).optional(),
    updatesOptIn: z.boolean().optional(),
    termsAccepted: z
      .boolean()
      .refine((value) => value === true, {
        message: 'Debes aceptar los términos para continuar'
      }),
    privacyAccepted: z
      .boolean()
      .refine((value) => value === true, {
        message: 'Debes aceptar la política de privacidad'
      }),
    locale: z.enum(localeValues),
    honeypot: z.string().optional(),
    referralCode: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot']
  });

export const heroBetaSignupSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    locale: z.enum(localeValues),
    termsAccepted: z.literal(true),
    privacyAccepted: z.literal(true),
    honeypot: z.string().optional(),
    cfTurnstileResponse: z.string().optional(),
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot'],
  });

export type HeroBetaSignupInput = z.infer<typeof heroBetaSignupSchema>;
export type BetaSignupInput = z.infer<typeof betaSignupSchema>;
export type FeedbackInput = z.infer<typeof feedbackSchema>;
