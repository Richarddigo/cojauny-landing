import type { Locale } from './config';
import { defaultLocale } from './config';

/**
 * Common shared UI strings (aria-labels, sr-only, footer/header micro-copy).
 * Keep this dictionary small and stable; per-section text belongs in copy.ts/contact.ts/etc.
 */
export interface CommonCopy {
  // Generic
  closeMessage: string;
  // Header / Nav
  openMainMenu: string;
  closeMenu: string;
  // Skip link
  skipToMainContent: string;
  // Floating social bar
  goToBetaSignup: string;
  // Language switcher
  languageSelectorLabel: string;
  // Footer sections
  footerSectionApp: string;
  footerSectionLegal: string;
  // Pricing table
  pricingFeatureHeader: string;
  pricingFreeHeader: string;
  pricingPremiumHeader: string;
  pricingIncludedLabel: string;
  pricingNotIncludedLabel: string;
  // Blog
  blogEyebrow: string;
  // OG / Social card alt text
  ogAlt: string;
}

const commonCopy: Record<Locale, CommonCopy> = {
  es: {
    closeMessage: 'Cerrar mensaje',
    openMainMenu: 'Abrir menú principal',
    closeMenu: 'Cerrar menú',
    skipToMainContent: 'Saltar al contenido principal',
    goToBetaSignup: 'Ir al registro beta',
    languageSelectorLabel: 'Selector de idioma',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Característica',
    pricingFreeHeader: 'Gratis',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Incluido',
    pricingNotIncludedLabel: 'No incluido',
    blogEyebrow: 'Blog',
    ogAlt: 'Cojauny — Comparte taxi al aeropuerto',
  },
  en: {
    closeMessage: 'Close message',
    openMainMenu: 'Open main menu',
    closeMenu: 'Close menu',
    skipToMainContent: 'Skip to main content',
    goToBetaSignup: 'Go to beta signup',
    languageSelectorLabel: 'Language selector',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Feature',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Included',
    pricingNotIncludedLabel: 'Not included',
    blogEyebrow: 'Blog',
    ogAlt: 'Cojauny — Share airport taxi rides',
  },
  de: {
    closeMessage: 'Nachricht schließen',
    openMainMenu: 'Hauptmenü öffnen',
    closeMenu: 'Menü schließen',
    skipToMainContent: 'Zum Hauptinhalt springen',
    goToBetaSignup: 'Zur Beta-Anmeldung',
    languageSelectorLabel: 'Sprachauswahl',
    footerSectionApp: 'App',
    footerSectionLegal: 'Rechtliches',
    pricingFeatureHeader: 'Funktion',
    pricingFreeHeader: 'Kostenlos',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inklusive',
    pricingNotIncludedLabel: 'Nicht inklusive',
    blogEyebrow: 'Blog',
    ogAlt: 'Cojauny — Flughafen-Taxi gemeinsam teilen',
  },
  fr: {
    closeMessage: 'Fermer le message',
    openMainMenu: 'Ouvrir le menu principal',
    closeMenu: 'Fermer le menu',
    skipToMainContent: 'Aller au contenu principal',
    goToBetaSignup: 'Aller à l’inscription bêta',
    languageSelectorLabel: 'Sélecteur de langue',
    footerSectionApp: 'App',
    footerSectionLegal: 'Mentions légales',
    pricingFeatureHeader: 'Fonctionnalité',
    pricingFreeHeader: 'Gratuit',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inclus',
    pricingNotIncludedLabel: 'Non inclus',
    blogEyebrow: 'Blog',
    ogAlt: 'Cojauny — Partagez vos trajets en taxi vers l’aéroport',
  },
};

export function getCommonCopy(locale: Locale | string): CommonCopy {
  return commonCopy[(locale as Locale)] ?? commonCopy[defaultLocale];
}
