import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [intro, setIntro] = useState(true);
  const [word, setWord] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,1)
  }, [])
  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div
        className={`
          
         w-[90%] h-[75%] p-1 sm:mt-24 mt-28 rounded-xl flex flex-col items-center fixed text-[#FF851B] bg-[rgba(13,18,29,0.88)] overflow-y-scroll no-scrollbar sm:mb-0 mb-20`}
      >
        <h1 className="sm:text-[4rem] text-[1.5rem] rounded-full p-5 text-center">
          Welcome to Japanezy!
        </h1>
        <h2 className="sm:text-[2rem] text-[1.3rem] flower text-white text-center float-left md:px-[10%]">
          Enhance your Japanese language skills by focusing on the most
          frequently utilized words in Japan. Japanezy offers you an
          opportunity to learn these essential components, which constitute
          approximately 70% of everyday language usage. You will be given words
          written in hiragana and katakana, with examples incorporating it into
          sentences. For more advanced learners, we
          provide the option to familiarize yourself with word and sentence
          representations as typically encountered in Japan, incorporating
          hiragana, kanji, and katakana.
        </h2>
        <button className="text-[2rem] text-black bg-[#5ce632] p-3 rounded-full m-10 hover:scale-105 transition-all" onClick={() => navigate('/menu')}>Get started!</button>
      </div>
    </div>
  );
};


export default Home