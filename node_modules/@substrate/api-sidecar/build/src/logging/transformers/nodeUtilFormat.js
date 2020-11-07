"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeUtilFormat = void 0;
const triple_beam_1 = require("triple-beam");
const util_1 = require("util");
const winston = require("winston");
/**
 * Console.log style formatting using node's `util.format`. We need this so we
 * can override console.{log, error, etc.} without issue.
 */
exports.nodeUtilFormat = winston.format((info, _opts) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const args = info[triple_beam_1.SPLAT];
    if (args) {
        info.message = util_1.format(info.message, ...args);
    }
    return info;
});
//# sourceMappingURL=nodeUtilFormat.js.map