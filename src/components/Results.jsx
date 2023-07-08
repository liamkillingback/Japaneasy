import React from "react";
import { correct_img, wrong_img } from "../assets";
import { useNavigate } from "react-router-dom";

const Results = (data) => {
    let navigate = useNavigate();
  console.log(data);
  let correctWords = data.learnedWords;
  let wrongWords = data.wrongWords;

  return (
    <div className=" w-full relative text-center  h-full flex flex-col rounded-3xl  md:text-[2rem] text-[1.5rem]  bg-[rgba(26,36,58,0.96)] ">
      <div className="rounded-3xl  p-2 ">
        <div className="text-[#FF851B] text-5xl">Score: {data.score}</div>
      </div>
      <hr />
      <div className="flex flex-col overflow-scroll no-scrollbar flower pb-40">
        {wrongWords.map((word, index) => (
          <div
            key={index}
            className="text-left items-center border-b m-2 flex flex-row"
          >
            <div>
              {word[2]}, {word[3]}
            </div>
            <img src={wrong_img} alt="" className="h-10 ml-10" />
          </div>
        ))}
        {correctWords.map((word, index) => (
          <div
            key={index}
            className="text-left items-center border-b m-2 flex flex-row"
          >
            <div>
              {word[2]}, {word[3]}
            </div>
            <img src={correct_img} alt="" className="h-10 ml-10" />
          </div>
        ))}
        <div className="flower mt-10">
          Correct and incorrect words will be added to your profile for revision
        </div>
      </div>
      <div className="absolute bottom-1 right-2 text-black">
        <button
        onClick={() => navigate('/menu')}
          className={`rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl mx-1 mb-1  p-2 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
        >
          Menu
        </button>
        
      </div>
    </div>
  );
};

export default Results;
