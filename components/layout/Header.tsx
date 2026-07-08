'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, Menu, X, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Commercial B2B', href: '/commercial', badge: 'Priority' },
  { label: 'Dry Cleaning', href: '/dry-cleaning' },
  { label: 'Launderette', href: '/launderette' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full font-sans transition-all">
      {/* Top Announcement Bar */}
      <div className="border-b border-slate-800 bg-slate-950 px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-semibold text-sky-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              100% Serverless Jamstack | Outstatic Markdown CMS
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="h-3.5 w-3.5 text-sky-500" />
              Mon-Fri: 8AM-6PM | Sat: 8:30AM-5PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:01548856688"
              className="flex items-center gap-1.5 font-bold text-white transition hover:text-sky-300"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
              Direct Helpdesk: 01548 856 688
            </a>
            <Link
              href="/outstatic"
              className="hidden sm:inline-flex items-center gap-1 rounded bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-sky-300 border border-slate-800 hover:bg-slate-800 transition"
            >
              Client CMS Portal <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-900 text-white font-extrabold text-xl shadow-md transition-transform group-hover:scale-105 border border-sky-700">
              WL
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                WESTBROOK
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700 mt-1">
                Linen & Laundry Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-xs lg:text-sm font-bold tracking-tight rounded-xl transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-sky-50 text-sky-900 font-extrabold border border-sky-200 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-sky-900 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-5 py-3 text-xs lg:text-sm font-extrabold text-white shadow-md transition-all hover:bg-sky-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Priority B2B Enquiry <ArrowRight className="h-4 w-4 text-sky-400" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pt-3 pb-6 md:hidden shadow-xl animate-in slide-in-from-top-2">
            <div className="space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition ${
                      isActive
                        ? 'bg-sky-50 text-sky-900 font-extrabold border border-sky-200'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full bg-sky-900 px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                  href="/commercial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-sky-900 py-3.5 text-sm font-extrabold text-white shadow"
                >
                  Priority B2B Enquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
