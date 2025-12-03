'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, type Locale } from '@/locales/config';

/**
 * Componente cliente que detecta el idioma del navegador y redirige
 * a la versión localizada de la página.
 * 
 * Solo se ejecuta en la página raíz (/) para redirigir a /{locale}
 */
export default function DetectLocaleRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Obtener el idioma preferido del navegador
        const browserLang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || '';

        // Extraer el código de idioma base (ej: "es-ES" -> "es")
        const langCode = browserLang.split('-')[0].toLowerCase();

        // Verificar si el idioma está soportado, si no usar inglés como default
        const detectedLocale: Locale = locales.includes(langCode as Locale)
            ? (langCode as Locale)
            : 'en';

        // Redirigir a la versión localizada
        router.replace(`/${detectedLocale}`);
    }, [router]);

    return null;
}
