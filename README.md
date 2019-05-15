# PlateZero Ingredient Parser

This is our common library for parsing a freeform ingredient into something we
can understand in PlateZero.

## Usage

This module is currently not published to npm, so to add it to your
dependencies, use something like this in your `package.json` (replacing `v1.0.0`
with the git tag of the release you'd like to use):

```json
"dependencies": {
  "ingredient-parser": "https://github.com/plate0/ingredient-parser#v1.0.0"
}
```

The ingredient parser library exports several useful functions. The high-level
"parse this into an ingredient" function is called `parseIngredient`:

```javascript
import { parseIngredient } from 'ingredient-parser';

console.log(parseIngredient('3oz chickpeas -- mashed'));
```

The `parseIngredient` function returns an object with the following shape:

```json
{
  "name": "chickpeas",
  "quantity_numerator": 3,
  "quantity_denominator": 1,
  "unit": "oz",
  "preparation": "mashed",
  "optional": false
}
```

The `unit` will be one of the normalized values from src/unit.ts, or `undefined`
if no unit was listed or the unit was not recognized. To parse a unit directly,
the `parseUnit` function is available:

```javascript
import { parseUnit } from 'ingredient-parser';

console.log(parseUnit('pound')); // => 'lb'
console.log(parseUnit('lb')); // => 'lb'
console.log(parseUnit('box')); // => undefined
```

We intentionally do not include things which are not "real" units. For example,
given the ingredient "1 box of pasta", it might seem as though "box" is the
unit. However, "box" is quite ambiguous as to what it actually means. If we
wanted to display a recipe written with U.S. customary units in their
S.I./metric conversions, there is no conversion for "boxes." Therefore, we treat
"box of pasta" as the _name_ of the ingredient rather than "pasta" as the name
and "box" as the unit.

The `quantity_numerator` and `quantity_denominator` are also parsed out of the
ingredient if possible using the `parseAmount` function:

```javascript
import { parseAmount } from 'ingredient-parser';

console.log(parseAmount('5')); // { n: 5, d: 1 }
console.log(parseAmount('⅝')); // { n: 5, d: 8 }
console.log(parseAmount('1 1/2')); // { n: 3, d: 2 }
console.log(parseAmount('1.5')); // { n: 3, d: 2 }
```

## Hacking

1. Clone the repo
2. Run `yarn` to install dependencies
3. Make changes and write tests
4. Run the unit tests with `yarn test`

## Pre-commit checklist

1. Use Prettier to auto-format your code
2. Make sure all the unit tests pass with `yarn test`
3. Run `yarn build` to update the `dist/` directory

TODO: This should probably be done by CI and/or a git hook!

## Releasing a new version

Right now, we're not publishing to npm and are just using GitHub as the
canonical source of this package. When changes are made in this package that
require a new [semver](https://semver.org/) version, here are the steps to take:

1. Make sure the pre-commit checklist has been followed, in particular running
   `yarn build` to update the `dist` directory.
2. Update the package version in `package.json` and commit this change.
3. Tag the commit with your new version name and push the tag to GitHub.
4. In your dependent package, update package.json to point to your new version
   in the URL, like

   ```json
   "dependencies": {
     "ingredient-parser": "https://github.com/plate0/ingredient-parser#v1.0.0"
   }
   ```
