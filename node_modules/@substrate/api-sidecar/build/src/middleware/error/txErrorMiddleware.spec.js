"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const testTools_1 = require("./testTools");
const txErrorMiddleware_1 = require("./txErrorMiddleware");
const txErrorMiddlewareCallsNextWithErr = testTools_1.callsNextWithErr(txErrorMiddleware_1.txErrorMiddleware);
const txErrorMiddlewareCatchesErrWithResponse = testTools_1.catchesErrWithResponse(txErrorMiddleware_1.txErrorMiddleware);
describe('txErrorMiddleware', () => {
    txErrorMiddlewareCallsNextWithErr('Error', new Error('This is an error'));
    txErrorMiddlewareCallsNextWithErr('BadRequest', new http_errors_1.BadRequest('bad request'));
    txErrorMiddlewareCallsNextWithErr('InternalServerError (http-error which extends Error)', new http_errors_1.InternalServerError('internal error'));
    txErrorMiddlewareCallsNextWithErr('nonsense object', {
        cat: 'in a hat',
    });
    txErrorMiddlewareCallsNextWithErr('ILegacyError', {
        error: 'legacy error',
        statusCode: 500,
    });
    txErrorMiddlewareCallsNextWithErr('IBasicError', {
        error: 'basic error',
    });
    txErrorMiddlewareCatchesErrWithResponse('ITxLegacyError (with data)', {
        data: 'some data!',
        cause: 'a cause!',
        error: 'an error!',
    }, 500, {
        code: 500,
        data: 'some data!',
        cause: 'a cause!',
        error: 'an error!',
    });
    txErrorMiddlewareCatchesErrWithResponse('ITxLegacyError (without data)', {
        cause: 'a cause!',
        error: 'an error!',
    }, 500, {
        code: 500,
        cause: 'a cause!',
        error: 'an error!',
    });
    testTools_1.callsNextWithSentHeaders(txErrorMiddleware_1.txErrorMiddleware, {
        data: 'some data!',
        cause: 'a cause!',
        error: 'an error!',
    });
});
//# sourceMappingURL=txErrorMiddleware.spec.js.map