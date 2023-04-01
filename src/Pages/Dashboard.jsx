import React, { useState, useEffect, useContext } from 'react'
import { toast } from "react-toastify";

import Button from "../Components/Button";
import Loader from "../Components/Loader";
import { AuthContext } from "../Utils/AuthProvider";

export default function Dashboard() {

    const { address, connected, connectWallet } = useContext(AuthContext);

    // const [address, setAddress] = useState("...");
    const [loading, setLoading] = useState(false);
    const [shgName, setShgName] = useState("Rajasthan Mahila SHG");
    const [shgDesc, setShgDesc] = useState("This SHG is dedicated to women of well-off household. It enables them to save money and invest in cryptocurrencies & Stock market. Profits are equally divided among the SHG members.");
    const [shgEst, setShgEst] = useState(1680201352064);
    const [activity, setActivity] = useState([]);
    const [members, setMembers] = useState(
        ["0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee", "0x4d4D....15e5Ee"]
    );

    useEffect(() => {
        document.body.style.overflowY = "scroll";
    }, [])


    const onConnectWallet = async () => {
        await connectWallet();

        navigator.clipboard.writeText(address)
        toast.success(`${address && address.slice(0, 5) + '...' + address.slice(-5)} connected successfully. Address copied to clipboard`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const CopyAddress = () => {
        navigator.clipboard.writeText(address)
        toast.success(`Address copied to clipboard!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const FormatFullDateString = (mill) => {
        const Day = new Date(mill).getDate();
        const Month = new Date(mill).toLocaleString('en-us', { month: 'long' })
        const Year = new Date(mill).getFullYear();

        return (Day + " " + Month + " " + Year)
    }

    const OpenDepositFunds = () => {

    }

    const OpenRequestFunds = () => {

    }

    const OpenLeaveSHG = () => {

    }

    return (

        connected
            ? <div className='flex flex-col justify-center items-center gap-[20px] w-full h-full flex-1 px-10 lg:px-20 z-[inherit]'>

                <h2 className="font-mammoth text-primaryBlack font-medium text-3xl text-center">
                    GM (<span onClick={CopyAddress} className='text-primaryBlack/90 cursor-pointer'>{address && address.length ? address.slice(0, 2) + '...' + address.slice(-2) : "---"}</span>) <span className='font-primary'> &#128075;</span>
                </h2>

                <div className="flex flex-col px-10 lg:px-30 w-full z-[inherit] flex-1">

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration={1000}
                        data-aos-delay={200}
                        data-aos-once={true}
                        className='flex flex-col items-center flex-1 px-15 md:px-30 lg:px-50 py-20 gap-[30px] bg-primaryBlack rounded-30 w-full h-[600px] min-h-[600px] max-h-[600px] z-[inherit]'
                    >
                        <div className='flex flex-col items-center p-0 gap-[5px]'>

                            <h3 className='font-bold text-2xl text-white'>{shgName}</h3>
                            <p className='font-medium text-xs text-center text-white/50 w-3/4'>{shgDesc}</p>

                        </div>

                        <hr className='w-4/5' />

                        <div className='w-full h-full max-h-[430px] flex-1 flex flex-col lg:flex-row justify-center p-0 gap-[50px]'>

                            <div className='flex flex-col items-center p-0 gap-[20px] w-1/4 flex-1'>

                                <h4 className='font-medium text-xl text-white/80'>Options:</h4>

                                <div className='flex flex-col items-center p-0 gap-[10px] h-1/2'>
                                    <button
                                        onClick={OpenDepositFunds}
                                        className="cursor-pointer flex items-center justify-center py-10 px-20 border-primaryWidth rounded-[15px] bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105 transition font-primary font-medium text-[15px] leading-5 text-white/70 hover:text-white w-full"
                                    >
                                        Deposit funds
                                    </button>
                                    <button
                                        onClick={OpenRequestFunds}
                                        className="cursor-pointer flex items-center justify-center py-10 px-20 border-primaryWidth rounded-[15px] bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105 transition font-primary font-medium text-[15px] leading-5 text-white/70 hover:text-white w-full"
                                    >
                                        Request for loan
                                    </button>
                                    <button
                                        onClick={OpenLeaveSHG}
                                        className="cursor-pointer flex items-center justify-center py-10 px-20 border-primaryWidth rounded-[15px] bg-red-600/20 border-red-600/50 hover:bg-red-600/30 hover:scale-105 transition font-primary font-medium text-[15px] leading-5 text-red-600 w-full"
                                    >
                                        Leave SHG
                                    </button>
                                </div>

                                <div>
                                    <p className='text-medium text-sm text-center text-white/30'>Number of Members:</p>
                                    <p className='text-medium text-sm text-center text-white/70'>{members.length} People</p>
                                </div>

                                <div>
                                    <p className='text-medium text-sm text-center text-white/30'>SHG established on:</p>
                                    <p className='text-medium text-sm text-center text-white/70'>
                                        {FormatFullDateString(shgEst)}
                                    </p>
                                </div>

                            </div>

                            <div className='flex flex-col items-center p-0 gap-[20px] w-1/2 flex-2'>
                                <h4 className='font-medium text-xl text-white/80'>Recent Activity:</h4>

                                <div className={`flex flex-col items-center p-0 gap-[10px] h-full max-h-[380px] overflow-x-hidden overflow-y-auto ${loading ? "justify-center" : (!activity || !activity.length) && "justify-center"}`}>

                                    {loading
                                        ? <Loader varient='line' theme='dark' text={true} />
                                        : activity && activity.length
                                            ? activity.map((item) => {
                                                return (
                                                    <>
                                                        <p className="cursor-pointer text-center py-[7px] px-20 border-primaryWidth rounded-[15px] bg-white/5 border-white/10 hover:bg-white/10 transition text-[15px] leading-5 text-white/50 hover:text-white/80 w-full">{item}</p>
                                                        <p className="mt-7 text-center text-sm text-white/30 w-full">No more activity found</p>
                                                    </>
                                                )
                                            })
                                            : <p className="text-center text-sm text-white/30 w-full">No activity found</p>
                                    }


                                </div>

                            </div>

                            <div className='flex flex-col items-center p-0 gap-[20px] w-1/4 flex-1'>
                                <h4 className='font-medium text-xl text-white/80'>Members:</h4>

                                <div className='flex flex-col items-stretch p-0 pr-2 gap-[10px] max-h-[380px] overflow-y-auto'>

                                    {members.map((item) => {
                                        return (
                                            <p className="cursor-pointer text-center py-[7px] px-20 border-primaryWidth rounded-[15px] bg-white/5 border-white/10 hover:bg-white/10 transition text-[15px] leading-5 text-white/50 hover:text-white/80 w-full">{item}</p>
                                        )
                                    })}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            : <div className='border-box w-screen min-h-[calc(100vh-250px)] max-h-[calc(100vh-250px)] gap-5 lg:gap-10 flex flex-col justify-center items-center'>
                <p className='font-mammoth text-primaryBlack/90 text-5xl font-bold text-center'>OOPS!</p>
                <p className='text-primaryBlack/70 text-2xl font-medium lg:w-1/2 text-center'>
                    Looks like you are not connected with your wallet. Connect with your wallet to view your SHG dashboard.
                </p>

                <Button varient="dark" gradient={true} weight={"bold"} onClick={onConnectWallet}>Connect Wallet</Button>
            </div>

    )
}
