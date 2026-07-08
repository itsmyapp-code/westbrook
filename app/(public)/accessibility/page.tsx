import React from 'react';
import { Eye, CheckCircle2, Keyboard, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement (WCAG 2.1 Level AA) | Westbrook Laundry',
  description: 'Our commitment to high-contrast WCAG 2.1 Level AA digital accessibility, keyboard tabbing maps, and semantic HTML hierarchy trees.',
};

export default function AccessibilityPage() {
  return (
    <div className="space-y-12 pb-20 font-sans">
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700">
            <Eye className="h-3.5 w-3.5 text-sky-400" />
            Universal Digital Access
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Accessibility Statement & WCAG 2.1 AA Target
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ensuring every customer, hotel manager, and resident in South Hams can navigate our Jamstack application without barriers.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            Core Technical Accessibility Integrations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Keyboard className="h-4 w-4 text-sky-600" /> Extensive Keyboard Tabbing Maps
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All interactive UI components (`/commercial` form inputs, navbar buttons, and consent toggles) feature explicit focus indicators (`focus:ring-2 focus:ring-sky-500`) and logical tab sequencing requiring zero mouse interaction.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Eye className="h-4 w-4 text-sky-600" /> High-Contrast Visual Structures (WCAG AAA)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly enforce a minimum <strong className="text-slate-900">7:1 contrast ratio</strong> on all primary typography (`text-slate-900` over `bg-slate-50` or white) to ensure optimal legibility for visually impaired users.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600" /> Solid Semantic Hierarchy Trees
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every page adheres to strict HTML5 structural hierarchy ({'`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`'}) with a singular {'`<h1>`'} per route and correctly nested subheadings ({'`<h2>`, `<h3>`'}).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-600" /> Precise ARIA-Label Markup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Icon buttons, mobile drawer toggles, and modal dialogues are injected with descriptive `aria-label` and `aria-hidden` attributes for assistive screen reading technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
            Reporting Accessibility Barriers
          </h2>
          <p>
            If you encounter any screen reader difficulty, keyboard tabbing loop, or contrast barrier while using <code className="text-sky-700 font-bold">westbrooklaundry.co.uk</code>, please notify our team immediately so we can deploy an immediate code remediation fix:
          </p>
          <div className="pt-1">
            <a
              href="mailto:hello@itsmyapp.co.uk?subject=Accessibility%20Barrier%20Report"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3.5 text-xs font-bold text-white shadow transition hover:bg-sky-800"
            >
              <Mail className="h-4 w-4" /> Report Accessibility Issue (`hello@itsmyapp.co.uk`)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
