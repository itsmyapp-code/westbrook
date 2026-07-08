import type { Metadata } from 'next';
import React from 'react';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Westbrook Laundry | South Hams Commercial & Dry Cleaning',
  description: '100% Serverless Jamstack laundry website powered by Outstatic CMS. Premium commercial B2B linen care, dry cleaning, and launderette services in South Hams.',
  keywords: ['Westbrook Laundry', 'Commercial Laundry South Hams', 'Hotel Linen Service Devon', 'Kingsbridge Dry Cleaner', 'Launderette South Hams', 'Airbnb Laundry Service'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-sky-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
