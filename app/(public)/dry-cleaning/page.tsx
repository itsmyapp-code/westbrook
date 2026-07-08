import React from 'react';
import { Shirt, Sparkles, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { getPageBySlug, getPricesByCategory } from '@/lib/outstatic';

export const metadata = {
  title: 'Artisanal Dry Cleaning & Alterations | Westbrook Laundry South Hams',
  description: 'Eco-conscious dry cleaning, precision stain removal, and garment alterations. View item care capacities and transparent pricing.',
};

export default async function DryCleaningPage() {
  const pageData = await getPageBySlug('dry-cleaning');
  const dryCleaningPrices = await getPricesByCategory('dry-cleaning');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Header Section with Garment Care Photo */}
      <section className="relative bg-slate-950 py-20 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src="/images/dry-cleaning-banner.jpg" 
          alt="Artisanal Dry Cleaning & Tailoring Facility" 
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3.5 py-1 text-xs font-bold text-sky-300 border border-slate-700 shadow-sm">
              <Shirt className="h-3.5 w-3.5 text-sky-400" />
              Specialist Garment & Upholstery Care
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {pageData.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-100 drop-shadow-sm leading-relaxed font-medium">
              {pageData.content}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Care Capacities & Price Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Item Care Capacities Overview Banner */}
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-slate-900">
                Item Care Capacities & Bio-Solvent Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We handle delicate natural fibers, heavy formalwear, and oversized upholstery with strict anti-shrink and color-preservation protocols.
              </p>
            </div>
            <div className="shrink-0">
              <span className="rounded-xl bg-sky-700 px-4 py-2 text-xs font-bold text-white shadow">
                100% Eco-Solvent Processing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="rounded-xl bg-white p-5 border border-sky-100 shadow-xs space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-600" /> Formal & Tailored Wear
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suits, blazers, silk blouses, and pleated skirts. Hand-finished pressing maintains lapel roll and prevents seam shine.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-sky-100 shadow-xs space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-600" /> Bridal & Evening Gowns
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-layer organza, beaded bodice, and long train gowns undergo gentle low-friction immersion and acid-free boxing.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-sky-100 shadow-xs space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-600" /> Heavy Curtains & Upholstery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Up to 100-inch drop interlined curtains, sofa covers, and wool rugs. Measured before and after to ensure zero shrinkage.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Grid Listing Prices */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Dry Cleaning Item Price Grid
              </h2>
              <p className="text-xs text-slate-500">
                Data dynamically sourced from Outstatic CMS Collection: <code className="text-sky-700 font-bold">'Prices'</code> (Category: dry-cleaning).
              </p>
            </div>
            <div className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Transparent Pricing (Inclusive of VAT)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dryCleaningPrices.map((item) => (
              <div
                key={item.slug}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-sky-400 hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition">
                      {item.itemName || item.title}
                    </h3>
                    <span className="shrink-0 rounded-xl bg-sky-100 px-3 py-1 text-base font-extrabold text-sky-800 border border-sky-200">
                      {item.priceValue}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description || 'Precision stain pre-spotting, gentle eco-solvent bath, and professional hand-steam finishing.'}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Turnaround: 48 Hours</span>
                  <span className="text-sky-700 font-semibold">Express 24h Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ & Turnaround Notes */}
        <div className="rounded-2xl bg-slate-900 p-8 text-white space-y-4">
          <h3 className="text-lg font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <HelpCircle className="h-5 w-5" /> Dry Cleaning Drop-Off & Collection Protocol
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Bring your garments directly to our Kingsbridge reception desk during opening hours (Mon—Fri: 8am—6pm, Sat: 8:30am—5pm). For emergency wedding dress preservation or same-day suit pressing, please call our master dry cleaner directly at <a href="tel:01548856688" className="text-sky-300 font-bold underline">01548 856 688</a> prior to arrival.
          </p>
        </div>

      </section>
    </div>
  );
}
