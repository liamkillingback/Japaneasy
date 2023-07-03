import React from "react";
import { Link } from "react-router-dom";

const btn_class =
  "m-5 bg-[#FF851B] w-[300px] h-20 rounded-full hover:scale-110 transition-all text-black text-3xl text-center flex items-center justify-center";

const Menu = () => {
  return (
    <>
    <div className="flex flex-col h-full w-full overflow-scroll no-scrollbar">
      <div className="w-full text-center ">
        <h1 className="sm:px-40 text-[#FF851B] text-[4rem]">Menu</h1>
        <hr className="border-[#FF851B]" />
      </div>
      <div className="flex flex-col w-full items-center">
       <p className="text-5xl m-2">こんにちは!</p> 
        <Link to={'/learning'} className={`${btn_class}`}>Start Learning</Link>
        <Link to={'/account'} className={`${btn_class}`}>Account</Link>
        <Link to={'/leaderboard'} className={`${btn_class}`}>Leaderboard</Link>
        <Link to={'/information'} className={`${btn_class}`}>information</Link>
      </div>
      <div className="w-full text-center text-3xl">
       <p className="flower">Create an account to track your progress, level up and review learned words!</p> 
      </div>

    </div>
    </>
  );
};

export default Menu;
