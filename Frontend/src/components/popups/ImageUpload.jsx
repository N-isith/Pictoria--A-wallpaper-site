import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { LuUpload } from "react-icons/lu";

export default function ImageUpload({ setcloseimgupload }) {

    useEffect(() => {
        // Add class to disable scrolling
        document.body.style.overflow = 'hidden';

        // Cleanup function to remove class
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const CloseImgUpload = () => {
        setcloseimgupload();
    };

    const handleClickOutside = (event) => {
        if (event.target.id === "imgUploadpopup") {
            setcloseimgupload();
        }
    };

    const handleInnerClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <Toaster />
            <div
                id="imgUploadpopup"
                onClick={handleClickOutside}
                className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed flex justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            >
                <div
                    onClick={handleInnerClick}
                    className="bg-slate-900 p-10 rounded-2xl mx-auto my-auto relative"
                >
                    <button
                        className="bg-slate-700 px-1.5 py-1.5 rounded-md text-emerald-500 font-bold hover:outline outline-1 absolute top-6 right-6"
                        onClick={CloseImgUpload}
                    >
                        <IoClose />
                    </button>

                    <h1 className="font-bold text-emerald-500 text-3xl flex justify-center -mt-6 mb-6">Image Upload</h1>
                    <form className="text-emerald-500 text-start text-lg">
                        <div className="mb-5">
                            <label htmlFor="tags" className="block mb-1.5">Add tags</label>
                            <input
                                id="tags"
                                type="text"
                                className="text-neutral-200 w-96 outline-0 bg-slate-900 border-b-2 h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            />
                        </div>
                        <div
                            className="h-40 mb-5 border-4 border-dashed rounded-lg border-emerald-600 text-center"
                            onClick={() => document.querySelector(".img-upload").click()}>
                            <label htmlFor="uploadimage" className="mt-24 mb-1.5 flex justify-center">Upload<LuUpload className="absolute -mt-16 size-16" /></label>
                            <input
                                hidden
                                accept="image/*"
                                id="uploadimage"
                                type="file"
                                className="img-upload text-neutral-200 w-96 outline-0 bg-slate-900 border-b-2 h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-slate-700 px-5 py-1.5 w-full mt-3 rounded-md text-emerald-500 font-bold hover:outline outline-1"
                        >
                            Upload Your Image
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
