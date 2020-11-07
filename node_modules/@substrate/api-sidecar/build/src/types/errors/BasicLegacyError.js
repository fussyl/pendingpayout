"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBasicLegacyError = void 0;
/**
 * Type guard to check if something is a subset of the interface BasicError.
 *
 * @param thing to check type of
 */
function isBasicLegacyError(thing) {
    return thing.error !== undefined;
}
exports.isBasicLegacyError = isBasicLegacyError;
//# sourceMappingURL=BasicLegacyError.js.map