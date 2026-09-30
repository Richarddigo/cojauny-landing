/** @jest-environment node */
import { readRequestJson } from './request-body';
it('accepts a bounded JSON request without requiring Content-Length', async () => {
  const request = new Request('https://example.org', { method: 'POST', body: '{"locale":"es"}' });
  expect(await readRequestJson(request)).toEqual({ locale: 'es' });
});
it('rejects an oversized streamed body even without Content-Length', async () => {
  const request = new Request('https://example.org', { method: 'POST', body: 'x'.repeat(32769) });
  await expect(readRequestJson(request)).rejects.toMatchObject({ status: 413 });
});
