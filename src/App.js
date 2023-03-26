import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './Components/Header'
import Footer from './Components/Footer'
import Loader from './Components/Loader'

import Home from "./Pages/Home.tsx"


const AppendHeaderFooter = ({ Comp }) => {
    return (
        <>
            <Navbar />
            <Comp />
            <Footer />
        </>
    )
}

function App() {

    const [loading, setLoading] = useState(false);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppendHeaderFooter Comp={Home} />,
        },
    ]);

    return (
        <div className="bg-primaryBg flex flex-col text-primaryblack font-primary pt-[20px] min-h-screen">

            {
                loading
                    ? <div className="w-full height-full flex-1 grid place-content-center">
                        <Loader />
                        <p className='text-white/50 text-xl mt-3'>Loading...</p>
                    </div>
                    : <RouterProvider router={router} />
            }
        </div>
    )
}

export default App;