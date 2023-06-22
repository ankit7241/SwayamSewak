import axios from "axios";

export const fetchStorage = async () => {
	try {
		const res = await axios.get(
			"https://api.ghostnet.tzkt.io/v1/contracts/KT1LA3jcURSkX2VCHwaW89vSo7pNpnjKUrpi/storage"
		);
		return res.data;
	} catch (err) {
		throw err;
	}
};
