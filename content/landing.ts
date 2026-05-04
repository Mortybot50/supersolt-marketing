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
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#demo", label: "Book a demo" },
  signIn: { href: SITE.signInUrl, label: "Sign in" },
} as const;

export const HERO = {
  eyebrow: "Built for Australian hospitality",
  // accent word: "screen"
  headline: "Run every venue from one screen.",
  accentWord: "screen",
  subline:
    "SuperSolt is the operations layer for single venues, multi-venue groups, and franchisees. Roster, stock, sales, and real margin — live, in one place.",
  primaryCta: { href: "#demo", label: "Book a 15-min demo" },
  secondaryCta: { href: "#how-it-works", label: "See how it works" },
  trialNote: "14-day trial. No card needed. Connect Square in 5 minutes.",
} as const;

export const LOGOS = {
  heading: "Trusted by Australian operators",
  items: [
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
  // accent word: "spreadsheets"
  headline: "Spreadsheets don't run restaurants.",
  accentWord: "Spreadsheets",
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

export const SOLUTION = {
  eyebrow: "What SuperSolt does",
  blocks: [
    {
      // accent: "minutes"
      headline: "Connect Square in 5 minutes.",
      accentWord: "minutes",
      body: "Authorise once. SuperSolt pulls sales, items, and categories continuously. No CSVs, no scripts, no IT call.",
    },
    {
      // accent: "margin"
      headline: "Real margin, today.",
      accentWord: "margin",
      body: "Live food cost, labour cost, and contribution by venue and by daypart — recalculated every time a sale fires or a roster shifts.",
    },
    {
      // accent: "screen"
      headline: "One screen, every venue.",
      accentWord: "screen",
      body: "Switch venues with one click. Compare side-by-side. Roll up the group. Drill into a single trading day.",
    },
    {
      // accent: "hospitality"
      headline: "Built by hospitality, for hospitality.",
      accentWord: "hospitality",
      body: "Made in Melbourne by operators who lived your problem. Fair Work-aware roster. AU GST. AEST timestamps. No US-first quirks.",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  // accent: "tighter"
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

export const FEATURES = {
  eyebrow: "Features",
  blocks: [
    {
      kicker: "Operations",
      // accent: "every"
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
      // accent: "live"
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
      // accent: "sorted"
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
  // accent: "spreadsheet"
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
