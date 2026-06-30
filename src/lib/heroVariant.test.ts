import { getHeroVariant, resolveHeroCopy } from './heroVariant';
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

  it('defaults to trust variant', () => {
    delete process.env.NEXT_PUBLIC_HERO_VARIANT;
    expect(getHeroVariant()).toBe('trust');
  });

  it('returns savings when env is set', () => {
    process.env.NEXT_PUBLIC_HERO_VARIANT = 'savings';
    expect(getHeroVariant()).toBe('savings');
  });

  it('resolves savings copy when variant is savings', () => {
    process.env.NEXT_PUBLIC_HERO_VARIANT = 'savings';
    const copy = getLandingCopy('en');
    const resolved = resolveHeroCopy(copy.hero, copy.heroVariants);

    expect(resolved.title).toBe(copy.heroVariants?.savings.title);
    expect(resolved.title).not.toBe(copy.hero.title);
  });

  it('keeps trust copy when variant is trust', () => {
    delete process.env.NEXT_PUBLIC_HERO_VARIANT;
    const copy = getLandingCopy('en');
    const resolved = resolveHeroCopy(copy.hero, copy.heroVariants);

    expect(resolved.title).toBe(copy.hero.title);
  });
});
