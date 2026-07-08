import React from 'react';
import { Award, Heart, Leaf, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getPageBySlug } from '@/lib/outstatic';

export const metadata = {
  title: 'About Our Family-Run Laundry Heritage | Westbrook Laundry South Hams',
  description: 'Trustworthy, expanding local family-run business in South Hams since 1982. Committed to environmental stewardship and pristine fabric care.',
};

export default async function AboutPage() {
  const pageData = await getPageBySlug('about');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Header Section with Heritage Photo */}
      <section className="relative bg-slate-950 py-20 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src="/images/about-heritage.jpg" 
          alt="Westbrook Laundry Local Heritage" 
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-3.5 py-1 text-xs font-bold text-sky-300 border border-sky-700 shadow-sm">
              <Heart className="h-3.5 w-3.5 text-rose-400" />
              Local Heritage & Community Trust
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

      {/* Story & Environmental Stewardship */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-sky-600 pl-4">
              From Kingsbridge Roots to South Hams Specialist
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Founded over four decades ago as a modest neighborhood wash house, <strong className="text-slate-900">Westbrook Laundry</strong> has grown organically alongside the booming South Hams hospitality industry. Throughout our expansion across Kingsbridge, Salcombe, Dartmouth, and Modbury, we have never compromised on our core philosophy: treat every customer&apos;s garment and every hotel&apos;s linen with obsessive care.
              </p>
              <p>
                As an independent, family-run enterprise, we make decisions for the long term. When national industrial chains focused on chemical shortcuts and rigid corporate contracts, we invested in high-efficiency, heat-recovery washing systems and built personal relationships with local business owners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-1">
                <div className="text-2xl font-extrabold text-sky-700">1982</div>
                <div className="font-bold text-slate-900 text-xs uppercase">Year Established</div>
                <p className="text-[11px] text-slate-500">40+ continuous years of family management and Devon dedication.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-1">
                <div className="text-2xl font-extrabold text-sky-700">100%</div>
                <div className="font-bold text-slate-900 text-xs uppercase">Eco-Biodegradable</div>
                <p className="text-[11px] text-slate-500">Zero phosphate or harsh industrial chlorines entering Devon waters.</p>
              </div>
            </div>
          </div>

          {/* Right Pillar Box */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-slate-800 bg-slate-950 p-8 text-white space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="h-6 w-6" /> Our Core Operating Pillars
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Reliability Above All</strong>
                  We know that a late linen delivery means an Airbnb host cannot check in guests. Our delivery schedule is treated as sacred.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Environmental Stewardship</strong>
                  Our facility captures and reuses thermal energy from wash water to heat incoming cycles, reducing gas consumption by 35%.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Fair & Transparent Anti-Drip Tariff</strong>
                  We believe in total honesty. Our commercial B2B rates and dry cleaning lists include all processing costs and exact VAT.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-sky-900 p-8 sm:p-12 text-white text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold">Experience Our Local Family Service Today</h3>
            <p className="text-sm text-sky-100">
              Whether you are a resident needing heavy curtain cleaning or a boutique hotel requiring daily linen turnaround, we are ready to assist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/commercial"
              className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-sky-900 shadow hover:bg-sky-50 transition"
            >
              Priority B2B Enquiry
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-sky-400 bg-transparent px-6 py-3 text-sm font-bold text-white hover:bg-sky-800 transition"
            >
              Visit Our Facility & Hours
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
