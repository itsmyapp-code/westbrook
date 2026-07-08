# COMPLIANCE MD FOR FUTURE APPS Protocol — Audit Log A & B
**Generated:** 2026-07-08T19:18:48+01:00  
**Project:** Westbrook Laundry (developer.itsmyapp.co.uk)  
**Legislation Framework:** UK GDPR Article 24 / Data (Use and Access) Act (DUAA)  
**Security Status:** INTERNAL CODEBASE USE ONLY — DO NOT EXPOSE TO PUBLIC ROUTES (`app/` or `public/`).

---

## Log A: System Architecture & Data Processing Audit
1. **Zero-Load Tracking Blockade (`CookieConsent` Component):**
   - **Mechanism:** All third-party marketing, conversion, and non-exempt analytics scripts are blocked prior to affirmative, unambiguous user consent.
   - **Equal Prominence Engineering:** "Accept All" and "Reject All" UI components match 1:1 in visual weight, color contrast (min 7:1 ratio), dimensions, and accessibility properties (`aria-label`, keyboard tabbing).
   - **First-Layer Rejection:** The primary consent modal features immediate 1-click rejection without multi-layered option trees or "sludge" UI barriers.
   - **DUAA Statutory Exemptions:** First-party anonymous interaction metrics and security/anti-abuse checkpoints are classified under statutory allowances.

2. **Serverless Jamstack & Client-Side Outstatic CMS:**
   - **Hosting & Database Footprint:** £0/month recurring cost model utilizing purely static file serving (`next export` compatible / App Router client-first state) and Outstatic Markdown git-backed storage (`app/(cms)/outstatic`).
   - **Data Scope:** Zero persistent tracking cookies or third-party behavioral profiles. Contact forms (`/contact`, `/commercial`) route directly via FormSubmit (`formsubmit.co`) with honeypot validation (`_honey`).

---

## Log B: Subscription, B2B Commercial & Cooling-Off Compliance
1. **Statutory Cooling-Off & Anti-Drip Logic:**
   - **14-Day Statutory Window:** Explicit disclosure integrated into commercial contracts (`/commercial` & `/terms`) covering initial transaction execution, promotional tier flips, and automated annual renewals.
   - **Pro-Rata Refund Matrix:** Clear contractual terms guaranteeing proportionate refund calculations for unconsumed days upon cancellation inside statutory cooling windows or 12+ month renewal loops.
   - **Same-Channel Exit:** Digital or commercial profile cancellations accessible via 1-click procedures without retention questionnaires or hidden verification barriers.
   - **Transparent Pricing:** All advertised prices (`/dry-cleaning`, `/launderette`, `/commercial`) display total transactional figures inclusive of VAT, operational supplements, and processing fees.

2. **Mandatory Application Navigation Hooks:**
   - Dedicated standalone routes (`/terms`, `/privacy`, `/cookies`, `/accessibility`) generated inside `app/(public)/`.
   - Global master layout footer (`app/(public)/layout.tsx`) includes formal UK GDPR Article 24 acknowledgment block directing inquiries to `hello@itsmyapp.co.uk` (30-day response SLA).
