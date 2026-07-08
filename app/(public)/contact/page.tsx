import React from 'react';
import { Phone, MapPin, Clock, Mail, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import { getPageBySlug } from '@/lib/outstatic';

export const metadata = {
  title: 'Contact Us & Opening Hours | Westbrook Laundry Kingsbridge South Hams',
  description: 'Visit our Kingsbridge facility or call directly for same-day service. Interactive map placeholder and direct FormSubmit contact integration.',
};

export default async function ContactPage() {
  const pageData = await getPageBySlug('contact');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Header Section with Facility Photo */}
      <section className="relative bg-slate-950 py-20 text-white border-b border-slate-800 overflow-hidden">
        <img 
          src="/images/contact-facility.jpg" 
          alt="Westbrook Laundry Kingsbridge Facility" 
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-3.5 py-1 text-xs font-bold text-sky-300 border border-sky-700 shadow-sm">
              <Phone className="h-3.5 w-3.5" />
              Kingsbridge Facility & Direct Helpdesk
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

      {/* Main Grid: Info + Map Placeholder + Contact Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Hours, Click-to-Call, & Map Embed Placeholder */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Mobile-Optimized Click-to-Call Card */}
            <div className="rounded-2xl border-2 border-sky-600 bg-sky-900 p-6 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                <Phone className="h-4 w-4" /> Immediate Assistance
              </div>
              <h2 className="text-xl font-bold">Need Emergency Turnaround or Advice?</h2>
              <p className="text-xs text-sky-100">
                Tap the button below to connect straight to our Kingsbridge front desk during operating hours.
              </p>
              <div className="pt-2">
                <a
                  href="tel:01548856688"
                  className="inline-flex items-center justify-center gap-3 w-full rounded-xl bg-white px-6 py-4 text-base font-extrabold text-sky-900 shadow transition hover:bg-sky-50 focus:ring-2 focus:ring-white"
                >
                  <Phone className="h-5 w-5 text-sky-600 animate-bounce" />
                  CALL 01548 856 688
                </a>
              </div>
            </div>

            {/* Business Hours & Facility Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
                Opening Times & Location
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Westbrook Laundry Facility:</strong>
                    Westbrook House, Bridge Street, Kingsbridge, South Hams, Devon, TQ7 1EZ
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sky-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 mr-1">General Inquiries:</strong>
                    <a href="mailto:info@westbrooklaundry.co.uk" className="text-sky-700 underline">
                      info@westbrooklaundry.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-600">Monday — Friday</span>
                  <span className="font-bold text-slate-900">8:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-600">Saturday</span>
                  <span className="font-bold text-slate-900">8:30 AM — 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-slate-600">Sunday & Bank Holidays</span>
                  <span className="font-extrabold text-sky-700">Launderette Only (9:00 AM — 4:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Embed Placeholder */}
            <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase">
                <span className="flex items-center gap-1.5"><Navigation className="h-4 w-4 text-sky-600" /> Interactive Google Maps Placeholder</span>
                <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded">TQ7 1EZ</span>
              </div>
              <div className="h-64 w-full rounded-xl bg-slate-800 flex flex-col items-center justify-center p-6 text-center text-white space-y-3 relative overflow-hidden border border-slate-700">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-950 pointer-events-none" />
                <MapPin className="h-10 w-10 text-sky-400 animate-pulse relative z-10" />
                <div className="relative z-10 space-y-1">
                  <div className="font-bold text-sm">Kingsbridge Town Centre / Bridge Street</div>
                  <p className="text-xs text-slate-300 max-w-sm">
                    [Google Maps Embed Placeholder] Easy drop-off parking available right in front of our main reception door.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kingsbridge+TQ7+1EZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-500 transition shadow"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form (FormSubmit API) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-600 to-sky-400" />
              
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have a specific fabric question, need a lost property check, or want to inquire about a custom launderette schedule? Fill out this form below.
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
                <input type="hidden" name="_subject" value="General Inquiry — Westbrook Laundry Website" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phoneInput" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneInput"
                      name="phoneInput"
                      required
                      placeholder="01548 ..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="emailInput" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      name="emailInput"
                      required
                      placeholder="sarah@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceCategory" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  >
                    <option value="Dry Cleaning / Alterations">Dry Cleaning / Alterations</option>
                    <option value="Self-Service Launderette / Machines">Self-Service Launderette / Machines</option>
                    <option value="Drop-Off Service Wash">Drop-Off Service Wash</option>
                    <option value="Commercial B2B Hospitality">Commercial B2B Hospitality</option>
                    <option value="General Question / Feedback">General Question / Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can our Kingsbridge team assist you today?"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>

                <div className="rounded-lg bg-slate-100 p-3 text-[11px] text-slate-600 border border-slate-200">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 inline mr-1 -mt-0.5" />
                  Direct FormSubmit Backend. Zero database storage on client servers. We respect your <a href="/privacy" className="underline font-bold">Privacy Rights</a> under UK GDPR.
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-700 py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-sky-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Send Message to Reception →
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
