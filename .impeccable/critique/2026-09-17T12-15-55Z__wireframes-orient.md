---
target: "orient group: entry, guided-matching (+empty/error/loading), industry (+error/loading)"
total_score: 27
p0_count: 0
p1_count: 3
timestamp: 2026-09-17T12-15-55Z
slug: wireframes-orient
---
# Critique: Orient group (entry · guided-matching + empty/error/loading · industry + error/loading)

Scope: wireframes/entry.html, guided-matching.html (+ -empty, -error, -loading), industry.html (+ -error, -loading). Стани оцінено як частини одного екрана. Службовий хром (.wf-tree, .wf-states, .wf-doc) виключено. Рендер: 1440 / 1024 / 375 (виміри в iframe, знімки headless Chrome на 1440).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Loading має status-чип і калібрований скелет на GM; на industry скелет не повторює форму base; активний пункт навігації відсутній (відоме #11) |
| 2 | Match System / Real World | 3 | Мова флоту й класу; рядки 4–5 на industry не мають дати, хоча заголовок каже «arrives with a date on it» |
| 3 | User Control and Freedom | 3 | Відповіді лишаються у формі в усіх станах; fallback-розвилка на GM |
| 4 | Consistency and Standards | 2 | «Three questions» при двох полях; «Fits» стверджує ситуацію, якої користувач не обирав; бейдж obj-line розтягнуто; h3 з line-height тіла |
| 5 | Error Prevention | 2 | Довгі опції select обрізані без шеврона; empty-стан показує ті самі відповіді, що дали 2 збіги на base |
| 6 | Recognition Rather Than Recall | 3 | Запис «Answered:» і бейджі рангу; 5 однакових «See what closes it» |
| 7 | Flexibility and Efficiency | 3 | Чотири входи з Entry (підбір, напрям, галузь, норма) |
| 8 | Aesthetic and Minimalist Design | 3 | Стримано; службова нотатка «[Backdrop treatment…]» у герої; кнопки duo--anchored відірвані на 117–289px |
| 9 | Error Recovery | 2 | Industry-error без повтору завантаження; GM-error каже «on the left», а на <1080px форма над повідомленням |
| 10 | Help and Documentation | 3 | Підказки під полями, норма пояснена в рядку |
| **Total** | | **27/40** | **Acceptable** |

## Anti-Patterns Verdict
LLM: не AI slop. Chroma 0 + одна подієва хроматика, заголовки-твердження, ранг рамкою, чесні [TBD] — впізнавана власна мова. Найближчі тіки: ритм «твердження. *dim-відповідь.*» у H1/H2 на Entry (5 разів) та Industry — канон voice, не позначаю; герой-фото праворуч на всіх трьох екранах однаковий за композицією.

Детектор CLI: 1 знахідка (em-dash-overuse, entry.html) — хибна: усі 9 тире в <title>, коментарях і .wf-doc.
Детектор у браузері (ін'єкція вдалась, власний статичний сервер 8791, зупинено): entry 30, guided-matching 22, guided-matching-error 22, industry 20, industry-loading 19; більшість — хром (tiny-text 11px, all-caps, line-length у дереві/анотації). У продукті: oversized-h1 88px (entry, реальна розбіжність з токеном display 68.8px) · skipped-heading h2→h4 підвалу (реально, kit) · line-length p.foot-legal 104ch і industry p.hint 159/109ch (реально, P3) · tight-leading 1.08 на .statement p (хибна: дисплейний кегль) · cramped-padding optgroup/.index (хибна: нативний optgroup, .index має внутрішній відступ) · monotonous-spacing 4px (хибна: крок сітки).

## Overall Impression
Мова тримається, але головна робота групи — «визначити, що нам потрібно» — підточена двома текстово-логічними розривами саме на екрані підбору: обіцяно три питання, а їх два, і рядок «Fits» каже користувачу, що він описав ситуацію, якої він не описував. Для P2, яка читає спрощення як ухиляння, це і є момент втрати довіри. Найбільша можливість — зробити результат підбору дзеркалом саме введених відповідей.

## What's Working
- Ранг на GM: первинний збіг з фото, інвертованим бейджем і primary-кнопкою; вторинний — прозорий, без фото. Ієрархія читається за секунду без кольору.
- Стани GM несуть ту саму форму, що base: інтерв'ю незмінне, скелет калібрований під картки, error і empty розрізняються іконкою+словом, fallback-розвилка є в кожному стані.
- Entry робить «напрям із дедлайном» структурою: Connect і Shield у major-рядку з рядком «Closes …», решта чотири — у minor. Це ранжування, не каталог.

## Priority Issues
- [P1] «Fits: A managed fleet standardising across vessels, which matches the situation you described» — користувач обрав «Cyber risk… SMS», а не standardising. Підбір стверджує хибне про введення. Fix: Fits повторює обрану ситуацію дослівно (або слот). /impeccable clarify
- [P1] «Three questions» (hero GM, fallback GM, fallback Industry ×3 стани) при двох полях форми; voice.md §8 виправдовує число саме як «буквальні три поля». Fix: або третє поле, або число → ім'я. Рішення. /impeccable clarify
- [P1] Акредитація партнера (§6.1, основний тип доказу) на Entry — останній і найменший елемент секції, після трьох наших тверджень (принцип 2 «чуже ім'я раніше»); на Industry смуги партнерів немає взагалі, лише опис. /impeccable layout
- [P2] Кнопка «Match my situation» нижче згину на 1440×900 (низ 949px) і на 375 форма починається з 927px — герой із фото забирає перший екран інструмента. /impeccable layout
- [P2] Industry-error без дії повтору для самого контенту; єдиний вихід — підбір. /impeccable harden

## Persona Red Flags
**P2 · Fleet IT (проєктна):** рядок Fits не збігається з її відповіддю — «а що саме ви зматчили?»; обрізаний select ховає формулювання ситуації, яке вона обирала; «три питання» при двох — дрібна неточність, яку вона помітить першою.
**Jordan (First-Timer):** у select немає шеврона — поле з «Maritime» виглядає як текстовий інпут; на Industry п'ять однакових «See what closes it» ведуть на ту саму сторінку.
**Riley (Stress Tester):** ті самі відповіді дають 2 збіги (base) і «No confident match» (empty); GM-error на мобільному каже «on the left»; skeleton Industry — три однакові коробки на місці смуги, пари, таблиці й тріо → стрибок макета.
**Sam (A11y):** 5 однакових імен посилань на Industry; h2→h4 у підвалі; рядки реєстру з тап-висотою 20px (виручає відступ, але межово).

## Minor Observations
- Entry: «[Backdrop treatment behind the type. Design stage.]» видно в герої як продуктовий текст.
- Entry H1 88px проти токена display 68.8px (Industry/GM — 68.8).
- duo--anchored притискає кнопку до низу колонки: 117 / 121 / 289px від тексту.
- .pos-label і інші моно з вагою 600 — JetBrains Mono 600 не завантажено, синтетичний жир.
- h3 без line-height (успадковує 1.68): на Industry 25px/42px — H3 пари дорівнює рейковому H2.
- Бейдж obj-line «Industries · Maritime» розтягнуто на 604px — читається як поле (та сама причина, що на approval).
- .trio 1.35fr/1fr/1fr на неранжованому тріо: картка «Accredited» у 201px — 7 рядків.
- Логотипні пари на Entry зсунуті від колонок .held на 9–19px; hover-межа на неінтерактивних logo-slot і trio.
- Новини на Entry без дати: .chip--date містить категорію.
- GM-error: дві кнопки однієї дії («Match my situation» і «…again»).
- Industry: рядки 4–5 без дати під заголовком «arrives with a date on it»; «closed by» випадає з формули.

## Questions to Consider
- Що, якби результат підбору починався з дослівного повтору відповіді, а Fits був би доказом, а не компліментом?
- Чи потрібен герой-фото на екрані-інструменті, якщо він відсуває кнопку за згин?
- Якщо партнер — головний доказ інтегратора, чому на галузевій сторінці його немає зовсім?
