import { jest } from '@jest/globals';

describe('triggerEdgeEmailFunction', () => {
  const originalEnv = process.env;
  const originalFetch = global.fetch;
  const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      SUPABASE_PROJECT_ID: 'mi-proyecto-supabase',
      SUPABASE_SERVICE_ROLE_KEY: 'service-role-key'
    };

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true })
    } as unknown as Response);
    global.fetch = mockFetch as unknown as typeof fetch;
  });

  afterEach(() => {
    process.env = originalEnv;
    global.fetch = originalFetch;
    jest.resetModules();
  });

  it('invoca la edge function de Supabase con credenciales', async () => {
    jest.resetModules();
    const { triggerEdgeEmailFunction } = await import('@/lib/email');

    await triggerEdgeEmailFunction({
      email: 'test@example.com',
      template: 'beta-confirmation',
      variables: { name: 'Test', confirmation_token: '123' }
    });

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('mi-proyecto-supabase.functions.supabase.co/send-beta-email'),
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ Authorization: expect.stringContaining('service-role') })
      })
    );
  });
});
