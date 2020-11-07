const axios = require('axios');

const pendingPayouts = async (addr, depth) => {
    const endpoint = `http://localhost:8080/accounts/${addr}/staking-payouts?depth=${depth}`
    const response = await axios.get(endpoint);
    const allPending = response.data.erasPayouts.reduce((accAllPending, eraPayout) => {
        // if the address doesn't have any payout, just return 0
        if(eraPayout.payouts == null) return 0;
        const eraPending = eraPayout.payouts.reduce((accEraPending, payout) => {
           return payout.claimed ? accEraPending : accEraPending + Number(payout.nominatorStakingPayout);
        }, 0);
        return accAllPending + eraPending;
    }, 0);
    return allPending;
}

const main = async () => {
    try {
        const addr = process.argv[2];
        const depth = process.argv[3] || 3;
        const allPending = await pendingPayouts(addr, depth);
        console.log(`>>> pending payouts: ${allPending} Planck.`);
    } catch (err) {
        console.log('>>> query failed: ', err);
    }
}

main()