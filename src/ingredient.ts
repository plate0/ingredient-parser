import * as _ from 'lodash'
import { parseAmount } from './amount'
import { parseUnit } from './unit'

export interface Ingredient {
  quantity_numerator?: number
  quantity_denominator?: number
  unit?: string
  name: string
  preparation?: string
  optional: boolean
}

// matchNumber returns a pair consisting of
// - a quantity, or { n: undefined, d: undefined } if not found, and
// - the remainder of the string to be parsed by subsequent logic
const matchNumber = (
  s: string
): [{ n: number | undefined; d: number | undefined }, string] => {
  // matches three general parts:
  // 1. the numerator or whole number or decimal
  // 2. a unicode fraction
  // 3. a fraction using / or just the denominator from (1)
  const p = /^(\s*\d*(\.\d+)?\s*([½⅓⅔¼¾⅖⅗⅘⅙⅚⅐⅛⅜⅝⅞⅑⅒]?)((\d*\s*)?\/\s*\d*)?)/gm
  const match = p.exec(s)
  if (match) {
    try {
      return [parseAmount(match[1]), s.substring(match[1].length)]
    } catch {
      // fall through to default
    }
  }
  return [{ n: undefined, d: undefined }, s]
}

export const parseIngredient = (s?: string): Ingredient | undefined => {
  const ing = {
    name: '',
    quantity_numerator: undefined,
    quantity_denominator: undefined,
    preparation: undefined,
    optional: false,
    unit: undefined
  }
  if (!s) {
    return ing
  }
  s = _.trim(s)
  const [num, numRest] = matchNumber(s)
  ing.quantity_numerator = num.n
  ing.quantity_denominator = num.d
  s = _.trim(numRest)
  const [maybeUnit, ...rest] = s.split(/\s/)
  const unit = parseUnit(maybeUnit)
  if (unit) {
    ing.unit = unit
    s = rest.join(' ')
  }
  const [str, optional] = isOptional(s)
  ing.optional = optional
  let [name, prep] = parsePrep(str)
  ing.name = name
  ing.preparation = prep
  return ing
}

// figure out if s is an optional ingredient and return the string minus the
// "optional" part, as well as a boolean indicating whether optional was
// detected
function isOptional(s?: string): [string, boolean] {
  const optionalSuffix = '(optional)'
  if (!s) {
    return ['', false]
  }
  const str = _.trim(s)
  const optional = _.endsWith(str, optionalSuffix)
  if (optional) {
    const name = str.substring(0, str.length - optionalSuffix.length)
    return [name, true]
  }
  return [str, false]
}

// parse a string into an ingredient name, optionally followed by a preparation
function parsePrep(s?: string): [string, string | undefined] {
  if (!s) {
    return ['', undefined]
  }
  const parts = s.match(/(.+)(?:--|;|–|—| - )(.+)/)
  if (!parts) {
    return [_.trim(s), undefined]
  }
  const [name, prep] = _.tail(parts)
  return [_.trim(name), _.trim(prep)]
}
