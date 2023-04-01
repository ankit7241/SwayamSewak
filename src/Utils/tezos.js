import { useContext } from "react";

import { TezosToolkit } from "@taquito/taquito";

import { AuthContext } from "./AuthProvider";


const { wallet } = useContext(AuthContext);


export const tezos = new TezosToolkit("https://ghostnet.tezos.marigold.dev");

// Specify wallet provider for Tezos instance
tezos.setWalletProvider(wallet);