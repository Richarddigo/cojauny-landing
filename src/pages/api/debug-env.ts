import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '@/lib/env';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({
      BASE_URL_present: !!env.BASE_URL,
      BASE_SERVICE_ROLE_KEY_present: !!env.BASE_SERVICE_ROLE_KEY,
      BASE_PROJECT_ID_present: !!env.BASE_PROJECT_ID,
      NEXT_PUBLIC_BASE_URL_present: !!env.NEXT_PUBLIC_BASE_URL
    });
  } catch (e) {
    res.status(500).json({ error: 'Unable to read env' });
  }
}
