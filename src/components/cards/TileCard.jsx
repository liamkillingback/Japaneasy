import React, { useState, useEffect } from "react";
import { sound } from "../../assets";
import { toRomaji } from "wanakana";

const TileCard = (data) => {
  console.log(data);

  // Configuring and editing format of japanese content and text to speech
  let japanese_elements = data.props;
  japanese_elements[4] = japanese_elements[4]
    .replace("<b>", "")
    .replace("</b>", "");
  let voices = speechSynthesis.getVoices();

  let msg = new SpeechSynthesisUtterance();
  msg.voice = speechSynthesis.getVoices().filter(function (voice) {
    return voice.name === "Google 日本語";
  })[0];
  msg.volume = 1;
  msg.rate = 0.7;
  msg.pitch = 1;
  msg.lang = "ja-JP";
  msg.text = japanese_elements[1];


  const handleSpeak = () => {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  };

  return (
    <div className="sm:w-[80%] w-full relative text-center sm:h-[90%] h-full flex flex-col rounded-3xl  sm:text-[2.5rem] text-[1.5rem]  bg-[rgba(26,36,58,0.96)] ">
      <div className="flex flex-row absolute items-center top-5">
        <div className="rounded-2xl  bg-[#FF851B] m-5"></div>
        <img
          src={sound}
          alt="404"
          className="sm:w-20 sm:h-16 w-12 cursor-pointer transition-all hover:scale-105"
          onClick={handleSpeak}
        />
      </div>
      <div className="rounded-3xl  p-2 pt-16">
        <div className="font-bold text-[#FF851B]">{japanese_elements[2]}</div>
      </div>
      <hr />
      {/* input area */}
      <form
        foc="true"
        className="flex flex-row justify-center items-center pb-20 overflow-scroll no-scrollbar "
      >
        <input
          type="text"
          className="text-center bg-[rgba(0,0,0,0)] border-b-2 mt-10 w-[350px] rounded-2xl sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105"
        />
        <button className="rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105 text-black">
          Enter
        </button>
      </form>

      {/* bottom buttons */}
      <div className="absolute bottom-1 right-2 text-black">
        <button
          className={`rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl mx-1 mb-1  p-2 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
        >
          Add to Favourites
        </button>
        <button
          onClick={() => {
            data.setWord((data.word + 1) % 2);
            setSentence(false);
          }}
          className={` rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TileCard;
