// Knihovna UI ikon všech D&B appek (rozhodnutí 2026-11, docs/DECISIONS.md
// v db-platform): sada Lucide + vlastní ikony ve stejném stylu.
//
//   import { Pencil, Trash2, Plus } from '@db/shell/icons'
//   <Trash2 size={16} aria-hidden />
//
// Ikona kreslí barvou okolního textu (currentColor): na modrém tlačítku
// je bílá, v textu barvy textu. Výchozí velikost 24, tloušťka čáry 2.
// Seznam ikon: https://lucide.dev/icons/ - jak přidat vlastní: README.md.
export * from 'lucide-react'
export * from './custom'
