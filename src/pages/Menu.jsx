import React from "react";
import { Link } from "react-router-dom";
import { tiger, octopus, crossedFlags, account, branches, koi, dragon2 } from '../assets'
import { useSelector } from "react-redux";

const btn_class =
  "m-5 bg-[#FF851B] w-[300px] h-20 rounded-full hover:scale-110 transition-all text-black text-3xl text-center flex items-center justify-center";

const navLinks = [
  {href: "/learning", title: "Start Learning"},
  {href: "/account", title: "Account"},
  {href: "/leaderboard", title: "Leaderboard"},
  {href: "/information", title: "Information"},
]
  const Menu = () => {
  const isLoggedIn = Boolean(useSelector((state) => state.token));
  return (
    <>
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0 ">
      <div className="false md:w-[60%] w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-12 flex flex-col items-center justify-center fixed bg-[rgba(13,18,29,0.96)]">
      <div className="flex flex-col h-full w-full overflow-scroll no-scrollbar">
        <div className="w-full text-center ">
          <h1 className="sm:px-40 text-[#FF851B] sm:text-[4rem] text-[2rem]">Menu</h1>
          <hr className="bg-[#ff851B]" />
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
        <p className="sm:text-[2.5rem] text-[1.3rem]">こんにちは!</p>
        {navLinks.map((navLink, index) => (
          <Link key={index} to={navLink.href} className={`${btn_class}`}>
            {navLink.title}
          </Link>
        ))}
        </div>
        <div className={`w-full text-center text-3xl mt-5 ${isLoggedIn && "hidden"}`}>
          <p className="flower">
            Create an account to track your progress, level up and review
            learned words!
          </p>
        </div>
        
      </div>

      </div>
    </div>
    </>
  );
};

export default Menu;
