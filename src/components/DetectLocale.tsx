"use client";
import { useEffect } from 'react';

const SUPPORTED = ['es', 'en', 'de', 'fr'];

function pickLocaleFromNavigator(): string {
    if (typeof navigator === 'undefined') return 'en';
    const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for (const l of langs) {
        if (!l) continue;
        const code = l.split('-')[0].toLowerCase();
        if (SUPPORTED.includes(code)) return code;
    }
    return 'en';
}

export default function DetectLocale() {
    useEffect(() => {
        try {
            const path = window.location.pathname;
            const first = path.split('/')[1];
            if (SUPPORTED.includes(first)) return; // already localized

            // prevent repeat redirects in same session
            if (sessionStorage.getItem('cojauny_locale_redirected') === '1') return;

            const detected = pickLocaleFromNavigator();
            const dest = `/${detected}${path === '/' ? '' : path}`;
            sessionStorage.setItem('cojauny_locale_redirected', '1');
            // use replace to avoid polluting history
            window.location.replace(dest);
        } catch {
            // ignore
        }
    }, []);

    return null;
}
