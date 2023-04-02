import React, { useState } from "react";
import { toast } from "react-toastify";

import { tezos } from "../../Utils/tezos";

import Button from "../Button";
import Loader from "../Loader";

export default function ProposalModal({ openProposalModal, setOpenDepositModal, setOpenRequestModal, setOpenProposalModal }) {

    const [loading, setLoading] = useState(false);
    const [proposalName, setProposalName] = useState("");
    const [proposalDesc, setProposalDesc] = useState("");
    const [amountToAsk, setAmountToAsk] = useState("");

    const sendYes = async () => {
        try {
            const contractInstance = await tezos.wallet.at(
                "KT1LcSjT7KYfc3bkAv6o6cu2rPwgbwi5r49d"
            );

            const op = await contractInstance.methods.votingInFavour(openProposalModal).send();
            await op.confirmation(1);

            toast.success(`Voting in favour done!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            console.log("Voting in favour done");
        } catch (err) {
            throw err;
        }

    }

    const sendNo = async () => {
        try {
            const contractInstance = await tezos.wallet.at(
                "KT1LcSjT7KYfc3bkAv6o6cu2rPwgbwi5r49d"
            );

            const op = await contractInstance.methods.votingAgainst(openProposalModal).send();
            await op.confirmation(1);

            toast.success(`Voting against it done!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            console.log("Voting in favour done");
        } catch (err) {
            throw err;
        }
    }

    return (
        <div
            onClick={() => {
                setOpenDepositModal(false);
                setOpenRequestModal(false);
                setOpenProposalModal(null);
            }}
            className="absolute top-0 left-0 z-[100] w-screen h-screen flex justify-center items-center bg-primaryBlack/90 sm: md:px-20"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center px-20 py-[100px] gap-[50px] bg-primaryBlack border-[3px] border-white/50 rounded-30 lg:w-3/4"
            >

                {
                    loading
                        ? <Loader varient="line" theme="dark" text={true} />
                        : <>
                            <h3 className="font-medium text-2xl text-white font-mammoth">Porposal Details</h3>

                            <div className="flex flex-col items-center p-0 gap-[20px] w-full lg:w-3/4">


                                <div className="flex flex-row items-center justify-center w-full">
                                    <Button
                                        varient="light"
                                        gradient={false}
                                        weight={"bold"}
                                        style="w-full"
                                        onClick={sendYes}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        varient="light"
                                        gradient={false}
                                        weight={"bold"}
                                        style="w-full"
                                        onClick={sendNo}
                                    >
                                        No
                                    </Button>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}
