import React, {useState} from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { RiChatUploadFill } from "react-icons/ri";
import { FaCameraRetro } from "react-icons/fa";
import ImageUpload from "./popups/ImageUpload.jsx";


function AboutImagetab() {
    return (
        <>
            <div className="grid grid-cols-2 gap-5 m-5">
                <div >
                    <img className="rounded-md h-64 w-48 -ml-5 mt-5" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                </div>
                <div>
                    <img className="rounded-md h-64 w-48 -ml-5" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                </div>
                <div >
                    <img className="rounded-md h-64 w-48 -ml-5 mt-5" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                </div>
                <div>
                    <img className="rounded-md h-64 w-48 -ml-5" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                </div>
            </div>
        </>
    )
}

export default function AboutUs() {
    const [imgUpload, setimgupload] = useState(false);


    const HandleImgUpload = () => {
        setimgupload(!imgUpload)
    }
    return (
        <>
            <Navbar />
            <div className="bg-slate-800 bg-opacity-50 m-28 ml-5 mt-20 rounded-lg flex justify-between">
                <div className="text-neutral-200 w-3/5 p-20 pt-60">
                    <h1 className="text-emerald-600 font-bold text-5xl mb-3">Explore  your  desires...</h1>
                    <p className="w-3/4 mb-10 font-semibold text-lg">All type of images available in PICTORIA allow you to find any image you want</p>
                    <button className="bg-emerald-700 hover:bg-emerald-600 px-7 py-3 rounded-md text-xl font-semibold">Start Browsing</button>
                </div>
                <div className="w-2/5">
                    <AboutImagetab />
                </div>
            </div>

            <h1 className="text-neutral-200 text-4xl font-bold ml-10 mb-20">PICTORIA is what you have been searching for...</h1>

            <div className="bg-slate-800 bg-opacity-50 m-24 mt-5 mr-5 rounded-lg flex justify-between">
                <div className="m-20 text-neutral-200 w-3/5 p-20 pt-32">
                    <h1 className="text-emerald-600 text-5xl font-bold -mt-16 -ml-16 absolute">Show your talent to the World!...</h1>
                    <p className="text-lg text-neutral-200 font-semibold w-10/12 mt-10 mb-10">PICTORIA will allow you to upload images you have captured, created
                        and to share those with the world. <br />
                        And also you can categorize your images which will make people realize how versatile artist you are.
                    </p>
                    <button
                        className="bg-emerald-700 hover:bg-emerald-600 px-10 py-4 mb-1 rounded-md text-start text-2xl font-semibold"
                        onClick={HandleImgUpload}
                    >Upload your own images
                        <RiChatUploadFill className="relative ml-72 size-7 -mt-7" />
                        { imgUpload && <ImageUpload setcloseimgupload={ HandleImgUpload }/>}
                    </button>
                </div>
                <div className="w-2/5">
                    <AboutImagetab />
                </div>
            </div>
            <Footer />
        </>
    )
}
