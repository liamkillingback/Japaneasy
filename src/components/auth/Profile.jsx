import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

const pStyle = "text-[2rem] flower";


const Profile = () => {
  const [exp, setExp] = useState("w-[0%]");
  const user = useSelector((state) => state.user);
  const userLevel = parseInt(user.points / 60) + 1;
  let xp = parseInt(user.points % 60 / 60 * 100);

  useEffect(() => {
    setExp(`w-[${xp}%]`);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-scroll no-scrollbar">
      <h1 className="text-[#FF851B] md:text-[4rem] text-[2rem]">
        {user.username}
      </h1>
      <div className="flex flex-row mx-10  h-10 items-center">
        <div className="w-[300px] sm:w-[800px] border-[3px] border-[#FF851B] mr-3 rounded-full h-10 lg:block hidden">
          <div className={`rounded-full bg-green-500 h-full`} style={{ width: `${xp}%`}}> </div>
        </div>
        <p className="text-[#FF851B] text-5xl lg:block hidden">{userLevel}</p>
      </div>
      <div className="w-full flex flex-wrap sm:gap-10 items-center justify-center">
        <p className={pStyle}>Learned words: {user.learnedWords.length}</p>
        <p className={pStyle}>Hard words: {user.hardWords.length}</p>
      </div>
    </div>
  );
};



export default Profile;
