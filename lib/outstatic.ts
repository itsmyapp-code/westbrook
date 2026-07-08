import type { OstDocument } from 'outstatic';
import fs from 'fs';
import path from 'path';

export type ServiceCategory = 'commercial' | 'dry-cleaning' | 'launderette';

export interface PageDocument extends Partial<OstDocument> {
  title: string;
  slug: string;
  content: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  collection?: string;
  status?: string;
  publishedAt?: string;
}

export interface PriceDocument extends Partial<OstDocument> {
  title: string;
  slug: string;
  itemName: string;
  priceValue: string;
  serviceCategory: ServiceCategory;
  description?: string;
  collection?: string;
  status?: string;
  publishedAt?: string;
}

// Rich, high-fidelity fallback data to ensure £0/month zero-downtime operation
// and complete mock state even before the Outstatic CMS repository is seeded.
const FALLBACK_PAGES: Record<string, PageDocument> = {
  home: {
    title: 'Westbrook Laundry — South Hams Premier Care',
    slug: 'home',
    content: `Welcome to Westbrook Laundry, the trusted local specialist for pristine garment care, high-capacity commercial linen servicing, and modern self-service launderette facilities across South Hams, Kingsbridge, Salcombe, and Dartmouth.`,
    coverImage: '/images/hero-laundry.jpg',
    metaTitle: 'Westbrook Laundry | Commercial & Dry Cleaning in South Hams',
    metaDescription: 'High-performance commercial laundry, professional dry cleaning, and rapid self-service launderette in South Hams.',
  },
  commercial: {
    title: 'Priority B2B Commercial Linen & Laundry Servicing',
    slug: 'commercial',
    content: `Tailored high-volume linen and towel care specifically engineered for boutique hotels, luxury bed & breakfasts, holiday parks, and premium Airbnb hosts across South Hams and Devon. We guarantee rapid turnarounds, statutory 14-day cooling-off transparency, and anti-drip pricing with zero hidden fees.`,
    coverImage: '/images/commercial-linen.jpg',
    metaTitle: 'Commercial Laundry for Hotels & Airbnbs | Westbrook Laundry',
    metaDescription: 'Reliable, bespoke B2B commercial laundry servicing for hospitality providers in South Hams.',
  },
  'dry-cleaning': {
    title: 'Artisanal Dry Cleaning & Delicate Garment Care',
    slug: 'dry-cleaning',
    content: `Using eco-conscious solvents and precision stain removal techniques, our master dry cleaners restore suits, evening dresses, bridalwear, and heavy curtains to factory-fresh perfection.`,
    coverImage: '/images/dry-cleaning.jpg',
    metaTitle: 'Expert Dry Cleaning & Alterations | Westbrook Laundry',
    metaDescription: 'Professional dry cleaning for suits, dresses, coats, and upholstery in South Hams.',
  },
  launderette: {
    title: 'Modern High-Capacity Self-Service Launderette',
    slug: 'launderette',
    content: `Our clean, well-lit launderette features ultra-fast 18kg and 10kg industrial washers and high-efficiency gas dryers. Complete your weekly wash or heavy duvet cleaning in under 45 minutes with contactless payment systems.`,
    coverImage: '/images/launderette-machines.jpg',
    metaTitle: 'Rapid Self-Service Launderette | Westbrook Laundry',
    metaDescription: 'Clean, contactless self-service launderette with large industrial washers and fast dryers.',
  },
  about: {
    title: 'A Trustworthy, Expanding Local Family-Run Business',
    slug: 'about',
    content: `Founded on the principles of immaculate hygiene, environmental stewardship, and community reliability, Westbrook Laundry has grown from a neighborhood drop-off point into South Hams' most advanced laundry facility. Still proudly family-run, we invest in energy-efficient heat-recovery machines and biodegradable detergents.`,
    coverImage: '/images/family-laundry.jpg',
    metaTitle: 'About Westbrook Laundry | Family-Run Devon Laundry',
    metaDescription: 'Learn about Westbrook Laundry, our local roots, environmental commitment, and family heritage.',
  },
  contact: {
    title: 'Connect With Westbrook Laundry',
    slug: 'contact',
    content: `Whether you require an emergency commercial turnover or have questions about delicate fabric care, our knowledgeable team is ready to help. Visit our facility or contact us directly.`,
    coverImage: '/images/contact-location.jpg',
    metaTitle: 'Contact & Business Hours | Westbrook Laundry',
    metaDescription: 'Get in touch with Westbrook Laundry. Find our opening times, phone number, and location in South Hams.',
  },
};

const FALLBACK_PRICES: PriceDocument[] = [
  // Commercial
  {
    title: 'Standard Hotel King Sheet Set',
    slug: 'com-king-set',
    itemName: 'King Duvet Cover, Fitted Sheet & 4 Pillowcases',
    priceValue: '£12.50 + VAT',
    serviceCategory: 'commercial',
    description: 'Crisp 300-thread-count wash, starch, and precision roller-iron finish.',
  },
  {
    title: 'Boutique Towel Bundle (10 Sets)',
    slug: 'com-towel-bundle',
    itemName: '10x Bath Sheets, 10x Hand Towels, 10x Bath Mats',
    priceValue: '£28.00 + VAT',
    serviceCategory: 'commercial',
    description: 'High-temp sanitizing wash with luxury optical brightening and tumble fluffing.',
  },
  {
    title: 'Airbnb Rapid Changeover Sack',
    slug: 'com-airbnb-sack',
    itemName: 'Mixed Bedroom & Bathroom Linen (Up to 15kg)',
    priceValue: '£22.00 + VAT',
    serviceCategory: 'commercial',
    description: 'Same-day turnaround for registered South Hams holiday let operators.',
  },
  {
    title: 'Restaurant Table Linen Set',
    slug: 'com-table-linen',
    itemName: 'Large Tablecloth & 6 Napkins',
    priceValue: '£9.50 + VAT',
    serviceCategory: 'commercial',
    description: 'Heavy-duty grease and wine stain treatment with crisp table presentation.',
  },
  // Dry Cleaning
  {
    title: '2-Piece Business Suit',
    slug: 'dc-2pc-suit',
    itemName: 'Jacket & Trousers / Skirt (2-Piece)',
    priceValue: '£15.50',
    serviceCategory: 'dry-cleaning',
    description: 'Gentle eco-dry cleaning, hand-finished steaming and lint removal.',
  },
  {
    title: 'Evening / Prom Dress',
    slug: 'dc-evening-dress',
    itemName: 'Full-Length Evening / Occasion Gown',
    priceValue: '£24.00',
    serviceCategory: 'dry-cleaning',
    description: 'Specialist delicate bead and silk protection cycle.',
  },
  {
    title: 'Winter Wool Coat',
    slug: 'dc-winter-coat',
    itemName: 'Overcoat, Trench or Peacoat',
    priceValue: '£18.00',
    serviceCategory: 'dry-cleaning',
    description: 'Deep fiber conditioning, pilling reduction, and weatherproofing check.',
  },
  {
    title: 'Heavy Curtains (Per Pair)',
    slug: 'dc-curtains',
    itemName: 'Lined / Thermal Curtains (Up to 90" drop)',
    priceValue: '£45.00',
    serviceCategory: 'dry-cleaning',
    description: 'Stain pre-spotting, pleat restoration, and anti-shrink guarantee.',
  },
  // Launderette
  {
    title: '18kg Industrial Washer Cycle',
    slug: 'laun-18kg-wash',
    itemName: 'Mega 18kg Drum (Super Load / Duvet Size)',
    priceValue: '£9.00',
    serviceCategory: 'launderette',
    description: 'Ideal for King/Super King duvets, sleeping bags, or 3-4 family wash loads.',
  },
  {
    title: '10kg High-Speed Washer Cycle',
    slug: 'laun-10kg-wash',
    itemName: 'Standard 10kg Drum (Daily Family Load)',
    priceValue: '£6.00',
    serviceCategory: 'launderette',
    description: 'Ultra-fast 32-minute cycle with high G-force spin to reduce drying time.',
  },
  {
    title: 'High-Efficiency Gas Dryer (15 mins)',
    slug: 'laun-dryer-15m',
    itemName: 'Reversing Action Gas Dryer (Per 15 Min Block)',
    priceValue: '£2.00',
    serviceCategory: 'launderette',
    description: 'Large capacity drums prevent creasing. Average basket dries in 30 minutes.',
  },
  {
    title: 'Service Wash & Fold Supplement',
    slug: 'laun-service-wash',
    itemName: 'Staff-Assisted Wash, Dry & Precision Fold',
    priceValue: '£4.50 add-on',
    serviceCategory: 'launderette',
    description: 'Drop off your bag by 10 AM, pick up fresh and folded by 4 PM.',
  },
];

/**
 * Fetch a Page document by slug from Outstatic CMS, falling back to local static data
 * if the Outstatic repository is not yet seeded or during static Jamstack builds.
 */
export async function getPageBySlug(slug: string): Promise<PageDocument> {
  try {
    const pagesDir = path.join(process.cwd(), 'outstatic/content/pages');
    if (fs.existsSync(pagesDir)) {
      const { getDocumentBySlug } = await import('outstatic/server');
      const doc = await getDocumentBySlug('pages', slug, [
        'title',
        'slug',
        'content',
        'coverImage',
        'metaTitle',
        'metaDescription',
      ]);
      if (doc) {
        return doc as unknown as PageDocument;
      }
    }
  } catch (_err) {
    // Graceful fallback during static generation or unseeded repository state
  }
  return FALLBACK_PAGES[slug] || FALLBACK_PAGES.home;
}

/**
 * Fetch all Price items from Outstatic CMS, optionally filtered by service category.
 * Falls back to high-fidelity mock pricing data when CMS is not yet populated.
 */
export async function getPricesByCategory(
  category?: ServiceCategory
): Promise<PriceDocument[]> {
  let items: PriceDocument[] = [];
  try {
    const pricesDir = path.join(process.cwd(), 'outstatic/content/prices');
    if (fs.existsSync(pricesDir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('prices', [
        'title',
        'slug',
        'itemName',
        'priceValue',
        'serviceCategory',
        'description',
      ]);
      if (docs && docs.length > 0) {
        items = docs as unknown as PriceDocument[];
      }
    }
  } catch (_err) {
    // Graceful fallback to rich static data
  }

  if (items.length === 0) {
    items = FALLBACK_PRICES;
  }

  if (category) {
    return items.filter((item) => item.serviceCategory === category);
  }
  return items;
}

/**
 * Fetch all pages from Outstatic CMS for sitemap or navigation generation.
 */
export async function getAllPages(): Promise<PageDocument[]> {
  try {
    const pagesDir = path.join(process.cwd(), 'outstatic/content/pages');
    if (fs.existsSync(pagesDir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('pages', [
        'title',
        'slug',
        'content',
        'coverImage',
        'metaTitle',
        'metaDescription',
      ]);
      if (docs && docs.length > 0) {
        return docs as unknown as PageDocument[];
      }
    }
  } catch (_err) {
    // Fallback
  }
  return Object.values(FALLBACK_PAGES);
}

/* ==========================================================================
   HOMEPAGE MODULAR COLLECTION SCHEMAS & FETCHERS
   ========================================================================== */

export interface HeroSlideDocument extends Partial<OstDocument> {
  title: string;
  slug: string;
  description: string;
  ctaText: string;
  bgImage: string;
}

export interface WorkflowDocument extends Partial<OstDocument> {
  title: string;
  slug: string;
  stepNumber: number;
  description: string;
}

export interface ServiceGridDocument extends Partial<OstDocument> {
  title: string;
  slug: string;
  category: string;
  description: string;
  link: string;
}

export interface TestimonialDocument extends Omit<Partial<OstDocument>, 'author'> {
  title: string;
  slug: string;
  rating: number;
  reviewText: string;
  author?: string | { name?: string; picture?: string; };
}

/* --- Fallback Data for Homepage Collections --- */

const FALLBACK_HERO_SLIDES: HeroSlideDocument[] = [
  {
    title: 'Pristine Garment & Commercial Linen Care',
    slug: 'slide-1',
    description: 'South Hams premier agency for bespoke hotel linen management, delicate dry cleaning, and rapid self-service turnaround.',
    ctaText: 'Explore Commercial B2B',
    bgImage: '/images/hero-laundry.jpg',
  },
  {
    title: 'Eco-Conscious Biodegradable Processing',
    slug: 'slide-2',
    description: 'We capture and recycle thermal energy while utilizing 100% phosphate-free, biodegradable detergents to protect Devon waters.',
    ctaText: 'Our Heritage & Philosophy',
    bgImage: '/images/hero-eco.jpg',
  },
  {
    title: 'Same-Day Launderette & Drop-Off Wash',
    slug: 'slide-3',
    description: 'Ultra-fast 18kg and 10kg industrial washers in Kingsbridge. Complete your weekly family load in under 45 minutes.',
    ctaText: 'View Machine Tariffs',
    bgImage: '/images/hero-launderette.jpg',
  },
];

const FALLBACK_WORKFLOWS: WorkflowDocument[] = [
  {
    stepNumber: 1,
    title: 'Select & Schedule',
    slug: 'step-1',
    description: 'Choose your service tier—priority B2B linen turnaround, delicate dry cleaning, or drop-off service wash via our direct portal.',
  },
  {
    stepNumber: 2,
    title: 'Eco-Thermal Processing',
    slug: 'step-2',
    description: 'Garments and hotel linens undergo precision washing in our heat-recovery industrial machines using gentle, high-grade detergents.',
  },
  {
    stepNumber: 3,
    title: 'Quality Inspection & Press',
    slug: 'step-3',
    description: 'Every sheet, towel, and garment is hand-inspected, steam-pressed on high-speed rotary ironers, and carefully folded.',
  },
  {
    stepNumber: 4,
    title: 'Reliable Delivery or Pickup',
    slug: 'step-4',
    description: 'Collect from our Kingsbridge facility or receive scheduled route delivery directly to your boutique hotel or Airbnb property.',
  },
];

const FALLBACK_SERVICES: ServiceGridDocument[] = [
  {
    title: 'Commercial B2B Hospitality',
    slug: 'service-commercial',
    category: 'Hospitality & Hotels',
    description: 'High-volume linen and towel rental and laundering for hotels, holiday parks, and luxury Airbnb hosts with guaranteed turnaround times.',
    link: '/commercial',
  },
  {
    title: 'Artisanal Dry Cleaning',
    slug: 'service-dry-cleaning',
    category: 'Delicate Garments',
    description: 'Expert solvent and wet-cleaning stain removal for tailored suits, evening dresses, bridalwear, and heavy velvet curtains.',
    link: '/dry-cleaning',
  },
  {
    title: 'Self-Service Launderette',
    slug: 'service-launderette',
    category: 'Direct Access',
    description: 'Modern, well-lit launderette equipped with ultra-fast 18kg and 10kg industrial washers and high-efficiency gas dryers.',
    link: '/launderette',
  },
  {
    title: 'Drop-Off Service Wash & Fold',
    slug: 'service-wash-fold',
    category: 'Convenience Care',
    description: 'Leave your daily laundry bag with our front desk staff by 10 AM and pick it up freshly washed, dried, and precision-folded by 4 PM.',
    link: '/launderette',
  },
  {
    title: 'Yacht & Marine Linen Turnaround',
    slug: 'service-marine',
    category: 'Salcombe Specialist',
    description: 'Custom express laundry and bedding turnaround for charter yachts, sailing vessels, and marine crews harbored in Salcombe and Dartmouth.',
    link: '/commercial',
  },
  {
    title: 'Contract Upholstery & Curtain Care',
    slug: 'service-upholstery',
    category: 'Interior Restoration',
    description: 'Deep extraction and gentle cleansing for heavy drapes, sofa covers, and commercial dining room textiles across South Hams.',
    link: '/dry-cleaning',
  },
];

const FALLBACK_TESTIMONIALS: TestimonialDocument[] = [
  {
    title: 'Flawless Turnaround for Our Boutique Hotel',
    slug: 'rev-1',
    rating: 5,
    reviewText: 'Westbrook Laundry has transformed our housekeeping efficiency. Their crisp linen pressing and punctual delivery schedule to Salcombe have been absolute lifesavers during peak summer season.',
    author: 'Elena Rostova — General Manager, Salcombe Estuary Hotel',
  },
  {
    title: 'The Only Dry Cleaner I Trust with Silk & Velvet',
    slug: 'rev-2',
    rating: 5,
    reviewText: 'They managed to remove a stubborn vintage oil stain from my grandmother’s silk wedding dress without a single thread pulled. Obsessive attention to detail and genuinely kind staff.',
    author: 'Marcus Vance — Resident & Local Business Owner, Kingsbridge',
  },
  {
    title: 'Incredible Machines & Super Clean Facility',
    slug: 'rev-3',
    rating: 5,
    reviewText: 'The 18kg washers are beasts! I washed three king-size duvets at once, dried them in 30 minutes, and paid effortlessly. Best launderette experience across Devon.',
    author: 'Sarah Jenkins — Holiday Home Host, Thurlestone',
  },
];

/**
 * Fetch Hero Slides from Outstatic (`heroslider`), falling back to local slides.
 */
export async function getHeroSlides(): Promise<HeroSlideDocument[]> {
  try {
    const dir = path.join(process.cwd(), 'outstatic/content/heroslider');
    if (fs.existsSync(dir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('heroslider', [
        'title',
        'slug',
        'description',
        'ctaText',
        'bgImage',
      ]);
      if (docs && docs.length > 0) {
        return docs as unknown as HeroSlideDocument[];
      }
    }
  } catch (_err) {
    // Fallback
  }
  return FALLBACK_HERO_SLIDES;
}

/**
 * Fetch Workflow steps (`workflows`), sorted by stepNumber ascending.
 */
export async function getWorkflows(): Promise<WorkflowDocument[]> {
  try {
    const dir = path.join(process.cwd(), 'outstatic/content/workflows');
    if (fs.existsSync(dir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('workflows', [
        'title',
        'slug',
        'stepNumber',
        'description',
      ]);
      if (docs && docs.length > 0) {
        const sorted = (docs as unknown as WorkflowDocument[]).sort(
          (a, b) => (Number(a.stepNumber) || 0) - (Number(b.stepNumber) || 0)
        );
        return sorted;
      }
    }
  } catch (_err) {
    // Fallback
  }
  return FALLBACK_WORKFLOWS;
}

/**
 * Fetch Services (`services`).
 */
export async function getServices(): Promise<ServiceGridDocument[]> {
  try {
    const dir = path.join(process.cwd(), 'outstatic/content/services');
    if (fs.existsSync(dir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('services', [
        'title',
        'slug',
        'category',
        'description',
        'link',
      ]);
      if (docs && docs.length > 0) {
        return docs as unknown as ServiceGridDocument[];
      }
    }
  } catch (_err) {
    // Fallback
  }
  return FALLBACK_SERVICES;
}

/**
 * Fetch Testimonials (`testimonials`).
 */
export async function getTestimonials(): Promise<TestimonialDocument[]> {
  try {
    const dir = path.join(process.cwd(), 'outstatic/content/testimonials');
    if (fs.existsSync(dir)) {
      const { getDocuments } = await import('outstatic/server');
      const docs = await getDocuments('testimonials', [
        'title',
        'slug',
        'rating',
        'reviewText',
        'author',
      ]);
      if (docs && docs.length > 0) {
        return docs as unknown as TestimonialDocument[];
      }
    }
  } catch (_err) {
    // Fallback
  }
  return FALLBACK_TESTIMONIALS;
}
