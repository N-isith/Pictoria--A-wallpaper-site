import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { MdBookmarks } from "react-icons/md";
import { PiUploadSimpleBold } from "react-icons/pi";
import Imagetab from "./ImageTab";
import axios from "axios";

function ImagetabUpload() {
    return (
        <div className="grid grid-cols-4 gap-10 mx-16 mt-5">
            <div>
                <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
            </div>
        </div>
    );
}

function ImagetabBookmark() {
    return (
        <div className="grid grid-cols-4 gap-10 mx-16 mt-5">
            <div>
                <img className="rounded-md" src="https://www.bhmpics.com/downloads/Nature-wallpapers-(30-+-Background-Pictures)/14.90a5e1fea34ee9f83e83a86c8ff65de5.jpg" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://www.bhmpics.com/downloads/Nature-wallpapers-(30-+-Background-Pictures)/14.90a5e1fea34ee9f83e83a86c8ff65de5.jpg" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://www.bhmpics.com/downloads/Nature-wallpapers-(30-+-Background-Pictures)/14.90a5e1fea34ee9f83e83a86c8ff65de5.jpg" alt="img1" />
            </div>
            <div>
                <img className="rounded-md" src="https://www.bhmpics.com/downloads/Nature-wallpapers-(30-+-Background-Pictures)/14.90a5e1fea34ee9f83e83a86c8ff65de5.jpg" alt="img1" />
            </div>
        </div>
    );
}

export default function ImagerProfile() {
    const [activeTab, setActiveTab] = useState('upload');

    const onUploadClick = () => {
        setActiveTab('upload');
    };

    const onBookmarkClick = () => {
        setActiveTab('bookmark');
    };


    const [userData, setUserdata] = useState([]);

    useEffect(() => {
        function ReadUser() {
            axios.get("http://localhost:8000/imager/profiledata")
                .then((res) => {
                    setUserdata(res.data);
                })
                .catch((err) => {
                    console.error(err);
                    alert("Use data fetching failed.");
                })
        }
        ReadUser();
    }, [])

    return (
        <>
            <div className="py-4 text-center text-emerald-800 font-extrabold text-5xl">
                <a href="">
                    <h1>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</h1>
                </a>
            </div>
            <div>
                <div className="bg-slate-800 flex justify-start mx-16 p-5 pe-10 rounded-md">
                    <img
                        src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
                        alt="profile image"
                        className="w-32 h-32"
                    />

                    {userData.map((user) => (
                        <div key={user._id} className="">
                            <h2 className="text-neutral-200 text-3xl font-bold mt-5 ml-4">Nisitha Lakshan</h2>
                            <h4 className="text-green-300 text-lg ps-0.5 mt-1 ml-4">{user.username}</h4>
                        </div>
                    ))}
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
                            <h2 className="text-lg mt-5">Bookmarks</h2>
                            <p className="text-green-300">12</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex ms-16 mt-10 mb-5 text-neutral-200">
                        <button
                            className={`flex text-xl font-bold px-5 py-2 ml-0 bg-slate-800 rounded-md hover:bg-emerald-900 hover:duration-300 ${activeTab === 'upload' && 'bg-emerald-900'}`}
                            onClick={onUploadClick}
                        >
                            Uploads <PiUploadSimpleBold className="ml-3 mt-1" />
                        </button>
                        <button
                            className={`flex text-xl font-bold px-5 py-2 ml-5 bg-slate-800 rounded-md hover:bg-emerald-900 hover:duration-300 ${activeTab === 'bookmark' && 'bg-emerald-900'}`}
                            onClick={onBookmarkClick}
                        >
                            Bookmarks <MdBookmarks className="ml-3 mt-1" />
                        </button>
                    </div>
                    <hr className="mx-16 border-indigo-500 border-t-2" />
                    <div className={`transition-opacity duration-700 ${activeTab === 'upload' ? 'opacity-100' : 'opacity-0'}`}>
                        {activeTab === 'upload' && <ImagetabUpload />}
                    </div>
                    <div className={`transition-opacity duration-700 ${activeTab === 'bookmark' ? 'opacity-100' : 'opacity-0'}`}>
                        {activeTab === 'bookmark' && <ImagetabBookmark />}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
