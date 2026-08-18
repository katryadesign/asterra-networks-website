# Екрани головного flow — Asterra Networks

**Складено:** 2026-08-18
**Джерела:** [`../sitemap.md`](../sitemap.md) (§5 Screens, §6.2, §7.1) · [`../flows.md`](../flows.md) (MAIN JOB) ·
[`../research/jtbd.md`](../research/jtbd.md) (§2) · [`../research/personas.md`](../research/personas.md) (§ P1).

**Що це.** Перелік екранів і станів головного шляху для наступного кроку. Це **не** вайрфрейми
і **не** опис верстки. Нові екрани тут не з'являються.

---

## Вихідні дані (взяті дослівно, не переформульовані)

**Primary-персона** — `personas.md`, заголовок розділу дослівно:

> ⭐ PRIMARY — P2. Fleet IT / IT Superintendent
> *Owns the fleet's network and cyber. **Chooses the supplier; P1 pays.***

> ⚠️ **Змінено 2026-08-18.** До цього primary був **P1 · Technical Superintendent**; рішення
> ухвалене за трьома незалежними сигналами — `personas.md` §5.0. **Склад екранів і станів
> у таблиці нижче від цього не змінився**, і це не збіг: MAIN і R1 мають оцінку 3 для обох
> персон (`jtbd.md` §8.1), тож головний flow однаковий за будь-якої відповіді. Змінилася
> вага екранів **поза** головним flow — Approval materials піднявся, Crew access опустився.

У MAIN job `jtbd.md` §2 фіксує «P1 and P2 equally» — саме тому перемикання не зачепило
головний шлях.

**MAIN job** — `jtbd.md` §2, дослівно:

> 🎯 When I need to close a specific fleet requirement, I want to confidently determine what
> exactly we need and who can be trusted with it, so that I enter the supplier conversation
> with a ready position rather than the question "so what do you offer?"

---

## Критерій відбору

Екран потрапляє в таблицю, лише якщо виконано всі три умови:

1. він є вузлом-екраном у діаграмі **MAIN JOB** у `flows.md` (не в R1 / R2 / R5);
2. він має підтверджену клітинку в рядку **MAIN** матриці трасування `sitemap.md` §7.1
   (`✓E` / `✓EP` / `✓P` / `✓C`) — тобто зв'язок із job підтверджено, а не припущено;
3. назва взята дослівно з `sitemap.md` §5.

Рядок MAIN у §7.1 дає рівно шість екранів: Entry `✓E` · Guided matching `✓EP` ·
Industry `✓EP` · Solution detail `✓P` · Norm `✓P` · Inquiry `✓C`.

---

## Таблиця

| Екран (`sitemap.md` §5) | Job (`jtbd.md` §2, дослівно) | Місце у flow (`flows.md`, MAIN JOB) | empty | error | loading | success |
|---|---|---|---|---|---|---|
| **Entry screen** | MAIN, клауза: *«confidently determine what exactly we need»* — початок three-mechanism orientation (§7.1: `✓E`; `sitemap.md` §5: «MAIN — the start of orientation») | Вузол `entry` — одразу після `trigger` («a specific fleet requirement — docking · PSC · budget line · newbuild»), перед розвилкою `needClear{"Can they already name what they need?"}`. 🟢 happy path. **Роль: вхід.** | — | — | — | — |
| **Guided matching screen** | MAIN, клауза: *«confidently determine what exactly we need»* (§7.1: `✓EP`) | Вузол `matching` — гілка `needClear —"no — the need is unclear"→`; далі `mLoading → loadOk → mResult{"Relevant solution matched?"} → solution`. 🟢 happy path. **Роль: пошук / уточнення потреби.** | ✓ | ✓ | ✓ | — |
| **Industry screen** | MAIN, клауза: *«confidently determine what exactly we need»* — через self-identification (§7.1: `✓EP`) | Вузол `industry` — гілка `needClear —"recognizes their sector first"→`; також ціль відкату `fallback —"yes — by industry"→`; далі `iLoading → iOk → recog{"Do they recognize their situation on the page?"} → solution`. 🔵 альтернативний вхід (recognition entry). **Роль: вхід.** | — | ✓ | ✓ | — |
| **Solution detail screen** | MAIN, клаузи: *«what exactly we need and who can be trusted with it»* (§7.1: `✓P`) | Вузол `solution` — точка сходження всіх трьох входів (matching / industry / прямий доступ); несе рішення `fit{"Does it close the requirement?"}` і `proof{"Is the proof enough for external scrutiny?"}`; перед ними `sLoading → sOk`. 🟢 happy path. **Роль: оцінка рішення** (перевірка довіри вбудована сюди ж як атрибутна — `flows.md`, «Decisions»: «R2 embedded as an attribute check»; окремого екрана довіри немає за рішенням `sitemap.md` §5 «R2 is deliberately screen-less»). | — | ✓ | ✓ | — |
| **Norm screen** | MAIN, клауза: *«who can be trusted with it»* (§7.1: `✓P` — «added at the adversarial-critique pass… Flow-confirmed, not theoretical») | Вузол `norm` — гілка `proof —"not sure — wants to check the paper"→`; далі `paperOk{"Does the paper check out?"} → ready`. 🔵 детур перевірки паперу (правка критики Т2). **Роль: перевірка довіри.** | — | — | — | — |
| **Inquiry screen** | MAIN, клауза: *«I enter the supplier conversation with a ready position rather than the question "so what do you offer?"»* (§7.1: `✓C`) | Вузол `inquiry` — з розвилки `ready{"Ready to contact the expert?"}`; далі `sending → sent{"Request sent?"} → success`. 🟢 happy path, кінцевий стан job. **Роль: контакт / завершення.** | — | ✓ | ✓ | ✓ |

---

## Чому саме такі стани

Стани проставлені лише за розділом **«States»** та вузлами-станами діаграми MAIN JOB у
`flows.md`. ✓ не ставилося за замовчуванням; звичайно завантажений екран success-станом не
вважався.

### Entry screen — жодного стану

- **empty —** · **error —** · **loading —** · **success —**
  Це не пропуск, а зафіксоване рішення. `flows.md`, Cross-flow notes: *«The Entry screen is
  deliberately stateless… a static orientation surface with no data dependency — the one
  documented exception to per-screen state modeling»* (правка критики С6). У діаграмі до вузла
  `entry` не приєднано жодного вузла-стану.

### Guided matching screen

- **empty ✓** — вузол `mEmpty` («no confident match»). Підбір може чесно не дати результату:
  `flows.md` — *«honest "unsure" instead of a forced wrong recommendation»*. Це єдиний екран
  головного шляху, де користувач реально лишається без потрібних результатів.
- **error ✓** — вузол `mError` («matching unavailable»): підбір є системною операцією, вона
  може не виконатися; далі відкат `fallback{"Try another entry?"}`.
- **loading ✓** — вузол `mLoading` («matching in progress»): між відповіддю про ситуацію і
  видачею рішення є очікування системної відповіді.
- **success —** — окремого success-вузла немає: вдалий підбір веде на `solution`, а не в
  завершений результат. Завершення job фіксується лише на Inquiry.

### Industry screen

- **empty —** — галузева сторінка завжди має вміст; «не впізнав себе» — це рішення
  `recog{"Do they recognize their situation on the page?"}`, а не порожній результат.
- **error ✓** — вузол `iError` («sector content unavailable», правка С2): вміст галузі
  завантажується, тож завантаження може зірватися; далі `fallback`.
- **loading ✓** — вузол `iLoading` («sector content»): очікування даних сторінки.
- **success —** — окремого завершеного результату дії тут немає.

### Solution detail screen

- **empty —** — екран описує одне конкретне рішення; сценарію «даних немає» flow не передбачає.
- **error ✓** — вузол `sError` («page unavailable», правка С3); далі `sRetry{"Retry?"}`.
- **loading ✓** — вузол `sLoading` («page and proof load»): вантажиться і сторінка, і proof-
  матеріали (O5 як атрибути рішення).
- **success —** — «підходить» і «доказів достатньо» — це рішення (`fit`, `proof`), а не
  завершений стан; успіх job настає далі, на Inquiry.

### Norm screen

- **empty —** · **error —** · **loading —** · **success —**
  У діаграмі MAIN JOB вузол `norm` не має приєднаних вузлів-станів і не згадується в розділі
  «States» цього flow — з нього одразу йде рішення `paperOk`. ✓ не проставлено, щоб не додавати
  того, чого в головному шляху немає. Див. примітку **[РОЗБІЖНІСТЬ]** нижче.

### Inquiry screen

- **empty —** — форма запиту не має результатів, які могли б бути відсутні.
- **error ✓** — вузол `sErr` («submission failed»); далі `retry{"Retry?"}`. `flows.md`
  називає це найдорожчим тупиком: *«Qualified lead lost to a form failure»*.
- **loading ✓** — вузол `sending` («request submitting»): очікування надсилання.
- **success ✓** — вузол `success` («context passed, ready position achieved»). Єдиний
  справжній success головного flow: *«the verbatim end state of the job»*.

---

## Що свідомо не увійшло

| Не взято | Причина (за документами) |
|---|---|
| **Approval materials screen** | У рядку **MAIN** матриці `sitemap.md` §7.1 клітинки немає — його job це **R3**, і гілка approval у MAIN-діаграмі закриває саме R3, а не MAIN. **Критерій відбору не змінився, тож екран не входить.** ⚠️ Але його статус зріс: 2026-08-18 знято позначку `[?]`, персона тепер `[PRIMARY (P2 prepares)]`, а R3 увійшов у ядро MVP. Рівень навігації піднято DEEP → CONTEXTUAL. **Це найперший кандидат на наступну партію вайрфреймів** — тепер він обслуговує core-job первинної персони. |
| **Crew access & control screen** | Екран flow **R5**, у MAIN-діаграмі відсутній. |
| **Company · Careers · Legal · Insights / News** | `[ORPHAN — hygiene]` (`sitemap.md` §5, §7.2): підтвердженого job немає; Insights — кандидат на виріз. |
| Стани `loading` / `empty` / `error` / `success` як окремі екрани | Правило `sitemap.md` §5: це **стани** екрана, ніколи не екрани. |
| Секції, CTA, форми, картки, фільтри, proof-стрічки | Правило `sitemap.md` §5 і нотація `flows.md`: це **компоненти** і кроки всередині екрана, ніколи не вузли flow. Зокрема: список шести напрямів (six-pillar, O1) на Entry screen — «lives here as a SECTION, not a screen» (`sitemap.md` §5); proof items (O5) на Solution detail — атрибути об'єкта, а не екран; поле ролі на Inquiry screen — компонент. |
| Flows R1, R2, R5 | На цьому кроці не розкочуємо. |

---

## [ПРОГАЛИНА]

**Прогалин у переліку екранів немає.** `flows.md` фіксує це прямо: *«Every screen node exists in
`sitemap.md` §5 — no flow required a new screen»* і *«`[NEW SCREEN?]` markers: none remain because
none were ever triggered»*. Головний flow не потребує жодного екрана, якого немає в `sitemap.md`.

Нижче — те, що знайдено, але **не додано** самостійно.

**[РОЗБІЖНІСТЬ] — Norm screen без станів у MAIN.**
У flow **R1** той самий Norm screen має повний набір станів (`nLoading`, `nError`, `nEmpty`,
`doneOk`), а у flow **MAIN** — жодного, хоча це такий самий контентний екран із залежністю від
даних. Правка критики С5 описує стани Norm лише для R2 («following the R1 model»), MAIN у ній не
згадано. Нові ✓ тут не проставлені навмисно — це рішення має бути ухвалене явно, а не
успадковане з іншого flow.

> ⚠️ Це **не** `[ПРОГАЛИНА]` за визначенням цього кроку. `[ПРОГАЛИНА]` = головний flow потребує
> екрана, якого немає в `sitemap.md`. Тут екран є в обох документах — розбіжність лише в
> **моделюванні станів усередині `flows.md`** (MAIN проти R1). Тому позначка окрема.

**[?] успадковані застереження** — переносяться далі як є, без спроби їх закрити:

- **Norm screen** — чи взагалі несуть покупці питання про норму постачальнику (`jtbd.md` §3 R1).
- **Entry screen** — що веде вхід: галузь чи ситуація (`research.md` §10.6; `sitemap.md` §3).
- **Guided matching screen** — його першість над recognition entry спирається на неперевірену
  тезу «no specialist across five pillars» (`personas.md` §8.4, гіпотеза 2). Сам екран
  підтверджений, його **лідерство** — ні.
- **Наскрізне** — що ці jobs узагалі переслідують на сайті постачальника (`jtbd.md` §0);
  це застереження успадковує весь перелік.

---

## Перевірка якості

Повторне звіряння проведено 2026-08-18 проти [`../sitemap.md`](../sitemap.md) (§5, §6.2, §7.1),
[`../flows.md`](../flows.md) (діаграма MAIN JOB, розділи «Decisions», «States», «Job linkage»,
Cross-flow notes, Quality check) і [`../research/jtbd.md`](../research/jtbd.md) (§2).

### Екрани — видалені або додані після перевірки

**Жодного.** Склад із шести екранів підтверджено двічі, з двох незалежних місць:

- **`flows.md`, «Job linkage» → Screens used** для MAIN перелічує сім екранів: Entry · Guided
  matching · Industry · Solution detail · Norm · Approval materials · Inquiry.
- **`sitemap.md` §7.1, рядок MAIN** підтверджує зв'язок із job лише для шести з них:
  `✓E` · `✓EP` · `✓EP` · `✓P` · `✓P` · `✓C`. **Approval materials клітинки в цьому рядку не має.**

Розбіжність між двома джерелами реальна й вирішена на користь §7.1: Approval materials — вузол
MAIN-діаграми, але job, який він закриває, — **R3**, а не MAIN. Тому екран лишається поза
таблицею. Це єдиний випадок, де довелося обирати між документами; підстава зафіксована в розділі
«Що свідомо не увійшло».

**Перевірено окремо, змін не потребувало:**

- *Належність до головного flow* — усі шість є вузлами-екранами `["…"]` саме діаграми MAIN JOB.
- *Відсутність secondary-flow екранів* — Crew access & control (R5) не входить. **Norm screen —
  свідомий і задокументований виняток:** його §5-первинний job справді R1, але в MAIN він
  присутній як вузол після правки Т2, а §7.1 позначає MAIN × Norm = `✓P` з прямим застереженням
  «Flow-confirmed, not theoretical». Це не формальна прив'язка.
- *Дослівність назв* — усі шість збігаються з `sitemap.md` §5 посимвольно. Один нюанс: у
  `flows.md` вузол підписано «Industry screen — Maritime». Взято §5-назву **Industry screen**;
  `flows.md` Quality check прямо кваліфікує підпис у діаграмі як «a template instance… recorded
  as naming-consistent, not a rename».
- *Нові екрани* — не додано жодного. `flows.md`: «no flow required a new screen».
- *Компоненти й стани як екрани* — не потрапили. Перевірено адресно: секція шести напрямів на
  Entry, proof items (O5) на Solution detail, поле ролі на Inquiry, форма запиту — усі лишилися
  компонентами; жоден loading / empty / error / success не записаний окремим рядком.

### Стани — що виправлено

**Жодної клітинки не змінено.** Проведено посимвольне звіряння двома проходами — проти розділу
«States» MAIN-флоу і проти вузлів-станів `(["…"])` самої діаграми. Обидва проходи дали той самий
результат:

| Екран | Вузли-стани, приєднані в діаграмі MAIN | У таблиці |
|---|---|---|
| Entry screen | — (задекларований виняток С6) | 0 ✓ |
| Guided matching screen | `mLoading` · `mError` · `mEmpty` | 3 ✓ |
| Industry screen | `iLoading` · `iError` | 2 ✓ |
| Solution detail screen | `sLoading` · `sError` | 2 ✓ |
| Norm screen | — | 0 ✓ |
| Inquiry screen | `sending` · `sErr` · `success` | 3 ✓ |

**Вигаданих станів немає:** кожен ✓ вказує на конкретний іменований вузол діаграми, кожен `—`
означає, що такого вузла в головному flow не існує. Зокрема підтверджено, що:

- **empty** стоїть лише на Guided matching — єдиному екрані MAIN, де користувач реально може
  лишитися без результату (`mEmpty` «no confident match»);
- **success** стоїть лише на Inquiry — це завершений результат конкретної дії (надсилання
  запиту), а не факт завантаження екрана. На Solution detail «підходить» і «доказів достатньо» —
  це розвилки `fit` і `proof`, тому success там не поставлено;
- **loading** стоїть лише там, де є системне очікування (підбір, вміст галузі, сторінка з proof,
  надсилання) — не як загальний стан будь-якої сторінки;
- **error** стоїть лише там, де flow має явну гілку збою з відкатом або retry.

### Виправлено після перевірки — 2 неточності формулювань

1. **Entry screen, колонка job.** Було вказано клаузу-тригер *«When I need to close a specific
   fleet requirement»*. Це умова, за якої job виникає, а не робота, яку екран виконує. Замінено на
   *«confidently determine what exactly we need»* — згідно з `flows.md` Quality check, де ця
   клауза прямо мапиться на «the three-mechanism orientation (guided / recognition / direct)», і
   `sitemap.md` §5 «MAIN — the start of orientation». Склад екранів і стани не змінилися.
2. **Solution detail screen, колонка ролі.** Було дві рівнозначні ролі. Первинну роль зведено до
   однієї — **оцінка рішення**, а перевірка довіри позначена як вбудована атрибутна
   (`flows.md`: «R2 embedded as an attribute check»), бо окремого екрана довіри не існує за
   рішенням `sitemap.md` §5 «R2 is deliberately screen-less».

### Чи залишилися `[ПРОГАЛИНА]`

**Ні.** Розриву між `sitemap.md` і `flows.md` у складі екранів немає — головний flow не потребує
жодного екрана, якого немає в `sitemap.md` §5; обидва документи це фіксують незалежно.

Відкритими лишаються два записи **іншого класу**, свідомо не підвищені до `[ПРОГАЛИНА]`:

- **`[РОЗБІЖНІСТЬ]`** — Norm screen має стани в R1 і не має в MAIN. Це неузгодженість
  моделювання станів усередині `flows.md`, а не брак екрана.
- **`[?]`** — чотири успадковані гіпотези (Norm, Entry, Guided matching, наскрізна ставка на
  візит). Це маркери відсутніх даних із першоджерел, перенесені як є.

Нових екранів чи jobs для закриття цих записів не вигадувалося.

### Підсумок

- **Фінальних екранів у головному flow: 6.**
- **Job:** у кожного — конкретна клауза MAIN із `jtbd.md` §2, дослівно, з підтвердженням у
  матриці `sitemap.md` §7.1 (6/6).
- **Місце у flow:** у кожного — іменований вузол діаграми MAIN JOB із зазначенням вхідної гілки й
  наступної розвилки (6/6).
- **Стани:** 10 позначок ✓ на 24 клітинки; кожна ✓ має пояснення, що виводиться з вузла flow;
  кожен `—` означає відсутність такого вузла в головному шляху (6/6).


---

## Екрани поза головним flow — додано 2026-08-18

Розширення набору до всіх flow продукту. Метод той самий: стани — лише за вузлами-станами
відповідної діаграми `flows.md`, ✓ не ставиться за замовчуванням.

| Екран (`sitemap.md` §5) | Job · flow | Місце у flow | empty | error | loading | success |
|---|---|---|---|---|---|---|
| **Crew access & control screen** | R5 — primary (best-evidenced job у базі); також S1 | Вузол `crew` діаграми R5: вхід із глобального меню або з кореня; далі `altitude{"Does it speak policy?"}` → `covers{"Does the rule set cover their case?"}` → `proofNeed` → solution / inquiry | ✓ | ✓ | ✓ | — |
| **Approval materials screen** | R3 — core-job первинної персони P2 (з 2026-08-18) | Вузол `approval` approval-гілки MAIN: `ready —"needs internal approval first"→ approval → inquiry` | ✓ | ✓ | ✓ | — |
| **Company screen** | — (hygiene, `jtbd.md` §8.3) | поза flow | — | — | — | — |
| **Careers screen** | — (hygiene) | поза flow | — | — | — | — |
| **Legal screens** | — (hygiene; шаблон — Privacy / Terms / Cookies) | поза flow | — | — | — | — |
| **Insights / News** | — (перевідкрито, не промоутовано — `sitemap.md` §2: чернетковий job R2 через свіжість партнерств) | поза flow | — | — | — | — |

### Обґрунтування станів

**Crew access & control** (діаграма R5, вузли дослівно):
- **empty ✓** — `cEmpty` («their policy need is not addressed»); вихід `customAsk{"Ask with the custom policy need?"} —yes→ inquiry` (правка критики Т11).
- **error ✓** — `cError` («content unavailable»); вихід `cRetry —yes→ crew` (правка Т10).
- **loading ✓** — `cLoading` («policy content»).
- **success —** — success-вузол R5 (`balance found`) належить Inquiry, не цьому екрану.

**Approval materials** (approval-гілка MAIN, вузли дослівно):
- **empty ✓** — `aEmpty` («nothing for this case») — критичний стан: порожня бібліотека = колапс R3; вихід `aFallback{"Use the forwardable solution page itself instead?"} —yes→ inquiry`, носій R3 — forwardable solution-detail.
- **error ✓** — `aError` («library unavailable»); вихід той самий `aFallback`.
- **loading ✓** — `aLoading` («materials list»).
- **success —** — не змодельований.

**Hygiene** — у flows.md цих екранів немає взагалі; жодного стану. Мінімальність — рішення
(`jtbd.md` §8.3: «must not compete with the core for attention»), не недоробка.
