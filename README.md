# PlateZero Ingredient Parser

This is our common library for parsing a freeform ingredient into something we
can understand in PlateZero.

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
