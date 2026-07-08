'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShieldCheck, ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Commercial B2B', href: '/commercial', badge: 'Priority' },
  { label: 'Dry Cleaning', href: '/dry-cleaning' },
  { label: 'Launderette', href: '/launderette' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-slate-50/95 backdrop-blur-md shadow-xs font-sans transition-all">
      {/* Top corporate contact bar */}
      <div className="border-b border-slate-200 bg-slate-900 px-4 py-1.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-sky-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              100% Jamstack Serverless | Zero Database Costs
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              South Hams Premier Commercial Linen & Laundry Specialist
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:01548856688"
              className="flex items-center gap-1 font-bold text-white transition hover:text-sky-300"
            >
              <Phone className="h-3 w-3 text-sky-400" />
              01548 856 688
            </a>
            <Link
              href="/outstatic"
              className="hidden sm:inline-flex items-center gap-1 rounded bg-sky-950/80 px-2 py-0.5 text-[10px] font-bold text-sky-300 border border-sky-800 hover:bg-sky-900 transition"
            >
              CMS Portal <ExternalLink className="h-2.5 w-2.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-700 text-white font-bold text-xl shadow-md transition-transform group-hover:scale-105">
            WL
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-sky-900 leading-none">
              WESTBROOK
            </span>
            <span className="text-xs font-semibold tracking-widest text-sky-700 uppercase mt-0.5">
              LAUNDRY & LINEN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-sky-700 font-bold'
                    : 'text-slate-700 hover:text-sky-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-800 border border-sky-200">
                      {item.badge}
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-sky-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/commercial"
            className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-800 hover:shadow-lg focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            B2B Enquiry
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/outstatic"
            className="sm:hidden rounded bg-sky-900 px-2 py-1 text-xs font-bold text-sky-200"
          >
            CMS
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-200 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 border-l-4 border-sky-600'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="mt-6 border-t border-slate-200 pt-4 flex flex-col gap-3">
            <Link
              href="/commercial"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-sky-700 py-3 text-sm font-bold text-white shadow-md transition hover:bg-sky-800"
            >
              Priority B2B Commercial Enquiry
            </Link>
            <a
              href="tel:01548856688"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-300 bg-slate-50 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100"
            >
              <Phone className="h-4 w-4 text-sky-600" />
              Call Now: 01548 856 688
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
