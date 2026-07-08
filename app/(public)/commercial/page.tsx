import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Clock, Award, FileText, AlertCircle } from 'lucide-react';
import { getPageBySlug, getPricesByCategory } from '@/lib/outstatic';

export const metadata = {
  title: 'Priority B2B Commercial Laundry & Linen | Hotels, B&Bs & Airbnbs South Hams',
  description: 'Specialist commercial linen laundering and fast turnarounds for South Hams hotels, B&Bs, and holiday rentals. Statutory 14-day cooling-off & transparent pricing.',
};

export default async function CommercialPage() {
  const pageData = await getPageBySlug('commercial');
  const commercialPrices = await getPricesByCategory('commercial');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Header Section with Facility Photo */}
      <section className="relative bg-slate-950 py-20 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src="/images/commercial-banner.jpg" 
          alt="Westbrook Commercial Laundry Facility" 
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-900/80 px-3.5 py-1 text-xs font-bold text-sky-300 border border-sky-700 shadow-sm">
              <Building2 className="h-3.5 w-3.5" />
              Priority Hospitality B2B Division
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

      {/* Main Grid: Benefits + Enquiry Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: B2B Benefits & Pricing Table */}
          <div className="lg:col-span-7 space-y-10">
            {/* Why Choose Westbrook B2B */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4">
                Tailored for South Hams Hospitality Leaders
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                  <Clock className="h-6 w-6 text-sky-600" />
                  <h3 className="font-bold text-slate-900">Peak Season Turnaround</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guaranteed same-day or 24-hour turnaround cycles for registered Airbnb hosts and holiday parks during intense Devon summer changeovers.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                  <Award className="h-6 w-6 text-sky-600" />
                  <h3 className="font-bold text-slate-900">Precision Optical Finish</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-temperature thermal sanitization combined with industrial roller-iron pressing ensures crisp, 5-star hotel presentation for every sheet.
                  </p>
                </div>
              </div>
            </div>

            {/* Outstatic Prices Grid (Commercial) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Baseline B2B Linen Rates (Anti-Drip Pricing)
                </h3>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  Total Figures Shown
                </span>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3 font-bold uppercase tracking-wider">Linen Package / Item</th>
                      <th className="px-4 py-3 font-bold uppercase tracking-wider">Specification</th>
                      <th className="px-4 py-3 font-bold uppercase tracking-wider text-right">Transparent Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {commercialPrices.map((item) => (
                      <tr key={item.slug} className="hover:bg-sky-50/50 transition">
                        <td className="px-4 py-3.5 font-bold text-slate-900">{item.itemName || item.title}</td>
                        <td className="px-4 py-3.5 text-slate-600">{item.description || 'Standard hospitality wash & press'}</td>
                        <td className="px-4 py-3.5 font-extrabold text-sky-700 text-right">{item.priceValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compliance MD Statutory Box */}
            <div className="rounded-2xl border-2 border-slate-800 bg-slate-950 p-6 text-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-bold uppercase text-xs tracking-wider">
                <ShieldCheck className="h-5 w-5" />
                Statutory Commercial Contract & Cooling-Off Terms
              </div>
              <ul className="space-y-2 text-xs leading-relaxed text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">1. 14-Day Cooling-Off Verification:</span>
                  <span>
                    In compliance with the Data (Use and Access) Act (DUAA), all new B2B accounts enjoy a statutory 14-day cancellation window applicable upon initial transaction execution, promotional tier flips, and 12-month annual renewals.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">2. Pro-Rata Refund Matrix:</span>
                  <span>
                    If a commercial service contract is cancelled inside an active cooling-off window or automated renewal loop, refunds are issued strictly based on unconsumed service days rather than total forfeiture.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">3. Same-Channel Exit & Anti-Drip:</span>
                  <span>
                    Accounts can be modified or terminated via a single-click email request without retention questionnaires or hidden verification steps. All quoted figures above include processing fees and exact VAT additions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Custom B2B Enquiry Form (FormSubmit Integration) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-600 to-sky-400" />
              
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Priority B2B Account Onboarding
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fill out this direct enquiry form. Our commercial account manager will contact you within 4 business hours to verify capacity and establish bespoke collection schedules.
                </p>
              </div>

              {/* Raw HTML/JSX Form pointing directly to FormSubmit */}
              <form
                action="https://formsubmit.co/hello@itsmyapp.co.uk"
                method="POST"
                className="space-y-4"
              >
                {/* Hidden anti-spam honeypot field */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                {/* Hidden redirect input field pointing to /thank-you */}
                <input type="hidden" name="_next" value="https://westbrooklaundry.co.uk/thank-you" />
                <input type="hidden" name="_subject" value="New Priority B2B Commercial Enquiry — Westbrook Laundry" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Business / Property Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    placeholder="e.g. Salcombe Harbour Boutique Hotel / Airbnb"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="01548 ..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="manager@hoteldomain.co.uk"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Property Category
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    >
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="B&B / Guesthouse">B&B / Guesthouse</option>
                      <option value="Multi-Property Airbnb">Multi-Property Airbnb</option>
                      <option value="Holiday Park / Camping">Holiday Park / Camping</option>
                      <option value="Restaurant / Spa">Restaurant / Spa</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="turnoverVolume" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Est. Weekly Beds/Sacks
                    </label>
                    <select
                      id="turnoverVolume"
                      name="turnoverVolume"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    >
                      <option value="1 - 10 King Sets">1 - 10 King Sets/wk</option>
                      <option value="11 - 25 King Sets">11 - 25 King Sets/wk</option>
                      <option value="26 - 50+ King Sets">26 - 50+ King Sets/wk</option>
                      <option value="Large Contract / Daily">Large Contract / Daily</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiryDetails" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Specific Requirements & Collection Notes
                  </label>
                  <textarea
                    id="enquiryDetails"
                    name="enquiryDetails"
                    rows={4}
                    placeholder="Detail your typical turnaround days, preferred collection windows, or bespoke towel / tablecloth requirements..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>

                <div className="rounded-lg bg-sky-50 p-3 text-[11px] text-sky-900 border border-sky-200">
                  <CheckCircle2 className="h-4 w-4 text-sky-700 inline mr-1 -mt-0.5" />
                  Submitting confirms you have read our statutory <a href="/terms" className="underline font-bold">Terms</a> & <a href="/privacy" className="underline font-bold">Privacy Policy</a> regarding B2B cooling-off rights.
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-700 py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-sky-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Submit Priority B2B Enquiry →
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
