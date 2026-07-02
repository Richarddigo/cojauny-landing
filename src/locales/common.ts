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
    closeMessage: 'Cerrar aviso',
    openMainMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skipToMainContent: 'Saltar al contenido principal',
    goToBetaSignup: 'Ir al registro beta',
    honeypotHumanLabel: 'Deja este campo vacío',
    languageSelectorLabel: 'Cambiar idioma',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Función',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Incluido',
    pricingNotIncludedLabel: 'No incluido',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Ahorra en cada viaje al aeropuerto',
    ogAlt: 'Cojauny — comparte tu taxi al aeropuerto',
    footerNavSectionLabel: 'Navegación',
    footerEcosystemSectionLabel: 'Ecosistema',
    footerEcosystemDescription: 'Cojauny forma parte de una familia de productos digitales en crecimiento.',
    footerHomeLabel: 'Inicio',
    footerAirportsLabel: 'Aeropuertos',
    navAriaLabel: 'Navegación principal',
    loadingLabel: 'Cargando…',
    errorTitle: 'Vaya, algo ha ido mal',
    errorMessage: 'Ha ocurrido un error inesperado. Prueba de nuevo en un momento.',
    errorRetry: 'Reintentar',
    errorGoHome: '← Volver al inicio',
    relatedLegalPages: 'Otras páginas legales',
  },
  en: {
    closeMessage: 'Dismiss',
    openMainMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToMainContent: 'Skip to main content',
    goToBetaSignup: 'Go to beta signup',
    honeypotHumanLabel: 'Leave this field blank',
    languageSelectorLabel: 'Change language',
    footerSectionApp: 'App',
    footerSectionLegal: 'Legal',
    pricingFeatureHeader: 'Feature',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Included',
    pricingNotIncludedLabel: 'Not included',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Save on every trip to the airport',
    ogAlt: 'Cojauny — share your airport ride',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Ecosystem',
    footerEcosystemDescription: 'Cojauny is part of a growing family of digital products.',
    footerHomeLabel: 'Home',
    footerAirportsLabel: 'Airports',
    navAriaLabel: 'Main navigation',
    loadingLabel: 'Loading…',
    errorTitle: 'Something went wrong',
    errorMessage: 'An unexpected error occurred. Please try again in a moment.',
    errorRetry: 'Try again',
    errorGoHome: '← Back to home',
    relatedLegalPages: 'Other legal pages',
  },
  de: {
    closeMessage: 'Schließen',
    openMainMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    skipToMainContent: 'Zum Hauptinhalt springen',
    goToBetaSignup: 'Zur Beta-Anmeldung',
    honeypotHumanLabel: 'Dieses Feld bitte leer lassen',
    languageSelectorLabel: 'Sprache ändern',
    footerSectionApp: 'App',
    footerSectionLegal: 'Rechtliches',
    pricingFeatureHeader: 'Funktion',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inklusive',
    pricingNotIncludedLabel: 'Nicht inklusive',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Spare bei jeder Fahrt zum Flughafen',
    ogAlt: 'Cojauny — teile deine Fahrt zum Flughafen',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Ökosystem',
    footerEcosystemDescription: 'Cojauny gehört zu einer wachsenden Familie digitaler Produkte.',
    footerHomeLabel: 'Start',
    footerAirportsLabel: 'Flughäfen',
    navAriaLabel: 'Hauptnavigation',
    loadingLabel: 'Wird geladen…',
    errorTitle: 'Da ist etwas schiefgelaufen',
    errorMessage: 'Ein unerwarteter Fehler ist aufgetreten. Versuch es gleich noch einmal.',
    errorRetry: 'Erneut versuchen',
    errorGoHome: '← Zurück zur Startseite',
    relatedLegalPages: 'Weitere rechtliche Seiten',
  },
  fr: {
    closeMessage: 'Fermer',
    openMainMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skipToMainContent: 'Aller au contenu principal',
    goToBetaSignup: 'Aller à l\u2019inscription bêta',
    honeypotHumanLabel: 'Laissez ce champ vide',
    languageSelectorLabel: 'Changer de langue',
    footerSectionApp: 'App',
    footerSectionLegal: 'Mentions légales',
    pricingFeatureHeader: 'Fonctionnalité',
    pricingFreeHeader: 'Free',
    pricingPremiumHeader: 'Premium',
    pricingIncludedLabel: 'Inclus',
    pricingNotIncludedLabel: 'Non inclus',
    blogEyebrow: 'Blog',
    airportSavingsBadge: 'Économisez à chaque trajet vers l\u2019aéroport',
    ogAlt: 'Cojauny — partagez votre trajet vers l\u2019aéroport',
    footerNavSectionLabel: 'Navigation',
    footerEcosystemSectionLabel: 'Écosystème',
    footerEcosystemDescription: 'Cojauny fait partie d\u2019une famille grandissante de produits numériques.',
    footerHomeLabel: 'Accueil',
    footerAirportsLabel: 'Aéroports',
    navAriaLabel: 'Navigation principale',
    loadingLabel: 'Chargement…',
    errorTitle: 'Un problème est survenu',
    errorMessage: 'Une erreur inattendue s\u2019est produite. Réessayez dans un instant.',
    errorRetry: 'Réessayer',
    errorGoHome: '← Retour à l\u2019accueil',
    relatedLegalPages: 'Autres pages légales',
  },
};

export function getCommonCopy(locale: Locale | string): CommonCopy {
  return commonCopy[(locale as Locale)] ?? commonCopy[defaultLocale];
}
