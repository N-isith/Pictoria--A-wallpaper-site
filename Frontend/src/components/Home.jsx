import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx";
import Imagetab from "./ImageTab.jsx";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Navbar />
            <div className="flex-1 pt-16">
                <div className="flex text-neutral-100 ml-16 gap-8">
                    <button className="text-xl font-bold px-5 py-2 bg-slate-800 rounded-md hover:bg-emerald-700 hover:duration-300 focus:bg-emerald-700">For You</button>
                    <div className="" onClick={toggleDropdown}>
                        <button className="flex text-xl bg-slate-800 rounded-md w-40 px-8 py-2 hover:bg-emerald-700 hover:duration-300 focus:bg-emerald-700" onClick={toggleDropdown} >
                            Sort By <IoMdArrowDropdown className="mt-1.5 ml-2" />
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
                    <Imagetab/>
                </div>
            </div>
            <Footer />
        </>
    );
}
