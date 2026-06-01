import type { CommonCopy } from '@/locales/common';
import type { LandingCopy } from '@/locales/copy';

type Translator = (key: string) => string;

export function getCommonCopyFromMessages(t: Translator): CommonCopy {
  return {
    closeMessage: t('closeMessage'),
    openMainMenu: t('openMainMenu'),
    closeMenu: t('closeMenu'),
    skipToMainContent: t('skipToMainContent'),
    goToBetaSignup: t('goToBetaSignup'),
    honeypotHumanLabel: t('honeypotHumanLabel'),
    languageSelectorLabel: t('languageSelectorLabel'),
    footerSectionApp: t('footerSectionApp'),
    footerSectionLegal: t('footerSectionLegal'),
    pricingFeatureHeader: t('pricingFeatureHeader'),
    pricingFreeHeader: t('pricingFreeHeader'),
    pricingPremiumHeader: t('pricingPremiumHeader'),
    pricingIncludedLabel: t('pricingIncludedLabel'),
    pricingNotIncludedLabel: t('pricingNotIncludedLabel'),
    blogEyebrow: t('blogEyebrow'),
    airportSavingsBadge: t('airportSavingsBadge'),
    ogAlt: t('ogAlt'),
    footerNavSectionLabel: t('footerNavSectionLabel'),
    footerEcosystemSectionLabel: t('footerEcosystemSectionLabel'),
    footerEcosystemDescription: t('footerEcosystemDescription'),
    footerHomeLabel: t('footerHomeLabel'),
    navAriaLabel: t('navAriaLabel'),
    loadingLabel: t('loadingLabel'),
    errorTitle: t('errorTitle'),
    errorMessage: t('errorMessage'),
    errorRetry: t('errorRetry'),
    errorGoHome: t('errorGoHome'),
    relatedLegalPages: t('relatedLegalPages'),
  };
}

export function getHeaderCopyFromMessages(t: Translator): LandingCopy['header'] {
  return {
    home: t('home'),
    features: t('features'),
    demo: t('demo'),
    pricing: t('pricing'),
    beta: t('beta'),
    contact: t('contact'),
    blog: t('blog'),
    benefits: t('benefits'),
    impact: t('impact'),
    workflow: t('workflow'),
    faq: t('faq'),
    feedback: t('feedback'),
  };
}

export function getFooterCopyFromMessages(t: Translator): LandingCopy['footer'] {
  return {
    description: t('description'),
    rights: t('rights'),
    appStoreSoon: t('appStoreSoon'),
    playStoreSoon: t('playStoreSoon'),
    privacy: t('privacy'),
    cookies: t('cookies'),
    terms: t('terms'),
    accountDeletion: t('accountDeletion'),
    acceptableUse: t('acceptableUse'),
    faq: t('faq'),
    subprocessors: t('subprocessors'),
    contact: t('contact'),
    blog: t('blog'),
    languageLabel: t('languageLabel'),
    madeInEurope: t('madeInEurope'),
  };
}
