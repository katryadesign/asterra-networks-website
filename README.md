# Asterra Networks — Design Repo

> **Independent UX/UI case study.** Asterra Networks is a **fictional** global
> technology provider (satellite + terrestrial connectivity, cybersecurity, digital
> solutions, and safety/mission systems). All names, copy, and brand elements are
> original and reference no real company.

This is a **design-documentation repo** for the redesign — organized as a discovery →
handoff pipeline. There is no application code during the current **research phase**;
the Next.js build will be (re)introduced at the build stage.

**Full brief:** [`CLAUDE.md`](./CLAUDE.md) · **Build-phase stack notes:** [`AGENTS.md`](./AGENTS.md)

---

## Repo index

The design flows top-to-bottom: research feeds wireframes → voice & microcopy →
concept → tokens → components → the assembled system → developer handoff.

| # | Folder | What lives here | Status |
|---|---|---|---|
| 1 | [`research/`](./research/) | Discovery: [`research.md`](./research/research.md) (competitor audit) + [`screens/`](./research/screens/) captures · evidence about people: [`people.md`](./research/people.md), [`people-desk.md`](./research/people-desk.md), [`personas.md`](./research/personas.md) (proto-personas — validation pending), [`jtbd.md`](./research/jtbd.md), [`audit.md`](./research/audit.md) (evidence audit) | 🟡 In progress |
| 2 | [`wireframes/`](./wireframes/) | Low-fi wireframes: 12 screens · 28 pages (every confirmed state), clickable end-to-end | 🟢 Done |
| 3 | [`concept/`](./concept/) | Visual concept / art direction (editorial tech, dark-first) | ⚪ Planned |
| 4 | [`tokens/`](./tokens/) | Design tokens — color, type, spacing, motion (source of truth) | ⚪ Planned |
| 5 | [`components/`](./components/) | Component inventory & specs (variants, states, a11y) | ⚪ Planned |
| 6 | [`design-system/`](./design-system/) | Assembled system: foundations + components + patterns + guidelines | ⚪ Planned |
| 7 | [`handoff/`](./handoff/) | Developer-ready specs, token exports, asset exports | ⚪ Planned |

_Legend: 🟢 done · 🟡 in progress · ⚪ planned._

---

## Project at a glance

- **Goal:** turn a complex catalog into a clear digital experience; help professional
  buyers find the right solution and reach an expert.
- **Primary conversion:** qualified inquiry ("Send an Inquiry" / "Talk to an Expert")
  from Solution/Service pages. No "Request a Quote" CTA on the homepage.
- **Primary audience:** maritime shipowners & fleet operators (leads the narrative);
  also enterprise IT/security, government, energy, transportation, research, emergency.
- **Direction:** Editorial tech, **dark-first**, English only, expressive motion,
  photography + graphic-overlay imagery.
- **Phase:** research / discovery — build fidelity and rollout order TBD.

See [`CLAUDE.md`](./CLAUDE.md) for the complete design brief.

---

## People (research layer)

Who buys, what progress they seek, and how well the market serves it — built without primary
research, every claim carries a visible evidence label (`[FACT]` / `[2ND-HAND]` / `[SURVEY]` /
`[AUDIT]` / `[INFERRED]` / `[?]`). One-page view: [`research/personas.html`](./research/personas.html)
— every figure there links to its source, or says "not confirmed" in words.

- [`research/personas.md`](./research/personas.md) — **proto-personas**: ⭐ P1 Technical
  Superintendent (primary; approves communication invoices, thinks class/ISM/budget),
  P2 Fleet IT Manager (vendor selection & business cases; candidate for primary), P4 Owner /
  CAPEX approver (frame agreements gate the deal). P3 (compliance) was removed after
  verification — not a buyer. Includes self-audit log, manual verification results (EU job
  boards, competitor navs) and per-persona falsification criteria.
- [`research/jtbd.md`](./research/jtbd.md) — **jobs to be done**: main job + 5 related +
  emotional/social (long and card formats), the JTBD matrix (job × persona × product function
  × competitor coverage), the 3-job MVP core, cut candidates, and live-voice checks
  (r/maritime thread, vendor case quotes).
- Supporting: [`research/people.md`](./research/people.md) (what the competitor audit knows
  about people), [`research/people-desk.md`](./research/people-desk.md) (desk research: job
  ads, procurement structure, regulation calendar), [`research/audit.md`](./research/audit.md)
  (62-claim evidence audit + dangerous-hypotheses list).

---

## Structure (IA layer)

The information architecture, derived from the research layer above — entities from
jobs, screens from entities, navigation from screens, flows on top. One-page view:
[`ia.html`](./ia.html) (sitemap tree, Mermaid flows, traceability matrix).

- [`sitemap.md`](./sitemap.md) — four sections, each closed by its own quality-check
  block: **§1 Entities** (8 objects O1–O8 with fields, evidence labels, generating
  jobs and relations; borderline calls documented — e.g. proof as one typed entity,
  homepage as a screen, not an object) · **§5 Screens** (8 job-backed + 4 declared
  [ORPHAN] hygiene; states and components explicitly not screens) · **§6 Navigation**
  (5 global items = job clusters; 3 transitions to the main job; level ≠ importance) ·
  **§7 Traceability** (10 jobs × 12 screens, 28 ✓ with E/P/C roles; orphans kept
  visible: S2 and the hygiene columns).
- [`flows.md`](./flows.md) — Mermaid `flowchart TD` per job (MAIN verbatim + R1, R2,
  R5), each with decisions, loading/empty/error/success states, and both endings —
  success and dead ends. Includes the adversarial-critique pass: 11 dead-end traps
  fixed (recoverable failures now offer a forward branch; trust collapses stay
  terminal), 6 state gaps closed.

---

## Wireframes

All 12 screens of the designed IA, low-fi and grayscale, with every state the flow diagrams
confirm (28 pages). Start at [`wireframes/entry.html`](./wireframes/entry.html) — a service
tree panel on every page lists all screens and states, and the main flow is walkable by click:
entry → guided matching → solution detail → inquiry → success, plus the norm-verification
detour, recovery branches and the R5 / approval-branch screens.

- Contract and rules: [`wireframes/_conventions.md`](./wireframes/_conventions.md)
- Screen and state registry: [`wireframes/_screens.md`](./wireframes/_screens.md)
- Review journal (defect table + fixes): [`wireframes/_critique.md`](./wireframes/_critique.md)

No brand colour, fonts, imagery or motion — those are later stages; grey stands in for the
dark-first treatment of the brief.

---

## Voice (language layer)

The product's language, designed and then applied. Source of truth — [`voice.md`](./voice.md),
four sections that resolve in order (principle → dictionary → microcopy, leftmost wins):

- **Principles** — five, each argued from the research layer with its evidence limit stated:
  proof is a third party's name (our own claims are commitments and say so) · hierarchy and
  specificity, not simplification · class explains the regulation, we name what closes it and
  the paper you keep · one canonical value per figure, an empty slot over an invented fact ·
  a label names what is on the other side.
- **Dictionary** — settles every naming split the inventory found (regulation/requirement,
  request, industry, fleet/vessels, "the paper you keep"…), sets the button canon per
  destination, register, code and date formats.
- **Banned list** — written forward from competitor language
  ([`research/research.md`](./research/research.md) §13), with was/instead pairs.
- **Microcopy rules** — 16 element types including states; two deliberately left empty
  (field validation has no modelled state; no destructive action exists in the IA).

Applied across all 28 wireframe pages; the line-by-line was/became record and the
cross-screen label registry live in [`microcopy.md`](./microcopy.md). Deliberately open:
the proof-block heading canon (Н1-9), breadcrumbs on two screens, the success-page H1 —
decisions on record, not debts.

---

## How to navigate

1. Read the brief → [`CLAUDE.md`](./CLAUDE.md).
2. Read discovery findings → [`research/research.md`](./research/research.md).
3. Follow the pipeline folders in order — each is a stage to fill as the work
   progresses.
