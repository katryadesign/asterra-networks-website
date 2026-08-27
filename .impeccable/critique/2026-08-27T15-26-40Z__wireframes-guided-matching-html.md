---
target: wireframes/guided-matching.html + empty/error/loading
total_score: 32
p0_count: 0
p1_count: 1
timestamp: 2026-08-27T15-26-40Z
slug: wireframes-guided-matching-html
---
# Critique — guided-matching (base · empty · error · loading), напрям B «Панель»

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | loading має role="status" і скелет; error нічого не оголошує (немає live-region) |
| 2 | Match System / Real World | 4 | питання про ситуацію, не про технологію |
| 3 | User Control and Freedom | 3 | інтерв'ю постійне, але скинути відповіді нічим |
| 4 | Consistency and Standards | 4 | усі 15 входжень кнопки — одна специфікація |
| 5 | Error Prevention | 2 | правила валідації поля немає (свідомо відкрите, voice.md §17) |
| 6 | Recognition Rather Than Recall | 4 | «Answered:» тримає контекст; відкат за галуззю в кожному стані |
| 7 | Flexibility and Efficiency | 2 | немає skip-link; службове дерево ~30 посилань перед продуктом у tab-порядку |
| 8 | Aesthetic and Minimalist Design | 4 | одна хроматична подія на екран, тіней немає |
| 9 | Error Recovery | 3 | повтор — посилання, не повторний сабміт |
| 10 | Help and Documentation | 3 | підказки під полями є |
| **Total** | | **32/40** | Good |

## Anti-Patterns Verdict

Детермінований скан `detect.mjs` по всіх 4 файлах: exit 0, [], жодної знахідки.
LLM-оцінка: не читається як AI-згенероване. Другорядний рефлекс «майже чорне + неон + моносітка» обійдено тим, що акцент не постійний. Заборонених патернів немає.
Overlay не застосовувався: ін'єкція в панелі браузера недоступна, замість неї програмний аудит по відрендерених парах.

## What's Working

1. Семантика без веселки: error і строк несуть той самий червоний, розрізняються іконкою і словом.
2. Ранг без кольору: primary/secondary картка різняться висотою фотосмуги, кеглем H3 і вагою кнопки.
3. Одна поверхня під величини: dl-блок «Closes / You keep / Fits» на surface-2.

## Priority Issues

- [P1] Error-стан нічого не оголошує допоміжним технологіям. Немає live-region. Fix: role="alert" на .notice. НЕ ВИПРАВЛЕНО: рівень розмітки, чіпати заборонено. /impeccable harden
- [P2] Мікротекст просів нижче 12px (11–11.5px на .rank, .area, dt, .count, .answered, підвальних h4). ВИПРАВЛЕНО: підлога 0.78rem = 12.48px.
- [P2] Горизонтальне переповнення ≤1080px через службове дерево flex 0 0 258px. Успадковано з _wireframe.css. ВИПРАВЛЕНО скоупом у _panel.css.
- [P2] Tab-порядок веде через службовий хром. НЕ ВИПРАВЛЕНО: рівень розмітки. /impeccable harden
- [P3] Правила валідації поля немає. Свідомо відкрите (voice.md §17). Не борг.

## Persona Red Flags

P2 Fleet IT: шлях проходить; злам — error нічого не змінює для скрінрідера.
P1 Technical Superintendent: 11px на dt/.area били точно в нього, виправлено.
P4 CAPEX approver: фотосмуга і бейдж рангу дають упізнати предмет без читання.

## Minor Observations

.body тримає 68ch. Фокус перевірено клавіатурою: :focus-visible спрацьовує, кільце 2px. Висота кнопок 49px. prefers-reduced-motion вимикає пульс скелета.

## Questions to Consider

- Перенести виправлення переповнення в _wireframe.css на всі 28 сторінок замість скоупу на чотирьох?
- Якщо error має отримати live-region, це правка розмітки в 1 файлі: знімаємо заборону точково?
- Фотосмуга лише на картках результату; empty і error без зображення свідомо. Стриманість чи втрата зв'язності?
