import React from 'react';
import { Clock, Zap, CheckCircle2, ShieldCheck, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { getPageBySlug, getPricesByCategory } from '@/lib/outstatic';

export const metadata = {
  title: 'Self-Service Launderette & Service Wash | Westbrook Laundry South Hams',
  description: 'High-speed 18kg and 10kg industrial washing machines and gas dryers. Complete your week of laundry in under 45 minutes with contactless pay.',
};

export default async function LaunderettePage() {
  const pageData = await getPageBySlug('launderette');
  const launderettePrices = await getPricesByCategory('launderette');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Header Section with Washers Photo */}
      <section className="relative bg-slate-950 py-20 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src="/images/launderette-banner.jpg" 
          alt="Ultra-Fast Self-Service Launderette Facility" 
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-3.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-800 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              Ultra-Fast Self-Service & Service Wash
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

      {/* Machine Sizes & Rapid Cycle Times Grid (Mobile-Optimized) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Industrial Machine Sizes & Rapid Turnaround
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Designed for maximum time efficiency. Why spend all Sunday doing 4 residential loads when our commercial drums can finish everything in one go?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Machine 1: 18kg Mega Drum */}
          <div className="rounded-2xl border-2 border-sky-600 bg-white p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-wider">
              Duvet & Camping Size
            </div>
            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-extrabold text-xl">
                18kg
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Mega Industrial Washer
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200 w-fit">
                <Clock className="h-4 w-4" /> Rapid 32-Minute Wash Cycle
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Holds 2x King Size Duvets or sleeping bags effortlessly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>High G-Force spin extracts 50% more moisture to slash dryer time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>3 temperature options: Cold, Warm (40°C), and Hot Sanitizing (60°C).</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-bold">Contactless Pay Ready</span>
              <span className="text-lg font-extrabold text-sky-700">£9.00 / load</span>
            </div>
          </div>

          {/* Machine 2: 10kg Standard Drum */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-sky-300 transition">
            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 font-extrabold text-xl">
                10kg
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                High-Speed Family Washer
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                <Clock className="h-4 w-4 text-sky-600" /> Rapid 32-Minute Wash Cycle
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Perfect for weekly family clothing loads or single double duvets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Automated detergent dosing option or use your own preferred pod.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Delicate wool and rapid synthetic wash profiles built-in.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-bold">Contactless Pay Ready</span>
              <span className="text-lg font-extrabold text-sky-700">£6.00 / load</span>
            </div>
          </div>

          {/* Machine 3: Gas Tumble Dryers */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-sky-300 transition">
            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 font-extrabold text-xl">
                Dry
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Reversing Gas Tumble Dryers
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 w-fit">
                <Zap className="h-4 w-4 text-amber-600" /> 15-Minute Reversing Blocks
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Reversing drum action prevents large sheets or towels from tangling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>High-efficiency gas heating dries a full 10kg load in just 30 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Cool-down tumble phase leaves clothes soft and easy to fold.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-bold">Contactless Pay Ready</span>
              <span className="text-lg font-extrabold text-sky-700">£2.00 / 15m</span>
            </div>
          </div>
        </div>

        {/* Launderette Prices Grid from Outstatic */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Self-Service & Service Wash Tariff
              </h3>
              <p className="text-xs text-slate-500">
                Dynamically loaded from Outstatic Collection: <code className="text-sky-700 font-bold">'Prices'</code> (Category: launderette).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {launderettePrices.map((item) => (
              <div
                key={item.slug}
                className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-sky-300 transition"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.itemName || item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description || 'Rapid cycle self-service machine or staff wash add-on.'}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-sky-50 px-3 py-1.5 text-sm font-extrabold text-sky-800 border border-sky-200">
                  {item.priceValue}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contactless Pay & Drop-Off Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-bold uppercase text-xs">
              <CreditCard className="h-4 w-4" /> Contactless & Card Payment Systems
            </div>
            <h4 className="text-lg font-bold">No Coins Needed</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every machine is equipped with state-of-the-art Nayax contactless terminals. Simply tap your debit card, Apple Pay, or Google Pay directly on the washer or dryer to activate your cycle immediately.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-900 p-6 text-white space-y-3">
            <div className="flex items-center gap-2 text-sky-200 font-bold uppercase text-xs">
              <Sparkles className="h-4 w-4" /> Drop-Off Service Wash Option
            </div>
            <h4 className="text-lg font-bold">Too Busy to Wait? Leave it to Us</h4>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              If you prefer not to wait while the machines spin, drop off your laundry sack at our reception by 10 AM. Our team will wash, dry, and neatly fold your items ready for pickup after 4 PM for just £4.50 extra.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
