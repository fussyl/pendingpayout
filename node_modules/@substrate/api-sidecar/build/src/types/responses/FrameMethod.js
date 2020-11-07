"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFrameMethod = void 0;
function isFrameMethod(thing) {
    return (typeof thing.pallet === 'string' &&
        typeof thing.method === 'string');
}
exports.isFrameMethod = isFrameMethod;
//# sourceMappingURL=FrameMethod.js.map