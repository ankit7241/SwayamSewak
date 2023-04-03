import axios from "axios";

export const fetchStorage = async () => {
	try {
		const res = await axios.get(
			"https://api.ghostnet.tzkt.io/v1/contracts/KT19Bwe6B2s5b79rH5VW8gghiEFL3vfqXRRP/storage"
		);
		return res.data;
	} catch (err) {
		throw err;
	}
};
