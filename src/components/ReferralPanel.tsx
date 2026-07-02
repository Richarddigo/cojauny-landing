"use client";

import { useState, useEffect } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import type { ReferralPanelCopy } from '@/locales/copy';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

interface ReferralPanelProps {
  copy: ReferralPanelCopy;
  email: string;
  referralLink?: string;
}

interface ReferralStats {
  referral_code: string;
  referral_link: string;
  visits: number;
  signups: number;
}

const ReferralPanel = ({ copy, email, referralLink: propReferralLink }: ReferralPanelProps) => {
  const [stats, setStats] = useState<ReferralStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/referral/stats?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch referral stats');
        }
        const data = await response.json();
        // API may return object or array; normalize to object
        const payload = data.data;
        if (Array.isArray(payload) && payload.length > 0) {
          setStats(payload[0]);
        } else if (payload && typeof payload === 'object') {
          setStats(payload);
        } else {
          setStats(null);
        }
      } catch {
        setError('Could not load referral stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [email]);

  const handleCopyLink = async () => {
    const linkToCopy = propReferralLink || stats?.referral_link;
    if (!linkToCopy) return;

    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/8 bg-studio-surface p-8 shadow-xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  const displayLink = propReferralLink || stats.referral_link;

  return (
    <div className="scroll-mt-16 lg:scroll-mt-20">
      <div className="rounded-3xl border border-studio-accent/20 bg-studio-surface p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
            {copy.title}
          </h3>
          <p className="text-base text-studio-muted">{copy.subtitle}</p>
        </div>

        {/* Referral Link Section / Seccion de enlace de referral / Empfehlungslink-Bereich / Section de lien de parrainage */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-studio-muted mb-3">
            {copy.yourLink}
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              readOnly
              value={displayLink}
              className="flex-1 rounded-2xl border-2 border-studio-accent/40 bg-studio-surface-2 px-4 py-3 text-base text-studio-text focus:outline-none focus:ring-2 focus:ring-studio-accent/20"
            />
            <Button onClick={handleCopyLink} className="rounded-2xl">
              {copiedLink ? (
                <>
                  <Icon name="check" size={18} className="text-white" />
                  {copy.copiedButton}
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="h-5 w-5" aria-hidden />
                  {copy.copyButton}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Stats Section / Seccion de estadisticas / Statistikbereich / Section des statistiques */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-studio-surface-2 border border-white/8 p-6 text-center">
            <div className="text-4xl font-bold text-studio-accent mb-2">{stats.visits}</div>
            <div className="text-sm font-medium text-studio-muted">{copy.stats.visits}</div>
          </div>
          <div className="rounded-2xl bg-studio-surface-2 border border-white/8 p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">{stats.signups}</div>
            <div className="text-sm font-medium text-studio-muted">{copy.stats.signups}</div>
          </div>
        </div>

        {/* Instructions Section / Seccion de instrucciones / Anleitungsbereich / Section des instructions */}
        <div className="bg-studio-surface-2 rounded-2xl border border-white/8 p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {copy.instructions.title}
          </h3>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-studio-accent/15 text-studio-accent text-sm font-semibold">
                1
              </span>
              <span className="text-studio-muted">{copy.instructions.step1}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-studio-accent/15 text-studio-accent text-sm font-semibold">
                2
              </span>
              <span className="text-studio-muted">{copy.instructions.step2}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-studio-accent/15 text-studio-accent text-sm font-semibold">
                3
              </span>
              <span className="text-studio-muted">{copy.instructions.step3}</span>
            </li>
          </ol>
        </div>

        {/* Privacy Notice / Aviso de privacidad / Datenschutzhinweis / Avis de confidentialite */}
        <div className="text-sm text-studio-muted text-center">
          {copy.privacyLabel} {copy.privacy}
        </div>
      </div>
    </div>
  );
};

export default ReferralPanel;

