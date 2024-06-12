import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function SignUp({ closePopup }) {

    const navigate = useNavigate();

    useEffect(() => {
        // Add class to disable scrolling
        document.body.style.overflow = 'hidden';

        // Cleanup function to remove class
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const closemodel = () => {
         closePopup();
    };

    return (
        <div
            id="maincnt"
            onClick={closemodel}
            className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed flex justify-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="bg-slate-800 p-10 rounded-2xl mx-auto my-auto relative">

                <button className="bg-slate-700 px-1.5 py-1.5 rounded-md text-amber-300 font-bold hover:outline outline-1 absolute top-6 right-6"
                    onClick={closePopup}
                ><IoClose />
                </button>

                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Register</h1>
                <form className="text-amber-300 text-start text-lg">
                    <div className="mb-5">
                        <label htmlFor="userName" className="block mb-1.5">Username :</label>
                        <input
                            type="text"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 h-10 ps-3 border-neutral-200 focus:bg-slate-900 "
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1.5">Create Password :</label>
                        <input
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="reEnterPassword" className="block mb-1.5">Re-Enter-Password :</label>
                        <input
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                        />
                    </div>
                    <button type="submit" className="bg-slate-700  px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
