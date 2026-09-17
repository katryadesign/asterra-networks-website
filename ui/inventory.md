# Інвентар компонентів — Asterra Networks

**Складено:** 2026-09-17 · **Джерела:** усі 28 сторінок [`wireframes/`](../wireframes/) (12 екранів +
16 станів), [`wireframes/_screens.md`](../wireframes/_screens.md), [`sitemap.md`](../sitemap.md),
стилі `_wireframe.css` → `_panel.css` → `_parts/*.css`.

**Що це.** Перелік того, **що реально стоїть у вайрфреймах**, — вхідні дані для кіта
(урок 07 — `ui/kit.css`; з уроку 08 — `tokens/tokens.css` + `components/`; вітрина `ui/kit.html`). Нічого не вигадано: кожен рядок має адресу в розмітці.
Це інвентар **усього продукту**, а не двох пофарбованих екранів; більшість компонентів нижче
в `DESIGN.md` не описана, бо туди потрапили тільки guided matching і solution detail.

**Правила підрахунку.**
- Одиниця — **екран** (12), не сторінка (28). Стани того самого екрана не додають входжень.
- У таблицю потрапляє те, що зустрічається на **двох і більше екранах**. Одиничне — у §9 «Разове».
- Де той самий компонент має різні класи на різних екранах (дрейф назв), рядок один, а колонка
  «Розмітка» називає всі входження — зведення в один API робить `/impeccable extract` на кроці 3.
- «Фото» = компонент має слот зображення в CSS (`background-image`), а не «до нього пасувало б фото».

**Екрани (12):** entry · guided-matching · industry · solution-detail · norm · crew-access ·
approval-materials · inquiry · insights · company · careers · legal.

---

## 1. Навігація і хром

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Шапка сайту** (двошарова: бренд + утилітний ряд + головний ряд) | `header > .wrap > .brand + .navs > nav.nav-top + nav.nav-main` | **12/12** | hover, focus-visible; поточного пункту не позначено ніде | — |
| **Підвал** (5 колонок + правова смуга) | `footer > .foot-cols > h4 + ul` , `.foot-bar`, `.foot-legal` | **12/12** | hover, focus-visible | — |
| **Посилання в навігації** | `.nav-top a`, `.nav-main a`, `footer a` | **12/12** | default · hover (підкреслення межею) · focus | — |

Поточний пункт нав не має активного стану **в жодному з 28 файлів** — це не пропуск інвентаря,
а факт розмітки. У кіт компонент увійде з варіантом `current`, і його доведеться проставити при
збірці екранів (крок 5).

## 2. Каркас екрана

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Шапка екрана** (H1 + лід + опційні бейдж категорії та кнопки) | `section.gm-head > .wrap` | **11/12** (усі, крім entry) | той самий вигляд у всіх станах екрана | **так — 4:** guided-matching · solution-detail · industry · crew-access (панель на правому треку ≥900px) |
| **Рейкова секція** (H2 у лівій рейці 250px, зміст праворуч, парні дзеркальні) | `.wrap.pad-b > .stack-s > section` | **9/12** (approval · careers · company · crew-access · industry · insights · legal · norm · solution-detail) | — | — |
| **Доказова смуга** (секція на `surface` на всю ширину обгортки) | той самий `section`, вибирається через `:has(table.spec / .trio-l / .rows)` | **4/12** (crew-access · industry · solution-detail; на entry — `.band`) | — | — |
| **Компактна смуга** (секція без рейки) | `section.band-tight` | **2/12** (entry · inquiry) | — | — |

**Увага для кіта:** доказова смуга зараз не має власного класу — вона вмикається селектором
`:has()` по вмісту. У кіті це має стати явним класом-варіантом секції, інакше «на екрані не
з'являється жодного нового стилю» не виконати.

## 3. Картки й переліки

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Картка-відповідь** (фото-смуга → моно-бейдж → H3 → моно-рядок напряму → текст → панель величин → дії) | `.match` / `.match-secondary` (guided-matching) · `.index-major > article` (entry) | **2/12** | base; у loading заміщається скелетом тієї самої геометрії | **так:** первинна картка й обидві картки `index-major` |
| **Картка-відповідь, підпорядкована** (без фото, прозора, менший кегль) | `.match-secondary` · `.index-minor > article` | **2/12** | base | ні — фото є привілеєм рішення |
| **Рядок норми** (моно-код + «You keep …» + ghost-дія) | `.reg-row` | **5/12** (approval-materials · entry · industry · norm · solution-detail) | base; варіант без власної дії — прозорий | — |
| **Ранжований перелік ситуацій** (перший рядок на всю ширину) | `ul.rows > li > .name + .meta` | **2/12** (industry · solution-detail) | base | — |
| **Тріо панелей** (ранжоване: перша ширша й з межею рангу, остання прозора) | `.trio-l > div` | **4/12** (careers · crew-access · industry · solution-detail) | base | — |
| **Новинний рядок** (заголовок + дата + ghost-дія) | `article.news-item` | **2/12** (entry · insights) | base, hover | — |

## 4. Доказ і величини

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Панель величин** (коробка `surface-2`: моно-мітка \| значення) | `.match dl` (guided-matching) · `dl.kv` (company · crew-access · inquiry · norm) | **5/12** | base; у inquiry живе в success і loading (квитанція) | — |
| **Табличний варіант панелі величин** (фіксований жолоб міток 220px, tabular-nums) | `table.spec` | **1/12** (solution-detail) | у loading заміщається `.sk-dl` | — |
| **Моно-бейдж** — три варіанти однієї форми: категорія · ранг · мітка напряму | `.obj-line` (9 екранів) · `.rank` (guided-matching, варіант «обраний» — інверсія) · `.tag` (entry) | **10/12** | default · selected (інверсія) | — |
| **Моно-чіп величини** (лічильник, запис відповідей, статус, дата, вимога) | `.count` + `.answered` (guided-matching) · `.status-line` (4 екрани в loading) · `.date` (entry · insights) · `.req` (entry) | **6/12** | нейтральний · подія (`signal` на error) · годинник (loading) | — |
| **Слот [TBD]** (пунктирний контур; інлайн-чип і блок на всю міру клітинки) | `.tbd` | **7/12** (approval-materials · careers · company · crew-access · industry · legal · solution-detail) | — | — |
| **Двотон у заголовку** (друга половина H1/H2 пригашена) | `h1 > .dim`, `h2 > .dim` | **6/12** (careers · company · crew-access · entry · industry · insights) | — | — |
| **Примітка** (дрібний текст під блоком) | `.hint-sm` | **7/12** (approval · crew-access · guided-matching · industry · inquiry · norm · solution-detail) | — | — |

## 5. Форми

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Панель форми** (контейнер на `surface`, падінг 24px) | `.interview` (guided-matching, липка рейка 340px) · `form.request` (inquiry) | **2/12** | base · error (повідомлення над формою) · loading | — |
| **Поле форми** (label + контрол + опційна підказка) | `.field > label + select/input/textarea` | **2/12** (guided-matching · inquiry) | default · focus; **валідації полів не спроєктовано** | — |
| **Select** | `select` (5 на guided-matching, 2 на inquiry) | **2/12** | default · focus | — |
| **Текстове поле і текстова область** | `input`, `textarea` | **1/12** (inquiry) | default · focus | — |
| **Рядок маршрутизації заявки** | `.routing` | **1/12** (inquiry) | — | — |

**Дірка, яку доведеться закрити свідомо:** стану помилки **поля** немає ні в `_screens.md`, ні в
розмітці — це записано як свідомо відкрите в `CLAUDE.md` §17. Кіт може дати варіант `invalid`,
але екрани його не використають, доки стан не ухвалено.

## 6. Зворотний зв'язок і стани

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Повідомлення стану** (панель: іконка + заголовок + текст + дія) | `.notice` | **6/12** (approval-materials · crew-access · guided-matching · industry · inquiry · solution-detail) | **4 варіанти:** error (кораловий, `danger-triangle`) · empty (`info-circle`) · loading (`clock-circle`) · success (`check-circle` + квитанція `.kv`) | — |
| **Скелет — блок** (кістки повторюють геометрію того, що заміщають) | `.sk-block` / `.sk-block.last` + `.sk` (`sk-line`, `sk-title`, `sk-h2`, `sk-rank`, `sk-area`, `sk-dl`, `sk-dt`, `sk-dd`, `sk-btn`) | **5/12** (approval · crew-access · guided-matching · industry · solution-detail) | єдиний стан — loading; пульс знімається `prefers-reduced-motion` | плейсхолдер фото-смуги на guided-matching |
| **Скелет — рядки без блока** (кістки просто в повідомленні) | `.sk.sk-line` всередині `.notice` | **1/12** (inquiry-loading) | loading | — |
| **Розвилка-відкат** (смуга над межею: текст ліворуч, два дороговкази праворуч) | `.fallback` | **4/12** (approval-materials · crew-access · guided-matching · industry) | однакова в усіх станах екрана — шлях не зникає при збої | — |

Стани по екранах (з `_screens.md`, 16 сторінок станів): guided-matching — empty · error · loading ·
industry — error · loading · solution-detail — error · loading · crew-access — empty · error ·
loading · approval-materials — empty · error · loading · inquiry — error · loading · success.
**Entry свідомо без станів**; norm, insights, company, careers, legal станів не мають.

## 7. Дії

| Компонент | Розмітка | Екрани | Стани | Фото |
|---|---|---|---|---|
| **Кнопка первинна** (інверсія: чорнило як фон) | `.btn` | **11/12** (усі, крім legal) | default · hover · focus-visible (кораловий контур) | — |
| **Кнопка ghost** (прозора, межа рангу) | `.btn.btn-ghost` | **9/12** (approval · careers · crew-access · entry · guided-matching · industry · insights · norm · solution-detail) | default · hover · focus | — |
| **Стрілка «далі»** — не компонент, а варіант кнопки | `::after` на первинній дії, що веде вперед по флоу | **4/12** (guided-matching · solution-detail · entry · industry) | — | — |
| **Посилання в тексті** | `a` всередині `.body` / `.hint-sm` | **12/12** | default · hover · focus | — |

## 8. Іконки

Один набір — **Solar linear**, через маску `api.iconify.design`. Усі входження в продукті:

| Іконка | Де | Екрани |
|---|---|---|
| `shield-check` | моно-бейдж категорії й рангу | 10 |
| `routing-2` | бейдж підпорядкованої картки | 1 |
| `widget-4` | моно-рядок напряму в картці | 1 |
| `alt-arrow-right` | стрілка «далі» на кнопці | 4 |
| `danger-triangle` | повідомлення error + лічильник error | 6 |
| `info-circle` | повідомлення empty | 3 |
| `clock-circle` | повідомлення й статус loading | 6 |
| `check-circle` | повідомлення success | 1 |

## 9. Разове — у кіт не тягнемо (переглянуто на кроці 5)

Компоненти, що стоять рівно на одному екрані і не мають родичів у таблиці вище. Усі — на
**entry**, якщо не вказано інше:

- **Герой головної** (`.hero` + `.backdrop`) — власна композиція з фото-панеллю.
- **Смуга-заява** (`.statement` + `.pos-label` + `.after`) — фото на всю ширину з панеллю поверх.
- **Схема орбіт** (`.orbit` + `.orbit-row` + `.tier` + `.bar` + `.desc`) — єдина схема продукту.
- **Партнерська стрічка** (`.logo-row` + `.logo-slot`) — комірки акредитацій.
- **Секторний перелік** (`.sector-list` + `.nm` + `.dt`).
- **Блок «що тримаєте»** (`.held`) і дуо-секція (`.cap .duo`).
- **Індекс напрямів** (`.index` як контейнер; картки всередині — у таблиці §3).
- **Дуо-колонки** (`.duo-even`) — industry.
- **Рядок маршрутизації** (`.routing`) — inquiry (див. §5).

> **Крок 5, 2026-09-17:** усі блоки цього списку, що стоять на entry, і `.duo-even` на industry
> **перенесено в кіт** — не через повторюваність, а за правилом кроку: екран не має права на
> власні стилі, бракуючий компонент спершу йде в кіт. `.routing` (inquiry) — чекає своєї групи.

**Два винятки, які варто обговорити перед кроком 3:** партнерська стрічка — головний тип
доказу за `CLAUDE.md` §6.1, а схема орбіт — єдиний носій рішення A4 «читабельна схема». Обидва
формально разові, але обидва — не декор. Пропозиція: **у кіт беремо, у вітрину ставимо**, бо
наступні екрани (galузі, рішення) їх ймовірно успадкують; рішення за тобою.

## 10. Що кіт має дати понад наявне

Не вигадані компоненти, а дірки, видні з таблиць вище:

1. **Активний пункт навігації** — стану немає в жодному файлі (§1).
2. **Явний клас доказової смуги** замість `:has()`-селектора (§2).
3. **Стан `invalid` для поля** — якщо вирішимо його ухвалити (§5).
4. **Єдиний API моно-бейджа** — зараз три класи (`obj-line`, `rank`, `tag`) з однаковою формою (§4).
5. **Єдиний API моно-чіпа величини** — чотири класи (`count`, `answered`, `status-line`, `date`) (§4).
6. **Панель величин як один компонент** — зараз `dl` у картці, `.kv` і `table.spec` (§4).

## 11. Утиліти й модифікатори — не компоненти

Класи, що не описують окремої речі, а змінюють сусіда. У кіт ідуть як модифікатори, не як
компоненти:

`.body` (абзац тексту) · `.lede` (перший абзац секції) · `.meta`, `.name` (пара всередині
переліку) · `.h-small` (менший H2) · `.why` (текст картки) · `.note` (підпис під заголовком
панелі) · `.short` (коротша кістка скелета) · `.last` (останній блок скелета) · `.first`
(перший рядок переліку) · `.gm-grid`, `.result`, `.result-head`, `.duo`, `.duo-even`,
`.offset`, `.spaced`, `.band`, `.pad-b` (сітки й відступи) · `.on-dark`, `.on-panel`
(успадковані перемикачі тону з `_wireframe.css`; у мові «Панель» вони нічого не змінюють —
кандидати на прибирання).

## 12. Перевірка інвентаря (проти кроку 3 і 7)

Перевірено скриптом по всіх 28 сторінках 2026-09-17:

- **92 класи** в продуктовій розмітці (службовий хром `wf-*` виключено).
- **Кожен** з них присутній у цьому файлі — у таблицях §1–§8, у «Разовому» §9 або в утилітах §11.
- **Жоден** компонент у таблицях не названий за класом, якого немає в розмітці. Іконки §8 живуть
  масками в CSS, не класами — це єдиний виняток, і він названий.
- Число входжень у колонці «Екрани» — з того самого скрипта, не з ока.

Це і є вхідна умова для дозапиту «кіт розрісся»: компонент, якого нема в цьому файлі і якого
не використовує жоден екран `wireframes/`, у `components/` (урок 07 — `ui/kit.css`) не має права з'явитися.

## 13. Назви в кіті — старе (вайрфрейми) → нове (урок 07: ui/kit.css; з уроку 08 — components/)

Додано 2026-09-17 після кроку 3, щоб звірка інвентаря з кітом була механічною. Ліва колонка —
те, що зараз у розмітці `wireframes/`; права — API кіта, на який екрани переходять на кроці 5.

| Компонент | У вайрфреймах | У кіті |
|---|---|---|
| Шапка сайту · підвал | `header` · `footer` + `.nav-top` | `.site-header` · `.site-footer` + `.nav-utility` |
| Шапка екрана | `.gm-head` (+ фото через `:has()`) | `.screen-head` (+ `.screen-head--photo` + `.photo--antenna/--rack/--mast/--dish`) |
| Рейкова секція · доказова смуга | `.stack-s` · секція через `:has()` | `.stack` · `.section--band` |
| Бейдж | `.obj-line` · `.rank` · `.tag` | `.badge` (+ `--selected`, `--routing`, `--none`) |
| Чіп величини | `.count` · `.answered` · `.status-line` · `.date` · `.req` · `.area` | `.chip` (+ `--boxed`, `--record`, `--area`, `--wait`, `--event`) |
| Панель величин | `.match dl` · `.kv` · `table.spec` | `.values` · `table.values` |
| Картка-відповідь | `.match` · `.match-secondary` | `.match` · `.match--secondary` |
| Рядок норми | `.reg-row` (без кнопки — через `:not(:has())`) | `.reg-row` · `.reg-row--framework` |
| Тріо доказу | `.trio-l` | `.trio` · `.trio--ranked` |
| Панель форми | `.interview` · `form.request` | `.form-panel` (+ `--sticky`) |
| Примітка | `.hint-sm` | `.hint` |
| Повідомлення стану | `.notice` (варіант через `:has()`) | `.notice--error/--empty/--loading/--success` |
| Скелет | `.sk-block` · `.sk-block.last` · `.sk-dl` | `.skeleton` (+ `--photo`, `--subordinate`) · `.sk-values` |
| Кнопки | `.btn` · `.btn-ghost` · стрілка через `::after` на селекторі екрана | `.btn` · `.btn--ghost` · `.btn--next` · `.btn--block` · `.btn--sign` |

| Розкладка результату · заголовок зони | `.gm-grid` · `.result-head` | `.split` · `.section-head` |
| Секційні варіанти | `:has()`-смуги, `aria-labelledby`, `.on-dark`/`.on-panel` | `.section--band/--bleed/--wide/--close` · `.band--raised/--ruled/--proof/--areas/--cta/--tone-lift` |
| Рядок норми з кодом | `.reg-row` + екранний скоуп | `.reg-row--code` |
| Реєстр · пара | `.rows` + екранний скоуп · `.duo-even` | `.rows--register` · `.pair.pair--ruled` |
| Розвилка-дороговказ | `.fallback` + екранний скоуп | `.fallback--fork` |
| Чіпи головної | `.tag` · `.req` · `.date` | `.chip--tag` · `.chip--req` · `.chip--date` |
| Скелет рейкової сторінки | `.sk-block` · `.sk-dl` без коробки | `.skeleton--plain` · `.sk-values--plain` |
| Разові блоки головної | `.hero`, `.statement`, `.orbit`, `.index-*`, `.sector-list`, `.offset`, `.held`, `.logo-row`, `.duo` | ті самі назви, тепер у кіті (+ `.hero--photo`, `.duo--cap`, `.duo--anchored`, `.photo--station`, `.photo--aisle`) |

**Головна зміна не в назвах, а в механізмі:** стан і варіант у вайрфреймах вгадувались
селектором `:has()` по вмісту сторінки, у кіті їх називає клас. Це те, що робить крок 5
механічним: екран заявляє, що він показує.

---

## Фото — власний набір (крок 4 виконано 2026-09-17)

Стокові знімки Unsplash **замінено повністю** (0 входжень у `ui/` і `wireframes/`). Набір —
[`visuals/`](../visuals/), канон, промпти й запис колірного проходу —
[`visuals/README.md`](../visuals/README.md). **9 слотів, 9 окремих знімків** (було 4 знімки на
9 входжень — один кадр повторювався на різних темах).

| Слот | Екрани | Файл | Модифікатор кіта |
|---|---|---|---|
| Шапка екрана | guided-matching (4 сторінки) | `head-matching-antenna.jpg` — радом VSAT на щоглі | `.photo--radome` |
| Шапка екрана | solution-detail (3) | `head-solution-cabinet.jpg` — шафа на переборці | `.photo--cabinet` |
| Шапка екрана | industry (3) | `head-industry-mast.jpg` — щогла з радаром | `.photo--mast` |
| Шапка екрана | crew-access (4) | `head-crew-dish.jpg` — антена на палубі | `.photo--dish` |
| Картка-відповідь | guided-matching (Shield), entry (Shield) | `card-shield-cabinet.jpg` — патч-панель і шина заземлення | `.photo--patch` |
| Картка-відповідь | entry (Connect) | `card-connect-antenna.jpg` — опорно-поворотне кільце антени | `.photo--slew-ring` |
| Картка-відповідь | guided-matching (Equip, прихована рішенням «фото — привілей рішення») | `card-equip-bridge.jpg` — пульт містка | `.photo--console` |
| Герой головної — разове | entry | `hero-entry-dish.jpg` — антена берегової станції | тільки `_panel.css` |
| Фон смуги-заяви — разове | entry | `band-statement-room.jpg` — прохід між шафами | тільки `_panel.css` |

**Колорит:** відтінок 139–163° на всіх дев'яти (морська зелень у матеріалі), синій діапазон
0%, насиченість 0.06–0.14. Фільтр у CSS — `grayscale(0.35)`.

Правило теми лишається з К1: **обладнання як задокументований об'єкт**. Людей у контексті й
атмосферного краєвиду в наборі немає.

## 14. Крок 5 — перевід екранів на кіт (завершено 2026-09-17)

| Група (навігатор) | Екрани | Хто | Стан |
|---|---|---|---|
| Еталон | guided-matching (4) · solution-detail (3) | оркестратор | ✅ |
| **Orient** | entry · guided-matching · industry (3) | оркестратор | ✅ |
| Understand fit | norm · crew-access (4) | субагент | ✅ |
| Prepare approval | approval-materials (4) | субагент | ✅ |
| Reach the expert | inquiry (4) | субагент | ✅ |
| Hygiene | company · careers · insights · legal | субагент | ✅ |

**Фінальна загальна звірка після всіх груп:** 28 сторінок × 1440/1024/375 = 84 прогони,
11 445 порівнянь елементів продукту, **0 розбіжностей** з вихідною розміткою (git HEAD).
Кожна сторінка підключала тільки `../ui/kit.css` + `_chrome.css` (з уроку 08 — `../tokens/tokens.css` + `../components/index.css` + `_chrome.css`); `<style>` і `style=""` —
ніде; шапка й підвал — один варіант на всі 28; голих значень у класах `kit.css` — 0.

`_wireframe.css`, `_panel.css`, `_parts/*.css` після кроку 5 не підключає жодна сторінка —
вони лишились тільки як історичне джерело значень (на них посилаються DESIGN.md і
concept.md). Прибирати — рішенням на кроці 7.

## 15. Додано в кіт групами кроку 5

### Understand fit — norm · crew-access

<!-- група understand-fit: нові класи — рядок «клас · екрани · навіщо» -->

- `.screen-head--code` · norm · H1 і є код норми: моно, clamp(2.2–4rem), без трекінгу дисплея.
- `.stack--route` · norm · маршрут норма → рішення → папір: одна ліва рейка (зиґзаґ знято), записи розлініяні на всю ширину, останній закритий.
- `.section--lead` · norm · перший запис (паспорт) — H2 на крок вищий (fs-1) на ≥980.
- `.values--doc` · norm · crew-access · колишній `.kv`: значення в кеглі абзацу 15px, міра 70ch, мітка з інтерліньяжем 1.5.
- `.values--passport` · `.values-key--event` · `.values-val--event` · `.values-val--lift` · norm · паспорт норми: строк як подія (сигнал + годинник), дата чинності світліша; нижче 560 мітка над значенням.
- `.hint--aside` · norm · застереження класу — волосяна ліва лінійка, чужий голос у полях.
- `.reg-row--answer` · norm · єдина відповідь маршруту: межа рангу, падінг 22, H3 fs-2 (окремо від `.reg-row--lead` групи approval).
- `.body--object` · norm · «папір, який тримаєш» як предмет на поверхні.
- `.dim--even` · crew-access (4) · двотон без рангу: друга половина H1 окремим рядком тим самим чорнилом.
- `.wrap--pad-flush` · crew-access (4) · регіон станів без верхнього падінга (в еталоні `.pad-b` його не мав).
- `.stack--diptych` · `.section--diptych-start/-end` · crew-access (4) · ≥980 сітка 2×1fr: MLC ↔ екіпаж обабіч осі, решта на всю ширину; відступ першого блока від шапки.
- `.values--ruled` · `.values--numbered` · crew-access · реєстр пунктами з суцільними лінійками; пункти політики 01…09.
- `.section--slot` · `.body--slot` · `.tbd--bare` · crew-access · ринкові цифри ↔ порожній слот «Our parameters» пунктирною площею поруч.
- `.trio--pair-branch` · crew-access · тріо як пара зобов'язань + повноширинна гілка до type-approval-доказу.
- `.notice--flush` · `.skeleton--flush` · crew-access-empty/-error/-loading · останній абзац / кістка без нижнього відступу — дно панелі дорівнює падінгу.

### Prepare approval — approval-materials

<!-- група approval: нові класи — рядок «клас · екрани · навіщо» -->
- `.section--numbered` · approval-materials · нумерація позицій реєстру лічильником 01–05 (адресованість рядка для переказу нагору; слоти теж нумеруються)
- `.reg-row--lead` · approval-materials · ведуча позиція реєстру (форвардна сторінка рішення) — межа line-strong замість line
- `.reg-row--slot` · approval-materials · чесний слот [TBD]: пунктир line-strong без заливки (і в смузі), заголовок --ink-2
- `.reg-row--stacked` · approval-materials · до 1379px текст рядка на всю ширину, дія під ним — однаково в усьому реєстрі
- `.hint--set` · approval-materials · виноска до всього набору: margin-top 12px замість 6px
- `.sk--bone` · approval-materials-loading · кістка заголовка (.sk-h2) тоном --bone, як .sk-title/.sk-btn
- Без нових класів, з наявних: `.gm-head`→`.screen-head` (без фото) · `.obj-line`→`.badge` · `.pad-b`→`.wrap--pad` · `.stack-s`→`.stack` · смуга бібліотеки → `.section--band` (без `--bleed`) · `.status-line`→`.chip--wait.chip--status` · `.sk-block`→`.skeleton--plain` (+`--last`) · `.notice`→`--error/--empty` · стрілка на `.reg-row > .btn-ghost` і `.fallback .btn-ghost` → `.btn--next`

### Reach the expert — inquiry

<!-- група inquiry: нові класи — рядок «клас · екрани · навіщо» -->

- `.screen-head--compact` · inquiry (4) · шапка віддає системні 88/72 → 40/24, H1 на базову шкалу, рядок-претензія в регістрі 1.25rem: форма з дією в першому фолді («One step»).
- `.work-rail` (+ `--stacked`) · inquiry (4) · замість `.wrap.pad-b` з екранним ґрідом: робоча колонка + рейка 300px праворуч ≥980; `--stacked` — на error, де в колонці notice і форма, рейка тягнеться на два ряди (було `:has(.notice):has(.request)`).
- `.context-panel` · inquiry (4) · замість `.band-tight` + `.h-small`: компактна супровідна панель перенесеного контексту, `strong` чорнилом.
- `.form-panel--request` · `.field--wide` · inquiry, inquiry-error · замість `form.request`: сітка 2×, поле повідомлення на всю ширину (було `.field:has(textarea)`), кнопка і `.routing` в одному ряду; мітка 0.9rem, textarea min-height 110.
- `.values--receipt` · inquiry-loading, inquiry-success · замість `.kv` у квитанції: рядки розлініяні наскрізь, 15px, dd ≤70ch.
- `.notice--receipt` · inquiry-success · підтверджена квитанція: межа line-strong, значення `--ink` (було `:has(.notice .kv):not(:has(.sk))`).
- `.notice .sk-line` · inquiry-loading · тонкі рядки скелета (14/10) усередині повідомлення стану.

### Hygiene — company · careers · insights · legal

<!-- група hygiene: нові класи — рядок «клас · екрани · навіщо» -->
- `.wrap--pad-compact` · company · careers · insights · legal · верх рейкової обгортки 48px (був екранний скоуп `body:has(a[aria-current][href^="…"]) .wrap.pad-b`)
- `.values--page` · company · панель величин просто на сторінці (`dl.kv`): кегль 15px на панель, мітка на 1.5, без нижнього поля
- `.values--stack` · company · ≤560px мітка над значенням (був скоуп `body:has(a[aria-current][href^="company"]) .kv`)
- `.tbd--flow` · legal · careers · пропуск усередині абзацу бере line-height батька, рядок не росте
- без нових класів: `.news-item` ≤720px (insights) — кіт уже має той самий поріг і відступ; смуга careers — наявний `.section--band` (у еталоні вмикалась `:has(.trio-l)`)



## 16. Крок 6 — правки після критики (2026-09-17)

Нові класи й атрибути (причини — DESIGN.md, «Правки після критики»):

- `.skip-link` · усі 28 екранів · перехід до `main#main` з клавіатури (K17)
- `.logo-row--lead` · entry · solution-detail · crew-access · industry · смуга акредитацій перед нашими твердженнями (R1)
- `.logo-name` + `.logo-cat` · ті самі 4 екрани · вигадана марка партнера і її категорія в комірці (R1)
- `.stack--document` · legal · рейка без дзеркала (R4)
- `autocomplete`, `aria-describedby` · inquiry, inquiry-error · атрибути поля (K12)
- заголовки колонок підвалу — `h2` (було `h4`) · усі 28 (K16)

Змінені значення без нових класів: межа поля, шеврон `select`, ціль дотику поля, міжрядковий
`h3`, міра `.foot-legal`/`.hint`, вага `.pos-label`, бейдж без розтягу й без іконки в шапці,
лід лише під H2, відступи після `dl`/`.trio`, дія під текстом у `.duo--anchored`/`.offset`,
порядок помилки на вузькому, рівні колонки неранжованого тріо, ховер лише на інтерактивному.


## 17. Реєстр варіантів, яких бракувало (крок 7, D6)

Перевірка кроку 7 знайшла класи кіта, не згадані в цьому файлі. Кожен — на реальному екрані:

| Клас | Екрани | Роль |
|---|---|---|
| `.badge--routing` | guided-matching | бейдж підпорядкованого збігу з іконкою маршруту |
| `.badge--selected` | guided-matching | бейдж обраного системою — інверсія |
| `.band--areas` | entry | смуга індексу напрямів: більший H2, падінг 88 |
| `.band--cta` | entry | закривальна смуга: ряд кнопок гнучким рядком |
| `.band--proof` | entry | доказова смуга реєстру норм: поверхня, межі, без бічних полів |
| `.band--ruled` | entry | смуга з межею зверху |
| `.band--tone-lift` | entry | пригашена половина H2 світліша на піднятій поверхні |
| `.chip--area` | guided-matching | моно-рядок напряму з іконкою |
| `.chip--boxed` | guided-matching | чіп у коробці — лічильник результату |
| `.chip--event` | guided-matching | чіп події — `signal` + danger-triangle |
| `.chip--record` | guided-matching | запис відповідей під формою |
| `.field-optional` | inquiry | підпис «(optional)» у мітці необов'язкового поля (A2) |
| `.form-panel--sticky` | guided-matching | панель форми липне в рейці від 980px |
| `.notice--empty` | approval · crew-access · guided-matching | стан empty: info-circle, без кольору |
| `.notice--loading` | inquiry | стан loading: clock-circle |
| `.notice--success` | inquiry | стан success: check-circle + квитанція |
| `.section--bleed` | norm · solution-detail | смуга на всю ширину обгортки |
| `.section--close` | solution-detail | закривальна секція: примітка-вихід, кнопки рядом |
| `.section--diptych-end` | crew-access | права половина диптиха |
| `.section--wide` | industry | рядки під заголовком на обидві колонки рейки |
| `.skeleton--last` | approval · crew-access · guided-matching · industry · solution-detail | останній блок скелета без нижнього поля |
| `.skeleton--offset-start` | solution-detail | блок скелета в правій колонці рейки |
| `.skeleton--offset-end` | solution-detail | блок скелета в лівій колонці рейки |
| `.skeleton--photo` | guided-matching | скелет з плейсхолдером фото-смуги |
| `.skeleton--subordinate` | guided-matching | скелет підпорядкованої картки — прозорий |
| `.tbd--block` | solution-detail | пропуск на всю міру клітинки значення |
| `.work-rail--stacked` | inquiry-error | рейка контексту на два ряди; на вузькому помилка вгорі |
