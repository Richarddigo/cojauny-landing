import { z } from 'zod';

import { localeValues } from '@/locales/config';

export const feedbackSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    message: z.string().min(10, 'Cuéntanos un poco más sobre tu experiencia'),
    name: z.string().min(2, 'Incluye tu nombre'),
    sentiment: z.enum(['positive', 'neutral', 'negative']),
    locale: z.enum(localeValues),
    honeypot: z.string().optional()
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot']
  });

export const contactSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    message: z.string().min(10, 'Cuéntanos el motivo del contacto con un poco más de detalle'),
    name: z.string().min(2, 'Incluye tu nombre'),
    topic: z.string().min(2, 'Incluye el tema'),
    locale: z.enum(localeValues),
    honeypot: z.string().optional()
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot']
  });

export const betaSignupSchema = z
  .object({
    email: z.string().email('Introduce un correo válido'),
    fullName: z.string().min(3, 'Introduce tu nombre completo'),
    company: z.string().optional(),
    useCase: z.string().min(3, 'Describe brevemente tu caso de uso'),
    termsAccepted: z
      .boolean()
      .refine((value) => value === true, {
        message: 'Debes aceptar los términos para continuar'
      }),
    locale: z.enum(localeValues),
    honeypot: z.string().optional()
  })
  .refine((values) => !values.honeypot, {
    message: 'Posible bot detectado',
    path: ['honeypot']
  });

export type FeedbackInput = z.infer<typeof feedbackSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type BetaSignupInput = z.infer<typeof betaSignupSchema>;
