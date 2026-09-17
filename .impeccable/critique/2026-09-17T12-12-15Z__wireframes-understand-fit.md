---
target: "Understand fit group: solution-detail (+error, loading), norm, crew-access (+empty, error, loading)"
total_score: 28
p0_count: 0
p1_count: 1
timestamp: 2026-09-17T12-12-15Z
slug: wireframes-understand-fit
---
# Critique: Understand fit (solution-detail · norm · crew-access, з усіма станами)

Обсяг: wireframes/solution-detail.html (+ -error, -loading), norm.html, crew-access.html (+ -empty, -error, -loading). Стани оцінено як частину одного екрана. Службовий хром (.wf-tree, .wf-states, .wf-doc) виключено. Ухвалені рішення (темна тема, --signal лише на подію, фото обладнання, панелі з рамкою, вага 500, без анімацій, [TBD]-слоти, route-лінійки на norm) не рахуються дефектами.

Вимір: рендер у браузері, прихований iframe 1440 і 375, computed style, контраст рахував браузер. Скриншоти частково недоступні (панель не малювала кадри), тому геометрія з DOM.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | chip role=status на loading є; на solution-detail-error герой з CTA лишається, а заголовок каже «The page did not load.» |
| 2 | Match System / Real World | 3 | регуляція → рішення → «the paper you keep» мовою P1/P2; H1 norm = код, що дублює бейдж |
| 3 | User Control and Freedom | 3 | вихід є з кожного стану; тупики свідомі за політикою |
| 4 | Consistency and Standards | 2 | стрілка --next на crew не на первинній дії; смуги bleed на solution-detail і без bleed на crew (зсув 36px); h3/h2 відкату між base і станами; бейдж героя розтягнутий у смугу |
| 5 | Error Prevention | 3 | контентні сторінки, ризику мало |
| 6 | Recognition Rather Than Recall | 3 | 9 вимірів політики без рангу; активний пункт нав (відоме #11) |
| 7 | Flexibility and Efficiency | 2 | лінійні сторінки, 6 маршрутів у фінальному блоці solution-detail |
| 8 | Aesthetic and Minimalist Design | 3 | три доказові смуги на solution-detail (стеля — дві), дві впритул |
| 9 | Error Recovery | 3 | reload + паралельний маршрут до експерта на crew; на solution-detail лише reload |
| 10 | Help and Documentation | 3 | застереження класу на norm, пояснені порожні слоти |
| **Total** | | **28/40** | **Good** |

## Anti-Patterns Verdict

LLM: не AI slop. Мова «Панель» тримається: chroma 0, одна хроматика, фото-об'єкт, реєстрові рядки норм. Залишкові тики: моно-uppercase бейдж над кожним героєм (одна система, не над кожною секцією — прийнятно), нумерація 01–09 на пунктах політики, що не мають порядку, і ритм «X, not Y» у копірайті crew-access (канон voice.md, не чіпаємо).

Детектор CLI: 3 знахідки. em-dash-overuse на solution-detail (7) і crew-access (6) — хибні: видимі продуктові тире лише всередині токена `[TBD — no source]`, решта в <title>, коментарях і .wf-doc. numbered-section-markers на crew-access-error («10, 11, 12») — хибне, числа з .wf-doc/дерева. Реальні 01–09 на crew-access base детектор не бачить (CSS counter).

Браузер (detect.js інжектовано на 5 сторінок; live-server зупинено): tiny-text 10–11px і line-length ~123 cpl — усі в службовому хромі, хибні. all-caps-body: бейдж героя (40 симв., продукт — P3) і h2 .wf-doc (хром). line-length ~104 cpl на `.foot-legal` у підвалі — реальне, P3.

Контраст AA: 0 провалів на 8 сторінках × 2 ширини. Кегль ≥12.8px скрізь у продукті. Переповнення: 0.

## What's Working

- Реєстровий рядок «регуляція → що лишається на столі» (reg-row на solution-detail, «One decision closes it» на norm): незайнятий на ринку зв'язок R1 зроблено формою, не абзацом.
- Чесні порожні слоти з поясненням поруч: [TBD] не виглядає як баг, а як позиція.
- Стани crew-access зберігають героя й відкат до експерта: на error маршрут до конверсії не зникає.

## Priority Issues

- [P1] Немає партнерської акредитації в блоці доказу. CLAUDE.md §6.1 робить її первинним типом доказу, який можна показати чесно (категорії партнерів). «What stands behind it» на solution-detail і «What stands behind the policy» на crew-access мають лише зобов'язання й [TBD]. Fix: рядок категорій партнерів (satellite capacity / navigation & bridge OEMs / safety equipment) з вигаданими марками. /impeccable shape
- [P2] Стрілка --next непослідовна: на crew-access (всі 4) первинна «Talk to an expert about your policy (need)» без стрілки, а ghost «Read Asterra Connect» у відкаті зі стрілкою; на solution-detail і norm первинна зі стрілкою. /impeccable polish
- [P2] Смуги crew-access без --bleed: h2 зсунутий на 36px від осі (298→334 на 1440, 16→36 на 375), тріо стискається до 238px на 375. На solution-detail смуги bleed. /impeccable layout
- [P2] 9 вимірів політики однаковою вагою, пронумеровані 01–09 — порушення принципу «ранжовано, не викладено»; нумерація імітує порядок. /impeccable distill
- [P2] Стан empty на crew-access не має тригера (сторінка без вводу) і ставить дві ідентичні первинні кнопки «Talk to an expert about your policy need» одна під одною. /impeccable harden

## Persona Red Flags

**P2 (Fleet IT):** на solution-detail шукає, чиє обладнання й ємність — не знаходить; фінальний блок дає 6 маршрутів (3 кнопки + 3 текстові посилання).
**P1 (Technical Superintendent):** на norm H1 — лише код, що повторює бейдж; «читає» тільки після абзацу героя.
**Sam (a11y):** на crew-access base заголовок відкату h3 стає підрозділом «What stands behind the policy»; у станах той самий блок h2.
**Casey (mobile 375):** crew-access ~6100px, смуга 9 вимірів 1700px; кнопка в empty-повідомленні переноситься на 2 рядки (75px), та сама в відкаті — ні.

## Minor Observations

- Бейдж героя розтягується на ширину колонки (606px) рамкою-смугою, бо в grid стає flex-блоком.
- solution-detail має 3 доказові смуги (стеля 2), дві останні впритул з проміжком 55px.
- Фінальний блок «Does it close your requirement?» — питання в правій рейці, кнопки ліворуч: відповідь видно раніше за питання.
- solution-detail-error/loading: герой з CTA завантажений, а текст стану каже, що сторінка не прийшла.
- Герой crew-access 736px: на 1440×900 нижче героя не видно нічого.
- .foot-legal ~104 знаки в рядку.

## Questions to Consider

- Якщо партнерська акредитація — первинний доказ інтегратора, чому на сторінці рішення її немає зовсім?
- Чи потрібен стан empty на сторінці, де людина нічого не вводить?
- Котрий із 9 вимірів політики головний для P1, який підписує рахунок?
