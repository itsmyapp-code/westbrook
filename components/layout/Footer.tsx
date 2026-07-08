import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Mail, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 font-sans">
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white font-bold text-lg shadow">
                WL
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                WESTBROOK LAUNDRY
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              South Hams' trusted family-run commercial laundry, expert dry cleaning, and rapid self-service launderette. Serving hotels, Airbnb hosts, and local residents with high-efficiency care.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-bold">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Serverless Jamstack — Zero Hosting & DB Costs
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase border-l-2 border-sky-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/commercial" className="hover:text-sky-400 transition flex items-center justify-between">
                  <span>Priority B2B Commercial Linen</span>
                  <span className="text-[10px] bg-sky-900 text-sky-300 px-1.5 py-0.5 rounded font-bold">B2B</span>
                </Link>
              </li>
              <li>
                <Link href="/dry-cleaning" className="hover:text-sky-400 transition">
                  Artisanal Dry Cleaning & Alterations
                </Link>
              </li>
              <li>
                <Link href="/launderette" className="hover:text-sky-400 transition">
                  Self-Service Launderette & Service Wash
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition">
                  About Our Family Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition">
                  Location & Contact Information
                </Link>
              </li>
              <li>
                <Link href="/outstatic" className="text-sky-300 hover:text-sky-200 transition flex items-center gap-1">
                  CMS Administration Portal <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase border-l-2 border-sky-500 pl-3">
              Facility Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  Westbrook House, Bridge Street,<br />
                  Kingsbridge, South Hams,<br />
                  Devon, TQ7 1EZ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-500 shrink-0" />
                <a href="tel:01548856688" className="text-white font-bold hover:text-sky-400 transition">
                  01548 856 688
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-500 shrink-0" />
                <a href="mailto:info@westbrooklaundry.co.uk" className="hover:text-sky-400 transition">
                  info@westbrooklaundry.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Compliance Summary */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase border-l-2 border-sky-500 pl-3">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-slate-300">Mon — Fri:</span>
                <span className="text-white font-bold">8:00 AM — 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-slate-300">Saturday:</span>
                <span className="text-white font-bold">8:30 AM — 5:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-semibold text-slate-300">Sunday / Bank Hol:</span>
                <span className="text-sky-400 font-bold">Launderette Only (9-4)</span>
              </li>
            </ul>
            <div className="rounded-lg bg-slate-950 p-3 text-[11px] border border-slate-800 text-slate-400 leading-normal">
              <div className="flex items-center gap-1.5 font-bold text-sky-400 mb-1">
                <Clock className="h-3.5 w-3.5 text-sky-500" />
                Express Turnaround Available
              </div>
              Drop off commercial linen or dry cleaning by 10 AM for same-day priority service.
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory & Compliance Section (COMPLIANCE MD Protocol) */}
      <div className="border-t border-slate-800 bg-slate-950 px-4 sm:px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Global Footer Update Text Block */}
          <div className="max-w-3xl rounded-xl border border-sky-900/40 bg-sky-950/20 p-4 text-xs leading-relaxed text-slate-300">
            <div className="flex items-center gap-2 font-bold text-sky-400 mb-1 uppercase">
              <ShieldAlert className="h-4 w-4 text-sky-400 shrink-0" />
              Statutory UK GDPR Article 24 Notice
            </div>
            Data Privacy & Compliance Queries: For any questions regarding your data rights, or to submit an inquiry, please contact our Data Privacy Lead directly at{' '}
            <a href="mailto:hello@itsmyapp.co.uk" className="font-bold text-sky-300 underline hover:text-white">
              hello@itsmyapp.co.uk
            </a>
            . We formally acknowledge all compliance submissions within 30 days.
          </div>

          {/* Statutory Static Roads Hooks (/terms, /privacy, /cookies, /accessibility) */}
          <nav aria-label="Legal navigation" className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold uppercase tracking-wider">
            <Link href="/terms" className="text-slate-400 hover:text-sky-400 transition">
              /terms
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy" className="text-slate-400 hover:text-sky-400 transition">
              /privacy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/cookies" className="text-slate-400 hover:text-sky-400 transition">
              /cookies
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/accessibility" className="text-slate-400 hover:text-sky-400 transition">
              /accessibility
            </Link>
          </nav>
        </div>

        <div className="mx-auto max-w-7xl mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Westbrook Laundry Ltd. All rights reserved. Built for <span className="text-slate-400 font-semibold">developer.itsmyapp.co.uk</span>.
          </div>
          <div className="flex items-center gap-2">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Zero Tracking without Consent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
