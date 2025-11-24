"use client";

import { useState, useEffect } from 'react';
import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import type { ReferralPanelCopy } from '@/locales/copy';

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
        setStats(data.data);
      } catch (err) {
        console.error('Error fetching referral stats:', err);
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
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
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
      <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
            {copy.title}
          </h3>
          <p className="text-base text-slate-600">{copy.subtitle}</p>
        </div>

        {/* Referral Link Section / Sección de enlace de referral / Empfehlungslink-Bereich / Section de lien de parrainage */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            {copy.yourLink}
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              readOnly
              value={displayLink}
              className="flex-1 rounded-2xl border-2 border-brand-200 bg-white px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
            />
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-brand-600/40 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              {copiedLink ? (
                <>
                  <CheckIcon className="h-5 w-5" aria-hidden />
                  {copy.copiedButton}
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="h-5 w-5" aria-hidden />
                  {copy.copyButton}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stats Section / Sección de estadísticas / Statistikbereich / Section des statistiques */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
            <div className="text-4xl font-bold text-brand-600 mb-2">{stats.visits}</div>
            <div className="text-sm font-medium text-slate-600">{copy.stats.visits}</div>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">{stats.signups}</div>
            <div className="text-sm font-medium text-slate-600">{copy.stats.signups}</div>
          </div>
        </div>

        {/* Instructions Section / Sección de instrucciones / Anleitungsbereich / Section des instructions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {copy.instructions.title}
          </h3>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
                1
              </span>
              <span className="text-slate-600">{copy.instructions.step1}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
                2
              </span>
              <span className="text-slate-600">{copy.instructions.step2}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
                3
              </span>
              <span className="text-slate-600">{copy.instructions.step3}</span>
            </li>
          </ol>
        </div>

        {/* Privacy Notice / Aviso de privacidad / Datenschutzhinweis / Avis de confidentialité */}
        <div className="text-sm text-slate-500 text-center">
          🔒 {copy.privacy}
        </div>
      </div>
    </div>
  );
};

export default ReferralPanel;
