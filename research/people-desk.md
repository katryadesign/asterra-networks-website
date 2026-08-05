# People — desk research

**Мета:** закрити частину `[?]` з [`people.md`](./people.md) §6, не проводячи інтерв'ю.
**Зібрано:** 2026-08-05, публічні джерела.
**Метод:** вакансії (реальні посадові обов'язки), структура судноплавного менеджменту,
календар регуляцій із датами, галузеві опитування з опублікованою вибіркою.

---

## 0. Що це джерело може і чого не може

**Може:** сказати, **хто** ця людина за посадою, **за що вона відповідає документально**,
**які в неї дедлайни** і **хто підписує рахунок**. Це верифіковані публічні факти.

**Не може:** сказати, **як вона поводиться на сайті**. Жодне джерело нижче не описує пошук
постачальника онлайн, читання сторінки рішень чи заповнення форми. Уся §6.6 з
[`people.md`](./people.md) (де зриваються) лишається `[?]`.

**Упередження джерел — читати разом із цифрами:**
- Опитування Inmarsat, Futurenautics (спонсори KVH + Intelsat) — це **вендорські** дослідження ринку, на якому вони продають. Числа правдоподібні, але зібрані зацікавленою стороною.
- Звіти Thetius / CyberOwl (входить у DNV Group) / HFW — теж комерційно зацікавлені, але публікують розмір вибірки і склад респондентів, що краще за більшість.
- Усі джерела англомовні й переважно європейські. Грецькі, японські, корейські власники — `[?]`.

Мітки як у [`people.md`](./people.md): **[ФАКТ]** — верифікований документ або регуляція ·
**[ОПИТУВАННЯ]** — заявлена вибірка · **[ВИВЕДЕНО]** — мій висновок.

> ### ⚠️ Додано 2026-08-05 після перевірки [`personas.md`](./personas.md)
>
> **Частина фактів нижче взята з переказу пошукової видачі, а не з першоджерела** — ці сторінки
> віддали 403 або нечитабельний PDF. Формулювання в лапках там може бути **не дослівним**.
>
> **Прочитано напряму:** вакансії (seacareer, allcruisejobs) · схема закупівлі (AVS, Valour) ·
> текст MLC 2006 (ILO) · Riviera / Geneva Dry 2025 · Digital Ship (93%) · цитата O'Halloran.
>
> **З переказу:** дати IACS UR E26/E27 (§2.3) · формулювання про DOC-верифікацію в MSC.428(98)
> (§2.2) · усі цифри Thetius/CyberOwl/HFW — «1 із 6», «55%», «<$100k», динаміка викупів,
> «17% верфей» (§1.4, §4.1–4.3) · «92%» Futurenautics (§3.2) · класифікаційний цикл докувань (§2.4).
>
> Перед захистом роботи їх треба або відкрити вручну через браузер, або зняти лапки й подавати
> як переказ. Детальний розбір — [`personas.md`](./personas.md) §8.

---

## 1. ХТО — тепер із посадовими обов'язками

### 1.1 Technical Superintendent — колишній суднових механік, і він **підписує рахунки за зв'язок** [ФАКТ]

Вакансія Technical Superintendent, дослівно
([seacareer](https://www.seacareer.com/i31473/technical-superintendent/)):

- «approve all maintenance, repair, dry-docking and **communication invoices**»
- «prepare maintenance, repair, spare gear, dry-docking, stores and lube oil budgets»
- «monitor vessels Class and trading certificates with the Marine Department»
- «monitor and oversee vessels electronic planned maintenance system»

Вимоги:
- «Qualified to at least **Class II Certificate of Competency**»
- «**Extensive experience as a sea-going Engineer**»
- «Detailed knowledge and experience of requirements covered by **ISM**»

**Три висновки для проєкту:**
1. Рахунки за зв'язок проходять через цю людину — вона в закупівельному ланцюгу, навіть якщо
   не «айтішник».
2. Вона **не з IT**. Це судновий механік, що зійшов на берег. Пише і думає в категоріях
   класу, сертифікатів, ISM і бюджету докування — не в категоріях SD-WAN чи Zero Trust.
3. Зв'язок для неї — **рядок бюджету поруч із мастилом і запчастинами**, а не стратегічна
   платформа. Це прямо суперечить тону aspirational-конкурентів із `research.md` §5.

Звітує до Fleet Group Manager ([Maersk, Ship Superintendent](https://www.maersk.com/careers/vacancies/wd/Ship-Superintendent_R117749/jt-ship-superintendent)).

### 1.2 Окрема IT-вертикаль існує — принаймні у великих операторів [ФАКТ]

Вакансія IT Officer (круїзне судно), поле «Reports To», дослівно
([allcruisejobs](https://www.allcruisejobs.com/i41081/it-officer/)):

> «Senior VP of Fleet IT, **IT Superintendent**, Corporate ITO»

Тобто **IT Superintendent — реальна посада**, і над нею є ще два рівні. Обов'язки IT Officer
включають «Network infrastructure», «Satellite infrastructure», і «running regular checks on
network and data security».

**[ВИВЕДЕНО]:** на сайт приходять щонайменше **дві різні людини** з різною мовою — судновий
технар із ISM-словником і корпоративний IT-менеджер із мережевим. Це підтверджує структурний
сигнал із [`people.md`](./people.md) §1.2 (усі конкуренти ділять контакти на sales/support), але
тепер із посадами, а не з email-адрес.

### 1.3 Той, хто дивиться сайт, часто **не той, хто підписує** [ФАКТ]

- «Around **25% of the world's international trading fleet** … is reliant on services provided by third party managers in whole or part» ([Valour Consultancy](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/))
- Розподіл повноважень ([AVS Global Supply](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)):
  - **Owner:** «Long-term asset strategy, Major capital expenditure», фреймові угоди, фліт-політики → **CAPEX**
  - **Manager:** «Daily vessel operations, Technical purchasing … Purchase order issue, Invoice checking» → **OPEX у межах ліміту**
  - Ліміти задає «an approval matrix»
- Блокери вибору, дослівно: «Approved supplier lists, Frame agreements, Fleet-wide contracts»;
  «**Supplier change may require approval when a frame agreement already exists**»
- І прямо для постачальника: «**Assumptions create risk in maritime procurement**» — треба
  з'ясувати, хто видає PO, хто затверджує бюджет, хто платить

**Це закриває найбільший `[?]` з [`people.md`](./people.md) §6.2.** Закупівельний ланцюг —
мінімум трирівневий, і в ньому є **структурний блокер**: чинна фреймова угода. Людина може
хотіти нас і не мати права нас купити.

**[ВИВЕДЕНО] для сайту:** тому в HARD-групі всюди є роль «Reseller / Partnership» у формах
(Marlink, [`people.md`](./people.md) §1.3) — це не побічний трафік, це **канал**.

### 1.4 Покупець справді не є фахівцем у всіх пілларах — і тепер це з цифрою [ОПИТУВАННЯ]

Звіт Thetius + CyberOwl (DNV Group) + HFW, *The Lifecycle Dilemma*, «more than **150
stakeholders**, including shipowners, charterers, OEMs, seafarers, insurers, shipyards»
([HFW](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)):

> «Only **1 in 6 shipowners fully understand what a cyber-secure vessel should look like** upon delivery»

Плюс, зі звіту 2023 (*Shifting Tides*, «more than 200 industry professionals»,
[CyberOwl](https://cyberowl.io/resources/global-industry-report-shifting-tides-rising-ransoms-and-critical-decisions-progress-on-maritime-cyber-risk-management-maturity/)):

> «the more senior someone's role, **the less likely they are to be aware of a cyberattack**»

**Це знімає найризикованіший `[?]`.** Припущення `research.md` §10.6 — «a technical professional
in their own domain, but rarely a specialist across all five pillars» — раніше висіло без
джерела і несло на собі весь вибір Solution Finder. Тепер під ним є опубліковане опитування.
Гіпотезою воно лишається (150 респондентів, комерційний спонсор), але вже не вигадкою.

---

## 2. КОЛИ — тригери купівлі з датами

Розділ, якого в `research.md` не було взагалі. Усе — **[ФАКТ]** із регуляторних документів.

### 2.1 MLC 2006: інтернет для екіпажу став юридичним обов'язком, 23 грудня 2024

Поправки 2022 року до Maritime Labour Convention, чинні з **23 грудня 2024**, дослівно
([ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)):

> «Shipowners, so far as is reasonably practicable, provide seafarers on board their ships with **internet access with charges, if any, being reasonable in amount**»

> «Seafarers are provided with appropriate **social connectivity** on board»

Перевіряється **Port State Control** ([Chambers](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)) — тобто інспекція в порту, із затриманням судна як санкцією.

**Чому це головна знахідка:** зв'язок для екіпажу перестав бути «welfare» і став **комплаєнсом**.
Це змінює, **хто** купує (crewing/HR і DPA заходять у розмову) і **як** це продавати (не «щасливий
екіпаж», а «проходить PSC»). Жоден із п'яти прямих конкурентів у `research.md` не будує на цьому
позиціонування.

### 2.2 IMO MSC.428(98): щорічний аудит, а не одноразовий дедлайн

Резолюція вимагає врахування кіберризиків у Safety Management System (ISM Code) не пізніше
**першої щорічної верифікації Document of Compliance компанії після 1 січня 2021**
([IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx),
[текст резолюції](https://wwwcdn.imo.org/localresources/en/OurWork/Security/Documents/Resolution%20MSC.428\(98\).pdf)).

**[ВИВЕДЕНО]:** дедлайн **повторюваний щороку**, прив'язаний до DOC-аудиту компанії, і власником
питання є **DPA / ISM-менеджер**, не IT. Це четверта роль у закупівельному комітеті.

### 2.3 IACS UR E26/E27: тільки новобуди, контракт від 1 липня 2024

Застосовуються до суден, «contracted for construction **on and after 1 July 2024**»; на наявні
судна **не поширюються ретроактивно**
([ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html),
[ABS](https://www.abs-group.com/Solutions/Cybersecurity/Maritime-Cybersecurity/Maritime-Cybersecurity-Compliance-to-Industry-Regulations/Cybersecurity-Compliance-to-IACS-E26-and-E27-Regulations/)).
E26 — кіберстійкість судна в цілому, E27 — окремих Computer Based Systems.

**Важливо не збрехати в копірайті:** це **не** створює ринку дооснащення наявного флоту. Хто
пише «UR E26 compliance for your fleet» — перебільшує. Navarino ставить type approval від DNV і
Bureau Veritas на сторінку продукту ([`people.md`](./people.md) §2.B) саме тому, що продає
обладнання **у новобуди й на постачальницький ланцюг**.

Що вже слабке місце ринку: «**17% of shipyards** feel they have adequate in-house cybersecurity
expertise to design and construct a cyber-secure vessel» ([HFW](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)).

### 2.4 Док як фізичне вікно встановлення

Класифікаційний цикл: два докування за п'ятирічний період, проміжне — приблизно через 2,5 роки,
друге збігається зі **special survey** на поновлення класу
([Marine Public](https://www.marinepublic.com/blogs/marine-law/899246-complete-guide-to-periodical-surveys-in-ship-classification)).
Technical Superintendent готує **dry-docking budget** (§1.1).

**[ВИВЕДЕНО]:** апаратне рішення купують не тоді, коли прочитали сайт, а коли судно стає в док.
Цикл ~2,5 роки. Для сайту це означає: значна частина відвідувачів **не готова купувати зараз** —
вони збирають інформацію під бюджет наступного докування. Сторінка має працювати і для тих,
хто не залишить заявку сьогодні.

---

## 3. ЩО РУХАЄ — з цифрами замість здогадів

### 3.1 Безперервність зв'язку [ОПИТУВАННЯ, вибірка не розкрита]
> «**93% of shipowners and operators** view always-on connectivity as extremely or very important»

Inmarsat *Digital Wave* ([Digital Ship](https://thedigitalship.com/news/maritime-satellite-communications/93-of-shipowners-now-see-always-on-connectivity-as-essential/)).
⚠️ Розмір вибірки і дата **не опубліковані**, джерело — вендор. Цитувати з цим застереженням.

### 3.2 Утримання екіпажу — окремий, недооцінений драйвер [ОПИТУВАННЯ]
> «**92% of seafarers** strongly influenced by internet access when choosing where to work»

Futurenautics *Crew Connectivity 2018*, **n = 6,000 діючих моряків**, спонсори KVH та Intelsat
([GlobeNewswire](https://www.globenewswire.com/news-release/2018/03/28/1454366/0/en/92-of-Seafarers-Strongly-Influenced-By-Internet-Access-When-Choosing-Where-to-Work-According-to-Futurenautics-Survey.html)).
⚠️ Найбільша вибірка з усіх знайдених — але **2018 рік**, до Starlink. Використовувати як
історичну лінію, не як поточний факт.

Свіже підтвердження, Geneva Dry 2025, Audra Drablos, strategy director Inmarsat
([Riviera](https://www.rivieramm.com/news-content-hub/13-of-vessels-operate-without-crew-internet-highlighting-maritime-connectivity-gap-84738)):
> «The **first question potential crew ask is whether there's internet on board** – before taking the job»

І розмір залишкового ринку: «**13% of vessels operate without crew internet**».

### 3.3 Очікування щодо смуги зросли на порядок [ОПИТУВАННЯ / галузева заява]
> «Pre-Covid, we were talking about speeds of **half a megabit or less**. Now we're discussing **tens or hundreds of megabits per second**» (там само)

### 3.4 🔴 Контрдрайвер, якого ніхто не очікує: власник хоче **обмежувати**, а не роздавати [ОПИТУВАННЯ]

Там само, Inmarsat про запити від судновласників:
> «**time-restricted access – perhaps a couple of hours daily – to help manage fatigue**»

І побічний ефект, який їх непокоїть:
> «The sense of camaraderie developed in mess rooms is diminishing as crew retreat to cabins with personal devices»

**Це найцінніша знахідка для дизайну продукту.** Покупець просить не «більше мегабіт», а
**політику й контроль**: квоти, розклад, розділення crew/business трафіку. Жоден із 16 сайтів у
`research.md` не подає це як фічу. Це реальна, підтверджена потреба, під яку є вільне місце
в повідомленні.

---

## 4. ЯК ОБИРАЮТЬ — і чим це відрізняється від того, що продають конкуренти

### 4.1 Бюджет на кібер значно менший, ніж припускає подача конкурентів [ОПИТУВАННЯ]
> «More than half of shipowners spend **less than US$100,000 per year** on cyber security management»

([CyberOwl / HFW / Thetius](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/))

**[ВИВЕДЕНО]:** мова корпоративних кіберплатформ (Marlink перелічує **18 named offerings** на
одній сторінці, `research.md` §3) не відповідає бюджету половини ринку. Для Asterra це аргумент
за **вузьку зрозумілу пропозицію**, а не за каталог.

### 4.2 Перевірка постачальника — непослідовна [ОПИТУВАННЯ]
> «only **55% of industry suppliers are asked by shipowners to prove** they have cyber risk management procedures in place»

**[ВИВЕДЕНО]:** майже половина покупців **не питає доказів**. Отже сторінка не може розраховувати,
що хтось шукатиме сертифікати — їх треба показувати самому, і рано. Це збігається з тим, що
робить Marlink і Navarino ([`people.md`](./people.md) §2.B), і додає причину, чому це працює.

### 4.3 Страх викупу як аргумент **втратив свою цифру** [ОПИТУВАННЯ]

| | 2023 | 2025 |
|---|---|---|
| середній сплачений викуп | **US$3.2m** | **≈US$100k** |
| частка компаній, що платили за 12 міс. | 14% | **7%** |

([HFW 2025](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/))

**Пряма вказівка для копірайту:** не будувати кіберсекцію на страху інциденту — це те, що робить
Speedcast зі своїм «68%» ([`people.md`](./people.md) §3.2), і число під цим аргументом за два роки
впало в 30 разів. Сильніший кут — **комплаєнс і аудит** (§2.2), який має дату й не знецінюється.

### 4.4 Менеджер під ціновим тиском [ФАКТ/аналітика]
> «Management contracts are negotiated **mainly on price**, margins for ship management companies are squeezed» ([Valour](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/))

**[ВИВЕДЕНО]:** якщо на сайт заходить менеджер (а це до чверті флоту, §1.3), він рахує OPEX і
має пояснити рішення власнику. Йому потрібен не сторітелінг, а **аргумент, який можна переслати
далі** — те, що NerdWallet робить через pros/cons (`research.md` §9.4).

---

## 5. Що це змінює в проєкті

| Було в `CLAUDE.md` / `research.md` | Стає після desk research |
|---|---|
| Персона #1 «shipowners & fleet operators / technical managers», без джерела | **Чотири ролі з обов'язками:** Technical Superintendent (ex-механік, підписує communication invoices, мислить ISM) · IT Superintendent / Fleet IT · DPA / ISM-менеджер (володіє MSC.428(98)) · Owner / CAPEX-аппрувер. Плюс canal: reseller / ship manager |
| «Shared decision drivers: reliability, coverage, security, compliance, support» — без ваги | **Compliance має дати** (23.12.2024 MLC · щорічний DOC-аудит · 01.07.2024 новобуди), решта — ні. Комплаєнс можна зробити навігаційною віссю |
| Тригер купівлі — `[?]` | **Чотири тригери:** PSC-інспекція · DOC-аудит · контракт на новобуд · вікно докування (~2,5 роки) |
| Кібер подається як платформа | Половина ринку має бюджет **<$100k/рік**; викуп впав до ~$100k. Продавати аудит, не страх |
| Зв'язок = більше смуги | Підтверджений запит на **контроль і політику** (час/квоти) — вільна ніша в повідомленні |
| Solution Finder на неперевіреному припущенні | Припущення підперте: **1 із 6** власників розуміє, який має бути кіберзахищений флот |

**Три конкретні правки, які я б зробив у дизайні:**

1. **Питання фіндера — від тригера, не від технології.** Не «яка вам потрібна швидкість», а
   «що змусило вас шукати: PSC-інспекція / аудит DOC / новобуд / докування / скарги екіпажу».
   Кожен варіант має джерело в §2 і веде на різний набір пілларів.
2. **Proof block будувати на регуляціях і класифікаційних органах, а не на вигаданих цифрах.**
   Asterra фіктивна — вигадані «99.9%» нічого не варті й повторюють stat drift, який ти сама
   задокументувала. А «UR E26/E27 · MSC.428(98) · MLC 2006 Amd. 2022» — справжні, датовані,
   перевіряються. І це саме те, що робить Navarino з DNV/Bureau Veritas.
3. **Додати роль у форму запиту.** Marlink питає тип запиту, NVIDIA — Job Role. З §1.3 видно,
   навіщо: відповідь superintendent-у і власнику мають бути різні, і треба знати, чи людина
   взагалі має право купувати (frame agreement).

---

## 6. Що ЛИШАЄТЬСЯ `[?]` після desk research

Чесно — desk research не закрив і половини.

**Повністю відкрито:**
- **Уся поведінка на сайті** — як шукають, що читають, де кидають. Жодне джерело вище про це не говорить. `[?]`
- Якими словами описують свою проблему у власному мовленні — вакансії дають *корпоративну* мову, не розмовну. `[?]`
- Чи збігаються наші 5 пілларів із їхньою моделлю. `[?]`
- Галузь чи потреба першою (головне питання `research.md` §10.6). `[?]`
- Скільки постачальників порівнюють і за якими критеріями. `[?]`
- Реальні ваги в тендерах — жодного тендерного документа з опублікованими критеріями оцінки дістати не вдалося (portal-и віддають 403/PDF). **Це найдешевший наступний крок:** TED, UK Find a Tender, SAM.gov — там ваги «price vs quality» публікуються відкрито.
- Мобільний vs десктоп, контекст із борту, обмеження супутникового каналу при перегляді сайту. `[?]`
- Неанглійські ринки — грецькі, японські, корейські власники. `[?]`

**Відкрито частково:**
- Розмір бюджету на **зв'язок** (на кібер — є, §4.1). `[?]`
- Довжина циклу ухвалення. Є непряма прив'язка до докування (§2.4), прямих даних `[?]`
- Чи заходить на сайт сам superintendent, чи технічний закупівельник. `[?]`

**Методологічні застереження, які треба нести в роботі:**
- Три ключові цифри (93%, 92%, «13% без інтернету») походять від **вендорів ринку**, на якому вони продають.
- Futurenautics n=6,000 — **2018 рік**, до Starlink. Ландшафт змінився.
- Inmarsat *Digital Wave* — **вибірка не розкрита**.
- Звіти Thetius/CyberOwl/HFW — 150–200 респондентів, склад опублікований, це найпрозоріше з наявного, але спонсор комерційно зацікавлений.

---

## Джерела

**Вакансії / ролі**
- [Technical Superintendent — seacareer.com](https://www.seacareer.com/i31473/technical-superintendent/)
- [Ship Superintendent — Maersk Careers](https://www.maersk.com/careers/vacancies/wd/Ship-Superintendent_R117749/jt-ship-superintendent)
- [IT Officer (cruise) — allcruisejobs.com](https://www.allcruisejobs.com/i41081/it-officer/)

**Структура закупівлі**
- [Ship-Owners vs Ship-Managers: Who Decides Supply? — AVS Global Supply](https://www.avsglobalsupply.com/blog-detail/ship-owner-ship-manager-procurement-decision)
- [A guide to the maritime ecosystem — Valour Consultancy](https://valourconsultancy.com/loose-specs-sink-shipmanagers-maritime-ecosystem/)

**Регуляції**
- [MLC 2006 amendments in force 23 Dec 2024 — ILO](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)
- [MLC amendments & PSC enforcement — Chambers and Partners](https://chambers.com/articles/mlc-2006-amendments-new-seafarer-rights-and-psc-compliance-obligations)
- [Maritime cyber risk / MSC.428(98) — IMO](https://www.imo.org/en/ourwork/security/pages/cyber-security.aspx)
- [IACS UR E26/E27 — ClassNK](https://www.classnk.or.jp/hp/en/activities/cybersecurity/ur-e26e27.html)
- [IACS UR E26/E27 compliance — ABS Group](https://www.abs-group.com/Solutions/Cybersecurity/Maritime-Cybersecurity/Maritime-Cybersecurity-Compliance-to-Industry-Regulations/Cybersecurity-Compliance-to-IACS-E26-and-E27-Regulations/)
- [Periodical surveys / dry-docking cycle — Marine Public](https://www.marinepublic.com/blogs/marine-law/899246-complete-guide-to-periodical-surveys-in-ship-classification)

**Опитування**
- [Crew Connectivity 2018, n=6,000 — Futurenautics / GlobeNewswire](https://www.globenewswire.com/news-release/2018/03/28/1454366/0/en/92-of-Seafarers-Strongly-Influenced-By-Internet-Access-When-Choosing-Where-to-Work-According-to-Futurenautics-Survey.html)
- [93% always-on connectivity, Inmarsat Digital Wave — Digital Ship](https://thedigitalship.com/news/maritime-satellite-communications/93-of-shipowners-now-see-always-on-connectivity-as-essential/)
- [13% of vessels without crew internet, Geneva Dry 2025 — Riviera](https://www.rivieramm.com/news-content-hub/13-of-vessels-operate-without-crew-internet-highlighting-maritime-connectivity-gap-84738)
- [The Lifecycle Dilemma (150+ stakeholders) — HFW / CyberOwl / Thetius](https://www.hfw.com/about-us/news/hfw-cyberowl-highlight-urgency-maritime-industry-tackling-growing-cyber-threats/)
- [Shifting Tides, Rising Ransoms (200+ professionals) — CyberOwl](https://cyberowl.io/resources/global-industry-report-shifting-tides-rising-ransoms-and-critical-decisions-progress-on-maritime-cyber-risk-management-maturity/)
- [Average $3m ransom (2022 report) — CyberOwl / HFW](https://cyberowl.io/cyberowl-hfw-report-maritime-industry-pays-average-3m-ransom-in-cyberattacks/)
