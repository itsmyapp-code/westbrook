'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { HeroSlideDocument } from '@/lib/outstatic';

interface HeroSliderProps {
  slides: HeroSlideDocument[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = slides.length || 1;

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-950 font-sans text-white border-b border-slate-800"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background with vivid photography and high-contrast readable overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105 opacity-80"
          style={{
            backgroundImage: currentSlide?.bgImage ? `url(${currentSlide.bgImage})` : 'none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Main Slide Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6 transition-all duration-500 ease-in-out">
          
          {/* Agency Badge Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950/90 px-4 py-1.5 text-xs font-bold text-sky-300 border border-sky-700 shadow-md backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Featured Agency Solution • Slide {currentIndex + 1} of {totalSlides}</span>
          </div>

          {/* Heading with high typography contrast */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-[1.1]">
            {currentSlide?.title || 'Westbrook Laundry Premier Care'}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-100 drop-shadow-sm leading-relaxed font-medium max-w-2xl">
            {currentSlide?.description || 'Engineered for boutique hotels, luxury bed & breakfasts, and demanding local residents.'}
          </p>

          {/* CTA & Trust Badges */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/commercial"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl transition-all hover:bg-sky-500 hover:shadow-sky-500/25 hover:-translate-y-0.5"
            >
              <span>{currentSlide?.ctaText || 'Explore Commercial B2B'}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-md px-6 py-4 text-sm font-bold text-slate-200 transition hover:bg-slate-800 hover:border-slate-600"
            >
              <span>Speak to Master Cleaner</span>
            </Link>
          </div>

          {/* Micro Trust Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Statutory Anti-Drip Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              14-Day Cooling-Off Verified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              Devon & South Hams Coverage
            </span>
          </div>

        </div>
      </div>

      {/* Navigation Controls (Arrows & Indicators) */}
      {totalSlides > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 sm:bottom-8 sm:right-8">
          {/* Dot Indicators */}
          <div className="flex items-center gap-2 rounded-full bg-slate-900/80 p-2 backdrop-blur-md border border-slate-800">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-sky-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-white transition hover:bg-sky-600 hover:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-white transition hover:bg-sky-600 hover:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
