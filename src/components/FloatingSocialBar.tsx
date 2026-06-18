"use client";

import { usePathname } from 'next/navigation';
import { socialLinks } from './SocialLinks';
import { locales } from '@/locales/config';
import { getCommonCopy } from '@/locales/common';

/**
 * Barra vertical flotante fija con iconos de redes sociales + enlace al formulario beta.
 * Se posiciona justo debajo del logo de Cojauny en el lado izquierdo.
 *
 * NOTE: previously animated with framer-motion; replaced with CSS-only fade-in
 * to remove framer-motion from the root layout critical path. See globals.css
 * for the .floating-social-bar / .floating-social-item keyframes.
 */
export default function FloatingSocialBar() {
    const pathname = usePathname();

    // Detectar el locale actual de la URL
    const currentLocale = locales.find(loc => pathname?.startsWith(`/${loc}`)) || 'en';
    const common = getCommonCopy(currentLocale);

    // Determinar si estamos en la página principal del locale
    const isMainPage = pathname === `/${currentLocale}` || pathname === '/';

    const handleBetaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (isMainPage) {
            // Si estamos en la página principal, solo hacer scroll
            const betaSection = document.getElementById('beta');
            if (betaSection) {
                betaSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Si estamos en otra página, navegar a la página principal con el hash
            window.location.href = `/${currentLocale}#beta`;
        }
    };

    return (
        <div
            className="floating-social-bar fixed left-1.5 sm:left-2 md:left-3 top-20 z-40 flex flex-col gap-1 bg-slate-900/95 backdrop-blur-sm rounded-full py-2 px-1.5 shadow-lg border border-white/10"
        >
            {socialLinks.map((link, index) => (
                <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className="floating-social-item p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 [&_svg]:h-4 [&_svg]:w-4"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                    {link.icon}
                </a>
            ))}

            {/* Separador */}
            <div className="w-5 h-px bg-white/20 mx-auto my-0.5" />

            {/* Botón cohete para ir al formulario beta */}
            <a
                href="#beta"
                onClick={handleBetaClick}
                aria-label={common.goToBetaSignup}
                className="floating-social-item p-1.5 rounded-full text-studio-accent hover:text-studio-accent-light hover:bg-white/10 transition-all duration-200 group"
                style={{ animationDelay: '0.7s' }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:animate-bounce"
                    aria-hidden
                >
                    {/* Cohete emoji style */}
                    <path
                        d="M12 2C12 2 8 6 8 12C8 14 9 16 10 17L9 22L12 20L15 22L14 17C15 16 16 14 16 12C16 6 12 2 12 2Z"
                        fill="currentColor"
                    />
                    <circle cx="12" cy="10" r="2" fill="white" />
                    <path
                        d="M8 12C6 13 5 14 5 15C5 16 6 16 7 15L8 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 12C18 13 19 14 19 15C19 16 18 16 17 15L16 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    {/* Llamas del cohete */}
                    <path
                        d="M10 17L9 20M12 18L12 21M14 17L15 20"
                        stroke="#5B7BFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </a>
        </div>
    );
}
