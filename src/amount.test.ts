import { parseAmount } from './amount'

describe.each([
  // negative cases
  ['', [undefined, undefined]],
  [' ', [undefined, undefined]],
  ['not a number', [undefined, undefined]],
  [undefined, [undefined, undefined]],

  // positive cases
  ['½', [1, 2]],
  ['1½', [3, 2]],
  ['1 ½', [3, 2]],
  ['5', [5, 1]],
  ['1 1/2', [3, 2]],
  ['1.7', [17, 10]],
  ['0.1', [1, 10]],
  ['.9', [9, 10]]
])('parseAmount(%s)', (x: string, expected: number[]) => {
  const f = parseAmount(x)
  test(`has numerator ${expected[0]}`, () => {
    expect(f.n).toEqual(expected[0])
  })
  test(`has denominator ${expected[1]}`, () => {
    expect(f.d).toEqual(expected[1])
  })
})
