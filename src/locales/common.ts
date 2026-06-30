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
  // Forms
  honeypotHumanLabel: string;
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
  airportSavingsBadge: string;
  // OG / Social card alt text
  ogAlt: string;
  // Footer section labels (moved from Footer.tsx hardcoded Records)
  footerNavSectionLabel: string;
  footerEcosystemSectionLabel: string;
  footerEcosystemDescription: string;
  footerHomeLabel: string;
  footerAirportsLabel: string;
  // Header nav landmark
  navAriaLabel: string;
  // Loading / Error page strings
  loadingLabel: string;
  errorTitle: string;
  errorMessage: string;
  errorRetry: string;
  errorGoHome: string;
  // Account-deletion page
  relatedLegalPages: string;
}

const commonCopy: Record<Locale, CommonCopy> = {
  es: {
    closeMessage: 'Cerrar mensaje',
    openMainMenu: 'Abrir menú principal',
    closeMenu: 'Cerrar menú',
    skipToMainContent: 'Saltar al contenido principal',
    goToBetaSignup: 'Ir al registro beta',
    honeypotHumanLabel: 'No rellenes este campo si eres humano',
    languageSelectorLabel: 'Selector de idioma',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Característica',
    pricingFreeHeader: 'Gratis',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Incluido',
    pricingNotIncludedLabel: 'No incluido',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Ahorra en cada viaje al aeropuerto',
    ogAlt: 'Cojauny — Comparte taxi al aeropuerto',
    footerNavSectionLabel: 'Navegación',
    footerEcosystemSectionLabel: 'Ecosistema',
    footerEcosystemDescription: 'Cojauny forma parte de un ecosistema de productos digitales en evolución.',
    footerHomeLabel: 'Inicio',
    footerAirportsLabel: 'Aeropuertos',
    navAriaLabel: 'Navegación principal',
    loadingLabel: 'Cargando…',
    errorTitle: 'Algo salió mal',
    errorMessage: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
    errorRetry: 'Intentar de nuevo',
    errorGoHome: '← Ir al inicio',
    relatedLegalPages: 'Páginas legales relacionadas',
  },
  en: {
    closeMessage: 'Close message',
    openMainMenu: 'Open main menu',
    closeMenu: 'Close menu',
    skipToMainContent: 'Skip to main content',
    goToBetaSignup: 'Go to beta signup',
    honeypotHumanLabel: "Don't fill out this field if you're human",
    languageSelectorLabel: 'Language selector',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Feature',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Included',
    pricingNotIncludedLabel: 'Not included',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Save on every trip to the airport',
    ogAlt: 'Cojauny — Share airport taxi rides',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Ecosystem',
    footerEcosystemDescription: 'Cojauny is part of an evolving ecosystem of digital products.',
    footerHomeLabel: 'Home',
    footerAirportsLabel: 'Airports',
    navAriaLabel: 'Main navigation',
    loadingLabel: 'Loading…',
    errorTitle: 'Something went wrong',
    errorMessage: 'An unexpected error occurred. Please try again.',
    errorRetry: 'Try again',
    errorGoHome: '← Go home',
    relatedLegalPages: 'Related legal pages',
  },
  de: {
    closeMessage: 'Nachricht schließen',
    openMainMenu: 'Hauptmenü öffnen',
    closeMenu: 'Menü schließen',
    skipToMainContent: 'Zum Hauptinhalt springen',
    goToBetaSignup: 'Zur Beta-Anmeldung',
    honeypotHumanLabel: 'Fülle dieses Feld nicht aus, wenn du ein Mensch bist',
    languageSelectorLabel: 'Sprachauswahl',
    footerSectionApp: 'App',
    footerSectionLegal: 'Rechtliches',
    pricingFeatureHeader: 'Funktion',
    pricingFreeHeader: 'Kostenlos',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inklusive',
    pricingNotIncludedLabel: 'Nicht inklusive',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Spare bei jeder Fahrt zum Flughafen',
    ogAlt: 'Cojauny — Flughafen-Taxi gemeinsam teilen',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Ökosystem',
    footerEcosystemDescription: 'Cojauny ist Teil eines sich entwickelnden Ökosystems digitaler Produkte.',
    footerHomeLabel: 'Start',
    footerAirportsLabel: 'Flughäfen',
    navAriaLabel: 'Hauptnavigation',
    loadingLabel: 'Laden…',
    errorTitle: 'Etwas ist schiefgelaufen',
    errorMessage: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.',
    errorRetry: 'Erneut versuchen',
    errorGoHome: '← Zur Startseite',
    relatedLegalPages: 'Verwandte rechtliche Seiten',
  },
  fr: {
    closeMessage: 'Fermer le message',
    openMainMenu: 'Ouvrir le menu principal',
    closeMenu: 'Fermer le menu',
    skipToMainContent: 'Aller au contenu principal',
    goToBetaSignup: 'Aller à l’inscription bêta',
    honeypotHumanLabel: "Ne remplissez pas ce champ si vous êtes humain",
    languageSelectorLabel: 'Sélecteur de langue',
    footerSectionApp: 'App',
    footerSectionLegal: 'Mentions légales',
    pricingFeatureHeader: 'Fonctionnalité',
    pricingFreeHeader: 'Gratuit',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inclus',
    pricingNotIncludedLabel: 'Non inclus',
    blogEyebrow: 'Blog',
    airportSavingsBadge: "Économise sur chaque trajet vers l'aéroport",
    ogAlt: 'Cojauny — Partagez vos trajets en taxi vers l’aéroport',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Écosystème',
    footerEcosystemDescription: 'Cojauny fait partie d’un écosystème évolutif de produits numériques.',
    footerHomeLabel: 'Accueil',
    footerAirportsLabel: 'Aéroports',
    navAriaLabel: 'Navigation principale',
    loadingLabel: 'Chargement…',
    errorTitle: "Une erreur s'est produite",
    errorMessage: 'Une erreur inattendue est survenue. Veuillez réessayer.',
    errorRetry: 'Réessayer',
    errorGoHome: '← Retour à l’accueil',
    relatedLegalPages: 'Pages juridiques associées',
  },
};

export function getCommonCopy(locale: Locale | string): CommonCopy {
  return commonCopy[(locale as Locale)] ?? commonCopy[defaultLocale];
}
