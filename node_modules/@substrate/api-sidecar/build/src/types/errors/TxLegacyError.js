"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTxLegacyError = void 0;
/**
 * Type guard to check if something is a subset of the interface TxError.
 *
 * @param thing to check type of
 */
function isTxLegacyError(thing) {
    return (thing.cause !== undefined &&
        thing.error !== undefined);
}
exports.isTxLegacyError = isTxLegacyError;
//# sourceMappingURL=TxLegacyError.js.map