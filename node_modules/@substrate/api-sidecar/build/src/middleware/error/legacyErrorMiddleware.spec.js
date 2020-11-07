"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const HttpErrorConstructor = require("http-errors");
const legacyErrorMiddleware_1 = require("./legacyErrorMiddleware");
const testTools_1 = require("./testTools");
const legacyErrorMiddlewareCallsNextWithErr = testTools_1.callsNextWithErr(legacyErrorMiddleware_1.legacyErrorMiddleware);
const legacyErrorMiddlewareCatchesErrWithResponse = testTools_1.catchesErrWithResponse(legacyErrorMiddleware_1.legacyErrorMiddleware);
describe('legacyErrorMiddleware', () => {
    legacyErrorMiddlewareCallsNextWithErr('Error', new Error('This is an error'));
    legacyErrorMiddlewareCallsNextWithErr('BadRequest', new http_errors_1.BadRequest('bad request'));
    legacyErrorMiddlewareCallsNextWithErr('InternalServerError (http-error which extends Error)', new http_errors_1.InternalServerError('internal error'));
    legacyErrorMiddlewareCallsNextWithErr('nonsense object', {
        veryImportantMessage: 'NOT!',
    });
    legacyErrorMiddlewareCatchesErrWithResponse(
    // Because ITxLegacyError extends IBasicLegacyError, txErrorMiddleware
    // should be put before legacyErrorMiddleware
    'ITxLegacyError (extends IBasicLegacyError)', {
        data: 'tx could not be processed',
        cause: 'unknown',
        error: 'tx error',
    }, 500, new http_errors_1.InternalServerError('tx error'));
    legacyErrorMiddlewareCatchesErrWithResponse('IBasicError', {
        error: 'basic error',
    }, 500, new http_errors_1.InternalServerError('basic error'));
    legacyErrorMiddlewareCatchesErrWithResponse('ILegacyError', {
        error: 'Server refuses to brew coffee.',
        statusCode: 418,
    }, 418, HttpErrorConstructor(418, 'Server refuses to brew coffee.'));
    testTools_1.callsNextWithSentHeaders(legacyErrorMiddleware_1.legacyErrorMiddleware, {
        error: 'Server refuses to brew coffee.',
        statusCode: 418,
    });
});
//# sourceMappingURL=legacyErrorMiddleware.spec.js.map