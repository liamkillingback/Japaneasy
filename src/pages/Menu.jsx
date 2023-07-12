import React from "react";
import { Link } from "react-router-dom";
import { tiger, octopus, crossedFlags, account, branches, koi, dragon2 } from '../assets'
import { useSelector } from "react-redux";

const btn_class =
  "bg-[#FF851B] sm:w-[300px] sm:h-[300px] w-[150px] h-[150px] h-20 rounded-2xl hover:scale-105 transition-all sm:text-[2.5rem] text-[1.1rem] text-black relative text-3xl text-center flex items-center justify-center";

const navLinks = [
  {href: "/learning", title: "Start Learning", img: koi},
  {href: "/account", title: "Account", img: account},
  {href: "/leaderboard", title: "Leaderboard", img: crossedFlags},
  {href: "/information", title: "Information", img: octopus},
]
  const Menu = () => {
  const isLoggedIn = Boolean(useSelector((state) => state.token));
  return (
    <>
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0 ">
      <div className="w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center justify-center bg-[rgba(13,18,29,0.96)]">
      <div className="flex flex-col h-full w-full overflow-scroll no-scrollbar">
        <div className="w-full text-center ">
          <h1 className="sm:px-40 text-[#FF851B] text-[4rem]">Menu</h1>
        </div>
        <div className="flex flex-wrap w-full gap-5 justify-center mt-5">
        {navLinks.map((navLink, index) => (
          <Link key={index} to={navLink.href} className={`${btn_class}`}>
            <div className="absolute p-2 flex h-full w-full justify-center">
              <p className="absolute  w-full text-center rounded-2xl top-0 px-2">{navLink.title}</p>
              <img className="sm:h-[200px] h-[100px] absolute bottom-2" src={navLink.img} alt="" />
            </div>
          </Link>
        ))}
        </div>
        <div className={`w-full text-center text-3xl mt-5 ${isLoggedIn && "hidden"}`}>
          <p className="flower">
            Create an account to track your progress, level up and review
            learned words!
          </p>
        </div>
        <div className="h-[400px] overflow-hidden">
          <img src={dragon2} alt="" />
        </div>
        
      </div>

      </div>
    </div>
    </>
  );
};

export default Menu;
