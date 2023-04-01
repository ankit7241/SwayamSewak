import React, { useState, createContext } from 'react';
import { BeaconWallet } from "@taquito/beacon-wallet";

const AuthContext = createContext();


export default function AuthHolder(props) {

    const [address, setAddress] = useState(null);

    const wallet = new BeaconWallet({
        name: "SwayamSewak",
        preferredNetwork: "ghostnet",
    });

    const getAccount = async () => {
        const activeAccount = await wallet.client.getActiveAccount();
        if (activeAccount) {
            return activeAccount.address;
        } else {
            return "";
        }
    };
    const connectWallet = async () => {
        wallet.disconnect()
        await wallet.requestPermissions({ network: { type: "ghostnet" } });

        const account = await getAccount();
        setAddress(account);
    };
    const disconnectWallet = async () => {
        wallet.disconnect()
        await wallet.clearActiveAccount();

        setAddress(null)
    };

    return (
        <AuthContext.Provider value={{
            wallet, address, setAddress, connectWallet, disconnectWallet, getAccount
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext }