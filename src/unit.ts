import { first, includes } from 'lodash'

export type Unit =
  | 'g'
  | 'mg'
  | 'kg'
  | 'oz'
  | 'lb'
  | 'qt'
  | 'c'
  | 'tbsp'
  | 'tsp'
  | 'l'
  | 'dl'
  | 'ml'
  | 'in'
  | 'ft'
  | 'cm'
  | 'm'

export const parseUnit = (s?: string): Unit | undefined => {
  if (!s) {
    return undefined
  }
  if (s === 'T') {
    return 'tbsp'
  }

  // Some sites have amounts listed in two units, like:
  // 500g/1lb or 200g/7oz
  // If the `/` is present, break the unit on that and parse the first unit.
  if (includes(s, '/')) {
    s = first(s.split('/'))
  }

  const unit = s.toLowerCase()
  switch (unit) {
    case 'oz':
    case 'g':
    case 'mg':
    case 'kg':
    case 'lb':
    case 'c':
    case 'qt':
    case 'tbsp':
    case 'tsp':
    case 'l':
    case 'dl':
    case 'ml':
    case 'in':
    case 'ft':
    case 'cm':
    case 'm':
      return unit
    case 'pound':
    case 'pounds':
    case 'lbs':
      return 'lb'
    case 'tablespoon':
    case 'tablespoons':
    case 'tbsps':
    case 'tbsp.':
      return 'tbsp'
    case 'teaspoon':
    case 'teaspoons':
    case 'tsps':
    case 'tsps.':
    case 'tsp.':
    case 't':
      return 'tsp'
    case 'cups':
    case 'cup':
    case 'cups.':
    case 'cup.':
      return 'c'
    case 'qts.':
    case 'qt.':
    case 'quart':
    case 'quarts':
      return 'qt'
    case 'litre':
    case 'liter':
      return 'l'
  }
}
