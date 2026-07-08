import React from 'react';
import { ArrowRight, CheckCircle2, Cog, Layers, Truck } from 'lucide-react';
import type { WorkflowDocument } from '@/lib/outstatic';

interface WorkflowGridProps {
  steps: WorkflowDocument[];
}

export default function WorkflowGrid({ steps }: WorkflowGridProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-slate-900 py-20 sm:py-28 text-white font-sans border-b border-slate-800 relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700">
            <Layers className="h-3.5 w-3.5 text-sky-400" />
            Seamless Agency Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How Our Service Works
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Whether managing daily hotel linen turnarounds across South Hams or restoring fragile evening wear, our 4-step protocol guarantees zero downtime and pristine fabric preservation.
          </p>
        </div>

        {/* Workflow 1-4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const stepNum = step.stepNumber || index + 1;
            const formattedNum = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;

            return (
              <div
                key={step.slug || index}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-950 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Number Indicator and Connector Arrow */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-6 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-950 text-sky-400 font-extrabold text-lg border border-sky-800/80 shadow-inner group-hover:scale-110 group-hover:bg-sky-900 group-hover:text-white transition-all">
                    {formattedNum}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block h-5 w-5 text-slate-600 transition-colors group-hover:text-sky-400" />
                  )}
                </div>

                {/* Step Title & Description */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Status Tag */}
                <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Quality Assured Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Need a bespoke SLA for your hotel group?</h4>
            <p className="text-xs sm:text-sm text-slate-400">We offer custom pickup schedules across Kingsbridge, Salcombe, and Dartmouth.</p>
          </div>
          <a
            href="/commercial"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 transition hover:bg-sky-50 shadow-md shrink-0"
          >
            Request Custom SLA Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
