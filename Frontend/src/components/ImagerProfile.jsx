import React from "react";
import Footer from "./Footer";
import { MdBookmarks } from "react-icons/md";
import { PiUploadSimpleBold } from "react-icons/pi";
import Imagetab from "./ImageTab";

export default function ImagerProfile() {
    return (
        <>
            <div className="py-4 text-center text-emerald-800 font-extrabold text-5xl">
                <a href=""><h1 onClick={() => { navigate('/') }}>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</h1></a>
            </div>
            <div>
                <div className="bg-slate-700 flex justify-start mx-16 p-5 pe-10 rounded-md">
                    <img
                        src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
                        alt="profile image"
                        className="w-32 h-32"
                    />
                    <div className="">
                        <h2 className="text-neutral-200 text-3xl font-bold mt-5 ml-4">Nisitha Lakshan</h2>
                        <h4 className="text-green-300 text-lg ps-0.5 mt-1 ml-4">nisithalakshan94@gmail.com</h4>
                    </div>
                    <div className="flex ml-auto text-neutral-200 font-semibold h-fit gap-40">
                        <div className="text-center">
                            <h2 className="text-lg mt-5">Uploads</h2>
                            <p className="text-green-300">3</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-lg mt-5">Downloads</h2>
                            <p className="text-green-300">4</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-lg mt-5">Booksmarks</h2>
                            <p className="text-green-300">12</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex ms-16 mt-10 mb-5 text-neutral-200">
                        <button className="flex text-xl font-bold px-5 py-2 ml-0 bg-slate-800 rounded-md hover:bg-emerald-900 hover:duration-300">
                            Uploads  <PiUploadSimpleBold className="ml-3 mt-1" />
                        </button>
                        <button className="flex text-xl font-bold px-5 py-2 ml-5 bg-slate-800 rounded-md hover:bg-emerald-900 hover:duration-300">
                            Bookmarks  <MdBookmarks className="ml-3 mt-1" />
                        </button>
                    </div>
                    <hr className="mx-16 border-indigo-500 border-t-2" />
                    <div>
                        <Imagetab />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
