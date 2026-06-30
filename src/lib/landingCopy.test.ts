import { ENABLE_PREMIUM } from '@/lib/flags';
import { getLandingCopyForPhase } from '@/lib/landingCopy';

describe('getLandingCopyForPhase', () => {
  it('filters premium FAQ items when premium is disabled', () => {
    if (ENABLE_PREMIUM) {
      return;
    }

    const copy = getLandingCopyForPhase('en');
    const hasPremiumQuestion = copy.faq.items.some((item) =>
      /premium|annual subscription/i.test(item.question),
    );
    expect(hasPremiumQuestion).toBe(false);
  });
});
