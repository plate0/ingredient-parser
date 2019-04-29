import { parseIngredient } from './index'

describe.each([
  [
    '2 tablespoons fresh lemon juice',
    [2, 1, 'tbsp', 'fresh lemon juice', undefined, false]
  ],
  [
    '3 garlic cloves, roughly chopped',
    [3, 1, undefined, 'garlic cloves, roughly chopped', undefined, false]
  ],
  ['1 15-ounce can', [1, 1, undefined, '15-ounce can', undefined, false]],
  ['1/4 cup olive oil', [1, 4, 'c', 'olive oil', undefined, false]],
  [
    'salt and pepper',
    [undefined, undefined, undefined, 'salt and pepper', undefined, false]
  ],
  [
    '    1/2    tsp   garlic      --      minced     (optional)     ',
    [1, 2, 'tsp', 'garlic', 'minced', true]
  ],
  [
    'salt (optional)',
    [undefined, undefined, undefined, 'salt', undefined, true]
  ],
  [
    'garlic -- minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true]
  ],
  ['1⅔c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  ['1 ⅔ c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  ['1⅔ c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  [
    '5.5oz tomato paste, sliced',
    [11, 2, 'oz', 'tomato paste, sliced', undefined, false]
  ],
  ['', [undefined, undefined, undefined, '', undefined, false]],
  [undefined, [undefined, undefined, undefined, '', undefined, false]]
])(
  'parseIngredient(%s)',
  (
    text: string,
    [n, d, unit, name, prep, optional]: [
      number | undefined,
      number | undefined,
      string | undefined,
      string,
      string | undefined,
      boolean
    ]
  ) => {
    const result = parseIngredient(text)
    test(`has numerator ${n}`, () => {
      expect(result.quantity_numerator).toEqual(n)
    })
    test(`has denominator ${d}`, () => {
      expect(result.quantity_denominator).toEqual(d)
    })
    test(`has unit ${unit}`, () => {
      expect(result.unit).toEqual(unit)
    })
    test(`has name ${name}`, () => {
      expect(result.name).toEqual(name)
    })
    test(`has preparation ${prep}`, () => {
      expect(result.preparation).toEqual(prep)
    })
    test(optional ? 'is optional' : 'is not optional', () => {
      expect(result.optional).toEqual(optional)
    })
  }
)
