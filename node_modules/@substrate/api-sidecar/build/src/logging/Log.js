"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const winston_1 = require("winston");
const transports_1 = require("./transports");
// Note: there is a `fileTransport` that gets added in main.
const transports = [transports_1.consoleTransport()];
/**
 * Access a singleton winston.Logger that will be intialized on first use.
 */
class Log {
    static create() {
        if (this._logger) {
            return this._logger;
        }
        this._logger = winston_1.createLogger({
            transports,
            exitOnError: false,
            exceptionHandlers: transports,
        });
        return this._logger;
    }
    /**
     * Sidecar's winston.Logger.
     */
    static get logger() {
        return this._logger || this.create();
    }
}
exports.Log = Log;
//# sourceMappingURL=Log.js.map