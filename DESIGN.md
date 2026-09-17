---
name: Asterra Networks
description: Мова «Панель» — нейтральний чорний, одна хроматика як подія, ранг контрастом, доказ на одній поверхні.
colors:
  bg: "oklch(0.12 0 0)"
  surface: "oklch(0.17 0 0)"
  surface-2: "oklch(0.21 0 0)"
  skeleton-bone: "oklch(0.26 0 0)"
  line: "oklch(0.30 0 0)"
  line-strong: "oklch(0.55 0 0)"
  rule-gap: "oklch(0.42 0 0)"
  ink: "oklch(0.97 0 0)"
  ink-hover: "oklch(0.85 0 0)"
  ink-2: "oklch(0.78 0 0)"
  ink-3: "oklch(0.64 0 0)"
  ink-dim: "oklch(0.55 0 0)"
  field-border: "oklch(0.55 0 0)"
  signal: "oklch(0.68 0.19 25)"
  signal-dim: "oklch(0.34 0.09 25)"
typography:
  display:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.3rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.033em"
  headline:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1.953rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1.5625rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
  lede:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
  body-sm:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.68
  button:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  field-label:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 500
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.04em"
  value:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.05rem"
    fontWeight: 500
    letterSpacing: "0"
rounded:
  panel: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  section: "56px"
  band: "72px"
  head: "88px"
  gutter: "clamp(16px, 3vw, 40px)"
  card-pad: "clamp(16px, 4vw, 24px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.button}"
    rounded: "{rounded.panel}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.panel}"
    padding: "11px 18px"
  badge-rank:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.panel}"
    padding: "4px 9px"
  badge-rank-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "0 24px 24px"
  panel-subordinate:
    backgroundColor: "transparent"
  value-surface:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.panel}"
    padding: "14px 16px"
  input-select:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "9px 11px"
  notice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
  notice-error:
    textColor: "{colors.signal}"
  reg-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "16px"
  slot-tbd:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.value}"
    rounded: "{rounded.panel}"
    padding: "2px 8px"
  photo-band:
    backgroundColor: "{colors.surface-2}"
    height: "clamp(148px, 13vw, 188px)"
  skeleton:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.panel}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  nav-link-utility:
    textColor: "{colors.ink-2}"
    typography: "{typography.value}"
---

# Design System: Asterra Networks

> **Звідки цей файл.** Згенеровано `/impeccable document` 2026-09-17 **з коду макетів, не з
> голови**: два кінці головного стрибка — `wireframes/guided-matching.html` (+ `-empty`,
> `-error`, `-loading`) і `wireframes/solution-detail.html` (+ `-error`, `-loading`), стилі
> `_wireframe.css` → `_panel.css` → `_parts/guided-matching.css`, `_parts/solution-detail.css`.
> Значення виміряно в рендері на 1440px (computed style, контраст рахував браузер). Якщо
> макет і цей файл розходяться — правий макет, файл оновлюється.
> Продукт і аудиторія — [`PRODUCT.md`](./PRODUCT.md); тут тільки візуальне.

## 1. Overview

**Creative North Star: "Панель на нічному містку"**

Прилади притлумлені, підкладка нейтрально-чорна, і єдине яскраве на всьому екрані — та
величина, що змінилась. Мова тримає впевненість перед розмовою, а не захват: людина, яка
перекаже сторінку нагору людині з бюджетом, має бачити, що головне, хто це підтвердив і де
лежать усі цифри. Тому ранг показано контрастом і межею, доказ зібрано на одній поверхні, а
колір з'являється лише як подія — збій або строк.

Щільність **локальна**: робоча зона (інтерв'ю, панель величин, spec-таблиця, реєстр норм)
щільна, моно 0.8rem, падінги 14–16px; герої й переходи просторі — 88/72px на шапці екрана,
56px між секціями. Домінанту створює розрив масштабу (H1 до 68.8px проти 16px тексту, 4.3×),
а не вага: всі заголовки у 500. Глибини тінню немає — тільки тональний зсув
`bg → surface → surface-2` і волосяна межа 1px.

Система відкидає: м'який теракотовий editorial (теплий кремовий фон, теракота); перший
рефлекс категорії — темно-синій, бірюзові градієнти, глобус, орбітальні діаграми; другий
рефлекс — «майже чорне + один неоновий акцент + моносітка»; лінію editorial-typographic;
дрейф цифр по картках-острівцях; логостіну без осі; людей у контексті й атмосферний
краєвид; сірі градієнти замість зображення.

**Key Characteristics:**
- Нейтраль рівно chroma 0; одна хроматика `signal`, і лише на подію.
- Ранг механізмом primary/ghost: інверсія або `line-strong` проти прозорої панелі.
- Моно — реєстр величин, кодів і службових міток; ніколи — тіло тексту.
- Панелі 2px, межа 1px, без тіней.
- Фото — обладнання як задокументований об'єкт, окремою смугою, ніколи під текстом.
- Кожен стан екрана несе ту саму форму, що й base: скелет калібрований під картку, яку заміщає.
- Рейкова сітка секцій: заголовок у лівій рейці 250px, зміст праворуч, парні секції дзеркальні.

## 2. Colors: The Panel Palette

Стратегія **restrained**: монохромна підкладка, де хроматика — повідомлення, а не оздоба.

### Primary
- **Signal Coral** (`signal`, рендер #f75d59): єдиний хроматичний колір системи. Заголовок
  повідомлення про збій, лічильник результату на error, фокус-рамка первинної кнопки.
  6.08:1 на `surface`, 6.43:1 на `bg`. На empty, loading і success не з'являється — вони не
  події.
- **Signal Ember** (`signal-dim`, #5e211f): межа панелі-повідомлення на error. Тільки межа,
  ніколи текст (контраст недостатній).

### Neutral
- **Night Ground** (`bg`, #060606): ґрунт сторінки, шапки й підвалу; ґрунт підпорядкованої
  картки («Also relevant»).
- **Instrument Face** (`surface`, #0f0f0f): піднята панель — картка результату, інтерв'ю,
  повідомлення стану, рядок норми, широка доказова смуга секції.
- **Readout Well** (`surface-2`, #181818): поверхня величин усередині панелі — `dl` картки,
  spec-таблиця, поля вводу, слот запису «Answered», кістка скелета.
- **Bone** (`skeleton-bone`, #242424): кістка скелета, що лежить на `surface-2` (заголовок,
  кнопка, значення в dl) — інакше зливається з коробкою.
- **Hairline** (`line`, #2e2e2e): межа кожної панелі, дільники рядків, межа шапки/підвалу.
- **Rank Line** (`line-strong` → токен `--rule-rank`, #717171; до уроку 08 — #4d4d4d, 2.40:1): межа рангу — первинна картка, перша клітина тріо
  доказу, ghost-кнопка, верхня межа рейкового заголовка, межа розвилки fallback. Не декор.
- **Chalk** (`ink`, #f5f5f5): заголовки, значення spec, первинна кнопка (як фон). 18.59:1 на `bg`.
- **Chalk Pressed** (`ink-hover`, #cecece): hover первинної кнопки.
- **Dim Chalk** (`ink-2`, #b7b7b7): основний текст абзаців, `dd`, утилітна навігація, бейдж
  рангу. 9.56:1 на `surface`.
- **Dim Half** (`ink-dim`, #717171): пригашена половина двотонного H1/H2 — тільки великий кегль (AA-large).
- **Field Edge** (`field-border`, #717171): межа поля вводу — ≥3:1 до панелі й заливки (K1).
- **Graphite Label** (`ink-3`, #8c8c8c): моно-мітки `dt`/`th`, лічильник, area-рядок.
  5.28:1 на `surface-2` — найслабша текстова пара системи, і вона проходить AA.

### Named Rules
**The Event-Only Rule.** Хроматика — тільки строк або збій. Дата в прозі, роль у формі,
«рекомендовано» — монохромні. Якщо на екрані без помилки видно `signal`, це дефект.

**The Chroma Zero Rule.** Жодна нейтраль не отримує відтінку — ні теплого (`#0b0405`
Andercore лишається описом джерела), ні холодного. Тон у підкладці — це вже хроматика.

**The Shape-and-Word Rule.** Стан ніколи не кодується самим кольором: error = коралова
межа + danger-triangle + слово; empty = info-circle + слово; loading = clock-circle +
скелет; success = check-circle + квитанція. Дальтонік читає стан повністю.

## 3. Typography

**Display Font:** Familjen Grotesk (з system-ui, sans-serif) — ваги 400/500/600, без 700
**Body Font:** Familjen Grotesk
**Label/Mono Font:** JetBrains Mono (з ui-monospace, monospace) — ваги 400/500

**Character:** гротеск із механічними терміналами, що тримає великий кегль без жирності,
у парі з моно, яке поводиться як шкала приладу: там, де моно, стоїть величина, код або мітка
поля, і його можна процитувати дослівно.

### Hierarchy
- **Display** (500, clamp(2.6rem, 5vw, 4.3rem) → 68.8px на 1440, lh 1.06, −0.033em): H1
  шапки екрана, максимум 18ch. Стеля 96px не пробивається ніде.
- **Headline** (500, 1.953rem, lh 1.15, −0.025em): H2 контенту; ім'я первинного збігу росте
  до clamp(1.953rem, 1.1rem + 1.9vw, 2.441rem) — відповідь важить більше за свій підпис.
- **Title** (500, 1.5625rem, −0.02em): рейковий H2 секції (lh 1.2, межа `line-strong`
  зверху), заголовок повідомлення стану, ім'я вторинного збігу, «What closes it».
- **Title-sm** (500, 1.25rem): заголовки в панелях — інтерв'ю, fallback, клітини тріо.
- **Lede** (400, 1.25rem, lh 1.55): перший абзац секції.
- **Body** (400, 1rem, lh 1.68, `ink-2`, ≤68ch): світле на темному отримує повітря.
- **Body-sm** (400, 0.875rem; до уроку 08 — 0.94rem): `dd`, `.meta`, значення spec, головна навігація, текст кнопки (600).
- **Label** (mono 400, 0.8rem, +0.04em, UPPERCASE): бейдж рангу, `dt`, `th` (500, +0.03em),
  заголовки колонок підвалу. Лише мітки до 4 слів.
- **Value** (mono 400, 0.8rem, tabular-nums, регістр як є): лічильник «2 areas matched»,
  area-рядок, запис «Answered», статус loading, [TBD], дата.
- **Code** (mono 500, 1.05rem, 0): код норми як заголовок рядка — IMO MSC.428(98), IACS UR E26/E27.

### Named Rules
**The 12.8 Floor Rule.** Нижче 0.8rem (12.8px) не опускається ніщо в продукті — технічний
читач втрачає рядок специфікації. Службовий хром вайрфреймів (дерево, смуга станів) — не
продукт і під правило не підпадає.

**The Weight-500 Rule.** Домінанта — розривом масштабу, не вагою. 700 не завантажується;
600 — тільки текст кнопки.

**The Mono-Is-a-Register Rule.** Моно = величина, код, мітка поля. Прозове перелічення в
клітинці значення («Network, device, data and operational systems») лишається гротеском.

## 4. Elevation

Тіней немає ніде. Глибина будується трьома тонами ґрунту (`bg` → `surface` → `surface-2`)
і межею 1px (`line`, для рангу `line-strong`). Піднята поверхня означає доказову або робочу
зону; підпорядковане опускається назад на ґрунт (`background: transparent`), зберігаючи межу.
Hover не піднімає і на панелях не діє: реагує лише інтерактивне — кнопка світлішає, посилання підкреслюється (K15, 2026-09-17).

### Named Rules
**The Flat Panel Rule.** `box-shadow` на контентній панелі заборонений. Якщо щось треба
виділити — ступінь тону або межа рангу.

**The Two Bands Rule.** Широка смуга `surface` на всю ширину обгортки позначає доказову зону
(spec, ситуації, тріо доказу); каталог і навігація смуги не отримують. Дві смуги на сторінку —
типова стеля.

## 5. Components

### Buttons
Характер: тверді, прямокутні, ранг читається інверсією.
- **Shape:** майже гострий кут (2px).
- **Primary:** `ink` фон, `bg` текст, межа `ink`, 0.875rem/600, падінг 11×18px, gap 8px.
  Hover — `ink-hover`. Focus-visible — 2px `signal`, offset 3px.
- **Ghost:** прозорий, текст `ink`, межа `line-strong`; hover — межа `ink`.
- **Стрілка «далі»:** Solar `alt-arrow-right-linear` 16px праворуч — **тільки** на ході
  вперед по флоу (Match my situation, Talk to an expert, дороговкази fallback). Ретрай,
  перевірка вбік (Read the regulation) і назад — без стрілки.
- **Розкладка:** група кнопок — flex-wrap, gap 12px; у рейці інтерв'ю — на всю ширину.

### Rank badge (signature)
- **Style:** mono label, `ink-2`, межа `line`, 2px, падінг 4×9px, іконка Solar 13px ліворуч
  (`shield-check` для первинного, `routing-2` для вторинного).
- **Позиція:** **над** заголовком, ніколи під ним — категорія й ранг раніше за наше ім'я.
- **Selected:** первинний збіг інвертує бейдж (`ink` фон, `bg` текст) — та сама мова
  «обраного», що первинна кнопка й поточний стан.
- **Варіант obj-line:** той самий бейдж у шапці Solution detail («Solutions & Services ·
  Cybersecurity»), відступ 16px.

### Match card / Panels
- **Corner Style:** 2px.
- **Background:** `surface`; підпорядкована картка — прозора на `bg`.
- **Border:** 1px `line`; первинна — `line-strong`.
- **Internal Padding:** `card-pad` clamp(16px, 4vw, 24px) з боків, 24px знизу.
- **Анатомія (порядок фіксований):** фото-смуга → бейдж рангу → ім'я → area-рядок (моно,
  іконка `widget-4`) → why-абзац → панель величин → кнопки.
- **Фото-смуга:** тільки у первинної картки, clamp(148px, 13vw, 188px), у край картки,
  межа знизу `line`, фільтр `grayscale(0.35) contrast(1.06) brightness(0.88)`. Фото — привілей
  рішення: вторинна його не має. Картка лишається панеллю з рамкою, не дільником (рішення
  2026-09-17, concept §5 Р1).
- **Колорит фото — тон як матеріал** (рішення 2026-09-17, concept §5 Р3): морська зелень і
  бірюза живуть **у знімку** (патина, фарба, вода, скло), приглушено; в UI хроматики не
  додається — токени лишаються chroma 0, акцент інтерфейсу один, `signal`. Фільтр набору —
  `grayscale(0.35) contrast(1.06) brightness(0.9)`. Канон і промпти генерації:
  [`visuals/README.md`](./visuals/README.md).

### Value surface (dl · spec table · rows)
- **Style:** `surface-2`, межа `line`, 2px, падінг 14×16px; сітка `auto | 1fr`, gap 8×18px.
- **Мітки:** mono label `ink-3`; значення body-sm (`ink-2` у картці, `ink` у spec).
- **Spec-таблиця:** жолоб міток фіксований 220px (≥720px) — цитований документ не дихає;
  рядки 11×16px, дільник `line`; значення tabular-nums. <720px — «мітка над значенням».
- **Ситуації (rows):** бенто 2 колонки ≥760px, перший тригер на весь ряд на `surface`, решта
  на `surface-2`; <760 — розлінований список.
- **Правило:** усі величини однієї речі — в одній коробці. Цифра поза нею — дефект A3.

### Regulation row
- **Style:** панель `surface`, межа `line`, падінг 16px, крок 8px між рядками.
- **Анатомія:** код норми (Code, моно 1.05rem/500) · «You keep …» (body-sm `ink-2`) · ghost
  «Read …» праворуч. ≥720px (і де значенню лишається ≥280px) — код і папір на одній осі,
  жолоб 180px.
- **Без власної кнопки:** рядок-рамка (IEC 62443) — прозорий, межа лишається.

### [TBD] slot
- **Style:** Value, `ink-2`, пунктирна межа 1px `rule-gap` (oklch 0.42, тихіша за межу рангу), 2px, падінг 2×8px.
- **У клітинці значення:** блоком на всю міру клітинки (падінг 5×10px) — зарезервоване поле,
  а не уламок. У прозі — інлайн-чип.
- **Сенс:** чесний пропуск на місці факту, який для вигаданого бренду був би вигадкою.

### Inputs / Fields
- **Style:** `surface-2`, текст `ink`, межа `field-border` (oklch 0.55 — ≥3:1 до панелі й заливки), 2px, падінг 9×11px, 0.9rem/400;
  `appearance: none` на select **з шевроном праворуч**; опції на `surface-2`; на ≤720px поле ≥44px.
- **Label:** 0.86rem/500 `ink` над полем; підказка 0.8rem `ink-2` під ним.
- **Focus:** 2px `ink`, offset 2px.
- **Контейнер (interview):** панель `surface`, падінг 24px, липка (`top: 16px`) у рейці 340px
  від 980px; слот запису «Answered» — `surface-2`, межа `line`, моно `ink-3`.

### Notice (empty · error · loading · success)
- **Style:** панель `surface`, межа `line`, падінг 24px, заголовок Title з іконкою 22px ліворуч.
- **Error:** межа `signal-dim`, заголовок і іконка `signal` (`danger-triangle`); лічильник
  результату теж `signal`.
- **Empty:** без кольору, `info-circle`. **Loading:** `clock-circle`, статус-рядок моно.
  **Success:** `check-circle`, квитанція в `.kv`.

### Skeleton
- **Style:** кістки `surface-2` (на коробці величин — `skeleton-bone`), 2px, пульс
  opacity 1 → 0.62 за 1.6s; при `prefers-reduced-motion` статичні.
- **Правило форми:** скелет повторює геометрію того, що заміщає — первинний блок має
  плейсхолдер фото-смуги і межу `line-strong`, вторинний прозорий; на Solution detail блоки
  стоять у рейкових колонках зиґзаґа. Калібр висоти ≥94% реальної картки — інакше колонка
  стрибає в момент резолву.

### Fallback fork
- **Style:** не картка — смуга над межею `line-strong`, падінг-топ 24px, відступ 32px.
- **≥900px:** текст ліворуч, праворуч колонка з двох ghost-дороговказів однакової ширини,
  текст притиснутий ліворуч, стрілка праворуч. <900px — стос дороговказів на всю ширину.
- Однакова в усіх станах: шлях не зникає при збої.

### Navigation
> **Виправлено 2026-09-17 (крок 5) за рендером.** Перша версія цього розділу описувала
> намір із CSS (`body > header`, `body > footer`), а ці правила ніколи не спрацьовували:
> шапка й підвал лежать усередині службової обгортки `.wf-page`. Нижче — те, що реально
> на екрані. Три пункти позначено **[Н]** — вони на рішення в кроці 6.

- **Шапка двошарова, без фону й межі [Н]:** бренд 1rem/600 стоїть **окремим рядком над**
  навігацією, обидва ряди навігації притиснуті праворуч (стовпчик, gap 6px, між пунктами 24px);
  утилітний ряд 0.8rem `ink-2`, головний 0.875rem/400 `ink`.
- **Hover:** колір → `ink`, підкреслення межею 1px знизу (не text-decoration).
- **Ціль:** падінг 4px зверху/знизу — ≥24px за WCAG 2.2 SC 2.5.8.
- **Активний пункт:** у кіті є форма (`aria-current="page"` → межа `line-strong`), на екранах
  не проставлено — змінило б вигляд еталона.
- **Підвал:** межа зверху `line`, падінг 52/32px, текст 14px `ink-2`; **посилання підкреслені
  й сірі, inline [Н]**; заголовки колонок — mono label `ink-3`; колонки auto-fit
  minmax(160px, 1fr), gap 36px; правовий ряд 13px.
- **Дата новини — системний моно, не JetBrains Mono [Н]:** правило каркаса перебило правило
  мови за специфічністю.

### Screen head (hero)
- **Style:** межа знизу `line`, падінг 88/72px; H1 Display ≤18ch; lede ≤68ch; група кнопок
  через 24px.
- **Фото-панель (≥900px):** знімок з `visuals/`, тільки на екранах, де об'єкт тематично названий. На екранах
  рішення фото — носій зображення; схема — носій Entry (рішення 2026-09-17, concept §5 Р2). Абсолютом на
  правому треку сітки 1.35fr/1fr (gap 32px), межа `line`, 2px, мін. 210px, той самий фільтр,
  що фото-смуга. Однакова в усіх станах екрана. Текст на фото не лягає ніколи.

### Section rail
- **≥980px:** секція = сітка `250px | 1fr`, gap clamp(32px, 4.5vw, 72px); H2 у лівій рейці
  з межею `line-strong` зверху, sticky не потрібен. Парні секції дзеркальні (рейка праворуч).
- **<980px:** H2 над змістом із межею знизу `line`.
- **Ритм:** 56px між секціями, перший абзац — Lede.

### Motion
- Переходи тільки кольору й межі: 0.2–0.22s, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Єдина анімація — пульс скелета. Вхідних і scroll-анімацій немає (вето користувача
  2026-08-27). `prefers-reduced-motion` зводить усе до 0.01ms.

### Правки після критики — крок 6 (2026-09-17)

Джерело — [`ui/_process/critique.md`](./ui/_process/critique.md) (п'ять субагентів `/impeccable critique`).
Пріоритет користувача: **усі P1 і весь кіт**; рішення R1–R4 — опитуванням. Кожна правка —
за правилом «залишаємо» (урок 07): значення в `ui/kit.css` (з уроку 08 — `tokens/tokens.css`), розмітка у вітрині `ui/kit.html` і на всіх
екранах, причина — тут.

| ID | Що змінено | Причина |
|---|---|---|
| K1 | Межа поля: `line-strong` → `field-border` (oklch 0.55) | 2.27:1 до панелі — нижче WCAG 1.4.11 (3:1); поле не читалось як поле |
| K2 | `h3` отримав власний міжрядковий 1.2 | успадковував 1.68 тіла: H3 25/42px дорівнював рейковому H2 |
| K3 | Поля вводу ≥44px на ≤720px | ціль дотику на телефоні була 38px |
| K4 | `.foot-legal` 72ch, `.hint` — мірою тексту 68ch | рядки 104–159 знаків |
| K5 | `.pos-label` — вага 500 замість 600 | JetBrains Mono 600 не завантажується, браузер малював синтетичний жир |
| K7 | `select` має шеврон | список не відрізнявся від текстового поля |
| K8 | `.badge` — `justify-self: start` | у сітці шапки бейдж розтягувався на всю колонку й читався як поле |
| K9 | Лід секції — лише абзац одразу під H2 | лід-кегль діставався завершальному абзацу, ієрархія перевертались |
| K10 | Відступ після панелі величин і тріо; проміжок між кнопками в ряду | блоки прилипали (0px), кнопки стояли впритул |
| K11 | Дія в `.duo--anchored` / `.offset` — одразу під текстом (24px), не внизу колонки | кнопку відривало від свого заголовка на 117–289px |
| K12 | Форма inquiry: `autocomplete`, підказки через `aria-describedby` | автозаповнення й озвучення підказок не працювали; `required` чекає правила валідації (свідомо відкрите) |
| K13 | На вузькому повідомлення про помилку стоїть над контекстом | помилка була на ~455px від початку зони |
| K14 | Нерівні колонки 1.35/1/1 — тільки в `.trio--ranked` | неранжоване тріо стискало картку до 201px |
| K15 | Ховер-межа знята з неінтерактивних панелей | ховер обіцяв клік там, де клікнути нічого |
| K16 | Заголовки колонок підвалу — `h2` замість `h4` | пропускався рівень заголовка |
| K17 | Посилання «Skip to content» у шапці, `main#main` | не було переходу до змісту з клавіатури |
| K18 | Бейдж категорії в шапці екрана — без іконки | щит — знак рангу «обраного», на категорії він означав не те |
| R1 | Смуга акредитацій з **вигаданими марками** перед нашими твердженнями — entry, solution-detail, crew-access, industry (`.logo-row--lead`, `.logo-name`, `.logo-cat`) | рішення користувача: головний доказ інтегратора (§6.1) був відсутній або останнім |
| R4 | `.stack--document` — рейка без дзеркала (legal) | на сторінці-документі текст парної секції стояв раніше за свій заголовок |

K6 виконано після дозволу користувача:

| ID | Що змінено | Причина |
|---|---|---|
| K6 | Іконки Solar linear лежать локально в `ui/icons/` (8 SVG), змінні `--i-*` посилаються на них | тягнулись з `api.iconify.design` під час роботи; в одному рендері бейдж вийшов без іконки |

### Правки перевірки — крок 7 (2026-09-17)

Джерело — [`ui/_process/defects.md`](./ui/_process/defects.md) (перевірка екранів проти кіта +
`/impeccable audit`, 15/20). Пріоритет користувача: **усі P2**; рішення — опитуванням.

| ID | Що змінено | Причина |
|---|---|---|
| A1 | Решта «three questions» → «two» (guided-matching ×4 · solution-detail) | R2 кроку 6 не доведено: два місця з переносом рядка вислизнули з пошуку |
| A2 | Обов'язкові name/company/email/message — `required`; необов'язкові підписані «(optional)» (`.field-optional`) | рішення користувача: позначати меншість — необов'язкових три, і вони вже заповнені з контексту |
| A3 | Три варіанти списку «What started this requirement?» скорочено (найширший 215px при 242) | вибрана відповідь 645px у полі 288 — видно ~40% |
| A4 | Особисті поля inquiry без `name` — не потрапляють у рядок адреси | `method="get"` клав ім'я й email в історію й логи; `post` зламав би прохідний флоу прототипу на статичному хостингу. На білді — Server Action |
| A5 | Тріо — `minmax(0, 1fr)`, перенос довгих слів | при тексті ×2 вміст виходив за край (WCAG 1.4.4) |
| A6 | Шрифти — `<link rel="preconnect">` + stylesheet у `<head>` кожної сторінки; `@import` з кіта прибрано | ланцюжок @import блокував рендер |
| D1 · D3 | Опис ховера і кольори в цьому файлі синхронізовано з кітом | документ відстав від кроку 6 |
| D12 | Застарілі `_wireframe.css`, `_panel.css`, `_parts/` → `wireframes/_archive/` | рішення користувача: не підключені, але лишаються джерелом значень |

### Правки уроку 08 — токени, крок 6 (2026-09-17)

Джерело — [`ui/_process/defects-08.md`](./ui/_process/defects-08.md) (`/impeccable audit` після розколу
на `tokens/` + `components/`). Пріоритет користувача: **усі P1 і P2**; рішення — опитуванням.
Назви в цьому файлі — мова; токени, що їх несуть, — [`tokens/tokens.css`](./tokens/tokens.css)
(`line` → `--rule`, `line-strong` → `--rule-rank`, `surface-2` → `--bg-well`, `ink` → `--text` /
`--action`, `ink-2` → `--text-quiet`, `ink-3` → `--text-label`, `signal` → `--event`).

| ID | Що змінено | Причина |
|---|---|---|
| C1 | Межа рангу (`--rule-rank`: ghost-кнопка, обрана картка, ведучий рядок, лінійка рейки, активна навігація) — oklch 0.42 → **0.55** | 2.40:1 до ґрунту — межа кнопки нижче WCAG 1.4.11 (3:1), дефект A15 уроку 07; тепер 4.18:1 |
| N1 | Заливка ярусу в схемі орбіт читає `--rule-rank` (було окреме `--solo-tier-fill`); пунктир пропуску лишився 0.42 (`--rule-gap`) | стрес-тест теми показав одне значення під трьома назвами; порожній слот має бути тихішим за обране |
| N4 | Кегль 0.94rem (мета, кнопка, головна навігація, ім'я партнера) і 0.9375rem (панелі величин документа, квитанції, сторінки) → **0.875rem**; скелет кнопки рахує висоту з метрик кнопки | дві назви майже одного кегля; рішення користувача — звести до 14px; закрило й дрейф А1 (панель величин 14 проти 15px) |
| I2 | `color-scheme: dark` на `:root` | нативні скролбари, автозаповнення й список `select` малювались світлими на темному ґрунті (A13) |

## 6. Do's and Don'ts

### Do:
- **Do** тримати всю підкладку на chroma 0: `bg` oklch(0.12 0 0), `surface` 0.17, `surface-2` 0.21.
- **Do** показувати ранг механізмом primary/ghost: інверсія або `line-strong` для обраного,
  прозора панель для підпорядкованого.
- **Do** ставити бейдж із чужим ім'ям або категорією **над** заголовком.
- **Do** збирати всі величини однієї речі в одну `surface-2`-коробку; значення — tabular-nums.
- **Do** показувати чесний пропуск [TBD]-слотом із пунктиром на всю міру поля.
- **Do** давати кожному стану форму і слово: іконка Solar linear + текст, колір — лише на error.
- **Do** тримати кегль ≥0.8rem і кожну текстову пару ≥4.5:1 (найслабша — `ink-3` на `surface-2`, 5.28:1).
- **Do** ставити фото тільки з власного набору `visuals/`, за темою змісту, окремою смугою, з фільтром `grayscale(0.35)`.

### Don't:
- **Don't** використовувати `signal` поза збоєм або строком — ні на «recommended», ні на даті в прозі, ні як hover.
- **Don't** класти `box-shadow` на панелі й не робити світлих інсетів у темній темі (рішення 2026-08-27).
- **Don't** опускати дисплей у вагу 700 і не підіймати H1 вище 96px.
- **Don't** писати моно тілом тексту чи прозовим переліченням; моно — величина, код, мітка.
- **Don't** класти текст на фото і не заливати слот зображення сірим градієнтом — **сірі градієнти замість зображення** заборонені; немає об'єкта — слот знімається.
- **Don't** показувати людей у контексті й атмосферний краєвид; тільки обладнання як задокументований об'єкт.
- **Don't** робити **м'який теракотовий editorial** — теплий кремовий фон, теракота, «затишна» .com-верстка.
- **Don't** падати в **перший рефлекс категорії**: темно-синій, бірюзові градієнти, глобус, орбітальні діаграми.
- **Don't** падати в **другий рефлекс**: «майже чорне + один неоновий акцент + моносітка». Акцент не постійний і не неоновий; моно не сітка.
- **Don't** збирати лінію **editorial-typographic**: дисплейна антиква + дрібні моно-підписи + лінійки як настрій.
- **Don't** розкидати цифри по **картках-острівцях** — дрейф цифр («99.99% this month» проти «99.9% SLA»).
- **Don't** ставити **логостіну без осі** — партнер стоїть позицією в переліку акредитацій, у комірці з межею.
- **Don't** ставити стрілку на кнопку, що веде вбік або назад.
- **Don't** використовувати `border-left`/`border-right` >1px як кольорову смугу; нумерувати переліки, які не є адресованим реєстром.
- **Don't** референсити візуально Marlink, Navarino, Speedcast, NSSLGlobal, IEC Telecom.

## Джерела

- [`concept/concept.md`](./concept/concept.md) — смак дизайнера, рішення К1–К3, атрибути A1–A5,
  напрям B «Панель» і екранний канон §4.1. Звірено з цим файлом 2026-09-17: де вони розходились,
  concept.md оновлено під макети.
- [`concept/references.md`](./concept/references.md) — референси Refero, з яких узято прийоми
  (Andercore, HashiCorp, Linear, Oxide, Vercel, Mapbox та ін.).
- [`concept/concept.html`](./concept/concept.html) — стенд мови з обчислюваним контрастом.
- [`PRODUCT.md`](./PRODUCT.md) — аудиторія, голос, анти-референси.
- Код-джерело: [`wireframes/_archive/_panel.css`](./wireframes/_archive/_panel.css),
  [`wireframes/_archive/_parts/guided-matching.css`](./wireframes/_archive/_parts/guided-matching.css),
  [`wireframes/_archive/_parts/solution-detail.css`](./wireframes/_archive/_parts/solution-detail.css).
