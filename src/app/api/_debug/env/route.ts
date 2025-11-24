import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

export function GET() {
  try {
    return NextResponse.json({
      BASE_URL_present: !!env.BASE_URL,
      BASE_SERVICE_ROLE_KEY_present: !!env.BASE_SERVICE_ROLE_KEY,
      BASE_PROJECT_ID_present: !!env.BASE_PROJECT_ID,
      NEXT_PUBLIC_BASE_URL_present: !!env.NEXT_PUBLIC_BASE_URL
    });
  } catch (e) {
    return NextResponse.json({ error: 'Unable to read env' }, { status: 500 });
  }
}
