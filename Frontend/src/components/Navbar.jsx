import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Navbar() {
  const navigate = useNavigate();
  const [showPopupsignup, setShowPopupSignup] = useState(false);
  const [showPopupsignin, setShowPopupSignin] = useState(false);

  const slowShowSignuppopup = (event) => {
    if (event) event.preventDefault();
    setShowPopupSignup(!showPopupsignup);
  };

  const slowShowSigninpopup = (event) => {
    if (event) event.preventDefault();
    setShowPopupSignin(!showPopupsignin);
  };

  return (
    <div>
      <div>
        <div className="py-4 text-center text-emerald-700 font-extrabold text-5xl">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</a>
        </div>
        <div>
          <ul className="flex justify-center gap-7 font-bold text-emerald-700">
            <li className="bg-neutral-300 py-3 px-10 rounded-3xl hover:bg-emerald-700 hover:text-neutral-100 hover:duration-300">
              <a href="">Explore</a>
            </li>
            <li className="rounded-3xl">
              <div className="flex relative">
                <input type="search" className="bg-neutral-300 rounded-3xl py-3 ps-5 focus:outline focus:outline-emerald-700" placeholder="Search images..." style={{ width: '9.53in', outlineWidth: '4px' }} />
                <div className="right-6 self-center absolute">
                  <button><FaSearch className="text-3xl pt-1 hover:scale-125 hover:duration-300" /></button>
                </div>
              </div>
            </li>
            <li className="bg-neutral-300 py-3 px-10 rounded-3xl hover:bg-emerald-700 hover:text-neutral-100 hover:duration-300">
              <a href="" onClick={slowShowSignuppopup}>Join Us</a>
              <div className={`transition-opacity duration-300 ${showPopupsignup ? 'opacity-100' : 'opacity-0'}`}>
                {showPopupsignup && <SignUp closePopup={slowShowSignuppopup} />}
              </div>
            </li>
            <li className="bg-emerald-700 py-3 px-10 rounded-3xl text-neutral-100">
              <a href="" onClick={slowShowSigninpopup}>Log In</a>
              <div className={`transition-opacity duration-300 ${showPopupsignin ? 'opacity-100' : 'opacity-0'}`}>
                {showPopupsignin && <SignIn closePopup={slowShowSigninpopup} />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
