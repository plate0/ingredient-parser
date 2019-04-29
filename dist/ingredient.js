"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var amount_1 = require("./amount");
var unit_1 = require("./unit");
// matchNumber returns a pair consisting of
// - a quantity, or { n: undefined, d: undefined } if not found, and
// - the remainder of the string to be parsed by subsequent logic
var matchNumber = function (s) {
    // matches three general parts:
    // 1. the numerator or whole number or decimal
    // 2. a unicode fraction
    // 3. a fraction using / or just the denominator from (1)
    var p = /^(\s*\d*(\.\d+)?\s*([½⅓⅔¼¾⅖⅗⅘⅙⅚⅐⅛⅜⅝⅞⅑⅒]?)((\d*\s*)?\/\s*\d*)?)/gm;
    var match = p.exec(s);
    if (match) {
        try {
            return [amount_1.parseAmount(match[1]), s.substring(match[1].length)];
        }
        catch (_a) {
            // fall through to default
        }
    }
    return [{ n: undefined, d: undefined }, s];
};
exports.parseIngredient = function (s) {
    var ing = {
        name: '',
        quantity_numerator: undefined,
        quantity_denominator: undefined,
        preparation: undefined,
        optional: false,
        unit: undefined
    };
    if (!s) {
        return ing;
    }
    s = _.trim(s);
    var _a = matchNumber(s), num = _a[0], numRest = _a[1];
    ing.quantity_numerator = num.n;
    ing.quantity_denominator = num.d;
    s = _.trim(numRest);
    var _b = s.split(/\s/), maybeUnit = _b[0], rest = _b.slice(1);
    var unit = unit_1.parseUnit(maybeUnit);
    if (unit) {
        ing.unit = unit;
        s = rest.join(' ');
    }
    var _c = isOptional(s), str = _c[0], optional = _c[1];
    ing.optional = optional;
    var _d = parsePrep(str), name = _d[0], prep = _d[1];
    ing.name = name;
    ing.preparation = prep;
    return ing;
};
// figure out if s is an optional ingredient and return the string minus the
// "optional" part, as well as a boolean indicating whether optional was
// detected
function isOptional(s) {
    var optionalSuffix = '(optional)';
    if (!s) {
        return ['', false];
    }
    var str = _.trim(s);
    var optional = _.endsWith(str, optionalSuffix);
    if (optional) {
        var name = str.substring(0, str.length - optionalSuffix.length);
        return [name, true];
    }
    return [str, false];
}
// parse a string into an ingredient name, optionally followed by a preparation
function parsePrep(s) {
    var prepSep = '--';
    if (!s) {
        return ['', undefined];
    }
    var parts = s.split(prepSep);
    if (parts.length < 2) {
        return [_.trim(s), undefined];
    }
    return [_.trim(_.head(parts)), _.trim(_.tail(parts).join(prepSep))];
}
//# sourceMappingURL=ingredient.js.map