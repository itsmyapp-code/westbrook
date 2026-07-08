import React from 'react';
import { FileText, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & B2B Commercial Contract | Westbrook Laundry',
  description: 'Baseline execution terms, B2B commercial contracting rules, statutory cooling-off logic, and system security bounds for Westbrook Laundry.',
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20 font-sans">
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700">
            <FileText className="h-3.5 w-3.5 text-sky-400" />
            Statutory Legal Framework
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms of Service & Baseline Execution Bounds
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Effective Date: July 2026 | Built to COMPLIANCE MD FOR FUTURE APPS Protocol standards.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            1. Acceptance of Baseline Execution Terms
          </h2>
          <p>
            By accessing, browsing, or submitting B2B commercial inquiries via the Westbrook Laundry digital application (<code className="text-sky-700 font-bold">westbrooklaundry.co.uk</code>), you establish formal agreement to these execution bounds. If you do not agree to every stipulation contained herein, you must immediately terminate your digital session and refrain from utilizing our online or local facility endpoints.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            2. User Accountability & Secure Session Tokens
          </h2>
          <p>
            Users and commercial B2B partners assume complete accountability for preserving the confidentiality of their local session parameters, shared secure entry data, and contact credentials. Any actions performed under your authorized communication tokens or profile dashboard will be legally attributed to your entity.
          </p>
          <p className="font-semibold text-slate-900">
            Immediate Suspension Protocol: We reserve the absolute statutory right to execute immediate account suspension or IP blockade if software use breaches acceptable security parameters, attempts automated scraping, or generates malicious request flooding targeting our FormSubmit API relays.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            3. Subscription, B2B Billing & Statutory Cooling-Off Verification
          </h2>
          <p>
            In accordance with the UK Data (Use and Access) Act (DUAA) and Consumer Contracts Regulations, all B2B and recurring commercial linen agreements incorporate a mandatory <strong className="text-slate-900">14-Day Statutory Cooling-Off Window</strong> evaluated at three exact operational milestones:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong className="text-slate-900">Milestone 1:</strong> Initial transaction execution upon account onboarding.</li>
            <li><strong className="text-slate-900">Milestone 2:</strong> The instant a promotional or trial cycle flips over into a paid tier profile.</li>
            <li><strong className="text-slate-900">Milestone 3:</strong> The exact moment an automated subscription extension triggers a renewal matching or exceeding a 12-month timeframe.</li>
          </ul>
          <p className="pt-2">
            <strong className="text-slate-900">Pro-Rata Refund Matrix:</strong> If a commercial partner cancels inside an active cooling-off window or automated annual renewal loop, refunds are issued strictly matching unconsumed service days rather than total contract forfeiture.
          </p>
          <p>
            <strong className="text-slate-900">The &quot;Same-Channel&quot; Exit:</strong> All accounts initiated online or via our digital portal maintain a single-click cancellation toggle or immediate email termination address (`hello@itsmyapp.co.uk`) with zero retention &quot;sludge&quot; barriers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            4. Anti-Drip Pricing & Total Tariff Transparency
          </h2>
          <p>
            In strict compliance with statutory anti-drip invoicing regulations, all prices displayed across our `/dry-cleaning`, `/launderette`, and `/commercial` routes reflect the absolute complete transactional figure inclusive of VAT, processing fees, and environmental supplements. Zero mandatory checkout fees are concealed.
          </p>
        </div>
      </div>
    </div>
  );
}
