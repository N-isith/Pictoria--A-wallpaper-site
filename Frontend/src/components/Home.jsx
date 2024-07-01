import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Imagetab from "./ImageTab.jsx";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [sortbyClick, setsortbyclick] = useState(true);

    const handleSortbyClick = () => {
        setsortbyclick(!sortbyClick);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <Navbar />
            <div id="maindiv"
                className="flex-1 pt-16"
                onClick={(c) => { if (c.target.id === 'maindiv' || c.target.id === '2nddiv') closeDropdown(); }}>
                <div id="2nddiv" className="flex text-neutral-100 ml-16 gap-8">
                    <button className="text-xl font-bold px-5 py-2 bg-slate-800 rounded-md hover:bg-emerald-700 hover:duration-300 focus:bg-emerald-700">For You</button>
                    <div className="" onClick={toggleDropdown}>
                        <button className="flex text-xl bg-slate-800 rounded-md w-40 px-8 py-2 hover:bg-emerald-700 hover:duration-300 focus:bg-emerald-700" onClick={handleSortbyClick} >
                            Sort By {sortbyClick ?
                                (
                                    <IoMdArrowDropdown className="mt-1.5 ml-2.5 size-5" />
                                )
                                :
                                (
                                    <MdArrowDropUp className="mt-1 ml-2 size-6" />
                                )
                            }
                        </button>
                        <div className={`absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-40 ${isOpen ? 'transition-all duration-300 opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {isOpen && (
                                <>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-md">Newest</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Most Viewed</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-md">Top rated</a>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Homepage content */}
                <div className="mt-8 mb-5">
                    <Imagetab />
                </div>
            </div>
            <Footer />
        </>
    );
}
