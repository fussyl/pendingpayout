"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const HttpErrorConstructor = require("http-errors");
const internalErrorMiddleware_1 = require("./internalErrorMiddleware");
const testTools_1 = require("./testTools");
const internalErrorMiddlewareCatchesErrWithResponse = testTools_1.catchesErrWithResponse(internalErrorMiddleware_1.internalErrorMiddleware);
describe('internalErrorMiddleware', () => {
    internalErrorMiddlewareCatchesErrWithResponse('ITxLegacyError', {
        data: 'tx could not be processed',
        cause: 'unknown',
        error: 'tx error',
    }, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('IBasicError', {
        error: 'basic error',
    }, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('ILegacyError', {
        error: 'Server refuses to brew coffee.',
        statusCode: 418,
    }, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('Error', new Error('This is an error'), 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('BadRequest', new http_errors_1.BadRequest('bad request'), 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('InternalServerError', new http_errors_1.InternalServerError('internal error'), 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('HttpErrorConstructor 404', HttpErrorConstructor(404, 'http error!'), 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('string', 'hello', 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('null', null, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('undefined', undefined, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('-1', -1, 500, new http_errors_1.InternalServerError('Internal Error'));
    internalErrorMiddlewareCatchesErrWithResponse('random object', { brawndo: 'got what plants crave' }, 500, new http_errors_1.InternalServerError('Internal Error'));
    testTools_1.callsNextWithSentHeaders(internalErrorMiddleware_1.internalErrorMiddleware, [
        { err: 'its got electrolyte' },
    ]);
});
//# sourceMappingURL=internalErrorMiddleware.spec.js.map