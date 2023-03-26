import React from "react";
import { NavLink } from 'react-router-dom'

import Button from "./Button";
import Logo from "../Assets/LogoWhiteFilled.svg"

const Navbar = () => {

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
            <Button gradient={true} weight={"bold"}>Connect Wallet</Button>
        </div>
    )

}

export default Navbar;