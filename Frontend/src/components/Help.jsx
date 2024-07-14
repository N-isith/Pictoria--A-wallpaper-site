import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function Help() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [topic, setTopic] = useState();
    const [message, setMessage] = useState();

    const SubmitHelp = (e) => {
        e.preventDefault();

        const newHelp = {
            name,
            email,
            topic,
            message
        }

        axios.post("http://localhost:8000/help/add", newHelp)
            .then(() => {
                alert("Help created successfully")
            })
            .catch((err) => {
                alert("Help creation failed", err)
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className="bg-slate-800 bg-opacity-50 m-28 mx-20 rounded-lg flex justify-between">
                <div className="w-3/5">
                    <h1 className="text-5xl text-emerald-500 font-bold flex justify-center mt-5">Do you need Help!</h1>
                    <div className="p-10 mt-5">
                        <form action="" onSubmit={SubmitHelp}>
                            <div className="grid grid-cols-2 gap-x-10 mb-8">
                                <div>
                                    <label htmlFor="name" className="text-emerald-500 font-bold ">Name :</label>
                                    <input
                                        onChange={(h) => { setName(h.target.value) }}
                                        type="text"
                                        className="block w-full h-10 mt-3 outline-0 bg-slate-800 rounded  border-b-2 ps-3 text-white" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-emerald-500 font-bold ">Email :</label>
                                    <input
                                        onChange={(h) => { setEmail(h.target.value) }}
                                        type="text"
                                        className="block w-full h-10 mt-3 outline-0 bg-slate-800 rounded border-b-2 ps-3 text-white" />
                                </div>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="topic" className="text-emerald-500 font-bold ">Topic</label>
                                <input
                                    onChange={(h) => { setTopic(h.target.value) }}
                                    type="text"
                                    className="block w-full h-10 mt-3 outline-0 bg-slate-800 rounded border-b-2 ps-3 text-white" />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="message" className="text-emerald-500 font-bold ">Message :</label>
                                <textarea
                                    onChange={(h) => { setMessage(h.target.value) }}
                                    name="message"
                                    id="message"
                                    rows={8}
                                    className="block w-full mt-3 outline-0 bg-slate-800 rounded border-b-2 ps-3 pt-3 text-white" ></textarea>
                            </div>
                            <button type="submit" className="bg-slate-700 flex ml-auto px-10 py-1.5 mt-3 rounded-md text-lg text-emerald-500 font-bold hover:outline outline-1">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-2/5 p-5">
                    <div className=" text-neutral-200 mb-6">
                        <h1 className="text-xl font-bold mb-2">We're looking forward to hear from you!!</h1>
                        <p>Using this online form you can contact us to suggest new wallpapers for our collection or share ideas about how to improve this website. Thanks for all your suggestions and contributions!</p>
                    </div>
                    <img className="rounded-md " src="https://img.freepik.com/premium-vector/man-working-computer-with-man-his-head-word-no-it_1113671-162.jpg" alt="img1" />
                </div>
            </div>
            <Footer />
        </>
    )
}
