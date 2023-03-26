// Setup Tezos toolkit
import { TezosToolkit } from "@taquito/taquito";
import { wallet } from "./wallet";

export const tezos = new TezosToolkit("https://ghostnet.tezos.marigold.dev");

// Specify wallet provider for Tezos instance
tezos.setWalletProvider(wallet);