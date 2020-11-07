"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnyJson = void 0;
const util_1 = require("@polkadot/util");
function isAnyJson(thing) {
    return (thing === null ||
        thing === undefined ||
        typeof thing === 'string' ||
        typeof thing === 'boolean' ||
        typeof thing === 'number' ||
        isArrayAnyJson(thing) ||
        isObjectAnyJson(thing));
}
exports.isAnyJson = isAnyJson;
function isArrayAnyJson(thing) {
    if (!(thing && Array.isArray(thing))) {
        return false;
    }
    for (const element of thing) {
        if (!isAnyJson(element)) {
            return false;
        }
    }
    return true;
}
function isObjectAnyJson(thing) {
    if (!(thing && util_1.isObject(thing))) {
        return false;
    }
    return Object.values(thing).every((value) => isAnyJson(value));
}
//# sourceMappingURL=AnyJson.js.map