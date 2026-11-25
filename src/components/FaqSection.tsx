'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import SectionIntro from '@/components/SectionIntro';
import AirportHubLinks from '@/components/AirportHubLinks';

interface FaqSectionProps {
  copy: LandingCopy['faq'];
  locale: Locale;
  airportsHubTitle: string;
  airportsHubAll: string;
}

const AIRPORT_QUESTION = /aeropuerto|airport|flughafen|aéroport/i;

const FaqSection = ({
  copy,
  locale,
  airportsHubTitle,
  airportsHubAll,
}: FaqSectionProps) => (
  <section id="faq" className="guide-section guide-faq bg-studio-bg">
    <div className="guide-shell guide-split">
      <SectionIntro title={copy.title} description={copy.subtitle} align="left" />
      <div className="guide-faq-list">
        {copy.items.map((item, index) => (
          <Disclosure as="div" key={`faq-${index}`} className="guide-faq-item">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-start justify-between py-5 text-left transition hover:bg-white/10">
                  <span className="text-base font-semibold text-white md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`ml-4 h-5 w-5 flex-shrink-0 text-studio-accent transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-5 pr-8">
                  <p className="text-sm leading-relaxed text-studio-muted md:text-base">
                    {item.answer}
                  </p>
                  {AIRPORT_QUESTION.test(item.question) && (
                    <AirportHubLinks
                      locale={locale}
                      title={airportsHubTitle}
                      allLabel={airportsHubAll}
                      className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-4"
                    />
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
