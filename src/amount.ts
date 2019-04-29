import Fraction from 'fraction.js'

const fractionMapping = {
  '½': '1/2',
  '⅓': '1/3',
  '⅔': '2/3',
  '¼': '1/4',
  '¾': '3/4',
  '⅖': '2/5',
  '⅗': '3/5',
  '⅘': '4/5',
  '⅙': '1/6',
  '⅚': '5/6',
  '⅐': '1/7',
  '⅛': '1/8',
  '⅜': '3/8',
  '⅝': '5/8',
  '⅞': '7/8',
  '⅑': '1/9',
  '⅒': '1/10'
}

export const parseAmount = (
  s?: string
): { n: number | undefined; d: number | undefined } => {
  try {
    s = s
      .replace(/[½⅓⅔¼¾⅖⅗⅘⅙⅚⅐⅛⅜⅝⅞⅑⅒]/gm, m => ` ${fractionMapping[m]}`)
      .replace(/\s\s+/, ' ')
      .trim()
    return new Fraction(s)
  } catch {
    return { n: undefined, d: undefined }
  }
}
