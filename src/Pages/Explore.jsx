import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import SHGListItem from "../Components/Explore/SHGListItem"
import AddShgModal from "../Components/Explore/AddShgModal"
import Loader from '../Components/Loader';
import Button from '../Components/Button';

import AOS from 'aos';
AOS.init();

export default function Explore() {

    const { search } = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [openAddSHG, setOpenAddSHG] = useState(false)
    const [allShgDetails, setAllShgDetails] = useState(null)

    // Checking and setting if Add SHG is in URL Params
    useEffect(() => {
        setOpenAddSHG(search.replace("?", "").split("&").includes("add-shg=true"))
    }, [search])

    // On toggle of Modal, change the scroll mode of body
    useEffect(() => {
        if (openAddSHG) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "scroll";
        }
    }, [openAddSHG])

    // Fetch the SHG details
    const FetchTheData = async () => {
        // Fetch the data from tezos here
        const data = [{
            name: "Rajasthan Mahila SHG",
            description: "This SHG is dedicated to women of well-off household. It enables them to save money and invest in cryptocurrencies & Stock market. Profits are equally divided among the SHG members.",
            members: ["1", "2", "3"],
            established: "1679907247704",
            slug: "Rajasthan-Mahila-SHG"
        }];
        return data;
    }

    // Call the function upon first render
    useEffect(() => {
        setLoading(true)

        FetchTheData()
            .then((data) => {
                setAllShgDetails(data)
            })

        setLoading(false)
    }, [])

    return (
        <div className='flex flex-col justify-center items-center w-full h-full flex-1 px-20'>

            <div className="flex flex-col items-center gap-[30px] w-full flex-1 z-[inherit]">

                <h2 className="font-mammoth text-primaryBlack font-medium text-3xl text-center">
                    Find SHGs
                </h2>

                <div
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration={500}
                    data-aos-delay={0}
                    className="flex flex-col justify-start items-center px-15 md:px-[50px] xl:px-[100px] gap-[20px]">

                    {
                        loading
                            ? <div className="w-full h-full flex-1 grid place-content-center">
                                <Loader varient="full" theme='light' />
                                <p className='text-primaryBlack/50 text-xl font-medium mt-3'>Loading...</p>
                            </div>

                            : allShgDetails && allShgDetails.length
                                ? allShgDetails.map((item, index) => {
                                    return (
                                        <SHGListItem
                                            key={index}
                                            ShgName={item.name}
                                            ShgDesc={item.description}
                                            members={item.members.length}
                                            established={item.established}
                                            slug={item.slug}
                                        />
                                    )
                                })
                                : "No SHGs Found"

                    }
                </div>

                <div className='flex flex-col justify-center items-center gap-[10px]'>
                    <p className='font-semibold text-lg text-primaryBlack/50'>Unable to find SHG for your needs?</p>
                    <Button
                        varient="dark"
                        gradient={true}
                        weight={"bold"}
                        onClick={() => navigate("/explore?add-shg=true")}
                    >
                        Create your own SHG
                    </Button>
                </div>

            </div>

            {openAddSHG && <AddShgModal setOpenAddSHG={setOpenAddSHG} />}

        </div>
    )
}
