'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import type { TestimonialDocument } from '@/lib/outstatic';

interface TestimonialsCarouselProps {
  testimonials: TestimonialDocument[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalReviews = testimonials?.length || 1;

  useEffect(() => {
    if (!isAutoPlaying || totalReviews <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalReviews]);

  if (!testimonials || testimonials.length === 0) return null;

  const currentReview = testimonials[currentIndex];
  const rating = currentReview?.rating || 5;

  return (
    <section 
      className="bg-white py-20 sm:py-28 font-sans border-b border-slate-200/80 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            Verified South Hams Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by Devon Hospitality & Residents
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Read what general managers, holiday hosts, and local residents say about our punctuality and garment preservation.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative rounded-3xl border border-slate-200 bg-slate-50/80 p-8 sm:p-14 shadow-lg transition-all">
          <Quote className="mx-auto h-12 w-12 text-sky-200 mb-6 opacity-80" />

          {/* Star Rating */}
          <div className="flex justify-center items-center gap-1.5 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-300'
                }`}
              />
            ))}
            <span className="ml-2 rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
              {rating}.0 / 5.0
            </span>
          </div>

          {/* Review Text */}
          <blockquote className="max-w-3xl mx-auto text-base sm:text-xl md:text-2xl font-bold text-slate-900 leading-relaxed italic">
            &quot;{currentReview?.reviewText}&quot;
          </blockquote>

          {/* Author Attribution */}
          <div className="pt-8 mt-8 border-t border-slate-200/80">
            <div className="font-extrabold text-sky-900 text-sm sm:text-base">
              {(typeof currentReview?.author === 'string'
                ? currentReview.author
                : currentReview?.author?.name) || 'Verified South Hams Partner'}
            </div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
              {currentReview?.title}
            </div>
          </div>

          {/* Slider Controls */}
          {totalReviews > 1 && (
            <div className="pt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2 px-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex((prev) => (prev + 1) % totalReviews);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-xs"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
