// Fetch contract storage

import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://ghostnet.tzkt.io/KT1W41KjtRrZghs4JzWiwKtGTmPG2G1z8byD/storage/"
    );
    return res.data;
};