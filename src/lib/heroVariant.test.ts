import { getHeroVariantFromEnv, resolveHeroCopy } from './heroVariant';
import { getLandingCopy } from '@/locales/copy';

describe('heroVariant', () => {
  const originalVariant = process.env.NEXT_PUBLIC_HERO_VARIANT;

  afterEach(() => {
    if (originalVariant === undefined) {
      delete process.env.NEXT_PUBLIC_HERO_VARIANT;
    } else {
      process.env.NEXT_PUBLIC_HERO_VARIANT = originalVariant;
    }
  });

  it('defaults env override to null', () => {
    delete process.env.NEXT_PUBLIC_HERO_VARIANT;
    expect(getHeroVariantFromEnv()).toBeNull();
  });

  it('returns savings when env is set', () => {
    process.env.NEXT_PUBLIC_HERO_VARIANT = 'savings';
    expect(getHeroVariantFromEnv()).toBe('savings');
  });

  it('resolves savings copy when variant is savings', () => {
    const copy = getLandingCopy('en');
    const resolved = resolveHeroCopy(copy.hero, copy.heroVariants, 'savings');

    expect(resolved.title).toBe(copy.heroVariants?.savings.title);
    expect(resolved.title).not.toBe(copy.hero.title);
  });

  it('keeps trust copy when variant is trust', () => {
    const copy = getLandingCopy('en');
    const resolved = resolveHeroCopy(copy.hero, copy.heroVariants, 'trust');

    expect(resolved.title).toBe(copy.hero.title);
  });
});
