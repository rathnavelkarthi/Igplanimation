# IGPL Growth Playbook — Ranking #1 in Chennai & Tamil Nadu

This is the operating manual for taking IGPL from a new domain to the #1 Google result for software / website / app / digital-marketing searches in Chennai and Tamil Nadu, and converting that traffic into paying clients.

It is sequenced by **dependency**, not by month. Do the earlier steps before the later ones; many can run in parallel.

---

## 0. The 20 SEO landing pages (already shipped in this repo)

We just built a dynamic route at `/services/[slug]` powered by `lib/seo-pages.ts`. The 20 slugs map to the highest-intent commercial queries Chennai agencies actively compete for, as researched from the live competitive set (KP Webtech, Sanishsoft, FuelDigi, Techmagnate, Website Dokan, Weboin, Maksan, Gofillip).

The 20 slugs (live at `https://internationalgarudas.com/services/<slug>`):

1. `software-development-company-in-chennai`
2. `website-development-company-in-chennai`
3. `mobile-app-development-company-chennai`
4. `digital-marketing-agency-chennai`
5. `seo-services-chennai`
6. `custom-software-development-chennai`
7. `enterprise-software-development-chennai`
8. `saas-development-company-chennai`
9. `ecommerce-development-company-chennai`
10. `ai-development-company-chennai`
11. `nextjs-development-company-chennai`
12. `react-native-app-development-chennai`
13. `ios-app-development-chennai`
14. `android-app-development-chennai`
15. `ui-ux-design-agency-chennai`
16. `google-ads-agency-chennai`
17. `whatsapp-business-api-chennai`
18. `chatbot-development-company-chennai`
19. `shopify-development-company-chennai`
20. `political-campaign-tech-chennai`

Each page ships with: unique H1, meta title + description, canonical, Open Graph, LocalBusiness + Service + FAQPage + BreadcrumbList JSON-LD, internal links to related pages, and a CTA pointing to `igpl@internnationalgradus.com` + WhatsApp `+91 78712 41179`.

---

## 1. Pre-flight (Day 0–7)

These are non-negotiable. None of the SEO work compounds without them.

### 1.1 Domain & hosting
- Decide canonical domain. Pick one: `internationalgarudas.com` OR `internnationalgarudas.com`. **You cannot rank with two.** Recommend `internationalgarudas.com` (correctly spelled) and 301-redirect the misspelling.
- DNS on Cloudflare. Hosting on Vercel (recommended) or Cloudflare Pages. HTTPS enforced, HSTS on.
- Update `SITE` constants in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `app/services/[slug]/page.tsx` once you pick the final domain.

### 1.2 Google Search Console + Bing Webmaster Tools
- Verify property in GSC (use the DNS TXT method). Replace `REPLACE_WITH_GSC_TOKEN` in `app/layout.tsx` with the real verification meta token if you go that route instead.
- Submit `https://yourdomain.com/sitemap.xml` to GSC.
- Same for Bing Webmaster Tools (low effort, ~5% of India traffic).

### 1.3 Google Analytics 4 + Server-side GTM
- Create a GA4 property. Wire it via `next/script` with `strategy="afterInteractive"`.
- Set up server-side GTM on a subdomain (`sgtm.yourdomain.com`) — this stops iOS ITP from breaking attribution and gives you a clean Conversions API path to Meta.

### 1.4 Google Business Profile (GBP) — this is the single highest-leverage move
- Claim your GBP for "International Garudas Pvt Ltd" at your Chennai address.
- Fill **every** field: category = "Software company" + secondary "Marketing agency", "Website designer", "Mobile app developer". Description with target keywords. Service area = Chennai + Tamil Nadu. Add all 20 services as Service entries.
- Upload 25+ photos: studio, team, whiteboard sessions, founder portraits, code-on-screen.
- Add posts weekly (case study highlights, tech announcements).
- Reviews: ask every shipped client for one. Target 25 reviews in 90 days. Reply to every one.

### 1.5 Local citations (NAP consistency)
Submit identical Name / Address / Phone to:
- JustDial, IndiaMART, Sulekha, Yellow Pages India, Asklaila
- Clutch.co, GoodFirms, DesignRush, Sortlist, 10Seos
- LinkedIn Company Page (fully filled out), Crunchbase, Glassdoor
- Local Chennai directories (NASSCOM Chennai, TiE Chennai, Madras Chamber)

Use one canonical NAP format: `International Garudas Pvt Ltd · [Street], [Area], Chennai, Tamil Nadu 600XXX · +91 78712 41179`. Mismatched NAP is the #1 killer of local rankings.

---

## 2. On-page SEO (Day 7–21)

### 2.1 What's already correct (shipped in this repo)
- ✅ Per-page meta title + description + canonical
- ✅ JSON-LD: Organization (root), LocalBusiness + Service + FAQPage + BreadcrumbList (each service page)
- ✅ `sitemap.xml` auto-generated from the data file
- ✅ `robots.txt` allows everything, points to sitemap
- ✅ Internal linking via `related` arrays
- ✅ Mobile-first responsive
- ✅ Schema.org structured data

### 2.2 What still needs to be done
- Add a real `og.jpg` (1200×630) at `/public/og.jpg` — design once, used everywhere.
- Add a real favicon set (`favicon.ico`, `apple-touch-icon.png`, `icon.svg`).
- Replace `REPLACE_WITH_GSC_TOKEN` with the real GSC verification token.
- Add `hreflang="en-IN"` and consider a Tamil (`ta-IN`) variant of the top 5 pages later in 2026 — Tamil-language search is underserved by competitors.
- Compress `public/founders/siddharthan.jpeg` — it is currently **1.78MB**, which will tank your LCP. Target 150–250KB at 1200px wide. Use `sharp` or Squoosh.
- Convert all `.jpeg` portraits to `.webp` and add explicit `width`/`height` to prevent CLS.

### 2.3 Core Web Vitals targets
- **LCP** < 2.5s — your fixed background gradients are fine; the founder image is the bottleneck.
- **CLS** < 0.1 — every `<Image>` must have explicit dimensions or `fill` with a parent that reserves space.
- **INP** < 200ms — Framer Motion is fine; avoid blocking work in `useEffect`.

Run `npm run build && npm start`, then run PageSpeed Insights against every service page. Goal: 90+ mobile.

---

## 3. Content (Day 14 → ongoing)

Rankings come from topical authority. Twenty service pages are the seed; you need content around them.

### 3.1 Pillar-and-cluster
Each service page is a **pillar**. Around each, publish 3–6 **cluster** articles (1500–2500 words each) targeting long-tail queries:

Pillar: `/services/saas-development-company-chennai`
→ Cluster: `/insights/multi-tenant-saas-architecture-postgres`
→ Cluster: `/insights/stripe-vs-razorpay-saas-india`
→ Cluster: `/insights/saas-pricing-india-vs-global`
→ Cluster: `/insights/cost-to-build-saas-chennai-2026`

Each cluster article internal-links to the pillar with the **exact keyword anchor**. Each pillar links to the clusters. This is the Google-friendly version of a topical mesh.

### 3.2 Publishing cadence
- **Weeks 1–4**: 2 cluster articles per week (8 articles).
- **Months 2–6**: 1 cluster article per week (24 articles).
- **Month 6 onward**: 1 long-form case study per fortnight + 1 cluster article per week.

By month 12 you have 60+ indexed pages. That is the threshold for "agency that comes up everywhere on Google" perception.

### 3.3 Case studies
Each shipped project deserves a dedicated case study at `/work/<client-slug>`. Include: problem, architecture diagram, stack, screenshots, quotes, measurable results, timeline. These rank for "[client industry] software case study Chennai" and convert at 3–5× the rate of service pages.

### 3.4 The content factory
Don't try to write this yourself. Hire one senior editor (₹60–90K/month, Chennai or remote) and a stable of 3 freelance subject-matter writers (₹3–6/word). Editor briefs, writers draft, editor edits, you approve. Process documented in Notion. Output: 4–8 pieces per month for the next 18 months.

---

## 4. Off-page SEO / link building (Month 1 → ongoing)

### 4.1 Earn links, don't buy them
- **Digital PR**: package a story (e.g., "We surveyed 50 Chennai CTOs on AI adoption") and pitch it to Inc42, YourStory, The Hindu Business Line, BW BusinessWorld. One placement = 20+ secondary pickups.
- **Podcasts**: get the founders on 1–2 podcasts per month (TiE Chennai, NASSCOM, Maed in India, The Seen and the Unseen). Each placement = a backlink + a credibility signal + 50–200 visits.
- **Open-source**: release a useful library on GitHub (`@igpl/anything`) — even small ones earn dev backlinks.
- **Guest posts**: target Smashing Magazine, CSS-Tricks, Dev.to, LogRocket, Medium publications. One guest post per month.

### 4.2 Local backlinks
- Sponsor or speak at JS Chennai, ChennaiPy, Chennai Startups, Madras Coders, FOSSConf.
- Get listed on NASSCOM, IAMAI, TiE Chennai member directories.
- Partner with co-working spaces (WeWork, IndiQube) for case studies.

### 4.3 Brand mentions → links
Set up Google Alerts for "International Garudas" and "IGPL". When someone mentions you without linking, email them a polite "would you mind linking to us?". Conversion rate ~30%.

---

## 5. Paid acquisition (Month 1 → ongoing)

SEO is a 6-month compounding bet. Paid is the bridge that keeps the pipeline alive in the meantime.

### 5.1 Google Ads — Search
Start with **branded** + **3 hand-curated commercial campaigns**:
1. "Software development Chennai" cluster (exact + phrase match, ₹40–80 CPC).
2. "Mobile app development Chennai" cluster.
3. "Digital marketing agency Chennai" cluster.

Each ad group has 3 RSAs pointing to its matching `/services/<slug>` page (we built dedicated pages so the message-match is perfect — this lifts Quality Score and drops CPC by 20–40%).

Budget floor: ₹2–3L/month media + ₹40K/month management. Below that, Google Ads does not have enough signal to optimize.

### 5.2 Google Ads — Performance Max
Once you have 30+ conversions/month from Search, layer in Pmax with:
- Asset groups by theme (software, app, marketing).
- Audience signals from your CRM (lookalikes of closed-won).
- Feed your closed pipeline back via Offline Conversion Imports — this is the single biggest unlock for Pmax ROAS.

### 5.3 LinkedIn Ads
For enterprise lead-gen — ₹50K–1L test. Target: CTOs / VPs of Engineering / Heads of Digital in Chennai + Tamil Nadu, company size 50–500. Lead-gen forms with a "Free Architecture Review" offer convert ~5–8%.

### 5.4 Meta Ads
For SMB / D2C client acquisition — click-to-WhatsApp campaigns work very well in this market. ₹500–1500 CPL is achievable.

---

## 6. Conversion-rate optimization (Month 2 → ongoing)

Traffic without conversions is vanity. The site we just built has these CRO levers ready:

### 6.1 What's wired
- ✅ Sticky `Nav` with "Start a project" CTA always one click away
- ✅ Mailto deep links pre-fill subject lines based on page context
- ✅ WhatsApp click-to-chat on every service page
- ✅ Two phone numbers, both `tel:` linked
- ✅ FAQ schema → SERP "People Also Ask" expansion

### 6.2 What to add
- **Lead capture form** on every service page (name, email, phone, project budget, 1-line brief). Pipe to your CRM (HubSpot Free, or Pipedrive). Auto-acknowledge in 60 seconds.
- **Calendly / Cal.com embed** for "Book a 20-min architecture call." Removes the email back-and-forth.
- **Live chat** with handoff — wire your own chatbot (`/services/chatbot-development-company-chennai` is literally the page) as the dogfood demo.
- **Exit-intent modal** with a downloadable asset (e.g., "Chennai Software Cost Guide 2026"). Captures 4–8% of bouncers.
- **Trust strip**: client logos, "Founded 20XX · 60+ projects shipped · Chennai HQ" near the top of every page.

### 6.3 A/B test loop
Run one test per week. Tools: Vercel A/B (if hosted there), or PostHog feature flags. Don't test until you have 100+ sessions/week per page.

---

## 7. Analytics & dashboards (Day 7 → ongoing)

You can't optimize what you can't see. Set up these dashboards in Looker Studio (free):

1. **Acquisition**: sessions / users / signups by channel (organic, paid, direct, social, referral) — weekly.
2. **Ranking**: position for the 20 target keywords in Chennai + Tamil Nadu — weekly (use Ahrefs or Semrush, ₹8–15K/month).
3. **Pipeline**: leads → qualified → proposal → closed-won, by source — monthly.
4. **Ad efficiency**: CPL, ROAS, conversion rate, by campaign — weekly.
5. **Core Web Vitals**: real-user LCP/CLS/INP, by page — weekly.

Review every Monday morning, 30 minutes. Adjust budget allocation, kill underperformers, double down on what compounds.

---

## 8. Lead → client conversion (the part most agencies neglect)

A #1 ranking is worth nothing if you can't close. Tighten the bottom of the funnel:

### 8.1 First-touch
- New lead acknowledged within 5 minutes (auto-email + WhatsApp).
- Discovery call within 24 hours. Calendly cuts coordination time.
- One senior person on every discovery call. No SDRs, no "let me get an engineer on the next call."

### 8.2 Proposal
- Fixed-price discovery proposal sent within 48 hours of first call.
- One-page summary + Notion doc with detailed scope. PDF on request.
- Pricing transparent: discovery is always fixed-price; build is milestone-based with a rate card.

### 8.3 Trust
- Client list visible on the site (with permission). Logos > testimonials > case studies.
- Founders' LinkedIn profiles publicly active — 1–2 posts per week, founders, not ghost-written.
- A "We don't take on more than 4 new projects per quarter" line — scarcity sells.

---

## 9. The 90-day, 6-month, 12-month picture

### 90 days
- 20 service pages indexed
- 30+ cluster articles indexed
- GBP fully optimized, 15+ reviews
- Top-3 local pack for 5 of the 20 keywords
- ₹3L/month paid spend running, ₹1.5–2.5K CPL
- 8–15 qualified leads/month, 2–4 closed

### 6 months
- 60+ pages indexed
- Top-3 local pack for 12 of the 20 keywords
- Top-10 organic for 8 of the 20 keywords (national)
- 30+ GBP reviews
- 30–50 qualified leads/month, 6–10 closed

### 12 months
- 100+ pages indexed
- Top-3 organic for 15 of the 20 keywords in Chennai
- 50–100 qualified leads/month, 10–20 closed
- Branded search volume up 3–5×

---

## 10. Budget summary (annual, INR)

| Line item | Year 1 |
|---|---|
| Senior content editor (1 FTE) | ₹9–12L |
| Freelance writers (4–8 pieces/mo) | ₹3–5L |
| SEO tooling (Ahrefs OR Semrush) | ₹1.5L |
| Google Ads media | ₹36L (₹3L/mo) |
| LinkedIn Ads media | ₹6L |
| Meta Ads media | ₹6L |
| Ad management (in-house or partner) | ₹6L |
| Digital PR retainer | ₹6L |
| Misc (analytics, ABM tools, design) | ₹3L |
| **Total** | **₹76–84L** |

Conservative target: 100 closed clients × ₹8L average contract = ₹8 Cr revenue. ROI: 9–10×. Reasonable agency benchmarks; achievable if execution is disciplined.

---

## 11. What to NOT do

- Don't buy backlinks from Fiverr / cheap link farms — Google's spam systems will tank you.
- Don't keyword-stuff. The 20 pages are written to read like editorial, not SEO mush.
- Don't run 50 ad campaigns — run 3, optimize ruthlessly.
- Don't AI-generate articles raw. AI-assisted, editor-reviewed is fine; raw is detectable and penalized.
- Don't ignore GBP. It's 30–40% of the total traffic in this market.
- Don't fight the bigger competitors on their best keywords first — win the long-tail (e.g., `Next.js development company Chennai`, `WhatsApp Business API Chennai`) before challenging `software development company in Chennai`.

---

## Owners & cadence

| Activity | Owner | Cadence |
|---|---|---|
| Weekly content publishing | Editor | Weekly |
| Backlink outreach | Founder + PR partner | Weekly |
| GBP posts + review replies | Ops | 2× weekly |
| Ad optimization | Marketing lead | Weekly |
| Looker Studio review | Founder | Weekly (Monday AM) |
| New service page | Marketing lead | 1 per month |
| Case study publication | Engineering lead | 1 per month |
| Founder LinkedIn post | Each founder | 1–2 per week |
| Podcast appearance | Founders | 1–2 per month |
