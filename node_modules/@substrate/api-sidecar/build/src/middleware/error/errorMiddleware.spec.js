"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const errorMiddleware_1 = require("./errorMiddleware");
const testTools_1 = require("./testTools");
const errorMiddlewareCallsNextWithErr = testTools_1.callsNextWithErr(errorMiddleware_1.errorMiddleware);
const errorMiddlewareCatchesErrWithStatus = testTools_1.catchesErrWithStatus(errorMiddleware_1.errorMiddleware);
describe('errorMiddleware', () => {
    errorMiddlewareCallsNextWithErr('ILegacyError', {
        error: 'legacy error',
        statusCode: 500,
    });
    errorMiddlewareCallsNextWithErr('IBasicError', {
        error: 'basic error',
    });
    errorMiddlewareCallsNextWithErr('ITxLegacyError', {
        data: 'tx could not be processed',
        cause: 'unknown',
        error: 'tx error',
    });
    errorMiddlewareCallsNextWithErr('nonsense object', {
        veryImportantMessage: 'NOT',
    });
    errorMiddlewareCatchesErrWithStatus('Error', new Error('This is an error'), 500);
    errorMiddlewareCatchesErrWithStatus('BadRequest (http-error which extends Error) (code gets changed to 500)', new http_errors_1.BadRequest('bad request'), 500);
    errorMiddlewareCatchesErrWithStatus('InternalServerError (http-error which extends Error)', new http_errors_1.InternalServerError('internal error'), 500);
    testTools_1.callsNextWithSentHeaders(errorMiddleware_1.errorMiddleware, new Error('This is an error'));
});
//# sourceMappingURL=errorMiddleware.spec.js.map