# Аудит змінних `ui/kit.css` (урок 08, крок 1)

**2026-09-17.** Факти перед розколом кіта на `tokens.css` (primitive + semantic) і `components/`.
**Нічого не виправлено і не перейменовано** — таблиця для перегляду.

**Метод.** Скрипт розібрав `ui/kit.css` (усі `:root`-блоки і правила), для кожної змінної зібрав
вживання — правило, властивість — і зіставив класи з 28 сторінками `wireframes/` (стани зведено до
12 екранів). Ролі в розділі 1 прочитано з вживань вручну; у розділах 2–3 роль — властивість, у
якій змінна стоїть. Службовий хром (`wireframes/_chrome.css`, каркас вітрини `ui/kit.html`)
вживає продуктові змінні, але в аудит не входить — позначено окремо в §5.

| Що | Кількість |
|---|---|
| Змінних у `kit.css` | **328** |
| з них кольорових | **14** |
| токенів конкретних компонентів («компонент-властивість», кроки 5–7) | **241** |
| змінних без жодного вживання | **0** |
| голих значень (hex, oklch, px) прямо в класах | **0** — числа лишились тільки в умовах `@media` (22 умови) |
| кольорових літералів усередині значень токенів | **2** — див. §4 В |

---

## 1. Кольори — змінна, значення, вживання, роль у кожному місці

Усі 14 кольорів — нейтраль chroma 0 плюс два сигнальні. Рендер sRGB у дужках.

| Змінна | Значення | Де вживається | Роль у кожному місці |
|---|---|---|---|
| `--bg` | `oklch(0.12 0 0)` (#060606) | `body` (фон) · `.statement` (фон під знімком) · `.btn`, `.badge--selected`, `.skip-link`, `::selection` (**колір тексту**) | **1)** фон сторінки — усі 28 · **2)** колір тексту на інвертованій дії: первинна кнопка, обраний бейдж, skip-link, виділення |
| `--surface` | `oklch(0.17 0 0)` (#0f0f0f) | `.match`, `.reg-row`, `.trio > div`, `.news-item`, `.form-panel`, `.notice`, `.skeleton`, `.orbit`, `.context-panel`, `.body--object` · `.section--band`, `.band--raised`, `.band--proof` · `.rows li:first-child` · `.statement > .wrap` · фото-панелі `::after` (підкладка під знімком) | **1)** фон піднятої панелі (картка, рядок норми, форма, повідомлення) · **2)** фон широкої доказової смуги · **3)** фон ведучого рядка переліку · **4)** підкладка, поки знімок не завантажився |
| `--surface-2` | `oklch(0.21 0 0)` (#181818) | `.values`, `table`-клітинки, `.rows`, `.rows li` · `.field input/select/textarea`, `option` · `.chip--boxed`, `.chip--record` · `.section--band .reg-row`, `.section--band .trio > div`, `.band--proof .reg-row` · `.sk`, `.sk-values` · `.match::before`, `.skeleton--photo::before` | **1)** «колодязь» величин (панель величин, таблиця, перелік) · **2)** заливка поля вводу · **3)** коробка чіпа-лічильника і запису · **4)** фон панелі **всередині** смуги (крок тону вище за смугу) · **5)** кістка скелета · **6)** плейсхолдер фото-смуги |
| `--bone` | `oklch(0.26 0 0)` (#242424) | `.sk-title`, `.sk-btn`, `.sk-values .sk`, `.sk--bone` | кістка скелета, що лежить на `surface-2` — **одна роль, лише скелет** |
| `--line` | `oklch(0.30 0 0)` (#2e2e2e) | **65 вживань:** `border` панелей (`.match--secondary`, `.reg-row`, `.trio > div`, `.news-item`, `.form-panel`, `.notice`, `.values`, `.badge`, `.chip--boxed`, `.logo-slot`…) · `border-top/bottom` розділювачів (`.screen-head`, `.site-footer`, `.foot-bar`, `.section-head`, `.rows li`, `.orbit-row`, `.sector-list li`, `.held`, `table` рядки…) · `border-left` осей (`.pair--ruled`, `.index-major/minor`, `.held`) | **1)** межа панелі · **2)** розділювач рядків і секцій (лінійка) · **3)** вісь зіставлення між колонками · **4)** межа бейджа й чіпа |
| `--line-strong` | `oklch(0.42 0 0)` (#4d4d4d) | `.match`, `.skeleton`, `.rows li:first-child`, `.trio--ranked > div:first-child`, `.reg-row--lead`, `.reg-row--answer`, `.notice--receipt` (межа) · `.btn--ghost` (межа) · `.stack > section > h2`, `.fallback`, `.index` (межа зверху) · `.tbd`, `.body--slot`, `.logo-slot:nth-child(even)` (**пунктир**) · `.nav-main a[aria-current]` (підкреслення) · `.hint--aside`, `.section--diptych-end` (межа зліва) · `.orbit-row .bar` (**фон**) | **1)** межа рангу — обране/ведуче · **2)** межа ghost-кнопки · **3)** лінійка над заголовком рейки і над розвилкою · **4)** пунктир чесного пропуску й осі пари партнерів · **5)** активний пункт навігації · **6)** вісь диптиха й бічна лінійка примітки · **7)** заливка смуги ярусу в схемі орбіт |
| `--ink-dim` | `oklch(0.55 0 0)` (#717171) | `h1 .dim, h2 .dim` | пригашена половина двотонного великого заголовка — **одне місце** |
| `--ink-3` | `oklch(0.64 0 0)` (#8c8c8c) | `.values dt`, `table.values th`, `.chip`, `.chip--record`, `.foot-cols h2`, `.foot-legal`, `.backdrop`, `.sector-list .dt`, `.logo-cat`, лічильники `::before` (`.values--numbered`, `.section--numbered`) | **1)** моно-мітка величини (dt/th) · **2)** чіп-величина (лічильник, дата, статус) · **3)** заголовок колонки підвалу · **4)** правовий рядок і службова нотатка · **5)** підпис категорії (сектор, партнер) · **6)** номер позиції реєстру |
| `--ink-2` | `oklch(0.78 0 0)` (#b7b7b7) | `.body`, `.meta`, `.hint`, `.note`, `.routing`, `.field-optional`, `.notice ul`, `.statement .after`, `.orbit-row .desc`, `.chip--req` · `.values dd` · `.badge`, `.tbd`, `.logo-slot` · `.nav-utility`, `.site-footer` · `.dim`, `.band--tone-lift p/.dim` | **1)** основний текст абзаців (другорядний до заголовків) · **2)** значення в панелі величин · **3)** текст бейджа, пропуску, комірки партнера · **4)** утилітна навігація і текст підвалу · **5)** пригашена половина на піднятій поверхні |
| `--ink-hover` | `oklch(0.85 0 0)` (#cecece) | `.btn:hover` (фон і межа) | стан наведення первинної дії — **одне місце** |
| `--ink` | `oklch(0.97 0 0)` (#f5f5f5) | **51 вживання:** `body`, `h4`, `.name`, `.reg-row h3`, `.trio h3`, `.section-head h2`, `.form-panel h2`, `table td`, `.field label/input`, `.notice` заголовок, `.nav-main a`, ховер посилань (колір тексту) · `.btn`, `.badge--selected`, `.skip-link`, `::selection` (**фон**) · `.btn` (межа) · `.btn--ghost:hover`, `.badge--selected` (межа) · `:where(a,button…):focus-visible`, `.btn--ghost:focus-visible` (**фокус-рамка**) · підкреслення ховера навігації | **1)** основний текст і заголовки · **2)** фон інвертованої дії — первинна кнопка, обраний бейдж, skip-link · **3)** межа дії та ghost-кнопки при наведенні · **4)** фокус-рамка (усе, крім первинної кнопки) · **5)** підкреслення ховера |
| `--signal` | `oklch(0.68 0.19 25)` (#f75d59) | `.notice--error h2/h3`, `.chip--event`, `.values-key--event` (колір тексту) · `.values-val--event::before` (фон іконки строку) · `.btn:focus-visible` (**фокус-рамка**) | **1)** подія-збій: заголовок помилки, чіп «недоступно» · **2)** подія-строк: мітка й іконка дати набуття чинності (norm) · **3)** фокус-рамка первинної кнопки |
| `--signal-dim` | `oklch(0.34 0.09 25)` (#5e211f) | `.notice--error` (межа) | межа панелі помилки — **одне місце** |
| `--field-border` | `oklch(0.55 0 0)` (#717171) | `.field input/select/textarea` (межа) | межа поля вводу ≥3:1 (K1) — **одне місце** |

---

## 2. Типографіка, простір, форма, рух, зображення

### Типографіка

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--font-sans` | `"Familjen Grotesk", system-ui, sans-serif` | `body` (font-family)<br>`.btn` (font-family)<br>`.field input, .field select, .field textarea` (font)<br>`.logo-name` (font-family) | усі 28 | font · гарнітура |
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | `.foot-cols :is(h2, h4)` (font-family)<br>`.badge` (font-family)<br>`.chip` (font-family)<br>`.values dt` (font-family) +9 | усі 28 | гарнітура |
| `--fs-display` | `clamp(2.6rem, 5vw, 4.3rem)` | `.screen-head h1` (font-size) | approval-materials, careers, company, crew-access, guided-matching, industry, inquiry, insights, legal, norm, solution-detail | кегль |
| `--fs-hero` | `clamp(2.8rem, 6.2vw, 5.5rem)` | `.hero h1` (font-size) | entry | кегль |
| `--fs-1` | `1.953rem` | `h1` (font-size)<br>`h2` (font-size)<br>`.sector-list .first .nm` (font-size)<br>`.stack > section.section--lead > h2` (font-size) | усі 28 | кегль |
| `--fs-2` | `1.5625rem` | `h3` (font-size)<br>`.stack > section > h2` (font-size)<br>`.section-head h2` (font-size)<br>`.match--secondary h3` (font-size) +5 | усі 28 | висота · кегль |
| `--fs-3` | `1.25rem` | `.stack > section > h2 + .body` (font-size)<br>`.reg-row h3` (font-size)<br>`.trio h3` (font-size)<br>`.news-item h3` (font-size) +4 | усі 28 | кегль |
| `--fs-body` | `1rem` | `body` (font-size)<br>`h4` (font-size)<br>`.body` (font-size)<br>`.brand` (font-size) +1 | усі 28 | кегль |
| `--fs-sm` | `0.94rem` | `.meta` (font-size)<br>`.nav-main` (font-size)<br>`.section--close .hint` (font-size)<br>`.btn` (font-size) +6 | усі 28 | кегль |
| `--fs-field` | `0.9rem` | `.field input, .field select, .field textarea` (font)<br>`.form-panel--request .field > label` (font-size) | guided-matching, inquiry | font · кегль |
| `--fs-label` | `0.86rem` | `.field > label` (font-size)<br>`.index-minor :where(.btn--ghost)` (font-size) | entry, guided-matching, inquiry | кегль |
| `--fs-micro` | `0.8rem` | `.hint` (font-size)<br>`.nav-utility` (font-size)<br>`.foot-cols :is(h2, h4)` (font-size)<br>`.foot-legal` (font-size) +14 | усі 28 | висота · кегль · складник токена |
| `--fs-code` | `1.05rem` | `.reg-row--code h3` (font-size)<br>`.orbit-row .tier` (font-size) | entry, solution-detail | кегль |
| `--lh-display` | `1.06` | `h1` (line-height)<br>`.screen-head h1` (line-height) | усі 28 | міжрядковий |
| `--lh-tight` | `1.15` | `h2` (line-height)<br>`.stack > section > h2` (line-height)<br>`.pos-label` (line-height) | усі 28 | міжрядковий |
| `--lh-title` | `1.2` | `.stack > section > h2` (line-height) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | міжрядковий |
| `--lh-lede` | `1.55` | `.stack > section > h2 + .body` (line-height) | усі 28 | міжрядковий |
| `--lh-body` | `1.68` | `--sk-title-height`<br>`body` (line-height)<br>`.foot-cols :is(h2, h4)` (line-height)<br>`.btn` (line-height) +7 | усі 28 | висота · міжрядковий · складник токена |
| `--ls-display` | `-0.033em` | `.screen-head h1` (letter-spacing) | approval-materials, careers, company, crew-access, guided-matching, industry, inquiry, insights, legal, norm, solution-detail | трекінг |
| `--ls-1` | `-0.025em` | `h2` (letter-spacing)<br>`.statement p` (letter-spacing) | усі 28 | трекінг |
| `--ls-2` | `-0.02em` | `h3` (letter-spacing)<br>`.match--secondary h3` (letter-spacing)<br>`.h-small` (letter-spacing)<br>`.sector-list .nm` (letter-spacing) +1 | усі 28 | трекінг |
| `--ls-3` | `-0.03em` | `h1` (letter-spacing)<br>`.match h3` (letter-spacing)<br>`.band--areas > .wrap > h2` (letter-spacing)<br>`.duo--cap h2` (letter-spacing) +1 | усі 28 | трекінг |
| `--ls-4` | `-0.015em` | `.notice :is(h2, h3)` (letter-spacing) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | трекінг |
| `--ls-mono` | `0.04em` | `.foot-cols :is(h2, h4)` (letter-spacing)<br>`.badge` (letter-spacing)<br>`.pos-label` (letter-spacing)<br>`.chip--tag` (letter-spacing) +2 | усі 28 | трекінг |
| `--ls-mono-tight` | `0.03em` | `.values dt` (letter-spacing)<br>`table.values th` (letter-spacing) | company, crew-access, guided-matching, inquiry, norm, solution-detail | трекінг |
| `--w-regular` | `400` | `.badge` (font-weight)<br>`.field input, .field select, .field textarea` (font)<br>`.field-optional` (font-weight)<br>`.section--numbered .reg-row h3::before` (font-weight) | усі 28 | font · вага |
| `--w-medium` | `500` | `h1, h2, h3, h4` (font-weight)<br>`.name` (font-weight)<br>`.dim` (font-weight)<br>`.foot-cols :is(h2, h4)` (font-weight) +8 | усі 28 | вага |
| `--w-strong` | `600` | `.skip-link` (font-weight)<br>`.brand` (font-weight)<br>`.btn` (font-weight)<br>`.rows .name` (font-weight) +2 | усі 28 | вага |
| `--measure` | `68ch` | `.body` (max-width)<br>`.hint` (max-width)<br>`.section--close .hint` (max-width) | усі 28 | максимальна міра |
| `--lh-h3` | `1.2` | `h3` (line-height) | усі 28 | міжрядковий |

### Простір

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--s-1` | `4px` | `.nav-utility a, .nav-main a` (padding-block)<br>`.badge` (padding)<br>`table.values` (margin)<br>`.match--secondary` (padding-top) +7 | усі 28 | внутрішній відступ · відступ зверху · відступ по вертикалі · зовнішній відступ · проміжок |
| `--s-2` | `8px` | `h1, h2, h3, h4` (margin)<br>`.skip-link` (padding)<br>`.foot-cols li` (margin-bottom)<br>`.btn` (gap) +8 | усі 28 | внутрішній відступ · відступ знизу · зовнішній відступ · проміжок |
| `--s-3` | `12px` | `.foot-cols :is(h2, h4)` (margin)<br>`.screen-head p:has(> .btn)` (gap)<br>`.stack > section > h2` (padding-bottom)<br>`.section-head` (padding-bottom) +18 | усі 28 | внутрішній відступ · відступ знизу · відступ по вертикалі · зовнішній відступ · проміжок |
| `--s-4` | `16px` | `h1` (margin-bottom)<br>`.skip-link` (padding)<br>`.foot-bar` (gap)<br>`.foot-legal` (margin-top) +20 | усі 28 | висота · внутрішній відступ · відступ зверху · відступ знизу · відступ по вертикалі · зовнішній відступ · позиція · проміжок |
| `--s-5` | `18px` | `.btn` (padding)<br>`.chip--status` (margin)<br>`.values` (gap)<br>`.values` (margin) +9 | усі 28 | внутрішній відступ · відступ знизу · зовнішній відступ · проміжок |
| `--s-6` | `20px` | `.foot-bar` (padding-top)<br>`.match` (margin)<br>`.match > .badge` (margin-top)<br>`.rows li` (gap) +5 | усі 28 | відступ зверху · зовнішній відступ · проміжок |
| `--s-7` | `24px` | `.nav-utility ul, .nav-main ul` (gap)<br>`.screen-head p:has(> .btn)` (margin-top)<br>`.section-head` (gap)<br>`.section--close p:has(> .btn)` (margin-top) +15 | усі 28 | внутрішній відступ · відступ зверху · відступ зліва · відступ знизу · відступ справа · зовнішній відступ · проміжок |
| `--s-8` | `32px` | `.site-footer` (padding)<br>`.screen-head > .wrap` (gap)<br>`.screen-head--photo > .wrap::after` (width)<br>`.pair--ruled` (gap) +4 | усі 28 | внутрішній відступ · відступ зверху · відступ зліва · проміжок · ширина |
| `--s-section` | `56px` | `--wrap-pad-padding-top`<br>`.stack > section + section` (margin-top)<br>`.split` (gap)<br>`.offset` (gap) | approval-materials, careers, company, crew-access, entry, guided-matching, industry, insights, legal, norm, solution-detail | відступ зверху · проміжок · складник токена |
| `--s-band` | `72px` | `--statement-padding`<br>`.screen-head` (padding)<br>`.split` (padding)<br>`.band` (padding) | усі 28 | внутрішній відступ · складник токена |
| `--s-head` | `88px` | `.screen-head` (padding)<br>`.band--areas` (padding) | усі 28 | внутрішній відступ |
| `--gutter` | `clamp(16px, 3vw, 40px)` | `--hero-photo-width`<br>`.wrap` (padding-inline)<br>`.skip-link` (left)<br>`.screen-head--photo > .wrap::after` (right) +5 | усі 28 | внутрішній відступ · відступ по горизонталі · позиція · складник токена · ширина |
| `--card-pad` | `clamp(16px, 4vw, 24px)` | `.match` (--pad)<br>`.skeleton` (padding)<br>`.skeleton--photo::before` (margin) | approval-materials, crew-access, guided-matching, industry, solution-detail | --pad · внутрішній відступ · зовнішній відступ |
| `--rail` | `250px` | `.stack > section` (grid-template-columns)<br>`.stack > section:nth-of-type(even)` (grid-template-columns)<br>`.stack--document > section:nth-of-type(even)` (grid-template-columns)<br>`.skeleton--offset-start` (margin-left) +2 | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ зліва · відступ справа · колонки сітки |
| `--rail-gap` | `clamp(32px, 4.5vw, 72px)` | `.stack > section` (column-gap)<br>`.skeleton--offset-start` (margin-left)<br>`.skeleton--offset-end` (margin-right) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ зліва · відступ справа · проміжок колонок |
| `--maxw` | `1240px` | `.wrap` (max-width) | усі 28 | максимальна міра |

### Форма (радіус, межа, іконки)

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--r` | `2px` | `.skip-link` (border-radius)<br>`.screen-head--photo > .wrap::after` (border-radius)<br>`.btn` (border-radius)<br>`.badge` (border-radius) +28 | усі 28 | радіус |
| `--bw` | `1px` | `.nav-utility a, .nav-main a` (border-bottom)<br>`.site-footer` (border-top)<br>`.foot-bar` (border-top)<br>`.screen-head` (border-bottom) +69 | усі 28 | висота · межа · межа зверху · межа зліва · межа знизу · межа справа · межі зверху й знизу |
| `--icon` | `none · локально перевизначається в 9 правилах` | `.badge::before` (-webkit-mask)<br>`.badge::before` (mask)<br>`:is(.chip--area, .chip--wait, .chip--event):…` (-webkit-mask)<br>`:is(.chip--area, .chip--wait, .chip--event):…` (mask) +2 | усі 28 | маска іконки |
| `--icon-sm` | `13px` | `.badge::before` (width)<br>`.badge::before` (height)<br>`.chip--area` (--chip-icon) | approval-materials, careers, company, crew-access, guided-matching, industry, insights, legal, norm, solution-detail | --chip-icon · висота · ширина |
| `--icon-md` | `16px` | `.btn--next::after` (width)<br>`.btn--next::after` (height)<br>`.field select` (background-size) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | висота · розмір фону · ширина |
| `--icon-lg` | `22px` | `.notice :is(h2, h3)::before` (width)<br>`.notice :is(h2, h3)::before` (height) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | висота · ширина |
| `--chip-icon` | `var(--icon-sm)` | `:is(.chip--area, .chip--wait, .chip--event):…` (width)<br>`:is(.chip--area, .chip--wait, .chip--event):…` (height) | усі 28 | висота · ширина |
| `--pad` | `var(--card-pad)` | `.match` (padding)<br>`.match::before` (margin) | guided-matching | внутрішній відступ · зовнішній відступ |

### Рух

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | `.nav-utility a, .nav-main a` (transition)<br>`.btn` (transition)<br>`.match` (transition)<br>`.reg-row` (transition) +5 | усі 28 | анімація · перехід |
| `--dur` | `0.2s` | `.nav-utility a, .nav-main a` (transition)<br>`.match` (transition)<br>`.reg-row` (transition)<br>`.trio > div` (transition) +3 | усі 28 | перехід |
| `--dur-slow` | `0.22s` | `.btn` (transition) | approval-materials, careers, company, crew-access, entry, guided-matching, industry, inquiry, insights, norm, solution-detail | перехід |
| `--dur-instant` | `0.01ms` | `*, *::before, *::after` (transition-duration) | усі 28 | тривалість переходу |
| `--dur-instant-anim` | `0.01ms` | `*, *::before, *::after` (animation-duration) | усі 28 | тривалість анімації |

### Зображення й іконки

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--photo` | `none · локально перевизначається в 9 правилах` | `.screen-head--photo > .wrap::after` (background)<br>`.match::before` (background)<br>`.hero--photo > .wrap::after` (background)<br>`.statement` (background) +1 | усі 28 | фон |
| `--photo-filter` | `grayscale(0.35) contrast(1.06) brightness(0.9)` | `.screen-head--photo > .wrap::after` (filter)<br>`.hero--photo > .wrap::after` (filter)<br>`.index-major > article::before` (filter) | усі 28 | обробка фото |
| `--photo-filter-card` | `grayscale(0.35) contrast(1.06) brightness(0.88)` | `.match::before` (filter) | guided-matching | обробка фото |
| `--photo-h-card` | `clamp(148px, 13vw, 188px)` | `.match::before` (height)<br>`.skeleton--photo::before` (height) | guided-matching | висота |
| `--photo-h-head` | `210px` | `.screen-head--photo > .wrap::after` (min-height) | усі 28 | мінімальна висота |
| `--i-shield` | `url("../ui/icons/shield-check-linear.svg")` | `.badge` (--icon) | approval-materials, careers, company, crew-access, guided-matching, industry, insights, legal, norm, solution-detail | --icon |
| `--i-routing` | `url("../ui/icons/routing-2-linear.svg")` | `.badge--routing` (--icon) | guided-matching | --icon |
| `--i-area` | `url("../ui/icons/widget-4-linear.svg")` | `.chip--area` (--icon) | guided-matching | --icon |
| `--i-arrow` | `url("../ui/icons/alt-arrow-right-linear.svg")` | `.btn--next::after` (-webkit-mask)<br>`.btn--next::after` (mask) | approval-materials, crew-access, guided-matching, industry, norm, solution-detail | маска іконки |
| `--i-danger` | `url("../ui/icons/danger-triangle-linear.svg")` | `.chip--event` (--icon)<br>`.notice--error` (--icon) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | --icon |
| `--i-info` | `url("../ui/icons/info-circle-linear.svg")` | `.notice--empty` (--icon) | approval-materials, crew-access, guided-matching | --icon |
| `--i-clock` | `url("../ui/icons/clock-circle-linear.svg")` | `.chip--wait` (--icon)<br>`.notice--loading` (--icon)<br>`.values dd.values-val--event::before` (-webkit-mask)<br>`.values dd.values-val--event::before` (mask) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | --icon · маска іконки |
| `--i-check` | `url("../ui/icons/check-circle-linear.svg")` | `.notice--success` (--icon) | inquiry | --icon |
| `--i-chevron` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/20…` | `.field select` (background-image) | guided-matching, inquiry | зображення |

---

## 3. Токени конкретних компонентів

Змінні «компонент-властивість», які з'явились, коли на кроці 5 голі значення винесли з класів у
`:root`. Кожна вживається рівно в тому компоненті, чиє ім'я несе. Саме вони на кроці 2 мають
розійтися: сире значення — у primitive, роль (якщо є) — у semantic, а геометрія — прямо з primitive.

| Змінна | Значення | Де вживається (правило · властивість) | Екрани | Роль у вживаннях |
|---|---|---|---|---|
| `--h2-margin-bottom` | `14px` | `h2` (margin-bottom) | усі 28 | відступ знизу |
| `--focus-outline` | `2px` | `:where(a, button, select, input, textarea, […` (outline) | усі 28 | фокус-рамка |
| `--focus-outline-offset` | `2px` | `:where(a, button, select, input, textarea, […` (outline-offset)<br>`.skip-link:focus-visible` (outline-offset) | усі 28 | відступ фокус-рамки |
| `--body-margin` | `14px` | `.body` (margin) | усі 28 | зовнішній відступ |
| `--hint-margin` | `6px` | `.hint` (margin)<br>`.field .hint` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | зовнішній відступ |
| `--wrap-pad-padding-top` | `clamp(36px, 5vw, var(--s-section))` | `.wrap--pad` (padding-top) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ зверху |
| `--wrap-pad-padding-bottom` | `64px` | `.wrap--pad` (padding-bottom) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ знизу |
| `--brand-letter-spacing` | `-0.01em` | `.brand` (letter-spacing) | усі 28 | трекінг |
| `--navs-gap` | `6px` | `.navs` (gap) | усі 28 | проміжок |
| `--site-footer-padding-top` | `52px` | `.site-footer` (padding) | усі 28 | внутрішній відступ |
| `--site-footer-font-size` | `0.875rem` | `.site-footer` (font-size) | усі 28 | кегль |
| `--foot-cols-grid-template-columns` | `repeat(auto-fit, minmax(min(160px, 100%), 1fr))` | `.foot-cols` (grid-template-columns) | усі 28 | колонки сітки |
| `--foot-cols-gap` | `36px` | `.foot-cols` (gap) | усі 28 | проміжок |
| `--foot-bar-a-padding-block` | `3px` | `.foot-bar a` (padding-block) | усі 28 | відступ по вертикалі |
| `--foot-bar-margin-top` | `40px` | `.foot-bar` (margin-top) | усі 28 | відступ зверху |
| `--foot-bar-font-size` | `0.8125rem` | `.foot-bar` (font-size) | усі 28 | кегль |
| `--foot-legal-max-width` | `72ch` | `.foot-legal` (max-width) | усі 28 | максимальна міра |
| `--screen-head-h1-max-width` | `18ch` | `.screen-head h1` (max-width) | approval-materials, careers, company, crew-access, guided-matching, industry, inquiry, insights, legal, norm, solution-detail | максимальна міра |
| `--stack-h2-font-size` | `1.5rem` | `.stack > section > h2` (font-size) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | кегль |
| `--stack-h2-padding-top` | `14px` | `.stack > section > h2` (padding-top) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ зверху |
| `--stack-h2-margin-bottom` | `22px` | `.stack > section > h2` (margin-bottom) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ знизу |
| `--split-padding-top` | `48px` | `.split` (padding) | guided-matching | внутрішній відступ |
| `--split-grid-template-columns` | `minmax(0, 340px)` | `.split` (grid-template-columns) | guided-matching | колонки сітки |
| `--section-head-margin` | `28px` | `.section-head` (margin) | guided-matching | зовнішній відступ |
| `--section-head-row-gap` | `10px` | `.section-head` (row-gap) | guided-matching | проміжок рядів |
| `--section-close-hint-padding-top` | `14px` | `.section--close .hint` (padding-top) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | відступ зверху |
| `--section-close-hint-margin-top` | `22px` | `.section--close .hint` (margin-top) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | відступ зверху |
| `--section-close-link-offset` | `3px` | `.section--close :is(.hint, .body) a` (text-underline-offset) | solution-detail | відступ підкреслення |
| `--section-band-padding-block` | `clamp(28px, 4vw, 44px)` | `.stack > section.section--band, .section--band` (padding) | approval-materials, careers, crew-access, industry, norm, solution-detail | внутрішній відступ |
| `--section-band-padding-inline` | `clamp(20px, 3vw, 36px)` | `.stack > section.section--band, .section--band` (padding) | approval-materials, careers, crew-access, industry, norm, solution-detail | внутрішній відступ |
| `--section-wide-hint-margin-top` | `14px` | `.section--wide > .hint` (margin-top) | approval-materials, crew-access, guided-matching, industry, inquiry, norm, solution-detail | відступ зверху |
| `--band-tight-padding` | `52px` | `.band-tight` (padding) | entry | внутрішній відступ |
| `--btn-padding-block` | `11px` | `.btn` (padding) | approval-materials, careers, company, crew-access, entry, guided-matching, industry, inquiry, insights, norm, solution-detail | внутрішній відступ |
| `--btn-outline` | `2px` | `.btn:focus-visible` (outline) | approval-materials, careers, company, crew-access, entry, guided-matching, industry, inquiry, insights, norm, solution-detail | фокус-рамка |
| `--btn-outline-offset` | `3px` | `.btn:focus-visible` (outline-offset) | approval-materials, careers, company, crew-access, entry, guided-matching, industry, inquiry, insights, norm, solution-detail | відступ фокус-рамки |
| `--btn-ghost-outline-offset` | `2px` | `.btn--ghost:focus-visible` (outline-offset) | approval-materials, careers, crew-access, entry, guided-matching, industry, insights, norm, solution-detail | відступ фокус-рамки |
| `--badge-gap` | `7px` | `.badge` (gap) | approval-materials, careers, company, crew-access, guided-matching, industry, insights, legal, norm, solution-detail | проміжок |
| `--badge-padding-inline` | `9px` | `.badge` (padding) | approval-materials, careers, company, crew-access, guided-matching, industry, insights, legal, norm, solution-detail | внутрішній відступ |
| `--chip-gap` | `7px` | `.chip` (gap) | approval-materials, crew-access, entry, guided-matching, industry, insights, solution-detail | проміжок |
| `--chip-boxed-padding-block` | `5px` | `.chip--boxed` (padding) | guided-matching | внутрішній відступ |
| `--chip-boxed-padding-inline` | `10px` | `.chip--boxed` (padding) | guided-matching | внутрішній відступ |
| `--chip-record-padding-block` | `9px` | `.chip--record` (padding) | guided-matching | внутрішній відступ |
| `--values-font-size` | `0.875rem` | `.values` (font-size) | company, crew-access, guided-matching, inquiry, norm, solution-detail | кегль |
| `--values-padding` | `14px` | `.values` (padding) | company, crew-access, guided-matching, inquiry, norm, solution-detail | внутрішній відступ |
| `--values-dt-padding-top` | `3px` | `.values dt` (padding-top) | company, crew-access, guided-matching, inquiry, norm, solution-detail | відступ зверху |
| `--values-max-width` | `780px` | `table.values` (max-width) | company, crew-access, guided-matching, inquiry, norm, solution-detail | максимальна міра |
| `--values-cell-padding-block` | `11px` | `table.values th, table.values td` (padding) | company, crew-access, guided-matching, inquiry, norm, solution-detail | внутрішній відступ |
| `--values-th-width` | `220px` | `table.values th` (width) | company, crew-access, guided-matching, inquiry, norm, solution-detail | ширина |
| `--values-th-padding-top-narrow` | `10px` | `table.values th` (padding) | company, crew-access, guided-matching, inquiry, norm, solution-detail | внутрішній відступ |
| `--values-td-padding-top-narrow` | `3px` | `table.values td` (padding) | company, crew-access, guided-matching, inquiry, norm, solution-detail | внутрішній відступ |
| `--tbd-padding-block` | `2px` | `.tbd` (padding) | approval-materials, careers, company, crew-access, entry, industry, insights, legal, solution-detail | внутрішній відступ |
| `--tbd-block-padding-block` | `5px` | `.tbd--block` (padding) | solution-detail | внутрішній відступ |
| `--tbd-block-padding-inline` | `10px` | `.tbd--block` (padding) | solution-detail | внутрішній відступ |
| `--match-h3-font-size` | `clamp(1.953rem, 1.1rem + 1.9vw, 2.441rem)` | `.match h3` (font-size) | guided-matching | кегль |
| `--match-h3-margin` | `2px` | `.match h3` (margin) | guided-matching | зовнішній відступ |
| `--match-chip-margin` | `14px` | `.match .chip` (margin) | approval-materials, crew-access, entry, guided-matching, industry, insights, solution-detail | зовнішній відступ |
| `--reg-row-div-flex` | `320px` | `.reg-row > div` (flex) | approval-materials, entry, industry, norm, solution-detail | основа флекс-елемента |
| `--reg-row-code-div-grid-template-columns` | `minmax(0, 180px)` | `.reg-row--code > div` (grid-template-columns) | solution-detail | колонки сітки |
| `--rows-li-gap` | `2px` | `.rows li` (gap) | industry, solution-detail | проміжок |
| `--rows-meta-font-size` | `0.875rem` | `.rows .meta` (font-size) | approval-materials, entry, industry, norm, solution-detail | кегль |
| `--rows-li-grid-template-columns` | `minmax(0, 22ch)` | `.rows li` (grid-template-columns) | industry, solution-detail | колонки сітки |
| `--pair-gap` | `64px` | `.pair` (gap) | industry | проміжок |
| `--pair-ruled-div-padding-top` | `28px` | `.pair--ruled > div + div` (padding-top) | industry | відступ зверху |
| `--pair-ruled-div-margin-top` | `28px` | `.pair--ruled > div + div` (margin-top) | industry | відступ зверху |
| `--trio-grid-template-columns` | `repeat(auto-fit, minmax(min(240px, 100%), 1fr))` | `.trio` (grid-template-columns) | careers, crew-access, industry, solution-detail | колонки сітки |
| `--trio-div-padding` | `22px` | `.trio > div` (padding) | careers, crew-access, industry, solution-detail | внутрішній відступ |
| `--news-item-gap` | `22px` | `.news-item` (gap) | entry, insights | проміжок |
| `--news-item-h3-line-height` | `1.35` | `.news-item h3` (line-height) | entry, insights | міжрядковий |
| `--field-label-margin` | `6px` | `.field > label` (margin) | guided-matching, inquiry | зовнішній відступ |
| `--field-input-padding-block` | `9px` | `.field input, .field select, .field textarea` (padding) | guided-matching, inquiry | внутрішній відступ |
| `--field-input-padding-inline` | `11px` | `.field input, .field select, .field textarea` (padding) | guided-matching, inquiry | внутрішній відступ |
| `--notice-margin` | `28px` | `.notice` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | зовнішній відступ |
| `--notice-title-gap` | `10px` | `.notice :is(h2, h3)` (gap) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | проміжок |
| `--notice-title-margin` | `10px` | `.notice :is(h2, h3)` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | зовнішній відступ |
| `--sk-animation` | `1.6s` | `.sk` (animation) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | анімація |
| `--sk-rank-width` | `146px` | `.sk-rank` (width) | guided-matching | ширина |
| `--sk-rank-height` | `31px` | `.sk-rank` (height) | guided-matching | висота |
| `--sk-title-width` | `min(300px, 72%)` | `.sk-title` (width) | guided-matching | ширина |
| `--sk-title-height` | `calc(clamp(1.953rem, 1.1rem + 1.9vw, 2.441rem) * var(--lh-…` | `.sk-title` (height) | guided-matching | висота |
| `--sk-h2-width` | `min(380px, 58%)` | `.sk-h2` (width) | approval-materials, crew-access, industry, solution-detail | ширина |
| `--sk-h2-height` | `24px` | `.sk-h2` (height) | approval-materials, crew-access, industry, solution-detail | висота |
| `--sk-area-width` | `150px` | `.sk-area` (width) | guided-matching | ширина |
| `--sk-area-margin` | `14px` | `.sk-area` (margin) | guided-matching | зовнішній відступ |
| `--sk-line-margin` | `11px` | `.sk-line` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | зовнішній відступ |
| `--sk-btn-height` | `49px` | `.sk-btn` (height) | guided-matching, solution-detail | висота |
| `--sk-btn-width` | `min(200px, 100%)` | `.sk-btn` (width) | guided-matching, solution-detail | ширина |
| `--sk-line-height-plain` | `14px` | `.skeleton--plain .sk-line` (height) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | висота |
| `--sk-line-margin-plain` | `10px` | `.skeleton--plain .sk-line` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | зовнішній відступ |
| `--sk-btn-height-plain` | `42px` | `.skeleton--plain .sk-btn` (height) | guided-matching, solution-detail | висота |
| `--sk-value-height-plain` | `12px` | `.sk-values--plain :is(.sk-dt, .sk-dd)` (height) | solution-detail | висота |
| `--sk-values-columns` | `minmax(0, 64px)` | `.sk-values` (grid-template-columns) | guided-matching, solution-detail | колонки сітки |
| `--sk-values-padding` | `14px` | `.sk-values` (padding) | guided-matching, solution-detail | внутрішній відступ |
| `--sk-values-plain-gap` | `10px` | `.sk-values--plain` (gap) | solution-detail | проміжок |
| `--sk-values-plain-columns` | `minmax(0, 96px)` | `.sk-values--plain` (grid-template-columns) | solution-detail | колонки сітки |
| `--sk-values-plain-columns-wide` | `minmax(0, 220px)` | `.sk-values--plain` (grid-template-columns) | solution-detail | колонки сітки |
| `--sk-dd-height` | `42px` | `.sk-dd` (height) | guided-matching, solution-detail | висота |
| `--sk-pulse-opacity` | `0.62` | `50%` (opacity) | усі 28 | opacity |
| `--fallback-title-margin` | `6px` | `.fallback :is(h2, h3)` (margin) | approval-materials, crew-access, guided-matching, industry | зовнішній відступ |
| `--fallback-fork-gap` | `clamp(32px, 4vw, 56px)` | `.fallback--fork` (gap) | guided-matching | проміжок |
| `--band-areas-h2-font-size` | `2.441rem` | `.band--areas > .wrap > h2` (font-size) | усі 28 | кегль |
| `--band-proof-padding` | `clamp(28px, 4vw, 44px)` | `.band--proof` (padding) | entry | внутрішній відступ |
| `--lede-margin-bottom` | `44px` | `.lede` (margin-bottom) | entry | відступ знизу |
| `--hero-padding-top` | `80px` | `.hero` (padding) | entry | внутрішній відступ |
| `--hero-padding-bottom` | `64px` | `.hero` (padding) | entry | внутрішній відступ |
| `--hero-h1-letter-spacing` | `-0.035em` | `.hero h1` (letter-spacing) | entry | трекінг |
| `--hero-h1-line-height` | `0.98` | `.hero h1` (line-height) | entry | міжрядковий |
| `--hero-h1-max-width` | `16ch` | `.hero h1` (max-width) | entry | максимальна міра |
| `--hero-gap` | `40px` | `.hero > .wrap` (gap) | усі 28 | проміжок |
| `--hero-photo-width` | `calc((100% - var(--gutter) * 2 - 40px) / 2.4)` | `.hero--photo > .wrap::after` (width) | усі 28 | ширина |
| `--hero-photo-min-height` | `280px` | `.hero--photo > .wrap::after` (min-height) | усі 28 | мінімальна висота |
| `--backdrop-line-height` | `1.5` | `.backdrop` (line-height) | entry | міжрядковий |
| `--backdrop-margin-top` | `28px` | `.backdrop` (margin-top) | entry | відступ зверху |
| `--backdrop-max-width` | `60ch` | `.backdrop` (max-width) | entry | максимальна міра |
| `--statement-padding` | `clamp(40px, 6vw, var(--s-band))` | `.statement` (padding) | entry | внутрішній відступ |
| `--statement-background` | `linear-gradient(105deg, oklch(0.12 0 0 / 0.78) 0%, oklch(0…` | `.statement` (background) | entry | фон |
| `--statement-panel-padding-block` | `clamp(28px, 4vw, 44px)` | `.statement > .wrap` (padding) | усі 28 | внутрішній відступ |
| `--statement-panel-padding-inline` | `clamp(20px, 4vw, 48px)` | `.statement > .wrap` (padding) | усі 28 | внутрішній відступ |
| `--statement-panel-gap` | `48px` | `.statement > .wrap` (gap) | усі 28 | проміжок |
| `--statement-panel-max-width` | `1020px` | `.statement > .wrap` (max-width) | усі 28 | максимальна міра |
| `--statement-label-column` | `minmax(0, 200px)` | `.statement > .wrap` (grid-template-columns) | усі 28 | колонки сітки |
| `--statement-p-font-size` | `clamp(1.75rem, 3vw, 2.75rem)` | `.statement p` (font-size) | entry | кегль |
| `--statement-p-line-height` | `1.08` | `.statement p` (line-height) | entry | міжрядковий |
| `--statement-after-line-height` | `1.6` | `.statement .after` (line-height) | entry | міжрядковий |
| `--statement-after-max-width` | `58ch` | `.statement .after` (max-width) | entry | максимальна міра |
| `--pos-label-margin` | `28px` | `.pos-label` (margin) | entry | зовнішній відступ |
| `--duo-grid-template-columns` | `minmax(240px, 1fr)` | `.duo` (grid-template-columns) | entry | колонки сітки |
| `--duo-gap` | `64px` | `.duo` (gap) | entry | проміжок |
| `--duo-cap-gap` | `48px` | `.duo--cap` (gap) | entry | проміжок |
| `--duo-cap-h2-font-size` | `2.441rem` | `.duo--cap h2` (font-size) | entry | кегль |
| `--orbit-row-padding` | `14px` | `.orbit-row` (padding) | entry | внутрішній відступ |
| `--orbit-tier-width` | `140px` | `.orbit-row .tier` (flex) | entry | основа флекс-елемента |
| `--orbit-desc-width` | `min(360px, 48%)` | `.orbit-row .desc` (flex) | entry | основа флекс-елемента |
| `--orbit-row-gap` | `6px` | `.orbit-row` (gap) | entry | проміжок |
| `--index-major-article-padding-block` | `40px` | `.index-major > article` (padding) | entry | внутрішній відступ |
| `--index-major-article-padding-inline` | `48px` | `.index-major > article` (padding) | entry | внутрішній відступ |
| `--index-major-article-padding-left` | `48px` | `.index-major > article + article` (padding-left) | entry | відступ зліва |
| `--index-major-article-height` | `150px` | `.index-major > article::before` (height) | entry | висота |
| `--index-major-h3-font-size` | `2.441rem` | `.index-major h3` (font-size) | entry | кегль |
| `--index-minor-article-padding` | `26px` | `.index-minor > article` (padding) | entry | внутрішній відступ |
| `--index-minor-btn-padding-block` | `7px` | `.index-minor :where(.btn--ghost)` (padding) | entry | внутрішній відступ |
| `--index-minor-btn-padding-inline` | `14px` | `.index-minor :where(.btn--ghost)` (padding) | entry | внутрішній відступ |
| `--chip-tag-line-height` | `1.5` | `.chip--tag` (line-height) | entry | міжрядковий |
| `--chip-tag-margin` | `10px` | `.chip--tag` (margin) | entry | зовнішній відступ |
| `--chip-req-line-height` | `1.5` | `.chip--req` (line-height) | entry | міжрядковий |
| `--chip-req-padding-top` | `10px` | `.chip--req` (padding-top) | entry | відступ зверху |
| `--chip-date-margin` | `5px` | `.chip--date` (margin) | approval-materials, entry, insights | зовнішній відступ |
| `--sector-list-grid-template-columns` | `repeat(auto-fit, minmax(min(230px, 100%), 1fr))` | `.sector-list` (grid-template-columns) | entry | колонки сітки |
| `--offset-grid-template-columns` | `minmax(0, 660px)` | `.offset` (grid-template-columns) | entry | колонки сітки |
| `--held-cell-padding-right` | `36px` | `.held > div` (padding) | entry | внутрішній відступ |
| `--held-cell-padding-left` | `36px` | `.held > div + div` (padding-left) | entry | відступ зліва |
| `--held-h3-font-size` | `19px` | `.held h3` (font-size) | entry | кегль |
| `--held-h3-margin-bottom` | `10px` | `.held h3` (margin-bottom) | entry | відступ знизу |
| `--logo-row-gap` | `10px` | `.logo-row` (gap)<br>`.stack .logo-row` (gap) | crew-access, entry, industry, solution-detail | проміжок |
| `--logo-row-margin-top` | `44px` | `.logo-row` (margin-top) | crew-access, entry, industry, solution-detail | відступ зверху |
| `--logo-slot-min-height` | `56px` | `.logo-slot` (min-height) | crew-access, entry, industry, solution-detail | мінімальна висота |
| `--logo-slot-line-height` | `1.5` | `.logo-slot` (line-height) | crew-access, entry, industry, solution-detail | міжрядковий |
| `--logo-row-spacer` | `28px` | `.logo-row` (grid-template-columns) | crew-access, entry, industry, solution-detail | колонки сітки |
| `--field-chevron-inset` | `11px` | `.field select` (background-position) | guided-matching, inquiry | позиція фону |
| `--field-chevron-space` | `36px` | `.field select` (padding-right) | guided-matching, inquiry | відступ справа |
| `--field-min-height-touch` | `44px` | `.field :is(input, select)` (min-height) | guided-matching, inquiry | мінімальна висота |
| `--section-after-block` | `24px` | `.stack > section > :is(dl, .trio) + :is(h3, …` (margin-top) | approval-materials, careers, company, crew-access, industry, insights, legal, norm, solution-detail | відступ зверху |
| `--anchored-cta-gap` | `24px` | `.duo--anchored > div:first-child p:has(> .btn)` (margin-top)<br>`.offset > div:first-child p:has(> .btn)` (margin-top) | entry | відступ зверху |
| `--skip-link-offset` | `8px` | `.skip-link` (top) | усі 28 | позиція |
| `--logo-name-size` | `0.94rem` | `.logo-name` (font-size) | crew-access, entry, industry, solution-detail | кегль |
| `--logo-slot-gap` | `2px` | `.logo-slot:has(.logo-name)` (gap) | crew-access, entry, industry, solution-detail | проміжок |
| `--logo-row-lead-gap` | `32px` | `.logo-row--lead` (margin) | crew-access, entry, industry, solution-detail | зовнішній відступ |
| `--code-h1-font-size` | `clamp(2.2rem, 4.5vw, 4rem)` | `.screen-head--code h1` (font-size) | norm | кегль |
| `--route-rule-padding-top` | `28px` | `.stack--route > section + section` (padding-top) | norm | відступ зверху |
| `--route-last-padding-bottom` | `36px` | `.stack--route > section:last-of-type` (padding-bottom) | norm | відступ знизу |
| `--values-doc-font-size` | `0.9375rem` | `.values--doc` (font-size) | crew-access, norm | кегль |
| `--values-doc-line-height-key` | `1.5` | `.values--doc dt` (line-height) | crew-access, norm | міжрядковий |
| `--values-doc-dd-max-width` | `70ch` | `.values--doc dd` (max-width) | crew-access, norm | максимальна міра |
| `--values-event-font-size` | `1.25rem` | `.values dd.values-val--event` (font-size) | norm | кегль |
| `--values-event-font-size-narrow` | `1.125rem` | `.values dd.values-val--event` (font-size) | norm | кегль |
| `--values-event-line-height` | `1.4` | `.values dd.values-val--event` (line-height) | norm | міжрядковий |
| `--values-event-gap` | `10px` | `.values dd.values-val--event` (gap) | norm | проміжок |
| `--values-event-icon` | `19px` | `.values dd.values-val--event::before` (width)<br>`.values dd.values-val--event::before` (height) | norm | висота · ширина |
| `--values-event-icon-offset` | `4px` | `.values dd.values-val--event::before` (margin-top) | norm | відступ зверху |
| `--values-passport-key-margin-top` | `14px` | `.values--passport dt` (margin) | norm | зовнішній відступ |
| `--values-passport-key-margin-bottom` | `1px` | `.values--passport dt` (margin) | norm | зовнішній відступ |
| `--hint-aside-padding` | `14px` | `.hint--aside` (padding-left) | norm | відступ зліва |
| `--hint-aside-margin-top` | `14px` | `.hint--aside` (margin-top) | norm | відступ зверху |
| `--reg-row-answer-padding` | `22px` | `.reg-row--answer` (padding) | norm | внутрішній відступ |
| `--body-object-padding-block` | `22px` | `.body--object` (padding) | norm | внутрішній відступ |
| `--body-object-padding-inline` | `26px` | `.body--object` (padding) | norm | внутрішній відступ |
| `--stack-diptych-first-margin` | `clamp(28px, 4vw, 48px)` | `.stack--diptych > :first-child` (margin-top) | crew-access | відступ зверху |
| `--stack-diptych-side-padding` | `clamp(32px, 4vw, 56px)` | `.stack--diptych > section.section--diptych-s…` (padding-right)<br>`.stack--diptych > section.section--diptych-end` (padding-left) | crew-access | відступ зліва · відступ справа |
| `--stack-diptych-h2-margin` | `14px` | `.stack--diptych > section:is(.section--dipty…` (margin-bottom) | crew-access | відступ знизу |
| `--values-ruled-padding-top` | `6px` | `.values--ruled` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-padding-bottom` | `8px` | `.values--ruled` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-key-padding-top` | `15px` | `.values--ruled dt` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-key-padding-right` | `18px` | `.values--ruled dt` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-cell-padding-bottom` | `10px` | `.values--ruled dt` (padding)<br>`.values--ruled dd` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-val-padding-top` | `12px` | `.values--ruled dd` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-key-first-top` | `5px` | `.values--ruled dt:first-of-type` (padding-top) | crew-access | відступ зверху |
| `--values-ruled-val-first-top` | `2px` | `.values--ruled dd:first-of-type` (padding-top) | crew-access | відступ зверху |
| `--values-ruled-narrow-key-top` | `12px` | `.values--ruled dt` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-narrow-key-bottom` | `4px` | `.values--ruled dt` (padding) | crew-access | внутрішній відступ |
| `--values-ruled-narrow-key-first-top` | `2px` | `.values--ruled dt:first-of-type` (padding-top) | crew-access | відступ зверху |
| `--values-ruled-narrow-val-bottom` | `12px` | `.values--ruled dd` (padding) | crew-access | внутрішній відступ |
| `--values-numbered-gap` | `12px` | `.values--numbered dt::before` (margin-right) | crew-access | відступ справа |
| `--section-slot-h2-margin` | `12px` | `.stack > section.section--slot > h2` (margin-bottom) | crew-access | відступ знизу |
| `--body-slot-padding-block` | `14px` | `.body--slot` (padding) | crew-access | внутрішній відступ |
| `--body-slot-padding-inline` | `16px` | `.body--slot` (padding) | crew-access | внутрішній відступ |
| `--body-slot-margin-top` | `12px` | `.body--slot` (margin) | crew-access | зовнішній відступ |
| `--section-numbered-counter-font-size` | `var(--fs-micro)` | `.section--numbered .reg-row h3::before` (font-size) | approval-materials, entry, industry, norm, solution-detail | кегль |
| `--section-numbered-counter-gap` | `10px` | `.section--numbered .reg-row h3::before` (margin-right) | approval-materials, entry, industry, norm, solution-detail | відступ справа |
| `--hint-set-margin-top` | `12px` | `.hint--set` (margin-top) | approval-materials | відступ зверху |
| `--screen-head-compact-padding-top` | `40px` | `.screen-head--compact` (padding) | inquiry | внутрішній відступ |
| `--screen-head-compact-padding-bottom` | `24px` | `.screen-head--compact` (padding) | inquiry | внутрішній відступ |
| `--screen-head-compact-h1-font-size` | `clamp(2.441rem, 3.4vw, 3.052rem)` | `.screen-head--compact h1` (font-size) | inquiry | кегль |
| `--screen-head-compact-h1-margin` | `12px` | `.screen-head--compact h1` (margin-bottom) | inquiry | відступ знизу |
| `--work-rail-padding-top` | `24px` | `.work-rail` (padding-top) | inquiry | відступ зверху |
| `--work-rail-padding-bottom` | `64px` | `.work-rail` (padding-bottom) | inquiry | відступ знизу |
| `--work-rail-columns` | `minmax(0, 1fr) minmax(0, 300px)` | `.work-rail` (grid-template-columns) | inquiry | колонки сітки |
| `--work-rail-column-gap` | `clamp(40px, 4.5vw, 64px)` | `.work-rail` (gap) | inquiry | проміжок |
| `--work-rail-row-gap` | `24px` | `.work-rail` (gap) | inquiry | проміжок |
| `--work-rail-trace` | `680px` | `.work-rail > :is(.notice, .form-panel)` (max-width)<br>`.context-panel` (max-width) | inquiry | максимальна міра |
| `--context-panel-padding` | `20px` | `.context-panel` (padding) | inquiry | внутрішній відступ |
| `--context-panel-margin` | `24px` | `.context-panel` (margin) | inquiry | зовнішній відступ |
| `--context-panel-h2-font-size` | `1.25rem` | `.context-panel h2` (font-size) | inquiry | кегль |
| `--context-panel-h2-margin` | `8px` | `.context-panel h2` (margin) | inquiry | зовнішній відступ |
| `--form-panel-request-gap` | `16px` | `.form-panel--request` (gap) | inquiry | проміжок |
| `--form-panel-request-column-gap` | `18px` | `.form-panel--request` (gap) | inquiry | проміжок |
| `--routing-max-width` | `52ch` | `.form-panel--request .routing` (max-width) | inquiry | максимальна міра |
| `--field-textarea-min-height` | `110px` | `.form-panel--request .field textarea` (min-height) | guided-matching, inquiry | мінімальна висота |
| `--values-receipt-font-size` | `15px` | `.values--receipt` (font-size)<br>`.values--receipt dd` (font-size) | inquiry | кегль |
| `--values-receipt-dd-max-width` | `70ch` | `.values--receipt dd` (max-width) | inquiry | максимальна міра |
| `--values-receipt-dt-line-height` | `1.5` | `.values--receipt dt` (line-height) | inquiry | міжрядковий |
| `--values-receipt-dt-padding-top` | `13px` | `.values--receipt dt` (padding) | inquiry | внутрішній відступ |
| `--values-receipt-dt-padding-first` | `3px` | `.values--receipt dt:first-of-type` (padding-top) | inquiry | відступ зверху |
| `--values-receipt-dt-padding-right` | `18px` | `.values--receipt dt` (padding) | inquiry | внутрішній відступ |
| `--values-receipt-dd-padding` | `10px` | `.values--receipt dd` (padding) | inquiry | внутрішній відступ |
| `--notice-sk-line-height` | `14px` | `.notice .sk-line` (height) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | висота |
| `--notice-sk-line-margin` | `10px` | `.notice .sk-line` (margin) | approval-materials, crew-access, guided-matching, industry, inquiry, solution-detail | зовнішній відступ |
| `--wrap-pad-compact-padding-top` | `48px` | `.wrap--pad-compact` (padding-top) | careers, company, insights, legal | відступ зверху |
| `--values-stack-row-gap` | `2px` | `.values--stack` (gap) | company | проміжок |
| `--values-stack-dd-margin-bottom` | `10px` | `.values--stack dd` (margin-bottom) | company | відступ знизу |
| `--values-page-font-size` | `15px` | `.values--page` (font-size) | company | кегль |
| `--values-page-dt-line-height` | `1.5` | `.values--page dt` (line-height) | company | міжрядковий |
| `--values-page-dd-max-width` | `70ch` | `.values--page dd` (max-width) | company | максимальна міра |

---

## 4. Знахідки

### А. Дрейф значень — та сама роль, різні значення

| # | Роль | Значення | Де | Звести до |
|---|---|---|---|---|
| А1 | Кегль тексту в панелі величин | **0.875rem (14px)** `--values-font-size` · **0.9375rem (15px)** `--values-doc-font-size` · **15px** `--values-page-font-size`, `--values-receipt-font-size` | `.values` (картка збігу) · `--doc` (norm, crew-access) · `--page` (company) · `--receipt` (inquiry) | одне значення кегля панелі; заодно одна одиниця (rem) — зараз той самий 15px записаний і в px, і в rem |
| А2 | Міжрядковий моно-мітки | **1.68** `--lh-body` (`.badge`, `.chip`, `.values dt`, `.foot-cols h2`) · **1.5** ×7 (`--chip-tag-line-height`, `--chip-req-line-height`, `--backdrop-line-height`, `--logo-slot-line-height`, `--values-doc-line-height-key`, `--values-receipt-dt-line-height`, `--values-page-dt-line-height`) | мітки dt/th, чіпи, бейджі, комірки партнерів | один міжрядковий моно-мітки |
| А3 | Трекінг моно-мітки у верхньому регістрі | **0.04em** `--ls-mono` (`.badge`, `.chip--tag`, `.foot-cols h2`, `.pos-label`, `.logo-slot`) · **0.03em** `--ls-mono-tight` (`.values dt`, `table.values th`) | бейдж і мітка величини — один реєстр | один трекінг |
| А4 | Внутрішній відступ панелі | **24px** `--s-7` (`.notice`, `.form-panel`) · **22px** (`--trio-div-padding`, `--reg-row-answer-padding`, `--body-object-padding-block`) · **20px** `--context-panel-padding` · **16px** `--s-4` (`.reg-row`) · `clamp(16px, 4vw, 24px)` `--card-pad` (`.match`) | підняті панелі одного типу | 1–2 кроки відступу панелі |
| А5 | Обробка фото | **brightness 0.9** `--photo-filter` (шапка, герой, індекс) · **0.88** `--photo-filter-card` (картка збігу) | той самий знімок у різних слотах (Shield — у шапці solution-detail 0.9 і на картці 0.88) | один фільтр |
| А6 | Заголовок у тріо/смузі тверджень | **1.25rem** `--fs-3` (`.trio h3`, `.form-panel h2`, `.fallback h3`) · **19px** `--held-h3-font-size` (`.held h3`, entry) | три твердження однієї ваги | крок шкали 1.25rem |
| А7 | Трекінг великого дисплея | **−0.033em** `--ls-display` (H1 шапки) · **−0.035em** `--hero-h1-letter-spacing` (H1 героя) · **−0.03em** `--ls-3` (H2 2.441rem, ім'я збігу) | великі заголовки | 1–2 кроки трекінгу дисплея |
| А8 | Відступ фокус-рамки | **2px** `--focus-outline-offset`, `--btn-ghost-outline-offset` · **3px** `--btn-outline-offset` | фокус усіх інтерактивних | одне значення (урок 9 — стани, тут лише факт) |
| А9 | Кроки шкали кегля поза токенами | **2.441rem** записано тричі як окремі значення (`--band-areas-h2-font-size`, `--duo-cap-h2-font-size`, `--index-major-h3-font-size`) · **0.875rem**, **0.8125rem**, **1.5rem**, **1.125rem** — поза шкалою 1.25× (`--site-footer-font-size`, `--foot-bar-font-size`, `--stack-h2-font-size`, `--values-event-font-size-narrow`) | підвал, рейковий H2, великі H2 головної | 2.441rem — крок шкали (1.25⁴), має бути primitive; решта — звести до найближчого кроку або назвати свідомим винятком |
| А10 | Відступи поза шкалою простору | Шкала `--s-1…--s-8` = 4·8·12·16·18·20·24·32. Поза нею повторюються: **14px ×18 назв**, **10px ×18**, **28px ×8**, **22px ×7**, **6px ×6**, **3px ×6**, **48px ×6**, **36px ×5**, **11px ×5**, **64px ×5** | майже всі компоненти | шкала неповна: 10·14·22·28·36·40·44·48·52·64 — кандидати в primitive простору; частину (3px, 5px, 7px, 9px, 11px, 13px, 15px) звести до сусіднього кроку |

### Б. Одна змінна — кілька ролей

| # | Змінна | Ролі | Чому це проблема для теми |
|---|---|---|---|
| Б1 | `--ink` | основний текст · **фон** первинної дії, обраного бейджа, skip-link · межа дії · фокус-рамка · підкреслення ховера | у світлій темі текст стане темним, а кнопка має лишитись інвертованою до фону — одна змінна не може бути і тим, і тим |
| Б2 | `--bg` | фон сторінки · **колір тексту** на інвертованій дії | та сама причина: «текст на дії» ≠ «фон сторінки» |
| Б3 | `--line-strong` | межа рангу · межа ghost-кнопки · лінійка над заголовком · пунктир пропуску · активна навігація · вісь диптиха · **заливка** смуги ярусу | сім ролей; заливка орбіти — узагалі не межа |
| Б4 | `--surface-2` | колодязь величин · заливка поля · коробка чіпа · панель у смузі · кістка скелета · плейсхолдер фото | поле вводу і кістка скелета в іншій темі розійдуться |
| Б5 | `--surface` | піднята панель · доказова смуга · підкладка під фото | смуга і панель — різні рівні глибини, збіг значення випадковий |
| Б6 | `--line` | межа панелі · розділювач рядків · вісь між колонками · межа бейджа | межа панелі й лінійка-розділювач у світлій темі потребують різного контрасту |
| Б7 | `--ink-2` | текст абзацу · значення величини · текст бейджа · утилітна навігація · підвал · пригашена половина на піднятій поверхні | роль «другорядний текст» і роль «пригашений заголовок» змішані |
| Б8 | `--ink-3` | моно-мітка · чіп-величина · заголовок колонки підвалу · правовий рядок · номер позиції | найслабша текстова пара (5.28:1 на `surface-2`) несе п'ять ролей |
| Б9 | `--signal` | подія-збій · подія-строк · **фокус-рамка первинної кнопки** | фокус — не подія (R15 критики уроку 7); урок 9 |
| Б10 | `--ink-dim` і `--field-border` | **навпаки:** дві змінні з однаковим значенням `oklch(0.55 0 0)` — пригашений заголовок і межа поля | не дрейф, дві ролі; але primitive тут один |

### В. Значення повз змінні

| # | Де | Що | Як з'явилось |
|---|---|---|---|
| В1 | `--statement-background` | `linear-gradient(105deg, oklch(0.12 0 0 / 0.78) …)` — колір ґрунту `--bg` вписаний літералом тричі з різною прозорістю | градієнт перенесено з `_panel.css` цілим рядком |
| В2 | `--i-chevron` | `stroke='%23b7b7b7'` — це `--ink-2`, вписаний hex-ом у data-URI | шеврон K7: SVG у фоні не читає CSS-змінних |
| В3 | 22 умови `@media` | пороги 559·560·639·700·719·720·759·760·799·800·859·860·899·900·979·980·1080·1081·1240·1353·1366·1379 | CSS не дозволяє змінні в умовах `@media`. **18 різних порогів**, частина — пари «−1» (719/720, 979/980) |
| В4 | Токени компонентів §3 | числа поза шкалою (А9, А10) записані як значення токенів, а не як посилання на крок шкали | крок 5 переносив числа з класів дослівно |

Голих кольорів чи пікселів **у самих класах компонентів — немає** (перевірено скриптом).

---

## 5. Кандидати в семантичні ролі — з яких вживань їх видно

Імена — робочі, з мови DESIGN.md і вживань вище; остаточні ухвалюються на кроці 2.

| Кандидат | Зараз | З яких вживань видно |
|---|---|---|
| **Фон сторінки** (ґрунт) | `--bg` | `body`, `.statement` під знімком |
| **Фон піднятої панелі** | `--surface` | `.match`, `.reg-row`, `.trio > div`, `.news-item`, `.form-panel`, `.notice`, `.skeleton`, `.orbit`, `.context-panel` |
| **Фон доказової смуги** | `--surface` (збіг) | `.section--band`, `.band--raised`, `.band--proof` — роль «зона», не «панель» (Б5) |
| **Фон колодязя величин** | `--surface-2` | `.values`, `table.values`, `.rows`, `.chip--boxed`, `.chip--record`, панелі всередині смуги |
| **Фон поля вводу** | `--surface-2` (збіг) | `.field input/select/textarea`, `option` (Б4) |
| **Кістка скелета** | `--surface-2` + `--bone` | `.sk`, `.sk-values`, `.sk-title`, `.sk-btn` — дві сходинки однієї ролі «завантаження» |
| **Текст основний** | `--ink` | `body`, заголовки, `table td`, мітки полів, значення в полі |
| **Текст другорядний** | `--ink-2` | `.body`, `.meta`, `.hint`, `.values dd`, `.nav-utility`, підвал |
| **Текст-мітка (моно)** | `--ink-3` | `.values dt`, `table th`, `.chip`, заголовки колонок підвалу, номери позицій |
| **Текст пригашений у заголовку** | `--ink-dim` | `h1 .dim`, `h2 .dim` — **одне місце** |
| **Межа панелі / розділювач** | `--line` | межі панелей і лінійки — можливо, дві ролі (Б6) |
| **Межа рангу (обране, ведуче)** | `--line-strong` | `.match`, `.rows li:first-child`, `.trio--ranked`, `.reg-row--lead/--answer`, `.skeleton` |
| **Межа поля вводу** | `--field-border` | `.field` контроли — **одне місце** |
| **Дія** (інверсія) — фон | `--ink` | `.btn`, `.badge--selected`, `.skip-link`, `::selection` |
| **Дія — текст на ній** | `--bg` | ті самі (Б1, Б2) |
| **Дія — наведення** | `--ink-hover` | `.btn:hover` — **одне місце** |
| **Другорядна дія — межа** | `--line-strong` | `.btn--ghost` |
| **Подія** (збій, строк) — «небезпека» демо | `--signal` | `.notice--error`, `.chip--event`, `.values-key--event`, іконка строку |
| **Подія — межа** | `--signal-dim` | `.notice--error` — **одне місце** |
| **Обране системою** — «довіра» демо | `--ink` фон + `--line-strong` межа | `.badge--selected`, `.match` первинна, `.trio--ranked` — у Asterra довіра виражена **рангом і чужим ім'ям**, окремого кольору довіри немає (одна хроматика — подія) |
| Фокус | `--ink` / `--signal` | за промптом уроку — **не зараз**, урок 9 разом зі станами |

**Кольори, що стоять рівно в одному місці** (за правилом кроку 2 semantic-токеном не стають без
рішення): `--ink-dim` (пригашена половина заголовка) · `--ink-hover` (ховер кнопки) · `--signal-dim`
(межа помилки) · `--field-border` (межа поля) · `--bone` (кістка скелета) · градієнт смуги-заяви (В1).
'''
