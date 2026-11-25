/** @jest-environment node */
import { betaSignupSchema, feedbackSchema, heroBetaSignupSchema } from '@/lib/validation';
import { localeValues } from '@/locales/config';

const signup = {
  email: '  Example+demo@example.org  ',
  locale: 'es',
  termsAccepted: true,
  privacyAccepted: true,
};
const feedback = {
  email: 'reply@example.org',
  name: 'José محمد 李明',
  message: 'A synthetic support message.',
  usecase: 'feedback',
  locale: 'es',
};

describe('validation contract across the security dependency upgrade', () => {
  it.each(localeValues)(
    'keeps the approved signup and feedback contract in %s',
    (locale) => {
      expect(betaSignupSchema.parse({ ...signup, locale }).email).toBe(
        'Example+demo@example.org',
      );
      expect(heroBetaSignupSchema.parse({ ...signup, locale }).email).toBe(
        'Example+demo@example.org',
      );
      expect(feedbackSchema.parse({ ...feedback, locale }).name).toBe(feedback.name);
    },
  );

  it('keeps optional fields absent and strips unrecognized input fields', () => {
    const parsed = betaSignupSchema.parse({ ...signup, role: 'admin' });
    expect(parsed).not.toHaveProperty('country');
    expect(parsed).not.toHaveProperty('updatesOptIn');
    expect(parsed).not.toHaveProperty('role');
    expect(betaSignupSchema.parse({ ...signup, updatesOptIn: false }).updatesOptIn).toBe(
      false,
    );
    expect(
      betaSignupSchema.parse({ ...signup, flightFrequency: 'more_than_ten' })
        .flightFrequency,
    ).toBe('more_than_ten');
  });

  it.each([
    ['country', 'Select your country'],
    ['flightFrequency', 'Select how often you fly'],
  ])(
    'keeps the %s rejection on its field with the approved fallback',
    (field, message) => {
      const result = betaSignupSchema.safeParse({ ...signup, [field]: 'unrecognized' });
      expect(result.success).toBe(false);
      if (!result.success)
        expect(result.error.issues).toEqual(
          expect.arrayContaining([expect.objectContaining({ path: [field], message })]),
        );
    },
  );

  it.each([
    { termsAccepted: false },
    { privacyAccepted: false },
    { email: 'invalid' },
    { locale: 'unrecognized' },
    { honeypot: 'not-empty' },
    { referralCode: '../not-a-code' },
    { email: `${'a'.repeat(255)}@example.org` },
    { fullName: 'a'.repeat(121) },
    { useCase: 'a'.repeat(2001) },
    { homeAirport: 'a'.repeat(121) },
    { cfTurnstileResponse: 'a'.repeat(2049) },
  ])('preserves rejection of invalid signup input %#', (invalid) => {
    expect(betaSignupSchema.safeParse({ ...signup, ...invalid }).success).toBe(false);
  });

  it('keeps feedback boundaries and never includes a rejected private value in issues', () => {
    expect(
      feedbackSchema.safeParse({ ...feedback, message: 'a'.repeat(5000) }).success,
    ).toBe(true);
    const marker = 'synthetic-private-value-that-must-not-be-reported';
    const result = feedbackSchema.safeParse({ ...feedback, message: marker.repeat(150) });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues).toEqual(
        expect.arrayContaining([expect.objectContaining({ path: ['message'] })]),
      );
      expect(JSON.stringify(result.error.issues)).not.toContain(marker);
    }
    expect(feedbackSchema.safeParse({ ...feedback, name: 'a' }).success).toBe(false);
    expect(feedbackSchema.safeParse({ ...feedback, message: 'short' }).success).toBe(
      false,
    );
    expect(feedbackSchema.safeParse([feedback]).success).toBe(false);
  });
});

describe('environment URL contract', () => {
  const keys = [
    'BASE_URL',
    'CURRENT_SITE_URL',
    'NEXT_PUBLIC_ANALYTICS_ID',
    'DATABASE_URL',
  ] as const;
  const saved = Object.fromEntries(keys.map((key) => [key, process.env[key]]));

  beforeEach(() => {
    jest.resetModules();
    for (const key of keys) delete process.env[key];
  });
  afterAll(() => {
    for (const key of keys) {
      if (saved[key] === undefined) delete process.env[key];
      else process.env[key] = saved[key];
    }
    jest.resetModules();
  });

  it('keeps absent and whitespace-only optional URLs absent', () => {
    process.env.BASE_URL = '  ';
    const { env } = jest.requireActual<typeof import('@/lib/env')>('@/lib/env');
    expect(env.BASE_URL).toBeUndefined();
    expect(env.CURRENT_SITE_URL).toBeUndefined();
    expect(env.DATABASE_URL).toBeUndefined();
  });

  it('keeps host normalization and explicit https URLs', () => {
    process.env.BASE_URL = ' cojauny.com ';
    process.env.CURRENT_SITE_URL = 'https://www.cojauny.com/example';
    const { env } = jest.requireActual<typeof import('@/lib/env')>('@/lib/env');
    expect(env.BASE_URL).toBe('https://cojauny.com');
    expect(env.CURRENT_SITE_URL).toBe('https://www.cojauny.com/example');
  });

  it('rejects a malformed configured URL instead of returning a healthy fallback', () => {
    process.env.BASE_URL = 'https://not a host.invalid';
    expect(() => jest.requireActual('@/lib/env')).toThrow();
  });
});
