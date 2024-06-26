import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <div className="">
            <hr className="w-11/12 mx-auto my-5 border-t-2 border-indigo-500" />
            <div className="text-center">
                <a href="" className="text-center text-emerald-800 font-extrabold text-4xl" onClick={() => {navigate('/')}}>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</a>
            </div>
            <hr className="w-10/12 mx-auto my-5 border-t-2 border-indigo-500" />
            <div>
                <ul className="flex justify-center gap-10 font-bold text-neutral-100 text-lg">
                    <li className="hover:text-emerald-800 hover:duration-200"><a href="">Home</a></li>
                    <li className="hover:text-emerald-800 hover:duration-200"><a href="">About Us</a></li>
                    <li className="hover:text-emerald-800 hover:duration-200"><a href="">Help</a></li>
                </ul>
            </div>
            <hr className="w-8/12 mx-auto my-5 border-t-2 border-indigo-500" />
            <div>
                <div>
                    <ul className="flex justify-center gap-10 font-bold text-neutral-100 text-3xl">
                        <li className="hover:text-emerald-800 hover:duration-200"><a href="https://www.facebook.com/"><FaSquareFacebook /></a></li>
                        <li className="hover:text-emerald-800 hover:duration-200"><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                        <li className="hover:text-emerald-800 hover:duration-200"><a href="https://www.whatsapp.com/"><FaWhatsapp /></a></li>
                        <li className="hover:text-emerald-800 hover:duration-200"><a href="https://x.com"><BsTwitterX /></a></li>
                    </ul>
                </div>
            </div>
            <hr className="w-6/12 mx-auto my-5 border-t-2 border-indigo-500" />

        </div>
    )
}
