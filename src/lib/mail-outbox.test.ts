/** @jest-environment node */
import { drainMailOutbox } from './mail-outbox';
import { getDb } from './db';
import { Resend } from 'resend';
jest.mock('./db', () => ({ getDb: jest.fn() }));
jest.mock('resend', () => ({ Resend: jest.fn() }));
const send = jest.fn();
beforeEach(() => {
  process.env.RESEND_API_KEY = 'test-key';
  jest.mocked(Resend).mockImplementation(() => ({ emails: { send } }) as unknown as Resend);
});
it('keeps a resolved provider error pending instead of marking it sent', async () => {
  const db = jest.fn().mockResolvedValue([{ id: 'beta-user-test', payload: { to: 'test@example.org' } }]);
  jest.mocked(getDb).mockReturnValue(db as unknown as NonNullable<ReturnType<typeof getDb>>);
  send.mockResolvedValue({ error: { message: 'temporary failure' } });
  expect(await drainMailOutbox()).toEqual({ sent: 0, pending: 1 });
  expect(db).toHaveBeenCalledTimes(1);
});
it('uses the durable ID for idempotency and marks only delivered mail', async () => {
  const db = jest.fn().mockResolvedValueOnce([{ id: 'beta-user-test', payload: { to: 'test@example.org' } }]).mockResolvedValueOnce([]);
  jest.mocked(getDb).mockReturnValue(db as unknown as NonNullable<ReturnType<typeof getDb>>);
  send.mockResolvedValue({ data: { id: 'delivery-id' }, error: null });
  expect(await drainMailOutbox()).toEqual({ sent: 1, pending: 0 });
  expect(send).toHaveBeenCalledWith(expect.anything(), { idempotencyKey: 'beta-user-test' });
  expect(db).toHaveBeenCalledTimes(2);
});
