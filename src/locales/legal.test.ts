import legalCopy from './legal';

describe('legalCopy (ES)', () => {
  it('debe tener las claves principales', () => {
    expect(legalCopy).toHaveProperty('es');
    const es = legalCopy.es;
    expect(es).toHaveProperty('privacy');
    expect(es).toHaveProperty('cookies');
    expect(es).toHaveProperty('terms');
    expect(es).toHaveProperty('acceptableUse');
    expect(es).toHaveProperty('faq');
    expect(es).toHaveProperty('subprocessors');
  });

  it('debe tener secciones y contactos en privacidad', () => {
    const priv = legalCopy.es.privacy;
    expect(priv).toHaveProperty('title');
    expect(priv).toHaveProperty('intro');
    expect(priv).toHaveProperty('updatedAt');
    expect(priv).toHaveProperty('sections');
    expect(Array.isArray(priv.sections)).toBe(true);
    expect(priv).toHaveProperty('contact');
  });

  it('cada sección de privacidad debe tener heading y body', () => {
    for (const section of legalCopy.es.privacy.sections) {
      expect(section).toHaveProperty('heading');
      expect(section).toHaveProperty('body');
    }
  });

  it('debe tener secciones y contacto en cookies', () => {
    const cookies = legalCopy.es.cookies;
    expect(cookies).toHaveProperty('title');
    expect(cookies).toHaveProperty('intro');
    expect(cookies).toHaveProperty('updatedAt');
    expect(cookies).toHaveProperty('sections');
    expect(Array.isArray(cookies.sections)).toBe(true);
    expect(cookies).toHaveProperty('contact');
  });

  it('debe tener secciones y contacto en términos', () => {
    const terms = legalCopy.es.terms;
    expect(terms).toHaveProperty('title');
    expect(terms).toHaveProperty('intro');
    expect(terms).toHaveProperty('updatedAt');
    expect(terms).toHaveProperty('sections');
    expect(Array.isArray(terms.sections)).toBe(true);
    expect(terms).toHaveProperty('contact');
  });

  it('debe tener preguntas frecuentes y contacto en faq', () => {
    const faq = legalCopy.es.faq;
    expect(faq).toHaveProperty('title');
    expect(faq).toHaveProperty('intro');
    expect(faq).toHaveProperty('updatedAt');
    expect(faq).toHaveProperty('categories');
    expect(Array.isArray(faq.categories)).toBe(true);
    expect(faq).toHaveProperty('contact');
    for (const cat of faq.categories) {
      expect(cat).toHaveProperty('name');
      expect(cat).toHaveProperty('questions');
      expect(Array.isArray(cat.questions)).toBe(true);
      for (const q of cat.questions) {
        expect(q).toHaveProperty('question');
        expect(q).toHaveProperty('answer');
      }
    }
  });

  it('debe tener proveedores y contacto en subprocessors', () => {
    const sub = legalCopy.es.subprocessors;
    expect(sub).toHaveProperty('title');
    expect(sub).toHaveProperty('intro');
    expect(sub).toHaveProperty('updatedAt');
    expect(sub).toHaveProperty('providers');
    expect(Array.isArray(sub.providers)).toBe(true);
    expect(sub).toHaveProperty('contact');
    for (const p of sub.providers) {
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('purpose');
      expect(p).toHaveProperty('location');
      expect(p).toHaveProperty('security');
    }
  });
});
