"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUnit = function (s) {
    if (!s) {
        return undefined;
    }
    if (s === 'T') {
        return 'tbsp';
    }
    var unit = s.toLowerCase();
    switch (unit) {
        case 'oz':
        case 'g':
        case 'mg':
        case 'kg':
        case 'lb':
        case 'c':
        case 'qt':
        case 'tbsp':
        case 'tsp':
        case 'l':
        case 'dl':
        case 'ml':
        case 'in':
        case 'ft':
        case 'cm':
        case 'm':
            return unit;
        case 'pound':
        case 'pounds':
        case 'lbs':
            return 'lb';
        case 'tablespoon':
        case 'tablespoons':
        case 'tbsps':
        case 'tbsp.':
            return 'tbsp';
        case 'teaspoon':
        case 'teaspoons':
        case 'tsps':
        case 'tsps.':
        case 'tsp.':
        case 't':
            return 'tsp';
        case 'cups':
        case 'cup':
        case 'cups.':
        case 'cup.':
            return 'c';
        case 'qts.':
        case 'qt.':
        case 'quart':
        case 'quarts':
            return 'qt';
        case 'litre':
        case 'liter':
            return 'l';
    }
};
//# sourceMappingURL=unit.js.map