"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLegacyError = void 0;
/**
 * Type guard to check if something is a subset of the interface LegacyError.
 *
 * @param thing to check type of
 */
function isLegacyError(thing) {
    return (thing.error !== undefined &&
        thing.statusCode !== undefined);
}
exports.isLegacyError = isLegacyError;
//# sourceMappingURL=LegacyError.js.map