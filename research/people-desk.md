# People — desk research

**Goal:** close part of the `[?]` gaps from [`people.md`](./people.md) §6 without conducting interviews.
**Collected:** 2026-08-05, public sources.
**Method:** job vacancies (real responsibilities), ship-management structure, a regulation
calendar with dates, industry surveys with published samples.

---

## 0. What this source can and cannot do

**Can:** say **who** this person is by role, **what they are accountable for on paper**,
**what deadlines they face** and **who signs the invoice**. These are verifiable public facts.

**Cannot:** say **how they behave on a website**. No source below describes searching for a
supplier online, reading a solutions page or filling in a form. All of §6.6 in
[`people.md`](./people.md) (where they drop off) remains `[?]`.

**Source bias — read together with the numbers:**
- The Inmarsat and Futurenautics surveys (sponsors KVH + Intelsat) are **vendor** research into the market those vendors sell to. The numbers are plausible but collected by an interested party.
- The Thetius / CyberOwl (a DNV Group company) / HFW reports are also commercially motivated, but they publish sample size and composition, which is better than most.
- All sources are English-language and mostly European. Greek, Japanese, Korean owners — `[?]`.

Labels as in [`people.md`](./people.md): **[FACT]** — verified document or regulation ·
**[SURVEY]** — declared sample · **[INFERRED]** — my conclusion.

> ### ⚠️ Added 2026-08-05 after the [`personas.md`](./personas.md) audit
>
> **Part of the facts below came from search-result paraphrases, not from the primary source** —
> those pages returned 403 or an unparseable PDF. Quoted wording there may be **not verbatim**.
>
> **Read directly:** the vacancies (seacareer, allcruisejobs) · the procurement structure
> (AVS, Valour) · the MLC 2006 text (ILO) · Riviera / Geneva Dry 2025 · Digital Ship (93%) ·
> the O'Halloran quote.
>
> **From paraphrase:** the IACS UR E26/E27 dates (§2.3) *(since verified first-hand — see
> [`audit.md`](./audit.md) §5)* · the DOC-verification wording in MSC.428(98) (§2.2) · all
> Thetius/CyberOwl/HFW figures — "1 in 6", "55%", "<$100k", ransom dynamics, "17% of shipyards"
> (§1.4, §4.1–4.3) · Futurenautics "92%" (§3.2) · the dry-docking cycle (§2.4).
>
> Before defending the work, either open them manually in a browser or drop the quotation marks
> and present them as paraphrase. Detailed breakdown — [`personas.md`](./personas.md) §8.

---

## 1. WHO — now with documented responsibilities

### 1.1 The Technical Superintendent is an ex-marine engineer — and **signs the communication invoices** [FACT]

Technical Superintendent vacancy, verbatim
([seacareer](https://www.seacareer.com/i31473/technical-superintendent/)):

- "approve all maintenance, repair, dry-docking and **communication invoices**"
- "prepare maintenance, repair, spare gear, dry-docking, stores and lube oil budgets"
- "monitor vessels Class and trading certificates with the Marine Department"
- "monitor and oversee vessels electronic planned maintenance system"

Requirements:
- "Qualified to at least **Class II Certificate of Competency**"
- "**Extensive experience as a sea-going Engineer**"
- "Detailed knowledge and experience of requirements covered by **ISM**"

**Three conclusions for the project:**
1. Communication invoices pass through this person — they are in the purchasing chain even if
   not "the IT person".
2. They are **not from IT**. This is a marine engineer who came ashore. They write and think in
   terms of class, certificates, ISM and the docking budget — not SD-WAN or Zero Trust.
3. Connectivity for them is **a budget line next to lube oil and spares**, not a strategic
   platform. This directly contradicts the tone of the aspirational competitors in
   `research.md` §5.

Reports to a Fleet Group Manager ([Maersk, Ship Superintendent](https://www.maersk.com/careers/vacancies/wd/Ship-Superintendent_R117749/jt-ship-superintendent)).

### 1.2 A separate IT vertical exists — at least at large operators [FACT]

IT Officer vacancy (cruise vessel), "Reports To" field, verbatim
([allcruisejobs](https://www.allcruisejobs.com/i41081/it-officer/)):

> "Senior VP of Fleet IT, **IT Superintendent**, Corporate ITO"

So **IT Superintendent is a real title**, with two more levels above it. The IT Officer's
duties include "Network infrastructure", "Satellite infrastructure", and "running regular
checks on network and data security".

**[INFERRED]:** at least **two different people** with different vocabularies arrive at these
sites — a marine engineer with an ISM vocabulary and a corporate IT manager with a network one.
This confirms the structural signal from [`people.md`](./people.md) §1.2 (all competitors split
contacts into sales/support), but now with job titles instead of email addresses.

### 1.3 The person who reads the site is often **not the person who signs** [FACT]

- "Around **25% of the world's international trading fleet** … is reliant on services provided by third party managers in whole or part" ([Valour Consultancy](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/))
- The split of authority ([AVS Global Supply](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)):
  - **Owner:** "Long-term asset strategy, Major capital expenditure", frame agreements, fleet-wide policies → **CAPEX**
  - **Manager:** "Daily vessel operations, Technical purchasing … Purchase order issue, Invoice checking" → **OPEX within limits**
  - Limits are set by "an approval matrix"
- Choice blockers, verbatim: "Approved supplier lists, Frame agreements, Fleet-wide contracts";
  "**Supplier change may require approval when a frame agreement already exists**"
- And directly for suppliers: "**Assumptions create risk in maritime procurement**" — find out
  who issues the PO, who approves the budget, who pays

**This closes the biggest `[?]` in [`people.md`](./people.md) §6.2.** The purchasing chain is
at least three levels deep, with a **structural blocker** inside it: an active frame agreement.
A person can want us and have no right to buy us.

**[INFERRED] for the site:** this is why the whole HARD group carries a "Reseller /
Partnership" role in its forms (Marlink, [`people.md`](./people.md) §1.3) — that is not side
traffic, it is **a channel**.

### 1.4 The buyer genuinely isn't a specialist in every pillar — now with a number [SURVEY]

Thetius + CyberOwl (DNV Group) + HFW report, *The Lifecycle Dilemma*, "more than **150
stakeholders**, including shipowners, charterers, OEMs, seafarers, insurers, shipyards"
([HFW](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)):

> "Only **1 in 6 shipowners fully understand what a cyber-secure vessel should look like** upon delivery"

Plus, from the 2023 report (*Shifting Tides*, "more than 200 industry professionals",
[CyberOwl](https://cyberowl.io/resources/global-industry-report-shifting-tides-rising-ransoms-and-critical-decisions-progress-on-maritime-cyber-risk-management-maturity/)):

> "the more senior someone's role, **the less likely they are to be aware of a cyberattack**"

**This defuses the riskiest `[?]`.** The `research.md` §10.6 assumption — "a technical
professional in their own domain, but rarely a specialist across all five pillars" — hung
without a source and carried the whole Solution Finder choice. Now a published survey sits
under it. It remains a hypothesis (150 respondents, a commercial sponsor), but no longer an
invention.

---

## 2. WHEN — purchase triggers with dates

A section `research.md` did not have at all. Everything is **[FACT]** from regulatory documents.

### 2.1 MLC 2006: crew internet became a legal obligation on 23 December 2024

The 2022 amendments to the Maritime Labour Convention, in force since **23 December 2024**,
verbatim ([ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)):

> "Shipowners, so far as is reasonably practicable, provide seafarers on board their ships with **internet access with charges, if any, being reasonable in amount**"

> "Seafarers are provided with appropriate **social connectivity** on board"

Verified by **Port State Control** ([Chambers](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)) — i.e. a port inspection with vessel detention as the sanction.

**Why this is the headline finding:** crew connectivity stopped being "welfare" and became
**compliance**. That changes **who** buys (crewing/HR and the DPA enter the conversation) and
**how** to sell it (not "a happy crew" but "passes PSC"). None of the five direct competitors
in `research.md` builds positioning on this.

### 2.2 IMO MSC.428(98): an annual audit, not a one-off deadline

The resolution requires cyber risks to be addressed in the Safety Management System (ISM Code)
no later than **the first annual verification of the company's Document of Compliance after
1 January 2021**
([IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx),
[resolution text](https://wwwcdn.imo.org/localresources/en/OurWork/Security/Documents/Resolution%20MSC.428\(98\).pdf)).

**[INFERRED]:** the deadline **recurs annually**, tied to the company's DOC audit, and the
issue is owned by the **DPA / ISM manager**, not IT. That is a fourth role in the buying
committee.

### 2.3 IACS UR E26/E27: newbuilds only, contracts from 1 July 2024

Apply to ships "contracted for construction **on and after 1 July 2024**"; **not retroactive**
for existing vessels
([ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html),
[ABS](https://www.abs-group.com/Solutions/Cybersecurity/Maritime-Cybersecurity/Maritime-Cybersecurity-Compliance-to-Industry-Regulations/Cybersecurity-Compliance-to-IACS-E26-and-E27-Regulations/)).
E26 — cyber resilience of the ship as a whole, E27 — of individual Computer Based Systems.

**Important not to lie in the copy:** this does **not** create a retrofit market for the
existing fleet. Anyone writing "UR E26 compliance for your fleet" is overstating. Navarino puts
DNV and Bureau Veritas type approvals on its product page ([`people.md`](./people.md) §2.B)
precisely because it sells equipment **into newbuilds and the supply chain**.

An already-documented market weakness: "**17% of shipyards** feel they have adequate in-house
cybersecurity expertise to design and construct a cyber-secure vessel"
([HFW](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)).

### 2.4 Dry-dock as the physical installation window

Classification cycle: two dockings per five-year period, the intermediate one at ≈2.5 years,
the second coinciding with the **special survey** for class renewal
([Marine Public](https://www.marinepublic.com/blogs/marine-law/899246-complete-guide-to-periodical-surveys-in-ship-classification)).
The Technical Superintendent prepares the **dry-docking budget** (§1.1).

**[INFERRED]:** hardware gets bought not when someone reads a website, but when the vessel
enters dock. The cycle is ~2.5 years. For the site this means a large share of visitors is
**not ready to buy now** — they gather information for the next docking budget. The page must
also work for people who won't submit an enquiry today.

---

## 3. WHAT DRIVES THEM — numbers instead of guesses

### 3.1 Continuity of connectivity [SURVEY, sample undisclosed]
> "**93% of shipowners and operators** view always-on connectivity as extremely or very important"

Inmarsat *Digital Wave* ([Digital Ship](https://thedigitalship.com/news/maritime-satellite-communications/93-of-shipowners-now-see-always-on-connectivity-as-essential/)).
⚠️ Sample size and date **not published**; a vendor source. Cite with this caveat.

### 3.2 Crew retention — a distinct, underrated driver [SURVEY]
> "**92% of seafarers** strongly influenced by internet access when choosing where to work"

Futurenautics *Crew Connectivity 2018*, **n = 6,000 serving seafarers**, sponsors KVH and
Intelsat ([GlobeNewswire](https://www.globenewswire.com/news-release/2018/03/28/1454366/0/en/92-of-Seafarers-Strongly-Influenced-By-Internet-Access-When-Choosing-Where-to-Work-According-to-Futurenautics-Survey.html)).
⚠️ The largest sample found — but **2018**, pre-Starlink. Use as a historical baseline, not a
current fact.

Fresh corroboration, Geneva Dry 2025, Audra Drablos, strategy director at Inmarsat
([Riviera](https://www.rivieramm.com/news-content-hub/13-of-vessels-operate-without-crew-internet-highlighting-maritime-connectivity-gap-84738)):
> "The **first question potential crew ask is whether there's internet on board** – before taking the job"

And the size of the remaining market: "**13% of vessels operate without crew internet**".

### 3.3 Bandwidth expectations grew by an order of magnitude [SURVEY / industry statement]
> "Pre-Covid, we were talking about speeds of **half a megabit or less**. Now we're discussing **tens or hundreds of megabits per second**" (same source)

### 3.4 🔴 The counter-driver nobody expects: the owner wants to **limit**, not to hand out [SURVEY]

Same source, Inmarsat on shipowner requests:
> "**time-restricted access – perhaps a couple of hours daily – to help manage fatigue**"

And the side effect that worries them:
> "The sense of camaraderie developed in mess rooms is diminishing as crew retreat to cabins with personal devices"

**This is the most valuable finding for product design.** The buyer asks not for "more
megabits" but for **policy and control**: quotas, schedules, crew/business traffic separation.
None of the 16 sites in `research.md` presents this as a feature. It is a real, corroborated
need with an empty message space around it.

---

## 4. HOW THEY CHOOSE — and how it differs from what competitors sell

### 4.1 The cyber budget is far smaller than competitors' framing assumes [SURVEY]
> "More than half of shipowners spend **less than US$100,000 per year** on cyber security management"

([CyberOwl / HFW / Thetius](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/))

**[INFERRED]:** the language of enterprise cyber platforms (Marlink lists **18 named
offerings** on one page, `research.md` §3) does not match half the market's budget. For Asterra
this argues for a **narrow, comprehensible offer**, not a catalog.

### 4.2 Supplier vetting is inconsistent [SURVEY]
> "only **55% of industry suppliers are asked by shipowners to prove** they have cyber risk management procedures in place"

**[INFERRED]:** nearly half the buyers **don't ask for proof**. So a page cannot count on
anyone hunting for certificates — they must be shown proactively, and early. This matches what
Marlink and Navarino do ([`people.md`](./people.md) §2.B) and adds a reason why it works.

### 4.3 The ransom-fear argument **lost its number** [SURVEY]

| | 2023 | 2025 |
|---|---|---|
| average ransom paid | **US$3.2m** | **≈US$100k** |
| share of companies that paid in 12 months | 14% | **7%** |

([HFW 2025](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/))

**A direct instruction for the copy:** do not build the cyber section on incident fear — that
is what Speedcast does with its "68%" ([`people.md`](./people.md) §3.2), and the number under
that argument dropped 30-fold in two years. The stronger angle is **compliance and the audit**
(§2.2), which has a date and does not depreciate.

### 4.4 The manager is under price pressure [FACT/analysis]
> "Management contracts are negotiated **mainly on price**, margins for ship management companies are squeezed" ([Valour](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/))

**[INFERRED]:** if a manager lands on the site (and that is up to a quarter of the fleet,
§1.3), they count OPEX and must justify the decision to the owner. They need not storytelling
but **an argument that can be forwarded** — what NerdWallet achieves with pros/cons
(`research.md` §9.4).

---

## 5. What this changes in the project

| Was in `CLAUDE.md` / `research.md` | Becomes after desk research |
|---|---|
| Persona #1 "shipowners & fleet operators / technical managers", unsourced | **Four roles with responsibilities:** Technical Superintendent (ex-engineer, signs communication invoices, thinks ISM) · IT Superintendent / Fleet IT · DPA / ISM manager (owns MSC.428(98)) · Owner / CAPEX approver. Plus a channel: reseller / ship manager |
| "Shared decision drivers: reliability, coverage, security, compliance, support" — unweighted | **Compliance has dates** (23.12.2024 MLC · annual DOC audit · 01.07.2024 newbuilds), the rest don't. Compliance can become a navigation axis |
| Purchase trigger — `[?]` | **Four triggers:** PSC inspection · DOC audit · newbuild contract · docking window (~2.5 yrs) |
| Cyber framed as a platform | Half the market budgets **<$100k/yr**; ransoms fell to ~$100k. Sell the audit, not the fear |
| Connectivity = more bandwidth | A corroborated demand for **control and policy** (time/quotas) — an empty message space |
| Solution Finder resting on an untested assumption | The assumption now backed: **1 in 6** owners understand what a cyber-secure vessel looks like |

**Three concrete design changes I would make:**

1. **Finder questions keyed to the trigger, not the technology.** Not "what speed do you need"
   but "what brought you here: a PSC inspection / DOC audit / newbuild / docking / crew
   complaints". Each option has a source in §2 and leads to a different pillar set.
2. **Build the proof block on regulations and classification societies, not invented numbers.**
   Asterra is fictional — an invented "99.9%" is worth nothing and repeats the stat drift you
   documented yourself. "UR E26/E27 · MSC.428(98) · MLC 2006 Amd. 2022" are real, dated,
   checkable. Exactly what Navarino does with DNV/Bureau Veritas.
3. **Add a role field to the enquiry form.** Marlink asks the request type, NVIDIA asks the Job
   Role. §1.3 shows why: the superintendent and the owner need different replies, and you need
   to know whether the person can even buy (frame agreement).

---

## 6. What REMAINS `[?]` after desk research

Honestly — desk research closed less than half.

**Fully open:**
- **All on-site behaviour** — how they search, what they read, where they quit. No source above speaks to it. `[?]`
- The words they use for their own problem — vacancies give *corporate* language, not spoken language. `[?]`
- Whether our 5 pillars match their mental model. `[?]`
- Industry-first or need-first (the `research.md` §10.6 headline question). `[?]`
- How many suppliers they compare and on what criteria. `[?]`
- Real tender weightings — not a single tender document with published award criteria could be retrieved (portals return 403/PDF). **The cheapest next step:** TED, UK Find a Tender, SAM.gov publish price-vs-quality weightings openly.
- Mobile vs desktop, browsing from on board, satellite-channel constraints while viewing the site. `[?]`
- Non-English markets — Greek, Japanese, Korean owners. `[?]`

**Partly open:**
- The size of the **connectivity** budget (cyber budget is known, §4.1). `[?]`
- Decision-cycle length. Indirectly anchored to the docking cycle (§2.4); direct data `[?]`
- Whether the superintendent visits the site personally, or a technical buyer does. `[?]`

**Method caveats to carry through the work:**
- Three key figures (93%, 92%, "13% without internet") come from **vendors of this very market**.
- Futurenautics n=6,000 is **2018**, pre-Starlink. The landscape changed.
- Inmarsat *Digital Wave* — **sample undisclosed**.
- Thetius/CyberOwl/HFW — 150–200 respondents, composition published; the most transparent available, but the sponsor is commercially interested.

---

## Sources

**Vacancies / roles**
- [Technical Superintendent — seacareer.com](https://www.seacareer.com/i31473/technical-superintendent/)
- [Ship Superintendent — Maersk Careers](https://www.maersk.com/careers/vacancies/wd/Ship-Superintendent_R117749/jt-ship-superintendent)
- [IT Officer (cruise) — allcruisejobs.com](https://www.allcruisejobs.com/i41081/it-officer/)

**Procurement structure**
- [Ship-Owners vs Ship-Managers: Who Decides Supply? — AVS Global Supply](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)
- [A guide to the maritime ecosystem — Valour Consultancy](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/)

**Regulations**
- [MLC 2006 amendments in force 23 Dec 2024 — ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)
- [MLC amendments & PSC enforcement — Chambers and Partners](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)
- [Maritime cyber risk / MSC.428(98) — IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx)
- [IACS UR E26/E27 — ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html)
- [IACS UR E26/E27 compliance — ABS Group](https://www.abs-group.com/Solutions/Cybersecurity/Maritime-Cybersecurity/Maritime-Cybersecurity-Compliance-to-Industry-Regulations/Cybersecurity-Compliance-to-IACS-E26-and-E27-Regulations/)
- [Periodical surveys / dry-docking cycle — Marine Public](https://www.marinepublic.com/blogs/marine-law/899246-complete-guide-to-periodical-surveys-in-ship-classification)

**Surveys**
- [Crew Connectivity 2018, n=6,000 — Futurenautics / GlobeNewswire](https://www.globenewswire.com/news-release/2018/03/28/1454366/0/en/92-of-Seafarers-Strongly-Influenced-By-Internet-Access-When-Choosing-Where-to-Work-According-to-Futurenautics-Survey.html)
- [93% always-on connectivity, Inmarsat Digital Wave — Digital Ship](https://thedigitalship.com/news/maritime-satellite-communications/93-of-shipowners-now-see-always-on-connectivity-as-essential/)
- [13% of vessels without crew internet, Geneva Dry 2025 — Riviera](https://www.rivieramm.com/news-content-hub/13-of-vessels-operate-without-crew-internet-highlighting-maritime-connectivity-gap-84738)
- [The Lifecycle Dilemma (150+ stakeholders) — HFW / CyberOwl / Thetius](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)
- [Shifting Tides, Rising Ransoms (200+ professionals) — CyberOwl](https://cyberowl.io/resources/global-industry-report-shifting-tides-rising-ransoms-and-critical-decisions-progress-on-maritime-cyber-risk-management-maturity/)
- [Average $3m ransom (2022 report) — CyberOwl / HFW](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/)
