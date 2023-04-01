import React from 'react'
import { useState } from 'react'

const AddSHGModal = () => {

    function handleAddress() {
        return
    }
    const [Detail, setDetail] = useState("tz1a1hUQ4U1o3hQQ7vFra9f7WA5U2FJqH8wM")

    return (
        <div className='flex flex-col bg-[#1A1A1A] w-[70%] items-center rounded-3xl border-solid border-2 border-[rgba(100,100,100,0.7)]'>
            <h1 className='text-[white] text-[30px] mt-20'>Create your own SHG</h1>
            <div className='flex flex-col w-[100%] items-center my-4'>
                <input type='text' placeholder='Enter SHG name' className='w-[55%] h-[8vh] my-2 p-2 rounded-3xl bg-[rgba(100,100,100,0.1)] text-white focus:outline-none'></input>
                <input type='text' placeholder='Enter SHG use case' className='w-[55%] h-[8vh] my-2 p-2 rounded-3xl bg-[rgba(100,100,100,0.1)] text-white focus:outline-none'></input>
                <label for='file' className='text-white w-[55%] h-[8vh] my-2 p-[1.5%] rounded-3xl bg-[rgba(100,100,100,0.1)] '>+ Upload Image</label>
                <input type='file' placeholder='+ Upload Image' accept='image/png, image/jpeg' className='hidden' id='file'></input>
                <div className='flex'>
                    <button className='text-[white] w-[55%] h-[8vh] my-1 mx-2 bg-[rgba(100,100,100,0.1)] rounded-3xl'>Your Address is {Detail}</button>
                    <button className='text-[white] w-[55%] h-[8vh] my-1 mx-2 bg-[rgba(100,100,100,0.4)] rounded-3xl' onClick={handleAddress}>Change your address</button>
                </div>
            </div>
        </div>
    )
}

export default AddSHGModal;