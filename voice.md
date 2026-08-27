# Voice — Asterra Networks

**Складено:** 2026-08-27
**Джерела:** [`research/research.md`](./research/research.md) (§6 · §9 · §10.6 · **§13 Мова
конкурентів**, консолідована сьогодні) · [`research/personas.md`](./research/personas.md) ·
[`research/jtbd.md`](./research/jtbd.md) · [`research/audit.md`](./research/audit.md) ·
[`research/scope-check.md`](./research/scope-check.md) · [`CLAUDE.md`](./CLAUDE.md) ·
[`microcopy.md`](./microcopy.md) (весь текст 28 вайрфреймів).

**Що це.** Правила, за якими продукт говорить — чотири розділи, від загального до
виконавчого: **Принципи** (чому ми так говоримо) → **Словник** (яким словом) →
**Заборонене** (чого не пишемо ніколи) → **Мікрокопі** (як виглядає цей конкретний рядок).
Не список улюблених слів: кожне правило застосовне до конкретного рядка й дає «так» або «ні».

**Порядок при суперечці:** принцип → словник → мікрокопі. Перемагає лівіший, а суперечність
фіксується як знахідка, не залагоджується мовчки.

**Навіщо саме зараз.** `microcopy.md` зафіксував 14 предметів під різними іменами і 27 різних
написів на три пункти призначення. Розв'язати це можна лише критерієм, а не смаком. Принципи
нижче і є цим критерієм.

---

## Рамка: що тут важливіше за що

**Ставка розмови — аудит із датою і бюджетна лінія, яку читач захищатиме перед власником.**
Тому дотепність не є метою і не є перевагою: жоден рядок не виграє від того, що він
дотепніший.

Але «довіра» тут **не означає «простіше»**. Primary-персона — P2, Fleet IT: технічна точність
для неї рідна мова, і спрощення читається як ухиляння. `jtbd.md` §4 E1 після перемикання
primary формулює це дослівно:

> ⛔ **Do not** strip technical precision — for P2 that reads as evasion, not kindness.
> ✅ **Do** keep the anti-jargon guard where the jargon is **undefined or proprietary**.

**І одне структурне обмеження, яке формує голос більше за будь-яке стилістичне рішення:**
бренд вигаданий. Цифра аптайму, названий клієнт і кейс із результатом — це вигадані факти
(`CLAUDE.md` §3, `sitemap.md` O5). Тому доказова база тут звужена до трьох речей, які можна
показати чесно: **норма з датою · папір, який лишається · акредитація за категорією**. Голос
Asterra значною мірою є наслідком цього обмеження, а не незалежним стилістичним вибором.

---

## Як читати принцип

Кожен принцип має п'ять частин: **правило** · **приклад** (реальні рядки з `microcopy.md`) ·
**антиприклад** (теж реальні — наші, де порушення вже зафіксоване; ринкові, де позначено) ·
**пояснення** (дослівна цитата з файлу ресерчу) · **межа доказу** — що саме в цьому принципі
є фактом, а що нашою тезою.

Остання частина обов'язкова. `personas.md` §6 прямо тримає в статусі **[?]** тезу «перелічені
болі спричиняють відтік саме в цих людей» — жоден принцип не має права мовчки її перескочити.

> 📌 **Датування антиприкладів (2026-08-27, Д7).** «Наші» антиприклади в принципах цитують
> текст ДО перепису — вони лишені як аргумент, чому правило знадобилося. Станом на 2026-08-27
> усі вони закриті переписом 28 сторінок; закриття по рядках — `microcopy.md` §1.x і §5.

---

# Принципи

## 1. Доказ — це чуже ім'я. Своє — це зобов'язання, і воно так і називається.

**Правило.** Про надійність говорить той, хто може її підтвердити: орган сертифікації,
виробник, норма з датою. Те, що ми стверджуємо про себе самі, називається зобов'язанням — і
підписується як зобов'язання, а не подається як доказ.

**Приклад — уже в продукті:**

> «Accredited, not self-declared — Satellite capacity partners, navigation and bridge OEMs,
> safety equipment manufacturers. **A partner name belongs to a third party and cannot be
> asserted by us.**» — Entry, блок доказу *(цитату вирівняно 2026-08-27 слідом за Н1-6)*

> «Support commitment — 24x7x365 and multilingual, **carried as a commitment rather than a
> claim of scale**.» — Industry · Solution detail

Другий рядок і є виконанням правила в найтоншому місці: сервісну обіцянку названо обіцянкою, а
не доказом, просто в тексті.

**Антиприклад — наш:**

> «Routed to a specialist for your sector who answers in your operating terms. **A person
> replies, not a queue.**» — Inquiry, мікротекст під кнопкою

Твердження про якість власного сервісу, яке не підтверджує ніхто. За формою це те саме, що
Marlink «enquiry routed to a regional specialist», звідки воно й прийшло в модель
(`research.md` §9.3, механізм 3). Сюди ж: «One party stays accountable for all of it» (Entry,
hero).

**Антиприклад — ринковий:** «13,000+ vessels» · «15k+ Vessels connected» · «115 engineers» ·
«25+ years» — `research.md` §13.2, патерн B: доказ як число, яке компанія каже сама про себе.
Двоє з цих джерел самі собі суперечать.

**Пояснення:**

- `jtbd.md` §10.3, дослівно: *«proof must name **who confirmed it** (DNV, Bureau Veritas), not
  just the fact of compliance. The body's name outweighs the number here.»*
- `scope-check.md` §2.2, дослівно: *«вона не оператор власної мережі, вона акредитований
  інтегратор чужих. Назва виробника на сторінці працює точно так, як у нашому O5 працює "назва
  органу сертифікації" — **це чуже ім'я, яке не можна собі приписати**.»*
- `research.md` §13.2, патерн C: у всій HARD-групі так пише **лише Navarino** — «UR E27 Type
  Approved» (Bureau Veritas), «IEC 62443-3-3 Type Approved (DNV)». Тобто це не галузева норма,
  а вільна позиція.
- Структурний примус: для вигаданого бренду stat і outcome case незаповнювані (`sitemap.md`
  O5). Чуже ім'я лишається єдиним типом доказу, який ми взагалі можемо показати чесно.

**Межа доказу.** Що названий орган **переконує саме цю аудиторію** — не доведено.
`personas.md` P1 ставить це прямо: *«⚠️ Precise framing: below is what competitors **do** and
what research.md scored highly… That it **works on this audience** is proven nowhere — [?]»*.
Принцип тримається не на цьому, а на структурному обмеженні вигаданого бренду — і воно
тримається без ринкових даних.

---

## 2. Ієрархія й конкретика, а не спрощення: перелік ранжований, термін пояснений.

**Правило.** Кожен перелік називає, що в ньому головне і за якою ознакою. Кожен термін або
пояснений там, де вжитий, або не вжитий — заборонене не технічне, а непояснене.

**Приклад — уже в продукті:**

> «**Connectivity and cybersecurity carry the deadlines.**» — Entry, заголовок секції
> напрямів *(редакція 2026-08-27: попередню «Six areas. Two of them carry a deadline.» знято за
> «Заборонене» §8 — лічильний шаблон)*

Ранг заявлено в заголовку іменами, ще до самого переліку; композиція його підтримує — два
напрями в major-ряду, чотири в minor.

> «Primary match» / «Also relevant» — Guided matching, результат підбору

> «Recurrence — Read at every annual **Document of Compliance** verification» — Norm

Тут абревіатуру розкрито в тому самому рядку, де вона несе сенс.

**Антиприклад — наш:**

> «Five ways fleets arrive at this page» — Solution detail

П'ять рівних рядків; жоден не названий частішим, дорожчим або терміновішим. Читач має
відсортувати сам — рівно та робота, по якій ми поціляємо.

> «Closes **MSC.428(98)** · UR E26/E27 · IEC 62443» — Entry, картка Asterra Shield

Три коди норм на першому екрані, жоден не розкритий ніде на цій сторінці. Це наш власний
екземпляр ринкового патерна «норма як значок»: код працює як сигнал серйозності, а не як
інформація. Те саме — «Cyber risk has to be in the SMS by the next DOC verification» у селекті
Guided matching, де ані SMS, ані DOC не розкриті.

**Антиприклад — ринковий:** 18 названих пропозицій на одній сторінці без ієрархії (Marlink);
**COTP / COTM** як фасети підбору без пояснення (IEC); «application layer of the OSI model» як
спосіб пояснити цінність (NSSLGlobal) — `research.md` §13.2, патерни E і F.

**Пояснення:**

- `personas.md` P2 Pains, дослівно: *«**A catalog instead of an offer.** Marlink's
  cybersecurity page lists **18 named offerings** — against half the market's <$100k/yr budget
  that doesn't read as a choice.»* **[AUDIT + SURVEY]**
- `jtbd.md` §4 E1, примітка після перемикання primary, дослівно: *«**The primary language rule
  now comes from P2's own documented pain**, not from E1: "a catalog instead of an offer"… So
  the rule is **hierarchy and specificity, not simplification**.»*
- Там само про межу заборони: *«IEC's COTP/COTM failed not because it was technical but because
  it was **unexplained**.»*
- `research.md` §6, відмінність 2: *«Asterra's scale (5 pillars) sits firmly on the curation
  side»* — тобто каталожна відповідь на когнітивне навантаження нам структурно недоступна.

**Межа доказу.** Бюджетна цифра «<$100k/рік» — **[SURVEY + 2ND-HAND]** (`audit.md` §1.3 #37):
первинне джерело не відкрилося. Сам факт 18 позицій без ієрархії — 🟢 **[AUDIT]**, знімок
є. Принцип спирається на друге; перше лише пояснює, чому це дорого.

---

## 3. Норму пояснює клас. Ми називаємо, що її закриває і який папір лишається.

**Правило.** Там, де читача обслуговує авторитетніше джерело, ми не переказуємо його, а робимо
наступний крок, якого воно не робить: називаємо рішення, що закриває вимогу, і документ, який
лишиться на столі після закриття.

**Приклад — уже в продукті:**

> «This is a working summary. **The authoritative interpretation belongs to your classification
> society; bring their guidance to the audit, not ours.**» — Norm

> «**The link the market does not publish:** the regulation, the solution that answers it, and
> what is left on your desk once it is closed.» — Solution detail, підводка

> «You keep: a documented cyber risk assessment and SMS procedures, read at the annual DOC
> verification» — Solution detail

**Антиприклад — наш:**

> «The requirement at a glance» · «What it is — An IMO resolution, adopted by the Maritime
> Safety Committee» · «Applies to — Companies and ships operating under the ISM Code» ·
> «What the auditor actually asks» — Norm

Це переказ норми — рівно та робота, яку ClassNK виконує з датованими редакціями настанов,
137 Q&A з фільтром за стейкхолдером і зразками документів. Ми входимо в змагання, яке `audit.md`
називає програшним, і робимо це на екрані, де застереження в сусідньому блоці визнає це вголос.

**Антиприклад — ринковий:** чіпи ISO / IACS / NIS2 / DORA на головній Marlink — **статичний
текст без сторінок під ними**, підтверджено по DOM; «IMO Compliance (Cybersecurity)» як мітка
без нічого (IEC) — `research.md` §13.2, патерн D.

**Пояснення:**

- `audit.md` §5 ❓2, заголовок відповіді дослівно: *«**To class. And class has already done this
  job completely.**»* І далі: *«the "make a norm-based entry" hypothesis in its "explain the
  norm" form is **a losing one**: class already performs that job with more authority than a
  vendor ever could. But ClassNK **does not sell solutions** — the link "norm → which solution
  closes it → what paper you get" **belongs to no one**.»* **[FACT]** — сторінку відкрито
  напряму.
- `jtbd.md` §8.2, R1 після звуження: *«**The precise shape of the job for us: "norm → which
  solution closes it → what paper you get."** Nobody owns that link.»*
- `research.md` §13.3, патерн H: реєстр класу — процедурний, датований, адресований за роллю
  («in particular compliance managers or persons in charge»), і **нічого не продає**. Це та
  планка, проти якої читається наша сторінка норми.

**Межа доказу.** Що людина з нормою взагалі приходить на сайт постачальника — це **D2 [?]**,
одна з найдорожчих гіпотез у `audit.md` §2. Принцип від неї **не залежить**: він регулює, як ми
говоримо, коли читач уже тут, а не чи він прийде. Якщо D2 не підтвердиться, впаде норм-вхід як
навігаційна вісь — але не це правило.

---

## 4. Одна цифра — одне значення. Чого не можемо назвати — лишаємо порожнім і кажемо чому.

**Правило.** Будь-яке число має єдине значення на всьому сайті. Слот, який довелося б заповнити
вигадкою, лишається видимо порожнім із поясненням, чому він порожній.

**Приклад — уже в продукті:**

> «Monitoring and response — **[TBD — no source]**» · «Sizing and throughput — [TBD — no
> source]» · «**Empty cells are deliberate: a figure for a fictional brand would be an invented
> fact.**» — Solution detail, spec-таблиця

> «**None of the figures below are Asterra parameters.** They are what crews report across the
> market today, from the deck» … «Our parameters: [TBD — no source]» — Crew access

Другий приклад складніший і тому цінніший: чужі ринкові цифри показані, підписані як чужі, і
поруч чесно порожній слот наш.

**Антиприклад — наш:**

> «One value per figure» (Entry) проти «one canonical value per figure» (Solution detail,
> Approval materials)

Правило про недрейф саме дрейфує — три згадки, два формулювання. Зафіксовано як Н1-11 у
`microcopy.md`. Це не педантизм: якщо читач має переказати наш принцип нагору, він перекаже
той варіант, який запам'ятав, і два наші тексти розійдуться в його переказі.

**Антиприклад — ринковий:** «over 50» / «55+» / «over 56 years» про власний вік (NSSLGlobal);
«99.99% this month» проти «99.9% SLA» на одній сторінці (Marlink) — `research.md` §13.2,
патерн B.

**Пояснення:**

- `jtbd.md` §4 E2, анкер дослівно: *«"ability to **justify investments**", "prepare business
  cases" ([Mazu]) — i.e. they **will indeed be questioned**»* **[FACT]**; ухвалення проходить
  через *«approval matrix»* **[FACT]**.
- `jtbd.md` §10.4, дослівно: *«everything the person sees, they will have to retell upward. So
  every claim must be **memorably reproducible** and self-consistent — this is exactly where
  number drift costs the most.»*
- `research.md` §9.3, механізм 2: *«inconsistency is itself a reliability signal»*.

**Межа доказу.** Остання цитата в `personas.md` P1 Repels має явну позначку: **«[the author's
thesis, not evidence]»**. Фактами тут є дрейф на сайтах (🟢 [AUDIT], знімки) і те, що P2
доведеться захищати рішення перед матрицею ухвалення (🟢 [FACT], вакансія + AVS). Що дрейф
**руйнує довіру** — наша теза, не спостереження. Правило лишається чинним, бо друга його
половина (порожній слот замість вигадки) виводиться не з неї, а з `CLAUDE.md` §3.

---

## 5. Напис називає те, що на тому боці. Одна дія — одна назва.

**Правило.** Кнопка називає предмет і результат переходу, а не жест запрошення. Той самий
перехід зветься однаково на всіх екранах.

**Приклад — уже в продукті:**

> «**See what closes it**» — Industry, рядок ситуації
> «**Ask an expert about this norm**» — Norm
> «**Read the norm it answers**» — Solution detail, hero

Кожен напис відповідає на питання «що я побачу далі», а два з трьох ще й називають предмет.

**Антиприклад — наш, і це найгустіше порушення в усьому продукті:**

> «Learn more» ×7 і «Details» ×3 на Entry — ведуть туди ж, куди «Read the full solution»
> (Guided matching), «See what closes it» (Industry), «Open the solution page» (Approval
> materials)

Три пункти призначення несуть **27 різних написів** (`microcopy.md` Н2-1, Н2-2, Н2-3). «Learn
more» і «Details» — це буквально категорія, яку ми фіксуємо як ринкову ваду: напис без
інформаційного сліду.

**Антиприклад — ринковий:** «Drop us a Line», «At the Helm», «Find out more» ×11 на одній
сторінці (NSSLGlobal); «Get in Touch», що веде на `/sign-up/` (Speedcast) — `research.md` §13.2,
патерн A.

**Пояснення:**

- `personas.md` P1 Repels, дослівно: *«labels with no information scent: "Drop us a Line", "At
  the Helm", "Find out more" ×11 on one page (NSSLGlobal)»* **[AUDIT]**.
- `personas.md` P4 Repels, дослівно: *«a label/URL mismatch ("Get in Touch" → `/sign-up/` at
  Speedcast)»* **[AUDIT]**.
- `research.md` §6, можливість 2: *«Avoid the observed anti-patterns: form-less directories…,
  off-domain forms…, and **label/URL mismatches**»*.
- `research.md` §13.2, патерн A: у жодного гравця HARD-групи немає напису, який називає вміст
  наступної сторінки. Це вільна позиція, зайняти яку нічого не коштує.

**Межа доказу.** Що безадресні написи відлякують **саме нашого** покупця — **[?]**
(`personas.md` §6: *«The listed pains cause drop-off for these very people — [?]»*). Але друга
половина правила — «одна дія = одна назва» — не потребує ринкових даних узагалі: це внутрішня
несуперечність, і вона вимірюється на `microcopy.md` без жодного припущення про читача.

---

# Словник — одне поняття, одне слово

**Статус:** рішення, а не пропозиція. Кожен рядок нижче застосовний до конкретного рядка
інтерфейсу й дає «так» або «ні». Номери — знахідки з [`microcopy.md`](./microcopy.md) §2.

**Джерела термінів.** Нічого не вигадано: усі терміни, що лишаються, вже є або в
[`CLAUDE.md`](./CLAUDE.md) §3, §5, §6.1, або в
[`wireframes/_conventions.md`](./wireframes/_conventions.md) §3.1 (дозволений словник), або в
сутностях [`sitemap.md`](./sitemap.md). Де жоден із наявних варіантів не годиться, рядок
лишено **відкритим** — див. Н1-9.

⛔ **Словник не поширюється** на рядки, позначені в `microcopy.md` як `ЗОВН` (назви норм,
органів, чужі ринкові цифри) і `ВВІД` (значення користувача).

---

## 1. Предмети

### Н1-1 · Один із шести напрямів

**Лишається два терміни, бо це два різні об'єкти:**

| Термін | Що означає | Тест |
|---|---|---|
| **area** | одна з шести — Connectivity · Cybersecurity · Digital Solutions · Safety & Compliance · Equipment · Technical Services | якщо їх можна перелічити і їх шість — це area |
| **solution** | іменована пропозиція зі своєю сторінкою, spec-таблицею й переліком норм (Asterra Shield) | якщо в неї є сторінка й таблиця фактів — це solution |

**Чого не пишемо:** *offering* · *option* · *service* як синонім будь-якого з двох ·
*pillar* у видимому тексті (це слово документації, `sitemap.md` O1).
**Solutions & Services** лишається **тільки** як назва розділу сайту в навігації й футері —
це вивіска, а не назва об'єкта (`CLAUDE.md` §5).

**Чому так.** Читач ставить два різні питання поспіль: «скільки тут узагалі рішень?» і «це
воно?». Перше питання має відповідь «шість» — і саме тому воно area. Друге питання ставлять
до однієї сторінки — і там уже solution. Один термін на обидва питання повертає нас до
болю P2, який `personas.md` формулює як «a catalog instead of an offer»: коли все зветься
однаково, читач не бачить, скільки рішень йому насправді треба ухвалити.

⚠️ **Межа.** Зараз на кожен area припадає рівно один solution, тож два слова легко читаються
як синоніми — саме звідси й пішов дрейф. Якщо портфель так і не переросте «один solution на
area», два терміни слід звести до одного. Рішення переглянути на етапі, коли з'явиться
друга сторінка рішення в межах одного напряму.

### Н1-2 · Нормативна вимога

| Термін | Що означає |
|---|---|
| **regulation** | правило, що існує у світі: MLC 2006, IMO MSC.428(98), IACS UR E26/E27 |
| **requirement** | те, що з цього правила впало **на цей флот**: конкретна робота з датою |
| **deadline** | тільки там, де названо саму дату |

**Чого не пишемо:** *norm* у видимому тексті. Це наше внутрішнє слово — назва екрана в
`sitemap.md` §5 і файлу `norm.html`; читач його не вживає. Зміни виконано 2026-08-27 за
каноном §2 *(перелік виправлено — Д8; первісна редакція пропонувала «Read the regulation»,
що суперечило §2)*: «Read the norm» → «Read \<код\>» · «Ask an expert about this norm» →
«Talk to an expert about this regulation» · «Read the norm it answers» → «See the regulations
it closes» · «Read the norms» → «See the regulations we close».

**Чому так.** Це не синоніми, і різниця між ними — те, чим ми відрізняємось. Regulation
належить світу, requirement належить читачеві. Уся рамка продукту стоїть саме на цьому
розрізненні, і Entry вже каже це вголос: «Deadlines land on your fleet, **not on ours**».
Якщо обидва слова означають те саме, речення розсипається.

### Н1-4 · Звернення до експерта

| Термін | Що означає |
|---|---|
| **request** | те, що читач надсилає: об'єкт, у якого є контекст, статус і відповідь |

**Чого не пишемо:** *inquiry* у видимому тексті (лишається як назва екрана й сутності O7) ·
*enquiry* у жодному написанні · *ask* як іменник.
**Contact Us** лишається **тільки** в шапці — так вимагає `CLAUDE.md` §6, і це слово, яке
шукають очима, а не читають.

**Чому так.** «Request» — єдиний із чотирьох, що має життєвий цикл, який ми показуємо:
надіслано, у дорозі, не пішло. Три стани екрана вже написані навколо нього («The request did
not send», «Sending your request», «Request sent»), і саме він тримає обіцянку, що з ним
поїде контекст.

⚠️ **Свідоме розходження з брифом.** `CLAUDE.md` §6 пропонує для сторінок рішень напис **«Send
an Inquiry»**. Ми беремо другий варіант із тієї самої таблиці брифу — **«Talk to an expert»** —
і не вживаємо перший. Розходження навмисне, зафіксоване як Н2-7, а не забуте.

### Н1-5 · Галузь

**Лишається: industry.**

**Чого не пишемо:** *sector*. Зміни: «Eight sectors read eight different pages» · «Browse by
sector» · «The sector content did not load» · «a specialist for your sector» · «a sector case»
— усі п'ять.

**Чому так.** Читач знаходить себе у списку, підписаному **Industries** — це і пункт
навігації, і підпис поля у формі, і сутність O3. Якщо речення, яке пояснює цей список,
вживає інше слово, читач мусить перевірити, чи це той самий список. Він і так уже перевіряє
все інше.

### Н1-6 · Категорія партнера

**Лишаються три категорії дослівно за `CLAUDE.md` §6.1:**
**satellite capacity partners** · **navigation and bridge OEMs** · **safety equipment
manufacturers**.

**Чого не пишемо:** *makers* · *manufacturers* там, де категорія — OEM · довільні варіанти в
слотах логотипів («Navigation OEM», «Bridge systems OEM», «Safety equipment» — привести до
канонічних коротких форм).

**Чому так.** Це не стилістика, а принцип 1 у дії: категорія партнера — те саме чуже ім'я,
тільки поки без бренда. Три різні слова на одну категорію читаються як три різні категорії,
і доказ розмивається рівно там, де він єдиний, який ми можемо показати чесно.

⚠️ **Вигадані партнерські бренди** (`CLAUDE.md` §6.1: «на етапі дизайну — вигадані бренди»)
підставляються в ці ж три категорії. Обмеження: назва має бути правдоподібною для категорії
й **не мати адресата** — не алюзія, яку читач розшифровує назад до реальної компанії.
Тест: сторонній читач має сказати «якийсь оператор ємності», а не «а, це ж вони».

### Н1-7 · Об'єкт експлуатації

| Термін | Коли |
|---|---|
| **fleet** | усе, за що читач відповідає, — слово за замовчуванням на морських сторінках |
| **vessels** | коли речення про самі судна: що на них стоїть, до чого застосовна норма |
| **operation** | **тільки** для неморських галузей — Energy, Research, Emergency Response |

**Дозволено:** «fleets and remote operations» — але **тільки** на наскрізних сторінках
(Entry, Company, Careers), які обслуговують усі вісім галузей.
**Чого не пишемо:** *your operation* на морській сторінці. Зміна: значення селекта
«Standardising IT across the operation» → across the fleet.

**Чому так.** Для читача це три різні речі: флот — те, за що він відповідає; судна — те, на
що приїде монтажник; операція — слово, яким він себе не називає, якщо ходить у морі.

### Н1-8 · Документ, який лишається після закриття норми

**Лишається: the paper you keep.** Конструкція в тілі: **«You keep: <документ>»**.

**Чого не пишемо:** *the paper you hold afterwards* · *what paper you are left holding* ·
*the paper each one leaves behind* · *what paper it produces*.

**Чому так.** З п'яти варіантів лише цей називає, **хто** лишається з документом. Це половина
всієї нашої позиції в розмові про норму (принцип 3), і вона не має звучати щоразу інакше —
зокрема тому, що саме цей рядок читач перекаже нагору.

**Множина (Р7, 2026-08-27):** для кількох норм разом канон адаптується як **«the paper you
keep from each»** — триграм «the paper you keep» зберігається дослівно.

### Н1-10 · Пункт доказу про підтримку

**Лишається: Support commitment.**
**Чого не пишемо:** *Support answers around the clock*.

**Чому так.** Принцип 1 вимагає, щоб наше власне твердження називалося зобов'язанням. Перший
варіант це робить у самому заголовку; другий стверджує якість сервісу, не кажучи, чим це
підкріплено.

### Н1-11 · Правило про сталість цифри

**Лишається: one canonical value per figure.**
**Чого не пишемо:** *One value per figure*.

**Чому так.** Слово «canonical» — єдине, що несе сенс: воно каже, що є джерело правди, а не
просто побажання не повторюватися по-різному. Іронія Н1-11 у тому, що правило про недрейф
дрейфувало; тим паче воно має бути одним рядком.

### Н1-12 · Заголовок блока відкату

**Тут лишається не термін, а правило регістру:**

> Заголовок відкату — **твердження про те, що читачеві досі доступне**, ніколи не питання
> про те, що в нього не вийшло.

**Відповідають правилу:** «Policy needs differ by fleet.» · «The rationale is already on the
solution page.»
**Не відповідають:** «Not what you expected?» · «Nothing above looks like your situation?»

**Чому так.** Питання, сформульоване як «у вас не вийшло?», кладе промах на читача. E1
(`jtbd.md` §4) описує людину, яка розбирається поза власною дисципліною і не хоче виглядати
некомпетентною; питання в цьому місці б'є точно туди. Твердження лишає відповідальність на
сторінці.

### Н1-9 · Заголовок блока доказу — **лишено відкритим**

Чотири наявні варіанти: «What we are held to» · «What stands behind this» · «What stands
behind it» · «What stands behind the policy».

**Рішення не ухвалено навмисно.** Усі чотири — категорійні етикетки, тобто всі чотири
порушують принцип 2 і зафіксовані в Н4. Обрати «найкращу з чотирьох» означало б закріпити
порушення канонічним рядком. Нового варіанта тут не вигадуємо — це робота копірайт-проходу,
коли заголовок писатимуть як твердження.

**Що вже вирішено всередині блока:** назви пунктів канонічні — **Regulation-anchored** ·
**Accredited, not self-declared** · **Support commitment** (Н1-10).

---

## 2. Дії — канонічний напис

Три пункти призначення несуть зараз **27 написів** (Н2-1, Н2-2, Н2-3). Правило одне:
**напис називає предмет і те, що на тому боці.** Відхилення дозволене лише тоді, коли воно
**додає предмет**, і заборонене, коли воно предмет **знімає**.

| Куди веде | Канонічний напис | Дозволене відхилення | Чого не пишемо |
|---|---|---|---|
| **→ Inquiry** | **Talk to an expert** | + предмет: «Talk to an expert about this regulation», «…about your policy» | Ask an expert · Ask about your policy · Ask with your policy need · Ask with your custom policy need · Contact us (крім шапки) · Contact |
| **→ Solution detail** | **Read \<назва рішення\>** — «Read Asterra Shield» | **See what closes it** — коли на момент кліку читач ще не знає назви (перехід із рядка норми або ситуації) | Learn more · Details · Read the full solution · Open the solution page · Start from the solution page · Use the forwardable solution page · Read the proof on the solution page |
| **→ Norm** | **Read \<код норми\>** — «Read MSC.428(98)» | **See the regulations we close** — для переходу на перелік; на сторінці рішення підмет — саме рішення: **«See the regulations it closes»** *(Р3, 2026-08-27)* | Details · Read the norm · Read the norm it answers · Verify the paper · Start from a regulation · browse the regulations · Read the norms · Read the MLC 2006 amendments |
| **→ Guided matching** | **Find what fits your fleet** | всередині самого інструмента діють власні дієслова (нижче) | Try guided matching |
| **→ Industry** *(Р4, 2026-08-27)* | **Read the \<інстанс\> page** — «Read the Maritime page» | — | Browse by sector |
| **→ Crew access** *(Р4)* | **Read the crew connectivity rules** | — | Read about crew access and control |
| **→ Company** *(Р4)* | **Read how the company operates** | — | How the company operates (без дієслова) · Contact us |
| **→ Insights · айтем новини** *(Р4)* | **Read the announcement** | **All news** — перехід на стрічку | Read more |
| **Керування всередині Guided matching** | **Match my situation** (надіслати) · **Change your answer** (перезапустити з empty) | — | — |

### Повтор після збою (Н2-5)

| Ситуація | Напис |
|---|---|
| читач виконав дію, вона не пройшла | **повторити його дієслово + «again»**: «Send the request again» · «Match my situation again» |
| читач нічого не робив, сторінка не завантажилась | **Reload this page** |

**Чого не пишемо:** *Try again* — не називає ані дії, ані предмета.

**Чому так.** Читач має впізнати в написі рівно ту дію, яку щойно зробив, — інакше він не
знає, чи не надішле другий запит. Це та сама межа, яку `flows.md` називає найдорожчим
тупиком моделі: «a qualified lead lost to a form failure».

---

## 3. Особа, регістр і форма запису

### До кого й від кого говоримо

| Форма | Правило |
|---|---|
| **you** | читач як людина, що відповідає за рішення. Ніколи не «you» у значенні «ваш флот» |
| **we** | Asterra. **Дозволено й потрібне** — але тільки там, де речення є зобов'язанням або межею: «**We do not** launch the satellites», «carried as a commitment». У реченні, яке стверджує перевірюваний факт, «we» не з'являється: там працює чуже ім'я (принцип 1) |

**Чого не пишемо:** *the customer* · *clients* · *users* · *the buyer* про читача.

### Регістр

**Sentence case скрізь** — заголовки, кнопки, підписи полів, пункти навігації.
**Виняток — власні назви:** продукти (Asterra Shield), розділи, визначені брифом §5
(Solutions & Services, Safety & Compliance), коди норм, назви органів, назви юридичних
документів (Privacy Policy).

Зміна, що з цього випливає: пункт навігації **Latest News** → **Latest news** (це не
визначена брифом назва розділу — бриф §5 називає його «Insights / News»).

**Крапка в кінці:** заголовок-речення її має («Talk to an expert.», «The audit is where cyber
fails first.»); заголовок-назва — ні («Asterra Shield», «IMO MSC.428(98)», «Privacy
Policy»). Кнопки й підписи полів — ніколи.

**Уточнення (Р1, 2026-08-27):** заголовками-назвами, без крапки, лишаються також назви
пунктів доказу (Regulation-anchored · Accredited, not self-declared · Support commitment),
заголовки новин у стрічці й іменні заголовки вимог на Entry («Cyber risk inside the safety
management system»). Усе, що читається підметом і присудком, — заголовок-речення з крапкою;
вирівняно проходом по всіх екранах.

### Правопис

**Британський (-ise).** Це не нове рішення, а фіксація наявного: у видимому тексті
`authorised`, `standardising`, `standardised`, `recognise` — жодного `-ize`. Форми на `-ize`
трапляються лише в службових анотаціях, де цитуються назви вузлів із `flows.md`, і на
продукт не поширюються.

**Виняток — artifact (Р8, 2026-08-27):** пишеться американською формою слідом за сутністю O6
(Approval Artifact), щоб термін у тексті збігався з документацією IA; *artefact* не вживаємо.

**email**, не *e-mail*. Зміна: підпис поля «Work e-mail» → «Work email» (зараз у тілі текстів
«email» вжито 10 разів, «e-mail» — 2, обидва в тому самому підписі).

### Коди норм

| Правило | Приклад |
|---|---|
| перша згадка на сторінці — повна форма з органом | **IMO MSC.428(98)** · **IACS UR E26/E27** · **MLC 2006** |
| подальші згадки на тій самій сторінці — коротка | **MSC.428(98)** · **UR E26/E27** |
| скісна риска без пробілів | **UR E26/E27**, не *UR E26 / E27* |
| у заголовку чи написі — тільки код, ніколи прозова форма | не *UR E26 and E27* |

### Дати

Повна форма з днем: **23 December 2024** · **1 July 2024** · **1 January 2021**.
**Чого не пишемо:** *December 2024* · *July 2024* без дня (зараз так у трьох місцях) ·
будь-яка числова форма (*01.07.2024*).

**Чому так.** Читач звіряє дедлайн зі своїм календарем. Місяць без дня змушує його шукати
день деінде — тобто йти з нашої сторінки на сторінку класу.

### Інше

**24x7x365** — саме так, завжди. Ніколи *24/7*, ніколи *24x7*. (Зараз консистентно, 12 із 12;
рядок тут, щоб таким і лишилось.)

---

## 4. Терміни, скорочення та назви продуктів

### ✅ Дозволено з розкриттям при першій появі на сторінці

**SMS** (safety management system) · **DOC** (Document of Compliance) · **PSC** (Port State
Control) · **ISM** (ISM Code).

✅ *Порушення, зафіксовані тут при написанні правила (Entry, селект Guided matching), закриті
переписом 2026-08-27.*

**Де жити розкриттю (додано 2026-08-27, за реглядками Industry).** Якщо повна форма роздуває
рядок-реглядку чи заголовок, розкриття переноситься в **підводку секції** у формі з дужками —
«a Port State Control (PSC) inspection, the annual Document of Compliance (DOC) audit» — і
рядки нижче одразу пишуть коротко. Переносити можна лише туди, де термін стоїть чесно:
розкриття не вигадує зв'язки, якої в тексті немає (тому «safety management system» на Industry
лишилося в самому рядку — у підводці про нього сказати нічого правдивого).

### ✅ Дозволено без розкриття — це словник самого покупця

**OEM** · **IT** · **CAPEX** / **OPEX** · **IoT** · **QoS** · назви норм і органів
(IMO, IACS, DNV, Bureau Veritas, ILO).

### ⛔ Заборонено

Будь-який термін, який **не пояснений там, де вжитий**, або є внутрішнім словником
постачальника: **COTP / COTM** · «**application layer of the OSI model**» як спосіб пояснити
цінність · «**Zero Trust**» як самостійне твердження про цінність.

Це не заборона технічності. Принцип 2 і `jtbd.md` §4 E1 кажуть буквально протилежне: для P2
технічна точність — рідна мова, і спрощення читається як ухиляння. Провал IEC був у
**непоясненості**, не в технічності.

### Назви продуктів

Канонічно (`CLAUDE.md` §3): **Asterra Connect** (супутник — **OrbitReach**, наземний і
мобільний — **GroundLink**) · **Asterra Shield** · **Asterra Intelligence** · **Asterra
Assure** · **Asterra Equip** · **Asterra Care**.

**Коротка форма** дозволена після першої повної згадки на сторінці: «Shield is the protection
and the evidence in one specification» — так уже написано на Solution detail, і це правильно.
**Чого не пишемо:** *the Shield product* · *Asterra's Shield* · назва з малої літери.

---

# Заборонене — чого не пишемо ніколи

⚠️ **Цей розділ нічого не виправляє в наявному тексті.** Інвентар Н5 показав нуль збігів по
15 маркерах AI-кліше, нуль знаків оклику в `<main>` жодного файлу, нуль емодзі, нуль
`lorem ipsum`. Розділ тримає межу **наперед** — на етапи concept і design, де copy
писатимуть заново й де ця межа найлегше здається.

Тому «як було» тут береться **з мови конкурентів** (`research.md` §13.2) або позначається як
**гіпотетичне**. Вигадувати наші власні порушення, щоб мати приклад, було б рівно тією
помилкою, яку `audit.md` §4 називає «висновок сформульовано до доказу».

---

### 1. AI-кліше й бадьорий тон

⛔ «Oops, something went wrong» · «Welcome!» · «Let's get started» · «Successfully sent» ·
«Thank you!» · «We're here to help» · знак оклику в системному повідомленні · емодзі будь-де
в продукті.

| Як було *(гіпотетично)* | Як треба *(уже в продукті)* |
|---|---|
| «Oops! Something went wrong 😕» | «The request did not send. Everything you typed is still here. Sending again submits the same request once.» — Inquiry error |
| «Successfully sent! Thank you!» | «Request sent. You arrive with a position.» — Inquiry success |

**Чому.** Ставка розмови — аудит із датою і бюджет, який читач захищатиме. Бадьорість у
момент збою читається як те, що адресат не розуміє, що щойно сталося. Слово «successfully»
описує стан системи; читачеві потрібен стан **його запиту** і що з ним робити далі.

📌 Межовий випадок, який **дозволено**: «Request sent. You arrive with a position.» Це не
вигук — це дослівна кінцева умова job із `jtbd.md` §2, і поруч стоїть перелік того, що саме
передано. Різниця між нею й «Thank you!» — у тому, що перша щось повідомляє.

### 2. Мотиваційний тон

⛔ «start your journey to a connected fleet» · «unlock» · «empower» · «elevate» ·
«seamless» · «transform your operations».

| Як було *(гіпотетично)* | Як треба *(уже в продукті)* |
|---|---|
| «Unlock seamless connectivity and empower your crew» | «Give the crew what it asks for. Keep the rules yours.» — Crew access, H1 |
| «Start your journey to a compliant fleet» | «Name what landed on the fleet, an audit date, a newbuild spec, a budget to defend, and we will show what closes it before anyone calls you.» — Entry |

**Чому.** Читач приходить не по натхнення, а тому, що на флот щось упало з датою. Мотиваційне
дієслово займає місце конкретики й нічого не додає — а `personas.md` фіксує, що дефіцит у
цієї людини рівно протилежний: не мотивації бракує, а ієрархії й фактів.

### 3. Доказ як число про себе

⛔ Будь-яке число про власний масштаб, вік, аптайм чи охоплення, яке нічим підтвердити.

| Як було *(ринок, `research.md` §13.2 патерн B)* | Як треба *(уже в продукті)* |
|---|---|
| «13,000+ vessels» · «15k+ Vessels connected» · «115 engineers» · «25+ years» | «Accredited, not self-declared… A partner name belongs to a third party and cannot be asserted by us.» — Entry |
| «99.99% uptime» | «Monitoring and response — [TBD — no source]» + «Empty cells are deliberate: a figure for a fictional brand would be an invented fact.» — Solution detail |

**Чому.** Дві причини, і кожної досить окремо. Перша — принцип 1: таке число ніхто не може
перевірити, а два джерела в нашому ж ресерчі самі собі суперечать. Друга — `CLAUDE.md` §3:
для вигаданого бренду це просто вигаданий факт.

### 4. Продаж через страх

⛔ Статистика зламів, збитків і викупів як аргумент купити.

| Як було *(ринок)* | Як треба *(уже в продукті)* |
|---|---|
| Speedcast виносить «68%» зламів як аргумент — при тому, що середній викуп у галузі впав US$3.2m (2023) → ≈US$100k (2025), а частка тих, хто платив, 14% → 7% | «The audit is where cyber fails first… What sinks budgets and reputations is the annual DOC verification, when the auditor asks where cyber risk lives in the safety management system and the honest answer is nowhere yet.» — Solution detail |

**Чому.** `personas.md` P2 каже це прямим текстом: **«do not build cyber on fear»**. І цифра
під тим аргументом обвалилася — тобто це не лише сумнівний прийом, а ще й прийом на
розсипаних даних. Датований дедлайн працює краще: він не залякує, він настає.

### 5. Напис-запрошення без предмета

⛔ «Learn more» · «Details» · «Get in Touch» · «Drop us a Line» · «Find out more» ·
«At the Helm».

| Як було — **наше**, не ринкове | Як треба |
|---|---|
| «Learn more» ×7 і «Details» ×3 на Entry — ведуть туди ж, куди «Read the full solution» | «Read Asterra Shield» · «See what closes it» — §2 цього словника |

**Чому.** Це єдиний пункт розділу, де «як було» береться з нашого тексту, і це варто визнати
вголос: ми вже пишемо так, як самі ж записали ринковою вадою (`personas.md` P1: «labels with
no information scent»). Напис без предмета змушує читача клікати, щоб дізнатися, куди він
клікає.

### 6. Норма як значок

⛔ Код норми без сторінки, без дати й без назви паперу, який після неї лишається.

| Як було *(ринок, патерн D)* | Як треба *(уже в продукті)* |
|---|---|
| Marlink виносить ISO / IACS / NIS2 / DORA на головну — **статичним текстом, сторінок під ними немає**; IEC пише «IMO Compliance (Cybersecurity)» як мітку без нічого | «IACS UR E26 / E27 — You keep: the newbuild cyber resilience file for ships contracted from 1 July 2024» — Solution detail |

**Чому.** Принцип 3: пояснення норми належить класу, а нам належить зв'язок «норма →
рішення → папір». Код без цього зв'язку не робить нічого, крім сигналу серйозності — тобто
робить рівно те, що ми записали ринковою вадою.

⚠️ **У нас це порушення вже є:** «Closes MSC.428(98) · UR E26/E27 · IEC 62443» на картці
Entry — три коди, жодного паперу, жодної дати, і жоден не розкритий на цій сторінці.

### 7. Em dash як інтонаційний прийом

⛔ Тире як спосіб зробити паузу в реченні.

| Як було | Як треба |
|---|---|
| рішення вже ухвалене на композиційному проході `entry.html`: «Em dashes, "cutting edge" and similar filler removed» | у видимому тексті всіх 28 сторінок **не лишилось жодного** em dash у прозі |

**Єдиний дозволений em dash** — усередині маркера `[TBD — no source]` і
`[TBD — legal copy, build stage]`. Це не інтонація, а частина позначки.

**Чому.** Тире дозволяє не вирішувати, як речення влаштоване. Прибрані тире змусили кожне
речення назвати щось конкретне — і це вже видно в тексті. Правило тут для того, щоб наступний
copy-прохід не завіз їх назад.

---

### 8. Лічильний заголовок як шаблон *(додано 2026-08-27)*

⛔ Каркас «N X. M of them Y.» і його родичі («N X, one Y», «N X, each Y», число-луна
«Eight X read eight Y») — як спосіб зробити заголовок ритмічним.

| Як було — **наше**, до правки 2026-08-27 | Як треба — вже в продукті |
|---|---|
| «Six areas. Two of them carry a deadline.» — Entry | «Connectivity and cybersecurity carry the deadlines.» — ранг заявлено іменами |
| «Five situations bring fleets here. Two of them carry a date.» — Solution detail (прямий клон рядка вище) | «A situation brings a fleet here.» |
| «Three tiers, one service.» — Entry | «GEO, LEO and terrestrial, run as one service.» |
| «Three kinds of work keep the systems answerable.» — Careers | «This work keeps the systems answerable.» |

**Довжина.** Заміна лічби іменами не має роздувати рядок: перша редакція careers-заголовка
перелічила всі три напрями і виросла до 78 знаків — перелік уже несли H3 під ним. Якщо імена
вже стоять поруч, заголовку досить вказівного «This work…» / «These roles…». Орієнтир для
display-заголовка — до ~55 знаків; довші лишаються тільки там, де довжину диктує правило
(перша згадка розкритої абревіатури, канонічний перелік категорій у назві айтема).

**Чому.** Це один із найупізнаваніших машинних патернів — і найдоказовіше: щойно перший такий
заголовок став зразком, перепис відтворив каркас на п'яти екранах, поки правило не було
написане. Лічба читається як маркетинговий ритм; імена несуть той самий ранг і лишаються
перевірюваними. **Загальний фікс: числа → імена.**

**Виняток.** Число дозволене, коли число і є твердженням, а не ритмом: «One decision closes
it.» (одиничність = теза) · «A match is still three questions away.» (буквальні три поля) ·
«One step. No wizard, no gate.» (антитеза ринковим візардам).

### 9. Контрастна пара — інструмент, не дефолт *(додано 2026-08-27)*

⛔ «X, not Y» і «rather than» як універсальний спосіб перетворити будь-яке речення на
«твердження». До правки продукт ніс ~37 таких зворотів на 12 екранів.

| Як було — наше | Як треба — вже в продукті |
|---|---|
| «…and carries that as a commitment rather than a claim» (Entry hero — поруч із канонічним рядком тієї ж форми в блоці доказу) | «…and is held to it.» — луна заголовка блока доказу |
| «Each area is one decision rather than a shelf of products.» | «An area is one decision, and where it closes a requirement with a date attached, it says which one.» |
| «…the usage rules stay with you rather than with us.» | «…the usage rules stay with you.» — друга половина контрасту нічого не додавала |

**Правило.** Контраст дозволений там, де він **несе рішення** — канонічні рядки лишаються
недоторканими: «Accredited, not self-declared» · «carried as a commitment rather than a claim
of scale» (Н1-10) · «You are buying rules, not bandwidth» · «claims, not labels» (конвенція).
Поза ними — не більше **одного** контрастного звороту на екран; якщо речення тримається без
другої половини, друга половина зайва.

**Межа дії ліміту** *(уточнено 2026-08-27 за фінальною перевіркою)*. Ліміт «один на екран»
стосується поверхонь голосу бренду — заголовків, hero, CTA і мікротекстів: там контраст —
риторичний прийом, і його щільність видає шаблон. На **визначальні пари в тілі** ліміт не
поширюється, якщо контраст і є зміст визначення, а не його ритм: «allowances apply to a
person, **not to a shared password**» · «this page sets the dimensions, **not the values**» —
прибрати другу половину означає прибрати сенс. Тест той самий, що для §9 узагалі: якщо
речення тримається без другої половини — вона зайва; якщо ні — вона визначення.

---

## Що цей розділ **не** забороняє

- **Технічну точність.** Заборона стосується непоясненого, а не складного (принцип 2).
- **Слово «we».** Воно потрібне — саме ним ми позначаємо власне зобов'язання (§3).
- **Довге речення.** Даних про синтаксис конкурентів у нас немає (`research.md` §13.4), тож
  правил про ритм і довжину тут свідомо немає.
- **Текст станів помилки як жанр.** Заборонений лише бадьорий регістр. Яким саме має бути
  повідомлення про збій, ми не знаємо з ринку: `research.md` §12 і §13.4 фіксують, що
  **жодного** повідомлення про помилку в конкурентів не записано.

---

# Мікрокопі — правила за типами елементів

**Статус:** правила виконавчого рівня. Принципи кажуть, чому ми так говоримо; словник — яким
словом; цей розділ — як виглядає конкретний рядок конкретного типу.

**Формат правила:** правило одним реченням · реальний приклад із [`microcopy.md`](./microcopy.md)
з позначкою екрана · звідки воно випливає · **розрив** — де продукт це правило вже порушує, з
номером знахідки.

**Склад станів узято з** [`wireframes/_screens.md`](./wireframes/_screens.md), і тільки з
нього: 16 станів на 12 екранів. Правил для станів, яких там немає, тут немає теж — Entry
stateless за рішенням, Norm не має станів у головному flow, чотири hygiene-екрани не мають
жодного.

> ⚠️ **Межа доказу для чотирьох правил зі станів** — завантаження, порожній, помилка, успіх.
> [`research.md`](./research/research.md) §12 і §13.4 фіксують: у конкурентів не записано
> **жодного** повідомлення про помилку, порожній результат чи завантаження — аудит покривав
> лише happy paths. Ці чотири правила спираються на загальну практику й на наші принципи,
> **не на ринкові дані**. Це слабша опора, ніж у решти розділу, і вона названа тут, а не
> схована.

⛔ **Службовий хром правилами не покривається** — сервісне дерево, смуга станів і анотації
`wf-doc` у продукт не переїдуть.

---

## 1. Навігація та заголовки

### Кнопка

**Правило.** Напис — дієслівна фраза, з якої видно предмет і що буде на тому боці; ніколи
жест, ніколи службове слово.

**Як писати новий напис** — три кроки, у цьому порядку:
1. Читач уже знає назву предмета → назви предмет: **«Read Asterra Shield»**.
2. Не знає (перехід із рядка норми або ситуації) → назви результат: **«See what closes it»**.
3. Не виходить ні перше, ні друге → це не кнопка, а посилання в тілі тексту, і речення
   навколо нього має пояснити, куди воно веде.

**Тест.** Прочитай напис окремо, без сторінки. Якщо з нього не видно, що буде далі, — переписуй.

**Приклад:** «Read Asterra Shield» · «See what closes it» — Industry.
**Звідки:** принцип 5 · словник §2 (канонічні написи й дозволені відхилення).
**Розрив:** Н2-1…Н2-3 — 27 написів на три призначення; «Learn more» ×7 і «Details» ×3 на Entry
провалюють тест повністю.

### Заголовок екрана (H1)

**Правило.** H1 називає місце словами словника — або **назвою об'єкта**, або **твердженням про
роботу**, яку тут виконують. Ніколи не назва категорії сайту й ніколи не те саме, що напис на
кнопці.

**Приклад:** «Asterra Shield» — Solution detail (об'єкт) · «Tell us what landed on the fleet.» —
Guided matching (робота).
**Звідки:** словник §1 · принцип 2.
**Розрив:** Н3 — на Inquiry H1 «Talk to an expert.» дослівно дублює канонічний напис кнопки,
тож заголовок і дію неможливо розрізнити. Він же лишається на success, де кнопки вже немає
(Н6-9).

### Хлібні крихти (obj-line)

**Правило.** Обов'язкові на кожному екрані, крім кореневого. Формат: **розділ · інстанс**, де
розділ зветься точно так, як пункт навігації.

**Приклад:** «Industries · Maritime» — Industry.
**Звідки:** словник §1 (галузь = industry; розділ зветься так само, як у навігації).
**Розрив:** немає на **Guided matching** і **Inquiry** — двох екранах, куди читач потрапляє з
глибини й де найлегше втратити орієнтир. Entry не рахується: він і є корінь.
**Відкрите:** на Approval materials у крихтах стоїть «Prepare internal approval» — назва групи
сервісного дерева, а не розділу сайту. Розділу для цього екрана в словнику немає; рядок
лишається відкритим до рішення рівня IA.

### Заголовок секції (H2 / H3)

**Правило.** Заголовок секції — **твердження**, з яким можна не погодитись. Категорійна
етикетка — ні.

**Тест на два кроки:**
1. Чи можна з цим сперечатися?
2. Чи міг би цей самий заголовок стояти без змін на сайті конкурента?

Якщо на перше «ні», а на друге «так» — це етикетка, переписуй.

**Приклад:** «The audit is where cyber fails first» — Solution detail. Сперечатися можна: хтось
скаже, що першим падає не аудит. І на чужому сайті цей рядок стояти не може — він несе нашу
позицію. Так само: «You are buying rules, not bandwidth» — Crew access.

**Антиприклад:** «What stands behind it» — сперечатися нема з чим, стояти може будь-де.

**Звідки:** принцип 2 · `_conventions.md` §9.1: *«сторінка не готова, якщо на ній немає жодного
твердження крім переліків»*.
**Розрив:** Н4 — 12 заголовків-етикеток. Сюди ж Н1-9: канонічний заголовок блока доказу
навмисно **не обрано** саме тому, що жоден із чотирьох кандидатів цього тесту не проходить.

---

## 2. Форма

### Підпис поля

**Правило.** Регістр підпису задає жанр форми, і в межах однієї форми не змінюється:
**інтерв'ю запитує**, **форма запиту називає поле**.

**Приклад:** Guided matching — три питання поспіль («Where do you operate?», «What started this
requirement?»). Inquiry — іменникові підписи («Company», «Work email», «Solution of interest»).
**Звідки:** словник §3 (особа й регістр).
**Розрив:** на Inquiry останнє поле — «What landed on your fleet?» — питання серед семи
іменників. Тут це, ймовірно, свідомо: питання запрошує розповідь там, де нам потрібна
розповідь. Правило вимагає визнати це **рішенням** і записати його, а не лишати випадковістю.

### Підказка під полем

**Правило.** Підказка каже, **навіщо** це поле або **що станеться з відповіддю**; ніколи не
переказує підпис.

**Приклад:** «Frame agreements and reseller requests route differently; saying so here saves the
third meeting.» — Inquiry. Це найкращий рядок форми в продукті: він пояснює вигоду читачеві, а
не потребу системи.
**Звідки:** принцип 1 — пояснюємо, що робимо, замість стверджувати, які ми уважні.
**Розрив:** Н6-8 — формула «Carried from the page you came from…» стоїть двічі на одному екрані:
у блоці контексту і в підказці поля. Одна з двох зайва.

### Передзаповнене значення

**Правило.** Якщо поле заповнене за читача, сусідній рядок каже, **звідки** значення і що його
можна змінити.

**Приклад:** поле «Solution of interest» = «Asterra Shield (Cybersecurity)» + рядок про
походження — Inquiry.
**Звідки:** сутність O7 і `_conventions.md` (Inquiry несе контекст) · принцип 1 — не робимо
мовчазних припущень за читача.

### Помилка валідації — ⚠️ правило наперед, прикладу немає

**У продукті такого стану немає.** `_screens.md` моделює стани на рівні **екрана**, не поля;
жодна з 16 сторінок станів не показує невалідного поля. Прикладу не наводимо й не вигадуємо.

**Правило (наперед).** Повідомлення називає, **що саме в цьому полі не так** і **що зробити**,
словами підпису цього поля. Ніколи «Invalid input», «This field is required», «Error».
**Звідки:** принцип 5, перенесений із кнопки на поле: рядок називає предмет і дію.

**Що з цим робити.** Це рішення рівня `_screens.md`, не рівня `voice.md`, і воно підлягає
правилу пріоритету з `_conventions.md` §5: спершу стан з'являється в `_screens.md`, і лише
потім — файл. Або додати стан валідації і збудувати сторінку (тоді правило дістане приклад),
або лишити відкритим до білду.

---

## 3. Стани

### Завантаження

**Правило.** Або мовчить, або називає, **що саме** вантажиться — тими самими словами, якими
названо зону, що вантажиться. Ніколи «Please wait», ніколи відсоток, якого ми не знаємо.

Два випадки, і вони пишуться по-різному:

| Що відбувається | Формула | Приклад |
|---|---|---|
| вантажиться **контент** | «Loading \<зона\>» | «Loading the page and its proof» — Solution detail |
| виконується **операція** | назви операцію | «Matching your situation» — Guided matching |

**Приклад із застереженням:** «Sending your request» + «This takes a moment; **do not resend**.
Everything below travels with it.» — Inquiry loading. Єдиний випадок, де повідомлення ще й
застерігає: повторне надсилання коштує дорого, а зупинити його читач уже не зможе.

**Звідки:** принцип 5 · словник §2 (одна дія — одна назва).
**Розрив:** немає. Шість станів із шести несуть `role="status"` — правило фіксує наявну
консистентність, щоб вона не розпалася.

### Порожній стан

**Правило.** Три речення, у цьому порядку: **(1)** чого немає · **(2)** чому сказати про це
чесніше, ніж підсунути близьке · **(3)** що доступно натомість. Вихід — завжди дія.

**Приклад:** «We cannot name an area for this with confidence.» → «Saying so is more useful than
a recommendation you would have to unpick later, in front of an auditor or a budget holder.» →
«Change your answer» — Guided matching empty.

**Звідки:** принцип 1 — не стверджуємо того, чого не можемо підтвердити, включно з результатом
підбору · `flows.md`: *«honest "unsure" instead of a forced wrong recommendation»*.

**Особливий випадок.** На Approval materials порожня бібліотека — це колапс job R3
(`_screens.md`), тож вихід має важити більше за саме повідомлення. Так і зроблено: два абзаци
про те, що аргумент нікуди не подівся, і кнопка на сторінку, яка його несе.

**Розрив:** структурний, не мовний — заголовок порожнього стану `H2`, а заголовок блока відкату
під ним у base `H3`; рівні стрибають між станами того самого екрана (зафіксовано в
`microcopy.md`, розділ «Структурна розбіжність»).

### Помилка

**Правило.** Два речення: **що не сталося** — у словах тієї дії, яку читач намагався виконати —
і **що робити далі**. Без вибачень, без жартів, без пояснення причини, якої ми не знаємо.

**Формула заголовка:** «The \<об'єкт словника\> did not \<дієслово читача\>.»

| Екран | Рядок |
|---|---|
| Inquiry | The request did not send. |
| Guided matching | The match did not run. |
| Solution detail | The page did not load. |
| Approval materials | The library did not load. |
| Crew access | The policy content did not load. |
| Industry | ~~The sector content did not load.~~ → **The industry content did not load.** |

**Приклад:** «The request did not send. Everything you typed is still here. Sending again
submits the same request once.» — Inquiry error. Третє речення тут не зайве: воно знімає страх
надіслати дубль.

**Звідки:** принцип 5 (повтор після збою) · словник §2.
**Розрив:** п'ять із шести вже за формулою. Шостий вживає `sector`, яке словник викидає (Н1-5).

**Окремо — коли кнопки немає.** Там, де `flows.md` не моделює ретраю (Industry error, Approval
materials error), кнопки повтору немає, і правило її **не вигадує**. Вихід у таких станах — це
інший шлях, названий у тексті, а не повтор.

### Успіх

**Правило.** Назви **факт**, потім **перелічи, що саме передано**, потім **наступний крок**.
Без слова «successfully», без подяки, без вигуку.

**Приклад:** «Request sent. You arrive with a position.» + перелік Solution / Industry / Role /
Message / Next — Inquiry success.
**Звідки:** «Заборонене» §1 · принцип 1: перелік переданого — це факт, який читач може
перевірити очима, а не обіцянка про нашу уважність.

**Чому успіх у продукті один.** `_screens.md` фіксує прямо: це єдина завершена дія в моделі.
На Solution detail «підходить» і «доказів достатньо» — це розвилки `fit` і `proof`, а не
результат; факт завантаження екрана успіхом не вважається.

**Розрив:** Н6-9 — на success лишився H1 «Talk to an expert.» і рядок «Edit either in the form
if that is not what you are asking about», хоча форми на цьому екрані вже немає.

### Небезпечна дія — ⚠️ тип незастосовний

**У всій IA немає жодної небезпечної дії:** ні видалення, ні скасування, ні незворотного кроку.
Продукт нічим не володіє від імені читача — ні акаунтом, ні збереженим станом, ні документами.
`CLAUDE.md` §7 виносить customer login і support portal за межі скоупу, і разом із ними за межі
виходить увесь клас таких дій.

**Тому правила попередження перед дією тут немає.** Вигадувати небезпечну дію, щоб було до чого
його писати, не будемо.

**Що існує натомість.** Єдина незворотність у продукті — надсилання запиту: лист пішов до
людини. Вимога, яку вона породжує, вже виконана — застереження **«do not resend»** у стані
завантаження (правило «Завантаження» вище).

**Коли тип знадобиться:** якщо в скоуп повернуться login або портал підтримки.

---

## 4. Носії доказу

Чотири типи, специфічні для цього продукту: саме вони несуть принципи 1, 3 і 4 у найщільнішій
формі.

### Рядок spec-таблиці

**Правило.** Ліворуч — характеристика іменником, праворуч — **значення або порожній слот**.
Праворуч не буває маркетингового формулювання: комірка або несе факт, або чесно порожня.

**Приклад:** «Specified against — IEC 62443; evidence structured for MSC.428(98) and UR
E26/E27» · «Sizing and throughput — [TBD — no source]» — Solution detail.
**Звідки:** принцип 4 · сутність O1 («budget-grade technical facts»).
**Розрив:** немає — це найчистіша зона продукту. Правило фіксує наявний стан, бо саме сюди
маркетинг завозиться найлегше: комірку без значення хочеться чимось заповнити.

### Пара dt/dd

**Правило.** Два жанри, і вони не змішуються в одному списку:

| Жанр | dt | dd | Крапка в кінці |
|---|---|---|---|
| **визначення** — Norm, Crew access, Company | короткий іменник | повне речення, що на нього відповідає | так |
| **зведення** — Inquiry loading / success | назва поля | значення, без речення | ні |

**Приклад:** «Applies to — Companies and ships operating under the ISM Code**.**» (визначення) ·
«Industry — Maritime» (зведення). *(Р6, 2026-08-27: приклад виправлено — раніше він сам
суперечив колонці «Крапка в кінці», що й породило дрейф практики між екранами.)*
**Звідки:** словник §3 (крапка в кінці: заголовок-речення її має, заголовок-назва — ні).

### Слот `[TBD]`

**Правило.** Слот називає, чого бракує, і причина завжди одна з двох:

| Маркер | Коли | Тест |
|---|---|---|
| `[TBD — no source]` | заповнити означало б **вигадати факт** про вигаданий бренд: цифра, клієнт, схвалення, ім'я | цього **не існує в природі** |
| `[TBD — legal copy, build stage]` | текст існує в реальності, але пишеться юристом на етапі білду | це **існує**, просто ще не написане |

**Правило подачі.** Біля групи слотів має стояти **один рядок, що пояснює порожнечу** — інакше
слот читається як недоробка, а не як рішення.

**Приклад:** «Monitoring and response — [TBD — no source]» + «Empty cells are deliberate: a
figure for a fictional brand would be an invented fact.» — Solution detail.
**Звідки:** `CLAUDE.md` §3 · `_conventions.md` §3 (fictional-brand rule) · принцип 4.
**Розрив:** пояснювальний рядок є на п'яти екранах із семи. Немає на **Company** (чотири слоти
керівництва підряд) і на **Careers** («Open positions: [TBD — no source]»). На обох слот зараз
читається як недороблена сторінка.

### Підпис-вимога на картці

**Правило.** У найкоротшій формі підпис несе три речі: **норму → рішення → папір**. Якщо папір
не вміщається, підпис несе норму й рішення, а папір названий на сторінці, куди підпис веде.
**Норма без рішення заборонена** — це «норма як значок» («Заборонене» §6).

**Дієслово одне: `closes` / `closed by`.**

**Приклад:** «Checked at annual DOC verification · closed by Asterra Shield» — Entry.
**Звідки:** принцип 3 · `jtbd.md` §8.2 R1: *«norm → which solution closes it → what paper you
get»*.

**Розрив — знайдено при написанні цього правила, у переліку Н його не було.** Дзеркальний
дрейф дієслова: Entry пише **«closed by»**, Industry — **«answered by»**, для тих самих трьох
пар норма↔рішення. Закріплюємо `closes / closed by`, «answered by» викидаємо.

**Другий розрив:** «Closes MSC.428(98) · UR E26/E27 · IEC 62443» на картці Shield (Entry) несе
три норми, жодного паперу, жодної дати — і жоден із кодів не розкритий на цій сторінці. Це
рівно те, що «Заборонене» §6 називає нормою-значком, у нашому власному тексті.

---

## Після цього кроку

**`voice.md` повний.** Далі за ним пишеться весь текст продукту: чотири розділи покривають
шлях від «чому ми так говоримо» (принципи) через «яким словом» (словник) і «чого не пишемо»
(заборонене) до «як виглядає цей конкретний рядок» (мікрокопі). Наступні етапи — concept →
tokens → components → білд — беруть текст звідси, а не винаходять його заново.

**Порядок застосування при суперечці:** принцип → словник → мікрокопі. Якщо правило мікрокопі
суперечить принципу, перемагає принцип, а суперечність фіксується як знахідка, а не
залагоджується мовчки.

**Що лишається відкритим — три позиції, жодну не закрито вигадкою:**

1. **Н1-9 — канонічний заголовок блока доказу.** Усі чотири наявні варіанти провалюють тест на
   твердження; п'ятий не вигадуємо. Закривається копірайт-проходом.
2. **Співвідношення area / solution.** Поки на кожен area припадає рівно один solution, два
   терміни читаються як синоніми. Переглянути, коли з'явиться друга сторінка рішення в межах
   одного напряму.
3. **Правило валідації поля — без прикладу.** Стану немає в `_screens.md`; правило написане
   наперед. Закривається або новим станом у `_screens.md`, або на етапі білду.

**Чого `voice.md` не покриває і покривати не може** — див. «Що ці принципи свідомо не
покривають» нижче: реєстр станів не має ринкової опори, тверджень про синтаксис дані не
витримують, а персони лишаються прото-персонами.
---

# Перевірка на `microcopy.md`

Принцип, який нічого не вирішує в наявному тексті, — це гасло. Ось що кожен закриває:

| Принцип | Які знахідки `microcopy.md` він розв'язує | Обсяг |
|---|---|---|
| 1. Чуже ім'я як доказ | Н1-6 (manufacturer / maker / OEM), Н1-9 (чотири заголовки блока доказу), Н1-10 (Support commitment проти Support answers around the clock) | 3 знахідки |
| 2. Ієрархія й конкретика | Н1-1 (area / solution / Solutions & Services), Н4 (12 заголовків-етикеток) | 2 групи, ~14 рядків |
| 3. Клас пояснює, ми називаємо папір | Н1-2 (regulation / norm / requirement / deadline), Н1-3 (описова назва проти коду), Н1-8 (п'ять формулювань «паперу») | 3 знахідки, найдорожча — Н1-8 |
| 4. Одна цифра — одне значення | Н1-11 (дрейф самого правила), 19 слотів `[TBD]` — підтверджує їх як норму, а не борг | 1 + реєстр |
| 5. Напис називає, куди веде | Н2-1…Н2-5 (27 написів на 3 призначення), Н6-10 (повтори написів), Н3 (назва екрана в нав / крихтах / H1) | **найбільша група** |

**Чого принципи не закривають** — і це навмисно:

- ~~**Н1-5 (industry проти sector)** і **Н1-7 (fleet / vessels / operation)** — це вибір
  словника, а не голосу; жоден принцип вище не підказує, який варіант правильний.~~
  ✅ **Закрито 2026-08-27 у розділі «Словник»:** Н1-5 → `industry`, Н1-7 → `fleet` /
  `vessels` / `operation` за трьома різними випадками. Рядок лишено видимим, а не
  переписано: принципи справді цього не вирішують — вирішує словник, і це два різні
  інструменти.
- **Н1-13, Н1-14, Н3** — розбіжність назв екранів між навігацією й заголовком частково
  розв'язується принципом 5, але остаточно це рішення IA, а не копірайту.
- **Н6-9** (на success лишився H1 «Talk to an expert.» і згадка про форму, якої немає) — це
  дефект стану, не голосу.

---

# Що ці принципи свідомо не покривають

1. **Реєстр станів помилки й порожнечі.** `research.md` §13.4 і §12 фіксують: **жодного**
   повідомлення про помилку, порожній результат чи завантаження в конкурентів не записано.
   Наші 16 станів написані з загальної практики, включно з формулюваннями. Правила для них
   виводити немає з чого — і вигадувати їх тут було б рівно тією помилкою, яку `audit.md` §4
   називає «висновок сформульовано до доказу».
2. **Ритм і довжина речення.** Зібрано переважно **написи, цифрові рядки й заголовки**, а не
   тіла абзаців (`research.md` §13.4). Тверджень про синтаксис ці дані не витримають.
3. **Валідація на людях.** Персони — прото-персони, жодна ніколи не бачила реальної людини
   (`personas.md`, шапка). Принципи успадковують цей статус повністю.

---

# Перевірка якості

- **П'ять принципів, кожен із власним анкером.** Жоден не виведений з іншого: 1 — про
  походження доказу, 2 — про подачу переліку й терміна, 3 — про межу з авторитетнішим
  джерелом, 4 — про сталість числа, 5 — про напис і перехід.
- **Жодного принципу, що спирається лише на [?].** У кожного анкер зі статусом 🟢 [FACT] або
  🟢 [AUDIT]; де в ланцюжку є [?] або [2ND-HAND] — це названо в «Межі доказу», а правило
  переставлене на ту опору, яка тримає.
- **Антиприклади реальні.** П'ять із п'яти — рядки з `microcopy.md`, тобто наш власний текст,
  а не вигадана помилка. Кожен має номер знахідки.
- **Цитати конкурентів — короткі, атрибутовані, для аналізу реєстру.** Жодного чужого
  формулювання не перенесено й не перефразовано в текст продукту (`CLAUDE.md` §3). Жодна
  реальна компанія не названа партнером Asterra.
- **Нічого не зібрано наново.** Умова «якщо мови конкурентів у ресерчі немає — зібрати» **не
  спрацювала**: 28 дослівних фрагментів уже були в базі з джерелами й мітками. Вони
  консолідовані в `research.md` §13 без нових запитів; що саме цей корпус **не** може
  відповісти, названо там же в §13.4.
- **Мікрокопі: 16 типів елементів, два з них порожні — і це рішення.** «Помилка валідації»
  не має прикладу (стану немає в `_screens.md`), «небезпечна дія» оголошена незастосовною
  (такої дії немає у всій IA). У жоден із двох випадків приклад не вигадано заднім числом.
  Склад станів узято з `_screens.md` і тільки з нього — правил для станів, які там не
  позначені ✓, у розділі немає.
- **Чотири правила зі станів мають слабшу опору, і це названо.** Завантаження, порожній,
  помилка, успіх спираються на загальну практику й наші принципи, бо ринкових даних немає:
  `research.md` §12 фіксує, що аудит покривав лише happy paths.
- **Три відкриті позиції, жодну не закрито вигадкою:** Н1-9 (заголовок блока доказу),
  співвідношення area/solution, правило валідації без прикладу.
