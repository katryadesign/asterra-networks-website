---
target: wireframes/approval-materials.html + empty/error/loading
total_score: 29
p0_count: 0
p1_count: 1
timestamp: 2026-09-17T12-09-01Z
slug: wireframes-approval-materials-html
---
# Critique — approval-materials (base · empty · error · loading), група Prepare approval

Метод: вимір рендеру (computed style, rect) на 1440 / 1024 / 375 у власній вкладці та прихованих iframe; скріншоти в панелі недоступні (панель не компонує кадри). Службовий хром не оцінювався.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | loading має role="status"; error без live-region (свідомо відкрите, рівень розмітки) |
| 2 | Match System / Real World | 4 | мова ланцюга погодження: CAPEX, approval matrix, frame agreement |
| 3 | User Control and Freedom | 3 | вихід на сторінку рішення і до експерта в кожному стані |
| 4 | Consistency and Standards | 2 | fallback h3 на base / h2 у станах; бейдж розтягнуто на всю ширину; три однакові «Read Asterra Shield» |
| 5 | Error Prevention | 3 | форм немає; ризик лише в неоднозначних рядках списку |
| 6 | Recognition Rather Than Recall | 3 | рядок Accreditation виглядає живим, але не веде нікуди і не позначений слотом |
| 7 | Flexibility and Efficiency | 2 | немає skip-link, службове дерево перед продуктом (свідомо відкрите) |
| 8 | Aesthetic and Minimalist Design | 3 | empty дублює той самий аргумент двічі поспіль |
| 9 | Error Recovery | 3 | без повтору (свідомо не змодельовано), fallback чесний |
| 10 | Help and Documentation | 3 | hint про свідомі слоти є |
| **Total** | | **29/40** | Good |

## Anti-Patterns Verdict

LLM: не читається як AI-згенероване; заборонених патернів немає. Ризик: три заголовки поспіль у каденції «твердження + коротке заперечення» (H1, «Made to leave…», «The solution page argues…»).
Детектор: 1 знахідка, em-dash-overuse у approval-materials.html (5) — хибна: 2 у маркері [TBD — no source] (дозволено voice.md), решта в <title> і .wf-doc (хром). Стани: 0.
Overlay: не запускався — live-server спільний для паралельних агентів і його stop правує HTML; замість нього програмний вимір.

## What's Working
1. Чесні слоти: пунктирна рамка + приглушений H3 + моно-маркер відрізняють заявлене від наявного без кольору.
2. Fallback однаковий у всіх чотирьох станах — вихід з тупика завжди на тому самому місці.
3. Error тримає єдину хроматичну подію (signal на H2 + signal-dim межа); empty — ні, як і належить.

## Priority Issues
- [P1] Сторінка обіцяє «each one dated», а жоден рядок артефакту не несе дати чи слота дати. Fix: слот дати в reg-row (chip--date або [TBD]). /impeccable harden
- [P2] Бейдж «Prepare internal approval» розтягнуто на 1087px: .badge inline-flex став grid-item у .screen-head > .wrap і розтягнувся. Також на crew-access, careers, company. Fix: justify-self:start у .screen-head .badge. /impeccable polish
- [P2] Рядок Accreditation overview — суцільна рамка й surface-2 як у живих рядків, але ні посилання, ні маркера. Fix: або слот-модифікатор, або дія. /impeccable clarify
- [P2] Ранг у списку ледь видний: lead відрізняється від рядків 03/05 лише межею line-strong vs line; нумерація 01–05 рахує і порожні слоти. /impeccable layout
- [P2] Empty: notice і fallback двічі поспіль кажуть «рішення вже на сторінці рішення»; разом із шапкою три кнопки «Read Asterra Shield» на base (дві на станах). /impeccable distill

## Persona Red Flags
P2 (Fleet IT): шукає, що саме переслати — отримує 5 рядків, з яких 2 порожні, 1 без дії; реально пересилаються тільки дві сторінки, які вже були в шляху.
P4 (CAPEX): отримає документ без дати, хоча сторінка сама називає недатований документ застарілим.
P1 (Tech Superintendent): Compliance mapping — єдиний рядок його мовою — стиснутий кнопкою до 402px і трьох рядків H3.

## Minor Observations
- H3 Compliance mapping 402px / 3 рядки проти 666px інших через кнопку поруч.
- Fallback h3 (base) vs h2 (стани).
- Loading: скелет не відтворює 5 рядків списку (продовження відомого #7).
- 375: список 1621px, рядки 182–312px.
- Іконка щита в бейджі семантично належить Asterra Shield.

## Questions to Consider
- Чи потрібен ghost «Read Asterra Shield» у шапці, якщо той самий перехід — перший рядок і primary у fallback?
- Чи має fallback на base казати «If the library gives you nothing», коли бібліотека щойно дала 5 рядків?
