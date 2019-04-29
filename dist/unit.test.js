"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unit_1 = require("./unit");
test.each([
    ['t', 'tsp'],
    ['tsp', 'tsp'],
    ['teaspoon', 'tsp'],
    ['T', 'tbsp'],
    ['l', 'l'],
    ['liter', 'l'],
    ['litre', 'l']
])('parseUnit(%s)', function (text, expected) {
    expect(unit_1.parseUnit(text)).toEqual(expected);
});
//# sourceMappingURL=unit.test.js.map