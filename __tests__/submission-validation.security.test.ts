/** @jest-environment node */
import { NextRequest } from 'next/server';
import { POST as signup } from '../src/app/api/beta-signups/route';
import { POST as feedback } from '../src/app/api/feedback/route';
import { getDb } from '@/lib/db';
import { verifyBot } from '@/lib/verify-bot';

jest.mock('@/lib/db', () => ({ getDb: jest.fn() }));
jest.mock('@/lib/verify-bot', () => ({ verifyBot: jest.fn() }));
jest.mock('@/lib/ratelimit', () => ({
  betaSignupRatelimit: { limit: jest.fn().mockResolvedValue({ success: true }) },
  feedbackRatelimit: { limit: jest.fn().mockResolvedValue({ success: true }) },
}));
jest.mock('@/lib/mail-outbox', () => ({ drainMailOutbox: jest.fn() }));
jest.mock('next/server', () => ({
  ...jest.requireActual('next/server'),
  after: jest.fn(),
}));

const signupInput = {
  email: 'synthetic@example.org',
  locale: 'es',
  termsAccepted: true,
  privacyAccepted: true,
};
const feedbackInput = {
  email: 'synthetic@example.org',
  locale: 'es',
  name: 'Cojauny Demo',
  message: 'A synthetic support message.',
  usecase: 'feedback',
};
const request = (endpoint: string, payload: unknown) =>
  new NextRequest(`https://cojauny.com/api/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { origin: 'https://cojauny.com' },
  });

describe('validation rejection through the actual submission routes', () => {
  it.each([
    ['country', 'Select your country'],
    ['flightFrequency', 'Select how often you fly'],
  ])(
    'keeps the signup %s error contract without database or bot work',
    async (field, message) => {
      const response = await signup(
        request('beta-signups', { ...signupInput, [field]: 'unknown' }),
      );
      expect(response.status).toBe(422);
      expect(await response.json()).toEqual({
        error: 'Validation error.',
        issues: expect.arrayContaining([
          expect.objectContaining({ path: [field], message }),
        ]),
      });
      expect(getDb).not.toHaveBeenCalled();
      expect(verifyBot).not.toHaveBeenCalled();
    },
  );

  it('keeps unaccepted consent rejected before persistence', async () => {
    const response = await signup(
      request('beta-signups', { ...signupInput, termsAccepted: false }),
    );
    expect(response.status).toBe(422);
    expect((await response.json()).issues).toEqual(
      expect.arrayContaining([expect.objectContaining({ path: ['termsAccepted'] })]),
    );
    expect(getDb).not.toHaveBeenCalled();
    expect(verifyBot).not.toHaveBeenCalled();
  });

  it('does not echo an oversized private feedback value in an HTTP error', async () => {
    const marker = 'synthetic-private-feedback-content';
    const response = await feedback(
      request('feedback', {
        ...feedbackInput,
        message: marker.repeat(180),
      }),
    );
    expect(response.status).toBe(422);
    const body = await response.json();
    expect(body.issues).toEqual(
      expect.arrayContaining([expect.objectContaining({ path: ['message'] })]),
    );
    expect(JSON.stringify(body)).not.toContain(marker);
    expect(getDb).not.toHaveBeenCalled();
    expect(verifyBot).not.toHaveBeenCalled();
  });

  it('keeps malformed feedback and top-level arrays rejected', async () => {
    for (const payload of [{ ...feedbackInput, message: 'short' }, [feedbackInput]]) {
      expect((await feedback(request('feedback', payload))).status).toBe(422);
    }
    expect(getDb).not.toHaveBeenCalled();
    expect(verifyBot).not.toHaveBeenCalled();
  });
});
