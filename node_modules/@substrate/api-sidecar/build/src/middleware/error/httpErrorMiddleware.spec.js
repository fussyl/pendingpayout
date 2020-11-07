"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrorConstructor = require("http-errors");
const http_errors_1 = require("http-errors");
const httpErrorMiddleware_1 = require("./httpErrorMiddleware");
const testTools_1 = require("./testTools");
const httpErrorMiddlewareCallsNextWithErr = testTools_1.callsNextWithErr(httpErrorMiddleware_1.httpErrorMiddleware);
const httpErrorMiddlewareCatchesErrWithStatus = testTools_1.catchesErrWithStatus(httpErrorMiddleware_1.httpErrorMiddleware);
describe('httpErrorMiddleware', () => {
    httpErrorMiddlewareCallsNextWithErr('Error', new Error('This is an error'));
    httpErrorMiddlewareCallsNextWithErr('IBasicError', {
        error: 'basic error',
    });
    httpErrorMiddlewareCallsNextWithErr('ILegacyError', {
        error: 'legacy error',
        statusCode: 500,
    });
    httpErrorMiddlewareCallsNextWithErr('ITxLegacyError', {
        data: 'tx could not be processed',
        cause: 'unknown',
        error: 'tx error',
    });
    httpErrorMiddlewareCallsNextWithErr('nonsense object', {
        veryImportantMessage: 'NOT',
    });
    httpErrorMiddlewareCatchesErrWithStatus('HttpErrorConstructor 404', HttpErrorConstructor(404, 'http error!'), 404);
    httpErrorMiddlewareCatchesErrWithStatus('BadRequest', new http_errors_1.BadRequest('bad request'), 400);
    httpErrorMiddlewareCatchesErrWithStatus('InternalServerError', new http_errors_1.InternalServerError('internal error'), 500);
    testTools_1.callsNextWithSentHeaders(httpErrorMiddleware_1.httpErrorMiddleware, new http_errors_1.InternalServerError('internal error'));
});
//# sourceMappingURL=httpErrorMiddleware.spec.js.map