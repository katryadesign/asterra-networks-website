# Research — Asterra Networks

## 1. Competitor set

Three groups (HARD / SOFT / ASPIRATIONAL), max 5 each, to inform IA, content model,
and visual direction. Product context: [`../CLAUDE.md`](../CLAUDE.md).

### 1.1 HARD — same product, same audience, our market

Corporate B2B sites in maritime technology / connectivity.
**Analysis focus:** portfolio structure, connectivity, cybersecurity, industries,
support, and contact flow.

| Company | Why in this group | What to study for Asterra |
|---|---|---|
| **Marlink** | Closest analog: satcom + managed services + cyber + "smart" digital solutions for maritime, enterprise, energy, humanitarian. | Holding a broad portfolio in a Solutions × Industries structure; managed-services framing; coverage/reliability proof. |
| **Navarino** | Maritime connectivity + business applications + cyber, with a support emphasis. | Explaining technical products in plain language; support-centric messaging; lean IA. |
| **NSSLGlobal** | Independent maritime & government satcom + cyber (Cyber Awareness). | How a mid-size provider structures connectivity + cyber for maritime/government; managed-service framing; contact flow. |
| **IEC Telecom** | Maritime & remote satcom managed services (OneGate) + cyber; maritime/government/NGO/energy. | "Single-gateway" platform storytelling; presenting digital/cyber add-ons; industry breadth (incl. humanitarian/energy); support. |
| **Speedcast** | Global remote communications + managed IT + cyber across maritime/energy/cruise/government/enterprise. | Industry-led segmentation of one stack; network & global-coverage storytelling; uptime/SLA proof. |

### 1.2 SOFT — different product, same base task

Complex multi-product B2B companies; clearly present a technology catalog and route
the user to the right service.
**Analysis focus:** IA, mega-menu, industry segmentation, explaining technical services.

| Company | Why in this group | What to study for Asterra |
|---|---|---|
| **Cisco** | Huge connectivity/security/collaboration catalog for enterprise — same challenge of navigating complexity. | Multi-axis navigation of a giant (by product / solution / industry); solution hubs; routes to "Contact sales". |
| **IBM** | Enterprise breadth (AI, cloud, security, consulting) with mature Solutions × Industries IA. | Solution×industry hub structure; Resource Center / Insights integration; building enterprise credibility. |
| **Schneider Electric** | Industrial tech + digital + services across energy/industry/buildings — close to the infrastructure buyer's logic. | Industry-led segmentation for infrastructure; bundling hardware+digital+services; reliability/resilience proof. |
| **Siemens** | Industrial conglomerate with best-in-class mega-menu and industry segmentation. | Mega-menu architecture; industry-led IA; how to present technical portfolios. |
| **Honeywell** | Aerospace + building tech + industrial automation + connectivity; multi-product B2B. | Industry segmentation across very different sectors; explaining technical services; connectivity/aerospace adjacency. |

### 1.3 ASPIRATIONAL — international benchmarks

Benchmarks for B2B-tech sites (and visually aligned with our editorial-tech, dark-first
direction).
**Analysis focus:** composition quality, typography, storytelling, page modularity,
trust blocks, making complex technology understandable.

| Company | Why in this group | What to study for Asterra |
|---|---|---|
| **Stripe** | Gold standard for B2B-tech clarity: complexity presented elegantly, best-in-class resource/docs experience. | Making a complex offering feel simple; world-class resource/content structure; conversion clarity. |
| **Palantir** | Dark, serious, mission-critical tone for defense/enterprise with data storytelling. | Gravitas for government/defense/critical-infra (our secondary personas); serious-but-modern tone; data/impact storytelling. |
| **Vercel** | Closest benchmark for our direction: editorial-tech, dark-first, oversized type, expressive motion, bento. | Dark editorial system; typographic hierarchy; balancing restrained vs. expressive motion; dev-grade clarity. |
| **NVIDIA** | Makes hyper-complex tech (AI, data center, robotics) understandable + industry solutions + enterprise trust; on-theme with our AI/Digital. | Complex-made-simple; industry-solution pages; balancing technical depth with trust; modular page composition. |
| **Cloudflare** | Benchmark for presenting network products + global-network/globe visualization (on-theme with connectivity). | Global network/coverage storytelling; "by need" product taxonomy; clarity of technical value props. |

### 1.4 Targeted side-references (beyond the fives)

- **Inmarsat Maritime (Viasat)** → benchmark for our **Safety & Compliance** pillar
  (GMDSS, certification) and "authority" tone.
- **Palo Alto Networks / CrowdStrike** → for the **Cybersecurity** pillar: reducing a
  complex platform to 3–4 pillars and routing to inquiry (our scale, not conglomerate).
- **Linear** *(optional)* → craft / micro-interactions / dark editorial polish.

### 1.5 Analysis notes

- **SOFT:** Schneider + Siemens + Honeywell are three industrial conglomerates with
  catalogs an order of magnitude larger than ours. Do a **deep-dive on one** (best
  mega-menu — Siemens) and skim the other two, to avoid duplicated effort.
- **Group boundaries:** Cloudflare and Palo Alto could sit in more than one group —
  placed by primary value (Cloudflare = network/storytelling benchmark; Palo Alto =
  simplifying a complex catalog).
- **Starlink Maritime:** strong adjacent connectivity player, deliberately not in HARD —
  its site is thin on the "solution catalog," so less useful for our IA task.

---

## 2. Method & evidence rules

- **Collected:** 2026-07-22, live sites only. Text facts via direct fetches of the cited pages; visual evidence via Playwright (Chromium, 1440×900 viewport) — **61 screenshots in [`screens/`](./screens/)**, named `{company}-{page-or-pattern}.png`. Every homepage captured twice: `-home-hero` (viewport) and `-home-full` (full page).
- Every fact carries the exact source URL. Quantitative claims are quoted **verbatim** from the cited page. Anything not verifiable on-page is marked **(hypothesis)**.
- Login-gated surfaces (customer portals: Marlink Portal360/OnePortal, Navarino COSMO, Siemens SiePortal, Palantir aip.palantir.com) were **not** entered — treated as *access restricted*, no assumptions about their content.
- Known capture gaps are listed in [§8 Limitations](#8-limitations--access-notes).

---

## 3. HARD group — comparative table

| Axis | Marlink | Navarino | NSSLGlobal | IEC Telecom | Speedcast |
|---|---|---|---|---|---|
| **Primary audience** | Operators of remote/maritime assets; industry submenu: Shipping, Cruise, Energy, Enterprise & Telco, Government & Defence, Humanitarian & Aid ([home](https://marlink.com/)) | Maritime only — merchant fleets ("1 in 3 ocean-going merchant vessels globally use a Navarino service") ([home](https://navarino.co.uk/), [screen](./screens/hard/navarino-home-hero.png)) | Markets: Maritime / Defence and Government / Enterprise / Critical Rescue and Infrastructure ([maritime](https://nsslglobal.com/markets/maritime/)) | Land: Government, Humanitarian, Energy-Onshore, Enterprise, Media; Maritime: Fishing, Energy-Offshore, Shipping, Superyachts ([home](https://www.iec-telecom.com)) | 12 industries in nav, Commercial Maritime → Government ([home](https://www.speedcast.com)); segment contacts confirm Maritime/Energy/Government priority ([contact](https://www.speedcast.com/contact/)) |
| **Positioning & core offer** | "Operating in the world's most remote environments, we build dependable network and digital solutions that bring tomorrow's Possibilities, Anywhere" — animated hero, confirmed on capture ([screen](./screens/hard/marlink-home-hero.png)); "Possibility Platform" umbrella ([home](https://marlink.com/)) | "The Leading Maritime Technology Partner" ([screen](./screens/hard/navarino-home-hero.png), [home](https://navarino.co.uk/)) | Rotating hero: "Bringing Choice with Secure Solutions" / "Empowering Your Operations" / "Keeping You Connected", each "Sea \| Land \| Air"; independence: "We're brand agnostic and not tied to a particular provider" ([home](https://nsslglobal.com/), [about](https://nsslglobal.com/about/)) | "DIGITALISATION ENABLED BY SATELLITE NETWORK MANAGEMENT SOLUTIONS AND SATELLITE COMMUNICATION SERVICE" ([home](https://www.iec-telecom.com), [screen](./screens/hard/iec-telecom-home-hero.png)) | "Your Satellite Communications Starts Here" + remote-ops transformation mission ([home](https://www.speedcast.com), [screen](./screens/hard/speedcast-home-hero.png)) |
| **Solutions & Industries structure** | One "Possibility Portfolio": 5 categories — Connectivity, Cybersecurity, Network, Cloud & IT, IIoT & Applications ([solutions](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/), [screen](./screens/hard/marlink-solutions-overview.png)); cyber page lists 18 named offerings ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/), [screen](./screens/hard/marlink-cybersecurity.png)) | Product-category only: Technology / Connectivity / COSMO / Bridge & Navigation; **no industries axis** ([tech hub](https://navarino.co.uk/technology-solutions/), [screen](./screens/hard/navarino-solutions-technology.png)) | Three parallel trees: Solutions (15 items), Communications (Our Developments + Partner Portfolio), Markets (4) with market-scoped sub-hubs — same offerings appear in all three ([solutions](https://nsslglobal.com/solutions/), [screen](./screens/hard/nsslglobal-solutions-overview.png)) | Vertical markets (Land/Maritime) × Value-Added Services (OptiView, OptiSim, OptiShield, OneMail Pro, OneAssist, OneMonitor, OneHealth, Traksat) × product catalog ([home](https://www.iec-telecom.com), [maritime](https://iec-telecom.com/en/markets/maritime/)) | Solutions axis (Starlink, OneWeb, Connectivity, Network Mgmt, Applications, Systems Integration, Professional Services, IoT, Cloud) × Industries hub ([all solutions](https://www.speedcast.com/our-solution/all-solutions/), [screen](./screens/hard/speedcast-solutions-filter.png)) |
| **Navigation & service discovery** | Single "Solutions" mega-menu with 3 axes: Portfolio / Industry / Services & Support ([home](https://marlink.com/)); site search with trending terms; **no finder** ([search](https://marlink.com/search/)) | Single-axis product nav; **no site search, no filters, no finder** ([home](https://navarino.co.uk/)); agency case study confirms deliberate minimalism ([KOTA](https://kota.co.uk/work/navarino)) | Three axes + scoped market hubs (e.g. /markets/maritime/solutions/); header search; coverage charts on separate subdomain ([maritime](https://nsslglobal.com/markets/maritime/), [charts](https://charts.nsslglobal.com/100cms/indexv2.html)) | **Only true faceted finder in the group**: Application / Set-up (COTP·COTM·Portable) / Service / Type / Operator (8) / Market (9) / Speed (6 tiers) / Coverage (10 regions) + product search ([catalog](https://iec-telecom.com/en/product-solution/), [screen](./screens/hard/iec-telecom-solution-finder.png)) | Dual-axis nav + "Select a product" category filter band on All Solutions + header site search ([all solutions](https://www.speedcast.com/our-solution/all-solutions/), [screen](./screens/hard/speedcast-solutions-filter.png)) |
| **Key CTAs & path to contact** | "Discover What's Possible"; "Book a consultancy" / "Call a specialist" → contact; industry pages "Talk to a specialist" → form anchor; single routed form: "How can we help you?" (Request a quote / Talk to sales / Technical support / Billing / Reseller / Partnership / Other) + Solution of Interest + Sector/Industry ([contact](https://marlink.com/contact-us/), [screen](./screens/hard/marlink-contact-form.png)) | Uniform "Get in touch" → contact page is an **office directory only — no form anywhere**; sales-vs-support via functional emails (globalsales@ / technical.support@) ([contact](https://navarino.co.uk/contact-us/), [screen](./screens/hard/navarino-contact-directory.png)) | Uniform "Find out more" (11× on one page); "Get in touch" → minimal form: Name, Phone, Email, Message + 12 offices, one phone, one email; no routing ([contact](https://nsslglobal.com/contact/), [screen](./screens/hard/nsslglobal-contact-form.png)) | "Lets talk" (sic) → form with Interest dropdown (10 sectors) + "How did you hear about us?"; same "SEND" form embedded on nearly every page; "Submit a Ticket" → external support portal ([contact](https://iec-telecom.com/en/contact/), [screen](./screens/hard/iec-telecom-contact-form.png)) | "Get in Touch" → /sign-up/ (label/URL mismatch); "Request a Demo"; contact page = **phone/email directory, no form**, split by segment (maritimeinfo@, energy@, governmentinfo@) ([contact](https://www.speedcast.com/contact/), [screen](./screens/hard/speedcast-contact-directory.png)) |
| **Trust building** | Dense stat rows: "1,700+ specialists", "15k+ Vessels connected", "99.9% Network uptime SLA", "24.7% global market share" (attr. Valour Consultancy 2025) ([home](https://marlink.com/), [shipping](https://marlink.com/solutions/industry/shipping/), [screen](./screens/hard/marlink-industry-shipping.png)); logos CMA CGM, MSC, MOL, NYK; ISO 27001/9001/14001, IACS UR E26/E27, NIS2, IEC 62443 ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/)) | Hero stat "13,000+ vessels" + "650+ clients", "25+ years", "1 in 3" ([home](https://navarino.co.uk/), [screen](./screens/hard/navarino-home-hero.png)); type approvals on product page: "UR E27 Type Approved" (Bureau Veritas), "IEC 62443-3-3 Type Approved" (DNV), IMO2021 ([Angel](https://navarino.co.uk/solutions/angel/), [screen](./screens/hard/navarino-cybersecurity-angel.png)) | Longevity claims — inconsistent across pages: "over 50", "55+", "over 56 years" ([home](https://nsslglobal.com/), [maritime](https://nsslglobal.com/markets/maritime/)); ISO 27001/9001/14001/45001; partners NATO, Bundeswehr, Royal Navy/RFA ([about](https://nsslglobal.com/about/)) | Thinnest in group: single stat "25+ years of expertise" ([home](https://www.iec-telecom.com)); partner *categories* without names; "Standard and Premium SLA available" ([support](https://iec-telecom.com/en/value-added-services/global-technical-support/)) | "95+ satellites", "35+ Speedcast and Partner teleports" ([home](https://www.speedcast.com)); maritime page "442,532" vessels, "99.9%"-class claims, "68%" breaches stat ([maritime](https://www.speedcast.com/industries-hub/commercial-maritime/), [screen](./screens/hard/speedcast-industry-maritime.png)); WTA certification, awards; support: "115 engineers", "24x7x365" ([support](https://www.speedcast.com/support-center/), [screen](./screens/hard/speedcast-support-center.png)) |
| **Technical info presentation** | Benefits narrative + concept diagrams; **no datasheets/spec tables** on fetched pages; one gated PDF ("2026 Cyber Intelligence report", "PDF (3.2MB), 20 pages") ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/)) | Plain-language-first + feature lists; antenna models name-listed without specs; one cert PDF on Angel ([connectivity](https://navarino.co.uk/connectivity-solutions/), [Angel](https://navarino.co.uk/solutions/angel/)) | Mixed plain language and jargon ("application layer of the OSI model"); **no datasheets** found ([cyber](https://nsslglobal.com/solution/cyber-security/)) | Brochure-PDF model (e.g. OptiShield brochure) + dedicated Download Center ("installation manuals, user guides, software updates") ([OptiShield](https://iec-telecom.com/en/value-added-services/optishield/), [support](https://iec-telecom.com/en/value-added-services/global-technical-support/)) | Heaviest PDF model: 17+ product brochures, many dated 2020–2021, some products brochure-only with no landing page ([all solutions](https://www.speedcast.com/our-solution/all-solutions/)) |
| **UX strengths / weaknesses** | **+** Routed single form with "enquiry routed to a regional specialist" promise ([screen](./screens/hard/marlink-contact-form.png)); **+** trust density on industry pages ([screen](./screens/hard/marlink-industry-shipping.png)); **−** 4-level URLs; **−** stat drift: "99.99% this month" widget vs "99.9% SLA" on the same page ([shipping](https://marlink.com/solutions/industry/shipping/)); **−** legacy duplicate URL tree still indexed (hypothesis — from search index) | **+** Strongest visual craft in group: 3D ship + wireframe motif + hero stat ([screen](./screens/hard/navarino-home-hero.png)); **+** cleanest portfolio pages ([screen](./screens/hard/navarino-solutions-technology.png)); **−** no form = high-friction lead capture ([screen](./screens/hard/navarino-contact-directory.png)); **−** no search/filters; **−** /solutions/ hub URL returns 404 while products live under /solutions/* ([404](https://navarino.co.uk/solutions/)) | **+** 4 markets with scoped sub-hubs; **−** duplicated product trees across 3 axes ([screen](./screens/hard/nsslglobal-solutions-overview.png)); **−** low-scent quirky labels ("Drop us a Line", "At the Helm") ([contact](https://nsslglobal.com/contact/)); **−** no support entry in nav — 24/7 claims buried in About ([about](https://nsslglobal.com/about/)) | **+** Only real Solution-Finder pattern ([screen](./screens/hard/iec-telecom-solution-finder.png)); **+** Download Center; **−** unexplained facet jargon (COTP/COTM); **−** support fragmented across 3+ subdomains; **−** maritime hub is a thin lead-form landing ([screen](./screens/hard/iec-telecom-industry-maritime.png)); **−** CTA typo "Lets talk" ([home](https://www.iec-telecom.com)) | **+** Industry hubs with sub-verticals + dedicated Support Center page ([screen](./screens/hard/speedcast-support-center.png)); **−** contact page without form ([screen](./screens/hard/speedcast-contact-directory.png)); **−** "Get in Touch"→/sign-up/ mismatch; **−** stale 2020–21 PDFs behind current CTAs; **−** key journeys exit to microsites (speedcastsigma.com) ([maritime](https://www.speedcast.com/industries-hub/commercial-maritime/)) |

---

## 4. SOFT group — comparative table

| Axis | Cisco | IBM | Schneider Electric | Siemens | Honeywell |
|---|---|---|---|---|---|
| **Primary audience** | Enterprise + SMB + service providers + partners ([SMB support](https://www.cisco.com/c/en/us/support/web/tsd-cisco-small-business-support-center-contacts.html)) | Enterprise IT leaders + developers + partners ([home](https://www.ibm.com/), [contact](https://www.ibm.com/contact)) | Facility/plant operators, industry buyers, distributors ("Where to buy?") ([support](https://www.se.com/ww/en/work/support/)) | Industrial engineers/buyers — hero targets "600,000 TIA Portal users" ([home](https://www.siemens.com/global/en.html)); 30 verticals ([industries](https://www.siemens.com/en-us/industries/)) | Industrial/enterprise buyers via Industries + Outcomes + Businesses; B2C routed out at support ([solutions](https://www.honeywell.com/us/en/solutions), [support](https://www.honeywell.com/us/en/support)) |
| **Positioning & core offer** | Title: "AI Infrastructure, Secure Networking, and Software Solutions" ([home](https://www.cisco.com/), [screen](./screens/soft/cisco-home-hero.png)); hero headline itself: not verified (bot-blocked to fetchers; capture on file) | Hero: "Realizing ROI with AI agents" + "AI agents helped unlock USD 4.5 billion in productivity gains" — IBM as its own case study ([home](https://www.ibm.com/), [screen](./screens/soft/ibm-home-hero.png)) | Hero = rotating news/brand carousel; first slide "Named World's Most Sustainable Company 2026 by TIME Magazine and Statista" ([home](https://www.se.com/ww/en/), [screen](./screens/soft/schneider-home-hero.png)) | Hero: "What if AI could do an engineer's most tedious work?" (Eigen Engineering Agent) ([home](https://www.siemens.com/global/en.html), [screen](./screens/soft/siemens-home-hero.png)) | Hero: "Connections that drive true transformation." ([home](https://www.honeywell.com/us/en), [screen](./screens/soft/honeywell-home-full.png)) |
| **Solutions & Industries structure** | Categories Networking / Security / Collaboration / Observability ([annual report](https://www.sec.gov/Archives/edgar/data/858877/000085887725000152/csco014386-ars.pdf)); solutions hub "for Technology, Industry, and Business Needs" ([solutions](https://www.cisco.com/site/us/en/solutions/index.html), [screen](./screens/soft/cisco-solutions-overview.png)) | 4 axes: /products (flat 25+ list), /industries (19), /solutions, /services ([products](https://www.ibm.com/products), [industries](https://www.ibm.com/industries), [screen](./screens/soft/ibm-industries.png)) | **Industries ARE the solutions taxonomy**: 18 industry solutions + EcoStruxure platform layer + cross-cutting needs (Cybersecurity, Sustainability, Microgrids…) ([solutions hub](https://www.se.com/ww/en/work/solutions/), [screen](./screens/soft/schneider-solutions-industries.png)) | Products hub = marketplace-style catalog: "1 - 12 of 2048 results" incl. third-party sellers ([products](https://www.siemens.com/en-us/products/), [screen](./screens/soft/siemens-products-catalog.png)); 30 industries as flat cards ([industries](https://www.siemens.com/en-us/industries/), [screen](./screens/soft/siemens-industries.png)) | **Three-axis hub**: Industries (12) × Outcomes (6: Asset Mgmt, Energy Innovation, Operational Efficiency, OT Cybersecurity, Life Safety & Security, Workforce Excellence) × Businesses (3 subdomains) ([solutions](https://www.honeywell.com/us/en/solutions), [screen](./screens/soft/honeywell-solutions-3axis.png)) |
| **Navigation & service discovery** | Mega-menu confirmed on capture: L1 rail (Networking, Security, Collaboration, Computing, Observability, Software, Services (CX)) + promo panel ([screen](./screens/soft/cisco-nav-megamenu.png)); Portfolio Explorer per-industry use-case browser ([explorer](https://www.cisco.com/c/m/en_us/solutions/industries/portfolio-explorer.html)) | Support mega-menu = 8 described items ([home](https://www.ibm.com/)); primary mega-menu client-rendered — not captured (shadow-DOM web components); products page reads as flat index without JS ([products](https://www.ibm.com/products)) | Persistent 4-CTA rail on hubs: "Product Selector / Get a Quote / Where to buy? / Help Center" ([solutions](https://www.se.com/ww/en/work/solutions/), [support](https://www.se.com/ww/en/work/support/)); mega-menu was the focus of their redesign (hypothesis — [Contentsquare](https://contentsquare.com/customers/schneider-electric/)) | Discovery = **filtered search, not tree browsing**: faceted 2048-item catalog ([screen](./screens/soft/siemens-products-catalog.png)); nav client-rendered — menu not capturable; 404 pages offer search + home ([404](https://www.siemens.com/en-us/products/automation/)) | 2-level menu; corporate site is an umbrella routing to segment subdomains (buildings., automation., process., aerospace.) ([support](https://www.honeywell.com/us/en/support)); no site search found on hub pages ([solutions](https://www.honeywell.com/us/en/solutions)) |
| **Key CTAs & path to contact** | "Trials and demos" in header ([screen](./screens/soft/cisco-nav-megamenu.png)); sales forms offloaded to engage2demand.cisco.com with 14+ fields incl. Question Category routing ([form](https://engage2demand.cisco.com/LP=5642)); phone CTA "Call 1-800-553-6387" | Product "Free Trial"/"Buy Now" ([products](https://www.ibm.com/products)); contact = router page with explicit sales-vs-support split + phones, **no embedded form** ([contact](https://www.ibm.com/contact)) | "Get a Quote — Start your sales inquiry online and an expert will connect with you." ([support](https://www.se.com/ww/en/work/support/)); contact = **country selector** (~100 country sites), no global form ([contact](https://www.se.com/ww/en/work/support/country-selector/contact-us.jsp)) | Building X: "Request a consultation" (in-page form anchor) + "Start the tour" live demo ([Building X](https://www.siemens.com/en-us/products/building-x/)); contact split by audience (press/investors/careers…) + phones, form JS-injected ([contact](https://www.siemens.com/en-us/contact/)) | "Contact Sales" exits to Salesforce portal C3.honeywell.com; contact page = triage hub with **zero forms**; support page has the only real form (+ B2C phone lines on same page) ([contact](https://www.honeywell.com/us/en/contact), [support](https://www.honeywell.com/us/en/support)) |
| **Trust building** | Case-study hub + "Cisco on Cisco" self-reference ([cases](https://www.cisco.com/site/us/en/about/case-studies-customer-stories/index.html)); "70% of Fortune 100" SD-WAN claim (hypothesis — search snippet, [target page](https://www.cisco.com/site/us/en/solutions/networking/sdwan/catalyst/index.html)) | Outcome stats: "cut HR costs by 40%", "resolve 94% of employee requests automatically" ([home](https://www.ibm.com/)); named customers Bradesco ("65 million customers"), Honda ("67%") ([industries](https://www.ibm.com/industries)) | TIME award slide; McLaren Racing story; "800-bed hospital transitions to fully electric operations" ([healthcare](https://www.se.com/ww/en/work/solutions/healthcare)) | Building X: "30% Energy savings", ISO 27001:2022, UL Smart System Verified Platinum, named universities ([Building X](https://www.siemens.com/en-us/products/building-x/)) | "up to $225 billion in production costs" (Honeywell/MIT analysis) ([home](https://www.honeywell.com/us/en)); named stories: Motor Oil, Aruba Data Center ([home](https://www.honeywell.com/us/en)) |
| **Technical info presentation** | Strongest in group: HTML datasheets, At-a-Glance docs, FAQ, validated-design guides (102-page PDF) ([datasheet](https://www.cisco.com/c/en/us/solutions/collateral/enterprise-networks/sd-wan/nb-06-sd-wan-ds-cte-en.html), [CVD](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html)) | Central IBM Documentation hub + Fix Central ([docs](https://www.ibm.com/docs/en)); marketing layer outcomes-first, no spec tables observed ([consulting](https://www.ibm.com/consulting)) | "selectors, technical documentation, FAQs, discussions, how-to videos" + docs/software portal ([support](https://www.se.com/ww/en/work/support/), [downloads](https://www.se.com/ww/en/download/)); marketing layer sells outcomes with no product links in body ([healthcare](https://www.se.com/ww/en/work/solutions/healthcare)) | Interactive product demo tour + open API developer page + tabbed buying guide; deep docs delegated to SiePortal (access restricted) ([Building X](https://www.siemens.com/en-us/products/building-x/)) | Corporate layer story-led, no datasheets; deep taxonomy lives on segment subdomains (e.g. aerospace.honeywell.com product tree) ([example](https://aerospace.honeywell.com/us/en/products-and-services/products/navigation-and-sensors/navigation-systems/alternative-navigation-systems)) |
| **UX strengths / weaknesses** | **+** L1-rail mega-menu with promo panel ([screen](./screens/soft/cisco-nav-megamenu.png)); **+** Portfolio Explorer as industry finder; **−** dual URL architectures (/c/en/us vs /site/us/en) visible across links; **−** lead forms off-domain; **−** localized cookie banner + chatbot stack up over content on our capture ([screen](./screens/soft/cisco-nav-megamenu.png)) | **+** Explicit sales-vs-support contact split ([contact](https://www.ibm.com/contact)); **+** industry pages with outcome stats ([screen](./screens/soft/ibm-industries.png)); **−** industries list mixes granularities ("Financial services" + "Banking and financial markets"; "Government"/"Federal"/"Defense") ([industries](https://www.ibm.com/industries)); **−** support is a JS-only shell ([support](https://www.ibm.com/support)) | **+** Persistent conversion rail (4 CTAs) reused across hubs ([screen](./screens/soft/schneider-solutions-industries.png)); **+** industry-led taxonomy fits infrastructure buyers; **−** news-carousel hero instead of value prop ([screen](./screens/soft/schneider-home-hero.png)); **−** geo-fragmentation: global pages are thin routers to ~100 country sites ([contact](https://www.se.com/ww/en/work/support/country-selector/contact-us.jsp)) | **+** Honest model for huge catalogs: search-first + facets ([screen](./screens/soft/siemens-products-catalog.png)); **+** product pages with live demo/tour; **−** 30-item flat industry list with no grouping ([screen](./screens/soft/siemens-industries.png)); **−** entire nav client-rendered (no-JS/SEO fragility); **−** CMS-hash anchors as CTA targets ([Building X](https://www.siemens.com/en-us/products/building-x/)) | **+** Outcome axis (need-based entry) is rare and useful ([screen](./screens/soft/honeywell-solutions-3axis.png)); **−** mid-journey subdomain handoffs (different nav/design); **−** contact hub with no form + off-brand Salesforce sales form; **−** slow loads (5 of 9 research fetches timed out — hypothesis re: user-perceived speed) |

---

## 5. ASPIRATIONAL group — comparative table

| Axis | Stripe | Palantir | Vercel | NVIDIA | Cloudflare |
|---|---|---|---|---|---|
| **Primary audience** | By stage (Enterprises, Startups) + platforms/SaaS + developers (own nav axis) ([sitemap](https://stripe.com/sitemap)) | Defense/government + commercial enterprise + developers ("Start Building") ([defense](https://www.palantir.com/offerings/defense/), [home](https://www.palantir.com/)) | Developers self-serve + enterprise buyers + AI/agent builders ("Agent Stack" nav group) ([home](https://vercel.com)) | Dual-track enterprise + consumer in one nav; explicit segments: Developers, Partners, Startups ([home](https://www.nvidia.com/en-us/)) | Self-serve devs + tiered business plans + enterprise IT/security ([products](https://www.cloudflare.com/products/), [industry hub](https://www.cloudflare.com/industry-solutions/)) |
| **Positioning & core offer** | "Financial infrastructure to grow your revenue." ([home](https://stripe.com); title confirms, [screen](./screens/aspirational/stripe-home-full.png)); on our visit a promo modal covered the hero — see UX row | "AI-Powered Automation for Every Decision" over full-bleed product UI ([home](https://www.palantir.com/), [screen](./screens/aspirational/palantir-home-hero.png)) | "Agentic Infrastructure" — 2 words + dual CTA + logo wall ([home](https://vercel.com), [screen](./screens/aspirational/vercel-home-hero.png)) | "Artificial Intelligence Computing Leadership from NVIDIA"; hero is a news carousel ([home](https://www.nvidia.com/en-us/), [screen](./screens/aspirational/nvidia-home-hero.png)) | "Connect, protect, and build everywhere" + "connectivity cloud" frame ([home](https://www.cloudflare.com/en-gb/), [screen](./screens/aspirational/cloudflare-home-hero.png)) |
| **Solutions & Industries structure** | Products in 4 named groups (Payments / Revenue / Money Management / Platforms & Marketplaces); use-cases (10) + industries (11) as separate lists ([sitemap](https://stripe.com/sitemap)) | Platforms: AIP, Foundry, Gotham, Ontology, Apollo; 15+ industry "offerings" slugs ([sitemap](https://www.palantir.com/sitemap.xml), [AIP](https://www.palantir.com/platforms/aip/), [screen](./screens/aspirational/palantir-platform-aip.png)) | Products in 3 groups: Agent Stack / Core Platform / Tools ([home](https://vercel.com)); segments as Build-list (AI Apps, Web Apps, Marketing Sites, Platforms, Commerce) ([home](https://vercel.com)) | 3 axes: Products (11 groups) / Solutions (6) / Industries (14) ([home](https://www.nvidia.com/en-us/), [industries](https://www.nvidia.com/en-us/industries/), [screen](./screens/aspirational/nvidia-industries.png)) | 73 products in 7 groups (Compute/Storage/AI/Media/Security/Network/SASE/Zero Trust) + solution umbrellas (Application Services) ([products](https://www.cloudflare.com/products/), [solution](https://www.cloudflare.com/application-services/)) |
| **Navigation & service discovery** | Axes: product group / stage / use-case+industry, mirrored as case-study filters; "Guide me (Personalize)" ([sitemap](https://stripe.com/sitemap), [customers](https://stripe.com/customers)) | Slim header (platforms, Offerings, Impact, Docs) + shared "Latest News / Offerings / Latest Impact / Quick links" module site-wide ([AIP](https://www.palantir.com/platforms/aip/)) | Two dropdowns (Products, Resources) + flat Enterprise/Pricing; docs deeply integrated — product CTAs land on /docs ([sandbox](https://vercel.com/sandbox)); footer mega-taxonomy 12 categories ([home](https://vercel.com)) | Mega-menu with grouped sub-columns across 3 axes; multi-property ecosystem (build./developer./docs.nvidia.com) ([AI hub](https://www.nvidia.com/en-us/ai/)) | Axes by platform area / need / vertical; case-study finder facets (Industries/Regions/Use Cases/Products) ([cases](https://www.cloudflare.com/case-studies/)) |
| **Key CTAs & path to contact** | Paired self-serve + sales on every page ("Start now" → dashboard register / "Contact sales"); **multi-step qualifying sales form**: email+country → annual revenue → details, then "Chat with sales" / "Schedule a call" ([contact sales](https://stripe.com/contact/sales), [screen](./screens/aspirational/stripe-contact-sales.png)) | "Get Started" / "Request a Demo" → /contact/get-started/; "Start Building" → developers; contact page is a routing hub, no form ([contact](https://www.palantir.com/contact/)) | Dual-track everywhere: "Deploy now" vs "Talk to sales" ([screen](./screens/aspirational/vercel-home-hero.png)); sales form 5 fields + proof sidebar ("24x faster builds") ([contact](https://vercel.com/contact/sales)) | 3-way contact split (Support / Sales / Partners); qualifying sales form with Industry + Job Role dropdowns and support-diversion box ([contact](https://www.nvidia.com/en-us/contact/), [sales form](https://www.nvidia.com/en-us/contact/sales/)) | Self-serve "Start for free" vs "Talk to an expert" on solution pages ([application services](https://www.cloudflare.com/application-services/)); enterprise contact form bot-blocked to fetchers — capture only ([contact](https://www.cloudflare.com/plans/enterprise/contact/)) |
| **Trust building** | "$1.9T in payments volume processed in 2025", "99.999% historical uptime", "50% of Fortune 100" ([home](https://stripe.com)); outcome case cards ("$70M total increase in Postmates' annual revenue") ([customers](https://stripe.com/customers)); noted drift: "500M+ API requests per day" (home) vs "250M+" (enterprise) ([enterprise](https://stripe.com/enterprise)) | Outcome-stat storytelling: Sompo "$60 million improvement in profit", Walgreens "384 billion decisions every day" ([home](https://www.palantir.com/), [impact](https://www.palantir.com/impact/)); named gov bodies (U.S. Army, UK Defence) ([defense](https://www.palantir.com/offerings/defense/)) | Stat-in-sentence logo wall ("Zapier serves over 100 million monthly website visits on Vercel") ([home](https://vercel.com)); enterprise stats "40B+ requests/day", "99.99% uptime SLA" ([enterprise](https://vercel.com/enterprise), [screen](./screens/aspirational/vercel-enterprise.png)) | "81%" of TOP500 supercomputers; proprietary research as trust ("Over 1,000 industry telecom professionals surveyed") ([home](https://www.nvidia.com/en-us/), [industries](https://www.nvidia.com/en-us/industries/)) | Network as proof: "337 cities · 8 regions", "95% of the world's Internet-connected population is within 50 milliseconds", "20% of all websites" ([network](https://www.cloudflare.com/network/), [screen](./screens/aspirational/cloudflare-network-coverage.png)); per-case metric pairs (Shopify "3.4 T requests…") ([application services](https://www.cloudflare.com/application-services/)) |
| **Technical info presentation** | Real API code on marketing pages under "Under the hood" ([Connect](https://stripe.com/connect)); task-based docs tiles + AI agent skills ([docs](https://docs.stripe.com)) | Per-feature embedded product videos + "3 mns" read-time indicator + live-product CTAs (aip.palantir.com — access restricted) ([AIP](https://www.palantir.com/platforms/aip/)) | One-line install as hero device (`npm i ai`), SDK snippets, interactive demo, pricing estimator, tiered spec tables ([sandbox](https://vercel.com/sandbox), [AI](https://vercel.com/ai)) | Glossary + "What is X?" explainers + videos + spec depth via PDFs (GPU line card) and catalogs ([AI hub](https://www.nvidia.com/en-us/ai/), [line card](https://docs.nvidia.com/data-center-gpu/line-card.pdf)) | Learning Center + live proof tool "Test your latency" → speed.cloudflare.com ([network](https://www.cloudflare.com/network/)); serves markdown variant of site to AI agents (agentic-web UX) ([home fetch](https://www.cloudflare.com/)) |
| **UX strengths / weaknesses** | **+** Best-in-class progressive lead qualification ([screen](./screens/aspirational/stripe-contact-sales.png)); **+** complex-made-simple product storytelling; **−** on our visit a promotional modal fully covered the homepage hero — aggressive interruption pattern ([screen](./screens/aspirational/stripe-home-hero.png)) | **+** Product-UI-as-hero with declarative headline ([screen](./screens/aspirational/palantir-home-hero.png)); **+** outcome-stat carousel as primary proof; **−** site is a JS shell to non-browser clients (fetch-hostile — relevant only as robustness note); **−** contact has no direct form (router → sub-page) ([contact](https://www.palantir.com/contact/)) | **+** 2-word hero + dual-track CTA + logo wall = fastest scannable value prop in the set ([screen](./screens/aspirational/vercel-home-hero.png)); **+** stat-in-sentence proof pattern; **−** no marketing products hub (/products is an app shell) — nav depends on dropdowns ([products](https://vercel.com/products)) | **+** Recurring anchored page template (Overview → What is X → Use Cases → Resources → Next Steps) ([AI hub](https://www.nvidia.com/en-us/ai/)); **+** report-led industry funnel ([screen](./screens/aspirational/nvidia-industries.png)); **−** news-carousel hero buries value prop ([screen](./screens/aspirational/nvidia-home-hero.png)); **−** ecosystem spans many subdomains — orientation cost | **+** Reusable module system (stats band, logo wall, pillar trio, case strip) ([screen](./screens/aspirational/cloudflare-home-full.png)); **+** network/coverage storytelling directly relevant to our Connectivity pillar ([screen](./screens/aspirational/cloudflare-network-coverage.png)); **−** vertical list not exposed on industry hub page itself ([industry hub](https://www.cloudflare.com/industry-solutions/)) |

---

## 6. Cross-market synthesis

### Three shared market patterns

1. **Dual-axis IA (capability × industry) is the category default.** Marlink's single mega-menu carries Portfolio/Industry/Services axes ([home](https://marlink.com/)); Speedcast, NSSLGlobal and IEC pair solution trees with market hubs ([screens](./screens/hard/speedcast-solutions-filter.png), [nssl](./screens/hard/nsslglobal-solutions-overview.png), [iec](./screens/hard/iec-telecom-solution-finder.png)); every SOFT player runs an industries hub ([cisco](./screens/soft/cisco-industries.png), [ibm](./screens/soft/ibm-industries.png), [schneider](./screens/soft/schneider-solutions-industries.png), [siemens](./screens/soft/siemens-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png)). → Validates the brief's "two sections + cross-links" IA; Navarino is the lone single-axis exception and pays for it with no industry entry points.

2. **Trust is quantified, certified, and placed early.** Hero-adjacent stat rows appear at Navarino ("13,000+ vessels" on the hero — [screen](./screens/hard/navarino-home-hero.png)), Marlink (stat bands on home/industry — [screen](./screens/hard/marlink-industry-shipping.png)), Cloudflare (network numbers — [screen](./screens/aspirational/cloudflare-network-coverage.png)), Vercel (stat-in-sentence logo wall — [screen](./screens/aspirational/vercel-home-hero.png)); certifications strips are standard in maritime (Marlink ISO/IACS, Navarino type approvals — [screen](./screens/hard/navarino-cybersecurity-angel.png)). **Caveat found:** cross-page stat drift at Marlink (99.9 vs 99.99), NSSLGlobal (50/55/56 years), Stripe (500M vs 250M API req/day) — all cited in tables above.

3. **Sales and support are split, and the weakest link is the contact page.** Explicit sales-vs-support splits: IBM ([contact](https://www.ibm.com/contact)), NVIDIA 3-way ([contact](https://www.nvidia.com/en-us/contact/)), IEC (form vs ticket portal). In HARD, two of five have **no web form at all** (Navarino, Speedcast — directory-only; [screens](./screens/hard/navarino-contact-directory.png), [speedcast](./screens/hard/speedcast-contact-directory.png)); the aspirational tier instead qualifies leads progressively (Stripe multi-step — [screen](./screens/aspirational/stripe-contact-sales.png)).

### Three important differences

1. **Discovery tooling ranges from nothing to faceted search.** Navarino: no search, no filters ([home](https://navarino.co.uk/)); Marlink/NSSL: plain site search; Speedcast: category filter band ([screen](./screens/hard/speedcast-solutions-filter.png)); IEC: 8-facet finder ([screen](./screens/hard/iec-telecom-solution-finder.png)); Siemens: full search-first catalog of 2048 items ([screen](./screens/soft/siemens-products-catalog.png)). The market has no *well-designed mid-size* finder — they are either absent or expert-jargon tools.

2. **Curation vs catalog.** Mid-size maritime players curate few pillars with narrative pages (Marlink 5 categories — [screen](./screens/hard/marlink-solutions-overview.png); Navarino 4 hubs — [screen](./screens/hard/navarino-solutions-technology.png)); conglomerates expose the full catalog behind filters (Siemens 2048 SKUs, Cloudflare 73 products in 7 groups). These are different answers to cognitive load: story-first vs filter-first. Asterra's scale (5 pillars) sits firmly on the curation side.

3. **Static PDF proof vs interactive proof.** HARD relies on brochure PDFs (Speedcast 17+, many dated 2020–21 — [all solutions](https://www.speedcast.com/our-solution/all-solutions/); IEC brochures + Download Center) and has almost no on-page spec tables. Aspirational players embed proof: live latency test (Cloudflare — [network](https://www.cloudflare.com/network/)), interactive demo + pricing estimator (Vercel — [sandbox](https://vercel.com/sandbox)), code "Under the hood" (Stripe — [Connect](https://stripe.com/connect)), product tours (Siemens Building X).

### Three opportunities for the Asterra redesign

1. **Make the Solution Finder the signature interaction.** The only true finder in our direct market (IEC) is buried on a catalog page and gated by unexplained jargon (COTP/COTM — [screen](./screens/hard/iec-telecom-solution-finder.png)); two competitors offer no discovery tooling at all. A plain-language industry × need finder with aspirational-grade presentation (Stripe-level clarity, bento results) would be genuinely differentiating — and it is already in our brief's scope.

2. **Win the inquiry flow.** Combine the best HARD pattern (Marlink's single routed form with "routed to a regional specialist" reassurance — [screen](./screens/hard/marlink-contact-form.png)) with the aspirational pattern (Stripe's progressive qualification — [screen](./screens/aspirational/stripe-contact-sales.png)): contextual "Talk to an expert" on every solution page, with solution + industry pre-filled. Avoid the observed anti-patterns: form-less directories (Navarino, Speedcast), off-domain forms (Honeywell → C3 Salesforce, Cisco → engage2demand), and label/URL mismatches ("Get in Touch" → /sign-up/).

3. **Build trust as a reusable, single-source system.** A tokenized "proof block" (stats + certifications + named-outcome case cards in Palantir/Cloudflare style: one claim + one number + one source) prevents the stat drift observed at 3+ competitors and lets every solution/industry page carry consistent evidence. Add one lightweight *interactive* proof (e.g., a coverage/uptime rail) — the pattern the HARD group entirely lacks; full coverage map stays out of scope per brief.

### Three open questions for PM / designer

1. **Contact model:** single routed form (Marlink-style), progressive multi-step qualification (Stripe-style), or per-segment contacts (Speedcast-style)? The brief currently says "simple form" — do we add routing fields (industry, solution of interest) at v1, and where do submissions go (email vs CRM)?
2. **Catalog depth:** if the portfolio stays ≤ ~30 named offerings, curation-first IA needs no faceted search and the Solution Finder can be a guided filter; if hardware/accessories will be listed (IEC/Siemens scenario), we need facets and a product content model. Which is it — and does the Finder return *pages* or *cards with inquiry CTAs*?
3. **Support surface at v1:** competitors treat support as a trust asset (Speedcast Support Center page — [screen](./screens/hard/speedcast-support-center.png)) but fragment it across subdomains (IEC ×3). Our brief defers the portal — what is the marketing-site support promise: 24/7 claim + contacts only, or a public FAQ/knowledge layer?

---

## 7. Screenshot index (`screens/`)

**Marlink (8):** [home-hero](./screens/hard/marlink-home-hero.png) · [home-full](./screens/hard/marlink-home-full.png) · [solutions-overview](./screens/hard/marlink-solutions-overview.png) (full) · [industry-shipping](./screens/hard/marlink-industry-shipping.png) · [cybersecurity](./screens/hard/marlink-cybersecurity.png) · [support](./screens/hard/marlink-support.png) · [contact-top](./screens/hard/marlink-contact-top.png) · [contact-form](./screens/hard/marlink-contact-form.png) — routed form fields visible.

**Navarino (5):** [home-hero](./screens/hard/navarino-home-hero.png) — hero stat + 3D ship · [home-full](./screens/hard/navarino-home-full.png) · [solutions-technology](./screens/hard/navarino-solutions-technology.png) (full) · [cybersecurity-angel](./screens/hard/navarino-cybersecurity-angel.png) · [contact-directory](./screens/hard/navarino-contact-directory.png) (full) — office cards, no form; note a large empty vertical band mid-page on the full-page capture (possible lazy-load artifact).

**NSSLGlobal (5):** [home-hero](./screens/hard/nsslglobal-home-hero.png) · [home-full](./screens/hard/nsslglobal-home-full.png) · [solutions-overview](./screens/hard/nsslglobal-solutions-overview.png) (full) · [industry-maritime](./screens/hard/nsslglobal-industry-maritime.png) · [contact-form](./screens/hard/nsslglobal-contact-form.png) (full).

**IEC Telecom (5):** [home-hero](./screens/hard/iec-telecom-home-hero.png) · [home-full](./screens/hard/iec-telecom-home-full.png) · [solution-finder](./screens/hard/iec-telecom-solution-finder.png) — 8 facet groups confirmed · [industry-maritime](./screens/hard/iec-telecom-industry-maritime.png) · [contact-form](./screens/hard/iec-telecom-contact-form.png) (full).

**Speedcast (6):** [home-hero](./screens/hard/speedcast-home-hero.png) · [home-full](./screens/hard/speedcast-home-full.png) · [solutions-filter](./screens/hard/speedcast-solutions-filter.png) — category filter band; cookie banner visible (interior page, consent given on home only) · [industry-maritime](./screens/hard/speedcast-industry-maritime.png) · [support-center](./screens/hard/speedcast-support-center.png) · [contact-directory](./screens/hard/speedcast-contact-directory.png) (full) — no form.

**Cisco (5):** [home-hero](./screens/soft/cisco-home-hero.png) · [home-full](./screens/soft/cisco-home-full.png) · [nav-megamenu](./screens/soft/cisco-nav-megamenu.png) — open menu: L1 rail + promo cards; localized cookie banner + chatbot also visible · [solutions-overview](./screens/soft/cisco-solutions-overview.png) · [industries](./screens/soft/cisco-industries.png).

**IBM (4):** [home-hero](./screens/soft/ibm-home-hero.png) · [home-full](./screens/soft/ibm-home-full.png) · [industries](./screens/soft/ibm-industries.png) (full). Mega-menu not captured — client-rendered web components resisted automation.

**Schneider Electric (3):** [home-hero](./screens/soft/schneider-home-hero.png) · [home-full](./screens/soft/schneider-home-full.png) · [solutions-industries](./screens/soft/schneider-solutions-industries.png) (full).

**Siemens (4):** [home-hero](./screens/soft/siemens-home-hero.png) · [home-full](./screens/soft/siemens-home-full.png) · [products-catalog](./screens/soft/siemens-products-catalog.png) — faceted 2048-item catalog · [industries](./screens/soft/siemens-industries.png) (full). Mega-menu not captured — client-rendered.

**Honeywell (2):** [home-full](./screens/soft/honeywell-home-full.png) · [solutions-3axis](./screens/soft/honeywell-solutions-3axis.png) (full) — Industries/Outcomes/Businesses hub. (home-hero viewport shot failed on a slow load; home-full covers the hero.)

**Stripe (3):** [home-hero](./screens/aspirational/stripe-home-hero.png) — promotional modal covering hero on our visit · [home-full](./screens/aspirational/stripe-home-full.png) · [contact-sales](./screens/aspirational/stripe-contact-sales.png) (full) — multi-step qualification.

**Palantir (3):** [home-hero](./screens/aspirational/palantir-home-hero.png) — product-UI hero, dark · [home-full](./screens/aspirational/palantir-home-full.png) · [platform-aip](./screens/aspirational/palantir-platform-aip.png).

**Vercel (3):** [home-hero](./screens/aspirational/vercel-home-hero.png) — 2-word hero, dual CTA, logo wall; light theme on our capture (theme adapts to system preference) · [home-full](./screens/aspirational/vercel-home-full.png) · [enterprise](./screens/aspirational/vercel-enterprise.png).

**NVIDIA (3):** [home-hero](./screens/aspirational/nvidia-home-hero.png) — news-carousel hero · [home-full](./screens/aspirational/nvidia-home-full.png) · [industries](./screens/aspirational/nvidia-industries.png).

**Cloudflare (3):** [home-hero](./screens/aspirational/cloudflare-home-hero.png) · [home-full](./screens/aspirational/cloudflare-home-full.png) · [network-coverage](./screens/aspirational/cloudflare-network-coverage.png) — network stats page.

---

## 8. Limitations & access notes

- **Bot-blocked to text fetchers (403):** cisco.com, ibm.com, se.com, Cloudflare contact pages — facts for those pages come from rendered-text proxies and search-indexed snippets; browser captures succeeded. Claims sourced from snippets are explicitly marked **(hypothesis)** in the tables (e.g., Cisco "70% of Fortune 100").
- **Client-rendered navigation** (IBM, Siemens, and Cloudflare's top nav) could not be expanded by automation — mega-menu internals for those three are documented from markup/URL structure only, not screenshots.
- **Access restricted (login-gated), content not assumed:** Marlink Portal360/OnePortal/SkyFile, Navarino COSMO (cosmo.navarino.gr), Siemens SiePortal, Palantir aip.palantir.com / build.palantir.com, Honeywell C3 Salesforce portal.
- **Visit-specific artifacts:** Stripe showed a promotional modal over the hero; Vercel rendered in light theme (system-preference dependent); Cisco showed a Ukrainian-localized cookie banner (geo-IP); Speedcast interior pages show the cookie banner (consent was per-page-load on our run). Honeywell loads were intermittently very slow (5 of 9 research fetches timed out) — treat perceived-performance conclusions as **(hypothesis)**.
- Palantir's site serves a JS-only shell to non-browser clients; its page facts were read via a rendered-text proxy of the same URLs.
- UX write-ups located during research: Navarino redesign by KOTA ([kota.co.uk/work/navarino](https://kota.co.uk/work/navarino)); Speedcast rebrand by Everhouse ([ever.house/work/speedcast](https://ever.house/work/speedcast/)); Cisco redesign metrics by Tendo ([tendocom.com](https://tendocom.com/case-studies/cisco-website-redesign/)) **(hypothesis — vendor-reported)**; Schneider mega-menu study by Contentsquare ([contentsquare.com](https://contentsquare.com/customers/schneider-electric/)); Baymard benchmark for se.com ([baymard.com](https://baymard.com/ux-benchmark/case-studies/schneider-electric)); Stripe/Vercel design-system write-ups ([stripe.design](https://stripe.design/), [Geist](https://vercel.com/geist/introduction)).

---

## 9. Focused dimension — solution-fit clarity + pre-contact trust

The shared pain from §6: a user struggles to **(a) quickly grasp which solution fits
them** and **(b) trust the provider's reliability before any human contact**. This
section scores that single dimension. It does **not** re-run the §3–§5 competitor
analysis — it reuses already-gathered sources/screenshots for four examples and adds
one new cross-category benchmark (**NerdWallet**, gathered fresh — see §9.4).

**Examples chosen** (span weak→strong on this dimension): **Marlink** and **IEC Telecom**
(in-market, from §3), **Cloudflare** and **Stripe** (aspirational, from §5), **NerdWallet**
(new cross-category — best-in-class guided "find the right option + trust before you
commit").

### 9.1 Evaluation criteria (1–5)

| # | Criterion | 1 = | 5 = |
|---|---|---|---|
| C1 | **Guided solution discovery** | must browse raw catalog | guided finder routes situation → matched solution |
| C2 | **Industry / use-case framing** | product-only | rich pages re-packaging solutions in the buyer's own context |
| C3 | **Plain-language explanation** | jargon or empty | layered plain language, progressive depth |
| C4 | **Quantified, specific proof** | none / vague | dense, specific, verifiable stats placed early |
| C5 | **Certification / methodology visibility** | none | clear, contextual certs/compliance (or transparent "how we rate") |
| C6 | **Claim consistency** | contradictory / stale numbers | coherent, current, self-consistent |
| C7 | **Low-friction contextual next step** | dead-end directory / off-domain | context-carrying inquiry, minimal friction |
| C8 | **Self-serve interactive validation** | none | user can verify a claim before contact (demo / tool / compare) |

C1–C3 = "which solution fits me"; C4–C6, C8 = "can I trust them"; C7 = the bridge once convinced.

### 9.2 Scores

| Criterion | Marlink | IEC Telecom | Cloudflare | Stripe | NerdWallet |
|---|---|---|---|---|---|
| **C1 Guided discovery** | **2** — no finder; mega-menu + site search only (§3) | **4** — real 8-facet finder, but expert jargon (COTP/COTM) ([finder](./screens/hard/iec-telecom-solution-finder.png)) | **4** — "by need" taxonomy + "Get a recommendation" *(reported, not captured)* (§5) | **4** — product/stage/use-case axes + "Guide me" *(reported)* ([sitemap](https://stripe.com/sitemap)) | **5** — dedicated quiz "I need a credit card for… → Get results in minutes" ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) |
| **C2 Industry/use-case framing** | **5** — industry submenu + sector-framed shipping page ([shipping](./screens/hard/marlink-industry-shipping.png)) | **3** — vertical markets, but thin maritime lead-form hub ([maritime](./screens/hard/iec-telecom-industry-maritime.png)) | **4** — vertical pages (public sector, banking) (§5) | **4** — by-industry + by-use-case lists ([sitemap](https://stripe.com/sitemap)) | **4** — goal/use-case tabs (Cash Back, Balance Transfer, Travel, College Student) ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) *(consumer use-case, not industry)* |
| **C3 Plain-language** | **4** — benefits narrative + concept diagrams, low jargon (§3) | **2** — unexplained facet jargon (COTP/COTM) ([finder](./screens/hard/iec-telecom-solution-finder.png)) | **5** — Learning Center + clear pillar value props (§5) | **5** — complex-made-simple + "Under the hood" ([home](./screens/aspirational/stripe-home-full.png)) | **5** — plain editorial + per-card pros/cons ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C4 Quantified proof** | **5** — 1,700+ specialists, 15k+ vessels, 99.9% SLA, 24.7% market share ([home](./screens/hard/marlink-home-hero.png), [shipping](./screens/hard/marlink-industry-shipping.png)) | **2** — lone "25+ years"; partners unnamed ([home](./screens/hard/iec-telecom-home-hero.png)) | **5** — 20% of all websites, 234B threats/day, 337 cities ([network](./screens/aspirational/cloudflare-network-coverage.png)) | **5** — $1.9T volume, 99.999% uptime, 50% of Fortune 100 ([home](./screens/aspirational/stripe-home-full.png)) | **4** — per-card "NerdWallet rating 5.0" + concrete fees/rewards; few self-stats ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C5 Certs / methodology** | **5** — ISO 27001/9001/14001, IACS UR E26/E27, NIS2, IEC 62443 ([cyber](./screens/hard/marlink-cybersecurity.png)) | **3** — "IMO Compliance (Cybersecurity)" + SLA tiers (§3) | **4** — Forrester Wave / IDC MarketScape *(reported, not captured)* ([app services](https://www.cloudflare.com/application-services/)) | **4** — PCI / compliance messaging (§5) | **4** — transparent "1 to 5" rating method + "FACT CHECKED / EDITORIAL INTEGRITY" + issuer-independence disclaimer ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C6 Claim consistency** | **2** — stat drift 99.9% vs 99.99%, 135+ vs 200+ countries (§3, §6) | **3** — nav-vs-form taxonomy mismatch (§3) | **4** — consistent, current numbers *(not fully audited)* (§5) | **4** — minor drift 500M vs 250M API req/day (§5) | **4** — "Last updated" date + fact-check label aid currency *(not audited across pages)* ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) |
| **C7 Contextual next step** | **5** — single routed form, "routed to a regional specialist" ([contact](./screens/hard/marlink-contact-form.png)) | **3** — generic "SEND" form everywhere; support split across 3+ subdomains ([contact](./screens/hard/iec-telecom-contact-form.png)) | **4** — "Start for free" vs "Talk to an expert" split *(form bot-blocked)* (§5) | **5** — progressive multi-step qualification ([contact-sales](./screens/aspirational/stripe-contact-sales.png)) | **5** — one-click "APPLY NOW" from the recommendation, no account ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) *(apply = contact analog)* |
| **C8 Interactive validation** | **2** — one gated PDF; no live tool (§3) | **2** — brochure Download Center only (§3) | **5** — live "Test your latency" tool ([network](./screens/aspirational/cloudflare-network-coverage.png)) | **5** — interactive demos + "Under the hood" code ([home](./screens/aspirational/stripe-home-full.png)) | **5** — finder + "Add to compare" side-by-side + pros/cons, all no-contact ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) |
| **Total (/40, unweighted)** | **30** | **22** | **35** | **36** | **36** |

*Totals are an unweighted sum for orientation only — the criteria are not equally
important for Asterra (C1, C4, C7 arguably weigh most for our maritime-first buyer).*

**Read of the scores:** the two halves of the pain split cleanly. Marlink is strong on
*trust* (C4/C5) and *contact* (C7) but weak on *discovery* (C1), *interactivity* (C8),
and *consistency* (C6). IEC is the only in-market player with a real finder, yet its
jargon (C3) and thin proof (C4) undercut it. The high scorers (Stripe, NerdWallet,
Cloudflare) win by combining a guided/low-jargon path in with self-serve validation and
consistent, specific proof — exactly the combination none of the HARD group achieves.

### 9.3 Mechanisms to port into Asterra

**1. Plain-language Solution Finder (situation → recommended solution, no gate).**
- *How it works:* one opening question in the buyer's own words ("What do you need
  connectivity / security for?"), then 2–3 essential questions (industry, primary need,
  optional region) → a ranked recommended solution/bundle with pros/cons and a
  context-carrying "Talk to an expert" CTA. No login, no contact info required to see
  results.
- *Problem solved:* the core pain — the user can't self-map a complex catalog to their
  situation. Removes both the "browse everything yourself" friction and the jargon wall.
- *Example from:* **NerdWallet CardFinder** — "I need a credit card for… → Get results in
  minutes", "no contact information is required", pros/cons per pick ([finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)).
  In-market proof it's expected: IEC Telecom's finder ([finder](./screens/hard/iec-telecom-solution-finder.png)) — but adopt NerdWallet's plain language, **not** IEC's COTP/COTM jargon.

**2. Single-source "Proof Block" (coverage/uptime stats + certifications + named-outcome cases).**
- *How it works:* one reusable, tokenized component fed from a **single data source** so a
  figure can't read 99.9% in one place and 99.99% in another; combines a compact stat trio
  (coverage / uptime / scale) + a certification/compliance strip + 1–2 named-outcome case
  cards (claim + number + source).
- *Problem solved:* builds pre-contact trust with verifiable specifics **and** eliminates
  the credibility-eroding stat drift we documented at Marlink (99.9 vs 99.99) and Stripe
  (500M vs 250M) — inconsistency is itself a reliability signal.
- *Example from:* **Cloudflare's** quantified network proof ([network](./screens/aspirational/cloudflare-network-coverage.png)); the single-source rule is motivated by Marlink's drift (§6).

**3. Contextual, reassuring inquiry with light progressive qualification.**
- *How it works:* every solution/service page carries a "Talk to an expert" CTA that opens
  a short 2-step form **pre-filled with the solution + industry being viewed**, plus a
  reassurance line ("routed to a regional specialist — reply within one business day").
  Qualifies the lead (industry, need) without a heavy wizard.
- *Problem solved:* converts the just-convinced user in context, avoiding the group's
  dead-ends — Navarino and Speedcast have **no form at all** (directory only), Honeywell/
  Cisco push to off-domain forms.
- *Example from:* **Marlink's** routed form + "routed to a regional specialist" ([contact](./screens/hard/marlink-contact-form.png)); progressive qualification from **Stripe's** contact-sales flow ([contact-sales](./screens/aspirational/stripe-contact-sales.png)).

### Mechanism NOT to port

**Expert faceted product catalog / spec-filter** (technical facets like operator, speed
tier, set-up type over a large SKU list) — as used by IEC Telecom's finder (COTP/COTM/
operator/speed facets, [finder](./screens/hard/iec-telecom-solution-finder.png)) and Siemens' 2048-item filtered catalog ([catalog](./screens/soft/siemens-products-catalog.png)).
*Why it won't work for Asterra:* we have ~5 curated solution pillars, not thousands of
SKUs. A heavy facet filter (a) presumes the user already knows the technical vocabulary —
the opposite of our confused-buyer problem — and (b) adds cognitive load and internal
jargon that worsens "which fits me?". The facet catalog only pays off at conglomerate SKU
scale; for a small curated portfolio the plain-language guided finder (Mechanism 1) does
the job.

### 9.4 New evidence — NerdWallet (gathered 2026-07-22)

Captured live via Playwright (fetchers get HTTP 404; real-browser render used). Screenshots
in [`screens/dimension-fit-trust/`](./screens/dimension-fit-trust/).

- **CardFinder quiz** ([nerdwallet-card-finder.png](./screens/dimension-fit-trust/nerdwallet-card-finder.png)) — verbatim: "CardFinder: Credit Card Recommendation Quiz"; "Get results in minutes:"; "Why are you looking for a new credit card? → I need a credit card for… → GET STARTED"; "This service is FREE, will not affect your credit score, and no contact information is required."; "It won't affect your credit score — There's no hard credit check required to see your results."; "See smart recommendations in minutes — We only ask questions that are essential. No contact info required."; "Tap into objective ratings — See the pros and cons of each credit card we recommend." (https://www.nerdwallet.com/card-finder-jump)
- **Best Cash Back list** ([nerdwallet-ratings-comparison.png](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)) — verbatim: "13 Best Cash Back Credit Cards of July 2026"; "Written by Jae Bratton, Reviewed by Caitlin Mims, Edited by Paul Soucy — Last updated on July 16, 2026 — FACT CHECKED — EDITORIAL INTEGRITY"; "Our pick for: All-around cash back"; "NerdWallet rating ★★★★★ 5.0"; "Add to compare"; "APPLY NOW on Chase's website"; methodology: "Our star ratings… assess the features of a card, score those features according to how they compare with other options on the market, and assign the card a rating of 1 to 5."; independence disclaimer: card info "has been collected by NerdWallet and has not been reviewed or provided by the issuer of this card." (https://www.nerdwallet.com/credit-cards/best/cash-back)
- *Caveat:* an explicit "Why you can trust NerdWallet" box was **not found** on the cash-back page — the trust apparatus there is the byline + FACT CHECKED/EDITORIAL INTEGRITY labels + ratings methodology + independence disclaimer above.

---

## 10. Five distinct discovery-and-trust UX patterns

Five **principally different** paradigms for the combined task — *help the user quickly
find the right solution AND trust the provider before first contact*. These are not
variations of one idea: each has a different core mechanism (interview vs. identity vs.
attributes vs. experience vs. evidence). Grounded in the examples already gathered in
§3–§9. C-refs point to the §9.1 criteria the pattern primarily serves.

### 10.1 Guided recommender (diagnostic wizard) — *system-led interview → recommendation*
- **How it works:** the system asks a short sequence of plain-language questions about the
  user's context/need, then returns a ranked, personalized recommendation (with pros/cons)
  and a next step. The user *answers*, the system *leads*. Serves C1 (discovery) with a
  side of C3/C7.
- **Where applied:** NerdWallet CardFinder ("I need a credit card for… → results in
  minutes", [finder](./screens/dimension-fit-trust/nerdwallet-card-finder.png)); Stripe "Guide me (Personalize)" ([sitemap](https://stripe.com/sitemap)); Cloudflare "Get a recommendation" *(reported, §5)*; onboarding recommenders (Betterment/Wealthfront). In our market only IEC approximates it — as a self-directed facet filter, not a guided interview ([finder](./screens/hard/iec-telecom-solution-finder.png)).
- **Fits when:** the catalog is confusing to a non-expert; decision variables are few and
  encodable; the buyer is early/unsure.
- **Doesn't fit when:** the portfolio is tiny/obvious (overkill); matching logic is fuzzy
  or political (a wrong recommendation erodes the very trust you want); buyers are experts
  who resent being "walked through" and want direct access.

### 10.2 Segment/industry-led self-identification — *"choose your world" → curated framed page*
- **How it works:** the top-level entry is *who you are* (industry / segment / role). The
  user self-selects their sector; the destination re-frames the same solutions in that
  sector's language and shows sector-specific proof (cases, compliance). Discovery by
  recognition, not Q&A. Serves C2 (+ C5 via sector proof).
- **Where applied:** the category default (§6, pattern 1) — Marlink industry submenu +
  shipping page ([shipping](./screens/hard/marlink-industry-shipping.png)); Speedcast industries hub; Cisco/IBM/Siemens/Honeywell industries hubs ([ibm](./screens/soft/ibm-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png)); Cloudflare verticals.
- **Fits when:** the same capabilities serve very different sectors with different language,
  priorities and compliance; buyers self-identify strongly by industry (maritime,
  government, energy); you actually have sector proof.
- **Doesn't fit when:** sectors are too alike to justify separate pages (duplication cost);
  you lack sector proof, so pages read as filler (IEC's thin maritime hub, [maritime](./screens/hard/iec-telecom-industry-maritime.png)); or the buyer's need cuts across industries.

### 10.3 Faceted filter + side-by-side comparison — *self-directed attribute selection*
- **How it works:** the user narrows a catalog by applying attribute filters and/or compares
  a shortlist on shared specs to decide. Analytical and user-led; the system offers no
  recommendation. Serves C1/decision, no C-trust of its own.
- **Where applied:** Siemens' 2048-item faceted catalog ([catalog](./screens/soft/siemens-products-catalog.png)); IEC's operator/speed/set-up facets ([finder](./screens/hard/iec-telecom-solution-finder.png)); NerdWallet "Add to compare" ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)); AWS/e-commerce filters; plan-comparison tables.
- **Fits when:** a large catalog with well-defined, comparable attributes; expert buyers who
  already know their criteria; a late-stage choice between known options.
- **Doesn't fit when:** a small curated portfolio (nothing to filter); buyers don't know the
  vocabulary, so facets become a jargon wall (COTP/COTM, §9); or offerings aren't cleanly
  attribute-comparable.

### 10.4 Interactive proof / self-serve validation — *trust by doing, not reading*
- **How it works:** the user validates a capability *themselves* before contact — a live
  tool, sandbox, calculator/estimator, or interactive product tour turns a claim into
  first-hand experience. Serves C8 (+ strong C4 credibility).
- **Where applied:** Cloudflare "Test your latency" ([network](./screens/aspirational/cloudflare-network-coverage.png)); Vercel Sandbox + pricing estimator ([enterprise](./screens/aspirational/vercel-enterprise.png)); Stripe "Under the hood" live code + demos ([home](./screens/aspirational/stripe-home-full.png)); Siemens Building X live tour *(reported, §4)*. The HARD group has essentially none (§9, C8 all ≤2).
- **Fits when:** the value is demonstrable digitally (coverage, speed, an API, a workflow);
  technical evaluators want evidence over assertions; you can safely expose a slice.
- **Doesn't fit when:** the offering is physical / managed-service with no digital surface to
  try (much of maritime hardware + installation); a credible tool is costly to build; or a
  shallow gimmick would undercut trust more than it helps.

### 10.5 Evidence & authority stack — *substantiated assertion of reliability*
- **How it works:** trust is asserted but *proven* — quantified stats (coverage/uptime/scale)
  + certifications/compliance + named-outcome case studies + logos/testimonials +
  demonstrated editorial expertise, placed early and kept consistent. Serves C4/C5/C6.
- **Where applied:** Marlink stats + certs ([cyber](./screens/hard/marlink-cybersecurity.png), [home](./screens/hard/marlink-home-hero.png)); Palantir outcome-stat impact stories ([home](./screens/aspirational/palantir-home-hero.png)); Stripe/Cloudflare stat bands ([stripe](./screens/aspirational/stripe-home-full.png), [cloudflare](./screens/aspirational/cloudflare-network-coverage.png)); NVIDIA proprietary research ([industries](./screens/aspirational/nvidia-industries.png)); NerdWallet ratings methodology + editorial integrity ([ratings](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)).
- **Fits when:** buyers are risk/compliance-sensitive and won't reach out without confidence;
  you have real, specific, verifiable proof; long/high-stakes cycles.
- **Doesn't fit when:** you lack concrete proof, so claims stay vague (IEC's lone "25+ years",
  §9); or claims are inconsistent — stat drift itself signals unreliability (Marlink
  99.9↔99.99, §6). Note: it *reinforces* trust but does nothing for discovery on its own.

### 10.6 Fit for Asterra Networks

Basis: [`../CLAUDE.md`](../CLAUDE.md) (maritime-first; ~5 curated solution pillars; primary
conversion = qualified inquiry from a solution page; Solution Finder in scope; no homepage
quote CTA) + the findings in §6 and §9.

**Best fit → Pattern 1, Guided recommender (the in-scope "Solution Finder").** Three reasons:
1. **It hits the market's unsolved pain and differentiates.** Across all 15 sites (§9), only
   IEC has a real finder and it's jargon-gated; the rest force catalog-browsing. A
   plain-language guided finder is a genuine differentiator — and it is already committed in
   [`../CLAUDE.md`](../CLAUDE.md) §7 scope.
2. **Asterra's shape is ideal input.** ~5 curated pillars × a defined industry set =
   *few* decision variables and *encodable* matching logic — the exact condition under which
   a wizard yields trustworthy recommendations (unlike a 2048-SKU catalog). The maritime-first
   fleet-operator persona is often non-expert across the full stack, so guidance beats browse.
3. **It lands straight in the primary conversion, in context.** The conversion model is a
   qualified inquiry from a solution page with no homepage quote CTA; a finder that ends in a
   matched solution + pre-filled "Talk to an expert" (the §9.3 contextual-inquiry mechanism)
   converts the just-oriented buyer without a dead-end.

**Second, conditionally → Pattern 2, Industry-led self-identification.** It is the category
default, matches how these buyers self-identify (maritime / government / energy), and is being
built anyway as the Industries section. It should become the *primary* discovery path over the
wizard **if** (a) discovery research shows buyers self-identify by sector faster than by need,
**or** (b) we cannot encode trustworthy matching logic (bad recommendations would poison
trust), **or** (c) build constraints defer the finder. It ranks second because it is
non-differentiating and, within a sector, still leaves "which of our five pillars do I need?"
partly unanswered — so it complements rather than replaces Pattern 1, and it depends on having
real sector proof (else it reads as filler, §9).

**Does not fit → Pattern 3, Faceted filter / comparison.** Asterra has ~5 curated pillars, not
a large comparable-SKU catalog, so there is little to filter and faceting is overkill; the
primary buyer is often non-expert, and facets expose internal vocabulary (the COTP/COTM failure
at IEC, §9); and a managed-service/solution offering is not cleanly attribute-comparable
line-by-line. This is the same conclusion as the §9 "mechanism not to port."

**Complements, not ranked alternatives:** Pattern 5 (Evidence & authority) is a **mandatory
trust layer under whichever discovery pattern wins** — it is the §9.3 single-source proof
block, and the maritime buyer's reliability/compliance sensitivity makes it non-optional.
Pattern 4 (Interactive proof) is a **strong optional enhancer** — high-value where a digital
surface exists (e.g., a coverage/uptime rail) but limited by Asterra's physical/managed-service
nature, so it should be scoped to one or two credible tools rather than promised broadly.
