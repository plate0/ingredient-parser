// import { Ingredient } from './ingredient'

// enum Name {
//   LITERAL,
//   KEYWORD,
//   SEPARATOR
// }

// enum Keyword {
//   OPTIONAL
// }

// interface Token {
//   name: Name
//   value: string
// }

// function parseIngredient(s?: string): Ingredient {
//   const scanner = new Scanner()
//   const tokens = scanner.scan(s)
//   return parse(tokens)
// }

// function parse(s: Token[]): Ingredient {
//   const ing = {
//     quantity_numerator: undefined,
//     quantity_denominator: undefined,
//     unit: undefined,
//     name: '',
//     preparation: undefined,
//     optional: false
//   }
//   while (s.length) {
//     let tok = s.shift()
//     console.log('got token', tok)
//     if (tok.Name === Name.NUMBER) {
//     }
//   }
//   return ing
// }

// class Scanner {
//   private tokens: Token[] = []
//   private remainder = ''

//   public scan(s?: string): Token[] {
//     if (!s) {
//       return []
//     }
//     this.tokens = []
//     this.remainder = s
//     while (remainder.length) {
//         scanKeyword()
//     }
//     return this.tokens
//     // return [
//     //   {
//     //     name: TokenName.LITERAL,
//     //     value: '5½'
//     //   },
//     //   {
//     //     name: TokenName.LITERAL,
//     //     value: 'c'
//     //   },
//     //   {
//     //     name: TokenName.LITERAL,
//     //     value: 'yellow'
//     //   },
//     //   {
//     //     name: TokenName.LITERAL,
//     //     value: 'onion'
//     //   },
//     //   {
//     //     name: TokenName.SEPARATOR,
//     //     value: '--'
//     //   },
//     //   {
//     //     name: TokenName.LITERAL,
//     //     value: 'minced'
//     //   },
//     //   {
//     //     name: TokenName.KEYWORD,
//     //     value: '(optional)'
//     //   }
//     // ]
//   }

//   private scanKeyword() {
//     if (this.remainder.match(/^optional\w/)
//   }

//   private scanSeparator(s: string): [Token, string] {
//     return [undefined, s]
//   }
// }
