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

The design flows top-to-bottom: research feeds wireframes → concept → tokens →
components → the assembled system → developer handoff.

| # | Folder | What lives here | Status |
|---|---|---|---|
| 1 | [`research/`](./research/) | Discovery: [`research.md`](./research/research.md) (competitor audit) + [`screens/`](./research/screens/) captures · evidence about people: [`people.md`](./research/people.md), [`people-desk.md`](./research/people-desk.md), [`personas.md`](./research/personas.md) (proto-personas — validation pending), [`jtbd.md`](./research/jtbd.md), [`audit.md`](./research/audit.md) (evidence audit) | 🟡 In progress |
| 2 | [`wireframes/`](./wireframes/) | Low-fi layout & flow explorations | ⚪ Planned |
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
research, every claim carries a visible evidence label (`ФАКТ` / `2-ГЕ ДЖЕРЕЛО` / `АУДИТ` /
`ВИВЕДЕНО` / `[?]`). One-page view: [`research/personas.html`](./research/personas.html).

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

## How to navigate

1. Read the brief → [`CLAUDE.md`](./CLAUDE.md).
2. Read discovery findings → [`research/research.md`](./research/research.md).
3. Follow the pipeline folders in order — each is a stage to fill as the work
   progresses.
