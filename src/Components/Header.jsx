import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";

import { connectWallet, disconnectWallet, getAccount } from "../Utils/wallet";

import Button from "./Button";
import Logo from "../Assets/LogoWhiteFilled.svg"

const Header = () => {

    const [account, setAccount] = useState(null);
    const [minifiedAddress, setMinifiedAddress] = useState("...");

    useEffect(() => {
        (async () => {
            // Get the active account
            const account = await getAccount();
            setAccount(account);
        })();
    }, []);


    const onConnectWallet = async () => {
        await connectWallet();
        const account = await getAccount();
        setAccount(account);
        navigator.clipboard.writeText(account)
        toast.success(`${account.slice(0, 5) + '...' + account.slice(-5)} connected successfully. Address copied to clipboard`, {
            position: "top-center",
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const onDisconnectWallet = async () => {
        await disconnectWallet();
        setAccount(null)
        setMinifiedAddress("...")
        toast.success(`Wallet disconnected!`, {
            position: "top-center",
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    useEffect(() => {
        if (account) {
            setMinifiedAddress(account.slice(0, 5) + '...' + account.slice(-5))
        }
    }, [account])

    return (

        <div className="bg-[#232323] flex flex-row justify-between items-center py-10 px-30 border-primaryWidth border-white/10 rounded-50 sticky top-[20px] z-50 mx-[20px] mb-[30px] box-border">
            <NavLink to="/" replace={true}>
                <div className="flex flex-row items-center justify-center gap-[15px]">
                    <img src={Logo} className="h-[40px] w-[40px] rounded-full" alt="Logo" />
                    <h1 className="text-white font-normal text-[25px] leading-[42px] text-center gotu">स्वयंसेवक</h1>
                </div>
            </NavLink >
            <ul className="flex flex-wrap gap-[15px]">
                <NavLink to="/" replace={true}>
                    <li className="text-white/70 font-medium text-[12px] leading-[18px] cursor-pointer hover:text-white transition selected:text-black">Home</li>
                </NavLink>
                <NavLink to="/explore" replace={true}>
                    <li className="text-white/70 font-medium text-[12px] leading-[18px] cursor-pointer hover:text-white transition selected:text-black">Explore</li>
                </NavLink>
                <NavLink to="/dashboard" replace={true}>
                    <li className="text-white/70 font-medium text-[12px] leading-[18px] cursor-pointer hover:text-white transition selected:text-black">Dashboard</li>
                </NavLink>
            </ul>
            <Button
                gradient={true}
                weight={"bold"}
                onClick={account ? onDisconnectWallet : onConnectWallet}
            >
                {account ? minifiedAddress : "Connect Wallet"}
            </Button>
        </div>
    )

}

export default Header;