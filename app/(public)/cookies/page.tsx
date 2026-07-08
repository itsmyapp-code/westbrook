import React from 'react';
import { ShieldAlert, CheckCircle2, Lock, XCircle, Sliders } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy & Consent Classifications | Westbrook Laundry',
  description: 'Functional cookie classifications, DUAA analytics opt-out framework, and zero-load script blockade details.',
};

export default function CookiesPage() {
  return (
    <div className="space-y-12 pb-20 font-sans">
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700">
            <Sliders className="h-3.5 w-3.5 text-sky-400" />
            Statutory Cookie Classifications
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Cookie Policy & Zero-Load Tracking Blockade
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Engineered to ensure complete compliance with PECR, UK GDPR, and the DUAA legislation frameworks.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            Functional Classifications & Statutory Status
          </h2>

          <div className="space-y-4">
            {/* Category 1: Strictly Necessary */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-600" /> 1. Strictly Necessary Identifiers
                </span>
                <span className="rounded bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                  Always Active (Cannot Be Switched Off)
                </span>
              </div>
              <p className="text-xs text-slate-600">
                These local storage variables (`westbrook_consent_status`) and session tokens are strictly required for basic application stabilization, secure form route validation, and memory retention of your explicit consent choices. They do not track browsing behavior across other web properties.
              </p>
            </div>

            {/* Category 2: Performance Analytics */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600" /> 2. Performance & Optimization Analytics
                </span>
                <span className="rounded bg-sky-100 px-2.5 py-0.5 text-[11px] font-bold text-sky-800">
                  DUAA Statutory Allowance (Opt-Out Active)
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Under the Data (Use and Access) Act (DUAA) statutory exemptions, first-party anonymous performance analytics tracking user interaction pathways (`/commercial` conversion speeds and launderette button clicks) are permitted without intrusive pre-load modals, provided a free and immediate opt-out framework is active.
              </p>
            </div>

            {/* Category 3: Third-Party Marketing */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-rose-600" /> 3. Third-Party Marketing Trackers
                </span>
                <span className="rounded bg-rose-100 px-2.5 py-0.5 text-[11px] font-bold text-rose-800">
                  Strictly Blocked Until Opt-In
                </span>
              </div>
              <p className="text-xs text-slate-600">
                All external conversion pixels, cross-site behavioral retargeting scripts, and advertising tokens are governed by our <strong className="text-slate-900">Zero-Load Script Blockade System</strong>. They cannot execute on your device unless you actively click &quot;ACCEPT ALL&quot; inside our equal-prominence first-layer consent banner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
