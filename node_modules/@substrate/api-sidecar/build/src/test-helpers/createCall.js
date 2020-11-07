"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCall = void 0;
const util_1 = require("@polkadot/util");
const decorated_1 = require("./metadata/decorated");
/**
 * Create a polkadot-js Call using decorated metadata. Useful for testing that
 * needs a Call.
 *
 * TODO: This should be switched to polkadotRegistry as we will phase out kusamaRegisty.
 *
 * @param pallet name of pallet in metadata (lowercase)
 * @param method name of method in metadata (lowercase)
 * @param args arguments to call as an object
 */
function createCall(pallet, method, args) {
    // Get the call signature
    const call = decorated_1.decoratedKusamaMetadata.tx[pallet][method];
    return call(
    // Map over arguments to call and key into the users args to get the values
    // We are making the assumption that meta.args will have correct ordering
    ...call.meta.args.map((arg) => {
        return args[util_1.stringCamelCase(arg.name.toString())];
    }));
}
exports.createCall = createCall;
//# sourceMappingURL=createCall.js.map