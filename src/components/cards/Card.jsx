import React, { useState, useEffect } from "react";
import { sound } from "../../assets";
import { toRomaji } from "wanakana";

const Card = (data) => {
  const [sentence, setSentence] = useState(false);
  let length = data.listLength
  console.log(data)
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
  msg.addEventListener("error", (error) => console.error(error));
  msg.volume = 1;
  msg.rate = 0.7;
  msg.pitch = 1;
  msg.lang = "ja-JP";
  msg.text = japanese_elements[1];
  let romaji = toRomaji(japanese_elements[2]);
  let sentence_romaji = toRomaji(japanese_elements[5]);

  //change between speaking word or speaking sentence when sentence btn pressed.
  useEffect(() => {
    !sentence
      ? (msg.text = japanese_elements[1])
      : (msg.text = japanese_elements[4]);
  }, [sentence]);

  //Text to speach functions
  const handleSpeak = () => {
    msg.rate = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  };
  const handleSpeakSlower = () => {
    msg.rate = 0.7;
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  };

  return (
    <div className="w-full relative text-center h-full flex flex-col rounded-3xl  sm:text-[2.5rem] text-[1.5rem]  bg-[rgba(26,36,58,0.96)] ">
      <div className="flex flex-row absolute items-center">
        <div
          className={`text-black rounded-2xl z-10 bg-[#FF851B] m-2 sm:text-3xl sm:w-auto text-[1.3rem] p-2 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
          onClick={() => {
            setSentence(!sentence);
          }}
        >
          Sentence
        </div>
        <div className="rounded-2xl  bg-[#FF851B] m-1"></div>
        <img
          src={sound}
          alt="404"
          className="lg:w-20 lg:h-16 w-12 cursor-pointer transition-all hover:scale-105"
          onClick={handleSpeak}
        />
        <div>
          <p className="absolute top-0 right-[-25px] text-[20px] flower">1/2</p>
          <img
            src={sound}
            alt="404"
            className="lg:w-20 lg:h-16 ml-10 w-12 cursor-pointer transition-all hover:scale-105"
            onClick={handleSpeakSlower}
          />
        </div>
      </div>
      <div className="h-full flex flex-col pb-10">
        <div className="rounded-3xl  p-2 pt-16">
          <div className="text-[#FF851B]">{japanese_elements[3]}</div>
          <div className="font-bold text-[#FF851B]">{japanese_elements[2]}</div>
        </div>
        <hr />
        <div>{romaji}</div>
        <div
          className={`${
            !sentence && "hidden"
          } flex flex-col pb-20 overflow-scroll no-scrollbar`}
        >
          <div className={`text-[#FF851B]`}>{japanese_elements[5]}</div>
          <div className={``}>{sentence_romaji}</div>
          <div className={`text-[#FF851B]`}>{japanese_elements[6]}</div>
          <div className={`text-[#ff361b]`}>{japanese_elements[4]}</div>
        </div>
      </div>
      <div className="absolute bottom-1 right-2 text-black">
        <button
          onClick={() => {
            data.startTest();
            data.setWord(0);
          }}
          className={`rounded-2xl bg-[#FF851B] sm:m-5 sm:text-3xl mx-1 mb-1  p-2 sm:p-4 cursor-pointer hover:text-[rgba(26,36,58,0.96)] transition-all hover:scale-105`}
        >
          Start Test
        </button>
        <button
          onClick={() => {
            data.setWord((data.word + 1) % length);
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

export default Card;
