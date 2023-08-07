import React, { useState, useEffect } from "react";
import { sound } from "../../assets";
import { toRomaji } from "wanakana";
import { correct, wrong } from "../../assets";
import axios from "axios";

const GuessBox = ({ word }) => {
  return (
    <div className=" cursor-pointer w-[40%] h-[45%] rounded-2xl bg-[rgba(76,122,175,0.22)] mt-5 flex items-center justify-center hover:bg-[rgba(81,181,228,0.3)]">
      <p className="text-[1.5rem]">{word[2]}</p>
    </div>
  );
};

const GuessCard = (data) => {
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(true);
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
  
  //function to shuffle wordList
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //Gets words from server
  const getWords = async () => {
    try {
      // const response = await axios.get("https://japanezy.onrender.com/get/randomxWords")
      const response = await axios.get(
        "http://localhost:8080/get/randomxWords"
      );
      let words = response.data.records.slice(1)
      let newWordList = [...words, japanese_elements]
      shuffle(newWordList)
      setWordList(newWordList);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };


  useEffect(() => {
    getWords();
  }, []);

  const handleSpeak = () => {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  };
  const handleSubmit = async (e) => {
    let answer = japanese_elements[3].toLowerCase();
    e.preventDefault();
    console.log(e)

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
        className="flex sm:flex-row h-full flex-col justify-center items-center pb-20 overflow-scroll no-scrollbar "
      >
        <div className="w-full flex h-full flex-wrap gap-3 items-center justify-center">
          {wordList.slice(1).map((word, index) => (
            <GuessBox key={index} word={word}/>
          ))}
        </div>
      </form>

      {/* bottom buttons */}
      <div className="absolute bottom-1 right-2 text-black">
        <button
          onClick={() => {
            {
              data.setWrongWords([...data.wrongWords, japanese_elements]);
              (data.word + 1) % 5 !== 0 && data.setWord((data.word + 1) % 5);
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

export default GuessCard;
