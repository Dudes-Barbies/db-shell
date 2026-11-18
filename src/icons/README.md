# Ikony

Všechny ikony v UI appek se berou odsud: `import { Trash2 } from '@db/shell/icons'`.
Základ je sada [Lucide](https://lucide.dev/icons/) (licence ISC), k ní
patří naše vlastní ikony v `custom/`. Emoji ani znaky (✎ 🗑 × ⊞) jako
ikony nepoužíváme.

## Jak ikonu použít
- Najdi ji na <https://lucide.dev/icons/> (hledá se anglicky). Název
  `trash-2` se importuje jako `Trash2`.
- Velikost: 16 v tlačítkách s textem a v hustých seznamech, 18–20
  v lištách nástrojů, 24 samostatně. Tloušťku čáry neměň (výchozí 2).
- Barvu nenastavuj. Ikona přebírá barvu textu (`currentColor`), takže na
  modrém tlačítku je bílá a v textu má jeho barvu.
- Tlačítko jen s ikonou musí mít `title` nebo `aria-label` s českým
  popisem, ikona sama dostane `aria-hidden`.

## Jak přidat vlastní ikonu
Když v Lucide nic vhodného není, nakresli vlastní. Musí vypadat jako
ostatní:

| Pravidlo | Hodnota |
|---|---|
| Plátno | 24 × 24 px, kresba uvnitř s okrajem 2 px (oblast 20 × 20) |
| Čára | jen obrys, tloušťka 2 px, kulaté konce a kulaté spoje |
| Výplň | žádná (`fill="none"`), žádné přechody, stíny ani text |
| Barva | `currentColor`, nikdy pevná barva |
| Rohy | zaoblené poloměrem 2 px, kde to jde |
| Detail | jednoduše, ikona musí být čitelná i v 16 px |
| Název | anglicky, malými písmeny s pomlčkou, podle věci, ne podle místa (`dough-scale`, ne `kalkulacka-tlacitko`) |

Šablona SVG (nakresli ve Figmě, Illustratoru nebo ručně a ulož jako SVG):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- jen <path>, <circle>, <rect>, <line>, <polyline> -->
</svg>
```

Pak z ní udělej komponentu `custom/<nazev>.ts` (prvky SVG přepiš do
pole, stejně to dělá Lucide):

```ts
import { createLucideIcon } from 'lucide-react'

export const DoughScale = createLucideIcon('dough-scale', [
  ['rect', { x: '3', y: '10', width: '18', height: '10', rx: '2', key: '1' }],
  ['path', { d: 'M8 10a4 4 0 0 1 8 0', key: '2' }],
])
```

a přidej řádek do `custom/index.ts`:
`export { DoughScale } from './dough-scale'`. Název nesmí být stejný jako
ikona v Lucide.

Kontrola před odevzdáním: ikonu dej vedle dvou podobných z Lucide
v 16 a 24 px. Pokud vypadá tlustší, tenčí nebo detailnější, uprav ji.
