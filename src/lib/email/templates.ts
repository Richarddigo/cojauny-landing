import type { Locale } from '@/locales/config';
import { BRAND } from './brand-tokens';
import { escapeHtml } from './escape';
import { emailCard, emailLabel, wrapEmailHtml } from './layout';

type EmailLocale = Locale;

const betaUserCopy: Record<
  EmailLocale,
  {
    subject: string;
    preheader: string;
    badge: string;
    title: (name: string) => string;
    intro: string;
    bullets: string[];
    referralIntro: string;
    cta: string;
    footer: string;
  }
> = {
  es: {
    subject: '¡Estás en la lista de espera de Cojauny! 🎉',
    preheader: 'Tu solicitud de acceso beta ha sido recibida.',
    badge: 'Acceso beta Cojauny',
    title: (name) => `¡Hola, ${name}!`,
    intro:
      "Tu solicitud está guardada en la lista de espera. Cojauny prepara una beta para conectar viajeros con planes compatibles.",
    bullets: ["El registro no garantiza una invitación ni una fecha de acceso.", "La disponibilidad de funciones y aeropuertos se confirmará con la beta.", "Compartir un enlace de referido no garantiza prioridad."],
    referralIntro: 'Tu enlace de invitación:',
    cta: 'Visitar cojauny.com',
    footer: 'Cojauny · Viajando juntos hacia un futuro sostenible · cojauny.com',
  },
  en: {
    subject: "You're on the Cojauny beta waitlist! 🎉",
    preheader: 'Your beta access request has been received.',
    badge: 'Cojauny Beta Access',
    title: (name) => `Hi ${name}!`,
    intro:
      "Your application is saved on the waitlist. Cojauny is preparing a beta to connect travellers with compatible plans.",
    bullets: ["Registration does not guarantee an invitation or an access date.", "Features and airport availability will be confirmed with the beta.", "Sharing a referral link does not guarantee priority."],
    referralIntro: 'Your referral link:',
    cta: 'Visit cojauny.com',
    footer: 'Cojauny · Traveling together toward a sustainable future · cojauny.com',
  },
  de: {
    subject: 'Du stehst auf der Cojauny-Beta-Warteliste! 🎉',
    preheader: 'Deine Beta-Anfrage wurde empfangen.',
    badge: 'Cojauny Beta-Zugang',
    title: (name) => `Hallo ${name}!`,
    intro:
      "Deine Anfrage ist in der Warteliste gespeichert. Cojauny bereitet eine Beta für Menschen mit passenden Reiseplänen vor.",
    bullets: ["Die Anmeldung garantiert weder eine Einladung noch einen Zugangstermin.", "Funktionen und verfügbare Flughäfen werden mit der Beta bestätigt.", "Ein Empfehlungslink garantiert keinen Vorrang."],
    referralIntro: 'Dein Empfehlungslink:',
    cta: 'cojauny.com besuchen',
    footer: 'Cojauny · Gemeinsam reisen, nachhaltiger · cojauny.com',
  },
  fr: {
    subject: 'Vous êtes sur la liste d\'attente bêta Cojauny ! 🎉',
    preheader: 'Votre demande d\'accès bêta a bien été reçue.',
    badge: 'Accès bêta Cojauny',
    title: (name) => `Bonjour ${name} !`,
    intro:
      "Votre demande est enregistrée sur la liste d’attente. Cojauny prépare une bêta pour relier des voyageurs aux projets compatibles.",
    bullets: ["L’inscription ne garantit ni invitation ni date d’accès.", "Les fonctions et aéroports disponibles seront confirmés avec la bêta.", "Partager un lien de parrainage ne garantit pas de priorité."],
    referralIntro: 'Votre lien de parrainage :',
    cta: 'Visiter cojauny.com',
    footer: 'Cojauny · Voyager ensemble vers un avenir durable · cojauny.com',
  },
};

const betaAdminCopy: Record<EmailLocale, { subject: (name: string) => string; badge: string; title: string }> = {
  es: { subject: (n) => `[Cojauny Beta] Nueva solicitud — ${n}`, badge: 'Nueva solicitud beta', title: 'Registro en waitlist' },
  en: { subject: (n) => `[Cojauny Beta] New signup — ${n}`, badge: 'New beta signup', title: 'Waitlist registration' },
  de: { subject: (n) => `[Cojauny Beta] Neue Anmeldung — ${n}`, badge: 'Neue Beta-Anmeldung', title: 'Wartelisten-Registrierung' },
  fr: { subject: (n) => `[Cojauny Beta] Nouvelle inscription — ${n}`, badge: 'Nouvelle inscription bêta', title: 'Inscription waitlist' },
};

const feedbackUserCopy: Record<
  EmailLocale,
  { subject: string; preheader: string; badge: string; title: (name: string) => string; body: string; footer: string }
> = {
  es: {
    subject: 'Hemos recibido tu mensaje — Cojauny',
    preheader: 'Gracias por contactar con Cojauny.',
    badge: 'Cojauny',
    title: (name) => `Gracias, ${name}`,
    body: 'Hemos recibido tu mensaje y lo revisará nuestro equipo. Si tu consulta requiere respuesta, te escribiremos en un plazo de 48 horas.',
    footer: 'Cojauny · cojauny.com',
  },
  en: {
    subject: 'We received your message — Cojauny',
    preheader: 'Thanks for reaching out to Cojauny.',
    badge: 'Cojauny',
    title: (name) => `Thank you, ${name}`,
    body: 'We have received your message and our team will review it. If a reply is needed, we will get back to you within 48 hours.',
    footer: 'Cojauny · cojauny.com',
  },
  de: {
    subject: 'Wir haben deine Nachricht erhalten — Cojauny',
    preheader: 'Danke für deine Nachricht an Cojauny.',
    badge: 'Cojauny',
    title: (name) => `Danke, ${name}`,
    body: 'Wir haben deine Nachricht erhalten und unser Team wird sie prüfen. Falls eine Antwort nötig ist, melden wir uns innerhalb von 48 Stunden.',
    footer: 'Cojauny · cojauny.com',
  },
  fr: {
    subject: 'Nous avons reçu votre message — Cojauny',
    preheader: 'Merci de nous avoir contactés.',
    badge: 'Cojauny',
    title: (name) => `Merci, ${name}`,
    body: 'Nous avons bien reçu votre message et notre équipe l\'examinera. Si une réponse est nécessaire, nous vous répondrons sous 48 heures.',
    footer: 'Cojauny · cojauny.com',
  },
};

const usecaseLabels: Record<EmailLocale, Record<string, string>> = {
  es: { feedback: 'Feedback de producto', idea: 'Nueva idea', business_proposal: 'Propuesta comercial' },
  en: { feedback: 'Product feedback', idea: 'New idea', business_proposal: 'Business proposal' },
  de: { feedback: 'Produkt-Feedback', idea: 'Neue Idee', business_proposal: 'Geschäftsvorschlag' },
  fr: { feedback: 'Retour produit', idea: 'Nouvelle idée', business_proposal: 'Proposition commerciale' },
};

function resolveLocale(locale: string): EmailLocale {
  if (locale === 'es' || locale === 'en' || locale === 'de' || locale === 'fr') return locale;
  return 'en';
}

export function buildBetaUserEmail(fullName: string, locale: string, referralLink?: string) {
  const loc = resolveLocale(locale);
  const copy = betaUserCopy[loc];
  const bullets = copy.bullets.map((b) => `<li style="margin-bottom:8px;">${escapeHtml(b)}</li>`).join('');
  const referralBlock = referralLink
    ? emailCard(
        `${emailLabel(copy.referralIntro)}<p style="margin:0;word-break:break-all;"><a href="${escapeHtml(referralLink)}" style="color:${BRAND.accent};">${escapeHtml(referralLink)}</a></p>`
      )
    : '';

  const html = wrapEmailHtml({
    preheader: copy.preheader,
    badge: copy.badge,
    title: copy.title(fullName),
    bodyHtml: `
      <p style="margin:0 0 16px;color:${BRAND.text};">${escapeHtml(copy.intro)}</p>
      <ul style="margin:0;padding-left:20px;">${bullets}</ul>
      ${referralBlock}
    `,
    cta: { label: copy.cta, href: BRAND.siteUrl },
    footer: copy.footer,
  });

  return { subject: copy.subject, html };
}

export function buildBetaAdminEmail(
  data: {
    fullName: string;
    email: string;
    country?: string;
    flightFrequency?: string;
    useCase?: string;
    locale: string;
  }
) {
  const loc = resolveLocale(data.locale);
  const copy = betaAdminCopy[loc];
  const rows = [
    ['Email', data.email],
    ['País / Country', data.country ?? '—'],
    ['Frecuencia / Frequency', data.flightFrequency ?? '—'],
    ['Uso / Use case', data.useCase ?? '—'],
    ['Idioma / Locale', data.locale],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:${BRAND.faint};font-size:13px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;font-size:13px;color:${BRAND.text};">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  const html = wrapEmailHtml({
    badge: copy.badge,
    title: copy.title,
    bodyHtml: `
      <p style="margin:0 0 12px;color:${BRAND.text};font-weight:600;">${escapeHtml(data.fullName)}</p>
      <table style="width:100%;border-collapse:collapse;">${table}</table>
    `,
    footer: 'Admin notification · cojauny.com beta form',
  });

  return { subject: copy.subject(data.fullName), html };
}

export function buildFeedbackUserEmail(name: string, locale: string) {
  const loc = resolveLocale(locale);
  const copy = feedbackUserCopy[loc];
  const html = wrapEmailHtml({
    preheader: copy.preheader,
    badge: copy.badge,
    title: copy.title(name),
    bodyHtml: `<p style="margin:0;color:${BRAND.text};">${escapeHtml(copy.body)}</p>`,
    footer: copy.footer,
  });
  return { subject: copy.subject, html };
}

export function buildFeedbackAdminEmail(data: {
  name: string;
  email: string;
  message: string;
  usecase: string;
  locale: string;
}) {
  const loc = resolveLocale(data.locale);
  const typeLabel = usecaseLabels[loc][data.usecase] ?? data.usecase;

  const html = wrapEmailHtml({
    badge: 'Cojauny Feedback',
    title: `Message from ${data.name}`,
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
        <tr><td style="padding:6px 12px 6px 0;color:${BRAND.faint};font-size:13px;">Email</td><td style="padding:6px 0;font-size:13px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.accent};">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:${BRAND.faint};font-size:13px;">Type</td><td style="padding:6px 0;font-size:13px;color:${BRAND.text};">${escapeHtml(typeLabel)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:${BRAND.faint};font-size:13px;">Locale</td><td style="padding:6px 0;font-size:13px;color:${BRAND.text};">${escapeHtml(data.locale)}</td></tr>
      </table>
      ${emailCard(`${emailLabel('Message')}<p style="margin:0;white-space:pre-wrap;color:${BRAND.text};">${escapeHtml(data.message)}</p>`)}
    `,
    footer: 'Admin notification · cojauny.com feedback form',
  });

  return {
    subject: `[Cojauny Feedback] ${typeLabel} — ${data.name}`,
    html,
  };
}
