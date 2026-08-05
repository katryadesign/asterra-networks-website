# People — що research.md знає про людей (і чого не знає)

**Джерело:** [`research.md`](./research.md) (аудит 16 сайтів, зібрано 2026-07-22) + [`../CLAUDE.md`](../CLAUDE.md) §4 (бриф).
**Складено:** 2026-08-05.

> **Оновлення 2026-08-05:** частину `[?]` з §6 закрито в [`people-desk.md`](./people-desk.md)
> (desk research: вакансії, структура судноплавного менеджменту, календар регуляцій,
> галузеві опитування). Закрито: хто ухвалює і хто підписує (§6.2), тригери купівлі (§6.3),
> бюджети на кібер, підтвердження припущення «не спеціаліст у всіх пілларах».
> Лишається відкритим: **уся поведінка на сайті** (§6.5, §6.6) і лексика покупця.

---

## 0. Статус доказів — прочитати першим

`research.md` — це **конкурентний аудит сайтів**, не дослідження користувачів.
Метод (§2): прямі фетчі живих сторінок + 61 скріншот (Playwright, 1440×900). Логін-зони
(Portal360, COSMO, SiePortal, aip.palantir.com) **не відкривались**.

Отже: **жодного інтерв'ю, опитування, аналітики, запису сесій, даних із CRM,
тикетів саппорту чи логів пошуку.** Спостережуваної поведінки реальної людини у файлі
немає — за одним винятком (§2.C, NerdWallet), і той з споживчих фінансів, не з B2B-маритайму.

Кожне спостереження нижче промарковане рівнем доказу:

| Мітка | Значення |
|---|---|
| **[ЗАЯВА]** | конкурент сам так каже на своєму сайті — верифіковано цитатою/скріном |
| **[ВИВЕДЕНО]** | висновок про людину з того, що сайт вирішив показати; людину не питали |
| **[БЕЗ ДЖЕРЕЛА]** | твердження в тексті research.md або брифі без жодного посилання на дані |

---

## 1. ХТО ШУКАЄ

### 1.1 Прямий ринок сегментує аудиторію за галуззю, і маритайм скрізь перший **[ЗАЯВА]**

П'ять HARD-конкурентів, рядок «Primary audience» ([§3](./research.md#3-hard-group--comparative-table)):

| Компанія | Заявлена аудиторія |
|---|---|
| Marlink | оператори віддалених/морських активів; підменю: Shipping, Cruise, Energy, Enterprise & Telco, Government & Defence, Humanitarian & Aid ([home](https://marlink.com/)) |
| Navarino | **тільки маритайм** — торговельні флоти; «1 in 3 ocean-going merchant vessels globally use a Navarino service» ([скрін](./screens/hard/navarino-home-hero.png)) |
| NSSLGlobal | Maritime / Defence and Government / Enterprise / Critical Rescue and Infrastructure ([maritime](https://nsslglobal.com/markets/maritime/)) |
| IEC Telecom | Land: Government, Humanitarian, Energy-Onshore, Enterprise, Media · Maritime: Fishing, Energy-Offshore, Shipping, **Superyachts** ([home](https://www.iec-telecom.com)) |
| Speedcast | 12 галузей у навігації, Commercial Maritime → Government ([home](https://www.speedcast.com)) |

Значуще для нас: **Fishing і Superyachts** (IEC) та **Cruise** (Marlink) — сегменти, яких немає
в нашому списку галузей ([`../CLAUDE.md`](../CLAUDE.md) §5). **Humanitarian & Aid** є у двох із
п'яти. Це не доказ, що такі покупці існують у нас — це доказ, що конкуренти вважають їх
достатньо окремими, щоб дати їм власну сторінку.

### 1.2 Провайдери самі розділяють «продажі» і «підтримку» як **різних людей** **[ВИВЕДЕНО]**

Найсильніший структурний сигнал у файлі про те, що на сайт приходить не одна людина
([§6, патерн 3](./research.md#three-shared-market-patterns)):

- **Speedcast** ділить контакти за сегментом: `maritimeinfo@` / `energy@` / `governmentinfo@` ([скрін](./screens/hard/speedcast-contact-directory.png))
- **Navarino** — за функцією: `globalsales@` / `technical.support@`, форми немає взагалі ([скрін](./screens/hard/navarino-contact-directory.png))
- **IBM** — явний sales-vs-support роздільник на сторінці контактів ([contact](https://www.ibm.com/contact))
- **NVIDIA** — тристороннє: Support / Sales / Partners ([contact](https://www.nvidia.com/en-us/contact/))
- **IEC** — форма для продажів vs зовнішній портал «Submit a Ticket»
- **Honeywell** — на сторінці саппорту стоять **B2C-телефонні лінії**, тобто до них масово приходить не той, кого вони хочуть ([support](https://www.honeywell.com/us/en/support))

### 1.3 Форми конкурентів — це фактично їхній перелік того, хто до них пише **[ЗАЯВА]**

Найконкретніший доказ у всьому файлі про склад вхідного потоку — поле «How can we help you?»
у **Marlink** ([скрін](./screens/hard/marlink-contact-form.png)): *Request a quote / Talk to sales /
Technical support / Billing / Reseller / Partnership / Other*. Сім типів запиту, з яких **чотири не
про купівлю** (support, billing, reseller, partnership).

Що ще запитують у людини перед контактом:
- **NVIDIA** — dropdown-и **Industry + Job Role** + бокс-відведення для саппорту ([sales form](https://www.nvidia.com/en-us/contact/sales/))
- **Stripe** — квaліфікація за **річним доходом** компанії: email+country → annual revenue → details ([скрін](./screens/aspirational/stripe-contact-sales.png))
- **IEC** — Interest (10 секторів) + **«How did you hear about us?»** ([скрін](./screens/hard/iec-telecom-contact-form.png))
- **Cisco** — 14+ полів із Question Category routing, на чужому домені ([form](https://engage2demand.cisco.com/LP=5642))

### 1.4 Тільки один конкурент назвав розмір своєї аудиторії числом **[ЗАЯВА]**

**Siemens**: герой головної адресує «600,000 TIA Portal users» ([home](https://www.siemens.com/global/en.html)).
Це єдина в усьому файлі кількісна оцінка живої аудиторії. Усі решта чисел — про **судна, супутники,
міста, запити, гроші**, не про людей. Тобто ринок рахує активи, а не користувачів.

### 1.5 Персона Asterra — твердження брифу, не знахідка дослідження **[БЕЗ ДЖЕРЕЛА]**

[`../CLAUDE.md`](../CLAUDE.md) §4: Персона #1 — **судновласники та флот-оператори / технічні
менеджери**. Вторинні: IT/security, government/defence, енергетика, транспорт/логістика,
дослідницькі організації, аварійне реагування. Спільні драйвери рішення: *reliability,
global coverage, security, compliance, access to technical support*.

**Під цим немає жодного посилання.** Це вхідна умова проєкту, а не результат дослідження.

Сам `research.md` додає до персони одну характеристику, теж **без джерела** ([§9.3](./research.md#93-mechanisms-to-port-into-asterra), [§10.6](./research.md#106-fit-for-asterra-networks)):
> «a technical professional in their own domain, but rarely a specialist across all five pillars
> (satellite RF, cyber, AI/IoT, safety, services)»

Це припущення несе на собі **весь вибір Solution Finder** як головного патерну. Якщо воно
хибне — рекомендація §10.6 розсипається. Воно ніде не перевірене.

---

## 2. ЩО НИМИ РУХАЄ

Усе нижче — **[ВИВЕДЕНО]**: це те, що конкуренти вирішили поставити першим. Доказу, що це
працює на когось, у файлі немає.

### 2.A Аптайм і масштаб — те, що ставлять біля героя **[ВИВЕДЕНО]**

Патерн «trust is quantified and placed early» ([§6, патерн 2](./research.md#three-shared-market-patterns)):
- Navarino — стат просто в героєві: «13,000+ vessels», «650+ clients», «25+ years», «1 in 3» ([скрін](./screens/hard/navarino-home-hero.png))
- Marlink — «1,700+ specialists», «15k+ Vessels connected», «99.9% Network uptime SLA», «24.7% global market share» ([скрін](./screens/hard/marlink-industry-shipping.png))
- Cloudflare — покриття як доказ: «337 cities · 8 regions», «95% of the world's Internet-connected population is within 50 milliseconds» ([скрін](./screens/aspirational/cloudflare-network-coverage.png))
- Speedcast — «95+ satellites», «35+ teleports», саппорт: «115 engineers», «24x7x365» ([скрін](./screens/hard/speedcast-support-center.png))

Тобто ринок одностайно ставить на **покриття + безперервність + масштаб мережі**.

### 2.B Сертифікації як окрема валюта — і вона специфічно маритаймова **[ЗАЯВА]**

- **Marlink**: ISO 27001/9001/14001, **IACS UR E26/E27**, **NIS2**, **IEC 62443** ([cyber](https://marlink.com/solutions/possibility-portfolio/possibility-solutions/cyber-security/))
- **Navarino**: «UR E27 Type Approved» (Bureau Veritas), «IEC 62443-3-3 Type Approved» (DNV), **IMO2021** ([скрін](./screens/hard/navarino-cybersecurity-angel.png))
- **NSSLGlobal**: ISO 27001/9001/14001/45001; партнери **NATO, Bundeswehr, Royal Navy/RFA** ([about](https://nsslglobal.com/about/))

Названий **класифікаційний орган** (DNV, Bureau Veritas) у ролі того, хто підтверджує — це
специфічно морський механізм довіри, якого немає в жодного з aspirational-конкурентів.
[ВИВЕДЕНО]: у покупця, ймовірно, є зовнішній аудит/інспекція, перед якою він відповідає.

### 2.C Єдиний прямий доказ людських мотивів у файлі — NerdWallet **[ЗАЯВА]**

[§9.4](./research.md#94-new-evidence--nerdwallet-gathered-2026-07-22), verbatim зі сторінки
([скрін](./screens/dimension-fit-trust/nerdwallet-card-finder.png)):
- «This service is FREE, will not affect your credit score, and **no contact information is required**.»
- «**We only ask questions that are essential.** No contact info required.»
- «Tap into objective ratings — See the **pros and cons** of each credit card we recommend.»
- Дисклеймер незалежності: інформація «has not been reviewed or provided by the issuer of this card»
- «FACT CHECKED / EDITORIAL INTEGRITY» + «Last updated on July 16, 2026» + прозора методика «rating of 1 to 5»

Це найближче, що є у файлі до прямого свідчення про людські страхи — але це **споживчі фінанси
в США**. Що з цього переноситься на технічного менеджера флоту — **не перевірено**.

### 2.D Дослідження/звіт як вхід у воронку **[ВИВЕДЕНО]**

- Marlink гейтить «2026 Cyber Intelligence report», «PDF (3.2MB), 20 pages» ([cyber](https://marlink.com/...cyber-security/))
- NVIDIA як доказ використовує власне дослідження: «Over 1,000 industry telecom professionals surveyed» ([скрін](./screens/aspirational/nvidia-industries.png))
- IEC тримає Download Center: «installation manuals, user guides, software updates»

[ВИВЕДЕНО]: частина аудиторії читає довгі документи до контакту. Скільки саме — невідомо.

---

## 3. ЧОГО БОЯТЬСЯ

Тут доказова база **найслабша в усьому файлі**. Прямих свідчень страху немає — є формулювання,
якими конкуренти намагаються страх зняти.

### 3.1 Прив'язка до вендора **[ВИВЕДЕНО з однієї фрази]**
**NSSLGlobal**, дослівно: «We're brand agnostic and **not tied to a particular provider**»
([about](https://nsslglobal.com/about/)) — незалежність винесена в позиціонування. Хтось таки
про це питає. Але це один конкурент із п'яти.

### 3.2 Кібер-інцидент — єдиний випадок відкритого залякування **[ЗАЯВА]**
**Speedcast** на морській сторінці подає стат «**68%**» про breaches
([скрін](./screens/hard/speedcast-industry-maritime.png)). Це єдина знайдена в HARD-групі
fear-based подача.

### 3.3 «Загубитися і не отримати відповіді» **[ВИВЕДЕНО]**
Marlink єдиний дає обіцянку маршрутизації: запит «routed to a regional specialist»
([скрін](./screens/hard/marlink-contact-form.png)). §9.3 пропонує посилити це до «reply within
one business day». Це заспокоєння **вигадане дослідженням**, не почуте від людей.

### 3.4 Непослідовність цифр як сигнал ненадійності **[БЕЗ ДЖЕРЕЛА — теза автора]**
§9.3: «inconsistency is itself a reliability signal». Дрейф зафіксовано реально —
Marlink 99.9% vs 99.99% ([shipping](https://marlink.com/solutions/industry/shipping/)),
NSSLGlobal «over 50» / «55+» / «over 56 years», Stripe 500M vs 250M API req/day.
Але що **хтось із покупців це помітив і це вплинуло на рішення — доказу нема**.

---

## 4. ЯК ОБИРАЮТЬ

### 4.1 Ринок припускає два входи: «хто я» і «що мені треба» **[ВИВЕДЕНО]**
Dual-axis IA (capability × industry) — дефолт категорії ([§6, патерн 1](./research.md#three-shared-market-patterns)):
Marlink (Portfolio / Industry / Services), Speedcast, NSSLGlobal, IEC — усі парують дерево рішень
із галузевими хабами; усі п'ять SOFT мають industries hub
([ibm](./screens/soft/ibm-industries.png), [honeywell](./screens/soft/honeywell-solutions-3axis.png),
[siemens](./screens/soft/siemens-industries.png), [schneider](./screens/soft/schneider-solutions-industries.png)).
**Navarino — єдиний виняток**: галузевої осі немає взагалі ([скрін](./screens/hard/navarino-solutions-technology.png)).

**Який із двох входів людина обирає першим — у файлі не встановлено.** §10.6 сам це визнає
відкритим: пріоритет галузевого патерну треба переглянути, «if discovery research shows buyers
self-identify by sector faster than by need». Такого дослідження не було.

### 4.2 Ніхто на ринку не веде людину за руку **[ЗАЯВА]**
З 15 сайтів справжній finder є **тільки в IEC** — і це 8 фасетів
(Application / Set-up / Service / Type / Operator / Market / Speed / Coverage,
[скрін](./screens/hard/iec-telecom-solution-finder.png)), тобто інструмент для того,
хто вже знає термінологію. Navarino не має **ні пошуку, ні фільтрів** взагалі.
Stripe «Guide me» і Cloudflare «Get a recommendation» у файлі позначені *(reported, not captured)* —
тобто **не підтверджені скріном**.

### 4.3 Порівняння пліч-о-пліч — очікуваний крок, але тільки в споживчому прикладі **[ЗАЯВА]**
«Add to compare» + pros/cons на картку є у NerdWallet
([скрін](./screens/dimension-fit-trust/nerdwallet-ratings-comparison.png)). У B2B-групі —
ні в кого.

### 4.4 Самоперевірка до контакту — те, чого HARD-група не має зовсім **[ЗАЯВА]**
C8 у [§9.2](./research.md#92-scores): Marlink **2**, IEC **2** — «one gated PDF», «brochure
Download Center only». Проти Cloudflare **5** (живий «Test your latency»,
[скрін](./screens/aspirational/cloudflare-network-coverage.png)), Stripe **5**, NerdWallet **5**.

---

## 5. ДЕ ЗРИВАЮТЬСЯ

⚠️ **Усе в цьому розділі — евристична оцінка автора дослідження [ВИВЕДЕНО].** У файлі немає
жодної воронки, аналітики чи запису сесії по жодному конкуренту. Це «де на цьому сайті
_мало би_ зривати», а не «де зриває».

**На контакті — найгірша ланка ринку ([§6, патерн 3](./research.md#three-shared-market-patterns)):**
- **Форми немає взагалі** — Navarino ([скрін](./screens/hard/navarino-contact-directory.png)) і Speedcast ([скрін](./screens/hard/speedcast-contact-directory.png)): тільки директорія офісів/телефонів. Двоє з п'яти прямих конкурентів.
- **Форма на чужому домені** — Honeywell → C3 Salesforce, Cisco → engage2demand (14+ полів)
- **Ярлик не відповідає адресі** — Speedcast «Get in Touch» веде на `/sign-up/`
- **Одна й та сама форма скрізь** — IEC, generic «SEND» на майже кожній сторінці, контекст не переноситься; плюс друкарська помилка в CTA «Lets talk»
- **Модалка поверх героя** — Stripe на момент зйомки повністю перекрив герой промо-вікном ([скрін](./screens/aspirational/stripe-home-hero.png))

**На словах:**
- Жаргон без пояснення — **COTP/COTM** у фасетах IEC (файл називає це «jargon wall»); «application layer of the OSI model» у NSSLGlobal
- Ярлики з низьким information scent — NSSLGlobal: «Drop us a Line», «At the Helm»
- Уніфіковані беззмістовні CTA — NSSLGlobal «Find out more» **11 разів на одній сторінці**

**На структурі:**
- Один і той самий продукт у трьох деревах — NSSLGlobal ([скрін](./screens/hard/nsslglobal-solutions-overview.png))
- Плоский список із 30 галузей без групування — Siemens ([скрін](./screens/soft/siemens-industries.png))
- Саппорту немає в навігації, обіцянка 24/7 закопана в About — NSSLGlobal
- Передача на інший піддомен посеред шляху — Honeywell (buildings./automation./process./aerospace.), IEC (саппорт на 3+ піддоменах), Speedcast (вихід на speedcastsigma.com), NVIDIA
- Галузевий хаб як порожня посадкова з формою — IEC maritime ([скрін](./screens/hard/iec-telecom-industry-maritime.png)); файл каже, такі сторінки «read as filler»
- Актуальний CTA веде на PDF 2020–2021 років — Speedcast, 17+ брошур

---

## 6. ЧОГО ПРО ЛЮДЕЙ МИ НЕ ЗНАЄМО

Чесний перелік. Де даних нема — стоїть **[?]**.

### 6.1 Немає жодного первинного джерела
- Інтерв'ю з покупцями — **[?]**, не проводились
- Опитування — **[?]**
- Аналітика/воронки (свої або конкурентів) — **[?]**
- Записи сесій, теплокарти — **[?]**
- Дані з продажів: реальні вхідні запити, причини відмов, довжина циклу — **[?]**
- Тикети саппорту, найчастіші питання — **[?]**
- Пошукові запити (site search, Google) — якими словами люди це шукають — **[?]**
- Юзабіліті-тест будь-якого з цих 16 сайтів — **[?]**

### 6.2 Хто саме
- Реальні посади осіб, що ухвалюють рішення — **[?]**. Бриф каже «shipowners & fleet operators / technical managers», джерела немає.
- Склад закупівельного комітету: хто ініціює / хто оцінює технічно / хто підписує / хто платить — **[?]**
- Чи є між нами і покупцем **посередник** (брокер, менеджмент-компанія, агент, системний інтегратор) — **[?]**. Для маритайму це критично, у файлі не згадано жодного разу, крім поля «Reseller» у формі Marlink.
- Бюджетні повноваження, типовий розмір угоди — **[?]**
- Тендерна/закупівельна процедура — **[?]**
- Чи однакова людина для 5 різних пілларів (Connectivity / Cyber / Digital / Safety / Services) — **[?]**. Припущення §10.6, що це одна людина і вона не спеціаліст у всіх п'яти, **не перевірене**.
- Скільки з наших 7 галузей узагалі мають окрему поведінку — **[?]**

### 6.3 Що рухає
- Що з довгого списку (uptime / покриття / ціна / сертифікація / підтримка / незалежність від вендора / репутація) важить **найбільше** і в якому порядку — **[?]**
- Тригер, що запускає пошук: закінчення контракту, новобудова, інцидент, дедлайн регуляції, зміна власника — **[?]**
- Довжина циклу ухвалення — **[?]**
- Чи люди взагалі читають whitepapers і datasheets (Resource Center у скоупі) — **[?]**
- Чи спрацьовують стат-цифри на цьому покупцеві, чи він їх ігнорує як маркетинг — **[?]**
- Чи сертифікати справді потрібні саме йому, чи це вимога його аудитора/страховика — **[?]**

### 6.4 Чого бояться
- Прямих свідчень страху — **[?]**, нуль. Все в §3 — реконструкція.
- Ціна простою в грошах для конкретного покупця — **[?]**
- Чи справді бояться lock-in (одна фраза NSSLGlobal — не доказ) — **[?]**
- Чи форма з контактними даними лякає B2B-покупця так само, як NerdWallet-івського споживача — **[?]**
- Що станеться з довірою при **хибній** рекомендації фіндера — §10.1 стверджує, що це «erodes the very trust you want», доказу — **[?]**
- Чи помічає хтось дрейф статистики — **[?]**

### 6.5 Як обирають
- **Головне невідоме:** заходять «за галуззю» чи «за потребою» першим — **[?]**. Файл сам це визнає відкритим (§10.6).
- Чи люди взагалі хочуть, щоб їх вели за руку, чи експерт дратується — **[?]** (§10.1 називає обидва сценарії, не розрізняючи)
- Чи збігається наша розбивка на 5 пілларів із їхньою ментальною моделлю — **[?]**
- Їхня власна лексика: як вони називають свою проблему — **[?]**. Що COTP/COTM — «стіна жаргону», вирішив автор дослідження, а не користувач.
- Скільки провайдерів порівнюють паралельно, за якими критеріями — **[?]**
- Чи заходять кілька разів протягом тижнів, чи один сеанс — **[?]**

### 6.6 Де зриваються
- **Жодної реальної точки зриву не спостережено** — **[?]**. Увесь §5 — гіпотези.
- Чи «немає форми» справді шкодить Navarino і Speedcast — **[?]**. Можливо, їхні угоди йдуть через телефон і стосунки, і форма їм не потрібна. Не перевірено.
- Чи вибиває людину піддоменний перехід — **[?]**
- Чи спрацьовує сторінка-директорія краще за форму для когось із сегментів — **[?]**

### 6.7 Контекст використання
- Звідки заходять: офіс / порт / борт судна — **[?]**
- Мобільний vs десктоп у цієї аудиторії — **[?]**. Бриф вибрав desktop-first (§9) **без даних**.
- Обмеження каналу (супутниковий канал із судна — повільно й дорого) — **[?]**, при тому що бриф обіцяє «expressive motion» і важкий герой (§10)
- Мова: аудиторія глобально морська (грецькі, японські, корейські власники), бриф — English only (§8). Чи це проблема — **[?]**
- Потреби доступності саме цієї аудиторії — **[?]**

### 6.8 Після контакту
- Логін-зони конкурентів **не відкривались** (§2, §8) — про постпродажного користувача (Portal360, COSMO, SiePortal) не відомо **нічого**
- Скільки в Asterra людей, щоб відповідати на запити, і чи реально виконати обіцянку «reply within one business day» із §9.3 — **[?]**
- Куди йде сабміт (email vs CRM) — відкрите питання самого дослідження (§6, open question 1) — **[?]**

---

## 7. Що з цього робити далі (не дані — рекомендація)

Мінімум, який закриває найдорожчі **[?]** перед тим, як фіксувати IA:

1. **5–8 інтерв'ю** з технічними менеджерами флоту / судновласниками. Головне питання —
   §6.5: галузь чи потреба першою, і чи збігаються 5 пілларів із їхньою моделлю.
2. **Card sort / tree test** на нашій навігації — дешево, знімає §6.5 і §6.2 (чи одна це людина
   для п'яти пілларів).
3. **Розмова з продажами** (реальний вхідний потік, посади, посередники, тригери) — знімає
   майже весь §6.2 і §6.3 без польового дослідження.

До того персона в [`../CLAUDE.md`](../CLAUDE.md) §4 має лишатися явно позначеною як **гіпотеза**,
а не як факт.
