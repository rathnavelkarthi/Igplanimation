// 20 SEO landing pages — Chennai / Tamil Nadu high-intent keywords.
// Researched against active competitor coverage (KP Webtech, Sanishsoft, FuelDigi,
// Techmagnate, Website Dokan, Weboin, Maksan, Gofillip, Sortlist, 10Seos).
// Each entry powers /services/[slug] via a single dynamic route.

export type SeoPage = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  keyword: string;
  intent: "service" | "tech" | "industry" | "local";
  hero: { lede: string; sub: string };
  bullets: { t: string; b: string }[];
  outcomes: string[];
  tech: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const PAGES: SeoPage[] = [
  {
    slug: "software-development-company-in-chennai",
    h1: "Software Development Company in Chennai",
    title: "Software Development Company in Chennai | IGPL — International Garudas",
    description:
      "IGPL is a Chennai-based software development company engineering custom platforms, AI systems, and enterprise software for clients across India and globally. Senior engineers. Fixed-price discovery. Real production deliveries.",
    eyebrow: "§ Service · Chennai",
    keyword: "software development company in Chennai",
    intent: "service",
    hero: {
      lede: "Custom software, engineered in Chennai.",
      sub: "We architect and ship production-grade software for hospitals, schools, real-estate, political campaigns, and SaaS founders. Outcome-scoped engagements with a senior lead from day one."
    },
    bullets: [
      { t: "Senior engineers only", b: "No bench, no juniors-on-your-dime. Every engagement is staffed by architects and senior full-stack engineers from our Chennai studio." },
      { t: "Fixed-price discovery", b: "Two-week discovery sprint at a fixed fee — you walk away with a domain model, architecture diagram, and a milestone-locked build estimate." },
      { t: "Production from week one", b: "We ship to a real staging URL every Friday. No mock screens, no demo-ware — only working software your users can touch." }
    ],
    outcomes: [
      "Working software in 8–14 weeks",
      "Codebase you own end-to-end",
      "SLA-backed operate phase post-launch"
    ],
    tech: ["Next.js", "React Native", "Node.js", "Python", "PostgreSQL", "AWS", "GCP", "OpenAI", "Anthropic"],
    industries: ["Healthcare", "Education", "Real Estate", "Political Campaigns", "SaaS", "Retail & D2C"],
    faqs: [
      { q: "How long does a typical software project take?", a: "Discovery is 2 weeks. Most MVPs ship in 8–14 weeks. Enterprise platforms run 4–6 months." },
      { q: "Do you work with startups or only enterprises?", a: "Both. We have a startup track (founder-friendly milestones) and an enterprise track (procurement-friendly contracts)." },
      { q: "Where is the team based?", a: "Chennai HQ. We meet clients in-person across OMR, Guindy, Anna Nagar, and Tidel Park." },
      { q: "Who owns the source code?", a: "You do — fully. Code, infrastructure, and documentation transfer to your repos and accounts." }
    ],
    related: ["custom-software-development-chennai", "enterprise-software-development-chennai", "saas-development-company-chennai"]
  },
  {
    slug: "website-development-company-in-chennai",
    h1: "Website Development Company in Chennai",
    title: "Website Development Company in Chennai | Next.js & React — IGPL",
    description:
      "Award-grade website development in Chennai. Next.js, React, Tailwind, headless CMS. Sub-second load times, Core Web Vitals 90+, conversion-optimized for B2B and D2C brands.",
    eyebrow: "§ Service · Chennai",
    keyword: "website development company in Chennai",
    intent: "service",
    hero: {
      lede: "Websites that pay for themselves.",
      sub: "We build performance-grade websites in Next.js and React for Chennai brands competing on quality, not price. Editorial design, sub-second load, measurable conversion."
    },
    bullets: [
      { t: "Next.js + headless CMS", b: "Server-rendered, edge-cached, sub-second TTFB. Content team gets a Sanity / Contentful dashboard, engineers get a clean Git-based workflow." },
      { t: "Core Web Vitals 90+", b: "Every site we ship lands in the top decile of LCP, CLS, and INP — measured in real-user monitoring, not just Lighthouse." },
      { t: "Conversion-first IA", b: "Information architecture mapped to your funnel. Sticky CTAs, lead capture, WhatsApp click-to-chat, GA4 + Search Console wired from day one." }
    ],
    outcomes: [
      "Live in 4–8 weeks",
      "Lighthouse 95+ across the board",
      "Lead form, analytics, and SEO ready"
    ],
    tech: ["Next.js 14", "React", "Tailwind", "Framer Motion", "Sanity", "Contentful", "Vercel", "Cloudflare"],
    industries: ["B2B SaaS", "D2C", "Real Estate", "Education", "Healthcare", "Hospitality"],
    faqs: [
      { q: "How much does a website cost in Chennai?", a: "Marketing sites start at ₹1.5L. Conversion-optimized B2B sites with a CMS run ₹3–6L. E-commerce stacks run ₹6–15L." },
      { q: "Do you do WordPress?", a: "We don't recommend WordPress for new builds — Next.js + a headless CMS is faster, more secure, and cheaper to operate over 3 years." },
      { q: "Will my website rank on Google?", a: "We ship with technical SEO baked in: schema, sitemap, Open Graph, performance. Content and backlinks are on you (we can pair with our growth team)." }
    ],
    related: ["nextjs-development-company-chennai", "ui-ux-design-agency-chennai", "ecommerce-development-company-chennai"]
  },
  {
    slug: "mobile-app-development-company-chennai",
    h1: "Mobile App Development Company in Chennai",
    title: "Mobile App Development Company in Chennai | iOS, Android, React Native — IGPL",
    description:
      "Native iOS, Android, and React Native app development from Chennai. End-to-end design, build, App Store submission, and post-launch operate. Built for scale, shipped on time.",
    eyebrow: "§ Service · Chennai",
    keyword: "mobile app development company Chennai",
    intent: "service",
    hero: {
      lede: "Apps your users return to.",
      sub: "We design and engineer mobile apps for healthcare, real-estate, and consumer brands across South India. Native performance, cross-platform economics, and Apple-grade interaction design."
    },
    bullets: [
      { t: "React Native or native", b: "We pick the stack based on your performance budget — not our preference. Native Swift / Kotlin when it matters; React Native when it doesn't." },
      { t: "App Store + Play Store", b: "We handle Apple review, Play Console policy, and post-launch crash monitoring. You get a published app, not a TestFlight build." },
      { t: "Offline-first, push-ready", b: "Built for Indian network conditions. Local-first sync, smart retries, and push notification orchestration via OneSignal or Firebase." }
    ],
    outcomes: [
      "App Store + Play Store in 10–14 weeks",
      "Crash-free rate > 99.5%",
      "Push, deep links, analytics from day one"
    ],
    tech: ["React Native", "Swift", "Kotlin", "Expo", "Firebase", "OneSignal", "Sentry", "Detox"],
    industries: ["Healthcare", "Real Estate", "Education", "Retail", "Logistics", "Fintech"],
    faqs: [
      { q: "iOS first or Android first?", a: "Depends on your audience. Tamil Nadu skews Android (~85%). NRI-facing apps skew iOS. We A/B against your customer data." },
      { q: "How much does a mobile app cost?", a: "MVP cross-platform: ₹6–12L. Production-grade native: ₹15–30L. Marketplace / fintech: ₹30L+." },
      { q: "Can you do App Store Optimization (ASO)?", a: "Yes — keyword research, screenshot design, and rating-prompt orchestration are part of our launch package." }
    ],
    related: ["react-native-app-development-chennai", "ios-app-development-chennai", "android-app-development-chennai"]
  },
  {
    slug: "digital-marketing-agency-chennai",
    h1: "Digital Marketing Agency in Chennai",
    title: "Digital Marketing Agency in Chennai | SEO, Ads, AI Pipelines — IGPL",
    description:
      "We don't run campaigns — we build the system that runs them. AI-native content pipelines, performance SEO, Google Ads, and lead-gen for Chennai businesses ready to compound.",
    eyebrow: "§ Service · Chennai",
    keyword: "digital marketing agency Chennai",
    intent: "service",
    hero: {
      lede: "Marketing as an engineered system.",
      sub: "Where most Chennai agencies optimize ads, we engineer the automation behind them — generative content, attribution pipelines, AI personalization, and growth dashboards your CMO can read at a glance."
    },
    bullets: [
      { t: "Performance SEO", b: "Technical SEO + topical authority + local pack domination for Chennai. Schema, Core Web Vitals, GBP, and a content cadence that ships weekly." },
      { t: "Google Ads + Meta Ads", b: "Bid-management automation, creative rotation, and pixel-grade attribution. We treat ad spend as an engineering problem with feedback loops." },
      { t: "AI content pipelines", b: "Generative pipelines that produce on-brand long-form content, social cuts, and case studies — at agency pace, at SaaS unit economics." }
    ],
    outcomes: [
      "3x organic traffic in 6 months (typical)",
      "Cost-per-lead down 40–60%",
      "Attribution dashboard you actually trust"
    ],
    tech: ["GA4", "Search Console", "Ahrefs", "Google Ads", "Meta Ads", "Replicate", "OpenAI", "Mux", "PostHog"],
    industries: ["B2B SaaS", "D2C", "Healthcare", "Real Estate", "Education", "Political"],
    faqs: [
      { q: "What's the minimum engagement?", a: "Retainer starts at ₹1.5L/month (90-day commitment). One-off SEO audits and ad-account audits start at ₹50K." },
      { q: "Do you guarantee #1 rankings?", a: "No reputable agency does. We guarantee a measurable lift in qualified traffic and pipeline within 90 days, or we work for free until we deliver." },
      { q: "Who owns the ad accounts?", a: "You do. We run your accounts; we never spin up our own and rent them to you." }
    ],
    related: ["seo-services-chennai", "google-ads-agency-chennai", "ai-marketing-automation-chennai"]
  },
  {
    slug: "seo-services-chennai",
    h1: "SEO Services in Chennai",
    title: "SEO Services in Chennai | Technical, Local & Content SEO — IGPL",
    description:
      "Technical SEO, local pack optimization, and topical-authority content for Chennai businesses. Schema, Core Web Vitals, GBP, and an editorial cadence that ranks.",
    eyebrow: "§ Service · Chennai",
    keyword: "SEO services Chennai",
    intent: "service",
    hero: {
      lede: "SEO, run as software.",
      sub: "We treat SEO as an engineering discipline — crawlability, schema, performance, internal-link graphs, and a content factory that ships weekly. No black-hat shortcuts; no monthly retainer theatre."
    },
    bullets: [
      { t: "Technical SEO audit", b: "Site architecture, Core Web Vitals, schema, hreflang, canonical hygiene, and crawl-budget optimization. Findings delivered as a Jira-ready ticket list, not a 60-page PDF." },
      { t: "Local SEO (Chennai)", b: "Google Business Profile, local citations, review velocity, and Tamil-language landing pages. Dominate the local pack across OMR, Guindy, Anna Nagar, Tambaram." },
      { t: "Topical authority content", b: "Pillar-and-cluster architecture mapped to your buyer journey. We commission, edit, and publish 4–8 long-form pieces per month, each engineered to rank." }
    ],
    outcomes: [
      "Top-3 Chennai local pack in 90 days",
      "2–4x organic traffic in 6 months",
      "Pipeline-attributed organic leads"
    ],
    tech: ["Ahrefs", "Semrush", "Search Console", "GA4", "Screaming Frog", "Surfer", "Schema.org"],
    industries: ["B2B SaaS", "Local services", "Healthcare", "Education", "Real estate", "D2C"],
    faqs: [
      { q: "How long until I rank #1?", a: "Local pack: 60–120 days. Competitive commercial terms: 6–12 months. Anyone promising faster is lying." },
      { q: "Do you do link building?", a: "We earn links — digital PR, podcast placements, dataset releases — not buy them. Paid links are a short-term loan with a long-term penalty." },
      { q: "Will you write the content?", a: "We can. Our content team has shipped for healthcare, real-estate, and SaaS. Or we can train and operate your in-house team." }
    ],
    related: ["digital-marketing-agency-chennai", "google-ads-agency-chennai", "content-marketing-agency-chennai"]
  },
  {
    slug: "custom-software-development-chennai",
    h1: "Custom Software Development in Chennai",
    title: "Custom Software Development in Chennai | Bespoke Platforms — IGPL",
    description:
      "Bespoke web, mobile, and AI software engineered in Chennai. Domain-driven design, event-sourced architectures, and senior engineers who ship.",
    eyebrow: "§ Service · Chennai",
    keyword: "custom software development Chennai",
    intent: "service",
    hero: {
      lede: "Software shaped to your business — not the other way around.",
      sub: "Off-the-shelf software fights your operating model. Custom software encodes it. We engineer bespoke platforms that turn your hardest workflow into your durable advantage."
    },
    bullets: [
      { t: "Domain-driven design", b: "We map your bounded contexts, aggregates, and ubiquitous language first. The architecture follows the business — never the reverse." },
      { t: "Event-sourced state", b: "Audit-grade history out of the box. Replay, rebuild, and reason about state — critical for healthcare, fintech, and regulated industries." },
      { t: "Outcome contracts", b: "Each milestone has an acceptance test you sign off in plain English. No vague deliverables; no scope-creep arguments." }
    ],
    outcomes: [
      "Production system in 12–20 weeks",
      "Auditable, replayable state",
      "Architecture diagrams your CTO will defend"
    ],
    tech: ["TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Kafka", "Temporal", "Kubernetes"],
    industries: ["Healthcare", "Fintech", "Logistics", "Manufacturing", "Education", "Government"],
    faqs: [
      { q: "What's the smallest project you take?", a: "₹8L floor for a custom-software engagement. Below that, we recommend a SaaS stack instead and route you to peers." },
      { q: "Can you integrate with our existing systems?", a: "Yes — SAP, Oracle, Tally, Salesforce, Zoho, and any modern REST/GraphQL/Webhook stack. We've done it." }
    ],
    related: ["software-development-company-in-chennai", "enterprise-software-development-chennai", "saas-development-company-chennai"]
  },
  {
    slug: "enterprise-software-development-chennai",
    h1: "Enterprise Software Development in Chennai",
    title: "Enterprise Software Development in Chennai | ERP, CRM, Platforms — IGPL",
    description:
      "Enterprise-grade software engineering in Chennai: ERP, CRM, internal tools, and platform engineering. SOC2-ready, audit-grade, and built to scale.",
    eyebrow: "§ Service · Chennai",
    keyword: "enterprise software development Chennai",
    intent: "service",
    hero: {
      lede: "Enterprise software, without the enterprise rot.",
      sub: "We engineer ERP, CRM, and internal-tools platforms for mid-market and enterprise teams across India — without the bloat, the politics, or the 18-month timelines."
    },
    bullets: [
      { t: "ERP & CRM customization", b: "Custom modules on Odoo, ERPNext, and Salesforce; or full custom builds when the standard stack can't bend far enough." },
      { t: "Internal tools at scale", b: "Retool / Tooljet / custom — we pick the right horizon. Most ops dashboards ship in 4–6 weeks, not 6 months." },
      { t: "Compliance-ready", b: "SOC2, ISO 27001, HIPAA, and India DPDP-ready scaffolding. Audit trails, access reviews, encryption-at-rest by default." }
    ],
    outcomes: [
      "First module live in 6 weeks",
      "SSO, RBAC, audit log built-in",
      "Compliance gap report at handover"
    ],
    tech: ["Odoo", "ERPNext", "Salesforce", "Retool", "Tooljet", "Temporal", "Auth0", "Okta"],
    industries: ["Manufacturing", "Healthcare", "Logistics", "Retail", "Education", "BFSI"],
    faqs: [
      { q: "Do you replace SAP / Oracle?", a: "Rarely — we usually wrap them with better UX and integrate around them. Full replacement is a multi-year program; we'll tell you when it's actually worth it." },
      { q: "Can you do procurement too?", a: "Yes — vendor selection, contract negotiation, and migration planning. We're vendor-agnostic and never take referral commission." }
    ],
    related: ["custom-software-development-chennai", "erp-development-company-chennai", "software-development-company-in-chennai"]
  },
  {
    slug: "saas-development-company-chennai",
    h1: "SaaS Development Company in Chennai",
    title: "SaaS Development Company in Chennai | Multi-Tenant Platforms — IGPL",
    description:
      "From wedge to ARR: we engineer production-grade SaaS for Chennai founders and SaaS scale-ups. Multi-tenant, billing-ready, and instrumented from day one.",
    eyebrow: "§ Service · Chennai",
    keyword: "SaaS development company Chennai",
    intent: "service",
    hero: {
      lede: "SaaS engineered to compound.",
      sub: "We've shipped SaaS for logistics, healthcare, and political tech — each one with multi-tenancy, billing, and analytics wired from the first commit. We engineer for ARR, not demos."
    },
    bullets: [
      { t: "Multi-tenant from day one", b: "Row-level security, per-tenant feature flags, and isolation models we can defend in a security review. Not retrofitted later." },
      { t: "Billing & metering", b: "Stripe, Razorpay, or LemonSqueezy; usage-based or seat-based; trial flows, dunning, and revenue recognition that finance won't fight." },
      { t: "Product analytics native", b: "PostHog or Mixpanel embedded with a consistent event schema. Activation, retention, and revenue dashboards your investors can read." }
    ],
    outcomes: [
      "Launchable MVP in 12 weeks",
      "Stripe / Razorpay live",
      "Activation funnel instrumented"
    ],
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Stripe", "Razorpay", "PostHog", "Resend"],
    industries: ["B2B SaaS", "Vertical SaaS", "Fintech", "Healthcare", "Logistics", "PropTech"],
    faqs: [
      { q: "Do you take equity?", a: "Occasionally, for founders with deep domain advantage and a clear wedge. Default is cash. Hybrid deals are case-by-case." },
      { q: "Indian or global SaaS?", a: "We've shipped both. Our default is Indian + global from day one — INR + USD billing, multi-currency, GST + tax-stack ready." }
    ],
    related: ["software-development-company-in-chennai", "nextjs-development-company-chennai", "ai-development-company-chennai"]
  },
  {
    slug: "ecommerce-development-company-chennai",
    h1: "E-commerce Development Company in Chennai",
    title: "E-commerce Development Company in Chennai | Shopify, Custom, Headless — IGPL",
    description:
      "Shopify, Medusa, and custom commerce builds in Chennai. Headless storefronts, conversion-optimized PDPs, and ops automation. From ₹6L to ₹50L+ scale.",
    eyebrow: "§ Service · Chennai",
    keyword: "ecommerce development company Chennai",
    intent: "service",
    hero: {
      lede: "Commerce stacks engineered to convert.",
      sub: "We build Shopify, headless, and fully custom commerce for South India brands competing on quality. Sub-second PDPs, Indian payments stack, and ops automation built in."
    },
    bullets: [
      { t: "Shopify + headless", b: "Shopify Plus with a Next.js headless storefront — best of both worlds. PDP load under 1.2s, mobile-first checkout, GA4 + Meta CAPI wired." },
      { t: "Indian payments", b: "Razorpay, PhonePe, UPI Intent, COD with fraud filters. We've integrated all the rails and know which one your customer base actually uses." },
      { t: "Ops automation", b: "Order routing, returns, NDR (non-delivery reattempts), and WhatsApp post-purchase flows. Customer support load drops 40–60%." }
    ],
    outcomes: [
      "Live store in 6–10 weeks",
      "Sub-1.5s PDP load",
      "Returns + NDR automation"
    ],
    tech: ["Shopify", "Medusa", "Next.js", "Razorpay", "Shiprocket", "Klaviyo", "Gokwik", "Wati"],
    industries: ["D2C", "Fashion", "Beauty", "F&B", "Wellness", "Home"],
    faqs: [
      { q: "Shopify or custom?", a: "Below ₹5Cr GMV: Shopify. Above: headless. Above ₹50Cr: usually custom + Shopify Plus headless." },
      { q: "Do you do paid ads after launch?", a: "Yes — see our digital marketing service. Most clients keep us on retainer for ads + CRO after launch." }
    ],
    related: ["shopify-development-company-chennai", "website-development-company-in-chennai", "digital-marketing-agency-chennai"]
  },
  {
    slug: "ai-development-company-chennai",
    h1: "AI Development Company in Chennai",
    title: "AI Development Company in Chennai | LLM, RAG, Agents — IGPL",
    description:
      "Production AI engineering from Chennai. LLM apps, RAG systems, AI agents, and intelligence pipelines for enterprise, marketing, and political domains.",
    eyebrow: "§ Service · Chennai",
    keyword: "AI development company Chennai",
    intent: "service",
    hero: {
      lede: "AI systems that earn their keep.",
      sub: "We engineer LLM apps, RAG pipelines, and agentic workflows that ship to production — with evals, observability, and a unit economics model. Not demos."
    },
    bullets: [
      { t: "LLM applications", b: "Chat, copilots, and content systems on OpenAI, Anthropic, Mistral, or open-weights. Eval-driven; latency-budgeted; cost-tracked." },
      { t: "RAG done right", b: "Hybrid retrieval (BM25 + vector + reranker), chunking strategies tuned to your corpus, and groundedness evals to keep hallucinations bounded." },
      { t: "Agentic workflows", b: "Tool-using agents on Temporal or LangGraph with replayability and human-in-the-loop guardrails. We don't ship autonomous agents in production without HITL." }
    ],
    outcomes: [
      "Production AI in 8–14 weeks",
      "Eval harness + cost dashboard",
      "PII scrub + prompt safety baked in"
    ],
    tech: ["OpenAI", "Anthropic", "LangChain", "LangGraph", "LlamaIndex", "Pinecone", "Weaviate", "pgvector", "Temporal"],
    industries: ["Healthcare", "Legal", "Education", "Marketing", "Political", "Customer Support"],
    faqs: [
      { q: "Do you fine-tune?", a: "Rarely — prompt engineering + RAG + evals get you 90% of the way. We fine-tune only when latency or cost economics demand it." },
      { q: "How do you handle hallucination?", a: "Grounding via RAG, structured output with schemas, eval suites with golden datasets, and human-in-the-loop for high-stakes domains." }
    ],
    related: ["chatbot-development-company-chennai", "saas-development-company-chennai", "software-development-company-in-chennai"]
  },
  {
    slug: "nextjs-development-company-chennai",
    h1: "Next.js Development Company in Chennai",
    title: "Next.js Development Company in Chennai | App Router, Edge, SSR — IGPL",
    description:
      "Next.js 14 / App Router specialists in Chennai. SSR, edge rendering, server actions, and ISR. We ship production Next.js for SaaS, marketing, and commerce.",
    eyebrow: "§ Tech · Chennai",
    keyword: "Next.js development company Chennai",
    intent: "tech",
    hero: {
      lede: "Next.js, in the right hands.",
      sub: "Next.js is what we ship by default. App Router, RSC, server actions, edge runtime, ISR — we know which knob to turn for SaaS, content, and commerce."
    },
    bullets: [
      { t: "App Router native", b: "We architect for App Router from day one — RSCs, route groups, parallel routes. We don't carry Pages-Router cruft into new builds." },
      { t: "Edge + Node, blended", b: "Static at the edge, dynamic at Node, streaming where it matters. Your TTFB drops; your bill stays sane." },
      { t: "Vercel / self-host", b: "We deploy to Vercel, Cloudflare, or your own AWS / GCP / Hetzner — whichever matches your data residency and cost ceiling." }
    ],
    outcomes: ["Lighthouse 95+", "Sub-200ms TTFB at edge", "Type-safe end-to-end"],
    tech: ["Next.js 14", "React 18 RSC", "tRPC", "Drizzle", "Vercel", "Cloudflare", "Tailwind", "Framer Motion"],
    industries: ["SaaS", "B2B Marketing", "Commerce", "Media", "Education", "Fintech"],
    faqs: [
      { q: "App Router or Pages Router?", a: "App Router for new builds. Pages Router stays for legacy migrations until the cost-benefit flips." },
      { q: "Do you do Remix or Astro?", a: "We've shipped Remix and Astro too, but Next.js is our default for SaaS + commerce. Astro for content-only; Remix when its idioms shine." }
    ],
    related: ["website-development-company-in-chennai", "saas-development-company-chennai", "react-development-company-chennai"]
  },
  {
    slug: "react-native-app-development-chennai",
    h1: "React Native App Development in Chennai",
    title: "React Native App Development in Chennai | iOS + Android — IGPL",
    description:
      "React Native and Expo specialists in Chennai. Cross-platform apps shipped to App Store and Play Store, with native performance where it counts.",
    eyebrow: "§ Tech · Chennai",
    keyword: "React Native app development Chennai",
    intent: "tech",
    hero: {
      lede: "One codebase. Two app stores. Native where it matters.",
      sub: "We ship React Native apps that don't feel like compromises — animations on the native thread, navigation tuned to platform idioms, and OTA updates via EAS."
    },
    bullets: [
      { t: "Expo + EAS workflow", b: "Managed Expo where it fits, bare workflow when we need native modules. EAS Build, EAS Update, and EAS Submit baked into CI from day one." },
      { t: "New Architecture ready", b: "Fabric + TurboModules where the perf budget demands it. We don't carry legacy-bridge cruft into new builds." },
      { t: "Native interop", b: "We drop into Swift / Kotlin without flinching when the use case demands it — camera, BLE, payments, native maps." }
    ],
    outcomes: ["Universal app in 10–14 weeks", "60fps animations", "OTA update pipeline"],
    tech: ["React Native", "Expo", "EAS", "Reanimated", "Tamagui", "TanStack Query", "Sentry", "Detox"],
    industries: ["Healthcare", "Real Estate", "Education", "Retail", "Logistics", "Consumer"],
    faqs: [
      { q: "Why not Flutter?", a: "Both are fine. We pick React Native by default for JS-team-native shops; Flutter when the team is greenfield and design demands its idioms." },
      { q: "Is it really 'native'?", a: "It's native UI with a JS thread orchestrating. For 95% of apps it's indistinguishable. For animation-heavy or hardware-heavy apps, we drop to native." }
    ],
    related: ["mobile-app-development-company-chennai", "ios-app-development-chennai", "android-app-development-chennai"]
  },
  {
    slug: "ios-app-development-chennai",
    h1: "iOS App Development in Chennai",
    title: "iOS App Development in Chennai | Swift, SwiftUI — IGPL",
    description:
      "Native iOS development in Chennai. Swift, SwiftUI, and SwiftData. App Store submission, TestFlight, and post-launch operate by senior iOS engineers.",
    eyebrow: "§ Tech · Chennai",
    keyword: "iOS app development Chennai",
    intent: "tech",
    hero: {
      lede: "iOS apps engineered to Apple's bar.",
      sub: "We build native iOS apps that respect HIG, ship on launch day for new iOS versions, and earn editorial features. Swift, SwiftUI, SwiftData — modern stack, end to end."
    },
    bullets: [
      { t: "SwiftUI first", b: "We default to SwiftUI for iOS 16+ targets; UIKit for legacy iOS 13–15 support. Composition over inheritance; previews wired from day one." },
      { t: "App Store ready", b: "Privacy manifests, App Privacy disclosures, App Tracking Transparency, and review-team friendly metadata. We've shipped 50+ apps through review." },
      { t: "Performance budgeted", b: "Cold start under 1.5s, memory profiled, energy logs reviewed. We treat performance as a first-class deliverable." }
    ],
    outcomes: ["App Store in 10–12 weeks", "Crash-free > 99.7%", "Editorial-feature-ready quality"],
    tech: ["Swift", "SwiftUI", "SwiftData", "Combine", "TestFlight", "Xcode Cloud", "Firebase"],
    industries: ["Healthcare", "Fintech", "Lifestyle", "Productivity", "Education"],
    faqs: [
      { q: "Native or React Native?", a: "If you have one platform target (iOS only) and Apple-grade interaction expectations, go native. Cross-platform first — go React Native." },
      { q: "Do you do iPad / Vision Pro?", a: "Yes — iPad universal apps are standard; Vision Pro is case-by-case (early platform, niche audience)." }
    ],
    related: ["mobile-app-development-company-chennai", "react-native-app-development-chennai", "android-app-development-chennai"]
  },
  {
    slug: "android-app-development-chennai",
    h1: "Android App Development in Chennai",
    title: "Android App Development in Chennai | Kotlin, Jetpack Compose — IGPL",
    description:
      "Native Android app development in Chennai. Kotlin, Jetpack Compose, Material 3. Play Store submission, A/B-tested listings, and post-launch monitoring.",
    eyebrow: "§ Tech · Chennai",
    keyword: "Android app development Chennai",
    intent: "tech",
    hero: {
      lede: "Android apps that win the Indian market.",
      sub: "85% of Tamil Nadu phones are Android. We engineer native Kotlin / Compose apps tuned for low-RAM devices, 3G fallback networks, and Play Store policy."
    },
    bullets: [
      { t: "Kotlin + Compose", b: "Modern Android: Kotlin, Coroutines, Flow, Jetpack Compose, Material 3. We don't ship Java codebases in 2026." },
      { t: "Low-end device tuning", b: "We test on a Redmi 9A and a Samsung A14 — the real Indian baseline. APK size, cold-start, memory pressure all budgeted." },
      { t: "Play Store mastery", b: "Custom Store Listings, Pre-Launch Reports, Vitals dashboards, and A/B-tested icons and screenshots." }
    ],
    outcomes: ["Play Store in 8–12 weeks", "APK < 25MB", "Crash-free > 99.5%"],
    tech: ["Kotlin", "Jetpack Compose", "Coroutines", "Hilt", "Room", "WorkManager", "Firebase", "Crashlytics"],
    industries: ["Retail", "Logistics", "Healthcare", "Education", "Fintech", "Local services"],
    faqs: [
      { q: "Do you support Android 7/8?", a: "Min SDK 24 by default (Android 7), which still covers ~98% of Indian devices. We go lower only on request." },
      { q: "Can you do KaiOS / JioPhone?", a: "Yes — bharat-tier apps are a niche we've shipped. Talk to us about your audience first." }
    ],
    related: ["mobile-app-development-company-chennai", "react-native-app-development-chennai", "ios-app-development-chennai"]
  },
  {
    slug: "ui-ux-design-agency-chennai",
    h1: "UI/UX Design Agency in Chennai",
    title: "UI/UX Design Agency in Chennai | Product, Brand, Motion — IGPL",
    description:
      "Editorial-grade UI/UX design from Chennai. Product design, brand systems, design tokens, motion design. Figma libraries that engineers can ship from.",
    eyebrow: "§ Service · Chennai",
    keyword: "UI/UX design agency Chennai",
    intent: "service",
    hero: {
      lede: "Design that engineers can ship.",
      sub: "We design product, brand, and motion systems that hand off cleanly to code. Tokens, components, and motion specs — built in Figma, mirrored in Tailwind."
    },
    bullets: [
      { t: "Design tokens", b: "Color, type, spacing, radius, shadow — all tokenized in Figma Variables and mirrored to your Tailwind / CSS-vars. One source of truth." },
      { t: "Component libraries", b: "Living libraries in Figma + Storybook, with accessibility, states, and dark-mode pairings spec'd. Engineers don't guess." },
      { t: "Motion specs", b: "Animation durations, easings, and stagger choreography spec'd to the millisecond. Powered by Framer Motion / Reanimated on the build side." }
    ],
    outcomes: ["Design system in 4–6 weeks", "Figma + Storybook in sync", "Engineering-ready handoff"],
    tech: ["Figma", "Figma Variables", "Storybook", "Tailwind", "Framer Motion", "Reanimated"],
    industries: ["SaaS", "Fintech", "Healthcare", "D2C", "Education", "Media"],
    faqs: [
      { q: "Do you do brand identity?", a: "Yes — logos, wordmarks, brand guidelines, and motion. Often paired with a product design engagement." },
      { q: "Can you redesign without rebuilding?", a: "Sometimes — if your CSS is tokenized. More often, redesign + rebuild compound: the underlying code needed the refactor anyway." }
    ],
    related: ["website-development-company-in-chennai", "nextjs-development-company-chennai", "saas-development-company-chennai"]
  },
  {
    slug: "google-ads-agency-chennai",
    h1: "Google Ads Agency in Chennai",
    title: "Google Ads Agency in Chennai | Search, Pmax, YouTube — IGPL",
    description:
      "Google Ads management for Chennai businesses. Search, Performance Max, YouTube, and demand-gen — engineered with bid automation and attribution.",
    eyebrow: "§ Service · Chennai",
    keyword: "Google Ads agency Chennai",
    intent: "service",
    hero: {
      lede: "Google Ads, run by engineers.",
      sub: "We don't just manage ads — we engineer the system around them. Bid automation, creative rotation, server-side conversion uploads, and attribution that holds up to scrutiny."
    },
    bullets: [
      { t: "Search + Pmax + YT", b: "We run the full Google stack — Search for high-intent, Pmax for scale, YouTube for awareness, Demand Gen for warm audiences." },
      { t: "Offline conversion uploads", b: "We pipe CRM-verified pipeline events back to Google Ads via OCT. Bidding gets smarter; ROAS gets honest." },
      { t: "Creative rotation", b: "Programmatic creative testing — image, headline, description — with statistical significance, not vibes." }
    ],
    outcomes: ["CPL down 30–50% in 90 days", "Pipeline-attributed ROAS", "Server-side conversion pipeline"],
    tech: ["Google Ads API", "GA4", "Server-side GTM", "Looker Studio", "BigQuery", "Optimizely"],
    industries: ["B2B SaaS", "D2C", "Healthcare", "Education", "Real estate", "Local services"],
    faqs: [
      { q: "Minimum ad spend?", a: "₹3L/month media spend to make our involvement economic. Below that, we hand you a playbook and check in monthly." },
      { q: "Pmax — is it a black box?", a: "Less than it was. We feed it audience signals, creative pools, and offline conversions. It's still less transparent than Search, but no longer opaque." }
    ],
    related: ["digital-marketing-agency-chennai", "seo-services-chennai", "meta-ads-agency-chennai"]
  },
  {
    slug: "whatsapp-business-api-chennai",
    h1: "WhatsApp Business API Integration in Chennai",
    title: "WhatsApp Business API in Chennai | WABA, Chatbots, CRM — IGPL",
    description:
      "WhatsApp Business API setup, chatbots, and CRM integration in Chennai. Cloud API, template approvals, click-to-WhatsApp ads, and post-purchase automation.",
    eyebrow: "§ Service · Chennai",
    keyword: "WhatsApp Business API Chennai",
    intent: "service",
    hero: {
      lede: "WhatsApp, engineered into your stack.",
      sub: "We integrate Cloud API into your CRM, payment stack, and helpdesk. Click-to-WhatsApp ads, chatbots with handoff, and post-purchase flows that lift LTV by 20–40%."
    },
    bullets: [
      { t: "Cloud API + WABA setup", b: "Meta-verified business, green-tick application, message template approvals, and shared inbox via Wati / Interakt / custom." },
      { t: "Chatbot with handoff", b: "Deterministic bot for FAQ and order status; LLM fallback for nuance; human handoff with full context. Not a wall of buttons." },
      { t: "Click-to-WhatsApp ads", b: "Meta CTW campaigns wired into your CRM. Lead → bot → human → revenue, all attributed." }
    ],
    outcomes: ["WABA live in 2–3 weeks", "Green-tick where eligible", "First-touch to handoff in seconds"],
    tech: ["WhatsApp Cloud API", "Wati", "Interakt", "Gupshup", "Twilio", "n8n", "Make"],
    industries: ["D2C", "Real estate", "Education", "Healthcare", "Local services", "B2B SaaS"],
    faqs: [
      { q: "How long for green tick?", a: "1–4 weeks after WABA verification, subject to Meta's discretion. We pre-flight your business assets to maximize approval odds." },
      { q: "Wati or custom?", a: "Wati / Interakt for < 50K msgs/month; custom on Cloud API above that. We've built both." }
    ],
    related: ["chatbot-development-company-chennai", "digital-marketing-agency-chennai", "ai-development-company-chennai"]
  },
  {
    slug: "chatbot-development-company-chennai",
    h1: "Chatbot Development Company in Chennai",
    title: "Chatbot Development Company in Chennai | LLM, Voice, WhatsApp — IGPL",
    description:
      "LLM-powered chatbots, voice agents, and WhatsApp automations engineered in Chennai. Grounded, evaluated, and integrated with your business systems.",
    eyebrow: "§ Service · Chennai",
    keyword: "chatbot development company Chennai",
    intent: "service",
    hero: {
      lede: "Chatbots that close the loop.",
      sub: "We engineer LLM chatbots that don't just talk — they retrieve, transact, and hand off. WhatsApp, web, voice, and in-app. Grounded by RAG, measured by evals."
    },
    bullets: [
      { t: "RAG-grounded answers", b: "Hybrid retrieval over your knowledge base + product catalog. Citations on every answer; hallucination rate measured weekly." },
      { t: "Tool use + handoff", b: "Bots that book, refund, escalate, and write to your CRM — not just suggest links. Human handoff with full transcript and intent summary." },
      { t: "Multi-channel", b: "One brain, multiple surfaces — WhatsApp, web widget, voice (Twilio / Vapi), in-app. Conversation memory shared across channels." }
    ],
    outcomes: ["Deflection 50–70% on tier-1", "CSAT held or improved", "Eval harness + safety filters"],
    tech: ["OpenAI", "Anthropic", "LangGraph", "Pinecone", "pgvector", "Twilio", "Vapi", "Wati"],
    industries: ["E-commerce", "SaaS", "Education", "Healthcare", "BFSI", "Travel"],
    faqs: [
      { q: "Will it hallucinate?", a: "Less than a junior support agent if we engineer it right — RAG, structured output, eval suites, and refusal patterns for out-of-scope queries." },
      { q: "Voice or text?", a: "Both. Text first for cost; voice when your audience prefers it (older demographics, accessibility, hands-busy contexts)." }
    ],
    related: ["ai-development-company-chennai", "whatsapp-business-api-chennai", "saas-development-company-chennai"]
  },
  {
    slug: "shopify-development-company-chennai",
    h1: "Shopify Development Company in Chennai",
    title: "Shopify Development Company in Chennai | Plus, Headless, Theme — IGPL",
    description:
      "Shopify Plus, headless storefronts, and custom theme development from Chennai. Hydrogen, Liquid, and the full Shopify app ecosystem for Indian D2C.",
    eyebrow: "§ Tech · Chennai",
    keyword: "Shopify development company Chennai",
    intent: "tech",
    hero: {
      lede: "Shopify, engineered for Indian D2C.",
      sub: "We've shipped Shopify for fashion, F&B, beauty, and wellness brands across South India. Theme, Plus, or headless on Hydrogen — we pick what your scale earns."
    },
    bullets: [
      { t: "Custom theme dev", b: "OS 2.0 themes, section-everywhere architecture, performance-first markup. PageSpeed > 80 mobile is our floor." },
      { t: "Shopify Plus", b: "Scripts, Functions, Flow, B2B, and Markets — we deploy the Plus stack you actually pay for, not just the badge." },
      { t: "Headless on Hydrogen", b: "Next.js or Hydrogen storefronts when sub-second PDPs matter more than checkout customization. Best-of-both via Shopify Checkout." }
    ],
    outcomes: ["Live store in 5–8 weeks", "Mobile PSI > 80", "Indian payments + logistics wired"],
    tech: ["Shopify", "Shopify Plus", "Liquid", "Hydrogen", "Next.js", "Razorpay", "Gokwik", "Shiprocket", "Klaviyo"],
    industries: ["Fashion", "Beauty", "F&B", "Wellness", "Home", "Accessories"],
    faqs: [
      { q: "Shopify or WooCommerce?", a: "Shopify for almost everyone. WooCommerce only when you have an existing WP team and < ₹2Cr GMV." },
      { q: "Do you do migrations?", a: "Yes — WooCommerce, Magento, custom — to Shopify. We've done 30+ migrations with zero data loss." }
    ],
    related: ["ecommerce-development-company-chennai", "website-development-company-in-chennai", "digital-marketing-agency-chennai"]
  },
  {
    slug: "political-campaign-tech-chennai",
    h1: "Political Campaign Tech Services in Chennai",
    title: "Political Campaign Technology in Chennai | Voter Outreach, Analytics — IGPL",
    description:
      "Political campaign technology engineered from Chennai for Tamil Nadu and pan-India campaigns. Voter CRM, booth-level analytics, WhatsApp outreach, AI content pipelines.",
    eyebrow: "§ Industry · Chennai",
    keyword: "political campaign tech Chennai",
    intent: "industry",
    hero: {
      lede: "Campaigns run as systems.",
      sub: "We engineer the technology behind political campaigns — voter CRMs, booth-level analytics, WhatsApp outreach at scale, and AI content pipelines. Built by a team that has shipped through three election cycles."
    },
    bullets: [
      { t: "Voter CRM + booth analytics", b: "Constituency, booth, and household-level data models with map overlays. ClickHouse + Mapbox; query 10M rows in < 200ms." },
      { t: "WhatsApp outreach", b: "Compliant Cloud API outreach with template approval discipline, opt-out hygiene, and per-AC volume budgeting." },
      { t: "AI content pipelines", b: "Multilingual generative content — Tamil, English, Hindi, Telugu — with human-in-the-loop review. Built for cycle-time, not vanity." }
    ],
    outcomes: ["Voter CRM live pre-cycle", "AC-level dashboard", "Compliant outreach at scale"],
    tech: ["Next.js", "ClickHouse", "Mapbox", "WhatsApp Cloud API", "OpenAI", "Anthropic", "Temporal"],
    industries: ["Political campaigns", "Government affairs", "Advocacy", "Public interest"],
    faqs: [
      { q: "Do you work with any party?", a: "We work with credible candidates and parties of any affiliation that operate within the law. We do not engage in disinformation work — ever." },
      { q: "Tamil Nadu only?", a: "TN is home base; we've supported campaigns across South India and have shipped pan-India platforms too." }
    ],
    related: ["software-development-company-in-chennai", "ai-development-company-chennai", "whatsapp-business-api-chennai"]
  }
];

export const PAGES_BY_SLUG: Record<string, SeoPage> = Object.fromEntries(
  PAGES.map((p) => [p.slug, p])
);

export const ALL_SLUGS = PAGES.map((p) => p.slug);
