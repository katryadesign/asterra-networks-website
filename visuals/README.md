# Візуали Asterra Networks — пак промптів і канон набору

**Створено:** 2026-09-17 · Урок 07, крок 4.
**Генератор:** Gemini API, модель Nano Banana (будь-який інший генератор працює з тими самими
промптами — змінюється тільки сервіс і ключ).
**Склад набору визначено не тут,** а колонкою «Фото» в [`../ui/inventory.md`](../ui/inventory.md):
9 слотів на 6 екранах.

---

## 1. Правила набору — що можна і чого не можна

Три рішення, ухвалені раніше, діють на кожен кадр:

| Правило | Звідки | Що це означає для промпта |
|---|---|---|
| **Обладнання як задокументований об'єкт** | К1, `concept/concept.md` §2 | Антена, термінал, шафа, щогла, панель містка — зняті як документація. **Людей у кадрі немає. Атмосферного краєвиду немає.** |
| **Нейтральна підкладка, chroma 0** | К2 | Колір живе у **предметі**, не в підкладці й не в світлі. Жодних кольорових градієнтів, підсвіток, неонових індикаторів. |
| **Р3 — колорит набору** | вирішено 2026-09-17 (нижче) | Морська зелень і бірюза **як матеріал**: патина, фарба корпусу, вода, скло. Низька насиченість, один колорит на всі дев'ять кадрів. |

### Рішення Р3 — і чому воно не порушує анти-референс

Запит користувача: «хочеться трошки кольору, зелених, бірюзових, морських».

Анти-референс `PRODUCT.md` забороняє **«темно-синій, бірюзові градієнти, глобус»** — це перший
рефлекс категорії. Він стосується **інтерфейсу**: токенів, заливок, акцентів. Тут колір живе
**всередині знімка як властивість матеріалу** — окислена мідь, морська зелень заводської фарби,
холодна зелена вода, скло. Три запобіжники, які тримають межу:

1. **В UI бірюзи немає.** Токени лишаються chroma 0, єдина хроматика інтерфейсу — `--signal`
   (кораловий, тільки збій і строк). Колір у фото не стає брендовим акцентом.
2. **Насиченість низька** — приглушений, вицвілий тон, не «бірюзовий градієнт».
3. **Заборонені саме ті форми, що в анти-референсі:** жодних градієнтних заливок, світних
   бірюзових індикаторів, глобусів і орбітальних діаграм у кадрі.

Кораловий сигнал стоїть навпроти зеленого на колірному колі — тобто повідомлення про збій на
такому фото читається **сильніше**, а не слабше.

**Фільтр у CSS:** `grayscale(0.35) contrast(1.06) brightness(0.9)` — м'якший за нинішній 0.55,
щоб колір, заради якого все робиться, лишався видним. Ставиться в `ui/kit.css`, у змінній
`--photo-filter`, і міняється в одному місці.

---

## 2. Спільний рядок стилю — у КОЖЕН промпт

Дослівно, без змін. Саме він тримає набір одним колоритом: дев'ять кадрів зняті ніби однією
камерою в один день.

```
Documentary equipment photography, single consistent look across the whole set:
overcast maritime daylight, soft even light, no direct sun, no lens flare, no bokeh sparkle.
Muted sea-green and teal palette held by the materials themselves — oxidised copper and brass,
weathered sea-green marine paint, cold green-grey water, salt-hazed glass — low saturation,
never vivid, never neon. Deep neutral near-black shadows with no colour cast.
Matter-of-fact, engineering-record framing; the object is centred in importance, not staged.
Sharp detail on the object, quiet uncluttered background.
No people, no hands, no silhouettes. No text, no logos, no brand marks, no readable labels.
No gradients, no glowing indicators, no UI overlays, no globes, no orbital diagrams.
No golden hour, no sunset, no dramatic sky, no scenic landscape mood.
Photorealistic, 35mm, f/8, natural depth of field.
```

---

## 3. Пак промптів — по одному на слот

Формат: `[спільний рядок стилю]` + рядок нижче. Пропорції вказані, бо слот має свою геометрію;
я все одно кадрую під пиксель, але ближча пропорція економить деталі.

### Шапки екранів — панель праворуч, пропорція 4:3

**1 · `head-matching-antenna.jpg`** — Guided matching
```
A white VSAT satellite antenna radome mounted on a ship's mast platform, photographed slightly
from below against a flat overcast sky. Weathered steel railings and a patinated copper-green
grounding strap visible at the base. 4:3.
```

**2 · `head-solution-cabinet.jpg`** — Solution detail (Asterra Shield)
```
A closed network equipment cabinet in a ship's technical room: matte metal door, cable glands,
neatly dressed cable trunking along a sea-green painted bulkhead. Doors shut, nothing blinking.
4:3.
```

**3 · `head-industry-mast.jpg`** — Industry · Maritime
```
A vessel's mast head with a rotating radar scanner and two antennas, seen against flat grey
cloud. Paint chipped to primer, insulators dulled by salt. 4:3.
```

**4 · `head-crew-dish.jpg`** — Crew access & control
```
A parabolic satellite dish on a deck pedestal, seen in three-quarter view, its rim streaked with
salt and its mount painted faded sea-green. Cold green-grey sea as a flat band far behind,
out of focus. 4:3.
```

### Головна — герой і смуга-заява

**5 · `hero-entry-dish.jpg`** — герой Entry, пропорція 4:3
```
A large parabolic satellite antenna on a shore station pedestal, photographed head-on from a low
angle against an overcast sky. Bolted steel ribs, oxidised copper-green fittings, condensation on
the cast housing. 4:3.
```

**6 · `band-statement-room.jpg`** — фон смуги-заяви, пропорція 21:9, кадр піде **під панель**
```
Wide view down a narrow equipment room aisle: two rows of closed metal cabinets, cable ladders
overhead, teal-green painted deck plating. Deliberately empty centre so a panel can sit over it.
Darker overall exposure. 21:9.
```

### Картки-відповіді — смуга над текстом, пропорція 3:1

**7 · `card-shield-cabinet.jpg`** — картка Asterra Shield (matching, Entry)
```
Close crop of a cable termination panel inside a network cabinet: patch leads dressed in parallel,
copper earthing bar with green oxidation, port numbering blanked out. 3:1 horizontal crop. 3:1.
```

**8 · `card-connect-antenna.jpg`** — картка Asterra Connect (Entry)
```
Close crop of a satellite antenna mount: the machined azimuth ring, greased gear teeth, bolted
flange with sea-green paint worn to bare metal. 3:1.
```

**9 · `card-equip-bridge.jpg`** — картка Asterra Equip (запас, якщо вторинній картці повернуть фото)
```
Close crop of a ship's bridge console: unlit instrument bezels, a dimmed compass repeater, brushed
metal panel with teal-green backlit glass switched off. No readable screens. 3:1.
```

---

## 4. Як генерувати

1. Взяти **спільний рядок стилю** (§2), додати рядок слота (§3). Разом — один промпт.
2. Прогнати кожен по **два рази** (18 генерацій — вкладається в 20 на день). З двох варіантів
   я лишу той, що краще сидить у слоті.
3. Зберегти **все в цю папку** `visuals/`, назви можна лишити генераторські (`gemini_1.png`
   тощо) — я перейменую за таблицею §5 сама.
4. Написати мені, що файли на місці.

**Далі роблю я:** відбір з пар · кадрування під геометрію кожного слота · колірний прохід Р3
(один колорит на всі дев'ять, вирівнювання експозиції) · іменування · підключення в
`ui/kit.css` (модифікатори `.photo--*`) і в `wireframes/_archive/_panel.css` · повторна перевірка
контрасту й переповнення на 375/1280/1440.

---

## 5. Імена файлів і куди що йде

| Файл | Слот | Екрани | Геометрія слота |
|---|---|---|---|
| `head-matching-antenna.jpg` | шапка екрана | guided-matching (4 сторінки) | ~455×360, панель праворуч |
| `head-solution-cabinet.jpg` | шапка екрана | solution-detail (3) | ~455×360 |
| `head-industry-mast.jpg` | шапка екрана | industry (3) | ~455×360 |
| `head-crew-dish.jpg` | шапка екрана | crew-access (4) | ~455×360 |
| `hero-entry-dish.jpg` | герой | entry | ~470×400 |
| `band-statement-room.jpg` | фон смуги | entry | на всю ширину, під панеллю |
| `card-shield-cabinet.jpg` | смуга картки | guided-matching, entry | ~612×188 |
| `card-connect-antenna.jpg` | смуга картки | entry | ~612×150 |
| `card-equip-bridge.jpg` | запас | — | ~612×116 |

Правило теми з уроку 6 діє й тут: **фото за темою змісту**. Картка Shield несе шафу, картка
Connect — антену, шапка Maritime — щоглу. Підміняти не можна: знімок називає те, про що блок.

---

## 6. Якщо кадр випав із набору

Не правити руками й не брати «схоже зі стоку». Перечитати §2, згенерувати заміну **тим самим
промптом** (спільний рядок стилю + рядок слота з §3) і підставити. Один колорит тримається
тільки так.

Ознаки, що кадр випав: яскрава бірюза замість приглушеної · синє небо · сонце або відблиск ·
людина, рука чи силует · текст або логотип · світні індикатори · краєвид як настрій.

---

## 7. Відбір і колірний прохід — запис (2026-09-17)

Згенеровано 18 кадрів (9 слотів × 2). Оригінали лежать у `visuals/_source/` (38 МБ PNG, у git не
йдуть — `.gitignore`); у продукт ідуть тільки 9 фінальних JPG (~1.5 МБ разом).

### Відбір з пар

| Слот | Обрано | Чому не інший |
|---|---|---|
| `head-matching-antenna` | v1 | v2 — на кадрі смуга моря; у v1 радом займає більше площі вузької панелі |
| `head-solution-cabinet` | v1 | v2 — ілюмінатор з морем і світлою плямою біля краю |
| `head-industry-mast` | v2 | v1 — половина кадру море, це вже краєвид; v2 — об'єкт на сірому небі |
| `head-crew-dish` | v2 | v1 — море займає нижню третину; у v2 антена домінує |
| `hero-entry-dish` | v1 | v2 — пагорби й берегова лінія внизу кадру, це краєвид (К1) |
| `band-statement-room` | v2 | v1 — поручень і ілюмінатор захаращують центр, під панеллю потрібен спокій |
| `card-shield-cabinet` | v1 | v2 — насиченість 0.31, найвища в наборі, кабелі двох кольорів |
| `card-connect-antenna` | v1 | v2 — світло-м'ятна фарба яскравіша за решту набору |
| `card-equip-bridge` | v1 | обидва придатні; v1 — прилади без екранів, нічого «ввімкненого» |

### Колірний прохід

Виміряно по пікселях до і після (відтінок — середній по насичених пікселях, «синій» — частка
пікселів у діапазоні 195–250°):

| Файл | Світлість | Насиченість | Відтінок | Синій |
|---|---|---|---|---|
| head-matching-antenna | 0.61 → 0.54 | 0.10 → 0.07 | 157 → 156 | 1% → 0% |
| head-solution-cabinet | 0.40 → 0.39 | 0.14 → 0.13 | 158 → 157 | 2% → 0% |
| head-industry-mast | 0.68 → 0.56 | 0.09 → 0.06 | 152 → 153 | 0% → 0% |
| head-crew-dish | 0.54 → 0.53 | 0.11 → 0.06 | 178 → 147 | 16% → 0% |
| hero-entry-dish | 0.62 → 0.54 | 0.08 → 0.06 | 157 → 139 | 3% → 0% |
| band-statement-room | 0.21 → 0.21 | 0.21 → 0.14 | 165 → 163 | 1% → 0% |
| card-shield-cabinet | 0.20 → 0.19 | 0.24 → 0.14 | 162 → 162 | 1% → 0% |
| card-connect-antenna | 0.33 → 0.33 | 0.14 → 0.12 | 156 → 152 | 2% → 0% |
| card-equip-bridge | 0.23 → 0.23 | 0.18 → 0.13 | 158 → 153 | 3% → 0% |

Три кроки, у цьому порядку:

1. **Експозиція екстер'єрів** — гамою до середньої світлості ~0.5. Кадри з великим небом мали
   0.6–0.68 і на чорному UI сліпили б.
2. **Нейтралізація синього** — насиченість пікселів у діапазоні 190–255° опущено до 15%.
   Небо стає сірим, зелень металу й фарби не зачіпається.
3. **Насиченість — тільки вниз** до спільного рівня ~0.13. Підсилювати не можна.

**Урок першої спроби, щоб не повторити:** спершу насиченість вирівнювалась в обидва боки, і
тьмяні екстер'єри отримали підсилення. Воно підняло прихований холодний відлив неба — відтінок
пішов у 190–199°, частка синього до 22%, тобто рівно в «синє небо», яке §6 називає ознакою
кадру, що випав. Звідси правила 2 і 3.

### Розміри

Шапки й герой — 1200×900 (4:3) · картки — 1500×500 (3:1) · смуга-заява — 2400×1028 (21:9).
Решту докадровує `background-size: cover` у слоті. JPEG q84, progressive.
