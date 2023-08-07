import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { racoon, mask, flower, sushi, egg, rice, waves } from "../../assets";
import { setLogout } from "../../state";
import { useDispatch } from "react-redux";

const pStyle = "text-[2rem] flower";

const btn_class =
  "bg-[#FF851B] md:w-[300px] md:h-[300px] w-[150px] h-[150px] h-20 rounded-2xl hover:scale-105 transition-all md:text-[2.5rem] text-[1.1rem] text-black relative text-3xl text-center flex items-center justify-center";

const Profile = () => {
  const [exp, setExp] = useState("w-[0%]");
  const user = useSelector((state) => state.user);
  console.log(user)
  const userLevel = parseInt(user?.points / 60) + 1;
  let xp = parseInt(((user?.points % 60) / 60) * 100);
  const dispatch = useDispatch();

  useEffect(() => {
    setExp(`w-[${xp}%]`);
  }, []);

  return (
    <div className="flex relative flex-col items-center w-full h-full overflow-y-scroll no-scrollbar justify-evenly branches pb-5">
      <button
      onClick={() => dispatch(setLogout())}
        className={`text-black rounded-2xl absolute sm:top-5 sm:right-5 top-0 right-0 z-10 bg-[#FF851B] m-2 sm:text-3xl sm:w-auto text-[1.3rem] p-2 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
      >
        Logout
      </button>
      <h1 className="text-[#FF851B] md:text-[4rem] text-[2rem] sm:relative absolute top-0 md:left-10 md:mt-10 mr-5 sm:mr-0">
        {user?.username}
      </h1>
      <div className="flex flex-row mx-10  h-10 items-center justify-center mt-24 sm:mt-0">
        <div className="w-[280px] lg:w-[800px] border-[3px] border-[#FF851B] mr-3 rounded-full h-10">
          <div
            className={`rounded-full bg-green-500 h-full`}
            style={{ width: `${xp}%` }}
          >
          </div>
        </div>
        <p className="text-[#FF851B] text-5xl">{userLevel}</p>
      </div>
      <div className="w-full flex flex-wrap sm:gap-10 gap-5 items-center justify-center">
        <p className={pStyle}>Learned words: {user?.learnedWords?.length}</p>
        <p className={pStyle}>Hard words: {user?.hardWords?.length}</p>
        <p className={pStyle}>Score: {user?.points}</p>
      </div>
      <div className="flex flex-wrap sm:gap-8 gap-2 justify-center">
        <Link className={`${btn_class}`}>
          <div className="absolute p-2 flex h-full w-full justify-center">
            <p className="absolute  w-full text-center rounded-2xl top-0 px-2">
              Review hard
            </p>
            <img
              className="md:h-[200px] h-[100px] absolute bottom-2"
              src={egg}
              alt=""
            />
          </div>
        </Link>
        <Link className={`${btn_class}`}>
          <div className="absolute p-2 flex h-full w-full justify-center">
            <p className="absolute  w-full text-center rounded-2xl top-0 px-2">
              Review learned
            </p>
            <img
              className="md:h-[200px] h-[100px] absolute bottom-2"
              src={sushi}
              alt=""
            />
          </div>
        </Link>
        <Link className={`${btn_class}`}>
          <div className="absolute p-2 flex h-full w-full justify-center">
            <p className="absolute  w-full text-center rounded-2xl top-0 px-2">
              View words
            </p>
            <img
              className="md:h-[200px] h-[100px] absolute bottom-2"
              src={rice}
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
