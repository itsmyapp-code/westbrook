import React from 'react';

export const metadata = {
  title: 'Outstatic CMS — Westbrook Laundry Dashboard',
  description: 'Client-side Markdown CMS dashboard for Westbrook Laundry (£0/month hosting).',
};

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans selection:bg-sky-500 selection:text-white">
      {children}
    </div>
  );
}
