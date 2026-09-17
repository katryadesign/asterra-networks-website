---
target: "Reach the expert: inquiry + error/loading/success"
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-09-17T12-10-22Z
slug: wireframes-inquiry-html
---
# Critique — Reach the expert (inquiry · error · loading · success)

Scope: wireframes/inquiry.html, inquiry-error.html, inquiry-loading.html, inquiry-success.html — розглянуто як один екран із трьома станами. Огляд: DOM-вимір у браузері на 1440×900 і 375×812 (панель браузера прихована — скріншоти недоступні, геометрія й контраст рахувались скриптом), детектор CLI + ін'єкція detect.js на всіх 4 сторінках.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | loading = role=status + вантаж у дорозі; error без live-region (свідомо відкрите) |
| 2 | Match System / Real World | 3 | мова P2/P1, «Your role or request type» змішує два виміри |
| 3 | User Control and Freedom | 3 | контекст редагований, error зберігає введене; success термінальний за рішенням |
| 4 | Consistency and Standards | 3 | select без шеврона виглядає як текстове поле; мітки 14.4 vs 13.76 (відоме #5) |
| 5 | Error Prevention | 2 | нема required/optional, autocomplete, email не повторюється у квитанції |
| 6 | Recognition Rather Than Recall | 3 | контекст перенесено й передзаповнено |
| 7 | Flexibility and Efficiency | 2 | без autocomplete; поля контексту розкидані по сітці |
| 8 | Aesthetic and Minimalist Design | 3 | чисто; скелет-рядки на loading — шум |
| 9 | Error Recovery | 2 | повтор поза першим екраном, нема запасного каналу |
| 10 | Help and Documentation | 3 | підказки й routing-обіцянка біля кнопки |
| **Total** | | **27/40** | **Acceptable** |

## Anti-Patterns Verdict

LLM: не AI slop. Жодної абсолютної заборони; мова «Панель» стримана й власна. Найгенеричніше місце — двоколонкова форма в обрамленій картці, але вона функціональна.
Detector: CLI — 0 знахідок (exit 0). Браузер — 12 на кожній сторінці: 10 у службовому хромі (.wf-tree / .wf-states / .wf-doc — поза скоупом), 2 реальні наскрізні: skipped-heading h2 → h4 у підвалі; line-length ~104 ch у .foot-legal. Оверлей для людини не показано (панель браузера прихована).

## What's Working
- Контекст як вантаж: одна й та сама dl (Solution/Industry/Role/Message) на loading і success — користувач бачить, що саме поїхало.
- Error зберігає всі введені значення, кнопка міняється на «Send the request again», тіло обіцяє одноразову відправку.
- Стан не кодується кольором: іконка + слово + тон; весь текст ≥5.28:1.

## Priority Issues
- [P1] Межі полів 2.27:1 до панелі (WCAG 1.4.11 вимагає 3:1), заливка 1.08:1 — поля ледь читаються як поля. Fix: підняти --line-strong / окремий токен межі поля. /impeccable polish
- [P1] select з appearance:none без шеврона: Industry «Maritime» і Role «Select a role» не відрізнити від text input поруч (Solution of interest). Fix: шеврон у kit для .field select. /impeccable polish
- [P2] Квитанція success/loading без name/company/work email і каналу відповіді — одрук у email = тихо втрачений лід. /impeccable harden
- [P2] Error: кнопка повтору на y 1006–1055 при 900px вікні; на 375 повідомлення стоїть після панелі контексту; запасного каналу нема. /impeccable harden
- [P2] Нема required/optional, autocomplete, aria-describedby на підказках. /impeccable harden

## Persona Red Flags
Sam (a11y): межі полів <3:1; select без ознаки списку; підказки не прив'язані до полів; error без live-region (відкрите).
Riley: помилка в email не видно ніде після відправки; повторний збій — глухий кут без альтернативи.
Casey (375): поля 38px (<44); error-повідомлення нижче панелі контексту.
P2 (Fleet IT): Role — 6-те поле з 7, хоча воно маршрутизує R4.

## Minor Observations
- Loading: два пульсуючі sk-line (630/365px) між тілом і вже відомими значеннями — скелет обіцяє вміст, якого не буде.
- Поля контексту (Industry — рядок 2 праворуч, Solution — рядок 3 ліворуч) розірвані, хоча панель каже «Edit either in the form».
- Фокус кнопки через --signal — хроматика поза «збій/строк».
- h2 → h4 у підвалі; .foot-legal ~104 ch.

## Questions to Consider
- Чи має квитанція success повторювати адресу, на яку прийде відповідь?
- Чи варто групувати поля «контекст» (industry, solution, role) першими, а «хто ви» — другими?
- Що бачить користувач після другого збою відправки?
