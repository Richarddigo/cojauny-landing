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
      title: 'Plan de integración SDK',
      intro:
        'Sigue esta hoja de ruta para conectar Cojauny con tus apps móviles y sistemas internos usando nuestro SDK y las funciones serverless.',
      steps: [
        {
          title: 'Preparar deep links',
          description: 'Define esquemas universales en iOS y Android y reserva rutas exclusivas para invitaciones Cojauny.'
        },
        {
          title: 'Configurar Supabase',
          description:
            'Crea tablas de invitaciones, habilita RLS por proyecto y despliega la función `send-beta-email` con tus credenciales.'
        },
        {
          title: 'Implementar listeners',
          description: 'Usa edge functions o webhooks para avisar a tus apps cuando apruebes usuarios o cambien los cupos.'
        }
      ]
    }
  },
  en: {
    sdkPlan: {
      title: 'SDK Integration Plan',
      intro:
        'Follow this roadmap to connect Cojauny with your mobile apps and internal systems using our SDK and serverless functions.',
      steps: [
        {
          title: 'Prepare deep links',
          description: 'Define universal link schemes for iOS and Android and reserve paths for Cojauny invitations.'
        },
        {
          title: 'Configure Supabase',
          description:
            'Create invitation tables, enable per-project RLS rules and deploy the `send-beta-email` function with your credentials.'
        },
        {
          title: 'Implement listeners',
          description: 'Rely on edge functions or webhooks to notify your apps whenever you approve users or adjust capacity.'
        }
      ]
    }
  },
  de: {
    sdkPlan: {
      title: 'SDK-Integrationsplan',
      intro:
        'Nutze diese Roadmap, um Cojauny mithilfe unseres SDKs und serverlosen Funktionen mit deinen mobilen Apps und internen Systemen zu verbinden.',
      steps: [
        {
          title: 'Deep Links vorbereiten',
          description: 'Definiere universelle Link-Schemata für iOS und Android und reserviere Pfade für Cojauny-Einladungen.'
        },
        {
          title: 'Supabase konfigurieren',
          description:
            'Erstelle Einladungstabellen, aktiviere projektspezifische RLS-Regeln und deploye die Funktion `send-beta-email` mit deinen Zugangsdaten.'
        },
        {
          title: 'Listener implementieren',
          description: 'Nutze Edge Functions oder Webhooks, um deine Apps bei Freigaben oder Kapazitätsänderungen sofort zu informieren.'
        }
      ]
    }
  },
  fr: {
    sdkPlan: {
      title: 'Plan d’intégration du SDK',
      intro:
        'Suivez cette feuille de route pour connecter Cojauny à vos applications mobiles et systèmes internes grâce à notre SDK et à nos fonctions serverless.',
      steps: [
        {
          title: 'Préparer les deep links',
          description: 'Définissez des schémas de liens universels pour iOS et Android et réservez des routes dédiées aux invitations Cojauny.'
        },
        {
          title: 'Configurer Supabase',
          description:
            'Créez les tables d’invitations, activez les règles RLS par projet et déployez la fonction `send-beta-email` avec vos identifiants.'
        },
        {
          title: 'Mettre en place les listeners',
          description: 'Utilisez des edge functions ou des webhooks pour alerter vos apps dès que vous approuvez des utilisateurs ou modifiez la capacité.'
        }
      ]
    }
  }
};

export const getDocsCopy = (locale: Locale): DocsCopy => docsCopy[locale] ?? docsCopy[defaultLocale];
