# Перевірка екранів проти кіта — таблиця дефектів (урок 07, крок 7)

**2026-09-17.** Усі 28 сторінок `wireframes/` проти `ui/kit.css`, `ui/kit.html`, `DESIGN.md`,
`ui/inventory.md`, `microcopy.md` + `/impeccable audit`. **Нічого не виправлено** — спершу
пріоритети користувача. Колонка «Пріоритет» порожня — вона твоя.

## Статус (2026-09-17)

Пріоритет користувача: **усі P2**; рішення — опитуванням.

- ✅ **A1** · **A2** (рішення: позначати необов'язкові) · **A3** · **A4** (особисті поля без `name` — `post` зламав би прохідний флоу на статичному хостингу) · **A5** · **A6**
- ✅ **D1** · **D3** · **D6** · **D7** · **D14** (CLAUDE.md §19, README «UI»)
- ✅ **D12** → `wireframes/_archive/` · **D13** → `ui/_process/` (рішення)
- ✅ **T1–T10** → `microcopy.md` «Поточний канон» (рішення); **T2 знято** — хибна знахідка: на industry повна назва «Document of Compliance (DOC)» стоїть раніше, абревіатура далі за правилом
- ⏸ P3 (D2, D4, D5, D8–D11, A7–A15) — не в пріоритеті

## Що перевірено і чисто

| Перевірка | Результат |
|---|---|
| Екран із власним блоком стилів або без `ui/kit.css` | **0** — усі 28 підключають тільки `../ui/kit.css` + `_chrome.css` |
| Стиль прямо в розмітці (`style=""`) | **0** |
| Контраст пар колір/фон (текст AA; межа поля ≥3:1) | **0 провалів** на 1440 і 375 — перевірено після кроку 6 |
| Кегль продукту ≥12.8px · переповнення на 375/1440 | **0** · **0** |
| Стокові фото / фото не за темою | **0** — усі знімки з `visuals/`, модифікатори за темою (К1) |
| Іконки поза набором / з зовнішнього сервісу | **0** — 8 Solar linear локально в `ui/icons/` |
| Кольори DESIGN.md ↔ `:root` кіта | **12 з 12 збігаються** |
| Порядок заголовків · перехід до змісту | без пропусків · «Skip to content» на всіх 28 |

## Дефекти — моя перевірка

| # | Файл | Елемент | Що не так | Як виправити | Вага | Пріоритет |
|---|---|---|---|---|---|---|
| D1 | `DESIGN.md` §4, §5 Match card | «Hover світлішає межу панелі до `line-strong`» | Після K15 ховера на панелях немає — опис розійшовся з кітом | Прибрати рядки про ховер панелей | P2 | |
| D2 | `DESIGN.md` §5 Rank badge | «іконка Solar 13px ліворуч» | Після K18 бейдж категорії в шапці екрана без іконки; іконка лишилась тільки в картці збігу | Уточнити: іконка — лише на бейджі рангу в картці | P3 | |
| D3 | `DESIGN.md` frontmatter | `colors:` | Немає токенів, що вже живуть у кіті: `ink-dim` (двотон заголовка), `field-border` (K1) | Додати в frontmatter і в розділ Colors | P2 | |
| D4 | `.impeccable/design.json` | sidecar компонентів | Знятий на кроці 1: межа поля `line-strong`, немає шеврона, варіантів кроків 5–6 | Перегенерувати разом із DESIGN.md | P3 | |
| D5 | `ui/kit.css` | `.badge--none`, `.photo--console` | **Кіт розрісся:** жоден екран їх не використовує (перший — тільки у вітрині, другий — запас для вторинної картки без фото) | Прибрати з кіта, вітрини й інвентаря | P3 | |
| D6 | `ui/inventory.md` | таблиці §1–§8, §13–§16 | **29 класів кіта не згадані в інвентарі** (`badge--selected`, `band--*`, `chip--*`, `form-panel--*` …) | Дописати в таблицю «старе → кіт» і рядки компонентів | P2 | |
| D7 | `ui/kit.html` | вітрина | **~18 класів кіта без показу** (`band`, `band--areas/--cta/--proof/--raised/--ruled/--tone-lift`, `band-tight`, `form-panel--sticky`, `lede`, `section--bleed` …) | Додати демо або позначити як розкладкові з посиланням на екран | P2 | |
| D8 | `guided-matching.html` | `span.badge` у картці збігу | **Той самий компонент — різна розмітка:** на 10 екранах `p.badge`, тут `span.badge` | Уніфікувати тег (`p`) | P3 | |
| D9 | `entry.html` | `span.chip.chip--tag` в індексі | На решті екранів чіп — `p.chip` | Уніфікувати тег (`p`) | P3 | |
| D10 | `entry.html` | `.sector-list` · H2 «GEO, LEO and terrestrial,<br>run…» | Для скрінрідера текст зливається: «GovernmentPublic sector», «terrestrial,run» — між частинами немає пробілу | Пробіл/роздільник у розмітці між `.nm` і `.dt`, пробіл перед `<br>` | P3 | |
| D11 | `guided-matching*.html` | `div.result` | Клас без правила в кіті (обгортка зони результату) | Лишити як семантичний гачок і записати в інвентар — або прибрати клас | P3 | |
| D12 | `wireframes/_archive/_wireframe.css`, `_panel.css`, `_parts/*` | застарілі стилі | Не підключені жодною сторінкою після кроку 5; на них посилаються DESIGN.md і concept.md як на джерело значень | **Рішення:** видалити (історія в git) і поправити посилання — або перенести в `wireframes/_archive/` | P3 | |
| D13 | `ui/_process/_STEP5.md`, `ui/_process/_STEP6.md` | робочі протоколи | Службові файли процесу в `ui/` поруч із кітом | **Рішення:** лишити як запис уроку чи перенести в `ui/_process/` | P3 | |
| D14 | `README.md` · `CLAUDE.md` | розділи «UI» / «Збірка UI» | README не має розділу про кіт; у CLAUDE.md є лише правило «залишаємо» (§19) | Дописати наприкінці кроку (так і передбачено промптом) | P2 | |

## Текст проти `microcopy.md`

Машинна звірка 28 сторінок з каноном: **100 речень** не знайдено дослівно. Розбір:

- **34 — не розбіжності:** пунктуація, склейка сусідніх елементів, обрізані «…» рядки канону.
- **15 — пояснені правилами voice.md, пізніші проходи змінили екран, але не рядок таблиці канону:**
  norm → regulation (5), sector → industry (3), DOC → Document of Compliance (3), ship → vessel (2),
  manufacturer → OEM (2).
- **~10 — справжні розходження екрана з каноном** (напрям правки треба вирішити):

| # | Файл | Екран | Канон | Як виправити | Вага | Пріоритет |
|---|---|---|---|---|---|---|
| T1 | industry | …since **23** December 2024 PSC can ask too (×2) | …since December 2024… | Канон: дата з днем — правило voice.md, екран правий | P3 | |
| T2 | industry | …before the next **DOC** verification | …next **Document of Compliance** verification | Екран: розкрити абревіатуру (перша згадка) | P2 | |
| T3 | inquiry ×4 | …Asterra Shield, Cybersecurity **· Maritime** | …Asterra Shield, Cybersecurity | Канон дописати (контекст несе галузь) | P3 | |
| T4 | company | The operating model **survived that growth** unchanged | …**made that journey** unchanged | Вирішити, котра редакція канон | P3 | |
| T5 | industry-error | The **Maritime industry** content… | The **maritime** content… | Вирішити; рядок «Maritime» з великої — назва галузі | P3 | |
| T6 | company | …navigation and bridge **OEMs**, safety equipment **manufacturers** | …bridge **manufacturers**, safety equipment **makers** | Канон: словник voice.md (OEM) | P3 | |
| T7 | careers | …and **those people work here** | …and **this is where those people work** | Вирішити | P3 | |
| T8 | entry | One party stays accountable for all of it**, and is held to it.** | One party stays accountable for all of it. | Вирішити | P3 | |
| T9 | norm · industry | …and **the paper you keep** | …**what paper you are left holding** / **its paper** | Канон: словник voice.md («the paper you keep») | P3 | |
| T10 | entry | …the usage rules stay with you. | …stay with you **rather than with us**. | Канон: прохід Д «rather than» (voice.md §9) | P3 | |

**Системна причина:** таблиці «було/стало» в `microcopy.md` писались по проходах, а пізніші
глобальні правки (voice.md §8–§9, словник) оновили екрани без оновлення кожного рядка. Можна
виправити поштучно (T1–T10) або **додати в `microcopy.md` розділ «Поточний канон» — знятий з
екранів після кроку 7**, щоб звірка мала одне джерело.

## `/impeccable audit`

**Оцінка 15/20 «Good»** (доступність 3 · продуктивність 3 · адаптив 3 · теми й токени 3 ·
антипатерни 3). Перевірено 28 сторінок на 1440/375, 13 базових ще на 320 і з текстом ×2.
Контраст AA скрізь (мінімум 3.93:1 — пригашена половина великих заголовків), кегль ≥12.8px,
заголовки без пропусків, у кожного поля мітка, `id` унікальні. **Детектор: 9 знахідок, усі
хибні** — `em-dash-overuse` ×8 (тире лише в `<title>`, анотації і `[TBD — no source]`),
`numbered-section-markers` ×1 (цифри зі службового дерева).

**Аудит знайшов, що дві правки кроку 6 не доведені до кінця:**

| # | Файл | Елемент | Що не так | Як виправити | Вага | Пріоритет |
|---|---|---|---|---|---|---|
| A1 | guided-matching ×4 · solution-detail | `.fallback--fork .body` «answering three questions», `.section--close .body` «takes three questions» | **R2 не доведено:** я замінила 7 місць, а ці два пропустила — «three» і «questions» стоять на різних рядках розмітки, пошук їх не зловив | «two questions»; дописати в microcopy.md | P2 | |
| A2 | inquiry ×4 | поля форми | **K12 частково:** немає `required`/`aria-required` і позначки обов'язкових. Я лишила це свідомо — правило валідації поля записане як відкрите (CLAUDE.md §17) | **Рішення:** які поля обов'язкові і як це позначати | P2 | |

**Нові дефекти аудиту:**

| # | Файл | Елемент | Що не так | Як виправити | Вага | Пріоритет |
|---|---|---|---|---|---|---|
| A3 | guided-matching ×4 | `#trigger` (select у рейці 340px) | Вибрана відповідь 645px у полі 288px — видно ~40%, решту не прочитати | Скоротити `option` до ≤40 знаків (повне формулювання — у `.hint`/`chip--record`) або радіогрупа | P2 | |
| A4 | inquiry ×4 · guided-matching ×4 | `form method="get"` | Ім'я, компанія й email ідуть у рядок адреси — осідають в історії, логах, Referer | `method="post"` (на білді — Server Action) | P2 | |
| A5 | careers | `.section--band .trio` | При тексті ×2 на 1280 вміст виходить до 1347px при ширині 1261 (WCAG 1.4.4) | `minmax(0,1fr)` у `.trio`, перенос довгих слів | P2 | |
| A6 | `ui/kit.css` | `@import` Google Fonts | Ланцюжок HTML → kit.css → fonts.css → woff2 блокує рендер, без `preconnect` | `<link rel="preconnect">` + `<link rel="stylesheet">` у `<head>` оболонки (на білді `next/font`) | P2 | |
| A7 | `ui/kit.css` | фото `.statement` та інші | Лише JPG; кадр 2400×1028 (398KB) віддається і на 375 | AVIF/WebP + вужча версія через `image-set()` / `@media` | P3 | |
| A8 | entry · industry · solution-detail · crew-access | `.logo-row[aria-label]` | `aria-label` на `div` без ролі — скрінрідер назву пропускає | `ul`/`li` або `role="list"`/`listitem` | P3 | |
| A9 | усі 28 | `href="#"` (Events, 7 галузей у підвалі; на entry ще 7 у `.sector-list`) | Фокусовані посилання нікуди не ведуть | Заглушка-сторінка або слот без `href` | P3 | |
| A10 | entry | `.index-minor .btn--ghost` | 38–39px на 375/320 при цілі дотику 44 | На ≤720px звичайний падінг кнопки | P3 | |
| A11 | inquiry-loading | `.notice--loading[role="status"]` | Live-регіон охоплює всю квитанцію — скрінрідер зачитає весь запит; скелет без `aria-busy` | `role="status"` лише на заголовку, `aria-busy` на контейнер, скелет `aria-hidden` | P3 | |
| A12 | solution-detail | `table.values` | Таблиця без назви | `aria-labelledby="sp-h"` або прихований `caption` | P3 | |
| A13 | `ui/kit.css` | `:root` | Немає `color-scheme: dark` — скролбари, автозаповнення, нативні попапи світлі | `:root { color-scheme: dark; }` | P3 | |
| A14 | `ui/kit.css` | `--i-chevron` | Колір `#b7b7b7` вшитий у data-URI поза токенами | Шеврон маскою + `currentColor` або колір із токена | P3 | |
| A15 | `ui/kit.css` | `.btn--ghost` | Межа кнопки 2.1–2.4:1 до фону; на `surface-2` майже зникає (формально дозволено — кнопку називає текст) | Межа ghost — `--ink-dim` (≥3:1) | P3 | |

---

**Разом:** D1–D14 (кіт і документація) · T1–T10 (текст) · A1–A15 (аудит).
Жодного P0 і P1. P2 — 11: D1, D3, D6, D7, D14, T2, A1–A6.
