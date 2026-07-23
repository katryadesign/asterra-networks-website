# Research (Compressed) — Asterra Networks

Decision-grade condensation of [`research.md`](./research.md). **No facts, scores, links,
or screenshots removed** — only repetition, filler, and cross-section duplication trimmed;
trivia (phone numbers, PDF byte sizes, office counts) dropped. Full screenshot index,
method, limitations, and verbatim quotes are in the [Appendix](#appendix). Every fact keeps
its source URL or screenshot. Unverified items stay marked **(hypothesis)** / *access
restricted*.

---

## 1. COMPETITORS

Three groups (max 5 each) to inform IA, content model, visual direction. Product context:
[`../CLAUDE.md`](../CLAUDE.md).

### 1.1 Group rationale

**HARD — same product, same audience, our market** (portfolio, connectivity, cyber, industries, support, contact):

| Company | Why here | What to study |
|---|---|---|
| **Marlink** | Closest analog: satcom + managed services + cyber + "smart" digital for maritime/enterprise/energy/humanitarian | Broad portfolio in a Solutions × Industries structure; managed-services framing; coverage/reliability proof |
| **Navarino** | Maritime connectivity + business apps + cyber, support-led | Plain-language product explanation; support-centric messaging; lean IA |
| **NSSLGlobal** | Independent maritime & government satcom + cyber | Mid-size connectivity+cyber structure for maritime/government; contact flow |
| **IEC Telecom** | Maritime & remote satcom managed services (OneGate) + cyber; maritime/government/NGO/energy | "Single-gateway" storytelling; digital/cyber add-ons; industry breadth; support |
| **Speedcast** | Global remote comms + managed IT + cyber across maritime/energy/cruise/gov/enterprise | Industry-led segmentation of one stack; network/coverage storytelling; uptime/SLA proof |

**SOFT — different product, same base task** (IA, mega-menu, industry segmentation, explaining technical services):

| Company | Why here | What to study |
|---|---|---|
| **Cisco** | Huge connectivity/security/collaboration catalog | Multi-axis navigation of a giant (product/solution/industry); solution hubs; "Contact sales" routing |
| **IBM** | Enterprise breadth (AI/cloud/security/consulting), mature Solutions × Industries IA | Solution×industry hubs; Resource Center/Insights; enterprise credibility |
| **Schneider Electric** | Industrial tech + digital + services (energy/industry/buildings) | Industry-led segmentation for infrastructure; hardware+digital+services bundling; reliability proof |
| **Siemens** | Industrial conglomerate, best-in-class mega-menu | Mega-menu architecture; industry-led IA; presenting technical portfolios |
| **Honeywell** | Aerospace + building + industrial + connectivity | Industry segmentation across very different sectors; explaining services |

**ASPIRATIONAL — international benchmarks** (composition, typography, storytelling, modularity, trust blocks, complex-made-simple):

| Company | Why here | What to study |
|---|---|---|
| **Stripe** | Gold standard for B2B-tech clarity + docs/resources | Complex made simple; resource/content structure; conversion clarity |
| **Palantir** | Dark, mission-critical tone for defense/enterprise | Gravitas for government/defense/critical-infra; serious-but-modern tone; data/impact storytelling |
| **Vercel** | Closest to our direction: editorial-tech, dark-first, bento | Dark editorial system; typographic hierarchy; restrained-vs-expressive motion |
| **NVIDIA** | Makes hyper-complex tech understandable + industry solutions | Complex-made-simple; industry-solution pages; depth-vs-trust balance; modular composition |
| **Cloudflare** | Network products + global-network visualization (on-theme) | Global network/coverage storytelling; "by need" taxonomy; technical value-prop clarity |

**Side-references (beyond the fives):** Inmarsat Maritime (Viasat) → **Safety & Compliance** pillar + "authority" tone; Palo Alto Networks / CrowdStrike → **Cybersecurity** pillar (complex platform → 3–4 pillars → inquiry); Linear *(optional)* → craft/micro-interactions.

**Notes:** SOFT's Schneider+Siemens+Honeywell are conglomerates with far larger catalogs — deep-dive one (Siemens, best mega-menu), skim the rest. Cloudflare/Palo Alto could sit in multiple groups (placed by primary value). Starlink Maritime excluded from HARD — site thin on "solution catalog."

### 1.2 HARD comparative table

| Axis | Marlink | Navarino | NSSLGlobal | IEC Telecom | Speedcast |
|---|---|---|---|---|---|
| **Audience** | Remote/maritime asset operators; industries Shipping/Cruise/Energy/Enterprise & Telco/Gov & Defence/Humanitarian ([home](https://marlink.com/)) | Maritime only — merchant fleets ("1 in 3 ocean-going merchant vessels") ([screen](./screens/hard/navarino-home-hero.png)) | Maritime / Defence & Government / Enterprise / Critical Rescue & Infrastructure ([maritime](https://nsslglobal.com/markets/maritime/)) | Land (Government/Humanitarian/Energy-Onshore/Enterprise/Media) + Maritime (Fishing/Energy-Offshore/Shipping/Superyachts) ([home](https://www.iec-telecom.com)) | 12 industries; Maritime/Energy/Government priority ([home](https://www.speedcast.com), [contact](https://www.speedcast.com/contact/)) |
| **Positioning** | "…dependable network and digital solutions…Possibilities, Anywhere"; "Possibility Platform" ([screen](./screens/hard/marlink-home-hero.png)) | "The Leading Maritime Technology Partner" ([screen](./screens/hard/navarino-home-hero.png)) | Rotating "Bringing Choice with Secure Solutions"/"Sea·Land·Air"; "brand agnostic" independence ([home](https://nsslglobal.com/), [about](https://nsslglobal.com/about/)) | "DIGITALISATION ENABLED BY SATELLITE NETWORK MANAGEMENT…" ([screen](./screens/hard/iec-telecom-home-hero.png)) | "Your Satellite Communications Starts Here" ([screen](./screens/hard/speedcast-home-hero.png)) |
| **Solutions/Industries** | "Possibility Portfolio" — 5 categories (Connectivity, Cybersecurity, Network, Cloud & IT, IIoT & Apps); cyber page = 18 named offerings ([solutions](./screens/hard/marlink-solutions-overview.png), [cyber](./screens/hard/marlink-cybersecurity.png)) | Product-category only (Technology/Connectivity/COSMO/Bridge & Navigation); **no industries axis** ([screen](./screens/hard/navarino-solutions-technology.png)) | 3 parallel trees (Solutions 15 / Communications / Markets 4) — same offerings repeat ([screen](./screens/hard/nsslglobal-solutions-overview.png)) | Vertical markets × Value-Added Services (OptiView/OptiSim/OptiShield/OneMail Pro/OneAssist/OneMonitor/OneHealth/Traksat) × catalog ([maritime](https://iec-telecom.com/en/markets/maritime/)) | Solutions axis (Starlink/OneWeb/Connectivity/Network Mgmt/Applications/Systems Integration/Professional Services/IoT/Cloud) × Industries ([screen](./screens/hard/speedcast-solutions-filter.png)) |
| **Nav & discovery** | Single mega-menu, 3 axes (Portfolio/Industry/Services); site search; **no finder** ([home](https://marlink.com/)) | Single-axis; **no search/filters/finder** ([home](https://navarino.co.uk/), [KOTA](https://kota.co.uk/work/navarino)) | 3 axes + market sub-hubs; header search ([maritime](https://nsslglobal.com/markets/maritime/)) | **Only true faceted finder in group** — Application/Set-up (COTP·COTM·Portable)/Service/Type/Operator(8)/Market(9)/Speed(6)/Coverage(10) ([screen](./screens/hard/iec-telecom-solution-finder.png)) | Dual-axis + "Select a product" filter band + search ([screen](./screens/hard/speedcast-solutions-filter.png)) |
| **CTAs & contact** | "Discover What's Possible"; "Book a consultancy"/"Call a specialist"; **single routed form** ("How can we help you?" + Solution of Interest + Sector/Industry) ([screen](./screens/hard/marlink-contact-form.png)) | Uniform "Get in touch" → **office directory, no form**; sales-vs-support via emails ([screen](./screens/hard/navarino-contact-directory.png)) | Uniform "Find out more"; minimal form (Name/Phone/Email/Message), no routing ([screen](./screens/hard/nsslglobal-contact-form.png)) | "Lets talk" (sic) → form w/ Interest dropdown (10 sectors); same form on most pages; "Submit a Ticket" → external portal ([screen](./screens/hard/iec-telecom-contact-form.png)) | "Get in Touch" → /sign-up/ (mismatch); "Request a Demo"; contact = **phone/email directory, no form** ([screen](./screens/hard/speedcast-contact-directory.png)) |
| **Trust** | "1,700+ specialists", "15k+ vessels", "99.9% uptime SLA", "24.7% market share" (Valour 2025); logos CMA CGM/MSC/MOL/NYK; ISO 27001/9001/14001, IACS UR E26/E27, NIS2, IEC 62443 ([screen](./screens/hard/marlink-industry-shipping.png), [cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/)) | "13,000+ vessels", "650+ clients", "25+ years", "1 in 3"; type approvals "UR E27" (Bureau Veritas), "IEC 62443-3-3" (DNV), IMO2021 ([home screen](./screens/hard/navarino-home-hero.png), [Angel](./screens/hard/navarino-cybersecurity-angel.png)) | Longevity claims **inconsistent** ("over 50"/"55+"/"over 56 years"); ISO 27001/9001/14001/45001; partners NATO, Bundeswehr, Royal Navy/RFA ([about](https://nsslglobal.com/about/)) | Thinnest — lone "25+ years"; partners as categories, unnamed; "Standard/Premium SLA" ([home](https://www.iec-telecom.com)) | "95+ satellites", "35+ teleports"; maritime "442,532 vessels", "68%" breaches; "115 engineers", "24x7x365" ([maritime](./screens/hard/speedcast-industry-maritime.png), [support](./screens/hard/speedcast-support-center.png)) |
| **Technical info** | Benefits narrative + diagrams; **no datasheets**; one gated PDF ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/)) | Plain-language + feature lists; antenna models without specs; one cert PDF ([Angel](https://navarino.co.uk/solutions/angel/)) | Mixed plain/jargon; **no datasheets** ([cyber](https://nsslglobal.com/solution/cyber-security/)) | Brochure-PDF model + Download Center ([OptiShield](https://iec-telecom.com/en/value-added-services/optishield/)) | Heaviest PDF model (17+ brochures, many 2020–21) ([all solutions](https://www.speedcast.com/our-solution/all-solutions/)) |
| **UX +/−** | **+** routed form ("routed to a regional specialist"), trust density; **−** 4-level URLs, **stat drift 99.99 vs 99.9%** same page ([shipping](https://marlink.com/solutions/industry/shipping/)) | **+** strongest visual craft (3D ship), cleanest portfolio pages; **−** no form, no search, /solutions/ 404 ([screen](./screens/hard/navarino-contact-directory.png)) | **+** market sub-hubs; **−** duplicated trees, low-scent labels ("Drop us a Line"), no support in nav | **+** only real finder, Download Center; **−** facet jargon (COTP/COTM), support across 3+ subdomains, thin maritime hub ([screen](./screens/hard/iec-telecom-industry-maritime.png)) | **+** industry sub-verticals + Support Center; **−** no contact form, "Get in Touch"→/sign-up/, stale PDFs, exits to microsites |

### 1.3 SOFT comparative table

| Axis | Cisco | IBM | Schneider Electric | Siemens | Honeywell |
|---|---|---|---|---|---|
| **Audience** | Enterprise + SMB + service providers + partners | Enterprise IT + developers + partners | Facility/plant operators, industry buyers, distributors ("Where to buy?") | Industrial engineers ("600,000 TIA Portal users"); 30 verticals ([industries](https://www.siemens.com/en-us/industries/)) | Industrial/enterprise via Industries+Outcomes+Businesses; B2C routed out |
| **Positioning** | Title "AI Infrastructure, Secure Networking, and Software Solutions"; hero unverified (bot-blocked) ([screen](./screens/soft/cisco-home-hero.png)) | "Realizing ROI with AI agents" / "USD 4.5 billion in productivity gains" — self as case study ([screen](./screens/soft/ibm-home-hero.png)) | Hero = news carousel ("Named World's Most Sustainable Company 2026 by TIME") ([screen](./screens/soft/schneider-home-hero.png)) | "What if AI could do an engineer's most tedious work?" (Eigen Agent) ([screen](./screens/soft/siemens-home-hero.png)) | "Connections that drive true transformation." ([screen](./screens/soft/honeywell-home-full.png)) |
| **Solutions/Industries** | Networking/Security/Collaboration/Observability; solutions hub "Technology, Industry, Business Needs" ([screen](./screens/soft/cisco-solutions-overview.png)) | 4 axes — products (flat 25+) / industries (19) / solutions / services ([screen](./screens/soft/ibm-industries.png)) | **Industries ARE the taxonomy** — 18 industry solutions + EcoStruxure + cross-cutting needs ([screen](./screens/soft/schneider-solutions-industries.png)) | Marketplace catalog "1-12 of 2048 results" (incl. 3rd-party sellers); 30 industries flat ([catalog](./screens/soft/siemens-products-catalog.png), [industries](./screens/soft/siemens-industries.png)) | **3-axis hub** — Industries (12) × Outcomes (6) × Businesses (3 subdomains) ([screen](./screens/soft/honeywell-solutions-3axis.png)) |
| **Nav & discovery** | Mega-menu L1 rail + promo panel; Portfolio Explorer (per-industry use-case) ([screen](./screens/soft/cisco-nav-megamenu.png)) | Primary mega-menu client-rendered (not captured); products flat without JS | Persistent 4-CTA rail (Product Selector/Get a Quote/Where to buy?/Help Center); mega-menu = redesign focus *(hypothesis)* | **Filtered search, not tree** (2048-item catalog); nav client-rendered ([screen](./screens/soft/siemens-products-catalog.png)) | 2-level menu; umbrella routing to segment subdomains; no site search on hubs |
| **CTAs & contact** | "Trials and demos"; sales forms off-domain (engage2demand, 14+ fields, routing) | "Free Trial"/"Buy Now"; contact = router with **sales-vs-support split, no form** | "Get a Quote…an expert will connect"; contact = **country selector (~100 sites), no global form** | Building X "Request a consultation" + "Start the tour" demo; contact split by audience, form JS-injected | "Contact Sales" → Salesforce portal C3; contact hub **zero forms**; support page has the only form |
| **Trust** | Case-study hub + "Cisco on Cisco"; "70% of Fortune 100" SD-WAN **(hypothesis — snippet)** | "cut HR costs by 40%", "resolve 94%…"; Bradesco "65 million customers", Honda "67%" ([industries](https://www.ibm.com/industries)) | TIME award; McLaren story; "800-bed all-electric hospital" | Building X "30% Energy savings", ISO 27001:2022, UL Platinum | "up to $225 billion in production costs" (Honeywell/MIT); Motor Oil, Aruba stories |
| **Technical info** | **Strongest** — HTML datasheets, At-a-Glance, FAQ, validated-design guides | Central Documentation hub + Fix Central; marketing outcomes-first | Selectors/docs/how-to videos; marketing sells outcomes, no product links in body | Interactive demo tour + API dev page + buying guide; deep docs → SiePortal *(access restricted)* | Corporate story-led, no datasheets; depth on segment subdomains |
| **UX +/−** | **+** L1-rail mega-menu + Portfolio Explorer finder; **−** dual URL architectures, off-domain lead forms ([screen](./screens/soft/cisco-nav-megamenu.png)) | **+** explicit sales-vs-support split, industry outcome stats; **−** industries mix granularities, support JS-only shell ([screen](./screens/soft/ibm-industries.png)) | **+** persistent 4-CTA conversion rail, industry-led taxonomy; **−** news-carousel hero, geo-fragmentation (~100 country sites) ([screen](./screens/soft/schneider-solutions-industries.png)) | **+** honest large-catalog model (search+facets), product demo/tour; **−** 30-item flat industry list, client-rendered nav ([screen](./screens/soft/siemens-products-catalog.png)) | **+** Outcome (need-based) axis is rare/useful; **−** subdomain handoffs, no-form contact hub, slow loads *(hypothesis)* ([screen](./screens/soft/honeywell-solutions-3axis.png)) |

### 1.4 ASPIRATIONAL comparative table

| Axis | Stripe | Palantir | Vercel | NVIDIA | Cloudflare |
|---|---|---|---|---|---|
| **Audience** | By stage (Enterprises/Startups) + platforms + developers | Defense/government + enterprise + developers | Developers self-serve + enterprise + AI/agent builders | Enterprise + consumer dual-track; Developers/Partners/Startups | Self-serve devs + tiered business + enterprise |
| **Positioning** | "Financial infrastructure to grow your revenue." ([screen](./screens/aspirational/stripe-home-full.png)); promo modal over hero on visit | "AI-Powered Automation for Every Decision" over product UI ([screen](./screens/aspirational/palantir-home-hero.png)) | "Agentic Infrastructure" — 2 words + dual CTA + logo wall ([screen](./screens/aspirational/vercel-home-hero.png)) | "Artificial Intelligence Computing Leadership"; news-carousel hero ([screen](./screens/aspirational/nvidia-home-hero.png)) | "Connect, protect, and build everywhere"; "connectivity cloud" ([screen](./screens/aspirational/cloudflare-home-hero.png)) |
| **Solutions/structure** | 4 product groups (Payments/Revenue/Money Management/Platforms & Marketplaces) + use-cases (10) + industries (11) | Platforms (AIP/Foundry/Gotham/Ontology/Apollo) + 15+ industry offerings ([screen](./screens/aspirational/palantir-platform-aip.png)) | 3 groups (Agent Stack/Core Platform/Tools) | 3 axes — Products (11)/Solutions (6)/Industries (14) ([screen](./screens/aspirational/nvidia-industries.png)) | 73 products in 7 groups + solution umbrellas |
| **Nav & discovery** | product/stage/use-case+industry axes; "Guide me (Personalize)" | Slim header + shared modules site-wide | 2 dropdowns + docs integrated (product CTAs → /docs) | Mega-menu grouped sub-columns; multi-property ecosystem | Axes platform/need/vertical; case-study finder facets |
| **CTAs & contact** | Paired self-serve + sales; **multi-step qualifying sales form** (email+country→revenue→details) ([screen](./screens/aspirational/stripe-contact-sales.png)) | "Request a Demo"; contact = routing hub, no form | Dual-track "Deploy now" vs "Talk to sales"; 5-field form + proof sidebar ([screen](./screens/aspirational/vercel-home-hero.png)) | 3-way split (Support/Sales/Partners); qualifying form (Industry + Job Role) | "Start for free" vs "Talk to an expert"; enterprise form bot-blocked |
| **Trust** | "$1.9T volume 2025", "99.999% uptime", "50% of Fortune 100"; cards ("$70M…Postmates"); **drift 500M vs 250M** API req/day | Outcome-stat stories (Sompo "$60M profit", Walgreens "384 billion decisions/day"); U.S. Army, UK Defence | Stat-in-sentence logo wall; "40B+ requests/day", "99.99% uptime SLA" ([screen](./screens/aspirational/vercel-enterprise.png)) | "81% of TOP500"; proprietary research ("Over 1,000 telecom professionals surveyed") | Network proof "337 cities · 8 regions", "95% within 50ms", "20% of all websites"; per-case pairs (Shopify "3.4T requests") ([screen](./screens/aspirational/cloudflare-network-coverage.png)) |
| **Technical info** | Real API code "Under the hood"; task-based docs | Per-feature videos + live-product CTAs *(access restricted)* | One-line install hero (`npm i ai`), SDK snippets, interactive demo, pricing estimator | Glossary + "What is X?" + spec PDFs | Learning Center + live "Test your latency" tool |
| **UX +/−** | **+** best-in-class progressive lead qualification, complex-made-simple; **−** promo modal covering hero ([screen](./screens/aspirational/stripe-home-hero.png)) | **+** product-UI-as-hero, outcome-stat carousel; **−** JS shell to fetchers, no direct contact form | **+** 2-word hero + dual-track CTA + logo wall (fastest scannable), stat-in-sentence proof; **−** no marketing products hub | **+** anchored page template (Overview→What is X→Use Cases→Resources→Next Steps), report-led funnel; **−** news-carousel hero buries value prop, many subdomains ([screen](./screens/aspirational/nvidia-industries.png)) | **+** reusable module system, network/coverage storytelling (relevant to our Connectivity pillar); **−** vertical list not exposed on hub ([home](./screens/aspirational/cloudflare-home-full.png)) |

### 1.5 Three shared market patterns

1. **Dual-axis IA (capability × industry) is the category default.** Marlink 3-axis mega-menu; Speedcast/NSSL/IEC pair solution trees with market hubs ([speedcast](./screens/hard/speedcast-solutions-filter.png), [nssl](./screens/hard/nsslglobal-solutions-overview.png), [iec](./screens/hard/iec-telecom-solution-finder.png)); every SOFT player runs an industries hub ([ibm](./screens/soft/ibm-industries.png), [siemens](./screens/soft/siemens-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png)). → Validates the brief's "two sections + cross-links"; Navarino (single-axis) is the lone exception, with no industry entry points.
2. **Trust is quantified, certified, and placed early** (Navarino "13,000+ vessels" on hero, Marlink stat bands, Cloudflare network numbers, Vercel stat logo-wall; ISO/IACS cert strips standard in maritime). **Caveat:** cross-page **stat drift** at Marlink (99.9/99.99), NSSLGlobal (50/55/56 yrs), Stripe (500M/250M).
3. **Sales/support are split; the contact page is the weakest link.** Explicit splits at IBM, NVIDIA (3-way), IEC. In HARD, two of five have **no web form at all** (Navarino, Speedcast — directory only); aspirational tier instead qualifies leads progressively (Stripe).

### 1.6 Three key differences

1. **Discovery tooling ranges from nothing to faceted search** — Navarino none; Marlink/NSSL plain search; Speedcast filter band; IEC 8-facet finder; Siemens 2048-item search-first. **No well-designed mid-size finder exists** — they are absent or expert-jargon tools.
2. **Curation vs catalog** — mid-size maritime players curate few pillars with narrative pages (Marlink 5, Navarino 4); conglomerates expose full catalogs behind filters (Siemens 2048, Cloudflare 73). Asterra's 5 pillars sit firmly on the **curation** side.
3. **Static PDF proof vs interactive proof** — HARD relies on brochure PDFs, almost no on-page specs; aspirational players embed proof (Cloudflare live latency test, Vercel demo+estimator, Stripe "Under the hood", Siemens Building X tour).

---

## 2. BENCHMARK — solution-fit clarity + pre-contact trust

Scores one dimension: a user must **(a) quickly grasp which solution fits** and **(b) trust
reliability before human contact**. Five examples span weak→strong: Marlink, IEC (in-market);
Cloudflare, Stripe (aspirational); **NerdWallet** (new cross-category — best-in-class guided
"find the right option + trust before you commit"; evidence in [Appendix D](#d-nerdwallet-verbatim-evidence)).

### 2.1 Criteria (1–5)

| # | Criterion | 1 = | 5 = |
|---|---|---|---|
| C1 | **Guided solution discovery** | must browse raw catalog | guided finder routes situation → matched solution |
| C2 | **Industry / use-case framing** | product-only | rich pages re-packaging solutions in the buyer's context |
| C3 | **Plain-language explanation** | jargon or empty | layered plain language, progressive depth |
| C4 | **Quantified, specific proof** | none / vague | dense, specific, verifiable stats placed early |
| C5 | **Certification / methodology visibility** | none | clear contextual certs/compliance (or transparent "how we rate") |
| C6 | **Claim consistency** | contradictory / stale | coherent, current, self-consistent |
| C7 | **Low-friction contextual next step** | dead-end / off-domain | context-carrying inquiry, minimal friction |
| C8 | **Self-serve interactive validation** | none | user can verify a claim before contact |

C1–C3 = "which fits me"; C4–C6, C8 = "can I trust them"; C7 = the bridge once convinced.

### 2.2 Scores

| Criterion | Marlink | IEC Telecom | Cloudflare | Stripe | NerdWallet |
|---|---|---|---|---|---|
| **C1 Guided discovery** | **2** — no finder; mega-menu + search only (§1) | **4** — real 8-facet finder, but jargon (COTP/COTM) ([finder](./screens/hard/iec-telecom-solution-finder.png)) | **4** — "by need" taxonomy + "Get a recommendation" *(reported)* | **4** — product/stage/use-case axes + "Guide me" *(reported)* ([sitemap](https://stripe.com/sitemap)) | **5** — dedicated quiz "I need a credit card for… → results in minutes" ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) |
| **C2 Industry framing** | **5** — industry submenu + sector-framed shipping page ([shipping](./screens/hard/marlink-industry-shipping.png)) | **3** — vertical markets, thin maritime hub ([maritime](./screens/hard/iec-telecom-industry-maritime.png)) | **4** — vertical pages (public sector, banking) | **4** — by-industry + by-use-case lists ([sitemap](https://stripe.com/sitemap)) | **4** — goal/use-case tabs (Cash Back, Balance Transfer, Travel…) ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) *(consumer use-case)* |
| **C3 Plain-language** | **4** — benefits narrative + diagrams, low jargon | **2** — unexplained facet jargon ([finder](./screens/hard/iec-telecom-solution-finder.png)) | **5** — Learning Center + clear pillar props | **5** — complex-made-simple + "Under the hood" ([home](./screens/aspirational/stripe-home-full.png)) | **5** — plain editorial + per-card pros/cons ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C4 Quantified proof** | **5** — 1,700+ specialists, 15k+ vessels, 99.9% SLA, 24.7% share ([home](./screens/hard/marlink-home-hero.png), [shipping](./screens/hard/marlink-industry-shipping.png)) | **2** — lone "25+ years"; partners unnamed ([home](./screens/hard/iec-telecom-home-hero.png)) | **5** — 20% of all websites, 234B threats/day, 337 cities ([network](./screens/aspirational/cloudflare-network-coverage.png)) | **5** — $1.9T volume, 99.999% uptime, 50% of Fortune 100 ([home](./screens/aspirational/stripe-home-full.png)) | **4** — per-card "rating 5.0" + concrete fees/rewards; few self-stats ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C5 Certs / methodology** | **5** — ISO 27001/9001/14001, IACS UR E26/E27, NIS2, IEC 62443 ([cyber](./screens/hard/marlink-cybersecurity.png)) | **3** — "IMO Compliance" + SLA tiers | **4** — Forrester Wave / IDC MarketScape *(reported)* ([app services](https://www.cloudflare.com/application-services/)) | **4** — PCI / compliance messaging | **4** — transparent "1 to 5" method + "FACT CHECKED / EDITORIAL INTEGRITY" + independence disclaimer ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C6 Claim consistency** | **2** — stat drift 99.9/99.99%, 135+/200+ countries | **3** — nav-vs-form taxonomy mismatch | **4** — consistent, current *(not fully audited)* | **4** — minor drift 500M/250M API req/day | **4** — "Last updated" + fact-check label *(not audited across pages)* |
| **C7 Contextual next step** | **5** — single routed form, "routed to a regional specialist" ([contact](./screens/hard/marlink-contact-form.png)) | **3** — generic form everywhere; support across 3+ subdomains ([contact](./screens/hard/iec-telecom-contact-form.png)) | **4** — "Start for free" vs "Talk to an expert" *(form bot-blocked)* | **5** — progressive multi-step qualification ([contact-sales](./screens/aspirational/stripe-contact-sales.png)) | **5** — one-click "APPLY NOW" from the recommendation, no account ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) *(apply = contact analog)* |
| **C8 Interactive validation** | **2** — one gated PDF; no live tool | **2** — brochure Download Center only | **5** — live "Test your latency" ([network](./screens/aspirational/cloudflare-network-coverage.png)) | **5** — interactive demos + "Under the hood" ([home](./screens/aspirational/stripe-home-full.png)) | **5** — finder + "Add to compare" + pros/cons, no-contact ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) |
| **Total (/40, unweighted)** | **30** | **22** | **35** | **36** | **36** |

*Totals are unweighted orientation only — C1, C4, C7 arguably weigh most for our maritime-first buyer.*

### 2.3 Conclusions per criterion

- **C1 Discovery:** only NerdWallet scores 5; the direct market maxes at 4 (IEC, and it's jargon-gated) → **biggest gap = biggest opportunity.**
- **C2 Industry framing:** Marlink leads (5), all ≥3 → table stakes, **not a differentiator.**
- **C3 Plain-language:** aspirational + NerdWallet at 5; IEC's jargon (2) is the cautionary floor.
- **C4 Proof:** Marlink/Cloudflare/Stripe at 5; IEC's lone stat (2) shows the floor.
- **C5 Certs/methodology:** Marlink strongest (5) via ISO/IACS; maritime buyers expect this — must match.
- **C6 Consistency:** **nobody scores 5**; Marlink lowest (2) via stat drift → consistency is universally under-managed → argues for a single-source proof block.
- **C7 Contextual contact:** Marlink/Stripe/NerdWallet at 5; the losers are dead-end directories.
- **C8 Interactive validation:** aspirational + NerdWallet at 5; **HARD group all ≤2** → absent in our market → opportunity.

**Overall read:** the two halves split cleanly. Marlink is strong on *trust* (C4/C5) and
*contact* (C7) but weak on *discovery* (C1), *interactivity* (C8), *consistency* (C6). IEC is
the only in-market player with a real finder, yet jargon (C3) and thin proof (C4) undercut it.
High scorers (Stripe, NerdWallet, Cloudflare) win by combining a **guided/low-jargon path in +
self-serve validation + consistent specific proof** — the combination no HARD player achieves.

---

## 3. PATTERNS

Five **principally different** paradigms (different core mechanism: interview / identity /
attributes / experience / evidence). C-refs = §2.1 criteria served.

| # | Pattern | How it works | Where applied | Fits when | Doesn't fit when |
|---|---|---|---|---|---|
| **P1** | **Guided recommender (diagnostic wizard)** — system-led interview → recommendation (C1, +C3/C7) | System asks a few plain questions → ranked personalized recommendation (pros/cons) + next step; user answers, system leads | NerdWallet CardFinder ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)); Stripe "Guide me"; Cloudflare "Get a recommendation" *(reported)*; Betterment/Wealthfront. In-market only IEC approximates (as a facet filter) ([finder](./screens/hard/iec-telecom-solution-finder.png)) | Catalog hard to self-map even for a domain expert; few, encodable decision variables; buyer early/unsure | Portfolio tiny/obvious (overkill); fuzzy matching logic (wrong pick erodes trust); experts who want direct access |
| **P2** | **Segment/industry-led self-identification** — "choose your world" → curated page (C2, +C5) | Entry by *who you are* (industry/segment); destination re-frames solutions in sector language + sector proof; discovery by recognition | Category default — Marlink industry submenu + shipping page ([shipping](./screens/hard/marlink-industry-shipping.png)); Cisco/IBM/Siemens/Honeywell hubs ([ibm](./screens/soft/ibm-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png)); Cloudflare verticals | Same capabilities serve very different sectors; buyers self-identify strongly by industry; you have sector proof | Sectors too alike (duplication); no sector proof → filler pages (IEC thin hub, [maritime](./screens/hard/iec-telecom-industry-maritime.png)); need cuts across industries |
| **P3** | **Faceted filter + side-by-side comparison** — self-directed attribute selection (C1/decision) | User narrows a catalog by attribute filters and/or compares a shortlist on shared specs; no system recommendation | Siemens 2048-item catalog ([catalog](./screens/soft/siemens-products-catalog.png)); IEC facets ([finder](./screens/hard/iec-telecom-solution-finder.png)); NerdWallet "Add to compare" ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)); AWS/e-commerce filters | Large catalog, well-defined comparable attributes; expert buyers; late-stage choice between known options | Small curated portfolio (nothing to filter); buyers don't know the vocabulary (jargon wall, COTP/COTM); offerings not cleanly attribute-comparable |
| **P4** | **Interactive proof / self-serve validation** — trust by doing (C8, +C4) | User validates a capability themselves — live tool, sandbox, calculator, product tour — turning a claim into first-hand experience | Cloudflare "Test your latency" ([network](./screens/aspirational/cloudflare-network-coverage.png)); Vercel Sandbox + estimator ([enterprise](./screens/aspirational/vercel-enterprise.png)); Stripe "Under the hood" ([home](./screens/aspirational/stripe-home-full.png)); Siemens Building X tour *(reported)*. HARD group ≤2 | Value is demonstrable digitally (coverage, speed, API, workflow); technical evaluators want evidence; safe to expose a slice | Physical/managed-service with no digital surface (much of maritime hardware/installation); credible tool costly; shallow gimmick undercuts trust |
| **P5** | **Evidence & authority stack** — substantiated assertion of reliability (C4/C5/C6) | Trust asserted but *proven* — quantified stats + certs/compliance + named-outcome cases + logos/testimonials + editorial expertise, early and consistent | Marlink stats+certs ([cyber](./screens/hard/marlink-cybersecurity.png)); Palantir impact stories ([home](./screens/aspirational/palantir-home-hero.png)); Stripe/Cloudflare stat bands; NVIDIA research ([industries](./screens/aspirational/nvidia-industries.png)); NerdWallet methodology ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) | Risk/compliance-sensitive buyers; real, specific, verifiable proof; long/high-stakes cycles | No concrete proof → vague claims (IEC "25+ years"); inconsistent claims (stat drift signals unreliability). *Reinforces trust; does nothing for discovery alone* |

### 3.1 Three mechanisms to port into Asterra

1. **Plain-language Solution Finder (situation → recommendation, no gate).** *How:* one opening question in the buyer's words → 2–3 essential questions (industry, need, region) → ranked solution/bundle with pros/cons + context-carrying "Talk to an expert"; no login/contact info to see results. *Solves:* the core pain — can't self-map a complex catalog; removes browse-friction and the jargon wall. *From:* NerdWallet CardFinder ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)); in-market proof it's expected = IEC's finder — but adopt NerdWallet's plain language, **not** COTP/COTM jargon.
2. **Single-source "Proof Block" (stats + certs + named-outcome cases).** *How:* one reusable, tokenized component fed from a **single data source** (a figure can't read 99.9% one place, 99.99% another) — stat trio (coverage/uptime/scale) + certification strip + 1–2 case cards (claim + number + source). *Solves:* pre-contact trust with specifics **and** eliminates the stat drift at Marlink (99.9/99.99) and Stripe (500M/250M). *From:* Cloudflare quantified proof ([network](./screens/aspirational/cloudflare-network-coverage.png)); single-source rule motivated by Marlink drift.
3. **Contextual, reassuring inquiry — a simple form, pre-filled in context.** *How:* every solution page carries "Talk to an expert" opening a **simple, single-step contact form pre-filled with the solution + industry** (both fields the brief specifies), plus reassurance ("routed to a regional specialist — reply within one business day"); captures name, company, industry, message, contact in one step — **no multi-step quote wizard** (per [`../CLAUDE.md`](../CLAUDE.md) §6–§7). *Solves:* converts the just-convinced user in context; avoids the dead-ends (Navarino/Speedcast no form, Honeywell/Cisco off-domain). *From:* Marlink routed form ([contact](./screens/hard/marlink-contact-form.png)) + Stripe's clarity/reassurance ([contact-sales](./screens/aspirational/stripe-contact-sales.png)) — **not** its multi-step qualification, which the brief excludes.

### 3.2 Mechanism NOT to port

**Expert faceted product catalog / spec-filter** (P3) — IEC facets ([finder](./screens/hard/iec-telecom-solution-finder.png)), Siemens 2048-item catalog ([catalog](./screens/soft/siemens-products-catalog.png)). *Why not:* Asterra has ~5 curated pillars, not thousands of SKUs, so there's little to filter; it presumes the user already speaks each pillar's internal vocabulary — which our buyer, technical in their own domain but rarely a specialist across all five pillars, often does not — and adds cross-domain jargon that worsens "which fits me?". Facets only pay off at conglomerate scale; the guided finder (Mechanism 1) does the job.

---

## 4. CONCLUSIONS

Basis: [`../CLAUDE.md`](../CLAUDE.md) (maritime-first; ~5 curated pillars; primary conversion =
qualified inquiry from a solution page; Solution Finder in scope; no homepage quote CTA) + §1–§3.

### 4.1 Direction

**Primary → P1 Guided recommender (the in-scope "Solution Finder").** Three reasons:
1. **Hits the market's unsolved pain and differentiates** — of 15 sites, only IEC has a real finder and it's jargon-gated; the rest force catalog-browsing. A plain-language guided finder is a genuine differentiator, already committed in [`../CLAUDE.md`](../CLAUDE.md) §7.
2. **Asterra's shape is ideal input** — ~5 pillars × a defined industry set = *few, encodable* decision variables (the condition under which a guided finder gives trustworthy recommendations, unlike a 2048-SKU catalog); the maritime fleet-operator persona — technical in their own domain, but rarely a specialist across all five pillars — is served better by guidance than by raw browse.
3. **Lands straight in the primary conversion, in context** — a finder ending in a matched solution + pre-filled "Talk to an expert" (Mechanism 3) converts without a dead-end.

**Backup, complementary → P2 Industry-led self-identification.** Category default; matches how
buyers self-identify (maritime/government/energy); built anyway as the Industries section.
Carries **more of the discovery load, relative to the finder,** **if** (a) research shows buyers
self-identify by sector faster than by need, **or** (b) trustworthy matching logic can't be
encoded (bad recommendations poison trust), **or** (c) build sequencing defers the finder (build
order TBD — [`../CLAUDE.md`](../CLAUDE.md) §13). The Solution Finder stays the **committed in-scope
discovery feature** (§7). Ranks second: non-differentiating, and within a sector still leaves
"which of our 5 pillars?" partly unanswered — complements, not replaces, P1; depends on real
sector proof (else filler).

**Does not fit → P3 Faceted filter / comparison** — see §3.2 (small curated portfolio; buyer
technical but not fluent in every pillar's vocabulary; jargon; not cleanly attribute-comparable).

**Complements, not alternatives:** P5 (Evidence & authority) is a **mandatory trust layer** under
whichever discovery pattern wins (= the single-source proof block; the maritime buyer's
reliability/compliance sensitivity makes it non-optional). P4 (Interactive proof) is a **strong
optional enhancer** — high-value where a digital surface exists (e.g., an uptime/coverage stat
rail, **not** the out-of-scope interactive coverage map — [`../CLAUDE.md`](../CLAUDE.md) §7),
limited by Asterra's physical/managed-service nature → scope to one or two credible tools.

### 4.2 Design decisions (adopt)

1. **Solution Finder as the signature interaction** — plain-language industry × need, aspirational-grade presentation (Stripe-level clarity, bento results); returns solution pages/cards with inquiry CTAs, not a raw SKU list.
2. **Contextual "Talk to an expert" inquiry** on every solution page — solution + industry pre-filled, reassurance line; avoid form-less directories, off-domain forms, label/URL mismatches.
3. **Single-source tokenized Proof Block** — consistent stats + cert strip + named-outcome cases on every solution/industry page.
4. **Industry section** as the recognition-based entry (P2), cross-linked with solutions per the brief's "two sections + cross-links."
5. **One lightweight interactive proof** (e.g., a non-map coverage/uptime stat rail) — the pattern HARD entirely lacks; the interactive coverage map stays out of scope per [`../CLAUDE.md`](../CLAUDE.md) §7.

### 4.3 Open questions for PM / designer

1. **Contact model:** the brief specifies a **simple, single-step routed form** (Marlink) — not multi-step qualification (Stripe) or per-segment directories (Speedcast). Open at v1: alongside the specified industry field, do we also pre-fill / route on solution-of-interest, and where do submissions go (email vs CRM)?
2. **Catalog depth:** if the portfolio stays ≤ ~30 named offerings, curation-first IA needs no facets and the Finder is a guided filter; if hardware/accessories get listed (IEC/Siemens scenario), we need facets + a product content model. Which — and does the Finder return *pages* or *cards with inquiry CTAs*?
3. **Support surface at v1:** competitors treat support as a trust asset (Speedcast Support Center, [screen](./screens/hard/speedcast-support-center.png)) but fragment it (IEC ×3 subdomains). The brief defers the portal — what's the marketing-site support promise: 24/7 claim + contacts only, or a public FAQ/knowledge layer?

---

## Appendix

### A. Method
Collected 2026-07-22, live sites only. Text facts via direct fetches; visual evidence via
Playwright (Chromium, 1440×900). **61 competitor screenshots** in [`screens/{hard,soft,aspirational}/`](./screens/) (named `{company}-{page-or-pattern}.png`; homepages captured twice: `-home-hero` + `-home-full`) + **2 NerdWallet screenshots** in [`screens/dimension-fit-trust/`](./screens/dimension-fit-trust/). Every fact carries its source URL; quantitative claims quoted verbatim; unverifiable items marked **(hypothesis)**. Login-gated portals treated as *access restricted* (no content assumed).

### B. Full screenshot index

**Marlink (8):** [home-hero](./screens/hard/marlink-home-hero.png) · [home-full](./screens/hard/marlink-home-full.png) · [solutions-overview](./screens/hard/marlink-solutions-overview.png) · [industry-shipping](./screens/hard/marlink-industry-shipping.png) · [cybersecurity](./screens/hard/marlink-cybersecurity.png) · [support](./screens/hard/marlink-support.png) · [contact-top](./screens/hard/marlink-contact-top.png) · [contact-form](./screens/hard/marlink-contact-form.png).
**Navarino (5):** [home-hero](./screens/hard/navarino-home-hero.png) · [home-full](./screens/hard/navarino-home-full.png) · [solutions-technology](./screens/hard/navarino-solutions-technology.png) · [cybersecurity-angel](./screens/hard/navarino-cybersecurity-angel.png) · [contact-directory](./screens/hard/navarino-contact-directory.png) *(mid-page empty band = possible lazy-load artifact)*.
**NSSLGlobal (5):** [home-hero](./screens/hard/nsslglobal-home-hero.png) · [home-full](./screens/hard/nsslglobal-home-full.png) · [solutions-overview](./screens/hard/nsslglobal-solutions-overview.png) · [industry-maritime](./screens/hard/nsslglobal-industry-maritime.png) · [contact-form](./screens/hard/nsslglobal-contact-form.png).
**IEC Telecom (5):** [home-hero](./screens/hard/iec-telecom-home-hero.png) · [home-full](./screens/hard/iec-telecom-home-full.png) · [solution-finder](./screens/hard/iec-telecom-solution-finder.png) — 8 facet groups · [industry-maritime](./screens/hard/iec-telecom-industry-maritime.png) · [contact-form](./screens/hard/iec-telecom-contact-form.png).
**Speedcast (6):** [home-hero](./screens/hard/speedcast-home-hero.png) · [home-full](./screens/hard/speedcast-home-full.png) · [solutions-filter](./screens/hard/speedcast-solutions-filter.png) *(cookie banner visible)* · [industry-maritime](./screens/hard/speedcast-industry-maritime.png) · [support-center](./screens/hard/speedcast-support-center.png) · [contact-directory](./screens/hard/speedcast-contact-directory.png).
**Cisco (5):** [home-hero](./screens/soft/cisco-home-hero.png) · [home-full](./screens/soft/cisco-home-full.png) · [nav-megamenu](./screens/soft/cisco-nav-megamenu.png) *(localized cookie banner + chatbot visible)* · [solutions-overview](./screens/soft/cisco-solutions-overview.png) · [industries](./screens/soft/cisco-industries.png).
**IBM (4):** [home-hero](./screens/soft/ibm-home-hero.png) · [home-full](./screens/soft/ibm-home-full.png) · [industries](./screens/soft/ibm-industries.png). *(Mega-menu not captured — client-rendered.)*
**Schneider (3):** [home-hero](./screens/soft/schneider-home-hero.png) · [home-full](./screens/soft/schneider-home-full.png) · [solutions-industries](./screens/soft/schneider-solutions-industries.png).
**Siemens (4):** [home-hero](./screens/soft/siemens-home-hero.png) · [home-full](./screens/soft/siemens-home-full.png) · [products-catalog](./screens/soft/siemens-products-catalog.png) — 2048-item facets · [industries](./screens/soft/siemens-industries.png). *(Mega-menu not captured — client-rendered.)*
**Honeywell (2):** [home-full](./screens/soft/honeywell-home-full.png) · [solutions-3axis](./screens/soft/honeywell-solutions-3axis.png). *(home-hero shot failed on slow load; home-full covers the hero.)*
**Stripe (3):** [home-hero](./screens/aspirational/stripe-home-hero.png) *(promo modal over hero)* · [home-full](./screens/aspirational/stripe-home-full.png) · [contact-sales](./screens/aspirational/stripe-contact-sales.png).
**Palantir (3):** [home-hero](./screens/aspirational/palantir-home-hero.png) · [home-full](./screens/aspirational/palantir-home-full.png) · [platform-aip](./screens/aspirational/palantir-platform-aip.png).
**Vercel (3):** [home-hero](./screens/aspirational/vercel-home-hero.png) *(light theme on our capture)* · [home-full](./screens/aspirational/vercel-home-full.png) · [enterprise](./screens/aspirational/vercel-enterprise.png).
**NVIDIA (3):** [home-hero](./screens/aspirational/nvidia-home-hero.png) · [home-full](./screens/aspirational/nvidia-home-full.png) · [industries](./screens/aspirational/nvidia-industries.png).
**Cloudflare (3):** [home-hero](./screens/aspirational/cloudflare-home-hero.png) · [home-full](./screens/aspirational/cloudflare-home-full.png) · [network-coverage](./screens/aspirational/cloudflare-network-coverage.png).
**NerdWallet (2):** [card-finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png) · [ratings-comparison](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png).

### C. Limitations & access notes
- **Bot-blocked to text fetchers (403):** cisco.com, ibm.com, se.com, Cloudflare contact pages — facts via rendered-text proxies + search snippets; browser captures succeeded. Snippet-sourced claims marked **(hypothesis)** (e.g., Cisco "70% of Fortune 100"). NerdWallet also 404s fetchers — captured via real browser.
- **Client-rendered navigation** (IBM, Siemens, Cloudflare top nav) — mega-menu internals documented from markup/URL only, not screenshots.
- **Access restricted (login-gated), content not assumed:** Marlink Portal360/OnePortal/SkyFile, Navarino COSMO, Siemens SiePortal, Palantir aip./build.palantir.com, Honeywell C3 Salesforce portal.
- **Visit-specific artifacts:** Stripe promo modal over hero; Vercel light theme (system-preference dependent); Cisco Ukrainian-localized cookie banner (geo-IP); Speedcast interior cookie banners; Honeywell intermittently very slow (5/9 fetches timed out) — perceived-performance = **(hypothesis)**. Palantir serves a JS-only shell to non-browser clients (facts via rendered-text proxy).
- **UX write-ups found:** Navarino redesign by KOTA ([kota.co.uk/work/navarino](https://kota.co.uk/work/navarino)); Speedcast rebrand by Everhouse ([ever.house](https://ever.house/work/speedcast/)); Cisco redesign metrics by Tendo ([tendocom.com](https://tendocom.com/case-studies/cisco-website-redesign/)) **(hypothesis — vendor-reported)**; Schneider mega-menu by Contentsquare ([contentsquare.com](https://contentsquare.com/customers/schneider-electric/)); Baymard benchmark for se.com ([baymard.com](https://baymard.com/ux-benchmark/case-studies/schneider-electric)); Stripe/Vercel design systems ([stripe.design](https://stripe.design/), [Geist](https://vercel.com/geist/introduction)).

### D. NerdWallet verbatim evidence (gathered 2026-07-22, live via Playwright)
- **CardFinder** ([screen](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) — "CardFinder: Credit Card Recommendation Quiz"; "Get results in minutes:"; "Why are you looking for a new credit card? → I need a credit card for… → GET STARTED"; "This service is FREE, will not affect your credit score, and no contact information is required."; "There's no hard credit check required to see your results."; "We only ask questions that are essential. No contact info required."; "See the pros and cons of each credit card we recommend." (https://www.nerdwallet.com/card-finder-jump)
- **Best Cash Back list** ([screen](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) — "13 Best Cash Back Credit Cards of July 2026"; "Written by Jae Bratton, Reviewed by Caitlin Mims, Edited by Paul Soucy — Last updated on July 16, 2026 — FACT CHECKED — EDITORIAL INTEGRITY"; "Our pick for: All-around cash back"; "NerdWallet rating ★★★★★ 5.0"; "Add to compare"; "APPLY NOW on Chase's website"; method: "Our star ratings… assess the features of a card, score those features according to how they compare with other options on the market, and assign the card a rating of 1 to 5."; independence: card info "has been collected by NerdWallet and has not been reviewed or provided by the issuer of this card." (https://www.nerdwallet.com/credit-cards/best/cash-back) — *Caveat:* no explicit "Why you can trust NerdWallet" box on this page; trust apparatus = byline + FACT CHECKED/EDITORIAL INTEGRITY + methodology + independence disclaimer.
