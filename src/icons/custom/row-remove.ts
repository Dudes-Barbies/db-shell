import { createLucideIcon } from 'lucide-react'

// Smazat řádek tabulky (editor Inside).
export const RowRemove = createLucideIcon('row-remove', [
  ['rect', { x: '3', y: '3', width: '18', height: '8', rx: '2', key: 'row' }],
  ['path', { d: 'm9 15 6 6', key: 'x1' }],
  ['path', { d: 'm15 15-6 6', key: 'x2' }],
])
