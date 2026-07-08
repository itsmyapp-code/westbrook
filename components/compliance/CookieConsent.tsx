'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, X, Info } from 'lucide-react';

export default function CookieConsent() {
  const [consentState, setConsentState] = useState<'pending' | 'accepted' | 'rejected' | null>(null);
  const [showExemptionsModal, setShowExemptionsModal] = useState(false);

  useEffect(() => {
    // Check local storage for existing consent preference
    const saved = localStorage.getItem('westbrook_consent_status');
    if (saved === 'accepted' || saved === 'rejected') {
      setConsentState(saved);
    } else {
      setConsentState('pending');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('westbrook_consent_status', 'accepted');
    setConsentState('accepted');
    // Dispatch custom event to trigger analytics scripts safely after explicit opt-in
    window.dispatchEvent(new CustomEvent('westbrook:tracking-enabled'));
  };

  const handleRejectAll = () => {
    localStorage.setItem('westbrook_consent_status', 'rejected');
    setConsentState('rejected');
    // Ensure all third-party non-exempt scripts remain strictly blocked
    window.dispatchEvent(new CustomEvent('westbrook:tracking-disabled'));
  };

  if (consentState !== 'pending') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 font-sans">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-700/80 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-md text-slate-100 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2.5 text-sky-400">
              <ShieldAlert className="h-6 w-6 shrink-0" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                Zero-Load Tracking Blockade & Consent Architecture
              </h3>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              In accordance with UK GDPR and the Data (Use and Access) Act (DUAA), all non-essential tracking modules, conversion pixels, and analytics tokens are strictly blocked until your unambiguous opt-in is registered. 
              <button
                type="button"
                onClick={() => setShowExemptionsModal(true)}
                className="ml-2 inline-flex items-center underline decoration-sky-500 hover:text-sky-300 transition"
              >
                View Statutory Exemptions <Info className="ml-1 h-3.5 w-3.5 inline" />
              </button>
            </p>
          </div>

          {/* Equal Prominence Engineering: Uniform dimensions, color weights, and text styles */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleRejectAll}
              aria-label="Reject all non-essential cookies immediately"
              className="inline-flex h-12 min-w-[150px] items-center justify-center gap-2 rounded-xl border-2 border-slate-600 bg-slate-800 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-all hover:bg-slate-700 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <X className="h-4 w-4 text-rose-400" />
              REJECT ALL
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              aria-label="Accept all functional and analytics cookies"
              className="inline-flex h-12 min-w-[150px] items-center justify-center gap-2 rounded-xl border-2 border-sky-600 bg-sky-600 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-all hover:bg-sky-500 hover:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Check className="h-4 w-4 text-emerald-300" />
              ACCEPT ALL
            </button>
          </div>
        </div>

        {/* Statutory Exemptions Engine Modal */}
        {showExemptionsModal && (
          <div className="mt-6 border-t border-slate-800 pt-5 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold uppercase text-sky-400">DUAA Statutory Exemptions Engine Active</h4>
              <button
                onClick={() => setShowExemptionsModal(false)}
                className="text-slate-400 hover:text-white"
              >
                [Close Exemptions]
              </button>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>
                <strong className="text-white">Anonymous Performance Metrics:</strong> First-party anonymous interaction metrics measuring core site health are processed under legitimate operational interest with an active opt-out engine.
              </li>
              <li>
                <strong className="text-white">Security & Anti-Abuse:</strong> Connection checks (such as form honeypots and request rate governors) operate continuously to prevent malicious requests.
              </li>
              <li>
                <strong className="text-white">Viewport & Theme States:</strong> Local memory captures explicit user UI preferences (such as high-contrast display profiles and local consent states).
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
