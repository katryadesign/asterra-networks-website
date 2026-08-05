@AGENTS.md

# Asterra Networks — Design Brief

> **Fictional B2B corporate website for an independent UX/UI case study.**
> Asterra Networks is an invented brand. All names, product names, copy, taglines,
> logos, partner references and imagery must be **original**. Do not reproduce the
> name, wording, product names, or brand elements of any real company. Use the
> *structure and content types* of a real global connectivity/security provider as
> inspiration only.

---

## 1. Project overview

Asterra Networks is positioned as a **global technology provider** that unifies
**satellite + terrestrial connectivity, cybersecurity, digital solutions, and
specialized safety/mission systems** for maritime and land infrastructure.

The site's job: turn a complex catalog of technologies and services into a clear
digital experience that lets a professional buyer **quickly find the solution for
their industry, understand its value, and reach out** to an expert.

---

## 2. Business goals & success metrics

**Primary goal:** generate qualified inquiries from professional buyers.

**KPIs (proposed — confirm/adjust):**
- Qualified inquiries submitted from Solution/Service pages ("Send an Inquiry" / "Talk to an Expert").
- Solution Finder completions → inquiry conversion rate.
- Contact Us submissions.
- Resource Center downloads.
- Industry-page engagement and "time to relevant solution."
- Insights subscriptions (secondary).

---

## 3. Positioning & brand

**Differentiator (one line):** *One integrated provider across satellite +
terrestrial connectivity, cybersecurity, and mission systems — engineered for
environments where downtime is not an option.*

**Tone of voice (proposed):** confident · precise · technical · reassuring ·
mission-focused. Speaks to engineers and decision-makers alike — credible and
specific, never hypey.

**Naming system (fictional working titles — replaceable):**
- Company: **Asterra Networks**
- Connectivity: **Asterra Connect** (sat: *OrbitReach*, terrestrial/mobile: *GroundLink*)
- Cybersecurity: **Asterra Shield**
- Digital Solutions: **Asterra Intelligence** (AI / IoT / monitoring / cloud)
- Safety & Compliance: **Asterra Assure**
- Technical Services: **Asterra Care** (global support network)

---

## 4. Audiences & personas (priority)

**Persona #1 (leads the narrative — homepage optimized for them):**
**Maritime — shipowners & fleet operators / technical managers.** Value global
coverage, reliability/uptime, maritime safety, standards compliance, support.

**Secondary personas (fully served, do not lead):**
- IT & security specialists (enterprise).
- Government / public-sector & defense.
- Energy & critical infrastructure.
- Transportation & delivery / logistics.
- Research organizations.
- Emergency response.

Shared decision drivers across all: **reliability, global coverage, security,
compliance, access to technical support.**

### 4.1 Evidence-based proto-personas & jobs (research layer, 2026-08-05)

Full evidence chain: [`research/personas.md`](./research/personas.md) · [`research/jtbd.md`](./research/jtbd.md) · [`research/audit.md`](./research/audit.md). Proto-personas — no primary research; every claim carries an evidence label.

- **Primary — P1 · Technical Superintendent.** Shore-based technical manager of a vessel group; an ex-seagoing engineer (Class II CoC, ISM) who **approves communication invoices** and prepares dry-docking budgets. Thinks in class / certificates / ISM / budget language — **not IT**. ⚠️ Open question: accumulated signals (vendor case quotes 5:0 IT/COO) suggest **P2 · Fleet IT Manager** may be the real initiator — decide explicitly before build.
- **Main job:** *When I need to close a specific fleet requirement, I want to confidently determine what we need and who to entrust it to — so I enter the supplier conversation with a position, not with "so what do you offer?"*
- **Top-3 jobs for MVP** (important to primary × not served by the market):
  1. **MAIN** — figure out what fits without studying the whole catalog (only real market finder disappeared; Marlink answers with a human).
  2. **R1** — regulation with a date → *which solution closes it and what paper you get* (norm-explaining is owned by class societies; the vendor-side link is unclaimed).
  3. **R5** — give crew internet without losing cost/control (best-evidenced job: COO quote + MLC/PSC + ~20 live vessel accounts; sold deep in product pages, unclaimed at positioning level).

---

## 5. Information architecture / sitemap

**Solutions and Industries are two independent sections connected by cross-links**
(not a full matrix). A solution page links to relevant industries and vice versa.

```
Home
Solutions (overview + Solution Finder)
  ├─ Connectivity            (satellite, mobile, terrestrial)
  ├─ Cybersecurity           (network, device, data, ops protection)
  ├─ Digital Solutions       (AI, IoT, monitoring, data transfer, cloud)
  ├─ Safety & Compliance     (equipment, maritime safety, certification)
  └─ Technical Services      (installation, maintenance, global support)
Industries (overview)
  ├─ Maritime (lead)         ├─ Energy            ├─ Emergency Response
  ├─ Government              ├─ Research          └─ Transportation & Delivery
  └─ Enterprise
Company / About
Insights / News             (+ article pages)
Careers                     (+ role pages)
Resource Center             (whitepapers, datasheets, guides — downloads)
Contact                     (Contact Us form)
Legal                       (Privacy, Terms, Cookies)
```

Each Solution/Service detail page carries a contextual inquiry CTA (see §6).

---

## 6. Conversions & CTA logic

There is **no "Request a Quote" CTA on the homepage.** CTA hierarchy:

| Location | CTA | Destination |
|---|---|---|
| Header (nav) | **Contact Us** | Contact page / form |
| Homepage | **Explore / Discover Our Solutions**, "Learn more", links into Solutions / Industries / News | exploration |
| Solution & Service pages (e.g. Digital Solutions, Government Solutions, Technical Services) | **Send an Inquiry** / **Talk to an Expert** | **Submit your Request** — simple contact form |

- **Primary conversion:** qualified inquiry submitted from a Solution/Service page.
- **Form:** a simple contact form (name, company, industry, message, contact) —
  **no multi-step quote wizard.**
- **Secondary conversions:** exploring solutions, choosing an industry, downloading
  materials, contacting support/Contact Us.

---

## 7. Key functionality (in scope)

- **Solution Finder** — filter/guide solutions by **industry** and **need**.
- **Resource Center** — downloadable materials (whitepapers, datasheets, guides);
  ungated by default, optional email gate on premium assets.
- Simple **Contact / Submit-your-Request** forms.

**Out of scope (for now):** interactive coverage map, support portal / ticketing,
knowledge base, multi-step quote wizard, customer login.

---

## 8. Content

- **Language:** **English only.**
- **Copy:** **full realistic invented copy** — product names, taglines, section
  descriptions, and CTAs written to be presentation-ready for the case study.
- **Content source (proposed):** structured local data / MDX in-repo (no external
  CMS) to keep the case study self-contained; swappable to a headless CMS later.

---

## 9. Visual direction

**Direction: Editorial tech** — high contrast, oversized display type, bento grids,
bold color blocks, confident magazine-like layout. Feels modern and ambitious.

- **Theme: dark-first**, with lighter inset sections for contrast/rhythm.
- **Imagery: mix** — real photography (ships, ports, infrastructure, people) layered
  with graphic overlays, lines, and data motifs.
- Desktop-first for B2B, with a fully realized responsive mobile experience.

---

## 10. Motion

**Expressive** — animated hero, scroll-driven reveals, interactive elements, and
purposeful "wow" moments — kept performant and never blocking content or a11y.

---

## 11. Technical stack & constraints

- **Framework (build phase):** Next.js (App Router) — ⚠️ see `@AGENTS.md`: this
  Next.js has breaking changes; read `node_modules/next/dist/docs/` before writing
  code. The scaffold is **not present during the research phase** (see §13).
- **Language/styling:** TypeScript + Tailwind CSS.
- **Content:** local structured data / MDX (proposed).
- **Forms (proposed):** Route Handler / Server Action → email (e.g. Resend) or mock
  endpoint; spam protection (honeypot / BotID).
- **Analytics (proposed):** Vercel Analytics + Speed Insights.
- **Hosting:** Vercel (Git autodeploy: push to `main` → production; PR → preview).
- **Browsers:** modern evergreen.

---

## 12. Accessibility & performance

- **Accessibility target:** WCAG 2.2 AA (proposed).
- **Performance:** strong Core Web Vitals; optimized images; expressive motion must
  respect `prefers-reduced-motion`; dark-first must respect `prefers-color-scheme`.

---

## 13. Current phase & scope

**Phase: research / discovery.** Build fidelity and page rollout order are **TBD** —
the user will define the delivery scope later. Do not assume a full production build
until confirmed.

The repo is organized as a **design-documentation repo** — a discovery → handoff
pipeline: `research/` (with `research.md` + `screens/`), `wireframes/`, `concept/`,
`tokens/`, `components/`, `design-system/`, `handoff/`. See [`README.md`](./README.md)
for the living index. The Next.js scaffold has been **removed** for this phase and
will be re-introduced at the build stage, so the Vercel deploy is intentionally
paused until then.

---

## 14. Assumptions to confirm

Items marked *(proposed)* above are sensible defaults chosen to keep momentum; all
are easily revised: KPIs, tone words, fictional product names, differentiator,
content source (MDX vs headless CMS), forms backend, analytics, WCAG target.
