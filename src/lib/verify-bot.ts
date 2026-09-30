/** Fail closed in production; previews without services cannot accept submissions. */
export async function verifyBot(token: string | undefined, ip: string): Promise<'ok' | 'invalid' | 'unavailable'> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV === 'production' ? 'unavailable' : 'ok';
  if (!token) return 'invalid';
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, ...(ip !== 'unknown' ? { remoteip: ip } : {}) }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return 'unavailable';
    const result = await response.json() as { success: boolean; hostname?: string };
    const allowed = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? 'cojauny.com,www.cojauny.com,cojauny-landing.vercel.app').split(',').map(x => x.trim());
    return result.success && (process.env.NODE_ENV !== 'production' || !!result.hostname && allowed.includes(result.hostname)) ? 'ok' : 'invalid';
  } catch { return 'unavailable'; }
}
