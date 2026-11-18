import { createLucideIcon } from 'lucide-react'

// Smazat sloupec tabulky (editor Inside).
export const ColumnRemove = createLucideIcon('column-remove', [
  ['rect', { x: '3', y: '3', width: '8', height: '18', rx: '2', key: 'col' }],
  ['path', { d: 'm15 9 6 6', key: 'x1' }],
  ['path', { d: 'm21 9-6 6', key: 'x2' }],
])
