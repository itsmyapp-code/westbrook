import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowLeft, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Enquiry Received | Thank You | Westbrook Laundry',
  description: 'Thank you for contacting Westbrook Laundry. Our Kingsbridge team will review your submission and respond promptly.',
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl w-full rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-2xl text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500 via-sky-500 to-sky-700" />

        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto shadow-md animate-in zoom-in-50 duration-300">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        <div className="space-y-3">
          <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200">
            Submission Verified & Dispatched
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thank You for Your Enquiry!
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your message has been securely forwarded straight to our Kingsbridge reception desk via FormSubmit. Our B2B commercial manager or master dry cleaner will review your details and get back to you directly.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 text-left space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5 font-bold text-slate-900">
            <Clock className="h-5 w-5 text-sky-600" />
            What Happens Next?
          </div>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>We formally acknowledge all priority B2B inquiries within <strong className="text-slate-900">4 business hours</strong>.</li>
            <li>If you submitted a commercial onboarding form, we will attach our full South Hams capacity schedule.</li>
            <li>Under UK GDPR & DUAA rules, your contact info is used exclusively to answer your request. Zero tracking or third-party lists.</li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-sky-800 w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Home
          </Link>
          <a
            href="tel:01548856688"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100 w-full sm:w-auto"
          >
            <Phone className="h-4 w-4 text-sky-600" /> Urgent? Call 01548 856 688
          </a>
        </div>
      </div>
    </div>
  );
}
