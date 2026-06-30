"use client";

import { useEffect, useState } from 'react';
import type { Locale } from '@/locales/config';

interface StickyMobileBetaCtaProps {
  locale: Locale;
  label: string;
}

/** Fixed bottom CTA on mobile after scrolling past the hero. */
export default function StickyMobileBetaCta({ locale, label }: StickyMobileBetaCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -20% 0px' },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-900/95 p-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!visible}
    >
      <a
        href="#home"
        className="flex w-full items-center justify-center rounded-xl bg-studio-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-studio-accent-light"
        tabIndex={visible ? 0 : -1}
      >
        {label}
      </a>
    </div>
  );
}
