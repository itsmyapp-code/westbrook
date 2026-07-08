import React from 'react';
import { ShieldCheck, Lock, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Data Rights (UK GDPR) | Westbrook Laundry',
  description: 'Documented data processing points under UK GDPR & DUAA rules. Subject Access Request (SAR) procedures and Recognized Legitimate Interests.',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20 font-sans">
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            UK GDPR Article 24 & DUAA Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy & Documented Data Processing
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Data Controller: Westbrook Laundry Ltd | Data Privacy Lead: `hello@itsmyapp.co.uk`
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            1. Documented Information Processing Points
          </h2>
          <p>
            We collect and process only the absolute minimum categories of personal data necessary to execute commercial laundry contracts and deliver customer inquiries:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong className="text-slate-900">Identity Data:</strong> First name, last name, or business title provided during form submission.</li>
            <li><strong className="text-slate-900">Contact Data:</strong> Email address, telephone number, and physical hospitality collection address (`TQ7` postal area).</li>
            <li><strong className="text-slate-900">Technical Data:</strong> Anonymized IP addresses, browser engine version, and local timezone parameters processed during form routing via FormSubmit.</li>
            <li><strong className="text-slate-900">System Usage Metrics:</strong> First-party anonymous interaction metrics measuring page load speeds and button clicks.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            2. Recognized Legitimate Interests & Statutory Allowances
          </h2>
          <p>
            In alignment with the Data (Use and Access) Act (DUAA) statutory exemptions, processing operations regarding <strong className="text-slate-900">application stabilization, infrastructure defense, malware reduction, and critical fault repairs</strong> are managed strictly under <strong className="text-slate-900">Recognized Legitimate Interests</strong>. This statutory classification removes formal requirement demands for typical subjective balancing assessments, permitting continuous real-time security monitoring of connection streams to protect our digital assets against automated abuse.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            3. Subject Access Request (SAR) Procedures & Resolution SLAs
          </h2>
          <p>
            Under UK GDPR, you maintain absolute rights to inspect, modify, export, or erase any personal data records held by Westbrook Laundry. To submit a formal Subject Access Request (SAR):
          </p>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-600" /> Direct Compliance Address:
            </div>
            <p>
              Email our designated Data Privacy Lead at <a href="mailto:hello@itsmyapp.co.uk" className="font-bold text-sky-700 underline">hello@itsmyapp.co.uk</a> with the subject line <strong className="text-slate-900">&quot;Statutory SAR Request — Westbrook Laundry&quot;</strong>.
            </p>
            <p className="font-semibold text-slate-800 pt-1">
              Statutory Resolution Limit: We formally acknowledge and fulfill all SAR submissions within a strict <strong className="text-sky-700">30-day resolution limit</strong>. Note that this timeframe may be paused if clarification of identity verification documentation is strictly required.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            4. Statutory Escalation Paths to the Information Commissioner
          </h2>
          <p>
            If you believe our data handling practices infringe UK legislative frameworks, you retain full statutory rights to lodge a formal complaint directly with the supervisory authority:
          </p>
          <div className="pt-2">
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow transition hover:bg-slate-800"
            >
              Information Commissioner&apos;s Office (ICO) Portal <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
