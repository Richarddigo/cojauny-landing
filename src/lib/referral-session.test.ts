/** @jest-environment node */
import { createReferralSession, verifyReferralSession } from './referral-session';

describe('referral ownership', () => {
  const id = '08b42a36-0216-4f06-a237-c022241e59f9';
  const originalSecret = process.env.REFERRAL_SESSION_SECRET;
  beforeEach(() => { process.env.REFERRAL_SESSION_SECRET = 'test-only-secret-with-at-least-32-characters'; });
  afterAll(() => { if (originalSecret) process.env.REFERRAL_SESSION_SECRET = originalSecret; else delete process.env.REFERRAL_SESSION_SECRET; });
  it('accepts a signed, unexpired owner session', () => { expect(verifyReferralSession(createReferralSession(id))).toBe(id); });
  it('rejects tampering and unsigned identifiers', () => {
    const token = createReferralSession(id);
    expect(verifyReferralSession(token + 'x')).toBeNull();
    expect(verifyReferralSession(id)).toBeNull();
    expect(verifyReferralSession()).toBeNull();
  });
  it('rejects expired sessions', () => {
    jest.useFakeTimers();
    const token = createReferralSession(id);
    jest.advanceTimersByTime(31 * 24 * 60 * 60 * 1000);
    expect(verifyReferralSession(token)).toBeNull();
    jest.useRealTimers();
  });
  it('rejects sessions after rotating the signing secret', () => {
    const token = createReferralSession(id);
    process.env.REFERRAL_SESSION_SECRET = 'another-test-secret-with-at-least-32-characters';
    expect(verifyReferralSession(token)).toBeNull();
  });
});
