import { parseIngredient } from './index'

describe.each([
  [
    '2 tablespoons fresh lemon juice',
    [2, 1, 'tbsp', 'fresh lemon juice', undefined, false],
  ],
  [
    '3 garlic cloves, roughly chopped',
    [3, 1, undefined, 'garlic cloves, roughly chopped', undefined, false],
  ],
  ['1 15-ounce can', [1, 1, undefined, '15-ounce can', undefined, false]],
  ['1/4 cup olive oil', [1, 4, 'c', 'olive oil', undefined, false]],
  [
    'salt and pepper',
    [undefined, undefined, undefined, 'salt and pepper', undefined, false],
  ],
  [
    '    1/2    tsp   garlic      --      minced     (optional)     ',
    [1, 2, 'tsp', 'garlic', 'minced', true],
  ],
  [
    'salt (optional)',
    [undefined, undefined, undefined, 'salt', undefined, true],
  ],
  [
    'garlic -- minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic — minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic – minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic; minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic;minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic - minced (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced', true],
  ],
  [
    'garlic - minced - finely (optional)',
    [undefined, undefined, undefined, 'garlic', 'minced - finely', true],
  ],
  [
    'garlic-minced (optional)',
    [undefined, undefined, undefined, 'garlic-minced', undefined, true],
  ],
  ['1⅔c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  ['1 ⅔ c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  ['1⅔ c garlic', [5, 3, 'c', 'garlic', undefined, false]],
  [
    '5.5oz tomato paste, sliced',
    [11, 2, 'oz', 'tomato paste, sliced', undefined, false],
  ],
  [
    '250g/9oz long grain or basmati rice',
    [250, 1, 'g', 'long grain or basmati rice', undefined, false],
  ],
  [
    '600ml/20fl oz chicken stock',
    [600, 1, 'ml', 'chicken stock', undefined, false],
  ],
  [
    '500g/1lb 2oz skinless, boneless chicken thighs, cut into bite-sized pieces',
    [
      500,
      1,
      'g',
      'skinless, boneless chicken thighs, cut into bite-sized pieces',
      undefined,
      false,
    ],
  ],
  ['', [undefined, undefined, undefined, '', undefined, false]],
  [undefined, [undefined, undefined, undefined, '', undefined, false]],
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
