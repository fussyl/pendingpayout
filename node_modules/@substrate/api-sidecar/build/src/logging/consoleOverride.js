"use strict";
/* eslint-disable prefer-spread */
/* eslint-disable prefer-rest-params */
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleOverride = void 0;
const util_1 = require("util");
/**
 * Override console methods with a winston.Logger.
 *
 * @param logger
 */
function consoleOverride(logger) {
    [
        ['log', 'info'],
        ['info', 'info'],
        ['warn', 'warn'],
        ['error', 'error'],
        ['debug', 'debug'],
    ].forEach(([consoleLevel, winstonLevel]) => {
        // Sacrereligious typecasting explained:
        //
        // `args as [string]`: format @types dictate that it needs an array of at least length 1. However,
        // from testing this is not neccesary, so we override the type as a string tuple.
        //
        // `(format.apply(format, args as [string]) as unknown) as object`: TS incorrectly says the we
        // need a object as an argument to `info.call`. However, it will accept a string perfectly fine,
        // which is what `format.apply` returns.
        console[consoleLevel] = function (...args) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            logger[winstonLevel].call(logger, util_1.format.apply(util_1.format, args));
        };
    });
}
exports.consoleOverride = consoleOverride;
//# sourceMappingURL=consoleOverride.js.map