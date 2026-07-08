'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import type { ServiceGridDocument } from '@/lib/outstatic';

interface ServiceGridProps {
  services: ServiceGridDocument[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!services || services.length === 0) return null;

  // Extract unique categories for filter pills
  const categories = ['all', ...Array.from(new Set(services.map((s) => s.category).filter(Boolean)))];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <section className="bg-slate-50 py-20 sm:py-28 font-sans border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Category Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 border border-sky-200">
              <Tag className="h-3.5 w-3.5 text-sky-600" />
              Comprehensive Capability Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Specialized Laundry & Linen Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Engineered to commercial hygiene specifications and tailored to individual fabric requirements across South Hams.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat === 'all' ? 'All Capabilities' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Multi-Column Responsive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.slug || idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-sky-500/50 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top Category Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-5 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-sky-800 border border-sky-200/60 group-hover:bg-sky-900 group-hover:text-white transition-colors">
                  <Sparkles className="h-3 w-3" />
                  {service.category || 'Core Capability'}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={service.link || '/commercial'}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-sky-700 group-hover:text-sky-900 transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
