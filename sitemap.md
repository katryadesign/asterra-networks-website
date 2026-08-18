# Sitemap — Asterra Networks

**Compiled:** 2026-08-05
**Phase:** entity inventory only. Screens, pages, navigation and URLs are deliberately
**not** defined here — they come later, as ways to act on these entities.
**Sources:** [`research/jtbd.md`](./research/jtbd.md) · [`research/personas.md`](./research/personas.md) ·
[`research/research.md`](./research/research.md) · [`CLAUDE.md`](./CLAUDE.md) (brief).

**Method.** Entities are derived from personas and jobs, not from the customary B2B
sitemap. The working rule: *an entity no job requires is ballast*. Every entity below
names the job that generates it; anything that failed that test sits in
[§2 Under question](#2-under-question), not in the main list.

**Evidence labels** — same convention as the research files:
**[FACT]** primary source read · **[2ND-HAND]** from paraphrase · **[SURVEY]** ·
**[AUDIT]** recorded on a competitor site in `research.md` · **[INFERRED]** derived
conclusion · **[?]** hypothesis, no data.

**Jobs referenced** (from [`jtbd.md`](./research/jtbd.md)): **MAIN** (what we need + who
to entrust) · **R1** (norm → requirement) · **R2** (survives external scrutiny) · **R3**
(rationale for whoever pays) · **R4** (can this be bought at all) · **R5** (crew access
vs control) · **E1** (not look incompetent) · **E2** (rationale won't crumble) · **S1**
(employer people come to).
**Personas referenced** (from [`personas.md`](./research/personas.md)): **P1** Technical
Superintendent (⭐ primary) · **P2** Fleet IT / IT Manager · **P4** Owner / CAPEX approver.

> ⚠️ **Caveat spanning the whole inventory** (inherited from `jtbd.md` §0): that these
> jobs are pursued **on a supplier's website at all** is a design bet — purchase triggers
> are documented, visit triggers are not. Every entity below inherits that [?].

---

## 1. Entities

### Relation map (text form)

```
Buying Situation ──triggers──▶ MAIN job
      │                            │
      ▼                            ▼
   Norm ◀──"closes it"──── Solution ───framed by──▶ Industry
      │                       │  │
 "paper you get"              │  └──carries──▶ Proof Item (attribute-like)
      │                       │
      ▼                       ├──special case──▶ Crew Access Policy
  Proof Item                  │
                              ├──exports──▶ Approval Artifact ──forwarded──▶ P4
                              │
                              └──ends in──▶ Inquiry (carries a routing promise — see O7)
```

---

### O1 · Solution

**Definition.** A named Asterra offering (within one of the five pillars) that closes a
specific fleet requirement. The central object of the MAIN job: the thing the buyer must
*identify as fitting* and *not be embarrassed to name out loud* before talking to sales.

**Role in the user's process.** P1/P2 arrive with a requirement, not a product name. The
Solution is what they must map their situation onto — the market's core failure:
users cannot "quickly grasp which solution fits them" (`research.md` §9) **[AUDIT]**.

**Fields / components:**

| Field | Basis |
|---|---|
| Name (invented, per brief naming system) | brief §3 **[FACT — brief]** |
| Problem it closes, phrased in the buyer's own language (class / certificate / ISM / dock / budget — not OSI layers, not COTP/COTM) | E1; IEC jargon failure C3=2, NSSLGlobal "OSI model" (`research.md` §3, §9) **[AUDIT]** |
| Pillar (**one of 6** — ⚠️ was 5 until 2026-08-18; **Equipment** added from the reference-site audit, `research/scope-check.md` §2.1) | brief §3, §5 **[FACT — brief]** |
| Partners it is accredited to carry (→ O5 partner-accreditation items) | brief §6.1; the reference site gives the partner strip a full homepage band **[AUDIT]** |
| Industries it serves (cross-links) | dual-axis IA is the category default (`research.md` §6, pattern 1) **[AUDIT]** |
| Buying situations it answers (→ O4) | personas P1 "Context": docking, PSC, budget line, newbuild **[FACT/2ND-HAND]**; the situation→solution mapping itself **[INFERRED]** |
| Norms it closes + **the paper you get** (→ O2) | R1, the unclaimed vendor-side link (`jtbd.md` §8.2) **[FACT + AUDIT]** |
| Benefits / outcomes | brief §1 **[FACT — brief]** |
| Budget-grade technical facts (spec table, datasheet-level numbers) — the raw material O6 packages | P1 pain "nothing to put in a budget": no datasheets found at Marlink/NSSLGlobal, Speedcast PDFs stale 2020–21 (`research.md` §3) **[AUDIT]**; that P1 seeks them *on a website* — **[?]** |
| Proof items attached (→ O5) | R2 **[FACT]** |
| Coverage / global reach claim | brief §4 shared driver **[FACT — brief]**; buyer demand in research — **[?]**; redundancy pattern from crew thread (`jtbd.md` §9.2 item 3) **[FACT]** |
| Inquiry context it passes on (→ O7): which solution, which industry | brief §6; Marlink routed form C7=5 (`research.md` §9.2) **[AUDIT]** |

**Solution vs Service — a deliberate non-split.** No job in `jtbd.md` distinguishes
buying a *service* from buying a *solution*: MAIN's "who to entrust" covers both, and the
brief models Technical Services as one of the five pillars (brief §5) — i.e. a Solution
instance, not a parallel object. Support enters the model as a **commitment-type Proof
Item** on O5 (24x7x365 + multilingual expectation, Splash247 — `research.md` §11.2
**[TRADE]**), matching how the market treats support: a trust asset, not a separate
catalog (`research.md` §6, open question 3). Revisit only if the v1 support-surface
question is answered with a real support object.

**Generated by jobs:** MAIN (`jtbd.md` §2) — primary; R1, R2, R3 attach to it.
**Personas:** P1 (`personas.md` P1 Jobs — "understand which pillar applies… without
studying the whole catalog") · P2 (`personas.md` §10.1 — "evaluate existing systems and
make recommendations").
**Related to:** Industry (O3), Norm (O2), Buying Situation (O4), Proof Item (O5),
Approval Artifact (O6), Inquiry (O7), Crew Access Policy (O8 — a specialized area).
**Research basis:** `research.md` §9 core pain + C1 scores (Marlink 2, IEC 4-with-jargon)
· §6 opportunity 1 (finder as signature) · §10.6 (guided recommender fits ~5 curated
pillars) · [iec-telecom-solution-finder.png](./research/screens/hard/iec-telecom-solution-finder.png).

---

### O2 · Norm (dated regulatory requirement)

**Definition.** An external, dated, externally-enforced requirement (MLC 2006 amendments,
IMO MSC.428(98), IACS UR E26/E27) that lands on the buyer's vessels and starts a
purchase. Not our content — a real-world object with its own lifecycle, which is exactly
why it qualifies as an entity rather than an attribute of Solution.

**Role in the user's process.** The strongest documented conversation entry: R1 is the
job of translating a norm into "what does this mean for my vessels", and the vendor-side
link **"norm → which solution closes it → what paper you get"** is claimed by nobody in
the market (`jtbd.md` §8.2.2) **[FACT — verified 05.08 across all five HARD navs,
`personas.md` §10.3]**.

**Fields / components:**

| Field | Basis |
|---|---|
| Official name / number | ILO, IMO, IACS texts **[FACT/2ND-HAND]** |
| Effective date (and recurrence, e.g. annual DOC verification) | MLC in force 23.12.2024 **[FACT]**; MSC.428(98) annual DOC **[2ND-HAND]** |
| Who enforces it (PSC, class society, auditor) | R1 evidence **[FACT]** |
| What it applies to (vessel types; newbuild-only for UR E26/E27) | ClassNK **[2ND-HAND]** |
| What it demands, in plain buyer terms — a summary only: deep norm-explaining remains class-society territory, not ours | ClassNK owns norm-explaining: guidelines, 137 Q&As (`jtbd.md` §8.1 R1) **[FACT]** |
| Which Solution(s) close it (→ O1) | the free niche itself **[FACT + INFERRED]** |
| **The paper you get** (type approval, certificate, audit evidence) | Navarino "UR E27 Type Approved (Bureau Veritas)" **[AUDIT]** |

**Generated by jobs:** R1 (`jtbd.md` §3) — primary; feeds R2.
**Personas:** P1 ("monitor vessels Class and trading certificates", ISM — `personas.md`
P1 Context) · P2 ("cybersecurity framework, policies"; newbuild ICT — `personas.md` §10.1).
**Related to:** Solution (O1), Proof Item (O5 — the resulting paper), Buying Situation
(O4 — a norm deadline *is* a situation), Industry (O3 — norms are sector-scoped),
Crew Access Policy (O8 — MLC 2006 is its legal half).
**Research basis:** `personas.md` §10.3 — no compliance axis in any of five navs; Marlink
chip row = proof, not entry ("nobody lets you enter through it") **[FACT]** ·
[navarino-cybersecurity-angel.png](./research/screens/hard/navarino-cybersecurity-angel.png).
⚠️ **[?]** — that buyers bring the norm question to a *supplier* rather than to class /
P&I / flag (`jtbd.md` §3 R1 caveat).

---

### O3 · Industry

**Definition.** The buyer's sector (Maritime lead; Government, Energy, Enterprise,
Transportation, Research, Emergency Response secondary). The self-identification object:
"choose your world", after which everything is re-framed in that world's language and
proof.

**Role in the user's process.** Discovery by recognition — the category-default entry
(`research.md` §10.2), and for E1 the guarantee that the conversation happens in the
buyer's vocabulary, not a network engineer's.

**Fields / components:**

| Field | Basis |
|---|---|
| Name | brief §4 **[FACT — brief]** |
| The sector's buying situations (→ O4) and norms (→ O2) | P1 Context entries; MLC/PSC are maritime-scoped **[FACT]** |
| Relevant Solutions, framed in sector language | `research.md` §10.2 **[AUDIT]** |
| Sector-specific proof (named-fleet scale, sector certifications) | Marlink shipping page trust density **[AUDIT]** |
| For Maritime specifically: crew retention framing | S1 — "the first question potential crew ask"; COO quote **[FACT]** |

**Anti-pattern to avoid:** a sector object with no sector substance — IEC's maritime
hub reads as filler (`research.md` §3, §10.2,
[iec-telecom-industry-maritime.png](./research/screens/hard/iec-telecom-industry-maritime.png)) **[AUDIT]**.

⚠️ **[?] — Industry vs Situation as the leading entry.** Whether buyers self-identify by
sector faster than by need/situation is an **open question** (`research.md` §10.6
condition (a); `personas.md` §6 — "Industry-first or need-first entry: [?]"). The entity
itself is solid (the sector exists in the buyer's world); its *precedence over O4* is a
hypothesis.

**Generated by jobs:** MAIN (narrowing without studying the catalog; the matrix names
"Solutions ↔ Industries cross-links" as MAIN's product function — `jtbd.md` §8.1) ·
E1 (language) · S1 (Maritime framed as crew retention, not "welfare").
**Personas:** all; Maritime = P1/P4 lead (brief §4).
**Related to:** Solution (O1), Norm (O2), Buying Situation (O4), Proof Item (O5),
Crew Access Policy (O8 — the Maritime page's S1 argument).
**Research basis:** `research.md` §6 pattern 1 (dual-axis default; Navarino the lone
exception "pays for it with no industry entry points") **[AUDIT]** · §10.2 fit analysis.

---

### O4 · Buying Situation (trigger)

**Definition.** The documented real-world event that starts the whole process: the
docking window, a PSC inspection, the annual DOC audit, a newbuild contract, crew
demanding internet, the connectivity budget line coming up for defence. The object the
MAIN job's "when" clause points at.

**Role in the user's process.** The person arrives *from a situation*, not from a product
category. Whatever mechanism serves the MAIN job must ask about the trigger, not the
technology (`personas.md` §7.2).

**Why this is not the same object as Industry (O3):** an Industry is *who the buyer is*
(stable, self-identifying); a Situation is *what just happened* (dated, recurring, names
a norm or an event). The jobs' "when" clauses name situations, the brief names
industries; Stripe keeps use-cases and industries as **separate lists** (`research.md`
§5, sitemap row) **[AUDIT]**. One industry contains many situations. Kept separate.

**Fields / components:**

| Field | Basis |
|---|---|
| Name, in the buyer's own words | P1 Context, four documented entries **[FACT/2ND-HAND]** |
| Date / recurrence (docking ≈2.5-year cycle, annual DOC, PSC any port call) | **[2ND-HAND]** (docking cycle), **[FACT]** (MLC/PSC) |
| Personas involved | personas Context blocks **[FACT]** |
| Leading Norm, if any (→ O2) | R1 **[FACT]** |
| Solutions that answer it (→ O1) | **[INFERRED]** — the mapping is our design work |

**Status caveat:** these are documented **purchase** triggers; that any of them acts as a
**visit** trigger is **[?]** (`personas.md` §6 — "a regulatory deadline brings a person
to the site: [?]").

**Generated by jobs:** MAIN ("When I need to close a specific fleet requirement…" — the
situation is the job's opening clause) · R1, R5 (each names its own trigger).
**Personas:** P1 (`personas.md` P1 Context, entries 1–4) · P2 ⭐ (`personas.md` P2
Context, entries 1–3).
**Related to:** Norm (O2), Solution (O1), Industry (O3).
**Research basis:** `personas.md` §7.2 ("the finder asks about the trigger, not the
technology") · the four P1 entries with sources.

---

### O5 · Proof Item

**Definition.** A single verifiable unit of trust: a type approval or certification
**with the certifying body's name**, a scale/uptime stat, a support commitment, or an
outcome case. Attached to Solutions and Industries; the atom the buyer relays upward.

**Borderline status, stated honestly:** a Proof Item rarely stands alone — the buyer
consumes it *on* a Solution. It is kept as an entity (not a field) because instances are
reusable across Solutions, have their own fields, and E2 imposes an integrity constraint
on the *collection*: **one source of truth per number** — stat drift is itself a
reliability signal (Marlink 99.9↔99.99, NSSLGlobal 50/55/56, Stripe 500M↔250M,
`research.md` §6) **[AUDIT]**.

**Fields / components:**

| Field | Basis |
|---|---|
| Type: type approval · ISO cert · norm compliance · stat · support commitment · outcome case · **partner accreditation** | Navarino, Marlink, Speedcast patterns (`research.md` §3) **[AUDIT]**; partner accreditation added 2026-08-18 from the reference-site audit **[AUDIT]** |
| **Partner accreditation — the integrator's proof.** Whose capacity, hardware or platform Asterra is accredited to supply, install and service: satellite capacity partners · navigation & bridge OEMs · safety-equipment manufacturers. Consumed by R2/P1 the same way a certifying body's name is — a third party's name cannot be self-asserted. ⚠️ **Never name a real company as Asterra's partner** (brief §6.1). | The reference site devotes a full homepage band to a named partner strip and runs partnership announcements as news **[AUDIT]** |
| **Sub-type → job mapping** (who consumes which): certification/type approval → R2/P1 (class scrutiny) · outcome case → R3/P4 (the forwardable number) · stat → pre-contact trust C4, under the E2 single-source constraint · support commitment → MAIN's "who to entrust"/P1 | `jtbd.md` §8.1 rows R2/R3; `personas.md` P1/P2/P4 Trust triggers **[FACT + AUDIT]** |
| The claim + the number | "claim + number + source" case format (Palantir, Stripe — `research.md` §6 opp. 3) **[AUDIT]** |
| **The certifying body's name** (DNV, Bureau Veritas) — outweighs the number for P1 | R2; `jtbd.md` §10 item 3 **[AUDIT + INFERRED]** |
| Source and date (anti-stale: Speedcast's 2020–21 PDFs behind current CTAs) | **[AUDIT]** |
| Single-source rule (one canonical value per figure) | E2; `research.md` §9.3 mechanism 2 **[AUDIT]** |
| For support commitments: 24x7x365 **and multilingual** | Splash247 expectation norm (`research.md` §11.2) **[TRADE]** |

**Fictional-brand constraint:** prefer regulation-anchored proof (real, dated norms) over
invented stats — Asterra is fictional, UR E26/E27 and MLC 2006 are real
(`personas.md` §7.3).

**Which proof types a fictional brand can actually carry** (added 2026-08-18 — this was the
unrecorded gap that left two empty proof slots on the entry screen):

| Sub-type | Fillable? | Why |
|---|---|---|
| Norm compliance | ✅ | The norms are real and dated. |
| **Partner accreditation** | ✅ | **Structural** — "accredited integrator of named manufacturers" is a shape, not a figure. Names themselves stay invented (brief §6.1). |
| Support commitment | ✅ | A promise, not a measurement. |
| Type approval | 🟠 | The body's *role* can be shown; a specific approval cannot be claimed for a fictional product. |
| Stat (coverage / uptime / scale) | ❌ | Would be an invented number. |
| Outcome case | ❌ | Would be an invented client. |

The two ❌ rows stay as declared empty slots, never filled with plausible-looking values.

**Why one entity, not three (proof / certification / case).** `research.md` §9.3
mechanism 2 models them as **one single-source proof system** (stat trio + certification
strip + case cards, fed from one data source) — splitting them into separate entities
would break the E2 integrity constraint that motivates the system. The *consumers*
differ (see the sub-type mapping above), the *object* is one.

**Generated by jobs:** R2 (`jtbd.md` §3) — primary; E2 (integrity constraint); R3
(the atoms the rationale is built from). Note R2 is **table stakes** — served well by
the market; can't skip it, can't win with it (`jtbd.md` §8.2).
**Personas:** P1 (class scrutiny — direct duty) · P2 ⭐ (named-body approvals convince —
`personas.md` P2 Trust triggers) · P4 (scale numbers, named fleets).
**Related to:** Solution (O1), Norm (O2 — the "paper" is a Proof Item), Industry (O3),
Approval Artifact (O6 — built from these atoms), Crew Access Policy (O8 —
control/visibility claims are commitment-type proof).
**Research basis:** `research.md` §3 trust rows · §9.2 C4–C6 scores · §11.2 Gartner
"Validation" as universal B2B buying job **[RESEARCH]** ·
[marlink-cybersecurity.png](./research/screens/hard/marlink-cybersecurity.png) ·
[navarino-cybersecurity-angel.png](./research/screens/hard/navarino-cybersecurity-angel.png).
⚠️ That these triggers *work* on this audience — **[?]** (`personas.md` §6).

---

### O6 · Approval Artifact (the thing forwarded upward)

**Definition.** The self-contained, reproducible piece of argumentation that survives the
approval chain: a budget-grade figure or spec for P1's docking budget, a business-case
material P2 forwards to P4. Whatever the buyer sees, they will have to **retell upward** —
this entity is that retelling made portable.

**Role in the user's process.** R3 is the best-documented job in `jtbd.md` ("Prepare
business cases and recommendations… balancing operational needs with commercial
considerations" — P2's verbatim duty **[FACT]**), and the approval structure is fact:
CAPEX with the owner, an approval matrix, frame agreements (AVS) **[FACT]**.

**Fields / components:**

| Field | Basis |
|---|---|
| The claim + number + source card (memorably reproducible) | `jtbd.md` §10 item 4; Palantir/Stripe format **[AUDIT]** |
| Budget-grade figure / spec table | P1 "prepare… dry-docking… budgets" **[FACT]**; whether sought on a website **[?]** |
| Internal consistency (no drift — the person risks *their own* standing) | E2 **[AUDIT + INFERRED]** |
| Date / currency of the document | anti-pattern: stale PDFs **[AUDIT]** |
| Ungated by default | `jtbd.md` §8.3 — "a gate adds friction with no job underneath"; brief §7 **[FACT — brief]** |
| Addressee context: who receives it (P4, approval matrix) | AVS procurement structure **[FACT]** |

**What exactly belongs in it — [?]** (`personas.md` §7.4: "What exactly belongs on such a
page — [?]").

**Generated by jobs:** R3 (`jtbd.md` §3) — primary; E2 (its quality bar); Gartner's
"Consensus creation" confirms the underlying need independently (`research.md` §11.2)
**[RESEARCH]**.
**Personas:** P2 (prepares — `personas.md` §10.1) · P4 (receives — `personas.md` P4
Pains: "nothing to forward") · P1 (budget line — P1 Jobs).
**Related to:** Solution (O1 — the artifact is its portable projection), Proof Item (O5 —
its atoms), Inquiry (O7 — often the step after internal approval).
**Research basis:** `research.md` §6 opp. 3 · §11.2 (Gartner; "nothing to forward" pain)
· P4 trust triggers (named outcome cases).
⚠️ **Priority note:** if the primary flips to P2 (open question, `personas.md` §10.1),
this entity **rises into the MVP core** (`jtbd.md` §8.2 closing note).

---

### O7 · Inquiry

**Definition.** The buyer's request for an expert conversation — the end state of MAIN:
entering the conversation *with a position*, not with "so what do you offer?". A simple
single-step object, never a multi-step wizard (brief §6).

**Role in the user's process.** The primary conversion (qualified inquiry from a
solution page — brief §6). Carries context so the conversation starts where the buyer
already is; carries the **role** so R4's procurement wall (frame agreements, approved
supplier lists) surfaces early instead of at the third meeting.

**Fields / components:**

| Field | Basis |
|---|---|
| Name, company, contact, message | brief §6 **[FACT — brief]** |
| Industry | brief §6; Marlink Sector/Industry field **[AUDIT]** |
| Solution of interest — pre-filled from context | `research.md` §9.3 mechanism 3 **[AUDIT]** |
| **Role / request type** (incl. reseller / partnership) — catches the frame-agreement blocker | R4; Marlink request types, NVIDIA Job Role (`personas.md` §7.5) **[AUDIT]** |
| Routing promise + reply expectation ("routed to a regional specialist"; the answering expert's region/language — multilingual expectation **[TRADE]** — and fluency in the buyer's vocabulary, per E1) | Marlink C7=5 **[AUDIT]**; that P1 *needs* this routing rather than it being Marlink's neat pattern — **[?]** (`personas.md` P1 Jobs, last row) |

**Anti-patterns to avoid (documented):** no form at all (Navarino, Speedcast
directories); off-domain forms (Honeywell → Salesforce, Cisco → engage2demand);
label/URL mismatch ("Get in Touch" → /sign-up/) — `research.md` §6 pattern 3 **[AUDIT]**.

**Inquiry vs "expert contact" — a deliberate merge.** An earlier draft held a separate
provisional "Expert (regional specialist)" entity. The verification pass folded it into
this one: `jtbd.md` §7 (feature check) explicitly **dissolved "write to an expert via
the form" into the MAIN job** ("enter the conversation with a ready position"), and the
only evidence for the expert as an object is an interface reassurance pattern at one
competitor (**[AUDIT]**), while the buyer-side need for routing is **[?]**. The expert
therefore lives here as the routing-promise field, not as an entity. Promotable back if
the routing-need hypothesis is confirmed (see [§2](#2-under-question)).

**Generated by jobs:** MAIN (its end state) · R4 (`jtbd.md` §3 — the role field) · E1
(the promise that the answering expert speaks the buyer's language).
**Personas:** P1 (the only persona with documented authority over connectivity
invoices — their inquiry is qualified at once, `personas.md` §5.3) · P2, P4 (role
routing).
**Related to:** Solution (O1 — context source), Industry (O3), Approval Artifact (O6 —
often precedes it).
**Research basis:** `research.md` §9.2 C7 row · §9.3 mechanism 3 · §11.1 #6 — Gartner:
hybrid "digital + rep" gives 1.8× likelihood of a high-quality deal → supports a
contextual human handoff over pure self-serve **[RESEARCH]** ·
[marlink-contact-form.png](./research/screens/hard/marlink-contact-form.png).

---

### O8 · Crew Access Policy

**Definition.** The rule set governing crew internet: quotas, rank tiers, content
filters, time windows, geographic rules, per-user distribution, top-up pricing, backup
channel. **The product actually being bought in R5 is this rule set, not bandwidth**
(`jtbd.md` §9.2, ~20 vessels describing policy, not links) **[FACT — thread read]**.

**Role in the user's process.** R5 is the best-evidenced job in the base: a direct buyer
quote (O'Halloran, COO, fleet-wide install: "Our crew identified this as important, and
we listened" **[FACT]**), a legal norm (MLC 2006 + PSC **[FACT]**), live from-the-deck
reality **[FACT]**, and a 2017-era articulated selection criterion naming the
superintendent as the pained role (Splash247, `research.md` §11.2) **[TRADE]**. Sold at
product level in the market (Navarino Infinity), unclaimed at message level — our
opening is **altitude**, not invention (`jtbd.md` §3 R5 correction).

**Entity status note:** arguably a specialized Solution area (→ O1). Kept first-class
because the buyer reasons about the *policy* (rules, costs, fairness to crew) as its own
object, with its own vocabulary from the deck — and because S1 gives it a second,
non-technical life as a hiring argument.

**Fields / components** (vocabulary sourced from the r/maritime thread, `jtbd.md` §9.2 **[FACT]**):

| Field | Basis |
|---|---|
| Data quotas (daily / monthly, per person / per vessel) | thread: 450 MB/day … 80 GB/month pp **[FACT]** |
| Rank / role tiers | crew 12 GB vs officers 40 GB **[FACT]** |
| Content filtering, mandatory firewall | **[FACT]** |
| Time windows ("during shifts") | Navarino Infinity feature; owners request "time-restricted access" **[FACT + AUDIT]** |
| Geographic rules (off in port / certain waters) | **[FACT]** |
| Per-user distribution (captive portal) | **[FACT]** |
| Top-up pricing transparency | live crew pain ($2.50/GB "expensive") — an argument for P1 who signs invoices **[FACT + INFERRED]** |
| Backup / hybrid channel (redundancy) | Starlink + Inmarsat/Viasat/OneWeb pattern — maps onto the brief's "downtime is not an option" **[FACT]** |
| Cost visibility for the buyer | Navarino "Controlled costs with full usage visibility" **[AUDIT]** |
| MLC 2006 compliance link (→ O2) | **[FACT]** |
| Crew-retention framing (→ S1, Industry Maritime) | "the first question potential crew ask"; 92% Futurenautics (2018, pre-Starlink ⚠️) **[FACT + SURVEY/2ND-HAND]** |

**Generated by jobs:** R5 (`jtbd.md` §3) — primary; S1 (`jtbd.md` §5) · MLC half of R1.
**Personas:** P1 (invoices + MLC/PSC — `jtbd.md` §8.1 R5: P1=3) · P4 (fleet-wide COO
decision: P4=3) · P2 (policies: 2).
**Related to:** Solution (O1 — implemented by connectivity solutions), Norm (O2 — MLC),
Industry (O3 — Maritime), Proof Item (O5 — control/visibility claims).
**Research basis:** `jtbd.md` §9.2 (the thread) · `research.md` §11.2 (Splash247
criterion since 2017) · Navarino Infinity **[FACT]** product-level precedent.
✅ **Priority note — RESOLVED 2026-08-18:** the primary flipped to P2, so R5 dropped from the MVP core as predicted
(`jtbd.md` §8.2 closing note).

---

## 2. Under question

Entities that surfaced during inventory but are **required by no job** — or whose
demand is explicitly refuted/unrecorded. Per `jtbd.md` §8.3 most are already cut
candidates. They stay out of the main list; each names what would promote it.

| Candidate entity | Why not in the main list | What would promote it |
|---|---|---|
| **Comparison artifact** (side-by-side of solutions/suppliers) | Demand recorded nowhere; the only working example (NerdWallet "Add to compare") is consumer-market (`jtbd.md` §6, §8.3) **[?]** | Any buyer-side evidence of comparison demand |
| **Interactive self-validation tool** (latency test, calculator) | C8 measures what suppliers *lack*, not what buyers *want*; serves no matrix job (`jtbd.md` §8.3) **[?]** | Evidence technical evaluators in *this* market self-test before contact |
| **Insights / News article** | ⚠️ **REOPENED 2026-08-18** — the cut stands *as written*, but its basis was incomplete. The reference-site audit (`research/scope-check.md` §2.3) shows news items there are, in substance, **partnership announcements** — i.e. the carrier of **O5 partner-accreditation freshness**, not content marketing. That is a link to **R2**, which the original cut never tested. | ~~A documented job it serves~~ → **the job now exists in draft: R2 via partner freshness.** What is still missing is buyer-side evidence that anyone *reads* it for that purpose. Decide with the same sales question as the site-visit bet. Until then it stays out of the main list — reopened, not promoted. |
| **Coverage map** | Out of scope (brief §7) and no job demands a *map*; the underlying redundancy/coverage concern lives as fields on O1/O8 | — |
| **Partner / Reseller program** (standalone) | Only trace: request types in Marlink's form; R4 is served by the **role field on Inquiry (O7)**, not a separate object **[AUDIT + INFERRED]** | Evidence the reseller channel researches suppliers via a program page; the Schneider "distributor leak" finding (`research.md` §11.2) hints the channel matters — for **routing**, not as content |
| **Company / About, Careers, Legal** | Corporate hygiene; serve no buyer job and must not compete with the core for attention (`jtbd.md` §8.3) | — (they ship, but as hygiene, not designed objects) |
| **Support / knowledge base as an object** | Brief §7 defers the portal; support enters the inventory only as a **Proof Item commitment** (24x7x365, multilingual) on O5 | The v1 support-surface question in `research.md` §6 (open question 3) being answered |
| **Expert (regional specialist) as a standalone entity** | Folded into O7 at verification: `jtbd.md` §7 dissolved the expert-contact channel into MAIN; the only evidence is Marlink's reassurance pattern **[AUDIT]**, the buyer-side routing need is **[?]** (`personas.md` P1 Jobs, last row) | The sales question "who sends inbound enquiries" showing buyers ask *for a person*, not an answer; or any buyer-side evidence of routing demand |

---

## 3. Open decisions this inventory inherits

1. ✅ **P1 vs P2 primary — CLOSED 2026-08-18: primary is P2** (`personas.md` §5.0).
   Resolved exactly as this entry predicted: **O6 rises** (Approval Artifact — R3 entered the
   MVP core) and **O8 drops** (Crew Access Policy — R5 left the core, keeps its screen);
   O1, O2, O7 unaffected. Reopens only on the sales question "who writes the inbound
   enquiries" (`jtbd.md` §6).
2. **The site-visit bet** — the whole inventory assumes these jobs are pursued on a
   supplier website; removable with one question to sales (`jtbd.md` §6).
3. **Industry-first vs situation-first entry** (O3 vs O4 precedence) — open per
   `research.md` §10.6 / `personas.md` §6; testable with a first-click test.
4. **Expert routing** — folded into O7 at verification; promotable back if the
   routing-need hypothesis is confirmed (see §2).

---

## 4. Quality check

Verification pass run 2026-08-05, re-checking every entity against
[`jtbd.md`](./research/jtbd.md), [`personas.md`](./research/personas.md) and
[`research/research.md`](./research/research.md): job linkage (does the job *require*
the object, not merely touch it), domain-not-UI status, field provenance, persona
attribution, relation symmetry, evidence labels, and duplication.

### Entities removed or merged

- **O8b Expert → merged into O7 Inquiry** (as the routing-promise field). Grounds:
  `jtbd.md` §7 dissolved "write to an expert via the form" into MAIN; the only evidence
  was one competitor's interface reassurance **[AUDIT]**; the buyer-side need is **[?]**.
  The standalone entity moved to §2 with a promotion condition.
- Nothing else was deleted; all other entities survived the "job requires it" test:
  O1←MAIN, O2←R1, O3←MAIN/E1/S1, O4←MAIN's "when" clause, O5←R2, O6←R3, O7←MAIN/R4,
  O8←R5.

### Distinction decisions (checked explicitly, not merged/split by default)

| Pair | Decision | Grounds |
|---|---|---|
| Solution vs Service | **not split** — note added to O1 | no job differentiates them; Technical Services is a pillar (brief §5); support = commitment-type Proof Item (`research.md` §11.2 **[TRADE]**) |
| Industry vs Use case / Situation | **kept separate** — note added to O4 | jobs' "when" clauses name situations, the brief names industries; Stripe holds them as separate axes (`research.md` §5) **[AUDIT]**; which one *leads* is now an explicit [?] on O3 |
| Proof vs Certification vs Case | **one entity, typed sub-objects** — note added to O5 | `research.md` §9.3 models them as one single-source system (E2 constraint); consumers differ, so a sub-type→job mapping was added: certification→R2/P1 · case→R3/P4 · stat→C4+E2 · support commitment→MAIN/P1 |
| Inquiry vs Expert contact | **merged** (see above) | `jtbd.md` §7 feature check; evidence is a pattern, not a need |

### Fields and relations corrected

- **UI-speak removed from two fields:** O1 "Next step: contextual inquiry" → "Inquiry
  context it passes on"; O2 "link out, don't compete" → "a summary only; deep
  norm-explaining remains class-society territory".
- **O1/O6 duplication defused:** O1's budget-grade facts field now names itself "the raw
  material O6 packages" — data lives on the Solution, the Approval Artifact is its
  portable assembly.
- **Relation symmetry restored:** O8 was referenced one-way; back-links added to O2
  (MLC as O8's legal half), O3 (the S1 argument on Maritime), O5 (control claims as
  commitment proof).
- **Citation precision:** `jtbd.md` "§10.3/§10.4" → "§10 item 3 / item 4" (§10 is a
  numbered list, not subsections).
- **Relation map:** the Expert node removed.

### Moved to §2 Under question

- Expert (regional specialist) as a standalone entity — with its promotion condition.
  (The seven pre-existing §2 rows were re-checked and stand: none acquired a job.)

### Hypotheses that remain [?] — none removable from inside the documents

1. **The site-visit bet** — jobs are documented, their happening *on a supplier site* is
   not (`jtbd.md` §6, the file-spanning caveat). Inherited by every entity.
2. O4's situations are **purchase** triggers, not proven **visit** triggers
   (`personas.md` §6).
3. **Industry-first vs situation-first** entry precedence (`research.md` §10.6).
4. Buyers bring the **norm question to a supplier** rather than to class / P&I / flag
   (`jtbd.md` §3 R1 caveat) — O2's reason to exist on *our* side.
5. Named **trust triggers work** on this audience — we only know competitors apply them
   (`personas.md` §6).
6. **What belongs in the Approval Artifact** (`personas.md` §7.4) — O6's field list is
   the least confirmed.
7. P1 seeks **budget-grade specs on a website** (`personas.md` P1 Jobs).
8. The **P1 vs P2 primary** question (`personas.md` §10.1) — shifts O6/O8 weight, does
   not add or remove entities.

### Data missing for final confirmation

- **One question to a sales team** — who sends inbound enquiries, in what role, after
  what trigger. Removes hypotheses 1, 2, and the Expert question at once (`jtbd.md` §6).
- **First-click / tree test** (n≈5) on industry-vs-situation entry and the five pillar
  names — resolves hypothesis 3 and the untested "no specialist across five pillars"
  thesis (`personas.md` §8.4).
- **Any buyer-side interviews** — the entire emotional layer (E1/E2 fields on O5, O6,
  O7) currently rests on documents + inference, zero observed people
  (`personas.md` §0).
- **Primary sources for [2ND-HAND] figures** (`personas.md` §9, levels 2–3) — affects
  field values on O2 (dates, wordings), not the entity structure.

---

## 5. Screens — draft

**Compiled:** 2026-08-05. Derived from the entity inventory (§1) and the jobs in
[`jtbd.md`](./research/jtbd.md) — each screen exists because a job needs a way to act on
an entity, not because B2B sites usually have it.

**Notation.** Each screen line carries: `(job — primary; also secondary jobs)` ·
persona need per [`personas.md`](./research/personas.md): `[PRIMARY]` = P1,
`[SECONDARY]` = P2/P4, or both · `→ O#` the main entity acted on. `[ORPHAN]` = no
confirmed job (kept only as declared hygiene). `[?]` = the screen itself is a
hypothesis.

**Rules applied:** loading / empty / error / success / no-results / submitted are
**states** of a screen, never separate screens. Cards, forms, filters, proof strips and
CTAs are **components**, never screens. Menu labels, URLs and final nesting are **not**
defined here. Groups appear only where a job confirms the user logic; one expected
group — *"compare the options"* — is deliberately absent: demand for comparison is
recorded nowhere (`jtbd.md` §6, §8.3).

```
ORIENT — "which solution fits us?"                                  (MAIN)
├─ Entry screen — the shop-window of the buyer's own objects:
│  industries, situations, dated norms; exploration only, no quote
│  CTA here (brief §6)
│     (MAIN — the start of orientation; also R2 — the proof layer
│     placed early)  [PRIMARY + SECONDARY]  → O3 + O4 (+ O5 as a
│     hero-adjacent strip)
│     · the six-pillar (O1) list lives here as a SECTION, not a
│       screen — a separate "solution overview" failed verification
│       (see Quality check below); promotable back only on evidence
│       that P2 needs a standalone browse surface
│     · ✅ AMENDED 2026-08-18 — carries a **proof strip (O5)**. The
│       original draft gave this screen no proof at all, which
│       contradicted `research.md` §10.6 (Pattern 5 is "a mandatory
│       trust layer under whichever discovery pattern wins…
│       non-optional") and §6 pattern 2 ("trust is quantified,
│       certified, and **placed early**" — hero-adjacent stat rows
│       are the documented market default). The strip stays under the
│       E2 single-source constraint and the O5 fictional-brand rule:
│       regulation-anchored proof (real dated norms) over invented
│       stats. This does **not** create a trust screen — see VERIFY
│       THE PROVIDER below, which is unchanged in that respect
├─ Guided matching screen — situation → recommended solution;
│  asks about the trigger, not the technology (personas.md §7.2)
│     (MAIN — primary; also R1 when the entry is a norm)
│     [PRIMARY + SECONDARY]  → O4 → O1
│     · "no results / unsure" is a state of this screen, not a screen
│     · ⚠️ priority caveat: its precedence as the leading MAIN
│       mechanism rests on the untested "no specialist across five
│       pillars" thesis (personas.md §8.4, hypothesis 2 — downgraded
│       at audit); the screen stands (brief §7 commits it, MAIN needs
│       it), its *lead over recognition entry* does not yet
└─ Industry screen — one per industry; Maritime leads and carries
   the crew-retention argument (S1) natively
      (MAIN — self-identification; also E1 language, S1 on Maritime)
      Maritime: [PRIMARY + SECONDARY] · other industries: [SECONDARY]
      → O3
      · ⚠️ [?] whether industry or situation leads the entry —
        open (research.md §10.6; §3 item 3 of this file)

UNDERSTAND FIT — "is this it, and will it survive scrutiny?"        (MAIN · R1 · R2 · R5)
├─ Solution detail screen — one per solution; the forwardable core
│  object of the site (jtbd.md §10 item 4)
│     (MAIN — primary; also R2 proof with body names, R3 must be
│     forwardable upward, R1 names the norms it closes)
│     [PRIMARY + SECONDARY]  → O1 (+ O5 attached as attributes)
├─ Crew access & control screen — the rule set sold at message
│  level: quotas, ranks, filters, geo, backup channel, cost visibility
│     (R5 — primary; also S1 hiring argument, R1 MLC half)
│     [SECONDARY (P1 signs the invoice, P4 decides fleet-wide);
│      P2 = 2]  → O8
│     · ⚠️ **Reweighted 2026-08-18** with the P2 switch: R5 left the
│       MVP core (jtbd.md §8.2). **The screen stays and keeps its
│       global nav slot** — the job is still the best-evidenced in the
│       base (COO quote + MLC/PSC + ~20 deck accounts + the 2017 trade
│       criterion). What changed is that the MVP is no longer built
│       around it. Returns to the core if primary returns to P1.
└─ Norm screen — one per dated norm: what it means for your vessels
   (summary only — deep explaining stays with class societies),
   which solution closes it, what paper you get
      (R1 — primary; also R2 via the resulting paper)
      [PRIMARY + SECONDARY]  → O2
      · ⚠️ [?] that buyers bring the norm question to a supplier at
        all (jtbd.md §3 R1 caveat)

VERIFY THE PROVIDER                                                 (R2)
·  Deliberately NOT a screen. R2 is table stakes (jtbd.md §8.2) and
   is served by O5 Proof Items distributed as attributes on entry,
   solution, industry and crew screens under the E2 single-source
   constraint. A standalone "trust page" would detach proof from the
   object it proves.
·  ✅ AMENDED 2026-08-18 — the entry screen was added to that
   distribution list. "Screen-less" was always the correct call; what
   was wrong was reading it as "absent from the first screen the buyer
   sees", which left the entry screen with no trust content while
   `research.md` §6 documents early-placed proof as the category
   default and §10.6 calls the layer non-optional.

PREPARE INTERNAL APPROVAL — "it must survive whoever pays"          (R3 · E2)
└─ Approval materials screen — ungated library of forwardable,
   dated, self-consistent artifacts
      (R3 — primary, **now an MVP-core job**; E2 as its quality
      constraint)
      [PRIMARY (P2 prepares) + SECONDARY (P4 receives); P1 = 2]  → O6
      · ✅ **[?] LIFTED 2026-08-18.** The screen's hypothesis status
        was conditional on exactly this: "Rises in priority if primary
        flips to P2 (jtbd.md §8.2)." Primary flipped. R3 is P2's
        directly written duty ("Prepare business cases"), so the
        screen now serves the primary persona's core job.
      · ⚠️ What remains open is **its contents**, not its existence
        (personas.md §7.4). R3's other carrier — the forwardable
        solution detail screen — is unchanged and still primary for
        the job; this library complements it.

REACH THE EXPERT — the end state of the main job                    (MAIN · R4)
└─ Inquiry screen — single-step request, reachable with context from
   solution / crew / norm screens and directly (brief §6 header CTA);
   carries the role field and the routing promise
      (MAIN — end state; also R4 role catches frame agreements,
      E1 the answering expert speaks class/ISM not IT)
      [PRIMARY + SECONDARY]  → O7
      · submitted / error are states of this screen, not screens

HYGIENE — declared, not designed (jtbd.md §8.3: must not compete
with the core for attention)
├─ Company screen        [ORPHAN — hygiene]  → no core entity
├─ Careers screen        [ORPHAN — hygiene]  → no core entity
├─ Legal screens         [ORPHAN — hygiene]  → no core entity
└─ Insights / News       [ORPHAN — cut candidate, jtbd.md §8.3:
                          maps to no job; "every competitor has it"
                          is not an argument]
```

**Deliberately absent** (checked against §2 Under question — no job requires them):
a comparison screen, interactive self-validation tools, a coverage map, a support
portal / knowledge base, a standalone partner/reseller screen (R4 is served by the role
field on the Inquiry screen), a standalone trust/certifications page (see VERIFY note).

**Counts.** 8 screens serve confirmed jobs — 5 singular (entry, guided matching, crew
access & control, approval materials, inquiry) + 3 templated (per-industry, per-norm,
per-solution) · 1 carries [?] as a screen (approval materials) · 4 are [ORPHAN] hygiene.

**What would change this tree** (inherits §3 open decisions): the P1→P2 primary flip
promotes the approval-materials screen and demotes the crew screen; the
industry-vs-situation answer decides which object leads the entry screen; the site-visit
bet underlies everything above the hygiene block.

### Quality check — screens

Verification pass run 2026-08-05, re-checking every screen against §1 entities,
[`jtbd.md`](./research/jtbd.md) and [`personas.md`](./research/personas.md): job
specificity, correct job references, primary-persona coverage, secondary-persona
priority inflation, entity linkage, B2B-convention leakage, orphan/[?] marking,
section-vs-screen and state-vs-screen discipline, duplication, minimality, and
user-logic (not company-structure) grouping.

**Removed / merged / renamed:**
- **Solution overview screen — removed, merged into the Entry screen as a section.**
  It failed two tests at once: *duplication* (same job — MAIN — as the entry screen,
  with no distinct user task of its own) and *evidence* (its only justification was a
  generic pattern condition from `research.md` §10.1 — "experts resent being walked
  through" — with zero persona-side evidence; P2's documented job "evaluate existing
  systems" is served by the solution **detail** screen, not by a list). Per the
  component rule, a six-pillar list without its own job is a section. Promotion
  condition recorded on the Entry screen.
- No screens were renamed; nothing else was deleted.

**Added at verification:** a priority caveat on the Guided matching screen — its lead
over recognition entry rests on the untested "no specialist across five pillars"
thesis (`personas.md` §8.4, hypothesis 2). The screen itself stands (job-backed,
brief-committed); its precedence does not yet.

**Still [ORPHAN] (4):** Company, Careers, Legal, Insights/News — declared hygiene per
`jtbd.md` §8.3; no job was invented to rescue them. Insights remains a cut candidate.

**Still [?] as screens (1):** Approval materials — R3's primary carrier is the
forwardable solution detail; the standalone library is backed by the `jtbd.md` §8.1 R3
function row but its contents are [?] (`personas.md` §7.4). Screen-level [?] caveats
also remain on: the Norm screen (do buyers bring the norm to a supplier — `jtbd.md` §3
R1), and the Entry screen (industry-vs-situation lead — `research.md` §10.6).

**Where priority data is missing:**
- *Guided matching vs recognition entry* — tree/first-click test on the five pillar
  names (`personas.md` §8.5, closable without budget).
- *Approval materials vs Crew screen weight* — the P1-vs-P2 primary question; one
  question to a sales team (`personas.md` §10.1, `jtbd.md` §8.2).
- *Everything above the hygiene block* — the site-visit bet (`jtbd.md` §6).

**Final integrity check:** all 8 job-backed screens carry a job reference, a persona
marking, and a §1 entity (8/8). P1's MVP-core jobs each have a dedicated carrier:
MAIN → entry + guided matching + solution detail · R1 → norm screen · R5 → crew
access & control. R2 is deliberately screen-less (distributed O5 proof, table stakes).
No secondary-persona screen outranks a primary-persona one: the only
secondary-weighted screen (approval materials) is also the one still marked [?].

---

## 6. Navigation

**Compiled:** 2026-08-05. Built on the §5 screens only — no new screens, entities or
jobs. Item names are **working labels**, not final menu copy (final labels remain
undefined per §5's rules; they must pass E1's language test — class / certificate /
ISM / budget, not IT vocabulary — before they ship).

### 6.1 Global navigation — 5 items

Each item is an entry into a confirmed job cluster. Order reflects the MVP core
(`jtbd.md` §8.2: MAIN → R1 → R5) plus the brief-mandated contact slot (brief §6).

> ⚠️ **Reweighted 2026-08-18 — primary switched to P2** (`personas.md` §5.0). The **five items
> and their order are unchanged**, and that is a deliberate call, not an oversight:
> - items 1–3 (MAIN, MAIN/E1, R1) serve jobs that score **3 for P2 as well** — untouched;
> - item 4 (Crew connectivity, R5) **keeps its slot** even though R5 left the MVP core. It is
>   still the best-evidenced job in the base and the "altitude" bet is unchanged; demoting a
>   confirmed job out of navigation because the *primary* changed would be over-correcting;
> - item 5 (Talk to an expert) is brief-mandated.
>
> What did move is **Approval materials** — DEEP → CONTEXTUAL (§6.3), because R3 entered the
> core. It is still **not** promoted to global: needed once per purchase, late in the cycle.

| # | Working label | Screens it opens | Job behind it | Persona first | Why global |
|---|---|---|---|---|---|
| 1 | **"Find what fits"** (guided entry) | Guided matching → solution details | **MAIN** (`jtbd.md` §2) — the product's declared job; "without it the site has no point" (§8.2.1) | P2 ⭐ + P1 (both = 3 in the matrix) | The core job must be reachable from anywhere — the buyer arrives mid-task from any screen. ⚠️ its *lead position* vs item 2 carries the §5 priority caveat |
| 2 | **"Your industry"** | Industry screens (Maritime leads) | **MAIN** — self-identification variant; E1 (language), S1 (Maritime = crew retention) | P1 (Maritime), P4 via S1 | Discovery by recognition is the second confirmed MAIN mechanism (`research.md` §10.2 — kept because *our* jobs E1/S1 need the sector frame, not because competitors have it) |
| 3 | **"Regulations & deadlines"** | Norm screens | **R1** (`jtbd.md` §3) — MVP core №2; the unclaimed "norm → solution → paper" link | P2 ⭐ + P1 (both = 3) | The whole point of R1's niche is **entry**: "certificate as a badge vs norm as navigation — precisely the latter is free" (`personas.md` §10.3). A contextual-only norm screen would rebuild the competitors' badge model. ⚠️ [?] — inherits "does the norm question come to a supplier" |
| 4 | **"Crew connectivity"** | Crew access & control screen | **R5** (`jtbd.md` §3) — left the MVP core 2026-08-18 (P2 = 2), still the best-evidenced job in the base | P1 (invoices, MLC/PSC) + P4 (COO-level, = 3) | The R5 opportunity is explicitly **altitude**: "sold deep in product pages, unclaimed at positioning level" (`jtbd.md` §8.2.3). Global placement *is* the design bet — burying it repeats the market's failure |
| 5 | **"Talk to an expert"** | Inquiry screen | **MAIN end state** + R4 (role field) | P1 (the qualified enquiry, `personas.md` §5.3) | Brief-mandated header slot (brief §6); the job's finish line must never be more than one transition away |

**[UNDER QUESTION] — excluded from global navigation** (no confirmed job; per the
rule they are named, not silently included):

- *Company / About* — typical B2B item; `jtbd.md` §8.3: hygiene, "must not compete with
  the core for attention" → deep (footer tier).
- *Insights / News* — maps to no job; cut candidate → deep.
- *Careers, Legal* — hygiene → deep.
- *Approval materials* — a [?] screen for secondary personas; global placement would
  invert persona priority without evidence → deep, reached from solution detail.
- *A "Solutions & Services" catalog item* — the six-pillar list is a **section of the entry
  screen** (§5 verification); promoting a section to a nav item is barred by the §5
  component rule. Revisit only if P2's standalone-browse evidence appears.

**How items 2 and 3 land** (recorded at verification to block a silent screen
invention): both open **templated** screens (7 industries, N norms). The resolution to
a specific screen happens **inside the menu itself** — a list is a menu affordance, not
a screen. No industry-index or norm-index screens exist in §5, and none are needed.

### 6.2 The primary persona's path to the main job

Main job, verbatim (`jtbd.md` §2): *"When I need to close a specific fleet requirement,
I want to confidently determine what exactly we need and who can be trusted with it, so
that I enter the supplier conversation with a ready position rather than the question
'so what do you offer?'"*

**Canonical path (guided):**

```
Entry screen ──1──▶ Guided matching ──2──▶ Solution detail ──3──▶ Inquiry
             (MAIN:            (MAIN: situation →       (MAIN end state:
              orientation       matched solution;        "ready position";
              starts)           R1 if the entry          R4 role field;
                                was a norm)              context pre-passed)
```

**Where each §6.2 requirement is met:**

| Requirement | Where | Extra transitions |
|---|---|---|
| finds the relevant solution | transition 2 lands on Solution detail | 0 |
| understands why it fits | same screen — the fit rationale is O1 content (problem it closes, situations, norms) | 0 |
| sees enough reliability proof | same screen — O5 Proof Items are **attributes of the solution detail** (the §5 "R2 is screen-less" decision); no separate trust page to visit | 0 |
| can reach an expert with context passed | transition 3 — the Inquiry screen receives solution + industry (O1 field "Inquiry context it passes on") | 0 |

**Transition count: 3 meaningful transitions.** Within the ≤3 limit — **no
restructuring needed now**. The limit holds because of two §1/§5 structural decisions,
not by luck: (a) proof is distributed onto the solution detail instead of a standalone
trust screen — otherwise "sees enough proof" would cost a 4th transition; (b) the
inquiry carries context — otherwise "with context passed" would cost re-entering it.

**The restructuring that already happened (at §5 verification, recorded here because it
shaped the path):** the standalone Solution overview screen was merged into the entry
screen. Before the merge the browse path was Entry → Overview → Detail → Inquiry —
4 transitions for the recognition-driven buyer. **Step removed:** the overview hop.
**Compromise created:** P2 loses a dedicated browse surface and scans pillars in an
entry-screen section instead — acceptable because P2's documented job ("evaluate
existing systems") lives on the *detail* screen, which kept its position. **Secondary
jobs unharmed:** R3 (approval materials) hangs off solution detail — path unchanged;
R4 stays inside the Inquiry screen; R5 has its own global slot.

**Alternative paths, same count (3):**
- recognition: Entry → Industry (MAIN self-id) → Solution detail (MAIN) → Inquiry (end)
- regulatory: Entry → Norm screen (R1) → Solution detail (R1→MAIN) → Inquiry (end)
- crew trigger: Entry → Crew screen (R5) → Inquiry (end) — **2 transitions**; R5's
  policy content is itself the fit rationale

Scrolling within a screen, opening the nav, or expanding in-page detail are not counted
as transitions anywhere above.

### 6.3 Navigation level per screen

| Screen (§5) | Level | Reasoning: job · persona · frequency |
|---|---|---|
| Entry screen | **GLOBAL** (site root) | MAIN's start; every persona; every visit begins or re-anchors here |
| Guided matching | **GLOBAL** (item 1) | MAIN — the core job, arrivable mid-task from anywhere; P1+P2. ⚠️ lead-position caveat (§5) |
| Industry screens | **GLOBAL** (item 2) | MAIN self-id + E1/S1; P1 (Maritime); a first-visit orientation move — must be visible before any flow starts |
| Norm screens | **GLOBAL** (item 3) | R1 — the value *is* the entry (`personas.md` §10.3); P1+P2; deadline-driven visits arrive cold, mid-crisis, not mid-flow. [?] inherited |
| Crew access & control | **GLOBAL** (item 4) | R5 — the altitude bet; P1+P4; also serves S1 at leadership level |
| Inquiry | **GLOBAL** (item 5) + contextual entries | MAIN end state; brief §6 header slot; frequent and terminal — but its *context-carrying* entrances from solution/crew/norm screens are the primary route (C7 logic) |
| Solution detail | **CONTEXTUAL** | Reached after a choice — via matching, industry, or norm; MAIN's payoff screen, but there is no job of "browsing all solutions cold" (§5 removed that screen); frequency high *within* flows, zero *outside* them |
| Approval materials | **CONTEXTUAL** (was DEEP until 2026-08-18) | R3 — **now an MVP-core job** for the ⭐ primary persona P2, whose written duty is "Prepare business cases". The old reasoning ("elevating it would invert persona priority without evidence") is void: the evidence arrived and the priority itself changed. Raised to contextual, not global — it is still needed **once per purchase, late in the cycle**, and reached from solution detail where the rationale is assembled. **Onward path: → Inquiry** (contextual) — without it the R3 flow ended in the model's only hidden dead end |
| Company, Careers, Legal, Insights | **DEEP** (footer tier) | [ORPHAN] hygiene — no buyer job, must not compete with the core (`jtbd.md` §8.3) |

**Level ≠ importance — one recorded example:** certifications and type approvals (O5)
are arguably the single most trust-critical content for P1 (R2, class scrutiny), yet
they hold **no navigation level at all** — they are contextual attributes of the
solution detail screen. Criticality bought them placement *on the object they prove*,
not a menu slot. A global "Certifications" item would rebuild the badge-wall pattern
the research already showed to be non-differentiating (R2 = table stakes, `jtbd.md`
§8.2).

### 6.4 Trade-offs and open questions

1. **Items 1 vs 2 — which leads.** Both serve MAIN through different mechanisms
   (interview vs recognition). The order above follows the brief's committed finder,
   but the §5 caveat stands: precedence rests on the untested "no specialist across
   five pillars" thesis. First-click/tree test decides (`personas.md` §8.5). [?]
2. **Item 3 is a bet on an unproven visit trigger.** R1's purchase trigger is
   documented; that the buyer brings it to a supplier site is [?]. If it fails, norm
   screens degrade gracefully to contextual (linked from solution details), and the
   global slot frees up. [?]
3. **Item 4 vs the P2 flip.** If the primary becomes P2 (`personas.md` §10.1), R5
   drops from the core and R3 rises — the crew slot and the approval-materials
   placement would swap. One sales question resolves it. [?]
4. **No standalone Solutions item** — the accepted compromise from §5's overview
   merge; the cost lands on returning P2 users, the least-risky segment to ask an
   extra scroll of.
5. **Five items is the ceiling, not a target.** If evidence kills item 3 or 4, the nav
   shrinks to 4 or 3 — it does not backfill with [UNDER QUESTION] items.
6. **[Г1] R3's full chain runs to 4 transitions** (Entry → matching/industry →
   Solution detail → Approval materials → Inquiry). The Approval materials screen
   itself sits at 3 — within the limit — but the complete "assemble → then ask" chain
   costs 4. Accepted while the primary is P1 (R3 = 2 for P1 and the screen is [?]);
   becomes a restructuring trigger if the primary flips to P2 — the same sales
   question as item 3 above resolves both. [?]

   > 🔔 **TRIGGER FIRED 2026-08-18 — primary flipped to P2** (`personas.md` §5.0).
   > This conditional debt is now due and is resolved **without restructuring navigation**:
   >
   > **R3's primary carrier is the forwardable Solution detail screen**, not the library
   > (§5, recorded at the original verification). So the required R3 path is
   > `Entry → Guided matching → Solution detail → Inquiry` — **3 transitions, within the
   > limit**: the buyer forwards the solution page upward and comes back to ask.
   > The Approval materials screen is the **optional deepening** of that path for buyers who
   > need packaged artifacts, and it is exactly there that the 4th transition occurs.
   >
   > **Why not promote the library to global instead:** it is needed once per purchase, late
   > in the cycle (§6.3). Giving it a nav slot to save one transition would put a
   > once-per-purchase surface next to the four everyday ones — a worse trade than the
   > optional 4th step.
   >
   > ⚠️ **What is genuinely at risk, and must be verified in design, not asserted here:**
   > that the Solution detail page really is forwardable enough to carry R3 alone. If it is
   > not, the library stops being optional and the 4-transition chain becomes the real path —
   > at which point this debt returns. Test it when the Solution detail wireframe is built.

### 6.5 Quality check — navigation

Verification pass run 2026-08-05, re-checking §6 against §5, [`jtbd.md`](./research/jtbd.md)
and [`personas.md`](./research/personas.md): no new screens, job-cluster mapping,
B2B-template leakage, item→screen reachability, item count, label language,
transition count and what it excludes, path completeness (fit + trust + contact),
duplication and dead ends, level assignment, burial of frequent jobs, global overload
by rare actions, secondary-persona access without primary-path capture, [?] marking,
and orphaned-screen entrances.

**Items renamed, merged or deleted:** none. The five items and their job clusters
survived. Two defects were found and fixed instead:

1. **The model's only hidden dead end** — Approval materials had a deep entrance but no
   onward transition; the R3 flow (P2 assembles → forwards → then what?) terminated in
   the library. An onward contextual path → Inquiry was recorded (a link between two
   existing screens; nothing new invented). Hygiene screens remain terminal **by
   design** — footer-tier informational endpoints, not flow dead ends.
2. **A silent screen-invention risk** — items 2 and 3 open *templated* screens
   (7 industries, N norms) and had no stated landing. Recorded: resolution happens in
   the menu itself; index screens do not exist in §5 and are not needed.

**Final transition count to the main job (verbatim from `jtbd.md` §2):**
- guided path: **3** (Entry → Guided matching → Solution detail → Inquiry)
- recognition path: **3** (via Industry) · regulatory path: **3** (via Norm)
- crew-trigger path: **2** (Entry → Crew → Inquiry)
- Scroll, menu opening, tabs and accordions are excluded from all counts; fit
  rationale and reliability proof cost 0 extra transitions (both live on the solution
  detail screen — the §5 "R2 screen-less" decision doing its job).

**Compromises that remain (accepted, not resolved):**
- No standalone Solutions item — returning P2 users scan an entry-screen section
  (§6.4.4).
- The crew path's proof is commitment-type only (O5 control/visibility claims on the
  crew screen); a buyer needing type approvals crosses to a solution detail — one
  extra transition on that branch, taken knowingly.

**Decisions that are still hypotheses [?] (4):**
1. Item order 1↔2 (matching vs recognition lead) — first-click test decides.
2. Item 3's global slot — rests on the unproven norm→supplier visit trigger; degrades
   to contextual if it fails.
3. Item 4 ↔ Approval materials placement — swaps if the primary flips to P2.
4. The Approval materials screen itself — still the only [?] screen in §5.

**Access integrity:** every §5 screen has exactly one declared access level and a
reachable entrance — 6 GLOBAL (entry, matching, industries, norms, crew, inquiry),
1 CONTEXTUAL (solution detail — reachable from matching, industry, norm, and the
entry-screen pillar section), 1 DEEP (approval materials — from solution detail, with
an onward path), 4 DEEP hygiene (footer tier). No screen is unreachable; no screen
holds two conflicting levels; the only screens without onward transitions are the
hygiene endpoints, by design.

---

## 7. Traceability

**Compiled:** 2026-08-05. Rows = all jobs from [`jtbd.md`](./research/jtbd.md) (main,
related, emotional, social). Columns = all §5 screens, hygiene included. A cell is
marked **only** where the link is confirmed by the screen's §5 purpose, a
[`flows.md`](./flows.md) flow, or the job's own description — never because the screen
*could theoretically host* the content.

**Cell notation:** **E** = entry into the job · **P** = supports progress ·
**C** = helps complete. Empty cell = no confirmed link.

### 7.1 Coverage matrix

| Job \ Screen | Entry | Guided matching | Industry | Solution detail | Crew access & control | Norm | Approval materials | Inquiry | Company | Careers | Legal | Insights |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **MAIN** | ✓E | ✓EP | ✓EP | ✓P | | ✓P | | ✓C | | | | |
| **R1** norm → requirement | ✓E | ✓E | | ✓P | | ✓EP | | ✓C | | | | |
| **R2** survives scrutiny | ✓E | | | ✓EPC | | ✓P | | | | | | |
| **R3** rationale for payer | | | | ✓EP | | | ✓C | | | | | |
| **R4** can this be bought | | | | | | | | ✓EC | | | | |
| **R5** crew access vs control | | | ✓E | ✓P | ✓EP | | | ✓C | | | | |
| **E1** not look incompetent | | ✓P | ✓P | ✓P | | | | ✓P | | | | |
| **E2** rationale won't crumble | | | | ✓P | | | ✓P | | | | | |
| **S1** employer people come to | | | ✓P | | ✓P | | | | | | | |
| **S2** opinion counted next time | | | | | | | | | | | | |

Row order and prefixes encode the job type, unmixed: **MAIN** = main (`jtbd.md` §2) ·
**R#** = related (§3) · **E#** = emotional (§4) · **S#** = social (§5).

**Justification of the less obvious cells** (everything else traces directly to §5
screen purposes and `flows.md` nodes):

- *R1 × Guided matching* — §5: "(MAIN — primary; also **R1 when the entry is a
  norm**)".
- *MAIN × Norm = P* — added at the adversarial-critique pass: MAIN's proof decision
  gained a "check the paper" branch through the Norm screen (`flows.md`, fix Т2),
  mirroring R2's own verification step. Flow-confirmed, not theoretical.
- *R2 × Entry = E* — **added 2026-08-18.** The trust question first surfaces on the first
  screen the buyer sees, via the hero-adjacent proof strip (O5). Marked **E only**: the strip
  signals and anchors, it does not let the buyer verify anything — verification stays on the
  Solution detail (EPC) and Norm (P) screens, so R2's centre of gravity is unchanged. Basis:
  `research.md` §6 pattern 2 (early-placed, quantified, certified proof is the category
  default) and §10.6 (Pattern 5 is "a mandatory trust layer… non-optional"). Recorded as a
  correction, not a discovery: the original matrix left this cell empty while the research it
  was built from called the layer mandatory.
- *R2 × Solution detail = EPC* — the R2 flow both **enters** on this screen (trigger →
  Solution detail) and reaches its success state ("the choice will survive scrutiny")
  on it; proof checking and completion happen in place.
- *R3 × Solution detail = EP* — the job opens in the "I already know what we need"
  state, which is reached on this screen; the MAIN flow's approval branch departs from
  here.
- *R4 × Inquiry only, = EC* — the job's whole product function is the role field
  (`jtbd.md` §8.1 R4); the Inquiry screen is its **only** on-site surface, so the job
  both surfaces (E) and is set up to be answered (C) there.
- *E1* — marked only where §1/§5 explicitly encode the language mechanism: O1's
  "problem phrased in the buyer's own language" field (Solution detail), §5 Industry
  ("E1 language"), §5 Inquiry ("the answering expert speaks class/ISM not IT"), and
  Guided matching's "asks about the trigger, not the technology" rule — the exact
  counter to the jargon wall where E1 dies (IEC's COTP/COTM). **Not** marked on the
  Norm screen: O2's plain-terms field does not cite E1 — left strict.
- *E2* — the single-source constraint is encoded on O5 (consumed on Solution detail;
  the R2 flow's consistency decision) and named in §5 for Approval materials ("E2 as
  its quality constraint").
- *S1* — §5 Industry ("S1 on Maritime — crew retention") and §5 Crew screen ("also S1
  hiring argument"). Completion happens off-site (the labour market), so P only.
- *S2* — **no cell**: `jtbd.md` §8.1 records "— no direct function" and "no one, and
  no demand recorded". No support exists in §5 or `flows.md`, and none was assumed.

### 7.2 Orphan screens (columns with no ✓) — 4

All four were **declared** orphans at §5 ([ORPHAN] hygiene); the matrix confirms the
declaration rather than discovering new defects.

| Screen | Why unlinked | Truly a screen? | Decision |
|---|---|---|---|
| **Company** | `jtbd.md` §8.3: hygiene; serves no buyer job; "who to entrust" is answered by distributed O5 proof on solution screens, not by an About page | Yes — a standalone content surface, not a section of any job screen | **Backlog** (hygiene tier; ships as filler-free minimum, never competes with the core) |
| **Careers** | No buyer job; exists for a different audience entirely (candidates) | Yes | **Backlog** (hygiene) |
| **Legal** | No buyer job; legally mandated (privacy/terms/cookies) | Yes — legally required standalone documents | **Backlog** (mandatory hygiene; out of design scope) |
| **Insights / News** | Maps to no job; `jtbd.md` §8.3 cut candidate — "every competitor has it — that is not an argument" | Yes, but without a job it is content without a consumer | **Delete from MVP scope** — the only orphan with an explicit cut recommendation in the research; returns only if a job appears (e.g. evidence for the "stay on the technology pulse" hypothesis, `jtbd.md` §6) |

No job was invented to rescue any of the four.

### 7.3 Orphan jobs (rows with no ✓) — 1

| Field | Value |
|---|---|
| Verbatim job | *"When I report to leadership, I want to come across as someone whose fleet is under control and whose decisions are grounded, so that I get asked again next time."* (`jtbd.md` §5 S2) |
| Type | Social |
| Personas | P1 (2), P2 (2), P4 (1) — the weakest row in the `jtbd.md` §8.1 matrix |
| Where the gap sits | Nowhere in the current flows: S2's outcome (standing within the hierarchy) is produced *after* every on-site flow ends, by how the forwarded material performs upward — there is no on-site moment where S2 progresses |
| Decision | **Backlog as unconfirmed** — mirroring `jtbd.md`'s own verdict: "the weakest job in the main list; if something must be cut — cut this" (§5) and "no direct function · no demand recorded" (§8.1). No screen is added, no responsibility extended: E2 (same upward-reporting anxiety, functional half) is already carried by Solution detail + Approval materials, and stretching those cells to S2 would be the artificial ✓ this exercise forbids |

**No `[NEW SCREEN?]` was raised:** S2's gap is not a missing screen — it is a missing
*demand signal*. A screen cannot produce "being asked next time".

### 7.4 Proposed fixes

1. **Insights / News → delete from MVP scope** (§7.2) — the single structural change
   this matrix produces. §5's [ORPHAN] entry and §6's [UNDER QUESTION] row are
   annotated by this section; the screen list itself is left intact as the audit
   trail, with this section as the controlling decision.
2. **Company, Careers, Legal → backlog, hygiene tier** — no design investment beyond
   filler-free minimum; footer access only (per §6.3).
3. **S2 → backlog as unconfirmed** — revisit only if buyer-side evidence of the
   "standing" outcome appears (it would arrive via the same interviews that close the
   emotional-layer gap, §4).
4. **No artificial ✓ added anywhere** — three tempting cells were considered and
   rejected: *Inquiry × R2* (the flow passes through it, but R2 completes at
   "validated", before contact), *Inquiry × R3* (the artifact's approval happens
   off-site), *Norm × E1* (plain-terms field exists but does not cite E1).

### 7.5 Unresolved defects

- **S2 remains uncovered** — recorded, not hidden. Consistent with the research's own
  assessment; carries zero MVP risk (no persona scores above 2 on it).
- **Four hygiene columns remain empty** — by design, not oversight; they are the §5
  declaration holding, with Insights now scoped out entirely.
- **A standing caveat, not a defect:** every ✓ in the matrix inherits the site-visit
  bet (`jtbd.md` §6) — coverage is coverage of *designed support*, not of *observed
  behaviour*.

### 7.6 Coverage summary

| Measure | Value |
|---|---|
| Jobs (rows) | 10 — 1 main · 5 related · 2 emotional · 2 social |
| Screens (columns) | 12 — 8 job-backed · 4 hygiene |
| Marked cells | 28 ✓ across 9 jobs and 8 screens (27 at first compilation + MAIN × Norm from the critique pass) |
| Orphan jobs | 1 of 10 (S2) → **90% job coverage** |
| Orphan screens | 4 of 12 (all declared hygiene; 1 now deleted from scope) → **67% screen coverage**, or **100% of job-backed screens** (8/8 carry at least one ✓, each with at least one C-role path to a job's completion) |
| Fully covered clusters | The MVP core (MAIN, R1, R5) each holds an E → P → C chain across distinct screens; R2/R3/R4 complete on their designated §5 carriers; E1/E2/S1 are supported (P) without dedicated screens — as intended |

### 7.7 Quality check — traceability

Two passes recorded: the matrix verification (per checklist) and the adversarial
critique of `sitemap.md` + `flows.md` (four defect classes: dead ends · missing
states · excess depth · orphans), both 2026-08-05.

**✓ added / removed:**
- **Added: 1 cell** — MAIN × Norm = ✓P, produced by the critique fix Т2 (MAIN's proof
  decision gained a paper-check branch through the Norm screen in `flows.md`).
  Flow-confirmed, not decorative. Totals updated 27 → 28.
- **Removed: none.**
- **Role letters corrected in 3 cells** (no new ✓): R2 × Solution detail PC → EPC,
  R3 × Solution detail P → EP, R4 × Inquiry C → EC — every covered job now has an
  explicit entry point (E), which R2/R3/R4 lacked; each E is flow- or §5-confirmed.
- **Rejected and kept rejected: 4 tempting cells** — Inquiry × R2, Inquiry × R3,
  Norm × E1 (§7.4), plus R2 × Guided matching from the critique pass (the mismatch
  recovery is a MAIN re-entry, not R2 coverage — `flows.md` cross-flow notes).

**Orphan screens (4):** Company, Careers, Legal — backlog, hygiene tier; Insights /
News — deleted from MVP scope. All four were declared orphans at §5; the matrix
confirmed the declaration.

**Orphan jobs (1):** S2 — backlog as unconfirmed, mirroring `jtbd.md`'s own verdict
("the weakest job; if something must be cut — cut this"). The gap is a missing demand
signal, not a missing screen — no `[NEW SCREEN?]` was raised for it.

**Merged / deleted / deferred:** no merges anywhere in the pass. Deleted from scope:
Insights. Deferred: Company/Careers/Legal (hygiene), S2 (unconfirmed), plus the
navigation-level conditional debt [Г1] recorded in §6.4 item 6 (R3's four-transition
full chain — acceptable under P1-primary, restructures on a P2 flip).

**`[NEW SCREEN?]` markers:** none exist in `flows.md` or this file; none were needed —
all 11 dead-end fixes and 6 state fixes from the critique pass resolved onto existing
§5 screens.

**Final empty rows and columns:** 1 row (S2) · 4 columns (Company, Careers, Legal,
Insights — the last also scoped out). These are the declared, decided orphans — kept
visible as the audit trail, not backfilled.

**Unresolved defects (open, not hidden):**
- S2 remains uncovered — zero MVP risk (no persona scores above 2), revisited only on
  buyer-side evidence.
- The four hygiene columns stay empty by design.
- The standing caveat on every ✓: coverage is coverage of *designed support*, not
  *observed behaviour* — the site-visit bet (`jtbd.md` §6) underlies the whole matrix.

**Counts verified by hand:** 10 jobs (1 main · 5 related · 2 emotional · 2 social —
none missing from `jtbd.md`, types unmixed) · 12 screens (§5 complete, no
sections/components/states smuggled in as columns) · 28 ✓ · job coverage 90% (9/10) ·
screen coverage 67% overall, 100% of job-backed screens (8/8, each with at least one
C-role path to completion).
