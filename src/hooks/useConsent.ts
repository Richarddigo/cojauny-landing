"use client";

import { useEffect, useState } from 'react';

type ConsentState = 'unknown' | 'accepted' | 'rejected';

const STORAGE_KEY = 'cojauny-consent';

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
  };

  return { consent, accept, reject };
}
