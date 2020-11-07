"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRE_SANITIZED_RUNTIME_DISPATCH_INFO = exports.PRE_SANITIZED_OPTION_VESTING_INFO = exports.PRE_SANITIZED_BALANCE_LOCK = exports.PRE_SANITIZED_STAKING_RESPONSE = exports.PRE_SANITIZED_AT = void 0;
const constants_1 = require("../test-helpers/constants");
const registries_1 = require("../test-helpers/registries");
/**
 * An 'at' object, which has not been sanitized by `sanitizeNumbers`.
 */
exports.PRE_SANITIZED_AT = {
    height: '2669784',
    hash: registries_1.kusamaRegistry.createType('BlockHash', '0x5f2a8b33c24368148982c37aefe77d5724f5aca0bcae1a599e2a4634c1f0fab2'),
};
/**
 * A dummy return value to fetchStakingLedger which has not been run through `sanitizeNumbers`.
 */
exports.PRE_SANITIZED_STAKING_RESPONSE = {
    at: exports.PRE_SANITIZED_AT,
    staking: registries_1.kusamaRegistry.createType('StakingLedger', {
        stash: '5DRihWfVSmhbk25D4VRSjacZTtrnv8w8qnGttLmfro5MCPgm',
        total: '0x0000000000000000ff49f24a6a9c00',
        active: '0x0000000000000000ff49f24a6a9100',
        unlocking: [],
        claimedRewards: [],
    }),
};
exports.PRE_SANITIZED_BALANCE_LOCK = registries_1.kusamaRegistry.createType('Vec<BalanceLock>', [
    {
        id: 'LockId',
        amount: registries_1.kusamaRegistry.createType('Balance', '0x0000000000000000ff49f24a6a9c00'),
        reasons: 'misc',
    },
]);
exports.PRE_SANITIZED_OPTION_VESTING_INFO = registries_1.kusamaRegistry.createType('Option<VestingInfo>', {
    locked: '0x0000000000000000ff49f24a6a9c00',
    perBlock: '0x0000000000000000ff49f24a6a9100',
    startingBlock: '299694200',
});
exports.PRE_SANITIZED_RUNTIME_DISPATCH_INFO = registries_1.kusamaRegistry.createType('RuntimeDispatchInfo', {
    weight: constants_1.MAX_U64,
    class: 'operational',
    partialFee: constants_1.MAX_U128,
});
//# sourceMappingURL=mockData.js.map