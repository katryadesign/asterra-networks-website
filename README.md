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
| 3 | [`concept/`](./concept/) | Visual concept / art direction: Refero references, designer taste + 5 attribute pairs, three contrasted directions, chosen direction B «Panel» as a live test stand, language applied to two wireframe screens | 🟡 In progress |
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

Who buys, what progress they seek, and how well the market serves it, built without primary
research; every claim carries a visible evidence label (`[FACT]` / `[2ND-HAND]` / `[SURVEY]` /
`[AUDIT]` / `[INFERRED]` / `[?]`). One-page view: [`research/personas.html`](./research/personas.html);
every figure there links to its source, or says "not confirmed" in words.

- [`research/personas.md`](./research/personas.md) — **proto-personas**: ⭐ P1 Technical
  Superintendent (primary; approves communication invoices, thinks class/ISM/budget),
  P2 Fleet IT Manager (vendor selection & business cases; candidate for primary), P4 Owner /
  CAPEX approver (frame agreements gate the deal). P3 (compliance) was removed after
  verification: not a buyer. Includes self-audit log, manual verification results (EU job
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

The information architecture, derived from the research layer above: entities from
jobs, screens from entities, navigation from screens, flows on top. One-page view:
[`ia.html`](./ia.html) (sitemap tree, Mermaid flows, traceability matrix).

- [`sitemap.md`](./sitemap.md) — four sections, each closed by its own quality-check
  block: **§1 Entities** (8 objects O1–O8 with fields, evidence labels, generating
  jobs and relations; borderline calls documented, e.g. proof as one typed entity,
  homepage as a screen, not an object) · **§5 Screens** (8 job-backed + 4 declared
  [ORPHAN] hygiene; states and components explicitly not screens) · **§6 Navigation**
  (5 global items = job clusters; 3 transitions to the main job; level ≠ importance) ·
  **§7 Traceability** (10 jobs × 12 screens, 28 ✓ with E/P/C roles; orphans kept
  visible: S2 and the hygiene columns).
- [`flows.md`](./flows.md) — Mermaid `flowchart TD` per job (MAIN verbatim + R1, R2,
  R5), each with decisions, loading/empty/error/success states, and both endings:
  success and dead ends. Includes the adversarial-critique pass: 11 dead-end traps
  fixed (recoverable failures now offer a forward branch; trust collapses stay
  terminal), 6 state gaps closed.

---

## Wireframes

All 12 screens of the designed IA, low-fi and grayscale, with every state the flow diagrams
confirm (28 pages). Start at [`wireframes/entry.html`](./wireframes/entry.html): a service
tree panel on every page lists all screens and states, and the main flow is walkable by click:
entry → guided matching → solution detail → inquiry → success, plus the norm-verification
detour, recovery branches and the R5 / approval-branch screens.

- Contract and rules: [`wireframes/_conventions.md`](./wireframes/_conventions.md)
- Screen and state registry: [`wireframes/_screens.md`](./wireframes/_screens.md)
- Review journal (defect table + fixes): [`wireframes/_critique.md`](./wireframes/_critique.md)

No brand colour, fonts, imagery or motion; those are later stages; grey stands in for the
dark-first treatment of the brief.

---

## Concept (visual layer)

Art direction for the brief’s §9 (editorial tech, dark-first), built the same way as every
other layer: each decision anchored to a research line, hypotheses labelled, nothing invented.

- **References:** [`concept/references.md`](./concept/references.md) — gathered via the Refero
  MCP. Base style Andercore plus named devices from HashiCorp / Apollo / Langbase / Resend /
  Cartesia / Vercel / Mapbox; the direct-competitor HARD group was never referenced visually.
  Key finding: two of the four aspirational benchmarks (Stripe, Vercel) are light — the dark
  direction is fed by device carriers, not by the benchmark set.
- **Taste and attributes:** [`concept/concept.md`](./concept/concept.md) — the designer’s
  taste (Oxide · Linear · Invisible · Composio; anti-reference: warm terracotta editorial),
  five attribute pairs A1–A5 each tied to a research line and a borrowed device, and the
  taste-vs-data conflicts recorded. K1 resolved: equipment as documented object — yes;
  people-in-context and mood seascapes — removed (a deliberate narrowing of brief §9).
- **Directions:** [`concept/directions.html`](./concept/directions.html) — three contrasted
  languages (A “Stamp” · B “Panel” · C “Schematic”), each escaping the saturated
  editorial-typographic lane by a different mechanism. **Direction B “Panel” chosen**:
  chroma-0 neutrals, colour only as an event; Familjen Grotesk + JetBrains Mono; 2px radius;
  no shadows — depth by tonal shift and 1px line; Solar linear icons; micro-type floor at
  0.8rem. A and C stay on record and can be returned to.
- **Test stand:** [`concept/concept.html`](./concept/concept.html) — the language live:
  palette with browser-computed hex, 1.25× type scale, semantics without a rainbow (one
  signal token; state is told by icon shape and words — the colour-blindness rule holds by
  construction), three live components with canonical strings from `microcopy.md`. All ten
  contrast pairs pass WCAG 2.2 AA, computed in the browser at load.
- **Applied to wireframes:** [`wireframes/_panel.css`](./wireframes/_panel.css) on top of the
  grey `_wireframe.css` — guided-matching (4 states) and solution-detail (3 states), the two
  ends of the main jump. Markup and copy untouched; states are detected via `:has()` on the
  states bar. Shared components verified identical by computed-style fingerprints. The other
  21 pages stay grey deliberately.

Deliberately open at this stage: brief §9 “bold color blocks” vs the one-accent discipline
of the entire reference set (taste sides 4/4 with discipline); error live-region and the
service-tree tab order (wireframe markup level — not to be fixed in passing).

---

## Voice (language layer)

The product's language, designed and then applied. Source of truth is [`voice.md`](./voice.md):
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
the proof-block heading canon (Н1-9), breadcrumbs on two screens, the success-page H1. Decisions on record, not debts.

---

## How to navigate

1. Read the brief → [`CLAUDE.md`](./CLAUDE.md).
2. Read discovery findings → [`research/research.md`](./research/research.md).
3. Follow the pipeline folders in order; each is a stage to fill as the work
   progresses.
