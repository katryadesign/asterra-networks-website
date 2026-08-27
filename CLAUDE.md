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
**satellite + terrestrial connectivity, cybersecurity, digital solutions, onboard
equipment, and specialized safety/mission systems** for maritime and land
infrastructure. The company grew **from a maritime-focused business into a global
connectivity provider** — maritime is the heritage and the deepest competence, not
the boundary.

**Operating model — accredited integrator, not network owner.** Asterra does not own
the satellite constellations or manufacture the hardware it installs. It is an
**accredited partner and integrator** of named satellite operators, navigation and
bridge OEMs, and safety-equipment manufacturers. This is not a footnote about
procurement — it is the company's central trust mechanism: the buyer trusts the
integrator because of *whose* equipment and capacity it is accredited to carry.
See §6.1 for what that means for the site.

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
- **Equipment: Asterra Equip** (navigation and bridge systems, safety equipment,
  onboard hardware — supply, integration, survey)
- Technical Services: **Asterra Care** (global support network)

---

## 4. Audiences & personas (priority)

**Persona #1 (leads the narrative — homepage optimized for them):**
**Maritime — fleet operators and ship managers.** Value global coverage,
reliability/uptime, maritime safety, standards compliance, support.

> ⚠️ **Imprecision recorded 2026-08-05, resolved 2026-08-18.** This line originally merged
> "shipowners & fleet operators" and "technical managers" into one persona. The sources show
> these are **three people with different authority**: P2 evaluates and recommends, P1 signs
> the connectivity invoice, P4 holds CAPEX and frame agreements. The homepage is optimised for
> **P2** — see §4.1.

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

- **⭐ Primary — P2 · Fleet IT / IT Superintendent** *(decided 2026-08-18; was P1)*. Owns the fleet's network and cyber. Duties verbatim: "**Evaluate existing systems and make recommendations** for future technology investments", "**Manage relationships with technology vendors**", "**Prepare business cases**". **P2 chooses; P1 pays.** Full decision record and falsification test: [`research/personas.md`](./research/personas.md) §5.0.
- **Secondary — P1 · Technical Superintendent** *(was primary)*. Shore-based technical manager of a vessel group; an ex-seagoing engineer (Class II CoC, ISM) who **approves communication invoices** and prepares dry-docking budgets. Thinks in class / certificates / ISM / budget language — **not IT**. Remains the **gate and the qualified signature**, and the lead reader of the Safety & Compliance, Equipment and Norm pages.
- **Secondary — P4 · Owner / CAPEX approver.** Holds CAPEX and frame agreements; the approval matrix runs through them.
- **Main job:** *When I need to close a specific fleet requirement, I want to confidently determine what we need and who to entrust it to — so I enter the supplier conversation with a position, not with "so what do you offer?"*
- **Top-3 jobs for MVP** (important to primary × not served by the market) — *revised 2026-08-18 with the P2 switch; the swap was predicted in [`research/jtbd.md`](./research/jtbd.md) §8.2 before the decision was taken*:
  1. **MAIN** — figure out what fits without studying the whole catalog (only real market finder disappeared; Marlink answers with a human). *Unchanged — scores 3 for both personas.*
  2. **R1** — regulation with a date → *which solution closes it and what paper you get* (norm-explaining is owned by class societies; the vendor-side link is unclaimed). *Unchanged, and strengthened: P2's own arrival situation #1 is MSC.428(98) cyber-in-SMS checked at the annual DOC verification.*
  3. **R3** — *assemble a rationale that survives the person with the budget.* **Entered the core on the switch.** P2's directly written duty ("Prepare business cases", "ability to justify investments"); P4 = 3 as well, so it is the one core job reaching the budget holder. Not served in the direct market.
- **Left the core:** **R5** (crew access vs control) — P2 = 2. The job is not weakened (best-evidenced in the base) and keeps its screen and nav slot; it is simply no longer one of the three the MVP is built around. Returns to the core if primary ever returns to P1.

---

## 5. Information architecture / sitemap

**Solutions and Industries are two independent sections connected by cross-links**
(not a full matrix). A solution page links to relevant industries and vice versa.

```
Home
Solutions & Services (overview + Solution Finder)
  ├─ Connectivity            (satellite, mobile, terrestrial)
  ├─ Cybersecurity           (network, device, data, ops protection)
  ├─ Digital Solutions       (AI, IoT, monitoring, data transfer, cloud)
  ├─ Safety & Compliance     (maritime safety, certification, survey)
  ├─ Equipment               (navigation & bridge systems, safety equipment,
  │                           onboard hardware — supply, integration, survey)
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

### 6.1 Partner accreditation as the primary proof type

Added 2026-08-18 from the reference-site audit ([`research/scope-check.md`](./research/scope-check.md) §2.2).

The strongest trust block on the reference site is a **named partner strip** — satellite
operators, navigation and bridge OEMs, safety-equipment manufacturers — reinforced by news
items that are, in substance, **partnership announcements**. For an integrator this is the
proof that works: a partner's name is a third party's name, and cannot be self-asserted.

**What this fixes.** Our proof model previously offered only *stats · certifications ·
outcome cases*. For a fictional brand the first and third cannot be filled without inventing
facts, which the evidence rules forbid — so the entry screen carried two empty proof slots.
Partner accreditation is **structural**: it can be shown honestly without inventing a figure.

**Rules that come with it:**
- Partner accreditation is a **proof type**, ranked alongside certifications — see
  [`sitemap.md`](./sitemap.md) O5.
- **Never name a real company as Asterra's partner.** Asterra is fictional; claiming a real
  operator or OEM partners with it is a false statement about a real party. Use the *category*
  ("satellite capacity partners", "navigation & bridge OEMs", "safety equipment manufacturers")
  and, at design stage, invented partner brands. This is the §3 no-real-brand rule applied to
  the partner strip.
- Partner freshness is carried by news — see the reopened Insights decision in
  [`sitemap.md`](./sitemap.md) §2.

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

---

## 15. Designed IA (2026-08-05)

The IA has been derived from the research layer (entities ← jobs ← personas), not from
the §5 template sitemap — which remains above as the original brief. Full detail:
[`sitemap.md`](./sitemap.md) (entities · screens · navigation · traceability, each with
a quality-check block) · [`flows.md`](./flows.md) (user flows) · one-page view:
[`ia.html`](./ia.html).

**Top-level sitemap — 8 job-backed screens** (+ 4 declared hygiene orphans):

```
ORIENT (MAIN)            Entry screen · Guided matching · Industry screens (Maritime leads)
UNDERSTAND FIT           Solution detail (forwardable core; proof as attributes — R2 is
(MAIN·R1·R2·R5)          screen-less by design) · Crew access & control (R5) · Norm screens (R1)
PREPARE APPROVAL (R3)    Approval materials — [?] lifted 2026-08-18; R3 is now an MVP-core job
REACH THE EXPERT         Inquiry (single-step, context-carrying, role field for R4)
HYGIENE [ORPHAN]         Company · Careers · Legal (backlog) · Insights (cut from MVP)
```

**Global navigation — 5 working items** (order = the MVP core, `jtbd.md` §8.2):
"Find what fits" (MAIN) · "Your industry" (MAIN/E1/S1) · "Regulations & deadlines"
(R1 [?]) · "Crew connectivity" (R5 — the altitude bet) · "Talk to an expert"
(MAIN end + R4, the §6 header slot).

**Main flow & depth:** Entry → Guided matching → Solution detail → Inquiry —
**3 meaningful transitions** to the main job's end state ("a ready position"); fit
rationale and reliability proof cost 0 extra transitions (both live on Solution
detail). Alternative paths: via Industry — 3 · via Norm — 3 · crew trigger — 2.

**Coverage:** 90% of jobs (9/10; S2 backlogged per `jtbd.md`'s own verdict), 100% of
job-backed screens. Open hypotheses that gate the next iteration: the site-visit bet,
P1-vs-P2 primary, matching-vs-recognition lead, the norm→supplier visit trigger.


---

## 16. Wireframes (stage complete, 2026-08-18)

Low-fi wireframes for **all 12 screens of the designed IA** live in
[`wireframes/`](./wireframes/) — 28 pages: every screen plus every state confirmed in
[`wireframes/_screens.md`](./wireframes/_screens.md) (16 states total; states exist only where
a flow diagram draws them — none were generated by default).

- **Contract:** [`wireframes/_conventions.md`](./wireframes/_conventions.md) — grayscale only,
  semantic HTML, no invented facts ([TBD] slots where a figure would be an invented fact for a
  fictional brand), claims-not-labels heading register, per-screen state pages derived from the
  base file by script.
- **Entry point:** [`wireframes/entry.html`](./wireframes/entry.html). Every page carries a
  service tree panel (all screens and states) and a states bar; the main flow and both detours
  are walkable end-to-end by click. Edge audit: 32/32 diagram edges carried by real links; the
  two deliberate exceptions (trust-collapse dead ends get no recovery button; inquiry-success is
  terminal) are intact.
- **Review journal:** [`wireframes/_critique.md`](./wireframes/_critique.md).
- Screens outside the main flow (Crew access & control per flow R5, Approval materials per the
  MAIN approval branch, four hygiene pages kept deliberately minimal) were added 2026-08-18;
  the hygiene four stay «declared, not designed» by rule (jtbd.md §8.3).

Next stages (concept → tokens → components) start from these pages; visual direction stays
brief §9 (dark-first, editorial tech) and is deliberately absent here.


## 17. Голос (stage complete, 2026-08-27)

Мовний шар спроєктовано і застосовано. Джерело правди — [`voice.md`](./voice.md):
**Принципи → Словник → Заборонене → Мікрокопі**; порядок при суперечці — принцип →
словник → мікрокопі, перемагає лівіший.

- **П'ять принципів**, кожен з анкером у ресерчі й «межею доказу»: доказ — чуже ім'я
  (своє — зобов'язання) · ієрархія й конкретика, не спрощення (E1 після P2-switch) ·
  норму пояснює клас, ми називаємо рішення і папір · одна цифра — одне значення,
  порожній слот чесніший за вигадку · напис називає, що на тому боці.
- **Словник** закриває всі 14 предметних розбіжностей інвентаря (area/solution ·
  regulation/requirement — «norm» у видимому тексті заборонене · request · industry ·
  fleet/vessels · «the paper you keep» тощо) і задає канон написів на кожен напрямок
  переходу; регістр, коди норм (перша згадка повна з органом), дати з днем,
  британський -ise (виняток: artifact за сутністю O6).
- **Мова конкурентів** консолідована в [`research/research.md`](./research/research.md)
  §13 — 28 дослівних фрагментів, 6 реєстрових патернів; жодного нового збору не
  знадобилось.
- **Перепис застосовано до всіх 28 сторінок** `wireframes/` (пілот + 10 паралельних
  проходів + глобальний хром + два контрольні проходи Р1–Р10 і Д1–Д11). Порядкова
  таблиця «було/стало» кожного екрана і наскрізний реєстр написів —
  [`microcopy.md`](./microcopy.md) (§1.x, §5).
- **Свідомо відкрите** (рішення, не борги): канон заголовка блока доказу (Н1-9 — всі
  кандидати провалюють тест твердження) · крихти на Guided matching та Inquiry
  (розмітка) · H1 на inquiry-success при знятій формі (Н6-9, рівень стану) · правило
  валідації поля (стану немає в `_screens.md`). Не «виправляти» мимохідь.

Наступні етапи (concept → tokens → components → білд) беруть кожен рядок тексту з
`voice.md`/`microcopy.md`, а не винаходять заново.

## 18. Концепт (stage in progress, 2026-08-27)

Етап concept розпочато; артефакти в [`concept/`](./concept/):

- **Референси:** [`concept/references.md`](./concept/references.md) — зібрано через MCP Refero.
  Основа Andercore + прийоми HashiCorp / Apollo / Langbase / Resend / Cartesia / Vercel / Mapbox;
  HARD-група не референсилась. Ключова знахідка: два з чотирьох aspirational-бенчмарків
  (Stripe, Vercel) — світлі; темний §9 наповнюється носіями прийому, не бенчмарками.
- **Смак і атрибути:** [`concept/concept.md`](./concept/concept.md) — «Смак дизайнера»
  (Oxide · Linear · Invisible · Composio; анти-референс — теплий теракотовий editorial),
  5 пар атрибутів A1–A5 з якорями в ресерчі, три розбіжності смак/дані (К1 закрито:
  **обладнання як об'єкт — так, людей і краєвид прибрано**; §9 брифу свідомо звужено).
- **Напрями:** [`concept/directions.html`](./concept/directions.html) — три контрастні мови
  (A «Штамп» · B «Панель» · C «Схема»), кожна виходить із забороненої лінії
  editorial-typographic окремим механізмом. **Обрано B «Панель»**: chroma 0 на підкладці,
  хроматика тільки як подія; Familjen Grotesk + JetBrains Mono; радіус 2px; без тіней;
  Solar linear; підлога мікротексту 0.8rem. A і C записані — можна повернутись.
- **Стенд мови:** [`concept/concept.html`](./concept/concept.html) — палітра з обчислюваним
  hex, шкала 1.25×, семантика без веселки (один сигнальний токен, стан розрізняє форма і
  слово — правило дальтонізму виконано за побудовою), три живі компоненти з канонічними
  написами з `microcopy.md`. Контраст: 10 пар, усі AA, рахує браузер.
- **Мова на вайрфреймах:** [`wireframes/_panel.css`](./wireframes/_panel.css) поверх
  `_wireframe.css` — **усі 28 сторінок** (пілот 2026-08-27: guided-matching і
  solution-detail, два кінці головного стрибка; розкатка на решту — того ж дня, рішення
  користувача). Спільні компоненти звірені відбитками (бейдж/кнопки/поверхні —
  байт-у-байт). Розмітка й текст не змінені ніде: стани й ідентичність екрана
  розпізнаються через `:has()` по смузі станів; фото героя — тільки де тематично
  назване (4 екрани), однакове в усіх станах; Entry несе схему орбіт замість фото.
  Повторний прогін після розкатки: 28/28 без провалів контрасту, кегль ≥12.8px,
  без переповнення на 375/1280.
- **Скіл /impeccable** підключено; PRODUCT.md синтезовано з підтверджених документів.
  Critique 32/40, детектор чистий; знімок в `.impeccable/critique/`.
- **Свідомо відкрите рівня concept:** «bold color blocks» §9 проти одноакцентної
  дисципліни (references.md §1; смак 4/4 на боці дисципліни) · error без live-region і
  tab-порядок через службове дерево (рівень розмітки вайрфреймів — не чіпати мимохідь).
