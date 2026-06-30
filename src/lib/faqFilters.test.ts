import { filterFaqForPhase } from './faqFilters';

describe('filterFaqForPhase', () => {
  const items = [
    { question: '¿Cómo funciona el matching?', answer: 'Por vuelo.' },
    { question: '¿Qué ofrece el plan Premium?', answer: 'Más funciones.' },
    { question: '¿Hay descuento anual?', answer: 'Sí.' },
  ];

  it('oculta preguntas premium en fase beta', () => {
    const filtered = filterFaqForPhase(items, false);
    expect(filtered).toHaveLength(1);
    expect(filtered[0].question).toContain('matching');
  });

  it('mantiene todas las preguntas cuando premium está activo', () => {
    expect(filterFaqForPhase(items, true)).toHaveLength(3);
  });
});
