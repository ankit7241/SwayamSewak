import { tezos } from "./tezos";

export const buyTicketOperation = async (amountToSend) => {
    try {
        const contractInstance = await tezos.wallet.at("KT1W41KjtRrZghs4JzWiwKtGTmPG2G1z8byD");
        const op = await contractInstance.methods.add_bidder().send({
            amount: `${amountToSend}`,
            mutez: false,
        });
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
};

export const endGameOperation = async () => {
    try {
        const contractInstance = await tezos.wallet.at("KT1W41KjtRrZghs4JzWiwKtGTmPG2G1z8byD");
        const op = await contractInstance.methods.finalizeAuc().send();
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
};

