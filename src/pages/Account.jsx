import React, { useEffect, useState } from "react";
import { Profile } from "../components/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Account = () => {
  const token = useSelector((state) => state.token);

  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div className="w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center justify-center bg-[rgba(13,18,29,0.96)]">
        {token ? (
          <Profile />
        ) : (
          <div className="branches w-full h-full flex flex-col text-[#FF851B] px-10 text-center ">
            <h1 className="sm:text-[4rem] text-[2rem]">
              You are not logged in!
            </h1>

            <div className="flex flex-col text-center justify-center items-center">
              <h1 className="sm:text-[2.5rem] text-[1.5rem] mb-10 text-white mt-10">
                Log in or create your account here:
              </h1>
              <Link
                to={"/login"}
                className="p-3 bg-[#FF851B] text-black rounded-2xl text-[2rem] mt-5 sm:w-1/2 hover:scale-105 transition-all"
              >
                Login/Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
