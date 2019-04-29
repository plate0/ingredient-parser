import { parseUnit } from './unit'

test.each([
  ['t', 'tsp'],
  ['tsp', 'tsp'],
  ['teaspoon', 'tsp'],
  ['T', 'tbsp'],
  ['l', 'l'],
  ['liter', 'l'],
  ['litre', 'l']
])('parseUnit(%s)', (text, expected) => {
  expect(parseUnit(text)).toEqual(expected)
})
