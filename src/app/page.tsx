import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';
import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HashScrollHandler from '@/components/HashScrollHandler';
import LandingPageContent from '@/components/LandingPageContent';
import { getLandingCopy } from '@/locales/copy';
import { defaultLocale } from '@/locales/config';

export const revalidate = 60;

export default function Page() {
    const locale = defaultLocale;
    const copy = getLandingCopy(locale);

    return (
        <>
            <AccessibilitySkipLink label={copy.skipLink} />
            <Header locale={locale} copy={copy.header} />
            <HashScrollHandler />
            <main id="main-content" className="relative pt-24">
                <LandingPageContent copy={copy} locale={locale} />
            </main>
            <Footer copy={copy.footer} locale={locale} />
            <CookieBanner copy={copy.cookie} locale={locale} />
        </>
    );
}
