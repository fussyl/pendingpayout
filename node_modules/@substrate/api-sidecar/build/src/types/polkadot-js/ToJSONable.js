"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isToJSONable = void 0;
function isToJSONable(thing) {
    return typeof thing.toJSON === 'function';
}
exports.isToJSONable = isToJSONable;
//# sourceMappingURL=ToJSONable.js.map