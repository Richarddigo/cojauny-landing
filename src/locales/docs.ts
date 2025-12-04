import type { Locale } from './config';
import { defaultLocale } from './config';

interface DocStep {
  title: string;
  description: string;
}

interface DocPageCopy {
  title: string;
  intro: string;
  steps: DocStep[];
}

interface DocsCopy {
  sdkPlan: DocPageCopy;
}

const docsCopy: Record<Locale, DocsCopy> = {
  es: {
    sdkPlan: {
      title: 'Guía de integración SDK',
      intro:
        'Sigue esta hoja de ruta para conectar Cojauny con tus apps y sistemas usando nuestro SDK y funciones serverless.',
      steps: [
        {
          title: 'Prepara los deep links',
          description: 'Define esquemas universales (iOS/Android) y reserva rutas para las invitaciones de Cojauny.'
        },
        {
          title: 'Configura la base de datos',
          description:
            'Crea las tablas, activa RLS por proyecto y despliega `send-beta-email` con tus credenciales.'
        },
        {
          title: 'Implementa listeners',
          description: 'Usa edge functions o webhooks para notificar a tus apps sobre aprobaciones o cambios de cupo.'
        }
      ]
    }
  },
  en: {
    sdkPlan: {
      title: 'SDK Integration Guide',
      intro:
        'Follow this roadmap to connect Cojauny with your apps and systems using our SDK and serverless functions.',
      steps: [
        {
          title: 'Prepare deep links',
          description: 'Define universal schemes (iOS/Android) and reserve paths for Cojauny invitations.'
        },
        {
          title: 'Configure the database',
          description:
            'Create tables, enable per-project RLS, and deploy `send-beta-email` with your credentials.'
        },
        {
          title: 'Implement listeners',
          description: 'Use edge functions or webhooks to notify your apps about approvals or capacity changes.'
        }
      ]
    }
  },
  de: {
    sdkPlan: {
      title: 'SDK-Integrationsguide',
      intro:
        'Nutze diese Roadmap, um Cojauny mit deinen Apps und Systemen via SDK und Serverless Functions zu verbinden.',
      steps: [
        {
          title: 'Deep Links vorbereiten',
          description: 'Definiere universelle Schemata (iOS/Android) und reserviere Pfade für Cojauny-Einladungen.'
        },
        {
          title: 'Datenbank konfigurieren',
          description:
            'Erstelle Tabellen, aktiviere RLS pro Projekt und deploye `send-beta-email` mit deinen Zugangsdaten.'
        },
        {
          title: 'Listener implementieren',
          description: 'Nutze Edge Functions oder Webhooks, um Apps über Freigaben oder Änderungen zu informieren.'
        }
      ]
    }
  },
  fr: {
    sdkPlan: {
      title: 'Guide d’intégration SDK',
      intro:
        'Suivez cette feuille de route pour connecter Cojauny à vos apps et systèmes via notre SDK et fonctions serverless.',
      steps: [
        {
          title: 'Préparer les deep links',
          description: 'Définissez des schémas universels (iOS/Android) et réservez des routes pour les invitations Cojauny.'
        },
        {
          title: 'Configurer la base de données',
          description:
            'Créez les tables, activez RLS par projet et déployez `send-beta-email` avec vos identifiants.'
        },
        {
          title: 'Implémenter les listeners',
          description: 'Utilisez des edge functions ou webhooks pour notifier vos apps des approbations ou changements.'
        }
      ]
    }
  }
};

export const getDocsCopy = (locale: Locale): DocsCopy => docsCopy[locale] ?? docsCopy[defaultLocale];
