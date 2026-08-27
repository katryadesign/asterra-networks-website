# Microcopy — Asterra Networks

**Складено:** 2026-08-27
**Джерело:** усі 28 сторінок [`wireframes/`](./wireframes/) — 12 екранів + 16 станів.
**Правила, проти яких велося звіряння:** [`wireframes/_conventions.md`](./wireframes/_conventions.md)
(§2 семантика · §3 текст і контент · §3.1 дозволений словник · §3.2 три обмеження · §9.1 тест на
лендінг) · [`wireframes/_screens.md`](./wireframes/_screens.md) (який стан існує для якого екрана) ·
[`CLAUDE.md`](./CLAUDE.md) §6 (ієрархія CTA).

**Статус.** Файл починався як **перепис наявного тексту**: позначки в колонці «Позначки»
фіксували місця, де екрани говорять по-різному про те саме, і описували стан справ, а не
рішення.

> 🔄 **Оновлено 2026-08-27, друга ітерація: перепис завершено на всіх 12 екранах (28 сторінок).**
> Пілот Guided matching (§1.2) + 10 паралельних проходів по решті екранів + глобальний прохід
> спільного хрому. Кожен розділ §1.x починається таблицею правок **Було / Стало**; інвентарна
> таблиця під нею — стан ДО перепису (колонка «Рядок» = «було»). Наскрізна звірка написів і
> таблиця розбіжностей, що лишилися, — **§5**. Позначки Н1/Н2/Н5/Н6 у розділі §2 описують стан
> до перепису й переважно закриті — актуальний залишок див. §5.2.

---

## Метод

1. **Дедуплікація станів.** Сторінки станів згенеровані з базового файлу: шапка (`<header>`),
   футер і сервісне дерево **посимвольно ідентичні у всіх 28 файлах** (перевірено хешем). Такий
   рядок веде **одну** позицію в таблиці зі значенням `усі` в колонці «Стан». Окремими рядками
   винесено лише те, що в стані реально відрізняється.
2. **Зона стану.** У кожного екрана зі станами розмітка позначає рівно одну змінну зону
   (`RESULT REGION` на Guided matching, `STATE REGION` на решті). Рядки поза цією зоною однакові
   в усіх станах і не дублюються.
3. **Однорідні переліки.** Перелік власних назв без власного мікрокопірайту (8 галузей, 6
   напрямів у футері, `<option>` селектів) веде один рядок зі значеннями через `·`. Перелік, де
   кожен елемент має свій текст (реглядки, картки, dl-пари), розписано порядково.
4. **Службовий хром.** Сервісне дерево, смуга станів і блоки `<aside class="wf-doc">` — це
   риштування вайрфрейму, а не інтерфейс Asterra. Дерево і смугу внесено (їх видно на екрані й
   вони мають текст), позначено `СЛУЖБ`. Анотації `wf-doc` **не внесено**: це проєктна
   документація, вона не є частиною продукту й не переїде в білд.

---

## Легенда позначок

| Код | Що означає |
|---|---|
| `Н1` | Той самий предмет під різними іменами |
| `Н2` | Та сама дія під різними назвами кнопок |
| `Н3` | Назва екрана розходиться між навігацією, заголовком і хлібними крихтами |
| `Н4` | Категорійна етикетка там, де за `_conventions.md` §9.1 мало б стояти твердження |
| `Н5` | AI-кліше, бадьорий тон, зайві оклики, емодзі |
| `Н6` | Заглушка або текст, скопійований із сусіднього екрана |
| `[TBD]` | Свідомий порожній слот за fictional-brand rule — **не заглушка** |
| `ЗОВН` | Зовнішня назва, цитована дослівно (норма, стандарт, орган, чужа цифра) — **не переписуємо** |
| `ВВІД` | Значення, яке вводить користувач — **не переписуємо** |
| `СЛУЖБ` | Службовий хром вайрфрейму, поза продуктом |

---

## 1. Таблиця

### 1.0 Глобальні зони — ідентичні на всіх 28 сторінках

> 🔄 **Глобальний прохід 2026-08-27 (Д5).** Інвентар нижче — стан ДО перепису; чотири правки
> спільного хрому, застосовані у 28/28 файлах:

| Зона | Було | Стало | Правило |
|---|---|---|---|
| шапка · головна нав | Latest News | Latest news | sentence case (не бриф-назва розділу) |
| шапка · utility-нав | Contact | Contact Us | форма з брифу §6 — єдине дозволене місце |
| футер | Contact us | Talk to an expert | Н1-4: поза шапкою — канон |
| футер | IACS UR E26 / E27 | IACS UR E26/E27 | скісна без пробілів |

| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| усі | усі | шапка | Asterra Networks | логотип-напис | |
| усі | усі | шапка · utility-нав | Events | посилання (`href="#"`, екрана не існує) | |
| усі | усі | шапка · utility-нав | Careers | посилання | |
| усі | усі | шапка · utility-нав | Contact | посилання → inquiry | `Н1` `Н3` |
| усі | усі | шапка · головна нав | About | посилання → Company screen | `Н3` |
| усі | усі | шапка · головна нав | Solutions & Services | посилання → **Guided matching** | `Н1` `Н3` |
| усі | усі | шапка · головна нав | Industries | посилання → Industry screen | `Н1` |
| усі | усі | шапка · головна нав | Regulations | посилання → Norm screen | `Н1` `Н3` |
| усі | усі | шапка · головна нав | Crew connectivity | посилання → Crew access & control | `Н1` `Н3` |
| усі | усі | шапка · головна нав | Latest News | посилання → Insights / News | `Н3` |
| усі | усі | футер | Asterra Networks | логотип-напис | |
| усі | усі | футер | About us | заголовок колонки | |
| усі | усі | футер | About · Leadership team · Careers | перелік посилань (перші два → company.html) | `Н3` |
| усі | усі | футер | Solutions & Services | заголовок колонки | `Н1` |
| усі | усі | футер | Connectivity · Cybersecurity · Digital Solutions · Safety & Compliance · Equipment · Technical Services | перелік посилань (усі → solution-detail.html) | `Н1` |
| усі | усі | футер | Industries | заголовок колонки | |
| усі | усі | футер | Maritime · Government · Enterprise · Energy · Research · Emergency Response · Transportation · Aerospace | перелік посилань (7 із 8 — `href="#"`) | |
| усі | усі | футер | Regulations | заголовок колонки | |
| усі | усі | футер | IMO MSC.428(98) · IACS UR E26 / E27 · MLC 2006 | перелік посилань | `ЗОВН` |
| усі | усі | футер | Contact us | посилання → inquiry | `Н2` |
| усі | усі | футер | Latest news | посилання → insights | `Н3` |
| усі | усі | футер | Terms of Use · Privacy Policy · Cookies Policy | перелік посилань (усі → legal.html) | |
| усі | усі | футер | Asterra Networks is a fictional brand created for an independent UX/UI case study. Regulatory references (MLC 2006, IMO MSC.428(98), IACS UR E26/E27, ISO 27001, IEC 62443) are real and dated. All product names, partner marks, news items and commitments are invented for the study. | дисклеймер | `ЗОВН` (перелік норм) |
| усі | усі | сервісне дерево | Wireframes | заголовок панелі | `СЛУЖБ` |
| усі | усі | сервісне дерево | Asterra Networks · 12 screens · 16 states · complete | підпис | `СЛУЖБ` |
| усі | усі | сервісне дерево | Orient "which solution fits us?" | назва групи | `СЛУЖБ` |
| усі | усі | сервісне дерево | Understand fit "is this it, and will it survive scrutiny?" | назва групи | `СЛУЖБ` |
| усі | усі | сервісне дерево | Prepare internal approval | назва групи | `СЛУЖБ` |
| усі | усі | сервісне дерево | Reach the expert — the end state of the main job | назва групи | `СЛУЖБ` |
| усі | усі | сервісне дерево | Hygiene — declared, not designed | назва групи | `СЛУЖБ` |
| усі | усі | сервісне дерево | Entry screen · Guided matching screen · Industry screen · Solution detail screen · Norm screen · Crew access & control screen · Approval materials screen · Inquiry screen · Company screen · Careers screen · Legal screens · Insights / News | перелік посилань на екрани | `СЛУЖБ` `Н3` |
| усі | усі | сервісне дерево | Empty · Error · Loading · Success | перелік посилань на стани | `СЛУЖБ` |
| усі | усі | сервісне дерево | States appear only where _screens.md marks them. None are generated by default. Entry, Norm and the hygiene four are deliberately stateless. | підпис панелі | `СЛУЖБ` |
| усі | усі | смуга станів | Wireframe states | заголовок смуги | `СЛУЖБ` |
| усі | усі | смуга станів | Base · Empty · Error · Loading · Success | перемикачі стану | `СЛУЖБ` |

### 1.1 Entry screen — `entry.html` (стан один: base, екран свідомо stateless)

> ✅ **Переписано 2026-08-27 за voice.md — 26 правок** (+3 у спільному хромі глобальним проходом).
> Інвентар нижче — стан ДО перепису: колонка «Рядок» = «було»; для рядків із таблиці правок
> чинна колонка «Стало».

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| base | hero · підзаголовок | …across eight sectors. One party stays accountable for all of it. | …across eight industries. One party stays accountable for all of it, and carries that as a commitment rather than a claim. | Н1-5 + принцип 1 |
| base | позиція · H2 | Our position | The proof is never our own name. | Н4 |
| base | рівні ємності · кнопка | Learn more | Read Asterra Connect | Н2-2 |
| base | шість напрямів · підводка | Where an area answers a requirement… | Where an area closes a requirement… | канон closes |
| base | картки напрямів · кнопки ×6 | Learn more | Read Asterra Connect · Read Asterra Shield · Read Asterra Intelligence · Read Asterra Assure · Read Asterra Equip · Read Asterra Care | Н2-2 |
| base | картка Shield · req | Closes MSC.428(98) · UR E26/E27 · IEC 62443 | Closes IMO MSC.428(98) · IACS UR E26/E27 · IEC 62443 | перша згадка повна |
| base | галузі · H2 | Eight sectors read eight different pages. | Eight industries read eight different pages. | Н1-5 |
| base | норми · кнопка | See the requirements we close | See the regulations we close | Н2-3 |
| base | реглядка 1 · meta | Checked at annual DOC verification · closed by Asterra Shield | Checked at the annual Document of Compliance verification · closed by Asterra Shield | розкриття DOC |
| base | реглядки · кнопки ×3 | Details | Read MSC.428(98) · Read UR E26/E27 · Read MLC 2006 | Н2-3 |
| base | реглядка 3 · meta | In force December 2024, verified by PSC · closed by Asterra Connect | In force 23 December 2024, verified by Port State Control · closed by Asterra Connect | дата повна + PSC |
| base | доказ · абзац | Capacity partners, navigation and bridge manufacturers, safety equipment makers. | Satellite capacity partners, navigation and bridge OEMs, safety equipment manufacturers. | Н1-6 |
| base | доказ · H3 | One value per figure | One canonical value per figure | Н1-11 |
| base | слоти логотипів ×6 | Capacity partner ×2 · Navigation OEM · Bridge systems OEM · Safety equipment ×2 | Satellite capacity partner ×2 · Navigation and bridge OEM ×2 · Safety equipment manufacturer ×2 | Н1-6 |
| base | новини · H3 №1 | UR E26 and E27 now apply to every newbuild contracted from 1 July 2024 | UR E26/E27 now apply to every newbuild contracted from 1 July 2024 | Н6-3, лок з Insights |
| base | новини · H3 №3 | What Port State Control asks for under the MLC connectivity amendments | What Port State Control asks for under the MLC 2006 connectivity amendments | Н6-3, лок з Insights |
| base | новини · кнопки ×3 | Read more | Read the announcement | тимчасовий канон |
| base | завершальний блок · кнопка | Start from a regulation | See the regulations we close | Н2-3 |

Свідомо лишено: «What we are held to» (Н1-9, канон не обрано) · «Latest news» H2 (чесного
твердження без вигаданого факту про склад стрічки немає; синхронність із нав-пунктом і Insights
переважила) · «Public sector, defence» (термін аудиторії, не синонім industry) · «[Backdrop
treatment…]» (службовий слот).


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| base | реглядка 2 · meta | …· closed by Shield and Equip | …· closed by Asterra Shield and Asterra Equip | Д2 — одна форма в межах компонента (рядки 1 і 3 повні) |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Entry | base | смуга станів | No other states exist for this screen. _screens.md marks none, and flows.md records the Entry screen as deliberately stateless: a static orientation surface with no data dependency, the one documented exception to per-screen state modelling. | пояснення стану | `СЛУЖБ` |
| Entry | base | hero | The fleet answers to a surveyor, an auditor and a budget. So do we. | заголовок H1 | |
| Entry | base | hero | Asterra Networks specifies, supplies, installs and services connectivity, cyber, digital, safety and equipment systems for fleets and remote operations across eight sectors. One party stays accountable for all of it. | підзаголовок | `Н1` |
| Entry | base | hero | Find what fits your fleet | кнопка → guided-matching | `Н2` |
| Entry | base | hero | See the six areas | кнопка → якір #areas | `Н1` |
| Entry | base | hero | [Backdrop treatment behind the type. Design stage.] | заглушка-слот під оформлення | `Н6` |
| Entry | base | позиція | Our position | заголовок H2 | `Н4` |
| Entry | base | позиція | We do not launch the satellites or build the bridge hardware. We are the party accredited to carry them, and the party you call when they stop. | абзац | |
| Entry | base | позиція | Which is why the proof on this site is never a claim about ourselves. It is whose capacity we are authorised to resell, whose equipment we are approved to survey, and which dated requirement each system closes. | абзац | |
| Entry | base | рівні ємності | Three tiers, one service. | заголовок H2 | |
| Entry | base | рівні ємності | Failover between them is part of the design rather than an upgrade path. | підзаголовок | |
| Entry | base | рівні ємності | Learn more | кнопка → solution-detail | `Н2` |
| Entry | base | рівні ємності | GEO — Wide-beam geostationary capacity, the stable baseline | підпис рівня | |
| Entry | base | рівні ємності | LEO — Low-latency capacity for bandwidth-led operations | підпис рівня | |
| Entry | base | рівні ємності | 3G / 4G / 5G — Terrestrial and mobile, in port and along the coast | підпис рівня | |
| Entry | base | рівні ємності | Hybrid — Automatic failover the crew never notices | підпис рівня | |
| Entry | base | шість напрямів | Six areas. Two of them carry a deadline. | заголовок H2 | `Н1` |
| Entry | base | шість напрямів | Each area is one decision rather than a shelf of products. Where an area answers a requirement with a date attached, it says which one. | підводка | `Н1` |
| Entry | base | картка напряму | Connectivity | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Connect | заголовок H3 | |
| Entry | base | картка напряму | Satellite and terrestrial capacity as one managed service. OrbitReach covers satellite, GroundLink covers terrestrial and mobile, and the usage rules stay with you rather than with us. | опис | |
| Entry | base | картка напряму | Closes MLC 2006 crew connectivity | підпис-вимога | `ЗОВН` |
| Entry | base | картка напряму | Cybersecurity | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Shield | заголовок H3 | |
| Entry | base | картка напряму | Network, device, data and operational protection, specified against the framework your auditor names, and documented before the verification rather than after it. | опис | |
| Entry | base | картка напряму | Closes MSC.428(98) · UR E26/E27 · IEC 62443 | підпис-вимога | `ЗОВН` |
| Entry | base | картка напряму | Digital Solutions | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Intelligence | заголовок H3 | |
| Entry | base | картка напряму | IoT, monitoring and cloud transfer. Engine data and voyage records reach shore without anyone emailing a spreadsheet. | опис | |
| Entry | base | картка напряму | Safety & Compliance | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Assure | заголовок H3 | |
| Entry | base | картка напряму | Safety systems, certification and survey. The paper trail an inspection asks to see. | опис | `Н1` |
| Entry | base | картка напряму | Equipment | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Equip | заголовок H3 | |
| Entry | base | картка напряму | Navigation and bridge systems, safety equipment, onboard hardware. Supplied and surveyed under manufacturer accreditation. | опис | `Н1` |
| Entry | base | картка напряму | Technical Services | тег-етикетка | `Н1` |
| Entry | base | картка напряму | Asterra Care | заголовок H3 | |
| Entry | base | картка напряму | Installation, maintenance and support, 24x7x365 and multilingual. The part that decides whether the rest holds at 03:00. | опис | |
| Entry | base | картка напряму | Learn more | кнопка ×6 → solution-detail | `Н2` `Н6` |
| Entry | base | галузі | Eight sectors read eight different pages. | заголовок H2 | `Н1` |
| Entry | base | галузі | The same six areas, re-framed in the regulations, situations and proof of whoever is asking. Maritime is where the company started and where it goes deepest. | підводка | `Н1` |
| Entry | base | галузі | Maritime — Fleet operators, technical management, ship managers | пункт переліку (єдиний живий) | |
| Entry | base | галузі | Government — Public sector, defence · Enterprise — Distributed and remote sites · Energy — Offshore, critical infrastructure · Research — Survey and expedition · Emergency Response — Rapid deployment · Transportation — Logistics and fleet movement · Aerospace — Airborne and ground segment | перелік (усі `href="#"`) | |
| Entry | base | норми | Deadlines land on your fleet, not on ours. | заголовок H2 | `Н1` |
| Entry | base | норми | A dated requirement arrives and the question is always the same. What does it mean for these vessels, what closes it, and what will the inspector accept as evidence? Class societies answer the first part well. We answer the other two. | абзац | `Н1` |
| Entry | base | норми | See the requirements we close | кнопка → norm | `Н2` |
| Entry | base | норми · рядок | Cyber risk inside the safety management system | заголовок H3 | `Н1` |
| Entry | base | норми · рядок | Checked at annual DOC verification · closed by Asterra Shield | мікротекст | `ЗОВН` |
| Entry | base | норми · рядок | Cyber resilience for newbuilds | заголовок H3 | `Н1` |
| Entry | base | норми · рядок | Ships contracted from 1 July 2024 · closed by Shield and Equip | мікротекст | `ЗОВН` |
| Entry | base | норми · рядок | Crew connectivity at a reasonable charge | заголовок H3 | `Н1` |
| Entry | base | норми · рядок | In force December 2024, verified by PSC · closed by Asterra Connect | мікротекст | `ЗОВН` |
| Entry | base | норми · рядок | Details | кнопка ×3 → norm | `Н2` |
| Entry | base | доказ | What we are held to | заголовок H2 | `Н1` `Н4` |
| Entry | base | доказ | Accredited, not self-declared | заголовок H3 | |
| Entry | base | доказ | Capacity partners, navigation and bridge manufacturers, safety equipment makers. A partner name belongs to a third party and cannot be asserted by us. | абзац | `Н1` |
| Entry | base | доказ | Nothing behind a form | заголовок H3 | |
| Entry | base | доказ | Specifications, certificates and the figures you will have to defend upward sit on the page. No gate, no request-the-datasheet. | абзац | |
| Entry | base | доказ | One value per figure | заголовок H3 | `Н1` |
| Entry | base | доказ | Every number here has a single source. A figure that reads differently on two pages is a reliability signal, and we treat it as one. | абзац | |
| Entry | base | доказ | Capacity partner · Capacity partner · Navigation OEM · Bridge systems OEM · Safety equipment · Safety equipment | слоти під логотипи партнерів | `Н1` `Н6` |
| Entry | base | новини | Latest news | заголовок H2 | `Н3` `Н4` |
| Entry | base | новини | All news | кнопка → insights | `Н2` |
| Entry | base | новини | UR E26 and E27 now apply to every newbuild contracted from 1 July 2024 | заголовок новини H3 | `Н6` `ЗОВН` |
| Entry | base | новини | New capacity accreditation extends hybrid coverage in high latitudes | заголовок новини H3 | `Н6` |
| Entry | base | новини | What Port State Control asks for under the MLC connectivity amendments | заголовок новини H3 | `Н6` `ЗОВН` |
| Entry | base | новини | Regulation · Accreditation · Regulation | категорія новини (у розмітці — `class="date"`, дати немає) | |
| Entry | base | новини | Read more | кнопка ×3 → insights (сторінок статей не існує) | `Н2` `Н6` |
| Entry | base | завершальний блок | Arrive with a position, not a question. | заголовок H2 | |
| Entry | base | завершальний блок | Name what landed on the fleet, an audit date, a newbuild spec, a budget to defend, and we will show what closes it before anyone calls you. | абзац | |
| Entry | base | завершальний блок | Find what fits your fleet | кнопка → guided-matching | `Н2` `Н6` |
| Entry | base | завершальний блок | Start from a regulation | кнопка → norm | `Н2` |

### 1.2 Guided matching screen — `guided-matching.html` (+ empty · error · loading)

> ✅ **Переписано за [`voice.md`](./voice.md) 2026-08-27 — пілотний екран.** Це єдиний розділ
> таблиці з колонками **Було / Стало**; решта екранів лишається в однорядковій схемі, доки їх
> не перепишуть. Розмітка не змінювалася — правився тільки текст. `= без змін` означає, що
> рядок уже відповідав `voice.md` і його не чіпали.

| Екран | Стан | Зона | Було | Стало | Тип рядка | Позначки |
|---|---|---|---|---|---|---|
| Guided matching | base | смуга станів | The only screen in the main flow with a confirmed empty state. Loading resolves to Base or Error. | = без змін *(службовий хром — правилами не покривається)* | пояснення стану | `СЛУЖБ` |
| Guided matching | empty·error·loading | смуга станів | Guided matching is the only screen in the main flow with a confirmed empty state. | = без змін *(службовий хром)* | пояснення стану | `СЛУЖБ` |
| Guided matching | усі | hero | Tell us what landed on the fleet. | = без змін | заголовок H1 | ✅ проходить правило H1: твердження про роботу, словами словника |
| Guided matching | усі | hero | Three questions about the situation, not about the technology. You will get the area that closes it, **what paper it produces**, and where to read the detail. | Three questions about the situation, not about the technology. You will get the area that closes it, **the paper you keep**, and where to read the detail. | підзаголовок | **Н1-8** закрито |
| Guided matching | усі | hero | *(хлібних крихт немає)* | *(не додано — потребує розмітки)* | хлібні крихти | **Н3** відкрито · поза скоупом текстового проходу |
| Guided matching | усі | інтерв'ю | Your situation | = без змін | заголовок H2 | `Н4`, але `voice.md` явно визнав легенду форми прийнятною |
| Guided matching | усі | інтерв'ю | Change an answer to run the match again. | = без змін | мікротекст-пояснення | |
| Guided matching | усі | інтерв'ю | Where do you operate? | = без змін | підпис поля | ✅ жанр інтерв'ю — питання |
| Guided matching | усі | інтерв'ю | Maritime · Government · Enterprise · Energy · Research · Emergency Response · Transportation · Aerospace | = без змін | значення селекта | |
| Guided matching | усі | інтерв'ю | The next question changes with the **sector**. These are the situations recorded for **maritime**. | The next question changes with the **industry**. These are the situations recorded for **Maritime**. | підказка під полем | **Н1-5** закрито · регістр власної назви |
| Guided matching | усі | інтерв'ю | What started this requirement? | = без змін | підпис поля | ✅ `requirement` = те, що впало на цей флот |
| Guided matching | усі | інтерв'ю | Compliance and audit · Lifecycle · Commercial | = без змін | групи значень селекта | |
| Guided matching | усі | інтерв'ю | Cyber risk has to be in the **SMS** by the next **DOC** verification | Cyber risk has to be in the **safety management system** before the next **Document of Compliance** verification | значення селекта | розкриття абревіатур при першій появі на сторінці |
| Guided matching | усі | інтерв'ю | A Port State Control inspection | = без змін | значення селекта | ✅ PSC уже розкрито |
| Guided matching | усі | інтерв'ю | Crew connectivity requirements under **MLC** | Crew connectivity under **MLC 2006** | значення селекта | повна форма коду норми при першій згадці |
| Guided matching | усі | інтерв'ю | Newbuild ICT specification · Standardising IT across the **operation** · An IT upgrade or refresh · A dry-docking window is coming up | Newbuild ICT specification · Standardising IT across the **fleet** · An IT upgrade or refresh · A dry-docking window is coming up | значення селекта | **Н1-7** закрито: `operation` — не морське слово |
| Guided matching | усі | інтерв'ю | The connectivity budget line is up for defence · A cyber budget that has to stretch · A crew access policy has been asked for | = без змін | значення селекта | |
| Guided matching | усі | інтерв'ю | Match my situation | = без змін | кнопка (submit) | ✅ канонічний напис, словник §2 |
| Guided matching | усі | інтерв'ю | Answered: **maritime** · cyber risk in the SMS | Answered: **Maritime** · cyber risk in the SMS | мікротекст-пояснення | регістр власної назви · `SMS` тут друга згадка, коротка форма дозволена |
| Guided matching | усі | результат | What closes it | = без змін | заголовок H2 | ✅ несе канонічне дієслово `closes` |
| Guided matching | base | результат | 2 areas matched | = без змін | повідомлення стану | ✅ `area` — канонічний термін |
| Guided matching | empty | результат | No confident match | = без змін | повідомлення стану | |
| Guided matching | error | результат | Matching unavailable | = без змін | повідомлення стану | |
| Guided matching | loading | результат | Matching your situation | = без змін | повідомлення стану (`role="status"`) | ✅ правило завантаження: виконується операція — назви операцію |
| Guided matching | base | результат | Primary match · Also relevant | = без змін | ранг збігу | ✅ принцип 2 — ієрархія заявлена |
| Guided matching | base | результат | Asterra Shield · Asterra Equip | = без змін | заголовок H3 | ✅ повна форма назви продукту |
| Guided matching | base | результат | Cybersecurity · Equipment | = без змін | підпис напряму | ✅ назви area |
| Guided matching | base | результат | **MSC.428(98)** requires cyber risk to be addressed inside the safety management system, and it is checked at the annual Document of Compliance verification. Shield is specified against that verification… | **IMO MSC.428(98)** requires cyber risk to be addressed inside the safety management system, and it is checked at the annual Document of Compliance verification. Shield is specified against that verification… | обґрунтування збігу | повна форма з органом при першій згадці · `Shield` — коротка форма після повної, дозволено |
| Guided matching | base | результат | Closes — **IMO MSC.428(98)** · IACS UR E26/E27 · IEC 62443 | Closes — **MSC.428(98)** · IACS UR E26/E27 · IEC 62443 | пара dt/dd | подальша згадка на сторінці — коротка форма |
| Guided matching | base | результат | **You get** — A documented cyber risk assessment, procedures written into the SMS, and the accreditation of the manufacturers whose systems are installed | **You keep** — A documented cyber risk assessment, procedures written into the SMS, and the accreditation of the manufacturers whose systems are installed | пара dt/dd | **Н1-8** закрито: канонічна конструкція «You keep: …» |
| Guided matching | base | результат | Fits — A managed fleet standardising across vessels, which matches the situation you described | = без змін | пара dt/dd | ✅ `fleet` / `vessels` вжиті за правилом Н1-7 |
| Guided matching | base | результат | **Read the full solution** (primary) | **Read Asterra Shield** | кнопка → solution-detail | **Н2-2** закрито: напис називає предмет |
| Guided matching | base | результат | **Read the full solution** (secondary) | **Read Asterra Equip** | кнопка → solution-detail | **Н2-2** закрито |
| Guided matching | base | результат | Cyber resilience under **UR E26 and E27** reaches onboard systems… | Cyber resilience under **UR E26/E27** reaches onboard systems… | обґрунтування збігу | прозова форма коду заборонена |
| Guided matching | empty | результат | We cannot name an area for this with confidence. | = без змін | заголовок повідомлення H3 | ✅ правило порожнього стану, речення 1 |
| Guided matching | empty | результат | What you described does not map cleanly onto one of the six areas. Saying so is more useful than a recommendation you would have to unpick later, in front of an auditor or a budget holder. | = без змін | повідомлення стану | ✅ речення 2: чому чесніше, ніж підсунути близьке |
| Guided matching | empty | результат | Change your answer | = без змін | кнопка | ✅ канонічний напис, словник §2 |
| Guided matching | error | результат | The match did not run. | = без змін | заголовок повідомлення H3 | ✅ формула «The ⟨об'єкт⟩ did not ⟨дієслово⟩» |
| Guided matching | error | результат | Your answers are still on the left and were not lost. Sending them again runs the match a second time. | = без змін | повідомлення стану | ✅ каже, що робити; знімає страх дубля |
| Guided matching | error | результат | **Try again** | **Match my situation again** | кнопка | **Н2-5** закрито: повтор = дієслово читача + «again» |
| Guided matching | loading | результат | *(скелетони без тексту)* | = без змін | плейсхолдер завантаження | |
| Guided matching | усі | відкат | **Not what you expected?** | **Recognition beats guidance for some buyers.** | заголовок H3 | **Н1-12** закрито: твердження про доступне, не питання про промах читача |
| Guided matching | усі | відкат | Recognition beats guidance for some buyers, and an open question is worth a conversation either way. | Finding your own industry on the page can be faster than answering three questions. An open question is worth a conversation either way. | абзац | клауза підвищена в заголовок; `industry` замість `sector` |
| Guided matching | усі | відкат | **Browse by sector** | **Read the Maritime page** | кнопка → industry | **Н1-5 + Н2** закрито · ⚠️ див. відкрите питання нижче |
| Guided matching | усі | відкат | **Ask an expert** | **Talk to an expert** | кнопка → inquiry | **Н2-1** закрито: канонічний напис |

**Що свідомо не змінено на цьому проході:**

1. **Шапка й футер** — глобальні зони, ідентичні на всіх 28 сторінках. Правки з `voice.md`
   (`Latest News` → `Latest news`, `Work e-mail` → `Work email`) правляться **одним проходом
   по всіх 28 файлах**, інакше цей екран розійдеться з рештою. Записано як окреме завдання.
2. **Хлібні крихти** — їх немає, а додавання — це розмітка, не текст. Лишається як **Н3**.
3. **Смуга станів і сервісне дерево** — службовий хром, `voice.md` його не покриває.
4. **«manufacturers»** у рядку `You keep` — це загальне слово в описовому реченні, а не одна з
   трьох канонічних категорій партнера (Н1-6 керує назвами категорій, не загальним вжитком).

**Відкрите питання, що спливло під час перепису:**

> У словнику `voice.md` §2 канонічні написи задані для чотирьох напрямків — → Inquiry,
> → Solution detail, → Norm, → Guided matching. **Напрямку → Industry там немає.** Тимчасово
> вжито `Read the Maritime page` за загальним правилом кнопки (читач знає предмет — назви
> предмет), але канонічний рядок для цього переходу треба ухвалити й дописати у словник,
> інакше на наступних екранах він розійдеться знову.

### 1.3 Industry screen — `industry.html`, інстанс Maritime (+ error · loading)

> ✅ **Переписано 2026-08-27 за voice.md — 30 правок у 3 файлах** (base 22 · error 5 · loading 3).
> Спільні зони трьох файлів звірені diff-ом — посимвольно ідентичні (єдина лишена розбіжність —
> рівень заголовка відкату H3/H2, розмітка). Інвентар нижче — стан ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| base | ситуації · рядок 1, H3 | Cyber has to be in the SMS before the next DOC verification | Cyber has to be in the safety management system before the next Document of Compliance verification | розкриття SMS/DOC |
| base | ситуації · meta ×3 | answered by Asterra Shield · answered by Asterra Connect · answered by Shield and Equip | closed by Asterra Shield · closed by Asterra Connect · closed by Asterra Shield and Asterra Equip | канон closed by + повна форма продуктів |
| base | ситуації · рядок 2, H3 | …since December 2024 PSC can ask too | …since 23 December 2024 Port State Control can ask too | дата + PSC |
| base | ситуації · рядок 3, H3 | A newbuild contract brings UR E26 and E27 with it | A newbuild contract brings IACS UR E26/E27 with it | код: ніколи прозою, перша згадка повна |
| base | ситуації · meta 4–5 | Equip and Care · Connect and Care | Asterra Equip and Asterra Care · Asterra Connect and Asterra Care | повна форма до короткої |
| base | ситуації · hint | Every regulation we close, with the paper each one leaves behind: browse the regulations. | Every regulation, with the paper you keep: see the regulations we close. | Н1-8 + Н2-3 |
| base | напрями · H2 | What we do for fleets | Six areas, each written in fleet terms. | Н4 |
| base | напрями · рядок Equip | …under manufacturer accreditation | …under OEM accreditation | Н1-6 |
| base | екіпаж · абзац | …since December 2024 it is also a compliance matter… verified by Port State Control. | …since 23 December 2024… verified by PSC. | дата повна; PSC далі коротко |
| base | екіпаж · кнопка | Read about crew access and control | Read the crew connectivity rules | кнопка без канону → предмет за нав |
| base | доказ · Regulation-anchored | …each naming its paper on the solution page… | …each naming the paper you keep on the solution page… | Н1-8 |
| base | доказ · Accredited | Capacity partners, navigation and bridge manufacturers, safety equipment makers. | Satellite capacity partners, navigation and bridge OEMs, safety equipment manufacturers. | Н1-6 |
| base | доказ · hint | …and a sector case… | …and an industry case… | Н1-5 |
| усі 3 | відкат · заголовок | Nothing above looks like your situation? | A match is still three questions away. | Н1-12 |
| усі 3 | відкат · кнопка | Try guided matching | Find what fits your fleet | Н2-4 |
| error | зона стану · H2 | The sector content did not load. | The industry content did not load. | формула + Н1-5 |
| error | зона стану · тіло | The maritime content… The guided path below is served separately and still works. | The Maritime industry content… Guided matching below is served separately and still works. | Н1-5 + механізм своїм ім'ям |
| loading | зона стану | Loading maritime content | Loading the Maritime industry content | формула «Loading ⟨зона⟩» |

Свідомо лишено: «What stands behind this» (Н1-9) · «See what closes it» ×5 (канон — назва
рішення читачеві ще не відома) · «Support commitment» (✅ Н1-10) · hero цілком.


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| base | 7 тверджувальних заголовків (H2 ситуацій, 5 H3 реглядок, H2 екіпажу) | без крапки | з крапкою | Р1 |
| base | екіпаж · H2 | …before they ask about the ship. | …before they ask about the vessel. | Д3 / Н1-7 |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Industry | усі | смуга станів | Sector content loads; empty is not modelled: failing to recognise yourself is the recog decision, not an empty result. Loading resolves to Base or Error. | пояснення стану | `СЛУЖБ` |
| Industry | усі | hero | Industries · Maritime | хлібні крихти | `Н1` |
| Industry | усі | hero | Run the fleet. We answer for the systems. | заголовок H1 | |
| Industry | усі | hero | Connectivity, cyber, digital, safety and bridge equipment for fleet operators, technical management and ship managers. Specified, installed, surveyed and supported by one accountable party, and written up in the language the requirement arrives in: class, certificate, survey, budget. | підзаголовок | |
| Industry | усі | hero | Find what fits your fleet | кнопка → guided-matching | `Н2` `Н6` |
| Industry | base | ситуації | The requirement usually arrives with a date on it | заголовок H2 | `Н1` |
| Industry | base | ситуації | A docking window, an inspection, an audit, a newbuild contract. It rarely asks which technology you prefer; it names a regulation, sets a deadline and expects paper. This is what lands on fleets now, and what closes each one. | підводка | `Н1` |
| Industry | base | ситуації · рядок | Cyber has to be in the SMS before the next DOC verification | заголовок H3 | `ЗОВН` |
| Industry | base | ситуації · рядок | IMO MSC.428(98) · answered by Asterra Shield | мікротекст | `ЗОВН` `Н1` |
| Industry | base | ситуації · рядок | Crew are asking for internet, and since December 2024 PSC can ask too | заголовок H3 | `ЗОВН` |
| Industry | base | ситуації · рядок | MLC 2006 amendments · answered by Asterra Connect | мікротекст | `ЗОВН` `Н1` |
| Industry | base | ситуації · рядок | A newbuild contract brings UR E26 and E27 with it | заголовок H3 | `ЗОВН` |
| Industry | base | ситуації · рядок | Ships contracted from 1 July 2024 · answered by Shield and Equip | мікротекст | `ЗОВН` `Н1` |
| Industry | base | ситуації · рядок | The docking window is when hardware actually happens | заголовок H3 | |
| Industry | base | ситуації · рядок | Installation and survey planned around the dock · Equip and Care | мікротекст | `Н1` |
| Industry | base | ситуації · рядок | The connectivity line is up for defence again | заголовок H3 | |
| Industry | base | ситуації · рядок | Figures that survive the budget review · Connect and Care | мікротекст | `Н1` |
| Industry | base | ситуації | See what closes it | кнопка ×5 → solution-detail | `Н2` `Н6` |
| Industry | base | ситуації | Every regulation we close, with the paper each one leaves behind: browse the regulations. | підказка з посиланням → norm | `Н1` `Н2` |
| Industry | base | напрями | What we do for fleets | заголовок H2 | `Н4` |
| Industry | base | напрями | Connectivity the crew can use and the office can defend | заголовок H3 | |
| Industry | base | напрями | Satellite and terrestrial capacity as one managed service: OrbitReach on the satellite side, GroundLink in port and along the coast, failover between them designed in. The usage rules stay with you, and the invoice holds no surprises for whoever signs it. | опис | `Н6` |
| Industry | base | напрями | Cyber that survives the DOC verification | заголовок H3 | `ЗОВН` |
| Industry | base | напрями | Network, device, data and operational protection specified against IEC 62443, with the risk assessment and SMS procedures prepared before the auditor asks. The evidence exists first; the verification reads it. | опис | `Н6` `ЗОВН` |
| Industry | base | напрями | Read Asterra Connect · Read Asterra Shield | кнопки → solution-detail | `Н2` |
| Industry | base | напрями | Asterra Intelligence — Engine data, condition monitoring and voyage records ashore | рядок переліку | |
| Industry | base | напрями | Asterra Assure — Safety systems and certification, survey-ready | рядок переліку | |
| Industry | base | напрями | Asterra Equip — Bridge and navigation equipment under manufacturer accreditation | рядок переліку | `Н1` |
| Industry | base | напрями | Asterra Care — Installation in the dock, support 24x7x365 and multilingual | рядок переліку | |
| Industry | base | екіпаж | Crew ask about the internet before they ask about the ship | заголовок H2 | `Н6` |
| Industry | base | екіпаж | Connectivity has become part of why crew choose an employer and why they stay, and since December 2024 it is also a compliance matter: MLC 2006 requires crew internet access at a reasonable charge, verified by Port State Control. Giving crew what they ask for without losing control of cost is a rule set of its own, and it has its own page. | абзац | `Н6` `ЗОВН` |
| Industry | base | екіпаж | Read about crew access and control | кнопка → crew-access | `Н2` `Н3` |
| Industry | base | доказ | What stands behind this | заголовок H2 | `Н1` `Н4` |
| Industry | base | доказ | Regulation-anchored — MLC 2006, MSC.428(98) and UR E26/E27, each dated, each naming its paper on the solution page it belongs to. | H3 + абзац | `ЗОВН` `Н1` |
| Industry | base | доказ | Accredited, not self-declared — Capacity partners, navigation and bridge manufacturers, safety equipment makers. Third-party names, not our own claims. | H3 + абзац | `Н1` `Н6` |
| Industry | base | доказ | Support commitment — 24x7x365 and multilingual, carried as a commitment rather than a claim of scale. | H3 + абзац | `Н1` `Н6` |
| Industry | base | доказ | Named-fleet scale and a sector case would be invented facts for a fictional brand and stay empty: [TBD — no source] | підказка + порожній слот | `[TBD]` `Н1` |
| Industry | error | зона стану | The sector content did not load. | заголовок повідомлення H2 | `Н1` |
| Industry | error | зона стану | The maritime content, situations, regulations and proof, did not arrive. The guided path below is served separately and still works. | повідомлення стану | `Н1` |
| Industry | loading | зона стану | Loading maritime content | повідомлення стану (`role="status"`) | |
| Industry | base | відкат | Nothing above looks like your situation? | заголовок **H3** | `Н1` |
| Industry | error·loading | відкат | Nothing above looks like your situation? | заголовок **H2** — рівень змінюється між станами | `Н1` |
| Industry | усі | відкат | Three questions about what actually landed on the fleet, and you get the area that closes it. | абзац | `Н1` |
| Industry | усі | відкат | Try guided matching | кнопка → guided-matching | `Н2` |

### 1.4 Solution detail screen — `solution-detail.html`, інстанс Asterra Shield (+ error · loading)

> ✅ **Переписано 2026-08-27 за voice.md — 16 правок у 3 файлах.** Спільні зони — 8/8
> diff-порівнянь ідентичні; порядок перших згадок DOC·SMS·PSC·кодів звірено машинно.
> Інвентар нижче — стан ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| усі 3 | hero · кнопка → norm | Read the norm it answers | See the regulations it closes | Н2-3; «it» замість «we» — див. §5 |
| base | проблема · H2 | The audit is where cyber fails first | The audit is where cyber fails first**.** | крапка заголовка-речення |
| base | проблема · абзац | the annual DOC verification | the annual Document of Compliance verification | розкриття DOC |
| base | проблема · абзац | Newbuilds contracted from July 2024 arrive with UR E26 and E27 on top. | Newbuilds contracted from 1 July 2024 arrive with IACS UR E26/E27 on top. | дата + код |
| base | ситуації · H2 | Five ways fleets arrive at this page | Five situations bring fleets here. Two of them carry a date. | Н4, ранг за зразком Entry |
| base | ситуації · рядок 3 | …not per-ship improvisation | …not per-vessel improvisation | Н1-7 |
| base | ситуації · рядок 5 | PSC named cyber in a finding | Port State Control named cyber in a finding | розкриття PSC |
| base | реглядки · кнопки ×2 | Read the norm | Read MSC.428(98) · Read UR E26/E27 | Н2-3 |
| base | реглядка 2 · H3 | IACS UR E26 / E27 | UR E26/E27 | скісна без пробілів; коротка (повна вище) |
| base | spec · H2 | The facts for the budget file | These figures do not change when you retell them. | Н4, анкер jtbd §10.4 |
| base | розвилка · проза | this solution and your sector · Framed for each sector it serves · read the norm it answers to | …your industry · …each industry it serves · …read the regulation it answers | Н1-5 + Н1-2 |
| base | розвилка · кнопки | Verify the paper · Try guided matching | Read MSC.428(98) · Find what fits your fleet | Н2-3 + Н2-4 |

Свідомо лишено: «What stands behind it» (Н1-9) · «You keep: …» ×2 і spec-значення (канонічні)
· «Does it close your requirement?» (розвилка flow, не відкат) · «ships contracted from
1 July 2024» (ЗОВН-формула IACS).


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Solution detail | усі | смуга станів | Page and proof load together (O5 attributes); empty is not modelled for a single solution's page. Loading resolves to Base or Error. | пояснення стану | `СЛУЖБ` |
| Solution detail | усі | hero | Solutions & Services · Cybersecurity | хлібні крихти | `Н1` |
| Solution detail | усі | hero | Asterra Shield | заголовок H1 | |
| Solution detail | усі | hero | Cyber protection for fleets, specified against the framework your auditor names, with the evidence prepared before the verification rather than after it. | підзаголовок | `Н6` |
| Solution detail | усі | hero | Talk to an expert | кнопка → inquiry | `Н2` |
| Solution detail | усі | hero | Read the norm it answers | кнопка → norm | `Н1` `Н2` |
| Solution detail | base | проблема | The audit is where cyber fails first | заголовок H2 | |
| Solution detail | base | проблема | An attack on a vessel is survivable; most are contained. What sinks budgets and reputations is the annual DOC verification, when the auditor asks where cyber risk lives in the safety management system and the honest answer is nowhere yet. Newbuilds contracted from July 2024 arrive with UR E26 and E27 on top. | абзац | `ЗОВН` |
| Solution detail | base | проблема | Shield is the protection and the evidence in one specification: what runs on the network, what runs on devices, and what the auditor reads. | абзац | |
| Solution detail | base | ситуації | Five ways fleets arrive at this page | заголовок H2 | `Н4` |
| Solution detail | base | ситуації | The DOC verification is booked — Cyber risk has to be readable in the SMS before that date | рядок переліку | `ЗОВН` |
| Solution detail | base | ситуації | A newbuild is contracted — UR E26/E27 applies to ships contracted from 1 July 2024 | рядок переліку | `ЗОВН` |
| Solution detail | base | ситуації | The fleet is being standardised — One specification across vessels, not per-ship improvisation | рядок переліку | |
| Solution detail | base | ситуації | The cyber budget has to stretch — One decision, sized against everything else the budget carries | рядок переліку | |
| Solution detail | base | ситуації | PSC named cyber in a finding — Findings close with evidence, not assurances | рядок переліку | `ЗОВН` |
| Solution detail | base | норми й папір | What it closes, and the paper you keep | заголовок H2 | `Н1` |
| Solution detail | base | норми й папір | The link the market does not publish: the regulation, the solution that answers it, and what is left on your desk once it is closed. | підводка | `Н1` |
| Solution detail | base | норми й папір | IMO MSC.428(98) | заголовок H3 | `ЗОВН` `Н1` |
| Solution detail | base | норми й папір | You keep: a documented cyber risk assessment and SMS procedures, read at the annual DOC verification | мікротекст | `Н1` |
| Solution detail | base | норми й папір | IACS UR E26 / E27 | заголовок H3 | `ЗОВН` |
| Solution detail | base | норми й папір | You keep: the newbuild cyber resilience file for ships contracted from 1 July 2024 | мікротекст | `ЗОВН` |
| Solution detail | base | норми й папір | IEC 62443 | заголовок H3 | `ЗОВН` |
| Solution detail | base | норми й папір | The framework the whole specification is written against | мікротекст | |
| Solution detail | base | норми й папір | Read the norm | кнопка ×2 → norm | `Н1` `Н2` |
| Solution detail | base | spec-таблиця | The facts for the budget file | заголовок H2 | `Н4` |
| Solution detail | base | spec-таблиця | Written to be pasted into the case you will have to defend, one canonical value per figure. | підводка | `Н1` |
| Solution detail | base | spec-таблиця | Scope of protection — Network, device, data and operational systems | рядок таблиці | |
| Solution detail | base | spec-таблиця | Deployment — Per vessel and fleet-wide; newbuild and retrofit | рядок таблиці | |
| Solution detail | base | spec-таблиця | Specified against — IEC 62443; evidence structured for MSC.428(98) and UR E26/E27 | рядок таблиці | `ЗОВН` |
| Solution detail | base | spec-таблиця | Monitoring and response — [TBD — no source] | рядок таблиці | `[TBD]` |
| Solution detail | base | spec-таблиця | Sizing and throughput — [TBD — no source] | рядок таблиці | `[TBD]` |
| Solution detail | base | spec-таблиця | Support — 24x7x365, multilingual | рядок таблиці | |
| Solution detail | base | spec-таблиця | Empty cells are deliberate: a figure for a fictional brand would be an invented fact. | підказка | |
| Solution detail | base | доказ | What stands behind it | заголовок H2 | `Н1` `Н4` |
| Solution detail | base | доказ | Regulation-anchored — Every claim above maps to a dated requirement, and the paper is named next to the claim it belongs to. | H3 + абзац | `Н1` `Н6` |
| Solution detail | base | доказ | Accredited, not self-declared — The certifying body is named beside each approval. A specific approval for a fictional product is not claimed: [TBD — no source] | H3 + абзац + слот | `[TBD]` `Н6` |
| Solution detail | base | доказ | Support commitment — 24x7x365 and multilingual, carried as a commitment rather than a claim of scale. | H3 + абзац | `Н1` `Н6` |
| Solution detail | base | доказ | Uptime figures and named client cases stay empty by rule: [TBD — no source] | підказка + слот | `[TBD]` |
| Solution detail | base | розвилка | Does it close your requirement? | заголовок H2 | `Н1` |
| Solution detail | base | розвилка | If the evidence looks right, talk to an expert; your context, this solution and your sector, goes with the request. If you want the paper verified first, read the norm it answers to. If it does not fit, guided matching takes three questions. Framed for each sector it serves, Maritime first. | абзац із посиланням → industry | `Н1` |
| Solution detail | base | розвилка | Talk to an expert | кнопка → inquiry | `Н2` `Н6` |
| Solution detail | base | розвилка | Verify the paper | кнопка → norm | `Н1` `Н2` |
| Solution detail | base | розвилка | Try guided matching | кнопка → guided-matching | `Н2` |
| Solution detail | base | розвилка | Written to be forwarded upward: self-contained, dated, one canonical value per figure. Need internal approval first? The approval materials library packages what you send up. | підказка з посиланням → approval-materials | `Н1` |
| Solution detail | error | зона стану | The page did not load. | заголовок повідомлення H2 | |
| Solution detail | error | зона стану | The solution content and its proof load together; neither arrived. Reloading fetches the same page once more. | повідомлення стану | |
| Solution detail | error | зона стану | Reload this page | кнопка → solution-detail | `Н2` |
| Solution detail | loading | зона стану | Loading the page and its proof | повідомлення стану (`role="status"`) | |

### 1.5 Norm screen — `norm.html`, інстанс IMO MSC.428(98) (станів немає)

> ✅ **Переписано 2026-08-27 за voice.md — 7 правок.** Видимого «norm» у `<main>` — нуль.
> Інвентар нижче — стан ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| base | hero · крихти | Regulation · one page per dated norm | Regulations · IMO MSC.428(98) | крихти «розділ · інстанс» + Н1-2 |
| base | hero · підзаголовок | …and what paper you are left holding. | …and the paper you keep. | Н1-8 |
| base | зведення · H2 | The requirement at a glance | The requirement returns every year. | Н4 (факт піднято з dd Recurrence) |
| base | папір · H2 | The paper you hold afterwards | The paper you keep | Н1-8 |
| base | папір + розвилка · проза | …what this norm leaves on your desk… · …bring the norm with you… | …what this regulation leaves… · …bring the regulation with you… | Н1-2 |
| base | розвилка · кнопка | Ask an expert about this norm | Talk to an expert about this regulation | Н2-1 + предмет |

Свідомо лишено: «What the auditor actually asks» і «One decision closes it» (зразкові) ·
«Does the paper check out?» (вузол рішення paperOk, не відкат) · dl-зведення (ЗОВН) ·
застереження про класифікаційне товариство (принцип 3).


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| base | рішення · H2 | One decision closes it | One decision closes it. | Р1 |
| base | зведення · dd ×5 | без крапок | з крапками (жанр «визначення») | Р6 |
| base | зведення · dd In effect / Recurrence | перша згадка DOC коротка, повна — друга (інверсія) | повна форма в «In effect» («…annual Document of Compliance verification after 1 January 2021.»), коротка в «Recurrence» («Read at every annual DOC verification.») | Р6 + правило першої згадки |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Norm | base | смуга станів | No states exist for this screen in the main flow. flows.md attaches no state nodes to the Norm screen in MAIN; the R1 flow models them, and that discrepancy is recorded in _screens.md, deliberately unresolved here. | пояснення стану | `СЛУЖБ` |
| Norm | base | hero | Regulation · one page per dated norm | хлібні крихти | `Н1` `Н3` |
| Norm | base | hero | IMO MSC.428(98) | заголовок H1 | `ЗОВН` |
| Norm | base | hero | Maritime cyber risk management in the safety management system. What it means for your vessels, what closes it, and what paper you are left holding. | підзаголовок | `Н1` |
| Norm | base | зведення | The requirement at a glance | заголовок H2 | `Н1` `Н4` |
| Norm | base | зведення | What it is — An IMO resolution, adopted by the Maritime Safety Committee | пара dt/dd | `ЗОВН` |
| Norm | base | зведення | In effect — Cyber risks addressed in the safety management system no later than the first annual DOC verification after 1 January 2021 | пара dt/dd | `ЗОВН` |
| Norm | base | зведення | Recurrence — Read at every annual Document of Compliance verification | пара dt/dd | `ЗОВН` |
| Norm | base | зведення | Applies to — Companies and ships operating under the ISM Code | пара dt/dd | `ЗОВН` |
| Norm | base | зведення | Verified through — The DOC audit | пара dt/dd | `ЗОВН` |
| Norm | base | пояснення | What the auditor actually asks | заголовок H2 | |
| Norm | base | пояснення | Cyber risk has to be identified and addressed inside the safety management system, the same system that already carries every other operational risk. The auditor does not ask whether you bought a product. They ask where cyber risk lives in the SMS and what evidence sits behind it. | абзац | `ЗОВН` |
| Norm | base | пояснення | This is a working summary. The authoritative interpretation belongs to your classification society; bring their guidance to the audit, not ours. | підказка-застереження | |
| Norm | base | рішення | One decision closes it | заголовок H2 | `Н1` |
| Norm | base | рішення | Asterra Shield | заголовок H3 | |
| Norm | base | рішення | Protection and audit evidence in one specification, so the answer to the auditor's question exists before the question is asked | мікротекст | `Н6` |
| Norm | base | рішення | Read Asterra Shield | кнопка → solution-detail | `Н2` |
| Norm | base | папір | The paper you hold afterwards | заголовок H2 | `Н1` `Н4` |
| Norm | base | папір | A documented cyber risk assessment and procedures written into the SMS. That is what the DOC auditor reads, and what this norm leaves on your desk once it is closed. | абзац | `Н1` `Н6` |
| Norm | base | розвилка | Does the paper check out? | заголовок H2 | `Н1` |
| Norm | base | розвилка | If this is the evidence your auditor accepts, bring the norm with you and start the conversation from a position. | абзац | `Н1` |
| Norm | base | розвилка | Ask an expert about this norm | кнопка → inquiry | `Н1` `Н2` |

### 1.6 Inquiry screen — `inquiry.html` (+ loading · error · success)

> ✅ **Переписано 2026-08-27 за voice.md — 20 правок у 4 файлах.** Спільні зони поза STATE
> REGION витягнуті скриптом і звірені: base↔error↔loading↔success — порожній diff. ВВІД-значення
> недоторкані (підтверджено grep-ом). Інвентар нижче — стан ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| усі 4 | hero · підзаголовок | One step. No wizard, no gate. Routed to a specialist who answers in your operating terms, not a queue. | One step. No wizard, no gate. The request goes to a specialist for your industry, and the reply comes from that specialist. | принцип 1 + Н1-5 |
| base·error | форма · підпис поля | Work e-mail | Work email | словник §3 |
| base·error | форма · підказка Solution of interest | Carried from the page you came from. Edit it if that is not what you are asking about. | Filled in from the page you came from; edit it if you mean a different solution. | Н6-8 + правило передзаповненого |
| base·error | форма · routing-мікротекст | Routed to a specialist for your sector who answers in your operating terms. A person replies, not a queue. | The request goes to a specialist for your industry. The reply comes from that specialist. | принцип 1 (антиприклад voice.md) |
| success | зведення · dd Next | Routed to a specialist for your sector; a person replies in your operating terms | Routed to a specialist for your industry; the reply comes from that specialist | принцип 1 + Н1-5 |

Свідомо лишено: H1 «Talk to an expert.» і «Edit either in the form…» на success (Н6-9 —
дефект рівня розмітки: правка лише success розвела б спільні зони станів) · «What landed on
your fleet?» (питання-запрошення до розповіді — зафіксовано рішенням) · формули станів
(усі ✅). Кандидат наступного проходу: success-абзац «The specialist reads your context before
replying…» — та сама родина самотверджень, без позначки в інвентарі.


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| усі 4 | контекст · H2 | Your context travels with the request | Your context travels with the request. | Р1 |
| success | зона стану · абзац | The specialist reads your context before replying, so the conversation does not start from "so what do you offer?". Context passed, ready position achieved. | The request went out with your context attached, so the conversation does not start from "so what do you offer?". | Р9 — перевірюваний факт замість обіцянки за спеціаліста; телеграфний дубль H2 і dl знято |
| усі 4 | hero · підзаголовок | One step. No wizard, no gate. The request goes to a specialist for your industry, and the reply comes from that specialist. | One step. No wizard, no gate. | Д1 — дубль формули з routing-мікротекстом; зобов'язання лишилося біля кнопки |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Inquiry | усі | смуга станів | The only screen with a confirmed success state: the end state of the main job. Sending resolves to Success or Error. | пояснення стану | `СЛУЖБ` |
| Inquiry | усі | hero | Talk to an expert. | заголовок H1 | `Н1` `Н3` |
| Inquiry | усі | hero | One step. No wizard, no gate. Routed to a specialist who answers in your operating terms, not a queue. | підзаголовок | `Н6` |
| Inquiry | усі | контекст | Your context travels with the request | заголовок H2 | `Н1` |
| Inquiry | усі | контекст | Carried from the page you came from, so the conversation starts where you already are: Asterra Shield, Cybersecurity · Maritime. Edit either in the form if that is not what you are asking about. | абзац | `Н6` — на success форми вже немає, а рядок лишається |
| Inquiry | base·error | форма | Your name | підпис поля | |
| Inquiry | base·error | форма | Company | підпис поля | |
| Inquiry | base·error | форма | Work e-mail | підпис поля | |
| Inquiry | base·error | форма | Industry | підпис поля | `Н1` |
| Inquiry | base·error | форма | Maritime · Government · Enterprise · Energy · Research · Emergency Response · Transportation · Aerospace | значення селекта | |
| Inquiry | base·error | форма | Solution of interest | підпис поля | `Н1` |
| Inquiry | base·error | форма | Carried from the page you came from. Edit it if that is not what you are asking about. | підказка під полем | `Н6` — дослівний повтор блока «контекст» вище |
| Inquiry | base·error | форма | Your role or request type | підпис поля | `Н1` |
| Inquiry | base·error | форма | Select a role | плейсхолдер селекта | |
| Inquiry | base·error | форма | Fleet IT / IT manager · Technical superintendent · Owner or operator · Procurement · Reseller or partnership · Other | значення селекта | |
| Inquiry | base·error | форма | Frame agreements and reseller requests route differently; saying so here saves the third meeting. | підказка під полем | |
| Inquiry | base·error | форма | What landed on your fleet? | підпис поля | `Н6` |
| Inquiry | base | форма | Send the request | кнопка (submit) | `Н2` |
| Inquiry | error | форма | Send the request again | кнопка (submit) | `Н2` |
| Inquiry | base·error | форма | Routed to a specialist for your sector who answers in your operating terms. A person replies, not a queue. | мікротекст-пояснення | `Н1` `Н6` |
| Inquiry | error | форма | D. Petrou · Ship management company, 18 vessels · name@company.com | передзаповнені значення полів | `ВВІД` |
| Inquiry | error | форма | Asterra Shield (Cybersecurity) | передзаповнене значення поля | |
| Inquiry | error·loading·success | форма / зведення | Cyber risk has to be in the SMS before our next DOC verification. What changes on board, and what evidence do we hold afterwards? | текст користувача в полі повідомлення | `ВВІД` |
| Inquiry | error | зона стану | The request did not send. | заголовок повідомлення H2 | `Н1` |
| Inquiry | error | зона стану | Everything you typed is still here. Sending again submits the same request once. | повідомлення стану | |
| Inquiry | loading | зона стану | Sending your request | заголовок повідомлення H2 (`role="status"`) | |
| Inquiry | loading | зона стану | This takes a moment; do not resend. Everything below travels with it. | повідомлення стану | |
| Inquiry | loading·success | зведення | Solution — Asterra Shield (Cybersecurity) | пара dt/dd | `Н1` |
| Inquiry | loading·success | зведення | Industry — Maritime | пара dt/dd | `Н1` |
| Inquiry | loading·success | зведення | Role — Fleet IT / IT manager | пара dt/dd | |
| Inquiry | loading·success | зведення | Message — (текст користувача) | пара dt/dd | `ВВІД` |
| Inquiry | success | зона стану | Request sent. You arrive with a position. | заголовок повідомлення H2 | `Н1` |
| Inquiry | success | зона стану | The specialist reads your context before replying, so the conversation does not start from "so what do you offer?". Context passed, ready position achieved. | повідомлення стану | |
| Inquiry | success | зведення | Next — Routed to a specialist for your sector; a person replies in your operating terms | пара dt/dd | `Н6` |

### 1.7 Crew access & control screen — `crew-access.html` (+ empty · error · loading)

> ✅ **Переписано 2026-08-27 за voice.md — 13 правок у 4 файлах** (base 5 · empty 3 · error 3 ·
> loading 2). Спільні зони чотирьох файлів ідентичні (крім зафіксованого рівня H3/H2 відкату).
> Ринкові цифри (ЗОВН) недоторкані. Інвентар нижче — стан ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| усі 4 | hero · кнопка | Ask about your policy | Talk to an expert about your policy | Н2-1 |
| усі 4 | відкат · кнопка | Ask with your policy need | Talk to an expert about your policy need | Н2-1 |
| base | норма · кнопка | Read the MLC 2006 amendments | Read MLC 2006 | Н2-3 |
| base | доказ · H3 | Support answers around the clock | Support commitment | Н1-10 |
| base | доказ · кнопка | Read the proof on the solution page | Read Asterra Connect | Н2-2 |
| empty | зона стану · кнопка | Ask with your custom policy need | Talk to an expert about your uncovered policy need | Н2-1; «uncovered» — з тіла повідомлення |
| error | зона стану · тіло | …Reload to ask for it again; the ask below is served separately… | …Reload to ask for it again; the route to an expert below is served separately… | Н1-4 («ask» як іменник) |

Свідомо лишено: «What stands behind the policy» (Н1-9) · заголовок відкату «Policy needs
differ by fleet.» (✅ Н1-12) · «Reload this page» і «Loading policy content» (✅ формули) ·
H1 і зразкові H2 · обидва [TBD] із поясненнями.


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| base | 6 тверджувальних заголовків | без крапки | з крапкою | Р1 |
| empty | зона стану · кнопка | Talk to an expert about your uncovered policy need | Talk to an expert about your policy need | Р2 — «uncovered» уже несе тіло повідомлення |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Crew access | усі | смуга станів | Empty is confirmed for R5: the rule set can fail to cover a case. Loading resolves to Base or Error. | пояснення стану | `СЛУЖБ` |
| Crew access | усі | hero | Solutions & Services · Crew connectivity | хлібні крихти | `Н1` `Н3` |
| Crew access | усі | hero | Give the crew what it asks for. Keep the rules yours. | заголовок H1 | `Н3` |
| Crew access | усі | hero | Crew internet is decided as a set of rules: who gets how much and when, what a top-up costs, what is filtered, where access switches off, and what the office sees. The connection itself is the easy part. This page is about the rules, because the rules are what you answer for. | підзаголовок | |
| Crew access | усі | hero | Ask about your policy | кнопка → inquiry | `Н2` |
| Crew access | усі | hero | Read Asterra Connect | кнопка → solution-detail | `Н2` |
| Crew access | base | політика | You are buying rules, not bandwidth | заголовок H2 | |
| Crew access | base | політика | Bandwidth is what every vendor sells. What you answer for is the rule set on top of it, and every dimension of that rule set is a decision your office already owns. These are the dimensions a crew access policy is written in. | підводка | |
| Crew access | base | політика | Data quotas — Set daily or monthly, per person or per vessel. The quota is the budget's first line of defence, agreed before anyone connects rather than discovered on the invoice. | пара dt/dd | |
| Crew access | base | політика | Rank and role tiers — Officers and crew can carry different allowances. Whether they should on your vessels is a policy choice, and the rule set holds either answer. | пара dt/dd | |
| Crew access | base | політика | Content filtering — What is filtered is stated, and the firewall is mandatory. Order on board is part of what the policy protects, not an afterthought to it. | пара dt/dd | |
| Crew access | base | політика | Time windows — Access can follow the watch pattern, closed during shifts and open off watch, so the connection fits the working day instead of competing with it. | пара dt/dd | |
| Crew access | base | політика | Geographic rules — Off in port or in defined waters. Where the vessel is can change what the crew can reach, and the rule says so in advance. | пара dt/dd | |
| Crew access | base | політика | Per-user distribution — A captive portal signs each seafarer in as themselves, so allowances, top-ups and filtering apply to a person, not to a shared password. | пара dt/dd | |
| Crew access | base | політика | Top-up pricing — What a top-up costs is stated before anyone buys one. Crews compare employers on this, and opaque pricing reads as an expensive one. | пара dt/dd | |
| Crew access | base | політика | Backup channel — A second path carries the policy when the primary drops, so the rules survive an outage instead of pausing with it. | пара dt/dd | |
| Crew access | base | політика | Cost visibility — The office sees usage while it happens. The invoice confirms what you already knew instead of opening a negotiation. | пара dt/dd | |
| Crew access | base | ринкові цифри | Crews arrive knowing the market's numbers | заголовок H2 | |
| Crew access | base | ринкові цифри | None of the figures below are Asterra parameters. They are what crews report across the market today, from the deck: the vocabulary your policy will be measured against when crew compare vessels. | підводка | |
| Crew access | base | ринкові цифри | Daily caps — Allowances around 450 MB per day are reported. | пара dt/dd | `ЗОВН` |
| Crew access | base | ринкові цифри | Monthly allowances — Around 80 GB per person per month is reported at the generous end. | пара dt/dd | `ЗОВН` |
| Crew access | base | ринкові цифри | Rank splits — 12 GB for crew against 40 GB for officers is one reported split. | пара dt/dd | `ЗОВН` |
| Crew access | base | ринкові цифри | Top-up prices — $2.50 per GB is reported, and crews call it expensive. | пара dt/dd | `ЗОВН` |
| Crew access | base | ринкові цифри | Our parameters: [TBD — no source]. Asterra quotas and tariffs are agreed per fleet in the policy conversation; this page sets the dimensions, not the values. | абзац + порожній слот | `[TBD]` |
| Crew access | base | норма | Since 23 December 2024 the request has an inspector behind it | заголовок H2 | `ЗОВН` |
| Crew access | base | норма | The MLC 2006 amendments, in force 23 December 2024, require crew internet access at a reasonable charge, verified by Port State Control. The crew's request and the office's obligation now point the same way, and the policy is how both are met without the invoice deciding for you. | абзац | `ЗОВН` `Н6` |
| Crew access | base | норма | Read the MLC 2006 amendments | кнопка → norm | `Н1` `Н2` |
| Crew access | base | утримання | Crew ask about it before they sign on | заголовок H2 | `Н6` |
| Crew access | base | утримання | Connectivity has become part of why crew choose an employer and why they stay. A generous answer that collapses at the first invoice retains nobody; a stated policy does, because the fleet can keep saying yes to it. Access the crew can plan around, at a cost the office can defend, year after year. | абзац | `Н6` — перше речення дослівно збігається з Industry |
| Crew access | base | доказ | What stands behind the policy | заголовок H2 | `Н1` `Н4` |
| Crew access | base | доказ | Support answers around the clock — 24x7x365 and multilingual, carried as a commitment rather than a claim of scale. | H3 + абзац | `Н1` — той самий доказ, що «Support commitment» деінде |
| Crew access | base | доказ | Costs stay visible — Usage visibility for the office is part of the offer, carried as a commitment: consumption is seen while it happens, not at the invoice. | H3 + абзац | |
| Crew access | base | доказ | Type-approval-grade proof lives on the solution page — When commitment claims are not enough for class or the office, the approvals that carry a certifying body's name are read on the solution page. | H3 + абзац | `Н1` |
| Crew access | base | доказ | Read the proof on the solution page | кнопка → solution-detail | `Н2` |
| Crew access | base | доказ | A usage stat or a named fleet case would be invented facts for a fictional brand and stay empty: [TBD — no source] | підказка + слот | `[TBD]` `Н6` |
| Crew access | empty | зона стану | The rule set does not cover your case yet. | заголовок повідомлення H2 | |
| Crew access | empty | зона стану | What you need to govern does not map onto the dimensions published here. Saying so is more useful than stretching the nearest rule until it looks like yours: an uncovered policy need, stated plainly, is exactly the question to bring to an expert. | повідомлення стану | `Н6` |
| Crew access | empty | зона стану | Ask with your custom policy need | кнопка → inquiry | `Н2` |
| Crew access | error | зона стану | The policy content did not load. | заголовок повідомлення H2 | |
| Crew access | error | зона стану | The policy content, the rule dimensions, the market numbers and the MLC tie, did not arrive. Reload to ask for it again; the ask below is served separately and still works. | повідомлення стану | `Н6` |
| Crew access | error | зона стану | Reload this page | кнопка → crew-access | `Н2` |
| Crew access | loading | зона стану | Loading policy content | повідомлення стану (`role="status"`) | |
| Crew access | base | відкат | Policy needs differ by fleet. | заголовок **H3** | `Н1` |
| Crew access | empty·error·loading | відкат | Policy needs differ by fleet. | заголовок **H2** — рівень змінюється між станами | `Н1` |
| Crew access | усі | відкат | Describe the rule you need to set, and the answer comes back about your policy: quotas, tiers, windows, costs, not a package name. | абзац | |
| Crew access | усі | відкат | Ask with your policy need | кнопка → inquiry | `Н2` |
| Crew access | усі | відкат | Read Asterra Connect | кнопка → solution-detail | `Н2` `Н6` |

### 1.8 Approval materials screen — `approval-materials.html` (+ empty · error · loading)

> ✅ **Переписано 2026-08-27 за voice.md — 16 правок у 4 файлах** (base 9 · empty 3 · error 2 ·
> loading 2). Спільні зони — 4/4 ідентичні; grep на заборонене — чисто. Інвентар нижче — стан
> ДО перепису.

| Стан | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| усі 4 | hero · кнопка | Start from the solution page | Read Asterra Shield | Н2-2 |
| base | бібліотека · рядок 1, мікротекст | The live page itself: the problem it closes, the norms it answers, the paper you keep… | The live page itself: the problem, the regulations it closes, the paper you keep… | Н1-2 + канон closes |
| base | бібліотека · рядок 1, кнопка | Open the solution page | Read Asterra Shield | Н2-2 |
| base | бібліотека · compliance, H3 | Compliance mapping: MSC.428(98) · UR E26/E27 · MLC 2006 and the paper each leaves | Compliance mapping: IMO MSC.428(98) · IACS UR E26/E27 · MLC 2006 and the paper you keep from each | Н1-8 + перша згадка повна |
| base | бібліотека · compliance, мікротекст | Norm by norm: what applies to which vessels… | Regulation by regulation: what applies to which vessels… | Н1-2 |
| base | бібліотека · compliance, кнопка | Read the norms | See the regulations we close | Н2-3 |
| base | бібліотека · accreditation, H3 | Accreditation overview: capacity partners, … | Accreditation overview: satellite capacity partners, … | Н1-6 |
| base | як користуватися · абзац | …the problem, the norms and the paper… | …the problem, the regulations and the paper… | Н1-2 |
| усі 4 | відкат · кнопка | Use the forwardable solution page | Read Asterra Shield | Н2-2 |
| empty | зона стану · абзац 2 | …the problem, the norms it closes… | …the problem, the regulations it closes… | Н1-2 |

Свідомо лишено: крихти «Prepare internal approval» (відкрите питання IA) · H1 (зразковий) ·
error без ретраю (навмисно за flow) · формули станів (✅) · [TBD] ×2 з поясненням.


**Пізніші проходи (2026-08-27):**

| Стан | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| base | принципи + бібліотека · H2 ×2 | Made to leave this site and still hold · Each item forwards on its own | ті самі з крапкою | Р1 |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Approval materials | base | смуга станів | Empty is the critical state: nothing to forward stalls the internal approval. Loading resolves to Base or Error. | пояснення стану | `СЛУЖБ` |
| Approval materials | empty | смуга станів | The critical state: an empty library stalls the approval job. The exit is the forwardable solution page below. | пояснення стану | `СЛУЖБ` |
| Approval materials | error | смуга станів | No retry is modelled on this branch: the only exit is the fallback to the forwardable solution page. | пояснення стану | `СЛУЖБ` |
| Approval materials | loading | смуга станів | Loading the materials list. Resolves to Base or Error. | пояснення стану | `СЛУЖБ` |
| Approval materials | усі | hero | Prepare internal approval | хлібні крихти (дослівно назва групи в сервісному дереві) | `Н3` |
| Approval materials | усі | hero | The decision is yours. The approval is not. | заголовок H1 | `Н3` |
| Approval materials | усі | hero | Materials for the case you carry to whoever holds the budget: each one dated, self-consistent, and open without a form. Forward them as they are, or build on the page they package. | підзаголовок | `Н1` |
| Approval materials | усі | hero | Start from the solution page | кнопка → solution-detail | `Н2` |
| Approval materials | base | принципи | Made to leave this site and still hold | заголовок H2 | |
| Approval materials | base | принципи | A business case is read by someone who was not in the room where it was assembled. Everything here is packaged for that reader: each artifact is self-contained, carries its date, and names its source next to the claim, so it can be checked without calling you back. | абзац | `Н1` |
| Approval materials | base | принципи | None of it sits behind a form. The argument these artifacts package already stands on the solution page, and gating the packaged version would only tax the person preparing the approval. Your email address is not the price of your own business case. | абзац | `Н6` |
| Approval materials | base | принципи | Two rules hold across the library. One canonical value per figure, wherever the figure appears: a number that drifts between documents reads as unreliability, and it is your standing that carries it upward. And a date on every artifact: an undated document is a stale one by default. | абзац | `Н1` `Н6` |
| Approval materials | base | бібліотека | Each item forwards on its own | заголовок H2 | |
| Approval materials | base | бібліотека | The set for one solution, Asterra Shield here. Where a value would have to be invented, the slot says so instead of pretending. | підводка | |
| Approval materials | base | бібліотека | The forwardable solution summary (Asterra Shield) — The live page itself: the problem it closes, the norms it answers, the paper you keep and the facts for the budget file | H3 + мікротекст | `Н1` |
| Approval materials | base | бібліотека | Open the solution page | кнопка → solution-detail | `Н2` |
| Approval materials | base | бібліотека | Budget-grade specification sheet — The spec table as one attachable sheet, one canonical value per figure: [TBD — no source] | H3 + мікротекст + слот | `[TBD]` |
| Approval materials | base | бібліотека | Compliance mapping: MSC.428(98) · UR E26/E27 · MLC 2006 and the paper each leaves — Norm by norm: what applies to which vessels, from when, and the evidence each verification reads | H3 + мікротекст | `ЗОВН` `Н1` |
| Approval materials | base | бібліотека | Read the norms | кнопка → norm | `Н1` `Н2` |
| Approval materials | base | бібліотека | Outcome case with a named figure — A named client and a named number would both be invented facts: [TBD — no source] | H3 + мікротекст + слот | `[TBD]` |
| Approval materials | base | бібліотека | Accreditation overview: capacity partners, navigation and bridge OEMs, safety equipment manufacturers — The integrator's proof, listed by category: whose capacity, bridge systems and safety equipment the fleet is served with | H3 + мікротекст | `Н1` |
| Approval materials | base | бібліотека | Unfilled slots are deliberate: a figure, a client or a partner brand for a fictional company would be an invented fact. | підказка | `Н6` |
| Approval materials | base | як користуватися | The solution page argues. The artifacts document it. | заголовок H2 | |
| Approval materials | base | як користуватися | Forward the solution page first: it carries the whole rationale, the problem, the norms and the paper, and it survives being read without you. Attach the artifacts your chain will ask for next, the sheet for the budget line, the mapping for the audit question. | абзац | `Н1` |
| Approval materials | base | як користуватися | Then expect the chain to shape the conversation. CAPEX sits with the owner, an approval matrix decides who signs, and a frame agreement can decide whether a supplier may be bought from at all. The request form carries a role field so that this surfaces in the first conversation rather than in the third meeting. | абзац із посиланням → inquiry | `Н1` `Н6` |
| Approval materials | empty | зона стану | Nothing packaged for your case yet. | заголовок повідомлення H2 | |
| Approval materials | empty | зона стану | An honest gap beats a near-miss attachment: a case assembled for someone else's situation gets unpicked upstairs, at the cost of your own standing. | повідомлення стану | `Н6` |
| Approval materials | empty | зона стану | The rationale itself is not missing. The forwardable solution page carries the same argument, the problem, the norms it closes and the paper you keep, dated and self-consistent. Take it upward as it stands, and bring what remains open to an expert. | повідомлення стану | `Н1` `Н6` |
| Approval materials | error | зона стану | The library did not load. | заголовок повідомлення H2 | |
| Approval materials | error | зона стану | The materials list did not come back. The case you came to assemble does not depend on it: the solution page below carries the same rationale, dated and self-consistent, and it forwards as it stands. | повідомлення стану | `Н6` |
| Approval materials | loading | зона стану | Loading the materials list | повідомлення стану (`role="status"`) | |
| Approval materials | base | відкат | The rationale is already on the solution page. | заголовок **H3** | `Н1` |
| Approval materials | empty·error·loading | відкат | The rationale is already on the solution page. | заголовок **H2** — рівень змінюється між станами | `Н1` |
| Approval materials | усі | відкат | If the library gives you nothing for your case, the page it packages still argues it: dated, self-consistent, forwardable as it stands. An open question after that is worth a conversation. | абзац | `Н6` |
| Approval materials | усі | відкат | Use the forwardable solution page | кнопка → solution-detail | `Н2` |
| Approval materials | усі | відкат | Talk to an expert | кнопка → inquiry | `Н2` |

### 1.9 Hygiene — `company.html` · `careers.html` · `legal.html` · `insights.html` (станів немає)

> ✅ **Переписано 2026-08-27 за voice.md:** Company — 6 правок · Careers — 3 · Insights — 7 ·
> **Legal — нуль змін** (екран уже відповідає voice.md; H2-етикетки правомірні для юрдокумента,
> [TBD — legal copy] легітимні). Інвентар нижче — стан ДО перепису.

| Екран | Зона | Було | Стало | Правило/Н |
|---|---|---|---|---|
| Company | модель · dt/dd «Why that holds» | …navigation and bridge manufacturers, safety equipment makers. …makes them proof | …navigation and bridge OEMs, safety equipment manufacturers. …makes them proof**.** | Н1-6 + крапка dd-визначення |
| Company | модель · dd ×3 | …remote operations · …we install · …not the boundary | ті самі рядки **з крапкою** | правило dt/dd (жанр «визначення») |
| Company | керівництво · H3 | Who answers for it | Four roles answer for the operating model. | Н4 |
| Company | завершення · абзац (розширено) | A question about your fleet does not start on this page… | **The empty rows above are deliberate: a name for a fictional brand would be an invented fact.** A question about your fleet does not start on this page… | правило [TBD] — розрив закрито |
| Careers | напрями роботи · слот | Open positions: [TBD — no source] | Open positions: [TBD — no source]. The empty slot is deliberate: a vacancy for a fictional brand would be an invented fact, and the real description of the job is the three kinds of work above. | правило [TBD] — розрив закрито |
| Careers | напрями роботи · кнопка → company | How the company operates | Read how the company operates | правило кнопки |
| Careers | напрями роботи · кнопка → inquiry | Contact us | Talk to an expert | Н2-1 / Н1-4 |
| Insights | стрічка · H3 №1 | UR E26 and E27 now apply… | UR E26/E27 now apply… | Н6-3, лок з Entry |
| Insights | стрічка · H3 №3 | …under the MLC connectivity amendments | …under the MLC 2006 connectivity amendments | Н6-3, лок з Entry |
| Insights | стрічка · H3 №4 | …at every annual DOC verification | …at every annual Document of Compliance verification | розкриття DOC |
| Insights | стрічка · H3 №5 | …a navigation and bridge equipment manufacturer | …a navigation and bridge OEM | Н1-6 |
| Insights | стрічка · кнопки ×5 | Read more | Read the announcement | тимчасовий канон |
| Insights | завершення · абзац | If a deadline here lands on your vessels, the requirement page names what closes it and the paper you are left holding. | If a deadline here lands on your fleet, the regulation page names what closes it and the paper you keep. | Н1-7 + Н1-2 + Н1-8 |
| Insights | завершення · кнопка | See the requirements we close | See the regulations we close | Н2-3 |

Свідомо лишено: крихти Legal «Legal · one page per legal document» (парна конвенція з norm.html —
але Norm свою половину вже змінив, див. §5) · Company hero-формула Н6-12 (потребує міжекранного
рішення) · «fleets and remote operations» на обох (дозволено Н1-7 для наскрізних).


**Пізніші проходи (2026-08-27):**

| Екран | Зона | Було | Стало | Правило |
|---|---|---|---|---|
| Company | hero · підзаголовок | The operating model made that journey unchanged: … | The operating model survived that growth unchanged: … | Д4 — «journey» з мотиваційного списку + напівлуна hero реального сайту (scope-check) |
| Careers | H2 | Three kinds of work keep the systems answerable | + крапка | Р1 |
| Insights | H2 | Both kinds can be checked outside this site | + крапка | Р1 |
| Legal | hero · крихти | Legal · one page per legal document | Legal · Privacy Policy | Р5 — пара з norm у форматі «розділ · інстанс» |


| Екран | Стан | Зона | Рядок | Тип рядка | Позначки |
|---|---|---|---|---|---|
| Company · Careers · Legal · Insights | base | смуга станів | No states exist for this screen. _screens.md marks none: hygiene screens sit outside every flow in flows.md and carry no modelled data dependency, so there is nothing to load, fail or come back empty. Base is the only file, a decision rather than an omission (jtbd.md §8.3). | пояснення стану | `СЛУЖБ` |
| Company | base | hero | Company | хлібні крихти | `Н3` |
| Company | base | hero | Maritime is where we started. Accountability is what we kept. | заголовок H1 | |
| Company | base | hero | Asterra Networks grew from a maritime business into a global connectivity provider. The operating model made that journey unchanged: one accredited party that specifies, supplies, installs and services what named manufacturers build. | підзаголовок | `Н6` |
| Company | base | модель | Accredited to integrate. Accountable for the result. | заголовок H2 | |
| Company | base | модель | What we do — Specify, supply, install and service connectivity, cyber, digital, safety and equipment systems for fleets and remote operations | пара dt/dd | `Н6` |
| Company | base | модель | What we do not do — Own satellite constellations or manufacture the hardware we install | пара dt/dd | `Н6` |
| Company | base | модель | Why that holds — Accreditation is granted by third parties: satellite capacity partners, navigation and bridge manufacturers, safety equipment makers. Their names cannot be self-asserted, which is what makes them proof | пара dt/dd | `Н1` `Н6` |
| Company | base | модель | Where we grew from — A maritime business that became a global provider. Maritime remains the deepest competence, not the boundary | пара dt/dd | |
| Company | base | керівництво | Who answers for it | заголовок H3 | `Н4` |
| Company | base | керівництво | Managing Director — [TBD — no source] | пара dt/dd | `[TBD]` |
| Company | base | керівництво | Technical Director — [TBD — no source] | пара dt/dd | `[TBD]` |
| Company | base | керівництво | Head of Partner Accreditation — [TBD — no source] | пара dt/dd | `[TBD]` |
| Company | base | керівництво | Head of Global Support Network — [TBD — no source] | пара dt/dd | `[TBD]` |
| Company | base | завершення | A question about your fleet does not start on this page. It starts with an expert who can name what closes it. | абзац | |
| Company | base | завершення | Talk to an expert | кнопка → inquiry | `Н2` |
| Careers | base | hero | Careers | хлібні крихти | |
| Careers | base | hero | Fleets hand us their systems. That is the job description. | заголовок H1 | |
| Careers | base | hero | Asterra Networks installs and services the connectivity, cyber, digital, safety and equipment systems that fleets and remote operations run on. The work below exists because that accountability does. | підзаголовок | `Н6` |
| Careers | base | напрями роботи | Three kinds of work keep the systems answerable | заголовок H2 | |
| Careers | base | напрями роботи | Field engineering — Installation, integration and survey of onboard systems, carried out under manufacturer accreditation, on vessels and at remote sites. | H3 + абзац | `Н1` |
| Careers | base | напрями роботи | Support — The support commitment is 24x7x365 and multilingual. It is kept by people, and this is where those people work. | H3 + абзац | `Н6` |
| Careers | base | напрями роботи | Network operations — Satellite and terrestrial capacity run as one managed service, watched continuously so a fleet never has to. | H3 + абзац | `Н6` |
| Careers | base | напрями роботи | Open positions: [TBD — no source] | абзац + слот | `[TBD]` |
| Careers | base | напрями роботи | How the company operates | кнопка → company | `Н2` |
| Careers | base | напрями роботи | Contact us | кнопка → inquiry | `Н2` |
| Legal | base | hero | Legal · one page per legal document | хлібні крихти | |
| Legal | base | hero | Privacy Policy | заголовок H1 | |
| Legal | base | hero | How Asterra Networks collects, uses and retains personal data, and how to reach us about it. The legal copy itself arrives at build stage. | підзаголовок | |
| Legal | base | розділи | What we collect · How we use it · Retention · Your rights · Contact | заголовки H2 | `Н4` (правомірно для юридичного документа) |
| Legal | base | розділи | [TBD — legal copy, build stage] ×5 | порожній слот | `[TBD]` |
| Insights | base | hero | Insights / News | хлібні крихти | `Н3` |
| Insights | base | hero | News here is a deadline or an accreditation. Nothing else qualifies. | заголовок H1 | |
| Insights | base | hero | Regulation items say when a dated requirement lands and what closes it. Accreditation items record whose capacity or equipment we are approved to carry. The feed is not a content programme. | підзаголовок | `Н1` |
| Insights | base | стрічка | Both kinds can be checked outside this site | заголовок H2 | |
| Insights | base | стрічка | UR E26 and E27 now apply to every newbuild contracted from 1 July 2024 | заголовок новини H3 | `Н6` `ЗОВН` |
| Insights | base | стрічка | New capacity accreditation extends hybrid coverage in high latitudes | заголовок новини H3 | `Н6` |
| Insights | base | стрічка | What Port State Control asks for under the MLC connectivity amendments | заголовок новини H3 | `Н6` `ЗОВН` |
| Insights | base | стрічка | Cyber risk in the safety management system is read at every annual DOC verification | заголовок новини H3 | `ЗОВН` |
| Insights | base | стрічка | Survey accreditation renewed with a navigation and bridge equipment manufacturer | заголовок новини H3 | `Н1` |
| Insights | base | стрічка | Regulation · Accreditation | категорія новини (`class="date"`, дати немає) | |
| Insights | base | стрічка | Read more | кнопка ×5 → insights.html (самопосилання) | `Н2` `Н6` |
| Insights | base | завершення | If a deadline here lands on your vessels, the requirement page names what closes it and the paper you are left holding. | абзац | `Н1` |
| Insights | base | завершення | See the requirements we close | кнопка → norm | `Н2` `Н6` |

---

## 2. Зведення розбіжностей

### Н1 — той самий предмет під різними іменами

| № | Предмет | Імена, які вживаються | Де |
|---|---|---|---|
| Н1-1 | Один із шести напрямів | **area** · **solution** · **Solutions & Services** | «Six areas» / «2 areas matched» / «the area that closes it» (Entry, Guided matching) проти «Read the full solution», «Solution of interest», Solution detail проти пункту нав і колонки футера «Solutions & Services» |
| Н1-2 | Нормативна вимога | **regulation** · **norm** · **requirement** · **deadline** | нав «Regulations» · дерево «Norm screen» · «See the requirements we close» · «Two of them carry a deadline» · «The requirement at a glance» · «Does it close your requirement?» |
| Н1-3 | Заголовок норми | **описове формулювання** проти **коду норми** | Entry: «Cyber risk inside the safety management system»; Solution detail: «IMO MSC.428(98)» — той самий об'єкт, два регістри заголовка |
| Н1-4 | Звернення до експерта | **inquiry** · **request** · **contact** · **ask** | дерево «Inquiry screen» · «Send the request» · нав «Contact» · футер «Contact us» · «Ask an expert» |
| Н1-5 | Галузь | **industry** · **sector** | нав «Industries» + хлібні крихти «Industries · Maritime» проти «Eight sectors», «Browse by sector», «The sector content did not load», «a specialist for your sector». На Industry error обидва слова живуть на одному екрані |
| Н1-6 | Категорія партнера | **manufacturer** · **maker** · **OEM** | «navigation and bridge manufacturers» (Entry, Industry, Company) · «safety equipment makers» (там само) · «navigation and bridge OEMs, safety equipment manufacturers» (Approval materials) · слоти «Navigation OEM», «Bridge systems OEM», «Safety equipment» (Entry) |
| Н1-7 | Об'єкт експлуатації | **fleet** · **vessels** · **operation** · **remote operations** | в одному селекті поруч: «Standardising IT across the operation» і «A dry-docking window is coming up»; «fleets and remote operations» проти «your vessels» |
| Н1-8 | Документ, який лишається після закриття норми | **the paper you keep** · **the paper you hold afterwards** · **what paper you are left holding** · **the paper each one leaves behind** · **what paper it produces** · **evidence** | Solution detail · Norm · Industry · Guided matching · Insights — п'ять формулювань однієї обіцянки |
| Н1-9 | Блок доказу | **What we are held to** · **What stands behind this** · **What stands behind it** · **What stands behind the policy** | Entry · Industry · Solution detail · Crew access — один компонент, чотири заголовки |
| Н1-10 | Доказ «підтримка» | **Support commitment** · **Support answers around the clock** | Industry, Solution detail проти Crew access — той самий пункт, дві назви |
| Н1-11 | Правило однієї цифри | **One value per figure** · **one canonical value per figure** | Entry проти Solution detail і Approval materials |
| Н1-12 | Блок відкату | **Not what you expected?** · **Nothing above looks like your situation?** · **Policy needs differ by fleet.** · **The rationale is already on the solution page.** | Guided matching · Industry · Crew access · Approval materials — один компонент, два питання і два твердження |
| Н1-13 | Екран підбору | **Guided matching** · **guided path** · **Solutions & Services** (пункт нав, який на нього веде) · **Find what fits your fleet** | Industry error: «The guided path below»; нав веде на guided-matching.html під назвою «Solutions & Services» |
| Н1-14 | Екран екіпажу | **Crew connectivity** (нав) · **Crew access & control** (дерево, посилання з Industry) · **your policy** (CTA) | |

### Н2 — та сама дія під різними назвами кнопок

| № | Дія (призначення) | Назви кнопок | Кількість |
|---|---|---|---|
| Н2-1 | → Inquiry | Talk to an expert · Ask an expert · Ask an expert about this norm · Ask about your policy · Ask with your policy need · Ask with your custom policy need · Contact us · Contact (нав) | **8** |
| Н2-2 | → Solution detail | Learn more · Read the full solution · Read Asterra Connect · Read Asterra Shield · See what closes it · Details · Open the solution page · Start from the solution page · Use the forwardable solution page · Read the proof on the solution page | **10** |
| Н2-3 | → Norm | See the requirements we close · Details · Read the norm · Read the norm it answers · Verify the paper · Start from a regulation · browse the regulations · Read the MLC 2006 amendments · Read the norms | **9** |
| Н2-4 | → Guided matching | Find what fits your fleet · Try guided matching · Change your answer · Try again | **4** |
| Н2-5 | Повтор після збою | Try again (Guided matching) · Reload this page (Solution detail, Crew access) · Send the request again (Inquiry) | **3 різні дієслова на одну дію** |
| Н2-6 | Submit форми | Match my situation (Guided matching) · Send the request (Inquiry) | — |
| Н2-7 | Розходження з брифом | `CLAUDE.md` §6 називає CTA сторінок рішень **«Send an Inquiry» / «Talk to an Expert»**; у вайрфреймах вживається «Send the request» і «Talk to an expert» (мале «e»). Напис «Send an Inquiry» не зустрічається жодного разу | |

### Н3 — назва екрана в навігації / заголовку / хлібних крихтах

| Екран | Навігація | Хлібні крихти | Заголовок H1 | Дерево |
|---|---|---|---|---|
| Guided matching | Solutions & Services | *немає* | Tell us what landed on the fleet. | Guided matching screen |
| Norm | Regulations | Regulation · one page per dated norm | IMO MSC.428(98) | Norm screen |
| Crew access | Crew connectivity | Solutions & Services · Crew connectivity | Give the crew what it asks for. Keep the rules yours. | Crew access & control screen |
| Inquiry | Contact *(футер: Contact us)* | *немає* | Talk to an expert. | Inquiry screen |
| Company | About | Company | Maritime is where we started… | Company screen |
| Insights | Latest News *(футер: Latest news)* | Insights / News | News here is a deadline or an accreditation. | Insights / News |
| Approval materials | *немає пункту* | Prepare internal approval *(назва групи в сервісному дереві, не розділу сайту)* | The decision is yours. The approval is not. | Approval materials screen |

Окремо: у футері **About** і **Leadership team** ведуть на один і той самий `company.html`, де розділу leadership немає — є `Who answers for it` із чотирма `[TBD]`.

### Н4 — етикетка там, де за §9.1 мало б стояти твердження

`Our position` (Entry) · `What we are held to` (Entry) · `Latest news` (Entry) · `Your situation` (Guided matching, легенда форми — прийнятно) · `What we do for fleets` (Industry) · `What stands behind this / it / the policy` (Industry, Solution detail, Crew access) · `Five ways fleets arrive at this page` (Solution detail) · `The facts for the budget file` (Solution detail) · `The requirement at a glance` (Norm) · `The paper you hold afterwards` (Norm) · `Who answers for it` (Company) · `What we collect / How we use it / Retention / Your rights / Contact` (Legal — правомірно для юридичного документа).

Для контрасту, твердженнями вже написані: `The audit is where cyber fails first` · `You are buying rules, not bandwidth` · `Made to leave this site and still hold` · `Each item forwards on its own` · `Both kinds can be checked outside this site` · `Crews arrive knowing the market's numbers` · `Accredited to integrate. Accountable for the result.` · `Three kinds of work keep the systems answerable`.

### Н5 — AI-кліше і бадьорий тон

**Не знайдено.** Проведено пошук по всіх 28 файлах: `oops` · `welcome` · `congratulations` · `let's get started` · `seamless` · `empower` · `unlock` · `elevate` · `leverage` · `robust` · `game-changing` · `revolutionary` · `effortless` · `we're here to help` · `thank you` — **0 збігів у продуктовому тексті**. Знаків оклику в `<main>` **немає в жодному файлі**; емодзі немає. Єдиний збіг — слово «cutting edge» у проєктній анотації `entry.html`, і там воно вжите як приклад видаленого філера, а не як копірайт.

Найближче до бадьорого регістру підходить `Request sent. You arrive with a position.` (Inquiry success) — але це дослівна кінцева умова job із `jtbd.md`, а не вигук, і поруч стоїть конкретика переданого контексту.

### Н6 — заглушки й копії з сусіднього екрана

| № | Що | Де |
|---|---|---|
| Н6-1 | `[Backdrop treatment behind the type. Design stage.]` | Entry — слот під оформлення |
| Н6-2 | Слоти логотипів: `Capacity partner` ×2 · `Navigation OEM` · `Bridge systems OEM` · `Safety equipment` ×2 | Entry |
| Н6-3 | **Три новини Entry дослівно збігаються** з першими трьома на Insights | Entry ↔ Insights |
| Н6-4 | `Read more` веде на `insights.html` (сторінок статей не існує); на самому Insights це самопосилання | Entry, Insights |
| Н6-5 | Абзац доказу `Support commitment — 24x7x365 and multilingual, carried as a commitment rather than a claim of scale.` **дослівно** | Industry, Solution detail (і варіант на Crew access) |
| Н6-6 | Абзац `Accredited, not self-declared` у трьох близьких редакціях | Entry, Industry, Solution detail |
| Н6-7 | `Connectivity has become part of why crew choose an employer and why they stay` **дослівно** | Industry, Crew access |
| Н6-8 | Формула `Carried from the page you came from…` двічі на одному екрані — у блоці контексту й у підказці поля | Inquiry |
| Н6-9 | На **success** лишається заголовок H1 `Talk to an expert.` і рядок `Edit either in the form if that is not what you are asking about` — форми на цьому екрані вже немає | Inquiry success |
| Н6-10 | `Find what fits your fleet` тричі (двічі на Entry, раз на Industry); `Learn more` ×7 на Entry; `See what closes it` ×5 на Industry; `Read more` ×5 на Insights | Entry, Industry, Insights |
| Н6-11 | Формула «X would be invented facts for a fictional brand and stay empty» у чотирьох редакціях | Industry, Solution detail, Crew access, Approval materials |
| Н6-12 | Формула «Specify, supply, install and service…» у трьох редакціях | Entry hero, Company, Careers |

**`lorem ipsum`, `Section description`, `Feature A / B`, `Заголовок 1` — не знайдено жодного разу.**

### Структурна розбіжність, знайдена принагідно

Заголовок блока відкату **змінює рівень між станами одного екрана**: `<h3>` у base і `<h2>` у станах. Стосується трьох екранів — Industry (`Nothing above looks like your situation?`), Crew access (`Policy needs differ by fleet.`), Approval materials (`The rationale is already on the solution page.`). Це не мікрокопірайт, але ламає правило `_conventions.md` §11 «каркас між станами ідентичний; змінена рівно одна зона», тож записано тут, щоб не загубилося.

---

## 3. Рядки, які ми не переписуємо

### 3.1 `ЗОВН` — зовнішні назви, що цитуються дослівно

**Норми й стандарти:** IMO MSC.428(98) · IACS UR E26 / E27 (також «UR E26 and E27», «UR E26/E27») · MLC 2006 (також «MLC 2006 amendments», «MLC») · IEC 62443 · ISO 27001 · ISM Code.

**Органи, процедури, документи:** IMO · Maritime Safety Committee · Port State Control / PSC · Document of Compliance / DOC · DOC verification · DOC audit · SMS (safety management system) · classification society · type approval · certifying body.

**Дати, прив'язані до норм:** 1 January 2021 · 1 July 2024 · 23 December 2024 (також «December 2024»).

**Ринкові цифри, зацитовані з-поза Asterra** (екран Crew access, блок «Crews arrive knowing the market's numbers» прямо це декларує): 450 MB per day · 80 GB per person per month · 12 GB / 40 GB · $2.50 per GB.

> Переписувати можна **обрамлення** цих рядків («what the auditor actually asks», «is reported»), але не самі назви, коди, дати й чужі цифри.

### 3.2 `ВВІД` — значення, які вводить користувач

Живуть на Inquiry (стани error · loading · success) як зразок заповненої форми:

- `D. Petrou` — поле Your name
- `Ship management company, 18 vessels` — поле Company
- `name@company.com` — поле Work e-mail
- `Cyber risk has to be in the SMS before our next DOC verification. What changes on board, and what evidence do we hold afterwards?` — поле What landed on your fleet?, воно ж повторюється у зведенні на loading і success

Обрані значення селектів (`Maritime`, `Fleet IT / IT manager`, `Asterra Shield (Cybersecurity)`) — теж ввід користувача, хоча самі варіанти списку є нашим текстом і переписуються.

### 3.3 `[TBD]` — свідома конвенція, не заглушка

19 слотів у продуктовому тексті. Це виконання правила `_conventions.md` §3 (fictional-brand rule): цифра, клієнт або партнерський бренд для вигаданої компанії були б вигаданим фактом.

| Екран | К-сть | Що саме |
|---|---|---|
| Solution detail | 4 | Monitoring and response · Sizing and throughput · конкретне схвалення · uptime і клієнтські кейси |
| Company | 4 | чотири позиції керівництва |
| Crew access | 2 | параметри Asterra · usage stat і кейс флоту |
| Approval materials | 2 | spec-аркуш · outcome case |
| Industry | 1 | масштаб за назвою флоту і галузевий кейс |
| Careers | 1 | Open positions |
| Legal | 5 | `[TBD — legal copy, build stage]` — інший маркер, юридичний текст приходить на етапі білду |

Два різні маркери в обігу: `[TBD — no source]` (14) і `[TBD — legal copy, build stage]` (5).

---

## 4. Перевірка якості цього переліку

- **Покриття:** 28/28 сторінок прочитано. 12 базових файлів — повністю; 16 сторінок станів — через посимвольний diff проти базового файлу, тож жоден рядок, що відрізняється, не пропущено.
- **Дедуплікація перевірена хешем:** `<header>`, `<footer>` і сервісне дерево ідентичні в усіх 28 файлах (по одному хешу на всі 28). Вони ведуть один блок рядків замість 28.
- **Нічого не переписано.** Усі рядки в таблиці — дослівні; змінено лише перенесення рядків усередині абзацу на пробіли, щоб рядок вміщався в клітинку.
- **Нічого не додано.** Позначки описують знайдене; жодного варіанта заміни не запропоновано — це предмет наступного кроку.
- **Свідомо не внесено:** блоки `<aside class="wf-doc">` (проєктна документація вайрфрейму, не інтерфейс) і HTML-коментарі. Сервісне дерево і смуга станів внесені під позначкою `СЛУЖБ`, бо мають видимий текст, але в білд не переїдуть.
- **Відкрите питання до наступного кроку:** зафіксовано **14 предметів під різними іменами** і **6 груп дій із розбіжними назвами кнопок**. Найбільша концентрація — CTA: три пункти призначення (Inquiry, Solution detail, Norm) несуть **27 різних написів на кнопках**. Це найдорожча розбіжність у списку, бо вона видима на кожному екрані.

---

## 5. Наскрізна звірка після перепису (2026-08-27)

Перепис завершено на всіх 12 екранах (28 сторінок): пілот Guided matching + 10 агентних проходів
+ глобальний прохід спільного хрому. Нижче — результат наскрізної звірки «та сама дія — та сама
назва», знята механічно з усіх 28 файлів (усі написи `class="btn"` і `<button>` у `<main>`,
згруповані за призначенням).

### 5.1 Реєстр написів за призначенням — стан після перепису

| Призначення | Канон (словник §2) | Фактичні написи | Вердикт |
|---|---|---|---|
| → Inquiry | Talk to an expert (+предмет) | Talk to an expert ×14 · …about this regulation · …about your policy ×4 · …about your policy need ×4 · …about your uncovered policy need ×1 | ✅ одна родина; див. Р2 про три предмети на Crew access |
| → Solution detail | Read ⟨продукт⟩ / See what closes it | Read Asterra Shield ×5 · Read Asterra Connect ×4 · Read Asterra Equip ×2 · Read Asterra Intelligence · Read Asterra Assure · Read Asterra Care · See what closes it ×5 · Reload this page (error) | ✅ |
| → Norm | Read ⟨код⟩ / See the regulations we close | Read MSC.428(98) ×3 · Read UR E26/E27 ×2 · Read MLC 2006 ×2 · See the regulations we close ×4 · **See the regulations it closes ×3** | ⚠️ Р3 (we/it) |
| → Guided matching | Find what fits your fleet | Find what fits your fleet ×9 · Match my situation (submit) · Match my situation again (retry) · Change your answer (empty) | ✅ |
| → Industry | *(канону не було)* | Read the Maritime page ×4 | канонізувати — Р4 |
| → Crew access | *(канону не було)* | Read the crew connectivity rules ×1 | канонізувати — Р4 |
| → Company | *(канону не було)* | Read how the company operates ×1 | канонізувати — Р4 |
| → Insights (айтем) | *(канону не було)* | Read the announcement ×8 · All news ×1 | канонізувати — Р4 |
| Submit форм | дієслово читача | Send the request · Send the request again · Match my situation | ✅ |

**Закрито підчистую:** Learn more (було ×7) · Details (×3) · Read more (×8) · Try again ·
Try guided matching · родина Ask… · answered by · «sector» у видимому тексті · «norm» у видимому
тексті · e-mail · прозові форми кодів · дати без дня · «the paper …» у 4 неканонічних редакціях.

### 5.2 Розбіжності, що лишилися — таблиця рішень

| № | Розбіжність | Де | Що вирішити |
|---|---|---|---|
| Р1 | **Крапка в тверджувальних заголовках.** Нові твердження — з крапкою («The audit is where cyber fails first.» · «Six areas, each written in fleet terms.» · «The requirement returns every year.» · «Four roles answer for the operating model.»); старі — без («One decision closes it» · «You are buying rules, not bandwidth» · «Crews arrive knowing the market's numbers» · «Made to leave this site and still hold» · «Both kinds can be checked outside this site» · ще ~7) | усі екрани | одне правило на всі: крапка чи ні; далі один механічний прохід |
| Р2 | **Три предмети CTA → Inquiry на одному екрані**: about your policy (hero) · about your policy need (відкат) · about your uncovered policy need (empty) | crew-access | лишити три (точність за ситуацією) чи склеїти empty↔відкат |
| Р3 | **«See the regulations we close» проти «…it closes»** | solution-detail (it) проти entry · insights · approval-materials (we) | дозволити «it» на сторінках рішення як відхилення-з-предметом — або буквальний канон «we» |
| Р4 | **Чотири нові написи без запису в словнику §2**: Read the Maritime page · Read the crew connectivity rules · Read how the company operates · Read the announcement | GM · industry · careers · entry+insights | внести в словник §2 як канони напрямків |
| Р5 | **Крихти norm ↔ legal розпаровані**: norm.html тепер «Regulations · IMO MSC.428(98)», legal.html лишився «Legal · one page per legal document» (Legal-агент не чіпав саме через парність конвенції) | norm · legal | або legal → «Legal · Privacy Policy», або відкат norm; плюс Н3-хвіст: крихт немає на GM та Inquiry |
| Р6 | **Крапки в dd жанру «визначення»**: Company додав (за правилом мікрокопі), Norm/Crew — без крапок (їхні dd — ЗОВН або не чіпалися); власний приклад правила у voice.md наведений без крапки | company проти norm · crew-access | усунути суперечність у voice.md і вирівняти одним проходом |
| Р7 | **«the paper you keep from each»** — перша адаптація канону Н1-8 під множину норм | approval-materials | визнати формою канону чи переформулювати |
| Р8 | **artifact / artefact** — американська форма при британському -ise; слово узгоджене з сутністю O6 | approval-materials (~6 входжень) | доповнити правило правопису словом-винятком або перейти на artefact |
| Р9 | **Самотвердження другої черги** (без позначок в інвентарі, агенти чесно не чіпали): «one accountable party» (industry hero) · «One party stays accountable…» (entry, підшито commitment-хвостом) · success-абзац «The specialist reads your context before replying…» (inquiry) | entry · industry · inquiry | окремий принцип-1 прохід одним рішенням |
| Р10 | **«Latest news» (H2, Entry)** — остання Н4-етикетка поза Н1-9-винятком; лишена заради синхронності з нав-пунктом | entry | прийняти як вивіску розділу або чекати копірайт-проходу разом із Н1-9 |

### 5.3 Глобальний прохід спільного хрому (координатор)

| Було | Стало | Обсяг |
|---|---|---|
| Latest News (головна нав) | Latest news | 28/28 |
| Contact (utility-нав) | Contact Us | 28/28 — форма з брифу §6, єдине дозволене місце |
| Contact us (футер) | Talk to an expert | 28/28 — Н1-4 |
| IACS UR E26 / E27 (футер) | IACS UR E26/E27 | 28/28 — скісна без пробілів (улов Insights-агента) |

### 5.4 Рішення другого проходу (2026-08-27) — усі Р закриті

Реєстр §5.1 і таблиця §5.2 — знімок ДО другого проходу; фінальний стан нижче.

| № | Рішення | Застосовано |
|---|---|---|
| Р1 | Правило вже існувало (словник §3); вирівняно: **+15 крапок** на тверджувальних заголовках (industry 7 · crew 6 · norm 1 · approval 2 · careers 1 · insights 1 · inquiry ×4 спільна зона «Your context travels with the request.»); заголовки-назви (пункти доказу, новини, іменні вимоги Entry) — без крапки, уточнення внесено в voice.md §3 | 10 файлів |
| Р2 | Склеєно empty↔відкат: «…about your **uncovered** policy need» → «…about your policy need». «Uncovered» ніс те, що тіло повідомлення вже каже; лишилося **два** предмети на екран — policy (hero) і policy need (конкретний запит) | crew-access-empty |
| Р3 | «See the regulations **it** closes» узаконено для сторінок рішення (підмет = рішення, у регістрі сторінки «What **it** closes…»); «we close» — решта. Внесено в словник §2 | voice.md |
| Р4 | Чотири написи канонізовано в словнику §2: Read the ⟨інстанс⟩ page · Read the crew connectivity rules · Read how the company operates · Read the announcement (+All news для стрічки) | voice.md |
| Р5 | legal.html: «Legal · one page per legal document» → **«Legal · Privacy Policy»** — пара з norm відновлена в новому форматі «розділ · інстанс». Хвіст Н3 (крихт немає на GM та Inquiry) лишається питанням розмітки | legal.html |
| Р6 | Приклад у правилі dt/dd виправлено (крапку додано — саме він породив дрейф); norm.html вирівняно: 5 dd з крапками + виправлено інверсію DOC (повна форма тепер у першій згадці «In effect», коротка — далі). Зведення (Inquiry dd) — без крапок, за правилом | voice.md + norm.html |
| Р7 | «the paper you keep from each» визнано канонічною формою множини; внесено в Н1-8 | voice.md |
| Р8 | «artifact» — виняток правопису слідом за сутністю O6; внесено в словник §3 | voice.md |
| Р9 | (а) «one accountable party» на Industry hero **лишено**: це опис операційної моделі з брифу §1, а не доказова самопохвала, — те саме рішення, що на Entry, де claim підшито commitment-хвостом; (б) success-абзац Inquiry переписано: «The specialist reads your context before replying…» → **«The request went out with your context attached, so the conversation does not start from "so what do you offer?".»** — перевірюваний факт замість обіцянки за спеціаліста; телеграфний «Context passed, ready position achieved.» знято як дубль H2 і dl | inquiry-success |
| Р10 | «Latest news» (H2, Entry) **прийнято вивіскою розділу**: синхронна з нав-пунктом і Insights; чесного твердження без вигаданого факту про склад стрічки немає — переглянути разом із Н1-9 на копірайт-проході | рішення зафіксовано |

**Лишаються відкритими (за власними правилами voice.md, не борги проходу):** Н1-9 (канон
заголовка блока доказу — усі кандидати провалюють тест твердження) · крихти на GM та Inquiry
(розмітка) · Н6-9 (H1 на success — розмітка/стан) · правило валідації поля (стану немає в
_screens.md).

### 5.5 Третій прохід — Д-таблиця (2026-08-27)

Аудит проти voice.md + microcopy.md дав 11 дефектів (Д1–Д11); усі закриті:

| Д | Що | Де закрито |
|---|---|---|
| Д1 | дубль routing-формули hero↔мікротекст | inquiry ×4 — hero скорочено до «One step. No wizard, no gate.» |
| Д2 | короткі форми продуктів у компоненті з повними | entry, реглядка 2 |
| Д3 | «the ship» проти рішення Н1-7 | industry, H2 екіпажу → vessel |
| Д4 | «journey» — мотиваційний список + напівлуна референсу | company, hero → growth |
| Д5 | §1.0 без Було/Стало по глобальному хрому | банер + таблиця в §1.0 |
| Д6 | правки других проходів лише в агрегаті §5.4 | «Пізніші проходи» дописані в §1.1–§1.9 |
| Д7 | застарілі цитати прикладів у voice.md | цитату П1 оновлено; банер датування антиприкладів |
| Д8 | Н1-2 «Read the regulation» проти канону §2 | перелік замін Н1-2 переписано на фактичні |
| Д9/Д10 | картка уроку 05: Planned + P1-фреймування | index.html — Published, опис за фактичним результатом; лічильник hero 3→5 of 12 |
| Д11 | E:-checkout без мовного етапу | git pull після пушу; Vercel тягне пуш у main |

Прийняті винятки (без змін): «Ships contracted from 1 July 2024» (формула IACS, ЗОВН) ·
«ship managers» (роль із брифу §4) · короткий UR у заголовку новини (лок Н6-3) · «uncovered»
у прозі empty-стану.
