import React from "react";
import Footer from "./Footer";

export default function ImagerProfile() {
    return (
        <>
            <div className="py-4 text-center text-emerald-800 font-extrabold text-5xl">
                <a href=""><h1 onClick={() => { navigate('/') }}>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</h1></a>
            </div>
            <div>
                <div className="bg-slate-700 flex justify-start mx-4 p-5 pe-10 rounded-md">
                    <img 
                    src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" 
                    alt="profile image"
                    className="w-32 h-32"
                    />
                    <h3 className="text-neutral-200 text-2xl mt-5 ml-4">nisithalakshan94@gmail.com</h3>
                    <div className="bg-red-700 flex justify-items-end">
                        <div>
                            <h2>Uploads</h2>
                            <p>3</p>
                        </div>
                        <div>
                            <h2>Downloads</h2>
                            <p>4</p>
                        </div>
                        <div>
                            <h2>Booksmarks</h2>
                            <p>12</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}
