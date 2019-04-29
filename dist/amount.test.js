"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amount_1 = require("./amount");
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
])('parseAmount(%s)', function (x, expected) {
    var f = amount_1.parseAmount(x);
    test("has numerator " + expected[0], function () {
        expect(f.n).toEqual(expected[0]);
    });
    test("has denominator " + expected[1], function () {
        expect(f.d).toEqual(expected[1]);
    });
});
//# sourceMappingURL=amount.test.js.map