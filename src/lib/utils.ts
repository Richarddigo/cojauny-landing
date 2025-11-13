export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export function getClientIp(requestHeaders: Headers): string | null {
  const forwarded = requestHeaders.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? null;
  }
  const realIp = requestHeaders.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return null;
}

export function isHuman(honeypotValue: string | undefined | null): boolean {
  return !honeypotValue;
}
