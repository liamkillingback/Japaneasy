import React, { useState, useEffect } from "react";
import { sound } from "../../assets";
import { toRomaji } from "wanakana";
import { correct, wrong } from "../../assets";

const HiriganaToEnglish = (data) => {
  let length = data.listLength
  console.log(length)
  let winAudio = new Audio(correct);
  let wrongAudio = new Audio(wrong);
  winAudio.volume = 0.4;
  wrongAudio.volume = 0.3;
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  let japanese_elements = data.props;
  // Configuring and editing format of japanese content and text to speech
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
  const handleSubmit = async (e) => {
    let answer = japanese_elements[3].toLowerCase();
    e.preventDefault();
    let entered_text = e.target[0].value.toLowerCase();
    // If user has typed nothing it is incorrect
    if (entered_text.length < 1) {
      wrongAudio.play();
      await delay(1000);
      data.setWrongWords([...data.wrongWords, japanese_elements]);
    }
    // If user has the correct answer
    else if (answer.includes(entered_text)) {
      winAudio.play();
      await delay(1000);
      data.setLearnedWords([...data.learnedWords, japanese_elements]);
      data.setScore(data.score + 1);
    } else {
      wrongAudio.play();
      await delay(1000);
      data.setWrongWords([...data.wrongWords, japanese_elements]);
    }
    // If it is the last word finish the test
    if (data.word + 1 === 5) {
      data.finishTest();
    }
    //otherwise go to next word
    else {
      data.setWord((data.word + 1) % 5);
    }
    //clear text input
    e.target[0].value = "";
  };

  return (
    <div className="w-full relative text-center h-full flex flex-col rounded-3xl  sm:text-[2.5rem] text-[1.5rem]  bg-[rgba(26,36,58,0.96)] ">
      <div
        className={`w-[97%] m-3  border-green-600 border h-5 flex flex-row rounded-xl`}
      >
        {[...Array(data.word + 1)].map((e, i) => (
          <div
            key={i}
            className="bg-[#1d740c] h-full w-1/5 text-center rounded-xl"
          ></div>
        ))}
      </div>
      <div className="flex flex-row absolute items-center top-10">
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
        onSubmit={(e) => handleSubmit(e)}
        foc="true"
        className="flex sm:flex-row flex-col justify-center items-center pb-20 overflow-scroll no-scrollbar "
      >
        <input
          type="text"
          className="text-center bg-[rgba(0,0,0,0)] border-b-2 mt-10 sm:w-[350px] rounded-2xl sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer transition-all hover:scale-105"
        />
        <button
          type="submit"
          className="rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105 text-black"
        >
          Enter
        </button>
      </form>

      {/* bottom buttons */}
      <div className="absolute bottom-1 right-2 text-black">
        <button
          onClick={() => {
            {
              data.setWrongWords([...data.wrongWords, japanese_elements]);
              (data.word + 1) % length !== 0 && data.setWord((data.word + 1) % length);
              wrongAudio.play();
            }
          }}
          className={`rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl p-2 mx-1 mb-1 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default HiriganaToEnglish;
