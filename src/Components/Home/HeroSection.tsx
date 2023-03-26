import React from "react";

import Button from '../Button';
import Arrow from "../../Assets/Arrow.svg";

const HeroSection = () => {

    return (
        <div className='bg-primaryBlack flex justify-center items-center py-[50px] h-[var(--hero-section-height)] w-full rounded-30 z-[inherit]'>
            <div
                style={{ "--IMG-URL": `url('${Arrow}')` } as React.CSSProperties}
                className={`w-full max-w-[1300px] h-full max-h-[700px] flex flex-col justify-center items-center hero_section relative`}>

                <div className='flex flex-row justify-between items-center w-full h-1/4 px-50'>
                    <p className='font-normal text-[25px] leading-[38px] text-center w-[310px] text-white'>Blockchain-based safe & secure SHGs</p>
                    <p className='font-normal text-[25px] leading-[38px] text-center w-[310px] text-white'>Lend tokens without any collateral</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-[10px] w-full h-full'>
                    <p className='font-bold text-[13px] leading-4 text-white/20 tracking-wider'>INTRODUCING</p>
                    <h1 className='gotu text-[80px] leading-[130px] text-center text-white'>स्वयंसेवक</h1>
                </div>

                <div className='flex flex-row justify-between items-center w-full h-1/4 px-50'>
                    <p className='font-normal text-[25px] leading-[38px] text-center w-[310px] text-white'>Deposit tokens each month in the SHG</p>

                    <div className='flex flex-row items-center justify-center p-0 gap-[20px]'>

                        <Button gradient={true} weight="bold">Create your own SHG</Button>
                        <Button gradient={false} weight="semibold">Dashboard</Button>

                    </div>

                    <p className='font-normal text-[25px] leading-[38px] text-center w-[310px] text-white'>Democratically vote for every decision within the SHG</p>
                </div>

            </div>
        </div>
    )
};

export default HeroSection;