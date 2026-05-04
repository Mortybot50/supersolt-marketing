/**
 * SuperSolt landing copy — single source of truth.
 * Edit copy here. No CMS, no MDX. Grep, edit, redeploy.
 */

export const SITE = {
  name: "SuperSolt",
  domain: "supersolt.app",
  url: "https://supersolt-marketing.vercel.app",
  appUrl: "https://supersolt-ten.vercel.app",
  signInUrl: "https://supersolt-ten.vercel.app/auth",
  contactEmail: "morty@supersolt.app",
  tagline: "Run every venue from one screen.",
  description:
    "Multi-venue restaurant operations software for Australian hospitality. Connect Square, see real margin live, run roster and stock from one place.",
  twitter: "@supersolt_au",
  abn: "ABN pending",
} as const;

export const NAV = {
  links: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#audiences", label: "Who it's for" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#demo", label: "Book a demo" },
  signIn: { href: SITE.signInUrl, label: "Sign in" },
} as const;

export const HERO = {
  eyebrow: "Australian hospitality OS",
  // Full headline preserved for accessibility + DoD curl/grep check 1
  headline: "Run every venue from one screen.",
  headlineLeft: "Run every venue",
  headlineRight: "from one",
  accentWord: "screen",
  subline:
    "SuperSolt connects to Square, pulls your real numbers, and turns hospitality chaos into a single dashboard your team actually uses.",
  primaryCta: {
    href: "mailto:morty@supersolt.app?subject=SuperSolt%20demo",
    label: "Book a 15-min demo",
  },
  primaryCtaHoverNote: "Demo bookings opening soon",
  secondaryCta: { href: "#how-it-works", label: "See how it works" },
  trialNote: "14-day trial. No card needed. Connect Square in 5 minutes.",
} as const;

export const SUB_HERO = {
  line: "Built for Australian hospitality. Single venues, multi-venue groups, and franchisees.",
  logos: [
    { name: "Piccolo Panini", featured: true },
    { name: "your logo here", featured: false },
    { name: "your logo here", featured: false },
    { name: "your logo here", featured: false },
    { name: "your logo here", featured: false },
    { name: "your logo here", featured: false },
  ],
} as const;

export const PROBLEM = {
  eyebrow: "The problem",
  headline: "Spreadsheets don't run restaurants.",
  accentWord: "restaurants",
  body: "You shouldn't need three tabs open to know if last night made money. Hospitality runs on tight margin and tighter time. The reports that matter are buried in your POS, your roster app, your invoice pile, and a head full of guesses.",
  bullets: [
    {
      title: "Numbers arrive late.",
      body: "Yesterday's margin is a Wednesday email. Decisions don't wait that long.",
    },
    {
      title: "Tools don't talk.",
      body: "Square, your roster app, your invoices — four tabs to answer one question.",
    },
    {
      title: "Multi-venue compounds it.",
      body: "Three venues means three of every problem. Franchisees have it worse.",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  headline: "Three steps to running tighter.",
  accentWord: "tighter",
  steps: [
    {
      n: "01",
      title: "Connect Square.",
      body: "OAuth in five minutes. We pull your sales, items, and categories. Encrypted at rest, AES-256-GCM. We never see your bank or your customers' cards.",
    },
    {
      n: "02",
      title: "Add your venues, staff, and recipes.",
      body: "Casual, part-time, full-time — Fair Work rates baked in. Recipes link to ingredients link to invoices. One-time setup, twenty minutes per venue.",
    },
    {
      n: "03",
      title: "See your real margin tonight.",
      body: "By close of business on day one, you know what each venue actually made. Then every day after. No more end-of-month surprises.",
    },
  ],
} as const;

export const AUDIENCES = {
  eyebrow: "Who it's for",
  panels: [
    {
      eyebrow: "Single venue",
      headline: "Real margin, tonight.",
      accentWord: "tonight",
      body: "By close on day one, you know what the venue actually made. Then every day after. No more end-of-month surprises.",
      photoAlt:
        "Small kitchen at end-of-service, warm amber light from oven, hands prepping for tomorrow",
      mockup: "single-venue",
    },
    {
      eyebrow: "Multi-venue",
      headline: "One screen, every venue.",
      accentWord: "venue",
      body: "Group dashboard, single-venue drilldown, side-by-side compare. Switch contexts without losing your place.",
      photoAlt:
        "Venue manager looking at a phone in a busy dining room, soft motion blur, intimate",
      mockup: "multi-venue",
    },
    {
      eyebrow: "Franchisee",
      headline: "Roll up every site.",
      accentWord: "every",
      body: "Franchisee and area-manager scopes. Roll up the group, drill into a single trading day, export anything.",
      photoAlt:
        "QSR/franchise ambience — branded, energetic, framed editorially",
      mockup: "franchisee",
    },
  ],
} as const;

export const FEATURES = {
  eyebrow: "Features",
  headline: "The three things you'll use every day.",
  blocks: [
    {
      kicker: "Operations",
      headline: "One screen, every venue.",
      accentWord: "every",
      body: "Group dashboard, single-venue drilldown, side-by-side comparison. Switch contexts without losing your place. Built for operators who carry three venues in their head.",
      bullets: [
        "Group P&L roll-up by week, month, quarter",
        "Side-by-side venue compare on the metrics that matter",
        "Permission scopes per venue — area managers see their patch only",
      ],
      alignment: "left" as const,
      mockup: "operations" as const,
    },
    {
      kicker: "Labour",
      headline: "See your labour, live.",
      accentWord: "live",
      body: "Roster cost recalculates every time you drag a shift. Penalty rates auto-applied per Fair Work award. Compare rostered vs actual the moment a clock-in lands.",
      bullets: [
        "Drag-and-drop roster with live cost % vs forecast revenue",
        "AU Fair Work awards: casual loading, weekend, public holiday penalties",
        "Variance alerts: rostered vs actual within $50 of budget",
      ],
      alignment: "right" as const,
      mockup: "labour" as const,
    },
    {
      kicker: "Stock & Ordering",
      headline: "Stock, ordering, sorted.",
      accentWord: "sorted",
      body: "Snap a supplier invoice. SuperSolt parses line items, updates pricing, flags variances against last week. Auto-build orders from depleted stock and forecast covers.",
      bullets: [
        "Invoice OCR: snap a photo, line items appear",
        "Theoretical vs actual stock variance, by item and category",
        "Auto-build orders from par levels and forecast covers",
      ],
      alignment: "left" as const,
      mockup: "stock" as const,
    },
  ],
} as const;

export const PRICING = {
  eyebrow: "Pricing",
  headline: "Per venue. No surprises.",
  accentWord: "No surprises",
  subline:
    "Plain pricing. No setup fees. No long contracts. 14-day trial, no card needed.",
  currency: "AUD",
  note: "Prices in AUD, ex-GST. Billed monthly per venue.",
  tiers: [
    {
      name: "Single venue",
      label: "1 venue",
      price: 199,
      unit: "/venue/month",
      features: [
        "Square integration",
        "Live margin dashboard",
        "Roster with Fair Work awards",
        "Stock + invoice OCR",
        "Email support",
      ],
      cta: { label: "Start free trial", href: "#demo" },
      featured: false,
    },
    {
      name: "Multi-venue",
      label: "3-9 venues",
      price: 149,
      unit: "/venue/month",
      features: [
        "Everything in Single venue",
        "Group dashboard + roll-up",
        "Side-by-side venue compare",
        "Per-venue permission scopes",
        "Priority support",
      ],
      cta: { label: "Book a demo", href: "#demo" },
      featured: true,
      badge: "Most chosen",
    },
    {
      name: "Group",
      label: "10+ venues",
      price: 99,
      unit: "/venue/month",
      features: [
        "Everything in Multi-venue",
        "Franchisee/area-manager scopes",
        "Custom report exports",
        "Onboarding + venue-by-venue setup",
        "Named account manager",
      ],
      cta: { label: "Talk to sales", href: "#demo" },
      featured: false,
    },
  ],
} as const;

export const FAQ = {
  eyebrow: "Frequently asked",
  headline: "Questions, answered.",
  accentWord: "answered",
  items: [
    {
      q: "Do I need to switch off my current POS?",
      a: "No. SuperSolt runs alongside Square as your operations layer. Your POS stays your POS — we read sales data and add the operations tools your POS doesn't have.",
    },
    {
      q: "What about Lightspeed, Toast, or other POS systems?",
      a: "We're Square-first because Square dominates Australian independent hospitality. Lightspeed support is on the roadmap. If you're on Toast or another POS, talk to us — we'll let you know honestly whether SuperSolt fits today.",
    },
    {
      q: "How long does setup take?",
      a: "Five minutes to connect Square. Twenty minutes per venue to add staff, recipes, and pars. Most operators are seeing live margin by close of business on day one.",
    },
    {
      q: "Is my data secure?",
      a: "Yes. POS tokens are encrypted at rest with AES-256-GCM. Data lives in Australian Supabase regions. Row-level security scopes every query to your organisation. We never see your bank or your customers' card details.",
    },
    {
      q: "Does the roster respect Fair Work?",
      a: "Yes. Casual loading, weekend penalties, public holiday rates, and 3-hour minimum casual shifts are baked in. Awards are configurable per venue if you operate under an enterprise agreement.",
    },
    {
      q: "Can I export my data?",
      a: "Yes, anytime. CSV exports of every table you can see. Your data is yours. If you cancel, we keep nothing.",
    },
    {
      q: "What if I have one venue today and ten next year?",
      a: "Tiers shift automatically based on active venue count. No re-platforming. The same dashboard scales from one to one hundred venues.",
    },
    {
      q: "Is there a contract?",
      a: "Month-to-month. Cancel anytime. No setup fees. We'd rather you stay because it works than because you're locked in.",
    },
  ],
} as const;

export const FINAL_CTA = {
  headline: "Stop running your venues from a spreadsheet.",
  accentWord: "spreadsheet",
  subline:
    "Book a 15-minute demo. We'll connect Square, walk through your real margin, and you'll see day one what's been hiding in plain sight.",
  primaryCta: { label: "Book a 15-min demo", href: "#demo" },
  trialNote: "14-day trial included. No card needed.",
} as const;

export const FOOTER = {
  tagline: "Made in Melbourne 🇦🇺 for Australian hospitality.",
  columns: [
    {
      heading: "Product",
      links: [
        { href: "#how-it-works", label: "How it works" },
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: SITE.signInUrl, label: "Sign in" },
        { href: `mailto:${SITE.contactEmail}`, label: "Contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ],
  bottomLine: `© ${new Date().getFullYear()} ${SITE.name}. ${SITE.abn}.`,
} as const;
