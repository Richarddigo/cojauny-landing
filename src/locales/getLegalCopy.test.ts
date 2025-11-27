import { getLegalCopy } from './legal';

describe('getLegalCopy', () => {
  it('devuelve el objeto legal para un locale existente', () => {
    const es = getLegalCopy('es');
    expect(es.privacy.title).toContain('Privacidad');
    expect(es.cookies.title).toContain('Cookies');
    expect(es.terms.title).toContain('Términos');
    expect(es.acceptableUse.title).toContain('Uso Aceptable');
    expect(es.faq.title).toContain('Preguntas');
    expect(es.subprocessors.title).toContain('Subprocesadores');
  });

  it('devuelve el objeto legal por defecto si el locale no existe', () => {
    const fallback = getLegalCopy('en');
    const def = getLegalCopy('es');
    expect(fallback.privacy.title).toBe(def.privacy.title);
  });
});
