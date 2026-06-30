import { ENABLE_PREMIUM } from '@/lib/flags';

export interface FaqItemLike {
  question: string;
  answer: string;
}

/** FAQ entries about paid plans — hidden during beta when premium is disabled. */
const PREMIUM_FAQ_PATTERN =
  /premium|free and premium|jahresrabatt|annual subscription|descuento anual|réduction annuelle|plan anual/i;

export function filterFaqForPhase<T extends FaqItemLike>(
  items: T[],
  showPremium = ENABLE_PREMIUM,
): T[] {
  if (showPremium) {
    return items;
  }

  return items.filter((item) => !PREMIUM_FAQ_PATTERN.test(item.question));
}
