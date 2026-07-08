import 'outstatic/outstatic.css';
import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';
import React from 'react';

export default async function Page({ params }: { params: { ost: string[] } }) {
  try {
    const ostData = await Outstatic();
    return <OstClient ostData={ostData} params={params} />;
  } catch (error) {
    // If GitHub OAuth / repo slug environment variables are missing or uninitialized
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-slate-950 text-slate-200 font-sans">
        <div className="max-w-2xl rounded-xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-sky-400 font-heading">
            Outstatic CMS Dashboard Setup Required
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-slate-300">
            To activate the client-side Markdown CMS (£0/month database or hosting costs), please configure your GitHub repository credentials in <code className="rounded bg-slate-800 px-2 py-1 text-sky-300 font-mono">.env.local</code>:
          </p>
          <div className="mb-6 overflow-x-auto rounded bg-slate-950 p-4 text-left font-mono text-xs text-slate-400 border border-slate-800/80">
            <div>OST_REPO_SLUG=westbrook-laundry-website</div>
            <div>OST_REPO_OWNER=your-github-username</div>
            <div>OUTSTATIC_GITHUB_CLIENT_ID=...</div>
            <div>OUTSTATIC_GITHUB_SECRET=...</div>
            <div>JWT_SECRET=...</div>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 font-mono"
          >
            ← Return to Public Website
          </a>
        </div>
      </div>
    );
  }
}
