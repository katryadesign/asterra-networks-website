# Proto-personas — Asterra Networks

> **Artifact type: proto-personas, not personas.**
> A proto-persona is a persona assembled from existing knowledge and desk research **without
> primary research**, and **explicitly labelled as pending validation**. It is a recognised
> discovery-stage working artifact, not a "second-class persona": it exists so the team designs
> on shared assumptions instead of silent ones, and so those assumptions can be named and
> falsified.
>
> The distinction that matters here: a **persona** describes what people do — grounded in
> observation. A **proto-persona** describes what we assume they do — grounded in documents +
> logic. Everything below is the latter.
>
> What makes these proto-personas stronger than typical ones: every claim carries an evidence
> label, each persona has a "what would falsify this" section, and [§8](#8-quality-check)
> records the errors caught during self-audit. What makes them weaker: **none of the four has
> ever seen a real person**.

**Compiled:** 2026-08-05 · **Audited:** 2026-08-05 (see [§8 Quality check](#8-quality-check))
**Sources:** [`research.md`](./research.md) (audit of **15 competitor sites** + NerdWallet as a
cross-category example, 61 screenshots, 2026-07-22) ·
[`people.md`](./people.md) (what research.md knows about people) ·
[`people-desk.md`](./people-desk.md) (desk research: vacancies, procurement structure, regulations, surveys) ·
[`../CLAUDE.md`](../CLAUDE.md) (brief).
**Status:** proto-personas · no validation conducted · verification plan — [§9](#9-what-to-open-by-hand)

---

## 0. Honesty about the evidence base — read before the personas

**`research.md` alone cannot support personas.** It is an audit of other companies' websites,
not user research ([`people.md`](./people.md) §0). What it can legitimately supply is **pains
and trust triggers** — because it documents in detail *what those sites do well and badly*. But
**roles, contexts and motives** cannot be derived from it: it knows whom competitors **claim**
as their audience, not who those people are.

So the roles below come from [`people-desk.md`](./people-desk.md) — public vacancies,
ship-management structure and regulations — while pains and anti-triggers come from `research.md`.

**Separately, about quotes.** `research.md` contains **not a single user quote** — no review, no
forum post, no case-study voice. Everything it quotes verbatim is **competitors' marketing
copy** and **interface text** (NerdWallet). Therefore:

- where a real quote from a real industry person exists — it is attributed by name and title;
- where none exists — a **[?]** stands, plus the nearest available artifact (vacancy text,
  regulation text), **explicitly labelled as a non-quote**. Not one line of speech was invented.

### Label legend

| Label | Meaning |
|---|---|
| **[FACT]** | primary source opened and read: vacancy, regulation, classification requirement |
| **[2ND-HAND]** | ⚠️ taken from a paraphrase/search snippet — **the primary source did not open** (403 or unreadable PDF). Quoted wording may be paraphrase, not verbatim |
| **[SURVEY]** | industry research with a published sample |
| **[AUDIT]** | recorded on a competitor site in `research.md` (with screenshot/URL) |
| **[INFERRED]** | my conclusion from the facts above — not an observation |
| **[?]** | no data; framed as a hypothesis |

**A caveat that spans all four personas:** no source describes **how these people behave on a
supplier's website**. The "pains" sections are documented flaws of competitor sites, **not
observed failures of these specific people**. The link "this flaw hits this persona" is
**[INFERRED]** throughout.

### ⚠️ Second caveat: some numbers are second-hand

While collecting [`people-desk.md`](./people-desk.md), several primary sources did not open
(IACS and ClassNK returned 403, the IMO and CyberOwl PDFs failed to parse). Those facts entered
the work **via search-result paraphrase**, and quoted wording there may not be verbatim.

**Opened and read directly:** the vacancies (seacareer, allcruisejobs) · the procurement
structure (AVS, Valour) · the MLC 2006 text (ILO) · Riviera / Geneva Dry 2025 · Digital Ship
(93%) · the O'Halloran quote.

**Taken from paraphrase — labelled [2ND-HAND]:** the IACS UR E26/E27 dates · the
DOC-verification wording in MSC.428(98) · all Thetius/CyberOwl/HFW figures ("1 in 6", "55%",
"<$100k", ransom dynamics, "17% of shipyards") · Futurenautics' "92%" · the docking cycle.

That does not make them false — it makes them **unconfirmed by a primary source**. Before a
defence, either open them manually in a browser or drop the quotation marks and present them as
paraphrase.

### On NerdWallet's weight — deliberately limited

`research.md` §9 introduces NerdWallet as a cross-category benchmark and scores it 36/40 — on
par with Stripe. **In the personas it deliberately carries no weight**, for two reasons:

1. **A different business model.** NerdWallet is an affiliate publisher paid by the very
   issuers it rates. Its "FACT CHECKED / EDITORIAL INTEGRITY", the "rating of 1 to 5"
   methodology and the independence disclaimer ("has not been reviewed or provided by the
   issuer") are **a reviewer's conflict-of-interest disclosure**, not a supplier trust
   mechanism. Asterra sells its own products; there is nowhere to attach that apparatus.
2. **A different decision structure.** A one-off consumer purchase by one person — no buying
   committee, no approval matrix, no frame agreements, no docking window (P1, P4).

**What remains usable from it:** narrowly — **phrasing the question in plain language** ("I
need a credit card for…"). What defeats IEC, `research.md` names directly: its finder is
"buried on a catalog page and **gated by unexplained jargon** (COTP/COTM)" (§6, opportunity 1,
[screen](./screens/hard/iec-telecom-solution-finder.png)) — the barrier there is **linguistic**.
Whether IEC's finder requires registration `research.md` **does not record** — **[?]**; that
assumption has been removed from the text.

**Consequence:** wherever "NerdWallet does it" used to be the only justification, there now
stands **[?] — a hypothesis without in-market confirmation**.

---

# SECONDARY — P1. Technical Superintendent · **the payer and the veto**

> Shore-based technical manager of a vessel group. A former marine engineer.

> ⚠️ **Was ⭐ PRIMARY until 2026-08-18.** Demoted to secondary — see
> [§5](#5-why-p2-is-primary) for the decision record. Nothing below changed: the role, duties
> and evidence are unaffected. What changed is **whose task the site is optimised for**.
> P1 remains the one who **signs the connectivity invoice**, so their enquiry is still the
> qualified one — they are the gate the decision passes through, not the one who starts it.

**Role status:** **[FACT]** — role and responsibilities taken verbatim from an open vacancy
([seacareer](https://www.seacareer.com/i31473/technical-superintendent/)); the reporting line
from a Maersk vacancy ([Ship Superintendent](https://www.maersk.com/careers/vacancies/wd/Ship-Superintendent_R117749/jt-ship-superintendent)).

### Context

Responsible for the technical condition of a vessel group. Prepares budgets: "maintenance,
repair, spare gear, **dry-docking**, stores and lube oil". **Signs off connectivity spend** —
verbatim "approve all maintenance, repair, dry-docking and **communication invoices**".
Monitors "vessels Class and trading certificates with the Marine Department". **[FACT]**

Qualifications: "at least **Class II Certificate of Competency**", "Extensive experience as a
**sea-going Engineer**", "Detailed knowledge and experience of requirements covered by
**ISM**". **[FACT]**

**The situations they arrive from** — four documented entries:
1. **The docking window.** Classification cycle: two dockings per 5 years, intermediate at ≈2.5 years, the second with the special survey ([Marine Public](https://www.marinepublic.com/blogs/marine-law/899246-complete-guide-to-periodical-surveys-in-ship-classification)). Hardware gets installed in dock. **[2ND-HAND]** · what exactly is bought against the docking — **[?]**
2. **Crew-connectivity compliance.** MLC 2006 amendments in force 23.12.2024, verified by Port State Control ([ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024), [Chambers](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)). **[FACT]** — the regulation text read directly
3. **The connectivity line item** in a budget they themselves defend. **[INFERRED from §1.1 people-desk]**
4. **A newbuild** — then UR E26/E27 apply (ships contracted from 01.07.2024, [ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html)). **[2ND-HAND]**, since **verified first-hand 05.08** — see [`audit.md`](./audit.md) §5

⚠️ Which of these four entries actually **brings the person to a supplier's website** — **[?]**.
These are *purchase* triggers documented by regulations and the classification cycle, not
*visit* triggers. The causal link "deadline → web search" is verified by nothing.

**Key design point:** they are **not from IT**. They think in class, certificates, ISM and the
docking budget. Connectivity for them is a line item next to lube oil and spares, not a
strategic platform. **[INFERRED from the vacancy text]**

### Jobs

| Job | Evidence |
|---|---|
| Understand which pillar applies to **their vessel type and situation** without studying the whole catalog | The market's core pain, `research.md` [§9](./research.md#9-focused-dimension--solution-fit-clarity--pre-contact-trust): "(a) quickly grasp which solution fits them" **[AUDIT]** |
| Verify the supplier will survive **external scrutiny** — class, certificates, ISM | "monitor vessels Class and trading certificates", "knowledge… covered by ISM" **[FACT]** |
| Get a figure/spec that can go into the docking budget | "prepare… dry-docking… budgets" **[FACT]**; whether they look for it on a website — **[?]** |
| Compare with what is already installed on the vessel | **[?]** — hypothesis; no direct data |
| Align with whoever signs CAPEX (see P4) | "approval matrix", "frame agreements" ([AVS](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)) **[FACT]** |
| Reach a person who speaks their language | Marlink promises "enquiry routed to a regional specialist" ([screen](./screens/hard/marlink-contact-form.png)) **[AUDIT]** — that this is *P1's need* rather than just Marlink's neat pattern: **[?]** |

### Pains

All documented in `research.md`; attribution to this persona is **[INFERRED]**.

> **Post-persona research update (05.08, [`research.md`](./research.md) §11):** the
> "complex navigation" pain now has **independent behavioural confirmation** — though on other
> people's users: Contentsquare recorded Schneider Electric users failing at the mega menu,
> support calls rising, and even **buyers leaking to distributor websites** (copying a part
> number and purchasing there). And Navarino's old site was acknowledged — and **paid for** —
> as a problem: KOTA's redesign brief names an "overwhelming navigation system" outright. The
> remaining pains (jargon, stale PDFs, stat drift, formless contact) found **no independent
> confirmation** — they rest on our audit alone; status unchanged.

- **Jargon from a foreign discipline.** IEC gates its finder behind **COTP/COTM** facets with no explanation ([screen](./screens/hard/iec-telecom-solution-finder.png)); NSSLGlobal writes "application layer of the OSI model" ([cyber](https://nsslglobal.com/solution/cyber-security/)). That is a network engineer's language, not a marine engineer's. `research.md` §3, §9 (C3: IEC = **2**).
- **Nothing to put in a budget.** At Marlink — "no datasheets/spec tables **on fetched pages**"; at NSSLGlobal — "no datasheets **found**"; Marlink's only technical artifact is a **gated PDF** ("2026 Cyber Intelligence report"). `research.md` §3, "Technical info presentation" row. **[AUDIT]** ⚠️ `research.md`'s own wording is careful — this is **absence of a finding on the pages checked**, not proven absence on the site; some pages were bot-blocked (`research.md` §8).
- **Stale documents behind current buttons.** Speedcast: 17+ brochures, "many dated 2020–2021", some products with no landing page at all. `research.md` §3. **[AUDIT]**
- **Contact leading nowhere.** Two of five direct competitors have **no form at all** — Navarino ([screen](./screens/hard/navarino-contact-directory.png)) and Speedcast ([screen](./screens/hard/speedcast-contact-directory.png)).
- **Contradictory numbers in the very thing they must defend internally.** Marlink: "99.99% this month" vs "99.9% SLA" on the same page; NSSLGlobal: "over 50" / "55+" / "over 56 years". `research.md` §6. **[AUDIT]**

### Trust triggers

⚠️ **Precise framing:** below is what competitors **do** and what `research.md` scored highly
against its own §9.1 criteria. That it **works on this audience** is proven nowhere — **[?]**.

- **The classification society by name.** Navarino: "UR E27 Type Approved" (**Bureau Veritas**), "IEC 62443-3-3 Type Approved" (**DNV**), IMO2021 ([screen](./screens/hard/navarino-cybersecurity-angel.png)). **[AUDIT]** That these bodies matter to P1 because they also survey their vessels — **[INFERRED]**, not evidence.
- **Certifications as a list:** ISO 27001/9001/14001, IACS UR E26/E27, NIS2, IEC 62443 ([Marlink cyber](./screens/hard/marlink-cybersecurity.png)). **[AUDIT]**
- **A logo wall of major carriers:** CMA CGM, MSC, MOL, NYK (Marlink). **[AUDIT]** — `research.md` records **logos**, not named outcome cases; a weaker proof format.
- **Support proven with numbers:** Speedcast "115 engineers", "24x7x365" ([screen](./screens/hard/speedcast-support-center.png)). **[AUDIT]** Post-research 05.08: the expectation "support must be **24x7x365 and multi-lingual**" is also articulated in the trade press ([Splash247](https://splash247.com/five-questions-maritime-connectivity-provider/), a vendor column) — so Speedcast matches the norm of expectation rather than inventing it. An extra dimension our audit lacks: **multilingual** support.
- **Enquiry routing with a promise:** verbatim "**enquiry routed to a regional specialist**" (Marlink, [screen](./screens/hard/marlink-contact-form.png)). `research.md` §9.2 gives Marlink a **5** on C7. **[AUDIT]**

**Repels:**
- number drift (above) — `research.md` §9.3 states outright: "inconsistency is itself a reliability signal" **[the author's thesis, not evidence]**;
- generic claims with no number — IEC rests on a lone "25+ years", partners named **as categories without names**; C4 = **2** ([screen](./screens/hard/iec-telecom-home-hero.png)) **[AUDIT]**;
- 2020–21 PDFs behind a current CTA (Speedcast) **[AUDIT]**;
- a contact page without a next step (Navarino, Speedcast) **[AUDIT]**;
- labels with no information scent: "Drop us a Line", "At the Helm", "Find out more" ×11 on one page (NSSLGlobal) **[AUDIT]**.

### Mood quote

**[?] No genuine superintendent quote exists in any source.** Not inventing one.

The nearest real artifact is the **vacancy text** (the role's voice, **not** a person's line):

> "approve all maintenance, repair, dry-docking and **communication invoices**"
> "Extensive experience as a **sea-going Engineer**"
> — [Technical Superintendent vacancy, seacareer.com](https://www.seacareer.com/i31473/technical-superintendent/)

Those two lines side by side are the whole persona: a person from the engine room who signs the
satellite-connectivity invoice.

### What would falsify this persona

If it turns out the superintendent **does not visit supplier websites** and connectivity is run
end-to-end by corporate IT (P2) or a procurement officer — P1 stops being primary. This is
**[?]**: no source shows they visit such sites. Verifiable with a single question to a sales
team: who actually sends the inbound enquiries.

> **Accumulated signals (not falsification) as of 05.08:** (1) customer quotes in vendor
> materials run 5:0 in favour of IT/COO, with zero superintendents ([`audit.md`](./audit.md) §5);
> (2) Navarino's redesign brief names its audiences as "**ship owners, IT managers, or
> partners**" — no superintendent on the list ([KOTA](https://kota.co.uk/work/navarino),
> `research.md` §11.2); (3) the only mention of a superintendent found in a connectivity
> context is as someone **pained** by crew-access management, not someone choosing
> ([Splash247](https://splash247.com/five-questions-maritime-connectivity-provider/)).
> The priority has not been changed — per this file's own rule, that decision is taken
> explicitly, not silently.

---

# ⭐ PRIMARY — P2. Fleet IT / IT Superintendent

> Owns the fleet's network and cyber. **Chooses the supplier; P1 pays.**

> ✅ **Promoted to primary 2026-08-18** on a third independent signal — see
> [§5](#5-why-p2-is-primary).

**Role status:** **[FACT with two caveats]** — the title is confirmed by the reporting line in
an IT Officer vacancy: "Reports To: **Senior VP of Fleet IT, IT Superintendent, Corporate
ITO**" ([allcruisejobs](https://www.allcruisejobs.com/i41081/it-officer/)). The vertical exists
and has at least three levels.

⚠️ **Two limitations of that evidence:** the vacancy expired 19.01.2022, and it is a **cruise**
vessel, not a merchant one.

✅ **Both removed by the 05.08.2026 verification — see [§10.1](#101--p2-confirmed-in-merchant-shipping--and-stronger-than-described).**
A live vacancy was found for an **IT Manager** at an "international shipping company" (Mazu
Recruitment, ref. 1118549) whose duties explicitly include **vendor selection and evaluation**
and **business-case preparation**. P2 is confirmed in merchant shipping — and turned out
stronger than described below: **P2 chooses, while P1 pays**.

The 05.08 post-research added confirmation **from a competitor's side**: Navarino's redesign
brief names the site's target audiences — "ship owners, **IT managers**, or partners"
([KOTA](https://kota.co.uk/work/navarino), `research.md` §11.2). A direct competitor designs
its site for exactly this role.

⭐ **The key point in the European sample:** at **Anglo-Eastern** (a top-3 manager, 740+
vessels) the role sits **inside the ship manager**. So IT standardisation is decided by **the
manager across the whole managed fleet**, not by an owner per vessel. That amplifies P4 as a
channel: one deal = dozens of vessels. Consistent with the fact that ~25% of the world's
trading fleet is under third-party managers.

**Confirmed by three more independent mentions** (search results, **[2ND-HAND]**):
Vessel IT Executive — "Partner with the **Fleet IT Manager** to assess systems and processes" ·
Senior IT Administrator — "Reporting to the Head of IT and the **Fleet IT Manager**" ·
RocketReach — "Group **Fleet IT Manager** at **ASP Ship Management**" (a third manager, not cruise).

And separately — a Technical Manager job description listing subordinates:
"Appraises: **Technical Superintendents**, Electrical Superintendent…, **IT Superintendent**,
Purchasers" **[2ND-HAND]**. So P1 and P2 sit **in the same shore vertical** under a technical
manager.

### Context

Owns the fleet's network and cyber: responsibilities include "Network infrastructure",
"Satellite infrastructure", "running regular checks on network and data security" **[FACT]**.

Arrives from three situations:
1. **Cyber compliance handed down from above** — MSC.428(98) requires cyber risks in the SMS, checked at the annual DOC verification ([IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx)). **[2ND-HAND]** — the resolution PDF failed to parse; the DOC wording came from paraphrase
2. **A constrained budget.** "More than half of shipowners spend **less than US$100,000 per year** on cyber security management" ([CyberOwl/HFW](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/)). **[SURVEY + 2ND-HAND]**
3. **Crew access policy** — owners ask for "time-restricted access – perhaps a couple of hours daily – to help manage fatigue" ([Riviera, Geneva Dry 2025](https://www.rivieramm.com/news-content-hub/13-of-vessels-operate-without-crew-internet-highlighting-maritime-connectivity-gap-84738)). **[SURVEY / industry statement]**

### Jobs

- Evaluate a solution's technical merit **before** talking to sales. **[AUDIT, with a correction]** — `research.md` §9.2 scored C8 (interactive validation) for only **two** of the HARD group: Marlink **2** and IEC **2**. Navarino, NSSLGlobal and Speedcast were **not scored** on this criterion. §10.4's generalisation ("The HARD group has essentially none") is `research.md`'s own extrapolation from 2 cases to 5, which I previously repeated as fact.
- Check whether the supplier itself has cyber procedures. Evidence that this is an irregular practice: "only **55% of industry suppliers are asked by shipowners to prove** they have cyber risk management procedures" ([CyberOwl/HFW](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/)). **[SURVEY + 2ND-HAND]** ⚠️ Note: the stat says buyers **don't ask** for proof. It arguably **refutes** this job rather than supports it.
- Build a comparison of options to defend the budget. **None of the 15 B2B sites offers such an artifact** — an empty space across the whole market. `research.md` §3–§5. **[AUDIT]** Whether this persona needs it — **[?]**: no demand evidence, and the only working comparison example (NerdWallet "Add to compare") is from a consumer market with a different decision model, so it doesn't count as confirmation.

### Pains

- **A catalog instead of an offer.** Marlink's cybersecurity page lists **18 named offerings** ([screen](./screens/hard/marlink-cybersecurity.png)) — against half the market's <$100k/yr budget that doesn't read as a choice. **[AUDIT + SURVEY]**
- **The same product in three trees** — NSSLGlobal duplicates offerings across Solutions / Communications / Markets ([screen](./screens/hard/nsslglobal-solutions-overview.png)). **[AUDIT]**
- **The only technical artifact is a gated PDF** (Marlink). **[AUDIT]**
- **Nothing can be verified independently** — C8 = 2 for the two HARD players scored (Marlink, IEC); the other three were not scored. **[AUDIT, with correction — see Jobs]**

### Trust triggers

**Convinces:** ISO 27001, IEC 62443, NIS2 shown in context rather than as decoration (Marlink,
C5 = **5**); a named certifying body — "IEC 62443-3-3 Type Approved (**DNV**)"
([screen](./screens/hard/navarino-cybersecurity-angel.png)); live self-verification — the
Cloudflare "Test your latency" model ([screen](./screens/aspirational/cloudflare-network-coverage.png), C8 = **5**). **[AUDIT]**

**Repels:** a spread of 18 items with no hierarchy; "IMO Compliance (Cybersecurity)" as a vague
label (IEC, C5 = **3**); a gate on the only technical document; number drift. **[AUDIT]**

⚠️ **Separately — do not build cyber on fear.** Speedcast runs a "68%" breaches stat
([screen](./screens/hard/speedcast-industry-maritime.png)) **[AUDIT]**, but the number under
that argument collapsed: the average ransom paid went **US$3.2m (2023) → ≈US$100k (2025)**, the
share who paid — 14% → **7%** ([HFW](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)). **[SURVEY + 2ND-HAND]**

⚠️ Also: what exactly Speedcast's "68%" measures, `research.md` **does not record** — only
'"68%" breaches stat'. We know the number is on the page; we don't know what it measures.

### Mood quote

**[?] No direct quote exists.** The nearest thing is an industry-report finding (150+
stakeholders: shipowners, charterers, OEMs, seafarers, insurers, shipyards):

> Only 1 in 6 shipowners fully understand what a cyber-secure vessel should look like upon delivery
> — [Thetius / CyberOwl (DNV Group) / HFW, *The Lifecycle Dilemma*](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/) · **[2ND-HAND]**

⚠️ **Quotation marks removed deliberately.** This wording came from a search-result paraphrase;
the HFW page was not opened. It must not be presented as verbatim — only as a paraphrased
finding.

Also: the stat concerns **shipowners** and **newbuild cybersecurity**. Stretching it to "P1 is
not a specialist across all five pillars" is **over-extrapolation**; see the correction in §5.

### What would falsify this

If maritime cyber is bought through an external MSP/integrator rather than fleet IT — P2
becomes an influencer without a budget. **[?]**

---

# ⛔ REMOVED — P3. SMS & compliance owner

> **Status after the 05.08.2026 verification: removed from the persona set.** The check showed
> this function **does not participate in purchasing** — see
> [§10.2](#102--p3--procurement-does-not-appear-in-the-duties). Its triggers (the annual DOC
> audit, PSC inspection) have been moved into P1's and P2's contexts.
> The block remains in the file as an **audit trail**, not an active persona.

> The person who readies the company for the DOC audit and the PSC inspection.

**Role status:** **[INFERRED from regulations]**. That the function exists — **[FACT]**
(required by MSC.428(98) and the ISM Code). **The exact job title — [?]**: no vacancy naming it
was found. No title is being attributed.

### Context

- **Cyber risks in the SMS** must be addressed no later than the company's **first annual Document of Compliance verification** after 01.01.2021 → the deadline **recurs annually** ([IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx)). **[2ND-HAND]** — the resolution PDF failed to parse; that the deadline is *annual* rather than one-off is **[INFERRED]** from the "first annual verification" wording
- **Crew internet** became port-verifiable: "Shipowners… provide seafarers on board their ships with **internet access with charges, if any, being reasonable in amount**", in force since 23.12.2024, enforced through **Port State Control** ([ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024), [Chambers](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)). **[FACT]**

### Jobs

⚠️ **None of the three has a source.** They are derived from regulation texts — "if a norm must
be closed, one logically seeks proof" — not observed. This is the weakest block in the file.

- Find a supplier who will **issue a document**, not a promise. **[?]**
- Assemble an evidence folder for the audit. **[?]**
- Quickly understand which requirements a solution closes. **[?]**

### Pains

- **No competitor offers a regulation-based entry.** The axes documented in `research.md`
  §3–§5 are product / industry / need / outcome (Honeywell) / stage (Stripe); no regulatory
  axis among them. ✅ **Manually verified 05.08.2026 — confirmed across all five**
  ([§10.3](#103--no-compliance-axis-in-any-of-the-five-navs--with-one-important-nuance)). **[FACT]**
  ⚠️ But phrase it precisely: Marlink has put compliance **on its homepage** as a chip row
  (`ISO 9001 · ISO 14001 · ISO 27001 · IACS UR E26/E27 · NIS 2 · DORA`). So regulation exists
  in the category — **as proof, not as an entry**. What's free is the navigational niche.
- Certification information is scattered: at NSSLGlobal the 24/7 promise and the certificates
  live in About, with no "Support" entry in the nav at all. `research.md` §3. **[AUDIT]**
- Documents are either absent (Marlink, NSSLGlobal — "no datasheets") or scattered across 3+
  subdomains (IEC). **[AUDIT]**

### Trust triggers

**Convinces:** a specific norm with a number and a body — "UR E27 Type Approved (Bureau
Veritas)", "IEC 62443-3-3 Type Approved (DNV)", IMO2021 ([screen](./screens/hard/navarino-cybersecurity-angel.png)); a Download Center with "installation manuals, user guides" (the IEC model). **[AUDIT]**

**Repels:** a vague "IMO Compliance (Cybersecurity)" with no indication of what exactly is
closed (IEC, C5 = **3**); partners named as categories without names. **[AUDIT]**

### Mood quote

**[?] No human quote exists.** The nearest voice is the text of the norm this persona must
satisfy:

> "Shipowners, so far as is reasonably practicable, provide seafarers on board their ships with **internet access with charges, if any, being reasonable in amount**"
> — [MLC 2006, 2022 amendments, in force 23.12.2024, ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)

### What would falsify this

If the compliance function does not participate in supplier choice and only receives what was
bought — P3 is not a persona but a content requirement. **[?]** I lean toward exactly this risk.

### 🔻 Verdict: remove P3 from the set

> **Updated 05.08.2026 after manual verification** ([§10.2](#102--p3--procurement-does-not-appear-in-the-duties)).
> The DPA's duty list was checked: SMS oversight, ISM compliance, vessel audits, coordination,
> reporting. **Purchasing, vendor selection and budget are not among them.** P3 is **not a
> buyer**.
>
> **Decision:** remove P3 from the persona set. Move the annual DOC audit and the PSC
> inspection into P1's and P2's contexts as triggers. Compliance remains a **content
> requirement** (the document that goes into the audit folder), not a persona with jobs. The
> set becomes **P1 + P2 + P4**.

Below — the original assessment that led to this decision.

#### Why P3 was the weakest of the four

Three reasons, kept in plain sight:
1. **The title is unconfirmed** — not a single vacancy with such a name was found.
2. **Jobs without sources** — all three derived from regulation texts.
3. **The pains partly duplicate P1's** — "scattered certificates" and "no documents" already
   sit in P1.

**What is genuinely unique in P3:** it is the only persona carrying a **recurring deadline**
(the annual DOC audit, the PSC inspection). No other persona holds it.

**Recommendation:** if the set must shrink — cut P3 first and move its deadline into P1's
context as a fifth trigger. It was kept in the set only because the deadline is the strongest
entry into the Solution Finder and must not be lost.

---

# SECONDARY — P4. Owner / CAPEX approver (and the ship manager)

> Not necessarily a site visitor — but no deal happens without them.

**Role status:** **[FACT]** — the split of authority is documented.

### Context

- **Owner:** "Long-term asset strategy, **Major capital expenditure**", frame agreements, fleet-wide policies. **Manager:** "Daily vessel operations, **Technical purchasing**… Purchase order issue, Invoice checking" — OPEX within "an **approval matrix**" ([AVS](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)). **[FACT]**
- **Structural blocker:** "**Supplier change may require approval when a frame agreement already exists**"; "Approved supplier lists, Frame agreements, Fleet-wide contracts" apply. **[FACT]**
- **Channel scale:** "Around **25% of the world's international trading fleet**… is reliant on services provided by third party managers in whole or part" ([Valour](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/)). **[FACT]**
- **Price pressure on the manager:** "Management contracts are negotiated **mainly on price**, margins… are squeezed" (same source). **[FACT]**

### Jobs

- Understand whether this can be bought at all under an existing frame agreement. **[INFERRED]** — directly from "Supplier change may require approval when a frame agreement already exists"
- Compare cost and get **an argument that can be forwarded**. **[?]** — no source; rests on the price pressure ("negotiated mainly on price") and the three-level approval chain, but the "forwarding" need itself is undocumented. ✅ **[FACT, but not here]** — the 05.08 verification found this job **in P2, not P4**: "**Prepare business cases and recommendations** for technology improvements, balancing operational needs with commercial considerations" ([§10.1](#101--p2-confirmed-in-merchant-shipping--and-stronger-than-described)). So the business case is **prepared by P2** and **received by P4**. What exactly P4 needs to decide remains **[?]**. The 05.08 post-research added an independent anchor: Gartner lists "**Consensus creation**" ("We need to get everyone on board") and "Validation" among the six universal B2B buying jobs ([Gartner](https://www.gartner.com/en/sales/insights/b2b-buying-journey), [`research.md`](./research.md) §11.2) — so the need to align a decision internally is confirmed beyond the vacancy
- Assess the supplier as a long-term risk, not a one-off purchase. **[?], now with partial backing** (05.08 post-research, [`research.md`](./research.md) §11.2): an industry column urges buyer due diligence on a provider's **financial viability** — "it makes no sense to risk upfront investment in **three to five years of equipment leasing** if you have any doubts about their sustainability" ([Splash247](https://splash247.com/five-questions-maritime-connectivity-provider/)). ⚠️ The author is a vendor president (Globecomm), so this is a vendor advising, not a buyer testifying; the [?] stays. Bonus datum: the equipment-leasing horizon is 3–5 years

### Pains

- **Nothing to forward.** No B2B site in `research.md` offers a comparison artifact or pros/cons. **[AUDIT]** The nearest "forwardable" thing is the case card following "claim + number + source" (Palantir: Sompo "$60 million improvement in profit"; Stripe: Postmates "$70M total increase") — an in-market-appropriate pattern. Whether a **comparison** specifically is needed — **[?]**.
- **Contact as a directory, not a route** — Speedcast splits into `maritimeinfo@` / `energy@` / `governmentinfo@` with no form ([screen](./screens/hard/speedcast-contact-directory.png)). **[AUDIT]**
- **Generic claims without numbers** — nothing to justify the decision to the owner with. **[INFERRED]**

### Trust triggers

**Convinces:** scale and market share as numbers (Marlink: "15k+ Vessels connected", "24.7%
global market share", attributed to Valour Consultancy 2025); named fleets; case cards on the
"one claim + one number + one source" model (Palantir: Sompo "$60 million improvement in
profit"; Stripe: Postmates "$70M total increase"). **[AUDIT]**

**Repels:** inconsistent numbers; a mid-journey exit to a foreign domain (Honeywell →
Salesforce C3, Cisco → engage2demand); a label/URL mismatch ("Get in Touch" → `/sign-up/` at
Speedcast). **[AUDIT]**

### Mood quote

✅ **The only genuine decision-maker quote in the entire evidence base:**

> "**Our crew identified this as important, and we listened.**"
> — Patrick O'Halloran, Chief Operations Officer, Overseas Shipholding Group, on installing satellite internet across the **entire fleet** ([BusinessWire, 19.12.2023](https://markets.financialcontent.com/ms.intelvalue/article/bizwire-2023-12-19-overseas-shipholding-group-installs-starlink-satellite-internet-service-on-entire-fleet))

He also explains the operational half of the decision: the internet "will permit seafarers to
**better manage their vessels and communicate with shoreside staff**".

**What this shows:** a fleet-wide connectivity decision is made at COO level, and the named
trigger is **the crew**, not the technology.

### What would falsify this

If the owner never visits a supplier's site and relies on the manager — P4 stops being a
persona and becomes a **content requirement** ("make a page that can be forwarded upward").
**[?]**

---

## 5. Why P2 is primary

**Decision taken 2026-08-18.** `../CLAUDE.md` §4.1 required this call **before build**; it was
overdue. The original reasoning for P1 is preserved verbatim below the decision, because it was
sound on what it knew — it was outvoted by evidence collected afterwards.

### 5.0 The decision record

**Primary: P2 · Fleet IT / IT Superintendent.** P1 becomes secondary — the payer and the veto.

**Three independent signals, none of them ours:**

1. **A direct competitor's redesign brief** names its audiences as "ship owners, **IT
   managers**, or partners" — the superintendent is **absent** from the list
   ([`research.md`](./research.md) §11.2). **[UX-CASE]**
2. **The trade column** naming a pained role names the superintendent **only** in connection
   with crew access — not with choosing a supplier (`research.md` §11.2). **[TRADE]**
3. **The reference site's own language** (audit 2026-08-18,
   [`scope-check.md`](./scope-check.md)): the homepage sells by **orbit type** (GEO / LEO /
   terrestrial), **"Secure Network Management"**, a **"SaaS platform that integrates data,
   systems, and processes"**, IoT and AI, and cyber as a top-level pillar. None of that is
   class / ISM / dock / budget vocabulary. It is written for the person who owns the network.
   **[AUDIT]**

**The decisive frame, already in this file:** [§10.1](#101--p2-confirmed-in-merchant-shipping--and-stronger-than-described)
established **"P2 chooses, while P1 pays"**. We had made primary the one who *pays*, not the
one who *chooses* — while the site's whole job is to help someone **choose**.

**What P1's case rested on, and why it lost:** authority over connectivity spend (documented)
plus the brief's audience line. But §5.2 below already conceded the weak point: *"That P1
personally visits supplier websites is confirmed by no source"* — the choice stood on
**authority and brief fit, not observed behaviour**. Signal 3 is the first piece of evidence
about who is actually being *addressed*.

**⚠️ What this signal is not.** The reference site shows who **the vendor thinks** it is talking
to, not who buys. Our own research documents that vendors in this category routinely speak the
wrong language (E1: COTP/COTM, "OSI model"). Taken alone it would prove nothing — it counts as
the **third** signal in a set, not as proof on its own.

**What would falsify this and switch back:** one question to a sales team — *who writes the
inbound enquiries, and after what*. If the answer is technical superintendents, primary returns
to P1. This is the same question that closes the site-visit bet ([`jtbd.md`](./jtbd.md) §6).

**Cascade applied the same day:** [`jtbd.md`](./jtbd.md) §8 (matrix marker, MVP core: **R3 in,
R5 out**) · [`../sitemap.md`](../sitemap.md) §3, §5, §6.3 (Approval materials rises, Crew access
drops) · [`../flows.md`](../flows.md) persona shorthand · [`../wireframes/_screens.md`](../wireframes/_screens.md) ·
[`../wireframes/_conventions.md`](../wireframes/_conventions.md) (E1 re-reading) ·
[`../wireframes/entry.html`](../wireframes/entry.html).

---

### 5.1 The original case for P1 — kept for the record

**1. It matches the declared primary audience.** The brief ([`../CLAUDE.md`](../CLAUDE.md) §4)
puts "Maritime — shipowners & fleet operators / **technical managers**" first, with the
homepage optimised for them. P1 *is* that technical manager — now with documented duties rather
than a declaration.

⚠️ **A brief discrepancy worth surfacing:** the brief merges "shipowners & fleet operators" and
"technical managers" **into one persona**. The sources show these are **two different people
with different authority** — P1 runs OPEX and signs invoices, P4 holds CAPEX and frame
agreements ([AVS](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)) **[FACT]**. Not a persona error — a brief imprecision, to be either accepted
deliberately or fixed in `CLAUDE.md` §4.

**2. It carries the product's core task.** The pain the Solution Finder exists for
(`research.md` §9): "quickly grasp **which solution fits them**" **[AUDIT]**.

⚠️ **Corrected during the audit.** This section used to claim the "P1 is no specialist across
five pillars" assumption was now backed by the "1 in 6" figure. **That was
over-extrapolation:** the stat concerns **shipowners** (not superintendents) and **newbuild
cybersecurity** (not five pillars), and it came from paraphrase, not the primary source. The
correct phrasing:

> An industry survey records **a substantial comprehension gap in cybersecurity** among
> shipowners ([HFW/CyberOwl/Thetius](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/), **[2ND-HAND]**). It is **adjacent** evidence for the thesis, **not its proof**.

The `research.md` §10.6 thesis of "rarely a specialist across all five pillars" remains
**untested** — and the Solution Finder as the leading pattern rests on it. The cheapest check
is a tree test on the five pillar names.

**3. It sits closest to the target conversion.** The primary conversion is a qualified enquiry
from a solution page ([`../CLAUDE.md`](../CLAUDE.md) §6). P1 is the only one of the four whose
authority **documentedly** covers connectivity spend ("approve all… **communication
invoices**") — their enquiry is qualified at once rather than informational.

**The others' roles:** P2 — the technical validator (can veto, rarely initiates); P3 — the
source of **the deadline**, not the budget; P4 — the **gate** P1's decision passes through.

⚠️ **An honest caveat on the choice.** That P1 **personally visits supplier websites** is
confirmed by no source — **[?]**. The primary choice rests on authority and brief fit, not on
observed behaviour. If one call to a sales team shows inbound enquiries are written by
procurement or IT — primary must switch to P2.

---

## 6. What in these personas is hypothesis (one table)

| Claim | Status | How to verify |
|---|---|---|
| Roles P1 and P4 exist with exactly these duties | **[FACT]** — vacancy and procurement scheme read directly | — |
| Role P2 exists in the **cruise** segment | **[FACT]**, but the vacancy expired 01.2022 | — |
| Role P2 equally exists in **merchant** shipping | ✅ closed 05.08 — live vacancy (see §10.1) | — |
| P3 exists as a **function** | **[FACT]** (required by MSC.428(98) / ISM) | — |
| P3 has a distinct title and takes part in selection | **[?]** → ⛔ refuted 05.08 (§10.2): not a buyer | — |
| P1 visits supplier websites | **[?]** | ask sales: who sends enquiries |
| A regulatory deadline brings a person **to the site** | **[?]** — a purchase trigger, not a visit trigger | ask sales |
| P1 is no specialist across the 5 pillars | **[?]** ← *was [SURVEY]; downgraded at audit, the stat measures something else* | tree test on the pillar names |
| No competitor has a compliance axis | ✅ **[FACT]** — verified by hand 05.08 across all five (was an argument from silence) | — |
| The whole HARD group lacks interactive validation | **[?]** ← *only 2 of 5 scored; the rest unchecked* | review the three sites |
| The listed pains cause drop-off **for these very people** | **[?]** — site flaws, not observed behaviour | usability test, even n=5 |
| The named trust triggers work on this audience | **[?]** — what competitors **do**, not what **works** | — |
| Industry-first or need-first entry | **[?]** — open in `research.md` §10.6 | first-click test |
| Thetius/CyberOwl, IACS, MSC.428(98), Futurenautics figures | **[2ND-HAND]** — primary sources didn't open *(IACS since verified — audit.md §5)* | open manually in a browser |

---

## 7. What follows for the design (short)

1. **P1's language is not network language.** Class, certificate, ISM, dock, budget. All argumentation must live in those words, not in "Zero Trust" and "OSI layer".
2. **The finder asks about the trigger, not the technology.** Docking / PSC inspection / DOC audit / newbuild / crew complaints — each entry documented in the "Context" sections above.
3. **Build proof on regulations and classification societies**, not invented "99.9%": Asterra is fictional, while UR E26/E27, MSC.428(98) and MLC 2006 are real and dated. Exactly what Navarino does.
4. **Every solution page must be "forwardable"** — so P1 can send it to P4. The rationale is not someone else's example but the procurement structure: P1's decision must pass the approval matrix and the frame agreement ([AVS](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)) **[FACT]**. The working in-market format is the "claim + number + source" case card (Palantir, Stripe). What exactly belongs on such a page — **[?]**.
5. **Ask for the role in the enquiry form.** Marlink asks the request type, NVIDIA the Job Role; P4 shows why: you need to know whether the person is blocked by an existing frame agreement.

---

## 8. Quality check

Cross-check of every persona against [`research.md`](./research.md), no new searching.
**Date:** 2026-08-05.

### 8.0 The main structural finding

**`research.md` confirms none of the four roles — and cannot.** It contains only whom
competitors **claim** as audiences (the "Primary audience" row, §3–§5) — companies' statements
about their markets, not descriptions of people. All roles, contexts and purchase triggers rest
on [`people-desk.md`](./people-desk.md) — vacancies, the procurement scheme and regulations.

Only **two layers** were legitimately taken from `research.md`: pains (competitor-site flaws)
and trust triggers (patterns competitors apply). Both are about **sites**, not people.

**Consequence for the work:** if asked at the defence "what do the personas stand on", the
answer is not "on the competitive analysis". The personas stand on public documents; the
competitive analysis only supplies the obstacle list.

### 8.1 What was corrected (11 items)

**Substantive:**

| # | Was | Now |
|---|---|---|
| 1 | "1 in 6 owners" presented as proof P1 is no specialist across 5 pillars (§5, item 2) | Downgraded to **[?]**. The stat is about *shipowners* and *newbuild cyber* — not superintendents and not five pillars. The `research.md` §10.6 thesis remains untested |
| 2 | "The whole HARD group has C8 ≤2" stated as an audit fact (P2, twice) | Corrected: `research.md` §9.2 scored **2 of 5** (Marlink, IEC). §10.4's generalisation is the study's own extrapolation, which I repeated |
| 3 | No marker that some figures are second-hand | Introduced the **[2ND-HAND]** label; applied to all Thetius/CyberOwl stats, IACS dates, the MSC.428(98) wording, Futurenautics' "92%", the docking cycle. Quotation marks **removed** from "1 in 6" |

**Precision:**

| # | Was | Now |
|---|---|---|
| 4 | "None of the 16 sites has a regulation entry" **[INFERRED]** | **[?]** — argument from silence: `research.md` wasn't looking for a compliance axis. Count also unified: **15** competitor sites, NerdWallet separate |
| 5 | "Named fleets CMA CGM, MSC, MOL, NYK" | "A **logo wall**" — `research.md` records logos, not named cases |
| 6 | "No datasheets at Marlink and NSSLGlobal" | Added `research.md`'s own hedge: "on fetched pages" / "found" — absence of a finding, not proven absence (§8 limitations) |
| 7 | "routed to a regional specialist" | Full quote restored: "**enquiry** routed to a regional specialist" |
| 8 | "IEC's finder requires no registration" (§0) | Removed — `research.md` doesn't record it. Replaced with what it **does** record: "gated by unexplained jargon" |
| 9 | P2 status — **[FACT]** with no caveats | Two added: the vacancy **expired 01.2022**, and it's the **cruise** segment, not merchant |
| 10 | P3's and P4's jobs with no labels at all | **[?]** / **[INFERRED]** applied to each. All three P3 jobs are sourceless |
| 11 | Trust triggers framed as "the market's working pattern" | Reframed: what competitors **do** and what `research.md` scored highly **by its own §9.1 criteria** — not proof of effect on the audience |

**Added, having been missing:** the brief discrepancy (`CLAUDE.md` §4 merges the owner and the
technical manager into one persona despite different authority); the note that regulatory
deadlines are **purchase** triggers, not **visit** triggers; the note that `research.md` does
not record what Speedcast's "68%" measures.

**A logic error found, not just a citation error:** the "only 55% of suppliers are asked to
prove cyber procedures" stat was cited as **support** for the "verify the supplier" job. It
rather **refutes** it — 45% of buyers don't ask for proof. Marked in the text.

### 8.2 Duplication check / "added for the count" check

| Persona | Unique contribution | Verdict |
|---|---|---|
| **P1** | budget + class/ISM + authority over connectivity invoices | holds |
| **P2** | network/cyber + the need to verify before contact | holds; segment attribution since closed (§10.1) |
| **P3** | the **recurring deadline** (DOC audit, PSC) | 🔻 **weakest** — title unconfirmed, jobs sourceless, pains partly duplicate P1. Cut first; move the deadline into P1 |
| **P4** | CAPEX + the frame agreement as a **deal blocker** | holds — the only persona able to stop the purchase |

No duplication of needs between P1 and P2: different language, proof and trust criterion.
Duplication of pains between P1 and P3 — **present** (certificates, scattered documents),
recorded in the P3 verdict.

### 8.3 Primary check

| Criterion | Fit |
|---|---|
| Primary audience (`CLAUDE.md` §4) | ✅ P1 = the brief's "technical managers" |
| Core task (`research.md` §9 — "which solution fits them") | ✅ but that *P1 specifically* holds it — **[?]** |
| Conversion (`CLAUDE.md` §6 — qualified enquiry from a solution page) | ✅ the only one with documented authority over connectivity invoices |

**The primary choice remains P1**, but now rests on **two** of the three arguments: brief fit
and authority. The third — "he is the person who can't navigate the pillars" — was downgraded
to a hypothesis during the audit.

### 8.4 Which hypotheses remain

The full list is in [§6](#6-what-in-these-personas-is-hypothesis-one-table). The four most
expensive, in descending project risk:

1. **P1 visits supplier websites at all.** If not — the primary is wrong, and with it the whole homepage narrative.
2. **"No specialist across five pillars."** The Solution Finder as the leading pattern stands on it. Post-audit — a hypothesis.
3. **A regulatory deadline leads to the site.** Purchase triggers are documented; the link to a visit is not. The trigger-driven finder rests on it.
4. **The named trust triggers work on this audience.** We only know competitors apply them.

### 8.5 What data would make the personas confirmed

**Closable without budget:**
- Manually open the 6 primary sources that returned 403 / unreadable PDF → removes every **[2ND-HAND]**.
- Review the 5 HARD competitors' navigation for a compliance axis → removes the hypothesis in P3's pains. *(done 05.08 — §10.3)*
- Check C8 on the three unscored HARD players → patches the hole in `research.md` §9.2 itself.
- Find 2–3 IT-role vacancies at **merchant** operators → confirms or kills P2. *(done 05.08 — §10.1)*
- A tree test on the five pillar names, n=5 → tests hypothesis №2.

**Not closable without access to people:**
- Who actually sends the inbound enquiries (one question to sales removes hypotheses №1 and №3).
- Whether the compliance function takes part in selection → P3's fate. *(closed 05.08 — §10.2)*
- Whether the trust triggers work.
- All on-site behaviour — remains **[?]** entirely.

---

## 9. What to open by hand

Everything below is public pages. Automated fetches got 403 or unreadable PDFs; **they open in
a normal browser**. Ordered by project impact, not convenience.

### 🔴 Level 1 — changes design decisions (3 items, ~40 min)

Not citation hygiene. Each item can **cancel** something already designed.

**1.1 Does the IT role exist at merchant (non-cruise) operators → P2's fate**
Search LinkedIn Jobs / [Faststream](https://www.faststream.com/jobs/ship-management-jobs) /
[maritimejobs.com](https://www.maritimejobs.com/j-superintendent-jobs) for: `IT Superintendent`,
`Fleet IT Manager`, `ICT Manager shipping`, `Digital Superintendent`.
**Extract:** whether the role exists in merchant shipping at all; who it reports to; whether
supplier selection or evaluation is mentioned.
**Consequence:** if no such vacancies exist — P2 exists only in cruise, and must be either
dropped or rewritten as "corporate IT advising P1".

**1.2 Does the compliance function take part in selection → P3's fate**
Same boards, queries: `DPA`, `Designated Person Ashore`, `HSEQ Manager shipping`,
`Marine Compliance Manager`.
**Extract:** whether duties include supplier/system evaluation or selection, or only audit and
documentation.
**Consequence:** if audit only — P3 stops being a persona and becomes a content requirement
(as assumed in the P3 verdict).

**1.3 Does any competitor have a regulation-based entry → the fate of "compliance as an axis"**
Walk the five HARD navs and look for any norm-based entry (IMO 2021, UR E26/E27, MLC, NIS2):
[Marlink](https://marlink.com/) · [Navarino](https://navarino.co.uk/) ·
[NSSLGlobal](https://nsslglobal.com/) · [IEC Telecom](https://www.iec-telecom.com) ·
[Speedcast](https://www.speedcast.com)
**Extract:** a page/section/filter by norm — present or not. Screenshot into `screens/`.
**Consequence:** if even one has it — the "free niche" thesis falls and §7 must be rewritten.

### 🟠 Level 2 — removes the quotes from load-bearing figures (3 items, ~30 min)

**2.1 HFW / CyberOwl / Thetius — *The Lifecycle Dilemma*** (2025)
→ [hfw.com press release](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)
**Verify verbatim:** "1 in 6 shipowners…" · "17% of shipyards…" · the ransom dynamics
(7% vs 14%, ~$100k vs $3.2m) · the sample ("more than 150 stakeholders").
**The most important item on the list** — the primary-persona rationale used to lean on this figure.

**2.2 CyberOwl / HFW / Thetius — *Shifting Tides, Rising Ransoms*** (2023, PDF)
→ [cyberowl.io PDF](https://cyberowl.io/wp-content/uploads/2023/10/CyberOwl-HFW-Thetius-Cyber-Security-Report-2023-Shifting-Tides-Rising-Ransoms-1.pdf)
**Verify:** "more than half spend <US$100,000/yr" · "55% of suppliers asked to prove cyber
procedures" · sample size and composition (200+).

**2.3 IMO Resolution MSC.428(98)**
→ [PDF on imo.org](https://wwwcdn.imo.org/localresources/en/OurWork/Security/Documents/Resolution%20MSC.428\(98\).pdf)
**Verify:** the exact SMS wording and "first annual verification of the Company's Document of
Compliance after 1 January 2021" — and whether it is a **requirement** or a **recommendation**
(the resolution speaks in "encourages" language, and confusing the two would be embarrassing).

### 🟡 Level 3 — evidence hygiene (4 items, ~30 min)

**3.1 IACS UR E26/E27 — dates and responsibility**
→ [IACS press release](https://iacs.org.uk/news/iacs-ur-e26-and-e27-press-release) ·
[ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html) ·
[ABS Group](https://www.abs-group.com/Solutions/Cybersecurity/Maritime-Cybersecurity/Maritime-Cybersecurity-Compliance-to-Industry-Regulations/Cybersecurity-Compliance-to-IACS-E26-and-E27-Regulations/)
**Verify:** "contracted for construction on and after 1 July 2024" · that it is **newbuilds
only** · **who is responsible** — the yard, the owner or the system supplier (the last I never
confirmed anywhere).

**3.2 Futurenautics Crew Connectivity 2018**
→ [full report, PDF](http://cyberonboard.com/wp-content/uploads/Crew_Connectivity_2018_Survey_Report.pdf)
**Verify:** "92%" · n=6,000 · the sponsors (KVH, Intelsat) — and whether a newer wave exists.

**3.3 The classification docking cycle**
→ better taken from a classification society (DNV / ABS, "survey requirements") than a blog.
**Verify:** two dockings per 5 years, intermediate ≈2.5 years.

**3.4 Does IEC's finder require registration**
→ [iec-telecom.com/en/product-solution/](https://iec-telecom.com/en/product-solution/) — just
walk through to the results. One minute; removes a **[?]** from §0.

### 🔵 Bonus — what no competitor analysis has

**4.1 Tenders: how the buyer writes down their own selection criteria**
→ [UK Find a Tender, notice 075929-2025](https://www.find-tender.service.gov.uk/Notice/075929-2025)
(MCA, Iridium satellite terminals) · [TED](https://ted.europa.eu) — search `satellite
communication` + `vessel` · [SAM.gov](https://sam.gov)
**Extract:** award criteria and **their weightings** (price vs quality), mandatory
requirements, SLA and support requirements.
**Why this is the most valuable:** it is "how they choose", **written by the buyer
themselves**, with numbers — not reconstructed from other people's websites. None of the 16
sites offers that.

---

### What to do with the results

- Confirmed → remove **[2ND-HAND]**, restore the quotation marks, keep the link.
- Diverged → fix the figure **and** check whether a conclusion rested on it (as with "1 in 6"
  and the primary rationale).
- Not found → keep **[?]** and state "primary source unavailable" outright — more honest than a
  quiet paraphrased quote.

---

## 10. Level-1 verification results — done 2026-08-05

Items 1.1–1.3 walked manually in a browser. Findings below.

### 10.1 ✅ P2 confirmed in merchant shipping — and stronger than described

**A live vacancy found** (not cruise, not 2022): **IT Manager**, Mazu Recruitment, Singapore,
ref. 1118549 — [mazurecruitment.com/jobs/it-manager-915339](https://www.mazurecruitment.com/jobs/it-manager-915339). **[FACT — page read directly]**

The client is "an **international shipping company**"; the role — "oversee both **vessel and
corporate IT** operations", with a "**small IT team**".

**Duties directly relevant to our site** (verbatim):
- "**Review and standardise vessel IT systems, connectivity solutions** and technology platforms across the fleet"
- "**Manage relationships with technology vendors and service providers**"
- "**Evaluate existing systems and make recommendations for future technology investments**"
- "**Prepare business cases and recommendations** for technology improvements, **balancing operational needs with commercial considerations**"
- "Build and enhance the organisation's **cybersecurity framework, policies and best practices**"
- "Conduct **vessel visits** when required"

**Requirements:** "Previous experience in **vessel IT within the shipping industry** is
essential" · "Strong understanding of **vessel communications, satellite connectivity**" ·
"Experience **managing vendors**, technology projects and third-party service providers" ·
"**Commercial mindset with the ability to justify investments**" · "This opportunity would suit
an experienced **Maritime IT Superintendent**".

**🇪🇺 European check (05.08.2026)** — since Asterra targets Europe and Mazu is Singaporean. The
role is confirmed across **all major European maritime hubs** **[2ND-HAND]**:
**Anglo-Eastern** — Senior Fleet IT Engineer, **Athens**, 18.07.2026 ("Delivering **newbuild
ICT solutions**"; "Driving **standardization, cybersecurity**"; "monitor performance of IT
systems on-board the **managed vessels**… reports to management") · **Newport S.A.** — Fleet IT
Supervisor, **Piraeus** · **Hapag-Lloyd AG** — a dedicated **Fleet IT department**, **Hamburg**
· CareerFinders — Senior IT Administrator, **Limassol**, reporting to a Fleet IT Manager ·
FLEETWORK AE — Athens. Full table — [`jtbd.md`](./jtbd.md) §0.

⭐ **The most important point in the European sample:** at **Anglo-Eastern** (a top-3 manager,
740+ vessels) the role sits **inside the ship manager**. So IT standardisation is decided by
**the manager across the whole managed fleet**, not the owner per vessel. That amplifies the P4
channel: one deal = dozens of vessels. Consistent with "~25% of the world's trading fleet under
third-party managers".

**Confirmed by three more independent mentions** (search results, **[2ND-HAND]**):
Vessel IT Executive — "Partner with the **Fleet IT Manager** to assess systems and processes" ·
Senior IT Administrator — "Reporting to the Head of IT and the **Fleet IT Manager**" ·
RocketReach — "Group **Fleet IT Manager** at **ASP Ship Management**" (a third manager, not cruise).

And separately — a Technical Manager description listing subordinates:
"Appraises: **Technical Superintendents**, Electrical Superintendent…, **IT Superintendent**,
Purchasers" **[2ND-HAND]**. So P1 and P2 sit **in one shore vertical** under the technical manager.

**What this changes:**
1. The **[?]** on P2's segment attribution is removed — the role exists in merchant shipping,
   the vacancy is live.
2. **Three jobs I had marked [?] are now confirmed** — but in **P2**, not P4: supplier
   selection and evaluation, investment recommendations and **business-case preparation**. That
   is the same "forwardable page" from §7.4 — and the client words it themselves.
3. ⚠️ **The primary bet deserves a re-check.** P2 holds documented "manage vendors" and
   "evaluate systems" authority; P1 holds "approve communication invoices". Different roles in
   one chain: **P2 chooses, P1 pays**. For a site selling solutions, the chooser may matter
   more. Weigh this deliberately before finalising, don't leave it by default.

### 10.2 ⚠️ P3 — procurement does not appear in the duties

The DPA duty description checked ([QMII](https://www.qmii.com/key-responsibilities-of-the-designated-person-ashore-dpa/), 05.12.2024). The five listed duties:
overseeing SMS development and implementation · ISM compliance · **regular vessel audits** ·
ship–shore coordination · safety reporting and protocol improvement.

**Supplier selection, vendor evaluation and budget are not among them.** **[FACT]**

Also found: a live HSQE Sr. Manager vacancy where the role "serves as the **Designated Person
Ashore**" and Cyber Security appears among its topics **[2ND-HAND]** — so cyber does fall
within this function's perimeter, but as an **audit subject**, not a purchasing one.

**Verdict:** P3 is **not a buyer**. My own assumption from "What would falsify this" is
confirmed. Firm recommendation: **remove P3 from the persona set**, move the annual DOC audit
and the PSC inspection into P1/P2 contexts as triggers. Company compliance remains a **content
requirement** (a document for the audit folder), not a persona with jobs.

### 10.3 ✅ No compliance axis in any of the five navs — with one important nuance

All five HARD competitors' menus walked by hand. **[FACT]**

| Competitor | Navigation axes | Norm-based axis |
|---|---|---|
| **Marlink** | Possibility Portfolio · **Industry** · Services & Support | no |
| **Navarino** | About Us · Solutions (flat product list) · Navarino Group · News | no · no industry axis either |
| **NSSLGlobal** | Markets · Solutions · Communications · At the Helm · Innovation | no |
| **IEC Telecom** | About · Our Partners · Vertical Markets · Regional Offices · Our Offer · Value Added Services · News | no |
| **Speedcast** | About Us · Solutions · Industries · Resources · Newsroom | no |

**The §9 item 1.3 hypothesis is confirmed:** no norm-based entry anywhere. The niche is free.

**But a nuance that changes the wording:** Marlink has already put compliance **on its
homepage** — a chip row right under the trust stats: `ISO 9001 · ISO 14001 · ISO 27001 ·
IACS UR E26/E27 · NIS 2 · DORA`. So regulation there is **proof**, not **an entry**.

The correct phrasing for the work: not "nobody talks about compliance" (they do), but
**"nobody lets you enter through it"**. The difference between a certificate as a badge and a
norm as navigation — and precisely the latter is free.

### 10.4 🔴 `research.md` is already stale in places — after two weeks

Not sought deliberately; noticed in passing. The audit is dated 22.07.2026; this check —
05.08.2026.

- **Marlink homepage:** a compliance chip row appeared, including **DORA**, absent from `research.md` entirely. Different numbers: now "**75yrs**" and "**23.5k** Operations supported by Marlink" instead of the recorded "15k+ Vessels connected" and "1,700+ specialists". "24.7% global market share, confirmed by Valour Consultancy 2025" — matches.
- **IEC Telecom:** the finder URL from `research.md` — `/en/product-solution/` — **redirects to the homepage**, and the mega menu (Our Offer: Solutions · Satellite Terminals · Starlink Portfolio · VSAT Services) **has no finder item**. It appears **the direct market's only real finder was removed**. ⚠️ An observation, not a proven fact — the page may have moved.
- **Speedcast:** a "**Shop Now**" → `/shop/` appeared in the header — e-commerce. Not in `research.md`.
- **Speedcast:** the "Get in Touch" → `/sign-up/` mismatch — **still live**, confirmed in the page code.
- **NSSLGlobal:** the "At the Helm" and "Drop us a Line" labels — **still live**, confirmed.

**Consequence:** if `research.md` §10.6 leans on "IEC is the only one with a finder", that
thesis needs re-checking. And the work should carry the audit date next to its conclusions — a
competitive snapshot stales within weeks, which is itself an honest finding about the category.

### 10.5 Side finding: how Marlink solves the same task as our finder

At the bottom of the Solutions mega menu sits the line:

> "**Not sure where to start? Talk to our team and we'll point you in the right direction**"
> — with "Contact us" and "Possibility Solutions" buttons

So Marlink acknowledges the orientation problem and solves it **with a human**, not a tool.
That is a direct competitor to our Solution Finder — cheaper to build and free of the
wrong-recommendation risk. Worth keeping in mind as the alternative we deliberately did not
choose.
