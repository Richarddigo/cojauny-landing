"use client";

import { motion } from 'framer-motion';
import { socialLinks } from './SocialLinks';

/**
 * Barra vertical flotante fija con iconos de redes sociales + enlace al formulario beta.
 * Se posiciona justo debajo del logo de Cojauny en el lado izquierdo.
 */
export default function FloatingSocialBar() {
    const handleBetaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const betaSection = document.getElementById('beta');
        if (betaSection) {
            const headerHeight = 80;
            const elementPosition = betaSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - headerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed left-1.5 sm:left-2 md:left-3 top-20 z-40 flex flex-col gap-1 bg-slate-900/95 backdrop-blur-sm rounded-full py-2 px-1.5 shadow-lg border border-white/10"
        >
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 [&_svg]:h-4 [&_svg]:w-4"
                >
                    {link.icon}
                </motion.a>
            ))}

            {/* Separador */}
            <div className="w-5 h-px bg-white/20 mx-auto my-0.5" />

            {/* Botón cohete para ir al formulario beta */}
            <motion.a
                href="#beta"
                onClick={handleBetaClick}
                aria-label="Ir al registro beta"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="p-1.5 rounded-full text-orange-400 hover:text-orange-300 hover:bg-white/10 transition-all duration-200 group"
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
                        stroke="#FF6B35"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </motion.a>
        </motion.div>
    );
}
