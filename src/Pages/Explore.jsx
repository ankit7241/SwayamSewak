import React from 'react';

import SHGListItem from "../Components/Explore/SHGListItem"

import AOS from 'aos';
AOS.init();

export default function Explore() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full flex-1 px-20'>

            <div className="flex flex-col justify-center items-center gap-[30px] w-full z-[inherit]">

                <h2 className="font-mammoth text-primaryBlack font-medium text-3xl text-center">
                    Find SHGs
                </h2>

                <div
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration={500}
                    data-aos-delay={0}
                    className='flex flex-col justify-center items-center px-15 md:px-[50px] xl:px-[100px] gap-[20px]'>

                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />
                    <SHGListItem />

                </div>

            </div>

        </div>
    )
}
