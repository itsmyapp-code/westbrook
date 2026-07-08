import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Award, Leaf, Clock, Phone, Sparkles } from 'lucide-react';
import {
  getPageBySlug,
  getHeroSlides,
  getWorkflows,
  getServices,
  getTestimonials,
} from '@/lib/outstatic';
import HeroSlider from '@/components/home/HeroSlider';
import WorkflowGrid from '@/components/home/WorkflowGrid';
import ServiceGrid from '@/components/home/ServiceGrid';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';

export const metadata = {
  title: 'Westbrook Laundry — South Hams Premier Agency & Linen Specialist',
  description: 'Clean, modular agency-style homepage powered by Outstatic Git-based CMS. Bespoke B2B hotel linen management, delicate dry cleaning, and rapid launderette.',
};

export default async function HomePage() {
  // Coordinate Server-Side Data Fetching from all 5 Outstatic collections
  const [pageData, heroSlides, workflows, services, testimonials] = await Promise.all([
    getPageBySlug('home'),
    getHeroSlides(),
    getWorkflows(),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <div className="flex flex-col w-full font-sans">
      {/* Dynamic Hero Feature Slider (heroslider collection) */}
      <HeroSlider slides={heroSlides} />

      {/* Trust & Agency Metrics Strip */}
      <section className="bg-slate-900 text-white border-b border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div className="space-y-1 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-2xl sm:text-3xl font-extrabold text-sky-400">
                <Award className="h-6 w-6 shrink-0" />
                <span>40+ Years</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Continuous Devon Heritage
              </div>
              <p className="text-[11px] text-slate-500 font-normal">
                Serving South Hams since 1982 with family-run dedication.
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-2xl sm:text-3xl font-extrabold text-emerald-400">
                <Leaf className="h-6 w-6 shrink-0" />
                <span>100% Eco</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Biodegradable Detergents
              </div>
              <p className="text-[11px] text-slate-500 font-normal">
                Zero phosphates & 35% thermal energy recovery across cycles.
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-2xl sm:text-3xl font-extrabold text-sky-400">
                <ShieldCheck className="h-6 w-6 shrink-0" />
                <span>£0/Month</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Serverless Outstatic CMS
              </div>
              <p className="text-[11px] text-slate-500 font-normal">
                Git-backed content architecture with complete client editability.
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-2xl sm:text-3xl font-extrabold text-amber-400">
                <Clock className="h-6 w-6 shrink-0" />
                <span>4 Hours</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Priority B2B Response SLA
              </div>
              <p className="text-[11px] text-slate-500 font-normal">
                Rapid helpdesk onboarding for boutique hotels & Airbnb hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Categorization Grid (services collection) */}
      <ServiceGrid services={services} />

      {/* Dynamic "How It Works" Workflow (workflows collection) */}
      <WorkflowGrid steps={workflows} />

      {/* Dynamic Testimonials Carousel (testimonials collection) */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Final Modular Agency CTA Banner */}
      <section className="bg-sky-950 py-20 text-white border-t border-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800/30 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 border border-sky-700">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              Ready to Upgrade Your Housekeeping Efficiency?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Schedule Your Priority B2B Consultation Today
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-sky-200 leading-relaxed font-normal">
              Join over 150+ boutique hotels, holiday accommodation providers, and demanding residential clients across Kingsbridge, Salcombe, Dartmouth, and Modbury.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/commercial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-sky-950 shadow-xl transition-all hover:bg-sky-50 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Start Commercial Onboarding</span>
              <ArrowUpRight className="h-4 w-4 text-sky-700" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sky-700 bg-sky-900/60 px-8 py-4 text-sm font-bold text-white transition hover:bg-sky-800 hover:border-sky-600"
            >
              <Phone className="h-4 w-4 text-sky-400 animate-pulse" />
              <span>Call Reception Desk: 01548 856 688</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
