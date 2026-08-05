# People — what research.md knows about people (and what it doesn't)

**Source:** [`research.md`](./research.md) (audit of 16 sites, collected 2026-07-22) + [`../CLAUDE.md`](../CLAUDE.md) §4 (brief).
**Compiled:** 2026-08-05.

> **Update 2026-08-05:** part of the `[?]` gaps in §6 are now closed in [`people-desk.md`](./people-desk.md)
> (desk research: job vacancies, ship-management structure, regulation calendar,
> industry surveys). Closed: who decides and who signs (§6.2), purchase triggers (§6.3),
> cyber budgets, confirmation of the "not a specialist across all pillars" assumption.
> Still open: **all on-site behaviour** (§6.5, §6.6) and the buyer's own vocabulary.

---

## 0. Evidence status — read this first

`research.md` is a **competitor site audit**, not user research.
Method (§2): direct fetches of live pages + 61 screenshots (Playwright, 1440×900). Login-gated
areas (Portal360, COSMO, SiePortal, aip.palantir.com) were **not entered**.

Therefore: **no interviews, no surveys, no analytics, no session recordings, no CRM data,
no support tickets, no search logs.** There is no observed behaviour of a real person anywhere
in the file — with one exception (§2.C, NerdWallet), and that one is consumer finance, not
maritime B2B.

Every observation below is labelled with its evidence level:

| Label | Meaning |
|---|---|
| **[SITE CLAIM]** | the competitor says so on its own site — verified by quote/screenshot |
| **[INFERRED]** | a conclusion about the person drawn from what the site chose to show; nobody asked the person |
| **[UNSOURCED]** | a statement in research.md or the brief with no reference to any data |

---

## 1. WHO IS SEARCHING

### 1.1 The direct market segments its audience by industry, and maritime is always first **[SITE CLAIM]**

Five HARD competitors, "Primary audience" row ([§3](./research.md#3-hard-group--comparative-table)):

| Company | Claimed audience |
|---|---|
| Marlink | operators of remote/maritime assets; submenu: Shipping, Cruise, Energy, Enterprise & Telco, Government & Defence, Humanitarian & Aid ([home](https://marlink.com/)) |
| Navarino | **maritime only** — merchant fleets; "1 in 3 ocean-going merchant vessels globally use a Navarino service" ([screen](./screens/hard/navarino-home-hero.png)) |
| NSSLGlobal | Maritime / Defence and Government / Enterprise / Critical Rescue and Infrastructure ([maritime](https://nsslglobal.com/markets/maritime/)) |
| IEC Telecom | Land: Government, Humanitarian, Energy-Onshore, Enterprise, Media · Maritime: Fishing, Energy-Offshore, Shipping, **Superyachts** ([home](https://www.iec-telecom.com)) |
| Speedcast | 12 industries in nav, Commercial Maritime → Government ([home](https://www.speedcast.com)) |

Relevant for us: **Fishing and Superyachts** (IEC) and **Cruise** (Marlink) are segments absent
from our industries list ([`../CLAUDE.md`](../CLAUDE.md) §5). **Humanitarian & Aid** appears at
two of the five. This does not prove such buyers exist for us — it proves competitors consider
them distinct enough to deserve their own page.

### 1.2 Providers themselves split "sales" and "support" into **different people** **[INFERRED]**

The strongest structural signal in the file that more than one kind of person arrives at these
sites ([§6, pattern 3](./research.md#three-shared-market-patterns)):

- **Speedcast** splits contacts by segment: `maritimeinfo@` / `energy@` / `governmentinfo@` ([screen](./screens/hard/speedcast-contact-directory.png))
- **Navarino** — by function: `globalsales@` / `technical.support@`, no form at all ([screen](./screens/hard/navarino-contact-directory.png))
- **IBM** — an explicit sales-vs-support split on the contact page ([contact](https://www.ibm.com/contact))
- **NVIDIA** — three-way: Support / Sales / Partners ([contact](https://www.nvidia.com/en-us/contact/))
- **IEC** — a sales form vs an external "Submit a Ticket" portal
- **Honeywell** — **B2C phone lines** sit on the support page, i.e. the wrong people arrive at scale ([support](https://www.honeywell.com/us/en/support))

### 1.3 Competitors' forms are effectively their own inventory of who writes to them **[SITE CLAIM]**

The most concrete evidence in the whole file about the composition of inbound traffic — the
"How can we help you?" field at **Marlink** ([screen](./screens/hard/marlink-contact-form.png)):
*Request a quote / Talk to sales / Technical support / Billing / Reseller / Partnership /
Other*. Seven request types, of which **four are not about buying** (support, billing,
reseller, partnership).

What else they ask a person before contact:
- **NVIDIA** — **Industry + Job Role** dropdowns + a support-diversion box ([sales form](https://www.nvidia.com/en-us/contact/sales/))
- **Stripe** — qualification by the company's **annual revenue**: email+country → annual revenue → details ([screen](./screens/aspirational/stripe-contact-sales.png))
- **IEC** — Interest (10 sectors) + **"How did you hear about us?"** ([screen](./screens/hard/iec-telecom-contact-form.png))
- **Cisco** — 14+ fields with Question Category routing, on an off-domain form ([form](https://engage2demand.cisco.com/LP=5642))

### 1.4 Only one competitor quantified its live audience **[SITE CLAIM]**

**Siemens**: the homepage hero addresses "600,000 TIA Portal users" ([home](https://www.siemens.com/global/en.html)).
This is the single quantitative estimate of a living audience in the entire file. Every other
number is about **vessels, satellites, cities, requests, money** — not people. The market
counts assets, not users.

### 1.5 The Asterra persona is a brief statement, not a research finding **[UNSOURCED]**

[`../CLAUDE.md`](../CLAUDE.md) §4: Persona #1 — **shipowners & fleet operators / technical
managers**. Secondary: IT/security, government/defence, energy, transport/logistics, research
organisations, emergency response. Shared decision drivers: *reliability, global coverage,
security, compliance, access to technical support*.

**There is not a single reference under this.** It is a project input, not a research result.

`research.md` itself adds one more characteristic to the persona, also **unsourced**
([§9.3](./research.md#93-mechanisms-to-port-into-asterra), [§10.6](./research.md#106-fit-for-asterra-networks)):
> "a technical professional in their own domain, but rarely a specialist across all five pillars
> (satellite RF, cyber, AI/IoT, safety, services)"

This assumption carries **the entire choice of the Solution Finder** as the leading pattern. If
it is wrong, the §10.6 recommendation collapses. It is verified nowhere.

---

## 2. WHAT DRIVES THEM

Everything below is **[INFERRED]**: it is what competitors chose to put first. There is no
evidence in the file that any of it works on anyone.

### 2.A Uptime and scale — what gets placed next to the hero **[INFERRED]**

The "trust is quantified and placed early" pattern ([§6, pattern 2](./research.md#three-shared-market-patterns)):
- Navarino — stats right in the hero: "13,000+ vessels", "650+ clients", "25+ years", "1 in 3" ([screen](./screens/hard/navarino-home-hero.png))
- Marlink — "1,700+ specialists", "15k+ Vessels connected", "99.9% Network uptime SLA", "24.7% global market share" ([screen](./screens/hard/marlink-industry-shipping.png))
- Cloudflare — coverage as proof: "337 cities · 8 regions", "95% of the world's Internet-connected population is within 50 milliseconds" ([screen](./screens/aspirational/cloudflare-network-coverage.png))
- Speedcast — "95+ satellites", "35+ teleports", support: "115 engineers", "24x7x365" ([screen](./screens/hard/speedcast-support-center.png))

So the market unanimously bets on **coverage + continuity + network scale**.

### 2.B Certification as a currency of its own — and a specifically maritime one **[SITE CLAIM]**

- **Marlink**: ISO 27001/9001/14001, **IACS UR E26/E27**, **NIS2**, **IEC 62443** ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/))
- **Navarino**: "UR E27 Type Approved" (Bureau Veritas), "IEC 62443-3-3 Type Approved" (DNV), **IMO2021** ([screen](./screens/hard/navarino-cybersecurity-angel.png))
- **NSSLGlobal**: ISO 27001/9001/14001/45001; partners **NATO, Bundeswehr, Royal Navy/RFA** ([about](https://nsslglobal.com/about/))

A named **classification society** (DNV, Bureau Veritas) in the role of the one who confirms —
this is a specifically maritime trust mechanism absent from every aspirational competitor.
[INFERRED]: the buyer probably answers to an external audit/inspection.

### 2.C The single piece of direct evidence about human motives in the file — NerdWallet **[SITE CLAIM]**

[§9.4](./research.md#94-new-evidence--nerdwallet-gathered-2026-07-22), verbatim from the page
([screen](./screens/dimension-fit-trust/nerdwallet-card-finder.png)):
- "This service is FREE, will not affect your credit score, and **no contact information is required**."
- "**We only ask questions that are essential.** No contact info required."
- "Tap into objective ratings — See the **pros and cons** of each credit card we recommend."
- Independence disclaimer: the information "has not been reviewed or provided by the issuer of this card"
- "FACT CHECKED / EDITORIAL INTEGRITY" + "Last updated on July 16, 2026" + a transparent "rating of 1 to 5" methodology

This is the closest thing the file has to direct testimony about human fears — but it is
**US consumer finance**. How much of it transfers to a fleet technical manager is **untested**.

### 2.D A research report as the funnel entrance **[INFERRED]**

- Marlink gates its "2026 Cyber Intelligence report", "PDF (3.2MB), 20 pages" ([cyber](https://marlink.com/...cyber-security/))
- NVIDIA uses its own research as proof: "Over 1,000 industry telecom professionals surveyed" ([screen](./screens/aspirational/nvidia-industries.png))
- IEC maintains a Download Center: "installation manuals, user guides, software updates"

[INFERRED]: part of the audience reads long documents before contact. How large a part — unknown.

---

## 3. WHAT THEY FEAR

The evidence base here is **the weakest in the entire file**. There is no direct testimony of
fear — only the phrasings competitors use to defuse it.

### 3.1 Vendor lock-in **[INFERRED from a single phrase]**
**NSSLGlobal**, verbatim: "We're brand agnostic and **not tied to a particular provider**"
([about](https://nsslglobal.com/about/)) — independence elevated to positioning. Someone must be
asking about it. But this is one competitor out of five.

### 3.2 A cyber incident — the only case of open fear-selling **[SITE CLAIM]**
**Speedcast**'s maritime page carries a "**68%**" breaches stat
([screen](./screens/hard/speedcast-industry-maritime.png)). This is the only fear-based framing
found in the HARD group.

### 3.3 "Getting lost and never hearing back" **[INFERRED]**
Marlink is the only one making a routing promise: the enquiry is "routed to a regional
specialist" ([screen](./screens/hard/marlink-contact-form.png)). §9.3 proposes strengthening it
to "reply within one business day". That reassurance was **invented by the research**, not
heard from people.

### 3.4 Inconsistent numbers as a signal of unreliability **[UNSOURCED — author's thesis]**
§9.3: "inconsistency is itself a reliability signal". The drift itself is real —
Marlink 99.9% vs 99.99% ([shipping](https://marlink.com/solutions/industry/shipping/)),
NSSLGlobal "over 50" / "55+" / "over 56 years", Stripe 500M vs 250M API req/day.
But that **any buyer noticed it and it affected a decision — there is no evidence**.

---

## 4. HOW THEY CHOOSE

### 4.1 The market assumes two entrances: "who I am" and "what I need" **[INFERRED]**
Dual-axis IA (capability × industry) is the category default ([§6, pattern 1](./research.md#three-shared-market-patterns)):
Marlink (Portfolio / Industry / Services), Speedcast, NSSLGlobal, IEC — all pair a solutions
tree with industry hubs; all five SOFT players run an industries hub
([ibm](./screens/soft/ibm-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png),
[siemens](./screens/soft/siemens-industries.png), [schneider](./screens/soft/schneider-solutions-industries.png)).
**Navarino is the lone exception**: no industry axis at all ([screen](./screens/hard/navarino-solutions-technology.png)).

**Which of the two entrances a person picks first is not established in the file.** §10.6
itself admits this is open: the industry pattern's priority should be revisited "if discovery
research shows buyers self-identify by sector faster than by need". No such research happened.

### 4.2 Nobody in the market takes the user by the hand **[SITE CLAIM]**
Out of 15 sites, a real finder exists **only at IEC** — and it is 8 facets
(Application / Set-up / Service / Type / Operator / Market / Speed / Coverage,
[screen](./screens/hard/iec-telecom-solution-finder.png)), i.e. a tool for someone who already
speaks the vocabulary. Navarino has **neither search nor filters** at all.
Stripe's "Guide me" and Cloudflare's "Get a recommendation" are marked *(reported, not
captured)* in the file — i.e. **not confirmed by a screenshot**.

### 4.3 Side-by-side comparison — an expected step, but only in the consumer example **[SITE CLAIM]**
"Add to compare" + per-card pros/cons exist at NerdWallet
([screen](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)). In the B2B group —
at no one.

### 4.4 Self-validation before contact — what the HARD group lacks entirely **[SITE CLAIM]**
C8 in [§9.2](./research.md#92-scores): Marlink **2**, IEC **2** — "one gated PDF", "brochure
Download Center only". Versus Cloudflare **5** (live "Test your latency",
[screen](./screens/aspirational/cloudflare-network-coverage.png)), Stripe **5**, NerdWallet **5**.

---

## 5. WHERE THEY DROP OFF

⚠️ **Everything in this section is the research author's heuristic judgement [INFERRED].** The
file contains no funnel, analytics or session recording for any competitor. This is "where this
site *should* lose people", not "where it does".

**At contact — the market's worst link ([§6, pattern 3](./research.md#three-shared-market-patterns)):**
- **No form at all** — Navarino ([screen](./screens/hard/navarino-contact-directory.png)) and Speedcast ([screen](./screens/hard/speedcast-contact-directory.png)): office/phone directories only. Two of five direct competitors.
- **Form on a foreign domain** — Honeywell → C3 Salesforce, Cisco → engage2demand (14+ fields)
- **Label doesn't match the address** — Speedcast's "Get in Touch" leads to `/sign-up/`
- **The same form everywhere** — IEC, a generic "SEND" form on nearly every page, no context carried; plus a typo in the CTA "Lets talk"
- **A modal over the hero** — Stripe fully covered its hero with a promo overlay at capture time ([screen](./screens/aspirational/stripe-home-hero.png))

**In language:**
- Unexplained jargon — **COTP/COTM** in IEC's facets (the file calls it a "jargon wall"); "application layer of the OSI model" at NSSLGlobal
- Low-information-scent labels — NSSLGlobal: "Drop us a Line", "At the Helm"
- Uniform meaningless CTAs — NSSLGlobal's "Find out more" **11 times on one page**

**In structure:**
- The same product in three different trees — NSSLGlobal ([screen](./screens/hard/nsslglobal-solutions-overview.png))
- A flat list of 30 industries with no grouping — Siemens ([screen](./screens/soft/siemens-industries.png))
- No support entry in the nav; the 24/7 promise buried in About — NSSLGlobal
- Mid-journey subdomain handoffs — Honeywell (buildings./automation./process./aerospace.), IEC (support across 3+ subdomains), Speedcast (exits to speedcastsigma.com), NVIDIA
- An industry hub that is a thin lead-form landing — IEC maritime ([screen](./screens/hard/iec-telecom-industry-maritime.png)); the file says such pages "read as filler"
- A current CTA leading to 2020–2021 PDFs — Speedcast, 17+ brochures

---

## 6. WHAT WE DO NOT KNOW ABOUT PEOPLE

The honest list. Where there is no data — **[?]**, not a plausible guess.

### 6.1 Not a single primary source
- Buyer interviews — **[?]**, none conducted
- Surveys — **[?]**
- Analytics / funnels (ours or competitors') — **[?]**
- Session recordings, heatmaps — **[?]**
- Sales data: real inbound enquiries, loss reasons, cycle length — **[?]**
- Support tickets, most frequent questions — **[?]**
- Search queries (site search, Google) — what words people use — **[?]**
- A usability test of any of the 16 sites — **[?]**

### 6.2 Who exactly
- Real job titles of decision-makers — **[?]**. The brief says "shipowners & fleet operators / technical managers", no source.
- Composition of the buying committee: who initiates / who evaluates technically / who signs / who pays — **[?]**
- Whether there is an **intermediary** between us and the buyer (broker, management company, agent, systems integrator) — **[?]**. Critical for maritime; mentioned in the file exactly once, as the "Reseller" field in Marlink's form.
- Budget authority, typical deal size — **[?]**
- Tender/procurement procedure — **[?]**
- Whether the same person covers all 5 pillars (Connectivity / Cyber / Digital / Safety / Services) — **[?]**. §10.6's assumption that it is one person who is not a specialist in all five is **untested**.
- How many of our 7 industries even behave distinctly — **[?]**

### 6.3 What drives them
- Which item of the long list (uptime / coverage / price / certification / support / vendor independence / reputation) weighs **most**, and in what order — **[?]**
- The trigger that starts the search: contract expiry, newbuild, incident, regulation deadline, ownership change — **[?]**
- Decision cycle length — **[?]**
- Whether people actually read whitepapers and datasheets (Resource Center is in scope) — **[?]**
- Whether stat numbers work on this buyer, or get dismissed as marketing — **[?]**
- Whether certificates are needed by the buyer personally, or demanded by their auditor/insurer — **[?]**

### 6.4 What they fear
- Direct testimony of fear — **[?]**, zero. All of §3 is reconstruction.
- The cost of downtime in money for a specific buyer — **[?]**
- Whether lock-in is genuinely feared (one NSSLGlobal phrase is not evidence) — **[?]**
- Whether a contact form frightens a B2B buyer the way it frightens NerdWallet's consumer — **[?]**
- What a **wrong** finder recommendation does to trust — §10.1 claims it "erodes the very trust you want"; evidence — **[?]**
- Whether anyone notices the stat drift — **[?]**

### 6.5 How they choose
- **The main unknown:** do they enter "by industry" or "by need" first — **[?]**. The file itself leaves it open (§10.6).
- Whether people want to be guided at all, or whether an expert resents it — **[?]** (§10.1 names both scenarios without distinguishing)
- Whether our 5-pillar split matches their mental model — **[?]**
- Their own vocabulary: what they call their problem — **[?]**. That COTP/COTM is a "jargon wall" was decided by the research author, not by a user.
- How many providers they compare in parallel, on what criteria — **[?]**
- Do they return over weeks, or is it a single session — **[?]**

### 6.6 Where they drop off
- **Not a single real drop-off point observed** — **[?]**. All of §5 is hypotheses.
- Whether "no form" actually hurts Navarino and Speedcast — **[?]**. Their deals may run on phone and relationships, and a form may be unnecessary. Untested.
- Whether a subdomain handoff throws the person off — **[?]**
- Whether a directory page works better than a form for some segment — **[?]**

### 6.7 Context of use
- Where they browse from: office / port / on board — **[?]**
- Mobile vs desktop for this audience — **[?]**. The brief chose desktop-first (§9) **without data**.
- Channel constraints (a satellite link from a vessel is slow and expensive) — **[?]**, while the brief promises "expressive motion" and a heavy hero (§10)
- Language: the audience is globally maritime (Greek, Japanese, Korean owners), the brief is English-only (§8). Whether this is a problem — **[?]**
- Accessibility needs of this specific audience — **[?]**

### 6.8 After contact
- Competitors' login areas were **not entered** (§2, §8) — about the post-sale user (Portal360, COSMO, SiePortal) we know **nothing**
- Whether Asterra has the staffing to honour the §9.3 "reply within one business day" promise — **[?]**
- Where a submission goes (email vs CRM) — the research's own open question (§6, open question 1) — **[?]**

---

## 7. What to do next (a recommendation, not data)

The minimum that closes the most expensive **[?]** before locking the IA:

1. **5–8 interviews** with fleet technical managers / shipowners. The lead question is §6.5:
   industry or need first, and whether the 5 pillars match their model.
2. **Card sort / tree test** on our navigation — cheap; addresses §6.5 and §6.2 (whether one
   person covers five pillars).
3. **A conversation with sales** (real inbound flow, titles, intermediaries, triggers) —
   removes most of §6.2 and §6.3 without field research.

Until then, the persona in [`../CLAUDE.md`](../CLAUDE.md) §4 must stay explicitly labelled a
**hypothesis**, not a fact.
