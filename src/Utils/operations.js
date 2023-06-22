import { tezos } from "./tezos";

export const add_Shg = async (amountToSend) => {
	try {
		const contractInstance = await tezos.wallet.at(
			"KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi"
		);
		const op = await contractInstance.methods
			.add_shg("Ankit", "lkdsfjdklsdjfkl")
			.send();
		await op.confirmation(1);
	} catch (err) {
		throw err;
	}
};

export const add_funds = async (_shgId) => {
	try {
		const contractInstance = await tezos.wallet.at(
			"KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi"
		);
		const op = await contractInstance.methods.add_funds(_shgId).send();
		await op.confirmation(1);
	} catch (err) {
		throw err;
	}
};

export const proposal = async (
	_shgId,
	_proposalName,
	_proposalDetailCID,
	_amount
) => {
	try {
		const contractInstance = await tezos.wallet.at(
			"KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi"
		);
		const op = await contractInstance.methods
			.proposal(_shgId, _proposalName, _proposalDetailCID, _amount)
			.send();
		await op.confirmation(1);
	} catch (err) {
		throw err;
	}
};

export const votingInFavour = async (_proposalId) => {
	try {
		const contractInstance = await tezos.wallet.at(
			"KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi"
		);
		const op = await contractInstance.methods
			.votingInFavour(_proposalId)
			.send();
		await op.confirmation(1);
	} catch (err) {
		throw err;
	}
};

export const votingAgainst = async (_proposalId) => {
	try {
		const contractInstance = await tezos.wallet.at(
			"KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi"
		);
		const op = await contractInstance.methods.votingAgainst(_proposalId).send();
		await op.confirmation(1);
	} catch (err) {
		throw err;
	}
};
